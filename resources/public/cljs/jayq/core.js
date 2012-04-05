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
{var temp__3695__auto____157164 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____157164))
{var cm__157165 = temp__3695__auto____157164;

return cljs.core.str.call(null,"[crateGroup=",cm__157165,"]");
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
var $__delegate = function (sel,p__157166){
var vec__157167__157168 = p__157166;
var context__157169 = cljs.core.nth.call(null,vec__157167__157168,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__157169)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__157169);
}
};
var $ = function (sel,var_args){
var p__157166 = null;
if (goog.isDef(var_args)) {
  p__157166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__157166);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__157170){
var sel = cljs.core.first(arglist__157170);
var p__157166 = cljs.core.rest(arglist__157170);
return $__delegate.call(this, sel, p__157166);
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
var G__157172 = null;
var G__157172__157173 = (function (this$,k){
var or__3548__auto____157171 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____157171))
{return or__3548__auto____157171;
} else
{return null;
}
});
var G__157172__157174 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__157172 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__157172__157173.call(this,this$,k);
case  3 :
return G__157172__157174.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__157172;
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
var G__157176 = null;
var G__157176__157177 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__157176__157178 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__157176 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__157176__157177.call(this,_,k);
case  3 :
return G__157176__157178.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__157176;
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
var attr__delegate = function ($elem,a,p__157180){
var vec__157181__157182 = p__157180;
var v__157183 = cljs.core.nth.call(null,vec__157181__157182,0,null);

var a__157184 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__157183)))
{return $elem.attr(a__157184);
} else
{return $elem.attr(a__157184,v__157183);
}
};
var attr = function ($elem,a,var_args){
var p__157180 = null;
if (goog.isDef(var_args)) {
  p__157180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__157180);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__157185){
var $elem = cljs.core.first(arglist__157185);
var a = cljs.core.first(cljs.core.next(arglist__157185));
var p__157180 = cljs.core.rest(cljs.core.next(arglist__157185));
return attr__delegate.call(this, $elem, a, p__157180);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__157186){
var vec__157187__157188 = p__157186;
var v__157189 = cljs.core.nth.call(null,vec__157187__157188,0,null);

var k__157190 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__157189)))
{return $elem.data(k__157190);
} else
{return $elem.data(k__157190,v__157189);
}
};
var data = function ($elem,k,var_args){
var p__157186 = null;
if (goog.isDef(var_args)) {
  p__157186 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__157186);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__157191){
var $elem = cljs.core.first(arglist__157191);
var k = cljs.core.first(cljs.core.next(arglist__157191));
var p__157186 = cljs.core.rest(cljs.core.next(arglist__157191));
return data__delegate.call(this, $elem, k, p__157186);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__157192 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__157192);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__157193 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__157193);
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
var hide__delegate = function ($elem,p__157194){
var vec__157195__157196 = p__157194;
var speed__157197 = cljs.core.nth.call(null,vec__157195__157196,0,null);
var on_finish__157198 = cljs.core.nth.call(null,vec__157195__157196,1,null);

return $elem.hide(speed__157197,on_finish__157198);
};
var hide = function ($elem,var_args){
var p__157194 = null;
if (goog.isDef(var_args)) {
  p__157194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__157194);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__157199){
var $elem = cljs.core.first(arglist__157199);
var p__157194 = cljs.core.rest(arglist__157199);
return hide__delegate.call(this, $elem, p__157194);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__157200){
var vec__157201__157202 = p__157200;
var speed__157203 = cljs.core.nth.call(null,vec__157201__157202,0,null);
var on_finish__157204 = cljs.core.nth.call(null,vec__157201__157202,1,null);

return $elem.show(speed__157203,on_finish__157204);
};
var show = function ($elem,var_args){
var p__157200 = null;
if (goog.isDef(var_args)) {
  p__157200 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__157200);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__157205){
var $elem = cljs.core.first(arglist__157205);
var p__157200 = cljs.core.rest(arglist__157205);
return show__delegate.call(this, $elem, p__157200);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__157206){
var vec__157207__157208 = p__157206;
var speed__157209 = cljs.core.nth.call(null,vec__157207__157208,0,null);
var on_finish__157210 = cljs.core.nth.call(null,vec__157207__157208,1,null);

return $elem.toggle(speed__157209,on_finish__157210);
};
var toggle = function ($elem,var_args){
var p__157206 = null;
if (goog.isDef(var_args)) {
  p__157206 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__157206);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__157211){
var $elem = cljs.core.first(arglist__157211);
var p__157206 = cljs.core.rest(arglist__157211);
return toggle__delegate.call(this, $elem, p__157206);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__157212){
var vec__157213__157214 = p__157212;
var speed__157215 = cljs.core.nth.call(null,vec__157213__157214,0,null);
var on_finish__157216 = cljs.core.nth.call(null,vec__157213__157214,1,null);

return $elem.fadeOut(speed__157215,on_finish__157216);
};
var fade_out = function ($elem,var_args){
var p__157212 = null;
if (goog.isDef(var_args)) {
  p__157212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__157212);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__157217){
var $elem = cljs.core.first(arglist__157217);
var p__157212 = cljs.core.rest(arglist__157217);
return fade_out__delegate.call(this, $elem, p__157212);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__157218){
var vec__157219__157220 = p__157218;
var speed__157221 = cljs.core.nth.call(null,vec__157219__157220,0,null);
var on_finish__157222 = cljs.core.nth.call(null,vec__157219__157220,1,null);

return $elem.fadeIn(speed__157221,on_finish__157222);
};
var fade_in = function ($elem,var_args){
var p__157218 = null;
if (goog.isDef(var_args)) {
  p__157218 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__157218);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__157223){
var $elem = cljs.core.first(arglist__157223);
var p__157218 = cljs.core.rest(arglist__157223);
return fade_in__delegate.call(this, $elem, p__157218);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__157224){
var vec__157225__157226 = p__157224;
var speed__157227 = cljs.core.nth.call(null,vec__157225__157226,0,null);
var on_finish__157228 = cljs.core.nth.call(null,vec__157225__157226,1,null);

return $elem.slideUp(speed__157227,on_finish__157228);
};
var slide_up = function ($elem,var_args){
var p__157224 = null;
if (goog.isDef(var_args)) {
  p__157224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__157224);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__157229){
var $elem = cljs.core.first(arglist__157229);
var p__157224 = cljs.core.rest(arglist__157229);
return slide_up__delegate.call(this, $elem, p__157224);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__157230){
var vec__157231__157232 = p__157230;
var speed__157233 = cljs.core.nth.call(null,vec__157231__157232,0,null);
var on_finish__157234 = cljs.core.nth.call(null,vec__157231__157232,1,null);

return $elem.slideDown(speed__157233,on_finish__157234);
};
var slide_down = function ($elem,var_args){
var p__157230 = null;
if (goog.isDef(var_args)) {
  p__157230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__157230);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__157235){
var $elem = cljs.core.first(arglist__157235);
var p__157230 = cljs.core.rest(arglist__157235);
return slide_down__delegate.call(this, $elem, p__157230);
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
var val__delegate = function ($elem,p__157236){
var vec__157237__157238 = p__157236;
var v__157239 = cljs.core.nth.call(null,vec__157237__157238,0,null);

if(cljs.core.truth_(v__157239))
{return $elem.val(v__157239);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__157236 = null;
if (goog.isDef(var_args)) {
  p__157236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__157236);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__157240){
var $elem = cljs.core.first(arglist__157240);
var p__157236 = cljs.core.rest(arglist__157240);
return val__delegate.call(this, $elem, p__157236);
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
jayq.core.xhr = (function xhr(p__157241,content,callback){
var vec__157242__157243 = p__157241;
var method__157244 = cljs.core.nth.call(null,vec__157242__157243,0,null);
var uri__157245 = cljs.core.nth.call(null,vec__157242__157243,1,null);

var params__157246 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__157244)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__157245,params__157246);
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
var on__delegate = function ($elem,events,p__157247){
var vec__157248__157249 = p__157247;
var sel__157250 = cljs.core.nth.call(null,vec__157248__157249,0,null);
var data__157251 = cljs.core.nth.call(null,vec__157248__157249,1,null);
var handler__157252 = cljs.core.nth.call(null,vec__157248__157249,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__157250),data__157251,handler__157252);
};
var on = function ($elem,events,var_args){
var p__157247 = null;
if (goog.isDef(var_args)) {
  p__157247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__157247);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__157253){
var $elem = cljs.core.first(arglist__157253);
var events = cljs.core.first(cljs.core.next(arglist__157253));
var p__157247 = cljs.core.rest(cljs.core.next(arglist__157253));
return on__delegate.call(this, $elem, events, p__157247);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__157254){
var vec__157255__157256 = p__157254;
var sel__157257 = cljs.core.nth.call(null,vec__157255__157256,0,null);
var data__157258 = cljs.core.nth.call(null,vec__157255__157256,1,null);
var handler__157259 = cljs.core.nth.call(null,vec__157255__157256,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__157257),data__157258,handler__157259);
};
var one = function ($elem,events,var_args){
var p__157254 = null;
if (goog.isDef(var_args)) {
  p__157254 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__157254);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__157260){
var $elem = cljs.core.first(arglist__157260);
var events = cljs.core.first(cljs.core.next(arglist__157260));
var p__157254 = cljs.core.rest(cljs.core.next(arglist__157260));
return one__delegate.call(this, $elem, events, p__157254);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__157261){
var vec__157262__157263 = p__157261;
var sel__157264 = cljs.core.nth.call(null,vec__157262__157263,0,null);
var handler__157265 = cljs.core.nth.call(null,vec__157262__157263,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__157264),handler__157265);
};
var off = function ($elem,events,var_args){
var p__157261 = null;
if (goog.isDef(var_args)) {
  p__157261 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__157261);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__157266){
var $elem = cljs.core.first(arglist__157266);
var events = cljs.core.first(cljs.core.next(arglist__157266));
var p__157261 = cljs.core.rest(cljs.core.next(arglist__157266));
return off__delegate.call(this, $elem, events, p__157261);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
