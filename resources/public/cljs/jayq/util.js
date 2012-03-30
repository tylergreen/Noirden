goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__153225 = cljs.core.js_obj.call(null);

var G__153226__153227 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__153226__153227))
{var G__153229__153231 = cljs.core.first.call(null,G__153226__153227);
var vec__153230__153232 = G__153229__153231;
var k__153233 = cljs.core.nth.call(null,vec__153230__153232,0,null);
var v__153234 = cljs.core.nth.call(null,vec__153230__153232,1,null);
var G__153226__153235 = G__153226__153227;

var G__153229__153236 = G__153229__153231;
var G__153226__153237 = G__153226__153235;

while(true){
var vec__153238__153239 = G__153229__153236;
var k__153240 = cljs.core.nth.call(null,vec__153238__153239,0,null);
var v__153241 = cljs.core.nth.call(null,vec__153238__153239,1,null);
var G__153226__153242 = G__153226__153237;

(out__153225[cljs.core.name.call(null,k__153240)] = v__153241);
var temp__3698__auto____153243 = cljs.core.next.call(null,G__153226__153242);

if(cljs.core.truth_(temp__3698__auto____153243))
{var G__153226__153244 = temp__3698__auto____153243;

{
var G__153245 = cljs.core.first.call(null,G__153226__153244);
var G__153246 = G__153226__153244;
G__153229__153236 = G__153245;
G__153226__153237 = G__153246;
continue;
}
} else
{}
break;
}
} else
{}
return out__153225;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__153247 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__153247);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__153248){
var v = cljs.core.first(arglist__153248);
var text = cljs.core.rest(arglist__153248);
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
{return cljs.core.reduce.call(null,(function (m,p__153249){
var vec__153250__153251 = p__153249;
var k__153252 = cljs.core.nth.call(null,vec__153250__153251,0,null);
var v__153253 = cljs.core.nth.call(null,vec__153250__153251,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__153252),clj__GT_js.call(null,v__153253));
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
