goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____87711 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____87711))
{return or__3548__auto____87711;
} else
{var or__3548__auto____87712 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____87712))
{return or__3548__auto____87712;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__87776 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____87713 = this$;

if(cljs.core.truth_(and__3546__auto____87713))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87713;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____87714 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87714))
{return or__3548__auto____87714;
} else
{var or__3548__auto____87715 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87715))
{return or__3548__auto____87715;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__87777 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____87716 = this$;

if(cljs.core.truth_(and__3546__auto____87716))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87716;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____87717 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87717))
{return or__3548__auto____87717;
} else
{var or__3548__auto____87718 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87718))
{return or__3548__auto____87718;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__87778 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____87719 = this$;

if(cljs.core.truth_(and__3546__auto____87719))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87719;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____87720 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87720))
{return or__3548__auto____87720;
} else
{var or__3548__auto____87721 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87721))
{return or__3548__auto____87721;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__87779 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____87722 = this$;

if(cljs.core.truth_(and__3546__auto____87722))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87722;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____87723 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87723))
{return or__3548__auto____87723;
} else
{var or__3548__auto____87724 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87724))
{return or__3548__auto____87724;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__87780 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____87725 = this$;

if(cljs.core.truth_(and__3546__auto____87725))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87725;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____87726 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87726))
{return or__3548__auto____87726;
} else
{var or__3548__auto____87727 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87727))
{return or__3548__auto____87727;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__87781 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____87728 = this$;

if(cljs.core.truth_(and__3546__auto____87728))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87728;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____87729 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87729))
{return or__3548__auto____87729;
} else
{var or__3548__auto____87730 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87730))
{return or__3548__auto____87730;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__87782 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____87731 = this$;

if(cljs.core.truth_(and__3546__auto____87731))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87731;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____87732 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87732))
{return or__3548__auto____87732;
} else
{var or__3548__auto____87733 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87733))
{return or__3548__auto____87733;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__87783 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____87734 = this$;

if(cljs.core.truth_(and__3546__auto____87734))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87734;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____87735 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87735))
{return or__3548__auto____87735;
} else
{var or__3548__auto____87736 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87736))
{return or__3548__auto____87736;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__87784 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____87737 = this$;

if(cljs.core.truth_(and__3546__auto____87737))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87737;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____87738 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87738))
{return or__3548__auto____87738;
} else
{var or__3548__auto____87739 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87739))
{return or__3548__auto____87739;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__87785 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____87740 = this$;

if(cljs.core.truth_(and__3546__auto____87740))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87740;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____87741 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87741))
{return or__3548__auto____87741;
} else
{var or__3548__auto____87742 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87742))
{return or__3548__auto____87742;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__87786 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____87743 = this$;

if(cljs.core.truth_(and__3546__auto____87743))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87743;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____87744 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87744))
{return or__3548__auto____87744;
} else
{var or__3548__auto____87745 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87745))
{return or__3548__auto____87745;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__87787 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____87746 = this$;

if(cljs.core.truth_(and__3546__auto____87746))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87746;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____87747 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87747))
{return or__3548__auto____87747;
} else
{var or__3548__auto____87748 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87748))
{return or__3548__auto____87748;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__87788 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____87749 = this$;

if(cljs.core.truth_(and__3546__auto____87749))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87749;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____87750 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87750))
{return or__3548__auto____87750;
} else
{var or__3548__auto____87751 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87751))
{return or__3548__auto____87751;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__87789 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____87752 = this$;

if(cljs.core.truth_(and__3546__auto____87752))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87752;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____87753 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87753))
{return or__3548__auto____87753;
} else
{var or__3548__auto____87754 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87754))
{return or__3548__auto____87754;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__87790 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____87755 = this$;

if(cljs.core.truth_(and__3546__auto____87755))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87755;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____87756 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87756))
{return or__3548__auto____87756;
} else
{var or__3548__auto____87757 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87757))
{return or__3548__auto____87757;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__87791 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____87758 = this$;

if(cljs.core.truth_(and__3546__auto____87758))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87758;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____87759 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87759))
{return or__3548__auto____87759;
} else
{var or__3548__auto____87760 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87760))
{return or__3548__auto____87760;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__87792 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____87761 = this$;

if(cljs.core.truth_(and__3546__auto____87761))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87761;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____87762 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87762))
{return or__3548__auto____87762;
} else
{var or__3548__auto____87763 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87763))
{return or__3548__auto____87763;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__87793 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____87764 = this$;

if(cljs.core.truth_(and__3546__auto____87764))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87764;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____87765 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87765))
{return or__3548__auto____87765;
} else
{var or__3548__auto____87766 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87766))
{return or__3548__auto____87766;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__87794 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____87767 = this$;

if(cljs.core.truth_(and__3546__auto____87767))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87767;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____87768 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87768))
{return or__3548__auto____87768;
} else
{var or__3548__auto____87769 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87769))
{return or__3548__auto____87769;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__87795 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____87770 = this$;

if(cljs.core.truth_(and__3546__auto____87770))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87770;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____87771 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87771))
{return or__3548__auto____87771;
} else
{var or__3548__auto____87772 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87772))
{return or__3548__auto____87772;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__87796 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____87773 = this$;

if(cljs.core.truth_(and__3546__auto____87773))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____87773;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____87774 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87774))
{return or__3548__auto____87774;
} else
{var or__3548__auto____87775 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____87775))
{return or__3548__auto____87775;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__87776.call(this,this$);
case  2 :
return _invoke__87777.call(this,this$,a);
case  3 :
return _invoke__87778.call(this,this$,a,b);
case  4 :
return _invoke__87779.call(this,this$,a,b,c);
case  5 :
return _invoke__87780.call(this,this$,a,b,c,d);
case  6 :
return _invoke__87781.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__87782.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__87783.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__87784.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__87785.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__87786.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__87787.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__87788.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__87789.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__87790.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__87791.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__87792.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__87793.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__87794.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__87795.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__87796.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____87798 = coll;

if(cljs.core.truth_(and__3546__auto____87798))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____87798;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____87799 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87799))
{return or__3548__auto____87799;
} else
{var or__3548__auto____87800 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____87800))
{return or__3548__auto____87800;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____87801 = coll;

if(cljs.core.truth_(and__3546__auto____87801))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____87801;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____87802 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87802))
{return or__3548__auto____87802;
} else
{var or__3548__auto____87803 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____87803))
{return or__3548__auto____87803;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____87804 = coll;

if(cljs.core.truth_(and__3546__auto____87804))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____87804;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____87805 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87805))
{return or__3548__auto____87805;
} else
{var or__3548__auto____87806 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____87806))
{return or__3548__auto____87806;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__87813 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____87807 = coll;

if(cljs.core.truth_(and__3546__auto____87807))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____87807;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____87808 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87808))
{return or__3548__auto____87808;
} else
{var or__3548__auto____87809 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____87809))
{return or__3548__auto____87809;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__87814 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____87810 = coll;

if(cljs.core.truth_(and__3546__auto____87810))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____87810;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____87811 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87811))
{return or__3548__auto____87811;
} else
{var or__3548__auto____87812 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____87812))
{return or__3548__auto____87812;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__87813.call(this,coll,n);
case  3 :
return _nth__87814.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____87816 = coll;

if(cljs.core.truth_(and__3546__auto____87816))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____87816;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____87817 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87817))
{return or__3548__auto____87817;
} else
{var or__3548__auto____87818 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____87818))
{return or__3548__auto____87818;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____87819 = coll;

if(cljs.core.truth_(and__3546__auto____87819))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____87819;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____87820 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87820))
{return or__3548__auto____87820;
} else
{var or__3548__auto____87821 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____87821))
{return or__3548__auto____87821;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__87828 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____87822 = o;

if(cljs.core.truth_(and__3546__auto____87822))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____87822;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____87823 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87823))
{return or__3548__auto____87823;
} else
{var or__3548__auto____87824 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____87824))
{return or__3548__auto____87824;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__87829 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____87825 = o;

if(cljs.core.truth_(and__3546__auto____87825))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____87825;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____87826 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87826))
{return or__3548__auto____87826;
} else
{var or__3548__auto____87827 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____87827))
{return or__3548__auto____87827;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__87828.call(this,o,k);
case  3 :
return _lookup__87829.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____87831 = coll;

if(cljs.core.truth_(and__3546__auto____87831))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____87831;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____87832 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87832))
{return or__3548__auto____87832;
} else
{var or__3548__auto____87833 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____87833))
{return or__3548__auto____87833;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____87834 = coll;

if(cljs.core.truth_(and__3546__auto____87834))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____87834;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____87835 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87835))
{return or__3548__auto____87835;
} else
{var or__3548__auto____87836 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____87836))
{return or__3548__auto____87836;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____87837 = coll;

if(cljs.core.truth_(and__3546__auto____87837))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____87837;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____87838 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87838))
{return or__3548__auto____87838;
} else
{var or__3548__auto____87839 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____87839))
{return or__3548__auto____87839;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____87840 = coll;

if(cljs.core.truth_(and__3546__auto____87840))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____87840;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____87841 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87841))
{return or__3548__auto____87841;
} else
{var or__3548__auto____87842 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____87842))
{return or__3548__auto____87842;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____87843 = coll;

if(cljs.core.truth_(and__3546__auto____87843))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____87843;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____87844 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87844))
{return or__3548__auto____87844;
} else
{var or__3548__auto____87845 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____87845))
{return or__3548__auto____87845;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____87846 = coll;

if(cljs.core.truth_(and__3546__auto____87846))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____87846;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____87847 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87847))
{return or__3548__auto____87847;
} else
{var or__3548__auto____87848 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____87848))
{return or__3548__auto____87848;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____87849 = coll;

if(cljs.core.truth_(and__3546__auto____87849))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____87849;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____87850 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87850))
{return or__3548__auto____87850;
} else
{var or__3548__auto____87851 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____87851))
{return or__3548__auto____87851;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____87852 = o;

if(cljs.core.truth_(and__3546__auto____87852))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____87852;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____87853 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87853))
{return or__3548__auto____87853;
} else
{var or__3548__auto____87854 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____87854))
{return or__3548__auto____87854;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____87855 = o;

if(cljs.core.truth_(and__3546__auto____87855))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____87855;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____87856 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87856))
{return or__3548__auto____87856;
} else
{var or__3548__auto____87857 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____87857))
{return or__3548__auto____87857;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____87858 = o;

if(cljs.core.truth_(and__3546__auto____87858))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____87858;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____87859 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87859))
{return or__3548__auto____87859;
} else
{var or__3548__auto____87860 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____87860))
{return or__3548__auto____87860;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____87861 = o;

if(cljs.core.truth_(and__3546__auto____87861))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____87861;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____87862 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87862))
{return or__3548__auto____87862;
} else
{var or__3548__auto____87863 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____87863))
{return or__3548__auto____87863;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__87870 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____87864 = coll;

if(cljs.core.truth_(and__3546__auto____87864))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____87864;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____87865 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87865))
{return or__3548__auto____87865;
} else
{var or__3548__auto____87866 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____87866))
{return or__3548__auto____87866;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__87871 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____87867 = coll;

if(cljs.core.truth_(and__3546__auto____87867))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____87867;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____87868 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____87868))
{return or__3548__auto____87868;
} else
{var or__3548__auto____87869 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____87869))
{return or__3548__auto____87869;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__87870.call(this,coll,f);
case  3 :
return _reduce__87871.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____87873 = o;

if(cljs.core.truth_(and__3546__auto____87873))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____87873;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____87874 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87874))
{return or__3548__auto____87874;
} else
{var or__3548__auto____87875 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____87875))
{return or__3548__auto____87875;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____87876 = o;

if(cljs.core.truth_(and__3546__auto____87876))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____87876;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____87877 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87877))
{return or__3548__auto____87877;
} else
{var or__3548__auto____87878 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____87878))
{return or__3548__auto____87878;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____87879 = o;

if(cljs.core.truth_(and__3546__auto____87879))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____87879;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____87880 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87880))
{return or__3548__auto____87880;
} else
{var or__3548__auto____87881 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____87881))
{return or__3548__auto____87881;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____87882 = o;

if(cljs.core.truth_(and__3546__auto____87882))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____87882;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____87883 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____87883))
{return or__3548__auto____87883;
} else
{var or__3548__auto____87884 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____87884))
{return or__3548__auto____87884;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____87885 = d;

if(cljs.core.truth_(and__3546__auto____87885))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____87885;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____87886 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____87886))
{return or__3548__auto____87886;
} else
{var or__3548__auto____87887 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____87887))
{return or__3548__auto____87887;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____87888 = this$;

if(cljs.core.truth_(and__3546__auto____87888))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____87888;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____87889 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87889))
{return or__3548__auto____87889;
} else
{var or__3548__auto____87890 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____87890))
{return or__3548__auto____87890;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____87891 = this$;

if(cljs.core.truth_(and__3546__auto____87891))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____87891;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____87892 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87892))
{return or__3548__auto____87892;
} else
{var or__3548__auto____87893 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____87893))
{return or__3548__auto____87893;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____87894 = this$;

if(cljs.core.truth_(and__3546__auto____87894))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____87894;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____87895 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87895))
{return or__3548__auto____87895;
} else
{var or__3548__auto____87896 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____87896))
{return or__3548__auto____87896;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__87897 = null;
var G__87897__87898 = (function (o,k){
return null;
});
var G__87897__87899 = (function (o,k,not_found){
return not_found;
});
G__87897 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__87897__87898.call(this,o,k);
case  3 :
return G__87897__87899.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87897;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__87901 = null;
var G__87901__87902 = (function (_,f){
return f.call(null);
});
var G__87901__87903 = (function (_,f,start){
return start;
});
G__87901 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__87901__87902.call(this,_,f);
case  3 :
return G__87901__87903.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87901;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__87905 = null;
var G__87905__87906 = (function (_,n){
return null;
});
var G__87905__87907 = (function (_,n,not_found){
return not_found;
});
G__87905 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__87905__87906.call(this,_,n);
case  3 :
return G__87905__87907.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87905;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__87915 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__87909 = cljs.core._nth.call(null,cicoll,0);
var n__87910 = 1;

while(true){
if(cljs.core.truth_((n__87910 < cljs.core._count.call(null,cicoll))))
{{
var G__87919 = f.call(null,val__87909,cljs.core._nth.call(null,cicoll,n__87910));
var G__87920 = (n__87910 + 1);
val__87909 = G__87919;
n__87910 = G__87920;
continue;
}
} else
{return val__87909;
}
break;
}
}
});
var ci_reduce__87916 = (function (cicoll,f,val){
var val__87911 = val;
var n__87912 = 0;

while(true){
if(cljs.core.truth_((n__87912 < cljs.core._count.call(null,cicoll))))
{{
var G__87921 = f.call(null,val__87911,cljs.core._nth.call(null,cicoll,n__87912));
var G__87922 = (n__87912 + 1);
val__87911 = G__87921;
n__87912 = G__87922;
continue;
}
} else
{return val__87911;
}
break;
}
});
var ci_reduce__87917 = (function (cicoll,f,val,idx){
var val__87913 = val;
var n__87914 = idx;

while(true){
if(cljs.core.truth_((n__87914 < cljs.core._count.call(null,cicoll))))
{{
var G__87923 = f.call(null,val__87913,cljs.core._nth.call(null,cicoll,n__87914));
var G__87924 = (n__87914 + 1);
val__87913 = G__87923;
n__87914 = G__87924;
continue;
}
} else
{return val__87913;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__87915.call(this,cicoll,f);
case  3 :
return ci_reduce__87916.call(this,cicoll,f,val);
case  4 :
return ci_reduce__87917.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__87925 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__87938 = null;
var G__87938__87939 = (function (_,f){
var this__87926 = this;
return cljs.core.ci_reduce.call(null,this__87926.a,f,(this__87926.a[this__87926.i]),(this__87926.i + 1));
});
var G__87938__87940 = (function (_,f,start){
var this__87927 = this;
return cljs.core.ci_reduce.call(null,this__87927.a,f,start,this__87927.i);
});
G__87938 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__87938__87939.call(this,_,f);
case  3 :
return G__87938__87940.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87938;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__87928 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__87929 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__87942 = null;
var G__87942__87943 = (function (coll,n){
var this__87930 = this;
var i__87931 = (n + this__87930.i);

if(cljs.core.truth_((i__87931 < this__87930.a.length)))
{return (this__87930.a[i__87931]);
} else
{return null;
}
});
var G__87942__87944 = (function (coll,n,not_found){
var this__87932 = this;
var i__87933 = (n + this__87932.i);

if(cljs.core.truth_((i__87933 < this__87932.a.length)))
{return (this__87932.a[i__87933]);
} else
{return not_found;
}
});
G__87942 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__87942__87943.call(this,coll,n);
case  3 :
return G__87942__87944.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87942;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__87934 = this;
return (this__87934.a.length - this__87934.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__87935 = this;
return (this__87935.a[this__87935.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__87936 = this;
if(cljs.core.truth_(((this__87936.i + 1) < this__87936.a.length)))
{return (new cljs.core.IndexedSeq(this__87936.a,(this__87936.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__87937 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__87946 = null;
var G__87946__87947 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__87946__87948 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__87946 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__87946__87947.call(this,array,f);
case  3 :
return G__87946__87948.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87946;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__87950 = null;
var G__87950__87951 = (function (array,k){
return (array[k]);
});
var G__87950__87952 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__87950 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__87950__87951.call(this,array,k);
case  3 :
return G__87950__87952.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87950;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__87954 = null;
var G__87954__87955 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__87954__87956 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__87954 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__87954__87955.call(this,array,n);
case  3 :
return G__87954__87956.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87954;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____87958 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87958))
{var s__87959 = temp__3698__auto____87958;

return cljs.core._first.call(null,s__87959);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__87960 = cljs.core.next.call(null,s);
s = G__87960;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__87961 = cljs.core.seq.call(null,x);
var n__87962 = 0;

while(true){
if(cljs.core.truth_(s__87961))
{{
var G__87963 = cljs.core.next.call(null,s__87961);
var G__87964 = (n__87962 + 1);
s__87961 = G__87963;
n__87962 = G__87964;
continue;
}
} else
{return n__87962;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__87965 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__87966 = (function() { 
var G__87968__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__87969 = conj.call(null,coll,x);
var G__87970 = cljs.core.first.call(null,xs);
var G__87971 = cljs.core.next.call(null,xs);
coll = G__87969;
x = G__87970;
xs = G__87971;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__87968 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__87968__delegate.call(this, coll, x, xs);
};
G__87968.cljs$lang$maxFixedArity = 2;
G__87968.cljs$lang$applyTo = (function (arglist__87972){
var coll = cljs.core.first(arglist__87972);
var x = cljs.core.first(cljs.core.next(arglist__87972));
var xs = cljs.core.rest(cljs.core.next(arglist__87972));
return G__87968__delegate.call(this, coll, x, xs);
});
return G__87968;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__87965.call(this,coll,x);
default:
return conj__87966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__87966.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__87973 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__87974 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__87973.call(this,coll,n);
case  3 :
return nth__87974.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__87976 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__87977 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__87976.call(this,o,k);
case  3 :
return get__87977.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__87980 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__87981 = (function() { 
var G__87983__delegate = function (coll,k,v,kvs){
while(true){
var ret__87979 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__87984 = ret__87979;
var G__87985 = cljs.core.first.call(null,kvs);
var G__87986 = cljs.core.second.call(null,kvs);
var G__87987 = cljs.core.nnext.call(null,kvs);
coll = G__87984;
k = G__87985;
v = G__87986;
kvs = G__87987;
continue;
}
} else
{return ret__87979;
}
break;
}
};
var G__87983 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87983__delegate.call(this, coll, k, v, kvs);
};
G__87983.cljs$lang$maxFixedArity = 3;
G__87983.cljs$lang$applyTo = (function (arglist__87988){
var coll = cljs.core.first(arglist__87988);
var k = cljs.core.first(cljs.core.next(arglist__87988));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87988)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87988)));
return G__87983__delegate.call(this, coll, k, v, kvs);
});
return G__87983;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__87980.call(this,coll,k,v);
default:
return assoc__87981.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__87981.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__87990 = (function (coll){
return coll;
});
var dissoc__87991 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__87992 = (function() { 
var G__87994__delegate = function (coll,k,ks){
while(true){
var ret__87989 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__87995 = ret__87989;
var G__87996 = cljs.core.first.call(null,ks);
var G__87997 = cljs.core.next.call(null,ks);
coll = G__87995;
k = G__87996;
ks = G__87997;
continue;
}
} else
{return ret__87989;
}
break;
}
};
var G__87994 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__87994__delegate.call(this, coll, k, ks);
};
G__87994.cljs$lang$maxFixedArity = 2;
G__87994.cljs$lang$applyTo = (function (arglist__87998){
var coll = cljs.core.first(arglist__87998);
var k = cljs.core.first(cljs.core.next(arglist__87998));
var ks = cljs.core.rest(cljs.core.next(arglist__87998));
return G__87994__delegate.call(this, coll, k, ks);
});
return G__87994;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__87990.call(this,coll);
case  2 :
return dissoc__87991.call(this,coll,k);
default:
return dissoc__87992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__87992.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__450__auto____87999 = o;

if(cljs.core.truth_((function (){var and__3546__auto____88000 = x__450__auto____87999;

if(cljs.core.truth_(and__3546__auto____88000))
{var and__3546__auto____88001 = x__450__auto____87999.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____88001))
{return cljs.core.not.call(null,x__450__auto____87999.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____88001;
}
} else
{return and__3546__auto____88000;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____87999);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__88003 = (function (coll){
return coll;
});
var disj__88004 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__88005 = (function() { 
var G__88007__delegate = function (coll,k,ks){
while(true){
var ret__88002 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__88008 = ret__88002;
var G__88009 = cljs.core.first.call(null,ks);
var G__88010 = cljs.core.next.call(null,ks);
coll = G__88008;
k = G__88009;
ks = G__88010;
continue;
}
} else
{return ret__88002;
}
break;
}
};
var G__88007 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88007__delegate.call(this, coll, k, ks);
};
G__88007.cljs$lang$maxFixedArity = 2;
G__88007.cljs$lang$applyTo = (function (arglist__88011){
var coll = cljs.core.first(arglist__88011);
var k = cljs.core.first(cljs.core.next(arglist__88011));
var ks = cljs.core.rest(cljs.core.next(arglist__88011));
return G__88007__delegate.call(this, coll, k, ks);
});
return G__88007;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__88003.call(this,coll);
case  2 :
return disj__88004.call(this,coll,k);
default:
return disj__88005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__88005.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____88012 = x;

if(cljs.core.truth_((function (){var and__3546__auto____88013 = x__450__auto____88012;

if(cljs.core.truth_(and__3546__auto____88013))
{var and__3546__auto____88014 = x__450__auto____88012.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____88014))
{return cljs.core.not.call(null,x__450__auto____88012.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____88014;
}
} else
{return and__3546__auto____88013;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____88012);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____88015 = x;

if(cljs.core.truth_((function (){var and__3546__auto____88016 = x__450__auto____88015;

if(cljs.core.truth_(and__3546__auto____88016))
{var and__3546__auto____88017 = x__450__auto____88015.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____88017))
{return cljs.core.not.call(null,x__450__auto____88015.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____88017;
}
} else
{return and__3546__auto____88016;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____88015);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____88018 = x;

if(cljs.core.truth_((function (){var and__3546__auto____88019 = x__450__auto____88018;

if(cljs.core.truth_(and__3546__auto____88019))
{var and__3546__auto____88020 = x__450__auto____88018.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____88020))
{return cljs.core.not.call(null,x__450__auto____88018.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____88020;
}
} else
{return and__3546__auto____88019;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____88018);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____88021 = x;

if(cljs.core.truth_((function (){var and__3546__auto____88022 = x__450__auto____88021;

if(cljs.core.truth_(and__3546__auto____88022))
{var and__3546__auto____88023 = x__450__auto____88021.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____88023))
{return cljs.core.not.call(null,x__450__auto____88021.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____88023;
}
} else
{return and__3546__auto____88022;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____88021);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____88024 = x;

if(cljs.core.truth_((function (){var and__3546__auto____88025 = x__450__auto____88024;

if(cljs.core.truth_(and__3546__auto____88025))
{var and__3546__auto____88026 = x__450__auto____88024.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____88026))
{return cljs.core.not.call(null,x__450__auto____88024.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____88026;
}
} else
{return and__3546__auto____88025;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____88024);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____88027 = x;

if(cljs.core.truth_((function (){var and__3546__auto____88028 = x__450__auto____88027;

if(cljs.core.truth_(and__3546__auto____88028))
{var and__3546__auto____88029 = x__450__auto____88027.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____88029))
{return cljs.core.not.call(null,x__450__auto____88027.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____88029;
}
} else
{return and__3546__auto____88028;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____88027);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____88030 = x;

if(cljs.core.truth_((function (){var and__3546__auto____88031 = x__450__auto____88030;

if(cljs.core.truth_(and__3546__auto____88031))
{var and__3546__auto____88032 = x__450__auto____88030.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____88032))
{return cljs.core.not.call(null,x__450__auto____88030.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____88032;
}
} else
{return and__3546__auto____88031;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____88030);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__88033 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__88033.push(key);
}));
return keys__88033;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__450__auto____88034 = s;

if(cljs.core.truth_((function (){var and__3546__auto____88035 = x__450__auto____88034;

if(cljs.core.truth_(and__3546__auto____88035))
{var and__3546__auto____88036 = x__450__auto____88034.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____88036))
{return cljs.core.not.call(null,x__450__auto____88034.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____88036;
}
} else
{return and__3546__auto____88035;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____88034);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____88037 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____88037))
{return cljs.core.not.call(null,(function (){var or__3548__auto____88038 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____88038))
{return or__3548__auto____88038;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____88037;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____88039 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____88039))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____88039;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____88040 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____88040))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____88040;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____88041 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____88041))
{return (n == n.toFixed());
} else
{return and__3546__auto____88041;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____88042 = coll;

if(cljs.core.truth_(and__3546__auto____88042))
{var and__3546__auto____88043 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____88043))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____88043;
}
} else
{return and__3546__auto____88042;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___88048 = (function (x){
return true;
});
var distinct_QMARK___88049 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___88050 = (function() { 
var G__88052__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__88044 = cljs.core.set([y,x]);
var xs__88045 = more;

while(true){
var x__88046 = cljs.core.first.call(null,xs__88045);
var etc__88047 = cljs.core.next.call(null,xs__88045);

if(cljs.core.truth_(xs__88045))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__88044,x__88046)))
{return false;
} else
{{
var G__88053 = cljs.core.conj.call(null,s__88044,x__88046);
var G__88054 = etc__88047;
s__88044 = G__88053;
xs__88045 = G__88054;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__88052 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88052__delegate.call(this, x, y, more);
};
G__88052.cljs$lang$maxFixedArity = 2;
G__88052.cljs$lang$applyTo = (function (arglist__88055){
var x = cljs.core.first(arglist__88055);
var y = cljs.core.first(cljs.core.next(arglist__88055));
var more = cljs.core.rest(cljs.core.next(arglist__88055));
return G__88052__delegate.call(this, x, y, more);
});
return G__88052;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___88048.call(this,x);
case  2 :
return distinct_QMARK___88049.call(this,x,y);
default:
return distinct_QMARK___88050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___88050.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__88056 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__88056)))
{return r__88056;
} else
{if(cljs.core.truth_(r__88056))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__88058 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__88059 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__88057 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__88057,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__88057);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__88058.call(this,comp);
case  2 :
return sort__88059.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__88061 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__88062 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__88061.call(this,keyfn,comp);
case  3 :
return sort_by__88062.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__88064 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__88065 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__88064.call(this,f,val);
case  3 :
return reduce__88065.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__88071 = (function (f,coll){
var temp__3695__auto____88067 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____88067))
{var s__88068 = temp__3695__auto____88067;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__88068),cljs.core.next.call(null,s__88068));
} else
{return f.call(null);
}
});
var seq_reduce__88072 = (function (f,val,coll){
var val__88069 = val;
var coll__88070 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__88070))
{{
var G__88074 = f.call(null,val__88069,cljs.core.first.call(null,coll__88070));
var G__88075 = cljs.core.next.call(null,coll__88070);
val__88069 = G__88074;
coll__88070 = G__88075;
continue;
}
} else
{return val__88069;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__88071.call(this,f,val);
case  3 :
return seq_reduce__88072.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__88076 = null;
var G__88076__88077 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__88076__88078 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__88076 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__88076__88077.call(this,coll,f);
case  3 :
return G__88076__88078.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88076;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___88080 = (function (){
return 0;
});
var _PLUS___88081 = (function (x){
return x;
});
var _PLUS___88082 = (function (x,y){
return (x + y);
});
var _PLUS___88083 = (function() { 
var G__88085__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__88085 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88085__delegate.call(this, x, y, more);
};
G__88085.cljs$lang$maxFixedArity = 2;
G__88085.cljs$lang$applyTo = (function (arglist__88086){
var x = cljs.core.first(arglist__88086);
var y = cljs.core.first(cljs.core.next(arglist__88086));
var more = cljs.core.rest(cljs.core.next(arglist__88086));
return G__88085__delegate.call(this, x, y, more);
});
return G__88085;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___88080.call(this);
case  1 :
return _PLUS___88081.call(this,x);
case  2 :
return _PLUS___88082.call(this,x,y);
default:
return _PLUS___88083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___88083.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___88087 = (function (x){
return (- x);
});
var ___88088 = (function (x,y){
return (x - y);
});
var ___88089 = (function() { 
var G__88091__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__88091 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88091__delegate.call(this, x, y, more);
};
G__88091.cljs$lang$maxFixedArity = 2;
G__88091.cljs$lang$applyTo = (function (arglist__88092){
var x = cljs.core.first(arglist__88092);
var y = cljs.core.first(cljs.core.next(arglist__88092));
var more = cljs.core.rest(cljs.core.next(arglist__88092));
return G__88091__delegate.call(this, x, y, more);
});
return G__88091;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___88087.call(this,x);
case  2 :
return ___88088.call(this,x,y);
default:
return ___88089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___88089.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___88093 = (function (){
return 1;
});
var _STAR___88094 = (function (x){
return x;
});
var _STAR___88095 = (function (x,y){
return (x * y);
});
var _STAR___88096 = (function() { 
var G__88098__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__88098 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88098__delegate.call(this, x, y, more);
};
G__88098.cljs$lang$maxFixedArity = 2;
G__88098.cljs$lang$applyTo = (function (arglist__88099){
var x = cljs.core.first(arglist__88099);
var y = cljs.core.first(cljs.core.next(arglist__88099));
var more = cljs.core.rest(cljs.core.next(arglist__88099));
return G__88098__delegate.call(this, x, y, more);
});
return G__88098;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___88093.call(this);
case  1 :
return _STAR___88094.call(this,x);
case  2 :
return _STAR___88095.call(this,x,y);
default:
return _STAR___88096.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___88096.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___88100 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___88101 = (function (x,y){
return (x / y);
});
var _SLASH___88102 = (function() { 
var G__88104__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__88104 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88104__delegate.call(this, x, y, more);
};
G__88104.cljs$lang$maxFixedArity = 2;
G__88104.cljs$lang$applyTo = (function (arglist__88105){
var x = cljs.core.first(arglist__88105);
var y = cljs.core.first(cljs.core.next(arglist__88105));
var more = cljs.core.rest(cljs.core.next(arglist__88105));
return G__88104__delegate.call(this, x, y, more);
});
return G__88104;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___88100.call(this,x);
case  2 :
return _SLASH___88101.call(this,x,y);
default:
return _SLASH___88102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___88102.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___88106 = (function (x){
return true;
});
var _LT___88107 = (function (x,y){
return (x < y);
});
var _LT___88108 = (function() { 
var G__88110__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__88111 = y;
var G__88112 = cljs.core.first.call(null,more);
var G__88113 = cljs.core.next.call(null,more);
x = G__88111;
y = G__88112;
more = G__88113;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__88110 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88110__delegate.call(this, x, y, more);
};
G__88110.cljs$lang$maxFixedArity = 2;
G__88110.cljs$lang$applyTo = (function (arglist__88114){
var x = cljs.core.first(arglist__88114);
var y = cljs.core.first(cljs.core.next(arglist__88114));
var more = cljs.core.rest(cljs.core.next(arglist__88114));
return G__88110__delegate.call(this, x, y, more);
});
return G__88110;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___88106.call(this,x);
case  2 :
return _LT___88107.call(this,x,y);
default:
return _LT___88108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___88108.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___88115 = (function (x){
return true;
});
var _LT__EQ___88116 = (function (x,y){
return (x <= y);
});
var _LT__EQ___88117 = (function() { 
var G__88119__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__88120 = y;
var G__88121 = cljs.core.first.call(null,more);
var G__88122 = cljs.core.next.call(null,more);
x = G__88120;
y = G__88121;
more = G__88122;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__88119 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88119__delegate.call(this, x, y, more);
};
G__88119.cljs$lang$maxFixedArity = 2;
G__88119.cljs$lang$applyTo = (function (arglist__88123){
var x = cljs.core.first(arglist__88123);
var y = cljs.core.first(cljs.core.next(arglist__88123));
var more = cljs.core.rest(cljs.core.next(arglist__88123));
return G__88119__delegate.call(this, x, y, more);
});
return G__88119;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___88115.call(this,x);
case  2 :
return _LT__EQ___88116.call(this,x,y);
default:
return _LT__EQ___88117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___88117.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___88124 = (function (x){
return true;
});
var _GT___88125 = (function (x,y){
return (x > y);
});
var _GT___88126 = (function() { 
var G__88128__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__88129 = y;
var G__88130 = cljs.core.first.call(null,more);
var G__88131 = cljs.core.next.call(null,more);
x = G__88129;
y = G__88130;
more = G__88131;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__88128 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88128__delegate.call(this, x, y, more);
};
G__88128.cljs$lang$maxFixedArity = 2;
G__88128.cljs$lang$applyTo = (function (arglist__88132){
var x = cljs.core.first(arglist__88132);
var y = cljs.core.first(cljs.core.next(arglist__88132));
var more = cljs.core.rest(cljs.core.next(arglist__88132));
return G__88128__delegate.call(this, x, y, more);
});
return G__88128;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___88124.call(this,x);
case  2 :
return _GT___88125.call(this,x,y);
default:
return _GT___88126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___88126.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___88133 = (function (x){
return true;
});
var _GT__EQ___88134 = (function (x,y){
return (x >= y);
});
var _GT__EQ___88135 = (function() { 
var G__88137__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__88138 = y;
var G__88139 = cljs.core.first.call(null,more);
var G__88140 = cljs.core.next.call(null,more);
x = G__88138;
y = G__88139;
more = G__88140;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__88137 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88137__delegate.call(this, x, y, more);
};
G__88137.cljs$lang$maxFixedArity = 2;
G__88137.cljs$lang$applyTo = (function (arglist__88141){
var x = cljs.core.first(arglist__88141);
var y = cljs.core.first(cljs.core.next(arglist__88141));
var more = cljs.core.rest(cljs.core.next(arglist__88141));
return G__88137__delegate.call(this, x, y, more);
});
return G__88137;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___88133.call(this,x);
case  2 :
return _GT__EQ___88134.call(this,x,y);
default:
return _GT__EQ___88135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___88135.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__88142 = (function (x){
return x;
});
var max__88143 = (function (x,y){
return ((x > y) ? x : y);
});
var max__88144 = (function() { 
var G__88146__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__88146 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88146__delegate.call(this, x, y, more);
};
G__88146.cljs$lang$maxFixedArity = 2;
G__88146.cljs$lang$applyTo = (function (arglist__88147){
var x = cljs.core.first(arglist__88147);
var y = cljs.core.first(cljs.core.next(arglist__88147));
var more = cljs.core.rest(cljs.core.next(arglist__88147));
return G__88146__delegate.call(this, x, y, more);
});
return G__88146;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__88142.call(this,x);
case  2 :
return max__88143.call(this,x,y);
default:
return max__88144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__88144.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__88148 = (function (x){
return x;
});
var min__88149 = (function (x,y){
return ((x < y) ? x : y);
});
var min__88150 = (function() { 
var G__88152__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__88152 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88152__delegate.call(this, x, y, more);
};
G__88152.cljs$lang$maxFixedArity = 2;
G__88152.cljs$lang$applyTo = (function (arglist__88153){
var x = cljs.core.first(arglist__88153);
var y = cljs.core.first(cljs.core.next(arglist__88153));
var more = cljs.core.rest(cljs.core.next(arglist__88153));
return G__88152__delegate.call(this, x, y, more);
});
return G__88152;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__88148.call(this,x);
case  2 :
return min__88149.call(this,x,y);
default:
return min__88150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__88150.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__88154 = (n % d);

return cljs.core.fix.call(null,((n - rem__88154) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__88155 = cljs.core.quot.call(null,n,d);

return (n - (d * q__88155));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__88156 = (function (){
return Math.random.call(null);
});
var rand__88157 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__88156.call(this);
case  1 :
return rand__88157.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___88159 = (function (x){
return true;
});
var _EQ__EQ___88160 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___88161 = (function() { 
var G__88163__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__88164 = y;
var G__88165 = cljs.core.first.call(null,more);
var G__88166 = cljs.core.next.call(null,more);
x = G__88164;
y = G__88165;
more = G__88166;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__88163 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88163__delegate.call(this, x, y, more);
};
G__88163.cljs$lang$maxFixedArity = 2;
G__88163.cljs$lang$applyTo = (function (arglist__88167){
var x = cljs.core.first(arglist__88167);
var y = cljs.core.first(cljs.core.next(arglist__88167));
var more = cljs.core.rest(cljs.core.next(arglist__88167));
return G__88163__delegate.call(this, x, y, more);
});
return G__88163;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___88159.call(this,x);
case  2 :
return _EQ__EQ___88160.call(this,x,y);
default:
return _EQ__EQ___88161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___88161.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__88168 = n;
var xs__88169 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____88170 = xs__88169;

if(cljs.core.truth_(and__3546__auto____88170))
{return (n__88168 > 0);
} else
{return and__3546__auto____88170;
}
})()))
{{
var G__88171 = (n__88168 - 1);
var G__88172 = cljs.core.next.call(null,xs__88169);
n__88168 = G__88171;
xs__88169 = G__88172;
continue;
}
} else
{return xs__88169;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__88177 = null;
var G__88177__88178 = (function (coll,n){
var temp__3695__auto____88173 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____88173))
{var xs__88174 = temp__3695__auto____88173;

return cljs.core.first.call(null,xs__88174);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__88177__88179 = (function (coll,n,not_found){
var temp__3695__auto____88175 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____88175))
{var xs__88176 = temp__3695__auto____88175;

return cljs.core.first.call(null,xs__88176);
} else
{return not_found;
}
});
G__88177 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__88177__88178.call(this,coll,n);
case  3 :
return G__88177__88179.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88177;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___88181 = (function (){
return "";
});
var str_STAR___88182 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___88183 = (function() { 
var G__88185__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__88186 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__88187 = cljs.core.next.call(null,more);
sb = G__88186;
more = G__88187;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__88185 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__88185__delegate.call(this, x, ys);
};
G__88185.cljs$lang$maxFixedArity = 1;
G__88185.cljs$lang$applyTo = (function (arglist__88188){
var x = cljs.core.first(arglist__88188);
var ys = cljs.core.rest(arglist__88188);
return G__88185__delegate.call(this, x, ys);
});
return G__88185;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___88181.call(this);
case  1 :
return str_STAR___88182.call(this,x);
default:
return str_STAR___88183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___88183.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__88189 = (function (){
return "";
});
var str__88190 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__88191 = (function() { 
var G__88193__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__88193 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__88193__delegate.call(this, x, ys);
};
G__88193.cljs$lang$maxFixedArity = 1;
G__88193.cljs$lang$applyTo = (function (arglist__88194){
var x = cljs.core.first(arglist__88194);
var ys = cljs.core.rest(arglist__88194);
return G__88193__delegate.call(this, x, ys);
});
return G__88193;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__88189.call(this);
case  1 :
return str__88190.call(this,x);
default:
return str__88191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__88191.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__88195 = (function (s,start){
return s.substring(start);
});
var subs__88196 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__88195.call(this,s,start);
case  3 :
return subs__88196.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__88198 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__88199 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__88198.call(this,ns);
case  2 :
return symbol__88199.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__88201 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__88202 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__88201.call(this,ns);
case  2 :
return keyword__88202.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__88204 = cljs.core.seq.call(null,x);
var ys__88205 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__88204 === null)))
{return (ys__88205 === null);
} else
{if(cljs.core.truth_((ys__88205 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__88204),cljs.core.first.call(null,ys__88205))))
{{
var G__88206 = cljs.core.next.call(null,xs__88204);
var G__88207 = cljs.core.next.call(null,ys__88205);
xs__88204 = G__88206;
ys__88205 = G__88207;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__88208_SHARP_,p2__88209_SHARP_){
return cljs.core.hash_combine.call(null,p1__88208_SHARP_,cljs.core.hash.call(null,p2__88209_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__88210__88211 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__88210__88211))
{var G__88213__88215 = cljs.core.first.call(null,G__88210__88211);
var vec__88214__88216 = G__88213__88215;
var key_name__88217 = cljs.core.nth.call(null,vec__88214__88216,0,null);
var f__88218 = cljs.core.nth.call(null,vec__88214__88216,1,null);
var G__88210__88219 = G__88210__88211;

var G__88213__88220 = G__88213__88215;
var G__88210__88221 = G__88210__88219;

while(true){
var vec__88222__88223 = G__88213__88220;
var key_name__88224 = cljs.core.nth.call(null,vec__88222__88223,0,null);
var f__88225 = cljs.core.nth.call(null,vec__88222__88223,1,null);
var G__88210__88226 = G__88210__88221;

var str_name__88227 = cljs.core.name.call(null,key_name__88224);

obj[str_name__88227] = f__88225;
var temp__3698__auto____88228 = cljs.core.next.call(null,G__88210__88226);

if(cljs.core.truth_(temp__3698__auto____88228))
{var G__88210__88229 = temp__3698__auto____88228;

{
var G__88230 = cljs.core.first.call(null,G__88210__88229);
var G__88231 = G__88210__88229;
G__88213__88220 = G__88230;
G__88210__88221 = G__88231;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88232 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__88233 = this;
return (new cljs.core.List(this__88233.meta,o,coll,(this__88233.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88234 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__88235 = this;
return this__88235.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__88236 = this;
return this__88236.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__88237 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__88238 = this;
return this__88238.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__88239 = this;
return this__88239.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88240 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88241 = this;
return (new cljs.core.List(meta,this__88241.first,this__88241.rest,this__88241.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88242 = this;
return this__88242.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88243 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88244 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__88245 = this;
return (new cljs.core.List(this__88245.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88246 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__88247 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__88248 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__88249 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__88250 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__88251 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88252 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88253 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88254 = this;
return this__88254.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88255 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__88256){
var items = cljs.core.seq( arglist__88256 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88257 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88258 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88259 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88260 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__88260.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__88261 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__88262 = this;
return this__88262.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__88263 = this;
if(cljs.core.truth_((this__88263.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__88263.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88264 = this;
return this__88264.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88265 = this;
return (new cljs.core.Cons(meta,this__88265.first,this__88265.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__88266 = null;
var G__88266__88267 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__88266__88268 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__88266 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__88266__88267.call(this,string,f);
case  3 :
return G__88266__88268.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88266;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__88270 = null;
var G__88270__88271 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__88270__88272 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__88270 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__88270__88271.call(this,string,k);
case  3 :
return G__88270__88272.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88270;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__88274 = null;
var G__88274__88275 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__88274__88276 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__88274 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__88274__88275.call(this,string,n);
case  3 :
return G__88274__88276.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88274;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__88284 = null;
var G__88284__88285 = (function (tsym88278,coll){
var tsym88278__88280 = this;

var this$__88281 = tsym88278__88280;

return cljs.core.get.call(null,coll,this$__88281.toString());
});
var G__88284__88286 = (function (tsym88279,coll,not_found){
var tsym88279__88282 = this;

var this$__88283 = tsym88279__88282;

return cljs.core.get.call(null,coll,this$__88283.toString(),not_found);
});
G__88284 = function(tsym88279,coll,not_found){
switch(arguments.length){
case  2 :
return G__88284__88285.call(this,tsym88279,coll);
case  3 :
return G__88284__88286.call(this,tsym88279,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88284;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__88288 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__88288;
} else
{lazy_seq.x = x__88288.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88289 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88290 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88291 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88292 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__88292.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__88293 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__88294 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__88295 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88296 = this;
return this__88296.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88297 = this;
return (new cljs.core.LazySeq(meta,this__88297.realized,this__88297.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__88298 = cljs.core.array.call(null);

var s__88299 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__88299)))
{ary__88298.push(cljs.core.first.call(null,s__88299));
{
var G__88300 = cljs.core.next.call(null,s__88299);
s__88299 = G__88300;
continue;
}
} else
{return ary__88298;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__88301 = s;
var i__88302 = n;
var sum__88303 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____88304 = (i__88302 > 0);

if(cljs.core.truth_(and__3546__auto____88304))
{return cljs.core.seq.call(null,s__88301);
} else
{return and__3546__auto____88304;
}
})()))
{{
var G__88305 = cljs.core.next.call(null,s__88301);
var G__88306 = (i__88302 - 1);
var G__88307 = (sum__88303 + 1);
s__88301 = G__88305;
i__88302 = G__88306;
sum__88303 = G__88307;
continue;
}
} else
{return sum__88303;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__88311 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__88312 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__88313 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__88308 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__88308))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__88308),concat.call(null,cljs.core.rest.call(null,s__88308),y));
} else
{return y;
}
})));
});
var concat__88314 = (function() { 
var G__88316__delegate = function (x,y,zs){
var cat__88310 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__88309 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__88309))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__88309),cat.call(null,cljs.core.rest.call(null,xys__88309),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__88310.call(null,concat.call(null,x,y),zs);
};
var G__88316 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88316__delegate.call(this, x, y, zs);
};
G__88316.cljs$lang$maxFixedArity = 2;
G__88316.cljs$lang$applyTo = (function (arglist__88317){
var x = cljs.core.first(arglist__88317);
var y = cljs.core.first(cljs.core.next(arglist__88317));
var zs = cljs.core.rest(cljs.core.next(arglist__88317));
return G__88316__delegate.call(this, x, y, zs);
});
return G__88316;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__88311.call(this);
case  1 :
return concat__88312.call(this,x);
case  2 :
return concat__88313.call(this,x,y);
default:
return concat__88314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__88314.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___88318 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___88319 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___88320 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___88321 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___88322 = (function() { 
var G__88324__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__88324 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__88324__delegate.call(this, a, b, c, d, more);
};
G__88324.cljs$lang$maxFixedArity = 4;
G__88324.cljs$lang$applyTo = (function (arglist__88325){
var a = cljs.core.first(arglist__88325);
var b = cljs.core.first(cljs.core.next(arglist__88325));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88325)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__88325))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__88325))));
return G__88324__delegate.call(this, a, b, c, d, more);
});
return G__88324;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___88318.call(this,a);
case  2 :
return list_STAR___88319.call(this,a,b);
case  3 :
return list_STAR___88320.call(this,a,b,c);
case  4 :
return list_STAR___88321.call(this,a,b,c,d);
default:
return list_STAR___88322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___88322.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__88335 = (function (f,args){
var fixed_arity__88326 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__88326 + 1)) <= fixed_arity__88326)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__88336 = (function (f,x,args){
var arglist__88327 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__88328 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__88327,fixed_arity__88328) <= fixed_arity__88328)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__88327));
} else
{return f.cljs$lang$applyTo(arglist__88327);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__88327));
}
});
var apply__88337 = (function (f,x,y,args){
var arglist__88329 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__88330 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__88329,fixed_arity__88330) <= fixed_arity__88330)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__88329));
} else
{return f.cljs$lang$applyTo(arglist__88329);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__88329));
}
});
var apply__88338 = (function (f,x,y,z,args){
var arglist__88331 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__88332 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__88331,fixed_arity__88332) <= fixed_arity__88332)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__88331));
} else
{return f.cljs$lang$applyTo(arglist__88331);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__88331));
}
});
var apply__88339 = (function() { 
var G__88341__delegate = function (f,a,b,c,d,args){
var arglist__88333 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__88334 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__88333,fixed_arity__88334) <= fixed_arity__88334)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__88333));
} else
{return f.cljs$lang$applyTo(arglist__88333);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__88333));
}
};
var G__88341 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__88341__delegate.call(this, f, a, b, c, d, args);
};
G__88341.cljs$lang$maxFixedArity = 5;
G__88341.cljs$lang$applyTo = (function (arglist__88342){
var f = cljs.core.first(arglist__88342);
var a = cljs.core.first(cljs.core.next(arglist__88342));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88342)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__88342))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__88342)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__88342)))));
return G__88341__delegate.call(this, f, a, b, c, d, args);
});
return G__88341;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__88335.call(this,f,a);
case  3 :
return apply__88336.call(this,f,a,b);
case  4 :
return apply__88337.call(this,f,a,b,c);
case  5 :
return apply__88338.call(this,f,a,b,c,d);
default:
return apply__88339.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__88339.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__88343){
var obj = cljs.core.first(arglist__88343);
var f = cljs.core.first(cljs.core.next(arglist__88343));
var args = cljs.core.rest(cljs.core.next(arglist__88343));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___88344 = (function (x){
return false;
});
var not_EQ___88345 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___88346 = (function() { 
var G__88348__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__88348 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88348__delegate.call(this, x, y, more);
};
G__88348.cljs$lang$maxFixedArity = 2;
G__88348.cljs$lang$applyTo = (function (arglist__88349){
var x = cljs.core.first(arglist__88349);
var y = cljs.core.first(cljs.core.next(arglist__88349));
var more = cljs.core.rest(cljs.core.next(arglist__88349));
return G__88348__delegate.call(this, x, y, more);
});
return G__88348;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___88344.call(this,x);
case  2 :
return not_EQ___88345.call(this,x,y);
default:
return not_EQ___88346.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___88346.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__88350 = pred;
var G__88351 = cljs.core.next.call(null,coll);
pred = G__88350;
coll = G__88351;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____88352 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____88352))
{return or__3548__auto____88352;
} else
{{
var G__88353 = pred;
var G__88354 = cljs.core.next.call(null,coll);
pred = G__88353;
coll = G__88354;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__88355 = null;
var G__88355__88356 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__88355__88357 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__88355__88358 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__88355__88359 = (function() { 
var G__88361__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__88361 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88361__delegate.call(this, x, y, zs);
};
G__88361.cljs$lang$maxFixedArity = 2;
G__88361.cljs$lang$applyTo = (function (arglist__88362){
var x = cljs.core.first(arglist__88362);
var y = cljs.core.first(cljs.core.next(arglist__88362));
var zs = cljs.core.rest(cljs.core.next(arglist__88362));
return G__88361__delegate.call(this, x, y, zs);
});
return G__88361;
})()
;
G__88355 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__88355__88356.call(this);
case  1 :
return G__88355__88357.call(this,x);
case  2 :
return G__88355__88358.call(this,x,y);
default:
return G__88355__88359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__88355.cljs$lang$maxFixedArity = 2;
G__88355.cljs$lang$applyTo = G__88355__88359.cljs$lang$applyTo;
return G__88355;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__88363__delegate = function (args){
return x;
};
var G__88363 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__88363__delegate.call(this, args);
};
G__88363.cljs$lang$maxFixedArity = 0;
G__88363.cljs$lang$applyTo = (function (arglist__88364){
var args = cljs.core.seq( arglist__88364 );;
return G__88363__delegate.call(this, args);
});
return G__88363;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__88368 = (function (){
return cljs.core.identity;
});
var comp__88369 = (function (f){
return f;
});
var comp__88370 = (function (f,g){
return (function() {
var G__88374 = null;
var G__88374__88375 = (function (){
return f.call(null,g.call(null));
});
var G__88374__88376 = (function (x){
return f.call(null,g.call(null,x));
});
var G__88374__88377 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__88374__88378 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__88374__88379 = (function() { 
var G__88381__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__88381 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88381__delegate.call(this, x, y, z, args);
};
G__88381.cljs$lang$maxFixedArity = 3;
G__88381.cljs$lang$applyTo = (function (arglist__88382){
var x = cljs.core.first(arglist__88382);
var y = cljs.core.first(cljs.core.next(arglist__88382));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88382)));
return G__88381__delegate.call(this, x, y, z, args);
});
return G__88381;
})()
;
G__88374 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__88374__88375.call(this);
case  1 :
return G__88374__88376.call(this,x);
case  2 :
return G__88374__88377.call(this,x,y);
case  3 :
return G__88374__88378.call(this,x,y,z);
default:
return G__88374__88379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__88374.cljs$lang$maxFixedArity = 3;
G__88374.cljs$lang$applyTo = G__88374__88379.cljs$lang$applyTo;
return G__88374;
})()
});
var comp__88371 = (function (f,g,h){
return (function() {
var G__88383 = null;
var G__88383__88384 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__88383__88385 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__88383__88386 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__88383__88387 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__88383__88388 = (function() { 
var G__88390__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__88390 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88390__delegate.call(this, x, y, z, args);
};
G__88390.cljs$lang$maxFixedArity = 3;
G__88390.cljs$lang$applyTo = (function (arglist__88391){
var x = cljs.core.first(arglist__88391);
var y = cljs.core.first(cljs.core.next(arglist__88391));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88391)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88391)));
return G__88390__delegate.call(this, x, y, z, args);
});
return G__88390;
})()
;
G__88383 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__88383__88384.call(this);
case  1 :
return G__88383__88385.call(this,x);
case  2 :
return G__88383__88386.call(this,x,y);
case  3 :
return G__88383__88387.call(this,x,y,z);
default:
return G__88383__88388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__88383.cljs$lang$maxFixedArity = 3;
G__88383.cljs$lang$applyTo = G__88383__88388.cljs$lang$applyTo;
return G__88383;
})()
});
var comp__88372 = (function() { 
var G__88392__delegate = function (f1,f2,f3,fs){
var fs__88365 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__88393__delegate = function (args){
var ret__88366 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__88365),args);
var fs__88367 = cljs.core.next.call(null,fs__88365);

while(true){
if(cljs.core.truth_(fs__88367))
{{
var G__88394 = cljs.core.first.call(null,fs__88367).call(null,ret__88366);
var G__88395 = cljs.core.next.call(null,fs__88367);
ret__88366 = G__88394;
fs__88367 = G__88395;
continue;
}
} else
{return ret__88366;
}
break;
}
};
var G__88393 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__88393__delegate.call(this, args);
};
G__88393.cljs$lang$maxFixedArity = 0;
G__88393.cljs$lang$applyTo = (function (arglist__88396){
var args = cljs.core.seq( arglist__88396 );;
return G__88393__delegate.call(this, args);
});
return G__88393;
})()
;
};
var G__88392 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88392__delegate.call(this, f1, f2, f3, fs);
};
G__88392.cljs$lang$maxFixedArity = 3;
G__88392.cljs$lang$applyTo = (function (arglist__88397){
var f1 = cljs.core.first(arglist__88397);
var f2 = cljs.core.first(cljs.core.next(arglist__88397));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88397)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88397)));
return G__88392__delegate.call(this, f1, f2, f3, fs);
});
return G__88392;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__88368.call(this);
case  1 :
return comp__88369.call(this,f1);
case  2 :
return comp__88370.call(this,f1,f2);
case  3 :
return comp__88371.call(this,f1,f2,f3);
default:
return comp__88372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__88372.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__88398 = (function (f,arg1){
return (function() { 
var G__88403__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__88403 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__88403__delegate.call(this, args);
};
G__88403.cljs$lang$maxFixedArity = 0;
G__88403.cljs$lang$applyTo = (function (arglist__88404){
var args = cljs.core.seq( arglist__88404 );;
return G__88403__delegate.call(this, args);
});
return G__88403;
})()
;
});
var partial__88399 = (function (f,arg1,arg2){
return (function() { 
var G__88405__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__88405 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__88405__delegate.call(this, args);
};
G__88405.cljs$lang$maxFixedArity = 0;
G__88405.cljs$lang$applyTo = (function (arglist__88406){
var args = cljs.core.seq( arglist__88406 );;
return G__88405__delegate.call(this, args);
});
return G__88405;
})()
;
});
var partial__88400 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__88407__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__88407 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__88407__delegate.call(this, args);
};
G__88407.cljs$lang$maxFixedArity = 0;
G__88407.cljs$lang$applyTo = (function (arglist__88408){
var args = cljs.core.seq( arglist__88408 );;
return G__88407__delegate.call(this, args);
});
return G__88407;
})()
;
});
var partial__88401 = (function() { 
var G__88409__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__88410__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__88410 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__88410__delegate.call(this, args);
};
G__88410.cljs$lang$maxFixedArity = 0;
G__88410.cljs$lang$applyTo = (function (arglist__88411){
var args = cljs.core.seq( arglist__88411 );;
return G__88410__delegate.call(this, args);
});
return G__88410;
})()
;
};
var G__88409 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__88409__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__88409.cljs$lang$maxFixedArity = 4;
G__88409.cljs$lang$applyTo = (function (arglist__88412){
var f = cljs.core.first(arglist__88412);
var arg1 = cljs.core.first(cljs.core.next(arglist__88412));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88412)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__88412))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__88412))));
return G__88409__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__88409;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__88398.call(this,f,arg1);
case  3 :
return partial__88399.call(this,f,arg1,arg2);
case  4 :
return partial__88400.call(this,f,arg1,arg2,arg3);
default:
return partial__88401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__88401.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__88413 = (function (f,x){
return (function() {
var G__88417 = null;
var G__88417__88418 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__88417__88419 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__88417__88420 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__88417__88421 = (function() { 
var G__88423__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__88423 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88423__delegate.call(this, a, b, c, ds);
};
G__88423.cljs$lang$maxFixedArity = 3;
G__88423.cljs$lang$applyTo = (function (arglist__88424){
var a = cljs.core.first(arglist__88424);
var b = cljs.core.first(cljs.core.next(arglist__88424));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88424)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88424)));
return G__88423__delegate.call(this, a, b, c, ds);
});
return G__88423;
})()
;
G__88417 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__88417__88418.call(this,a);
case  2 :
return G__88417__88419.call(this,a,b);
case  3 :
return G__88417__88420.call(this,a,b,c);
default:
return G__88417__88421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__88417.cljs$lang$maxFixedArity = 3;
G__88417.cljs$lang$applyTo = G__88417__88421.cljs$lang$applyTo;
return G__88417;
})()
});
var fnil__88414 = (function (f,x,y){
return (function() {
var G__88425 = null;
var G__88425__88426 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__88425__88427 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__88425__88428 = (function() { 
var G__88430__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__88430 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88430__delegate.call(this, a, b, c, ds);
};
G__88430.cljs$lang$maxFixedArity = 3;
G__88430.cljs$lang$applyTo = (function (arglist__88431){
var a = cljs.core.first(arglist__88431);
var b = cljs.core.first(cljs.core.next(arglist__88431));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88431)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88431)));
return G__88430__delegate.call(this, a, b, c, ds);
});
return G__88430;
})()
;
G__88425 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__88425__88426.call(this,a,b);
case  3 :
return G__88425__88427.call(this,a,b,c);
default:
return G__88425__88428.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__88425.cljs$lang$maxFixedArity = 3;
G__88425.cljs$lang$applyTo = G__88425__88428.cljs$lang$applyTo;
return G__88425;
})()
});
var fnil__88415 = (function (f,x,y,z){
return (function() {
var G__88432 = null;
var G__88432__88433 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__88432__88434 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__88432__88435 = (function() { 
var G__88437__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__88437 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88437__delegate.call(this, a, b, c, ds);
};
G__88437.cljs$lang$maxFixedArity = 3;
G__88437.cljs$lang$applyTo = (function (arglist__88438){
var a = cljs.core.first(arglist__88438);
var b = cljs.core.first(cljs.core.next(arglist__88438));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88438)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88438)));
return G__88437__delegate.call(this, a, b, c, ds);
});
return G__88437;
})()
;
G__88432 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__88432__88433.call(this,a,b);
case  3 :
return G__88432__88434.call(this,a,b,c);
default:
return G__88432__88435.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__88432.cljs$lang$maxFixedArity = 3;
G__88432.cljs$lang$applyTo = G__88432__88435.cljs$lang$applyTo;
return G__88432;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__88413.call(this,f,x);
case  3 :
return fnil__88414.call(this,f,x,y);
case  4 :
return fnil__88415.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__88441 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____88439 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____88439))
{var s__88440 = temp__3698__auto____88439;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__88440)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__88440)));
} else
{return null;
}
})));
});

