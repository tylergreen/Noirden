(ns noirden.views.welcome
  (:require [noirden.views.common :as common]
            )
  (:use
   [noir.core :only [defpage]]
   [hiccup.core :only [html]]
        ))

(defpage "/welcome" []
  (common/layout
   [:p "Welcome to noirden"]))

(defpage "/welcome2" []
  (common/layout
   [:p "Welcome to noirden"]))

    

