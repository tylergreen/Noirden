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
var or__3548__auto____240518 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____240518))
{return or__3548__auto____240518;
} else
{var or__3548__auto____240519 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____240519))
{return or__3548__auto____240519;
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
var _invoke__240583 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____240520 = this$;

if(cljs.core.truth_(and__3546__auto____240520))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240520;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____240521 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240521))
{return or__3548__auto____240521;
} else
{var or__3548__auto____240522 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240522))
{return or__3548__auto____240522;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__240584 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____240523 = this$;

if(cljs.core.truth_(and__3546__auto____240523))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240523;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____240524 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240524))
{return or__3548__auto____240524;
} else
{var or__3548__auto____240525 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240525))
{return or__3548__auto____240525;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__240585 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____240526 = this$;

if(cljs.core.truth_(and__3546__auto____240526))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240526;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____240527 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240527))
{return or__3548__auto____240527;
} else
{var or__3548__auto____240528 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240528))
{return or__3548__auto____240528;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__240586 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____240529 = this$;

if(cljs.core.truth_(and__3546__auto____240529))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240529;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____240530 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240530))
{return or__3548__auto____240530;
} else
{var or__3548__auto____240531 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240531))
{return or__3548__auto____240531;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__240587 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____240532 = this$;

if(cljs.core.truth_(and__3546__auto____240532))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240532;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____240533 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240533))
{return or__3548__auto____240533;
} else
{var or__3548__auto____240534 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240534))
{return or__3548__auto____240534;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__240588 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____240535 = this$;

if(cljs.core.truth_(and__3546__auto____240535))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240535;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____240536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240536))
{return or__3548__auto____240536;
} else
{var or__3548__auto____240537 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240537))
{return or__3548__auto____240537;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__240589 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____240538 = this$;

if(cljs.core.truth_(and__3546__auto____240538))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240538;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____240539 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240539))
{return or__3548__auto____240539;
} else
{var or__3548__auto____240540 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240540))
{return or__3548__auto____240540;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__240590 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____240541 = this$;

if(cljs.core.truth_(and__3546__auto____240541))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240541;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____240542 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240542))
{return or__3548__auto____240542;
} else
{var or__3548__auto____240543 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240543))
{return or__3548__auto____240543;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__240591 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____240544 = this$;

if(cljs.core.truth_(and__3546__auto____240544))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240544;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____240545 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240545))
{return or__3548__auto____240545;
} else
{var or__3548__auto____240546 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240546))
{return or__3548__auto____240546;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__240592 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____240547 = this$;

if(cljs.core.truth_(and__3546__auto____240547))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240547;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____240548 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240548))
{return or__3548__auto____240548;
} else
{var or__3548__auto____240549 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240549))
{return or__3548__auto____240549;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__240593 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____240550 = this$;

if(cljs.core.truth_(and__3546__auto____240550))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240550;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____240551 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240551))
{return or__3548__auto____240551;
} else
{var or__3548__auto____240552 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240552))
{return or__3548__auto____240552;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__240594 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____240553 = this$;

if(cljs.core.truth_(and__3546__auto____240553))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240553;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____240554 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240554))
{return or__3548__auto____240554;
} else
{var or__3548__auto____240555 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240555))
{return or__3548__auto____240555;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__240595 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____240556 = this$;

if(cljs.core.truth_(and__3546__auto____240556))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240556;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____240557 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240557))
{return or__3548__auto____240557;
} else
{var or__3548__auto____240558 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240558))
{return or__3548__auto____240558;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__240596 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____240559 = this$;

if(cljs.core.truth_(and__3546__auto____240559))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240559;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____240560 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240560))
{return or__3548__auto____240560;
} else
{var or__3548__auto____240561 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240561))
{return or__3548__auto____240561;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__240597 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____240562 = this$;

if(cljs.core.truth_(and__3546__auto____240562))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240562;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____240563 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240563))
{return or__3548__auto____240563;
} else
{var or__3548__auto____240564 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240564))
{return or__3548__auto____240564;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__240598 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____240565 = this$;

if(cljs.core.truth_(and__3546__auto____240565))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240565;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____240566 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240566))
{return or__3548__auto____240566;
} else
{var or__3548__auto____240567 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240567))
{return or__3548__auto____240567;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__240599 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____240568 = this$;

if(cljs.core.truth_(and__3546__auto____240568))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240568;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____240569 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240569))
{return or__3548__auto____240569;
} else
{var or__3548__auto____240570 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240570))
{return or__3548__auto____240570;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__240600 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____240571 = this$;

if(cljs.core.truth_(and__3546__auto____240571))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240571;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____240572 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240572))
{return or__3548__auto____240572;
} else
{var or__3548__auto____240573 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240573))
{return or__3548__auto____240573;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__240601 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____240574 = this$;

if(cljs.core.truth_(and__3546__auto____240574))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240574;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____240575 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240575))
{return or__3548__auto____240575;
} else
{var or__3548__auto____240576 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240576))
{return or__3548__auto____240576;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__240602 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____240577 = this$;

if(cljs.core.truth_(and__3546__auto____240577))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240577;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____240578 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240578))
{return or__3548__auto____240578;
} else
{var or__3548__auto____240579 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240579))
{return or__3548__auto____240579;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__240603 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____240580 = this$;

if(cljs.core.truth_(and__3546__auto____240580))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____240580;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____240581 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240581))
{return or__3548__auto____240581;
} else
{var or__3548__auto____240582 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____240582))
{return or__3548__auto____240582;
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
return _invoke__240583.call(this,this$);
case  2 :
return _invoke__240584.call(this,this$,a);
case  3 :
return _invoke__240585.call(this,this$,a,b);
case  4 :
return _invoke__240586.call(this,this$,a,b,c);
case  5 :
return _invoke__240587.call(this,this$,a,b,c,d);
case  6 :
return _invoke__240588.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__240589.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__240590.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__240591.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__240592.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__240593.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__240594.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__240595.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__240596.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__240597.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__240598.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__240599.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__240600.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__240601.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__240602.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__240603.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____240605 = coll;

if(cljs.core.truth_(and__3546__auto____240605))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____240605;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____240606 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240606))
{return or__3548__auto____240606;
} else
{var or__3548__auto____240607 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____240607))
{return or__3548__auto____240607;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____240608 = coll;

if(cljs.core.truth_(and__3546__auto____240608))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____240608;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____240609 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240609))
{return or__3548__auto____240609;
} else
{var or__3548__auto____240610 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____240610))
{return or__3548__auto____240610;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____240611 = coll;

if(cljs.core.truth_(and__3546__auto____240611))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____240611;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____240612 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240612))
{return or__3548__auto____240612;
} else
{var or__3548__auto____240613 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____240613))
{return or__3548__auto____240613;
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
var _nth__240620 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____240614 = coll;

if(cljs.core.truth_(and__3546__auto____240614))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____240614;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____240615 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240615))
{return or__3548__auto____240615;
} else
{var or__3548__auto____240616 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____240616))
{return or__3548__auto____240616;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__240621 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____240617 = coll;

if(cljs.core.truth_(and__3546__auto____240617))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____240617;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____240618 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240618))
{return or__3548__auto____240618;
} else
{var or__3548__auto____240619 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____240619))
{return or__3548__auto____240619;
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
return _nth__240620.call(this,coll,n);
case  3 :
return _nth__240621.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____240623 = coll;

if(cljs.core.truth_(and__3546__auto____240623))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____240623;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____240624 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240624))
{return or__3548__auto____240624;
} else
{var or__3548__auto____240625 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____240625))
{return or__3548__auto____240625;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____240626 = coll;

if(cljs.core.truth_(and__3546__auto____240626))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____240626;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____240627 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240627))
{return or__3548__auto____240627;
} else
{var or__3548__auto____240628 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____240628))
{return or__3548__auto____240628;
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
var _lookup__240635 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____240629 = o;

if(cljs.core.truth_(and__3546__auto____240629))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____240629;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____240630 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240630))
{return or__3548__auto____240630;
} else
{var or__3548__auto____240631 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____240631))
{return or__3548__auto____240631;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__240636 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____240632 = o;

if(cljs.core.truth_(and__3546__auto____240632))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____240632;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____240633 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240633))
{return or__3548__auto____240633;
} else
{var or__3548__auto____240634 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____240634))
{return or__3548__auto____240634;
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
return _lookup__240635.call(this,o,k);
case  3 :
return _lookup__240636.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____240638 = coll;

if(cljs.core.truth_(and__3546__auto____240638))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____240638;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____240639 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240639))
{return or__3548__auto____240639;
} else
{var or__3548__auto____240640 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____240640))
{return or__3548__auto____240640;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____240641 = coll;

if(cljs.core.truth_(and__3546__auto____240641))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____240641;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____240642 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240642))
{return or__3548__auto____240642;
} else
{var or__3548__auto____240643 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____240643))
{return or__3548__auto____240643;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____240644 = coll;

if(cljs.core.truth_(and__3546__auto____240644))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____240644;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____240645 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240645))
{return or__3548__auto____240645;
} else
{var or__3548__auto____240646 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____240646))
{return or__3548__auto____240646;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____240647 = coll;

if(cljs.core.truth_(and__3546__auto____240647))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____240647;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____240648 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240648))
{return or__3548__auto____240648;
} else
{var or__3548__auto____240649 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____240649))
{return or__3548__auto____240649;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____240650 = coll;

if(cljs.core.truth_(and__3546__auto____240650))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____240650;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____240651 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240651))
{return or__3548__auto____240651;
} else
{var or__3548__auto____240652 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____240652))
{return or__3548__auto____240652;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____240653 = coll;

if(cljs.core.truth_(and__3546__auto____240653))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____240653;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____240654 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240654))
{return or__3548__auto____240654;
} else
{var or__3548__auto____240655 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____240655))
{return or__3548__auto____240655;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____240656 = coll;

if(cljs.core.truth_(and__3546__auto____240656))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____240656;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____240657 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240657))
{return or__3548__auto____240657;
} else
{var or__3548__auto____240658 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____240658))
{return or__3548__auto____240658;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____240659 = o;

if(cljs.core.truth_(and__3546__auto____240659))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____240659;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____240660 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240660))
{return or__3548__auto____240660;
} else
{var or__3548__auto____240661 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____240661))
{return or__3548__auto____240661;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____240662 = o;

if(cljs.core.truth_(and__3546__auto____240662))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____240662;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____240663 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240663))
{return or__3548__auto____240663;
} else
{var or__3548__auto____240664 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____240664))
{return or__3548__auto____240664;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____240665 = o;

if(cljs.core.truth_(and__3546__auto____240665))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____240665;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____240666 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240666))
{return or__3548__auto____240666;
} else
{var or__3548__auto____240667 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____240667))
{return or__3548__auto____240667;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____240668 = o;

if(cljs.core.truth_(and__3546__auto____240668))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____240668;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____240669 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240669))
{return or__3548__auto____240669;
} else
{var or__3548__auto____240670 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____240670))
{return or__3548__auto____240670;
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
var _reduce__240677 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____240671 = coll;

if(cljs.core.truth_(and__3546__auto____240671))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____240671;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____240672 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240672))
{return or__3548__auto____240672;
} else
{var or__3548__auto____240673 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____240673))
{return or__3548__auto____240673;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__240678 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____240674 = coll;

if(cljs.core.truth_(and__3546__auto____240674))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____240674;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____240675 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____240675))
{return or__3548__auto____240675;
} else
{var or__3548__auto____240676 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____240676))
{return or__3548__auto____240676;
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
return _reduce__240677.call(this,coll,f);
case  3 :
return _reduce__240678.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____240680 = o;

if(cljs.core.truth_(and__3546__auto____240680))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____240680;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____240681 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240681))
{return or__3548__auto____240681;
} else
{var or__3548__auto____240682 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____240682))
{return or__3548__auto____240682;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____240683 = o;

if(cljs.core.truth_(and__3546__auto____240683))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____240683;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____240684 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240684))
{return or__3548__auto____240684;
} else
{var or__3548__auto____240685 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____240685))
{return or__3548__auto____240685;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____240686 = o;

if(cljs.core.truth_(and__3546__auto____240686))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____240686;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____240687 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240687))
{return or__3548__auto____240687;
} else
{var or__3548__auto____240688 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____240688))
{return or__3548__auto____240688;
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
if(cljs.core.truth_((function (){var and__3546__auto____240689 = o;

if(cljs.core.truth_(and__3546__auto____240689))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____240689;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____240690 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____240690))
{return or__3548__auto____240690;
} else
{var or__3548__auto____240691 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____240691))
{return or__3548__auto____240691;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____240692 = d;

if(cljs.core.truth_(and__3546__auto____240692))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____240692;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____240693 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____240693))
{return or__3548__auto____240693;
} else
{var or__3548__auto____240694 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____240694))
{return or__3548__auto____240694;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____240695 = this$;

if(cljs.core.truth_(and__3546__auto____240695))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____240695;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____240696 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240696))
{return or__3548__auto____240696;
} else
{var or__3548__auto____240697 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____240697))
{return or__3548__auto____240697;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____240698 = this$;

if(cljs.core.truth_(and__3546__auto____240698))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____240698;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____240699 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240699))
{return or__3548__auto____240699;
} else
{var or__3548__auto____240700 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____240700))
{return or__3548__auto____240700;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____240701 = this$;

if(cljs.core.truth_(and__3546__auto____240701))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____240701;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____240702 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____240702))
{return or__3548__auto____240702;
} else
{var or__3548__auto____240703 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____240703))
{return or__3548__auto____240703;
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
var G__240704 = null;
var G__240704__240705 = (function (o,k){
return null;
});
var G__240704__240706 = (function (o,k,not_found){
return not_found;
});
G__240704 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__240704__240705.call(this,o,k);
case  3 :
return G__240704__240706.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240704;
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
var G__240708 = null;
var G__240708__240709 = (function (_,f){
return f.call(null);
});
var G__240708__240710 = (function (_,f,start){
return start;
});
G__240708 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__240708__240709.call(this,_,f);
case  3 :
return G__240708__240710.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240708;
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
var G__240712 = null;
var G__240712__240713 = (function (_,n){
return null;
});
var G__240712__240714 = (function (_,n,not_found){
return not_found;
});
G__240712 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__240712__240713.call(this,_,n);
case  3 :
return G__240712__240714.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240712;
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
var ci_reduce__240722 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__240716 = cljs.core._nth.call(null,cicoll,0);
var n__240717 = 1;

while(true){
if(cljs.core.truth_((n__240717 < cljs.core._count.call(null,cicoll))))
{{
var G__240726 = f.call(null,val__240716,cljs.core._nth.call(null,cicoll,n__240717));
var G__240727 = (n__240717 + 1);
val__240716 = G__240726;
n__240717 = G__240727;
continue;
}
} else
{return val__240716;
}
break;
}
}
});
var ci_reduce__240723 = (function (cicoll,f,val){
var val__240718 = val;
var n__240719 = 0;

while(true){
if(cljs.core.truth_((n__240719 < cljs.core._count.call(null,cicoll))))
{{
var G__240728 = f.call(null,val__240718,cljs.core._nth.call(null,cicoll,n__240719));
var G__240729 = (n__240719 + 1);
val__240718 = G__240728;
n__240719 = G__240729;
continue;
}
} else
{return val__240718;
}
break;
}
});
var ci_reduce__240724 = (function (cicoll,f,val,idx){
var val__240720 = val;
var n__240721 = idx;

while(true){
if(cljs.core.truth_((n__240721 < cljs.core._count.call(null,cicoll))))
{{
var G__240730 = f.call(null,val__240720,cljs.core._nth.call(null,cicoll,n__240721));
var G__240731 = (n__240721 + 1);
val__240720 = G__240730;
n__240721 = G__240731;
continue;
}
} else
{return val__240720;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__240722.call(this,cicoll,f);
case  3 :
return ci_reduce__240723.call(this,cicoll,f,val);
case  4 :
return ci_reduce__240724.call(this,cicoll,f,val,idx);
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
var this__240732 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__240745 = null;
var G__240745__240746 = (function (_,f){
var this__240733 = this;
return cljs.core.ci_reduce.call(null,this__240733.a,f,(this__240733.a[this__240733.i]),(this__240733.i + 1));
});
var G__240745__240747 = (function (_,f,start){
var this__240734 = this;
return cljs.core.ci_reduce.call(null,this__240734.a,f,start,this__240734.i);
});
G__240745 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__240745__240746.call(this,_,f);
case  3 :
return G__240745__240747.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240745;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__240735 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__240736 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__240749 = null;
var G__240749__240750 = (function (coll,n){
var this__240737 = this;
var i__240738 = (n + this__240737.i);

if(cljs.core.truth_((i__240738 < this__240737.a.length)))
{return (this__240737.a[i__240738]);
} else
{return null;
}
});
var G__240749__240751 = (function (coll,n,not_found){
var this__240739 = this;
var i__240740 = (n + this__240739.i);

if(cljs.core.truth_((i__240740 < this__240739.a.length)))
{return (this__240739.a[i__240740]);
} else
{return not_found;
}
});
G__240749 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__240749__240750.call(this,coll,n);
case  3 :
return G__240749__240751.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240749;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__240741 = this;
return (this__240741.a.length - this__240741.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__240742 = this;
return (this__240742.a[this__240742.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__240743 = this;
if(cljs.core.truth_(((this__240743.i + 1) < this__240743.a.length)))
{return (new cljs.core.IndexedSeq(this__240743.a,(this__240743.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__240744 = this;
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
var G__240753 = null;
var G__240753__240754 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__240753__240755 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__240753 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__240753__240754.call(this,array,f);
case  3 :
return G__240753__240755.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240753;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__240757 = null;
var G__240757__240758 = (function (array,k){
return (array[k]);
});
var G__240757__240759 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__240757 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__240757__240758.call(this,array,k);
case  3 :
return G__240757__240759.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240757;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__240761 = null;
var G__240761__240762 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__240761__240763 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__240761 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__240761__240762.call(this,array,n);
case  3 :
return G__240761__240763.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240761;
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
var temp__3698__auto____240765 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____240765))
{var s__240766 = temp__3698__auto____240765;

return cljs.core._first.call(null,s__240766);
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
var G__240767 = cljs.core.next.call(null,s);
s = G__240767;
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
var s__240768 = cljs.core.seq.call(null,x);
var n__240769 = 0;

while(true){
if(cljs.core.truth_(s__240768))
{{
var G__240770 = cljs.core.next.call(null,s__240768);
var G__240771 = (n__240769 + 1);
s__240768 = G__240770;
n__240769 = G__240771;
continue;
}
} else
{return n__240769;
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
var conj__240772 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__240773 = (function() { 
var G__240775__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__240776 = conj.call(null,coll,x);
var G__240777 = cljs.core.first.call(null,xs);
var G__240778 = cljs.core.next.call(null,xs);
coll = G__240776;
x = G__240777;
xs = G__240778;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__240775 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240775__delegate.call(this, coll, x, xs);
};
G__240775.cljs$lang$maxFixedArity = 2;
G__240775.cljs$lang$applyTo = (function (arglist__240779){
var coll = cljs.core.first(arglist__240779);
var x = cljs.core.first(cljs.core.next(arglist__240779));
var xs = cljs.core.rest(cljs.core.next(arglist__240779));
return G__240775__delegate.call(this, coll, x, xs);
});
return G__240775;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__240772.call(this,coll,x);
default:
return conj__240773.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__240773.cljs$lang$applyTo;
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
var nth__240780 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__240781 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__240780.call(this,coll,n);
case  3 :
return nth__240781.call(this,coll,n,not_found);
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
var get__240783 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__240784 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__240783.call(this,o,k);
case  3 :
return get__240784.call(this,o,k,not_found);
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
var assoc__240787 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__240788 = (function() { 
var G__240790__delegate = function (coll,k,v,kvs){
while(true){
var ret__240786 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__240791 = ret__240786;
var G__240792 = cljs.core.first.call(null,kvs);
var G__240793 = cljs.core.second.call(null,kvs);
var G__240794 = cljs.core.nnext.call(null,kvs);
coll = G__240791;
k = G__240792;
v = G__240793;
kvs = G__240794;
continue;
}
} else
{return ret__240786;
}
break;
}
};
var G__240790 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__240790__delegate.call(this, coll, k, v, kvs);
};
G__240790.cljs$lang$maxFixedArity = 3;
G__240790.cljs$lang$applyTo = (function (arglist__240795){
var coll = cljs.core.first(arglist__240795);
var k = cljs.core.first(cljs.core.next(arglist__240795));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__240795)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__240795)));
return G__240790__delegate.call(this, coll, k, v, kvs);
});
return G__240790;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__240787.call(this,coll,k,v);
default:
return assoc__240788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__240788.cljs$lang$applyTo;
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
var dissoc__240797 = (function (coll){
return coll;
});
var dissoc__240798 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__240799 = (function() { 
var G__240801__delegate = function (coll,k,ks){
while(true){
var ret__240796 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__240802 = ret__240796;
var G__240803 = cljs.core.first.call(null,ks);
var G__240804 = cljs.core.next.call(null,ks);
coll = G__240802;
k = G__240803;
ks = G__240804;
continue;
}
} else
{return ret__240796;
}
break;
}
};
var G__240801 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240801__delegate.call(this, coll, k, ks);
};
G__240801.cljs$lang$maxFixedArity = 2;
G__240801.cljs$lang$applyTo = (function (arglist__240805){
var coll = cljs.core.first(arglist__240805);
var k = cljs.core.first(cljs.core.next(arglist__240805));
var ks = cljs.core.rest(cljs.core.next(arglist__240805));
return G__240801__delegate.call(this, coll, k, ks);
});
return G__240801;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__240797.call(this,coll);
case  2 :
return dissoc__240798.call(this,coll,k);
default:
return dissoc__240799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__240799.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____240806 = o;

if(cljs.core.truth_((function (){var and__3546__auto____240807 = x__450__auto____240806;

if(cljs.core.truth_(and__3546__auto____240807))
{var and__3546__auto____240808 = x__450__auto____240806.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____240808))
{return cljs.core.not.call(null,x__450__auto____240806.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____240808;
}
} else
{return and__3546__auto____240807;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____240806);
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
var disj__240810 = (function (coll){
return coll;
});
var disj__240811 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__240812 = (function() { 
var G__240814__delegate = function (coll,k,ks){
while(true){
var ret__240809 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__240815 = ret__240809;
var G__240816 = cljs.core.first.call(null,ks);
var G__240817 = cljs.core.next.call(null,ks);
coll = G__240815;
k = G__240816;
ks = G__240817;
continue;
}
} else
{return ret__240809;
}
break;
}
};
var G__240814 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240814__delegate.call(this, coll, k, ks);
};
G__240814.cljs$lang$maxFixedArity = 2;
G__240814.cljs$lang$applyTo = (function (arglist__240818){
var coll = cljs.core.first(arglist__240818);
var k = cljs.core.first(cljs.core.next(arglist__240818));
var ks = cljs.core.rest(cljs.core.next(arglist__240818));
return G__240814__delegate.call(this, coll, k, ks);
});
return G__240814;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__240810.call(this,coll);
case  2 :
return disj__240811.call(this,coll,k);
default:
return disj__240812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__240812.cljs$lang$applyTo;
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
{var x__450__auto____240819 = x;

if(cljs.core.truth_((function (){var and__3546__auto____240820 = x__450__auto____240819;

if(cljs.core.truth_(and__3546__auto____240820))
{var and__3546__auto____240821 = x__450__auto____240819.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____240821))
{return cljs.core.not.call(null,x__450__auto____240819.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____240821;
}
} else
{return and__3546__auto____240820;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____240819);
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
{var x__450__auto____240822 = x;

if(cljs.core.truth_((function (){var and__3546__auto____240823 = x__450__auto____240822;

if(cljs.core.truth_(and__3546__auto____240823))
{var and__3546__auto____240824 = x__450__auto____240822.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____240824))
{return cljs.core.not.call(null,x__450__auto____240822.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____240824;
}
} else
{return and__3546__auto____240823;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____240822);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____240825 = x;

if(cljs.core.truth_((function (){var and__3546__auto____240826 = x__450__auto____240825;

if(cljs.core.truth_(and__3546__auto____240826))
{var and__3546__auto____240827 = x__450__auto____240825.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____240827))
{return cljs.core.not.call(null,x__450__auto____240825.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____240827;
}
} else
{return and__3546__auto____240826;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____240825);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____240828 = x;

if(cljs.core.truth_((function (){var and__3546__auto____240829 = x__450__auto____240828;

if(cljs.core.truth_(and__3546__auto____240829))
{var and__3546__auto____240830 = x__450__auto____240828.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____240830))
{return cljs.core.not.call(null,x__450__auto____240828.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____240830;
}
} else
{return and__3546__auto____240829;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____240828);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____240831 = x;

if(cljs.core.truth_((function (){var and__3546__auto____240832 = x__450__auto____240831;

if(cljs.core.truth_(and__3546__auto____240832))
{var and__3546__auto____240833 = x__450__auto____240831.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____240833))
{return cljs.core.not.call(null,x__450__auto____240831.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____240833;
}
} else
{return and__3546__auto____240832;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____240831);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____240834 = x;

if(cljs.core.truth_((function (){var and__3546__auto____240835 = x__450__auto____240834;

if(cljs.core.truth_(and__3546__auto____240835))
{var and__3546__auto____240836 = x__450__auto____240834.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____240836))
{return cljs.core.not.call(null,x__450__auto____240834.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____240836;
}
} else
{return and__3546__auto____240835;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____240834);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____240837 = x;

if(cljs.core.truth_((function (){var and__3546__auto____240838 = x__450__auto____240837;

if(cljs.core.truth_(and__3546__auto____240838))
{var and__3546__auto____240839 = x__450__auto____240837.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____240839))
{return cljs.core.not.call(null,x__450__auto____240837.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____240839;
}
} else
{return and__3546__auto____240838;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____240837);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__240840 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__240840.push(key);
}));
return keys__240840;
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
{var x__450__auto____240841 = s;

if(cljs.core.truth_((function (){var and__3546__auto____240842 = x__450__auto____240841;

if(cljs.core.truth_(and__3546__auto____240842))
{var and__3546__auto____240843 = x__450__auto____240841.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____240843))
{return cljs.core.not.call(null,x__450__auto____240841.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____240843;
}
} else
{return and__3546__auto____240842;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____240841);
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
var and__3546__auto____240844 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____240844))
{return cljs.core.not.call(null,(function (){var or__3548__auto____240845 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____240845))
{return or__3548__auto____240845;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____240844;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____240846 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____240846))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____240846;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____240847 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____240847))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____240847;
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
var and__3546__auto____240848 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____240848))
{return (n == n.toFixed());
} else
{return and__3546__auto____240848;
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
if(cljs.core.truth_((function (){var and__3546__auto____240849 = coll;

if(cljs.core.truth_(and__3546__auto____240849))
{var and__3546__auto____240850 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____240850))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____240850;
}
} else
{return and__3546__auto____240849;
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
var distinct_QMARK___240855 = (function (x){
return true;
});
var distinct_QMARK___240856 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___240857 = (function() { 
var G__240859__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__240851 = cljs.core.set([y,x]);
var xs__240852 = more;

while(true){
var x__240853 = cljs.core.first.call(null,xs__240852);
var etc__240854 = cljs.core.next.call(null,xs__240852);

if(cljs.core.truth_(xs__240852))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__240851,x__240853)))
{return false;
} else
{{
var G__240860 = cljs.core.conj.call(null,s__240851,x__240853);
var G__240861 = etc__240854;
s__240851 = G__240860;
xs__240852 = G__240861;
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
var G__240859 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240859__delegate.call(this, x, y, more);
};
G__240859.cljs$lang$maxFixedArity = 2;
G__240859.cljs$lang$applyTo = (function (arglist__240862){
var x = cljs.core.first(arglist__240862);
var y = cljs.core.first(cljs.core.next(arglist__240862));
var more = cljs.core.rest(cljs.core.next(arglist__240862));
return G__240859__delegate.call(this, x, y, more);
});
return G__240859;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___240855.call(this,x);
case  2 :
return distinct_QMARK___240856.call(this,x,y);
default:
return distinct_QMARK___240857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___240857.cljs$lang$applyTo;
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
var r__240863 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__240863)))
{return r__240863;
} else
{if(cljs.core.truth_(r__240863))
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
var sort__240865 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__240866 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__240864 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__240864,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__240864);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__240865.call(this,comp);
case  2 :
return sort__240866.call(this,comp,coll);
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
var sort_by__240868 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__240869 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__240868.call(this,keyfn,comp);
case  3 :
return sort_by__240869.call(this,keyfn,comp,coll);
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
var reduce__240871 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__240872 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__240871.call(this,f,val);
case  3 :
return reduce__240872.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__240878 = (function (f,coll){
var temp__3695__auto____240874 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____240874))
{var s__240875 = temp__3695__auto____240874;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__240875),cljs.core.next.call(null,s__240875));
} else
{return f.call(null);
}
});
var seq_reduce__240879 = (function (f,val,coll){
var val__240876 = val;
var coll__240877 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__240877))
{{
var G__240881 = f.call(null,val__240876,cljs.core.first.call(null,coll__240877));
var G__240882 = cljs.core.next.call(null,coll__240877);
val__240876 = G__240881;
coll__240877 = G__240882;
continue;
}
} else
{return val__240876;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__240878.call(this,f,val);
case  3 :
return seq_reduce__240879.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__240883 = null;
var G__240883__240884 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__240883__240885 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__240883 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__240883__240884.call(this,coll,f);
case  3 :
return G__240883__240885.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240883;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___240887 = (function (){
return 0;
});
var _PLUS___240888 = (function (x){
return x;
});
var _PLUS___240889 = (function (x,y){
return (x + y);
});
var _PLUS___240890 = (function() { 
var G__240892__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__240892 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240892__delegate.call(this, x, y, more);
};
G__240892.cljs$lang$maxFixedArity = 2;
G__240892.cljs$lang$applyTo = (function (arglist__240893){
var x = cljs.core.first(arglist__240893);
var y = cljs.core.first(cljs.core.next(arglist__240893));
var more = cljs.core.rest(cljs.core.next(arglist__240893));
return G__240892__delegate.call(this, x, y, more);
});
return G__240892;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___240887.call(this);
case  1 :
return _PLUS___240888.call(this,x);
case  2 :
return _PLUS___240889.call(this,x,y);
default:
return _PLUS___240890.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___240890.cljs$lang$applyTo;
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
var ___240894 = (function (x){
return (- x);
});
var ___240895 = (function (x,y){
return (x - y);
});
var ___240896 = (function() { 
var G__240898__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__240898 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240898__delegate.call(this, x, y, more);
};
G__240898.cljs$lang$maxFixedArity = 2;
G__240898.cljs$lang$applyTo = (function (arglist__240899){
var x = cljs.core.first(arglist__240899);
var y = cljs.core.first(cljs.core.next(arglist__240899));
var more = cljs.core.rest(cljs.core.next(arglist__240899));
return G__240898__delegate.call(this, x, y, more);
});
return G__240898;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___240894.call(this,x);
case  2 :
return ___240895.call(this,x,y);
default:
return ___240896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___240896.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___240900 = (function (){
return 1;
});
var _STAR___240901 = (function (x){
return x;
});
var _STAR___240902 = (function (x,y){
return (x * y);
});
var _STAR___240903 = (function() { 
var G__240905__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__240905 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240905__delegate.call(this, x, y, more);
};
G__240905.cljs$lang$maxFixedArity = 2;
G__240905.cljs$lang$applyTo = (function (arglist__240906){
var x = cljs.core.first(arglist__240906);
var y = cljs.core.first(cljs.core.next(arglist__240906));
var more = cljs.core.rest(cljs.core.next(arglist__240906));
return G__240905__delegate.call(this, x, y, more);
});
return G__240905;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___240900.call(this);
case  1 :
return _STAR___240901.call(this,x);
case  2 :
return _STAR___240902.call(this,x,y);
default:
return _STAR___240903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___240903.cljs$lang$applyTo;
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
var _SLASH___240907 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___240908 = (function (x,y){
return (x / y);
});
var _SLASH___240909 = (function() { 
var G__240911__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__240911 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240911__delegate.call(this, x, y, more);
};
G__240911.cljs$lang$maxFixedArity = 2;
G__240911.cljs$lang$applyTo = (function (arglist__240912){
var x = cljs.core.first(arglist__240912);
var y = cljs.core.first(cljs.core.next(arglist__240912));
var more = cljs.core.rest(cljs.core.next(arglist__240912));
return G__240911__delegate.call(this, x, y, more);
});
return G__240911;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___240907.call(this,x);
case  2 :
return _SLASH___240908.call(this,x,y);
default:
return _SLASH___240909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___240909.cljs$lang$applyTo;
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
var _LT___240913 = (function (x){
return true;
});
var _LT___240914 = (function (x,y){
return (x < y);
});
var _LT___240915 = (function() { 
var G__240917__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__240918 = y;
var G__240919 = cljs.core.first.call(null,more);
var G__240920 = cljs.core.next.call(null,more);
x = G__240918;
y = G__240919;
more = G__240920;
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
var G__240917 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240917__delegate.call(this, x, y, more);
};
G__240917.cljs$lang$maxFixedArity = 2;
G__240917.cljs$lang$applyTo = (function (arglist__240921){
var x = cljs.core.first(arglist__240921);
var y = cljs.core.first(cljs.core.next(arglist__240921));
var more = cljs.core.rest(cljs.core.next(arglist__240921));
return G__240917__delegate.call(this, x, y, more);
});
return G__240917;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___240913.call(this,x);
case  2 :
return _LT___240914.call(this,x,y);
default:
return _LT___240915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___240915.cljs$lang$applyTo;
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
var _LT__EQ___240922 = (function (x){
return true;
});
var _LT__EQ___240923 = (function (x,y){
return (x <= y);
});
var _LT__EQ___240924 = (function() { 
var G__240926__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__240927 = y;
var G__240928 = cljs.core.first.call(null,more);
var G__240929 = cljs.core.next.call(null,more);
x = G__240927;
y = G__240928;
more = G__240929;
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
var G__240926 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240926__delegate.call(this, x, y, more);
};
G__240926.cljs$lang$maxFixedArity = 2;
G__240926.cljs$lang$applyTo = (function (arglist__240930){
var x = cljs.core.first(arglist__240930);
var y = cljs.core.first(cljs.core.next(arglist__240930));
var more = cljs.core.rest(cljs.core.next(arglist__240930));
return G__240926__delegate.call(this, x, y, more);
});
return G__240926;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___240922.call(this,x);
case  2 :
return _LT__EQ___240923.call(this,x,y);
default:
return _LT__EQ___240924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___240924.cljs$lang$applyTo;
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
var _GT___240931 = (function (x){
return true;
});
var _GT___240932 = (function (x,y){
return (x > y);
});
var _GT___240933 = (function() { 
var G__240935__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__240936 = y;
var G__240937 = cljs.core.first.call(null,more);
var G__240938 = cljs.core.next.call(null,more);
x = G__240936;
y = G__240937;
more = G__240938;
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
var G__240935 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240935__delegate.call(this, x, y, more);
};
G__240935.cljs$lang$maxFixedArity = 2;
G__240935.cljs$lang$applyTo = (function (arglist__240939){
var x = cljs.core.first(arglist__240939);
var y = cljs.core.first(cljs.core.next(arglist__240939));
var more = cljs.core.rest(cljs.core.next(arglist__240939));
return G__240935__delegate.call(this, x, y, more);
});
return G__240935;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___240931.call(this,x);
case  2 :
return _GT___240932.call(this,x,y);
default:
return _GT___240933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___240933.cljs$lang$applyTo;
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
var _GT__EQ___240940 = (function (x){
return true;
});
var _GT__EQ___240941 = (function (x,y){
return (x >= y);
});
var _GT__EQ___240942 = (function() { 
var G__240944__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__240945 = y;
var G__240946 = cljs.core.first.call(null,more);
var G__240947 = cljs.core.next.call(null,more);
x = G__240945;
y = G__240946;
more = G__240947;
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
var G__240944 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240944__delegate.call(this, x, y, more);
};
G__240944.cljs$lang$maxFixedArity = 2;
G__240944.cljs$lang$applyTo = (function (arglist__240948){
var x = cljs.core.first(arglist__240948);
var y = cljs.core.first(cljs.core.next(arglist__240948));
var more = cljs.core.rest(cljs.core.next(arglist__240948));
return G__240944__delegate.call(this, x, y, more);
});
return G__240944;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___240940.call(this,x);
case  2 :
return _GT__EQ___240941.call(this,x,y);
default:
return _GT__EQ___240942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___240942.cljs$lang$applyTo;
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
var max__240949 = (function (x){
return x;
});
var max__240950 = (function (x,y){
return ((x > y) ? x : y);
});
var max__240951 = (function() { 
var G__240953__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__240953 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240953__delegate.call(this, x, y, more);
};
G__240953.cljs$lang$maxFixedArity = 2;
G__240953.cljs$lang$applyTo = (function (arglist__240954){
var x = cljs.core.first(arglist__240954);
var y = cljs.core.first(cljs.core.next(arglist__240954));
var more = cljs.core.rest(cljs.core.next(arglist__240954));
return G__240953__delegate.call(this, x, y, more);
});
return G__240953;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__240949.call(this,x);
case  2 :
return max__240950.call(this,x,y);
default:
return max__240951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__240951.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__240955 = (function (x){
return x;
});
var min__240956 = (function (x,y){
return ((x < y) ? x : y);
});
var min__240957 = (function() { 
var G__240959__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__240959 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240959__delegate.call(this, x, y, more);
};
G__240959.cljs$lang$maxFixedArity = 2;
G__240959.cljs$lang$applyTo = (function (arglist__240960){
var x = cljs.core.first(arglist__240960);
var y = cljs.core.first(cljs.core.next(arglist__240960));
var more = cljs.core.rest(cljs.core.next(arglist__240960));
return G__240959__delegate.call(this, x, y, more);
});
return G__240959;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__240955.call(this,x);
case  2 :
return min__240956.call(this,x,y);
default:
return min__240957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__240957.cljs$lang$applyTo;
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
var rem__240961 = (n % d);

return cljs.core.fix.call(null,((n - rem__240961) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__240962 = cljs.core.quot.call(null,n,d);

return (n - (d * q__240962));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__240963 = (function (){
return Math.random.call(null);
});
var rand__240964 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__240963.call(this);
case  1 :
return rand__240964.call(this,n);
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
var _EQ__EQ___240966 = (function (x){
return true;
});
var _EQ__EQ___240967 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___240968 = (function() { 
var G__240970__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__240971 = y;
var G__240972 = cljs.core.first.call(null,more);
var G__240973 = cljs.core.next.call(null,more);
x = G__240971;
y = G__240972;
more = G__240973;
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
var G__240970 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__240970__delegate.call(this, x, y, more);
};
G__240970.cljs$lang$maxFixedArity = 2;
G__240970.cljs$lang$applyTo = (function (arglist__240974){
var x = cljs.core.first(arglist__240974);
var y = cljs.core.first(cljs.core.next(arglist__240974));
var more = cljs.core.rest(cljs.core.next(arglist__240974));
return G__240970__delegate.call(this, x, y, more);
});
return G__240970;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___240966.call(this,x);
case  2 :
return _EQ__EQ___240967.call(this,x,y);
default:
return _EQ__EQ___240968.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___240968.cljs$lang$applyTo;
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
var n__240975 = n;
var xs__240976 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____240977 = xs__240976;

if(cljs.core.truth_(and__3546__auto____240977))
{return (n__240975 > 0);
} else
{return and__3546__auto____240977;
}
})()))
{{
var G__240978 = (n__240975 - 1);
var G__240979 = cljs.core.next.call(null,xs__240976);
n__240975 = G__240978;
xs__240976 = G__240979;
continue;
}
} else
{return xs__240976;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__240984 = null;
var G__240984__240985 = (function (coll,n){
var temp__3695__auto____240980 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____240980))
{var xs__240981 = temp__3695__auto____240980;

return cljs.core.first.call(null,xs__240981);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__240984__240986 = (function (coll,n,not_found){
var temp__3695__auto____240982 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____240982))
{var xs__240983 = temp__3695__auto____240982;

return cljs.core.first.call(null,xs__240983);
} else
{return not_found;
}
});
G__240984 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__240984__240985.call(this,coll,n);
case  3 :
return G__240984__240986.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__240984;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___240988 = (function (){
return "";
});
var str_STAR___240989 = (function (x){
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
var str_STAR___240990 = (function() { 
var G__240992__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__240993 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__240994 = cljs.core.next.call(null,more);
sb = G__240993;
more = G__240994;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__240992 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__240992__delegate.call(this, x, ys);
};
G__240992.cljs$lang$maxFixedArity = 1;
G__240992.cljs$lang$applyTo = (function (arglist__240995){
var x = cljs.core.first(arglist__240995);
var ys = cljs.core.rest(arglist__240995);
return G__240992__delegate.call(this, x, ys);
});
return G__240992;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___240988.call(this);
case  1 :
return str_STAR___240989.call(this,x);
default:
return str_STAR___240990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___240990.cljs$lang$applyTo;
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
var str__240996 = (function (){
return "";
});
var str__240997 = (function (x){
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
var str__240998 = (function() { 
var G__241000__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__241000 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__241000__delegate.call(this, x, ys);
};
G__241000.cljs$lang$maxFixedArity = 1;
G__241000.cljs$lang$applyTo = (function (arglist__241001){
var x = cljs.core.first(arglist__241001);
var ys = cljs.core.rest(arglist__241001);
return G__241000__delegate.call(this, x, ys);
});
return G__241000;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__240996.call(this);
case  1 :
return str__240997.call(this,x);
default:
return str__240998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__240998.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__241002 = (function (s,start){
return s.substring(start);
});
var subs__241003 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__241002.call(this,s,start);
case  3 :
return subs__241003.call(this,s,start,end);
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
var symbol__241005 = (function (name){
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
var symbol__241006 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__241005.call(this,ns);
case  2 :
return symbol__241006.call(this,ns,name);
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
var keyword__241008 = (function (name){
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
var keyword__241009 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__241008.call(this,ns);
case  2 :
return keyword__241009.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__241011 = cljs.core.seq.call(null,x);
var ys__241012 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__241011 === null)))
{return (ys__241012 === null);
} else
{if(cljs.core.truth_((ys__241012 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__241011),cljs.core.first.call(null,ys__241012))))
{{
var G__241013 = cljs.core.next.call(null,xs__241011);
var G__241014 = cljs.core.next.call(null,ys__241012);
xs__241011 = G__241013;
ys__241012 = G__241014;
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
return cljs.core.reduce.call(null,(function (p1__241015_SHARP_,p2__241016_SHARP_){
return cljs.core.hash_combine.call(null,p1__241015_SHARP_,cljs.core.hash.call(null,p2__241016_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__241017__241018 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__241017__241018))
{var G__241020__241022 = cljs.core.first.call(null,G__241017__241018);
var vec__241021__241023 = G__241020__241022;
var key_name__241024 = cljs.core.nth.call(null,vec__241021__241023,0,null);
var f__241025 = cljs.core.nth.call(null,vec__241021__241023,1,null);
var G__241017__241026 = G__241017__241018;

var G__241020__241027 = G__241020__241022;
var G__241017__241028 = G__241017__241026;

while(true){
var vec__241029__241030 = G__241020__241027;
var key_name__241031 = cljs.core.nth.call(null,vec__241029__241030,0,null);
var f__241032 = cljs.core.nth.call(null,vec__241029__241030,1,null);
var G__241017__241033 = G__241017__241028;

var str_name__241034 = cljs.core.name.call(null,key_name__241031);

obj[str_name__241034] = f__241032;
var temp__3698__auto____241035 = cljs.core.next.call(null,G__241017__241033);

if(cljs.core.truth_(temp__3698__auto____241035))
{var G__241017__241036 = temp__3698__auto____241035;

{
var G__241037 = cljs.core.first.call(null,G__241017__241036);
var G__241038 = G__241017__241036;
G__241020__241027 = G__241037;
G__241017__241028 = G__241038;
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
var this__241039 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__241040 = this;
return (new cljs.core.List(this__241040.meta,o,coll,(this__241040.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__241041 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__241042 = this;
return this__241042.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__241043 = this;
return this__241043.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__241044 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__241045 = this;
return this__241045.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__241046 = this;
return this__241046.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241047 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241048 = this;
return (new cljs.core.List(meta,this__241048.first,this__241048.rest,this__241048.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241049 = this;
return this__241049.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241050 = this;
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
var this__241051 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__241052 = this;
return (new cljs.core.List(this__241052.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__241053 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__241054 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__241055 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__241056 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__241057 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__241058 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241059 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241060 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241061 = this;
return this__241061.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241062 = this;
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
list.cljs$lang$applyTo = (function (arglist__241063){
var items = cljs.core.seq( arglist__241063 );;
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
var this__241064 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__241065 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241066 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241067 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__241067.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__241068 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__241069 = this;
return this__241069.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__241070 = this;
if(cljs.core.truth_((this__241070.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__241070.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241071 = this;
return this__241071.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241072 = this;
return (new cljs.core.Cons(meta,this__241072.first,this__241072.rest));
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
var G__241073 = null;
var G__241073__241074 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__241073__241075 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__241073 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__241073__241074.call(this,string,f);
case  3 :
return G__241073__241075.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241073;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__241077 = null;
var G__241077__241078 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__241077__241079 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__241077 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__241077__241078.call(this,string,k);
case  3 :
return G__241077__241079.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241077;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__241081 = null;
var G__241081__241082 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__241081__241083 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__241081 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__241081__241082.call(this,string,n);
case  3 :
return G__241081__241083.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241081;
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
var G__241091 = null;
var G__241091__241092 = (function (tsym241085,coll){
var tsym241085__241087 = this;

var this$__241088 = tsym241085__241087;

return cljs.core.get.call(null,coll,this$__241088.toString());
});
var G__241091__241093 = (function (tsym241086,coll,not_found){
var tsym241086__241089 = this;

var this$__241090 = tsym241086__241089;

return cljs.core.get.call(null,coll,this$__241090.toString(),not_found);
});
G__241091 = function(tsym241086,coll,not_found){
switch(arguments.length){
case  2 :
return G__241091__241092.call(this,tsym241086,coll);
case  3 :
return G__241091__241093.call(this,tsym241086,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241091;
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
var x__241095 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__241095;
} else
{lazy_seq.x = x__241095.call(null);
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
var this__241096 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__241097 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241098 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241099 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__241099.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__241100 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__241101 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__241102 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241103 = this;
return this__241103.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241104 = this;
return (new cljs.core.LazySeq(meta,this__241104.realized,this__241104.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__241105 = cljs.core.array.call(null);

var s__241106 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__241106)))
{ary__241105.push(cljs.core.first.call(null,s__241106));
{
var G__241107 = cljs.core.next.call(null,s__241106);
s__241106 = G__241107;
continue;
}
} else
{return ary__241105;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__241108 = s;
var i__241109 = n;
var sum__241110 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____241111 = (i__241109 > 0);

if(cljs.core.truth_(and__3546__auto____241111))
{return cljs.core.seq.call(null,s__241108);
} else
{return and__3546__auto____241111;
}
})()))
{{
var G__241112 = cljs.core.next.call(null,s__241108);
var G__241113 = (i__241109 - 1);
var G__241114 = (sum__241110 + 1);
s__241108 = G__241112;
i__241109 = G__241113;
sum__241110 = G__241114;
continue;
}
} else
{return sum__241110;
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
var concat__241118 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__241119 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__241120 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__241115 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__241115))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__241115),concat.call(null,cljs.core.rest.call(null,s__241115),y));
} else
{return y;
}
})));
});
var concat__241121 = (function() { 
var G__241123__delegate = function (x,y,zs){
var cat__241117 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__241116 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__241116))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__241116),cat.call(null,cljs.core.rest.call(null,xys__241116),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__241117.call(null,concat.call(null,x,y),zs);
};
var G__241123 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__241123__delegate.call(this, x, y, zs);
};
G__241123.cljs$lang$maxFixedArity = 2;
G__241123.cljs$lang$applyTo = (function (arglist__241124){
var x = cljs.core.first(arglist__241124);
var y = cljs.core.first(cljs.core.next(arglist__241124));
var zs = cljs.core.rest(cljs.core.next(arglist__241124));
return G__241123__delegate.call(this, x, y, zs);
});
return G__241123;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__241118.call(this);
case  1 :
return concat__241119.call(this,x);
case  2 :
return concat__241120.call(this,x,y);
default:
return concat__241121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__241121.cljs$lang$applyTo;
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
var list_STAR___241125 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___241126 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___241127 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___241128 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___241129 = (function() { 
var G__241131__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__241131 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__241131__delegate.call(this, a, b, c, d, more);
};
G__241131.cljs$lang$maxFixedArity = 4;
G__241131.cljs$lang$applyTo = (function (arglist__241132){
var a = cljs.core.first(arglist__241132);
var b = cljs.core.first(cljs.core.next(arglist__241132));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241132)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__241132))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__241132))));
return G__241131__delegate.call(this, a, b, c, d, more);
});
return G__241131;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___241125.call(this,a);
case  2 :
return list_STAR___241126.call(this,a,b);
case  3 :
return list_STAR___241127.call(this,a,b,c);
case  4 :
return list_STAR___241128.call(this,a,b,c,d);
default:
return list_STAR___241129.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___241129.cljs$lang$applyTo;
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
var apply__241142 = (function (f,args){
var fixed_arity__241133 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__241133 + 1)) <= fixed_arity__241133)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__241143 = (function (f,x,args){
var arglist__241134 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__241135 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__241134,fixed_arity__241135) <= fixed_arity__241135)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__241134));
} else
{return f.cljs$lang$applyTo(arglist__241134);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__241134));
}
});
var apply__241144 = (function (f,x,y,args){
var arglist__241136 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__241137 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__241136,fixed_arity__241137) <= fixed_arity__241137)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__241136));
} else
{return f.cljs$lang$applyTo(arglist__241136);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__241136));
}
});
var apply__241145 = (function (f,x,y,z,args){
var arglist__241138 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__241139 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__241138,fixed_arity__241139) <= fixed_arity__241139)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__241138));
} else
{return f.cljs$lang$applyTo(arglist__241138);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__241138));
}
});
var apply__241146 = (function() { 
var G__241148__delegate = function (f,a,b,c,d,args){
var arglist__241140 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__241141 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__241140,fixed_arity__241141) <= fixed_arity__241141)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__241140));
} else
{return f.cljs$lang$applyTo(arglist__241140);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__241140));
}
};
var G__241148 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__241148__delegate.call(this, f, a, b, c, d, args);
};
G__241148.cljs$lang$maxFixedArity = 5;
G__241148.cljs$lang$applyTo = (function (arglist__241149){
var f = cljs.core.first(arglist__241149);
var a = cljs.core.first(cljs.core.next(arglist__241149));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241149)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__241149))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__241149)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__241149)))));
return G__241148__delegate.call(this, f, a, b, c, d, args);
});
return G__241148;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__241142.call(this,f,a);
case  3 :
return apply__241143.call(this,f,a,b);
case  4 :
return apply__241144.call(this,f,a,b,c);
case  5 :
return apply__241145.call(this,f,a,b,c,d);
default:
return apply__241146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__241146.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__241150){
var obj = cljs.core.first(arglist__241150);
var f = cljs.core.first(cljs.core.next(arglist__241150));
var args = cljs.core.rest(cljs.core.next(arglist__241150));
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
var not_EQ___241151 = (function (x){
return false;
});
var not_EQ___241152 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___241153 = (function() { 
var G__241155__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__241155 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__241155__delegate.call(this, x, y, more);
};
G__241155.cljs$lang$maxFixedArity = 2;
G__241155.cljs$lang$applyTo = (function (arglist__241156){
var x = cljs.core.first(arglist__241156);
var y = cljs.core.first(cljs.core.next(arglist__241156));
var more = cljs.core.rest(cljs.core.next(arglist__241156));
return G__241155__delegate.call(this, x, y, more);
});
return G__241155;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___241151.call(this,x);
case  2 :
return not_EQ___241152.call(this,x,y);
default:
return not_EQ___241153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___241153.cljs$lang$applyTo;
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
var G__241157 = pred;
var G__241158 = cljs.core.next.call(null,coll);
pred = G__241157;
coll = G__241158;
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
{var or__3548__auto____241159 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____241159))
{return or__3548__auto____241159;
} else
{{
var G__241160 = pred;
var G__241161 = cljs.core.next.call(null,coll);
pred = G__241160;
coll = G__241161;
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
var G__241162 = null;
var G__241162__241163 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__241162__241164 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__241162__241165 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__241162__241166 = (function() { 
var G__241168__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__241168 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__241168__delegate.call(this, x, y, zs);
};
G__241168.cljs$lang$maxFixedArity = 2;
G__241168.cljs$lang$applyTo = (function (arglist__241169){
var x = cljs.core.first(arglist__241169);
var y = cljs.core.first(cljs.core.next(arglist__241169));
var zs = cljs.core.rest(cljs.core.next(arglist__241169));
return G__241168__delegate.call(this, x, y, zs);
});
return G__241168;
})()
;
G__241162 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__241162__241163.call(this);
case  1 :
return G__241162__241164.call(this,x);
case  2 :
return G__241162__241165.call(this,x,y);
default:
return G__241162__241166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241162.cljs$lang$maxFixedArity = 2;
G__241162.cljs$lang$applyTo = G__241162__241166.cljs$lang$applyTo;
return G__241162;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__241170__delegate = function (args){
return x;
};
var G__241170 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__241170__delegate.call(this, args);
};
G__241170.cljs$lang$maxFixedArity = 0;
G__241170.cljs$lang$applyTo = (function (arglist__241171){
var args = cljs.core.seq( arglist__241171 );;
return G__241170__delegate.call(this, args);
});
return G__241170;
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
var comp__241175 = (function (){
return cljs.core.identity;
});
var comp__241176 = (function (f){
return f;
});
var comp__241177 = (function (f,g){
return (function() {
var G__241181 = null;
var G__241181__241182 = (function (){
return f.call(null,g.call(null));
});
var G__241181__241183 = (function (x){
return f.call(null,g.call(null,x));
});
var G__241181__241184 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__241181__241185 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__241181__241186 = (function() { 
var G__241188__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__241188 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241188__delegate.call(this, x, y, z, args);
};
G__241188.cljs$lang$maxFixedArity = 3;
G__241188.cljs$lang$applyTo = (function (arglist__241189){
var x = cljs.core.first(arglist__241189);
var y = cljs.core.first(cljs.core.next(arglist__241189));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241189)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241189)));
return G__241188__delegate.call(this, x, y, z, args);
});
return G__241188;
})()
;
G__241181 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__241181__241182.call(this);
case  1 :
return G__241181__241183.call(this,x);
case  2 :
return G__241181__241184.call(this,x,y);
case  3 :
return G__241181__241185.call(this,x,y,z);
default:
return G__241181__241186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241181.cljs$lang$maxFixedArity = 3;
G__241181.cljs$lang$applyTo = G__241181__241186.cljs$lang$applyTo;
return G__241181;
})()
});
var comp__241178 = (function (f,g,h){
return (function() {
var G__241190 = null;
var G__241190__241191 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__241190__241192 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__241190__241193 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__241190__241194 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__241190__241195 = (function() { 
var G__241197__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__241197 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241197__delegate.call(this, x, y, z, args);
};
G__241197.cljs$lang$maxFixedArity = 3;
G__241197.cljs$lang$applyTo = (function (arglist__241198){
var x = cljs.core.first(arglist__241198);
var y = cljs.core.first(cljs.core.next(arglist__241198));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241198)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241198)));
return G__241197__delegate.call(this, x, y, z, args);
});
return G__241197;
})()
;
G__241190 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__241190__241191.call(this);
case  1 :
return G__241190__241192.call(this,x);
case  2 :
return G__241190__241193.call(this,x,y);
case  3 :
return G__241190__241194.call(this,x,y,z);
default:
return G__241190__241195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241190.cljs$lang$maxFixedArity = 3;
G__241190.cljs$lang$applyTo = G__241190__241195.cljs$lang$applyTo;
return G__241190;
})()
});
var comp__241179 = (function() { 
var G__241199__delegate = function (f1,f2,f3,fs){
var fs__241172 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__241200__delegate = function (args){
var ret__241173 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__241172),args);
var fs__241174 = cljs.core.next.call(null,fs__241172);

while(true){
if(cljs.core.truth_(fs__241174))
{{
var G__241201 = cljs.core.first.call(null,fs__241174).call(null,ret__241173);
var G__241202 = cljs.core.next.call(null,fs__241174);
ret__241173 = G__241201;
fs__241174 = G__241202;
continue;
}
} else
{return ret__241173;
}
break;
}
};
var G__241200 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__241200__delegate.call(this, args);
};
G__241200.cljs$lang$maxFixedArity = 0;
G__241200.cljs$lang$applyTo = (function (arglist__241203){
var args = cljs.core.seq( arglist__241203 );;
return G__241200__delegate.call(this, args);
});
return G__241200;
})()
;
};
var G__241199 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241199__delegate.call(this, f1, f2, f3, fs);
};
G__241199.cljs$lang$maxFixedArity = 3;
G__241199.cljs$lang$applyTo = (function (arglist__241204){
var f1 = cljs.core.first(arglist__241204);
var f2 = cljs.core.first(cljs.core.next(arglist__241204));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241204)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241204)));
return G__241199__delegate.call(this, f1, f2, f3, fs);
});
return G__241199;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__241175.call(this);
case  1 :
return comp__241176.call(this,f1);
case  2 :
return comp__241177.call(this,f1,f2);
case  3 :
return comp__241178.call(this,f1,f2,f3);
default:
return comp__241179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__241179.cljs$lang$applyTo;
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
var partial__241205 = (function (f,arg1){
return (function() { 
var G__241210__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__241210 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__241210__delegate.call(this, args);
};
G__241210.cljs$lang$maxFixedArity = 0;
G__241210.cljs$lang$applyTo = (function (arglist__241211){
var args = cljs.core.seq( arglist__241211 );;
return G__241210__delegate.call(this, args);
});
return G__241210;
})()
;
});
var partial__241206 = (function (f,arg1,arg2){
return (function() { 
var G__241212__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__241212 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__241212__delegate.call(this, args);
};
G__241212.cljs$lang$maxFixedArity = 0;
G__241212.cljs$lang$applyTo = (function (arglist__241213){
var args = cljs.core.seq( arglist__241213 );;
return G__241212__delegate.call(this, args);
});
return G__241212;
})()
;
});
var partial__241207 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__241214__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__241214 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__241214__delegate.call(this, args);
};
G__241214.cljs$lang$maxFixedArity = 0;
G__241214.cljs$lang$applyTo = (function (arglist__241215){
var args = cljs.core.seq( arglist__241215 );;
return G__241214__delegate.call(this, args);
});
return G__241214;
})()
;
});
var partial__241208 = (function() { 
var G__241216__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__241217__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__241217 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__241217__delegate.call(this, args);
};
G__241217.cljs$lang$maxFixedArity = 0;
G__241217.cljs$lang$applyTo = (function (arglist__241218){
var args = cljs.core.seq( arglist__241218 );;
return G__241217__delegate.call(this, args);
});
return G__241217;
})()
;
};
var G__241216 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__241216__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__241216.cljs$lang$maxFixedArity = 4;
G__241216.cljs$lang$applyTo = (function (arglist__241219){
var f = cljs.core.first(arglist__241219);
var arg1 = cljs.core.first(cljs.core.next(arglist__241219));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241219)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__241219))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__241219))));
return G__241216__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__241216;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__241205.call(this,f,arg1);
case  3 :
return partial__241206.call(this,f,arg1,arg2);
case  4 :
return partial__241207.call(this,f,arg1,arg2,arg3);
default:
return partial__241208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__241208.cljs$lang$applyTo;
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
var fnil__241220 = (function (f,x){
return (function() {
var G__241224 = null;
var G__241224__241225 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__241224__241226 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__241224__241227 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__241224__241228 = (function() { 
var G__241230__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__241230 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241230__delegate.call(this, a, b, c, ds);
};
G__241230.cljs$lang$maxFixedArity = 3;
G__241230.cljs$lang$applyTo = (function (arglist__241231){
var a = cljs.core.first(arglist__241231);
var b = cljs.core.first(cljs.core.next(arglist__241231));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241231)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241231)));
return G__241230__delegate.call(this, a, b, c, ds);
});
return G__241230;
})()
;
G__241224 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__241224__241225.call(this,a);
case  2 :
return G__241224__241226.call(this,a,b);
case  3 :
return G__241224__241227.call(this,a,b,c);
default:
return G__241224__241228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241224.cljs$lang$maxFixedArity = 3;
G__241224.cljs$lang$applyTo = G__241224__241228.cljs$lang$applyTo;
return G__241224;
})()
});
var fnil__241221 = (function (f,x,y){
return (function() {
var G__241232 = null;
var G__241232__241233 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__241232__241234 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__241232__241235 = (function() { 
var G__241237__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__241237 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241237__delegate.call(this, a, b, c, ds);
};
G__241237.cljs$lang$maxFixedArity = 3;
G__241237.cljs$lang$applyTo = (function (arglist__241238){
var a = cljs.core.first(arglist__241238);
var b = cljs.core.first(cljs.core.next(arglist__241238));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241238)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241238)));
return G__241237__delegate.call(this, a, b, c, ds);
});
return G__241237;
})()
;
G__241232 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__241232__241233.call(this,a,b);
case  3 :
return G__241232__241234.call(this,a,b,c);
default:
return G__241232__241235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241232.cljs$lang$maxFixedArity = 3;
G__241232.cljs$lang$applyTo = G__241232__241235.cljs$lang$applyTo;
return G__241232;
})()
});
var fnil__241222 = (function (f,x,y,z){
return (function() {
var G__241239 = null;
var G__241239__241240 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__241239__241241 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__241239__241242 = (function() { 
var G__241244__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__241244 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241244__delegate.call(this, a, b, c, ds);
};
G__241244.cljs$lang$maxFixedArity = 3;
G__241244.cljs$lang$applyTo = (function (arglist__241245){
var a = cljs.core.first(arglist__241245);
var b = cljs.core.first(cljs.core.next(arglist__241245));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241245)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241245)));
return G__241244__delegate.call(this, a, b, c, ds);
});
return G__241244;
})()
;
G__241239 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__241239__241240.call(this,a,b);
case  3 :
return G__241239__241241.call(this,a,b,c);
default:
return G__241239__241242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241239.cljs$lang$maxFixedArity = 3;
G__241239.cljs$lang$applyTo = G__241239__241242.cljs$lang$applyTo;
return G__241239;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__241220.call(this,f,x);
case  3 :
return fnil__241221.call(this,f,x,y);
case  4 :
return fnil__241222.call(this,f,x,y,z);
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
var mapi__241248 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241246 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241246))
{var s__241247 = temp__3698__auto____241246;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__241247)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__241247)));
} else
{return null;
}
})));
});

