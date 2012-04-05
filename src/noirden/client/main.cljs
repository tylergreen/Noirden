(ns noirden.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append text delegate data inner]])
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

(defpartial info-box [info]
  [:p info]
  )

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
        ]
    (text text-div "foo")
    (new js/Dygraph
         graph-div
         (to-dygraph-array data)
         (clj->js {:title title }))
  )
)

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

;; (new js/Dygraph
;;      $test
;;      (array
;;       (array (new js/Date (apply str "2012-04-04T00:03")) 30)
;;       (array (new js/Date "2012-04-04T00:09") 10)
;;       )
;;      )
