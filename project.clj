(defproject noirden "0.1.0-SNAPSHOT"
  :description "real time environmental monitoring web app"
  :plugins [[lein-cljsbuild "0.1.3"]]
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir "1.2.1"]
                 [congomongo "0.1.9-SNAPSHOT"]
                 [org.clojure/data.json "0.1.2"]
                 [jayq "0.1.0-alpha3"]
                 [crate "0.1.0-alpha3"]
                 [fetch "0.1.0-alpha2"]
                 ]
  :cljsbuild
  {:builds
   [{:source-path "src",
     :compiler
     {:output-dir "resources/public/cljs/",
      :output-to "resources/public/cljs/bootstrap.js",
      :optimizations :simple,
      :pretty-print true}}]}
  :main noirden.server)

