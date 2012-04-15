(ns noirden.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes]
            [clojure.string :as string]
            [jayq.util :as util]  )
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
    (map (fn [[time-string scalar]]
           (array (parse-date time-string) scalar))
         datapoints)))

(defpartial info-list [items]
  (apply (partial conj [:ul]) (map (fn [line] [:li (string/join " " line)]) items)))

(defn add-info-bar [{:keys [div-id data graph-range acceptable-range target-range]}]
  (let [graph-div (first ($ (str div-id "_graph")))
        text-div ($ (str div-id "_text"))
        [now current] (first data)
        [max-time max-reading] (apply (partial max-key second) data)
        [min-time min-reading] (apply (partial min-key second) data)
        ]
    (append text-div (info-list [ [ "current:" current ]
                                  ["max:" max-reading max-time ]
                                  ["min:" min-reading min-time] ]))
    (new js/Dygraph
         graph-div
         (to-dygraph-array data)
         (customize-graph {:graph-range graph-range
                           :acceptable-range acceptable-range
                           :target-range target-range}))))

(defn underlay-callback [color [low high]]
  (fn [canvas area g]
    (let [range (.xAxisRange g)
          top (.toDomYCoord g high)
          bottom (.toDomYCoord g low)
          left (.toDomXCoord g (first range)) ]
      (aset canvas "fillStyle" color)
      (.fillRect canvas left top (.-w area) (- bottom top)))
    )
  )

(defn customize-graph [{:keys [graph-range acceptable-range target-range]}]
  (let [options {:underlayCallback (fn [canvas area g]
                                     ((underlay-callback "rgba(255, 255, 0, 1.0)" acceptable-range) canvas area g)
                                     ((underlay-callback "rgba(0, 255, 0, 1.0)" target-range) canvas area g))
                 ;; :valueRange (util/clj->js graph-range)
                 }
        ]
    (util/clj->js options)
    ))
  


;; x,y coordinates of top left corner
;;canvas.fillRect(x,y, height, width )

;; this should be testable
;; make latest chooseable

;; factor out this one pass hubris
;; It reverses the array and makes everything more complicated.
;; Just use 2 maps
(fm/letrem [temps (latest-air-readings 6000 :ctemp)]
             (add-info-bar {:div-id "#temperature"
                            :data temps
                            :graph-range [5 40]
                            :acceptable-range [10 27]
                            :target-range [13 23]}))

(fm/letrem [hums (latest-air-readings 6000 :rhumidity)]
           (add-info-bar {:div-id "#humidity"
                          :data hums
                          :graph-range [5 95]
                          :acceptable-range [35 75]
                          :target-range [40 60] }))

(fm/letrem [water-readings (latest-water-readings 6000)]
             (add-info-bar {:div-id "#reservoir"
                            :data water-readings
                            :target-range [16 23]
                            :acceptable-range [13 27]
                            :graph-range [10 30]
                            }))




