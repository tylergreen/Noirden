goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
noirden.client.main.parse_date = (function parse_date(time_string){
return (new Date(Date.parse(cljs.core.apply.call(null,cljs.core.str,cljs.core.replace.call(null,cljs.core.HashMap.fromArrays(["T"],[" "]),time_string)))));
});
noirden.client.main.to_dygraph_array = (function to_dygraph_array(datapoints){
return cljs.core.to_array.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p__392309){
var vec__392310__392311 = p__392309;
var time_string__392312 = cljs.core.nth.call(null,vec__392310__392311,0,null);
var scalar__392313 = cljs.core.nth.call(null,vec__392310__392311,1,null);

return cljs.core.array.call(null,noirden.client.main.parse_date.call(null,time_string__392312),scalar__392313);
}),datapoints)));
});
noirden.client.main.add_info_bar = (function add_info_bar(div_id,data,title,p__392314){
var vec__392315__392316 = p__392314;
var low__392317 = cljs.core.nth.call(null,vec__392315__392316,0,null);
var high__392318 = cljs.core.nth.call(null,vec__392315__392316,1,null);

var graph_div__392322 = cljs.core.first.call(null,jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_graph")));
var text_div__392323 = jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_text"));
var vec__392319__392324 = cljs.core.last.call(null,data);
var now__392325 = cljs.core.nth.call(null,vec__392319__392324,0,null);
var current__392326 = cljs.core.nth.call(null,vec__392319__392324,1,null);
var vec__392320__392327 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.max_key,cljs.core.second),data);
var max_time__392328 = cljs.core.nth.call(null,vec__392320__392327,0,null);
var max_reading__392329 = cljs.core.nth.call(null,vec__392320__392327,1,null);
var vec__392321__392330 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.min_key,cljs.core.second),data);
var min_time__392331 = cljs.core.nth.call(null,vec__392321__392330,0,null);
var min_reading__392332 = cljs.core.nth.call(null,vec__392321__392330,1,null);

jayq.core.text.call(null,text_div__392323,cljs.core.str.call(null,"current: ",current__392326," max: ",max_reading__392329," min: ",min_reading__392332));
return (new Dygraph(graph_div__392322,noirden.client.main.to_dygraph_array.call(null,data),noirden.client.main.customize_graph.call(null,low__392317,high__392318)));
});
noirden.client.main.customize_graph = (function customize_graph(low,high){
var options__392333 = cljs.core.js_obj.call(null);
var callback__392338 = (function (canvas,area,g){
var range__392334 = g.xAxisRange();
var top__392335 = g.toDomYCoord(high);
var bottom__392336 = g.toDomYCoord(low);
var left__392337 = g.toDomXCoord(cljs.core.first.call(null,range__392334));

(canvas["fillStyle"] = "rgba(0, 255, 0, 1.0)");
return canvas.fillRect(left__392337,top__392335,area.w,(bottom__392336 - top__392335));
});

(options__392333["underlayCallback"] = callback__392338);
return options__392333;
});
fetch.remotes.remote_callback.call(null,"latest-air-readings",cljs.core.Vector.fromArray([0]),(function (table){
var vec__392339__392351 = cljs.core.reduce.call(null,(function (p__392340,p__392341){
var vec__392342__392344 = p__392340;
var ts__392345 = cljs.core.nth.call(null,vec__392342__392344,0,null);
var hs__392346 = cljs.core.nth.call(null,vec__392342__392344,1,null);
var vec__392343__392347 = p__392341;
var time__392348 = cljs.core.nth.call(null,vec__392343__392347,0,null);
var temp__392349 = cljs.core.nth.call(null,vec__392343__392347,1,null);
var hum__392350 = cljs.core.nth.call(null,vec__392343__392347,2,null);

return cljs.core.Vector.fromArray([cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__392348,temp__392349]),ts__392345),cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__392348,hum__392350]),hs__392346)]);
}),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])]),table);
var temps__392352 = cljs.core.nth.call(null,vec__392339__392351,0,null);
var hums__392353 = cljs.core.nth.call(null,vec__392339__392351,1,null);

noirden.client.main.add_info_bar.call(null,"#temperature",temps__392352,"temperature celsius",cljs.core.Vector.fromArray([21,27]));
return noirden.client.main.add_info_bar.call(null,"#humidity",hums__392353,"relative humidity %",cljs.core.Vector.fromArray([35,60]));
}));
