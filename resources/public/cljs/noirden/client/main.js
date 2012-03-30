goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
noirden.client.main.$temperature = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#temperature"));
noirden.client.main.$humidity = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#humidity"));
noirden.client.main.to_dygraph_array = (function to_dygraph_array(datapoints){
return cljs.core.to_array.call(null,cljs.core.map.call(null,(function (p__263342){
var vec__263343__263344 = p__263342;
var time_string__263345 = cljs.core.nth.call(null,vec__263343__263344,0,null);
var scalar__263346 = cljs.core.nth.call(null,vec__263343__263344,1,null);

return cljs.core.array.call(null,(new Date(time_string__263345)),scalar__263346);
}),datapoints));
});
/**
* makes a javascript map from a clojure one
*/
noirden.client.main.clj__GT_js = (function clj__GT_js(cljmap){
var out__263347 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__263341_SHARP_){
return (out__263347[cljs.core.name.call(null,cljs.core.first.call(null,p1__263341_SHARP_))] = cljs.core.second.call(null,p1__263341_SHARP_));
}),cljmap));
return out__263347;
});
fetch.remotes.remote_callback.call(null,"latest-air-readings",cljs.core.Vector.fromArray([0]),(function (table){
var vec__263348__263360 = cljs.core.reduce.call(null,(function (p__263349,p__263350){
var vec__263351__263353 = p__263349;
var ts__263354 = cljs.core.nth.call(null,vec__263351__263353,0,null);
var hs__263355 = cljs.core.nth.call(null,vec__263351__263353,1,null);
var vec__263352__263356 = p__263350;
var time__263357 = cljs.core.nth.call(null,vec__263352__263356,0,null);
var temp__263358 = cljs.core.nth.call(null,vec__263352__263356,1,null);
var hum__263359 = cljs.core.nth.call(null,vec__263352__263356,2,null);

return cljs.core.Vector.fromArray([cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__263357,temp__263358]),ts__263354),cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__263357,hum__263359]),hs__263355)]);
}),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])]),table);
var temps__263361 = cljs.core.nth.call(null,vec__263348__263360,0,null);
var hums__263362 = cljs.core.nth.call(null,vec__263348__263360,1,null);

(new Dygraph(noirden.client.main.$temperature,noirden.client.main.to_dygraph_array.call(null,temps__263361),noirden.client.main.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'title"],{"\uFDD0'title":"temp"}))));
return (new Dygraph(noirden.client.main.$humidity,noirden.client.main.to_dygraph_array.call(null,hums__263362)));
}));
