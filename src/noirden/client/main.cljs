(ns noirden.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append delegate data inner]])
  (:use-macros [crate.macros :only [defpartial]])
  (:require-macros [fetch.macros :as fm])
  )

(def $graph (first ($ :#monitor)))
(def $panel ($ :#panel))


(js/alert (new js/Date "2012-03-28T22:42"))
;;(new js/Dygraph $graph "2007-06-08,30\n2007-06-09,80")
;;(new js/Dygraph $graph (to-array (map to-array [ [1 10] [2 20] [3 80] [4 2] ] ))) 

(fm/letrem [table (get-air-table)]
           (let [result (to-array (map (fn [[date temp hum]]
                                         (array (new js/Date date)
                                                temp
                                                hum))
                                       table))]
             (.log js/console (pr-str (first result)))
             (new js/Dygraph $graph result)))





