goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__75616 = cljs.core.js_obj.call(null);

var G__75617__75618 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__75617__75618))
{var G__75620__75622 = cljs.core.first.call(null,G__75617__75618);
var vec__75621__75623 = G__75620__75622;
var k__75624 = cljs.core.nth.call(null,vec__75621__75623,0,null);
var v__75625 = cljs.core.nth.call(null,vec__75621__75623,1,null);
var G__75617__75626 = G__75617__75618;

var G__75620__75627 = G__75620__75622;
var G__75617__75628 = G__75617__75626;

while(true){
var vec__75629__75630 = G__75620__75627;
var k__75631 = cljs.core.nth.call(null,vec__75629__75630,0,null);
var v__75632 = cljs.core.nth.call(null,vec__75629__75630,1,null);
var G__75617__75633 = G__75617__75628;

(out__75616[cljs.core.name.call(null,k__75631)] = v__75632);
var temp__3698__auto____75634 = cljs.core.next.call(null,G__75617__75633);

if(cljs.core.truth_(temp__3698__auto____75634))
{var G__75617__75635 = temp__3698__auto____75634;

{
var G__75636 = cljs.core.first.call(null,G__75617__75635);
var G__75637 = G__75617__75635;
G__75620__75627 = G__75636;
G__75617__75628 = G__75637;
continue;
}
} else
{}
break;
}
} else
{}
return out__75616;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__75638 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__75638);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__75639){
var v = cljs.core.first(arglist__75639);
var text = cljs.core.rest(arglist__75639);
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
{return cljs.core.reduce.call(null,(function (m,p__75640){
var vec__75641__75642 = p__75640;
var k__75643 = cljs.core.nth.call(null,vec__75641__75642,0,null);
var v__75644 = cljs.core.nth.call(null,vec__75641__75642,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__75643),clj__GT_js.call(null,v__75644));
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
