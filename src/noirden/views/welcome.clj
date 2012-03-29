(ns noirden.views.welcome
  (:require [noirden.views.common :as common]
            )
  (:use
   somnium.congomongo
   [noir.core :only [defpage]]
   [hiccup.core :only [html]]
        ))

(def db
  (make-connection
   :env { :host "127.0.0.1" :port 3001 } ))

(defn latest-readings [db n]
  (apply vector
         (concat
          [:ul]
          (reverse
           (map
           (fn [x]
             [:li 
              (map (fn [[k v]] (format "%s : %s " k v))
                   (dissoc x :_id))
              ])
           (with-mongo db (fetch "air" :limit n)))))))

(defpage "/welcome" []
         (common/layout
          [:p "Welcome to noirden"]))

(defpage "/environment" []
  (common/layout
   (latest-readings db 30)
   ;; (apply vector
   ;;        (concat [:ul ]
   ;;                (map (fn [x] [:li x]) (ns-map 'noirden.views.welcome)))
   ;;        )
   ;; )
  ))
    

