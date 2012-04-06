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
{var temp__3695__auto____392052 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____392052))
{var cm__392053 = temp__3695__auto____392052;

return cljs.core.str.call(null,"[crateGroup=",cm__392053,"]");
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
var $__delegate = function (sel,p__392054){
var vec__392055__392056 = p__392054;
var context__392057 = cljs.core.nth.call(null,vec__392055__392056,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__392057)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__392057);
}
};
var $ = function (sel,var_args){
var p__392054 = null;
if (goog.isDef(var_args)) {
  p__392054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__392054);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__392058){
var sel = cljs.core.first(arglist__392058);
var p__392054 = cljs.core.rest(arglist__392058);
return $__delegate.call(this, sel, p__392054);
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
var G__392060 = null;
var G__392060__392061 = (function (this$,k){
var or__3548__auto____392059 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____392059))
{return or__3548__auto____392059;
} else
{return null;
}
});
var G__392060__392062 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__392060 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__392060__392061.call(this,this$,k);
case  3 :
return G__392060__392062.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392060;
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
var G__392064 = null;
var G__392064__392065 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__392064__392066 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__392064 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__392064__392065.call(this,_,k);
case  3 :
return G__392064__392066.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392064;
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
var attr__delegate = function ($elem,a,p__392068){
var vec__392069__392070 = p__392068;
var v__392071 = cljs.core.nth.call(null,vec__392069__392070,0,null);

var a__392072 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__392071)))
{return $elem.attr(a__392072);
} else
{return $elem.attr(a__392072,v__392071);
}
};
var attr = function ($elem,a,var_args){
var p__392068 = null;
if (goog.isDef(var_args)) {
  p__392068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__392068);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__392073){
var $elem = cljs.core.first(arglist__392073);
var a = cljs.core.first(cljs.core.next(arglist__392073));
var p__392068 = cljs.core.rest(cljs.core.next(arglist__392073));
return attr__delegate.call(this, $elem, a, p__392068);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__392074){
var vec__392075__392076 = p__392074;
var v__392077 = cljs.core.nth.call(null,vec__392075__392076,0,null);

var k__392078 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__392077)))
{return $elem.data(k__392078);
} else
{return $elem.data(k__392078,v__392077);
}
};
var data = function ($elem,k,var_args){
var p__392074 = null;
if (goog.isDef(var_args)) {
  p__392074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__392074);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__392079){
var $elem = cljs.core.first(arglist__392079);
var k = cljs.core.first(cljs.core.next(arglist__392079));
var p__392074 = cljs.core.rest(cljs.core.next(arglist__392079));
return data__delegate.call(this, $elem, k, p__392074);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__392080 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__392080);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__392081 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__392081);
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
var hide__delegate = function ($elem,p__392082){
var vec__392083__392084 = p__392082;
var speed__392085 = cljs.core.nth.call(null,vec__392083__392084,0,null);
var on_finish__392086 = cljs.core.nth.call(null,vec__392083__392084,1,null);

return $elem.hide(speed__392085,on_finish__392086);
};
var hide = function ($elem,var_args){
var p__392082 = null;
if (goog.isDef(var_args)) {
  p__392082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__392082);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__392087){
var $elem = cljs.core.first(arglist__392087);
var p__392082 = cljs.core.rest(arglist__392087);
return hide__delegate.call(this, $elem, p__392082);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__392088){
var vec__392089__392090 = p__392088;
var speed__392091 = cljs.core.nth.call(null,vec__392089__392090,0,null);
var on_finish__392092 = cljs.core.nth.call(null,vec__392089__392090,1,null);

return $elem.show(speed__392091,on_finish__392092);
};
var show = function ($elem,var_args){
var p__392088 = null;
if (goog.isDef(var_args)) {
  p__392088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__392088);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__392093){
var $elem = cljs.core.first(arglist__392093);
var p__392088 = cljs.core.rest(arglist__392093);
return show__delegate.call(this, $elem, p__392088);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__392094){
var vec__392095__392096 = p__392094;
var speed__392097 = cljs.core.nth.call(null,vec__392095__392096,0,null);
var on_finish__392098 = cljs.core.nth.call(null,vec__392095__392096,1,null);

return $elem.toggle(speed__392097,on_finish__392098);
};
var toggle = function ($elem,var_args){
var p__392094 = null;
if (goog.isDef(var_args)) {
  p__392094 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__392094);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__392099){
var $elem = cljs.core.first(arglist__392099);
var p__392094 = cljs.core.rest(arglist__392099);
return toggle__delegate.call(this, $elem, p__392094);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__392100){
var vec__392101__392102 = p__392100;
var speed__392103 = cljs.core.nth.call(null,vec__392101__392102,0,null);
var on_finish__392104 = cljs.core.nth.call(null,vec__392101__392102,1,null);

return $elem.fadeOut(speed__392103,on_finish__392104);
};
var fade_out = function ($elem,var_args){
var p__392100 = null;
if (goog.isDef(var_args)) {
  p__392100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__392100);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__392105){
var $elem = cljs.core.first(arglist__392105);
var p__392100 = cljs.core.rest(arglist__392105);
return fade_out__delegate.call(this, $elem, p__392100);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__392106){
var vec__392107__392108 = p__392106;
var speed__392109 = cljs.core.nth.call(null,vec__392107__392108,0,null);
var on_finish__392110 = cljs.core.nth.call(null,vec__392107__392108,1,null);

return $elem.fadeIn(speed__392109,on_finish__392110);
};
var fade_in = function ($elem,var_args){
var p__392106 = null;
if (goog.isDef(var_args)) {
  p__392106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__392106);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__392111){
var $elem = cljs.core.first(arglist__392111);
var p__392106 = cljs.core.rest(arglist__392111);
return fade_in__delegate.call(this, $elem, p__392106);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__392112){
var vec__392113__392114 = p__392112;
var speed__392115 = cljs.core.nth.call(null,vec__392113__392114,0,null);
var on_finish__392116 = cljs.core.nth.call(null,vec__392113__392114,1,null);

return $elem.slideUp(speed__392115,on_finish__392116);
};
var slide_up = function ($elem,var_args){
var p__392112 = null;
if (goog.isDef(var_args)) {
  p__392112 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__392112);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__392117){
var $elem = cljs.core.first(arglist__392117);
var p__392112 = cljs.core.rest(arglist__392117);
return slide_up__delegate.call(this, $elem, p__392112);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__392118){
var vec__392119__392120 = p__392118;
var speed__392121 = cljs.core.nth.call(null,vec__392119__392120,0,null);
var on_finish__392122 = cljs.core.nth.call(null,vec__392119__392120,1,null);

return $elem.slideDown(speed__392121,on_finish__392122);
};
var slide_down = function ($elem,var_args){
var p__392118 = null;
if (goog.isDef(var_args)) {
  p__392118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__392118);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__392123){
var $elem = cljs.core.first(arglist__392123);
var p__392118 = cljs.core.rest(arglist__392123);
return slide_down__delegate.call(this, $elem, p__392118);
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
var val__delegate = function ($elem,p__392124){
var vec__392125__392126 = p__392124;
var v__392127 = cljs.core.nth.call(null,vec__392125__392126,0,null);

if(cljs.core.truth_(v__392127))
{return $elem.val(v__392127);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__392124 = null;
if (goog.isDef(var_args)) {
  p__392124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__392124);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__392128){
var $elem = cljs.core.first(arglist__392128);
var p__392124 = cljs.core.rest(arglist__392128);
return val__delegate.call(this, $elem, p__392124);
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
jayq.core.xhr = (function xhr(p__392129,content,callback){
var vec__392130__392131 = p__392129;
var method__392132 = cljs.core.nth.call(null,vec__392130__392131,0,null);
var uri__392133 = cljs.core.nth.call(null,vec__392130__392131,1,null);

var params__392134 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__392132)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__392133,params__392134);
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
var on__delegate = function ($elem,events,p__392135){
var vec__392136__392137 = p__392135;
var sel__392138 = cljs.core.nth.call(null,vec__392136__392137,0,null);
var data__392139 = cljs.core.nth.call(null,vec__392136__392137,1,null);
var handler__392140 = cljs.core.nth.call(null,vec__392136__392137,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__392138),data__392139,handler__392140);
};
var on = function ($elem,events,var_args){
var p__392135 = null;
if (goog.isDef(var_args)) {
  p__392135 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__392135);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__392141){
var $elem = cljs.core.first(arglist__392141);
var events = cljs.core.first(cljs.core.next(arglist__392141));
var p__392135 = cljs.core.rest(cljs.core.next(arglist__392141));
return on__delegate.call(this, $elem, events, p__392135);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__392142){
var vec__392143__392144 = p__392142;
var sel__392145 = cljs.core.nth.call(null,vec__392143__392144,0,null);
var data__392146 = cljs.core.nth.call(null,vec__392143__392144,1,null);
var handler__392147 = cljs.core.nth.call(null,vec__392143__392144,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__392145),data__392146,handler__392147);
};
var one = function ($elem,events,var_args){
var p__392142 = null;
if (goog.isDef(var_args)) {
  p__392142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__392142);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__392148){
var $elem = cljs.core.first(arglist__392148);
var events = cljs.core.first(cljs.core.next(arglist__392148));
var p__392142 = cljs.core.rest(cljs.core.next(arglist__392148));
return one__delegate.call(this, $elem, events, p__392142);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__392149){
var vec__392150__392151 = p__392149;
var sel__392152 = cljs.core.nth.call(null,vec__392150__392151,0,null);
var handler__392153 = cljs.core.nth.call(null,vec__392150__392151,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__392152),handler__392153);
};
var off = function ($elem,events,var_args){
var p__392149 = null;
if (goog.isDef(var_args)) {
  p__392149 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__392149);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__392154){
var $elem = cljs.core.first(arglist__392154);
var events = cljs.core.first(cljs.core.next(arglist__392154));
var p__392149 = cljs.core.rest(cljs.core.next(arglist__392154));
return off__delegate.call(this, $elem, events, p__392149);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
