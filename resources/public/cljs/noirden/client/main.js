goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
noirden.client.main.parse_date = (function parse_date(time_string){
return (new Date(Date.parse(cljs.core.apply.call(null,cljs.core.str,cljs.core.replace.call(null,cljs.core.HashMap.fromArrays(["T"],[" "]),time_string)))));
});
noirden.client.main.to_dygraph_array = (function to_dygraph_array(datapoints){
return cljs.core.to_array.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p__155340){
var vec__155341__155342 = p__155340;
var time_string__155343 = cljs.core.nth.call(null,vec__155341__155342,0,null);
var scalar__155344 = cljs.core.nth.call(null,vec__155341__155342,1,null);

return cljs.core.array.call(null,noirden.client.main.parse_date.call(null,time_string__155343),scalar__155344);
}),datapoints)));
});
var group__3117__auto____155346 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

noirden.client.main.info_box = (function info_box(info){
var elem__3118__auto____155347 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'p",info]));

elem__3118__auto____155347.setAttribute("crateGroup",group__3117__auto____155346);
return elem__3118__auto____155347;
});
noirden.client.main.info_box.prototype._crateGroup = group__3117__auto____155346;
/**
* makes a javascript map from a clojure one
*/
noirden.client.main.clj__GT_js = (function clj__GT_js(cljmap){
var out__155348 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__155345_SHARP_){
return (out__155348[cljs.core.name.call(null,cljs.core.first.call(null,p1__155345_SHARP_))] = cljs.core.second.call(null,p1__155345_SHARP_));
}),cljmap));
return out__155348;
});
noirden.client.main.add_info_bar = (function add_info_bar(div_id,data,title){
var graph_div__155349 = cljs.core.first.call(null,jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_graph")));
var text_div__155350 = jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_text"));

jayq.core.text.call(null,text_div__155350,"foo");
return (new Dygraph(graph_div__155349,noirden.client.main.to_dygraph_array.call(null,data),noirden.client.main.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'title"],{"\uFDD0'title":title}))));
});
fetch.remotes.remote_callback.call(null,"latest-air-readings",cljs.core.Vector.fromArray([0]),(function (table){
var vec__155351__155363 = cljs.core.reduce.call(null,(function (p__155352,p__155353){
var vec__155354__155356 = p__155352;
var ts__155357 = cljs.core.nth.call(null,vec__155354__155356,0,null);
var hs__155358 = cljs.core.nth.call(null,vec__155354__155356,1,null);
var vec__155355__155359 = p__155353;
var time__155360 = cljs.core.nth.call(null,vec__155355__155359,0,null);
var temp__155361 = cljs.core.nth.call(null,vec__155355__155359,1,null);
var hum__155362 = cljs.core.nth.call(null,vec__155355__155359,2,null);

return cljs.core.Vector.fromArray([cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__155360,temp__155361]),ts__155357),cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__155360,hum__155362]),hs__155358)]);
}),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])]),table);
var temps__155364 = cljs.core.nth.call(null,vec__155351__155363,0,null);
var hums__155365 = cljs.core.nth.call(null,vec__155351__155363,1,null);

console.log("rpc");
noirden.client.main.add_info_bar.call(null,"#temperature",temps__155364,"temperature celsius");
return noirden.client.main.add_info_bar.call(null,"#humidity",hums__155365,"relative humidity %");
}));
