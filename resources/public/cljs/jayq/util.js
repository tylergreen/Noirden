goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__392155 = cljs.core.js_obj.call(null);

var G__392156__392157 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__392156__392157))
{var G__392159__392161 = cljs.core.first.call(null,G__392156__392157);
var vec__392160__392162 = G__392159__392161;
var k__392163 = cljs.core.nth.call(null,vec__392160__392162,0,null);
var v__392164 = cljs.core.nth.call(null,vec__392160__392162,1,null);
var G__392156__392165 = G__392156__392157;

var G__392159__392166 = G__392159__392161;
var G__392156__392167 = G__392156__392165;

while(true){
var vec__392168__392169 = G__392159__392166;
var k__392170 = cljs.core.nth.call(null,vec__392168__392169,0,null);
var v__392171 = cljs.core.nth.call(null,vec__392168__392169,1,null);
var G__392156__392172 = G__392156__392167;

(out__392155[cljs.core.name.call(null,k__392170)] = v__392171);
var temp__3698__auto____392173 = cljs.core.next.call(null,G__392156__392172);

if(cljs.core.truth_(temp__3698__auto____392173))
{var G__392156__392174 = temp__3698__auto____392173;

{
var G__392175 = cljs.core.first.call(null,G__392156__392174);
var G__392176 = G__392156__392174;
G__392159__392166 = G__392175;
G__392156__392167 = G__392176;
continue;
}
} else
{}
break;
}
} else
{}
return out__392155;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__392177 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__392177);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__392178){
var v = cljs.core.first(arglist__392178);
var text = cljs.core.rest(arglist__392178);
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
{return cljs.core.reduce.call(null,(function (m,p__392179){
var vec__392180__392181 = p__392179;
var k__392182 = cljs.core.nth.call(null,vec__392180__392181,0,null);
var v__392183 = cljs.core.nth.call(null,vec__392180__392181,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__392182),clj__GT_js.call(null,v__392183));
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
