(ns noirden.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append text delegate data inner fade-out]])
  (:use-macros [crate.macros :only [defpartial]]
               [clojure.core :only [defn]])
  (:require-macros [fetch.macros :as fm])
  )

;; for strings of format YYYY-MM-DDT12:30
(defn parse-date [time-string]
  (new js/Date (.parse js/Date (apply str (replace {\T \ } time-string)))))

; test
(defn to-dygraph-array [datapoints]
  (to-array 
   (reverse
    (map (fn [[time-string scalar]]
           (array (parse-date time-string) scalar))
        datapoints))))

;; from maurits.wordpress.com/2012/02/13/first-clojurescript-experiences-using-raphael/
(defn clj->js
  "makes a javascript map from a clojure one"
  [cljmap]
  (let [out (js-obj)]
    (doall (map #(aset out (name (first %)) (second %)) cljmap))
    out))

;; I think the selectors are not working
(defn add-info-bar [div-id data title]
  (let [graph-div (first ($ (str div-id "_graph")))
        text-div ($ (str div-id "_text"))
        [now current]  (last data)
        [max-time max-reading] (apply (partial max-key second) data)
        [min-time min-reading] (apply (partial min-key second) data)
        ]
    (.log js/console current)
    (text text-div (str "current: " current " max: " max-reading " min: " min-reading))
    (new js/Dygraph
         graph-div
         (to-dygraph-array data)
         (js* "{underlayCallback: function(canvas, area, g) {
              console.log(area.x);
              console.log(area.y);
              console.log(area.h);
              console.log(area.w);
              console.log(g.xAxisRange());
              console.log(g.yAxisRange());
             
              var range = g.xAxisRange();
              var top = g.toDomYCoord(26);
              var bottom = g.toDomYCoord(24);

     var left = g.toDomXCoord(range[0]);
              width = g.toDomXCoord(range[1]) - left;
              console.log(width)
              console.log(left)
              console.log(top)
              console.log(bottom)

              canvas.fillStyle = 'rgba(0, 255, 0, 1.0)';
              canvas.fillRect(left, top, area.w,  bottom - top);
            }}"
         )
    )
    )
  )

;; x,y coordinates of top left corner
;;canvas.fillRect(x,y, height, width )

;; this should be testable
;; make latest chooseable
(fm/letrem [table (latest-air-readings 0)]
           (let [ [temps hums] (reduce
                                (fn [ [ts hs] [time temp hum] ]
                                  [ (cons [time temp] ts)
                                    (cons [time hum] hs) ])
                                [ [] [] ] table)
                  ]
             (.log js/console "rpc")
             (add-info-bar "#temperature" temps "temperature celsius")
             (add-info-bar "#humidity" hums "relative humidity %")))


