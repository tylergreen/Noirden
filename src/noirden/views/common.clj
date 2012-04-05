(ns noirden.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css include-js html5]]))

(defpartial layout [& content]
  (html5
   [:head
    [:title "noirden"]
    (include-js
     "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
    (include-css "/css/reset.css")]
   [:body
    [:div#wrapper
     content]]))

(defpartial monitor-layout [& content]
  (html5
   [:head
    [:title "noirden sentinel"]
    (include-css "/css/reset.css")
    (include-css "/css/monitor.css")
    (include-js
     "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
    (include-js "/js/dygraph-combined.js")
    ]
   [:body
    content
    (include-js "/cljs/bootstrap.js")
    ]

   ))

