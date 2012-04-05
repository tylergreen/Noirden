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
{var temp__3695__auto____201034 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____201034))
{var cm__201035 = temp__3695__auto____201034;

return cljs.core.str.call(null,"[crateGroup=",cm__201035,"]");
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
var $__delegate = function (sel,p__201036){
var vec__201037__201038 = p__201036;
var context__201039 = cljs.core.nth.call(null,vec__201037__201038,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__201039)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__201039);
}
};
var $ = function (sel,var_args){
var p__201036 = null;
if (goog.isDef(var_args)) {
  p__201036 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__201036);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__201040){
var sel = cljs.core.first(arglist__201040);
var p__201036 = cljs.core.rest(arglist__201040);
return $__delegate.call(this, sel, p__201036);
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
var G__201042 = null;
var G__201042__201043 = (function (this$,k){
var or__3548__auto____201041 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____201041))
{return or__3548__auto____201041;
} else
{return null;
}
});
var G__201042__201044 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__201042 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__201042__201043.call(this,this$,k);
case  3 :
return G__201042__201044.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__201042;
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
var G__201046 = null;
var G__201046__201047 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__201046__201048 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__201046 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__201046__201047.call(this,_,k);
case  3 :
return G__201046__201048.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__201046;
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
var attr__delegate = function ($elem,a,p__201050){
var vec__201051__201052 = p__201050;
var v__201053 = cljs.core.nth.call(null,vec__201051__201052,0,null);

var a__201054 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__201053)))
{return $elem.attr(a__201054);
} else
{return $elem.attr(a__201054,v__201053);
}
};
var attr = function ($elem,a,var_args){
var p__201050 = null;
if (goog.isDef(var_args)) {
  p__201050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__201050);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__201055){
var $elem = cljs.core.first(arglist__201055);
var a = cljs.core.first(cljs.core.next(arglist__201055));
var p__201050 = cljs.core.rest(cljs.core.next(arglist__201055));
return attr__delegate.call(this, $elem, a, p__201050);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__201056){
var vec__201057__201058 = p__201056;
var v__201059 = cljs.core.nth.call(null,vec__201057__201058,0,null);

var k__201060 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__201059)))
{return $elem.data(k__201060);
} else
{return $elem.data(k__201060,v__201059);
}
};
var data = function ($elem,k,var_args){
var p__201056 = null;
if (goog.isDef(var_args)) {
  p__201056 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__201056);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__201061){
var $elem = cljs.core.first(arglist__201061);
var k = cljs.core.first(cljs.core.next(arglist__201061));
var p__201056 = cljs.core.rest(cljs.core.next(arglist__201061));
return data__delegate.call(this, $elem, k, p__201056);
});
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__201062 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__201062);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__201063 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__201063);
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
var hide__delegate = function ($elem,p__201064){
var vec__201065__201066 = p__201064;
var speed__201067 = cljs.core.nth.call(null,vec__201065__201066,0,null);
var on_finish__201068 = cljs.core.nth.call(null,vec__201065__201066,1,null);

return $elem.hide(speed__201067,on_finish__201068);
};
var hide = function ($elem,var_args){
var p__201064 = null;
if (goog.isDef(var_args)) {
  p__201064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__201064);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__201069){
var $elem = cljs.core.first(arglist__201069);
var p__201064 = cljs.core.rest(arglist__201069);
return hide__delegate.call(this, $elem, p__201064);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__201070){
var vec__201071__201072 = p__201070;
var speed__201073 = cljs.core.nth.call(null,vec__201071__201072,0,null);
var on_finish__201074 = cljs.core.nth.call(null,vec__201071__201072,1,null);

return $elem.show(speed__201073,on_finish__201074);
};
var show = function ($elem,var_args){
var p__201070 = null;
if (goog.isDef(var_args)) {
  p__201070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__201070);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__201075){
var $elem = cljs.core.first(arglist__201075);
var p__201070 = cljs.core.rest(arglist__201075);
return show__delegate.call(this, $elem, p__201070);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__201076){
var vec__201077__201078 = p__201076;
var speed__201079 = cljs.core.nth.call(null,vec__201077__201078,0,null);
var on_finish__201080 = cljs.core.nth.call(null,vec__201077__201078,1,null);

return $elem.toggle(speed__201079,on_finish__201080);
};
var toggle = function ($elem,var_args){
var p__201076 = null;
if (goog.isDef(var_args)) {
  p__201076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__201076);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__201081){
var $elem = cljs.core.first(arglist__201081);
var p__201076 = cljs.core.rest(arglist__201081);
return toggle__delegate.call(this, $elem, p__201076);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__201082){
var vec__201083__201084 = p__201082;
var speed__201085 = cljs.core.nth.call(null,vec__201083__201084,0,null);
var on_finish__201086 = cljs.core.nth.call(null,vec__201083__201084,1,null);

return $elem.fadeOut(speed__201085,on_finish__201086);
};
var fade_out = function ($elem,var_args){
var p__201082 = null;
if (goog.isDef(var_args)) {
  p__201082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__201082);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__201087){
var $elem = cljs.core.first(arglist__201087);
var p__201082 = cljs.core.rest(arglist__201087);
return fade_out__delegate.call(this, $elem, p__201082);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__201088){
var vec__201089__201090 = p__201088;
var speed__201091 = cljs.core.nth.call(null,vec__201089__201090,0,null);
var on_finish__201092 = cljs.core.nth.call(null,vec__201089__201090,1,null);

return $elem.fadeIn(speed__201091,on_finish__201092);
};
var fade_in = function ($elem,var_args){
var p__201088 = null;
if (goog.isDef(var_args)) {
  p__201088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__201088);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__201093){
var $elem = cljs.core.first(arglist__201093);
var p__201088 = cljs.core.rest(arglist__201093);
return fade_in__delegate.call(this, $elem, p__201088);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__201094){
var vec__201095__201096 = p__201094;
var speed__201097 = cljs.core.nth.call(null,vec__201095__201096,0,null);
var on_finish__201098 = cljs.core.nth.call(null,vec__201095__201096,1,null);

return $elem.slideUp(speed__201097,on_finish__201098);
};
var slide_up = function ($elem,var_args){
var p__201094 = null;
if (goog.isDef(var_args)) {
  p__201094 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__201094);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__201099){
var $elem = cljs.core.first(arglist__201099);
var p__201094 = cljs.core.rest(arglist__201099);
return slide_up__delegate.call(this, $elem, p__201094);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__201100){
var vec__201101__201102 = p__201100;
var speed__201103 = cljs.core.nth.call(null,vec__201101__201102,0,null);
var on_finish__201104 = cljs.core.nth.call(null,vec__201101__201102,1,null);

return $elem.slideDown(speed__201103,on_finish__201104);
};
var slide_down = function ($elem,var_args){
var p__201100 = null;
if (goog.isDef(var_args)) {
  p__201100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__201100);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__201105){
var $elem = cljs.core.first(arglist__201105);
var p__201100 = cljs.core.rest(arglist__201105);
return slide_down__delegate.call(this, $elem, p__201100);
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
var val__delegate = function ($elem,p__201106){
var vec__201107__201108 = p__201106;
var v__201109 = cljs.core.nth.call(null,vec__201107__201108,0,null);

if(cljs.core.truth_(v__201109))
{return $elem.val(v__201109);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__201106 = null;
if (goog.isDef(var_args)) {
  p__201106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__201106);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__201110){
var $elem = cljs.core.first(arglist__201110);
var p__201106 = cljs.core.rest(arglist__201110);
return val__delegate.call(this, $elem, p__201106);
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
jayq.core.xhr = (function xhr(p__201111,content,callback){
var vec__201112__201113 = p__201111;
var method__201114 = cljs.core.nth.call(null,vec__201112__201113,0,null);
var uri__201115 = cljs.core.nth.call(null,vec__201112__201113,1,null);

var params__201116 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__201114)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__201115,params__201116);
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
var on__delegate = function ($elem,events,p__201117){
var vec__201118__201119 = p__201117;
var sel__201120 = cljs.core.nth.call(null,vec__201118__201119,0,null);
var data__201121 = cljs.core.nth.call(null,vec__201118__201119,1,null);
var handler__201122 = cljs.core.nth.call(null,vec__201118__201119,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__201120),data__201121,handler__201122);
};
var on = function ($elem,events,var_args){
var p__201117 = null;
if (goog.isDef(var_args)) {
  p__201117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__201117);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__201123){
var $elem = cljs.core.first(arglist__201123);
var events = cljs.core.first(cljs.core.next(arglist__201123));
var p__201117 = cljs.core.rest(cljs.core.next(arglist__201123));
return on__delegate.call(this, $elem, events, p__201117);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__201124){
var vec__201125__201126 = p__201124;
var sel__201127 = cljs.core.nth.call(null,vec__201125__201126,0,null);
var data__201128 = cljs.core.nth.call(null,vec__201125__201126,1,null);
var handler__201129 = cljs.core.nth.call(null,vec__201125__201126,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__201127),data__201128,handler__201129);
};
var one = function ($elem,events,var_args){
var p__201124 = null;
if (goog.isDef(var_args)) {
  p__201124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__201124);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__201130){
var $elem = cljs.core.first(arglist__201130);
var events = cljs.core.first(cljs.core.next(arglist__201130));
var p__201124 = cljs.core.rest(cljs.core.next(arglist__201130));
return one__delegate.call(this, $elem, events, p__201124);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__201131){
var vec__201132__201133 = p__201131;
var sel__201134 = cljs.core.nth.call(null,vec__201132__201133,0,null);
var handler__201135 = cljs.core.nth.call(null,vec__201132__201133,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__201134),handler__201135);
};
var off = function ($elem,events,var_args){
var p__201131 = null;
if (goog.isDef(var_args)) {
  p__201131 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__201131);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__201136){
var $elem = cljs.core.first(arglist__201136);
var events = cljs.core.first(cljs.core.next(arglist__201136));
var p__201131 = cljs.core.rest(cljs.core.next(arglist__201136));
return off__delegate.call(this, $elem, events, p__201131);
});
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