return mapi__241248.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241249 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241249))
{var s__241250 = temp__3698__auto____241249;

var x__241251 = f.call(null,cljs.core.first.call(null,s__241250));

if(cljs.core.truth_((x__241251 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__241250));
} else
{return cljs.core.cons.call(null,x__241251,keep.call(null,f,cljs.core.rest.call(null,s__241250)));
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
var keepi__241261 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241258 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241258))
{var s__241259 = temp__3698__auto____241258;

var x__241260 = f.call(null,idx,cljs.core.first.call(null,s__241259));

if(cljs.core.truth_((x__241260 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__241259));
} else
{return cljs.core.cons.call(null,x__241260,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__241259)));
}
} else
{return null;
}
})));
});

return keepi__241261.call(null,0,coll);
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
var every_pred__241306 = (function (p){
return (function() {
var ep1 = null;
var ep1__241311 = (function (){
return true;
});
var ep1__241312 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__241313 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241268 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____241268))
{return p.call(null,y);
} else
{return and__3546__auto____241268;
}
})());
});
var ep1__241314 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241269 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____241269))
{var and__3546__auto____241270 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____241270))
{return p.call(null,z);
} else
{return and__3546__auto____241270;
}
} else
{return and__3546__auto____241269;
}
})());
});
var ep1__241315 = (function() { 
var G__241317__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241271 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____241271))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____241271;
}
})());
};
var G__241317 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241317__delegate.call(this, x, y, z, args);
};
G__241317.cljs$lang$maxFixedArity = 3;
G__241317.cljs$lang$applyTo = (function (arglist__241318){
var x = cljs.core.first(arglist__241318);
var y = cljs.core.first(cljs.core.next(arglist__241318));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241318)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241318)));
return G__241317__delegate.call(this, x, y, z, args);
});
return G__241317;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__241311.call(this);
case  1 :
return ep1__241312.call(this,x);
case  2 :
return ep1__241313.call(this,x,y);
case  3 :
return ep1__241314.call(this,x,y,z);
default:
return ep1__241315.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__241315.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__241307 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__241319 = (function (){
return true;
});
var ep2__241320 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241272 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____241272))
{return p2.call(null,x);
} else
{return and__3546__auto____241272;
}
})());
});
var ep2__241321 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241273 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____241273))
{var and__3546__auto____241274 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____241274))
{var and__3546__auto____241275 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____241275))
{return p2.call(null,y);
} else
{return and__3546__auto____241275;
}
} else
{return and__3546__auto____241274;
}
} else
{return and__3546__auto____241273;
}
})());
});
var ep2__241322 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241276 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____241276))
{var and__3546__auto____241277 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____241277))
{var and__3546__auto____241278 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____241278))
{var and__3546__auto____241279 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____241279))
{var and__3546__auto____241280 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____241280))
{return p2.call(null,z);
} else
{return and__3546__auto____241280;
}
} else
{return and__3546__auto____241279;
}
} else
{return and__3546__auto____241278;
}
} else
{return and__3546__auto____241277;
}
} else
{return and__3546__auto____241276;
}
})());
});
var ep2__241323 = (function() { 
var G__241325__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241281 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____241281))
{return cljs.core.every_QMARK_.call(null,(function (p1__241252_SHARP_){
var and__3546__auto____241282 = p1.call(null,p1__241252_SHARP_);

if(cljs.core.truth_(and__3546__auto____241282))
{return p2.call(null,p1__241252_SHARP_);
} else
{return and__3546__auto____241282;
}
}),args);
} else
{return and__3546__auto____241281;
}
})());
};
var G__241325 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241325__delegate.call(this, x, y, z, args);
};
G__241325.cljs$lang$maxFixedArity = 3;
G__241325.cljs$lang$applyTo = (function (arglist__241326){
var x = cljs.core.first(arglist__241326);
var y = cljs.core.first(cljs.core.next(arglist__241326));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241326)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241326)));
return G__241325__delegate.call(this, x, y, z, args);
});
return G__241325;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__241319.call(this);
case  1 :
return ep2__241320.call(this,x);
case  2 :
return ep2__241321.call(this,x,y);
case  3 :
return ep2__241322.call(this,x,y,z);
default:
return ep2__241323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__241323.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__241308 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__241327 = (function (){
return true;
});
var ep3__241328 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241283 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____241283))
{var and__3546__auto____241284 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____241284))
{return p3.call(null,x);
} else
{return and__3546__auto____241284;
}
} else
{return and__3546__auto____241283;
}
})());
});
var ep3__241329 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241285 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____241285))
{var and__3546__auto____241286 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____241286))
{var and__3546__auto____241287 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____241287))
{var and__3546__auto____241288 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____241288))
{var and__3546__auto____241289 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____241289))
{return p3.call(null,y);
} else
{return and__3546__auto____241289;
}
} else
{return and__3546__auto____241288;
}
} else
{return and__3546__auto____241287;
}
} else
{return and__3546__auto____241286;
}
} else
{return and__3546__auto____241285;
}
})());
});
var ep3__241330 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241290 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____241290))
{var and__3546__auto____241291 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____241291))
{var and__3546__auto____241292 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____241292))
{var and__3546__auto____241293 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____241293))
{var and__3546__auto____241294 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____241294))
{var and__3546__auto____241295 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____241295))
{var and__3546__auto____241296 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____241296))
{var and__3546__auto____241297 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____241297))
{return p3.call(null,z);
} else
{return and__3546__auto____241297;
}
} else
{return and__3546__auto____241296;
}
} else
{return and__3546__auto____241295;
}
} else
{return and__3546__auto____241294;
}
} else
{return and__3546__auto____241293;
}
} else
{return and__3546__auto____241292;
}
} else
{return and__3546__auto____241291;
}
} else
{return and__3546__auto____241290;
}
})());
});
var ep3__241331 = (function() { 
var G__241333__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241298 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____241298))
{return cljs.core.every_QMARK_.call(null,(function (p1__241253_SHARP_){
var and__3546__auto____241299 = p1.call(null,p1__241253_SHARP_);

if(cljs.core.truth_(and__3546__auto____241299))
{var and__3546__auto____241300 = p2.call(null,p1__241253_SHARP_);

if(cljs.core.truth_(and__3546__auto____241300))
{return p3.call(null,p1__241253_SHARP_);
} else
{return and__3546__auto____241300;
}
} else
{return and__3546__auto____241299;
}
}),args);
} else
{return and__3546__auto____241298;
}
})());
};
var G__241333 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241333__delegate.call(this, x, y, z, args);
};
G__241333.cljs$lang$maxFixedArity = 3;
G__241333.cljs$lang$applyTo = (function (arglist__241334){
var x = cljs.core.first(arglist__241334);
var y = cljs.core.first(cljs.core.next(arglist__241334));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241334)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241334)));
return G__241333__delegate.call(this, x, y, z, args);
});
return G__241333;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__241327.call(this);
case  1 :
return ep3__241328.call(this,x);
case  2 :
return ep3__241329.call(this,x,y);
case  3 :
return ep3__241330.call(this,x,y,z);
default:
return ep3__241331.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__241331.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__241309 = (function() { 
var G__241335__delegate = function (p1,p2,p3,ps){
var ps__241301 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__241336 = (function (){
return true;
});
var epn__241337 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__241254_SHARP_){
return p1__241254_SHARP_.call(null,x);
}),ps__241301);
});
var epn__241338 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__241255_SHARP_){
var and__3546__auto____241302 = p1__241255_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____241302))
{return p1__241255_SHARP_.call(null,y);
} else
{return and__3546__auto____241302;
}
}),ps__241301);
});
var epn__241339 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__241256_SHARP_){
var and__3546__auto____241303 = p1__241256_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____241303))
{var and__3546__auto____241304 = p1__241256_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____241304))
{return p1__241256_SHARP_.call(null,z);
} else
{return and__3546__auto____241304;
}
} else
{return and__3546__auto____241303;
}
}),ps__241301);
});
var epn__241340 = (function() { 
var G__241342__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____241305 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____241305))
{return cljs.core.every_QMARK_.call(null,(function (p1__241257_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__241257_SHARP_,args);
}),ps__241301);
} else
{return and__3546__auto____241305;
}
})());
};
var G__241342 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241342__delegate.call(this, x, y, z, args);
};
G__241342.cljs$lang$maxFixedArity = 3;
G__241342.cljs$lang$applyTo = (function (arglist__241343){
var x = cljs.core.first(arglist__241343);
var y = cljs.core.first(cljs.core.next(arglist__241343));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241343)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241343)));
return G__241342__delegate.call(this, x, y, z, args);
});
return G__241342;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__241336.call(this);
case  1 :
return epn__241337.call(this,x);
case  2 :
return epn__241338.call(this,x,y);
case  3 :
return epn__241339.call(this,x,y,z);
default:
return epn__241340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__241340.cljs$lang$applyTo;
return epn;
})()
};
var G__241335 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241335__delegate.call(this, p1, p2, p3, ps);
};
G__241335.cljs$lang$maxFixedArity = 3;
G__241335.cljs$lang$applyTo = (function (arglist__241344){
var p1 = cljs.core.first(arglist__241344);
var p2 = cljs.core.first(cljs.core.next(arglist__241344));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241344)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241344)));
return G__241335__delegate.call(this, p1, p2, p3, ps);
});
return G__241335;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__241306.call(this,p1);
case  2 :
return every_pred__241307.call(this,p1,p2);
case  3 :
return every_pred__241308.call(this,p1,p2,p3);
default:
return every_pred__241309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__241309.cljs$lang$applyTo;
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
var some_fn__241384 = (function (p){
return (function() {
var sp1 = null;
var sp1__241389 = (function (){
return null;
});
var sp1__241390 = (function (x){
return p.call(null,x);
});
var sp1__241391 = (function (x,y){
var or__3548__auto____241346 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____241346))
{return or__3548__auto____241346;
} else
{return p.call(null,y);
}
});
var sp1__241392 = (function (x,y,z){
var or__3548__auto____241347 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____241347))
{return or__3548__auto____241347;
} else
{var or__3548__auto____241348 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____241348))
{return or__3548__auto____241348;
} else
{return p.call(null,z);
}
}
});
var sp1__241393 = (function() { 
var G__241395__delegate = function (x,y,z,args){
var or__3548__auto____241349 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____241349))
{return or__3548__auto____241349;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__241395 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241395__delegate.call(this, x, y, z, args);
};
G__241395.cljs$lang$maxFixedArity = 3;
G__241395.cljs$lang$applyTo = (function (arglist__241396){
var x = cljs.core.first(arglist__241396);
var y = cljs.core.first(cljs.core.next(arglist__241396));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241396)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241396)));
return G__241395__delegate.call(this, x, y, z, args);
});
return G__241395;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__241389.call(this);
case  1 :
return sp1__241390.call(this,x);
case  2 :
return sp1__241391.call(this,x,y);
case  3 :
return sp1__241392.call(this,x,y,z);
default:
return sp1__241393.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__241393.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__241385 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__241397 = (function (){
return null;
});
var sp2__241398 = (function (x){
var or__3548__auto____241350 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____241350))
{return or__3548__auto____241350;
} else
{return p2.call(null,x);
}
});
var sp2__241399 = (function (x,y){
var or__3548__auto____241351 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____241351))
{return or__3548__auto____241351;
} else
{var or__3548__auto____241352 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____241352))
{return or__3548__auto____241352;
} else
{var or__3548__auto____241353 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____241353))
{return or__3548__auto____241353;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__241400 = (function (x,y,z){
var or__3548__auto____241354 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____241354))
{return or__3548__auto____241354;
} else
{var or__3548__auto____241355 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____241355))
{return or__3548__auto____241355;
} else
{var or__3548__auto____241356 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____241356))
{return or__3548__auto____241356;
} else
{var or__3548__auto____241357 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____241357))
{return or__3548__auto____241357;
} else
{var or__3548__auto____241358 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____241358))
{return or__3548__auto____241358;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__241401 = (function() { 
var G__241403__delegate = function (x,y,z,args){
var or__3548__auto____241359 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____241359))
{return or__3548__auto____241359;
} else
{return cljs.core.some.call(null,(function (p1__241262_SHARP_){
var or__3548__auto____241360 = p1.call(null,p1__241262_SHARP_);

if(cljs.core.truth_(or__3548__auto____241360))
{return or__3548__auto____241360;
} else
{return p2.call(null,p1__241262_SHARP_);
}
}),args);
}
};
var G__241403 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241403__delegate.call(this, x, y, z, args);
};
G__241403.cljs$lang$maxFixedArity = 3;
G__241403.cljs$lang$applyTo = (function (arglist__241404){
var x = cljs.core.first(arglist__241404);
var y = cljs.core.first(cljs.core.next(arglist__241404));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241404)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241404)));
return G__241403__delegate.call(this, x, y, z, args);
});
return G__241403;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__241397.call(this);
case  1 :
return sp2__241398.call(this,x);
case  2 :
return sp2__241399.call(this,x,y);
case  3 :
return sp2__241400.call(this,x,y,z);
default:
return sp2__241401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__241401.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__241386 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__241405 = (function (){
return null;
});
var sp3__241406 = (function (x){
var or__3548__auto____241361 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____241361))
{return or__3548__auto____241361;
} else
{var or__3548__auto____241362 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____241362))
{return or__3548__auto____241362;
} else
{return p3.call(null,x);
}
}
});
var sp3__241407 = (function (x,y){
var or__3548__auto____241363 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____241363))
{return or__3548__auto____241363;
} else
{var or__3548__auto____241364 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____241364))
{return or__3548__auto____241364;
} else
{var or__3548__auto____241365 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____241365))
{return or__3548__auto____241365;
} else
{var or__3548__auto____241366 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____241366))
{return or__3548__auto____241366;
} else
{var or__3548__auto____241367 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____241367))
{return or__3548__auto____241367;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__241408 = (function (x,y,z){
var or__3548__auto____241368 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____241368))
{return or__3548__auto____241368;
} else
{var or__3548__auto____241369 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____241369))
{return or__3548__auto____241369;
} else
{var or__3548__auto____241370 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____241370))
{return or__3548__auto____241370;
} else
{var or__3548__auto____241371 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____241371))
{return or__3548__auto____241371;
} else
{var or__3548__auto____241372 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____241372))
{return or__3548__auto____241372;
} else
{var or__3548__auto____241373 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____241373))
{return or__3548__auto____241373;
} else
{var or__3548__auto____241374 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____241374))
{return or__3548__auto____241374;
} else
{var or__3548__auto____241375 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____241375))
{return or__3548__auto____241375;
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
var sp3__241409 = (function() { 
var G__241411__delegate = function (x,y,z,args){
var or__3548__auto____241376 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____241376))
{return or__3548__auto____241376;
} else
{return cljs.core.some.call(null,(function (p1__241263_SHARP_){
var or__3548__auto____241377 = p1.call(null,p1__241263_SHARP_);

if(cljs.core.truth_(or__3548__auto____241377))
{return or__3548__auto____241377;
} else
{var or__3548__auto____241378 = p2.call(null,p1__241263_SHARP_);

if(cljs.core.truth_(or__3548__auto____241378))
{return or__3548__auto____241378;
} else
{return p3.call(null,p1__241263_SHARP_);
}
}
}),args);
}
};
var G__241411 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241411__delegate.call(this, x, y, z, args);
};
G__241411.cljs$lang$maxFixedArity = 3;
G__241411.cljs$lang$applyTo = (function (arglist__241412){
var x = cljs.core.first(arglist__241412);
var y = cljs.core.first(cljs.core.next(arglist__241412));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241412)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241412)));
return G__241411__delegate.call(this, x, y, z, args);
});
return G__241411;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__241405.call(this);
case  1 :
return sp3__241406.call(this,x);
case  2 :
return sp3__241407.call(this,x,y);
case  3 :
return sp3__241408.call(this,x,y,z);
default:
return sp3__241409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__241409.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__241387 = (function() { 
var G__241413__delegate = function (p1,p2,p3,ps){
var ps__241379 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__241414 = (function (){
return null;
});
var spn__241415 = (function (x){
return cljs.core.some.call(null,(function (p1__241264_SHARP_){
return p1__241264_SHARP_.call(null,x);
}),ps__241379);
});
var spn__241416 = (function (x,y){
return cljs.core.some.call(null,(function (p1__241265_SHARP_){
var or__3548__auto____241380 = p1__241265_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____241380))
{return or__3548__auto____241380;
} else
{return p1__241265_SHARP_.call(null,y);
}
}),ps__241379);
});
var spn__241417 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__241266_SHARP_){
var or__3548__auto____241381 = p1__241266_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____241381))
{return or__3548__auto____241381;
} else
{var or__3548__auto____241382 = p1__241266_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____241382))
{return or__3548__auto____241382;
} else
{return p1__241266_SHARP_.call(null,z);
}
}
}),ps__241379);
});
var spn__241418 = (function() { 
var G__241420__delegate = function (x,y,z,args){
var or__3548__auto____241383 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____241383))
{return or__3548__auto____241383;
} else
{return cljs.core.some.call(null,(function (p1__241267_SHARP_){
return cljs.core.some.call(null,p1__241267_SHARP_,args);
}),ps__241379);
}
};
var G__241420 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241420__delegate.call(this, x, y, z, args);
};
G__241420.cljs$lang$maxFixedArity = 3;
G__241420.cljs$lang$applyTo = (function (arglist__241421){
var x = cljs.core.first(arglist__241421);
var y = cljs.core.first(cljs.core.next(arglist__241421));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241421)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241421)));
return G__241420__delegate.call(this, x, y, z, args);
});
return G__241420;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__241414.call(this);
case  1 :
return spn__241415.call(this,x);
case  2 :
return spn__241416.call(this,x,y);
case  3 :
return spn__241417.call(this,x,y,z);
default:
return spn__241418.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__241418.cljs$lang$applyTo;
return spn;
})()
};
var G__241413 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241413__delegate.call(this, p1, p2, p3, ps);
};
G__241413.cljs$lang$maxFixedArity = 3;
G__241413.cljs$lang$applyTo = (function (arglist__241422){
var p1 = cljs.core.first(arglist__241422);
var p2 = cljs.core.first(cljs.core.next(arglist__241422));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241422)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241422)));
return G__241413__delegate.call(this, p1, p2, p3, ps);
});
return G__241413;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__241384.call(this,p1);
case  2 :
return some_fn__241385.call(this,p1,p2);
case  3 :
return some_fn__241386.call(this,p1,p2,p3);
default:
return some_fn__241387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__241387.cljs$lang$applyTo;
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
var map__241435 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241423 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241423))
{var s__241424 = temp__3698__auto____241423;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__241424)),map.call(null,f,cljs.core.rest.call(null,s__241424)));
} else
{return null;
}
})));
});
var map__241436 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__241425 = cljs.core.seq.call(null,c1);
var s2__241426 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____241427 = s1__241425;

