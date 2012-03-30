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
{var temp__3695__auto____265161 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____265161))
{var cm__265162 = temp__3695__auto____265161;

return cljs.core.str.call(null,"[crateGroup=",cm__265162,"]");
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
var $__delegate = function (sel,p__265163){
var vec__265164__265165 = p__265163;
var context__265166 = cljs.core.nth.call(null,vec__265164__265165,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__265166)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__265166);
}
};
var $ = function (sel,var_args){
var p__265163 = null;
if (goog.isDef(var_args)) {
  p__265163 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__265163);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__265167){
var sel = cljs.core.first(arglist__265167);
var p__265163 = cljs.core.rest(arglist__265167);
return $__delegate.call(this, sel, p__265163);
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
var G__265169 = null;
var G__265169__265170 = (function (this$,k){
var or__3548__auto____265168 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____265168))
{return or__3548__auto____265168;
} else
{return null;
}
});
var G__265169__265171 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__265169 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__265169__265170.call(this,this$,k);
case  3 :
return G__265169__265171.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__265169;
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
var G__265173 = null;
var G__265173__265174 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__265173__265175 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__265173 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__265173__265174.call(this,_,k);
case  3 :
return G__265173__265175.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__265173;
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
var attr__delegate = function ($elem,a,p__265177){
var vec__265178__265179 = p__265177;
var v__265180 = cljs.core.nth.call(null,vec__265178__265179,0,null);

var a__265181 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__265180)))
{return $elem.attr(a__265181);
} else
{return $elem.attr(a__265181,v__265180);
}
};
var attr = function ($elem,a,var_args){
var p__265177 = null;
if (goog.isDef(var_args)) {
  p__265177 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__265177);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__265182){
var $elem = cljs.core.first(arglist__265182);
var a = cljs.core.first(cljs.core.next(arglist__265182));
var p__265177 = cljs.core.rest(cljs.core.next(arglist__265182));
return attr__delegate.call(this, $elem, a, p__265177);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__265183){
var vec__265184__265185 = p__265183;
var v__265186 = cljs.core.nth.call(null,vec__265184__265185,0,null);

var k__265187 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__265186)))
{return $elem.data(k__265187);
} else
{return $elem.data(k__265187,v__265186);
}
};
var data = function ($elem,k,var_args){
var p__265183 = null;
if (goog.isDef(var_args)) {
  p__265183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__265183);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__265188){
var $elem = cljs.core.first(arglist__265188);
var k = cljs.core.first(cljs.core.next(arglist__265188));
var p__265183 = cljs.core.rest(cljs.core.next(arglist__265188));
return data__delegate.call(this, $elem, k, p__265183);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__265189 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__265189);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__265190 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__265190);
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
var hide__delegate = function ($elem,p__265191){
var vec__265192__265193 = p__265191;
var speed__265194 = cljs.core.nth.call(null,vec__265192__265193,0,null);
var on_finish__265195 = cljs.core.nth.call(null,vec__265192__265193,1,null);

return $elem.hide(speed__265194,on_finish__265195);
};
var hide = function ($elem,var_args){
var p__265191 = null;
if (goog.isDef(var_args)) {
  p__265191 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__265191);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__265196){
var $elem = cljs.core.first(arglist__265196);
var p__265191 = cljs.core.rest(arglist__265196);
return hide__delegate.call(this, $elem, p__265191);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__265197){
var vec__265198__265199 = p__265197;
var speed__265200 = cljs.core.nth.call(null,vec__265198__265199,0,null);
var on_finish__265201 = cljs.core.nth.call(null,vec__265198__265199,1,null);

return $elem.show(speed__265200,on_finish__265201);
};
var show = function ($elem,var_args){
var p__265197 = null;
if (goog.isDef(var_args)) {
  p__265197 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__265197);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__265202){
var $elem = cljs.core.first(arglist__265202);
var p__265197 = cljs.core.rest(arglist__265202);
return show__delegate.call(this, $elem, p__265197);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__265203){
var vec__265204__265205 = p__265203;
var speed__265206 = cljs.core.nth.call(null,vec__265204__265205,0,null);
var on_finish__265207 = cljs.core.nth.call(null,vec__265204__265205,1,null);

return $elem.toggle(speed__265206,on_finish__265207);
};
var toggle = function ($elem,var_args){
var p__265203 = null;
if (goog.isDef(var_args)) {
  p__265203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__265203);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__265208){
var $elem = cljs.core.first(arglist__265208);
var p__265203 = cljs.core.rest(arglist__265208);
return toggle__delegate.call(this, $elem, p__265203);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__265209){
var vec__265210__265211 = p__265209;
var speed__265212 = cljs.core.nth.call(null,vec__265210__265211,0,null);
var on_finish__265213 = cljs.core.nth.call(null,vec__265210__265211,1,null);

return $elem.fadeOut(speed__265212,on_finish__265213);
};
var fade_out = function ($elem,var_args){
var p__265209 = null;
if (goog.isDef(var_args)) {
  p__265209 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__265209);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__265214){
var $elem = cljs.core.first(arglist__265214);
var p__265209 = cljs.core.rest(arglist__265214);
return fade_out__delegate.call(this, $elem, p__265209);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__265215){
var vec__265216__265217 = p__265215;
var speed__265218 = cljs.core.nth.call(null,vec__265216__265217,0,null);
var on_finish__265219 = cljs.core.nth.call(null,vec__265216__265217,1,null);

return $elem.fadeIn(speed__265218,on_finish__265219);
};
var fade_in = function ($elem,var_args){
var p__265215 = null;
if (goog.isDef(var_args)) {
  p__265215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__265215);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__265220){
var $elem = cljs.core.first(arglist__265220);
var p__265215 = cljs.core.rest(arglist__265220);
return fade_in__delegate.call(this, $elem, p__265215);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__265221){
var vec__265222__265223 = p__265221;
var speed__265224 = cljs.core.nth.call(null,vec__265222__265223,0,null);
var on_finish__265225 = cljs.core.nth.call(null,vec__265222__265223,1,null);

return $elem.slideUp(speed__265224,on_finish__265225);
};
var slide_up = function ($elem,var_args){
var p__265221 = null;
if (goog.isDef(var_args)) {
  p__265221 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__265221);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__265226){
var $elem = cljs.core.first(arglist__265226);
var p__265221 = cljs.core.rest(arglist__265226);
return slide_up__delegate.call(this, $elem, p__265221);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__265227){
var vec__265228__265229 = p__265227;
var speed__265230 = cljs.core.nth.call(null,vec__265228__265229,0,null);
var on_finish__265231 = cljs.core.nth.call(null,vec__265228__265229,1,null);

return $elem.slideDown(speed__265230,on_finish__265231);
};
var slide_down = function ($elem,var_args){
var p__265227 = null;
if (goog.isDef(var_args)) {
  p__265227 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__265227);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__265232){
var $elem = cljs.core.first(arglist__265232);
var p__265227 = cljs.core.rest(arglist__265232);
return slide_down__delegate.call(this, $elem, p__265227);
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
var val__delegate = function ($elem,p__265233){
var vec__265234__265235 = p__265233;
var v__265236 = cljs.core.nth.call(null,vec__265234__265235,0,null);

if(cljs.core.truth_(v__265236))
{return $elem.val(v__265236);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__265233 = null;
if (goog.isDef(var_args)) {
  p__265233 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__265233);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__265237){
var $elem = cljs.core.first(arglist__265237);
var p__265233 = cljs.core.rest(arglist__265237);
return val__delegate.call(this, $elem, p__265233);
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
jayq.core.xhr = (function xhr(p__265238,content,callback){
var vec__265239__265240 = p__265238;
var method__265241 = cljs.core.nth.call(null,vec__265239__265240,0,null);
var uri__265242 = cljs.core.nth.call(null,vec__265239__265240,1,null);

var params__265243 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__265241)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__265242,params__265243);
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
var on__delegate = function ($elem,events,p__265244){
var vec__265245__265246 = p__265244;
var sel__265247 = cljs.core.nth.call(null,vec__265245__265246,0,null);
var data__265248 = cljs.core.nth.call(null,vec__265245__265246,1,null);
var handler__265249 = cljs.core.nth.call(null,vec__265245__265246,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__265247),data__265248,handler__265249);
};
var on = function ($elem,events,var_args){
var p__265244 = null;
if (goog.isDef(var_args)) {
  p__265244 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__265244);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__265250){
var $elem = cljs.core.first(arglist__265250);
var events = cljs.core.first(cljs.core.next(arglist__265250));
var p__265244 = cljs.core.rest(cljs.core.next(arglist__265250));
return on__delegate.call(this, $elem, events, p__265244);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__265251){
var vec__265252__265253 = p__265251;
var sel__265254 = cljs.core.nth.call(null,vec__265252__265253,0,null);
var data__265255 = cljs.core.nth.call(null,vec__265252__265253,1,null);
var handler__265256 = cljs.core.nth.call(null,vec__265252__265253,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__265254),data__265255,handler__265256);
};
var one = function ($elem,events,var_args){
var p__265251 = null;
if (goog.isDef(var_args)) {
  p__265251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__265251);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__265257){
var $elem = cljs.core.first(arglist__265257);
var events = cljs.core.first(cljs.core.next(arglist__265257));
var p__265251 = cljs.core.rest(cljs.core.next(arglist__265257));
return one__delegate.call(this, $elem, events, p__265251);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__265258){
var vec__265259__265260 = p__265258;
var sel__265261 = cljs.core.nth.call(null,vec__265259__265260,0,null);
var handler__265262 = cljs.core.nth.call(null,vec__265259__265260,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__265261),handler__265262);
};
var off = function ($elem,events,var_args){
var p__265258 = null;
if (goog.isDef(var_args)) {
  p__265258 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__265258);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__265263){
var $elem = cljs.core.first(arglist__265263);
var events = cljs.core.first(cljs.core.next(arglist__265263));
var p__265258 = cljs.core.rest(cljs.core.next(arglist__265263));
return off__delegate.call(this, $elem, events, p__265258);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
