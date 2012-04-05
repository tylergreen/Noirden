goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
noirden.client.main.parse_date = (function parse_date(time_string){
return (new Date(Date.parse(cljs.core.apply.call(null,cljs.core.str,cljs.core.replace.call(null,cljs.core.HashMap.fromArrays(["T"],[" "]),time_string)))));
});
noirden.client.main.to_dygraph_array = (function to_dygraph_array(datapoints){
return cljs.core.to_array.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p__199201){
var vec__199202__199203 = p__199201;
var time_string__199204 = cljs.core.nth.call(null,vec__199202__199203,0,null);
var scalar__199205 = cljs.core.nth.call(null,vec__199202__199203,1,null);

return cljs.core.array.call(null,noirden.client.main.parse_date.call(null,time_string__199204),scalar__199205);
}),datapoints)));
});
/**
* makes a javascript map from a clojure one
*/
noirden.client.main.clj__GT_js = (function clj__GT_js(cljmap){
var out__199206 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__199200_SHARP_){
return (out__199206[cljs.core.name.call(null,cljs.core.first.call(null,p1__199200_SHARP_))] = cljs.core.second.call(null,p1__199200_SHARP_));
}),cljmap));
return out__199206;
});
noirden.client.main.add_info_bar = (function add_info_bar(div_id,data,title){
var graph_div__199210 = cljs.core.first.call(null,jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_graph")));
var text_div__199211 = jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_text"));
var vec__199207__199212 = cljs.core.last.call(null,data);
var now__199213 = cljs.core.nth.call(null,vec__199207__199212,0,null);
var current__199214 = cljs.core.nth.call(null,vec__199207__199212,1,null);
var vec__199208__199215 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.max_key,cljs.core.second),data);
var max_time__199216 = cljs.core.nth.call(null,vec__199208__199215,0,null);
var max_reading__199217 = cljs.core.nth.call(null,vec__199208__199215,1,null);
var vec__199209__199218 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.min_key,cljs.core.second),data);
var min_time__199219 = cljs.core.nth.call(null,vec__199209__199218,0,null);
var min_reading__199220 = cljs.core.nth.call(null,vec__199209__199218,1,null);

console.log(current__199214);
jayq.core.text.call(null,text_div__199211,cljs.core.str.call(null,"current: ",current__199214," max: ",max_reading__199217," min: ",min_reading__199220));
return (new Dygraph(graph_div__199210,noirden.client.main.to_dygraph_array.call(null,data),noirden.client.main.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'title"],{"\uFDD0'title":title}))));
});
fetch.remotes.remote_callback.call(null,"latest-air-readings",cljs.core.Vector.fromArray([0]),(function (table){
var vec__199221__199233 = cljs.core.reduce.call(null,(function (p__199222,p__199223){
var vec__199224__199226 = p__199222;
var ts__199227 = cljs.core.nth.call(null,vec__199224__199226,0,null);
var hs__199228 = cljs.core.nth.call(null,vec__199224__199226,1,null);
var vec__199225__199229 = p__199223;
var time__199230 = cljs.core.nth.call(null,vec__199225__199229,0,null);
var temp__199231 = cljs.core.nth.call(null,vec__199225__199229,1,null);
var hum__199232 = cljs.core.nth.call(null,vec__199225__199229,2,null);

return cljs.core.Vector.fromArray([cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__199230,temp__199231]),ts__199227),cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__199230,hum__199232]),hs__199228)]);
}),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])]),table);
var temps__199234 = cljs.core.nth.call(null,vec__199221__199233,0,null);
var hums__199235 = cljs.core.nth.call(null,vec__199221__199233,1,null);

console.log("rpc");
noirden.client.main.add_info_bar.call(null,"#temperature",temps__199234,"temperature celsius");
return noirden.client.main.add_info_bar.call(null,"#humidity",hums__199235,"relative humidity %");
}));
