goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
noirden.client.main.$temperature = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#temperature"));
noirden.client.main.$humidity = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#humidity"));
noirden.client.main.to_dygraph_array = (function to_dygraph_array(datapoints){
return cljs.core.to_array.call(null,cljs.core.map.call(null,(function (p__240498){
var vec__240499__240500 = p__240498;
var time_string__240501 = cljs.core.nth.call(null,vec__240499__240500,0,null);
var scalar__240502 = cljs.core.nth.call(null,vec__240499__240500,1,null);

return cljs.core.array.call(null,(new Date(time_string__240501)),scalar__240502);
}),datapoints));
});
fetch.remotes.remote_callback.call(null,"latest-air-readings",cljs.core.Vector.fromArray([100]),(function (table){
var vec__240503__240515 = cljs.core.reduce.call(null,(function (p__240504,p__240505){
var vec__240506__240508 = p__240504;
var ts__240509 = cljs.core.nth.call(null,vec__240506__240508,0,null);
var hs__240510 = cljs.core.nth.call(null,vec__240506__240508,1,null);
var vec__240507__240511 = p__240505;
var time__240512 = cljs.core.nth.call(null,vec__240507__240511,0,null);
var temp__240513 = cljs.core.nth.call(null,vec__240507__240511,1,null);
var hum__240514 = cljs.core.nth.call(null,vec__240507__240511,2,null);

return cljs.core.Vector.fromArray([cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__240512,temp__240513]),ts__240509),cljs.core.cons.call(null,cljs.core.Vector.fromArray([time__240512,hum__240514]),hs__240510)]);
}),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])]),table);
var temps__240516 = cljs.core.nth.call(null,vec__240503__240515,0,null);
var hums__240517 = cljs.core.nth.call(null,vec__240503__240515,1,null);

console.log(cljs.core.pr_str.call(null,cljs.core.first.call(null,temps__240516)));
console.log(cljs.core.pr_str.call(null,(new Date(cljs.core.first.call(null,cljs.core.first.call(null,temps__240516))))));
console.log("humidity");
console.log(cljs.core.pr_str.call(null,cljs.core.array.call(null,(new Date(cljs.core.first.call(null,cljs.core.first.call(null,hums__240517)))),cljs.core.first.call(null,cljs.core.second.call(null,noirden.client.main.scalar)))));
(new Dygraph(noirden.client.main.$temperature,noirden.client.main.to_dygraph_array.call(null,temps__240516)));
return (new Dygraph(noirden.client.main.$humidity,noirden.client.main.to_dygraph_array.call(null,hums__240517)));
}));
