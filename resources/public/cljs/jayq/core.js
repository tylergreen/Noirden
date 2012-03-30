goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{var temp__3695__auto____242316 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____242316))
{var cm__242317 = temp__3695__auto____242316;

return cljs.core.str.call(null,"[crateGroup=",cm__242317,"]");
} else
{return sel;
}
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__242318){
var vec__242319__242320 = p__242318;
var context__242321 = cljs.core.nth.call(null,vec__242319__242320,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__242321)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__242321);
}
};
var $ = function (sel,var_args){
var p__242318 = null;
if (goog.isDef(var_args)) {
  p__242318 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__242318);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__242322){
var sel = cljs.core.first(arglist__242322);
var p__242318 = cljs.core.rest(arglist__242322);
return $__delegate.call(this, sel, p__242318);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__242324 = null;
var G__242324__242325 = (function (this$,k){
var or__3548__auto____242323 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____242323))
{return or__3548__auto____242323;
} else
{return null;
}
});
var G__242324__242326 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__242324 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__242324__242325.call(this,this$,k);
case  3 :
return G__242324__242326.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__242324;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__242328 = null;
var G__242328__242329 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__242328__242330 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__242328 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__242328__242329.call(this,_,k);
case  3 :
return G__242328__242330.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__242328;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__242332){
var vec__242333__242334 = p__242332;
var v__242335 = cljs.core.nth.call(null,vec__242333__242334,0,null);

var a__242336 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__242335)))
{return $elem.attr(a__242336);
} else
{return $elem.attr(a__242336,v__242335);
}
};
var attr = function ($elem,a,var_args){
var p__242332 = null;
if (goog.isDef(var_args)) {
  p__242332 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__242332);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__242337){
var $elem = cljs.core.first(arglist__242337);
var a = cljs.core.first(cljs.core.next(arglist__242337));
var p__242332 = cljs.core.rest(cljs.core.next(arglist__242337));
return attr__delegate.call(this, $elem, a, p__242332);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__242338){
var vec__242339__242340 = p__242338;
var v__242341 = cljs.core.nth.call(null,vec__242339__242340,0,null);

var k__242342 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__242341)))
{return $elem.data(k__242342);
} else
{return $elem.data(k__242342,v__242341);
}
};
var data = function ($elem,k,var_args){
var p__242338 = null;
if (goog.isDef(var_args)) {
  p__242338 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__242338);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__242343){
var $elem = cljs.core.first(arglist__242343);
var k = cljs.core.first(cljs.core.next(arglist__242343));
var p__242338 = cljs.core.rest(cljs.core.next(arglist__242343));
return data__delegate.call(this, $elem, k, p__242338);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__242344 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__242344);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__242345 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__242345);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__242346){
var vec__242347__242348 = p__242346;
var speed__242349 = cljs.core.nth.call(null,vec__242347__242348,0,null);
var on_finish__242350 = cljs.core.nth.call(null,vec__242347__242348,1,null);

return $elem.hide(speed__242349,on_finish__242350);
};
var hide = function ($elem,var_args){
var p__242346 = null;
if (goog.isDef(var_args)) {
  p__242346 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__242346);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__242351){
var $elem = cljs.core.first(arglist__242351);
var p__242346 = cljs.core.rest(arglist__242351);
return hide__delegate.call(this, $elem, p__242346);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__242352){
var vec__242353__242354 = p__242352;
var speed__242355 = cljs.core.nth.call(null,vec__242353__242354,0,null);
var on_finish__242356 = cljs.core.nth.call(null,vec__242353__242354,1,null);

return $elem.show(speed__242355,on_finish__242356);
};
var show = function ($elem,var_args){
var p__242352 = null;
if (goog.isDef(var_args)) {
  p__242352 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__242352);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__242357){
var $elem = cljs.core.first(arglist__242357);
var p__242352 = cljs.core.rest(arglist__242357);
return show__delegate.call(this, $elem, p__242352);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__242358){
var vec__242359__242360 = p__242358;
var speed__242361 = cljs.core.nth.call(null,vec__242359__242360,0,null);
var on_finish__242362 = cljs.core.nth.call(null,vec__242359__242360,1,null);

return $elem.toggle(speed__242361,on_finish__242362);
};
var toggle = function ($elem,var_args){
var p__242358 = null;
if (goog.isDef(var_args)) {
  p__242358 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__242358);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__242363){
var $elem = cljs.core.first(arglist__242363);
var p__242358 = cljs.core.rest(arglist__242363);
return toggle__delegate.call(this, $elem, p__242358);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__242364){
var vec__242365__242366 = p__242364;
var speed__242367 = cljs.core.nth.call(null,vec__242365__242366,0,null);
var on_finish__242368 = cljs.core.nth.call(null,vec__242365__242366,1,null);

return $elem.fadeOut(speed__242367,on_finish__242368);
};
var fade_out = function ($elem,var_args){
var p__242364 = null;
if (goog.isDef(var_args)) {
  p__242364 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__242364);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__242369){
var $elem = cljs.core.first(arglist__242369);
var p__242364 = cljs.core.rest(arglist__242369);
return fade_out__delegate.call(this, $elem, p__242364);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__242370){
var vec__242371__242372 = p__242370;
var speed__242373 = cljs.core.nth.call(null,vec__242371__242372,0,null);
var on_finish__242374 = cljs.core.nth.call(null,vec__242371__242372,1,null);

return $elem.fadeIn(speed__242373,on_finish__242374);
};
var fade_in = function ($elem,var_args){
var p__242370 = null;
if (goog.isDef(var_args)) {
  p__242370 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__242370);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__242375){
var $elem = cljs.core.first(arglist__242375);
var p__242370 = cljs.core.rest(arglist__242375);
return fade_in__delegate.call(this, $elem, p__242370);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__242376){
var vec__242377__242378 = p__242376;
var speed__242379 = cljs.core.nth.call(null,vec__242377__242378,0,null);
var on_finish__242380 = cljs.core.nth.call(null,vec__242377__242378,1,null);

return $elem.slideUp(speed__242379,on_finish__242380);
};
var slide_up = function ($elem,var_args){
var p__242376 = null;
if (goog.isDef(var_args)) {
  p__242376 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__242376);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__242381){
var $elem = cljs.core.first(arglist__242381);
var p__242376 = cljs.core.rest(arglist__242381);
return slide_up__delegate.call(this, $elem, p__242376);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__242382){
var vec__242383__242384 = p__242382;
var speed__242385 = cljs.core.nth.call(null,vec__242383__242384,0,null);
var on_finish__242386 = cljs.core.nth.call(null,vec__242383__242384,1,null);

return $elem.slideDown(speed__242385,on_finish__242386);
};
var slide_down = function ($elem,var_args){
var p__242382 = null;
if (goog.isDef(var_args)) {
  p__242382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__242382);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__242387){
var $elem = cljs.core.first(arglist__242387);
var p__242382 = cljs.core.rest(arglist__242387);
return slide_down__delegate.call(this, $elem, p__242382);
});
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__242388){
var vec__242389__242390 = p__242388;
var v__242391 = cljs.core.nth.call(null,vec__242389__242390,0,null);

if(cljs.core.truth_(v__242391))
{return $elem.val(v__242391);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__242388 = null;
if (goog.isDef(var_args)) {
  p__242388 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__242388);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__242392){
var $elem = cljs.core.first(arglist__242392);
var p__242388 = cljs.core.rest(arglist__242392);
return val__delegate.call(this, $elem, p__242388);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__242393,content,callback){
var vec__242394__242395 = p__242393;
var method__242396 = cljs.core.nth.call(null,vec__242394__242395,0,null);
var uri__242397 = cljs.core.nth.call(null,vec__242394__242395,1,null);

var params__242398 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__242396)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__242397,params__242398);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e)))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,e)))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Unknown event type: ",e)));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__242399){
var vec__242400__242401 = p__242399;
var sel__242402 = cljs.core.nth.call(null,vec__242400__242401,0,null);
var data__242403 = cljs.core.nth.call(null,vec__242400__242401,1,null);
var handler__242404 = cljs.core.nth.call(null,vec__242400__242401,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__242402),data__242403,handler__242404);
};
var on = function ($elem,events,var_args){
var p__242399 = null;
if (goog.isDef(var_args)) {
  p__242399 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__242399);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__242405){
var $elem = cljs.core.first(arglist__242405);
var events = cljs.core.first(cljs.core.next(arglist__242405));
var p__242399 = cljs.core.rest(cljs.core.next(arglist__242405));
return on__delegate.call(this, $elem, events, p__242399);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__242406){
var vec__242407__242408 = p__242406;
var sel__242409 = cljs.core.nth.call(null,vec__242407__242408,0,null);
var data__242410 = cljs.core.nth.call(null,vec__242407__242408,1,null);
var handler__242411 = cljs.core.nth.call(null,vec__242407__242408,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__242409),data__242410,handler__242411);
};
var one = function ($elem,events,var_args){
var p__242406 = null;
if (goog.isDef(var_args)) {
  p__242406 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__242406);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__242412){
var $elem = cljs.core.first(arglist__242412);
var events = cljs.core.first(cljs.core.next(arglist__242412));
var p__242406 = cljs.core.rest(cljs.core.next(arglist__242412));
return one__delegate.call(this, $elem, events, p__242406);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__242413){
var vec__242414__242415 = p__242413;
var sel__242416 = cljs.core.nth.call(null,vec__242414__242415,0,null);
var handler__242417 = cljs.core.nth.call(null,vec__242414__242415,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__242416),handler__242417);
};
var off = function ($elem,events,var_args){
var p__242413 = null;
if (goog.isDef(var_args)) {
  p__242413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__242413);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__242418){
var $elem = cljs.core.first(arglist__242418);
var events = cljs.core.first(cljs.core.next(arglist__242418));
var p__242413 = cljs.core.rest(cljs.core.next(arglist__242418));
return off__delegate.call(this, $elem, events, p__242413);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
