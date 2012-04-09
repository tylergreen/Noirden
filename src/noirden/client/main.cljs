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

(defn add-info-bar [div-id data title [low high]]
  (let [graph-div (first ($ (str div-id "_graph")))
        text-div ($ (str div-id "_text"))
        [now current]  (last data)
        [max-time max-reading] (apply (partial max-key second) data)
        [min-time min-reading] (apply (partial min-key second) data)
        ]
    (text text-div (str "current: " current " max: " max-reading " min: " min-reading))
    (new js/Dygraph
         graph-div
         (to-dygraph-array data)
         (customize-graph low high))))

(defn customize-graph [low high]
  (let [options (js-obj)
        callback (fn [canvas area g]
                   (let [range (.xAxisRange g)
                         top (.toDomYCoord g high)
                         bottom (.toDomYCoord g low)
                         left (.toDomXCoord g (first range)) ]
                     (aset canvas "fillStyle" "rgba(0, 255, 0, 1.0)")
                     (.fillRect canvas left top (.-w area) (- bottom top))))
        ]
    (aset options "underlayCallback" callback)
    options))
  
  


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
             (add-info-bar "#temperature" temps "temperature celsius" [21 27])
             (add-info-bar "#humidity" hums "relative humidity %" [35 60])))


