(ns noirden.views.monitor
  (:require [noirden.views.common :as common]
            [noirden.models.reading :as reading]
            )
  (:use
   [noir.core :only [defpage]]
   [clojure.data.json :only [json-str]]
        ))

(defpage "/environment-json" []
   (json-str (reading/latest-readings "air" 30)))

(defpage "/monitor" []
  (common/monitor-layout
   [:h1 "Environmental monitor"]
   [:div#monitor]
   [:div#panel]
   ))
  



  