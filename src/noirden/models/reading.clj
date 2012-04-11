(ns noirden.models.reading
  (:use somnium.congomongo))

(def db
  (make-connection
   :env { :host "127.0.0.1" :port 3001 } ))

(defn latest-air-readings [n attr]
  (map #(select-keys % [:time :ctemp :rhumidity])
       (with-mongo db (fetch "air" :only [:time attr]))))

(defn latest-water-readings [n]
  (map #(select-keys % [:time :water_temp_celsius])
       (with-mongo db (fetch "water"))))

;; replace this with tailable cursors or something
;; this will probably become inefficient
(defn current [var]
   (last (with-mongo db (fetch "air" :only [:var]))))


