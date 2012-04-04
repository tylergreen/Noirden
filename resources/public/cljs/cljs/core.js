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
var or__3548__auto____73715 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____73715))
{return or__3548__auto____73715;
} else
{var or__3548__auto____73716 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____73716))
{return or__3548__auto____73716;
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
var _invoke__73780 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____73717 = this$;

if(cljs.core.truth_(and__3546__auto____73717))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73717;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____73718 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73718))
{return or__3548__auto____73718;
} else
{var or__3548__auto____73719 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73719))
{return or__3548__auto____73719;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__73781 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____73720 = this$;

if(cljs.core.truth_(and__3546__auto____73720))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73720;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____73721 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73721))
{return or__3548__auto____73721;
} else
{var or__3548__auto____73722 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73722))
{return or__3548__auto____73722;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__73782 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____73723 = this$;

if(cljs.core.truth_(and__3546__auto____73723))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73723;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____73724 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73724))
{return or__3548__auto____73724;
} else
{var or__3548__auto____73725 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73725))
{return or__3548__auto____73725;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__73783 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____73726 = this$;

if(cljs.core.truth_(and__3546__auto____73726))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73726;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____73727 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73727))
{return or__3548__auto____73727;
} else
{var or__3548__auto____73728 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73728))
{return or__3548__auto____73728;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__73784 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____73729 = this$;

if(cljs.core.truth_(and__3546__auto____73729))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73729;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____73730 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73730))
{return or__3548__auto____73730;
} else
{var or__3548__auto____73731 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73731))
{return or__3548__auto____73731;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__73785 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____73732 = this$;

if(cljs.core.truth_(and__3546__auto____73732))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73732;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____73733 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73733))
{return or__3548__auto____73733;
} else
{var or__3548__auto____73734 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73734))
{return or__3548__auto____73734;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__73786 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____73735 = this$;

if(cljs.core.truth_(and__3546__auto____73735))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73735;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____73736 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73736))
{return or__3548__auto____73736;
} else
{var or__3548__auto____73737 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73737))
{return or__3548__auto____73737;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__73787 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____73738 = this$;

if(cljs.core.truth_(and__3546__auto____73738))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73738;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____73739 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73739))
{return or__3548__auto____73739;
} else
{var or__3548__auto____73740 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73740))
{return or__3548__auto____73740;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__73788 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____73741 = this$;

if(cljs.core.truth_(and__3546__auto____73741))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73741;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____73742 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73742))
{return or__3548__auto____73742;
} else
{var or__3548__auto____73743 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73743))
{return or__3548__auto____73743;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__73789 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____73744 = this$;

if(cljs.core.truth_(and__3546__auto____73744))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73744;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____73745 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73745))
{return or__3548__auto____73745;
} else
{var or__3548__auto____73746 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73746))
{return or__3548__auto____73746;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__73790 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____73747 = this$;

if(cljs.core.truth_(and__3546__auto____73747))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73747;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____73748 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73748))
{return or__3548__auto____73748;
} else
{var or__3548__auto____73749 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73749))
{return or__3548__auto____73749;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__73791 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____73750 = this$;

if(cljs.core.truth_(and__3546__auto____73750))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73750;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____73751 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73751))
{return or__3548__auto____73751;
} else
{var or__3548__auto____73752 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73752))
{return or__3548__auto____73752;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__73792 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____73753 = this$;

if(cljs.core.truth_(and__3546__auto____73753))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73753;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____73754 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73754))
{return or__3548__auto____73754;
} else
{var or__3548__auto____73755 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73755))
{return or__3548__auto____73755;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__73793 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____73756 = this$;

if(cljs.core.truth_(and__3546__auto____73756))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73756;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____73757 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73757))
{return or__3548__auto____73757;
} else
{var or__3548__auto____73758 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73758))
{return or__3548__auto____73758;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__73794 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____73759 = this$;

if(cljs.core.truth_(and__3546__auto____73759))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73759;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____73760 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73760))
{return or__3548__auto____73760;
} else
{var or__3548__auto____73761 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73761))
{return or__3548__auto____73761;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__73795 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____73762 = this$;

if(cljs.core.truth_(and__3546__auto____73762))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73762;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____73763 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73763))
{return or__3548__auto____73763;
} else
{var or__3548__auto____73764 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73764))
{return or__3548__auto____73764;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__73796 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____73765 = this$;

if(cljs.core.truth_(and__3546__auto____73765))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73765;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____73766 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73766))
{return or__3548__auto____73766;
} else
{var or__3548__auto____73767 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73767))
{return or__3548__auto____73767;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__73797 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____73768 = this$;

if(cljs.core.truth_(and__3546__auto____73768))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73768;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____73769 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73769))
{return or__3548__auto____73769;
} else
{var or__3548__auto____73770 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73770))
{return or__3548__auto____73770;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__73798 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____73771 = this$;

if(cljs.core.truth_(and__3546__auto____73771))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73771;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____73772 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73772))
{return or__3548__auto____73772;
} else
{var or__3548__auto____73773 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73773))
{return or__3548__auto____73773;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__73799 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____73774 = this$;

if(cljs.core.truth_(and__3546__auto____73774))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73774;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____73775 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73775))
{return or__3548__auto____73775;
} else
{var or__3548__auto____73776 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73776))
{return or__3548__auto____73776;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__73800 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____73777 = this$;

if(cljs.core.truth_(and__3546__auto____73777))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____73777;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____73778 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73778))
{return or__3548__auto____73778;
} else
{var or__3548__auto____73779 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____73779))
{return or__3548__auto____73779;
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
return _invoke__73780.call(this,this$);
case  2 :
return _invoke__73781.call(this,this$,a);
case  3 :
return _invoke__73782.call(this,this$,a,b);
case  4 :
return _invoke__73783.call(this,this$,a,b,c);
case  5 :
return _invoke__73784.call(this,this$,a,b,c,d);
case  6 :
return _invoke__73785.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__73786.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__73787.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__73788.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__73789.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__73790.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__73791.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__73792.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__73793.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__73794.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__73795.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__73796.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__73797.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__73798.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__73799.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__73800.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____73802 = coll;

if(cljs.core.truth_(and__3546__auto____73802))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____73802;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____73803 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73803))
{return or__3548__auto____73803;
} else
{var or__3548__auto____73804 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____73804))
{return or__3548__auto____73804;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____73805 = coll;

if(cljs.core.truth_(and__3546__auto____73805))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____73805;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____73806 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73806))
{return or__3548__auto____73806;
} else
{var or__3548__auto____73807 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____73807))
{return or__3548__auto____73807;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____73808 = coll;

if(cljs.core.truth_(and__3546__auto____73808))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____73808;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____73809 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73809))
{return or__3548__auto____73809;
} else
{var or__3548__auto____73810 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____73810))
{return or__3548__auto____73810;
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
var _nth__73817 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____73811 = coll;

if(cljs.core.truth_(and__3546__auto____73811))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____73811;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____73812 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73812))
{return or__3548__auto____73812;
} else
{var or__3548__auto____73813 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____73813))
{return or__3548__auto____73813;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__73818 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____73814 = coll;

if(cljs.core.truth_(and__3546__auto____73814))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____73814;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____73815 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73815))
{return or__3548__auto____73815;
} else
{var or__3548__auto____73816 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____73816))
{return or__3548__auto____73816;
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
return _nth__73817.call(this,coll,n);
case  3 :
return _nth__73818.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____73820 = coll;

if(cljs.core.truth_(and__3546__auto____73820))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____73820;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____73821 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73821))
{return or__3548__auto____73821;
} else
{var or__3548__auto____73822 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____73822))
{return or__3548__auto____73822;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____73823 = coll;

if(cljs.core.truth_(and__3546__auto____73823))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____73823;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____73824 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73824))
{return or__3548__auto____73824;
} else
{var or__3548__auto____73825 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____73825))
{return or__3548__auto____73825;
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
var _lookup__73832 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____73826 = o;

if(cljs.core.truth_(and__3546__auto____73826))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____73826;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____73827 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73827))
{return or__3548__auto____73827;
} else
{var or__3548__auto____73828 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____73828))
{return or__3548__auto____73828;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__73833 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____73829 = o;

if(cljs.core.truth_(and__3546__auto____73829))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____73829;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____73830 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73830))
{return or__3548__auto____73830;
} else
{var or__3548__auto____73831 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____73831))
{return or__3548__auto____73831;
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
return _lookup__73832.call(this,o,k);
case  3 :
return _lookup__73833.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____73835 = coll;

if(cljs.core.truth_(and__3546__auto____73835))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____73835;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____73836 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73836))
{return or__3548__auto____73836;
} else
{var or__3548__auto____73837 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____73837))
{return or__3548__auto____73837;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____73838 = coll;

if(cljs.core.truth_(and__3546__auto____73838))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____73838;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____73839 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73839))
{return or__3548__auto____73839;
} else
{var or__3548__auto____73840 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____73840))
{return or__3548__auto____73840;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____73841 = coll;

if(cljs.core.truth_(and__3546__auto____73841))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____73841;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____73842 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73842))
{return or__3548__auto____73842;
} else
{var or__3548__auto____73843 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____73843))
{return or__3548__auto____73843;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____73844 = coll;

if(cljs.core.truth_(and__3546__auto____73844))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____73844;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____73845 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73845))
{return or__3548__auto____73845;
} else
{var or__3548__auto____73846 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____73846))
{return or__3548__auto____73846;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____73847 = coll;

if(cljs.core.truth_(and__3546__auto____73847))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____73847;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____73848 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73848))
{return or__3548__auto____73848;
} else
{var or__3548__auto____73849 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____73849))
{return or__3548__auto____73849;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____73850 = coll;

if(cljs.core.truth_(and__3546__auto____73850))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____73850;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____73851 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73851))
{return or__3548__auto____73851;
} else
{var or__3548__auto____73852 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____73852))
{return or__3548__auto____73852;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____73853 = coll;

if(cljs.core.truth_(and__3546__auto____73853))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____73853;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____73854 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73854))
{return or__3548__auto____73854;
} else
{var or__3548__auto____73855 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____73855))
{return or__3548__auto____73855;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____73856 = o;

if(cljs.core.truth_(and__3546__auto____73856))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____73856;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____73857 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73857))
{return or__3548__auto____73857;
} else
{var or__3548__auto____73858 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____73858))
{return or__3548__auto____73858;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____73859 = o;

if(cljs.core.truth_(and__3546__auto____73859))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____73859;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____73860 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73860))
{return or__3548__auto____73860;
} else
{var or__3548__auto____73861 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____73861))
{return or__3548__auto____73861;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____73862 = o;

if(cljs.core.truth_(and__3546__auto____73862))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____73862;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____73863 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73863))
{return or__3548__auto____73863;
} else
{var or__3548__auto____73864 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____73864))
{return or__3548__auto____73864;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____73865 = o;

if(cljs.core.truth_(and__3546__auto____73865))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____73865;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____73866 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73866))
{return or__3548__auto____73866;
} else
{var or__3548__auto____73867 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____73867))
{return or__3548__auto____73867;
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
var _reduce__73874 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____73868 = coll;

if(cljs.core.truth_(and__3546__auto____73868))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____73868;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____73869 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73869))
{return or__3548__auto____73869;
} else
{var or__3548__auto____73870 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____73870))
{return or__3548__auto____73870;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__73875 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____73871 = coll;

if(cljs.core.truth_(and__3546__auto____73871))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____73871;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____73872 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____73872))
{return or__3548__auto____73872;
} else
{var or__3548__auto____73873 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____73873))
{return or__3548__auto____73873;
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
return _reduce__73874.call(this,coll,f);
case  3 :
return _reduce__73875.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____73877 = o;

if(cljs.core.truth_(and__3546__auto____73877))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____73877;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____73878 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73878))
{return or__3548__auto____73878;
} else
{var or__3548__auto____73879 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____73879))
{return or__3548__auto____73879;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____73880 = o;

if(cljs.core.truth_(and__3546__auto____73880))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____73880;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____73881 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73881))
{return or__3548__auto____73881;
} else
{var or__3548__auto____73882 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____73882))
{return or__3548__auto____73882;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____73883 = o;

if(cljs.core.truth_(and__3546__auto____73883))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____73883;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____73884 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73884))
{return or__3548__auto____73884;
} else
{var or__3548__auto____73885 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____73885))
{return or__3548__auto____73885;
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
if(cljs.core.truth_((function (){var and__3546__auto____73886 = o;

if(cljs.core.truth_(and__3546__auto____73886))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____73886;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____73887 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____73887))
{return or__3548__auto____73887;
} else
{var or__3548__auto____73888 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____73888))
{return or__3548__auto____73888;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____73889 = d;

if(cljs.core.truth_(and__3546__auto____73889))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____73889;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____73890 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____73890))
{return or__3548__auto____73890;
} else
{var or__3548__auto____73891 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____73891))
{return or__3548__auto____73891;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____73892 = this$;

if(cljs.core.truth_(and__3546__auto____73892))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____73892;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____73893 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73893))
{return or__3548__auto____73893;
} else
{var or__3548__auto____73894 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____73894))
{return or__3548__auto____73894;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____73895 = this$;

if(cljs.core.truth_(and__3546__auto____73895))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____73895;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____73896 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73896))
{return or__3548__auto____73896;
} else
{var or__3548__auto____73897 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____73897))
{return or__3548__auto____73897;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____73898 = this$;

if(cljs.core.truth_(and__3546__auto____73898))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____73898;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____73899 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____73899))
{return or__3548__auto____73899;
} else
{var or__3548__auto____73900 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____73900))
{return or__3548__auto____73900;
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
var G__73901 = null;
var G__73901__73902 = (function (o,k){
return null;
});
var G__73901__73903 = (function (o,k,not_found){
return not_found;
});
G__73901 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__73901__73902.call(this,o,k);
case  3 :
return G__73901__73903.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__73901;
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
var G__73905 = null;
var G__73905__73906 = (function (_,f){
return f.call(null);
});
var G__73905__73907 = (function (_,f,start){
return start;
});
G__73905 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__73905__73906.call(this,_,f);
case  3 :
return G__73905__73907.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__73905;
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
var G__73909 = null;
var G__73909__73910 = (function (_,n){
return null;
});
var G__73909__73911 = (function (_,n,not_found){
return not_found;
});
G__73909 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__73909__73910.call(this,_,n);
case  3 :
return G__73909__73911.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__73909;
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
var ci_reduce__73919 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__73913 = cljs.core._nth.call(null,cicoll,0);
var n__73914 = 1;

while(true){
if(cljs.core.truth_((n__73914 < cljs.core._count.call(null,cicoll))))
{{
var G__73923 = f.call(null,val__73913,cljs.core._nth.call(null,cicoll,n__73914));
var G__73924 = (n__73914 + 1);
val__73913 = G__73923;
n__73914 = G__73924;
continue;
}
} else
{return val__73913;
}
break;
}
}
});
var ci_reduce__73920 = (function (cicoll,f,val){
var val__73915 = val;
var n__73916 = 0;

while(true){
if(cljs.core.truth_((n__73916 < cljs.core._count.call(null,cicoll))))
{{
var G__73925 = f.call(null,val__73915,cljs.core._nth.call(null,cicoll,n__73916));
var G__73926 = (n__73916 + 1);
val__73915 = G__73925;
n__73916 = G__73926;
continue;
}
} else
{return val__73915;
}
break;
}
});
var ci_reduce__73921 = (function (cicoll,f,val,idx){
var val__73917 = val;
var n__73918 = idx;

while(true){
if(cljs.core.truth_((n__73918 < cljs.core._count.call(null,cicoll))))
{{
var G__73927 = f.call(null,val__73917,cljs.core._nth.call(null,cicoll,n__73918));
var G__73928 = (n__73918 + 1);
val__73917 = G__73927;
n__73918 = G__73928;
continue;
}
} else
{return val__73917;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__73919.call(this,cicoll,f);
case  3 :
return ci_reduce__73920.call(this,cicoll,f,val);
case  4 :
return ci_reduce__73921.call(this,cicoll,f,val,idx);
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
var this__73929 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__73942 = null;
var G__73942__73943 = (function (_,f){
var this__73930 = this;
return cljs.core.ci_reduce.call(null,this__73930.a,f,(this__73930.a[this__73930.i]),(this__73930.i + 1));
});
var G__73942__73944 = (function (_,f,start){
var this__73931 = this;
return cljs.core.ci_reduce.call(null,this__73931.a,f,start,this__73931.i);
});
G__73942 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__73942__73943.call(this,_,f);
case  3 :
return G__73942__73944.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__73942;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__73932 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__73933 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__73946 = null;
var G__73946__73947 = (function (coll,n){
var this__73934 = this;
var i__73935 = (n + this__73934.i);

if(cljs.core.truth_((i__73935 < this__73934.a.length)))
{return (this__73934.a[i__73935]);
} else
{return null;
}
});
var G__73946__73948 = (function (coll,n,not_found){
var this__73936 = this;
var i__73937 = (n + this__73936.i);

if(cljs.core.truth_((i__73937 < this__73936.a.length)))
{return (this__73936.a[i__73937]);
} else
{return not_found;
}
});
G__73946 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__73946__73947.call(this,coll,n);
case  3 :
return G__73946__73948.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__73946;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__73938 = this;
return (this__73938.a.length - this__73938.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__73939 = this;
return (this__73939.a[this__73939.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__73940 = this;
if(cljs.core.truth_(((this__73940.i + 1) < this__73940.a.length)))
{return (new cljs.core.IndexedSeq(this__73940.a,(this__73940.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__73941 = this;
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
var G__73950 = null;
var G__73950__73951 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__73950__73952 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__73950 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__73950__73951.call(this,array,f);
case  3 :
return G__73950__73952.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__73950;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__73954 = null;
var G__73954__73955 = (function (array,k){
return (array[k]);
});
var G__73954__73956 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__73954 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__73954__73955.call(this,array,k);
case  3 :
return G__73954__73956.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__73954;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__73958 = null;
var G__73958__73959 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__73958__73960 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__73958 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__73958__73959.call(this,array,n);
case  3 :
return G__73958__73960.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__73958;
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
var temp__3698__auto____73962 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____73962))
{var s__73963 = temp__3698__auto____73962;

return cljs.core._first.call(null,s__73963);
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
var G__73964 = cljs.core.next.call(null,s);
s = G__73964;
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
var s__73965 = cljs.core.seq.call(null,x);
var n__73966 = 0;

while(true){
if(cljs.core.truth_(s__73965))
{{
var G__73967 = cljs.core.next.call(null,s__73965);
var G__73968 = (n__73966 + 1);
s__73965 = G__73967;
n__73966 = G__73968;
continue;
}
} else
{return n__73966;
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
var conj__73969 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__73970 = (function() { 
var G__73972__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__73973 = conj.call(null,coll,x);
var G__73974 = cljs.core.first.call(null,xs);
var G__73975 = cljs.core.next.call(null,xs);
coll = G__73973;
x = G__73974;
xs = G__73975;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__73972 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__73972__delegate.call(this, coll, x, xs);
};
G__73972.cljs$lang$maxFixedArity = 2;
G__73972.cljs$lang$applyTo = (function (arglist__73976){
var coll = cljs.core.first(arglist__73976);
var x = cljs.core.first(cljs.core.next(arglist__73976));
var xs = cljs.core.rest(cljs.core.next(arglist__73976));
return G__73972__delegate.call(this, coll, x, xs);
});
return G__73972;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__73969.call(this,coll,x);
default:
return conj__73970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__73970.cljs$lang$applyTo;
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
var nth__73977 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__73978 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__73977.call(this,coll,n);
case  3 :
return nth__73978.call(this,coll,n,not_found);
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
var get__73980 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__73981 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__73980.call(this,o,k);
case  3 :
return get__73981.call(this,o,k,not_found);
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
var assoc__73984 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__73985 = (function() { 
var G__73987__delegate = function (coll,k,v,kvs){
while(true){
var ret__73983 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__73988 = ret__73983;
var G__73989 = cljs.core.first.call(null,kvs);
var G__73990 = cljs.core.second.call(null,kvs);
var G__73991 = cljs.core.nnext.call(null,kvs);
coll = G__73988;
k = G__73989;
v = G__73990;
kvs = G__73991;
continue;
}
} else
{return ret__73983;
}
break;
}
};
var G__73987 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__73987__delegate.call(this, coll, k, v, kvs);
};
G__73987.cljs$lang$maxFixedArity = 3;
G__73987.cljs$lang$applyTo = (function (arglist__73992){
var coll = cljs.core.first(arglist__73992);
var k = cljs.core.first(cljs.core.next(arglist__73992));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__73992)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__73992)));
return G__73987__delegate.call(this, coll, k, v, kvs);
});
return G__73987;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__73984.call(this,coll,k,v);
default:
return assoc__73985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__73985.cljs$lang$applyTo;
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
var dissoc__73994 = (function (coll){
return coll;
});
var dissoc__73995 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__73996 = (function() { 
var G__73998__delegate = function (coll,k,ks){
while(true){
var ret__73993 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__73999 = ret__73993;
var G__74000 = cljs.core.first.call(null,ks);
var G__74001 = cljs.core.next.call(null,ks);
coll = G__73999;
k = G__74000;
ks = G__74001;
continue;
}
} else
{return ret__73993;
}
break;
}
};
var G__73998 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__73998__delegate.call(this, coll, k, ks);
};
G__73998.cljs$lang$maxFixedArity = 2;
G__73998.cljs$lang$applyTo = (function (arglist__74002){
var coll = cljs.core.first(arglist__74002);
var k = cljs.core.first(cljs.core.next(arglist__74002));
var ks = cljs.core.rest(cljs.core.next(arglist__74002));
return G__73998__delegate.call(this, coll, k, ks);
});
return G__73998;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__73994.call(this,coll);
case  2 :
return dissoc__73995.call(this,coll,k);
default:
return dissoc__73996.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__73996.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____74003 = o;

if(cljs.core.truth_((function (){var and__3546__auto____74004 = x__450__auto____74003;

if(cljs.core.truth_(and__3546__auto____74004))
{var and__3546__auto____74005 = x__450__auto____74003.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____74005))
{return cljs.core.not.call(null,x__450__auto____74003.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____74005;
}
} else
{return and__3546__auto____74004;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____74003);
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
var disj__74007 = (function (coll){
return coll;
});
var disj__74008 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__74009 = (function() { 
var G__74011__delegate = function (coll,k,ks){
while(true){
var ret__74006 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__74012 = ret__74006;
var G__74013 = cljs.core.first.call(null,ks);
var G__74014 = cljs.core.next.call(null,ks);
coll = G__74012;
k = G__74013;
ks = G__74014;
continue;
}
} else
{return ret__74006;
}
break;
}
};
var G__74011 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74011__delegate.call(this, coll, k, ks);
};
G__74011.cljs$lang$maxFixedArity = 2;
G__74011.cljs$lang$applyTo = (function (arglist__74015){
var coll = cljs.core.first(arglist__74015);
var k = cljs.core.first(cljs.core.next(arglist__74015));
var ks = cljs.core.rest(cljs.core.next(arglist__74015));
return G__74011__delegate.call(this, coll, k, ks);
});
return G__74011;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__74007.call(this,coll);
case  2 :
return disj__74008.call(this,coll,k);
default:
return disj__74009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__74009.cljs$lang$applyTo;
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
{var x__450__auto____74016 = x;

if(cljs.core.truth_((function (){var and__3546__auto____74017 = x__450__auto____74016;

if(cljs.core.truth_(and__3546__auto____74017))
{var and__3546__auto____74018 = x__450__auto____74016.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____74018))
{return cljs.core.not.call(null,x__450__auto____74016.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____74018;
}
} else
{return and__3546__auto____74017;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____74016);
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
{var x__450__auto____74019 = x;

if(cljs.core.truth_((function (){var and__3546__auto____74020 = x__450__auto____74019;

if(cljs.core.truth_(and__3546__auto____74020))
{var and__3546__auto____74021 = x__450__auto____74019.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____74021))
{return cljs.core.not.call(null,x__450__auto____74019.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____74021;
}
} else
{return and__3546__auto____74020;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____74019);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____74022 = x;

if(cljs.core.truth_((function (){var and__3546__auto____74023 = x__450__auto____74022;

if(cljs.core.truth_(and__3546__auto____74023))
{var and__3546__auto____74024 = x__450__auto____74022.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____74024))
{return cljs.core.not.call(null,x__450__auto____74022.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____74024;
}
} else
{return and__3546__auto____74023;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____74022);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____74025 = x;

if(cljs.core.truth_((function (){var and__3546__auto____74026 = x__450__auto____74025;

if(cljs.core.truth_(and__3546__auto____74026))
{var and__3546__auto____74027 = x__450__auto____74025.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____74027))
{return cljs.core.not.call(null,x__450__auto____74025.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____74027;
}
} else
{return and__3546__auto____74026;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____74025);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____74028 = x;

if(cljs.core.truth_((function (){var and__3546__auto____74029 = x__450__auto____74028;

if(cljs.core.truth_(and__3546__auto____74029))
{var and__3546__auto____74030 = x__450__auto____74028.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____74030))
{return cljs.core.not.call(null,x__450__auto____74028.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____74030;
}
} else
{return and__3546__auto____74029;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____74028);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____74031 = x;

if(cljs.core.truth_((function (){var and__3546__auto____74032 = x__450__auto____74031;

if(cljs.core.truth_(and__3546__auto____74032))
{var and__3546__auto____74033 = x__450__auto____74031.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____74033))
{return cljs.core.not.call(null,x__450__auto____74031.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____74033;
}
} else
{return and__3546__auto____74032;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____74031);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____74034 = x;

if(cljs.core.truth_((function (){var and__3546__auto____74035 = x__450__auto____74034;

if(cljs.core.truth_(and__3546__auto____74035))
{var and__3546__auto____74036 = x__450__auto____74034.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____74036))
{return cljs.core.not.call(null,x__450__auto____74034.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____74036;
}
} else
{return and__3546__auto____74035;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____74034);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__74037 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__74037.push(key);
}));
return keys__74037;
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
{var x__450__auto____74038 = s;

if(cljs.core.truth_((function (){var and__3546__auto____74039 = x__450__auto____74038;

if(cljs.core.truth_(and__3546__auto____74039))
{var and__3546__auto____74040 = x__450__auto____74038.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____74040))
{return cljs.core.not.call(null,x__450__auto____74038.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____74040;
}
} else
{return and__3546__auto____74039;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____74038);
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
var and__3546__auto____74041 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____74041))
{return cljs.core.not.call(null,(function (){var or__3548__auto____74042 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____74042))
{return or__3548__auto____74042;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____74041;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____74043 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____74043))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____74043;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____74044 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____74044))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____74044;
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
var and__3546__auto____74045 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____74045))
{return (n == n.toFixed());
} else
{return and__3546__auto____74045;
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
if(cljs.core.truth_((function (){var and__3546__auto____74046 = coll;

if(cljs.core.truth_(and__3546__auto____74046))
{var and__3546__auto____74047 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____74047))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____74047;
}
} else
{return and__3546__auto____74046;
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
var distinct_QMARK___74052 = (function (x){
return true;
});
var distinct_QMARK___74053 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___74054 = (function() { 
var G__74056__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__74048 = cljs.core.set([y,x]);
var xs__74049 = more;

while(true){
var x__74050 = cljs.core.first.call(null,xs__74049);
var etc__74051 = cljs.core.next.call(null,xs__74049);

if(cljs.core.truth_(xs__74049))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__74048,x__74050)))
{return false;
} else
{{
var G__74057 = cljs.core.conj.call(null,s__74048,x__74050);
var G__74058 = etc__74051;
s__74048 = G__74057;
xs__74049 = G__74058;
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
var G__74056 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74056__delegate.call(this, x, y, more);
};
G__74056.cljs$lang$maxFixedArity = 2;
G__74056.cljs$lang$applyTo = (function (arglist__74059){
var x = cljs.core.first(arglist__74059);
var y = cljs.core.first(cljs.core.next(arglist__74059));
var more = cljs.core.rest(cljs.core.next(arglist__74059));
return G__74056__delegate.call(this, x, y, more);
});
return G__74056;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___74052.call(this,x);
case  2 :
return distinct_QMARK___74053.call(this,x,y);
default:
return distinct_QMARK___74054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___74054.cljs$lang$applyTo;
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
var r__74060 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__74060)))
{return r__74060;
} else
{if(cljs.core.truth_(r__74060))
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
var sort__74062 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__74063 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__74061 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__74061,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__74061);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__74062.call(this,comp);
case  2 :
return sort__74063.call(this,comp,coll);
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
var sort_by__74065 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__74066 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__74065.call(this,keyfn,comp);
case  3 :
return sort_by__74066.call(this,keyfn,comp,coll);
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
var reduce__74068 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__74069 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__74068.call(this,f,val);
case  3 :
return reduce__74069.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__74075 = (function (f,coll){
var temp__3695__auto____74071 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____74071))
{var s__74072 = temp__3695__auto____74071;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__74072),cljs.core.next.call(null,s__74072));
} else
{return f.call(null);
}
});
var seq_reduce__74076 = (function (f,val,coll){
var val__74073 = val;
var coll__74074 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__74074))
{{
var G__74078 = f.call(null,val__74073,cljs.core.first.call(null,coll__74074));
var G__74079 = cljs.core.next.call(null,coll__74074);
val__74073 = G__74078;
coll__74074 = G__74079;
continue;
}
} else
{return val__74073;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__74075.call(this,f,val);
case  3 :
return seq_reduce__74076.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__74080 = null;
var G__74080__74081 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__74080__74082 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__74080 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__74080__74081.call(this,coll,f);
case  3 :
return G__74080__74082.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74080;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___74084 = (function (){
return 0;
});
var _PLUS___74085 = (function (x){
return x;
});
var _PLUS___74086 = (function (x,y){
return (x + y);
});
var _PLUS___74087 = (function() { 
var G__74089__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__74089 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74089__delegate.call(this, x, y, more);
};
G__74089.cljs$lang$maxFixedArity = 2;
G__74089.cljs$lang$applyTo = (function (arglist__74090){
var x = cljs.core.first(arglist__74090);
var y = cljs.core.first(cljs.core.next(arglist__74090));
var more = cljs.core.rest(cljs.core.next(arglist__74090));
return G__74089__delegate.call(this, x, y, more);
});
return G__74089;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___74084.call(this);
case  1 :
return _PLUS___74085.call(this,x);
case  2 :
return _PLUS___74086.call(this,x,y);
default:
return _PLUS___74087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___74087.cljs$lang$applyTo;
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
var ___74091 = (function (x){
return (- x);
});
var ___74092 = (function (x,y){
return (x - y);
});
var ___74093 = (function() { 
var G__74095__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__74095 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74095__delegate.call(this, x, y, more);
};
G__74095.cljs$lang$maxFixedArity = 2;
G__74095.cljs$lang$applyTo = (function (arglist__74096){
var x = cljs.core.first(arglist__74096);
var y = cljs.core.first(cljs.core.next(arglist__74096));
var more = cljs.core.rest(cljs.core.next(arglist__74096));
return G__74095__delegate.call(this, x, y, more);
});
return G__74095;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___74091.call(this,x);
case  2 :
return ___74092.call(this,x,y);
default:
return ___74093.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___74093.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___74097 = (function (){
return 1;
});
var _STAR___74098 = (function (x){
return x;
});
var _STAR___74099 = (function (x,y){
return (x * y);
});
var _STAR___74100 = (function() { 
var G__74102__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__74102 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74102__delegate.call(this, x, y, more);
};
G__74102.cljs$lang$maxFixedArity = 2;
G__74102.cljs$lang$applyTo = (function (arglist__74103){
var x = cljs.core.first(arglist__74103);
var y = cljs.core.first(cljs.core.next(arglist__74103));
var more = cljs.core.rest(cljs.core.next(arglist__74103));
return G__74102__delegate.call(this, x, y, more);
});
return G__74102;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___74097.call(this);
case  1 :
return _STAR___74098.call(this,x);
case  2 :
return _STAR___74099.call(this,x,y);
default:
return _STAR___74100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___74100.cljs$lang$applyTo;
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
var _SLASH___74104 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___74105 = (function (x,y){
return (x / y);
});
var _SLASH___74106 = (function() { 
var G__74108__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__74108 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74108__delegate.call(this, x, y, more);
};
G__74108.cljs$lang$maxFixedArity = 2;
G__74108.cljs$lang$applyTo = (function (arglist__74109){
var x = cljs.core.first(arglist__74109);
var y = cljs.core.first(cljs.core.next(arglist__74109));
var more = cljs.core.rest(cljs.core.next(arglist__74109));
return G__74108__delegate.call(this, x, y, more);
});
return G__74108;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___74104.call(this,x);
case  2 :
return _SLASH___74105.call(this,x,y);
default:
return _SLASH___74106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___74106.cljs$lang$applyTo;
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
var _LT___74110 = (function (x){
return true;
});
var _LT___74111 = (function (x,y){
return (x < y);
});
var _LT___74112 = (function() { 
var G__74114__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__74115 = y;
var G__74116 = cljs.core.first.call(null,more);
var G__74117 = cljs.core.next.call(null,more);
x = G__74115;
y = G__74116;
more = G__74117;
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
var G__74114 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74114__delegate.call(this, x, y, more);
};
G__74114.cljs$lang$maxFixedArity = 2;
G__74114.cljs$lang$applyTo = (function (arglist__74118){
var x = cljs.core.first(arglist__74118);
var y = cljs.core.first(cljs.core.next(arglist__74118));
var more = cljs.core.rest(cljs.core.next(arglist__74118));
return G__74114__delegate.call(this, x, y, more);
});
return G__74114;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___74110.call(this,x);
case  2 :
return _LT___74111.call(this,x,y);
default:
return _LT___74112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___74112.cljs$lang$applyTo;
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
var _LT__EQ___74119 = (function (x){
return true;
});
var _LT__EQ___74120 = (function (x,y){
return (x <= y);
});
var _LT__EQ___74121 = (function() { 
var G__74123__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__74124 = y;
var G__74125 = cljs.core.first.call(null,more);
var G__74126 = cljs.core.next.call(null,more);
x = G__74124;
y = G__74125;
more = G__74126;
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
var G__74123 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74123__delegate.call(this, x, y, more);
};
G__74123.cljs$lang$maxFixedArity = 2;
G__74123.cljs$lang$applyTo = (function (arglist__74127){
var x = cljs.core.first(arglist__74127);
var y = cljs.core.first(cljs.core.next(arglist__74127));
var more = cljs.core.rest(cljs.core.next(arglist__74127));
return G__74123__delegate.call(this, x, y, more);
});
return G__74123;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___74119.call(this,x);
case  2 :
return _LT__EQ___74120.call(this,x,y);
default:
return _LT__EQ___74121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___74121.cljs$lang$applyTo;
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
var _GT___74128 = (function (x){
return true;
});
var _GT___74129 = (function (x,y){
return (x > y);
});
var _GT___74130 = (function() { 
var G__74132__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__74133 = y;
var G__74134 = cljs.core.first.call(null,more);
var G__74135 = cljs.core.next.call(null,more);
x = G__74133;
y = G__74134;
more = G__74135;
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
var G__74132 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74132__delegate.call(this, x, y, more);
};
G__74132.cljs$lang$maxFixedArity = 2;
G__74132.cljs$lang$applyTo = (function (arglist__74136){
var x = cljs.core.first(arglist__74136);
var y = cljs.core.first(cljs.core.next(arglist__74136));
var more = cljs.core.rest(cljs.core.next(arglist__74136));
return G__74132__delegate.call(this, x, y, more);
});
return G__74132;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___74128.call(this,x);
case  2 :
return _GT___74129.call(this,x,y);
default:
return _GT___74130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___74130.cljs$lang$applyTo;
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
var _GT__EQ___74137 = (function (x){
return true;
});
var _GT__EQ___74138 = (function (x,y){
return (x >= y);
});
var _GT__EQ___74139 = (function() { 
var G__74141__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__74142 = y;
var G__74143 = cljs.core.first.call(null,more);
var G__74144 = cljs.core.next.call(null,more);
x = G__74142;
y = G__74143;
more = G__74144;
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
var G__74141 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74141__delegate.call(this, x, y, more);
};
G__74141.cljs$lang$maxFixedArity = 2;
G__74141.cljs$lang$applyTo = (function (arglist__74145){
var x = cljs.core.first(arglist__74145);
var y = cljs.core.first(cljs.core.next(arglist__74145));
var more = cljs.core.rest(cljs.core.next(arglist__74145));
return G__74141__delegate.call(this, x, y, more);
});
return G__74141;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___74137.call(this,x);
case  2 :
return _GT__EQ___74138.call(this,x,y);
default:
return _GT__EQ___74139.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___74139.cljs$lang$applyTo;
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
var max__74146 = (function (x){
return x;
});
var max__74147 = (function (x,y){
return ((x > y) ? x : y);
});
var max__74148 = (function() { 
var G__74150__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__74150 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74150__delegate.call(this, x, y, more);
};
G__74150.cljs$lang$maxFixedArity = 2;
G__74150.cljs$lang$applyTo = (function (arglist__74151){
var x = cljs.core.first(arglist__74151);
var y = cljs.core.first(cljs.core.next(arglist__74151));
var more = cljs.core.rest(cljs.core.next(arglist__74151));
return G__74150__delegate.call(this, x, y, more);
});
return G__74150;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__74146.call(this,x);
case  2 :
return max__74147.call(this,x,y);
default:
return max__74148.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__74148.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__74152 = (function (x){
return x;
});
var min__74153 = (function (x,y){
return ((x < y) ? x : y);
});
var min__74154 = (function() { 
var G__74156__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__74156 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74156__delegate.call(this, x, y, more);
};
G__74156.cljs$lang$maxFixedArity = 2;
G__74156.cljs$lang$applyTo = (function (arglist__74157){
var x = cljs.core.first(arglist__74157);
var y = cljs.core.first(cljs.core.next(arglist__74157));
var more = cljs.core.rest(cljs.core.next(arglist__74157));
return G__74156__delegate.call(this, x, y, more);
});
return G__74156;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__74152.call(this,x);
case  2 :
return min__74153.call(this,x,y);
default:
return min__74154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__74154.cljs$lang$applyTo;
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
var rem__74158 = (n % d);

return cljs.core.fix.call(null,((n - rem__74158) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__74159 = cljs.core.quot.call(null,n,d);

return (n - (d * q__74159));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__74160 = (function (){
return Math.random.call(null);
});
var rand__74161 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__74160.call(this);
case  1 :
return rand__74161.call(this,n);
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
var _EQ__EQ___74163 = (function (x){
return true;
});
var _EQ__EQ___74164 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___74165 = (function() { 
var G__74167__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__74168 = y;
var G__74169 = cljs.core.first.call(null,more);
var G__74170 = cljs.core.next.call(null,more);
x = G__74168;
y = G__74169;
more = G__74170;
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
var G__74167 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74167__delegate.call(this, x, y, more);
};
G__74167.cljs$lang$maxFixedArity = 2;
G__74167.cljs$lang$applyTo = (function (arglist__74171){
var x = cljs.core.first(arglist__74171);
var y = cljs.core.first(cljs.core.next(arglist__74171));
var more = cljs.core.rest(cljs.core.next(arglist__74171));
return G__74167__delegate.call(this, x, y, more);
});
return G__74167;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___74163.call(this,x);
case  2 :
return _EQ__EQ___74164.call(this,x,y);
default:
return _EQ__EQ___74165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___74165.cljs$lang$applyTo;
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
var n__74172 = n;
var xs__74173 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____74174 = xs__74173;

if(cljs.core.truth_(and__3546__auto____74174))
{return (n__74172 > 0);
} else
{return and__3546__auto____74174;
}
})()))
{{
var G__74175 = (n__74172 - 1);
var G__74176 = cljs.core.next.call(null,xs__74173);
n__74172 = G__74175;
xs__74173 = G__74176;
continue;
}
} else
{return xs__74173;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__74181 = null;
var G__74181__74182 = (function (coll,n){
var temp__3695__auto____74177 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____74177))
{var xs__74178 = temp__3695__auto____74177;

return cljs.core.first.call(null,xs__74178);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__74181__74183 = (function (coll,n,not_found){
var temp__3695__auto____74179 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____74179))
{var xs__74180 = temp__3695__auto____74179;

return cljs.core.first.call(null,xs__74180);
} else
{return not_found;
}
});
G__74181 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__74181__74182.call(this,coll,n);
case  3 :
return G__74181__74183.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74181;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___74185 = (function (){
return "";
});
var str_STAR___74186 = (function (x){
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
var str_STAR___74187 = (function() { 
var G__74189__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__74190 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__74191 = cljs.core.next.call(null,more);
sb = G__74190;
more = G__74191;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__74189 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__74189__delegate.call(this, x, ys);
};
G__74189.cljs$lang$maxFixedArity = 1;
G__74189.cljs$lang$applyTo = (function (arglist__74192){
var x = cljs.core.first(arglist__74192);
var ys = cljs.core.rest(arglist__74192);
return G__74189__delegate.call(this, x, ys);
});
return G__74189;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___74185.call(this);
case  1 :
return str_STAR___74186.call(this,x);
default:
return str_STAR___74187.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___74187.cljs$lang$applyTo;
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
var str__74193 = (function (){
return "";
});
var str__74194 = (function (x){
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
var str__74195 = (function() { 
var G__74197__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__74197 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__74197__delegate.call(this, x, ys);
};
G__74197.cljs$lang$maxFixedArity = 1;
G__74197.cljs$lang$applyTo = (function (arglist__74198){
var x = cljs.core.first(arglist__74198);
var ys = cljs.core.rest(arglist__74198);
return G__74197__delegate.call(this, x, ys);
});
return G__74197;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__74193.call(this);
case  1 :
return str__74194.call(this,x);
default:
return str__74195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__74195.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__74199 = (function (s,start){
return s.substring(start);
});
var subs__74200 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__74199.call(this,s,start);
case  3 :
return subs__74200.call(this,s,start,end);
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
var symbol__74202 = (function (name){
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
var symbol__74203 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__74202.call(this,ns);
case  2 :
return symbol__74203.call(this,ns,name);
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
var keyword__74205 = (function (name){
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
var keyword__74206 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__74205.call(this,ns);
case  2 :
return keyword__74206.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__74208 = cljs.core.seq.call(null,x);
var ys__74209 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__74208 === null)))
{return (ys__74209 === null);
} else
{if(cljs.core.truth_((ys__74209 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__74208),cljs.core.first.call(null,ys__74209))))
{{
var G__74210 = cljs.core.next.call(null,xs__74208);
var G__74211 = cljs.core.next.call(null,ys__74209);
xs__74208 = G__74210;
ys__74209 = G__74211;
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
return cljs.core.reduce.call(null,(function (p1__74212_SHARP_,p2__74213_SHARP_){
return cljs.core.hash_combine.call(null,p1__74212_SHARP_,cljs.core.hash.call(null,p2__74213_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__74214__74215 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__74214__74215))
{var G__74217__74219 = cljs.core.first.call(null,G__74214__74215);
var vec__74218__74220 = G__74217__74219;
var key_name__74221 = cljs.core.nth.call(null,vec__74218__74220,0,null);
var f__74222 = cljs.core.nth.call(null,vec__74218__74220,1,null);
var G__74214__74223 = G__74214__74215;

var G__74217__74224 = G__74217__74219;
var G__74214__74225 = G__74214__74223;

while(true){
var vec__74226__74227 = G__74217__74224;
var key_name__74228 = cljs.core.nth.call(null,vec__74226__74227,0,null);
var f__74229 = cljs.core.nth.call(null,vec__74226__74227,1,null);
var G__74214__74230 = G__74214__74225;

var str_name__74231 = cljs.core.name.call(null,key_name__74228);

obj[str_name__74231] = f__74229;
var temp__3698__auto____74232 = cljs.core.next.call(null,G__74214__74230);

if(cljs.core.truth_(temp__3698__auto____74232))
{var G__74214__74233 = temp__3698__auto____74232;

{
var G__74234 = cljs.core.first.call(null,G__74214__74233);
var G__74235 = G__74214__74233;
G__74217__74224 = G__74234;
G__74214__74225 = G__74235;
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
var this__74236 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__74237 = this;
return (new cljs.core.List(this__74237.meta,o,coll,(this__74237.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__74238 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__74239 = this;
return this__74239.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__74240 = this;
return this__74240.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__74241 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__74242 = this;
return this__74242.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__74243 = this;
return this__74243.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74244 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74245 = this;
return (new cljs.core.List(meta,this__74245.first,this__74245.rest,this__74245.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74246 = this;
return this__74246.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74247 = this;
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
var this__74248 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__74249 = this;
return (new cljs.core.List(this__74249.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__74250 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__74251 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__74252 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__74253 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__74254 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__74255 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74256 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74257 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74258 = this;
return this__74258.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74259 = this;
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
list.cljs$lang$applyTo = (function (arglist__74260){
var items = cljs.core.seq( arglist__74260 );;
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
var this__74261 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__74262 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74263 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74264 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__74264.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__74265 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__74266 = this;
return this__74266.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__74267 = this;
if(cljs.core.truth_((this__74267.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__74267.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74268 = this;
return this__74268.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74269 = this;
return (new cljs.core.Cons(meta,this__74269.first,this__74269.rest));
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
var G__74270 = null;
var G__74270__74271 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__74270__74272 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__74270 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__74270__74271.call(this,string,f);
case  3 :
return G__74270__74272.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74270;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__74274 = null;
var G__74274__74275 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__74274__74276 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__74274 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__74274__74275.call(this,string,k);
case  3 :
return G__74274__74276.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74274;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__74278 = null;
var G__74278__74279 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__74278__74280 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__74278 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__74278__74279.call(this,string,n);
case  3 :
return G__74278__74280.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74278;
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
var G__74288 = null;
var G__74288__74289 = (function (tsym74282,coll){
var tsym74282__74284 = this;

var this$__74285 = tsym74282__74284;

return cljs.core.get.call(null,coll,this$__74285.toString());
});
var G__74288__74290 = (function (tsym74283,coll,not_found){
var tsym74283__74286 = this;

var this$__74287 = tsym74283__74286;

return cljs.core.get.call(null,coll,this$__74287.toString(),not_found);
});
G__74288 = function(tsym74283,coll,not_found){
switch(arguments.length){
case  2 :
return G__74288__74289.call(this,tsym74283,coll);
case  3 :
return G__74288__74290.call(this,tsym74283,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74288;
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
var x__74292 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__74292;
} else
{lazy_seq.x = x__74292.call(null);
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
var this__74293 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__74294 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74295 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74296 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__74296.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__74297 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__74298 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__74299 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74300 = this;
return this__74300.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74301 = this;
return (new cljs.core.LazySeq(meta,this__74301.realized,this__74301.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__74302 = cljs.core.array.call(null);

var s__74303 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__74303)))
{ary__74302.push(cljs.core.first.call(null,s__74303));
{
var G__74304 = cljs.core.next.call(null,s__74303);
s__74303 = G__74304;
continue;
}
} else
{return ary__74302;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__74305 = s;
var i__74306 = n;
var sum__74307 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____74308 = (i__74306 > 0);

if(cljs.core.truth_(and__3546__auto____74308))
{return cljs.core.seq.call(null,s__74305);
} else
{return and__3546__auto____74308;
}
})()))
{{
var G__74309 = cljs.core.next.call(null,s__74305);
var G__74310 = (i__74306 - 1);
var G__74311 = (sum__74307 + 1);
s__74305 = G__74309;
i__74306 = G__74310;
sum__74307 = G__74311;
continue;
}
} else
{return sum__74307;
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
var concat__74315 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__74316 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__74317 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__74312 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__74312))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__74312),concat.call(null,cljs.core.rest.call(null,s__74312),y));
} else
{return y;
}
})));
});
var concat__74318 = (function() { 
var G__74320__delegate = function (x,y,zs){
var cat__74314 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__74313 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__74313))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__74313),cat.call(null,cljs.core.rest.call(null,xys__74313),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__74314.call(null,concat.call(null,x,y),zs);
};
var G__74320 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74320__delegate.call(this, x, y, zs);
};
G__74320.cljs$lang$maxFixedArity = 2;
G__74320.cljs$lang$applyTo = (function (arglist__74321){
var x = cljs.core.first(arglist__74321);
var y = cljs.core.first(cljs.core.next(arglist__74321));
var zs = cljs.core.rest(cljs.core.next(arglist__74321));
return G__74320__delegate.call(this, x, y, zs);
});
return G__74320;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__74315.call(this);
case  1 :
return concat__74316.call(this,x);
case  2 :
return concat__74317.call(this,x,y);
default:
return concat__74318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__74318.cljs$lang$applyTo;
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
var list_STAR___74322 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___74323 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___74324 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___74325 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___74326 = (function() { 
var G__74328__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__74328 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__74328__delegate.call(this, a, b, c, d, more);
};
G__74328.cljs$lang$maxFixedArity = 4;
G__74328.cljs$lang$applyTo = (function (arglist__74329){
var a = cljs.core.first(arglist__74329);
var b = cljs.core.first(cljs.core.next(arglist__74329));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74329)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74329))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74329))));
return G__74328__delegate.call(this, a, b, c, d, more);
});
return G__74328;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___74322.call(this,a);
case  2 :
return list_STAR___74323.call(this,a,b);
case  3 :
return list_STAR___74324.call(this,a,b,c);
case  4 :
return list_STAR___74325.call(this,a,b,c,d);
default:
return list_STAR___74326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___74326.cljs$lang$applyTo;
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
var apply__74339 = (function (f,args){
var fixed_arity__74330 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__74330 + 1)) <= fixed_arity__74330)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__74340 = (function (f,x,args){
var arglist__74331 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__74332 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__74331,fixed_arity__74332) <= fixed_arity__74332)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__74331));
} else
{return f.cljs$lang$applyTo(arglist__74331);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__74331));
}
});
var apply__74341 = (function (f,x,y,args){
var arglist__74333 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__74334 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__74333,fixed_arity__74334) <= fixed_arity__74334)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__74333));
} else
{return f.cljs$lang$applyTo(arglist__74333);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__74333));
}
});
var apply__74342 = (function (f,x,y,z,args){
var arglist__74335 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__74336 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__74335,fixed_arity__74336) <= fixed_arity__74336)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__74335));
} else
{return f.cljs$lang$applyTo(arglist__74335);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__74335));
}
});
var apply__74343 = (function() { 
var G__74345__delegate = function (f,a,b,c,d,args){
var arglist__74337 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__74338 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__74337,fixed_arity__74338) <= fixed_arity__74338)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__74337));
} else
{return f.cljs$lang$applyTo(arglist__74337);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__74337));
}
};
var G__74345 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__74345__delegate.call(this, f, a, b, c, d, args);
};
G__74345.cljs$lang$maxFixedArity = 5;
G__74345.cljs$lang$applyTo = (function (arglist__74346){
var f = cljs.core.first(arglist__74346);
var a = cljs.core.first(cljs.core.next(arglist__74346));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74346)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74346))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74346)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74346)))));
return G__74345__delegate.call(this, f, a, b, c, d, args);
});
return G__74345;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__74339.call(this,f,a);
case  3 :
return apply__74340.call(this,f,a,b);
case  4 :
return apply__74341.call(this,f,a,b,c);
case  5 :
return apply__74342.call(this,f,a,b,c,d);
default:
return apply__74343.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__74343.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__74347){
var obj = cljs.core.first(arglist__74347);
var f = cljs.core.first(cljs.core.next(arglist__74347));
var args = cljs.core.rest(cljs.core.next(arglist__74347));
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
var not_EQ___74348 = (function (x){
return false;
});
var not_EQ___74349 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___74350 = (function() { 
var G__74352__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__74352 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74352__delegate.call(this, x, y, more);
};
G__74352.cljs$lang$maxFixedArity = 2;
G__74352.cljs$lang$applyTo = (function (arglist__74353){
var x = cljs.core.first(arglist__74353);
var y = cljs.core.first(cljs.core.next(arglist__74353));
var more = cljs.core.rest(cljs.core.next(arglist__74353));
return G__74352__delegate.call(this, x, y, more);
});
return G__74352;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___74348.call(this,x);
case  2 :
return not_EQ___74349.call(this,x,y);
default:
return not_EQ___74350.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___74350.cljs$lang$applyTo;
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
var G__74354 = pred;
var G__74355 = cljs.core.next.call(null,coll);
pred = G__74354;
coll = G__74355;
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
{var or__3548__auto____74356 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____74356))
{return or__3548__auto____74356;
} else
{{
var G__74357 = pred;
var G__74358 = cljs.core.next.call(null,coll);
pred = G__74357;
coll = G__74358;
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
var G__74359 = null;
var G__74359__74360 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__74359__74361 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__74359__74362 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__74359__74363 = (function() { 
var G__74365__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__74365 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74365__delegate.call(this, x, y, zs);
};
G__74365.cljs$lang$maxFixedArity = 2;
G__74365.cljs$lang$applyTo = (function (arglist__74366){
var x = cljs.core.first(arglist__74366);
var y = cljs.core.first(cljs.core.next(arglist__74366));
var zs = cljs.core.rest(cljs.core.next(arglist__74366));
return G__74365__delegate.call(this, x, y, zs);
});
return G__74365;
})()
;
G__74359 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__74359__74360.call(this);
case  1 :
return G__74359__74361.call(this,x);
case  2 :
return G__74359__74362.call(this,x,y);
default:
return G__74359__74363.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__74359.cljs$lang$maxFixedArity = 2;
G__74359.cljs$lang$applyTo = G__74359__74363.cljs$lang$applyTo;
return G__74359;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__74367__delegate = function (args){
return x;
};
var G__74367 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74367__delegate.call(this, args);
};
G__74367.cljs$lang$maxFixedArity = 0;
G__74367.cljs$lang$applyTo = (function (arglist__74368){
var args = cljs.core.seq( arglist__74368 );;
return G__74367__delegate.call(this, args);
});
return G__74367;
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
var comp__74372 = (function (){
return cljs.core.identity;
});
var comp__74373 = (function (f){
return f;
});
var comp__74374 = (function (f,g){
return (function() {
var G__74378 = null;
var G__74378__74379 = (function (){
return f.call(null,g.call(null));
});
var G__74378__74380 = (function (x){
return f.call(null,g.call(null,x));
});
var G__74378__74381 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__74378__74382 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__74378__74383 = (function() { 
var G__74385__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__74385 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74385__delegate.call(this, x, y, z, args);
};
G__74385.cljs$lang$maxFixedArity = 3;
G__74385.cljs$lang$applyTo = (function (arglist__74386){
var x = cljs.core.first(arglist__74386);
var y = cljs.core.first(cljs.core.next(arglist__74386));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74386)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74386)));
return G__74385__delegate.call(this, x, y, z, args);
});
return G__74385;
})()
;
G__74378 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__74378__74379.call(this);
case  1 :
return G__74378__74380.call(this,x);
case  2 :
return G__74378__74381.call(this,x,y);
case  3 :
return G__74378__74382.call(this,x,y,z);
default:
return G__74378__74383.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__74378.cljs$lang$maxFixedArity = 3;
G__74378.cljs$lang$applyTo = G__74378__74383.cljs$lang$applyTo;
return G__74378;
})()
});
var comp__74375 = (function (f,g,h){
return (function() {
var G__74387 = null;
var G__74387__74388 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__74387__74389 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__74387__74390 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__74387__74391 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__74387__74392 = (function() { 
var G__74394__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__74394 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74394__delegate.call(this, x, y, z, args);
};
G__74394.cljs$lang$maxFixedArity = 3;
G__74394.cljs$lang$applyTo = (function (arglist__74395){
var x = cljs.core.first(arglist__74395);
var y = cljs.core.first(cljs.core.next(arglist__74395));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74395)));
return G__74394__delegate.call(this, x, y, z, args);
});
return G__74394;
})()
;
G__74387 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__74387__74388.call(this);
case  1 :
return G__74387__74389.call(this,x);
case  2 :
return G__74387__74390.call(this,x,y);
case  3 :
return G__74387__74391.call(this,x,y,z);
default:
return G__74387__74392.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__74387.cljs$lang$maxFixedArity = 3;
G__74387.cljs$lang$applyTo = G__74387__74392.cljs$lang$applyTo;
return G__74387;
})()
});
var comp__74376 = (function() { 
var G__74396__delegate = function (f1,f2,f3,fs){
var fs__74369 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__74397__delegate = function (args){
var ret__74370 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__74369),args);
var fs__74371 = cljs.core.next.call(null,fs__74369);

while(true){
if(cljs.core.truth_(fs__74371))
{{
var G__74398 = cljs.core.first.call(null,fs__74371).call(null,ret__74370);
var G__74399 = cljs.core.next.call(null,fs__74371);
ret__74370 = G__74398;
fs__74371 = G__74399;
continue;
}
} else
{return ret__74370;
}
break;
}
};
var G__74397 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74397__delegate.call(this, args);
};
G__74397.cljs$lang$maxFixedArity = 0;
G__74397.cljs$lang$applyTo = (function (arglist__74400){
var args = cljs.core.seq( arglist__74400 );;
return G__74397__delegate.call(this, args);
});
return G__74397;
})()
;
};
var G__74396 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74396__delegate.call(this, f1, f2, f3, fs);
};
G__74396.cljs$lang$maxFixedArity = 3;
G__74396.cljs$lang$applyTo = (function (arglist__74401){
var f1 = cljs.core.first(arglist__74401);
var f2 = cljs.core.first(cljs.core.next(arglist__74401));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74401)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74401)));
return G__74396__delegate.call(this, f1, f2, f3, fs);
});
return G__74396;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__74372.call(this);
case  1 :
return comp__74373.call(this,f1);
case  2 :
return comp__74374.call(this,f1,f2);
case  3 :
return comp__74375.call(this,f1,f2,f3);
default:
return comp__74376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__74376.cljs$lang$applyTo;
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
var partial__74402 = (function (f,arg1){
return (function() { 
var G__74407__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__74407 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74407__delegate.call(this, args);
};
G__74407.cljs$lang$maxFixedArity = 0;
G__74407.cljs$lang$applyTo = (function (arglist__74408){
var args = cljs.core.seq( arglist__74408 );;
return G__74407__delegate.call(this, args);
});
return G__74407;
})()
;
});
var partial__74403 = (function (f,arg1,arg2){
return (function() { 
var G__74409__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__74409 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74409__delegate.call(this, args);
};
G__74409.cljs$lang$maxFixedArity = 0;
G__74409.cljs$lang$applyTo = (function (arglist__74410){
var args = cljs.core.seq( arglist__74410 );;
return G__74409__delegate.call(this, args);
});
return G__74409;
})()
;
});
var partial__74404 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__74411__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__74411 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74411__delegate.call(this, args);
};
G__74411.cljs$lang$maxFixedArity = 0;
G__74411.cljs$lang$applyTo = (function (arglist__74412){
var args = cljs.core.seq( arglist__74412 );;
return G__74411__delegate.call(this, args);
});
return G__74411;
})()
;
});
var partial__74405 = (function() { 
var G__74413__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__74414__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__74414 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74414__delegate.call(this, args);
};
G__74414.cljs$lang$maxFixedArity = 0;
G__74414.cljs$lang$applyTo = (function (arglist__74415){
var args = cljs.core.seq( arglist__74415 );;
return G__74414__delegate.call(this, args);
});
return G__74414;
})()
;
};
var G__74413 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__74413__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__74413.cljs$lang$maxFixedArity = 4;
G__74413.cljs$lang$applyTo = (function (arglist__74416){
var f = cljs.core.first(arglist__74416);
var arg1 = cljs.core.first(cljs.core.next(arglist__74416));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74416)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74416))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74416))));
return G__74413__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__74413;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__74402.call(this,f,arg1);
case  3 :
return partial__74403.call(this,f,arg1,arg2);
case  4 :
return partial__74404.call(this,f,arg1,arg2,arg3);
default:
return partial__74405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__74405.cljs$lang$applyTo;
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
var fnil__74417 = (function (f,x){
return (function() {
var G__74421 = null;
var G__74421__74422 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__74421__74423 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__74421__74424 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__74421__74425 = (function() { 
var G__74427__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__74427 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74427__delegate.call(this, a, b, c, ds);
};
G__74427.cljs$lang$maxFixedArity = 3;
G__74427.cljs$lang$applyTo = (function (arglist__74428){
var a = cljs.core.first(arglist__74428);
var b = cljs.core.first(cljs.core.next(arglist__74428));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74428)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74428)));
return G__74427__delegate.call(this, a, b, c, ds);
});
return G__74427;
})()
;
G__74421 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__74421__74422.call(this,a);
case  2 :
return G__74421__74423.call(this,a,b);
case  3 :
return G__74421__74424.call(this,a,b,c);
default:
return G__74421__74425.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__74421.cljs$lang$maxFixedArity = 3;
G__74421.cljs$lang$applyTo = G__74421__74425.cljs$lang$applyTo;
return G__74421;
})()
});
var fnil__74418 = (function (f,x,y){
return (function() {
var G__74429 = null;
var G__74429__74430 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__74429__74431 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__74429__74432 = (function() { 
var G__74434__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__74434 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74434__delegate.call(this, a, b, c, ds);
};
G__74434.cljs$lang$maxFixedArity = 3;
G__74434.cljs$lang$applyTo = (function (arglist__74435){
var a = cljs.core.first(arglist__74435);
var b = cljs.core.first(cljs.core.next(arglist__74435));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74435)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74435)));
return G__74434__delegate.call(this, a, b, c, ds);
});
return G__74434;
})()
;
G__74429 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__74429__74430.call(this,a,b);
case  3 :
return G__74429__74431.call(this,a,b,c);
default:
return G__74429__74432.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__74429.cljs$lang$maxFixedArity = 3;
G__74429.cljs$lang$applyTo = G__74429__74432.cljs$lang$applyTo;
return G__74429;
})()
});
var fnil__74419 = (function (f,x,y,z){
return (function() {
var G__74436 = null;
var G__74436__74437 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__74436__74438 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__74436__74439 = (function() { 
var G__74441__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__74441 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74441__delegate.call(this, a, b, c, ds);
};
G__74441.cljs$lang$maxFixedArity = 3;
G__74441.cljs$lang$applyTo = (function (arglist__74442){
var a = cljs.core.first(arglist__74442);
var b = cljs.core.first(cljs.core.next(arglist__74442));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74442)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74442)));
return G__74441__delegate.call(this, a, b, c, ds);
});
return G__74441;
})()
;
G__74436 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__74436__74437.call(this,a,b);
case  3 :
return G__74436__74438.call(this,a,b,c);
default:
return G__74436__74439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__74436.cljs$lang$maxFixedArity = 3;
G__74436.cljs$lang$applyTo = G__74436__74439.cljs$lang$applyTo;
return G__74436;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__74417.call(this,f,x);
case  3 :
return fnil__74418.call(this,f,x,y);
case  4 :
return fnil__74419.call(this,f,x,y,z);
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
var mapi__74445 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____74443 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____74443))
{var s__74444 = temp__3698__auto____74443;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__74444)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__74444)));
} else
{return null;
}
})));
});

