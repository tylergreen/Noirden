goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__157267 = cljs.core.js_obj.call(null);

var G__157268__157269 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__157268__157269))
{var G__157271__157273 = cljs.core.first.call(null,G__157268__157269);
var vec__157272__157274 = G__157271__157273;
var k__157275 = cljs.core.nth.call(null,vec__157272__157274,0,null);
var v__157276 = cljs.core.nth.call(null,vec__157272__157274,1,null);
var G__157268__157277 = G__157268__157269;

var G__157271__157278 = G__157271__157273;
var G__157268__157279 = G__157268__157277;

while(true){
var vec__157280__157281 = G__157271__157278;
var k__157282 = cljs.core.nth.call(null,vec__157280__157281,0,null);
var v__157283 = cljs.core.nth.call(null,vec__157280__157281,1,null);
var G__157268__157284 = G__157268__157279;

(out__157267[cljs.core.name.call(null,k__157282)] = v__157283);
var temp__3698__auto____157285 = cljs.core.next.call(null,G__157268__157284);

if(cljs.core.truth_(temp__3698__auto____157285))
{var G__157268__157286 = temp__3698__auto____157285;

{
var G__157287 = cljs.core.first.call(null,G__157268__157286);
var G__157288 = G__157268__157286;
G__157271__157278 = G__157287;
G__157268__157279 = G__157288;
continue;
}
} else
{}
break;
}
} else
{}
return out__157267;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__157289 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__157289);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__157290){
var v = cljs.core.first(arglist__157290);
var text = cljs.core.rest(arglist__157290);
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
{return cljs.core.reduce.call(null,(function (m,p__157291){
var vec__157292__157293 = p__157291;
var k__157294 = cljs.core.nth.call(null,vec__157292__157293,0,null);
var v__157295 = cljs.core.nth.call(null,vec__157292__157293,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__157294),clj__GT_js.call(null,v__157295));
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
