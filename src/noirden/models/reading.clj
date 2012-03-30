(ns noirden.models.reading
  (:use somnium.congomongo))

(def db
  (make-connection
   :env { :host "127.0.0.1" :port 3001 } ))

(defn latest-air-readings [n]
  (let [total-readings  (with-mongo db (fetch-count "air"))]
    (map #(select-keys % [:time :ctemp :rhumidity])
         (with-mongo db (fetch "air")))))
         ;;         (with-mongo db (fetch "air" :skip (- total-readings n))))))


