(ns noirden.models.reading
  (:use somnium.congomongo))

(def db
  (make-connection
   :env { :host "127.0.0.1" :port 3001 } ))

(defn latest-air-readings [n]
  (map #(select-keys % [:time :ctemp :rhumidity])
       (with-mongo db (fetch "air"))))

;; replace this with tailable cursors or something
;; this will probably become inefficient
(defn current [var]
   (last (with-mongo db (fetch "air" :only [:var]))))