return mapi__88441.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____88442 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____88442))
{var s__88443 = temp__3698__auto____88442;

var x__88444 = f.call(null,cljs.core.first.call(null,s__88443));

if(cljs.core.truth_((x__88444 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__88443));
} else
{return cljs.core.cons.call(null,x__88444,keep.call(null,f,cljs.core.rest.call(null,s__88443)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__88454 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____88451 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____88451))
{var s__88452 = temp__3698__auto____88451;

var x__88453 = f.call(null,idx,cljs.core.first.call(null,s__88452));

if(cljs.core.truth_((x__88453 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__88452));
} else
{return cljs.core.cons.call(null,x__88453,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__88452)));
}
} else
{return null;
}
})));
});

return keepi__88454.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__88499 = (function (p){
return (function() {
var ep1 = null;
var ep1__88504 = (function (){
return true;
});
var ep1__88505 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__88506 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88461 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____88461))
{return p.call(null,y);
} else
{return and__3546__auto____88461;
}
})());
});
var ep1__88507 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88462 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____88462))
{var and__3546__auto____88463 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____88463))
{return p.call(null,z);
} else
{return and__3546__auto____88463;
}
} else
{return and__3546__auto____88462;
}
})());
});
var ep1__88508 = (function() { 
var G__88510__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88464 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____88464))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____88464;
}
})());
};
var G__88510 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88510__delegate.call(this, x, y, z, args);
};
G__88510.cljs$lang$maxFixedArity = 3;
G__88510.cljs$lang$applyTo = (function (arglist__88511){
var x = cljs.core.first(arglist__88511);
var y = cljs.core.first(cljs.core.next(arglist__88511));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88511)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88511)));
return G__88510__delegate.call(this, x, y, z, args);
});
return G__88510;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__88504.call(this);
case  1 :
return ep1__88505.call(this,x);
case  2 :
return ep1__88506.call(this,x,y);
case  3 :
return ep1__88507.call(this,x,y,z);
default:
return ep1__88508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__88508.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__88500 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__88512 = (function (){
return true;
});
var ep2__88513 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88465 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____88465))
{return p2.call(null,x);
} else
{return and__3546__auto____88465;
}
})());
});
var ep2__88514 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88466 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____88466))
{var and__3546__auto____88467 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____88467))
{var and__3546__auto____88468 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____88468))
{return p2.call(null,y);
} else
{return and__3546__auto____88468;
}
} else
{return and__3546__auto____88467;
}
} else
{return and__3546__auto____88466;
}
})());
});
var ep2__88515 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88469 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____88469))
{var and__3546__auto____88470 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____88470))
{var and__3546__auto____88471 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____88471))
{var and__3546__auto____88472 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____88472))
{var and__3546__auto____88473 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____88473))
{return p2.call(null,z);
} else
{return and__3546__auto____88473;
}
} else
{return and__3546__auto____88472;
}
} else
{return and__3546__auto____88471;
}
} else
{return and__3546__auto____88470;
}
} else
{return and__3546__auto____88469;
}
})());
});
var ep2__88516 = (function() { 
var G__88518__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88474 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____88474))
{return cljs.core.every_QMARK_.call(null,(function (p1__88445_SHARP_){
var and__3546__auto____88475 = p1.call(null,p1__88445_SHARP_);

if(cljs.core.truth_(and__3546__auto____88475))
{return p2.call(null,p1__88445_SHARP_);
} else
{return and__3546__auto____88475;
}
}),args);
} else
{return and__3546__auto____88474;
}
})());
};
var G__88518 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88518__delegate.call(this, x, y, z, args);
};
G__88518.cljs$lang$maxFixedArity = 3;
G__88518.cljs$lang$applyTo = (function (arglist__88519){
var x = cljs.core.first(arglist__88519);
var y = cljs.core.first(cljs.core.next(arglist__88519));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88519)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88519)));
return G__88518__delegate.call(this, x, y, z, args);
});
return G__88518;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__88512.call(this);
case  1 :
return ep2__88513.call(this,x);
case  2 :
return ep2__88514.call(this,x,y);
case  3 :
return ep2__88515.call(this,x,y,z);
default:
return ep2__88516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__88516.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__88501 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__88520 = (function (){
return true;
});
var ep3__88521 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88476 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____88476))
{var and__3546__auto____88477 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____88477))
{return p3.call(null,x);
} else
{return and__3546__auto____88477;
}
} else
{return and__3546__auto____88476;
}
})());
});
var ep3__88522 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88478 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____88478))
{var and__3546__auto____88479 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____88479))
{var and__3546__auto____88480 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____88480))
{var and__3546__auto____88481 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____88481))
{var and__3546__auto____88482 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____88482))
{return p3.call(null,y);
} else
{return and__3546__auto____88482;
}
} else
{return and__3546__auto____88481;
}
} else
{return and__3546__auto____88480;
}
} else
{return and__3546__auto____88479;
}
} else
{return and__3546__auto____88478;
}
})());
});
var ep3__88523 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88483 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____88483))
{var and__3546__auto____88484 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____88484))
{var and__3546__auto____88485 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____88485))
{var and__3546__auto____88486 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____88486))
{var and__3546__auto____88487 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____88487))
{var and__3546__auto____88488 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____88488))
{var and__3546__auto____88489 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____88489))
{var and__3546__auto____88490 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____88490))
{return p3.call(null,z);
} else
{return and__3546__auto____88490;
}
} else
{return and__3546__auto____88489;
}
} else
{return and__3546__auto____88488;
}
} else
{return and__3546__auto____88487;
}
} else
{return and__3546__auto____88486;
}
} else
{return and__3546__auto____88485;
}
} else
{return and__3546__auto____88484;
}
} else
{return and__3546__auto____88483;
}
})());
});
var ep3__88524 = (function() { 
var G__88526__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88491 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____88491))
{return cljs.core.every_QMARK_.call(null,(function (p1__88446_SHARP_){
var and__3546__auto____88492 = p1.call(null,p1__88446_SHARP_);

if(cljs.core.truth_(and__3546__auto____88492))
{var and__3546__auto____88493 = p2.call(null,p1__88446_SHARP_);

if(cljs.core.truth_(and__3546__auto____88493))
{return p3.call(null,p1__88446_SHARP_);
} else
{return and__3546__auto____88493;
}
} else
{return and__3546__auto____88492;
}
}),args);
} else
{return and__3546__auto____88491;
}
})());
};
var G__88526 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88526__delegate.call(this, x, y, z, args);
};
G__88526.cljs$lang$maxFixedArity = 3;
G__88526.cljs$lang$applyTo = (function (arglist__88527){
var x = cljs.core.first(arglist__88527);
var y = cljs.core.first(cljs.core.next(arglist__88527));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88527)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88527)));
return G__88526__delegate.call(this, x, y, z, args);
});
return G__88526;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__88520.call(this);
case  1 :
return ep3__88521.call(this,x);
case  2 :
return ep3__88522.call(this,x,y);
case  3 :
return ep3__88523.call(this,x,y,z);
default:
return ep3__88524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__88524.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__88502 = (function() { 
var G__88528__delegate = function (p1,p2,p3,ps){
var ps__88494 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__88529 = (function (){
return true;
});
var epn__88530 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__88447_SHARP_){
return p1__88447_SHARP_.call(null,x);
}),ps__88494);
});
var epn__88531 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__88448_SHARP_){
var and__3546__auto____88495 = p1__88448_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____88495))
{return p1__88448_SHARP_.call(null,y);
} else
{return and__3546__auto____88495;
}
}),ps__88494);
});
var epn__88532 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__88449_SHARP_){
var and__3546__auto____88496 = p1__88449_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____88496))
{var and__3546__auto____88497 = p1__88449_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____88497))
{return p1__88449_SHARP_.call(null,z);
} else
{return and__3546__auto____88497;
}
} else
{return and__3546__auto____88496;
}
}),ps__88494);
});
var epn__88533 = (function() { 
var G__88535__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____88498 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____88498))
{return cljs.core.every_QMARK_.call(null,(function (p1__88450_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__88450_SHARP_,args);
}),ps__88494);
} else
{return and__3546__auto____88498;
}
})());
};
var G__88535 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88535__delegate.call(this, x, y, z, args);
};
G__88535.cljs$lang$maxFixedArity = 3;
G__88535.cljs$lang$applyTo = (function (arglist__88536){
var x = cljs.core.first(arglist__88536);
var y = cljs.core.first(cljs.core.next(arglist__88536));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88536)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88536)));
return G__88535__delegate.call(this, x, y, z, args);
});
return G__88535;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__88529.call(this);
case  1 :
return epn__88530.call(this,x);
case  2 :
return epn__88531.call(this,x,y);
case  3 :
return epn__88532.call(this,x,y,z);
default:
return epn__88533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__88533.cljs$lang$applyTo;
return epn;
})()
};
var G__88528 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88528__delegate.call(this, p1, p2, p3, ps);
};
G__88528.cljs$lang$maxFixedArity = 3;
G__88528.cljs$lang$applyTo = (function (arglist__88537){
var p1 = cljs.core.first(arglist__88537);
var p2 = cljs.core.first(cljs.core.next(arglist__88537));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88537)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88537)));
return G__88528__delegate.call(this, p1, p2, p3, ps);
});
return G__88528;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__88499.call(this,p1);
case  2 :
return every_pred__88500.call(this,p1,p2);
case  3 :
return every_pred__88501.call(this,p1,p2,p3);
default:
return every_pred__88502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__88502.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__88577 = (function (p){
return (function() {
var sp1 = null;
var sp1__88582 = (function (){
return null;
});
var sp1__88583 = (function (x){
return p.call(null,x);
});
var sp1__88584 = (function (x,y){
var or__3548__auto____88539 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____88539))
{return or__3548__auto____88539;
} else
{return p.call(null,y);
}
});
var sp1__88585 = (function (x,y,z){
var or__3548__auto____88540 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____88540))
{return or__3548__auto____88540;
} else
{var or__3548__auto____88541 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____88541))
{return or__3548__auto____88541;
} else
{return p.call(null,z);
}
}
});
var sp1__88586 = (function() { 
var G__88588__delegate = function (x,y,z,args){
var or__3548__auto____88542 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____88542))
{return or__3548__auto____88542;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__88588 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88588__delegate.call(this, x, y, z, args);
};
G__88588.cljs$lang$maxFixedArity = 3;
G__88588.cljs$lang$applyTo = (function (arglist__88589){
var x = cljs.core.first(arglist__88589);
var y = cljs.core.first(cljs.core.next(arglist__88589));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88589)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88589)));
return G__88588__delegate.call(this, x, y, z, args);
});
return G__88588;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__88582.call(this);
case  1 :
return sp1__88583.call(this,x);
case  2 :
return sp1__88584.call(this,x,y);
case  3 :
return sp1__88585.call(this,x,y,z);
default:
return sp1__88586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__88586.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__88578 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__88590 = (function (){
return null;
});
var sp2__88591 = (function (x){
var or__3548__auto____88543 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____88543))
{return or__3548__auto____88543;
} else
{return p2.call(null,x);
}
});
var sp2__88592 = (function (x,y){
var or__3548__auto____88544 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____88544))
{return or__3548__auto____88544;
} else
{var or__3548__auto____88545 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____88545))
{return or__3548__auto____88545;
} else
{var or__3548__auto____88546 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____88546))
{return or__3548__auto____88546;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__88593 = (function (x,y,z){
var or__3548__auto____88547 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____88547))
{return or__3548__auto____88547;
} else
{var or__3548__auto____88548 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____88548))
{return or__3548__auto____88548;
} else
{var or__3548__auto____88549 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____88549))
{return or__3548__auto____88549;
} else
{var or__3548__auto____88550 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____88550))
{return or__3548__auto____88550;
} else
{var or__3548__auto____88551 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____88551))
{return or__3548__auto____88551;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__88594 = (function() { 
var G__88596__delegate = function (x,y,z,args){
var or__3548__auto____88552 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____88552))
{return or__3548__auto____88552;
} else
{return cljs.core.some.call(null,(function (p1__88455_SHARP_){
var or__3548__auto____88553 = p1.call(null,p1__88455_SHARP_);

if(cljs.core.truth_(or__3548__auto____88553))
{return or__3548__auto____88553;
} else
{return p2.call(null,p1__88455_SHARP_);
}
}),args);
}
};
var G__88596 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88596__delegate.call(this, x, y, z, args);
};
G__88596.cljs$lang$maxFixedArity = 3;
G__88596.cljs$lang$applyTo = (function (arglist__88597){
var x = cljs.core.first(arglist__88597);
var y = cljs.core.first(cljs.core.next(arglist__88597));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88597)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88597)));
return G__88596__delegate.call(this, x, y, z, args);
});
return G__88596;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__88590.call(this);
case  1 :
return sp2__88591.call(this,x);
case  2 :
return sp2__88592.call(this,x,y);
case  3 :
return sp2__88593.call(this,x,y,z);
default:
return sp2__88594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__88594.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__88579 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__88598 = (function (){
return null;
});
var sp3__88599 = (function (x){
var or__3548__auto____88554 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____88554))
{return or__3548__auto____88554;
} else
{var or__3548__auto____88555 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____88555))
{return or__3548__auto____88555;
} else
{return p3.call(null,x);
}
}
});
var sp3__88600 = (function (x,y){
var or__3548__auto____88556 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____88556))
{return or__3548__auto____88556;
} else
{var or__3548__auto____88557 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____88557))
{return or__3548__auto____88557;
} else
{var or__3548__auto____88558 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____88558))
{return or__3548__auto____88558;
} else
{var or__3548__auto____88559 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____88559))
{return or__3548__auto____88559;
} else
{var or__3548__auto____88560 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____88560))
{return or__3548__auto____88560;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__88601 = (function (x,y,z){
var or__3548__auto____88561 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____88561))
{return or__3548__auto____88561;
} else
{var or__3548__auto____88562 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____88562))
{return or__3548__auto____88562;
} else
{var or__3548__auto____88563 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____88563))
{return or__3548__auto____88563;
} else
{var or__3548__auto____88564 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____88564))
{return or__3548__auto____88564;
} else
{var or__3548__auto____88565 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____88565))
{return or__3548__auto____88565;
} else
{var or__3548__auto____88566 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____88566))
{return or__3548__auto____88566;
} else
{var or__3548__auto____88567 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____88567))
{return or__3548__auto____88567;
} else
{var or__3548__auto____88568 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____88568))
{return or__3548__auto____88568;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__88602 = (function() { 
var G__88604__delegate = function (x,y,z,args){
var or__3548__auto____88569 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____88569))
{return or__3548__auto____88569;
} else
{return cljs.core.some.call(null,(function (p1__88456_SHARP_){
var or__3548__auto____88570 = p1.call(null,p1__88456_SHARP_);

if(cljs.core.truth_(or__3548__auto____88570))
{return or__3548__auto____88570;
} else
{var or__3548__auto____88571 = p2.call(null,p1__88456_SHARP_);

if(cljs.core.truth_(or__3548__auto____88571))
{return or__3548__auto____88571;
} else
{return p3.call(null,p1__88456_SHARP_);
}
}
}),args);
}
};
var G__88604 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88604__delegate.call(this, x, y, z, args);
};
G__88604.cljs$lang$maxFixedArity = 3;
G__88604.cljs$lang$applyTo = (function (arglist__88605){
var x = cljs.core.first(arglist__88605);
var y = cljs.core.first(cljs.core.next(arglist__88605));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88605)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88605)));
return G__88604__delegate.call(this, x, y, z, args);
});
return G__88604;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__88598.call(this);
case  1 :
return sp3__88599.call(this,x);
case  2 :
return sp3__88600.call(this,x,y);
case  3 :
return sp3__88601.call(this,x,y,z);
default:
return sp3__88602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__88602.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__88580 = (function() { 
var G__88606__delegate = function (p1,p2,p3,ps){
var ps__88572 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__88607 = (function (){
return null;
});
var spn__88608 = (function (x){
return cljs.core.some.call(null,(function (p1__88457_SHARP_){
return p1__88457_SHARP_.call(null,x);
}),ps__88572);
});
var spn__88609 = (function (x,y){
return cljs.core.some.call(null,(function (p1__88458_SHARP_){
var or__3548__auto____88573 = p1__88458_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____88573))
{return or__3548__auto____88573;
} else
{return p1__88458_SHARP_.call(null,y);
}
}),ps__88572);
});
var spn__88610 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__88459_SHARP_){
var or__3548__auto____88574 = p1__88459_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____88574))
{return or__3548__auto____88574;
} else
{var or__3548__auto____88575 = p1__88459_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____88575))
{return or__3548__auto____88575;
} else
{return p1__88459_SHARP_.call(null,z);
}
}
}),ps__88572);
});
var spn__88611 = (function() { 
var G__88613__delegate = function (x,y,z,args){
var or__3548__auto____88576 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____88576))
{return or__3548__auto____88576;
} else
{return cljs.core.some.call(null,(function (p1__88460_SHARP_){
return cljs.core.some.call(null,p1__88460_SHARP_,args);
}),ps__88572);
}
};
var G__88613 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88613__delegate.call(this, x, y, z, args);
};
G__88613.cljs$lang$maxFixedArity = 3;
G__88613.cljs$lang$applyTo = (function (arglist__88614){
var x = cljs.core.first(arglist__88614);
var y = cljs.core.first(cljs.core.next(arglist__88614));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88614)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88614)));
return G__88613__delegate.call(this, x, y, z, args);
});
return G__88613;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__88607.call(this);
case  1 :
return spn__88608.call(this,x);
case  2 :
return spn__88609.call(this,x,y);
case  3 :
return spn__88610.call(this,x,y,z);
default:
return spn__88611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__88611.cljs$lang$applyTo;
return spn;
})()
};
var G__88606 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__88606__delegate.call(this, p1, p2, p3, ps);
};
G__88606.cljs$lang$maxFixedArity = 3;
G__88606.cljs$lang$applyTo = (function (arglist__88615){
var p1 = cljs.core.first(arglist__88615);
var p2 = cljs.core.first(cljs.core.next(arglist__88615));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88615)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88615)));
return G__88606__delegate.call(this, p1, p2, p3, ps);
});
return G__88606;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__88577.call(this,p1);
case  2 :
return some_fn__88578.call(this,p1,p2);
case  3 :
return some_fn__88579.call(this,p1,p2,p3);
default:
return some_fn__88580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__88580.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__88628 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____88616 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____88616))
{var s__88617 = temp__3698__auto____88616;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__88617)),map.call(null,f,cljs.core.rest.call(null,s__88617)));
} else
{return null;
}
})));
});
var map__88629 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__88618 = cljs.core.seq.call(null,c1);
var s2__88619 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____88620 = s1__88618;

