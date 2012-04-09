goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__394255 = cljs.core.js_obj.call(null);

var G__394256__394257 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__394256__394257))
{var G__394259__394261 = cljs.core.first.call(null,G__394256__394257);
var vec__394260__394262 = G__394259__394261;
var k__394263 = cljs.core.nth.call(null,vec__394260__394262,0,null);
var v__394264 = cljs.core.nth.call(null,vec__394260__394262,1,null);
var G__394256__394265 = G__394256__394257;

var G__394259__394266 = G__394259__394261;
var G__394256__394267 = G__394256__394265;

while(true){
var vec__394268__394269 = G__394259__394266;
var k__394270 = cljs.core.nth.call(null,vec__394268__394269,0,null);
var v__394271 = cljs.core.nth.call(null,vec__394268__394269,1,null);
var G__394256__394272 = G__394256__394267;

(out__394255[cljs.core.name.call(null,k__394270)] = v__394271);
var temp__3698__auto____394273 = cljs.core.next.call(null,G__394256__394272);

if(cljs.core.truth_(temp__3698__auto____394273))
{var G__394256__394274 = temp__3698__auto____394273;

{
var G__394275 = cljs.core.first.call(null,G__394256__394274);
var G__394276 = G__394256__394274;
G__394259__394266 = G__394275;
G__394256__394267 = G__394276;
continue;
}
} else
{}
break;
}
} else
{}
return out__394255;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__394277 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__394277);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__394278){
var v = cljs.core.first(arglist__394278);
var text = cljs.core.rest(arglist__394278);
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
{return cljs.core.reduce.call(null,(function (m,p__394279){
var vec__394280__394281 = p__394279;
var k__394282 = cljs.core.nth.call(null,vec__394280__394281,0,null);
var v__394283 = cljs.core.nth.call(null,vec__394280__394281,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__394282),clj__GT_js.call(null,v__394283));
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
