(ns noirden.server
  (:require [noir.server :as server]
            [noir.fetch.remotes :as remotes]))

(server/load-views "src/noirden/views/")

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'noirden})))

