goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__89612 = cljs.core.js_obj.call(null);

var G__89613__89614 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__89613__89614))
{var G__89616__89618 = cljs.core.first.call(null,G__89613__89614);
var vec__89617__89619 = G__89616__89618;
var k__89620 = cljs.core.nth.call(null,vec__89617__89619,0,null);
var v__89621 = cljs.core.nth.call(null,vec__89617__89619,1,null);
var G__89613__89622 = G__89613__89614;

var G__89616__89623 = G__89616__89618;
var G__89613__89624 = G__89613__89622;

while(true){
var vec__89625__89626 = G__89616__89623;
var k__89627 = cljs.core.nth.call(null,vec__89625__89626,0,null);
var v__89628 = cljs.core.nth.call(null,vec__89625__89626,1,null);
var G__89613__89629 = G__89613__89624;

(out__89612[cljs.core.name.call(null,k__89627)] = v__89628);
var temp__3698__auto____89630 = cljs.core.next.call(null,G__89613__89629);

if(cljs.core.truth_(temp__3698__auto____89630))
{var G__89613__89631 = temp__3698__auto____89630;

{
var G__89632 = cljs.core.first.call(null,G__89613__89631);
var G__89633 = G__89613__89631;
G__89616__89623 = G__89632;
G__89613__89624 = G__89633;
continue;
}
} else
{}
break;
}
} else
{}
return out__89612;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__89634 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__89634);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__89635){
var v = cljs.core.first(arglist__89635);
var text = cljs.core.rest(arglist__89635);
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
{return cljs.core.reduce.call(null,(function (m,p__89636){
var vec__89637__89638 = p__89636;
var k__89639 = cljs.core.nth.call(null,vec__89637__89638,0,null);
var v__89640 = cljs.core.nth.call(null,vec__89637__89638,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__89639),clj__GT_js.call(null,v__89640));
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