return mapi__74445.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____74446 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____74446))
{var s__74447 = temp__3698__auto____74446;

var x__74448 = f.call(null,cljs.core.first.call(null,s__74447));

if(cljs.core.truth_((x__74448 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__74447));
} else
{return cljs.core.cons.call(null,x__74448,keep.call(null,f,cljs.core.rest.call(null,s__74447)));
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
var keepi__74458 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____74455 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____74455))
{var s__74456 = temp__3698__auto____74455;

var x__74457 = f.call(null,idx,cljs.core.first.call(null,s__74456));

if(cljs.core.truth_((x__74457 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__74456));
} else
{return cljs.core.cons.call(null,x__74457,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__74456)));
}
} else
{return null;
}
})));
});

return keepi__74458.call(null,0,coll);
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
var every_pred__74503 = (function (p){
return (function() {
var ep1 = null;
var ep1__74508 = (function (){
return true;
});
var ep1__74509 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__74510 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74465 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____74465))
{return p.call(null,y);
} else
{return and__3546__auto____74465;
}
})());
});
var ep1__74511 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74466 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____74466))
{var and__3546__auto____74467 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____74467))
{return p.call(null,z);
} else
{return and__3546__auto____74467;
}
} else
{return and__3546__auto____74466;
}
})());
});
var ep1__74512 = (function() { 
var G__74514__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74468 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____74468))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____74468;
}
})());
};
var G__74514 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74514__delegate.call(this, x, y, z, args);
};
G__74514.cljs$lang$maxFixedArity = 3;
G__74514.cljs$lang$applyTo = (function (arglist__74515){
var x = cljs.core.first(arglist__74515);
var y = cljs.core.first(cljs.core.next(arglist__74515));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74515)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74515)));
return G__74514__delegate.call(this, x, y, z, args);
});
return G__74514;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__74508.call(this);
case  1 :
return ep1__74509.call(this,x);
case  2 :
return ep1__74510.call(this,x,y);
case  3 :
return ep1__74511.call(this,x,y,z);
default:
return ep1__74512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__74512.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__74504 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__74516 = (function (){
return true;
});
var ep2__74517 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74469 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____74469))
{return p2.call(null,x);
} else
{return and__3546__auto____74469;
}
})());
});
var ep2__74518 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74470 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____74470))
{var and__3546__auto____74471 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____74471))
{var and__3546__auto____74472 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____74472))
{return p2.call(null,y);
} else
{return and__3546__auto____74472;
}
} else
{return and__3546__auto____74471;
}
} else
{return and__3546__auto____74470;
}
})());
});
var ep2__74519 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74473 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____74473))
{var and__3546__auto____74474 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____74474))
{var and__3546__auto____74475 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____74475))
{var and__3546__auto____74476 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____74476))
{var and__3546__auto____74477 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____74477))
{return p2.call(null,z);
} else
{return and__3546__auto____74477;
}
} else
{return and__3546__auto____74476;
}
} else
{return and__3546__auto____74475;
}
} else
{return and__3546__auto____74474;
}
} else
{return and__3546__auto____74473;
}
})());
});
var ep2__74520 = (function() { 
var G__74522__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74478 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____74478))
{return cljs.core.every_QMARK_.call(null,(function (p1__74449_SHARP_){
var and__3546__auto____74479 = p1.call(null,p1__74449_SHARP_);

if(cljs.core.truth_(and__3546__auto____74479))
{return p2.call(null,p1__74449_SHARP_);
} else
{return and__3546__auto____74479;
}
}),args);
} else
{return and__3546__auto____74478;
}
})());
};
var G__74522 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74522__delegate.call(this, x, y, z, args);
};
G__74522.cljs$lang$maxFixedArity = 3;
G__74522.cljs$lang$applyTo = (function (arglist__74523){
var x = cljs.core.first(arglist__74523);
var y = cljs.core.first(cljs.core.next(arglist__74523));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74523)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74523)));
return G__74522__delegate.call(this, x, y, z, args);
});
return G__74522;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__74516.call(this);
case  1 :
return ep2__74517.call(this,x);
case  2 :
return ep2__74518.call(this,x,y);
case  3 :
return ep2__74519.call(this,x,y,z);
default:
return ep2__74520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__74520.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__74505 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__74524 = (function (){
return true;
});
var ep3__74525 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74480 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____74480))
{var and__3546__auto____74481 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____74481))
{return p3.call(null,x);
} else
{return and__3546__auto____74481;
}
} else
{return and__3546__auto____74480;
}
})());
});
var ep3__74526 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74482 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____74482))
{var and__3546__auto____74483 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____74483))
{var and__3546__auto____74484 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____74484))
{var and__3546__auto____74485 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____74485))
{var and__3546__auto____74486 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____74486))
{return p3.call(null,y);
} else
{return and__3546__auto____74486;
}
} else
{return and__3546__auto____74485;
}
} else
{return and__3546__auto____74484;
}
} else
{return and__3546__auto____74483;
}
} else
{return and__3546__auto____74482;
}
})());
});
var ep3__74527 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74487 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____74487))
{var and__3546__auto____74488 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____74488))
{var and__3546__auto____74489 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____74489))
{var and__3546__auto____74490 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____74490))
{var and__3546__auto____74491 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____74491))
{var and__3546__auto____74492 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____74492))
{var and__3546__auto____74493 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____74493))
{var and__3546__auto____74494 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____74494))
{return p3.call(null,z);
} else
{return and__3546__auto____74494;
}
} else
{return and__3546__auto____74493;
}
} else
{return and__3546__auto____74492;
}
} else
{return and__3546__auto____74491;
}
} else
{return and__3546__auto____74490;
}
} else
{return and__3546__auto____74489;
}
} else
{return and__3546__auto____74488;
}
} else
{return and__3546__auto____74487;
}
})());
});
var ep3__74528 = (function() { 
var G__74530__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74495 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____74495))
{return cljs.core.every_QMARK_.call(null,(function (p1__74450_SHARP_){
var and__3546__auto____74496 = p1.call(null,p1__74450_SHARP_);

if(cljs.core.truth_(and__3546__auto____74496))
{var and__3546__auto____74497 = p2.call(null,p1__74450_SHARP_);

if(cljs.core.truth_(and__3546__auto____74497))
{return p3.call(null,p1__74450_SHARP_);
} else
{return and__3546__auto____74497;
}
} else
{return and__3546__auto____74496;
}
}),args);
} else
{return and__3546__auto____74495;
}
})());
};
var G__74530 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74530__delegate.call(this, x, y, z, args);
};
G__74530.cljs$lang$maxFixedArity = 3;
G__74530.cljs$lang$applyTo = (function (arglist__74531){
var x = cljs.core.first(arglist__74531);
var y = cljs.core.first(cljs.core.next(arglist__74531));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74531)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74531)));
return G__74530__delegate.call(this, x, y, z, args);
});
return G__74530;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__74524.call(this);
case  1 :
return ep3__74525.call(this,x);
case  2 :
return ep3__74526.call(this,x,y);
case  3 :
return ep3__74527.call(this,x,y,z);
default:
return ep3__74528.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__74528.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__74506 = (function() { 
var G__74532__delegate = function (p1,p2,p3,ps){
var ps__74498 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__74533 = (function (){
return true;
});
var epn__74534 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__74451_SHARP_){
return p1__74451_SHARP_.call(null,x);
}),ps__74498);
});
var epn__74535 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__74452_SHARP_){
var and__3546__auto____74499 = p1__74452_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____74499))
{return p1__74452_SHARP_.call(null,y);
} else
{return and__3546__auto____74499;
}
}),ps__74498);
});
var epn__74536 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__74453_SHARP_){
var and__3546__auto____74500 = p1__74453_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____74500))
{var and__3546__auto____74501 = p1__74453_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____74501))
{return p1__74453_SHARP_.call(null,z);
} else
{return and__3546__auto____74501;
}
} else
{return and__3546__auto____74500;
}
}),ps__74498);
});
var epn__74537 = (function() { 
var G__74539__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____74502 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____74502))
{return cljs.core.every_QMARK_.call(null,(function (p1__74454_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__74454_SHARP_,args);
}),ps__74498);
} else
{return and__3546__auto____74502;
}
})());
};
var G__74539 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74539__delegate.call(this, x, y, z, args);
};
G__74539.cljs$lang$maxFixedArity = 3;
G__74539.cljs$lang$applyTo = (function (arglist__74540){
var x = cljs.core.first(arglist__74540);
var y = cljs.core.first(cljs.core.next(arglist__74540));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74540)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74540)));
return G__74539__delegate.call(this, x, y, z, args);
});
return G__74539;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__74533.call(this);
case  1 :
return epn__74534.call(this,x);
case  2 :
return epn__74535.call(this,x,y);
case  3 :
return epn__74536.call(this,x,y,z);
default:
return epn__74537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__74537.cljs$lang$applyTo;
return epn;
})()
};
var G__74532 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74532__delegate.call(this, p1, p2, p3, ps);
};
G__74532.cljs$lang$maxFixedArity = 3;
G__74532.cljs$lang$applyTo = (function (arglist__74541){
var p1 = cljs.core.first(arglist__74541);
var p2 = cljs.core.first(cljs.core.next(arglist__74541));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74541)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74541)));
return G__74532__delegate.call(this, p1, p2, p3, ps);
});
return G__74532;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__74503.call(this,p1);
case  2 :
return every_pred__74504.call(this,p1,p2);
case  3 :
return every_pred__74505.call(this,p1,p2,p3);
default:
return every_pred__74506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__74506.cljs$lang$applyTo;
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
var some_fn__74581 = (function (p){
return (function() {
var sp1 = null;
var sp1__74586 = (function (){
return null;
});
var sp1__74587 = (function (x){
return p.call(null,x);
});
var sp1__74588 = (function (x,y){
var or__3548__auto____74543 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____74543))
{return or__3548__auto____74543;
} else
{return p.call(null,y);
}
});
var sp1__74589 = (function (x,y,z){
var or__3548__auto____74544 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____74544))
{return or__3548__auto____74544;
} else
{var or__3548__auto____74545 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____74545))
{return or__3548__auto____74545;
} else
{return p.call(null,z);
}
}
});
var sp1__74590 = (function() { 
var G__74592__delegate = function (x,y,z,args){
var or__3548__auto____74546 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____74546))
{return or__3548__auto____74546;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__74592 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74592__delegate.call(this, x, y, z, args);
};
G__74592.cljs$lang$maxFixedArity = 3;
G__74592.cljs$lang$applyTo = (function (arglist__74593){
var x = cljs.core.first(arglist__74593);
var y = cljs.core.first(cljs.core.next(arglist__74593));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74593)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74593)));
return G__74592__delegate.call(this, x, y, z, args);
});
return G__74592;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__74586.call(this);
case  1 :
return sp1__74587.call(this,x);
case  2 :
return sp1__74588.call(this,x,y);
case  3 :
return sp1__74589.call(this,x,y,z);
default:
return sp1__74590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__74590.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__74582 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__74594 = (function (){
return null;
});
var sp2__74595 = (function (x){
var or__3548__auto____74547 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____74547))
{return or__3548__auto____74547;
} else
{return p2.call(null,x);
}
});
var sp2__74596 = (function (x,y){
var or__3548__auto____74548 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____74548))
{return or__3548__auto____74548;
} else
{var or__3548__auto____74549 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____74549))
{return or__3548__auto____74549;
} else
{var or__3548__auto____74550 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____74550))
{return or__3548__auto____74550;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__74597 = (function (x,y,z){
var or__3548__auto____74551 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____74551))
{return or__3548__auto____74551;
} else
{var or__3548__auto____74552 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____74552))
{return or__3548__auto____74552;
} else
{var or__3548__auto____74553 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____74553))
{return or__3548__auto____74553;
} else
{var or__3548__auto____74554 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____74554))
{return or__3548__auto____74554;
} else
{var or__3548__auto____74555 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____74555))
{return or__3548__auto____74555;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__74598 = (function() { 
var G__74600__delegate = function (x,y,z,args){
var or__3548__auto____74556 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____74556))
{return or__3548__auto____74556;
} else
{return cljs.core.some.call(null,(function (p1__74459_SHARP_){
var or__3548__auto____74557 = p1.call(null,p1__74459_SHARP_);

if(cljs.core.truth_(or__3548__auto____74557))
{return or__3548__auto____74557;
} else
{return p2.call(null,p1__74459_SHARP_);
}
}),args);
}
};
var G__74600 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74600__delegate.call(this, x, y, z, args);
};
G__74600.cljs$lang$maxFixedArity = 3;
G__74600.cljs$lang$applyTo = (function (arglist__74601){
var x = cljs.core.first(arglist__74601);
var y = cljs.core.first(cljs.core.next(arglist__74601));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74601)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74601)));
return G__74600__delegate.call(this, x, y, z, args);
});
return G__74600;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__74594.call(this);
case  1 :
return sp2__74595.call(this,x);
case  2 :
return sp2__74596.call(this,x,y);
case  3 :
return sp2__74597.call(this,x,y,z);
default:
return sp2__74598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__74598.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__74583 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__74602 = (function (){
return null;
});
var sp3__74603 = (function (x){
var or__3548__auto____74558 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____74558))
{return or__3548__auto____74558;
} else
{var or__3548__auto____74559 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____74559))
{return or__3548__auto____74559;
} else
{return p3.call(null,x);
}
}
});
var sp3__74604 = (function (x,y){
var or__3548__auto____74560 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____74560))
{return or__3548__auto____74560;
} else
{var or__3548__auto____74561 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____74561))
{return or__3548__auto____74561;
} else
{var or__3548__auto____74562 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____74562))
{return or__3548__auto____74562;
} else
{var or__3548__auto____74563 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____74563))
{return or__3548__auto____74563;
} else
{var or__3548__auto____74564 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____74564))
{return or__3548__auto____74564;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__74605 = (function (x,y,z){
var or__3548__auto____74565 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____74565))
{return or__3548__auto____74565;
} else
{var or__3548__auto____74566 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____74566))
{return or__3548__auto____74566;
} else
{var or__3548__auto____74567 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____74567))
{return or__3548__auto____74567;
} else
{var or__3548__auto____74568 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____74568))
{return or__3548__auto____74568;
} else
{var or__3548__auto____74569 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____74569))
{return or__3548__auto____74569;
} else
{var or__3548__auto____74570 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____74570))
{return or__3548__auto____74570;
} else
{var or__3548__auto____74571 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____74571))
{return or__3548__auto____74571;
} else
{var or__3548__auto____74572 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____74572))
{return or__3548__auto____74572;
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
var sp3__74606 = (function() { 
var G__74608__delegate = function (x,y,z,args){
var or__3548__auto____74573 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____74573))
{return or__3548__auto____74573;
} else
{return cljs.core.some.call(null,(function (p1__74460_SHARP_){
var or__3548__auto____74574 = p1.call(null,p1__74460_SHARP_);

if(cljs.core.truth_(or__3548__auto____74574))
{return or__3548__auto____74574;
} else
{var or__3548__auto____74575 = p2.call(null,p1__74460_SHARP_);

if(cljs.core.truth_(or__3548__auto____74575))
{return or__3548__auto____74575;
} else
{return p3.call(null,p1__74460_SHARP_);
}
}
}),args);
}
};
var G__74608 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74608__delegate.call(this, x, y, z, args);
};
G__74608.cljs$lang$maxFixedArity = 3;
G__74608.cljs$lang$applyTo = (function (arglist__74609){
var x = cljs.core.first(arglist__74609);
var y = cljs.core.first(cljs.core.next(arglist__74609));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74609)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74609)));
return G__74608__delegate.call(this, x, y, z, args);
});
return G__74608;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__74602.call(this);
case  1 :
return sp3__74603.call(this,x);
case  2 :
return sp3__74604.call(this,x,y);
case  3 :
return sp3__74605.call(this,x,y,z);
default:
return sp3__74606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__74606.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__74584 = (function() { 
var G__74610__delegate = function (p1,p2,p3,ps){
var ps__74576 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__74611 = (function (){
return null;
});
var spn__74612 = (function (x){
return cljs.core.some.call(null,(function (p1__74461_SHARP_){
return p1__74461_SHARP_.call(null,x);
}),ps__74576);
});
var spn__74613 = (function (x,y){
return cljs.core.some.call(null,(function (p1__74462_SHARP_){
var or__3548__auto____74577 = p1__74462_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____74577))
{return or__3548__auto____74577;
} else
{return p1__74462_SHARP_.call(null,y);
}
}),ps__74576);
});
var spn__74614 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__74463_SHARP_){
var or__3548__auto____74578 = p1__74463_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____74578))
{return or__3548__auto____74578;
} else
{var or__3548__auto____74579 = p1__74463_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____74579))
{return or__3548__auto____74579;
} else
{return p1__74463_SHARP_.call(null,z);
}
}
}),ps__74576);
});
var spn__74615 = (function() { 
var G__74617__delegate = function (x,y,z,args){
var or__3548__auto____74580 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____74580))
{return or__3548__auto____74580;
} else
{return cljs.core.some.call(null,(function (p1__74464_SHARP_){
return cljs.core.some.call(null,p1__74464_SHARP_,args);
}),ps__74576);
}
};
var G__74617 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74617__delegate.call(this, x, y, z, args);
};
G__74617.cljs$lang$maxFixedArity = 3;
G__74617.cljs$lang$applyTo = (function (arglist__74618){
var x = cljs.core.first(arglist__74618);
var y = cljs.core.first(cljs.core.next(arglist__74618));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74618)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74618)));
return G__74617__delegate.call(this, x, y, z, args);
});
return G__74617;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__74611.call(this);
case  1 :
return spn__74612.call(this,x);
case  2 :
return spn__74613.call(this,x,y);
case  3 :
return spn__74614.call(this,x,y,z);
default:
return spn__74615.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__74615.cljs$lang$applyTo;
return spn;
})()
};
var G__74610 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74610__delegate.call(this, p1, p2, p3, ps);
};
G__74610.cljs$lang$maxFixedArity = 3;
G__74610.cljs$lang$applyTo = (function (arglist__74619){
var p1 = cljs.core.first(arglist__74619);
var p2 = cljs.core.first(cljs.core.next(arglist__74619));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74619)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74619)));
return G__74610__delegate.call(this, p1, p2, p3, ps);
});
return G__74610;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__74581.call(this,p1);
case  2 :
return some_fn__74582.call(this,p1,p2);
case  3 :
return some_fn__74583.call(this,p1,p2,p3);
default:
return some_fn__74584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__74584.cljs$lang$applyTo;
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
var map__74632 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____74620 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____74620))
{var s__74621 = temp__3698__auto____74620;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__74621)),map.call(null,f,cljs.core.rest.call(null,s__74621)));
} else
{return null;
}
})));
});
var map__74633 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__74622 = cljs.core.seq.call(null,c1);
var s2__74623 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____74624 = s1__74622;

