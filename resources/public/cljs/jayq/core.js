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
{var temp__3695__auto____339164 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____339164))
{var cm__339165 = temp__3695__auto____339164;

return cljs.core.str.call(null,"[crateGroup=",cm__339165,"]");
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
var $__delegate = function (sel,p__339166){
var vec__339167__339168 = p__339166;
var context__339169 = cljs.core.nth.call(null,vec__339167__339168,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__339169)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__339169);
}
};
var $ = function (sel,var_args){
var p__339166 = null;
if (goog.isDef(var_args)) {
  p__339166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__339166);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__339170){
var sel = cljs.core.first(arglist__339170);
var p__339166 = cljs.core.rest(arglist__339170);
return $__delegate.call(this, sel, p__339166);
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
var G__339172 = null;
var G__339172__339173 = (function (this$,k){
var or__3548__auto____339171 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____339171))
{return or__3548__auto____339171;
} else
{return null;
}
});
var G__339172__339174 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__339172 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__339172__339173.call(this,this$,k);
case  3 :
return G__339172__339174.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__339172;
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
var G__339176 = null;
var G__339176__339177 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__339176__339178 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__339176 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__339176__339177.call(this,_,k);
case  3 :
return G__339176__339178.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__339176;
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
var attr__delegate = function ($elem,a,p__339180){
var vec__339181__339182 = p__339180;
var v__339183 = cljs.core.nth.call(null,vec__339181__339182,0,null);

var a__339184 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__339183)))
{return $elem.attr(a__339184);
} else
{return $elem.attr(a__339184,v__339183);
}
};
var attr = function ($elem,a,var_args){
var p__339180 = null;
if (goog.isDef(var_args)) {
  p__339180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__339180);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__339185){
var $elem = cljs.core.first(arglist__339185);
var a = cljs.core.first(cljs.core.next(arglist__339185));
var p__339180 = cljs.core.rest(cljs.core.next(arglist__339185));
return attr__delegate.call(this, $elem, a, p__339180);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__339186){
var vec__339187__339188 = p__339186;
var v__339189 = cljs.core.nth.call(null,vec__339187__339188,0,null);

var k__339190 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__339189)))
{return $elem.data(k__339190);
} else
{return $elem.data(k__339190,v__339189);
}
};
var data = function ($elem,k,var_args){
var p__339186 = null;
if (goog.isDef(var_args)) {
  p__339186 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__339186);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__339191){
var $elem = cljs.core.first(arglist__339191);
var k = cljs.core.first(cljs.core.next(arglist__339191));
var p__339186 = cljs.core.rest(cljs.core.next(arglist__339191));
return data__delegate.call(this, $elem, k, p__339186);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__339192 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__339192);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__339193 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__339193);
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
var hide__delegate = function ($elem,p__339194){
var vec__339195__339196 = p__339194;
var speed__339197 = cljs.core.nth.call(null,vec__339195__339196,0,null);
var on_finish__339198 = cljs.core.nth.call(null,vec__339195__339196,1,null);

return $elem.hide(speed__339197,on_finish__339198);
};
var hide = function ($elem,var_args){
var p__339194 = null;
if (goog.isDef(var_args)) {
  p__339194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__339194);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__339199){
var $elem = cljs.core.first(arglist__339199);
var p__339194 = cljs.core.rest(arglist__339199);
return hide__delegate.call(this, $elem, p__339194);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__339200){
var vec__339201__339202 = p__339200;
var speed__339203 = cljs.core.nth.call(null,vec__339201__339202,0,null);
var on_finish__339204 = cljs.core.nth.call(null,vec__339201__339202,1,null);

return $elem.show(speed__339203,on_finish__339204);
};
var show = function ($elem,var_args){
var p__339200 = null;
if (goog.isDef(var_args)) {
  p__339200 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__339200);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__339205){
var $elem = cljs.core.first(arglist__339205);
var p__339200 = cljs.core.rest(arglist__339205);
return show__delegate.call(this, $elem, p__339200);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__339206){
var vec__339207__339208 = p__339206;
var speed__339209 = cljs.core.nth.call(null,vec__339207__339208,0,null);
var on_finish__339210 = cljs.core.nth.call(null,vec__339207__339208,1,null);

return $elem.toggle(speed__339209,on_finish__339210);
};
var toggle = function ($elem,var_args){
var p__339206 = null;
if (goog.isDef(var_args)) {
  p__339206 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__339206);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__339211){
var $elem = cljs.core.first(arglist__339211);
var p__339206 = cljs.core.rest(arglist__339211);
return toggle__delegate.call(this, $elem, p__339206);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__339212){
var vec__339213__339214 = p__339212;
var speed__339215 = cljs.core.nth.call(null,vec__339213__339214,0,null);
var on_finish__339216 = cljs.core.nth.call(null,vec__339213__339214,1,null);

return $elem.fadeOut(speed__339215,on_finish__339216);
};
var fade_out = function ($elem,var_args){
var p__339212 = null;
if (goog.isDef(var_args)) {
  p__339212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__339212);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__339217){
var $elem = cljs.core.first(arglist__339217);
var p__339212 = cljs.core.rest(arglist__339217);
return fade_out__delegate.call(this, $elem, p__339212);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__339218){
var vec__339219__339220 = p__339218;
var speed__339221 = cljs.core.nth.call(null,vec__339219__339220,0,null);
var on_finish__339222 = cljs.core.nth.call(null,vec__339219__339220,1,null);

return $elem.fadeIn(speed__339221,on_finish__339222);
};
var fade_in = function ($elem,var_args){
var p__339218 = null;
if (goog.isDef(var_args)) {
  p__339218 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__339218);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__339223){
var $elem = cljs.core.first(arglist__339223);
var p__339218 = cljs.core.rest(arglist__339223);
return fade_in__delegate.call(this, $elem, p__339218);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__339224){
var vec__339225__339226 = p__339224;
var speed__339227 = cljs.core.nth.call(null,vec__339225__339226,0,null);
var on_finish__339228 = cljs.core.nth.call(null,vec__339225__339226,1,null);

return $elem.slideUp(speed__339227,on_finish__339228);
};
var slide_up = function ($elem,var_args){
var p__339224 = null;
if (goog.isDef(var_args)) {
  p__339224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__339224);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__339229){
var $elem = cljs.core.first(arglist__339229);
var p__339224 = cljs.core.rest(arglist__339229);
return slide_up__delegate.call(this, $elem, p__339224);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__339230){
var vec__339231__339232 = p__339230;
var speed__339233 = cljs.core.nth.call(null,vec__339231__339232,0,null);
var on_finish__339234 = cljs.core.nth.call(null,vec__339231__339232,1,null);

return $elem.slideDown(speed__339233,on_finish__339234);
};
var slide_down = function ($elem,var_args){
var p__339230 = null;
if (goog.isDef(var_args)) {
  p__339230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__339230);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__339235){
var $elem = cljs.core.first(arglist__339235);
var p__339230 = cljs.core.rest(arglist__339235);
return slide_down__delegate.call(this, $elem, p__339230);
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
var val__delegate = function ($elem,p__339236){
var vec__339237__339238 = p__339236;
var v__339239 = cljs.core.nth.call(null,vec__339237__339238,0,null);

if(cljs.core.truth_(v__339239))
{return $elem.val(v__339239);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__339236 = null;
if (goog.isDef(var_args)) {
  p__339236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__339236);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__339240){
var $elem = cljs.core.first(arglist__339240);
var p__339236 = cljs.core.rest(arglist__339240);
return val__delegate.call(this, $elem, p__339236);
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
jayq.core.xhr = (function xhr(p__339241,content,callback){
var vec__339242__339243 = p__339241;
var method__339244 = cljs.core.nth.call(null,vec__339242__339243,0,null);
var uri__339245 = cljs.core.nth.call(null,vec__339242__339243,1,null);

var params__339246 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__339244)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__339245,params__339246);
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
var on__delegate = function ($elem,events,p__339247){
var vec__339248__339249 = p__339247;
var sel__339250 = cljs.core.nth.call(null,vec__339248__339249,0,null);
var data__339251 = cljs.core.nth.call(null,vec__339248__339249,1,null);
var handler__339252 = cljs.core.nth.call(null,vec__339248__339249,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__339250),data__339251,handler__339252);
};
var on = function ($elem,events,var_args){
var p__339247 = null;
if (goog.isDef(var_args)) {
  p__339247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__339247);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__339253){
var $elem = cljs.core.first(arglist__339253);
var events = cljs.core.first(cljs.core.next(arglist__339253));
var p__339247 = cljs.core.rest(cljs.core.next(arglist__339253));
return on__delegate.call(this, $elem, events, p__339247);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__339254){
var vec__339255__339256 = p__339254;
var sel__339257 = cljs.core.nth.call(null,vec__339255__339256,0,null);
var data__339258 = cljs.core.nth.call(null,vec__339255__339256,1,null);
var handler__339259 = cljs.core.nth.call(null,vec__339255__339256,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__339257),data__339258,handler__339259);
};
var one = function ($elem,events,var_args){
var p__339254 = null;
if (goog.isDef(var_args)) {
  p__339254 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__339254);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__339260){
var $elem = cljs.core.first(arglist__339260);
var events = cljs.core.first(cljs.core.next(arglist__339260));
var p__339254 = cljs.core.rest(cljs.core.next(arglist__339260));
return one__delegate.call(this, $elem, events, p__339254);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__339261){
var vec__339262__339263 = p__339261;
var sel__339264 = cljs.core.nth.call(null,vec__339262__339263,0,null);
var handler__339265 = cljs.core.nth.call(null,vec__339262__339263,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__339264),handler__339265);
};
var off = function ($elem,events,var_args){
var p__339261 = null;
if (goog.isDef(var_args)) {
  p__339261 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__339261);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__339266){
var $elem = cljs.core.first(arglist__339266);
var events = cljs.core.first(cljs.core.next(arglist__339266));
var p__339261 = cljs.core.rest(cljs.core.next(arglist__339266));
return off__delegate.call(this, $elem, events, p__339261);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
