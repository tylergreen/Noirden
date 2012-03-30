goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__242419 = cljs.core.js_obj.call(null);

var G__242420__242421 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__242420__242421))
{var G__242423__242425 = cljs.core.first.call(null,G__242420__242421);
var vec__242424__242426 = G__242423__242425;
var k__242427 = cljs.core.nth.call(null,vec__242424__242426,0,null);
var v__242428 = cljs.core.nth.call(null,vec__242424__242426,1,null);
var G__242420__242429 = G__242420__242421;

var G__242423__242430 = G__242423__242425;
var G__242420__242431 = G__242420__242429;

while(true){
var vec__242432__242433 = G__242423__242430;
var k__242434 = cljs.core.nth.call(null,vec__242432__242433,0,null);
var v__242435 = cljs.core.nth.call(null,vec__242432__242433,1,null);
var G__242420__242436 = G__242420__242431;

(out__242419[cljs.core.name.call(null,k__242434)] = v__242435);
var temp__3698__auto____242437 = cljs.core.next.call(null,G__242420__242436);

if(cljs.core.truth_(temp__3698__auto____242437))
{var G__242420__242438 = temp__3698__auto____242437;

{
var G__242439 = cljs.core.first.call(null,G__242420__242438);
var G__242440 = G__242420__242438;
G__242423__242430 = G__242439;
G__242420__242431 = G__242440;
continue;
}
} else
{}
break;
}
} else
{}
return out__242419;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__242441 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__242441);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__242442){
var v = cljs.core.first(arglist__242442);
var text = cljs.core.rest(arglist__242442);
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
{return cljs.core.reduce.call(null,(function (m,p__242443){
var vec__242444__242445 = p__242443;
var k__242446 = cljs.core.nth.call(null,vec__242444__242445,0,null);
var v__242447 = cljs.core.nth.call(null,vec__242444__242445,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__242446),clj__GT_js.call(null,v__242447));
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