if(cljs.core.truth_(and__3546__auto____74624))
{return s2__74623;
} else
{return and__3546__auto____74624;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__74622),cljs.core.first.call(null,s2__74623)),map.call(null,f,cljs.core.rest.call(null,s1__74622),cljs.core.rest.call(null,s2__74623)));
} else
{return null;
}
})));
});
var map__74634 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__74625 = cljs.core.seq.call(null,c1);
var s2__74626 = cljs.core.seq.call(null,c2);
var s3__74627 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____74628 = s1__74625;

if(cljs.core.truth_(and__3546__auto____74628))
{var and__3546__auto____74629 = s2__74626;

if(cljs.core.truth_(and__3546__auto____74629))
{return s3__74627;
} else
{return and__3546__auto____74629;
}
} else
{return and__3546__auto____74628;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__74625),cljs.core.first.call(null,s2__74626),cljs.core.first.call(null,s3__74627)),map.call(null,f,cljs.core.rest.call(null,s1__74625),cljs.core.rest.call(null,s2__74626),cljs.core.rest.call(null,s3__74627)));
} else
{return null;
}
})));
});
var map__74635 = (function() { 
var G__74637__delegate = function (f,c1,c2,c3,colls){
var step__74631 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__74630 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__74630)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__74630),step.call(null,map.call(null,cljs.core.rest,ss__74630)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__74542_SHARP_){
return cljs.core.apply.call(null,f,p1__74542_SHARP_);
}),step__74631.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__74637 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__74637__delegate.call(this, f, c1, c2, c3, colls);
};
G__74637.cljs$lang$maxFixedArity = 4;
G__74637.cljs$lang$applyTo = (function (arglist__74638){
var f = cljs.core.first(arglist__74638);
var c1 = cljs.core.first(cljs.core.next(arglist__74638));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74638)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74638))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__74638))));
return G__74637__delegate.call(this, f, c1, c2, c3, colls);
});
return G__74637;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__74632.call(this,f,c1);
case  3 :
return map__74633.call(this,f,c1,c2);
case  4 :
return map__74634.call(this,f,c1,c2,c3);
default:
return map__74635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__74635.cljs$lang$applyTo;
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
{var temp__3698__auto____74639 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____74639))
{var s__74640 = temp__3698__auto____74639;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__74640),take.call(null,(n - 1),cljs.core.rest.call(null,s__74640)));
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
var step__74643 = (function (n,coll){
while(true){
var s__74641 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____74642 = (n > 0);

if(cljs.core.truth_(and__3546__auto____74642))
{return s__74641;
} else
{return and__3546__auto____74642;
}
})()))
{{
var G__74644 = (n - 1);
var G__74645 = cljs.core.rest.call(null,s__74641);
n = G__74644;
coll = G__74645;
continue;
}
} else
{return s__74641;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__74643.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__74646 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__74647 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__74646.call(this,n);
case  2 :
return drop_last__74647.call(this,n,s);
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
var s__74649 = cljs.core.seq.call(null,coll);
var lead__74650 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__74650))
{{
var G__74651 = cljs.core.next.call(null,s__74649);
var G__74652 = cljs.core.next.call(null,lead__74650);
s__74649 = G__74651;
lead__74650 = G__74652;
continue;
}
} else
{return s__74649;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__74655 = (function (pred,coll){
while(true){
var s__74653 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____74654 = s__74653;

if(cljs.core.truth_(and__3546__auto____74654))
{return pred.call(null,cljs.core.first.call(null,s__74653));
} else
{return and__3546__auto____74654;
}
})()))
{{
var G__74656 = pred;
var G__74657 = cljs.core.rest.call(null,s__74653);
pred = G__74656;
coll = G__74657;
continue;
}
} else
{return s__74653;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__74655.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____74658 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____74658))
{var s__74659 = temp__3698__auto____74658;

return cljs.core.concat.call(null,s__74659,cycle.call(null,s__74659));
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
var repeat__74660 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__74661 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__74660.call(this,n);
case  2 :
return repeat__74661.call(this,n,x);
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
var repeatedly__74663 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__74664 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__74663.call(this,n);
case  2 :
return repeatedly__74664.call(this,n,f);
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
var interleave__74670 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__74666 = cljs.core.seq.call(null,c1);
var s2__74667 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____74668 = s1__74666;

if(cljs.core.truth_(and__3546__auto____74668))
{return s2__74667;
} else
{return and__3546__auto____74668;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__74666),cljs.core.cons.call(null,cljs.core.first.call(null,s2__74667),interleave.call(null,cljs.core.rest.call(null,s1__74666),cljs.core.rest.call(null,s2__74667))));
} else
{return null;
}
})));
});
var interleave__74671 = (function() { 
var G__74673__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__74669 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__74669)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__74669),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__74669)));
} else
{return null;
}
})));
};
var G__74673 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74673__delegate.call(this, c1, c2, colls);
};
G__74673.cljs$lang$maxFixedArity = 2;
G__74673.cljs$lang$applyTo = (function (arglist__74674){
var c1 = cljs.core.first(arglist__74674);
var c2 = cljs.core.first(cljs.core.next(arglist__74674));
var colls = cljs.core.rest(cljs.core.next(arglist__74674));
return G__74673__delegate.call(this, c1, c2, colls);
});
return G__74673;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__74670.call(this,c1,c2);
default:
return interleave__74671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__74671.cljs$lang$applyTo;
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
var cat__74677 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____74675 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____74675))
{var coll__74676 = temp__3695__auto____74675;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__74676),cat.call(null,cljs.core.rest.call(null,coll__74676),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__74677.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__74678 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__74679 = (function() { 
var G__74681__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__74681 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74681__delegate.call(this, f, coll, colls);
};
G__74681.cljs$lang$maxFixedArity = 2;
G__74681.cljs$lang$applyTo = (function (arglist__74682){
var f = cljs.core.first(arglist__74682);
var coll = cljs.core.first(cljs.core.next(arglist__74682));
var colls = cljs.core.rest(cljs.core.next(arglist__74682));
return G__74681__delegate.call(this, f, coll, colls);
});
return G__74681;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__74678.call(this,f,coll);
default:
return mapcat__74679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__74679.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____74683 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____74683))
{var s__74684 = temp__3698__auto____74683;

var f__74685 = cljs.core.first.call(null,s__74684);
var r__74686 = cljs.core.rest.call(null,s__74684);

if(cljs.core.truth_(pred.call(null,f__74685)))
{return cljs.core.cons.call(null,f__74685,filter.call(null,pred,r__74686));
} else
{return filter.call(null,pred,r__74686);
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
var walk__74688 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__74688.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__74687_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__74687_SHARP_));
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
var partition__74695 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__74696 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____74689 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____74689))
{var s__74690 = temp__3698__auto____74689;

var p__74691 = cljs.core.take.call(null,n,s__74690);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__74691))))
{return cljs.core.cons.call(null,p__74691,partition.call(null,n,step,cljs.core.drop.call(null,step,s__74690)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__74697 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____74692 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____74692))
{var s__74693 = temp__3698__auto____74692;

var p__74694 = cljs.core.take.call(null,n,s__74693);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__74694))))
{return cljs.core.cons.call(null,p__74694,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__74693)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__74694,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__74695.call(this,n,step);
case  3 :
return partition__74696.call(this,n,step,pad);
case  4 :
return partition__74697.call(this,n,step,pad,coll);
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
var get_in__74703 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__74704 = (function (m,ks,not_found){
var sentinel__74699 = cljs.core.lookup_sentinel;
var m__74700 = m;
var ks__74701 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__74701))
{var m__74702 = cljs.core.get.call(null,m__74700,cljs.core.first.call(null,ks__74701),sentinel__74699);

if(cljs.core.truth_((sentinel__74699 === m__74702)))
{return not_found;
} else
{{
var G__74706 = sentinel__74699;
var G__74707 = m__74702;
var G__74708 = cljs.core.next.call(null,ks__74701);
sentinel__74699 = G__74706;
m__74700 = G__74707;
ks__74701 = G__74708;
continue;
}
}
} else
{return m__74700;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__74703.call(this,m,ks);
case  3 :
return get_in__74704.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__74709,v){
var vec__74710__74711 = p__74709;
var k__74712 = cljs.core.nth.call(null,vec__74710__74711,0,null);
var ks__74713 = cljs.core.nthnext.call(null,vec__74710__74711,1);

if(cljs.core.truth_(ks__74713))
{return cljs.core.assoc.call(null,m,k__74712,assoc_in.call(null,cljs.core.get.call(null,m,k__74712),ks__74713,v));
} else
{return cljs.core.assoc.call(null,m,k__74712,v);
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
var update_in__delegate = function (m,p__74714,f,args){
var vec__74715__74716 = p__74714;
var k__74717 = cljs.core.nth.call(null,vec__74715__74716,0,null);
var ks__74718 = cljs.core.nthnext.call(null,vec__74715__74716,1);

if(cljs.core.truth_(ks__74718))
{return cljs.core.assoc.call(null,m,k__74717,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__74717),ks__74718,f,args));
} else
{return cljs.core.assoc.call(null,m,k__74717,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__74717),args));
}
};
var update_in = function (m,p__74714,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__74714, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__74719){
var m = cljs.core.first(arglist__74719);
var p__74714 = cljs.core.first(cljs.core.next(arglist__74719));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__74719)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__74719)));
return update_in__delegate.call(this, m, p__74714, f, args);
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
var this__74720 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__74753 = null;
var G__74753__74754 = (function (coll,k){
var this__74721 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__74753__74755 = (function (coll,k,not_found){
var this__74722 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__74753 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__74753__74754.call(this,coll,k);
case  3 :
return G__74753__74755.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74753;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__74723 = this;
var new_array__74724 = cljs.core.aclone.call(null,this__74723.array);

(new_array__74724[k] = v);
return (new cljs.core.Vector(this__74723.meta,new_array__74724));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__74757 = null;
var G__74757__74758 = (function (tsym74725,k){
var this__74727 = this;
var tsym74725__74728 = this;

var coll__74729 = tsym74725__74728;

return cljs.core._lookup.call(null,coll__74729,k);
});
var G__74757__74759 = (function (tsym74726,k,not_found){
var this__74730 = this;
var tsym74726__74731 = this;

var coll__74732 = tsym74726__74731;

return cljs.core._lookup.call(null,coll__74732,k,not_found);
});
G__74757 = function(tsym74726,k,not_found){
switch(arguments.length){
case  2 :
return G__74757__74758.call(this,tsym74726,k);
case  3 :
return G__74757__74759.call(this,tsym74726,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74757;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__74733 = this;
var new_array__74734 = cljs.core.aclone.call(null,this__74733.array);

new_array__74734.push(o);
return (new cljs.core.Vector(this__74733.meta,new_array__74734));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__74761 = null;
var G__74761__74762 = (function (v,f){
var this__74735 = this;
return cljs.core.ci_reduce.call(null,this__74735.array,f);
});
var G__74761__74763 = (function (v,f,start){
var this__74736 = this;
return cljs.core.ci_reduce.call(null,this__74736.array,f,start);
});
G__74761 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__74761__74762.call(this,v,f);
case  3 :
return G__74761__74763.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74761;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__74737 = this;
if(cljs.core.truth_((this__74737.array.length > 0)))
{var vector_seq__74738 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__74737.array.length)))
{return cljs.core.cons.call(null,(this__74737.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__74738.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__74739 = this;
return this__74739.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__74740 = this;
var count__74741 = this__74740.array.length;

if(cljs.core.truth_((count__74741 > 0)))
{return (this__74740.array[(count__74741 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__74742 = this;
if(cljs.core.truth_((this__74742.array.length > 0)))
{var new_array__74743 = cljs.core.aclone.call(null,this__74742.array);

new_array__74743.pop();
return (new cljs.core.Vector(this__74742.meta,new_array__74743));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__74744 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74745 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74746 = this;
return (new cljs.core.Vector(meta,this__74746.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74747 = this;
return this__74747.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__74765 = null;
var G__74765__74766 = (function (coll,n){
var this__74748 = this;
if(cljs.core.truth_((function (){var and__3546__auto____74749 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____74749))
{return (n < this__74748.array.length);
} else
{return and__3546__auto____74749;
}
})()))
{return (this__74748.array[n]);
} else
{return null;
}
});
var G__74765__74767 = (function (coll,n,not_found){
var this__74750 = this;
if(cljs.core.truth_((function (){var and__3546__auto____74751 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____74751))
{return (n < this__74750.array.length);
} else
{return and__3546__auto____74751;
}
})()))
{return (this__74750.array[n]);
} else
{return not_found;
}
});
G__74765 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__74765__74766.call(this,coll,n);
case  3 :
return G__74765__74767.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74765;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74752 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__74752.meta);
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
vector.cljs$lang$applyTo = (function (arglist__74769){
var args = cljs.core.seq( arglist__74769 );;
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
var this__74770 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__74798 = null;
var G__74798__74799 = (function (coll,k){
var this__74771 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__74798__74800 = (function (coll,k,not_found){
var this__74772 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__74798 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__74798__74799.call(this,coll,k);
case  3 :
return G__74798__74800.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74798;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__74773 = this;
var v_pos__74774 = (this__74773.start + key);

return (new cljs.core.Subvec(this__74773.meta,cljs.core._assoc.call(null,this__74773.v,v_pos__74774,val),this__74773.start,((this__74773.end > (v_pos__74774 + 1)) ? this__74773.end : (v_pos__74774 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__74802 = null;
var G__74802__74803 = (function (tsym74775,k){
var this__74777 = this;
var tsym74775__74778 = this;

var coll__74779 = tsym74775__74778;

return cljs.core._lookup.call(null,coll__74779,k);
});
var G__74802__74804 = (function (tsym74776,k,not_found){
var this__74780 = this;
var tsym74776__74781 = this;

var coll__74782 = tsym74776__74781;

return cljs.core._lookup.call(null,coll__74782,k,not_found);
});
G__74802 = function(tsym74776,k,not_found){
switch(arguments.length){
case  2 :
return G__74802__74803.call(this,tsym74776,k);
case  3 :
return G__74802__74804.call(this,tsym74776,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74802;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__74783 = this;
return (new cljs.core.Subvec(this__74783.meta,cljs.core._assoc_n.call(null,this__74783.v,this__74783.end,o),this__74783.start,(this__74783.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__74806 = null;
var G__74806__74807 = (function (coll,f){
var this__74784 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__74806__74808 = (function (coll,f,start){
var this__74785 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__74806 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__74806__74807.call(this,coll,f);
case  3 :
return G__74806__74808.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74806;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__74786 = this;
var subvec_seq__74787 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__74786.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__74786.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__74787.call(null,this__74786.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__74788 = this;
return (this__74788.end - this__74788.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__74789 = this;
return cljs.core._nth.call(null,this__74789.v,(this__74789.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__74790 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__74790.start,this__74790.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__74790.meta,this__74790.v,this__74790.start,(this__74790.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__74791 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74792 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74793 = this;
return (new cljs.core.Subvec(meta,this__74793.v,this__74793.start,this__74793.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74794 = this;
return this__74794.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__74810 = null;
var G__74810__74811 = (function (coll,n){
var this__74795 = this;
return cljs.core._nth.call(null,this__74795.v,(this__74795.start + n));
});
var G__74810__74812 = (function (coll,n,not_found){
var this__74796 = this;
return cljs.core._nth.call(null,this__74796.v,(this__74796.start + n),not_found);
});
G__74810 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__74810__74811.call(this,coll,n);
case  3 :
return G__74810__74812.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74810;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74797 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__74797.meta);
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
var subvec__74814 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__74815 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__74814.call(this,v,start);
case  3 :
return subvec__74815.call(this,v,start,end);
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
var this__74817 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__74818 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74819 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74820 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__74820.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__74821 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__74822 = this;
return cljs.core._first.call(null,this__74822.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__74823 = this;
var temp__3695__auto____74824 = cljs.core.next.call(null,this__74823.front);

if(cljs.core.truth_(temp__3695__auto____74824))
{var f1__74825 = temp__3695__auto____74824;

return (new cljs.core.PersistentQueueSeq(this__74823.meta,f1__74825,this__74823.rear));
} else
{if(cljs.core.truth_((this__74823.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__74823.meta,this__74823.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74826 = this;
return this__74826.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74827 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__74827.front,this__74827.rear));
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
var this__74828 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__74829 = this;
if(cljs.core.truth_(this__74829.front))
{return (new cljs.core.PersistentQueue(this__74829.meta,(this__74829.count + 1),this__74829.front,cljs.core.conj.call(null,(function (){var or__3548__auto____74830 = this__74829.rear;

if(cljs.core.truth_(or__3548__auto____74830))
{return or__3548__auto____74830;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__74829.meta,(this__74829.count + 1),cljs.core.conj.call(null,this__74829.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__74831 = this;
var rear__74832 = cljs.core.seq.call(null,this__74831.rear);

if(cljs.core.truth_((function (){var or__3548__auto____74833 = this__74831.front;

if(cljs.core.truth_(or__3548__auto____74833))
{return or__3548__auto____74833;
} else
{return rear__74832;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__74831.front,cljs.core.seq.call(null,rear__74832)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__74834 = this;
return this__74834.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__74835 = this;
return cljs.core._first.call(null,this__74835.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__74836 = this;
if(cljs.core.truth_(this__74836.front))
{var temp__3695__auto____74837 = cljs.core.next.call(null,this__74836.front);

if(cljs.core.truth_(temp__3695__auto____74837))
{var f1__74838 = temp__3695__auto____74837;

return (new cljs.core.PersistentQueue(this__74836.meta,(this__74836.count - 1),f1__74838,this__74836.rear));
} else
{return (new cljs.core.PersistentQueue(this__74836.meta,(this__74836.count - 1),cljs.core.seq.call(null,this__74836.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__74839 = this;
return cljs.core.first.call(null,this__74839.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__74840 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74841 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74842 = this;
return (new cljs.core.PersistentQueue(meta,this__74842.count,this__74842.front,this__74842.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74843 = this;
return this__74843.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74844 = this;
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
var this__74845 = this;
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
var len__74846 = array.length;

var i__74847 = 0;

while(true){
if(cljs.core.truth_((i__74847 < len__74846)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__74847]))))
{return i__74847;
} else
{{
var G__74848 = (i__74847 + incr);
i__74847 = G__74848;
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
var obj_map_contains_key_QMARK___74850 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___74851 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____74849 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____74849))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____74849;
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
return obj_map_contains_key_QMARK___74850.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___74851.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__74854 = cljs.core.hash.call(null,a);
var b__74855 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__74854 < b__74855)))
{return -1;
} else
{if(cljs.core.truth_((a__74854 > b__74855)))
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
var this__74856 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__74883 = null;
var G__74883__74884 = (function (coll,k){
var this__74857 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__74883__74885 = (function (coll,k,not_found){
var this__74858 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__74858.strobj,(this__74858.strobj[k]),not_found);
});
G__74883 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__74883__74884.call(this,coll,k);
case  3 :
return G__74883__74885.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74883;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__74859 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__74860 = goog.object.clone.call(null,this__74859.strobj);
var overwrite_QMARK___74861 = new_strobj__74860.hasOwnProperty(k);

(new_strobj__74860[k] = v);
if(cljs.core.truth_(overwrite_QMARK___74861))
{return (new cljs.core.ObjMap(this__74859.meta,this__74859.keys,new_strobj__74860));
} else
{var new_keys__74862 = cljs.core.aclone.call(null,this__74859.keys);

new_keys__74862.push(k);
return (new cljs.core.ObjMap(this__74859.meta,new_keys__74862,new_strobj__74860));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__74859.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__74863 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__74863.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__74887 = null;
var G__74887__74888 = (function (tsym74864,k){
var this__74866 = this;
var tsym74864__74867 = this;

var coll__74868 = tsym74864__74867;

return cljs.core._lookup.call(null,coll__74868,k);
});
var G__74887__74889 = (function (tsym74865,k,not_found){
var this__74869 = this;
var tsym74865__74870 = this;

var coll__74871 = tsym74865__74870;

return cljs.core._lookup.call(null,coll__74871,k,not_found);
});
G__74887 = function(tsym74865,k,not_found){
switch(arguments.length){
case  2 :
return G__74887__74888.call(this,tsym74865,k);
case  3 :
return G__74887__74889.call(this,tsym74865,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74887;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__74872 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__74873 = this;
if(cljs.core.truth_((this__74873.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__74853_SHARP_){
return cljs.core.vector.call(null,p1__74853_SHARP_,(this__74873.strobj[p1__74853_SHARP_]));
}),this__74873.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__74874 = this;
return this__74874.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74875 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74876 = this;
return (new cljs.core.ObjMap(meta,this__74876.keys,this__74876.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74877 = this;
return this__74877.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74878 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__74878.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__74879 = this;
if(cljs.core.truth_((function (){var and__3546__auto____74880 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____74880))
{return this__74879.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____74880;
}
})()))
{var new_keys__74881 = cljs.core.aclone.call(null,this__74879.keys);
var new_strobj__74882 = goog.object.clone.call(null,this__74879.strobj);

new_keys__74881.splice(cljs.core.scan_array.call(null,1,k,new_keys__74881),1);
cljs.core.js_delete.call(null,new_strobj__74882,k);
return (new cljs.core.ObjMap(this__74879.meta,new_keys__74881,new_strobj__74882));
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
var this__74892 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__74930 = null;
var G__74930__74931 = (function (coll,k){
var this__74893 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__74930__74932 = (function (coll,k,not_found){
var this__74894 = this;
var bucket__74895 = (this__74894.hashobj[cljs.core.hash.call(null,k)]);
var i__74896 = (cljs.core.truth_(bucket__74895)?cljs.core.scan_array.call(null,2,k,bucket__74895):null);

if(cljs.core.truth_(i__74896))
{return (bucket__74895[(i__74896 + 1)]);
} else
{return not_found;
}
});
G__74930 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__74930__74931.call(this,coll,k);
case  3 :
return G__74930__74932.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74930;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__74897 = this;
var h__74898 = cljs.core.hash.call(null,k);
var bucket__74899 = (this__74897.hashobj[h__74898]);

if(cljs.core.truth_(bucket__74899))
{var new_bucket__74900 = cljs.core.aclone.call(null,bucket__74899);
var new_hashobj__74901 = goog.object.clone.call(null,this__74897.hashobj);

(new_hashobj__74901[h__74898] = new_bucket__74900);
var temp__3695__auto____74902 = cljs.core.scan_array.call(null,2,k,new_bucket__74900);

if(cljs.core.truth_(temp__3695__auto____74902))
{var i__74903 = temp__3695__auto____74902;

(new_bucket__74900[(i__74903 + 1)] = v);
return (new cljs.core.HashMap(this__74897.meta,this__74897.count,new_hashobj__74901));
} else
{new_bucket__74900.push(k,v);
return (new cljs.core.HashMap(this__74897.meta,(this__74897.count + 1),new_hashobj__74901));
}
} else
{var new_hashobj__74904 = goog.object.clone.call(null,this__74897.hashobj);

(new_hashobj__74904[h__74898] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__74897.meta,(this__74897.count + 1),new_hashobj__74904));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__74905 = this;
var bucket__74906 = (this__74905.hashobj[cljs.core.hash.call(null,k)]);
var i__74907 = (cljs.core.truth_(bucket__74906)?cljs.core.scan_array.call(null,2,k,bucket__74906):null);

if(cljs.core.truth_(i__74907))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__74934 = null;
var G__74934__74935 = (function (tsym74908,k){
var this__74910 = this;
var tsym74908__74911 = this;

var coll__74912 = tsym74908__74911;

return cljs.core._lookup.call(null,coll__74912,k);
});
var G__74934__74936 = (function (tsym74909,k,not_found){
var this__74913 = this;
var tsym74909__74914 = this;

var coll__74915 = tsym74909__74914;

return cljs.core._lookup.call(null,coll__74915,k,not_found);
});
G__74934 = function(tsym74909,k,not_found){
switch(arguments.length){
case  2 :
return G__74934__74935.call(this,tsym74909,k);
case  3 :
return G__74934__74936.call(this,tsym74909,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74934;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__74916 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__74917 = this;
if(cljs.core.truth_((this__74917.count > 0)))
{var hashes__74918 = cljs.core.js_keys.call(null,this__74917.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__74891_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__74917.hashobj[p1__74891_SHARP_])));
}),hashes__74918);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__74919 = this;
return this__74919.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74920 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74921 = this;
return (new cljs.core.HashMap(meta,this__74921.count,this__74921.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74922 = this;
return this__74922.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74923 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__74923.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__74924 = this;
var h__74925 = cljs.core.hash.call(null,k);
var bucket__74926 = (this__74924.hashobj[h__74925]);
var i__74927 = (cljs.core.truth_(bucket__74926)?cljs.core.scan_array.call(null,2,k,bucket__74926):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__74927)))
{return coll;
} else
{var new_hashobj__74928 = goog.object.clone.call(null,this__74924.hashobj);

if(cljs.core.truth_((3 > bucket__74926.length)))
{cljs.core.js_delete.call(null,new_hashobj__74928,h__74925);
} else
{var new_bucket__74929 = cljs.core.aclone.call(null,bucket__74926);

new_bucket__74929.splice(i__74927,2);
(new_hashobj__74928[h__74925] = new_bucket__74929);
}
return (new cljs.core.HashMap(this__74924.meta,(this__74924.count - 1),new_hashobj__74928));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__74938 = ks.length;

var i__74939 = 0;
var out__74940 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__74939 < len__74938)))
{{
var G__74941 = (i__74939 + 1);
var G__74942 = cljs.core.assoc.call(null,out__74940,(ks[i__74939]),(vs[i__74939]));
i__74939 = G__74941;
out__74940 = G__74942;
continue;
}
} else
{return out__74940;
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
var in$__74943 = cljs.core.seq.call(null,keyvals);
var out__74944 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__74943))
{{
var G__74945 = cljs.core.nnext.call(null,in$__74943);
var G__74946 = cljs.core.assoc.call(null,out__74944,cljs.core.first.call(null,in$__74943),cljs.core.second.call(null,in$__74943));
in$__74943 = G__74945;
out__74944 = G__74946;
continue;
}
} else
{return out__74944;
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
hash_map.cljs$lang$applyTo = (function (arglist__74947){
var keyvals = cljs.core.seq( arglist__74947 );;
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
{return cljs.core.reduce.call(null,(function (p1__74948_SHARP_,p2__74949_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____74950 = p1__74948_SHARP_;

if(cljs.core.truth_(or__3548__auto____74950))
{return or__3548__auto____74950;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__74949_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__74951){
var maps = cljs.core.seq( arglist__74951 );;
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
{var merge_entry__74954 = (function (m,e){
var k__74952 = cljs.core.first.call(null,e);
var v__74953 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__74952)))
{return cljs.core.assoc.call(null,m,k__74952,f.call(null,cljs.core.get.call(null,m,k__74952),v__74953));
} else
{return cljs.core.assoc.call(null,m,k__74952,v__74953);
}
});
var merge2__74956 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__74954,(function (){var or__3548__auto____74955 = m1;

if(cljs.core.truth_(or__3548__auto____74955))
{return or__3548__auto____74955;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__74956,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__74957){
var f = cljs.core.first(arglist__74957);
var maps = cljs.core.rest(arglist__74957);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__74959 = cljs.core.ObjMap.fromObject([],{});
var keys__74960 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__74960))
{var key__74961 = cljs.core.first.call(null,keys__74960);
var entry__74962 = cljs.core.get.call(null,map,key__74961,"\uFDD0'user/not-found");

{
var G__74963 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__74962,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__74959,key__74961,entry__74962):ret__74959);
var G__74964 = cljs.core.next.call(null,keys__74960);
ret__74959 = G__74963;
keys__74960 = G__74964;
continue;
}
} else
{return ret__74959;
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
var this__74965 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__74986 = null;
var G__74986__74987 = (function (coll,v){
var this__74966 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__74986__74988 = (function (coll,v,not_found){
var this__74967 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__74967.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__74986 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__74986__74987.call(this,coll,v);
case  3 :
return G__74986__74988.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74986;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__74990 = null;
var G__74990__74991 = (function (tsym74968,k){
var this__74970 = this;
var tsym74968__74971 = this;

var coll__74972 = tsym74968__74971;

return cljs.core._lookup.call(null,coll__74972,k);
});
var G__74990__74992 = (function (tsym74969,k,not_found){
var this__74973 = this;
var tsym74969__74974 = this;

var coll__74975 = tsym74969__74974;

return cljs.core._lookup.call(null,coll__74975,k,not_found);
});
G__74990 = function(tsym74969,k,not_found){
switch(arguments.length){
case  2 :
return G__74990__74991.call(this,tsym74969,k);
case  3 :
return G__74990__74992.call(this,tsym74969,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__74990;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__74976 = this;
return (new cljs.core.Set(this__74976.meta,cljs.core.assoc.call(null,this__74976.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__74977 = this;
return cljs.core.keys.call(null,this__74977.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__74978 = this;
return (new cljs.core.Set(this__74978.meta,cljs.core.dissoc.call(null,this__74978.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__74979 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__74980 = this;
var and__3546__auto____74981 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____74981))
{var and__3546__auto____74982 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____74982))
{return cljs.core.every_QMARK_.call(null,(function (p1__74958_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__74958_SHARP_);
}),other);
} else
{return and__3546__auto____74982;
}
} else
{return and__3546__auto____74981;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__74983 = this;
return (new cljs.core.Set(meta,this__74983.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__74984 = this;
return this__74984.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__74985 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__74985.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__74995 = cljs.core.seq.call(null,coll);
var out__74996 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__74995))))
{{
var G__74997 = cljs.core.rest.call(null,in$__74995);
var G__74998 = cljs.core.conj.call(null,out__74996,cljs.core.first.call(null,in$__74995));
in$__74995 = G__74997;
out__74996 = G__74998;
continue;
}
} else
{return out__74996;
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
{var n__74999 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____75000 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____75000))
{var e__75001 = temp__3695__auto____75000;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__75001));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__74999,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__74994_SHARP_){
var temp__3695__auto____75002 = cljs.core.find.call(null,smap,p1__74994_SHARP_);

if(cljs.core.truth_(temp__3695__auto____75002))
{var e__75003 = temp__3695__auto____75002;

return cljs.core.second.call(null,e__75003);
} else
{return p1__74994_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__75011 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__75004,seen){
while(true){
var vec__75005__75006 = p__75004;
var f__75007 = cljs.core.nth.call(null,vec__75005__75006,0,null);
var xs__75008 = vec__75005__75006;

var temp__3698__auto____75009 = cljs.core.seq.call(null,xs__75008);

if(cljs.core.truth_(temp__3698__auto____75009))
{var s__75010 = temp__3698__auto____75009;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__75007)))
{{
var G__75012 = cljs.core.rest.call(null,s__75010);
var G__75013 = seen;
p__75004 = G__75012;
seen = G__75013;
continue;
}
} else
{return cljs.core.cons.call(null,f__75007,step.call(null,cljs.core.rest.call(null,s__75010),cljs.core.conj.call(null,seen,f__75007)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__75011.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__75014 = cljs.core.Vector.fromArray([]);
var s__75015 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__75015)))
{{
var G__75016 = cljs.core.conj.call(null,ret__75014,cljs.core.first.call(null,s__75015));
var G__75017 = cljs.core.next.call(null,s__75015);
ret__75014 = G__75016;
s__75015 = G__75017;
continue;
}
} else
{return cljs.core.seq.call(null,ret__75014);
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
{if(cljs.core.truth_((function (){var or__3548__auto____75018 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____75018))
{return or__3548__auto____75018;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__75019 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__75019 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__75019 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____75020 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____75020))
{return or__3548__auto____75020;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__75021 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__75021 > -1)))
{return cljs.core.subs.call(null,x,2,i__75021);
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
var map__75024 = cljs.core.ObjMap.fromObject([],{});
var ks__75025 = cljs.core.seq.call(null,keys);
var vs__75026 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____75027 = ks__75025;

if(cljs.core.truth_(and__3546__auto____75027))
{return vs__75026;
} else
{return and__3546__auto____75027;
}
})()))
{{
var G__75028 = cljs.core.assoc.call(null,map__75024,cljs.core.first.call(null,ks__75025),cljs.core.first.call(null,vs__75026));
var G__75029 = cljs.core.next.call(null,ks__75025);
var G__75030 = cljs.core.next.call(null,vs__75026);
map__75024 = G__75028;
ks__75025 = G__75029;
vs__75026 = G__75030;
continue;
}
} else
{return map__75024;
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
var max_key__75033 = (function (k,x){
return x;
});
var max_key__75034 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__75035 = (function() { 
var G__75037__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__75022_SHARP_,p2__75023_SHARP_){
return max_key.call(null,k,p1__75022_SHARP_,p2__75023_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__75037 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75037__delegate.call(this, k, x, y, more);
};
G__75037.cljs$lang$maxFixedArity = 3;
G__75037.cljs$lang$applyTo = (function (arglist__75038){
var k = cljs.core.first(arglist__75038);
var x = cljs.core.first(cljs.core.next(arglist__75038));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75038)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75038)));
return G__75037__delegate.call(this, k, x, y, more);
});
return G__75037;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__75033.call(this,k,x);
case  3 :
return max_key__75034.call(this,k,x,y);
default:
return max_key__75035.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__75035.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__75039 = (function (k,x){
return x;
});
var min_key__75040 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__75041 = (function() { 
var G__75043__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__75031_SHARP_,p2__75032_SHARP_){
return min_key.call(null,k,p1__75031_SHARP_,p2__75032_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__75043 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75043__delegate.call(this, k, x, y, more);
};
G__75043.cljs$lang$maxFixedArity = 3;
G__75043.cljs$lang$applyTo = (function (arglist__75044){
var k = cljs.core.first(arglist__75044);
var x = cljs.core.first(cljs.core.next(arglist__75044));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75044)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75044)));
return G__75043__delegate.call(this, k, x, y, more);
});
return G__75043;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__75039.call(this,k,x);
case  3 :
return min_key__75040.call(this,k,x,y);
default:
return min_key__75041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__75041.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__75047 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__75048 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____75045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____75045))
{var s__75046 = temp__3698__auto____75045;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__75046),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__75046)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__75047.call(this,n,step);
case  3 :
return partition_all__75048.call(this,n,step,coll);
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
var temp__3698__auto____75050 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____75050))
{var s__75051 = temp__3698__auto____75050;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__75051))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__75051),take_while.call(null,pred,cljs.core.rest.call(null,s__75051)));
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
var this__75052 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__75053 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__75069 = null;
var G__75069__75070 = (function (rng,f){
var this__75054 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__75069__75071 = (function (rng,f,s){
var this__75055 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__75069 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__75069__75070.call(this,rng,f);
case  3 :
return G__75069__75071.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75069;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__75056 = this;
var comp__75057 = (cljs.core.truth_((this__75056.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__75057.call(null,this__75056.start,this__75056.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__75058 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__75058.end - this__75058.start) / this__75058.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__75059 = this;
return this__75059.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__75060 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__75060.meta,(this__75060.start + this__75060.step),this__75060.end,this__75060.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__75061 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__75062 = this;
return (new cljs.core.Range(meta,this__75062.start,this__75062.end,this__75062.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__75063 = this;
return this__75063.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__75073 = null;
var G__75073__75074 = (function (rng,n){
var this__75064 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__75064.start + (n * this__75064.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____75065 = (this__75064.start > this__75064.end);

if(cljs.core.truth_(and__3546__auto____75065))
{return cljs.core._EQ_.call(null,this__75064.step,0);
} else
{return and__3546__auto____75065;
}
})()))
{return this__75064.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__75073__75075 = (function (rng,n,not_found){
var this__75066 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__75066.start + (n * this__75066.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____75067 = (this__75066.start > this__75066.end);

if(cljs.core.truth_(and__3546__auto____75067))
{return cljs.core._EQ_.call(null,this__75066.step,0);
} else
{return and__3546__auto____75067;
}
})()))
{return this__75066.start;
} else
{return not_found;
}
}
});
G__75073 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__75073__75074.call(this,rng,n);
case  3 :
return G__75073__75075.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__75073;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__75068 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__75068.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__75077 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__75078 = (function (end){
return range.call(null,0,end,1);
});
var range__75079 = (function (start,end){
return range.call(null,start,end,1);
});
var range__75080 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__75077.call(this);
case  1 :
return range__75078.call(this,start);
case  2 :
return range__75079.call(this,start,end);
case  3 :
return range__75080.call(this,start,end,step);
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
var temp__3698__auto____75082 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____75082))
{var s__75083 = temp__3698__auto____75082;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__75083),take_nth.call(null,n,cljs.core.drop.call(null,n,s__75083)));
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
var temp__3698__auto____75085 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____75085))
{var s__75086 = temp__3698__auto____75085;

var fst__75087 = cljs.core.first.call(null,s__75086);
var fv__75088 = f.call(null,fst__75087);
var run__75089 = cljs.core.cons.call(null,fst__75087,cljs.core.take_while.call(null,(function (p1__75084_SHARP_){
return cljs.core._EQ_.call(null,fv__75088,f.call(null,p1__75084_SHARP_));
}),cljs.core.next.call(null,s__75086)));

return cljs.core.cons.call(null,run__75089,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__75089),s__75086))));
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
var reductions__75104 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____75100 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____75100))
{var s__75101 = temp__3695__auto____75100;

return reductions.call(null,f,cljs.core.first.call(null,s__75101),cljs.core.rest.call(null,s__75101));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__75105 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____75102 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____75102))
{var s__75103 = temp__3698__auto____75102;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__75103)),cljs.core.rest.call(null,s__75103));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__75104.call(this,f,init);
case  3 :
return reductions__75105.call(this,f,init,coll);
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
var juxt__75108 = (function (f){
return (function() {
var G__75113 = null;
var G__75113__75114 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__75113__75115 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__75113__75116 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__75113__75117 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__75113__75118 = (function() { 
var G__75120__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__75120 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75120__delegate.call(this, x, y, z, args);
};
G__75120.cljs$lang$maxFixedArity = 3;
G__75120.cljs$lang$applyTo = (function (arglist__75121){
var x = cljs.core.first(arglist__75121);
var y = cljs.core.first(cljs.core.next(arglist__75121));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75121)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75121)));
return G__75120__delegate.call(this, x, y, z, args);
});
return G__75120;
})()
;
G__75113 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__75113__75114.call(this);
case  1 :
return G__75113__75115.call(this,x);
case  2 :
return G__75113__75116.call(this,x,y);
case  3 :
return G__75113__75117.call(this,x,y,z);
default:
return G__75113__75118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__75113.cljs$lang$maxFixedArity = 3;
G__75113.cljs$lang$applyTo = G__75113__75118.cljs$lang$applyTo;
return G__75113;
})()
});
var juxt__75109 = (function (f,g){
return (function() {
var G__75122 = null;
var G__75122__75123 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__75122__75124 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__75122__75125 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__75122__75126 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__75122__75127 = (function() { 
var G__75129__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__75129 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75129__delegate.call(this, x, y, z, args);
};
G__75129.cljs$lang$maxFixedArity = 3;
G__75129.cljs$lang$applyTo = (function (arglist__75130){
var x = cljs.core.first(arglist__75130);
var y = cljs.core.first(cljs.core.next(arglist__75130));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75130)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75130)));
return G__75129__delegate.call(this, x, y, z, args);
});
return G__75129;
})()
;
G__75122 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__75122__75123.call(this);
case  1 :
return G__75122__75124.call(this,x);
case  2 :
return G__75122__75125.call(this,x,y);
case  3 :
return G__75122__75126.call(this,x,y,z);
default:
return G__75122__75127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__75122.cljs$lang$maxFixedArity = 3;
G__75122.cljs$lang$applyTo = G__75122__75127.cljs$lang$applyTo;
return G__75122;
})()
});
var juxt__75110 = (function (f,g,h){
return (function() {
var G__75131 = null;
var G__75131__75132 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__75131__75133 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__75131__75134 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__75131__75135 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__75131__75136 = (function() { 
var G__75138__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__75138 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75138__delegate.call(this, x, y, z, args);
};
G__75138.cljs$lang$maxFixedArity = 3;
G__75138.cljs$lang$applyTo = (function (arglist__75139){
var x = cljs.core.first(arglist__75139);
var y = cljs.core.first(cljs.core.next(arglist__75139));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75139)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75139)));
return G__75138__delegate.call(this, x, y, z, args);
});
return G__75138;
})()
;
G__75131 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__75131__75132.call(this);
case  1 :
return G__75131__75133.call(this,x);
case  2 :
return G__75131__75134.call(this,x,y);
case  3 :
return G__75131__75135.call(this,x,y,z);
default:
return G__75131__75136.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__75131.cljs$lang$maxFixedArity = 3;
G__75131.cljs$lang$applyTo = G__75131__75136.cljs$lang$applyTo;
return G__75131;
})()
});
var juxt__75111 = (function() { 
var G__75140__delegate = function (f,g,h,fs){
var fs__75107 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__75141 = null;
var G__75141__75142 = (function (){
return cljs.core.reduce.call(null,(function (p1__75090_SHARP_,p2__75091_SHARP_){
return cljs.core.conj.call(null,p1__75090_SHARP_,p2__75091_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__75107);
});
var G__75141__75143 = (function (x){
return cljs.core.reduce.call(null,(function (p1__75092_SHARP_,p2__75093_SHARP_){
return cljs.core.conj.call(null,p1__75092_SHARP_,p2__75093_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__75107);
});
var G__75141__75144 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__75094_SHARP_,p2__75095_SHARP_){
return cljs.core.conj.call(null,p1__75094_SHARP_,p2__75095_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__75107);
});
var G__75141__75145 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__75096_SHARP_,p2__75097_SHARP_){
return cljs.core.conj.call(null,p1__75096_SHARP_,p2__75097_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__75107);
});
var G__75141__75146 = (function() { 
var G__75148__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__75098_SHARP_,p2__75099_SHARP_){
return cljs.core.conj.call(null,p1__75098_SHARP_,cljs.core.apply.call(null,p2__75099_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__75107);
};
var G__75148 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75148__delegate.call(this, x, y, z, args);
};
G__75148.cljs$lang$maxFixedArity = 3;
G__75148.cljs$lang$applyTo = (function (arglist__75149){
var x = cljs.core.first(arglist__75149);
var y = cljs.core.first(cljs.core.next(arglist__75149));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75149)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75149)));
return G__75148__delegate.call(this, x, y, z, args);
});
return G__75148;
})()
;
G__75141 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__75141__75142.call(this);
case  1 :
return G__75141__75143.call(this,x);
case  2 :
return G__75141__75144.call(this,x,y);
case  3 :
return G__75141__75145.call(this,x,y,z);
default:
return G__75141__75146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__75141.cljs$lang$maxFixedArity = 3;
G__75141.cljs$lang$applyTo = G__75141__75146.cljs$lang$applyTo;
return G__75141;
})()
};
var G__75140 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75140__delegate.call(this, f, g, h, fs);
};
G__75140.cljs$lang$maxFixedArity = 3;
G__75140.cljs$lang$applyTo = (function (arglist__75150){
var f = cljs.core.first(arglist__75150);
var g = cljs.core.first(cljs.core.next(arglist__75150));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75150)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__75150)));
return G__75140__delegate.call(this, f, g, h, fs);
});
return G__75140;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__75108.call(this,f);
case  2 :
return juxt__75109.call(this,f,g);
case  3 :
return juxt__75110.call(this,f,g,h);
default:
return juxt__75111.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__75111.cljs$lang$applyTo;
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
var dorun__75152 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__75155 = cljs.core.next.call(null,coll);
coll = G__75155;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__75153 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____75151 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____75151))
{return (n > 0);
} else
{return and__3546__auto____75151;
}
})()))
{{
var G__75156 = (n - 1);
var G__75157 = cljs.core.next.call(null,coll);
n = G__75156;
coll = G__75157;
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
return dorun__75152.call(this,n);
case  2 :
return dorun__75153.call(this,n,coll);
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
var doall__75158 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__75159 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__75158.call(this,n);
case  2 :
return doall__75159.call(this,n,coll);
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
var matches__75161 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__75161),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__75161),1)))
{return cljs.core.first.call(null,matches__75161);
} else
{return cljs.core.vec.call(null,matches__75161);
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
var matches__75162 = re.exec(s);

if(cljs.core.truth_((matches__75162 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__75162),1)))
{return cljs.core.first.call(null,matches__75162);
} else
{return cljs.core.vec.call(null,matches__75162);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__75163 = cljs.core.re_find.call(null,re,s);
var match_idx__75164 = s.search(re);
var match_str__75165 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__75163))?cljs.core.first.call(null,match_data__75163):match_data__75163);
var post_match__75166 = cljs.core.subs.call(null,s,(match_idx__75164 + cljs.core.count.call(null,match_str__75165)));

if(cljs.core.truth_(match_data__75163))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__75163,re_seq.call(null,re,post_match__75166));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__75168__75169 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___75170 = cljs.core.nth.call(null,vec__75168__75169,0,null);
var flags__75171 = cljs.core.nth.call(null,vec__75168__75169,1,null);
var pattern__75172 = cljs.core.nth.call(null,vec__75168__75169,2,null);

return (new RegExp(pattern__75172,flags__75171));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__75167_SHARP_){
return print_one.call(null,p1__75167_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____75173 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____75173))
{var and__3546__auto____75177 = (function (){var x__450__auto____75174 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____75175 = x__450__auto____75174;

if(cljs.core.truth_(and__3546__auto____75175))
{var and__3546__auto____75176 = x__450__auto____75174.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____75176))
{return cljs.core.not.call(null,x__450__auto____75174.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____75176;
}
} else
{return and__3546__auto____75175;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____75174);
}
})();

if(cljs.core.truth_(and__3546__auto____75177))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____75177;
}
} else
{return and__3546__auto____75173;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____75178 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____75179 = x__450__auto____75178;

if(cljs.core.truth_(and__3546__auto____75179))
{var and__3546__auto____75180 = x__450__auto____75178.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____75180))
{return cljs.core.not.call(null,x__450__auto____75178.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____75180;
}
} else
{return and__3546__auto____75179;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____75178);
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
var first_obj__75181 = cljs.core.first.call(null,objs);
var sb__75182 = (new goog.string.StringBuffer());

var G__75183__75184 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__75183__75184))
{var obj__75185 = cljs.core.first.call(null,G__75183__75184);
var G__75183__75186 = G__75183__75184;

while(true){
if(cljs.core.truth_((obj__75185 === first_obj__75181)))
{} else
{sb__75182.append(" ");
}
var G__75187__75188 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__75185,opts));

if(cljs.core.truth_(G__75187__75188))
{var string__75189 = cljs.core.first.call(null,G__75187__75188);
var G__75187__75190 = G__75187__75188;

while(true){
sb__75182.append(string__75189);
var temp__3698__auto____75191 = cljs.core.next.call(null,G__75187__75190);

if(cljs.core.truth_(temp__3698__auto____75191))
{var G__75187__75192 = temp__3698__auto____75191;

{
var G__75195 = cljs.core.first.call(null,G__75187__75192);
var G__75196 = G__75187__75192;
string__75189 = G__75195;
G__75187__75190 = G__75196;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____75193 = cljs.core.next.call(null,G__75183__75186);

if(cljs.core.truth_(temp__3698__auto____75193))
{var G__75183__75194 = temp__3698__auto____75193;

{
var G__75197 = cljs.core.first.call(null,G__75183__75194);
var G__75198 = G__75183__75194;
obj__75185 = G__75197;
G__75183__75186 = G__75198;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__75182);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__75199 = cljs.core.first.call(null,objs);

var G__75200__75201 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__75200__75201))
{var obj__75202 = cljs.core.first.call(null,G__75200__75201);
var G__75200__75203 = G__75200__75201;

while(true){
if(cljs.core.truth_((obj__75202 === first_obj__75199)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__75204__75205 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__75202,opts));

if(cljs.core.truth_(G__75204__75205))
{var string__75206 = cljs.core.first.call(null,G__75204__75205);
var G__75204__75207 = G__75204__75205;

while(true){
cljs.core.string_print.call(null,string__75206);
var temp__3698__auto____75208 = cljs.core.next.call(null,G__75204__75207);

if(cljs.core.truth_(temp__3698__auto____75208))
{var G__75204__75209 = temp__3698__auto____75208;

{
var G__75212 = cljs.core.first.call(null,G__75204__75209);
var G__75213 = G__75204__75209;
string__75206 = G__75212;
G__75204__75207 = G__75213;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____75210 = cljs.core.next.call(null,G__75200__75203);

if(cljs.core.truth_(temp__3698__auto____75210))
{var G__75200__75211 = temp__3698__auto____75210;

{
var G__75214 = cljs.core.first.call(null,G__75200__75211);
var G__75215 = G__75200__75211;
obj__75202 = G__75214;
G__75200__75203 = G__75215;
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
pr_str.cljs$lang$applyTo = (function (arglist__75216){
var objs = cljs.core.seq( arglist__75216 );;
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
pr.cljs$lang$applyTo = (function (arglist__75217){
var objs = cljs.core.seq( arglist__75217 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__75218){
var objs = cljs.core.seq( arglist__75218 );;
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
println.cljs$lang$applyTo = (function (arglist__75219){
var objs = cljs.core.seq( arglist__75219 );;
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
prn.cljs$lang$applyTo = (function (arglist__75220){
var objs = cljs.core.seq( arglist__75220 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__75221 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__75221,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____75222 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____75222))
{var nspc__75223 = temp__3698__auto____75222;

return cljs.core.str.call(null,nspc__75223,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____75224 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____75224))
{var nspc__75225 = temp__3698__auto____75224;

return cljs.core.str.call(null,nspc__75225,"\/");
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
var pr_pair__75226 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__75226,"{",", ","}",opts,coll);
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
var this__75227 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__75228 = this;
var G__75229__75230 = cljs.core.seq.call(null,this__75228.watches);

if(cljs.core.truth_(G__75229__75230))
{var G__75232__75234 = cljs.core.first.call(null,G__75229__75230);
var vec__75233__75235 = G__75232__75234;
var key__75236 = cljs.core.nth.call(null,vec__75233__75235,0,null);
var f__75237 = cljs.core.nth.call(null,vec__75233__75235,1,null);
var G__75229__75238 = G__75229__75230;

var G__75232__75239 = G__75232__75234;
var G__75229__75240 = G__75229__75238;

while(true){
var vec__75241__75242 = G__75232__75239;
var key__75243 = cljs.core.nth.call(null,vec__75241__75242,0,null);
var f__75244 = cljs.core.nth.call(null,vec__75241__75242,1,null);
var G__75229__75245 = G__75229__75240;

f__75244.call(null,key__75243,this$,oldval,newval);
var temp__3698__auto____75246 = cljs.core.next.call(null,G__75229__75245);

if(cljs.core.truth_(temp__3698__auto____75246))
{var G__75229__75247 = temp__3698__auto____75246;

{
var G__75254 = cljs.core.first.call(null,G__75229__75247);
var G__75255 = G__75229__75247;
G__75232__75239 = G__75254;
G__75229__75240 = G__75255;
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
var this__75248 = this;
return this$.watches = cljs.core.assoc.call(null,this__75248.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__75249 = this;
return this$.watches = cljs.core.dissoc.call(null,this__75249.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__75250 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__75250.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__75251 = this;
return this__75251.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__75252 = this;
return this__75252.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__75253 = this;
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
var atom__75262 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__75263 = (function() { 
var G__75265__delegate = function (x,p__75256){
var map__75257__75258 = p__75256;
var map__75257__75259 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__75257__75258))?cljs.core.apply.call(null,cljs.core.hash_map,map__75257__75258):map__75257__75258);
var validator__75260 = cljs.core.get.call(null,map__75257__75259,"\uFDD0'validator");
var meta__75261 = cljs.core.get.call(null,map__75257__75259,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__75261,validator__75260,null));
};
var G__75265 = function (x,var_args){
var p__75256 = null;
if (goog.isDef(var_args)) {
  p__75256 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__75265__delegate.call(this, x, p__75256);
};
G__75265.cljs$lang$maxFixedArity = 1;
G__75265.cljs$lang$applyTo = (function (arglist__75266){
var x = cljs.core.first(arglist__75266);
var p__75256 = cljs.core.rest(arglist__75266);
return G__75265__delegate.call(this, x, p__75256);
});
return G__75265;
})()
;
atom = function(x,var_args){
var p__75256 = var_args;
switch(arguments.length){
case  1 :
return atom__75262.call(this,x);
default:
return atom__75263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__75263.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____75267 = a.validator;

if(cljs.core.truth_(temp__3698__auto____75267))
{var validate__75268 = temp__3698__auto____75267;

if(cljs.core.truth_(validate__75268.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__75269 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__75269,new_value);
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
var swap_BANG___75270 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___75271 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___75272 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___75273 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___75274 = (function() { 
var G__75276__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__75276 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__75276__delegate.call(this, a, f, x, y, z, more);
};
G__75276.cljs$lang$maxFixedArity = 5;
G__75276.cljs$lang$applyTo = (function (arglist__75277){
var a = cljs.core.first(arglist__75277);
var f = cljs.core.first(cljs.core.next(arglist__75277));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__75277)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__75277))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__75277)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__75277)))));
return G__75276__delegate.call(this, a, f, x, y, z, more);
});
return G__75276;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___75270.call(this,a,f);
case  3 :
return swap_BANG___75271.call(this,a,f,x);
case  4 :
return swap_BANG___75272.call(this,a,f,x,y);
case  5 :
return swap_BANG___75273.call(this,a,f,x,y,z);
default:
return swap_BANG___75274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___75274.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__75278){
var iref = cljs.core.first(arglist__75278);
var f = cljs.core.first(cljs.core.next(arglist__75278));
var args = cljs.core.rest(cljs.core.next(arglist__75278));
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
var gensym__75279 = (function (){
return gensym.call(null,"G__");
});
var gensym__75280 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__75279.call(this);
case  1 :
return gensym__75280.call(this,prefix_string);
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
var this__75282 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__75282.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__75283 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__75283.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__75283.state,this__75283.f);
}
return cljs.core.deref.call(null,this__75283.state);
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
delay.cljs$lang$applyTo = (function (arglist__75284){
var body = cljs.core.seq( arglist__75284 );;
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
var map__75285__75286 = options;
var map__75285__75287 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__75285__75286))?cljs.core.apply.call(null,cljs.core.hash_map,map__75285__75286):map__75285__75286);
var keywordize_keys__75288 = cljs.core.get.call(null,map__75285__75287,"\uFDD0'keywordize-keys");
var keyfn__75289 = (cljs.core.truth_(keywordize_keys__75288)?cljs.core.keyword:cljs.core.str);
var f__75295 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____75294 = (function iter__75290(s__75291){
return (new cljs.core.LazySeq(null,false,(function (){
var s__75291__75292 = s__75291;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__75291__75292)))
{var k__75293 = cljs.core.first.call(null,s__75291__75292);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__75289.call(null,k__75293),thisfn.call(null,(x[k__75293]))]),iter__75290.call(null,cljs.core.rest.call(null,s__75291__75292)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____75294.call(null,cljs.core.js_keys.call(null,x));
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

return f__75295.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__75296){
var x = cljs.core.first(arglist__75296);
var options = cljs.core.rest(arglist__75296);
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
var mem__75297 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__75301__delegate = function (args){
var temp__3695__auto____75298 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__75297),args);

if(cljs.core.truth_(temp__3695__auto____75298))
{var v__75299 = temp__3695__auto____75298;

return v__75299;
} else
{var ret__75300 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__75297,cljs.core.assoc,args,ret__75300);
return ret__75300;
}
};
var G__75301 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75301__delegate.call(this, args);
};
G__75301.cljs$lang$maxFixedArity = 0;
G__75301.cljs$lang$applyTo = (function (arglist__75302){
var args = cljs.core.seq( arglist__75302 );;
return G__75301__delegate.call(this, args);
});
return G__75301;
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
var trampoline__75304 = (function (f){
while(true){
var ret__75303 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__75303)))
{{
var G__75307 = ret__75303;
f = G__75307;
continue;
}
} else
{return ret__75303;
}
break;
}
});
var trampoline__75305 = (function() { 
var G__75308__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__75308 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__75308__delegate.call(this, f, args);
};
G__75308.cljs$lang$maxFixedArity = 1;
G__75308.cljs$lang$applyTo = (function (arglist__75309){
var f = cljs.core.first(arglist__75309);
var args = cljs.core.rest(arglist__75309);
return G__75308__delegate.call(this, f, args);
});
return G__75308;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__75304.call(this,f);
default:
return trampoline__75305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__75305.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__75310 = (function (){
return rand.call(null,1);
});
var rand__75311 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__75310.call(this);
case  1 :
return rand__75311.call(this,n);
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
var k__75313 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__75313,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__75313,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___75322 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___75323 = (function (h,child,parent){
var or__3548__auto____75314 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____75314))
{return or__3548__auto____75314;
} else
{var or__3548__auto____75315 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____75315))
{return or__3548__auto____75315;
} else
{var and__3546__auto____75316 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____75316))
{var and__3546__auto____75317 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____75317))
{var and__3546__auto____75318 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____75318))
{var ret__75319 = true;
var i__75320 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____75321 = cljs.core.not.call(null,ret__75319);

if(cljs.core.truth_(or__3548__auto____75321))
{return or__3548__auto____75321;
} else
{return cljs.core._EQ_.call(null,i__75320,cljs.core.count.call(null,parent));
}
})()))
{return ret__75319;
} else
{{
var G__75325 = isa_QMARK_.call(null,h,child.call(null,i__75320),parent.call(null,i__75320));
var G__75326 = (i__75320 + 1);
ret__75319 = G__75325;
i__75320 = G__75326;
continue;
}
}
break;
}
} else
{return and__3546__auto____75318;
}
} else
{return and__3546__auto____75317;
}
} else
{return and__3546__auto____75316;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___75322.call(this,h,child);
case  3 :
return isa_QMARK___75323.call(this,h,child,parent);
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
var parents__75327 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__75328 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__75327.call(this,h);
case  2 :
return parents__75328.call(this,h,tag);
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
var ancestors__75330 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__75331 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__75330.call(this,h);
case  2 :
return ancestors__75331.call(this,h,tag);
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
var descendants__75333 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__75334 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__75333.call(this,h);
case  2 :
return descendants__75334.call(this,h,tag);
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
var derive__75344 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__75345 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__75339 = "\uFDD0'parents".call(null,h);
var td__75340 = "\uFDD0'descendants".call(null,h);
var ta__75341 = "\uFDD0'ancestors".call(null,h);
var tf__75342 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____75343 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__75339.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__75341.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__75341.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__75339,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__75342.call(null,"\uFDD0'ancestors".call(null,h),tag,td__75340,parent,ta__75341),"\uFDD0'descendants":tf__75342.call(null,"\uFDD0'descendants".call(null,h),parent,ta__75341,tag,td__75340)});
})());

if(cljs.core.truth_(or__3548__auto____75343))
{return or__3548__auto____75343;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__75344.call(this,h,tag);
case  3 :
return derive__75345.call(this,h,tag,parent);
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
var underive__75351 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__75352 = (function (h,tag,parent){
var parentMap__75347 = "\uFDD0'parents".call(null,h);
var childsParents__75348 = (cljs.core.truth_(parentMap__75347.call(null,tag))?cljs.core.disj.call(null,parentMap__75347.call(null,tag),parent):cljs.core.set([]));
var newParents__75349 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__75348))?cljs.core.assoc.call(null,parentMap__75347,tag,childsParents__75348):cljs.core.dissoc.call(null,parentMap__75347,tag));
var deriv_seq__75350 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__75336_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__75336_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__75336_SHARP_),cljs.core.second.call(null,p1__75336_SHARP_)));
}),cljs.core.seq.call(null,newParents__75349)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__75347.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__75337_SHARP_,p2__75338_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__75337_SHARP_,p2__75338_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__75350));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__75351.call(this,h,tag);
case  3 :
return underive__75352.call(this,h,tag,parent);
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
var xprefs__75354 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____75356 = (cljs.core.truth_((function (){var and__3546__auto____75355 = xprefs__75354;

if(cljs.core.truth_(and__3546__auto____75355))
{return xprefs__75354.call(null,y);
} else
{return and__3546__auto____75355;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____75356))
{return or__3548__auto____75356;
} else
{var or__3548__auto____75358 = (function (){var ps__75357 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__75357) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__75357),prefer_table)))
{} else
{}
{
var G__75361 = cljs.core.rest.call(null,ps__75357);
ps__75357 = G__75361;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____75358))
{return or__3548__auto____75358;
} else
{var or__3548__auto____75360 = (function (){var ps__75359 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__75359) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__75359),y,prefer_table)))
{} else
{}
{
var G__75362 = cljs.core.rest.call(null,ps__75359);
ps__75359 = G__75362;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____75360))
{return or__3548__auto____75360;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____75363 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____75363))
{return or__3548__auto____75363;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__75372 = cljs.core.reduce.call(null,(function (be,p__75364){
var vec__75365__75366 = p__75364;
var k__75367 = cljs.core.nth.call(null,vec__75365__75366,0,null);
var ___75368 = cljs.core.nth.call(null,vec__75365__75366,1,null);
var e__75369 = vec__75365__75366;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__75367)))
{var be2__75371 = (cljs.core.truth_((function (){var or__3548__auto____75370 = (be === null);

if(cljs.core.truth_(or__3548__auto____75370))
{return or__3548__auto____75370;
} else
{return cljs.core.dominates.call(null,k__75367,cljs.core.first.call(null,be),prefer_table);
}
})())?e__75369:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__75371),k__75367,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__75367," and ",cljs.core.first.call(null,be2__75371),", and neither is preferred")));
}
return be2__75371;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__75372))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__75372));
return cljs.core.second.call(null,best_entry__75372);
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
if(cljs.core.truth_((function (){var and__3546__auto____75373 = mf;

if(cljs.core.truth_(and__3546__auto____75373))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____75373;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____75374 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____75374))
{return or__3548__auto____75374;
} else
{var or__3548__auto____75375 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____75375))
{return or__3548__auto____75375;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____75376 = mf;

if(cljs.core.truth_(and__3546__auto____75376))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____75376;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____75377 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____75377))
{return or__3548__auto____75377;
} else
{var or__3548__auto____75378 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____75378))
{return or__3548__auto____75378;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____75379 = mf;

if(cljs.core.truth_(and__3546__auto____75379))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____75379;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____75380 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____75380))
{return or__3548__auto____75380;
} else
{var or__3548__auto____75381 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____75381))
{return or__3548__auto____75381;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____75382 = mf;

if(cljs.core.truth_(and__3546__auto____75382))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____75382;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____75383 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____75383))
{return or__3548__auto____75383;
} else
{var or__3548__auto____75384 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____75384))
{return or__3548__auto____75384;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____75385 = mf;

if(cljs.core.truth_(and__3546__auto____75385))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____75385;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____75386 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____75386))
{return or__3548__auto____75386;
} else
{var or__3548__auto____75387 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____75387))
{return or__3548__auto____75387;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____75388 = mf;

if(cljs.core.truth_(and__3546__auto____75388))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____75388;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____75389 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____75389))
{return or__3548__auto____75389;
} else
{var or__3548__auto____75390 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____75390))
{return or__3548__auto____75390;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____75391 = mf;

if(cljs.core.truth_(and__3546__auto____75391))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____75391;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____75392 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____75392))
{return or__3548__auto____75392;
} else
{var or__3548__auto____75393 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____75393))
{return or__3548__auto____75393;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____75394 = mf;

if(cljs.core.truth_(and__3546__auto____75394))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____75394;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____75395 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____75395))
{return or__3548__auto____75395;
} else
{var or__3548__auto____75396 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____75396))
{return or__3548__auto____75396;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__75397 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__75398 = cljs.core._get_method.call(null,mf,dispatch_val__75397);

if(cljs.core.truth_(target_fn__75398))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__75397)));
}
return cljs.core.apply.call(null,target_fn__75398,args);
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
var this__75399 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__75400 = this;
cljs.core.swap_BANG_.call(null,this__75400.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__75400.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__75400.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__75400.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__75401 = this;
cljs.core.swap_BANG_.call(null,this__75401.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__75401.method_cache,this__75401.method_table,this__75401.cached_hierarchy,this__75401.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__75402 = this;
cljs.core.swap_BANG_.call(null,this__75402.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__75402.method_cache,this__75402.method_table,this__75402.cached_hierarchy,this__75402.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__75403 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__75403.cached_hierarchy),cljs.core.deref.call(null,this__75403.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__75403.method_cache,this__75403.method_table,this__75403.cached_hierarchy,this__75403.hierarchy);
}
var temp__3695__auto____75404 = cljs.core.deref.call(null,this__75403.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____75404))
{var target_fn__75405 = temp__3695__auto____75404;

return target_fn__75405;
} else
{var temp__3695__auto____75406 = cljs.core.find_and_cache_best_method.call(null,this__75403.name,dispatch_val,this__75403.hierarchy,this__75403.method_table,this__75403.prefer_table,this__75403.method_cache,this__75403.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____75406))
{var target_fn__75407 = temp__3695__auto____75406;

return target_fn__75407;
} else
{return cljs.core.deref.call(null,this__75403.method_table).call(null,this__75403.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__75408 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__75408.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__75408.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__75408.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__75408.method_cache,this__75408.method_table,this__75408.cached_hierarchy,this__75408.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__75409 = this;
return cljs.core.deref.call(null,this__75409.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__75410 = this;
return cljs.core.deref.call(null,this__75410.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__75411 = this;
return cljs.core.do_dispatch.call(null,mf,this__75411.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__75412__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__75412 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__75412__delegate.call(this, _, args);
};
G__75412.cljs$lang$maxFixedArity = 1;
G__75412.cljs$lang$applyTo = (function (arglist__75413){
var _ = cljs.core.first(arglist__75413);
var args = cljs.core.rest(arglist__75413);
return G__75412__delegate.call(this, _, args);
});
return G__75412;
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
