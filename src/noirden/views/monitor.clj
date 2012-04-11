(ns noirden.views.monitor
  (:require [noirden.views.common :as common]
            [noirden.models.reading :as reading]
            )
  (:use
   [noir.core :only [defpage defpartial]]
   [clojure.data.json :only [json-str]]
   [noir.fetch.remotes :only [defremote]]
        ))

;; try to send these amount of data over network
;; did it this way bc select-keys returns unsorted hash-map :-(
;; needs test
(defremote latest-air-readings [n attr]
  (map #(map (fn [attr] (attr %)) [:time attr])
       (reading/latest-air-readings n attr)))

(defremote latest-water-readings [n]
  (map #(map (fn [attr] (attr %)) [:time :water_temp_celsius])
       (reading/latest-water-readings n)))

(defremote current-temp []
  (reading/current :ctemp))

(defremote current-rhumidity []
  (reading/current :rhumidity))

(defpage "/test" []
  (common/layout
   [:div {:id "foo" :class "bar"} "Hey Dere"]
   )
  )

(defpartial info-bar [name]
  [:div {:id name :class "info_bar"}
   [:div {:id (str name "_graph") :class "info_graph"} ]
   [:div {:id (str name "_text") :class "info_text"} "" ]
   ]
  )

(defpage "/monitor" []
  (common/monitor-layout
   [:h1 "Environmental monitor"]
   (info-bar "temperature")
   (info-bar "humidity")
   (info-bar "reservoir")
   ))
  



  