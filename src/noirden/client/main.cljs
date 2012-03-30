(ns noirden.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append delegate data inner]])
  (:use-macros [crate.macros :only [defpartial]]
               [clojure.core :only [defn]])
  (:require-macros [fetch.macros :as fm])
  )

(def $temperature (first ($ :#temperature)))
(def $humidity (first ($ :#humidity)))


; test
(defn to-dygraph-array [datapoints]
  (to-array (map (fn [[time-string scalar]]
                   (array (new js/Date time-string) scalar))
                 datapoints)))

;; this should be testable
(fm/letrem [table (latest-air-readings 100)]
           (let [ [temps hums] (reduce
                                (fn [ [ts hs] [time temp hum] ]
                                  [ (cons [time temp] ts)
                                    (cons [time hum] hs) ])
                                [ [] [] ] table)
                  ]
             (.log js/console (pr-str (first temps)))
             (.log js/console (pr-str (new js/Date (first (first temps)))))
             (.log js/console "humidity")
             (.log js/console (pr-str 
                               (array (new js/Date (first (first hums))) (first (second scalar)))))
             (new js/Dygraph $temperature (to-dygraph-array temps)) 
             (new js/Dygraph $humidity (to-dygraph-array hums))))
