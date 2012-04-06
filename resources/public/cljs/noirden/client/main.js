goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
noirden.client.main.parse_date = (function parse_date(time_string){
return (new Date(Date.parse(cljs.core.apply.call(null,cljs.core.str,cljs.core.replace.call(null,cljs.core.HashMap.fromArrays(["T"],[" "]),time_string)))));
});
noirden.client.main.to_dygraph_array = (function to_dygraph_array(datapoints){
return cljs.core.to_array.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p__390208){
var vec__390209__390210 = p__390208;
var time_string__390211 = cljs.core.nth.call(null,vec__390209__390210,0,null);
var scalar__390212 = cljs.core.nth.call(null,vec__390209__390210,1,null);

return cljs.core.array.call(null,noirden.client.main.parse_date.call(null,time_string__390211),scalar__390212);
}),datapoints)));
});
/**
* makes a javascript map from a clojure one
*/
noirden.client.main.clj__GT_js = (function clj__GT_js(cljmap){
var out__390213 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__390207_SHARP_){
return (out__390213[cljs.core.name.call(null,cljs.core.first.call(null,p1__390207_SHARP_))] = cljs.core.second.call(null,p1__390207_SHARP_));
}),cljmap));
return out__390213;
});
noirden.client.main.add_info_bar = (function add_info_bar(div_id,data,title,p__390214){
var vec__390215__390216 = p__390214;
var low__390217 = cljs.core.nth.call(null,vec__390215__390216,0,null);
var high__390218 = cljs.core.nth.call(null,vec__390215__390216,1,null);

var graph_div__390222 = cljs.core.first.call(null,jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_graph")));
var text_div__390223 = jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_text"));
var vec__390219__390224 = cljs.core.last.call(null,data);
var now__390225 = cljs.core.nth.call(null,vec__390219__390224,0,null);
var current__390226 = cljs.core.nth.call(null,vec__390219__390224,1,null);
var vec__390220__390227 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.max_key,cljs.core.second),data);
var max_time__390228 = cljs.core.nth.call(null,vec__390220__390227,0,null);
var max_reading__390229 = cljs.core.nth.call(null,vec__390220__390227,1,null);
var vec__390221__390230 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.min_key,cljs.core.second),data);
var min_time__390231 = cljs.core.nth.call(null,vec__390221__390230,0,null);
var min_reading__390232 = cljs.core.nth.call(null,vec__390221__390230,1,null);

jayq.core.text.call(null,text_div__390223,cljs.core.str.call(null,"current: ",current__390226," max: ",max_reading__390229," min: ",min_reading__390232));
return (new Dygraph(graph_div__390222,noirden.client.main.to_dygraph_array.call(null,data),noirden.client.main.customize_graph.call(null,low__390217,high__390218)));
});
noirden.client.main.customize_graph = (function customize_graph(low,high){
var options__390233 = cljs.core.js_obj.call(null);
var callback__390238 = (function (canvas,area,g){
var range__390234 = g.xAxisRange();
var top__390235 = g.toDomYCoord(high);
var bottom__390236 = g.toDomYCoord(low);
var left__390237 = g.toDomXCoord(cljs.core.first.call(null,range__390234));

(canvas["fillStyle"] = "rgba(0, 255, 0, 1.0)");
return canvas.fillRect(left__390237,top__390235,area.w,(bottom__390236 - top__390235));
});

(options__390233["underlayCallback"] = callback__390238);
return options__390233;
});
fetch.remotes.remote_callback.call(null,"latest-air-readings",cljs.core.Vector.fromArray([0]),(function (table){
var vec__390239__390251 = cljs.core.reduce.call(null,(function (p__390240,p__390241){
var vec__390242__390244 = p__390240;
var ts__390245 = cljs.core.nth.call(null,vec__390242__390244,0,null);
var hs__390246 = cljs.core.nth.call(null,vec__390242__390244,1,null);
var vec__390243__390247 = p__390241;
var time__390248 = cljs.core.nth.call(null,vec__390243__390247,0,null);
var temp__390249 = cljs.core.nth.call(null,vec__390243__390247,1,null);
var hum__390250 = cljs.core.nth.call(null,vec__390243__390247,2,null);

return cljs.core.Vector.fromArray([cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__390248,temp__390249]),ts__390245),cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__390248,hum__390250]),hs__390246)]);
}),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])]),table);
var temps__390252 = cljs.core.nth.call(null,vec__390239__390251,0,null);
var hums__390253 = cljs.core.nth.call(null,vec__390239__390251,1,null);

noirden.client.main.add_info_bar.call(null,"#temperature",temps__390252,"temperature celsius",cljs.core.Vector.fromArray([21,27]));
return noirden.client.main.add_info_bar.call(null,"#humidity",hums__390253,"relative humidity %",cljs.core.Vector.fromArray([35,60]));
}));
