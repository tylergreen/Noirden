goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
noirden.client.main.$temperature = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#temperature"));
noirden.client.main.$humidity = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#humidity"));
noirden.client.main.parse_date = (function parse_date(time_string){
return (new Date(Date.parse(cljs.core.apply.call(null,cljs.core.str,cljs.core.replace.call(null,cljs.core.HashMap.fromArrays(["T"],[" "]),time_string)))));
});
noirden.client.main.to_dygraph_array = (function to_dygraph_array(datapoints){
return cljs.core.to_array.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p__73694){
var vec__73695__73696 = p__73694;
var time_string__73697 = cljs.core.nth.call(null,vec__73695__73696,0,null);
var scalar__73698 = cljs.core.nth.call(null,vec__73695__73696,1,null);

return cljs.core.array.call(null,noirden.client.main.parse_date.call(null,time_string__73697),scalar__73698);
}),datapoints)));
});
/**
* makes a javascript map from a clojure one
*/
noirden.client.main.clj__GT_js = (function clj__GT_js(cljmap){
var out__73699 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__73693_SHARP_){
return (out__73699[cljs.core.name.call(null,cljs.core.first.call(null,p1__73693_SHARP_))] = cljs.core.second.call(null,p1__73693_SHARP_));
}),cljmap));
return out__73699;
});
fetch.remotes.remote_callback.call(null,"latest-air-readings",cljs.core.Vector.fromArray([0]),(function (table){
var vec__73700__73712 = cljs.core.reduce.call(null,(function (p__73701,p__73702){
var vec__73703__73705 = p__73701;
var ts__73706 = cljs.core.nth.call(null,vec__73703__73705,0,null);
var hs__73707 = cljs.core.nth.call(null,vec__73703__73705,1,null);
var vec__73704__73708 = p__73702;
var time__73709 = cljs.core.nth.call(null,vec__73704__73708,0,null);
var temp__73710 = cljs.core.nth.call(null,vec__73704__73708,1,null);
var hum__73711 = cljs.core.nth.call(null,vec__73704__73708,2,null);

return cljs.core.Vector.fromArray([cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__73709,temp__73710]),ts__73706),cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__73709,hum__73711]),hs__73707)]);
}),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])]),table);
var temps__73713 = cljs.core.nth.call(null,vec__73700__73712,0,null);
var hums__73714 = cljs.core.nth.call(null,vec__73700__73712,1,null);

(new Dygraph(noirden.client.main.$temperature,noirden.client.main.to_dygraph_array.call(null,temps__73713),noirden.client.main.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'title"],{"\uFDD0'title":"temp"}))));
return (new Dygraph(noirden.client.main.$humidity,noirden.client.main.to_dygraph_array.call(null,hums__73714)));
}));
