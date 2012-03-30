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
{var temp__3695__auto____153122 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____153122))
{var cm__153123 = temp__3695__auto____153122;

return cljs.core.str.call(null,"[crateGroup=",cm__153123,"]");
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
var $__delegate = function (sel,p__153124){
var vec__153125__153126 = p__153124;
var context__153127 = cljs.core.nth.call(null,vec__153125__153126,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__153127)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__153127);
}
};
var $ = function (sel,var_args){
var p__153124 = null;
if (goog.isDef(var_args)) {
  p__153124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__153124);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__153128){
var sel = cljs.core.first(arglist__153128);
var p__153124 = cljs.core.rest(arglist__153128);
return $__delegate.call(this, sel, p__153124);
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
var G__153130 = null;
var G__153130__153131 = (function (this$,k){
var or__3548__auto____153129 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____153129))
{return or__3548__auto____153129;
} else
{return null;
}
});
var G__153130__153132 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__153130 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__153130__153131.call(this,this$,k);
case  3 :
return G__153130__153132.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__153130;
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
var G__153134 = null;
var G__153134__153135 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__153134__153136 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__153134 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__153134__153135.call(this,_,k);
case  3 :
return G__153134__153136.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__153134;
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
var attr__delegate = function ($elem,a,p__153138){
var vec__153139__153140 = p__153138;
var v__153141 = cljs.core.nth.call(null,vec__153139__153140,0,null);

var a__153142 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__153141)))
{return $elem.attr(a__153142);
} else
{return $elem.attr(a__153142,v__153141);
}
};
var attr = function ($elem,a,var_args){
var p__153138 = null;
if (goog.isDef(var_args)) {
  p__153138 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__153138);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__153143){
var $elem = cljs.core.first(arglist__153143);
var a = cljs.core.first(cljs.core.next(arglist__153143));
var p__153138 = cljs.core.rest(cljs.core.next(arglist__153143));
return attr__delegate.call(this, $elem, a, p__153138);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__153144){
var vec__153145__153146 = p__153144;
var v__153147 = cljs.core.nth.call(null,vec__153145__153146,0,null);

var k__153148 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__153147)))
{return $elem.data(k__153148);
} else
{return $elem.data(k__153148,v__153147);
}
};
var data = function ($elem,k,var_args){
var p__153144 = null;
if (goog.isDef(var_args)) {
  p__153144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__153144);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__153149){
var $elem = cljs.core.first(arglist__153149);
var k = cljs.core.first(cljs.core.next(arglist__153149));
var p__153144 = cljs.core.rest(cljs.core.next(arglist__153149));
return data__delegate.call(this, $elem, k, p__153144);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__153150 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__153150);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__153151 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__153151);
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
var hide__delegate = function ($elem,p__153152){
var vec__153153__153154 = p__153152;
var speed__153155 = cljs.core.nth.call(null,vec__153153__153154,0,null);
var on_finish__153156 = cljs.core.nth.call(null,vec__153153__153154,1,null);

return $elem.hide(speed__153155,on_finish__153156);
};
var hide = function ($elem,var_args){
var p__153152 = null;
if (goog.isDef(var_args)) {
  p__153152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__153152);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__153157){
var $elem = cljs.core.first(arglist__153157);
var p__153152 = cljs.core.rest(arglist__153157);
return hide__delegate.call(this, $elem, p__153152);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__153158){
var vec__153159__153160 = p__153158;
var speed__153161 = cljs.core.nth.call(null,vec__153159__153160,0,null);
var on_finish__153162 = cljs.core.nth.call(null,vec__153159__153160,1,null);

return $elem.show(speed__153161,on_finish__153162);
};
var show = function ($elem,var_args){
var p__153158 = null;
if (goog.isDef(var_args)) {
  p__153158 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__153158);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__153163){
var $elem = cljs.core.first(arglist__153163);
var p__153158 = cljs.core.rest(arglist__153163);
return show__delegate.call(this, $elem, p__153158);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__153164){
var vec__153165__153166 = p__153164;
var speed__153167 = cljs.core.nth.call(null,vec__153165__153166,0,null);
var on_finish__153168 = cljs.core.nth.call(null,vec__153165__153166,1,null);

return $elem.toggle(speed__153167,on_finish__153168);
};
var toggle = function ($elem,var_args){
var p__153164 = null;
if (goog.isDef(var_args)) {
  p__153164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__153164);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__153169){
var $elem = cljs.core.first(arglist__153169);
var p__153164 = cljs.core.rest(arglist__153169);
return toggle__delegate.call(this, $elem, p__153164);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__153170){
var vec__153171__153172 = p__153170;
var speed__153173 = cljs.core.nth.call(null,vec__153171__153172,0,null);
var on_finish__153174 = cljs.core.nth.call(null,vec__153171__153172,1,null);

return $elem.fadeOut(speed__153173,on_finish__153174);
};
var fade_out = function ($elem,var_args){
var p__153170 = null;
if (goog.isDef(var_args)) {
  p__153170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__153170);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__153175){
var $elem = cljs.core.first(arglist__153175);
var p__153170 = cljs.core.rest(arglist__153175);
return fade_out__delegate.call(this, $elem, p__153170);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__153176){
var vec__153177__153178 = p__153176;
var speed__153179 = cljs.core.nth.call(null,vec__153177__153178,0,null);
var on_finish__153180 = cljs.core.nth.call(null,vec__153177__153178,1,null);

return $elem.fadeIn(speed__153179,on_finish__153180);
};
var fade_in = function ($elem,var_args){
var p__153176 = null;
if (goog.isDef(var_args)) {
  p__153176 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__153176);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__153181){
var $elem = cljs.core.first(arglist__153181);
var p__153176 = cljs.core.rest(arglist__153181);
return fade_in__delegate.call(this, $elem, p__153176);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__153182){
var vec__153183__153184 = p__153182;
var speed__153185 = cljs.core.nth.call(null,vec__153183__153184,0,null);
var on_finish__153186 = cljs.core.nth.call(null,vec__153183__153184,1,null);

return $elem.slideUp(speed__153185,on_finish__153186);
};
var slide_up = function ($elem,var_args){
var p__153182 = null;
if (goog.isDef(var_args)) {
  p__153182 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__153182);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__153187){
var $elem = cljs.core.first(arglist__153187);
var p__153182 = cljs.core.rest(arglist__153187);
return slide_up__delegate.call(this, $elem, p__153182);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__153188){
var vec__153189__153190 = p__153188;
var speed__153191 = cljs.core.nth.call(null,vec__153189__153190,0,null);
var on_finish__153192 = cljs.core.nth.call(null,vec__153189__153190,1,null);

return $elem.slideDown(speed__153191,on_finish__153192);
};
var slide_down = function ($elem,var_args){
var p__153188 = null;
if (goog.isDef(var_args)) {
  p__153188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__153188);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__153193){
var $elem = cljs.core.first(arglist__153193);
var p__153188 = cljs.core.rest(arglist__153193);
return slide_down__delegate.call(this, $elem, p__153188);
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
var val__delegate = function ($elem,p__153194){
var vec__153195__153196 = p__153194;
var v__153197 = cljs.core.nth.call(null,vec__153195__153196,0,null);

if(cljs.core.truth_(v__153197))
{return $elem.val(v__153197);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__153194 = null;
if (goog.isDef(var_args)) {
  p__153194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__153194);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__153198){
var $elem = cljs.core.first(arglist__153198);
var p__153194 = cljs.core.rest(arglist__153198);
return val__delegate.call(this, $elem, p__153194);
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
jayq.core.xhr = (function xhr(p__153199,content,callback){
var vec__153200__153201 = p__153199;
var method__153202 = cljs.core.nth.call(null,vec__153200__153201,0,null);
var uri__153203 = cljs.core.nth.call(null,vec__153200__153201,1,null);

var params__153204 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__153202)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__153203,params__153204);
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
var on__delegate = function ($elem,events,p__153205){
var vec__153206__153207 = p__153205;
var sel__153208 = cljs.core.nth.call(null,vec__153206__153207,0,null);
var data__153209 = cljs.core.nth.call(null,vec__153206__153207,1,null);
var handler__153210 = cljs.core.nth.call(null,vec__153206__153207,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__153208),data__153209,handler__153210);
};
var on = function ($elem,events,var_args){
var p__153205 = null;
if (goog.isDef(var_args)) {
  p__153205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__153205);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__153211){
var $elem = cljs.core.first(arglist__153211);
var events = cljs.core.first(cljs.core.next(arglist__153211));
var p__153205 = cljs.core.rest(cljs.core.next(arglist__153211));
return on__delegate.call(this, $elem, events, p__153205);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__153212){
var vec__153213__153214 = p__153212;
var sel__153215 = cljs.core.nth.call(null,vec__153213__153214,0,null);
var data__153216 = cljs.core.nth.call(null,vec__153213__153214,1,null);
var handler__153217 = cljs.core.nth.call(null,vec__153213__153214,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__153215),data__153216,handler__153217);
};
var one = function ($elem,events,var_args){
var p__153212 = null;
if (goog.isDef(var_args)) {
  p__153212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__153212);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__153218){
var $elem = cljs.core.first(arglist__153218);
var events = cljs.core.first(cljs.core.next(arglist__153218));
var p__153212 = cljs.core.rest(cljs.core.next(arglist__153218));
return one__delegate.call(this, $elem, events, p__153212);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__153219){
var vec__153220__153221 = p__153219;
var sel__153222 = cljs.core.nth.call(null,vec__153220__153221,0,null);
var handler__153223 = cljs.core.nth.call(null,vec__153220__153221,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__153222),handler__153223);
};
var off = function ($elem,events,var_args){
var p__153219 = null;
if (goog.isDef(var_args)) {
  p__153219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__153219);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__153224){
var $elem = cljs.core.first(arglist__153224);
var events = cljs.core.first(cljs.core.next(arglist__153224));
var p__153219 = cljs.core.rest(cljs.core.next(arglist__153224));
return off__delegate.call(this, $elem, events, p__153219);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
