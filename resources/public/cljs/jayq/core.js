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
{var temp__3695__auto____89509 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____89509))
{var cm__89510 = temp__3695__auto____89509;

return cljs.core.str.call(null,"[crateGroup=",cm__89510,"]");
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
var $__delegate = function (sel,p__89511){
var vec__89512__89513 = p__89511;
var context__89514 = cljs.core.nth.call(null,vec__89512__89513,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__89514)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__89514);
}
};
var $ = function (sel,var_args){
var p__89511 = null;
if (goog.isDef(var_args)) {
  p__89511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__89511);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__89515){
var sel = cljs.core.first(arglist__89515);
var p__89511 = cljs.core.rest(arglist__89515);
return $__delegate.call(this, sel, p__89511);
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
var G__89517 = null;
var G__89517__89518 = (function (this$,k){
var or__3548__auto____89516 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____89516))
{return or__3548__auto____89516;
} else
{return null;
}
});
var G__89517__89519 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__89517 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__89517__89518.call(this,this$,k);
case  3 :
return G__89517__89519.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__89517;
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
var G__89521 = null;
var G__89521__89522 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__89521__89523 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__89521 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__89521__89522.call(this,_,k);
case  3 :
return G__89521__89523.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__89521;
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
var attr__delegate = function ($elem,a,p__89525){
var vec__89526__89527 = p__89525;
var v__89528 = cljs.core.nth.call(null,vec__89526__89527,0,null);

var a__89529 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__89528)))
{return $elem.attr(a__89529);
} else
{return $elem.attr(a__89529,v__89528);
}
};
var attr = function ($elem,a,var_args){
var p__89525 = null;
if (goog.isDef(var_args)) {
  p__89525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__89525);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__89530){
var $elem = cljs.core.first(arglist__89530);
var a = cljs.core.first(cljs.core.next(arglist__89530));
var p__89525 = cljs.core.rest(cljs.core.next(arglist__89530));
return attr__delegate.call(this, $elem, a, p__89525);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__89531){
var vec__89532__89533 = p__89531;
var v__89534 = cljs.core.nth.call(null,vec__89532__89533,0,null);

var k__89535 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__89534)))
{return $elem.data(k__89535);
} else
{return $elem.data(k__89535,v__89534);
}
};
var data = function ($elem,k,var_args){
var p__89531 = null;
if (goog.isDef(var_args)) {
  p__89531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__89531);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__89536){
var $elem = cljs.core.first(arglist__89536);
var k = cljs.core.first(cljs.core.next(arglist__89536));
var p__89531 = cljs.core.rest(cljs.core.next(arglist__89536));
return data__delegate.call(this, $elem, k, p__89531);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__89537 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__89537);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__89538 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__89538);
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
var hide__delegate = function ($elem,p__89539){
var vec__89540__89541 = p__89539;
var speed__89542 = cljs.core.nth.call(null,vec__89540__89541,0,null);
var on_finish__89543 = cljs.core.nth.call(null,vec__89540__89541,1,null);

return $elem.hide(speed__89542,on_finish__89543);
};
var hide = function ($elem,var_args){
var p__89539 = null;
if (goog.isDef(var_args)) {
  p__89539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__89539);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__89544){
var $elem = cljs.core.first(arglist__89544);
var p__89539 = cljs.core.rest(arglist__89544);
return hide__delegate.call(this, $elem, p__89539);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__89545){
var vec__89546__89547 = p__89545;
var speed__89548 = cljs.core.nth.call(null,vec__89546__89547,0,null);
var on_finish__89549 = cljs.core.nth.call(null,vec__89546__89547,1,null);

return $elem.show(speed__89548,on_finish__89549);
};
var show = function ($elem,var_args){
var p__89545 = null;
if (goog.isDef(var_args)) {
  p__89545 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__89545);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__89550){
var $elem = cljs.core.first(arglist__89550);
var p__89545 = cljs.core.rest(arglist__89550);
return show__delegate.call(this, $elem, p__89545);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__89551){
var vec__89552__89553 = p__89551;
var speed__89554 = cljs.core.nth.call(null,vec__89552__89553,0,null);
var on_finish__89555 = cljs.core.nth.call(null,vec__89552__89553,1,null);

return $elem.toggle(speed__89554,on_finish__89555);
};
var toggle = function ($elem,var_args){
var p__89551 = null;
if (goog.isDef(var_args)) {
  p__89551 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__89551);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__89556){
var $elem = cljs.core.first(arglist__89556);
var p__89551 = cljs.core.rest(arglist__89556);
return toggle__delegate.call(this, $elem, p__89551);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__89557){
var vec__89558__89559 = p__89557;
var speed__89560 = cljs.core.nth.call(null,vec__89558__89559,0,null);
var on_finish__89561 = cljs.core.nth.call(null,vec__89558__89559,1,null);

return $elem.fadeOut(speed__89560,on_finish__89561);
};
var fade_out = function ($elem,var_args){
var p__89557 = null;
if (goog.isDef(var_args)) {
  p__89557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__89557);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__89562){
var $elem = cljs.core.first(arglist__89562);
var p__89557 = cljs.core.rest(arglist__89562);
return fade_out__delegate.call(this, $elem, p__89557);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__89563){
var vec__89564__89565 = p__89563;
var speed__89566 = cljs.core.nth.call(null,vec__89564__89565,0,null);
var on_finish__89567 = cljs.core.nth.call(null,vec__89564__89565,1,null);

return $elem.fadeIn(speed__89566,on_finish__89567);
};
var fade_in = function ($elem,var_args){
var p__89563 = null;
if (goog.isDef(var_args)) {
  p__89563 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__89563);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__89568){
var $elem = cljs.core.first(arglist__89568);
var p__89563 = cljs.core.rest(arglist__89568);
return fade_in__delegate.call(this, $elem, p__89563);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__89569){
var vec__89570__89571 = p__89569;
var speed__89572 = cljs.core.nth.call(null,vec__89570__89571,0,null);
var on_finish__89573 = cljs.core.nth.call(null,vec__89570__89571,1,null);

return $elem.slideUp(speed__89572,on_finish__89573);
};
var slide_up = function ($elem,var_args){
var p__89569 = null;
if (goog.isDef(var_args)) {
  p__89569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__89569);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__89574){
var $elem = cljs.core.first(arglist__89574);
var p__89569 = cljs.core.rest(arglist__89574);
return slide_up__delegate.call(this, $elem, p__89569);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__89575){
var vec__89576__89577 = p__89575;
var speed__89578 = cljs.core.nth.call(null,vec__89576__89577,0,null);
var on_finish__89579 = cljs.core.nth.call(null,vec__89576__89577,1,null);

return $elem.slideDown(speed__89578,on_finish__89579);
};
var slide_down = function ($elem,var_args){
var p__89575 = null;
if (goog.isDef(var_args)) {
  p__89575 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__89575);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__89580){
var $elem = cljs.core.first(arglist__89580);
var p__89575 = cljs.core.rest(arglist__89580);
return slide_down__delegate.call(this, $elem, p__89575);
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
var val__delegate = function ($elem,p__89581){
var vec__89582__89583 = p__89581;
var v__89584 = cljs.core.nth.call(null,vec__89582__89583,0,null);

if(cljs.core.truth_(v__89584))
{return $elem.val(v__89584);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__89581 = null;
if (goog.isDef(var_args)) {
  p__89581 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__89581);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__89585){
var $elem = cljs.core.first(arglist__89585);
var p__89581 = cljs.core.rest(arglist__89585);
return val__delegate.call(this, $elem, p__89581);
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
jayq.core.xhr = (function xhr(p__89586,content,callback){
var vec__89587__89588 = p__89586;
var method__89589 = cljs.core.nth.call(null,vec__89587__89588,0,null);
var uri__89590 = cljs.core.nth.call(null,vec__89587__89588,1,null);

var params__89591 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__89589)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__89590,params__89591);
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
var on__delegate = function ($elem,events,p__89592){
var vec__89593__89594 = p__89592;
var sel__89595 = cljs.core.nth.call(null,vec__89593__89594,0,null);
var data__89596 = cljs.core.nth.call(null,vec__89593__89594,1,null);
var handler__89597 = cljs.core.nth.call(null,vec__89593__89594,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__89595),data__89596,handler__89597);
};
var on = function ($elem,events,var_args){
var p__89592 = null;
if (goog.isDef(var_args)) {
  p__89592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__89592);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__89598){
var $elem = cljs.core.first(arglist__89598);
var events = cljs.core.first(cljs.core.next(arglist__89598));
var p__89592 = cljs.core.rest(cljs.core.next(arglist__89598));
return on__delegate.call(this, $elem, events, p__89592);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__89599){
var vec__89600__89601 = p__89599;
var sel__89602 = cljs.core.nth.call(null,vec__89600__89601,0,null);
var data__89603 = cljs.core.nth.call(null,vec__89600__89601,1,null);
var handler__89604 = cljs.core.nth.call(null,vec__89600__89601,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__89602),data__89603,handler__89604);
};
var one = function ($elem,events,var_args){
var p__89599 = null;
if (goog.isDef(var_args)) {
  p__89599 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__89599);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__89605){
var $elem = cljs.core.first(arglist__89605);
var events = cljs.core.first(cljs.core.next(arglist__89605));
var p__89599 = cljs.core.rest(cljs.core.next(arglist__89605));
return one__delegate.call(this, $elem, events, p__89599);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__89606){
var vec__89607__89608 = p__89606;
var sel__89609 = cljs.core.nth.call(null,vec__89607__89608,0,null);
var handler__89610 = cljs.core.nth.call(null,vec__89607__89608,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__89609),handler__89610);
};
var off = function ($elem,events,var_args){
var p__89606 = null;
if (goog.isDef(var_args)) {
  p__89606 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__89606);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__89611){
var $elem = cljs.core.first(arglist__89611);
var events = cljs.core.first(cljs.core.next(arglist__89611));
var p__89606 = cljs.core.rest(cljs.core.next(arglist__89611));
return off__delegate.call(this, $elem, events, p__89606);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
