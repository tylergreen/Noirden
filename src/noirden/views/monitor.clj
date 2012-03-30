(ns noirden.views.monitor
  (:require [noirden.views.common :as common]
            [noirden.models.reading :as reading]
            )
  (:use
   [noir.core :only [defpage]]
   [clojure.data.json :only [json-str]]
   [noir.fetch.remotes :only [defremote]]
        ))

;; try to send these amount of data over network
;; did it this way bc select-keys returns unsorted hash-map :-(
;; needs test
(defremote latest-air-readings [n]
  (map #(map (fn [attr] (attr %)) [:time :rhumidity :ctemp])
                (reading/latest-air-readings n)))

(defpage "/monitor" []
  (common/monitor-layout
   [:h1 "Environmental monitor"]
   [:div#temperature]
   [:div#humidity]
   ))
  



  