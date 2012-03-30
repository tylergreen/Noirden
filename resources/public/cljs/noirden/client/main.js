goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
noirden.client.main.$graph = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#monitor"));
noirden.client.main.$panel = jayq.core.$.call(null,"\uFDD0'#panel");
alert.call(null,(new Date("2012-03-28T22:42")));
fetch.remotes.remote_callback.call(null,"get-air-table",cljs.core.Vector.fromArray([]),(function (table){
var result__151323 = cljs.core.to_array.call(null,cljs.core.map.call(null,(function (p__151317){
var vec__151318__151319 = p__151317;
var date__151320 = cljs.core.nth.call(null,vec__151318__151319,0,null);
var temp__151321 = cljs.core.nth.call(null,vec__151318__151319,1,null);
var hum__151322 = cljs.core.nth.call(null,vec__151318__151319,2,null);

return cljs.core.array.call(null,(new Date(date__151320)),temp__151321,hum__151322);
}),table));

console.log(cljs.core.pr_str.call(null,cljs.core.first.call(null,result__151323)));
return (new Dygraph(noirden.client.main.$graph,result__151323));
}));