if(cljs.core.truth_(and__3546__auto____88620))
{return s2__88619;
} else
{return and__3546__auto____88620;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__88618),cljs.core.first.call(null,s2__88619)),map.call(null,f,cljs.core.rest.call(null,s1__88618),cljs.core.rest.call(null,s2__88619)));
} else
{return null;
}
})));
});
var map__88630 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__88621 = cljs.core.seq.call(null,c1);
var s2__88622 = cljs.core.seq.call(null,c2);
var s3__88623 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____88624 = s1__88621;

if(cljs.core.truth_(and__3546__auto____88624))
{var and__3546__auto____88625 = s2__88622;

if(cljs.core.truth_(and__3546__auto____88625))
{return s3__88623;
} else
{return and__3546__auto____88625;
}
} else
{return and__3546__auto____88624;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__88621),cljs.core.first.call(null,s2__88622),cljs.core.first.call(null,s3__88623)),map.call(null,f,cljs.core.rest.call(null,s1__88621),cljs.core.rest.call(null,s2__88622),cljs.core.rest.call(null,s3__88623)));
} else
{return null;
}
})));
});
var map__88631 = (function() { 
var G__88633__delegate = function (f,c1,c2,c3,colls){
var step__88627 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__88626 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__88626)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__88626),step.call(null,map.call(null,cljs.core.rest,ss__88626)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__88538_SHARP_){
return cljs.core.apply.call(null,f,p1__88538_SHARP_);
}),step__88627.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__88633 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__88633__delegate.call(this, f, c1, c2, c3, colls);
};
G__88633.cljs$lang$maxFixedArity = 4;
G__88633.cljs$lang$applyTo = (function (arglist__88634){
var f = cljs.core.first(arglist__88634);
var c1 = cljs.core.first(cljs.core.next(arglist__88634));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88634)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__88634))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__88634))));
return G__88633__delegate.call(this, f, c1, c2, c3, colls);
});
return G__88633;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__88628.call(this,f,c1);
case  3 :
return map__88629.call(this,f,c1,c2);
case  4 :
return map__88630.call(this,f,c1,c2,c3);
default:
return map__88631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__88631.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____88635 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____88635))
{var s__88636 = temp__3698__auto____88635;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__88636),take.call(null,(n - 1),cljs.core.rest.call(null,s__88636)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__88639 = (function (n,coll){
while(true){
var s__88637 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____88638 = (n > 0);

if(cljs.core.truth_(and__3546__auto____88638))
{return s__88637;
} else
{return and__3546__auto____88638;
}
})()))
{{
var G__88640 = (n - 1);
var G__88641 = cljs.core.rest.call(null,s__88637);
n = G__88640;
coll = G__88641;
continue;
}
} else
{return s__88637;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__88639.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__88642 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__88643 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__88642.call(this,n);
case  2 :
return drop_last__88643.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__88645 = cljs.core.seq.call(null,coll);
var lead__88646 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__88646))
{{
var G__88647 = cljs.core.next.call(null,s__88645);
var G__88648 = cljs.core.next.call(null,lead__88646);
s__88645 = G__88647;
lead__88646 = G__88648;
continue;
}
} else
{return s__88645;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__88651 = (function (pred,coll){
while(true){
var s__88649 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____88650 = s__88649;

if(cljs.core.truth_(and__3546__auto____88650))
{return pred.call(null,cljs.core.first.call(null,s__88649));
} else
{return and__3546__auto____88650;
}
})()))
{{
var G__88652 = pred;
var G__88653 = cljs.core.rest.call(null,s__88649);
pred = G__88652;
coll = G__88653;
continue;
}
} else
{return s__88649;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__88651.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____88654 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____88654))
{var s__88655 = temp__3698__auto____88654;

return cljs.core.concat.call(null,s__88655,cycle.call(null,s__88655));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__88656 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__88657 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__88656.call(this,n);
case  2 :
return repeat__88657.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__88659 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__88660 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__88659.call(this,n);
case  2 :
return repeatedly__88660.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__88666 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__88662 = cljs.core.seq.call(null,c1);
var s2__88663 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____88664 = s1__88662;

if(cljs.core.truth_(and__3546__auto____88664))
{return s2__88663;
} else
{return and__3546__auto____88664;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__88662),cljs.core.cons.call(null,cljs.core.first.call(null,s2__88663),interleave.call(null,cljs.core.rest.call(null,s1__88662),cljs.core.rest.call(null,s2__88663))));
} else
{return null;
}
})));
});
var interleave__88667 = (function() { 
var G__88669__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__88665 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__88665)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__88665),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__88665)));
} else
{return null;
}
})));
};
var G__88669 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88669__delegate.call(this, c1, c2, colls);
};
G__88669.cljs$lang$maxFixedArity = 2;
G__88669.cljs$lang$applyTo = (function (arglist__88670){
var c1 = cljs.core.first(arglist__88670);
var c2 = cljs.core.first(cljs.core.next(arglist__88670));
var colls = cljs.core.rest(cljs.core.next(arglist__88670));
return G__88669__delegate.call(this, c1, c2, colls);
});
return G__88669;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__88666.call(this,c1,c2);
default:
return interleave__88667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__88667.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__88673 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____88671 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____88671))
{var coll__88672 = temp__3695__auto____88671;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__88672),cat.call(null,cljs.core.rest.call(null,coll__88672),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__88673.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__88674 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__88675 = (function() { 
var G__88677__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__88677 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__88677__delegate.call(this, f, coll, colls);
};
G__88677.cljs$lang$maxFixedArity = 2;
G__88677.cljs$lang$applyTo = (function (arglist__88678){
var f = cljs.core.first(arglist__88678);
var coll = cljs.core.first(cljs.core.next(arglist__88678));
var colls = cljs.core.rest(cljs.core.next(arglist__88678));
return G__88677__delegate.call(this, f, coll, colls);
});
return G__88677;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__88674.call(this,f,coll);
default:
return mapcat__88675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__88675.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____88679 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____88679))
{var s__88680 = temp__3698__auto____88679;

var f__88681 = cljs.core.first.call(null,s__88680);
var r__88682 = cljs.core.rest.call(null,s__88680);

if(cljs.core.truth_(pred.call(null,f__88681)))
{return cljs.core.cons.call(null,f__88681,filter.call(null,pred,r__88682));
} else
{return filter.call(null,pred,r__88682);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__88684 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__88684.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__88683_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__88683_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__88691 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__88692 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____88685 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____88685))
{var s__88686 = temp__3698__auto____88685;

var p__88687 = cljs.core.take.call(null,n,s__88686);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__88687))))
{return cljs.core.cons.call(null,p__88687,partition.call(null,n,step,cljs.core.drop.call(null,step,s__88686)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__88693 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____88688 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____88688))
{var s__88689 = temp__3698__auto____88688;

var p__88690 = cljs.core.take.call(null,n,s__88689);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__88690))))
{return cljs.core.cons.call(null,p__88690,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__88689)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__88690,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__88691.call(this,n,step);
case  3 :
return partition__88692.call(this,n,step,pad);
case  4 :
return partition__88693.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__88699 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__88700 = (function (m,ks,not_found){
var sentinel__88695 = cljs.core.lookup_sentinel;
var m__88696 = m;
var ks__88697 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__88697))
{var m__88698 = cljs.core.get.call(null,m__88696,cljs.core.first.call(null,ks__88697),sentinel__88695);

if(cljs.core.truth_((sentinel__88695 === m__88698)))
{return not_found;
} else
{{
var G__88702 = sentinel__88695;
var G__88703 = m__88698;
var G__88704 = cljs.core.next.call(null,ks__88697);
sentinel__88695 = G__88702;
m__88696 = G__88703;
ks__88697 = G__88704;
continue;
}
}
} else
{return m__88696;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__88699.call(this,m,ks);
case  3 :
return get_in__88700.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__88705,v){
var vec__88706__88707 = p__88705;
var k__88708 = cljs.core.nth.call(null,vec__88706__88707,0,null);
var ks__88709 = cljs.core.nthnext.call(null,vec__88706__88707,1);

if(cljs.core.truth_(ks__88709))
{return cljs.core.assoc.call(null,m,k__88708,assoc_in.call(null,cljs.core.get.call(null,m,k__88708),ks__88709,v));
} else
{return cljs.core.assoc.call(null,m,k__88708,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__88710,f,args){
var vec__88711__88712 = p__88710;
var k__88713 = cljs.core.nth.call(null,vec__88711__88712,0,null);
var ks__88714 = cljs.core.nthnext.call(null,vec__88711__88712,1);

if(cljs.core.truth_(ks__88714))
{return cljs.core.assoc.call(null,m,k__88713,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__88713),ks__88714,f,args));
} else
{return cljs.core.assoc.call(null,m,k__88713,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__88713),args));
}
};
var update_in = function (m,p__88710,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__88710, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__88715){
var m = cljs.core.first(arglist__88715);
var p__88710 = cljs.core.first(cljs.core.next(arglist__88715));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88715)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88715)));
return update_in__delegate.call(this, m, p__88710, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88716 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__88749 = null;
var G__88749__88750 = (function (coll,k){
var this__88717 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__88749__88751 = (function (coll,k,not_found){
var this__88718 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__88749 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__88749__88750.call(this,coll,k);
case  3 :
return G__88749__88751.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88749;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__88719 = this;
var new_array__88720 = cljs.core.aclone.call(null,this__88719.array);

(new_array__88720[k] = v);
return (new cljs.core.Vector(this__88719.meta,new_array__88720));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__88753 = null;
var G__88753__88754 = (function (tsym88721,k){
var this__88723 = this;
var tsym88721__88724 = this;

var coll__88725 = tsym88721__88724;

return cljs.core._lookup.call(null,coll__88725,k);
});
var G__88753__88755 = (function (tsym88722,k,not_found){
var this__88726 = this;
var tsym88722__88727 = this;

var coll__88728 = tsym88722__88727;

return cljs.core._lookup.call(null,coll__88728,k,not_found);
});
G__88753 = function(tsym88722,k,not_found){
switch(arguments.length){
case  2 :
return G__88753__88754.call(this,tsym88722,k);
case  3 :
return G__88753__88755.call(this,tsym88722,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88753;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__88729 = this;
var new_array__88730 = cljs.core.aclone.call(null,this__88729.array);

new_array__88730.push(o);
return (new cljs.core.Vector(this__88729.meta,new_array__88730));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__88757 = null;
var G__88757__88758 = (function (v,f){
var this__88731 = this;
return cljs.core.ci_reduce.call(null,this__88731.array,f);
});
var G__88757__88759 = (function (v,f,start){
var this__88732 = this;
return cljs.core.ci_reduce.call(null,this__88732.array,f,start);
});
G__88757 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__88757__88758.call(this,v,f);
case  3 :
return G__88757__88759.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88757;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88733 = this;
if(cljs.core.truth_((this__88733.array.length > 0)))
{var vector_seq__88734 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__88733.array.length)))
{return cljs.core.cons.call(null,(this__88733.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__88734.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__88735 = this;
return this__88735.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__88736 = this;
var count__88737 = this__88736.array.length;

if(cljs.core.truth_((count__88737 > 0)))
{return (this__88736.array[(count__88737 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__88738 = this;
if(cljs.core.truth_((this__88738.array.length > 0)))
{var new_array__88739 = cljs.core.aclone.call(null,this__88738.array);

new_array__88739.pop();
return (new cljs.core.Vector(this__88738.meta,new_array__88739));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__88740 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88741 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88742 = this;
return (new cljs.core.Vector(meta,this__88742.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88743 = this;
return this__88743.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__88761 = null;
var G__88761__88762 = (function (coll,n){
var this__88744 = this;
if(cljs.core.truth_((function (){var and__3546__auto____88745 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____88745))
{return (n < this__88744.array.length);
} else
{return and__3546__auto____88745;
}
})()))
{return (this__88744.array[n]);
} else
{return null;
}
});
var G__88761__88763 = (function (coll,n,not_found){
var this__88746 = this;
if(cljs.core.truth_((function (){var and__3546__auto____88747 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____88747))
{return (n < this__88746.array.length);
} else
{return and__3546__auto____88747;
}
})()))
{return (this__88746.array[n]);
} else
{return not_found;
}
});
G__88761 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__88761__88762.call(this,coll,n);
case  3 :
return G__88761__88763.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88761;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88748 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__88748.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__88765){
var args = cljs.core.seq( arglist__88765 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88766 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__88794 = null;
var G__88794__88795 = (function (coll,k){
var this__88767 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__88794__88796 = (function (coll,k,not_found){
var this__88768 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__88794 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__88794__88795.call(this,coll,k);
case  3 :
return G__88794__88796.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88794;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__88769 = this;
var v_pos__88770 = (this__88769.start + key);

return (new cljs.core.Subvec(this__88769.meta,cljs.core._assoc.call(null,this__88769.v,v_pos__88770,val),this__88769.start,((this__88769.end > (v_pos__88770 + 1)) ? this__88769.end : (v_pos__88770 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__88798 = null;
var G__88798__88799 = (function (tsym88771,k){
var this__88773 = this;
var tsym88771__88774 = this;

var coll__88775 = tsym88771__88774;

return cljs.core._lookup.call(null,coll__88775,k);
});
var G__88798__88800 = (function (tsym88772,k,not_found){
var this__88776 = this;
var tsym88772__88777 = this;

var coll__88778 = tsym88772__88777;

return cljs.core._lookup.call(null,coll__88778,k,not_found);
});
G__88798 = function(tsym88772,k,not_found){
switch(arguments.length){
case  2 :
return G__88798__88799.call(this,tsym88772,k);
case  3 :
return G__88798__88800.call(this,tsym88772,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88798;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__88779 = this;
return (new cljs.core.Subvec(this__88779.meta,cljs.core._assoc_n.call(null,this__88779.v,this__88779.end,o),this__88779.start,(this__88779.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__88802 = null;
var G__88802__88803 = (function (coll,f){
var this__88780 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__88802__88804 = (function (coll,f,start){
var this__88781 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__88802 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__88802__88803.call(this,coll,f);
case  3 :
return G__88802__88804.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88802;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88782 = this;
var subvec_seq__88783 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__88782.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__88782.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__88783.call(null,this__88782.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__88784 = this;
return (this__88784.end - this__88784.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__88785 = this;
return cljs.core._nth.call(null,this__88785.v,(this__88785.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__88786 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__88786.start,this__88786.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__88786.meta,this__88786.v,this__88786.start,(this__88786.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__88787 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88788 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88789 = this;
return (new cljs.core.Subvec(meta,this__88789.v,this__88789.start,this__88789.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88790 = this;
return this__88790.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__88806 = null;
var G__88806__88807 = (function (coll,n){
var this__88791 = this;
return cljs.core._nth.call(null,this__88791.v,(this__88791.start + n));
});
var G__88806__88808 = (function (coll,n,not_found){
var this__88792 = this;
return cljs.core._nth.call(null,this__88792.v,(this__88792.start + n),not_found);
});
G__88806 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__88806__88807.call(this,coll,n);
case  3 :
return G__88806__88808.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88806;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88793 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__88793.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__88810 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__88811 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__88810.call(this,v,start);
case  3 :
return subvec__88811.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88813 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88814 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88815 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88816 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__88816.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__88817 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__88818 = this;
return cljs.core._first.call(null,this__88818.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__88819 = this;
var temp__3695__auto____88820 = cljs.core.next.call(null,this__88819.front);

if(cljs.core.truth_(temp__3695__auto____88820))
{var f1__88821 = temp__3695__auto____88820;

return (new cljs.core.PersistentQueueSeq(this__88819.meta,f1__88821,this__88819.rear));
} else
{if(cljs.core.truth_((this__88819.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__88819.meta,this__88819.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88822 = this;
return this__88822.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88823 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__88823.front,this__88823.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88824 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__88825 = this;
if(cljs.core.truth_(this__88825.front))
{return (new cljs.core.PersistentQueue(this__88825.meta,(this__88825.count + 1),this__88825.front,cljs.core.conj.call(null,(function (){var or__3548__auto____88826 = this__88825.rear;

if(cljs.core.truth_(or__3548__auto____88826))
{return or__3548__auto____88826;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__88825.meta,(this__88825.count + 1),cljs.core.conj.call(null,this__88825.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88827 = this;
var rear__88828 = cljs.core.seq.call(null,this__88827.rear);

if(cljs.core.truth_((function (){var or__3548__auto____88829 = this__88827.front;

if(cljs.core.truth_(or__3548__auto____88829))
{return or__3548__auto____88829;
} else
{return rear__88828;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__88827.front,cljs.core.seq.call(null,rear__88828)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__88830 = this;
return this__88830.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__88831 = this;
return cljs.core._first.call(null,this__88831.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__88832 = this;
if(cljs.core.truth_(this__88832.front))
{var temp__3695__auto____88833 = cljs.core.next.call(null,this__88832.front);

if(cljs.core.truth_(temp__3695__auto____88833))
{var f1__88834 = temp__3695__auto____88833;

return (new cljs.core.PersistentQueue(this__88832.meta,(this__88832.count - 1),f1__88834,this__88832.rear));
} else
{return (new cljs.core.PersistentQueue(this__88832.meta,(this__88832.count - 1),cljs.core.seq.call(null,this__88832.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__88835 = this;
return cljs.core.first.call(null,this__88835.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__88836 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88837 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88838 = this;
return (new cljs.core.PersistentQueue(meta,this__88838.count,this__88838.front,this__88838.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88839 = this;
return this__88839.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88840 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__88841 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__88842 = array.length;

var i__88843 = 0;

while(true){
if(cljs.core.truth_((i__88843 < len__88842)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__88843]))))
{return i__88843;
} else
{{
var G__88844 = (i__88843 + incr);
i__88843 = G__88844;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___88846 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___88847 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____88845 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____88845))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____88845;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___88846.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___88847.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__88850 = cljs.core.hash.call(null,a);
var b__88851 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__88850 < b__88851)))
{return -1;
} else
{if(cljs.core.truth_((a__88850 > b__88851)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88852 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__88879 = null;
var G__88879__88880 = (function (coll,k){
var this__88853 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__88879__88881 = (function (coll,k,not_found){
var this__88854 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__88854.strobj,(this__88854.strobj[k]),not_found);
});
G__88879 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__88879__88880.call(this,coll,k);
case  3 :
return G__88879__88881.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88879;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__88855 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__88856 = goog.object.clone.call(null,this__88855.strobj);
var overwrite_QMARK___88857 = new_strobj__88856.hasOwnProperty(k);

(new_strobj__88856[k] = v);
if(cljs.core.truth_(overwrite_QMARK___88857))
{return (new cljs.core.ObjMap(this__88855.meta,this__88855.keys,new_strobj__88856));
} else
{var new_keys__88858 = cljs.core.aclone.call(null,this__88855.keys);

new_keys__88858.push(k);
return (new cljs.core.ObjMap(this__88855.meta,new_keys__88858,new_strobj__88856));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__88855.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__88859 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__88859.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__88883 = null;
var G__88883__88884 = (function (tsym88860,k){
var this__88862 = this;
var tsym88860__88863 = this;

var coll__88864 = tsym88860__88863;

return cljs.core._lookup.call(null,coll__88864,k);
});
var G__88883__88885 = (function (tsym88861,k,not_found){
var this__88865 = this;
var tsym88861__88866 = this;

var coll__88867 = tsym88861__88866;

return cljs.core._lookup.call(null,coll__88867,k,not_found);
});
G__88883 = function(tsym88861,k,not_found){
switch(arguments.length){
case  2 :
return G__88883__88884.call(this,tsym88861,k);
case  3 :
return G__88883__88885.call(this,tsym88861,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88883;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__88868 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88869 = this;
if(cljs.core.truth_((this__88869.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__88849_SHARP_){
return cljs.core.vector.call(null,p1__88849_SHARP_,(this__88869.strobj[p1__88849_SHARP_]));
}),this__88869.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__88870 = this;
return this__88870.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88871 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88872 = this;
return (new cljs.core.ObjMap(meta,this__88872.keys,this__88872.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88873 = this;
return this__88873.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88874 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__88874.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__88875 = this;
if(cljs.core.truth_((function (){var and__3546__auto____88876 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____88876))
{return this__88875.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____88876;
}
})()))
{var new_keys__88877 = cljs.core.aclone.call(null,this__88875.keys);
var new_strobj__88878 = goog.object.clone.call(null,this__88875.strobj);

new_keys__88877.splice(cljs.core.scan_array.call(null,1,k,new_keys__88877),1);
cljs.core.js_delete.call(null,new_strobj__88878,k);
return (new cljs.core.ObjMap(this__88875.meta,new_keys__88877,new_strobj__88878));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88888 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__88926 = null;
var G__88926__88927 = (function (coll,k){
var this__88889 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__88926__88928 = (function (coll,k,not_found){
var this__88890 = this;
var bucket__88891 = (this__88890.hashobj[cljs.core.hash.call(null,k)]);
var i__88892 = (cljs.core.truth_(bucket__88891)?cljs.core.scan_array.call(null,2,k,bucket__88891):null);

if(cljs.core.truth_(i__88892))
{return (bucket__88891[(i__88892 + 1)]);
} else
{return not_found;
}
});
G__88926 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__88926__88927.call(this,coll,k);
case  3 :
return G__88926__88928.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88926;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__88893 = this;
var h__88894 = cljs.core.hash.call(null,k);
var bucket__88895 = (this__88893.hashobj[h__88894]);

if(cljs.core.truth_(bucket__88895))
{var new_bucket__88896 = cljs.core.aclone.call(null,bucket__88895);
var new_hashobj__88897 = goog.object.clone.call(null,this__88893.hashobj);

(new_hashobj__88897[h__88894] = new_bucket__88896);
var temp__3695__auto____88898 = cljs.core.scan_array.call(null,2,k,new_bucket__88896);

if(cljs.core.truth_(temp__3695__auto____88898))
{var i__88899 = temp__3695__auto____88898;

(new_bucket__88896[(i__88899 + 1)] = v);
return (new cljs.core.HashMap(this__88893.meta,this__88893.count,new_hashobj__88897));
} else
{new_bucket__88896.push(k,v);
return (new cljs.core.HashMap(this__88893.meta,(this__88893.count + 1),new_hashobj__88897));
}
} else
{var new_hashobj__88900 = goog.object.clone.call(null,this__88893.hashobj);

(new_hashobj__88900[h__88894] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__88893.meta,(this__88893.count + 1),new_hashobj__88900));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__88901 = this;
var bucket__88902 = (this__88901.hashobj[cljs.core.hash.call(null,k)]);
var i__88903 = (cljs.core.truth_(bucket__88902)?cljs.core.scan_array.call(null,2,k,bucket__88902):null);

if(cljs.core.truth_(i__88903))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__88930 = null;
var G__88930__88931 = (function (tsym88904,k){
var this__88906 = this;
var tsym88904__88907 = this;

var coll__88908 = tsym88904__88907;

return cljs.core._lookup.call(null,coll__88908,k);
});
var G__88930__88932 = (function (tsym88905,k,not_found){
var this__88909 = this;
var tsym88905__88910 = this;

var coll__88911 = tsym88905__88910;

return cljs.core._lookup.call(null,coll__88911,k,not_found);
});
G__88930 = function(tsym88905,k,not_found){
switch(arguments.length){
case  2 :
return G__88930__88931.call(this,tsym88905,k);
case  3 :
return G__88930__88932.call(this,tsym88905,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88930;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__88912 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88913 = this;
if(cljs.core.truth_((this__88913.count > 0)))
{var hashes__88914 = cljs.core.js_keys.call(null,this__88913.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__88887_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__88913.hashobj[p1__88887_SHARP_])));
}),hashes__88914);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__88915 = this;
return this__88915.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88916 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88917 = this;
return (new cljs.core.HashMap(meta,this__88917.count,this__88917.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88918 = this;
return this__88918.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88919 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__88919.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__88920 = this;
var h__88921 = cljs.core.hash.call(null,k);
var bucket__88922 = (this__88920.hashobj[h__88921]);
var i__88923 = (cljs.core.truth_(bucket__88922)?cljs.core.scan_array.call(null,2,k,bucket__88922):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__88923)))
{return coll;
} else
{var new_hashobj__88924 = goog.object.clone.call(null,this__88920.hashobj);

if(cljs.core.truth_((3 > bucket__88922.length)))
{cljs.core.js_delete.call(null,new_hashobj__88924,h__88921);
} else
{var new_bucket__88925 = cljs.core.aclone.call(null,bucket__88922);

new_bucket__88925.splice(i__88923,2);
(new_hashobj__88924[h__88921] = new_bucket__88925);
}
return (new cljs.core.HashMap(this__88920.meta,(this__88920.count - 1),new_hashobj__88924));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__88934 = ks.length;

var i__88935 = 0;
var out__88936 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__88935 < len__88934)))
{{
var G__88937 = (i__88935 + 1);
var G__88938 = cljs.core.assoc.call(null,out__88936,(ks[i__88935]),(vs[i__88935]));
i__88935 = G__88937;
out__88936 = G__88938;
continue;
}
} else
{return out__88936;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__88939 = cljs.core.seq.call(null,keyvals);
var out__88940 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__88939))
{{
var G__88941 = cljs.core.nnext.call(null,in$__88939);
var G__88942 = cljs.core.assoc.call(null,out__88940,cljs.core.first.call(null,in$__88939),cljs.core.second.call(null,in$__88939));
in$__88939 = G__88941;
out__88940 = G__88942;
continue;
}
} else
{return out__88940;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__88943){
var keyvals = cljs.core.seq( arglist__88943 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__88944_SHARP_,p2__88945_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____88946 = p1__88944_SHARP_;

if(cljs.core.truth_(or__3548__auto____88946))
{return or__3548__auto____88946;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__88945_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__88947){
var maps = cljs.core.seq( arglist__88947 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__88950 = (function (m,e){
var k__88948 = cljs.core.first.call(null,e);
var v__88949 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__88948)))
{return cljs.core.assoc.call(null,m,k__88948,f.call(null,cljs.core.get.call(null,m,k__88948),v__88949));
} else
{return cljs.core.assoc.call(null,m,k__88948,v__88949);
}
});
var merge2__88952 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__88950,(function (){var or__3548__auto____88951 = m1;

if(cljs.core.truth_(or__3548__auto____88951))
{return or__3548__auto____88951;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__88952,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__88953){
var f = cljs.core.first(arglist__88953);
var maps = cljs.core.rest(arglist__88953);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__88955 = cljs.core.ObjMap.fromObject([],{});
var keys__88956 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__88956))
{var key__88957 = cljs.core.first.call(null,keys__88956);
var entry__88958 = cljs.core.get.call(null,map,key__88957,"\uFDD0'user/not-found");

{
var G__88959 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__88958,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__88955,key__88957,entry__88958):ret__88955);
var G__88960 = cljs.core.next.call(null,keys__88956);
ret__88955 = G__88959;
keys__88956 = G__88960;
continue;
}
} else
{return ret__88955;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__88961 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__88982 = null;
var G__88982__88983 = (function (coll,v){
var this__88962 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__88982__88984 = (function (coll,v,not_found){
var this__88963 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__88963.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__88982 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__88982__88983.call(this,coll,v);
case  3 :
return G__88982__88984.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88982;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__88986 = null;
var G__88986__88987 = (function (tsym88964,k){
var this__88966 = this;
var tsym88964__88967 = this;

var coll__88968 = tsym88964__88967;

return cljs.core._lookup.call(null,coll__88968,k);
});
var G__88986__88988 = (function (tsym88965,k,not_found){
var this__88969 = this;
var tsym88965__88970 = this;

var coll__88971 = tsym88965__88970;

return cljs.core._lookup.call(null,coll__88971,k,not_found);
});
G__88986 = function(tsym88965,k,not_found){
switch(arguments.length){
case  2 :
return G__88986__88987.call(this,tsym88965,k);
case  3 :
return G__88986__88988.call(this,tsym88965,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88986;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__88972 = this;
return (new cljs.core.Set(this__88972.meta,cljs.core.assoc.call(null,this__88972.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__88973 = this;
return cljs.core.keys.call(null,this__88973.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__88974 = this;
return (new cljs.core.Set(this__88974.meta,cljs.core.dissoc.call(null,this__88974.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__88975 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__88976 = this;
var and__3546__auto____88977 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____88977))
{var and__3546__auto____88978 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____88978))
{return cljs.core.every_QMARK_.call(null,(function (p1__88954_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__88954_SHARP_);
}),other);
} else
{return and__3546__auto____88978;
}
} else
{return and__3546__auto____88977;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__88979 = this;
return (new cljs.core.Set(meta,this__88979.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__88980 = this;
return this__88980.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__88981 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__88981.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__88991 = cljs.core.seq.call(null,coll);
var out__88992 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__88991))))
{{
var G__88993 = cljs.core.rest.call(null,in$__88991);
var G__88994 = cljs.core.conj.call(null,out__88992,cljs.core.first.call(null,in$__88991));
in$__88991 = G__88993;
out__88992 = G__88994;
continue;
}
} else
{return out__88992;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__88995 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____88996 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____88996))
{var e__88997 = temp__3695__auto____88996;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__88997));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__88995,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__88990_SHARP_){
var temp__3695__auto____88998 = cljs.core.find.call(null,smap,p1__88990_SHARP_);

if(cljs.core.truth_(temp__3695__auto____88998))
{var e__88999 = temp__3695__auto____88998;

return cljs.core.second.call(null,e__88999);
} else
{return p1__88990_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__89007 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__89000,seen){
while(true){
var vec__89001__89002 = p__89000;
var f__89003 = cljs.core.nth.call(null,vec__89001__89002,0,null);
var xs__89004 = vec__89001__89002;

var temp__3698__auto____89005 = cljs.core.seq.call(null,xs__89004);

if(cljs.core.truth_(temp__3698__auto____89005))
{var s__89006 = temp__3698__auto____89005;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__89003)))
{{
var G__89008 = cljs.core.rest.call(null,s__89006);
var G__89009 = seen;
p__89000 = G__89008;
seen = G__89009;
continue;
}
} else
{return cljs.core.cons.call(null,f__89003,step.call(null,cljs.core.rest.call(null,s__89006),cljs.core.conj.call(null,seen,f__89003)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__89007.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__89010 = cljs.core.Vector.fromArray([]);
var s__89011 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__89011)))
{{
var G__89012 = cljs.core.conj.call(null,ret__89010,cljs.core.first.call(null,s__89011));
var G__89013 = cljs.core.next.call(null,s__89011);
ret__89010 = G__89012;
s__89011 = G__89013;
continue;
}
} else
{return cljs.core.seq.call(null,ret__89010);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____89014 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____89014))
{return or__3548__auto____89014;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__89015 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__89015 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__89015 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____89016 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____89016))
{return or__3548__auto____89016;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__89017 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__89017 > -1)))
{return cljs.core.subs.call(null,x,2,i__89017);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__89020 = cljs.core.ObjMap.fromObject([],{});
var ks__89021 = cljs.core.seq.call(null,keys);
var vs__89022 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____89023 = ks__89021;

if(cljs.core.truth_(and__3546__auto____89023))
{return vs__89022;
} else
{return and__3546__auto____89023;
}
})()))
{{
var G__89024 = cljs.core.assoc.call(null,map__89020,cljs.core.first.call(null,ks__89021),cljs.core.first.call(null,vs__89022));
var G__89025 = cljs.core.next.call(null,ks__89021);
var G__89026 = cljs.core.next.call(null,vs__89022);
map__89020 = G__89024;
ks__89021 = G__89025;
vs__89022 = G__89026;
continue;
}
} else
{return map__89020;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__89029 = (function (k,x){
return x;
});
var max_key__89030 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__89031 = (function() { 
var G__89033__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__89018_SHARP_,p2__89019_SHARP_){
return max_key.call(null,k,p1__89018_SHARP_,p2__89019_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__89033 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__89033__delegate.call(this, k, x, y, more);
};
G__89033.cljs$lang$maxFixedArity = 3;
G__89033.cljs$lang$applyTo = (function (arglist__89034){
var k = cljs.core.first(arglist__89034);
var x = cljs.core.first(cljs.core.next(arglist__89034));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__89034)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__89034)));
return G__89033__delegate.call(this, k, x, y, more);
});
return G__89033;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__89029.call(this,k,x);
case  3 :
return max_key__89030.call(this,k,x,y);
default:
return max_key__89031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__89031.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__89035 = (function (k,x){
return x;
});
var min_key__89036 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__89037 = (function() { 
var G__89039__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__89027_SHARP_,p2__89028_SHARP_){
return min_key.call(null,k,p1__89027_SHARP_,p2__89028_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__89039 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__89039__delegate.call(this, k, x, y, more);
};
G__89039.cljs$lang$maxFixedArity = 3;
G__89039.cljs$lang$applyTo = (function (arglist__89040){
var k = cljs.core.first(arglist__89040);
var x = cljs.core.first(cljs.core.next(arglist__89040));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__89040)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__89040)));
return G__89039__delegate.call(this, k, x, y, more);
});
return G__89039;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__89035.call(this,k,x);
case  3 :
return min_key__89036.call(this,k,x,y);
default:
return min_key__89037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__89037.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__89043 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__89044 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____89041 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____89041))
{var s__89042 = temp__3698__auto____89041;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__89042),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__89042)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__89043.call(this,n,step);
case  3 :
return partition_all__89044.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____89046 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____89046))
{var s__89047 = temp__3698__auto____89046;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__89047))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__89047),take_while.call(null,pred,cljs.core.rest.call(null,s__89047)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__89048 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__89049 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__89065 = null;
var G__89065__89066 = (function (rng,f){
var this__89050 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__89065__89067 = (function (rng,f,s){
var this__89051 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__89065 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__89065__89066.call(this,rng,f);
case  3 :
return G__89065__89067.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__89065;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__89052 = this;
var comp__89053 = (cljs.core.truth_((this__89052.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__89053.call(null,this__89052.start,this__89052.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__89054 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__89054.end - this__89054.start) / this__89054.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__89055 = this;
return this__89055.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__89056 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__89056.meta,(this__89056.start + this__89056.step),this__89056.end,this__89056.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__89057 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__89058 = this;
return (new cljs.core.Range(meta,this__89058.start,this__89058.end,this__89058.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__89059 = this;
return this__89059.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__89069 = null;
var G__89069__89070 = (function (rng,n){
var this__89060 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__89060.start + (n * this__89060.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____89061 = (this__89060.start > this__89060.end);

if(cljs.core.truth_(and__3546__auto____89061))
{return cljs.core._EQ_.call(null,this__89060.step,0);
} else
{return and__3546__auto____89061;
}
})()))
{return this__89060.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__89069__89071 = (function (rng,n,not_found){
var this__89062 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__89062.start + (n * this__89062.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____89063 = (this__89062.start > this__89062.end);

if(cljs.core.truth_(and__3546__auto____89063))
{return cljs.core._EQ_.call(null,this__89062.step,0);
} else
{return and__3546__auto____89063;
}
})()))
{return this__89062.start;
} else
{return not_found;
}
}
});
G__89069 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__89069__89070.call(this,rng,n);
case  3 :
return G__89069__89071.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__89069;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__89064 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__89064.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__89073 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__89074 = (function (end){
return range.call(null,0,end,1);
});
var range__89075 = (function (start,end){
return range.call(null,start,end,1);
});
var range__89076 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__89073.call(this);
case  1 :
return range__89074.call(this,start);
case  2 :
return range__89075.call(this,start,end);
case  3 :
return range__89076.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____89078 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____89078))
{var s__89079 = temp__3698__auto____89078;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__89079),take_nth.call(null,n,cljs.core.drop.call(null,n,s__89079)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____89081 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____89081))
{var s__89082 = temp__3698__auto____89081;

var fst__89083 = cljs.core.first.call(null,s__89082);
var fv__89084 = f.call(null,fst__89083);
var run__89085 = cljs.core.cons.call(null,fst__89083,cljs.core.take_while.call(null,(function (p1__89080_SHARP_){
return cljs.core._EQ_.call(null,fv__89084,f.call(null,p1__89080_SHARP_));
}),cljs.core.next.call(null,s__89082)));

return cljs.core.cons.call(null,run__89085,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__89085),s__89082))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__89100 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____89096 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____89096))
{var s__89097 = temp__3695__auto____89096;

return reductions.call(null,f,cljs.core.first.call(null,s__89097),cljs.core.rest.call(null,s__89097));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__89101 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____89098 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____89098))
{var s__89099 = temp__3698__auto____89098;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__89099)),cljs.core.rest.call(null,s__89099));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__89100.call(this,f,init);
case  3 :
return reductions__89101.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__89104 = (function (f){
return (function() {
var G__89109 = null;
var G__89109__89110 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__89109__89111 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__89109__89112 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__89109__89113 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__89109__89114 = (function() { 
var G__89116__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__89116 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__89116__delegate.call(this, x, y, z, args);
};
G__89116.cljs$lang$maxFixedArity = 3;
G__89116.cljs$lang$applyTo = (function (arglist__89117){
var x = cljs.core.first(arglist__89117);
var y = cljs.core.first(cljs.core.next(arglist__89117));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__89117)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__89117)));
return G__89116__delegate.call(this, x, y, z, args);
});
return G__89116;
})()
;
G__89109 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__89109__89110.call(this);
case  1 :
return G__89109__89111.call(this,x);
case  2 :
return G__89109__89112.call(this,x,y);
case  3 :
return G__89109__89113.call(this,x,y,z);
default:
return G__89109__89114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__89109.cljs$lang$maxFixedArity = 3;
G__89109.cljs$lang$applyTo = G__89109__89114.cljs$lang$applyTo;
return G__89109;
})()
});
var juxt__89105 = (function (f,g){
return (function() {
var G__89118 = null;
var G__89118__89119 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__89118__89120 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__89118__89121 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__89118__89122 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__89118__89123 = (function() { 
var G__89125__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__89125 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__89125__delegate.call(this, x, y, z, args);
};
G__89125.cljs$lang$maxFixedArity = 3;
G__89125.cljs$lang$applyTo = (function (arglist__89126){
var x = cljs.core.first(arglist__89126);
var y = cljs.core.first(cljs.core.next(arglist__89126));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__89126)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__89126)));
return G__89125__delegate.call(this, x, y, z, args);
});
return G__89125;
})()
;
G__89118 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__89118__89119.call(this);
case  1 :
return G__89118__89120.call(this,x);
case  2 :
return G__89118__89121.call(this,x,y);
case  3 :
return G__89118__89122.call(this,x,y,z);
default:
return G__89118__89123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__89118.cljs$lang$maxFixedArity = 3;
G__89118.cljs$lang$applyTo = G__89118__89123.cljs$lang$applyTo;
return G__89118;
})()
});
var juxt__89106 = (function (f,g,h){
return (function() {
var G__89127 = null;
var G__89127__89128 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__89127__89129 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__89127__89130 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__89127__89131 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__89127__89132 = (function() { 
var G__89134__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__89134 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__89134__delegate.call(this, x, y, z, args);
};
G__89134.cljs$lang$maxFixedArity = 3;
G__89134.cljs$lang$applyTo = (function (arglist__89135){
var x = cljs.core.first(arglist__89135);
var y = cljs.core.first(cljs.core.next(arglist__89135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__89135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__89135)));
return G__89134__delegate.call(this, x, y, z, args);
});
return G__89134;
})()
;
G__89127 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__89127__89128.call(this);
case  1 :
return G__89127__89129.call(this,x);
case  2 :
return G__89127__89130.call(this,x,y);
case  3 :
return G__89127__89131.call(this,x,y,z);
default:
return G__89127__89132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__89127.cljs$lang$maxFixedArity = 3;
G__89127.cljs$lang$applyTo = G__89127__89132.cljs$lang$applyTo;
return G__89127;
})()
});
var juxt__89107 = (function() { 
var G__89136__delegate = function (f,g,h,fs){
var fs__89103 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__89137 = null;
var G__89137__89138 = (function (){
return cljs.core.reduce.call(null,(function (p1__89086_SHARP_,p2__89087_SHARP_){
return cljs.core.conj.call(null,p1__89086_SHARP_,p2__89087_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__89103);
});
var G__89137__89139 = (function (x){
return cljs.core.reduce.call(null,(function (p1__89088_SHARP_,p2__89089_SHARP_){
return cljs.core.conj.call(null,p1__89088_SHARP_,p2__89089_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__89103);
});
var G__89137__89140 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__89090_SHARP_,p2__89091_SHARP_){
return cljs.core.conj.call(null,p1__89090_SHARP_,p2__89091_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__89103);
});
var G__89137__89141 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__89092_SHARP_,p2__89093_SHARP_){
return cljs.core.conj.call(null,p1__89092_SHARP_,p2__89093_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__89103);
});
var G__89137__89142 = (function() { 
var G__89144__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__89094_SHARP_,p2__89095_SHARP_){
return cljs.core.conj.call(null,p1__89094_SHARP_,cljs.core.apply.call(null,p2__89095_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__89103);
};
var G__89144 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__89144__delegate.call(this, x, y, z, args);
};
G__89144.cljs$lang$maxFixedArity = 3;
G__89144.cljs$lang$applyTo = (function (arglist__89145){
var x = cljs.core.first(arglist__89145);
var y = cljs.core.first(cljs.core.next(arglist__89145));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__89145)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__89145)));
return G__89144__delegate.call(this, x, y, z, args);
});
return G__89144;
})()
;
G__89137 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__89137__89138.call(this);
case  1 :
return G__89137__89139.call(this,x);
case  2 :
return G__89137__89140.call(this,x,y);
case  3 :
return G__89137__89141.call(this,x,y,z);
default:
return G__89137__89142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__89137.cljs$lang$maxFixedArity = 3;
G__89137.cljs$lang$applyTo = G__89137__89142.cljs$lang$applyTo;
return G__89137;
})()
};
var G__89136 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__89136__delegate.call(this, f, g, h, fs);
};
G__89136.cljs$lang$maxFixedArity = 3;
G__89136.cljs$lang$applyTo = (function (arglist__89146){
var f = cljs.core.first(arglist__89146);
var g = cljs.core.first(cljs.core.next(arglist__89146));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__89146)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__89146)));
return G__89136__delegate.call(this, f, g, h, fs);
});
return G__89136;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__89104.call(this,f);
case  2 :
return juxt__89105.call(this,f,g);
case  3 :
return juxt__89106.call(this,f,g,h);
default:
return juxt__89107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__89107.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__89148 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__89151 = cljs.core.next.call(null,coll);
coll = G__89151;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__89149 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____89147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____89147))
{return (n > 0);
} else
{return and__3546__auto____89147;
}
})()))
{{
var G__89152 = (n - 1);
var G__89153 = cljs.core.next.call(null,coll);
n = G__89152;
coll = G__89153;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__89148.call(this,n);
case  2 :
return dorun__89149.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__89154 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__89155 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__89154.call(this,n);
case  2 :
return doall__89155.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__89157 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__89157),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__89157),1)))
{return cljs.core.first.call(null,matches__89157);
} else
{return cljs.core.vec.call(null,matches__89157);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__89158 = re.exec(s);

if(cljs.core.truth_((matches__89158 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__89158),1)))
{return cljs.core.first.call(null,matches__89158);
} else
{return cljs.core.vec.call(null,matches__89158);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__89159 = cljs.core.re_find.call(null,re,s);
var match_idx__89160 = s.search(re);
var match_str__89161 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__89159))?cljs.core.first.call(null,match_data__89159):match_data__89159);
var post_match__89162 = cljs.core.subs.call(null,s,(match_idx__89160 + cljs.core.count.call(null,match_str__89161)));

if(cljs.core.truth_(match_data__89159))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__89159,re_seq.call(null,re,post_match__89162));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__89164__89165 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___89166 = cljs.core.nth.call(null,vec__89164__89165,0,null);
var flags__89167 = cljs.core.nth.call(null,vec__89164__89165,1,null);
var pattern__89168 = cljs.core.nth.call(null,vec__89164__89165,2,null);

return (new RegExp(pattern__89168,flags__89167));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__89163_SHARP_){
return print_one.call(null,p1__89163_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____89169 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____89169))
{var and__3546__auto____89173 = (function (){var x__450__auto____89170 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____89171 = x__450__auto____89170;

if(cljs.core.truth_(and__3546__auto____89171))
{var and__3546__auto____89172 = x__450__auto____89170.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____89172))
{return cljs.core.not.call(null,x__450__auto____89170.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____89172;
}
} else
{return and__3546__auto____89171;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____89170);
}
})();

if(cljs.core.truth_(and__3546__auto____89173))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____89173;
}
} else
{return and__3546__auto____89169;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____89174 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____89175 = x__450__auto____89174;

if(cljs.core.truth_(and__3546__auto____89175))
{var and__3546__auto____89176 = x__450__auto____89174.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____89176))
{return cljs.core.not.call(null,x__450__auto____89174.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____89176;
}
} else
{return and__3546__auto____89175;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____89174);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__89177 = cljs.core.first.call(null,objs);
var sb__89178 = (new goog.string.StringBuffer());

var G__89179__89180 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__89179__89180))
{var obj__89181 = cljs.core.first.call(null,G__89179__89180);
var G__89179__89182 = G__89179__89180;

while(true){
if(cljs.core.truth_((obj__89181 === first_obj__89177)))
{} else
{sb__89178.append(" ");
}
var G__89183__89184 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__89181,opts));

if(cljs.core.truth_(G__89183__89184))
{var string__89185 = cljs.core.first.call(null,G__89183__89184);
var G__89183__89186 = G__89183__89184;

while(true){
sb__89178.append(string__89185);
var temp__3698__auto____89187 = cljs.core.next.call(null,G__89183__89186);

if(cljs.core.truth_(temp__3698__auto____89187))
{var G__89183__89188 = temp__3698__auto____89187;

{
var G__89191 = cljs.core.first.call(null,G__89183__89188);
var G__89192 = G__89183__89188;
string__89185 = G__89191;
G__89183__89186 = G__89192;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____89189 = cljs.core.next.call(null,G__89179__89182);

if(cljs.core.truth_(temp__3698__auto____89189))
{var G__89179__89190 = temp__3698__auto____89189;

{
var G__89193 = cljs.core.first.call(null,G__89179__89190);
var G__89194 = G__89179__89190;
obj__89181 = G__89193;
G__89179__89182 = G__89194;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__89178);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__89195 = cljs.core.first.call(null,objs);

var G__89196__89197 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__89196__89197))
{var obj__89198 = cljs.core.first.call(null,G__89196__89197);
var G__89196__89199 = G__89196__89197;

while(true){
if(cljs.core.truth_((obj__89198 === first_obj__89195)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__89200__89201 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__89198,opts));

if(cljs.core.truth_(G__89200__89201))
{var string__89202 = cljs.core.first.call(null,G__89200__89201);
var G__89200__89203 = G__89200__89201;

while(true){
cljs.core.string_print.call(null,string__89202);
var temp__3698__auto____89204 = cljs.core.next.call(null,G__89200__89203);

if(cljs.core.truth_(temp__3698__auto____89204))
{var G__89200__89205 = temp__3698__auto____89204;

{
var G__89208 = cljs.core.first.call(null,G__89200__89205);
var G__89209 = G__89200__89205;
string__89202 = G__89208;
G__89200__89203 = G__89209;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____89206 = cljs.core.next.call(null,G__89196__89199);

if(cljs.core.truth_(temp__3698__auto____89206))
{var G__89196__89207 = temp__3698__auto____89206;

{
var G__89210 = cljs.core.first.call(null,G__89196__89207);
var G__89211 = G__89196__89207;
obj__89198 = G__89210;
G__89196__89199 = G__89211;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__89212){
var objs = cljs.core.seq( arglist__89212 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__89213){
var objs = cljs.core.seq( arglist__89213 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__89214){
var objs = cljs.core.seq( arglist__89214 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__89215){
var objs = cljs.core.seq( arglist__89215 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__89216){
var objs = cljs.core.seq( arglist__89216 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__89217 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__89217,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____89218 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____89218))
{var nspc__89219 = temp__3698__auto____89218;

return cljs.core.str.call(null,nspc__89219,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____89220 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____89220))
{var nspc__89221 = temp__3698__auto____89220;

return cljs.core.str.call(null,nspc__89221,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__89222 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__89222,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__89223 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__89224 = this;
var G__89225__89226 = cljs.core.seq.call(null,this__89224.watches);

if(cljs.core.truth_(G__89225__89226))
{var G__89228__89230 = cljs.core.first.call(null,G__89225__89226);
var vec__89229__89231 = G__89228__89230;
var key__89232 = cljs.core.nth.call(null,vec__89229__89231,0,null);
var f__89233 = cljs.core.nth.call(null,vec__89229__89231,1,null);
var G__89225__89234 = G__89225__89226;

var G__89228__89235 = G__89228__89230;
var G__89225__89236 = G__89225__89234;

while(true){
var vec__89237__89238 = G__89228__89235;
var key__89239 = cljs.core.nth.call(null,vec__89237__89238,0,null);
var f__89240 = cljs.core.nth.call(null,vec__89237__89238,1,null);
var G__89225__89241 = G__89225__89236;

f__89240.call(null,key__89239,this$,oldval,newval);
var temp__3698__auto____89242 = cljs.core.next.call(null,G__89225__89241);

if(cljs.core.truth_(temp__3698__auto____89242))
{var G__89225__89243 = temp__3698__auto____89242;

{
var G__89250 = cljs.core.first.call(null,G__89225__89243);
var G__89251 = G__89225__89243;
G__89228__89235 = G__89250;
G__89225__89236 = G__89251;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__89244 = this;
return this$.watches = cljs.core.assoc.call(null,this__89244.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__89245 = this;
return this$.watches = cljs.core.dissoc.call(null,this__89245.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__89246 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__89246.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__89247 = this;
return this__89247.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__89248 = this;
return this__89248.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__89249 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__89258 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__89259 = (function() { 
var G__89261__delegate = function (x,p__89252){
var map__89253__89254 = p__89252;
var map__89253__89255 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__89253__89254))?cljs.core.apply.call(null,cljs.core.hash_map,map__89253__89254):map__89253__89254);
var validator__89256 = cljs.core.get.call(null,map__89253__89255,"\uFDD0'validator");
var meta__89257 = cljs.core.get.call(null,map__89253__89255,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__89257,validator__89256,null));
};
var G__89261 = function (x,var_args){
var p__89252 = null;
if (goog.isDef(var_args)) {
  p__89252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__89261__delegate.call(this, x, p__89252);
};
G__89261.cljs$lang$maxFixedArity = 1;
G__89261.cljs$lang$applyTo = (function (arglist__89262){
var x = cljs.core.first(arglist__89262);
var p__89252 = cljs.core.rest(arglist__89262);
return G__89261__delegate.call(this, x, p__89252);
});
return G__89261;
})()
;
atom = function(x,var_args){
var p__89252 = var_args;
switch(arguments.length){
case  1 :
return atom__89258.call(this,x);
default:
return atom__89259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__89259.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____89263 = a.validator;

if(cljs.core.truth_(temp__3698__auto____89263))
{var validate__89264 = temp__3698__auto____89263;

if(cljs.core.truth_(validate__89264.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__89265 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__89265,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___89266 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___89267 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___89268 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___89269 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___89270 = (function() { 
var G__89272__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__89272 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__89272__delegate.call(this, a, f, x, y, z, more);
};
G__89272.cljs$lang$maxFixedArity = 5;
G__89272.cljs$lang$applyTo = (function (arglist__89273){
var a = cljs.core.first(arglist__89273);
var f = cljs.core.first(cljs.core.next(arglist__89273));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__89273)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__89273))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__89273)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__89273)))));
return G__89272__delegate.call(this, a, f, x, y, z, more);
});
return G__89272;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___89266.call(this,a,f);
case  3 :
return swap_BANG___89267.call(this,a,f,x);
case  4 :
return swap_BANG___89268.call(this,a,f,x,y);
case  5 :
return swap_BANG___89269.call(this,a,f,x,y,z);
default:
return swap_BANG___89270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___89270.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__89274){
var iref = cljs.core.first(arglist__89274);
var f = cljs.core.first(cljs.core.next(arglist__89274));
var args = cljs.core.rest(cljs.core.next(arglist__89274));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__89275 = (function (){
return gensym.call(null,"G__");
});
var gensym__89276 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__89275.call(this);
case  1 :
return gensym__89276.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__89278 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__89278.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__89279 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__89279.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__89279.state,this__89279.f);
}
return cljs.core.deref.call(null,this__89279.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__89280){
var body = cljs.core.seq( arglist__89280 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__89281__89282 = options;
var map__89281__89283 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__89281__89282))?cljs.core.apply.call(null,cljs.core.hash_map,map__89281__89282):map__89281__89282);
var keywordize_keys__89284 = cljs.core.get.call(null,map__89281__89283,"\uFDD0'keywordize-keys");
var keyfn__89285 = (cljs.core.truth_(keywordize_keys__89284)?cljs.core.keyword:cljs.core.str);
var f__89291 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____89290 = (function iter__89286(s__89287){
return (new cljs.core.LazySeq(null,false,(function (){
var s__89287__89288 = s__89287;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__89287__89288)))
{var k__89289 = cljs.core.first.call(null,s__89287__89288);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__89285.call(null,k__89289),thisfn.call(null,(x[k__89289]))]),iter__89286.call(null,cljs.core.rest.call(null,s__89287__89288)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____89290.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__89291.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__89292){
var x = cljs.core.first(arglist__89292);
var options = cljs.core.rest(arglist__89292);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__89293 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__89297__delegate = function (args){
var temp__3695__auto____89294 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__89293),args);

if(cljs.core.truth_(temp__3695__auto____89294))
{var v__89295 = temp__3695__auto____89294;

return v__89295;
} else
{var ret__89296 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__89293,cljs.core.assoc,args,ret__89296);
return ret__89296;
}
};
var G__89297 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__89297__delegate.call(this, args);
};
G__89297.cljs$lang$maxFixedArity = 0;
G__89297.cljs$lang$applyTo = (function (arglist__89298){
var args = cljs.core.seq( arglist__89298 );;
return G__89297__delegate.call(this, args);
});
return G__89297;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__89300 = (function (f){
while(true){
var ret__89299 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__89299)))
{{
var G__89303 = ret__89299;
f = G__89303;
continue;
}
} else
{return ret__89299;
}
break;
}
});
var trampoline__89301 = (function() { 
var G__89304__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__89304 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__89304__delegate.call(this, f, args);
};
G__89304.cljs$lang$maxFixedArity = 1;
G__89304.cljs$lang$applyTo = (function (arglist__89305){
var f = cljs.core.first(arglist__89305);
var args = cljs.core.rest(arglist__89305);
return G__89304__delegate.call(this, f, args);
});
return G__89304;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__89300.call(this,f);
default:
return trampoline__89301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__89301.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__89306 = (function (){
return rand.call(null,1);
});
var rand__89307 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__89306.call(this);
case  1 :
return rand__89307.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__89309 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__89309,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__89309,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___89318 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___89319 = (function (h,child,parent){
var or__3548__auto____89310 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____89310))
{return or__3548__auto____89310;
} else
{var or__3548__auto____89311 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____89311))
{return or__3548__auto____89311;
} else
{var and__3546__auto____89312 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____89312))
{var and__3546__auto____89313 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____89313))
{var and__3546__auto____89314 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____89314))
{var ret__89315 = true;
var i__89316 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____89317 = cljs.core.not.call(null,ret__89315);

if(cljs.core.truth_(or__3548__auto____89317))
{return or__3548__auto____89317;
} else
{return cljs.core._EQ_.call(null,i__89316,cljs.core.count.call(null,parent));
}
})()))
{return ret__89315;
} else
{{
var G__89321 = isa_QMARK_.call(null,h,child.call(null,i__89316),parent.call(null,i__89316));
var G__89322 = (i__89316 + 1);
ret__89315 = G__89321;
i__89316 = G__89322;
continue;
}
}
break;
}
} else
{return and__3546__auto____89314;
}
} else
{return and__3546__auto____89313;
}
} else
{return and__3546__auto____89312;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___89318.call(this,h,child);
case  3 :
return isa_QMARK___89319.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__89323 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__89324 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__89323.call(this,h);
case  2 :
return parents__89324.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__89326 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__89327 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__89326.call(this,h);
case  2 :
return ancestors__89327.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__89329 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__89330 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__89329.call(this,h);
case  2 :
return descendants__89330.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__89340 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__89341 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__89335 = "\uFDD0'parents".call(null,h);
var td__89336 = "\uFDD0'descendants".call(null,h);
var ta__89337 = "\uFDD0'ancestors".call(null,h);
var tf__89338 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____89339 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__89335.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__89337.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__89337.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__89335,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__89338.call(null,"\uFDD0'ancestors".call(null,h),tag,td__89336,parent,ta__89337),"\uFDD0'descendants":tf__89338.call(null,"\uFDD0'descendants".call(null,h),parent,ta__89337,tag,td__89336)});
})());

if(cljs.core.truth_(or__3548__auto____89339))
{return or__3548__auto____89339;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__89340.call(this,h,tag);
case  3 :
return derive__89341.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__89347 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__89348 = (function (h,tag,parent){
var parentMap__89343 = "\uFDD0'parents".call(null,h);
var childsParents__89344 = (cljs.core.truth_(parentMap__89343.call(null,tag))?cljs.core.disj.call(null,parentMap__89343.call(null,tag),parent):cljs.core.set([]));
var newParents__89345 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__89344))?cljs.core.assoc.call(null,parentMap__89343,tag,childsParents__89344):cljs.core.dissoc.call(null,parentMap__89343,tag));
var deriv_seq__89346 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__89332_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__89332_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__89332_SHARP_),cljs.core.second.call(null,p1__89332_SHARP_)));
}),cljs.core.seq.call(null,newParents__89345)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__89343.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__89333_SHARP_,p2__89334_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__89333_SHARP_,p2__89334_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__89346));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__89347.call(this,h,tag);
case  3 :
return underive__89348.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__89350 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____89352 = (cljs.core.truth_((function (){var and__3546__auto____89351 = xprefs__89350;

if(cljs.core.truth_(and__3546__auto____89351))
{return xprefs__89350.call(null,y);
} else
{return and__3546__auto____89351;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____89352))
{return or__3548__auto____89352;
} else
{var or__3548__auto____89354 = (function (){var ps__89353 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__89353) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__89353),prefer_table)))
{} else
{}
{
var G__89357 = cljs.core.rest.call(null,ps__89353);
ps__89353 = G__89357;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____89354))
{return or__3548__auto____89354;
} else
{var or__3548__auto____89356 = (function (){var ps__89355 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__89355) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__89355),y,prefer_table)))
{} else
{}
{
var G__89358 = cljs.core.rest.call(null,ps__89355);
ps__89355 = G__89358;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____89356))
{return or__3548__auto____89356;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____89359 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____89359))
{return or__3548__auto____89359;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__89368 = cljs.core.reduce.call(null,(function (be,p__89360){
var vec__89361__89362 = p__89360;
var k__89363 = cljs.core.nth.call(null,vec__89361__89362,0,null);
var ___89364 = cljs.core.nth.call(null,vec__89361__89362,1,null);
var e__89365 = vec__89361__89362;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__89363)))
{var be2__89367 = (cljs.core.truth_((function (){var or__3548__auto____89366 = (be === null);

if(cljs.core.truth_(or__3548__auto____89366))
{return or__3548__auto____89366;
} else
{return cljs.core.dominates.call(null,k__89363,cljs.core.first.call(null,be),prefer_table);
}
})())?e__89365:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__89367),k__89363,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__89363," and ",cljs.core.first.call(null,be2__89367),", and neither is preferred")));
}
return be2__89367;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__89368))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__89368));
return cljs.core.second.call(null,best_entry__89368);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____89369 = mf;