if(cljs.core.truth_(and__3546__auto____241427))
{return s2__241426;
} else
{return and__3546__auto____241427;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__241425),cljs.core.first.call(null,s2__241426)),map.call(null,f,cljs.core.rest.call(null,s1__241425),cljs.core.rest.call(null,s2__241426)));
} else
{return null;
}
})));
});
var map__241437 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__241428 = cljs.core.seq.call(null,c1);
var s2__241429 = cljs.core.seq.call(null,c2);
var s3__241430 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____241431 = s1__241428;

if(cljs.core.truth_(and__3546__auto____241431))
{var and__3546__auto____241432 = s2__241429;

if(cljs.core.truth_(and__3546__auto____241432))
{return s3__241430;
} else
{return and__3546__auto____241432;
}
} else
{return and__3546__auto____241431;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__241428),cljs.core.first.call(null,s2__241429),cljs.core.first.call(null,s3__241430)),map.call(null,f,cljs.core.rest.call(null,s1__241428),cljs.core.rest.call(null,s2__241429),cljs.core.rest.call(null,s3__241430)));
} else
{return null;
}
})));
});
var map__241438 = (function() { 
var G__241440__delegate = function (f,c1,c2,c3,colls){
var step__241434 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__241433 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__241433)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__241433),step.call(null,map.call(null,cljs.core.rest,ss__241433)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__241345_SHARP_){
return cljs.core.apply.call(null,f,p1__241345_SHARP_);
}),step__241434.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__241440 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__241440__delegate.call(this, f, c1, c2, c3, colls);
};
G__241440.cljs$lang$maxFixedArity = 4;
G__241440.cljs$lang$applyTo = (function (arglist__241441){
var f = cljs.core.first(arglist__241441);
var c1 = cljs.core.first(cljs.core.next(arglist__241441));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241441)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__241441))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__241441))));
return G__241440__delegate.call(this, f, c1, c2, c3, colls);
});
return G__241440;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__241435.call(this,f,c1);
case  3 :
return map__241436.call(this,f,c1,c2);
case  4 :
return map__241437.call(this,f,c1,c2,c3);
default:
return map__241438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__241438.cljs$lang$applyTo;
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
{var temp__3698__auto____241442 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241442))
{var s__241443 = temp__3698__auto____241442;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__241443),take.call(null,(n - 1),cljs.core.rest.call(null,s__241443)));
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
var step__241446 = (function (n,coll){
while(true){
var s__241444 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____241445 = (n > 0);

if(cljs.core.truth_(and__3546__auto____241445))
{return s__241444;
} else
{return and__3546__auto____241445;
}
})()))
{{
var G__241447 = (n - 1);
var G__241448 = cljs.core.rest.call(null,s__241444);
n = G__241447;
coll = G__241448;
continue;
}
} else
{return s__241444;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__241446.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__241449 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__241450 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__241449.call(this,n);
case  2 :
return drop_last__241450.call(this,n,s);
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
var s__241452 = cljs.core.seq.call(null,coll);
var lead__241453 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__241453))
{{
var G__241454 = cljs.core.next.call(null,s__241452);
var G__241455 = cljs.core.next.call(null,lead__241453);
s__241452 = G__241454;
lead__241453 = G__241455;
continue;
}
} else
{return s__241452;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__241458 = (function (pred,coll){
while(true){
var s__241456 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____241457 = s__241456;

if(cljs.core.truth_(and__3546__auto____241457))
{return pred.call(null,cljs.core.first.call(null,s__241456));
} else
{return and__3546__auto____241457;
}
})()))
{{
var G__241459 = pred;
var G__241460 = cljs.core.rest.call(null,s__241456);
pred = G__241459;
coll = G__241460;
continue;
}
} else
{return s__241456;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__241458.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241461 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241461))
{var s__241462 = temp__3698__auto____241461;

return cljs.core.concat.call(null,s__241462,cycle.call(null,s__241462));
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
var repeat__241463 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__241464 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__241463.call(this,n);
case  2 :
return repeat__241464.call(this,n,x);
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
var repeatedly__241466 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__241467 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__241466.call(this,n);
case  2 :
return repeatedly__241467.call(this,n,f);
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
var interleave__241473 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__241469 = cljs.core.seq.call(null,c1);
var s2__241470 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____241471 = s1__241469;

if(cljs.core.truth_(and__3546__auto____241471))
{return s2__241470;
} else
{return and__3546__auto____241471;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__241469),cljs.core.cons.call(null,cljs.core.first.call(null,s2__241470),interleave.call(null,cljs.core.rest.call(null,s1__241469),cljs.core.rest.call(null,s2__241470))));
} else
{return null;
}
})));
});
var interleave__241474 = (function() { 
var G__241476__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__241472 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__241472)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__241472),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__241472)));
} else
{return null;
}
})));
};
var G__241476 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__241476__delegate.call(this, c1, c2, colls);
};
G__241476.cljs$lang$maxFixedArity = 2;
G__241476.cljs$lang$applyTo = (function (arglist__241477){
var c1 = cljs.core.first(arglist__241477);
var c2 = cljs.core.first(cljs.core.next(arglist__241477));
var colls = cljs.core.rest(cljs.core.next(arglist__241477));
return G__241476__delegate.call(this, c1, c2, colls);
});
return G__241476;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__241473.call(this,c1,c2);
default:
return interleave__241474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__241474.cljs$lang$applyTo;
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
var cat__241480 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____241478 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____241478))
{var coll__241479 = temp__3695__auto____241478;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__241479),cat.call(null,cljs.core.rest.call(null,coll__241479),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__241480.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__241481 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__241482 = (function() { 
var G__241484__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__241484 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__241484__delegate.call(this, f, coll, colls);
};
G__241484.cljs$lang$maxFixedArity = 2;
G__241484.cljs$lang$applyTo = (function (arglist__241485){
var f = cljs.core.first(arglist__241485);
var coll = cljs.core.first(cljs.core.next(arglist__241485));
var colls = cljs.core.rest(cljs.core.next(arglist__241485));
return G__241484__delegate.call(this, f, coll, colls);
});
return G__241484;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__241481.call(this,f,coll);
default:
return mapcat__241482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__241482.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241486 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241486))
{var s__241487 = temp__3698__auto____241486;

var f__241488 = cljs.core.first.call(null,s__241487);
var r__241489 = cljs.core.rest.call(null,s__241487);

if(cljs.core.truth_(pred.call(null,f__241488)))
{return cljs.core.cons.call(null,f__241488,filter.call(null,pred,r__241489));
} else
{return filter.call(null,pred,r__241489);
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
var walk__241491 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__241491.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__241490_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__241490_SHARP_));
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
var partition__241498 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__241499 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241492 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241492))
{var s__241493 = temp__3698__auto____241492;

var p__241494 = cljs.core.take.call(null,n,s__241493);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__241494))))
{return cljs.core.cons.call(null,p__241494,partition.call(null,n,step,cljs.core.drop.call(null,step,s__241493)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__241500 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241495 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241495))
{var s__241496 = temp__3698__auto____241495;

var p__241497 = cljs.core.take.call(null,n,s__241496);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__241497))))
{return cljs.core.cons.call(null,p__241497,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__241496)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__241497,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__241498.call(this,n,step);
case  3 :
return partition__241499.call(this,n,step,pad);
case  4 :
return partition__241500.call(this,n,step,pad,coll);
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
var get_in__241506 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__241507 = (function (m,ks,not_found){
var sentinel__241502 = cljs.core.lookup_sentinel;
var m__241503 = m;
var ks__241504 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__241504))
{var m__241505 = cljs.core.get.call(null,m__241503,cljs.core.first.call(null,ks__241504),sentinel__241502);

if(cljs.core.truth_((sentinel__241502 === m__241505)))
{return not_found;
} else
{{
var G__241509 = sentinel__241502;
var G__241510 = m__241505;
var G__241511 = cljs.core.next.call(null,ks__241504);
sentinel__241502 = G__241509;
m__241503 = G__241510;
ks__241504 = G__241511;
continue;
}
}
} else
{return m__241503;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__241506.call(this,m,ks);
case  3 :
return get_in__241507.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__241512,v){
var vec__241513__241514 = p__241512;
var k__241515 = cljs.core.nth.call(null,vec__241513__241514,0,null);
var ks__241516 = cljs.core.nthnext.call(null,vec__241513__241514,1);

if(cljs.core.truth_(ks__241516))
{return cljs.core.assoc.call(null,m,k__241515,assoc_in.call(null,cljs.core.get.call(null,m,k__241515),ks__241516,v));
} else
{return cljs.core.assoc.call(null,m,k__241515,v);
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
var update_in__delegate = function (m,p__241517,f,args){
var vec__241518__241519 = p__241517;
var k__241520 = cljs.core.nth.call(null,vec__241518__241519,0,null);
var ks__241521 = cljs.core.nthnext.call(null,vec__241518__241519,1);

if(cljs.core.truth_(ks__241521))
{return cljs.core.assoc.call(null,m,k__241520,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__241520),ks__241521,f,args));
} else
{return cljs.core.assoc.call(null,m,k__241520,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__241520),args));
}
};
var update_in = function (m,p__241517,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__241517, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__241522){
var m = cljs.core.first(arglist__241522);
var p__241517 = cljs.core.first(cljs.core.next(arglist__241522));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241522)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241522)));
return update_in__delegate.call(this, m, p__241517, f, args);
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
var this__241523 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__241556 = null;
var G__241556__241557 = (function (coll,k){
var this__241524 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__241556__241558 = (function (coll,k,not_found){
var this__241525 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__241556 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__241556__241557.call(this,coll,k);
case  3 :
return G__241556__241558.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241556;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__241526 = this;
var new_array__241527 = cljs.core.aclone.call(null,this__241526.array);

(new_array__241527[k] = v);
return (new cljs.core.Vector(this__241526.meta,new_array__241527));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__241560 = null;
var G__241560__241561 = (function (tsym241528,k){
var this__241530 = this;
var tsym241528__241531 = this;

var coll__241532 = tsym241528__241531;

return cljs.core._lookup.call(null,coll__241532,k);
});
var G__241560__241562 = (function (tsym241529,k,not_found){
var this__241533 = this;
var tsym241529__241534 = this;

var coll__241535 = tsym241529__241534;

return cljs.core._lookup.call(null,coll__241535,k,not_found);
});
G__241560 = function(tsym241529,k,not_found){
switch(arguments.length){
case  2 :
return G__241560__241561.call(this,tsym241529,k);
case  3 :
return G__241560__241562.call(this,tsym241529,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241560;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__241536 = this;
var new_array__241537 = cljs.core.aclone.call(null,this__241536.array);

new_array__241537.push(o);
return (new cljs.core.Vector(this__241536.meta,new_array__241537));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__241564 = null;
var G__241564__241565 = (function (v,f){
var this__241538 = this;
return cljs.core.ci_reduce.call(null,this__241538.array,f);
});
var G__241564__241566 = (function (v,f,start){
var this__241539 = this;
return cljs.core.ci_reduce.call(null,this__241539.array,f,start);
});
G__241564 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__241564__241565.call(this,v,f);
case  3 :
return G__241564__241566.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241564;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__241540 = this;
if(cljs.core.truth_((this__241540.array.length > 0)))
{var vector_seq__241541 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__241540.array.length)))
{return cljs.core.cons.call(null,(this__241540.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__241541.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__241542 = this;
return this__241542.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__241543 = this;
var count__241544 = this__241543.array.length;

if(cljs.core.truth_((count__241544 > 0)))
{return (this__241543.array[(count__241544 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__241545 = this;
if(cljs.core.truth_((this__241545.array.length > 0)))
{var new_array__241546 = cljs.core.aclone.call(null,this__241545.array);

new_array__241546.pop();
return (new cljs.core.Vector(this__241545.meta,new_array__241546));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__241547 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241548 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241549 = this;
return (new cljs.core.Vector(meta,this__241549.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241550 = this;
return this__241550.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__241568 = null;
var G__241568__241569 = (function (coll,n){
var this__241551 = this;
if(cljs.core.truth_((function (){var and__3546__auto____241552 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____241552))
{return (n < this__241551.array.length);
} else
{return and__3546__auto____241552;
}
})()))
{return (this__241551.array[n]);
} else
{return null;
}
});
var G__241568__241570 = (function (coll,n,not_found){
var this__241553 = this;
if(cljs.core.truth_((function (){var and__3546__auto____241554 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____241554))
{return (n < this__241553.array.length);
} else
{return and__3546__auto____241554;
}
})()))
{return (this__241553.array[n]);
} else
{return not_found;
}
});
G__241568 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__241568__241569.call(this,coll,n);
case  3 :
return G__241568__241570.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241568;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241555 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__241555.meta);
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
vector.cljs$lang$applyTo = (function (arglist__241572){
var args = cljs.core.seq( arglist__241572 );;
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
var this__241573 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__241601 = null;
var G__241601__241602 = (function (coll,k){
var this__241574 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__241601__241603 = (function (coll,k,not_found){
var this__241575 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__241601 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__241601__241602.call(this,coll,k);
case  3 :
return G__241601__241603.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241601;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__241576 = this;
var v_pos__241577 = (this__241576.start + key);

return (new cljs.core.Subvec(this__241576.meta,cljs.core._assoc.call(null,this__241576.v,v_pos__241577,val),this__241576.start,((this__241576.end > (v_pos__241577 + 1)) ? this__241576.end : (v_pos__241577 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__241605 = null;
var G__241605__241606 = (function (tsym241578,k){
var this__241580 = this;
var tsym241578__241581 = this;

var coll__241582 = tsym241578__241581;

return cljs.core._lookup.call(null,coll__241582,k);
});
var G__241605__241607 = (function (tsym241579,k,not_found){
var this__241583 = this;
var tsym241579__241584 = this;

var coll__241585 = tsym241579__241584;

return cljs.core._lookup.call(null,coll__241585,k,not_found);
});
G__241605 = function(tsym241579,k,not_found){
switch(arguments.length){
case  2 :
return G__241605__241606.call(this,tsym241579,k);
case  3 :
return G__241605__241607.call(this,tsym241579,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241605;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__241586 = this;
return (new cljs.core.Subvec(this__241586.meta,cljs.core._assoc_n.call(null,this__241586.v,this__241586.end,o),this__241586.start,(this__241586.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__241609 = null;
var G__241609__241610 = (function (coll,f){
var this__241587 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__241609__241611 = (function (coll,f,start){
var this__241588 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__241609 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__241609__241610.call(this,coll,f);
case  3 :
return G__241609__241611.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241609;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__241589 = this;
var subvec_seq__241590 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__241589.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__241589.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__241590.call(null,this__241589.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__241591 = this;
return (this__241591.end - this__241591.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__241592 = this;
return cljs.core._nth.call(null,this__241592.v,(this__241592.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__241593 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__241593.start,this__241593.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__241593.meta,this__241593.v,this__241593.start,(this__241593.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__241594 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241595 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241596 = this;
return (new cljs.core.Subvec(meta,this__241596.v,this__241596.start,this__241596.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241597 = this;
return this__241597.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__241613 = null;
var G__241613__241614 = (function (coll,n){
var this__241598 = this;
return cljs.core._nth.call(null,this__241598.v,(this__241598.start + n));
});
var G__241613__241615 = (function (coll,n,not_found){
var this__241599 = this;
return cljs.core._nth.call(null,this__241599.v,(this__241599.start + n),not_found);
});
G__241613 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__241613__241614.call(this,coll,n);
case  3 :
return G__241613__241615.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241613;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241600 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__241600.meta);
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
var subvec__241617 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__241618 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__241617.call(this,v,start);
case  3 :
return subvec__241618.call(this,v,start,end);
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
var this__241620 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__241621 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241622 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241623 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__241623.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__241624 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__241625 = this;
return cljs.core._first.call(null,this__241625.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__241626 = this;
var temp__3695__auto____241627 = cljs.core.next.call(null,this__241626.front);

if(cljs.core.truth_(temp__3695__auto____241627))
{var f1__241628 = temp__3695__auto____241627;

return (new cljs.core.PersistentQueueSeq(this__241626.meta,f1__241628,this__241626.rear));
} else
{if(cljs.core.truth_((this__241626.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__241626.meta,this__241626.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241629 = this;
return this__241629.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241630 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__241630.front,this__241630.rear));
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
var this__241631 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__241632 = this;
if(cljs.core.truth_(this__241632.front))
{return (new cljs.core.PersistentQueue(this__241632.meta,(this__241632.count + 1),this__241632.front,cljs.core.conj.call(null,(function (){var or__3548__auto____241633 = this__241632.rear;

if(cljs.core.truth_(or__3548__auto____241633))
{return or__3548__auto____241633;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__241632.meta,(this__241632.count + 1),cljs.core.conj.call(null,this__241632.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__241634 = this;
var rear__241635 = cljs.core.seq.call(null,this__241634.rear);

if(cljs.core.truth_((function (){var or__3548__auto____241636 = this__241634.front;

if(cljs.core.truth_(or__3548__auto____241636))
{return or__3548__auto____241636;
} else
{return rear__241635;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__241634.front,cljs.core.seq.call(null,rear__241635)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__241637 = this;
return this__241637.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__241638 = this;
return cljs.core._first.call(null,this__241638.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__241639 = this;
if(cljs.core.truth_(this__241639.front))
{var temp__3695__auto____241640 = cljs.core.next.call(null,this__241639.front);

if(cljs.core.truth_(temp__3695__auto____241640))
{var f1__241641 = temp__3695__auto____241640;

return (new cljs.core.PersistentQueue(this__241639.meta,(this__241639.count - 1),f1__241641,this__241639.rear));
} else
{return (new cljs.core.PersistentQueue(this__241639.meta,(this__241639.count - 1),cljs.core.seq.call(null,this__241639.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__241642 = this;
return cljs.core.first.call(null,this__241642.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__241643 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241644 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241645 = this;
return (new cljs.core.PersistentQueue(meta,this__241645.count,this__241645.front,this__241645.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241646 = this;
return this__241646.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241647 = this;
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
var this__241648 = this;
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
var len__241649 = array.length;

var i__241650 = 0;

while(true){
if(cljs.core.truth_((i__241650 < len__241649)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__241650]))))
{return i__241650;
} else
{{
var G__241651 = (i__241650 + incr);
i__241650 = G__241651;
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
var obj_map_contains_key_QMARK___241653 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___241654 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____241652 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____241652))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____241652;
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
return obj_map_contains_key_QMARK___241653.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___241654.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__241657 = cljs.core.hash.call(null,a);
var b__241658 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__241657 < b__241658)))
{return -1;
} else
{if(cljs.core.truth_((a__241657 > b__241658)))
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
var this__241659 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__241686 = null;
var G__241686__241687 = (function (coll,k){
var this__241660 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__241686__241688 = (function (coll,k,not_found){
var this__241661 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__241661.strobj,(this__241661.strobj[k]),not_found);
});
G__241686 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__241686__241687.call(this,coll,k);
case  3 :
return G__241686__241688.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241686;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__241662 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__241663 = goog.object.clone.call(null,this__241662.strobj);
var overwrite_QMARK___241664 = new_strobj__241663.hasOwnProperty(k);

(new_strobj__241663[k] = v);
if(cljs.core.truth_(overwrite_QMARK___241664))
{return (new cljs.core.ObjMap(this__241662.meta,this__241662.keys,new_strobj__241663));
} else
{var new_keys__241665 = cljs.core.aclone.call(null,this__241662.keys);

new_keys__241665.push(k);
return (new cljs.core.ObjMap(this__241662.meta,new_keys__241665,new_strobj__241663));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__241662.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__241666 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__241666.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__241690 = null;
var G__241690__241691 = (function (tsym241667,k){
var this__241669 = this;
var tsym241667__241670 = this;

var coll__241671 = tsym241667__241670;

return cljs.core._lookup.call(null,coll__241671,k);
});
var G__241690__241692 = (function (tsym241668,k,not_found){
var this__241672 = this;
var tsym241668__241673 = this;

var coll__241674 = tsym241668__241673;

return cljs.core._lookup.call(null,coll__241674,k,not_found);
});
G__241690 = function(tsym241668,k,not_found){
switch(arguments.length){
case  2 :
return G__241690__241691.call(this,tsym241668,k);
case  3 :
return G__241690__241692.call(this,tsym241668,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241690;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__241675 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__241676 = this;
if(cljs.core.truth_((this__241676.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__241656_SHARP_){
return cljs.core.vector.call(null,p1__241656_SHARP_,(this__241676.strobj[p1__241656_SHARP_]));
}),this__241676.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__241677 = this;
return this__241677.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241678 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241679 = this;
return (new cljs.core.ObjMap(meta,this__241679.keys,this__241679.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241680 = this;
return this__241680.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241681 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__241681.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__241682 = this;
if(cljs.core.truth_((function (){var and__3546__auto____241683 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____241683))
{return this__241682.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____241683;
}
})()))
{var new_keys__241684 = cljs.core.aclone.call(null,this__241682.keys);
var new_strobj__241685 = goog.object.clone.call(null,this__241682.strobj);

new_keys__241684.splice(cljs.core.scan_array.call(null,1,k,new_keys__241684),1);
cljs.core.js_delete.call(null,new_strobj__241685,k);
return (new cljs.core.ObjMap(this__241682.meta,new_keys__241684,new_strobj__241685));
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
var this__241695 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__241733 = null;
var G__241733__241734 = (function (coll,k){
var this__241696 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__241733__241735 = (function (coll,k,not_found){
var this__241697 = this;
var bucket__241698 = (this__241697.hashobj[cljs.core.hash.call(null,k)]);
var i__241699 = (cljs.core.truth_(bucket__241698)?cljs.core.scan_array.call(null,2,k,bucket__241698):null);

if(cljs.core.truth_(i__241699))
{return (bucket__241698[(i__241699 + 1)]);
} else
{return not_found;
}
});
G__241733 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__241733__241734.call(this,coll,k);
case  3 :
return G__241733__241735.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241733;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__241700 = this;
var h__241701 = cljs.core.hash.call(null,k);
var bucket__241702 = (this__241700.hashobj[h__241701]);

if(cljs.core.truth_(bucket__241702))
{var new_bucket__241703 = cljs.core.aclone.call(null,bucket__241702);
var new_hashobj__241704 = goog.object.clone.call(null,this__241700.hashobj);

(new_hashobj__241704[h__241701] = new_bucket__241703);
var temp__3695__auto____241705 = cljs.core.scan_array.call(null,2,k,new_bucket__241703);

if(cljs.core.truth_(temp__3695__auto____241705))
{var i__241706 = temp__3695__auto____241705;

(new_bucket__241703[(i__241706 + 1)] = v);
return (new cljs.core.HashMap(this__241700.meta,this__241700.count,new_hashobj__241704));
} else
{new_bucket__241703.push(k,v);
return (new cljs.core.HashMap(this__241700.meta,(this__241700.count + 1),new_hashobj__241704));
}
} else
{var new_hashobj__241707 = goog.object.clone.call(null,this__241700.hashobj);

(new_hashobj__241707[h__241701] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__241700.meta,(this__241700.count + 1),new_hashobj__241707));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__241708 = this;
var bucket__241709 = (this__241708.hashobj[cljs.core.hash.call(null,k)]);
var i__241710 = (cljs.core.truth_(bucket__241709)?cljs.core.scan_array.call(null,2,k,bucket__241709):null);

if(cljs.core.truth_(i__241710))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__241737 = null;
var G__241737__241738 = (function (tsym241711,k){
var this__241713 = this;
var tsym241711__241714 = this;

var coll__241715 = tsym241711__241714;

return cljs.core._lookup.call(null,coll__241715,k);
});
var G__241737__241739 = (function (tsym241712,k,not_found){
var this__241716 = this;
var tsym241712__241717 = this;

var coll__241718 = tsym241712__241717;

return cljs.core._lookup.call(null,coll__241718,k,not_found);
});
G__241737 = function(tsym241712,k,not_found){
switch(arguments.length){
case  2 :
return G__241737__241738.call(this,tsym241712,k);
case  3 :
return G__241737__241739.call(this,tsym241712,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241737;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__241719 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__241720 = this;
if(cljs.core.truth_((this__241720.count > 0)))
{var hashes__241721 = cljs.core.js_keys.call(null,this__241720.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__241694_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__241720.hashobj[p1__241694_SHARP_])));
}),hashes__241721);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__241722 = this;
return this__241722.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241723 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241724 = this;
return (new cljs.core.HashMap(meta,this__241724.count,this__241724.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241725 = this;
return this__241725.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241726 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__241726.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__241727 = this;
var h__241728 = cljs.core.hash.call(null,k);
var bucket__241729 = (this__241727.hashobj[h__241728]);
var i__241730 = (cljs.core.truth_(bucket__241729)?cljs.core.scan_array.call(null,2,k,bucket__241729):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__241730)))
{return coll;
} else
{var new_hashobj__241731 = goog.object.clone.call(null,this__241727.hashobj);

if(cljs.core.truth_((3 > bucket__241729.length)))
{cljs.core.js_delete.call(null,new_hashobj__241731,h__241728);
} else
{var new_bucket__241732 = cljs.core.aclone.call(null,bucket__241729);

new_bucket__241732.splice(i__241730,2);
(new_hashobj__241731[h__241728] = new_bucket__241732);
}
return (new cljs.core.HashMap(this__241727.meta,(this__241727.count - 1),new_hashobj__241731));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__241741 = ks.length;

var i__241742 = 0;
var out__241743 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__241742 < len__241741)))
{{
var G__241744 = (i__241742 + 1);
var G__241745 = cljs.core.assoc.call(null,out__241743,(ks[i__241742]),(vs[i__241742]));
i__241742 = G__241744;
out__241743 = G__241745;
continue;
}
} else
{return out__241743;
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
var in$__241746 = cljs.core.seq.call(null,keyvals);
var out__241747 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__241746))
{{
var G__241748 = cljs.core.nnext.call(null,in$__241746);
var G__241749 = cljs.core.assoc.call(null,out__241747,cljs.core.first.call(null,in$__241746),cljs.core.second.call(null,in$__241746));
in$__241746 = G__241748;
out__241747 = G__241749;
continue;
}
} else
{return out__241747;
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
hash_map.cljs$lang$applyTo = (function (arglist__241750){
var keyvals = cljs.core.seq( arglist__241750 );;
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
{return cljs.core.reduce.call(null,(function (p1__241751_SHARP_,p2__241752_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____241753 = p1__241751_SHARP_;

if(cljs.core.truth_(or__3548__auto____241753))
{return or__3548__auto____241753;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__241752_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__241754){
var maps = cljs.core.seq( arglist__241754 );;
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
{var merge_entry__241757 = (function (m,e){
var k__241755 = cljs.core.first.call(null,e);
var v__241756 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__241755)))
{return cljs.core.assoc.call(null,m,k__241755,f.call(null,cljs.core.get.call(null,m,k__241755),v__241756));
} else
{return cljs.core.assoc.call(null,m,k__241755,v__241756);
}
});
var merge2__241759 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__241757,(function (){var or__3548__auto____241758 = m1;

if(cljs.core.truth_(or__3548__auto____241758))
{return or__3548__auto____241758;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__241759,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__241760){
var f = cljs.core.first(arglist__241760);
var maps = cljs.core.rest(arglist__241760);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__241762 = cljs.core.ObjMap.fromObject([],{});
var keys__241763 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__241763))
{var key__241764 = cljs.core.first.call(null,keys__241763);
var entry__241765 = cljs.core.get.call(null,map,key__241764,"\uFDD0'user/not-found");

{
var G__241766 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__241765,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__241762,key__241764,entry__241765):ret__241762);
var G__241767 = cljs.core.next.call(null,keys__241763);
ret__241762 = G__241766;
keys__241763 = G__241767;
continue;
}
} else
{return ret__241762;
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
var this__241768 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__241789 = null;
var G__241789__241790 = (function (coll,v){
var this__241769 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__241789__241791 = (function (coll,v,not_found){
var this__241770 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__241770.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__241789 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__241789__241790.call(this,coll,v);
case  3 :
return G__241789__241791.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241789;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__241793 = null;
var G__241793__241794 = (function (tsym241771,k){
var this__241773 = this;
var tsym241771__241774 = this;

var coll__241775 = tsym241771__241774;

return cljs.core._lookup.call(null,coll__241775,k);
});
var G__241793__241795 = (function (tsym241772,k,not_found){
var this__241776 = this;
var tsym241772__241777 = this;

var coll__241778 = tsym241772__241777;

return cljs.core._lookup.call(null,coll__241778,k,not_found);
});
G__241793 = function(tsym241772,k,not_found){
switch(arguments.length){
case  2 :
return G__241793__241794.call(this,tsym241772,k);
case  3 :
return G__241793__241795.call(this,tsym241772,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241793;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__241779 = this;
return (new cljs.core.Set(this__241779.meta,cljs.core.assoc.call(null,this__241779.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__241780 = this;
return cljs.core.keys.call(null,this__241780.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__241781 = this;
return (new cljs.core.Set(this__241781.meta,cljs.core.dissoc.call(null,this__241781.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__241782 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__241783 = this;
var and__3546__auto____241784 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____241784))
{var and__3546__auto____241785 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____241785))
{return cljs.core.every_QMARK_.call(null,(function (p1__241761_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__241761_SHARP_);
}),other);
} else
{return and__3546__auto____241785;
}
} else
{return and__3546__auto____241784;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__241786 = this;
return (new cljs.core.Set(meta,this__241786.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__241787 = this;
return this__241787.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__241788 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__241788.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__241798 = cljs.core.seq.call(null,coll);
var out__241799 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__241798))))
{{
var G__241800 = cljs.core.rest.call(null,in$__241798);
var G__241801 = cljs.core.conj.call(null,out__241799,cljs.core.first.call(null,in$__241798));
in$__241798 = G__241800;
out__241799 = G__241801;
continue;
}
} else
{return out__241799;
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
{var n__241802 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____241803 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____241803))
{var e__241804 = temp__3695__auto____241803;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__241804));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__241802,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__241797_SHARP_){
var temp__3695__auto____241805 = cljs.core.find.call(null,smap,p1__241797_SHARP_);

if(cljs.core.truth_(temp__3695__auto____241805))
{var e__241806 = temp__3695__auto____241805;

return cljs.core.second.call(null,e__241806);
} else
{return p1__241797_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__241814 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__241807,seen){
while(true){
var vec__241808__241809 = p__241807;
var f__241810 = cljs.core.nth.call(null,vec__241808__241809,0,null);
var xs__241811 = vec__241808__241809;

var temp__3698__auto____241812 = cljs.core.seq.call(null,xs__241811);

if(cljs.core.truth_(temp__3698__auto____241812))
{var s__241813 = temp__3698__auto____241812;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__241810)))
{{
var G__241815 = cljs.core.rest.call(null,s__241813);
var G__241816 = seen;
p__241807 = G__241815;
seen = G__241816;
continue;
}
} else
{return cljs.core.cons.call(null,f__241810,step.call(null,cljs.core.rest.call(null,s__241813),cljs.core.conj.call(null,seen,f__241810)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__241814.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__241817 = cljs.core.Vector.fromArray([]);
var s__241818 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__241818)))
{{
var G__241819 = cljs.core.conj.call(null,ret__241817,cljs.core.first.call(null,s__241818));
var G__241820 = cljs.core.next.call(null,s__241818);
ret__241817 = G__241819;
s__241818 = G__241820;
continue;
}
} else
{return cljs.core.seq.call(null,ret__241817);
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
{if(cljs.core.truth_((function (){var or__3548__auto____241821 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____241821))
{return or__3548__auto____241821;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__241822 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__241822 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__241822 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____241823 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____241823))
{return or__3548__auto____241823;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__241824 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__241824 > -1)))
{return cljs.core.subs.call(null,x,2,i__241824);
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
var map__241827 = cljs.core.ObjMap.fromObject([],{});
var ks__241828 = cljs.core.seq.call(null,keys);
var vs__241829 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____241830 = ks__241828;

if(cljs.core.truth_(and__3546__auto____241830))
{return vs__241829;
} else
{return and__3546__auto____241830;
}
})()))
{{
var G__241831 = cljs.core.assoc.call(null,map__241827,cljs.core.first.call(null,ks__241828),cljs.core.first.call(null,vs__241829));
var G__241832 = cljs.core.next.call(null,ks__241828);
var G__241833 = cljs.core.next.call(null,vs__241829);
map__241827 = G__241831;
ks__241828 = G__241832;
vs__241829 = G__241833;
continue;
}
} else
{return map__241827;
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
var max_key__241836 = (function (k,x){
return x;
});
var max_key__241837 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__241838 = (function() { 
var G__241840__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__241825_SHARP_,p2__241826_SHARP_){
return max_key.call(null,k,p1__241825_SHARP_,p2__241826_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__241840 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241840__delegate.call(this, k, x, y, more);
};
G__241840.cljs$lang$maxFixedArity = 3;
G__241840.cljs$lang$applyTo = (function (arglist__241841){
var k = cljs.core.first(arglist__241841);
var x = cljs.core.first(cljs.core.next(arglist__241841));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241841)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241841)));
return G__241840__delegate.call(this, k, x, y, more);
});
return G__241840;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__241836.call(this,k,x);
case  3 :
return max_key__241837.call(this,k,x,y);
default:
return max_key__241838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__241838.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__241842 = (function (k,x){
return x;
});
var min_key__241843 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__241844 = (function() { 
var G__241846__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__241834_SHARP_,p2__241835_SHARP_){
return min_key.call(null,k,p1__241834_SHARP_,p2__241835_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__241846 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241846__delegate.call(this, k, x, y, more);
};
G__241846.cljs$lang$maxFixedArity = 3;
G__241846.cljs$lang$applyTo = (function (arglist__241847){
var k = cljs.core.first(arglist__241847);
var x = cljs.core.first(cljs.core.next(arglist__241847));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241847)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241847)));
return G__241846__delegate.call(this, k, x, y, more);
});
return G__241846;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__241842.call(this,k,x);
case  3 :
return min_key__241843.call(this,k,x,y);
default:
return min_key__241844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__241844.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__241850 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__241851 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241848 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241848))
{var s__241849 = temp__3698__auto____241848;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__241849),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__241849)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__241850.call(this,n,step);
case  3 :
return partition_all__241851.call(this,n,step,coll);
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
var temp__3698__auto____241853 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241853))
{var s__241854 = temp__3698__auto____241853;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__241854))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__241854),take_while.call(null,pred,cljs.core.rest.call(null,s__241854)));
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
var this__241855 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__241856 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__241872 = null;
var G__241872__241873 = (function (rng,f){
var this__241857 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__241872__241874 = (function (rng,f,s){
var this__241858 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__241872 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__241872__241873.call(this,rng,f);
case  3 :
return G__241872__241874.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241872;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__241859 = this;
var comp__241860 = (cljs.core.truth_((this__241859.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__241860.call(null,this__241859.start,this__241859.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__241861 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__241861.end - this__241861.start) / this__241861.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__241862 = this;
return this__241862.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__241863 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__241863.meta,(this__241863.start + this__241863.step),this__241863.end,this__241863.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__241864 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__241865 = this;
return (new cljs.core.Range(meta,this__241865.start,this__241865.end,this__241865.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__241866 = this;
return this__241866.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__241876 = null;
var G__241876__241877 = (function (rng,n){
var this__241867 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__241867.start + (n * this__241867.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____241868 = (this__241867.start > this__241867.end);

if(cljs.core.truth_(and__3546__auto____241868))
{return cljs.core._EQ_.call(null,this__241867.step,0);
} else
{return and__3546__auto____241868;
}
})()))
{return this__241867.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__241876__241878 = (function (rng,n,not_found){
var this__241869 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__241869.start + (n * this__241869.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____241870 = (this__241869.start > this__241869.end);

if(cljs.core.truth_(and__3546__auto____241870))
{return cljs.core._EQ_.call(null,this__241869.step,0);
} else
{return and__3546__auto____241870;
}
})()))
{return this__241869.start;
} else
{return not_found;
}
}
});
G__241876 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__241876__241877.call(this,rng,n);
case  3 :
return G__241876__241878.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__241876;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__241871 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__241871.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__241880 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__241881 = (function (end){
return range.call(null,0,end,1);
});
var range__241882 = (function (start,end){
return range.call(null,start,end,1);
});
var range__241883 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__241880.call(this);
case  1 :
return range__241881.call(this,start);
case  2 :
return range__241882.call(this,start,end);
case  3 :
return range__241883.call(this,start,end,step);
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
var temp__3698__auto____241885 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241885))
{var s__241886 = temp__3698__auto____241885;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__241886),take_nth.call(null,n,cljs.core.drop.call(null,n,s__241886)));
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
var temp__3698__auto____241888 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241888))
{var s__241889 = temp__3698__auto____241888;

var fst__241890 = cljs.core.first.call(null,s__241889);
var fv__241891 = f.call(null,fst__241890);
var run__241892 = cljs.core.cons.call(null,fst__241890,cljs.core.take_while.call(null,(function (p1__241887_SHARP_){
return cljs.core._EQ_.call(null,fv__241891,f.call(null,p1__241887_SHARP_));
}),cljs.core.next.call(null,s__241889)));

return cljs.core.cons.call(null,run__241892,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__241892),s__241889))));
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
var reductions__241907 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____241903 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____241903))
{var s__241904 = temp__3695__auto____241903;

return reductions.call(null,f,cljs.core.first.call(null,s__241904),cljs.core.rest.call(null,s__241904));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__241908 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____241905 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____241905))
{var s__241906 = temp__3698__auto____241905;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__241906)),cljs.core.rest.call(null,s__241906));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__241907.call(this,f,init);
case  3 :
return reductions__241908.call(this,f,init,coll);
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
var juxt__241911 = (function (f){
return (function() {
var G__241916 = null;
var G__241916__241917 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__241916__241918 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__241916__241919 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__241916__241920 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__241916__241921 = (function() { 
var G__241923__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__241923 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241923__delegate.call(this, x, y, z, args);
};
G__241923.cljs$lang$maxFixedArity = 3;
G__241923.cljs$lang$applyTo = (function (arglist__241924){
var x = cljs.core.first(arglist__241924);
var y = cljs.core.first(cljs.core.next(arglist__241924));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241924)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241924)));
return G__241923__delegate.call(this, x, y, z, args);
});
return G__241923;
})()
;
G__241916 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__241916__241917.call(this);
case  1 :
return G__241916__241918.call(this,x);
case  2 :
return G__241916__241919.call(this,x,y);
case  3 :
return G__241916__241920.call(this,x,y,z);
default:
return G__241916__241921.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241916.cljs$lang$maxFixedArity = 3;
G__241916.cljs$lang$applyTo = G__241916__241921.cljs$lang$applyTo;
return G__241916;
})()
});
var juxt__241912 = (function (f,g){
return (function() {
var G__241925 = null;
var G__241925__241926 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__241925__241927 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__241925__241928 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__241925__241929 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__241925__241930 = (function() { 
var G__241932__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__241932 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241932__delegate.call(this, x, y, z, args);
};
G__241932.cljs$lang$maxFixedArity = 3;
G__241932.cljs$lang$applyTo = (function (arglist__241933){
var x = cljs.core.first(arglist__241933);
var y = cljs.core.first(cljs.core.next(arglist__241933));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241933)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241933)));
return G__241932__delegate.call(this, x, y, z, args);
});
return G__241932;
})()
;
G__241925 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__241925__241926.call(this);
case  1 :
return G__241925__241927.call(this,x);
case  2 :
return G__241925__241928.call(this,x,y);
case  3 :
return G__241925__241929.call(this,x,y,z);
default:
return G__241925__241930.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241925.cljs$lang$maxFixedArity = 3;
G__241925.cljs$lang$applyTo = G__241925__241930.cljs$lang$applyTo;
return G__241925;
})()
});
var juxt__241913 = (function (f,g,h){
return (function() {
var G__241934 = null;
var G__241934__241935 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__241934__241936 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__241934__241937 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__241934__241938 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__241934__241939 = (function() { 
var G__241941__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__241941 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241941__delegate.call(this, x, y, z, args);
};
G__241941.cljs$lang$maxFixedArity = 3;
G__241941.cljs$lang$applyTo = (function (arglist__241942){
var x = cljs.core.first(arglist__241942);
var y = cljs.core.first(cljs.core.next(arglist__241942));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241942)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241942)));
return G__241941__delegate.call(this, x, y, z, args);
});
return G__241941;
})()
;
G__241934 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__241934__241935.call(this);
case  1 :
return G__241934__241936.call(this,x);
case  2 :
return G__241934__241937.call(this,x,y);
case  3 :
return G__241934__241938.call(this,x,y,z);
default:
return G__241934__241939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241934.cljs$lang$maxFixedArity = 3;
G__241934.cljs$lang$applyTo = G__241934__241939.cljs$lang$applyTo;
return G__241934;
})()
});
var juxt__241914 = (function() { 
var G__241943__delegate = function (f,g,h,fs){
var fs__241910 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__241944 = null;
var G__241944__241945 = (function (){
return cljs.core.reduce.call(null,(function (p1__241893_SHARP_,p2__241894_SHARP_){
return cljs.core.conj.call(null,p1__241893_SHARP_,p2__241894_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__241910);
});
var G__241944__241946 = (function (x){
return cljs.core.reduce.call(null,(function (p1__241895_SHARP_,p2__241896_SHARP_){
return cljs.core.conj.call(null,p1__241895_SHARP_,p2__241896_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__241910);
});
var G__241944__241947 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__241897_SHARP_,p2__241898_SHARP_){
return cljs.core.conj.call(null,p1__241897_SHARP_,p2__241898_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__241910);
});
var G__241944__241948 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__241899_SHARP_,p2__241900_SHARP_){
return cljs.core.conj.call(null,p1__241899_SHARP_,p2__241900_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__241910);
});
var G__241944__241949 = (function() { 
var G__241951__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__241901_SHARP_,p2__241902_SHARP_){
return cljs.core.conj.call(null,p1__241901_SHARP_,cljs.core.apply.call(null,p2__241902_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__241910);
};
var G__241951 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241951__delegate.call(this, x, y, z, args);
};
G__241951.cljs$lang$maxFixedArity = 3;
G__241951.cljs$lang$applyTo = (function (arglist__241952){
var x = cljs.core.first(arglist__241952);
var y = cljs.core.first(cljs.core.next(arglist__241952));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241952)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241952)));
return G__241951__delegate.call(this, x, y, z, args);
});
return G__241951;
})()
;
G__241944 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__241944__241945.call(this);
case  1 :
return G__241944__241946.call(this,x);
case  2 :
return G__241944__241947.call(this,x,y);
case  3 :
return G__241944__241948.call(this,x,y,z);
default:
return G__241944__241949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__241944.cljs$lang$maxFixedArity = 3;
G__241944.cljs$lang$applyTo = G__241944__241949.cljs$lang$applyTo;
return G__241944;
})()
};
var G__241943 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__241943__delegate.call(this, f, g, h, fs);
};
G__241943.cljs$lang$maxFixedArity = 3;
G__241943.cljs$lang$applyTo = (function (arglist__241953){
var f = cljs.core.first(arglist__241953);
var g = cljs.core.first(cljs.core.next(arglist__241953));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__241953)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__241953)));
return G__241943__delegate.call(this, f, g, h, fs);
});
return G__241943;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__241911.call(this,f);
case  2 :
return juxt__241912.call(this,f,g);
case  3 :
return juxt__241913.call(this,f,g,h);
default:
return juxt__241914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__241914.cljs$lang$applyTo;
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
var dorun__241955 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__241958 = cljs.core.next.call(null,coll);
coll = G__241958;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__241956 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____241954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____241954))
{return (n > 0);
} else
{return and__3546__auto____241954;
}
})()))
{{
var G__241959 = (n - 1);
var G__241960 = cljs.core.next.call(null,coll);
n = G__241959;
coll = G__241960;
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
return dorun__241955.call(this,n);
case  2 :
return dorun__241956.call(this,n,coll);
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
var doall__241961 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__241962 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__241961.call(this,n);
case  2 :
return doall__241962.call(this,n,coll);
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
var matches__241964 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__241964),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__241964),1)))
{return cljs.core.first.call(null,matches__241964);
} else
{return cljs.core.vec.call(null,matches__241964);
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
var matches__241965 = re.exec(s);

if(cljs.core.truth_((matches__241965 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__241965),1)))
{return cljs.core.first.call(null,matches__241965);
} else
{return cljs.core.vec.call(null,matches__241965);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__241966 = cljs.core.re_find.call(null,re,s);
var match_idx__241967 = s.search(re);
var match_str__241968 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__241966))?cljs.core.first.call(null,match_data__241966):match_data__241966);
var post_match__241969 = cljs.core.subs.call(null,s,(match_idx__241967 + cljs.core.count.call(null,match_str__241968)));

if(cljs.core.truth_(match_data__241966))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__241966,re_seq.call(null,re,post_match__241969));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__241971__241972 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___241973 = cljs.core.nth.call(null,vec__241971__241972,0,null);
var flags__241974 = cljs.core.nth.call(null,vec__241971__241972,1,null);
var pattern__241975 = cljs.core.nth.call(null,vec__241971__241972,2,null);

return (new RegExp(pattern__241975,flags__241974));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__241970_SHARP_){
return print_one.call(null,p1__241970_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____241976 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____241976))
{var and__3546__auto____241980 = (function (){var x__450__auto____241977 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____241978 = x__450__auto____241977;

if(cljs.core.truth_(and__3546__auto____241978))
{var and__3546__auto____241979 = x__450__auto____241977.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____241979))
{return cljs.core.not.call(null,x__450__auto____241977.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____241979;
}
} else
{return and__3546__auto____241978;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____241977);
}
})();

if(cljs.core.truth_(and__3546__auto____241980))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____241980;
}
} else
{return and__3546__auto____241976;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____241981 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____241982 = x__450__auto____241981;

if(cljs.core.truth_(and__3546__auto____241982))
{var and__3546__auto____241983 = x__450__auto____241981.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____241983))
{return cljs.core.not.call(null,x__450__auto____241981.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____241983;
}
} else
{return and__3546__auto____241982;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____241981);
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
var first_obj__241984 = cljs.core.first.call(null,objs);
var sb__241985 = (new goog.string.StringBuffer());

var G__241986__241987 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__241986__241987))
{var obj__241988 = cljs.core.first.call(null,G__241986__241987);
var G__241986__241989 = G__241986__241987;

while(true){
if(cljs.core.truth_((obj__241988 === first_obj__241984)))
{} else
{sb__241985.append(" ");
}
var G__241990__241991 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__241988,opts));

if(cljs.core.truth_(G__241990__241991))
{var string__241992 = cljs.core.first.call(null,G__241990__241991);
var G__241990__241993 = G__241990__241991;

while(true){
sb__241985.append(string__241992);
var temp__3698__auto____241994 = cljs.core.next.call(null,G__241990__241993);

if(cljs.core.truth_(temp__3698__auto____241994))
{var G__241990__241995 = temp__3698__auto____241994;

{
var G__241998 = cljs.core.first.call(null,G__241990__241995);
var G__241999 = G__241990__241995;
string__241992 = G__241998;
G__241990__241993 = G__241999;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____241996 = cljs.core.next.call(null,G__241986__241989);

if(cljs.core.truth_(temp__3698__auto____241996))
{var G__241986__241997 = temp__3698__auto____241996;

{
var G__242000 = cljs.core.first.call(null,G__241986__241997);
var G__242001 = G__241986__241997;
obj__241988 = G__242000;
G__241986__241989 = G__242001;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__241985);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__242002 = cljs.core.first.call(null,objs);

var G__242003__242004 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__242003__242004))
{var obj__242005 = cljs.core.first.call(null,G__242003__242004);
var G__242003__242006 = G__242003__242004;

while(true){
if(cljs.core.truth_((obj__242005 === first_obj__242002)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__242007__242008 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__242005,opts));

if(cljs.core.truth_(G__242007__242008))
{var string__242009 = cljs.core.first.call(null,G__242007__242008);
var G__242007__242010 = G__242007__242008;

while(true){
cljs.core.string_print.call(null,string__242009);
var temp__3698__auto____242011 = cljs.core.next.call(null,G__242007__242010);

if(cljs.core.truth_(temp__3698__auto____242011))
{var G__242007__242012 = temp__3698__auto____242011;

{
var G__242015 = cljs.core.first.call(null,G__242007__242012);
var G__242016 = G__242007__242012;
string__242009 = G__242015;
G__242007__242010 = G__242016;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____242013 = cljs.core.next.call(null,G__242003__242006);

if(cljs.core.truth_(temp__3698__auto____242013))
{var G__242003__242014 = temp__3698__auto____242013;

{
var G__242017 = cljs.core.first.call(null,G__242003__242014);
var G__242018 = G__242003__242014;
obj__242005 = G__242017;
G__242003__242006 = G__242018;
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
pr_str.cljs$lang$applyTo = (function (arglist__242019){
var objs = cljs.core.seq( arglist__242019 );;
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
pr.cljs$lang$applyTo = (function (arglist__242020){
var objs = cljs.core.seq( arglist__242020 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__242021){
var objs = cljs.core.seq( arglist__242021 );;
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
println.cljs$lang$applyTo = (function (arglist__242022){
var objs = cljs.core.seq( arglist__242022 );;
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
prn.cljs$lang$applyTo = (function (arglist__242023){
var objs = cljs.core.seq( arglist__242023 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__242024 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__242024,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____242025 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____242025))
{var nspc__242026 = temp__3698__auto____242025;

return cljs.core.str.call(null,nspc__242026,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____242027 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____242027))
{var nspc__242028 = temp__3698__auto____242027;

return cljs.core.str.call(null,nspc__242028,"\/");
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
var pr_pair__242029 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__242029,"{",", ","}",opts,coll);
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
var this__242030 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__242031 = this;
var G__242032__242033 = cljs.core.seq.call(null,this__242031.watches);

if(cljs.core.truth_(G__242032__242033))
{var G__242035__242037 = cljs.core.first.call(null,G__242032__242033);
var vec__242036__242038 = G__242035__242037;
var key__242039 = cljs.core.nth.call(null,vec__242036__242038,0,null);
var f__242040 = cljs.core.nth.call(null,vec__242036__242038,1,null);
var G__242032__242041 = G__242032__242033;

var G__242035__242042 = G__242035__242037;
var G__242032__242043 = G__242032__242041;

while(true){
var vec__242044__242045 = G__242035__242042;
var key__242046 = cljs.core.nth.call(null,vec__242044__242045,0,null);
var f__242047 = cljs.core.nth.call(null,vec__242044__242045,1,null);
var G__242032__242048 = G__242032__242043;

f__242047.call(null,key__242046,this$,oldval,newval);
var temp__3698__auto____242049 = cljs.core.next.call(null,G__242032__242048);

if(cljs.core.truth_(temp__3698__auto____242049))
{var G__242032__242050 = temp__3698__auto____242049;

{
var G__242057 = cljs.core.first.call(null,G__242032__242050);
var G__242058 = G__242032__242050;
G__242035__242042 = G__242057;
G__242032__242043 = G__242058;
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
var this__242051 = this;
return this$.watches = cljs.core.assoc.call(null,this__242051.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__242052 = this;
return this$.watches = cljs.core.dissoc.call(null,this__242052.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__242053 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__242053.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__242054 = this;
return this__242054.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__242055 = this;
return this__242055.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__242056 = this;
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
var atom__242065 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__242066 = (function() { 
var G__242068__delegate = function (x,p__242059){
var map__242060__242061 = p__242059;
var map__242060__242062 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__242060__242061))?cljs.core.apply.call(null,cljs.core.hash_map,map__242060__242061):map__242060__242061);
var validator__242063 = cljs.core.get.call(null,map__242060__242062,"\uFDD0'validator");
var meta__242064 = cljs.core.get.call(null,map__242060__242062,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__242064,validator__242063,null));
};
var G__242068 = function (x,var_args){
var p__242059 = null;
if (goog.isDef(var_args)) {
  p__242059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__242068__delegate.call(this, x, p__242059);
};
G__242068.cljs$lang$maxFixedArity = 1;
G__242068.cljs$lang$applyTo = (function (arglist__242069){
var x = cljs.core.first(arglist__242069);
var p__242059 = cljs.core.rest(arglist__242069);
return G__242068__delegate.call(this, x, p__242059);
});
return G__242068;
})()
;
atom = function(x,var_args){
var p__242059 = var_args;
switch(arguments.length){
case  1 :
return atom__242065.call(this,x);
default:
return atom__242066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__242066.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____242070 = a.validator;

if(cljs.core.truth_(temp__3698__auto____242070))
{var validate__242071 = temp__3698__auto____242070;

if(cljs.core.truth_(validate__242071.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__242072 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__242072,new_value);
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
var swap_BANG___242073 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___242074 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___242075 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___242076 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___242077 = (function() { 
var G__242079__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__242079 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__242079__delegate.call(this, a, f, x, y, z, more);
};
G__242079.cljs$lang$maxFixedArity = 5;
G__242079.cljs$lang$applyTo = (function (arglist__242080){
var a = cljs.core.first(arglist__242080);
var f = cljs.core.first(cljs.core.next(arglist__242080));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__242080)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__242080))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__242080)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__242080)))));
return G__242079__delegate.call(this, a, f, x, y, z, more);
});
return G__242079;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___242073.call(this,a,f);
case  3 :
return swap_BANG___242074.call(this,a,f,x);
case  4 :
return swap_BANG___242075.call(this,a,f,x,y);
case  5 :
return swap_BANG___242076.call(this,a,f,x,y,z);
default:
return swap_BANG___242077.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___242077.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__242081){
var iref = cljs.core.first(arglist__242081);
var f = cljs.core.first(cljs.core.next(arglist__242081));
var args = cljs.core.rest(cljs.core.next(arglist__242081));
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
var gensym__242082 = (function (){
return gensym.call(null,"G__");
});
var gensym__242083 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__242082.call(this);
case  1 :
return gensym__242083.call(this,prefix_string);
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
var this__242085 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__242085.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__242086 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__242086.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__242086.state,this__242086.f);
}
return cljs.core.deref.call(null,this__242086.state);
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
delay.cljs$lang$applyTo = (function (arglist__242087){
var body = cljs.core.seq( arglist__242087 );;
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
var map__242088__242089 = options;
var map__242088__242090 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__242088__242089))?cljs.core.apply.call(null,cljs.core.hash_map,map__242088__242089):map__242088__242089);
var keywordize_keys__242091 = cljs.core.get.call(null,map__242088__242090,"\uFDD0'keywordize-keys");
var keyfn__242092 = (cljs.core.truth_(keywordize_keys__242091)?cljs.core.keyword:cljs.core.str);
var f__242098 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____242097 = (function iter__242093(s__242094){
return (new cljs.core.LazySeq(null,false,(function (){
var s__242094__242095 = s__242094;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__242094__242095)))
{var k__242096 = cljs.core.first.call(null,s__242094__242095);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__242092.call(null,k__242096),thisfn.call(null,(x[k__242096]))]),iter__242093.call(null,cljs.core.rest.call(null,s__242094__242095)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____242097.call(null,cljs.core.js_keys.call(null,x));
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

return f__242098.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__242099){
var x = cljs.core.first(arglist__242099);
var options = cljs.core.rest(arglist__242099);
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
var mem__242100 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__242104__delegate = function (args){
var temp__3695__auto____242101 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__242100),args);

if(cljs.core.truth_(temp__3695__auto____242101))
{var v__242102 = temp__3695__auto____242101;

return v__242102;
} else
{var ret__242103 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__242100,cljs.core.assoc,args,ret__242103);
return ret__242103;
}
};
var G__242104 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__242104__delegate.call(this, args);
};
G__242104.cljs$lang$maxFixedArity = 0;
G__242104.cljs$lang$applyTo = (function (arglist__242105){
var args = cljs.core.seq( arglist__242105 );;
return G__242104__delegate.call(this, args);
});
return G__242104;
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
var trampoline__242107 = (function (f){
while(true){
var ret__242106 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__242106)))
{{
var G__242110 = ret__242106;
f = G__242110;
continue;
}
} else
{return ret__242106;
}
break;
}
});
var trampoline__242108 = (function() { 
var G__242111__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__242111 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__242111__delegate.call(this, f, args);
};
G__242111.cljs$lang$maxFixedArity = 1;
G__242111.cljs$lang$applyTo = (function (arglist__242112){
var f = cljs.core.first(arglist__242112);
var args = cljs.core.rest(arglist__242112);
return G__242111__delegate.call(this, f, args);
});
return G__242111;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__242107.call(this,f);
default:
return trampoline__242108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__242108.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__242113 = (function (){
return rand.call(null,1);
});
var rand__242114 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__242113.call(this);
case  1 :
return rand__242114.call(this,n);
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
var k__242116 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__242116,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__242116,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___242125 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___242126 = (function (h,child,parent){
var or__3548__auto____242117 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____242117))
{return or__3548__auto____242117;
} else
{var or__3548__auto____242118 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____242118))
{return or__3548__auto____242118;
} else
{var and__3546__auto____242119 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____242119))
{var and__3546__auto____242120 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____242120))
{var and__3546__auto____242121 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____242121))
{var ret__242122 = true;
var i__242123 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____242124 = cljs.core.not.call(null,ret__242122);

if(cljs.core.truth_(or__3548__auto____242124))
{return or__3548__auto____242124;
} else
{return cljs.core._EQ_.call(null,i__242123,cljs.core.count.call(null,parent));
}
})()))
{return ret__242122;
} else
{{
var G__242128 = isa_QMARK_.call(null,h,child.call(null,i__242123),parent.call(null,i__242123));
var G__242129 = (i__242123 + 1);
ret__242122 = G__242128;
i__242123 = G__242129;
continue;
}
}
break;
}
} else
{return and__3546__auto____242121;
}
} else
{return and__3546__auto____242120;
}
} else
{return and__3546__auto____242119;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___242125.call(this,h,child);
case  3 :
return isa_QMARK___242126.call(this,h,child,parent);
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
var parents__242130 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__242131 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__242130.call(this,h);
case  2 :
return parents__242131.call(this,h,tag);
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
var ancestors__242133 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__242134 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__242133.call(this,h);
case  2 :
return ancestors__242134.call(this,h,tag);
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
var descendants__242136 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__242137 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__242136.call(this,h);
case  2 :
return descendants__242137.call(this,h,tag);
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
var derive__242147 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__242148 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__242142 = "\uFDD0'parents".call(null,h);
var td__242143 = "\uFDD0'descendants".call(null,h);
var ta__242144 = "\uFDD0'ancestors".call(null,h);
var tf__242145 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____242146 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__242142.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__242144.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__242144.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__242142,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__242145.call(null,"\uFDD0'ancestors".call(null,h),tag,td__242143,parent,ta__242144),"\uFDD0'descendants":tf__242145.call(null,"\uFDD0'descendants".call(null,h),parent,ta__242144,tag,td__242143)});
})());

if(cljs.core.truth_(or__3548__auto____242146))
{return or__3548__auto____242146;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__242147.call(this,h,tag);
case  3 :
return derive__242148.call(this,h,tag,parent);
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
var underive__242154 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__242155 = (function (h,tag,parent){
var parentMap__242150 = "\uFDD0'parents".call(null,h);
var childsParents__242151 = (cljs.core.truth_(parentMap__242150.call(null,tag))?cljs.core.disj.call(null,parentMap__242150.call(null,tag),parent):cljs.core.set([]));
var newParents__242152 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__242151))?cljs.core.assoc.call(null,parentMap__242150,tag,childsParents__242151):cljs.core.dissoc.call(null,parentMap__242150,tag));
var deriv_seq__242153 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__242139_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__242139_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__242139_SHARP_),cljs.core.second.call(null,p1__242139_SHARP_)));
}),cljs.core.seq.call(null,newParents__242152)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__242150.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__242140_SHARP_,p2__242141_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__242140_SHARP_,p2__242141_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__242153));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__242154.call(this,h,tag);
case  3 :
return underive__242155.call(this,h,tag,parent);
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
var xprefs__242157 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____242159 = (cljs.core.truth_((function (){var and__3546__auto____242158 = xprefs__242157;

if(cljs.core.truth_(and__3546__auto____242158))
{return xprefs__242157.call(null,y);
} else
{return and__3546__auto____242158;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____242159))
{return or__3548__auto____242159;
} else
{var or__3548__auto____242161 = (function (){var ps__242160 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__242160) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__242160),prefer_table)))
{} else
{}
{
var G__242164 = cljs.core.rest.call(null,ps__242160);
ps__242160 = G__242164;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____242161))
{return or__3548__auto____242161;
} else
{var or__3548__auto____242163 = (function (){var ps__242162 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__242162) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__242162),y,prefer_table)))
{} else
{}
{
var G__242165 = cljs.core.rest.call(null,ps__242162);
ps__242162 = G__242165;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____242163))
{return or__3548__auto____242163;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____242166 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____242166))
{return or__3548__auto____242166;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__242175 = cljs.core.reduce.call(null,(function (be,p__242167){
var vec__242168__242169 = p__242167;
var k__242170 = cljs.core.nth.call(null,vec__242168__242169,0,null);
var ___242171 = cljs.core.nth.call(null,vec__242168__242169,1,null);
var e__242172 = vec__242168__242169;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__242170)))
{var be2__242174 = (cljs.core.truth_((function (){var or__3548__auto____242173 = (be === null);

if(cljs.core.truth_(or__3548__auto____242173))
{return or__3548__auto____242173;
} else
{return cljs.core.dominates.call(null,k__242170,cljs.core.first.call(null,be),prefer_table);
}
})())?e__242172:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__242174),k__242170,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__242170," and ",cljs.core.first.call(null,be2__242174),", and neither is preferred")));
}
return be2__242174;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__242175))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__242175));
return cljs.core.second.call(null,best_entry__242175);
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
if(cljs.core.truth_((function (){var and__3546__auto____242176 = mf;

if(cljs.core.truth_(and__3546__auto____242176))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____242176;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____242177 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____242177))
{return or__3548__auto____242177;
} else
{var or__3548__auto____242178 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____242178))
{return or__3548__auto____242178;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____242179 = mf;

if(cljs.core.truth_(and__3546__auto____242179))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____242179;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____242180 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____242180))
{return or__3548__auto____242180;
} else
{var or__3548__auto____242181 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____242181))
{return or__3548__auto____242181;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____242182 = mf;

if(cljs.core.truth_(and__3546__auto____242182))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____242182;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____242183 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____242183))
{return or__3548__auto____242183;
} else
{var or__3548__auto____242184 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____242184))
{return or__3548__auto____242184;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____242185 = mf;

if(cljs.core.truth_(and__3546__auto____242185))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____242185;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____242186 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____242186))
{return or__3548__auto____242186;
} else
{var or__3548__auto____242187 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____242187))
{return or__3548__auto____242187;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____242188 = mf;

if(cljs.core.truth_(and__3546__auto____242188))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____242188;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____242189 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____242189))
{return or__3548__auto____242189;
} else
{var or__3548__auto____242190 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____242190))
{return or__3548__auto____242190;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____242191 = mf;

if(cljs.core.truth_(and__3546__auto____242191))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____242191;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____242192 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____242192))
{return or__3548__auto____242192;
} else
{var or__3548__auto____242193 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____242193))
{return or__3548__auto____242193;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____242194 = mf;

if(cljs.core.truth_(and__3546__auto____242194))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____242194;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____242195 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____242195))
{return or__3548__auto____242195;
} else
{var or__3548__auto____242196 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____242196))
{return or__3548__auto____242196;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____242197 = mf;

if(cljs.core.truth_(and__3546__auto____242197))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____242197;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____242198 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____242198))
{return or__3548__auto____242198;
} else
{var or__3548__auto____242199 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____242199))
{return or__3548__auto____242199;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__242200 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__242201 = cljs.core._get_method.call(null,mf,dispatch_val__242200);

if(cljs.core.truth_(target_fn__242201))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__242200)));
}
return cljs.core.apply.call(null,target_fn__242201,args);
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
var this__242202 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__242203 = this;
cljs.core.swap_BANG_.call(null,this__242203.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__242203.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__242203.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__242203.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__242204 = this;
cljs.core.swap_BANG_.call(null,this__242204.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__242204.method_cache,this__242204.method_table,this__242204.cached_hierarchy,this__242204.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__242205 = this;
cljs.core.swap_BANG_.call(null,this__242205.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__242205.method_cache,this__242205.method_table,this__242205.cached_hierarchy,this__242205.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__242206 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__242206.cached_hierarchy),cljs.core.deref.call(null,this__242206.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__242206.method_cache,this__242206.method_table,this__242206.cached_hierarchy,this__242206.hierarchy);
}
var temp__3695__auto____242207 = cljs.core.deref.call(null,this__242206.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____242207))
{var target_fn__242208 = temp__3695__auto____242207;

return target_fn__242208;
} else
{var temp__3695__auto____242209 = cljs.core.find_and_cache_best_method.call(null,this__242206.name,dispatch_val,this__242206.hierarchy,this__242206.method_table,this__242206.prefer_table,this__242206.method_cache,this__242206.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____242209))
{var target_fn__242210 = temp__3695__auto____242209;

return target_fn__242210;
} else
{return cljs.core.deref.call(null,this__242206.method_table).call(null,this__242206.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__242211 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__242211.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__242211.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__242211.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__242211.method_cache,this__242211.method_table,this__242211.cached_hierarchy,this__242211.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__242212 = this;
return cljs.core.deref.call(null,this__242212.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__242213 = this;
return cljs.core.deref.call(null,this__242213.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__242214 = this;
return cljs.core.do_dispatch.call(null,mf,this__242214.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__242215__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__242215 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__242215__delegate.call(this, _, args);
};
G__242215.cljs$lang$maxFixedArity = 1;
G__242215.cljs$lang$applyTo = (function (arglist__242216){
var _ = cljs.core.first(arglist__242216);
var args = cljs.core.rest(arglist__242216);
return G__242215__delegate.call(this, _, args);
});
return G__242215;
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
