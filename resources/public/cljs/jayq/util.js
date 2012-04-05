goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__201137 = cljs.core.js_obj.call(null);

var G__201138__201139 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__201138__201139))
{var G__201141__201143 = cljs.core.first.call(null,G__201138__201139);
var vec__201142__201144 = G__201141__201143;
var k__201145 = cljs.core.nth.call(null,vec__201142__201144,0,null);
var v__201146 = cljs.core.nth.call(null,vec__201142__201144,1,null);
var G__201138__201147 = G__201138__201139;

var G__201141__201148 = G__201141__201143;
var G__201138__201149 = G__201138__201147;

while(true){
var vec__201150__201151 = G__201141__201148;
var k__201152 = cljs.core.nth.call(null,vec__201150__201151,0,null);
var v__201153 = cljs.core.nth.call(null,vec__201150__201151,1,null);
var G__201138__201154 = G__201138__201149;

(out__201137[cljs.core.name.call(null,k__201152)] = v__201153);
var temp__3698__auto____201155 = cljs.core.next.call(null,G__201138__201154);

if(cljs.core.truth_(temp__3698__auto____201155))
{var G__201138__201156 = temp__3698__auto____201155;

{
var G__201157 = cljs.core.first.call(null,G__201138__201156);
var G__201158 = G__201138__201156;
G__201141__201148 = G__201157;
G__201138__201149 = G__201158;
continue;
}
} else
{}
break;
}
} else
{}
return out__201137;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__201159 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__201159);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__201160){
var v = cljs.core.first(arglist__201160);
var text = cljs.core.rest(arglist__201160);
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
{return cljs.core.reduce.call(null,(function (m,p__201161){
var vec__201162__201163 = p__201161;
var k__201164 = cljs.core.nth.call(null,vec__201162__201163,0,null);
var v__201165 = cljs.core.nth.call(null,vec__201162__201163,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__201164),clj__GT_js.call(null,v__201165));
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