if(cljs.core.truth_(and__3546__auto____89369))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____89369;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____89370 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____89370))
{return or__3548__auto____89370;
} else
{var or__3548__auto____89371 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____89371))
{return or__3548__auto____89371;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____89372 = mf;

if(cljs.core.truth_(and__3546__auto____89372))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____89372;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____89373 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____89373))
{return or__3548__auto____89373;
} else
{var or__3548__auto____89374 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____89374))
{return or__3548__auto____89374;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____89375 = mf;

if(cljs.core.truth_(and__3546__auto____89375))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____89375;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____89376 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____89376))
{return or__3548__auto____89376;
} else
{var or__3548__auto____89377 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____89377))
{return or__3548__auto____89377;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____89378 = mf;

if(cljs.core.truth_(and__3546__auto____89378))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____89378;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____89379 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____89379))
{return or__3548__auto____89379;
} else
{var or__3548__auto____89380 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____89380))
{return or__3548__auto____89380;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____89381 = mf;

if(cljs.core.truth_(and__3546__auto____89381))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____89381;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____89382 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____89382))
{return or__3548__auto____89382;
} else
{var or__3548__auto____89383 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____89383))
{return or__3548__auto____89383;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____89384 = mf;

if(cljs.core.truth_(and__3546__auto____89384))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____89384;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____89385 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____89385))
{return or__3548__auto____89385;
} else
{var or__3548__auto____89386 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____89386))
{return or__3548__auto____89386;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____89387 = mf;

if(cljs.core.truth_(and__3546__auto____89387))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____89387;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____89388 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____89388))
{return or__3548__auto____89388;
} else
{var or__3548__auto____89389 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____89389))
{return or__3548__auto____89389;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____89390 = mf;

if(cljs.core.truth_(and__3546__auto____89390))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____89390;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____89391 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____89391))
{return or__3548__auto____89391;
} else
{var or__3548__auto____89392 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____89392))
{return or__3548__auto____89392;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__89393 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__89394 = cljs.core._get_method.call(null,mf,dispatch_val__89393);

if(cljs.core.truth_(target_fn__89394))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__89393)));
}
return cljs.core.apply.call(null,target_fn__89394,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__89395 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__89396 = this;
cljs.core.swap_BANG_.call(null,this__89396.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__89396.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__89396.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__89396.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__89397 = this;
cljs.core.swap_BANG_.call(null,this__89397.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__89397.method_cache,this__89397.method_table,this__89397.cached_hierarchy,this__89397.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__89398 = this;
cljs.core.swap_BANG_.call(null,this__89398.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__89398.method_cache,this__89398.method_table,this__89398.cached_hierarchy,this__89398.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__89399 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__89399.cached_hierarchy),cljs.core.deref.call(null,this__89399.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__89399.method_cache,this__89399.method_table,this__89399.cached_hierarchy,this__89399.hierarchy);
}
var temp__3695__auto____89400 = cljs.core.deref.call(null,this__89399.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____89400))
{var target_fn__89401 = temp__3695__auto____89400;

return target_fn__89401;
} else
{var temp__3695__auto____89402 = cljs.core.find_and_cache_best_method.call(null,this__89399.name,dispatch_val,this__89399.hierarchy,this__89399.method_table,this__89399.prefer_table,this__89399.method_cache,this__89399.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____89402))
{var target_fn__89403 = temp__3695__auto____89402;

return target_fn__89403;
} else
{return cljs.core.deref.call(null,this__89399.method_table).call(null,this__89399.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__89404 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__89404.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__89404.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__89404.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__89404.method_cache,this__89404.method_table,this__89404.cached_hierarchy,this__89404.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__89405 = this;
return cljs.core.deref.call(null,this__89405.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__89406 = this;
return cljs.core.deref.call(null,this__89406.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__89407 = this;
return cljs.core.do_dispatch.call(null,mf,this__89407.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__89408__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__89408 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__89408__delegate.call(this, _, args);
};
G__89408.cljs$lang$maxFixedArity = 1;
G__89408.cljs$lang$applyTo = (function (arglist__89409){
var _ = cljs.core.first(arglist__89409);
var args = cljs.core.rest(arglist__89409);
return G__89408__delegate.call(this, _, args);
});
return G__89408;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
