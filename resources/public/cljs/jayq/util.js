goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__339267 = cljs.core.js_obj.call(null);

var G__339268__339269 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__339268__339269))
{var G__339271__339273 = cljs.core.first.call(null,G__339268__339269);
var vec__339272__339274 = G__339271__339273;
var k__339275 = cljs.core.nth.call(null,vec__339272__339274,0,null);
var v__339276 = cljs.core.nth.call(null,vec__339272__339274,1,null);
var G__339268__339277 = G__339268__339269;

var G__339271__339278 = G__339271__339273;
var G__339268__339279 = G__339268__339277;

while(true){
var vec__339280__339281 = G__339271__339278;
var k__339282 = cljs.core.nth.call(null,vec__339280__339281,0,null);
var v__339283 = cljs.core.nth.call(null,vec__339280__339281,1,null);
var G__339268__339284 = G__339268__339279;

(out__339267[cljs.core.name.call(null,k__339282)] = v__339283);
var temp__3698__auto____339285 = cljs.core.next.call(null,G__339268__339284);

if(cljs.core.truth_(temp__3698__auto____339285))
{var G__339268__339286 = temp__3698__auto____339285;

{
var G__339287 = cljs.core.first.call(null,G__339268__339286);
var G__339288 = G__339268__339286;
G__339271__339278 = G__339287;
G__339268__339279 = G__339288;
continue;
}
} else
{}
break;
}
} else
{}
return out__339267;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__339289 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__339289);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__339290){
var v = cljs.core.first(arglist__339290);
var text = cljs.core.rest(arglist__339290);
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
{return cljs.core.reduce.call(null,(function (m,p__339291){
var vec__339292__339293 = p__339291;
var k__339294 = cljs.core.nth.call(null,vec__339292__339293,0,null);
var v__339295 = cljs.core.nth.call(null,vec__339292__339293,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__339294),clj__GT_js.call(null,v__339295));
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
