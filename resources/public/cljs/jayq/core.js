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
{var temp__3695__auto____394152 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____394152))
{var cm__394153 = temp__3695__auto____394152;

return cljs.core.str.call(null,"[crateGroup=",cm__394153,"]");
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
var $__delegate = function (sel,p__394154){
var vec__394155__394156 = p__394154;
var context__394157 = cljs.core.nth.call(null,vec__394155__394156,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__394157)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__394157);
}
};
var $ = function (sel,var_args){
var p__394154 = null;
if (goog.isDef(var_args)) {
  p__394154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__394154);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__394158){
var sel = cljs.core.first(arglist__394158);
var p__394154 = cljs.core.rest(arglist__394158);
return $__delegate.call(this, sel, p__394154);
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
var G__394160 = null;
var G__394160__394161 = (function (this$,k){
var or__3548__auto____394159 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____394159))
{return or__3548__auto____394159;
} else
{return null;
}
});
var G__394160__394162 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__394160 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__394160__394161.call(this,this$,k);
case  3 :
return G__394160__394162.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__394160;
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
var G__394164 = null;
var G__394164__394165 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__394164__394166 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__394164 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__394164__394165.call(this,_,k);
case  3 :
return G__394164__394166.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__394164;
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
var attr__delegate = function ($elem,a,p__394168){
var vec__394169__394170 = p__394168;
var v__394171 = cljs.core.nth.call(null,vec__394169__394170,0,null);

var a__394172 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__394171)))
{return $elem.attr(a__394172);
} else
{return $elem.attr(a__394172,v__394171);
}
};
var attr = function ($elem,a,var_args){
var p__394168 = null;
if (goog.isDef(var_args)) {
  p__394168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__394168);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__394173){
var $elem = cljs.core.first(arglist__394173);
var a = cljs.core.first(cljs.core.next(arglist__394173));
var p__394168 = cljs.core.rest(cljs.core.next(arglist__394173));
return attr__delegate.call(this, $elem, a, p__394168);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__394174){
var vec__394175__394176 = p__394174;
var v__394177 = cljs.core.nth.call(null,vec__394175__394176,0,null);

var k__394178 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__394177)))
{return $elem.data(k__394178);
} else
{return $elem.data(k__394178,v__394177);
}
};
var data = function ($elem,k,var_args){
var p__394174 = null;
if (goog.isDef(var_args)) {
  p__394174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__394174);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__394179){
var $elem = cljs.core.first(arglist__394179);
var k = cljs.core.first(cljs.core.next(arglist__394179));
var p__394174 = cljs.core.rest(cljs.core.next(arglist__394179));
return data__delegate.call(this, $elem, k, p__394174);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__394180 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__394180);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__394181 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__394181);
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
var hide__delegate = function ($elem,p__394182){
var vec__394183__394184 = p__394182;
var speed__394185 = cljs.core.nth.call(null,vec__394183__394184,0,null);
var on_finish__394186 = cljs.core.nth.call(null,vec__394183__394184,1,null);

return $elem.hide(speed__394185,on_finish__394186);
};
var hide = function ($elem,var_args){
var p__394182 = null;
if (goog.isDef(var_args)) {
  p__394182 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__394182);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__394187){
var $elem = cljs.core.first(arglist__394187);
var p__394182 = cljs.core.rest(arglist__394187);
return hide__delegate.call(this, $elem, p__394182);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__394188){
var vec__394189__394190 = p__394188;
var speed__394191 = cljs.core.nth.call(null,vec__394189__394190,0,null);
var on_finish__394192 = cljs.core.nth.call(null,vec__394189__394190,1,null);

return $elem.show(speed__394191,on_finish__394192);
};
var show = function ($elem,var_args){
var p__394188 = null;
if (goog.isDef(var_args)) {
  p__394188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__394188);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__394193){
var $elem = cljs.core.first(arglist__394193);
var p__394188 = cljs.core.rest(arglist__394193);
return show__delegate.call(this, $elem, p__394188);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__394194){
var vec__394195__394196 = p__394194;
var speed__394197 = cljs.core.nth.call(null,vec__394195__394196,0,null);
var on_finish__394198 = cljs.core.nth.call(null,vec__394195__394196,1,null);

return $elem.toggle(speed__394197,on_finish__394198);
};
var toggle = function ($elem,var_args){
var p__394194 = null;
if (goog.isDef(var_args)) {
  p__394194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__394194);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__394199){
var $elem = cljs.core.first(arglist__394199);
var p__394194 = cljs.core.rest(arglist__394199);
return toggle__delegate.call(this, $elem, p__394194);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__394200){
var vec__394201__394202 = p__394200;
var speed__394203 = cljs.core.nth.call(null,vec__394201__394202,0,null);
var on_finish__394204 = cljs.core.nth.call(null,vec__394201__394202,1,null);

return $elem.fadeOut(speed__394203,on_finish__394204);
};
var fade_out = function ($elem,var_args){
var p__394200 = null;
if (goog.isDef(var_args)) {
  p__394200 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__394200);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__394205){
var $elem = cljs.core.first(arglist__394205);
var p__394200 = cljs.core.rest(arglist__394205);
return fade_out__delegate.call(this, $elem, p__394200);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__394206){
var vec__394207__394208 = p__394206;
var speed__394209 = cljs.core.nth.call(null,vec__394207__394208,0,null);
var on_finish__394210 = cljs.core.nth.call(null,vec__394207__394208,1,null);

return $elem.fadeIn(speed__394209,on_finish__394210);
};
var fade_in = function ($elem,var_args){
var p__394206 = null;
if (goog.isDef(var_args)) {
  p__394206 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__394206);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__394211){
var $elem = cljs.core.first(arglist__394211);
var p__394206 = cljs.core.rest(arglist__394211);
return fade_in__delegate.call(this, $elem, p__394206);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__394212){
var vec__394213__394214 = p__394212;
var speed__394215 = cljs.core.nth.call(null,vec__394213__394214,0,null);
var on_finish__394216 = cljs.core.nth.call(null,vec__394213__394214,1,null);

return $elem.slideUp(speed__394215,on_finish__394216);
};
var slide_up = function ($elem,var_args){
var p__394212 = null;
if (goog.isDef(var_args)) {
  p__394212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__394212);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__394217){
var $elem = cljs.core.first(arglist__394217);
var p__394212 = cljs.core.rest(arglist__394217);
return slide_up__delegate.call(this, $elem, p__394212);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__394218){
var vec__394219__394220 = p__394218;
var speed__394221 = cljs.core.nth.call(null,vec__394219__394220,0,null);
var on_finish__394222 = cljs.core.nth.call(null,vec__394219__394220,1,null);

return $elem.slideDown(speed__394221,on_finish__394222);
};
var slide_down = function ($elem,var_args){
var p__394218 = null;
if (goog.isDef(var_args)) {
  p__394218 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__394218);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__394223){
var $elem = cljs.core.first(arglist__394223);
var p__394218 = cljs.core.rest(arglist__394223);
return slide_down__delegate.call(this, $elem, p__394218);
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
var val__delegate = function ($elem,p__394224){
var vec__394225__394226 = p__394224;
var v__394227 = cljs.core.nth.call(null,vec__394225__394226,0,null);

if(cljs.core.truth_(v__394227))
{return $elem.val(v__394227);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__394224 = null;
if (goog.isDef(var_args)) {
  p__394224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__394224);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__394228){
var $elem = cljs.core.first(arglist__394228);
var p__394224 = cljs.core.rest(arglist__394228);
return val__delegate.call(this, $elem, p__394224);
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
jayq.core.xhr = (function xhr(p__394229,content,callback){
var vec__394230__394231 = p__394229;
var method__394232 = cljs.core.nth.call(null,vec__394230__394231,0,null);
var uri__394233 = cljs.core.nth.call(null,vec__394230__394231,1,null);

var params__394234 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__394232)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__394233,params__394234);
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
var on__delegate = function ($elem,events,p__394235){
var vec__394236__394237 = p__394235;
var sel__394238 = cljs.core.nth.call(null,vec__394236__394237,0,null);
var data__394239 = cljs.core.nth.call(null,vec__394236__394237,1,null);
var handler__394240 = cljs.core.nth.call(null,vec__394236__394237,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__394238),data__394239,handler__394240);
};
var on = function ($elem,events,var_args){
var p__394235 = null;
if (goog.isDef(var_args)) {
  p__394235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__394235);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__394241){
var $elem = cljs.core.first(arglist__394241);
var events = cljs.core.first(cljs.core.next(arglist__394241));
var p__394235 = cljs.core.rest(cljs.core.next(arglist__394241));
return on__delegate.call(this, $elem, events, p__394235);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__394242){
var vec__394243__394244 = p__394242;
var sel__394245 = cljs.core.nth.call(null,vec__394243__394244,0,null);
var data__394246 = cljs.core.nth.call(null,vec__394243__394244,1,null);
var handler__394247 = cljs.core.nth.call(null,vec__394243__394244,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__394245),data__394246,handler__394247);
};
var one = function ($elem,events,var_args){
var p__394242 = null;
if (goog.isDef(var_args)) {
  p__394242 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__394242);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__394248){
var $elem = cljs.core.first(arglist__394248);
var events = cljs.core.first(cljs.core.next(arglist__394248));
var p__394242 = cljs.core.rest(cljs.core.next(arglist__394248));
return one__delegate.call(this, $elem, events, p__394242);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__394249){
var vec__394250__394251 = p__394249;
var sel__394252 = cljs.core.nth.call(null,vec__394250__394251,0,null);
var handler__394253 = cljs.core.nth.call(null,vec__394250__394251,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__394252),handler__394253);
};
var off = function ($elem,events,var_args){
var p__394249 = null;
if (goog.isDef(var_args)) {
  p__394249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__394249);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__394254){
var $elem = cljs.core.first(arglist__394254);
var events = cljs.core.first(cljs.core.next(arglist__394254));
var p__394249 = cljs.core.rest(cljs.core.next(arglist__394254));
return off__delegate.call(this, $elem, events, p__394249);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
