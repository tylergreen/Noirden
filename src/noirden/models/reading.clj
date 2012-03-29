(ns noirden.models.reading
  (:use somnium.congomongo))

(def db
  (make-connection
   :env { :host "127.0.0.1" :port 3001 } ))

(defn latest-readings [collection n]
  (map #(dissoc % :_id) (with-mongo db (fetch collection :limit n))))


