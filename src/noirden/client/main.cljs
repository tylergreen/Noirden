(ns noirden.client.main
  (:require [crate.core :as crate])
  (:use [jayq.core :only [$ append delegate data inner]])
  (:use-macros [crate.macros :only [defpartial]])
  )

(js/alert "Welcome to the system monitor!")

(def $graph (first ($ :#monitor)))
(def $panel ($ :#panel))

(new js/Dygraph $graph "2007-06-07,10\n2007-06-08,30\n2007-06-09,80")


