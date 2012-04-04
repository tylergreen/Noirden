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
{var temp__3695__auto____75513 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____75513))
{var cm__75514 = temp__3695__auto____75513;

return cljs.core.str.call(null,"[crateGroup=",cm__75514,"]");
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
var $__delegate = function (sel,p__75515){
var vec__75516__75517 = p__75515;
var context__75518 = cljs.core.nth.call(null,vec__75516__75517,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__75518)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__75518);
}
};
var $ = function (sel,var_args){
var p__75515 = null;
if (goog.isDef(var_args)) {
  p__75515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__75515);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__75519){
var sel = cljs.core.first(arglist__75519);
var p__75515 = cljs.core.rest(arglist__75519);
return $__delegate.call(this, sel, p__75515);
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
var G__75521 = null;
var G__75521__75522 = (function (this$,k){
var or__3548__auto____75520 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____75520))
{return or__3548__auto____75520;
} else
{return null;
}
});
var G__75521__75523 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__75521 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__75521__75522.call(this,this$,k);
case  3 :
return G__75521__75523.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75521;
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
var G__75525 = null;
var G__75525__75526 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__75525__75527 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__75525 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__75525__75526.call(this,_,k);
case  3 :
return G__75525__75527.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75525;
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
var attr__delegate = function ($elem,a,p__75529){
var vec__75530__75531 = p__75529;
var v__75532 = cljs.core.nth.call(null,vec__75530__75531,0,null);

var a__75533 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__75532)))
{return $elem.attr(a__75533);
} else
{return $elem.attr(a__75533,v__75532);
}
};
var attr = function ($elem,a,var_args){
var p__75529 = null;
if (goog.isDef(var_args)) {
  p__75529 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__75529);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__75534){
var $elem = cljs.core.first(arglist__75534);
var a = cljs.core.first(cljs.core.next(arglist__75534));
var p__75529 = cljs.core.rest(cljs.core.next(arglist__75534));
return attr__delegate.call(this, $elem, a, p__75529);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__75535){
var vec__75536__75537 = p__75535;
var v__75538 = cljs.core.nth.call(null,vec__75536__75537,0,null);

var k__75539 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__75538)))
{return $elem.data(k__75539);
} else
{return $elem.data(k__75539,v__75538);
}
};
var data = function ($elem,k,var_args){
var p__75535 = null;
if (goog.isDef(var_args)) {
  p__75535 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__75535);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__75540){
var $elem = cljs.core.first(arglist__75540);
var k = cljs.core.first(cljs.core.next(arglist__75540));
var p__75535 = cljs.core.rest(cljs.core.next(arglist__75540));
return data__delegate.call(this, $elem, k, p__75535);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__75541 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__75541);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__75542 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__75542);
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
var hide__delegate = function ($elem,p__75543){
var vec__75544__75545 = p__75543;
var speed__75546 = cljs.core.nth.call(null,vec__75544__75545,0,null);
var on_finish__75547 = cljs.core.nth.call(null,vec__75544__75545,1,null);

return $elem.hide(speed__75546,on_finish__75547);
};
var hide = function ($elem,var_args){
var p__75543 = null;
if (goog.isDef(var_args)) {
  p__75543 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__75543);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__75548){
var $elem = cljs.core.first(arglist__75548);
var p__75543 = cljs.core.rest(arglist__75548);
return hide__delegate.call(this, $elem, p__75543);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__75549){
var vec__75550__75551 = p__75549;
var speed__75552 = cljs.core.nth.call(null,vec__75550__75551,0,null);
var on_finish__75553 = cljs.core.nth.call(null,vec__75550__75551,1,null);

return $elem.show(speed__75552,on_finish__75553);
};
var show = function ($elem,var_args){
var p__75549 = null;
if (goog.isDef(var_args)) {
  p__75549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__75549);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__75554){
var $elem = cljs.core.first(arglist__75554);
var p__75549 = cljs.core.rest(arglist__75554);
return show__delegate.call(this, $elem, p__75549);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__75555){
var vec__75556__75557 = p__75555;
var speed__75558 = cljs.core.nth.call(null,vec__75556__75557,0,null);
var on_finish__75559 = cljs.core.nth.call(null,vec__75556__75557,1,null);

return $elem.toggle(speed__75558,on_finish__75559);
};
var toggle = function ($elem,var_args){
var p__75555 = null;
if (goog.isDef(var_args)) {
  p__75555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__75555);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__75560){
var $elem = cljs.core.first(arglist__75560);
var p__75555 = cljs.core.rest(arglist__75560);
return toggle__delegate.call(this, $elem, p__75555);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__75561){
var vec__75562__75563 = p__75561;
var speed__75564 = cljs.core.nth.call(null,vec__75562__75563,0,null);
var on_finish__75565 = cljs.core.nth.call(null,vec__75562__75563,1,null);

return $elem.fadeOut(speed__75564,on_finish__75565);
};
var fade_out = function ($elem,var_args){
var p__75561 = null;
if (goog.isDef(var_args)) {
  p__75561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__75561);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__75566){
var $elem = cljs.core.first(arglist__75566);
var p__75561 = cljs.core.rest(arglist__75566);
return fade_out__delegate.call(this, $elem, p__75561);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__75567){
var vec__75568__75569 = p__75567;
var speed__75570 = cljs.core.nth.call(null,vec__75568__75569,0,null);
var on_finish__75571 = cljs.core.nth.call(null,vec__75568__75569,1,null);

return $elem.fadeIn(speed__75570,on_finish__75571);
};
var fade_in = function ($elem,var_args){
var p__75567 = null;
if (goog.isDef(var_args)) {
  p__75567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__75567);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__75572){
var $elem = cljs.core.first(arglist__75572);
var p__75567 = cljs.core.rest(arglist__75572);
return fade_in__delegate.call(this, $elem, p__75567);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__75573){
var vec__75574__75575 = p__75573;
var speed__75576 = cljs.core.nth.call(null,vec__75574__75575,0,null);
var on_finish__75577 = cljs.core.nth.call(null,vec__75574__75575,1,null);

return $elem.slideUp(speed__75576,on_finish__75577);
};
var slide_up = function ($elem,var_args){
var p__75573 = null;
if (goog.isDef(var_args)) {
  p__75573 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__75573);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__75578){
var $elem = cljs.core.first(arglist__75578);
var p__75573 = cljs.core.rest(arglist__75578);
return slide_up__delegate.call(this, $elem, p__75573);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__75579){
var vec__75580__75581 = p__75579;
var speed__75582 = cljs.core.nth.call(null,vec__75580__75581,0,null);
var on_finish__75583 = cljs.core.nth.call(null,vec__75580__75581,1,null);

return $elem.slideDown(speed__75582,on_finish__75583);
};
var slide_down = function ($elem,var_args){
var p__75579 = null;
if (goog.isDef(var_args)) {
  p__75579 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__75579);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__75584){
var $elem = cljs.core.first(arglist__75584);
var p__75579 = cljs.core.rest(arglist__75584);
return slide_down__delegate.call(this, $elem, p__75579);
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
var val__delegate = function ($elem,p__75585){
var vec__75586__75587 = p__75585;
var v__75588 = cljs.core.nth.call(null,vec__75586__75587,0,null);

if(cljs.core.truth_(v__75588))
{return $elem.val(v__75588);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__75585 = null;
if (goog.isDef(var_args)) {
  p__75585 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__75585);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__75589){
var $elem = cljs.core.first(arglist__75589);
var p__75585 = cljs.core.rest(arglist__75589);
return val__delegate.call(this, $elem, p__75585);
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
jayq.core.xhr = (function xhr(p__75590,content,callback){
var vec__75591__75592 = p__75590;
var method__75593 = cljs.core.nth.call(null,vec__75591__75592,0,null);
var uri__75594 = cljs.core.nth.call(null,vec__75591__75592,1,null);

var params__75595 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__75593)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__75594,params__75595);
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
var on__delegate = function ($elem,events,p__75596){
var vec__75597__75598 = p__75596;
var sel__75599 = cljs.core.nth.call(null,vec__75597__75598,0,null);
var data__75600 = cljs.core.nth.call(null,vec__75597__75598,1,null);
var handler__75601 = cljs.core.nth.call(null,vec__75597__75598,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__75599),data__75600,handler__75601);
};
var on = function ($elem,events,var_args){
var p__75596 = null;
if (goog.isDef(var_args)) {
  p__75596 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__75596);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__75602){
var $elem = cljs.core.first(arglist__75602);
var events = cljs.core.first(cljs.core.next(arglist__75602));
var p__75596 = cljs.core.rest(cljs.core.next(arglist__75602));
return on__delegate.call(this, $elem, events, p__75596);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__75603){
var vec__75604__75605 = p__75603;
var sel__75606 = cljs.core.nth.call(null,vec__75604__75605,0,null);
var data__75607 = cljs.core.nth.call(null,vec__75604__75605,1,null);
var handler__75608 = cljs.core.nth.call(null,vec__75604__75605,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__75606),data__75607,handler__75608);
};
var one = function ($elem,events,var_args){
var p__75603 = null;
if (goog.isDef(var_args)) {
  p__75603 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__75603);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__75609){
var $elem = cljs.core.first(arglist__75609);
var events = cljs.core.first(cljs.core.next(arglist__75609));
var p__75603 = cljs.core.rest(cljs.core.next(arglist__75609));
return one__delegate.call(this, $elem, events, p__75603);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__75610){
var vec__75611__75612 = p__75610;
var sel__75613 = cljs.core.nth.call(null,vec__75611__75612,0,null);
var handler__75614 = cljs.core.nth.call(null,vec__75611__75612,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__75613),handler__75614);
};
var off = function ($elem,events,var_args){
var p__75610 = null;
if (goog.isDef(var_args)) {
  p__75610 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__75610);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__75615){
var $elem = cljs.core.first(arglist__75615);
var events = cljs.core.first(cljs.core.next(arglist__75615));
var p__75610 = cljs.core.rest(cljs.core.next(arglist__75615));
return off__delegate.call(this, $elem, events, p__75610);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
