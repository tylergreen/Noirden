goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
noirden.client.main.parse_date = (function parse_date(time_string){
return (new Date(Date.parse(cljs.core.apply.call(null,cljs.core.str,cljs.core.replace.call(null,cljs.core.HashMap.fromArrays(["T"],[" "]),time_string)))));
});
noirden.client.main.to_dygraph_array = (function to_dygraph_array(datapoints){
return cljs.core.to_array.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p__337331){
var vec__337332__337333 = p__337331;
var time_string__337334 = cljs.core.nth.call(null,vec__337332__337333,0,null);
var scalar__337335 = cljs.core.nth.call(null,vec__337332__337333,1,null);

return cljs.core.array.call(null,noirden.client.main.parse_date.call(null,time_string__337334),scalar__337335);
}),datapoints)));
});
/**
* makes a javascript map from a clojure one
*/
noirden.client.main.clj__GT_js = (function clj__GT_js(cljmap){
var out__337336 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__337330_SHARP_){
return (out__337336[cljs.core.name.call(null,cljs.core.first.call(null,p1__337330_SHARP_))] = cljs.core.second.call(null,p1__337330_SHARP_));
}),cljmap));
return out__337336;
});
noirden.client.main.add_info_bar = (function add_info_bar(div_id,data,title){
var graph_div__337340 = cljs.core.first.call(null,jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_graph")));
var text_div__337341 = jayq.core.$.call(null,cljs.core.str.call(null,div_id,"_text"));
var vec__337337__337342 = cljs.core.last.call(null,data);
var now__337343 = cljs.core.nth.call(null,vec__337337__337342,0,null);
var current__337344 = cljs.core.nth.call(null,vec__337337__337342,1,null);
var vec__337338__337345 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.max_key,cljs.core.second),data);
var max_time__337346 = cljs.core.nth.call(null,vec__337338__337345,0,null);
var max_reading__337347 = cljs.core.nth.call(null,vec__337338__337345,1,null);
var vec__337339__337348 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.min_key,cljs.core.second),data);
var min_time__337349 = cljs.core.nth.call(null,vec__337339__337348,0,null);
var min_reading__337350 = cljs.core.nth.call(null,vec__337339__337348,1,null);

console.log(current__337344);
jayq.core.text.call(null,text_div__337341,cljs.core.str.call(null,"current: ",current__337344," max: ",max_reading__337347," min: ",min_reading__337350));
return (new Dygraph(graph_div__337340,noirden.client.main.to_dygraph_array.call(null,data),{underlayCallback: function(canvas, area, g) {
              console.log(area.x);
              console.log(area.y);
              console.log(area.h);
              console.log(area.w);
              console.log(g.xAxisRange());
              console.log(g.yAxisRange());
             
              var range = g.xAxisRange();
              var top = g.toDomYCoord(26);
              var bottom = g.toDomYCoord(24);

     var left = g.toDomXCoord(range[0]);
              width = g.toDomXCoord(range[1]) - left;
              console.log(width)
              console.log(left)
              console.log(top)
              console.log(bottom)

              canvas.fillStyle = 'rgba(0, 255, 0, 1.0)';
              canvas.fillRect(left, top, area.w,  bottom - top);
            }}));
});
fetch.remotes.remote_callback.call(null,"latest-air-readings",cljs.core.Vector.fromArray([0]),(function (table){
var vec__337351__337363 = cljs.core.reduce.call(null,(function (p__337352,p__337353){
var vec__337354__337356 = p__337352;
var ts__337357 = cljs.core.nth.call(null,vec__337354__337356,0,null);
var hs__337358 = cljs.core.nth.call(null,vec__337354__337356,1,null);
var vec__337355__337359 = p__337353;
var time__337360 = cljs.core.nth.call(null,vec__337355__337359,0,null);
var temp__337361 = cljs.core.nth.call(null,vec__337355__337359,1,null);
var hum__337362 = cljs.core.nth.call(null,vec__337355__337359,2,null);

return cljs.core.Vector.fromArray([cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__337360,temp__337361]),ts__337357),cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__337360,hum__337362]),hs__337358)]);
}),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])]),table);
var temps__337364 = cljs.core.nth.call(null,vec__337351__337363,0,null);
var hums__337365 = cljs.core.nth.call(null,vec__337351__337363,1,null);

console.log("rpc");
noirden.client.main.add_info_bar.call(null,"#temperature",temps__337364,"temperature celsius");
return noirden.client.main.add_info_bar.call(null,"#humidity",hums__337365,"relative humidity %");
}));
