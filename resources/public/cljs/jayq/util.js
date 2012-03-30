goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__265264 = cljs.core.js_obj.call(null);

var G__265265__265266 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__265265__265266))
{var G__265268__265270 = cljs.core.first.call(null,G__265265__265266);
var vec__265269__265271 = G__265268__265270;
var k__265272 = cljs.core.nth.call(null,vec__265269__265271,0,null);
var v__265273 = cljs.core.nth.call(null,vec__265269__265271,1,null);
var G__265265__265274 = G__265265__265266;

var G__265268__265275 = G__265268__265270;
var G__265265__265276 = G__265265__265274;

while(true){
var vec__265277__265278 = G__265268__265275;
var k__265279 = cljs.core.nth.call(null,vec__265277__265278,0,null);
var v__265280 = cljs.core.nth.call(null,vec__265277__265278,1,null);
var G__265265__265281 = G__265265__265276;

(out__265264[cljs.core.name.call(null,k__265279)] = v__265280);
var temp__3698__auto____265282 = cljs.core.next.call(null,G__265265__265281);

if(cljs.core.truth_(temp__3698__auto____265282))
{var G__265265__265283 = temp__3698__auto____265282;

{
var G__265284 = cljs.core.first.call(null,G__265265__265283);
var G__265285 = G__265265__265283;
G__265268__265275 = G__265284;
G__265265__265276 = G__265285;
continue;
}
} else
{}
break;
}
} else
{}
return out__265264;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__265286 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__265286);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__265287){
var v = cljs.core.first(arglist__265287);
var text = cljs.core.rest(arglist__265287);
return log__delegate.call(this, v, text);
});
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__265288){
var vec__265289__265290 = p__265288;
var k__265291 = cljs.core.nth.call(null,vec__265289__265290,0,null);
var v__265292 = cljs.core.nth.call(null,vec__265289__265290,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__265291),clj__GT_js.call(null,v__265292));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
