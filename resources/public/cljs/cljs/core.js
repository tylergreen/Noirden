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
var or__3548__auto____337366 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____337366))
{return or__3548__auto____337366;
} else
{var or__3548__auto____337367 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____337367))
{return or__3548__auto____337367;
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
var _invoke__337431 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____337368 = this$;

if(cljs.core.truth_(and__3546__auto____337368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____337369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337369))
{return or__3548__auto____337369;
} else
{var or__3548__auto____337370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337370))
{return or__3548__auto____337370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__337432 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____337371 = this$;

if(cljs.core.truth_(and__3546__auto____337371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____337372 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337372))
{return or__3548__auto____337372;
} else
{var or__3548__auto____337373 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337373))
{return or__3548__auto____337373;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__337433 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____337374 = this$;

if(cljs.core.truth_(and__3546__auto____337374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____337375 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337375))
{return or__3548__auto____337375;
} else
{var or__3548__auto____337376 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337376))
{return or__3548__auto____337376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__337434 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____337377 = this$;

if(cljs.core.truth_(and__3546__auto____337377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____337378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337378))
{return or__3548__auto____337378;
} else
{var or__3548__auto____337379 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337379))
{return or__3548__auto____337379;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__337435 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____337380 = this$;

if(cljs.core.truth_(and__3546__auto____337380))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337380;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____337381 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337381))
{return or__3548__auto____337381;
} else
{var or__3548__auto____337382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337382))
{return or__3548__auto____337382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__337436 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____337383 = this$;

if(cljs.core.truth_(and__3546__auto____337383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____337384 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337384))
{return or__3548__auto____337384;
} else
{var or__3548__auto____337385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337385))
{return or__3548__auto____337385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__337437 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____337386 = this$;

if(cljs.core.truth_(and__3546__auto____337386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____337387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337387))
{return or__3548__auto____337387;
} else
{var or__3548__auto____337388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337388))
{return or__3548__auto____337388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__337438 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____337389 = this$;

if(cljs.core.truth_(and__3546__auto____337389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____337390 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337390))
{return or__3548__auto____337390;
} else
{var or__3548__auto____337391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337391))
{return or__3548__auto____337391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__337439 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____337392 = this$;

if(cljs.core.truth_(and__3546__auto____337392))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337392;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____337393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337393))
{return or__3548__auto____337393;
} else
{var or__3548__auto____337394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337394))
{return or__3548__auto____337394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__337440 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____337395 = this$;

if(cljs.core.truth_(and__3546__auto____337395))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337395;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____337396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337396))
{return or__3548__auto____337396;
} else
{var or__3548__auto____337397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337397))
{return or__3548__auto____337397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__337441 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____337398 = this$;

if(cljs.core.truth_(and__3546__auto____337398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____337399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337399))
{return or__3548__auto____337399;
} else
{var or__3548__auto____337400 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337400))
{return or__3548__auto____337400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__337442 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____337401 = this$;

if(cljs.core.truth_(and__3546__auto____337401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____337402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337402))
{return or__3548__auto____337402;
} else
{var or__3548__auto____337403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337403))
{return or__3548__auto____337403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__337443 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____337404 = this$;

if(cljs.core.truth_(and__3546__auto____337404))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337404;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____337405 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337405))
{return or__3548__auto____337405;
} else
{var or__3548__auto____337406 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337406))
{return or__3548__auto____337406;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__337444 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____337407 = this$;

if(cljs.core.truth_(and__3546__auto____337407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____337408 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337408))
{return or__3548__auto____337408;
} else
{var or__3548__auto____337409 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337409))
{return or__3548__auto____337409;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__337445 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____337410 = this$;

if(cljs.core.truth_(and__3546__auto____337410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____337411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337411))
{return or__3548__auto____337411;
} else
{var or__3548__auto____337412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337412))
{return or__3548__auto____337412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__337446 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____337413 = this$;

if(cljs.core.truth_(and__3546__auto____337413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____337414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337414))
{return or__3548__auto____337414;
} else
{var or__3548__auto____337415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337415))
{return or__3548__auto____337415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__337447 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____337416 = this$;

if(cljs.core.truth_(and__3546__auto____337416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____337417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337417))
{return or__3548__auto____337417;
} else
{var or__3548__auto____337418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337418))
{return or__3548__auto____337418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__337448 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____337419 = this$;

if(cljs.core.truth_(and__3546__auto____337419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____337420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337420))
{return or__3548__auto____337420;
} else
{var or__3548__auto____337421 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337421))
{return or__3548__auto____337421;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__337449 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____337422 = this$;

if(cljs.core.truth_(and__3546__auto____337422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____337423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337423))
{return or__3548__auto____337423;
} else
{var or__3548__auto____337424 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337424))
{return or__3548__auto____337424;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__337450 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____337425 = this$;

if(cljs.core.truth_(and__3546__auto____337425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____337426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337426))
{return or__3548__auto____337426;
} else
{var or__3548__auto____337427 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337427))
{return or__3548__auto____337427;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__337451 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____337428 = this$;

if(cljs.core.truth_(and__3546__auto____337428))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____337428;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____337429 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337429))
{return or__3548__auto____337429;
} else
{var or__3548__auto____337430 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____337430))
{return or__3548__auto____337430;
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
return _invoke__337431.call(this,this$);
case  2 :
return _invoke__337432.call(this,this$,a);
case  3 :
return _invoke__337433.call(this,this$,a,b);
case  4 :
return _invoke__337434.call(this,this$,a,b,c);
case  5 :
return _invoke__337435.call(this,this$,a,b,c,d);
case  6 :
return _invoke__337436.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__337437.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__337438.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__337439.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__337440.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__337441.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__337442.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__337443.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__337444.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__337445.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__337446.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__337447.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__337448.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__337449.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__337450.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__337451.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____337453 = coll;

if(cljs.core.truth_(and__3546__auto____337453))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____337453;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____337454 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337454))
{return or__3548__auto____337454;
} else
{var or__3548__auto____337455 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____337455))
{return or__3548__auto____337455;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____337456 = coll;

if(cljs.core.truth_(and__3546__auto____337456))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____337456;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____337457 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337457))
{return or__3548__auto____337457;
} else
{var or__3548__auto____337458 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____337458))
{return or__3548__auto____337458;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____337459 = coll;

if(cljs.core.truth_(and__3546__auto____337459))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____337459;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____337460 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337460))
{return or__3548__auto____337460;
} else
{var or__3548__auto____337461 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____337461))
{return or__3548__auto____337461;
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
var _nth__337468 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____337462 = coll;

if(cljs.core.truth_(and__3546__auto____337462))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____337462;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____337463 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337463))
{return or__3548__auto____337463;
} else
{var or__3548__auto____337464 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____337464))
{return or__3548__auto____337464;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__337469 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____337465 = coll;

if(cljs.core.truth_(and__3546__auto____337465))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____337465;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____337466 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337466))
{return or__3548__auto____337466;
} else
{var or__3548__auto____337467 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____337467))
{return or__3548__auto____337467;
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
return _nth__337468.call(this,coll,n);
case  3 :
return _nth__337469.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____337471 = coll;

if(cljs.core.truth_(and__3546__auto____337471))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____337471;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____337472 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337472))
{return or__3548__auto____337472;
} else
{var or__3548__auto____337473 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____337473))
{return or__3548__auto____337473;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____337474 = coll;

if(cljs.core.truth_(and__3546__auto____337474))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____337474;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____337475 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337475))
{return or__3548__auto____337475;
} else
{var or__3548__auto____337476 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____337476))
{return or__3548__auto____337476;
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
var _lookup__337483 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____337477 = o;

if(cljs.core.truth_(and__3546__auto____337477))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____337477;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____337478 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337478))
{return or__3548__auto____337478;
} else
{var or__3548__auto____337479 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____337479))
{return or__3548__auto____337479;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__337484 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____337480 = o;

if(cljs.core.truth_(and__3546__auto____337480))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____337480;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____337481 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337481))
{return or__3548__auto____337481;
} else
{var or__3548__auto____337482 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____337482))
{return or__3548__auto____337482;
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
return _lookup__337483.call(this,o,k);
case  3 :
return _lookup__337484.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____337486 = coll;

if(cljs.core.truth_(and__3546__auto____337486))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____337486;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____337487 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337487))
{return or__3548__auto____337487;
} else
{var or__3548__auto____337488 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____337488))
{return or__3548__auto____337488;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____337489 = coll;

if(cljs.core.truth_(and__3546__auto____337489))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____337489;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____337490 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337490))
{return or__3548__auto____337490;
} else
{var or__3548__auto____337491 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____337491))
{return or__3548__auto____337491;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____337492 = coll;

if(cljs.core.truth_(and__3546__auto____337492))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____337492;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____337493 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337493))
{return or__3548__auto____337493;
} else
{var or__3548__auto____337494 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____337494))
{return or__3548__auto____337494;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____337495 = coll;

if(cljs.core.truth_(and__3546__auto____337495))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____337495;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____337496 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337496))
{return or__3548__auto____337496;
} else
{var or__3548__auto____337497 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____337497))
{return or__3548__auto____337497;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____337498 = coll;

if(cljs.core.truth_(and__3546__auto____337498))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____337498;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____337499 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337499))
{return or__3548__auto____337499;
} else
{var or__3548__auto____337500 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____337500))
{return or__3548__auto____337500;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____337501 = coll;

if(cljs.core.truth_(and__3546__auto____337501))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____337501;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____337502 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337502))
{return or__3548__auto____337502;
} else
{var or__3548__auto____337503 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____337503))
{return or__3548__auto____337503;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____337504 = coll;

if(cljs.core.truth_(and__3546__auto____337504))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____337504;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____337505 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337505))
{return or__3548__auto____337505;
} else
{var or__3548__auto____337506 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____337506))
{return or__3548__auto____337506;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____337507 = o;

if(cljs.core.truth_(and__3546__auto____337507))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____337507;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____337508 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337508))
{return or__3548__auto____337508;
} else
{var or__3548__auto____337509 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____337509))
{return or__3548__auto____337509;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____337510 = o;

if(cljs.core.truth_(and__3546__auto____337510))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____337510;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____337511 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337511))
{return or__3548__auto____337511;
} else
{var or__3548__auto____337512 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____337512))
{return or__3548__auto____337512;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____337513 = o;

if(cljs.core.truth_(and__3546__auto____337513))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____337513;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____337514 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337514))
{return or__3548__auto____337514;
} else
{var or__3548__auto____337515 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____337515))
{return or__3548__auto____337515;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____337516 = o;

if(cljs.core.truth_(and__3546__auto____337516))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____337516;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____337517 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337517))
{return or__3548__auto____337517;
} else
{var or__3548__auto____337518 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____337518))
{return or__3548__auto____337518;
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
var _reduce__337525 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____337519 = coll;

if(cljs.core.truth_(and__3546__auto____337519))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____337519;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____337520 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337520))
{return or__3548__auto____337520;
} else
{var or__3548__auto____337521 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____337521))
{return or__3548__auto____337521;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__337526 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____337522 = coll;

if(cljs.core.truth_(and__3546__auto____337522))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____337522;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____337523 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____337523))
{return or__3548__auto____337523;
} else
{var or__3548__auto____337524 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____337524))
{return or__3548__auto____337524;
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
return _reduce__337525.call(this,coll,f);
case  3 :
return _reduce__337526.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____337528 = o;

if(cljs.core.truth_(and__3546__auto____337528))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____337528;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____337529 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337529))
{return or__3548__auto____337529;
} else
{var or__3548__auto____337530 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____337530))
{return or__3548__auto____337530;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____337531 = o;

if(cljs.core.truth_(and__3546__auto____337531))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____337531;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____337532 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337532))
{return or__3548__auto____337532;
} else
{var or__3548__auto____337533 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____337533))
{return or__3548__auto____337533;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____337534 = o;

if(cljs.core.truth_(and__3546__auto____337534))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____337534;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____337535 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337535))
{return or__3548__auto____337535;
} else
{var or__3548__auto____337536 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____337536))
{return or__3548__auto____337536;
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
if(cljs.core.truth_((function (){var and__3546__auto____337537 = o;

if(cljs.core.truth_(and__3546__auto____337537))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____337537;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____337538 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____337538))
{return or__3548__auto____337538;
} else
{var or__3548__auto____337539 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____337539))
{return or__3548__auto____337539;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____337540 = d;

if(cljs.core.truth_(and__3546__auto____337540))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____337540;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____337541 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____337541))
{return or__3548__auto____337541;
} else
{var or__3548__auto____337542 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____337542))
{return or__3548__auto____337542;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____337543 = this$;

if(cljs.core.truth_(and__3546__auto____337543))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____337543;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____337544 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337544))
{return or__3548__auto____337544;
} else
{var or__3548__auto____337545 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____337545))
{return or__3548__auto____337545;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____337546 = this$;

if(cljs.core.truth_(and__3546__auto____337546))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____337546;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____337547 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337547))
{return or__3548__auto____337547;
} else
{var or__3548__auto____337548 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____337548))
{return or__3548__auto____337548;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____337549 = this$;

if(cljs.core.truth_(and__3546__auto____337549))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____337549;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____337550 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____337550))
{return or__3548__auto____337550;
} else
{var or__3548__auto____337551 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____337551))
{return or__3548__auto____337551;
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
var G__337552 = null;
var G__337552__337553 = (function (o,k){
return null;
});
var G__337552__337554 = (function (o,k,not_found){
return not_found;
});
G__337552 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__337552__337553.call(this,o,k);
case  3 :
return G__337552__337554.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337552;
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
var G__337556 = null;
var G__337556__337557 = (function (_,f){
return f.call(null);
});
var G__337556__337558 = (function (_,f,start){
return start;
});
G__337556 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__337556__337557.call(this,_,f);
case  3 :
return G__337556__337558.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337556;
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
var G__337560 = null;
var G__337560__337561 = (function (_,n){
return null;
});
var G__337560__337562 = (function (_,n,not_found){
return not_found;
});
G__337560 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__337560__337561.call(this,_,n);
case  3 :
return G__337560__337562.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337560;
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
var ci_reduce__337570 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__337564 = cljs.core._nth.call(null,cicoll,0);
var n__337565 = 1;

while(true){
if(cljs.core.truth_((n__337565 < cljs.core._count.call(null,cicoll))))
{{
var G__337574 = f.call(null,val__337564,cljs.core._nth.call(null,cicoll,n__337565));
var G__337575 = (n__337565 + 1);
val__337564 = G__337574;
n__337565 = G__337575;
continue;
}
} else
{return val__337564;
}
break;
}
}
});
var ci_reduce__337571 = (function (cicoll,f,val){
var val__337566 = val;
var n__337567 = 0;

while(true){
if(cljs.core.truth_((n__337567 < cljs.core._count.call(null,cicoll))))
{{
var G__337576 = f.call(null,val__337566,cljs.core._nth.call(null,cicoll,n__337567));
var G__337577 = (n__337567 + 1);
val__337566 = G__337576;
n__337567 = G__337577;
continue;
}
} else
{return val__337566;
}
break;
}
});
var ci_reduce__337572 = (function (cicoll,f,val,idx){
var val__337568 = val;
var n__337569 = idx;

while(true){
if(cljs.core.truth_((n__337569 < cljs.core._count.call(null,cicoll))))
{{
var G__337578 = f.call(null,val__337568,cljs.core._nth.call(null,cicoll,n__337569));
var G__337579 = (n__337569 + 1);
val__337568 = G__337578;
n__337569 = G__337579;
continue;
}
} else
{return val__337568;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__337570.call(this,cicoll,f);
case  3 :
return ci_reduce__337571.call(this,cicoll,f,val);
case  4 :
return ci_reduce__337572.call(this,cicoll,f,val,idx);
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
var this__337580 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__337593 = null;
var G__337593__337594 = (function (_,f){
var this__337581 = this;
return cljs.core.ci_reduce.call(null,this__337581.a,f,(this__337581.a[this__337581.i]),(this__337581.i + 1));
});
var G__337593__337595 = (function (_,f,start){
var this__337582 = this;
return cljs.core.ci_reduce.call(null,this__337582.a,f,start,this__337582.i);
});
G__337593 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__337593__337594.call(this,_,f);
case  3 :
return G__337593__337595.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337593;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__337583 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__337584 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__337597 = null;
var G__337597__337598 = (function (coll,n){
var this__337585 = this;
var i__337586 = (n + this__337585.i);

if(cljs.core.truth_((i__337586 < this__337585.a.length)))
{return (this__337585.a[i__337586]);
} else
{return null;
}
});
var G__337597__337599 = (function (coll,n,not_found){
var this__337587 = this;
var i__337588 = (n + this__337587.i);

if(cljs.core.truth_((i__337588 < this__337587.a.length)))
{return (this__337587.a[i__337588]);
} else
{return not_found;
}
});
G__337597 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__337597__337598.call(this,coll,n);
case  3 :
return G__337597__337599.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337597;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__337589 = this;
return (this__337589.a.length - this__337589.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__337590 = this;
return (this__337590.a[this__337590.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__337591 = this;
if(cljs.core.truth_(((this__337591.i + 1) < this__337591.a.length)))
{return (new cljs.core.IndexedSeq(this__337591.a,(this__337591.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__337592 = this;
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
var G__337601 = null;
var G__337601__337602 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__337601__337603 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__337601 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__337601__337602.call(this,array,f);
case  3 :
return G__337601__337603.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337601;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__337605 = null;
var G__337605__337606 = (function (array,k){
return (array[k]);
});
var G__337605__337607 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__337605 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__337605__337606.call(this,array,k);
case  3 :
return G__337605__337607.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337605;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__337609 = null;
var G__337609__337610 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__337609__337611 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__337609 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__337609__337610.call(this,array,n);
case  3 :
return G__337609__337611.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337609;
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
var temp__3698__auto____337613 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____337613))
{var s__337614 = temp__3698__auto____337613;

return cljs.core._first.call(null,s__337614);
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
var G__337615 = cljs.core.next.call(null,s);
s = G__337615;
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
var s__337616 = cljs.core.seq.call(null,x);
var n__337617 = 0;

while(true){
if(cljs.core.truth_(s__337616))
{{
var G__337618 = cljs.core.next.call(null,s__337616);
var G__337619 = (n__337617 + 1);
s__337616 = G__337618;
n__337617 = G__337619;
continue;
}
} else
{return n__337617;
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
var conj__337620 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__337621 = (function() { 
var G__337623__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__337624 = conj.call(null,coll,x);
var G__337625 = cljs.core.first.call(null,xs);
var G__337626 = cljs.core.next.call(null,xs);
coll = G__337624;
x = G__337625;
xs = G__337626;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__337623 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337623__delegate.call(this, coll, x, xs);
};
G__337623.cljs$lang$maxFixedArity = 2;
G__337623.cljs$lang$applyTo = (function (arglist__337627){
var coll = cljs.core.first(arglist__337627);
var x = cljs.core.first(cljs.core.next(arglist__337627));
var xs = cljs.core.rest(cljs.core.next(arglist__337627));
return G__337623__delegate.call(this, coll, x, xs);
});
return G__337623;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__337620.call(this,coll,x);
default:
return conj__337621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__337621.cljs$lang$applyTo;
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
var nth__337628 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__337629 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__337628.call(this,coll,n);
case  3 :
return nth__337629.call(this,coll,n,not_found);
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
var get__337631 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__337632 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__337631.call(this,o,k);
case  3 :
return get__337632.call(this,o,k,not_found);
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
var assoc__337635 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__337636 = (function() { 
var G__337638__delegate = function (coll,k,v,kvs){
while(true){
var ret__337634 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__337639 = ret__337634;
var G__337640 = cljs.core.first.call(null,kvs);
var G__337641 = cljs.core.second.call(null,kvs);
var G__337642 = cljs.core.nnext.call(null,kvs);
coll = G__337639;
k = G__337640;
v = G__337641;
kvs = G__337642;
continue;
}
} else
{return ret__337634;
}
break;
}
};
var G__337638 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__337638__delegate.call(this, coll, k, v, kvs);
};
G__337638.cljs$lang$maxFixedArity = 3;
G__337638.cljs$lang$applyTo = (function (arglist__337643){
var coll = cljs.core.first(arglist__337643);
var k = cljs.core.first(cljs.core.next(arglist__337643));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__337643)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__337643)));
return G__337638__delegate.call(this, coll, k, v, kvs);
});
return G__337638;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__337635.call(this,coll,k,v);
default:
return assoc__337636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__337636.cljs$lang$applyTo;
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
var dissoc__337645 = (function (coll){
return coll;
});
var dissoc__337646 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__337647 = (function() { 
var G__337649__delegate = function (coll,k,ks){
while(true){
var ret__337644 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__337650 = ret__337644;
var G__337651 = cljs.core.first.call(null,ks);
var G__337652 = cljs.core.next.call(null,ks);
coll = G__337650;
k = G__337651;
ks = G__337652;
continue;
}
} else
{return ret__337644;
}
break;
}
};
var G__337649 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337649__delegate.call(this, coll, k, ks);
};
G__337649.cljs$lang$maxFixedArity = 2;
G__337649.cljs$lang$applyTo = (function (arglist__337653){
var coll = cljs.core.first(arglist__337653);
var k = cljs.core.first(cljs.core.next(arglist__337653));
var ks = cljs.core.rest(cljs.core.next(arglist__337653));
return G__337649__delegate.call(this, coll, k, ks);
});
return G__337649;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__337645.call(this,coll);
case  2 :
return dissoc__337646.call(this,coll,k);
default:
return dissoc__337647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__337647.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____337654 = o;

if(cljs.core.truth_((function (){var and__3546__auto____337655 = x__450__auto____337654;

if(cljs.core.truth_(and__3546__auto____337655))
{var and__3546__auto____337656 = x__450__auto____337654.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____337656))
{return cljs.core.not.call(null,x__450__auto____337654.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____337656;
}
} else
{return and__3546__auto____337655;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____337654);
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
var disj__337658 = (function (coll){
return coll;
});
var disj__337659 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__337660 = (function() { 
var G__337662__delegate = function (coll,k,ks){
while(true){
var ret__337657 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__337663 = ret__337657;
var G__337664 = cljs.core.first.call(null,ks);
var G__337665 = cljs.core.next.call(null,ks);
coll = G__337663;
k = G__337664;
ks = G__337665;
continue;
}
} else
{return ret__337657;
}
break;
}
};
var G__337662 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337662__delegate.call(this, coll, k, ks);
};
G__337662.cljs$lang$maxFixedArity = 2;
G__337662.cljs$lang$applyTo = (function (arglist__337666){
var coll = cljs.core.first(arglist__337666);
var k = cljs.core.first(cljs.core.next(arglist__337666));
var ks = cljs.core.rest(cljs.core.next(arglist__337666));
return G__337662__delegate.call(this, coll, k, ks);
});
return G__337662;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__337658.call(this,coll);
case  2 :
return disj__337659.call(this,coll,k);
default:
return disj__337660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__337660.cljs$lang$applyTo;
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
{var x__450__auto____337667 = x;

if(cljs.core.truth_((function (){var and__3546__auto____337668 = x__450__auto____337667;

if(cljs.core.truth_(and__3546__auto____337668))
{var and__3546__auto____337669 = x__450__auto____337667.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____337669))
{return cljs.core.not.call(null,x__450__auto____337667.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____337669;
}
} else
{return and__3546__auto____337668;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____337667);
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
{var x__450__auto____337670 = x;

if(cljs.core.truth_((function (){var and__3546__auto____337671 = x__450__auto____337670;

if(cljs.core.truth_(and__3546__auto____337671))
{var and__3546__auto____337672 = x__450__auto____337670.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____337672))
{return cljs.core.not.call(null,x__450__auto____337670.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____337672;
}
} else
{return and__3546__auto____337671;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____337670);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____337673 = x;

if(cljs.core.truth_((function (){var and__3546__auto____337674 = x__450__auto____337673;

if(cljs.core.truth_(and__3546__auto____337674))
{var and__3546__auto____337675 = x__450__auto____337673.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____337675))
{return cljs.core.not.call(null,x__450__auto____337673.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____337675;
}
} else
{return and__3546__auto____337674;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____337673);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____337676 = x;

if(cljs.core.truth_((function (){var and__3546__auto____337677 = x__450__auto____337676;

if(cljs.core.truth_(and__3546__auto____337677))
{var and__3546__auto____337678 = x__450__auto____337676.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____337678))
{return cljs.core.not.call(null,x__450__auto____337676.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____337678;
}
} else
{return and__3546__auto____337677;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____337676);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____337679 = x;

if(cljs.core.truth_((function (){var and__3546__auto____337680 = x__450__auto____337679;

if(cljs.core.truth_(and__3546__auto____337680))
{var and__3546__auto____337681 = x__450__auto____337679.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____337681))
{return cljs.core.not.call(null,x__450__auto____337679.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____337681;
}
} else
{return and__3546__auto____337680;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____337679);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____337682 = x;

if(cljs.core.truth_((function (){var and__3546__auto____337683 = x__450__auto____337682;

if(cljs.core.truth_(and__3546__auto____337683))
{var and__3546__auto____337684 = x__450__auto____337682.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____337684))
{return cljs.core.not.call(null,x__450__auto____337682.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____337684;
}
} else
{return and__3546__auto____337683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____337682);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____337685 = x;

if(cljs.core.truth_((function (){var and__3546__auto____337686 = x__450__auto____337685;

if(cljs.core.truth_(and__3546__auto____337686))
{var and__3546__auto____337687 = x__450__auto____337685.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____337687))
{return cljs.core.not.call(null,x__450__auto____337685.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____337687;
}
} else
{return and__3546__auto____337686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____337685);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__337688 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__337688.push(key);
}));
return keys__337688;
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
{var x__450__auto____337689 = s;

if(cljs.core.truth_((function (){var and__3546__auto____337690 = x__450__auto____337689;

if(cljs.core.truth_(and__3546__auto____337690))
{var and__3546__auto____337691 = x__450__auto____337689.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____337691))
{return cljs.core.not.call(null,x__450__auto____337689.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____337691;
}
} else
{return and__3546__auto____337690;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____337689);
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
var and__3546__auto____337692 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____337692))
{return cljs.core.not.call(null,(function (){var or__3548__auto____337693 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____337693))
{return or__3548__auto____337693;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____337692;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____337694 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____337694))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____337694;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____337695 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____337695))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____337695;
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
var and__3546__auto____337696 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____337696))
{return (n == n.toFixed());
} else
{return and__3546__auto____337696;
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
if(cljs.core.truth_((function (){var and__3546__auto____337697 = coll;

if(cljs.core.truth_(and__3546__auto____337697))
{var and__3546__auto____337698 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____337698))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____337698;
}
} else
{return and__3546__auto____337697;
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
var distinct_QMARK___337703 = (function (x){
return true;
});
var distinct_QMARK___337704 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___337705 = (function() { 
var G__337707__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__337699 = cljs.core.set([y,x]);
var xs__337700 = more;

while(true){
var x__337701 = cljs.core.first.call(null,xs__337700);
var etc__337702 = cljs.core.next.call(null,xs__337700);

if(cljs.core.truth_(xs__337700))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__337699,x__337701)))
{return false;
} else
{{
var G__337708 = cljs.core.conj.call(null,s__337699,x__337701);
var G__337709 = etc__337702;
s__337699 = G__337708;
xs__337700 = G__337709;
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
var G__337707 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337707__delegate.call(this, x, y, more);
};
G__337707.cljs$lang$maxFixedArity = 2;
G__337707.cljs$lang$applyTo = (function (arglist__337710){
var x = cljs.core.first(arglist__337710);
var y = cljs.core.first(cljs.core.next(arglist__337710));
var more = cljs.core.rest(cljs.core.next(arglist__337710));
return G__337707__delegate.call(this, x, y, more);
});
return G__337707;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___337703.call(this,x);
case  2 :
return distinct_QMARK___337704.call(this,x,y);
default:
return distinct_QMARK___337705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___337705.cljs$lang$applyTo;
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
var r__337711 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__337711)))
{return r__337711;
} else
{if(cljs.core.truth_(r__337711))
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
var sort__337713 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__337714 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__337712 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__337712,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__337712);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__337713.call(this,comp);
case  2 :
return sort__337714.call(this,comp,coll);
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
var sort_by__337716 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__337717 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__337716.call(this,keyfn,comp);
case  3 :
return sort_by__337717.call(this,keyfn,comp,coll);
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
var reduce__337719 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__337720 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__337719.call(this,f,val);
case  3 :
return reduce__337720.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__337726 = (function (f,coll){
var temp__3695__auto____337722 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____337722))
{var s__337723 = temp__3695__auto____337722;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__337723),cljs.core.next.call(null,s__337723));
} else
{return f.call(null);
}
});
var seq_reduce__337727 = (function (f,val,coll){
var val__337724 = val;
var coll__337725 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__337725))
{{
var G__337729 = f.call(null,val__337724,cljs.core.first.call(null,coll__337725));
var G__337730 = cljs.core.next.call(null,coll__337725);
val__337724 = G__337729;
coll__337725 = G__337730;
continue;
}
} else
{return val__337724;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__337726.call(this,f,val);
case  3 :
return seq_reduce__337727.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__337731 = null;
var G__337731__337732 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__337731__337733 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__337731 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__337731__337732.call(this,coll,f);
case  3 :
return G__337731__337733.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337731;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___337735 = (function (){
return 0;
});
var _PLUS___337736 = (function (x){
return x;
});
var _PLUS___337737 = (function (x,y){
return (x + y);
});
var _PLUS___337738 = (function() { 
var G__337740__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__337740 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337740__delegate.call(this, x, y, more);
};
G__337740.cljs$lang$maxFixedArity = 2;
G__337740.cljs$lang$applyTo = (function (arglist__337741){
var x = cljs.core.first(arglist__337741);
var y = cljs.core.first(cljs.core.next(arglist__337741));
var more = cljs.core.rest(cljs.core.next(arglist__337741));
return G__337740__delegate.call(this, x, y, more);
});
return G__337740;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___337735.call(this);
case  1 :
return _PLUS___337736.call(this,x);
case  2 :
return _PLUS___337737.call(this,x,y);
default:
return _PLUS___337738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___337738.cljs$lang$applyTo;
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
var ___337742 = (function (x){
return (- x);
});
var ___337743 = (function (x,y){
return (x - y);
});
var ___337744 = (function() { 
var G__337746__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__337746 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337746__delegate.call(this, x, y, more);
};
G__337746.cljs$lang$maxFixedArity = 2;
G__337746.cljs$lang$applyTo = (function (arglist__337747){
var x = cljs.core.first(arglist__337747);
var y = cljs.core.first(cljs.core.next(arglist__337747));
var more = cljs.core.rest(cljs.core.next(arglist__337747));
return G__337746__delegate.call(this, x, y, more);
});
return G__337746;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___337742.call(this,x);
case  2 :
return ___337743.call(this,x,y);
default:
return ___337744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___337744.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___337748 = (function (){
return 1;
});
var _STAR___337749 = (function (x){
return x;
});
var _STAR___337750 = (function (x,y){
return (x * y);
});
var _STAR___337751 = (function() { 
var G__337753__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__337753 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337753__delegate.call(this, x, y, more);
};
G__337753.cljs$lang$maxFixedArity = 2;
G__337753.cljs$lang$applyTo = (function (arglist__337754){
var x = cljs.core.first(arglist__337754);
var y = cljs.core.first(cljs.core.next(arglist__337754));
var more = cljs.core.rest(cljs.core.next(arglist__337754));
return G__337753__delegate.call(this, x, y, more);
});
return G__337753;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___337748.call(this);
case  1 :
return _STAR___337749.call(this,x);
case  2 :
return _STAR___337750.call(this,x,y);
default:
return _STAR___337751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___337751.cljs$lang$applyTo;
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
var _SLASH___337755 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___337756 = (function (x,y){
return (x / y);
});
var _SLASH___337757 = (function() { 
var G__337759__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__337759 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337759__delegate.call(this, x, y, more);
};
G__337759.cljs$lang$maxFixedArity = 2;
G__337759.cljs$lang$applyTo = (function (arglist__337760){
var x = cljs.core.first(arglist__337760);
var y = cljs.core.first(cljs.core.next(arglist__337760));
var more = cljs.core.rest(cljs.core.next(arglist__337760));
return G__337759__delegate.call(this, x, y, more);
});
return G__337759;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___337755.call(this,x);
case  2 :
return _SLASH___337756.call(this,x,y);
default:
return _SLASH___337757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___337757.cljs$lang$applyTo;
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
var _LT___337761 = (function (x){
return true;
});
var _LT___337762 = (function (x,y){
return (x < y);
});
var _LT___337763 = (function() { 
var G__337765__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__337766 = y;
var G__337767 = cljs.core.first.call(null,more);
var G__337768 = cljs.core.next.call(null,more);
x = G__337766;
y = G__337767;
more = G__337768;
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
var G__337765 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337765__delegate.call(this, x, y, more);
};
G__337765.cljs$lang$maxFixedArity = 2;
G__337765.cljs$lang$applyTo = (function (arglist__337769){
var x = cljs.core.first(arglist__337769);
var y = cljs.core.first(cljs.core.next(arglist__337769));
var more = cljs.core.rest(cljs.core.next(arglist__337769));
return G__337765__delegate.call(this, x, y, more);
});
return G__337765;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___337761.call(this,x);
case  2 :
return _LT___337762.call(this,x,y);
default:
return _LT___337763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___337763.cljs$lang$applyTo;
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
var _LT__EQ___337770 = (function (x){
return true;
});
var _LT__EQ___337771 = (function (x,y){
return (x <= y);
});
var _LT__EQ___337772 = (function() { 
var G__337774__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__337775 = y;
var G__337776 = cljs.core.first.call(null,more);
var G__337777 = cljs.core.next.call(null,more);
x = G__337775;
y = G__337776;
more = G__337777;
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
var G__337774 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337774__delegate.call(this, x, y, more);
};
G__337774.cljs$lang$maxFixedArity = 2;
G__337774.cljs$lang$applyTo = (function (arglist__337778){
var x = cljs.core.first(arglist__337778);
var y = cljs.core.first(cljs.core.next(arglist__337778));
var more = cljs.core.rest(cljs.core.next(arglist__337778));
return G__337774__delegate.call(this, x, y, more);
});
return G__337774;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___337770.call(this,x);
case  2 :
return _LT__EQ___337771.call(this,x,y);
default:
return _LT__EQ___337772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___337772.cljs$lang$applyTo;
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
var _GT___337779 = (function (x){
return true;
});
var _GT___337780 = (function (x,y){
return (x > y);
});
var _GT___337781 = (function() { 
var G__337783__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__337784 = y;
var G__337785 = cljs.core.first.call(null,more);
var G__337786 = cljs.core.next.call(null,more);
x = G__337784;
y = G__337785;
more = G__337786;
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
var G__337783 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337783__delegate.call(this, x, y, more);
};
G__337783.cljs$lang$maxFixedArity = 2;
G__337783.cljs$lang$applyTo = (function (arglist__337787){
var x = cljs.core.first(arglist__337787);
var y = cljs.core.first(cljs.core.next(arglist__337787));
var more = cljs.core.rest(cljs.core.next(arglist__337787));
return G__337783__delegate.call(this, x, y, more);
});
return G__337783;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___337779.call(this,x);
case  2 :
return _GT___337780.call(this,x,y);
default:
return _GT___337781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___337781.cljs$lang$applyTo;
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
var _GT__EQ___337788 = (function (x){
return true;
});
var _GT__EQ___337789 = (function (x,y){
return (x >= y);
});
var _GT__EQ___337790 = (function() { 
var G__337792__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__337793 = y;
var G__337794 = cljs.core.first.call(null,more);
var G__337795 = cljs.core.next.call(null,more);
x = G__337793;
y = G__337794;
more = G__337795;
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
var G__337792 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337792__delegate.call(this, x, y, more);
};
G__337792.cljs$lang$maxFixedArity = 2;
G__337792.cljs$lang$applyTo = (function (arglist__337796){
var x = cljs.core.first(arglist__337796);
var y = cljs.core.first(cljs.core.next(arglist__337796));
var more = cljs.core.rest(cljs.core.next(arglist__337796));
return G__337792__delegate.call(this, x, y, more);
});
return G__337792;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___337788.call(this,x);
case  2 :
return _GT__EQ___337789.call(this,x,y);
default:
return _GT__EQ___337790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___337790.cljs$lang$applyTo;
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
var max__337797 = (function (x){
return x;
});
var max__337798 = (function (x,y){
return ((x > y) ? x : y);
});
var max__337799 = (function() { 
var G__337801__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__337801 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337801__delegate.call(this, x, y, more);
};
G__337801.cljs$lang$maxFixedArity = 2;
G__337801.cljs$lang$applyTo = (function (arglist__337802){
var x = cljs.core.first(arglist__337802);
var y = cljs.core.first(cljs.core.next(arglist__337802));
var more = cljs.core.rest(cljs.core.next(arglist__337802));
return G__337801__delegate.call(this, x, y, more);
});
return G__337801;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__337797.call(this,x);
case  2 :
return max__337798.call(this,x,y);
default:
return max__337799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__337799.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__337803 = (function (x){
return x;
});
var min__337804 = (function (x,y){
return ((x < y) ? x : y);
});
var min__337805 = (function() { 
var G__337807__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__337807 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337807__delegate.call(this, x, y, more);
};
G__337807.cljs$lang$maxFixedArity = 2;
G__337807.cljs$lang$applyTo = (function (arglist__337808){
var x = cljs.core.first(arglist__337808);
var y = cljs.core.first(cljs.core.next(arglist__337808));
var more = cljs.core.rest(cljs.core.next(arglist__337808));
return G__337807__delegate.call(this, x, y, more);
});
return G__337807;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__337803.call(this,x);
case  2 :
return min__337804.call(this,x,y);
default:
return min__337805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__337805.cljs$lang$applyTo;
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
var rem__337809 = (n % d);

return cljs.core.fix.call(null,((n - rem__337809) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__337810 = cljs.core.quot.call(null,n,d);

return (n - (d * q__337810));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__337811 = (function (){
return Math.random.call(null);
});
var rand__337812 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__337811.call(this);
case  1 :
return rand__337812.call(this,n);
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
var _EQ__EQ___337814 = (function (x){
return true;
});
var _EQ__EQ___337815 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___337816 = (function() { 
var G__337818__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__337819 = y;
var G__337820 = cljs.core.first.call(null,more);
var G__337821 = cljs.core.next.call(null,more);
x = G__337819;
y = G__337820;
more = G__337821;
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
var G__337818 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337818__delegate.call(this, x, y, more);
};
G__337818.cljs$lang$maxFixedArity = 2;
G__337818.cljs$lang$applyTo = (function (arglist__337822){
var x = cljs.core.first(arglist__337822);
var y = cljs.core.first(cljs.core.next(arglist__337822));
var more = cljs.core.rest(cljs.core.next(arglist__337822));
return G__337818__delegate.call(this, x, y, more);
});
return G__337818;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___337814.call(this,x);
case  2 :
return _EQ__EQ___337815.call(this,x,y);
default:
return _EQ__EQ___337816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___337816.cljs$lang$applyTo;
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
var n__337823 = n;
var xs__337824 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____337825 = xs__337824;

if(cljs.core.truth_(and__3546__auto____337825))
{return (n__337823 > 0);
} else
{return and__3546__auto____337825;
}
})()))
{{
var G__337826 = (n__337823 - 1);
var G__337827 = cljs.core.next.call(null,xs__337824);
n__337823 = G__337826;
xs__337824 = G__337827;
continue;
}
} else
{return xs__337824;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__337832 = null;
var G__337832__337833 = (function (coll,n){
var temp__3695__auto____337828 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____337828))
{var xs__337829 = temp__3695__auto____337828;

return cljs.core.first.call(null,xs__337829);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__337832__337834 = (function (coll,n,not_found){
var temp__3695__auto____337830 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____337830))
{var xs__337831 = temp__3695__auto____337830;

return cljs.core.first.call(null,xs__337831);
} else
{return not_found;
}
});
G__337832 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__337832__337833.call(this,coll,n);
case  3 :
return G__337832__337834.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337832;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___337836 = (function (){
return "";
});
var str_STAR___337837 = (function (x){
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
var str_STAR___337838 = (function() { 
var G__337840__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__337841 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__337842 = cljs.core.next.call(null,more);
sb = G__337841;
more = G__337842;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__337840 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__337840__delegate.call(this, x, ys);
};
G__337840.cljs$lang$maxFixedArity = 1;
G__337840.cljs$lang$applyTo = (function (arglist__337843){
var x = cljs.core.first(arglist__337843);
var ys = cljs.core.rest(arglist__337843);
return G__337840__delegate.call(this, x, ys);
});
return G__337840;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___337836.call(this);
case  1 :
return str_STAR___337837.call(this,x);
default:
return str_STAR___337838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___337838.cljs$lang$applyTo;
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
var str__337844 = (function (){
return "";
});
var str__337845 = (function (x){
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
var str__337846 = (function() { 
var G__337848__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__337848 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__337848__delegate.call(this, x, ys);
};
G__337848.cljs$lang$maxFixedArity = 1;
G__337848.cljs$lang$applyTo = (function (arglist__337849){
var x = cljs.core.first(arglist__337849);
var ys = cljs.core.rest(arglist__337849);
return G__337848__delegate.call(this, x, ys);
});
return G__337848;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__337844.call(this);
case  1 :
return str__337845.call(this,x);
default:
return str__337846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__337846.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__337850 = (function (s,start){
return s.substring(start);
});
var subs__337851 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__337850.call(this,s,start);
case  3 :
return subs__337851.call(this,s,start,end);
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
var symbol__337853 = (function (name){
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
var symbol__337854 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__337853.call(this,ns);
case  2 :
return symbol__337854.call(this,ns,name);
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
var keyword__337856 = (function (name){
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
var keyword__337857 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__337856.call(this,ns);
case  2 :
return keyword__337857.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__337859 = cljs.core.seq.call(null,x);
var ys__337860 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__337859 === null)))
{return (ys__337860 === null);
} else
{if(cljs.core.truth_((ys__337860 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__337859),cljs.core.first.call(null,ys__337860))))
{{
var G__337861 = cljs.core.next.call(null,xs__337859);
var G__337862 = cljs.core.next.call(null,ys__337860);
xs__337859 = G__337861;
ys__337860 = G__337862;
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
return cljs.core.reduce.call(null,(function (p1__337863_SHARP_,p2__337864_SHARP_){
return cljs.core.hash_combine.call(null,p1__337863_SHARP_,cljs.core.hash.call(null,p2__337864_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__337865__337866 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__337865__337866))
{var G__337868__337870 = cljs.core.first.call(null,G__337865__337866);
var vec__337869__337871 = G__337868__337870;
var key_name__337872 = cljs.core.nth.call(null,vec__337869__337871,0,null);
var f__337873 = cljs.core.nth.call(null,vec__337869__337871,1,null);
var G__337865__337874 = G__337865__337866;

var G__337868__337875 = G__337868__337870;
var G__337865__337876 = G__337865__337874;

while(true){
var vec__337877__337878 = G__337868__337875;
var key_name__337879 = cljs.core.nth.call(null,vec__337877__337878,0,null);
var f__337880 = cljs.core.nth.call(null,vec__337877__337878,1,null);
var G__337865__337881 = G__337865__337876;

var str_name__337882 = cljs.core.name.call(null,key_name__337879);

obj[str_name__337882] = f__337880;
var temp__3698__auto____337883 = cljs.core.next.call(null,G__337865__337881);

if(cljs.core.truth_(temp__3698__auto____337883))
{var G__337865__337884 = temp__3698__auto____337883;

{
var G__337885 = cljs.core.first.call(null,G__337865__337884);
var G__337886 = G__337865__337884;
G__337868__337875 = G__337885;
G__337865__337876 = G__337886;
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
var this__337887 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__337888 = this;
return (new cljs.core.List(this__337888.meta,o,coll,(this__337888.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__337889 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__337890 = this;
return this__337890.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__337891 = this;
return this__337891.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__337892 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__337893 = this;
return this__337893.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__337894 = this;
return this__337894.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__337895 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__337896 = this;
return (new cljs.core.List(meta,this__337896.first,this__337896.rest,this__337896.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__337897 = this;
return this__337897.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__337898 = this;
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
var this__337899 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__337900 = this;
return (new cljs.core.List(this__337900.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__337901 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__337902 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__337903 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__337904 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__337905 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__337906 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__337907 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__337908 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__337909 = this;
return this__337909.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__337910 = this;
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
list.cljs$lang$applyTo = (function (arglist__337911){
var items = cljs.core.seq( arglist__337911 );;
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
var this__337912 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__337913 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__337914 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__337915 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__337915.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__337916 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__337917 = this;
return this__337917.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__337918 = this;
if(cljs.core.truth_((this__337918.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__337918.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__337919 = this;
return this__337919.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__337920 = this;
return (new cljs.core.Cons(meta,this__337920.first,this__337920.rest));
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
var G__337921 = null;
var G__337921__337922 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__337921__337923 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__337921 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__337921__337922.call(this,string,f);
case  3 :
return G__337921__337923.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337921;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__337925 = null;
var G__337925__337926 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__337925__337927 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__337925 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__337925__337926.call(this,string,k);
case  3 :
return G__337925__337927.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337925;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__337929 = null;
var G__337929__337930 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__337929__337931 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__337929 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__337929__337930.call(this,string,n);
case  3 :
return G__337929__337931.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337929;
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
var G__337939 = null;
var G__337939__337940 = (function (tsym337933,coll){
var tsym337933__337935 = this;

var this$__337936 = tsym337933__337935;

return cljs.core.get.call(null,coll,this$__337936.toString());
});
var G__337939__337941 = (function (tsym337934,coll,not_found){
var tsym337934__337937 = this;

var this$__337938 = tsym337934__337937;

return cljs.core.get.call(null,coll,this$__337938.toString(),not_found);
});
G__337939 = function(tsym337934,coll,not_found){
switch(arguments.length){
case  2 :
return G__337939__337940.call(this,tsym337934,coll);
case  3 :
return G__337939__337941.call(this,tsym337934,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__337939;
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
var x__337943 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__337943;
} else
{lazy_seq.x = x__337943.call(null);
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
var this__337944 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__337945 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__337946 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__337947 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__337947.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__337948 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__337949 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__337950 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__337951 = this;
return this__337951.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__337952 = this;
return (new cljs.core.LazySeq(meta,this__337952.realized,this__337952.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__337953 = cljs.core.array.call(null);

var s__337954 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__337954)))
{ary__337953.push(cljs.core.first.call(null,s__337954));
{
var G__337955 = cljs.core.next.call(null,s__337954);
s__337954 = G__337955;
continue;
}
} else
{return ary__337953;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__337956 = s;
var i__337957 = n;
var sum__337958 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____337959 = (i__337957 > 0);

if(cljs.core.truth_(and__3546__auto____337959))
{return cljs.core.seq.call(null,s__337956);
} else
{return and__3546__auto____337959;
}
})()))
{{
var G__337960 = cljs.core.next.call(null,s__337956);
var G__337961 = (i__337957 - 1);
var G__337962 = (sum__337958 + 1);
s__337956 = G__337960;
i__337957 = G__337961;
sum__337958 = G__337962;
continue;
}
} else
{return sum__337958;
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
var concat__337966 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__337967 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__337968 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__337963 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__337963))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__337963),concat.call(null,cljs.core.rest.call(null,s__337963),y));
} else
{return y;
}
})));
});
var concat__337969 = (function() { 
var G__337971__delegate = function (x,y,zs){
var cat__337965 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__337964 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__337964))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__337964),cat.call(null,cljs.core.rest.call(null,xys__337964),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__337965.call(null,concat.call(null,x,y),zs);
};
var G__337971 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__337971__delegate.call(this, x, y, zs);
};
G__337971.cljs$lang$maxFixedArity = 2;
G__337971.cljs$lang$applyTo = (function (arglist__337972){
var x = cljs.core.first(arglist__337972);
var y = cljs.core.first(cljs.core.next(arglist__337972));
var zs = cljs.core.rest(cljs.core.next(arglist__337972));
return G__337971__delegate.call(this, x, y, zs);
});
return G__337971;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__337966.call(this);
case  1 :
return concat__337967.call(this,x);
case  2 :
return concat__337968.call(this,x,y);
default:
return concat__337969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__337969.cljs$lang$applyTo;
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
var list_STAR___337973 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___337974 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___337975 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___337976 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___337977 = (function() { 
var G__337979__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__337979 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__337979__delegate.call(this, a, b, c, d, more);
};
G__337979.cljs$lang$maxFixedArity = 4;
G__337979.cljs$lang$applyTo = (function (arglist__337980){
var a = cljs.core.first(arglist__337980);
var b = cljs.core.first(cljs.core.next(arglist__337980));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__337980)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__337980))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__337980))));
return G__337979__delegate.call(this, a, b, c, d, more);
});
return G__337979;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___337973.call(this,a);
case  2 :
return list_STAR___337974.call(this,a,b);
case  3 :
return list_STAR___337975.call(this,a,b,c);
case  4 :
return list_STAR___337976.call(this,a,b,c,d);
default:
return list_STAR___337977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___337977.cljs$lang$applyTo;
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
var apply__337990 = (function (f,args){
var fixed_arity__337981 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__337981 + 1)) <= fixed_arity__337981)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__337991 = (function (f,x,args){
var arglist__337982 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__337983 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__337982,fixed_arity__337983) <= fixed_arity__337983)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__337982));
} else
{return f.cljs$lang$applyTo(arglist__337982);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__337982));
}
});
var apply__337992 = (function (f,x,y,args){
var arglist__337984 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__337985 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__337984,fixed_arity__337985) <= fixed_arity__337985)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__337984));
} else
{return f.cljs$lang$applyTo(arglist__337984);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__337984));
}
});
var apply__337993 = (function (f,x,y,z,args){
var arglist__337986 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__337987 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__337986,fixed_arity__337987) <= fixed_arity__337987)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__337986));
} else
{return f.cljs$lang$applyTo(arglist__337986);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__337986));
}
});
var apply__337994 = (function() { 
var G__337996__delegate = function (f,a,b,c,d,args){
var arglist__337988 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__337989 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__337988,fixed_arity__337989) <= fixed_arity__337989)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__337988));
} else
{return f.cljs$lang$applyTo(arglist__337988);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__337988));
}
};
var G__337996 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__337996__delegate.call(this, f, a, b, c, d, args);
};
G__337996.cljs$lang$maxFixedArity = 5;
G__337996.cljs$lang$applyTo = (function (arglist__337997){
var f = cljs.core.first(arglist__337997);
var a = cljs.core.first(cljs.core.next(arglist__337997));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__337997)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__337997))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__337997)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__337997)))));
return G__337996__delegate.call(this, f, a, b, c, d, args);
});
return G__337996;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__337990.call(this,f,a);
case  3 :
return apply__337991.call(this,f,a,b);
case  4 :
return apply__337992.call(this,f,a,b,c);
case  5 :
return apply__337993.call(this,f,a,b,c,d);
default:
return apply__337994.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__337994.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__337998){
var obj = cljs.core.first(arglist__337998);
var f = cljs.core.first(cljs.core.next(arglist__337998));
var args = cljs.core.rest(cljs.core.next(arglist__337998));
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
var not_EQ___337999 = (function (x){
return false;
});
var not_EQ___338000 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___338001 = (function() { 
var G__338003__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__338003 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__338003__delegate.call(this, x, y, more);
};
G__338003.cljs$lang$maxFixedArity = 2;
G__338003.cljs$lang$applyTo = (function (arglist__338004){
var x = cljs.core.first(arglist__338004);
var y = cljs.core.first(cljs.core.next(arglist__338004));
var more = cljs.core.rest(cljs.core.next(arglist__338004));
return G__338003__delegate.call(this, x, y, more);
});
return G__338003;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___337999.call(this,x);
case  2 :
return not_EQ___338000.call(this,x,y);
default:
return not_EQ___338001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___338001.cljs$lang$applyTo;
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
var G__338005 = pred;
var G__338006 = cljs.core.next.call(null,coll);
pred = G__338005;
coll = G__338006;
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
{var or__3548__auto____338007 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____338007))
{return or__3548__auto____338007;
} else
{{
var G__338008 = pred;
var G__338009 = cljs.core.next.call(null,coll);
pred = G__338008;
coll = G__338009;
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
var G__338010 = null;
var G__338010__338011 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__338010__338012 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__338010__338013 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__338010__338014 = (function() { 
var G__338016__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__338016 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__338016__delegate.call(this, x, y, zs);
};
G__338016.cljs$lang$maxFixedArity = 2;
G__338016.cljs$lang$applyTo = (function (arglist__338017){
var x = cljs.core.first(arglist__338017);
var y = cljs.core.first(cljs.core.next(arglist__338017));
var zs = cljs.core.rest(cljs.core.next(arglist__338017));
return G__338016__delegate.call(this, x, y, zs);
});
return G__338016;
})()
;
G__338010 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__338010__338011.call(this);
case  1 :
return G__338010__338012.call(this,x);
case  2 :
return G__338010__338013.call(this,x,y);
default:
return G__338010__338014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338010.cljs$lang$maxFixedArity = 2;
G__338010.cljs$lang$applyTo = G__338010__338014.cljs$lang$applyTo;
return G__338010;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__338018__delegate = function (args){
return x;
};
var G__338018 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__338018__delegate.call(this, args);
};
G__338018.cljs$lang$maxFixedArity = 0;
G__338018.cljs$lang$applyTo = (function (arglist__338019){
var args = cljs.core.seq( arglist__338019 );;
return G__338018__delegate.call(this, args);
});
return G__338018;
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
var comp__338023 = (function (){
return cljs.core.identity;
});
var comp__338024 = (function (f){
return f;
});
var comp__338025 = (function (f,g){
return (function() {
var G__338029 = null;
var G__338029__338030 = (function (){
return f.call(null,g.call(null));
});
var G__338029__338031 = (function (x){
return f.call(null,g.call(null,x));
});
var G__338029__338032 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__338029__338033 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__338029__338034 = (function() { 
var G__338036__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__338036 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338036__delegate.call(this, x, y, z, args);
};
G__338036.cljs$lang$maxFixedArity = 3;
G__338036.cljs$lang$applyTo = (function (arglist__338037){
var x = cljs.core.first(arglist__338037);
var y = cljs.core.first(cljs.core.next(arglist__338037));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338037)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338037)));
return G__338036__delegate.call(this, x, y, z, args);
});
return G__338036;
})()
;
G__338029 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__338029__338030.call(this);
case  1 :
return G__338029__338031.call(this,x);
case  2 :
return G__338029__338032.call(this,x,y);
case  3 :
return G__338029__338033.call(this,x,y,z);
default:
return G__338029__338034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338029.cljs$lang$maxFixedArity = 3;
G__338029.cljs$lang$applyTo = G__338029__338034.cljs$lang$applyTo;
return G__338029;
})()
});
var comp__338026 = (function (f,g,h){
return (function() {
var G__338038 = null;
var G__338038__338039 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__338038__338040 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__338038__338041 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__338038__338042 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__338038__338043 = (function() { 
var G__338045__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__338045 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338045__delegate.call(this, x, y, z, args);
};
G__338045.cljs$lang$maxFixedArity = 3;
G__338045.cljs$lang$applyTo = (function (arglist__338046){
var x = cljs.core.first(arglist__338046);
var y = cljs.core.first(cljs.core.next(arglist__338046));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338046)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338046)));
return G__338045__delegate.call(this, x, y, z, args);
});
return G__338045;
})()
;
G__338038 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__338038__338039.call(this);
case  1 :
return G__338038__338040.call(this,x);
case  2 :
return G__338038__338041.call(this,x,y);
case  3 :
return G__338038__338042.call(this,x,y,z);
default:
return G__338038__338043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338038.cljs$lang$maxFixedArity = 3;
G__338038.cljs$lang$applyTo = G__338038__338043.cljs$lang$applyTo;
return G__338038;
})()
});
var comp__338027 = (function() { 
var G__338047__delegate = function (f1,f2,f3,fs){
var fs__338020 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__338048__delegate = function (args){
var ret__338021 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__338020),args);
var fs__338022 = cljs.core.next.call(null,fs__338020);

while(true){
if(cljs.core.truth_(fs__338022))
{{
var G__338049 = cljs.core.first.call(null,fs__338022).call(null,ret__338021);
var G__338050 = cljs.core.next.call(null,fs__338022);
ret__338021 = G__338049;
fs__338022 = G__338050;
continue;
}
} else
{return ret__338021;
}
break;
}
};
var G__338048 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__338048__delegate.call(this, args);
};
G__338048.cljs$lang$maxFixedArity = 0;
G__338048.cljs$lang$applyTo = (function (arglist__338051){
var args = cljs.core.seq( arglist__338051 );;
return G__338048__delegate.call(this, args);
});
return G__338048;
})()
;
};
var G__338047 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338047__delegate.call(this, f1, f2, f3, fs);
};
G__338047.cljs$lang$maxFixedArity = 3;
G__338047.cljs$lang$applyTo = (function (arglist__338052){
var f1 = cljs.core.first(arglist__338052);
var f2 = cljs.core.first(cljs.core.next(arglist__338052));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338052)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338052)));
return G__338047__delegate.call(this, f1, f2, f3, fs);
});
return G__338047;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__338023.call(this);
case  1 :
return comp__338024.call(this,f1);
case  2 :
return comp__338025.call(this,f1,f2);
case  3 :
return comp__338026.call(this,f1,f2,f3);
default:
return comp__338027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__338027.cljs$lang$applyTo;
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
var partial__338053 = (function (f,arg1){
return (function() { 
var G__338058__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__338058 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__338058__delegate.call(this, args);
};
G__338058.cljs$lang$maxFixedArity = 0;
G__338058.cljs$lang$applyTo = (function (arglist__338059){
var args = cljs.core.seq( arglist__338059 );;
return G__338058__delegate.call(this, args);
});
return G__338058;
})()
;
});
var partial__338054 = (function (f,arg1,arg2){
return (function() { 
var G__338060__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__338060 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__338060__delegate.call(this, args);
};
G__338060.cljs$lang$maxFixedArity = 0;
G__338060.cljs$lang$applyTo = (function (arglist__338061){
var args = cljs.core.seq( arglist__338061 );;
return G__338060__delegate.call(this, args);
});
return G__338060;
})()
;
});
var partial__338055 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__338062__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__338062 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__338062__delegate.call(this, args);
};
G__338062.cljs$lang$maxFixedArity = 0;
G__338062.cljs$lang$applyTo = (function (arglist__338063){
var args = cljs.core.seq( arglist__338063 );;
return G__338062__delegate.call(this, args);
});
return G__338062;
})()
;
});
var partial__338056 = (function() { 
var G__338064__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__338065__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__338065 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__338065__delegate.call(this, args);
};
G__338065.cljs$lang$maxFixedArity = 0;
G__338065.cljs$lang$applyTo = (function (arglist__338066){
var args = cljs.core.seq( arglist__338066 );;
return G__338065__delegate.call(this, args);
});
return G__338065;
})()
;
};
var G__338064 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__338064__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__338064.cljs$lang$maxFixedArity = 4;
G__338064.cljs$lang$applyTo = (function (arglist__338067){
var f = cljs.core.first(arglist__338067);
var arg1 = cljs.core.first(cljs.core.next(arglist__338067));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338067)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__338067))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__338067))));
return G__338064__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__338064;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__338053.call(this,f,arg1);
case  3 :
return partial__338054.call(this,f,arg1,arg2);
case  4 :
return partial__338055.call(this,f,arg1,arg2,arg3);
default:
return partial__338056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__338056.cljs$lang$applyTo;
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
var fnil__338068 = (function (f,x){
return (function() {
var G__338072 = null;
var G__338072__338073 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__338072__338074 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__338072__338075 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__338072__338076 = (function() { 
var G__338078__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__338078 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338078__delegate.call(this, a, b, c, ds);
};
G__338078.cljs$lang$maxFixedArity = 3;
G__338078.cljs$lang$applyTo = (function (arglist__338079){
var a = cljs.core.first(arglist__338079);
var b = cljs.core.first(cljs.core.next(arglist__338079));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338079)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338079)));
return G__338078__delegate.call(this, a, b, c, ds);
});
return G__338078;
})()
;
G__338072 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__338072__338073.call(this,a);
case  2 :
return G__338072__338074.call(this,a,b);
case  3 :
return G__338072__338075.call(this,a,b,c);
default:
return G__338072__338076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338072.cljs$lang$maxFixedArity = 3;
G__338072.cljs$lang$applyTo = G__338072__338076.cljs$lang$applyTo;
return G__338072;
})()
});
var fnil__338069 = (function (f,x,y){
return (function() {
var G__338080 = null;
var G__338080__338081 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__338080__338082 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__338080__338083 = (function() { 
var G__338085__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__338085 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338085__delegate.call(this, a, b, c, ds);
};
G__338085.cljs$lang$maxFixedArity = 3;
G__338085.cljs$lang$applyTo = (function (arglist__338086){
var a = cljs.core.first(arglist__338086);
var b = cljs.core.first(cljs.core.next(arglist__338086));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338086)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338086)));
return G__338085__delegate.call(this, a, b, c, ds);
});
return G__338085;
})()
;
G__338080 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__338080__338081.call(this,a,b);
case  3 :
return G__338080__338082.call(this,a,b,c);
default:
return G__338080__338083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338080.cljs$lang$maxFixedArity = 3;
G__338080.cljs$lang$applyTo = G__338080__338083.cljs$lang$applyTo;
return G__338080;
})()
});
var fnil__338070 = (function (f,x,y,z){
return (function() {
var G__338087 = null;
var G__338087__338088 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__338087__338089 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__338087__338090 = (function() { 
var G__338092__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__338092 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338092__delegate.call(this, a, b, c, ds);
};
G__338092.cljs$lang$maxFixedArity = 3;
G__338092.cljs$lang$applyTo = (function (arglist__338093){
var a = cljs.core.first(arglist__338093);
var b = cljs.core.first(cljs.core.next(arglist__338093));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338093)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338093)));
return G__338092__delegate.call(this, a, b, c, ds);
});
return G__338092;
})()
;
G__338087 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__338087__338088.call(this,a,b);
case  3 :
return G__338087__338089.call(this,a,b,c);
default:
return G__338087__338090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338087.cljs$lang$maxFixedArity = 3;
G__338087.cljs$lang$applyTo = G__338087__338090.cljs$lang$applyTo;
return G__338087;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__338068.call(this,f,x);
case  3 :
return fnil__338069.call(this,f,x,y);
case  4 :
return fnil__338070.call(this,f,x,y,z);
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
var mapi__338096 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338094 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338094))
{var s__338095 = temp__3698__auto____338094;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__338095)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__338095)));
} else
{return null;
}
})));
});

return mapi__338096.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338097))
{var s__338098 = temp__3698__auto____338097;

var x__338099 = f.call(null,cljs.core.first.call(null,s__338098));

if(cljs.core.truth_((x__338099 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__338098));
} else
{return cljs.core.cons.call(null,x__338099,keep.call(null,f,cljs.core.rest.call(null,s__338098)));
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
var keepi__338109 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338106 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338106))
{var s__338107 = temp__3698__auto____338106;

var x__338108 = f.call(null,idx,cljs.core.first.call(null,s__338107));

if(cljs.core.truth_((x__338108 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__338107));
} else
{return cljs.core.cons.call(null,x__338108,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__338107)));
}
} else
{return null;
}
})));
});

return keepi__338109.call(null,0,coll);
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
var every_pred__338154 = (function (p){
return (function() {
var ep1 = null;
var ep1__338159 = (function (){
return true;
});
var ep1__338160 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__338161 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338116 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____338116))
{return p.call(null,y);
} else
{return and__3546__auto____338116;
}
})());
});
var ep1__338162 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338117 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____338117))
{var and__3546__auto____338118 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____338118))
{return p.call(null,z);
} else
{return and__3546__auto____338118;
}
} else
{return and__3546__auto____338117;
}
})());
});
var ep1__338163 = (function() { 
var G__338165__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338119 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____338119))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____338119;
}
})());
};
var G__338165 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338165__delegate.call(this, x, y, z, args);
};
G__338165.cljs$lang$maxFixedArity = 3;
G__338165.cljs$lang$applyTo = (function (arglist__338166){
var x = cljs.core.first(arglist__338166);
var y = cljs.core.first(cljs.core.next(arglist__338166));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338166)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338166)));
return G__338165__delegate.call(this, x, y, z, args);
});
return G__338165;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__338159.call(this);
case  1 :
return ep1__338160.call(this,x);
case  2 :
return ep1__338161.call(this,x,y);
case  3 :
return ep1__338162.call(this,x,y,z);
default:
return ep1__338163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__338163.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__338155 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__338167 = (function (){
return true;
});
var ep2__338168 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338120 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____338120))
{return p2.call(null,x);
} else
{return and__3546__auto____338120;
}
})());
});
var ep2__338169 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338121 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____338121))
{var and__3546__auto____338122 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____338122))
{var and__3546__auto____338123 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____338123))
{return p2.call(null,y);
} else
{return and__3546__auto____338123;
}
} else
{return and__3546__auto____338122;
}
} else
{return and__3546__auto____338121;
}
})());
});
var ep2__338170 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338124 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____338124))
{var and__3546__auto____338125 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____338125))
{var and__3546__auto____338126 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____338126))
{var and__3546__auto____338127 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____338127))
{var and__3546__auto____338128 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____338128))
{return p2.call(null,z);
} else
{return and__3546__auto____338128;
}
} else
{return and__3546__auto____338127;
}
} else
{return and__3546__auto____338126;
}
} else
{return and__3546__auto____338125;
}
} else
{return and__3546__auto____338124;
}
})());
});
var ep2__338171 = (function() { 
var G__338173__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338129 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____338129))
{return cljs.core.every_QMARK_.call(null,(function (p1__338100_SHARP_){
var and__3546__auto____338130 = p1.call(null,p1__338100_SHARP_);

if(cljs.core.truth_(and__3546__auto____338130))
{return p2.call(null,p1__338100_SHARP_);
} else
{return and__3546__auto____338130;
}
}),args);
} else
{return and__3546__auto____338129;
}
})());
};
var G__338173 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338173__delegate.call(this, x, y, z, args);
};
G__338173.cljs$lang$maxFixedArity = 3;
G__338173.cljs$lang$applyTo = (function (arglist__338174){
var x = cljs.core.first(arglist__338174);
var y = cljs.core.first(cljs.core.next(arglist__338174));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338174)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338174)));
return G__338173__delegate.call(this, x, y, z, args);
});
return G__338173;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__338167.call(this);
case  1 :
return ep2__338168.call(this,x);
case  2 :
return ep2__338169.call(this,x,y);
case  3 :
return ep2__338170.call(this,x,y,z);
default:
return ep2__338171.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__338171.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__338156 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__338175 = (function (){
return true;
});
var ep3__338176 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338131 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____338131))
{var and__3546__auto____338132 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____338132))
{return p3.call(null,x);
} else
{return and__3546__auto____338132;
}
} else
{return and__3546__auto____338131;
}
})());
});
var ep3__338177 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338133 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____338133))
{var and__3546__auto____338134 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____338134))
{var and__3546__auto____338135 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____338135))
{var and__3546__auto____338136 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____338136))
{var and__3546__auto____338137 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____338137))
{return p3.call(null,y);
} else
{return and__3546__auto____338137;
}
} else
{return and__3546__auto____338136;
}
} else
{return and__3546__auto____338135;
}
} else
{return and__3546__auto____338134;
}
} else
{return and__3546__auto____338133;
}
})());
});
var ep3__338178 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338138 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____338138))
{var and__3546__auto____338139 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____338139))
{var and__3546__auto____338140 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____338140))
{var and__3546__auto____338141 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____338141))
{var and__3546__auto____338142 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____338142))
{var and__3546__auto____338143 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____338143))
{var and__3546__auto____338144 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____338144))
{var and__3546__auto____338145 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____338145))
{return p3.call(null,z);
} else
{return and__3546__auto____338145;
}
} else
{return and__3546__auto____338144;
}
} else
{return and__3546__auto____338143;
}
} else
{return and__3546__auto____338142;
}
} else
{return and__3546__auto____338141;
}
} else
{return and__3546__auto____338140;
}
} else
{return and__3546__auto____338139;
}
} else
{return and__3546__auto____338138;
}
})());
});
var ep3__338179 = (function() { 
var G__338181__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338146 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____338146))
{return cljs.core.every_QMARK_.call(null,(function (p1__338101_SHARP_){
var and__3546__auto____338147 = p1.call(null,p1__338101_SHARP_);

if(cljs.core.truth_(and__3546__auto____338147))
{var and__3546__auto____338148 = p2.call(null,p1__338101_SHARP_);

if(cljs.core.truth_(and__3546__auto____338148))
{return p3.call(null,p1__338101_SHARP_);
} else
{return and__3546__auto____338148;
}
} else
{return and__3546__auto____338147;
}
}),args);
} else
{return and__3546__auto____338146;
}
})());
};
var G__338181 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338181__delegate.call(this, x, y, z, args);
};
G__338181.cljs$lang$maxFixedArity = 3;
G__338181.cljs$lang$applyTo = (function (arglist__338182){
var x = cljs.core.first(arglist__338182);
var y = cljs.core.first(cljs.core.next(arglist__338182));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338182)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338182)));
return G__338181__delegate.call(this, x, y, z, args);
});
return G__338181;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__338175.call(this);
case  1 :
return ep3__338176.call(this,x);
case  2 :
return ep3__338177.call(this,x,y);
case  3 :
return ep3__338178.call(this,x,y,z);
default:
return ep3__338179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__338179.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__338157 = (function() { 
var G__338183__delegate = function (p1,p2,p3,ps){
var ps__338149 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__338184 = (function (){
return true;
});
var epn__338185 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__338102_SHARP_){
return p1__338102_SHARP_.call(null,x);
}),ps__338149);
});
var epn__338186 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__338103_SHARP_){
var and__3546__auto____338150 = p1__338103_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____338150))
{return p1__338103_SHARP_.call(null,y);
} else
{return and__3546__auto____338150;
}
}),ps__338149);
});
var epn__338187 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__338104_SHARP_){
var and__3546__auto____338151 = p1__338104_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____338151))
{var and__3546__auto____338152 = p1__338104_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____338152))
{return p1__338104_SHARP_.call(null,z);
} else
{return and__3546__auto____338152;
}
} else
{return and__3546__auto____338151;
}
}),ps__338149);
});
var epn__338188 = (function() { 
var G__338190__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____338153 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____338153))
{return cljs.core.every_QMARK_.call(null,(function (p1__338105_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__338105_SHARP_,args);
}),ps__338149);
} else
{return and__3546__auto____338153;
}
})());
};
var G__338190 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338190__delegate.call(this, x, y, z, args);
};
G__338190.cljs$lang$maxFixedArity = 3;
G__338190.cljs$lang$applyTo = (function (arglist__338191){
var x = cljs.core.first(arglist__338191);
var y = cljs.core.first(cljs.core.next(arglist__338191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338191)));
return G__338190__delegate.call(this, x, y, z, args);
});
return G__338190;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__338184.call(this);
case  1 :
return epn__338185.call(this,x);
case  2 :
return epn__338186.call(this,x,y);
case  3 :
return epn__338187.call(this,x,y,z);
default:
return epn__338188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__338188.cljs$lang$applyTo;
return epn;
})()
};
var G__338183 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338183__delegate.call(this, p1, p2, p3, ps);
};
G__338183.cljs$lang$maxFixedArity = 3;
G__338183.cljs$lang$applyTo = (function (arglist__338192){
var p1 = cljs.core.first(arglist__338192);
var p2 = cljs.core.first(cljs.core.next(arglist__338192));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338192)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338192)));
return G__338183__delegate.call(this, p1, p2, p3, ps);
});
return G__338183;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__338154.call(this,p1);
case  2 :
return every_pred__338155.call(this,p1,p2);
case  3 :
return every_pred__338156.call(this,p1,p2,p3);
default:
return every_pred__338157.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__338157.cljs$lang$applyTo;
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
var some_fn__338232 = (function (p){
return (function() {
var sp1 = null;
var sp1__338237 = (function (){
return null;
});
var sp1__338238 = (function (x){
return p.call(null,x);
});
var sp1__338239 = (function (x,y){
var or__3548__auto____338194 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____338194))
{return or__3548__auto____338194;
} else
{return p.call(null,y);
}
});
var sp1__338240 = (function (x,y,z){
var or__3548__auto____338195 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____338195))
{return or__3548__auto____338195;
} else
{var or__3548__auto____338196 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____338196))
{return or__3548__auto____338196;
} else
{return p.call(null,z);
}
}
});
var sp1__338241 = (function() { 
var G__338243__delegate = function (x,y,z,args){
var or__3548__auto____338197 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____338197))
{return or__3548__auto____338197;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__338243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338243__delegate.call(this, x, y, z, args);
};
G__338243.cljs$lang$maxFixedArity = 3;
G__338243.cljs$lang$applyTo = (function (arglist__338244){
var x = cljs.core.first(arglist__338244);
var y = cljs.core.first(cljs.core.next(arglist__338244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338244)));
return G__338243__delegate.call(this, x, y, z, args);
});
return G__338243;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__338237.call(this);
case  1 :
return sp1__338238.call(this,x);
case  2 :
return sp1__338239.call(this,x,y);
case  3 :
return sp1__338240.call(this,x,y,z);
default:
return sp1__338241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__338241.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__338233 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__338245 = (function (){
return null;
});
var sp2__338246 = (function (x){
var or__3548__auto____338198 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____338198))
{return or__3548__auto____338198;
} else
{return p2.call(null,x);
}
});
var sp2__338247 = (function (x,y){
var or__3548__auto____338199 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____338199))
{return or__3548__auto____338199;
} else
{var or__3548__auto____338200 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____338200))
{return or__3548__auto____338200;
} else
{var or__3548__auto____338201 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____338201))
{return or__3548__auto____338201;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__338248 = (function (x,y,z){
var or__3548__auto____338202 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____338202))
{return or__3548__auto____338202;
} else
{var or__3548__auto____338203 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____338203))
{return or__3548__auto____338203;
} else
{var or__3548__auto____338204 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____338204))
{return or__3548__auto____338204;
} else
{var or__3548__auto____338205 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____338205))
{return or__3548__auto____338205;
} else
{var or__3548__auto____338206 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____338206))
{return or__3548__auto____338206;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__338249 = (function() { 
var G__338251__delegate = function (x,y,z,args){
var or__3548__auto____338207 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____338207))
{return or__3548__auto____338207;
} else
{return cljs.core.some.call(null,(function (p1__338110_SHARP_){
var or__3548__auto____338208 = p1.call(null,p1__338110_SHARP_);

if(cljs.core.truth_(or__3548__auto____338208))
{return or__3548__auto____338208;
} else
{return p2.call(null,p1__338110_SHARP_);
}
}),args);
}
};
var G__338251 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338251__delegate.call(this, x, y, z, args);
};
G__338251.cljs$lang$maxFixedArity = 3;
G__338251.cljs$lang$applyTo = (function (arglist__338252){
var x = cljs.core.first(arglist__338252);
var y = cljs.core.first(cljs.core.next(arglist__338252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338252)));
return G__338251__delegate.call(this, x, y, z, args);
});
return G__338251;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__338245.call(this);
case  1 :
return sp2__338246.call(this,x);
case  2 :
return sp2__338247.call(this,x,y);
case  3 :
return sp2__338248.call(this,x,y,z);
default:
return sp2__338249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__338249.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__338234 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__338253 = (function (){
return null;
});
var sp3__338254 = (function (x){
var or__3548__auto____338209 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____338209))
{return or__3548__auto____338209;
} else
{var or__3548__auto____338210 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____338210))
{return or__3548__auto____338210;
} else
{return p3.call(null,x);
}
}
});
var sp3__338255 = (function (x,y){
var or__3548__auto____338211 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____338211))
{return or__3548__auto____338211;
} else
{var or__3548__auto____338212 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____338212))
{return or__3548__auto____338212;
} else
{var or__3548__auto____338213 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____338213))
{return or__3548__auto____338213;
} else
{var or__3548__auto____338214 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____338214))
{return or__3548__auto____338214;
} else
{var or__3548__auto____338215 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____338215))
{return or__3548__auto____338215;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__338256 = (function (x,y,z){
var or__3548__auto____338216 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____338216))
{return or__3548__auto____338216;
} else
{var or__3548__auto____338217 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____338217))
{return or__3548__auto____338217;
} else
{var or__3548__auto____338218 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____338218))
{return or__3548__auto____338218;
} else
{var or__3548__auto____338219 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____338219))
{return or__3548__auto____338219;
} else
{var or__3548__auto____338220 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____338220))
{return or__3548__auto____338220;
} else
{var or__3548__auto____338221 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____338221))
{return or__3548__auto____338221;
} else
{var or__3548__auto____338222 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____338222))
{return or__3548__auto____338222;
} else
{var or__3548__auto____338223 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____338223))
{return or__3548__auto____338223;
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
var sp3__338257 = (function() { 
var G__338259__delegate = function (x,y,z,args){
var or__3548__auto____338224 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____338224))
{return or__3548__auto____338224;
} else
{return cljs.core.some.call(null,(function (p1__338111_SHARP_){
var or__3548__auto____338225 = p1.call(null,p1__338111_SHARP_);

if(cljs.core.truth_(or__3548__auto____338225))
{return or__3548__auto____338225;
} else
{var or__3548__auto____338226 = p2.call(null,p1__338111_SHARP_);

if(cljs.core.truth_(or__3548__auto____338226))
{return or__3548__auto____338226;
} else
{return p3.call(null,p1__338111_SHARP_);
}
}
}),args);
}
};
var G__338259 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338259__delegate.call(this, x, y, z, args);
};
G__338259.cljs$lang$maxFixedArity = 3;
G__338259.cljs$lang$applyTo = (function (arglist__338260){
var x = cljs.core.first(arglist__338260);
var y = cljs.core.first(cljs.core.next(arglist__338260));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338260)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338260)));
return G__338259__delegate.call(this, x, y, z, args);
});
return G__338259;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__338253.call(this);
case  1 :
return sp3__338254.call(this,x);
case  2 :
return sp3__338255.call(this,x,y);
case  3 :
return sp3__338256.call(this,x,y,z);
default:
return sp3__338257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__338257.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__338235 = (function() { 
var G__338261__delegate = function (p1,p2,p3,ps){
var ps__338227 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__338262 = (function (){
return null;
});
var spn__338263 = (function (x){
return cljs.core.some.call(null,(function (p1__338112_SHARP_){
return p1__338112_SHARP_.call(null,x);
}),ps__338227);
});
var spn__338264 = (function (x,y){
return cljs.core.some.call(null,(function (p1__338113_SHARP_){
var or__3548__auto____338228 = p1__338113_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____338228))
{return or__3548__auto____338228;
} else
{return p1__338113_SHARP_.call(null,y);
}
}),ps__338227);
});
var spn__338265 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__338114_SHARP_){
var or__3548__auto____338229 = p1__338114_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____338229))
{return or__3548__auto____338229;
} else
{var or__3548__auto____338230 = p1__338114_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____338230))
{return or__3548__auto____338230;
} else
{return p1__338114_SHARP_.call(null,z);
}
}
}),ps__338227);
});
var spn__338266 = (function() { 
var G__338268__delegate = function (x,y,z,args){
var or__3548__auto____338231 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____338231))
{return or__3548__auto____338231;
} else
{return cljs.core.some.call(null,(function (p1__338115_SHARP_){
return cljs.core.some.call(null,p1__338115_SHARP_,args);
}),ps__338227);
}
};
var G__338268 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338268__delegate.call(this, x, y, z, args);
};
G__338268.cljs$lang$maxFixedArity = 3;
G__338268.cljs$lang$applyTo = (function (arglist__338269){
var x = cljs.core.first(arglist__338269);
var y = cljs.core.first(cljs.core.next(arglist__338269));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338269)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338269)));
return G__338268__delegate.call(this, x, y, z, args);
});
return G__338268;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__338262.call(this);
case  1 :
return spn__338263.call(this,x);
case  2 :
return spn__338264.call(this,x,y);
case  3 :
return spn__338265.call(this,x,y,z);
default:
return spn__338266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__338266.cljs$lang$applyTo;
return spn;
})()
};
var G__338261 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338261__delegate.call(this, p1, p2, p3, ps);
};
G__338261.cljs$lang$maxFixedArity = 3;
G__338261.cljs$lang$applyTo = (function (arglist__338270){
var p1 = cljs.core.first(arglist__338270);
var p2 = cljs.core.first(cljs.core.next(arglist__338270));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338270)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338270)));
return G__338261__delegate.call(this, p1, p2, p3, ps);
});
return G__338261;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__338232.call(this,p1);
case  2 :
return some_fn__338233.call(this,p1,p2);
case  3 :
return some_fn__338234.call(this,p1,p2,p3);
default:
return some_fn__338235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__338235.cljs$lang$applyTo;
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
var map__338283 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338271 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338271))
{var s__338272 = temp__3698__auto____338271;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__338272)),map.call(null,f,cljs.core.rest.call(null,s__338272)));
} else
{return null;
}
})));
});
var map__338284 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__338273 = cljs.core.seq.call(null,c1);
var s2__338274 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____338275 = s1__338273;

if(cljs.core.truth_(and__3546__auto____338275))
{return s2__338274;
} else
{return and__3546__auto____338275;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__338273),cljs.core.first.call(null,s2__338274)),map.call(null,f,cljs.core.rest.call(null,s1__338273),cljs.core.rest.call(null,s2__338274)));
} else
{return null;
}
})));
});
var map__338285 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__338276 = cljs.core.seq.call(null,c1);
var s2__338277 = cljs.core.seq.call(null,c2);
var s3__338278 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____338279 = s1__338276;

if(cljs.core.truth_(and__3546__auto____338279))
{var and__3546__auto____338280 = s2__338277;

if(cljs.core.truth_(and__3546__auto____338280))
{return s3__338278;
} else
{return and__3546__auto____338280;
}
} else
{return and__3546__auto____338279;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__338276),cljs.core.first.call(null,s2__338277),cljs.core.first.call(null,s3__338278)),map.call(null,f,cljs.core.rest.call(null,s1__338276),cljs.core.rest.call(null,s2__338277),cljs.core.rest.call(null,s3__338278)));
} else
{return null;
}
})));
});
var map__338286 = (function() { 
var G__338288__delegate = function (f,c1,c2,c3,colls){
var step__338282 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__338281 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__338281)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__338281),step.call(null,map.call(null,cljs.core.rest,ss__338281)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__338193_SHARP_){
return cljs.core.apply.call(null,f,p1__338193_SHARP_);
}),step__338282.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__338288 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__338288__delegate.call(this, f, c1, c2, c3, colls);
};
G__338288.cljs$lang$maxFixedArity = 4;
G__338288.cljs$lang$applyTo = (function (arglist__338289){
var f = cljs.core.first(arglist__338289);
var c1 = cljs.core.first(cljs.core.next(arglist__338289));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338289)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__338289))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__338289))));
return G__338288__delegate.call(this, f, c1, c2, c3, colls);
});
return G__338288;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__338283.call(this,f,c1);
case  3 :
return map__338284.call(this,f,c1,c2);
case  4 :
return map__338285.call(this,f,c1,c2,c3);
default:
return map__338286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__338286.cljs$lang$applyTo;
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
{var temp__3698__auto____338290 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338290))
{var s__338291 = temp__3698__auto____338290;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__338291),take.call(null,(n - 1),cljs.core.rest.call(null,s__338291)));
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
var step__338294 = (function (n,coll){
while(true){
var s__338292 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____338293 = (n > 0);

if(cljs.core.truth_(and__3546__auto____338293))
{return s__338292;
} else
{return and__3546__auto____338293;
}
})()))
{{
var G__338295 = (n - 1);
var G__338296 = cljs.core.rest.call(null,s__338292);
n = G__338295;
coll = G__338296;
continue;
}
} else
{return s__338292;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__338294.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__338297 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__338298 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__338297.call(this,n);
case  2 :
return drop_last__338298.call(this,n,s);
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
var s__338300 = cljs.core.seq.call(null,coll);
var lead__338301 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__338301))
{{
var G__338302 = cljs.core.next.call(null,s__338300);
var G__338303 = cljs.core.next.call(null,lead__338301);
s__338300 = G__338302;
lead__338301 = G__338303;
continue;
}
} else
{return s__338300;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__338306 = (function (pred,coll){
while(true){
var s__338304 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____338305 = s__338304;

if(cljs.core.truth_(and__3546__auto____338305))
{return pred.call(null,cljs.core.first.call(null,s__338304));
} else
{return and__3546__auto____338305;
}
})()))
{{
var G__338307 = pred;
var G__338308 = cljs.core.rest.call(null,s__338304);
pred = G__338307;
coll = G__338308;
continue;
}
} else
{return s__338304;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__338306.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338309 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338309))
{var s__338310 = temp__3698__auto____338309;

return cljs.core.concat.call(null,s__338310,cycle.call(null,s__338310));
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
var repeat__338311 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__338312 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__338311.call(this,n);
case  2 :
return repeat__338312.call(this,n,x);
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
var repeatedly__338314 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__338315 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__338314.call(this,n);
case  2 :
return repeatedly__338315.call(this,n,f);
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
var interleave__338321 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__338317 = cljs.core.seq.call(null,c1);
var s2__338318 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____338319 = s1__338317;

if(cljs.core.truth_(and__3546__auto____338319))
{return s2__338318;
} else
{return and__3546__auto____338319;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__338317),cljs.core.cons.call(null,cljs.core.first.call(null,s2__338318),interleave.call(null,cljs.core.rest.call(null,s1__338317),cljs.core.rest.call(null,s2__338318))));
} else
{return null;
}
})));
});
var interleave__338322 = (function() { 
var G__338324__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__338320 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__338320)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__338320),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__338320)));
} else
{return null;
}
})));
};
var G__338324 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__338324__delegate.call(this, c1, c2, colls);
};
G__338324.cljs$lang$maxFixedArity = 2;
G__338324.cljs$lang$applyTo = (function (arglist__338325){
var c1 = cljs.core.first(arglist__338325);
var c2 = cljs.core.first(cljs.core.next(arglist__338325));
var colls = cljs.core.rest(cljs.core.next(arglist__338325));
return G__338324__delegate.call(this, c1, c2, colls);
});
return G__338324;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__338321.call(this,c1,c2);
default:
return interleave__338322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__338322.cljs$lang$applyTo;
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
var cat__338328 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____338326 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____338326))
{var coll__338327 = temp__3695__auto____338326;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__338327),cat.call(null,cljs.core.rest.call(null,coll__338327),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__338328.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__338329 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__338330 = (function() { 
var G__338332__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__338332 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__338332__delegate.call(this, f, coll, colls);
};
G__338332.cljs$lang$maxFixedArity = 2;
G__338332.cljs$lang$applyTo = (function (arglist__338333){
var f = cljs.core.first(arglist__338333);
var coll = cljs.core.first(cljs.core.next(arglist__338333));
var colls = cljs.core.rest(cljs.core.next(arglist__338333));
return G__338332__delegate.call(this, f, coll, colls);
});
return G__338332;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__338329.call(this,f,coll);
default:
return mapcat__338330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__338330.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338334 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338334))
{var s__338335 = temp__3698__auto____338334;

var f__338336 = cljs.core.first.call(null,s__338335);
var r__338337 = cljs.core.rest.call(null,s__338335);

if(cljs.core.truth_(pred.call(null,f__338336)))
{return cljs.core.cons.call(null,f__338336,filter.call(null,pred,r__338337));
} else
{return filter.call(null,pred,r__338337);
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
var walk__338339 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__338339.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__338338_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__338338_SHARP_));
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
var partition__338346 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__338347 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338340 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338340))
{var s__338341 = temp__3698__auto____338340;

var p__338342 = cljs.core.take.call(null,n,s__338341);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__338342))))
{return cljs.core.cons.call(null,p__338342,partition.call(null,n,step,cljs.core.drop.call(null,step,s__338341)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__338348 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338343 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338343))
{var s__338344 = temp__3698__auto____338343;

var p__338345 = cljs.core.take.call(null,n,s__338344);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__338345))))
{return cljs.core.cons.call(null,p__338345,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__338344)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__338345,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__338346.call(this,n,step);
case  3 :
return partition__338347.call(this,n,step,pad);
case  4 :
return partition__338348.call(this,n,step,pad,coll);
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
var get_in__338354 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__338355 = (function (m,ks,not_found){
var sentinel__338350 = cljs.core.lookup_sentinel;
var m__338351 = m;
var ks__338352 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__338352))
{var m__338353 = cljs.core.get.call(null,m__338351,cljs.core.first.call(null,ks__338352),sentinel__338350);

if(cljs.core.truth_((sentinel__338350 === m__338353)))
{return not_found;
} else
{{
var G__338357 = sentinel__338350;
var G__338358 = m__338353;
var G__338359 = cljs.core.next.call(null,ks__338352);
sentinel__338350 = G__338357;
m__338351 = G__338358;
ks__338352 = G__338359;
continue;
}
}
} else
{return m__338351;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__338354.call(this,m,ks);
case  3 :
return get_in__338355.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__338360,v){
var vec__338361__338362 = p__338360;
var k__338363 = cljs.core.nth.call(null,vec__338361__338362,0,null);
var ks__338364 = cljs.core.nthnext.call(null,vec__338361__338362,1);

if(cljs.core.truth_(ks__338364))
{return cljs.core.assoc.call(null,m,k__338363,assoc_in.call(null,cljs.core.get.call(null,m,k__338363),ks__338364,v));
} else
{return cljs.core.assoc.call(null,m,k__338363,v);
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
var update_in__delegate = function (m,p__338365,f,args){
var vec__338366__338367 = p__338365;
var k__338368 = cljs.core.nth.call(null,vec__338366__338367,0,null);
var ks__338369 = cljs.core.nthnext.call(null,vec__338366__338367,1);

if(cljs.core.truth_(ks__338369))
{return cljs.core.assoc.call(null,m,k__338368,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__338368),ks__338369,f,args));
} else
{return cljs.core.assoc.call(null,m,k__338368,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__338368),args));
}
};
var update_in = function (m,p__338365,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__338365, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__338370){
var m = cljs.core.first(arglist__338370);
var p__338365 = cljs.core.first(cljs.core.next(arglist__338370));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338370)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338370)));
return update_in__delegate.call(this, m, p__338365, f, args);
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
var this__338371 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__338404 = null;
var G__338404__338405 = (function (coll,k){
var this__338372 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__338404__338406 = (function (coll,k,not_found){
var this__338373 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__338404 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__338404__338405.call(this,coll,k);
case  3 :
return G__338404__338406.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338404;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__338374 = this;
var new_array__338375 = cljs.core.aclone.call(null,this__338374.array);

(new_array__338375[k] = v);
return (new cljs.core.Vector(this__338374.meta,new_array__338375));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__338408 = null;
var G__338408__338409 = (function (tsym338376,k){
var this__338378 = this;
var tsym338376__338379 = this;

var coll__338380 = tsym338376__338379;

return cljs.core._lookup.call(null,coll__338380,k);
});
var G__338408__338410 = (function (tsym338377,k,not_found){
var this__338381 = this;
var tsym338377__338382 = this;

var coll__338383 = tsym338377__338382;

return cljs.core._lookup.call(null,coll__338383,k,not_found);
});
G__338408 = function(tsym338377,k,not_found){
switch(arguments.length){
case  2 :
return G__338408__338409.call(this,tsym338377,k);
case  3 :
return G__338408__338410.call(this,tsym338377,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338408;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__338384 = this;
var new_array__338385 = cljs.core.aclone.call(null,this__338384.array);

new_array__338385.push(o);
return (new cljs.core.Vector(this__338384.meta,new_array__338385));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__338412 = null;
var G__338412__338413 = (function (v,f){
var this__338386 = this;
return cljs.core.ci_reduce.call(null,this__338386.array,f);
});
var G__338412__338414 = (function (v,f,start){
var this__338387 = this;
return cljs.core.ci_reduce.call(null,this__338387.array,f,start);
});
G__338412 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__338412__338413.call(this,v,f);
case  3 :
return G__338412__338414.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338412;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__338388 = this;
if(cljs.core.truth_((this__338388.array.length > 0)))
{var vector_seq__338389 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__338388.array.length)))
{return cljs.core.cons.call(null,(this__338388.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__338389.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__338390 = this;
return this__338390.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__338391 = this;
var count__338392 = this__338391.array.length;

if(cljs.core.truth_((count__338392 > 0)))
{return (this__338391.array[(count__338392 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__338393 = this;
if(cljs.core.truth_((this__338393.array.length > 0)))
{var new_array__338394 = cljs.core.aclone.call(null,this__338393.array);

new_array__338394.pop();
return (new cljs.core.Vector(this__338393.meta,new_array__338394));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__338395 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__338396 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__338397 = this;
return (new cljs.core.Vector(meta,this__338397.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__338398 = this;
return this__338398.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__338416 = null;
var G__338416__338417 = (function (coll,n){
var this__338399 = this;
if(cljs.core.truth_((function (){var and__3546__auto____338400 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____338400))
{return (n < this__338399.array.length);
} else
{return and__3546__auto____338400;
}
})()))
{return (this__338399.array[n]);
} else
{return null;
}
});
var G__338416__338418 = (function (coll,n,not_found){
var this__338401 = this;
if(cljs.core.truth_((function (){var and__3546__auto____338402 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____338402))
{return (n < this__338401.array.length);
} else
{return and__3546__auto____338402;
}
})()))
{return (this__338401.array[n]);
} else
{return not_found;
}
});
G__338416 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__338416__338417.call(this,coll,n);
case  3 :
return G__338416__338418.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338416;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__338403 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__338403.meta);
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
vector.cljs$lang$applyTo = (function (arglist__338420){
var args = cljs.core.seq( arglist__338420 );;
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
var this__338421 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__338449 = null;
var G__338449__338450 = (function (coll,k){
var this__338422 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__338449__338451 = (function (coll,k,not_found){
var this__338423 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__338449 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__338449__338450.call(this,coll,k);
case  3 :
return G__338449__338451.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338449;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__338424 = this;
var v_pos__338425 = (this__338424.start + key);

return (new cljs.core.Subvec(this__338424.meta,cljs.core._assoc.call(null,this__338424.v,v_pos__338425,val),this__338424.start,((this__338424.end > (v_pos__338425 + 1)) ? this__338424.end : (v_pos__338425 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__338453 = null;
var G__338453__338454 = (function (tsym338426,k){
var this__338428 = this;
var tsym338426__338429 = this;

var coll__338430 = tsym338426__338429;

return cljs.core._lookup.call(null,coll__338430,k);
});
var G__338453__338455 = (function (tsym338427,k,not_found){
var this__338431 = this;
var tsym338427__338432 = this;

var coll__338433 = tsym338427__338432;

return cljs.core._lookup.call(null,coll__338433,k,not_found);
});
G__338453 = function(tsym338427,k,not_found){
switch(arguments.length){
case  2 :
return G__338453__338454.call(this,tsym338427,k);
case  3 :
return G__338453__338455.call(this,tsym338427,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338453;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__338434 = this;
return (new cljs.core.Subvec(this__338434.meta,cljs.core._assoc_n.call(null,this__338434.v,this__338434.end,o),this__338434.start,(this__338434.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__338457 = null;
var G__338457__338458 = (function (coll,f){
var this__338435 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__338457__338459 = (function (coll,f,start){
var this__338436 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__338457 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__338457__338458.call(this,coll,f);
case  3 :
return G__338457__338459.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338457;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__338437 = this;
var subvec_seq__338438 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__338437.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__338437.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__338438.call(null,this__338437.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__338439 = this;
return (this__338439.end - this__338439.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__338440 = this;
return cljs.core._nth.call(null,this__338440.v,(this__338440.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__338441 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__338441.start,this__338441.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__338441.meta,this__338441.v,this__338441.start,(this__338441.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__338442 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__338443 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__338444 = this;
return (new cljs.core.Subvec(meta,this__338444.v,this__338444.start,this__338444.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__338445 = this;
return this__338445.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__338461 = null;
var G__338461__338462 = (function (coll,n){
var this__338446 = this;
return cljs.core._nth.call(null,this__338446.v,(this__338446.start + n));
});
var G__338461__338463 = (function (coll,n,not_found){
var this__338447 = this;
return cljs.core._nth.call(null,this__338447.v,(this__338447.start + n),not_found);
});
G__338461 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__338461__338462.call(this,coll,n);
case  3 :
return G__338461__338463.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338461;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__338448 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__338448.meta);
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
var subvec__338465 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__338466 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__338465.call(this,v,start);
case  3 :
return subvec__338466.call(this,v,start,end);
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
var this__338468 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__338469 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__338470 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__338471 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__338471.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__338472 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__338473 = this;
return cljs.core._first.call(null,this__338473.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__338474 = this;
var temp__3695__auto____338475 = cljs.core.next.call(null,this__338474.front);

if(cljs.core.truth_(temp__3695__auto____338475))
{var f1__338476 = temp__3695__auto____338475;

return (new cljs.core.PersistentQueueSeq(this__338474.meta,f1__338476,this__338474.rear));
} else
{if(cljs.core.truth_((this__338474.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__338474.meta,this__338474.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__338477 = this;
return this__338477.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__338478 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__338478.front,this__338478.rear));
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
var this__338479 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__338480 = this;
if(cljs.core.truth_(this__338480.front))
{return (new cljs.core.PersistentQueue(this__338480.meta,(this__338480.count + 1),this__338480.front,cljs.core.conj.call(null,(function (){var or__3548__auto____338481 = this__338480.rear;

if(cljs.core.truth_(or__3548__auto____338481))
{return or__3548__auto____338481;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__338480.meta,(this__338480.count + 1),cljs.core.conj.call(null,this__338480.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__338482 = this;
var rear__338483 = cljs.core.seq.call(null,this__338482.rear);

if(cljs.core.truth_((function (){var or__3548__auto____338484 = this__338482.front;

if(cljs.core.truth_(or__3548__auto____338484))
{return or__3548__auto____338484;
} else
{return rear__338483;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__338482.front,cljs.core.seq.call(null,rear__338483)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__338485 = this;
return this__338485.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__338486 = this;
return cljs.core._first.call(null,this__338486.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__338487 = this;
if(cljs.core.truth_(this__338487.front))
{var temp__3695__auto____338488 = cljs.core.next.call(null,this__338487.front);

if(cljs.core.truth_(temp__3695__auto____338488))
{var f1__338489 = temp__3695__auto____338488;

return (new cljs.core.PersistentQueue(this__338487.meta,(this__338487.count - 1),f1__338489,this__338487.rear));
} else
{return (new cljs.core.PersistentQueue(this__338487.meta,(this__338487.count - 1),cljs.core.seq.call(null,this__338487.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__338490 = this;
return cljs.core.first.call(null,this__338490.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__338491 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__338492 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__338493 = this;
return (new cljs.core.PersistentQueue(meta,this__338493.count,this__338493.front,this__338493.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__338494 = this;
return this__338494.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__338495 = this;
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
var this__338496 = this;
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
var len__338497 = array.length;

var i__338498 = 0;

while(true){
if(cljs.core.truth_((i__338498 < len__338497)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__338498]))))
{return i__338498;
} else
{{
var G__338499 = (i__338498 + incr);
i__338498 = G__338499;
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
var obj_map_contains_key_QMARK___338501 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___338502 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____338500 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____338500))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____338500;
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
return obj_map_contains_key_QMARK___338501.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___338502.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__338505 = cljs.core.hash.call(null,a);
var b__338506 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__338505 < b__338506)))
{return -1;
} else
{if(cljs.core.truth_((a__338505 > b__338506)))
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
var this__338507 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__338534 = null;
var G__338534__338535 = (function (coll,k){
var this__338508 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__338534__338536 = (function (coll,k,not_found){
var this__338509 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__338509.strobj,(this__338509.strobj[k]),not_found);
});
G__338534 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__338534__338535.call(this,coll,k);
case  3 :
return G__338534__338536.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338534;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__338510 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__338511 = goog.object.clone.call(null,this__338510.strobj);
var overwrite_QMARK___338512 = new_strobj__338511.hasOwnProperty(k);

(new_strobj__338511[k] = v);
if(cljs.core.truth_(overwrite_QMARK___338512))
{return (new cljs.core.ObjMap(this__338510.meta,this__338510.keys,new_strobj__338511));
} else
{var new_keys__338513 = cljs.core.aclone.call(null,this__338510.keys);

new_keys__338513.push(k);
return (new cljs.core.ObjMap(this__338510.meta,new_keys__338513,new_strobj__338511));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__338510.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__338514 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__338514.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__338538 = null;
var G__338538__338539 = (function (tsym338515,k){
var this__338517 = this;
var tsym338515__338518 = this;

var coll__338519 = tsym338515__338518;

return cljs.core._lookup.call(null,coll__338519,k);
});
var G__338538__338540 = (function (tsym338516,k,not_found){
var this__338520 = this;
var tsym338516__338521 = this;

var coll__338522 = tsym338516__338521;

return cljs.core._lookup.call(null,coll__338522,k,not_found);
});
G__338538 = function(tsym338516,k,not_found){
switch(arguments.length){
case  2 :
return G__338538__338539.call(this,tsym338516,k);
case  3 :
return G__338538__338540.call(this,tsym338516,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338538;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__338523 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__338524 = this;
if(cljs.core.truth_((this__338524.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__338504_SHARP_){
return cljs.core.vector.call(null,p1__338504_SHARP_,(this__338524.strobj[p1__338504_SHARP_]));
}),this__338524.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__338525 = this;
return this__338525.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__338526 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__338527 = this;
return (new cljs.core.ObjMap(meta,this__338527.keys,this__338527.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__338528 = this;
return this__338528.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__338529 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__338529.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__338530 = this;
if(cljs.core.truth_((function (){var and__3546__auto____338531 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____338531))
{return this__338530.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____338531;
}
})()))
{var new_keys__338532 = cljs.core.aclone.call(null,this__338530.keys);
var new_strobj__338533 = goog.object.clone.call(null,this__338530.strobj);

new_keys__338532.splice(cljs.core.scan_array.call(null,1,k,new_keys__338532),1);
cljs.core.js_delete.call(null,new_strobj__338533,k);
return (new cljs.core.ObjMap(this__338530.meta,new_keys__338532,new_strobj__338533));
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
var this__338543 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__338581 = null;
var G__338581__338582 = (function (coll,k){
var this__338544 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__338581__338583 = (function (coll,k,not_found){
var this__338545 = this;
var bucket__338546 = (this__338545.hashobj[cljs.core.hash.call(null,k)]);
var i__338547 = (cljs.core.truth_(bucket__338546)?cljs.core.scan_array.call(null,2,k,bucket__338546):null);

if(cljs.core.truth_(i__338547))
{return (bucket__338546[(i__338547 + 1)]);
} else
{return not_found;
}
});
G__338581 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__338581__338582.call(this,coll,k);
case  3 :
return G__338581__338583.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338581;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__338548 = this;
var h__338549 = cljs.core.hash.call(null,k);
var bucket__338550 = (this__338548.hashobj[h__338549]);

if(cljs.core.truth_(bucket__338550))
{var new_bucket__338551 = cljs.core.aclone.call(null,bucket__338550);
var new_hashobj__338552 = goog.object.clone.call(null,this__338548.hashobj);

(new_hashobj__338552[h__338549] = new_bucket__338551);
var temp__3695__auto____338553 = cljs.core.scan_array.call(null,2,k,new_bucket__338551);

if(cljs.core.truth_(temp__3695__auto____338553))
{var i__338554 = temp__3695__auto____338553;

(new_bucket__338551[(i__338554 + 1)] = v);
return (new cljs.core.HashMap(this__338548.meta,this__338548.count,new_hashobj__338552));
} else
{new_bucket__338551.push(k,v);
return (new cljs.core.HashMap(this__338548.meta,(this__338548.count + 1),new_hashobj__338552));
}
} else
{var new_hashobj__338555 = goog.object.clone.call(null,this__338548.hashobj);

(new_hashobj__338555[h__338549] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__338548.meta,(this__338548.count + 1),new_hashobj__338555));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__338556 = this;
var bucket__338557 = (this__338556.hashobj[cljs.core.hash.call(null,k)]);
var i__338558 = (cljs.core.truth_(bucket__338557)?cljs.core.scan_array.call(null,2,k,bucket__338557):null);

if(cljs.core.truth_(i__338558))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__338585 = null;
var G__338585__338586 = (function (tsym338559,k){
var this__338561 = this;
var tsym338559__338562 = this;

var coll__338563 = tsym338559__338562;

return cljs.core._lookup.call(null,coll__338563,k);
});
var G__338585__338587 = (function (tsym338560,k,not_found){
var this__338564 = this;
var tsym338560__338565 = this;

var coll__338566 = tsym338560__338565;

return cljs.core._lookup.call(null,coll__338566,k,not_found);
});
G__338585 = function(tsym338560,k,not_found){
switch(arguments.length){
case  2 :
return G__338585__338586.call(this,tsym338560,k);
case  3 :
return G__338585__338587.call(this,tsym338560,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338585;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__338567 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__338568 = this;
if(cljs.core.truth_((this__338568.count > 0)))
{var hashes__338569 = cljs.core.js_keys.call(null,this__338568.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__338542_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__338568.hashobj[p1__338542_SHARP_])));
}),hashes__338569);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__338570 = this;
return this__338570.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__338571 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__338572 = this;
return (new cljs.core.HashMap(meta,this__338572.count,this__338572.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__338573 = this;
return this__338573.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__338574 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__338574.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__338575 = this;
var h__338576 = cljs.core.hash.call(null,k);
var bucket__338577 = (this__338575.hashobj[h__338576]);
var i__338578 = (cljs.core.truth_(bucket__338577)?cljs.core.scan_array.call(null,2,k,bucket__338577):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__338578)))
{return coll;
} else
{var new_hashobj__338579 = goog.object.clone.call(null,this__338575.hashobj);

if(cljs.core.truth_((3 > bucket__338577.length)))
{cljs.core.js_delete.call(null,new_hashobj__338579,h__338576);
} else
{var new_bucket__338580 = cljs.core.aclone.call(null,bucket__338577);

new_bucket__338580.splice(i__338578,2);
(new_hashobj__338579[h__338576] = new_bucket__338580);
}
return (new cljs.core.HashMap(this__338575.meta,(this__338575.count - 1),new_hashobj__338579));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__338589 = ks.length;

var i__338590 = 0;
var out__338591 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__338590 < len__338589)))
{{
var G__338592 = (i__338590 + 1);
var G__338593 = cljs.core.assoc.call(null,out__338591,(ks[i__338590]),(vs[i__338590]));
i__338590 = G__338592;
out__338591 = G__338593;
continue;
}
} else
{return out__338591;
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
var in$__338594 = cljs.core.seq.call(null,keyvals);
var out__338595 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__338594))
{{
var G__338596 = cljs.core.nnext.call(null,in$__338594);
var G__338597 = cljs.core.assoc.call(null,out__338595,cljs.core.first.call(null,in$__338594),cljs.core.second.call(null,in$__338594));
in$__338594 = G__338596;
out__338595 = G__338597;
continue;
}
} else
{return out__338595;
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
hash_map.cljs$lang$applyTo = (function (arglist__338598){
var keyvals = cljs.core.seq( arglist__338598 );;
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
{return cljs.core.reduce.call(null,(function (p1__338599_SHARP_,p2__338600_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____338601 = p1__338599_SHARP_;

if(cljs.core.truth_(or__3548__auto____338601))
{return or__3548__auto____338601;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__338600_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__338602){
var maps = cljs.core.seq( arglist__338602 );;
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
{var merge_entry__338605 = (function (m,e){
var k__338603 = cljs.core.first.call(null,e);
var v__338604 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__338603)))
{return cljs.core.assoc.call(null,m,k__338603,f.call(null,cljs.core.get.call(null,m,k__338603),v__338604));
} else
{return cljs.core.assoc.call(null,m,k__338603,v__338604);
}
});
var merge2__338607 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__338605,(function (){var or__3548__auto____338606 = m1;

if(cljs.core.truth_(or__3548__auto____338606))
{return or__3548__auto____338606;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__338607,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__338608){
var f = cljs.core.first(arglist__338608);
var maps = cljs.core.rest(arglist__338608);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__338610 = cljs.core.ObjMap.fromObject([],{});
var keys__338611 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__338611))
{var key__338612 = cljs.core.first.call(null,keys__338611);
var entry__338613 = cljs.core.get.call(null,map,key__338612,"\uFDD0'user/not-found");

{
var G__338614 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__338613,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__338610,key__338612,entry__338613):ret__338610);
var G__338615 = cljs.core.next.call(null,keys__338611);
ret__338610 = G__338614;
keys__338611 = G__338615;
continue;
}
} else
{return ret__338610;
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
var this__338616 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__338637 = null;
var G__338637__338638 = (function (coll,v){
var this__338617 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__338637__338639 = (function (coll,v,not_found){
var this__338618 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__338618.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__338637 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__338637__338638.call(this,coll,v);
case  3 :
return G__338637__338639.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338637;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__338641 = null;
var G__338641__338642 = (function (tsym338619,k){
var this__338621 = this;
var tsym338619__338622 = this;

var coll__338623 = tsym338619__338622;

return cljs.core._lookup.call(null,coll__338623,k);
});
var G__338641__338643 = (function (tsym338620,k,not_found){
var this__338624 = this;
var tsym338620__338625 = this;

var coll__338626 = tsym338620__338625;

return cljs.core._lookup.call(null,coll__338626,k,not_found);
});
G__338641 = function(tsym338620,k,not_found){
switch(arguments.length){
case  2 :
return G__338641__338642.call(this,tsym338620,k);
case  3 :
return G__338641__338643.call(this,tsym338620,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338641;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__338627 = this;
return (new cljs.core.Set(this__338627.meta,cljs.core.assoc.call(null,this__338627.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__338628 = this;
return cljs.core.keys.call(null,this__338628.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__338629 = this;
return (new cljs.core.Set(this__338629.meta,cljs.core.dissoc.call(null,this__338629.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__338630 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__338631 = this;
var and__3546__auto____338632 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____338632))
{var and__3546__auto____338633 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____338633))
{return cljs.core.every_QMARK_.call(null,(function (p1__338609_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__338609_SHARP_);
}),other);
} else
{return and__3546__auto____338633;
}
} else
{return and__3546__auto____338632;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__338634 = this;
return (new cljs.core.Set(meta,this__338634.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__338635 = this;
return this__338635.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__338636 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__338636.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__338646 = cljs.core.seq.call(null,coll);
var out__338647 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__338646))))
{{
var G__338648 = cljs.core.rest.call(null,in$__338646);
var G__338649 = cljs.core.conj.call(null,out__338647,cljs.core.first.call(null,in$__338646));
in$__338646 = G__338648;
out__338647 = G__338649;
continue;
}
} else
{return out__338647;
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
{var n__338650 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____338651 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____338651))
{var e__338652 = temp__3695__auto____338651;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__338652));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__338650,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__338645_SHARP_){
var temp__3695__auto____338653 = cljs.core.find.call(null,smap,p1__338645_SHARP_);

if(cljs.core.truth_(temp__3695__auto____338653))
{var e__338654 = temp__3695__auto____338653;

return cljs.core.second.call(null,e__338654);
} else
{return p1__338645_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__338662 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__338655,seen){
while(true){
var vec__338656__338657 = p__338655;
var f__338658 = cljs.core.nth.call(null,vec__338656__338657,0,null);
var xs__338659 = vec__338656__338657;

var temp__3698__auto____338660 = cljs.core.seq.call(null,xs__338659);

if(cljs.core.truth_(temp__3698__auto____338660))
{var s__338661 = temp__3698__auto____338660;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__338658)))
{{
var G__338663 = cljs.core.rest.call(null,s__338661);
var G__338664 = seen;
p__338655 = G__338663;
seen = G__338664;
continue;
}
} else
{return cljs.core.cons.call(null,f__338658,step.call(null,cljs.core.rest.call(null,s__338661),cljs.core.conj.call(null,seen,f__338658)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__338662.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__338665 = cljs.core.Vector.fromArray([]);
var s__338666 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__338666)))
{{
var G__338667 = cljs.core.conj.call(null,ret__338665,cljs.core.first.call(null,s__338666));
var G__338668 = cljs.core.next.call(null,s__338666);
ret__338665 = G__338667;
s__338666 = G__338668;
continue;
}
} else
{return cljs.core.seq.call(null,ret__338665);
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
{if(cljs.core.truth_((function (){var or__3548__auto____338669 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____338669))
{return or__3548__auto____338669;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__338670 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__338670 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__338670 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____338671 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____338671))
{return or__3548__auto____338671;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__338672 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__338672 > -1)))
{return cljs.core.subs.call(null,x,2,i__338672);
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
var map__338675 = cljs.core.ObjMap.fromObject([],{});
var ks__338676 = cljs.core.seq.call(null,keys);
var vs__338677 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____338678 = ks__338676;

if(cljs.core.truth_(and__3546__auto____338678))
{return vs__338677;
} else
{return and__3546__auto____338678;
}
})()))
{{
var G__338679 = cljs.core.assoc.call(null,map__338675,cljs.core.first.call(null,ks__338676),cljs.core.first.call(null,vs__338677));
var G__338680 = cljs.core.next.call(null,ks__338676);
var G__338681 = cljs.core.next.call(null,vs__338677);
map__338675 = G__338679;
ks__338676 = G__338680;
vs__338677 = G__338681;
continue;
}
} else
{return map__338675;
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
var max_key__338684 = (function (k,x){
return x;
});
var max_key__338685 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__338686 = (function() { 
var G__338688__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__338673_SHARP_,p2__338674_SHARP_){
return max_key.call(null,k,p1__338673_SHARP_,p2__338674_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__338688 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338688__delegate.call(this, k, x, y, more);
};
G__338688.cljs$lang$maxFixedArity = 3;
G__338688.cljs$lang$applyTo = (function (arglist__338689){
var k = cljs.core.first(arglist__338689);
var x = cljs.core.first(cljs.core.next(arglist__338689));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338689)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338689)));
return G__338688__delegate.call(this, k, x, y, more);
});
return G__338688;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__338684.call(this,k,x);
case  3 :
return max_key__338685.call(this,k,x,y);
default:
return max_key__338686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__338686.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__338690 = (function (k,x){
return x;
});
var min_key__338691 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__338692 = (function() { 
var G__338694__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__338682_SHARP_,p2__338683_SHARP_){
return min_key.call(null,k,p1__338682_SHARP_,p2__338683_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__338694 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338694__delegate.call(this, k, x, y, more);
};
G__338694.cljs$lang$maxFixedArity = 3;
G__338694.cljs$lang$applyTo = (function (arglist__338695){
var k = cljs.core.first(arglist__338695);
var x = cljs.core.first(cljs.core.next(arglist__338695));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338695)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338695)));
return G__338694__delegate.call(this, k, x, y, more);
});
return G__338694;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__338690.call(this,k,x);
case  3 :
return min_key__338691.call(this,k,x,y);
default:
return min_key__338692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__338692.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__338698 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__338699 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338696 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338696))
{var s__338697 = temp__3698__auto____338696;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__338697),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__338697)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__338698.call(this,n,step);
case  3 :
return partition_all__338699.call(this,n,step,coll);
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
var temp__3698__auto____338701 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338701))
{var s__338702 = temp__3698__auto____338701;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__338702))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__338702),take_while.call(null,pred,cljs.core.rest.call(null,s__338702)));
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
var this__338703 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__338704 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__338720 = null;
var G__338720__338721 = (function (rng,f){
var this__338705 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__338720__338722 = (function (rng,f,s){
var this__338706 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__338720 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__338720__338721.call(this,rng,f);
case  3 :
return G__338720__338722.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338720;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__338707 = this;
var comp__338708 = (cljs.core.truth_((this__338707.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__338708.call(null,this__338707.start,this__338707.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__338709 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__338709.end - this__338709.start) / this__338709.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__338710 = this;
return this__338710.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__338711 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__338711.meta,(this__338711.start + this__338711.step),this__338711.end,this__338711.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__338712 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__338713 = this;
return (new cljs.core.Range(meta,this__338713.start,this__338713.end,this__338713.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__338714 = this;
return this__338714.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__338724 = null;
var G__338724__338725 = (function (rng,n){
var this__338715 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__338715.start + (n * this__338715.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____338716 = (this__338715.start > this__338715.end);

if(cljs.core.truth_(and__3546__auto____338716))
{return cljs.core._EQ_.call(null,this__338715.step,0);
} else
{return and__3546__auto____338716;
}
})()))
{return this__338715.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__338724__338726 = (function (rng,n,not_found){
var this__338717 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__338717.start + (n * this__338717.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____338718 = (this__338717.start > this__338717.end);

if(cljs.core.truth_(and__3546__auto____338718))
{return cljs.core._EQ_.call(null,this__338717.step,0);
} else
{return and__3546__auto____338718;
}
})()))
{return this__338717.start;
} else
{return not_found;
}
}
});
G__338724 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__338724__338725.call(this,rng,n);
case  3 :
return G__338724__338726.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__338724;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__338719 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__338719.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__338728 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__338729 = (function (end){
return range.call(null,0,end,1);
});
var range__338730 = (function (start,end){
return range.call(null,start,end,1);
});
var range__338731 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__338728.call(this);
case  1 :
return range__338729.call(this,start);
case  2 :
return range__338730.call(this,start,end);
case  3 :
return range__338731.call(this,start,end,step);
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
var temp__3698__auto____338733 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338733))
{var s__338734 = temp__3698__auto____338733;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__338734),take_nth.call(null,n,cljs.core.drop.call(null,n,s__338734)));
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
var temp__3698__auto____338736 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338736))
{var s__338737 = temp__3698__auto____338736;

var fst__338738 = cljs.core.first.call(null,s__338737);
var fv__338739 = f.call(null,fst__338738);
var run__338740 = cljs.core.cons.call(null,fst__338738,cljs.core.take_while.call(null,(function (p1__338735_SHARP_){
return cljs.core._EQ_.call(null,fv__338739,f.call(null,p1__338735_SHARP_));
}),cljs.core.next.call(null,s__338737)));

return cljs.core.cons.call(null,run__338740,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__338740),s__338737))));
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
var reductions__338755 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____338751 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____338751))
{var s__338752 = temp__3695__auto____338751;

return reductions.call(null,f,cljs.core.first.call(null,s__338752),cljs.core.rest.call(null,s__338752));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__338756 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____338753 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____338753))
{var s__338754 = temp__3698__auto____338753;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__338754)),cljs.core.rest.call(null,s__338754));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__338755.call(this,f,init);
case  3 :
return reductions__338756.call(this,f,init,coll);
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
var juxt__338759 = (function (f){
return (function() {
var G__338764 = null;
var G__338764__338765 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__338764__338766 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__338764__338767 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__338764__338768 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__338764__338769 = (function() { 
var G__338771__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__338771 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338771__delegate.call(this, x, y, z, args);
};
G__338771.cljs$lang$maxFixedArity = 3;
G__338771.cljs$lang$applyTo = (function (arglist__338772){
var x = cljs.core.first(arglist__338772);
var y = cljs.core.first(cljs.core.next(arglist__338772));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338772)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338772)));
return G__338771__delegate.call(this, x, y, z, args);
});
return G__338771;
})()
;
G__338764 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__338764__338765.call(this);
case  1 :
return G__338764__338766.call(this,x);
case  2 :
return G__338764__338767.call(this,x,y);
case  3 :
return G__338764__338768.call(this,x,y,z);
default:
return G__338764__338769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338764.cljs$lang$maxFixedArity = 3;
G__338764.cljs$lang$applyTo = G__338764__338769.cljs$lang$applyTo;
return G__338764;
})()
});
var juxt__338760 = (function (f,g){
return (function() {
var G__338773 = null;
var G__338773__338774 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__338773__338775 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__338773__338776 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__338773__338777 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__338773__338778 = (function() { 
var G__338780__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__338780 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338780__delegate.call(this, x, y, z, args);
};
G__338780.cljs$lang$maxFixedArity = 3;
G__338780.cljs$lang$applyTo = (function (arglist__338781){
var x = cljs.core.first(arglist__338781);
var y = cljs.core.first(cljs.core.next(arglist__338781));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338781)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338781)));
return G__338780__delegate.call(this, x, y, z, args);
});
return G__338780;
})()
;
G__338773 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__338773__338774.call(this);
case  1 :
return G__338773__338775.call(this,x);
case  2 :
return G__338773__338776.call(this,x,y);
case  3 :
return G__338773__338777.call(this,x,y,z);
default:
return G__338773__338778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338773.cljs$lang$maxFixedArity = 3;
G__338773.cljs$lang$applyTo = G__338773__338778.cljs$lang$applyTo;
return G__338773;
})()
});
var juxt__338761 = (function (f,g,h){
return (function() {
var G__338782 = null;
var G__338782__338783 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__338782__338784 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__338782__338785 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__338782__338786 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__338782__338787 = (function() { 
var G__338789__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__338789 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338789__delegate.call(this, x, y, z, args);
};
G__338789.cljs$lang$maxFixedArity = 3;
G__338789.cljs$lang$applyTo = (function (arglist__338790){
var x = cljs.core.first(arglist__338790);
var y = cljs.core.first(cljs.core.next(arglist__338790));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338790)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338790)));
return G__338789__delegate.call(this, x, y, z, args);
});
return G__338789;
})()
;
G__338782 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__338782__338783.call(this);
case  1 :
return G__338782__338784.call(this,x);
case  2 :
return G__338782__338785.call(this,x,y);
case  3 :
return G__338782__338786.call(this,x,y,z);
default:
return G__338782__338787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338782.cljs$lang$maxFixedArity = 3;
G__338782.cljs$lang$applyTo = G__338782__338787.cljs$lang$applyTo;
return G__338782;
})()
});
var juxt__338762 = (function() { 
var G__338791__delegate = function (f,g,h,fs){
var fs__338758 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__338792 = null;
var G__338792__338793 = (function (){
return cljs.core.reduce.call(null,(function (p1__338741_SHARP_,p2__338742_SHARP_){
return cljs.core.conj.call(null,p1__338741_SHARP_,p2__338742_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__338758);
});
var G__338792__338794 = (function (x){
return cljs.core.reduce.call(null,(function (p1__338743_SHARP_,p2__338744_SHARP_){
return cljs.core.conj.call(null,p1__338743_SHARP_,p2__338744_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__338758);
});
var G__338792__338795 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__338745_SHARP_,p2__338746_SHARP_){
return cljs.core.conj.call(null,p1__338745_SHARP_,p2__338746_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__338758);
});
var G__338792__338796 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__338747_SHARP_,p2__338748_SHARP_){
return cljs.core.conj.call(null,p1__338747_SHARP_,p2__338748_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__338758);
});
var G__338792__338797 = (function() { 
var G__338799__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__338749_SHARP_,p2__338750_SHARP_){
return cljs.core.conj.call(null,p1__338749_SHARP_,cljs.core.apply.call(null,p2__338750_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__338758);
};
var G__338799 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338799__delegate.call(this, x, y, z, args);
};
G__338799.cljs$lang$maxFixedArity = 3;
G__338799.cljs$lang$applyTo = (function (arglist__338800){
var x = cljs.core.first(arglist__338800);
var y = cljs.core.first(cljs.core.next(arglist__338800));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338800)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338800)));
return G__338799__delegate.call(this, x, y, z, args);
});
return G__338799;
})()
;
G__338792 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__338792__338793.call(this);
case  1 :
return G__338792__338794.call(this,x);
case  2 :
return G__338792__338795.call(this,x,y);
case  3 :
return G__338792__338796.call(this,x,y,z);
default:
return G__338792__338797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__338792.cljs$lang$maxFixedArity = 3;
G__338792.cljs$lang$applyTo = G__338792__338797.cljs$lang$applyTo;
return G__338792;
})()
};
var G__338791 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__338791__delegate.call(this, f, g, h, fs);
};
G__338791.cljs$lang$maxFixedArity = 3;
G__338791.cljs$lang$applyTo = (function (arglist__338801){
var f = cljs.core.first(arglist__338801);
var g = cljs.core.first(cljs.core.next(arglist__338801));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338801)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__338801)));
return G__338791__delegate.call(this, f, g, h, fs);
});
return G__338791;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__338759.call(this,f);
case  2 :
return juxt__338760.call(this,f,g);
case  3 :
return juxt__338761.call(this,f,g,h);
default:
return juxt__338762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__338762.cljs$lang$applyTo;
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
var dorun__338803 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__338806 = cljs.core.next.call(null,coll);
coll = G__338806;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__338804 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____338802 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____338802))
{return (n > 0);
} else
{return and__3546__auto____338802;
}
})()))
{{
var G__338807 = (n - 1);
var G__338808 = cljs.core.next.call(null,coll);
n = G__338807;
coll = G__338808;
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
return dorun__338803.call(this,n);
case  2 :
return dorun__338804.call(this,n,coll);
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
var doall__338809 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__338810 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__338809.call(this,n);
case  2 :
return doall__338810.call(this,n,coll);
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
var matches__338812 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__338812),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__338812),1)))
{return cljs.core.first.call(null,matches__338812);
} else
{return cljs.core.vec.call(null,matches__338812);
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
var matches__338813 = re.exec(s);

if(cljs.core.truth_((matches__338813 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__338813),1)))
{return cljs.core.first.call(null,matches__338813);
} else
{return cljs.core.vec.call(null,matches__338813);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__338814 = cljs.core.re_find.call(null,re,s);
var match_idx__338815 = s.search(re);
var match_str__338816 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__338814))?cljs.core.first.call(null,match_data__338814):match_data__338814);
var post_match__338817 = cljs.core.subs.call(null,s,(match_idx__338815 + cljs.core.count.call(null,match_str__338816)));

if(cljs.core.truth_(match_data__338814))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__338814,re_seq.call(null,re,post_match__338817));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__338819__338820 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___338821 = cljs.core.nth.call(null,vec__338819__338820,0,null);
var flags__338822 = cljs.core.nth.call(null,vec__338819__338820,1,null);
var pattern__338823 = cljs.core.nth.call(null,vec__338819__338820,2,null);

return (new RegExp(pattern__338823,flags__338822));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__338818_SHARP_){
return print_one.call(null,p1__338818_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____338824 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____338824))
{var and__3546__auto____338828 = (function (){var x__450__auto____338825 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____338826 = x__450__auto____338825;

if(cljs.core.truth_(and__3546__auto____338826))
{var and__3546__auto____338827 = x__450__auto____338825.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____338827))
{return cljs.core.not.call(null,x__450__auto____338825.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____338827;
}
} else
{return and__3546__auto____338826;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____338825);
}
})();

if(cljs.core.truth_(and__3546__auto____338828))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____338828;
}
} else
{return and__3546__auto____338824;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____338829 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____338830 = x__450__auto____338829;

if(cljs.core.truth_(and__3546__auto____338830))
{var and__3546__auto____338831 = x__450__auto____338829.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____338831))
{return cljs.core.not.call(null,x__450__auto____338829.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____338831;
}
} else
{return and__3546__auto____338830;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____338829);
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
var first_obj__338832 = cljs.core.first.call(null,objs);
var sb__338833 = (new goog.string.StringBuffer());

var G__338834__338835 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__338834__338835))
{var obj__338836 = cljs.core.first.call(null,G__338834__338835);
var G__338834__338837 = G__338834__338835;

while(true){
if(cljs.core.truth_((obj__338836 === first_obj__338832)))
{} else
{sb__338833.append(" ");
}
var G__338838__338839 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__338836,opts));

if(cljs.core.truth_(G__338838__338839))
{var string__338840 = cljs.core.first.call(null,G__338838__338839);
var G__338838__338841 = G__338838__338839;

while(true){
sb__338833.append(string__338840);
var temp__3698__auto____338842 = cljs.core.next.call(null,G__338838__338841);

if(cljs.core.truth_(temp__3698__auto____338842))
{var G__338838__338843 = temp__3698__auto____338842;

{
var G__338846 = cljs.core.first.call(null,G__338838__338843);
var G__338847 = G__338838__338843;
string__338840 = G__338846;
G__338838__338841 = G__338847;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____338844 = cljs.core.next.call(null,G__338834__338837);

if(cljs.core.truth_(temp__3698__auto____338844))
{var G__338834__338845 = temp__3698__auto____338844;

{
var G__338848 = cljs.core.first.call(null,G__338834__338845);
var G__338849 = G__338834__338845;
obj__338836 = G__338848;
G__338834__338837 = G__338849;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__338833);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__338850 = cljs.core.first.call(null,objs);

var G__338851__338852 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__338851__338852))
{var obj__338853 = cljs.core.first.call(null,G__338851__338852);
var G__338851__338854 = G__338851__338852;

while(true){
if(cljs.core.truth_((obj__338853 === first_obj__338850)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__338855__338856 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__338853,opts));

if(cljs.core.truth_(G__338855__338856))
{var string__338857 = cljs.core.first.call(null,G__338855__338856);
var G__338855__338858 = G__338855__338856;

while(true){
cljs.core.string_print.call(null,string__338857);
var temp__3698__auto____338859 = cljs.core.next.call(null,G__338855__338858);

if(cljs.core.truth_(temp__3698__auto____338859))
{var G__338855__338860 = temp__3698__auto____338859;

{
var G__338863 = cljs.core.first.call(null,G__338855__338860);
var G__338864 = G__338855__338860;
string__338857 = G__338863;
G__338855__338858 = G__338864;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____338861 = cljs.core.next.call(null,G__338851__338854);

if(cljs.core.truth_(temp__3698__auto____338861))
{var G__338851__338862 = temp__3698__auto____338861;

{
var G__338865 = cljs.core.first.call(null,G__338851__338862);
var G__338866 = G__338851__338862;
obj__338853 = G__338865;
G__338851__338854 = G__338866;
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
pr_str.cljs$lang$applyTo = (function (arglist__338867){
var objs = cljs.core.seq( arglist__338867 );;
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
pr.cljs$lang$applyTo = (function (arglist__338868){
var objs = cljs.core.seq( arglist__338868 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__338869){
var objs = cljs.core.seq( arglist__338869 );;
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
println.cljs$lang$applyTo = (function (arglist__338870){
var objs = cljs.core.seq( arglist__338870 );;
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
prn.cljs$lang$applyTo = (function (arglist__338871){
var objs = cljs.core.seq( arglist__338871 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__338872 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__338872,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____338873 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____338873))
{var nspc__338874 = temp__3698__auto____338873;

return cljs.core.str.call(null,nspc__338874,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____338875 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____338875))
{var nspc__338876 = temp__3698__auto____338875;

return cljs.core.str.call(null,nspc__338876,"\/");
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
var pr_pair__338877 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__338877,"{",", ","}",opts,coll);
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
var this__338878 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__338879 = this;
var G__338880__338881 = cljs.core.seq.call(null,this__338879.watches);

if(cljs.core.truth_(G__338880__338881))
{var G__338883__338885 = cljs.core.first.call(null,G__338880__338881);
var vec__338884__338886 = G__338883__338885;
var key__338887 = cljs.core.nth.call(null,vec__338884__338886,0,null);
var f__338888 = cljs.core.nth.call(null,vec__338884__338886,1,null);
var G__338880__338889 = G__338880__338881;

var G__338883__338890 = G__338883__338885;
var G__338880__338891 = G__338880__338889;

while(true){
var vec__338892__338893 = G__338883__338890;
var key__338894 = cljs.core.nth.call(null,vec__338892__338893,0,null);
var f__338895 = cljs.core.nth.call(null,vec__338892__338893,1,null);
var G__338880__338896 = G__338880__338891;

f__338895.call(null,key__338894,this$,oldval,newval);
var temp__3698__auto____338897 = cljs.core.next.call(null,G__338880__338896);

if(cljs.core.truth_(temp__3698__auto____338897))
{var G__338880__338898 = temp__3698__auto____338897;

{
var G__338905 = cljs.core.first.call(null,G__338880__338898);
var G__338906 = G__338880__338898;
G__338883__338890 = G__338905;
G__338880__338891 = G__338906;
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
var this__338899 = this;
return this$.watches = cljs.core.assoc.call(null,this__338899.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__338900 = this;
return this$.watches = cljs.core.dissoc.call(null,this__338900.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__338901 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__338901.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__338902 = this;
return this__338902.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__338903 = this;
return this__338903.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__338904 = this;
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
var atom__338913 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__338914 = (function() { 
var G__338916__delegate = function (x,p__338907){
var map__338908__338909 = p__338907;
var map__338908__338910 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__338908__338909))?cljs.core.apply.call(null,cljs.core.hash_map,map__338908__338909):map__338908__338909);
var validator__338911 = cljs.core.get.call(null,map__338908__338910,"\uFDD0'validator");
var meta__338912 = cljs.core.get.call(null,map__338908__338910,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__338912,validator__338911,null));
};
var G__338916 = function (x,var_args){
var p__338907 = null;
if (goog.isDef(var_args)) {
  p__338907 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__338916__delegate.call(this, x, p__338907);
};
G__338916.cljs$lang$maxFixedArity = 1;
G__338916.cljs$lang$applyTo = (function (arglist__338917){
var x = cljs.core.first(arglist__338917);
var p__338907 = cljs.core.rest(arglist__338917);
return G__338916__delegate.call(this, x, p__338907);
});
return G__338916;
})()
;
atom = function(x,var_args){
var p__338907 = var_args;
switch(arguments.length){
case  1 :
return atom__338913.call(this,x);
default:
return atom__338914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__338914.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____338918 = a.validator;

if(cljs.core.truth_(temp__3698__auto____338918))
{var validate__338919 = temp__3698__auto____338918;

if(cljs.core.truth_(validate__338919.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__338920 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__338920,new_value);
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
var swap_BANG___338921 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___338922 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___338923 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___338924 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___338925 = (function() { 
var G__338927__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__338927 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__338927__delegate.call(this, a, f, x, y, z, more);
};
G__338927.cljs$lang$maxFixedArity = 5;
G__338927.cljs$lang$applyTo = (function (arglist__338928){
var a = cljs.core.first(arglist__338928);
var f = cljs.core.first(cljs.core.next(arglist__338928));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__338928)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__338928))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__338928)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__338928)))));
return G__338927__delegate.call(this, a, f, x, y, z, more);
});
return G__338927;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___338921.call(this,a,f);
case  3 :
return swap_BANG___338922.call(this,a,f,x);
case  4 :
return swap_BANG___338923.call(this,a,f,x,y);
case  5 :
return swap_BANG___338924.call(this,a,f,x,y,z);
default:
return swap_BANG___338925.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___338925.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__338929){
var iref = cljs.core.first(arglist__338929);
var f = cljs.core.first(cljs.core.next(arglist__338929));
var args = cljs.core.rest(cljs.core.next(arglist__338929));
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
var gensym__338930 = (function (){
return gensym.call(null,"G__");
});
var gensym__338931 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__338930.call(this);
case  1 :
return gensym__338931.call(this,prefix_string);
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
var this__338933 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__338933.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__338934 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__338934.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__338934.state,this__338934.f);
}
return cljs.core.deref.call(null,this__338934.state);
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
delay.cljs$lang$applyTo = (function (arglist__338935){
var body = cljs.core.seq( arglist__338935 );;
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
var map__338936__338937 = options;
var map__338936__338938 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__338936__338937))?cljs.core.apply.call(null,cljs.core.hash_map,map__338936__338937):map__338936__338937);
var keywordize_keys__338939 = cljs.core.get.call(null,map__338936__338938,"\uFDD0'keywordize-keys");
var keyfn__338940 = (cljs.core.truth_(keywordize_keys__338939)?cljs.core.keyword:cljs.core.str);
var f__338946 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____338945 = (function iter__338941(s__338942){
return (new cljs.core.LazySeq(null,false,(function (){
var s__338942__338943 = s__338942;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__338942__338943)))
{var k__338944 = cljs.core.first.call(null,s__338942__338943);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__338940.call(null,k__338944),thisfn.call(null,(x[k__338944]))]),iter__338941.call(null,cljs.core.rest.call(null,s__338942__338943)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____338945.call(null,cljs.core.js_keys.call(null,x));
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

return f__338946.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__338947){
var x = cljs.core.first(arglist__338947);
var options = cljs.core.rest(arglist__338947);
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
var mem__338948 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__338952__delegate = function (args){
var temp__3695__auto____338949 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__338948),args);

if(cljs.core.truth_(temp__3695__auto____338949))
{var v__338950 = temp__3695__auto____338949;

return v__338950;
} else
{var ret__338951 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__338948,cljs.core.assoc,args,ret__338951);
return ret__338951;
}
};
var G__338952 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__338952__delegate.call(this, args);
};
G__338952.cljs$lang$maxFixedArity = 0;
G__338952.cljs$lang$applyTo = (function (arglist__338953){
var args = cljs.core.seq( arglist__338953 );;
return G__338952__delegate.call(this, args);
});
return G__338952;
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
var trampoline__338955 = (function (f){
while(true){
var ret__338954 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__338954)))
{{
var G__338958 = ret__338954;
f = G__338958;
continue;
}
} else
{return ret__338954;
}
break;
}
});
var trampoline__338956 = (function() { 
var G__338959__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__338959 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__338959__delegate.call(this, f, args);
};
G__338959.cljs$lang$maxFixedArity = 1;
G__338959.cljs$lang$applyTo = (function (arglist__338960){
var f = cljs.core.first(arglist__338960);
var args = cljs.core.rest(arglist__338960);
return G__338959__delegate.call(this, f, args);
});
return G__338959;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__338955.call(this,f);
default:
return trampoline__338956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__338956.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__338961 = (function (){
return rand.call(null,1);
});
var rand__338962 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__338961.call(this);
case  1 :
return rand__338962.call(this,n);
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
var k__338964 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__338964,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__338964,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___338973 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___338974 = (function (h,child,parent){
var or__3548__auto____338965 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____338965))
{return or__3548__auto____338965;
} else
{var or__3548__auto____338966 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____338966))
{return or__3548__auto____338966;
} else
{var and__3546__auto____338967 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____338967))
{var and__3546__auto____338968 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____338968))
{var and__3546__auto____338969 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____338969))
{var ret__338970 = true;
var i__338971 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____338972 = cljs.core.not.call(null,ret__338970);

if(cljs.core.truth_(or__3548__auto____338972))
{return or__3548__auto____338972;
} else
{return cljs.core._EQ_.call(null,i__338971,cljs.core.count.call(null,parent));
}
})()))
{return ret__338970;
} else
{{
var G__338976 = isa_QMARK_.call(null,h,child.call(null,i__338971),parent.call(null,i__338971));
var G__338977 = (i__338971 + 1);
ret__338970 = G__338976;
i__338971 = G__338977;
continue;
}
}
break;
}
} else
{return and__3546__auto____338969;
}
} else
{return and__3546__auto____338968;
}
} else
{return and__3546__auto____338967;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___338973.call(this,h,child);
case  3 :
return isa_QMARK___338974.call(this,h,child,parent);
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
var parents__338978 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__338979 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__338978.call(this,h);
case  2 :
return parents__338979.call(this,h,tag);
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
var ancestors__338981 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__338982 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__338981.call(this,h);
case  2 :
return ancestors__338982.call(this,h,tag);
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
var descendants__338984 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__338985 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__338984.call(this,h);
case  2 :
return descendants__338985.call(this,h,tag);
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
var derive__338995 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__338996 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__338990 = "\uFDD0'parents".call(null,h);
var td__338991 = "\uFDD0'descendants".call(null,h);
var ta__338992 = "\uFDD0'ancestors".call(null,h);
var tf__338993 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____338994 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__338990.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__338992.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__338992.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__338990,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__338993.call(null,"\uFDD0'ancestors".call(null,h),tag,td__338991,parent,ta__338992),"\uFDD0'descendants":tf__338993.call(null,"\uFDD0'descendants".call(null,h),parent,ta__338992,tag,td__338991)});
})());

if(cljs.core.truth_(or__3548__auto____338994))
{return or__3548__auto____338994;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__338995.call(this,h,tag);
case  3 :
return derive__338996.call(this,h,tag,parent);
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
var underive__339002 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__339003 = (function (h,tag,parent){
var parentMap__338998 = "\uFDD0'parents".call(null,h);
var childsParents__338999 = (cljs.core.truth_(parentMap__338998.call(null,tag))?cljs.core.disj.call(null,parentMap__338998.call(null,tag),parent):cljs.core.set([]));
var newParents__339000 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__338999))?cljs.core.assoc.call(null,parentMap__338998,tag,childsParents__338999):cljs.core.dissoc.call(null,parentMap__338998,tag));
var deriv_seq__339001 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__338987_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__338987_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__338987_SHARP_),cljs.core.second.call(null,p1__338987_SHARP_)));
}),cljs.core.seq.call(null,newParents__339000)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__338998.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__338988_SHARP_,p2__338989_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__338988_SHARP_,p2__338989_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__339001));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__339002.call(this,h,tag);
case  3 :
return underive__339003.call(this,h,tag,parent);
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
var xprefs__339005 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____339007 = (cljs.core.truth_((function (){var and__3546__auto____339006 = xprefs__339005;

if(cljs.core.truth_(and__3546__auto____339006))
{return xprefs__339005.call(null,y);
} else
{return and__3546__auto____339006;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____339007))
{return or__3548__auto____339007;
} else
{var or__3548__auto____339009 = (function (){var ps__339008 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__339008) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__339008),prefer_table)))
{} else
{}
{
var G__339012 = cljs.core.rest.call(null,ps__339008);
ps__339008 = G__339012;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____339009))
{return or__3548__auto____339009;
} else
{var or__3548__auto____339011 = (function (){var ps__339010 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__339010) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__339010),y,prefer_table)))
{} else
{}
{
var G__339013 = cljs.core.rest.call(null,ps__339010);
ps__339010 = G__339013;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____339011))
{return or__3548__auto____339011;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____339014 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____339014))
{return or__3548__auto____339014;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__339023 = cljs.core.reduce.call(null,(function (be,p__339015){
var vec__339016__339017 = p__339015;
var k__339018 = cljs.core.nth.call(null,vec__339016__339017,0,null);
var ___339019 = cljs.core.nth.call(null,vec__339016__339017,1,null);
var e__339020 = vec__339016__339017;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__339018)))
{var be2__339022 = (cljs.core.truth_((function (){var or__3548__auto____339021 = (be === null);

if(cljs.core.truth_(or__3548__auto____339021))
{return or__3548__auto____339021;
} else
{return cljs.core.dominates.call(null,k__339018,cljs.core.first.call(null,be),prefer_table);
}
})())?e__339020:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__339022),k__339018,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__339018," and ",cljs.core.first.call(null,be2__339022),", and neither is preferred")));
}
return be2__339022;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__339023))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__339023));
return cljs.core.second.call(null,best_entry__339023);
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
if(cljs.core.truth_((function (){var and__3546__auto____339024 = mf;

if(cljs.core.truth_(and__3546__auto____339024))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____339024;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____339025 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____339025))
{return or__3548__auto____339025;
} else
{var or__3548__auto____339026 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____339026))
{return or__3548__auto____339026;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____339027 = mf;

if(cljs.core.truth_(and__3546__auto____339027))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____339027;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____339028 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____339028))
{return or__3548__auto____339028;
} else
{var or__3548__auto____339029 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____339029))
{return or__3548__auto____339029;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____339030 = mf;

if(cljs.core.truth_(and__3546__auto____339030))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____339030;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____339031 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____339031))
{return or__3548__auto____339031;
} else
{var or__3548__auto____339032 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____339032))
{return or__3548__auto____339032;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____339033 = mf;

if(cljs.core.truth_(and__3546__auto____339033))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____339033;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____339034 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____339034))
{return or__3548__auto____339034;
} else
{var or__3548__auto____339035 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____339035))
{return or__3548__auto____339035;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____339036 = mf;

if(cljs.core.truth_(and__3546__auto____339036))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____339036;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____339037 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____339037))
{return or__3548__auto____339037;
} else
{var or__3548__auto____339038 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____339038))
{return or__3548__auto____339038;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____339039 = mf;

if(cljs.core.truth_(and__3546__auto____339039))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____339039;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____339040 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____339040))
{return or__3548__auto____339040;
} else
{var or__3548__auto____339041 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____339041))
{return or__3548__auto____339041;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____339042 = mf;

if(cljs.core.truth_(and__3546__auto____339042))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____339042;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____339043 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____339043))
{return or__3548__auto____339043;
} else
{var or__3548__auto____339044 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____339044))
{return or__3548__auto____339044;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____339045 = mf;

if(cljs.core.truth_(and__3546__auto____339045))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____339045;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____339046 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____339046))
{return or__3548__auto____339046;
} else
{var or__3548__auto____339047 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____339047))
{return or__3548__auto____339047;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__339048 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__339049 = cljs.core._get_method.call(null,mf,dispatch_val__339048);

if(cljs.core.truth_(target_fn__339049))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__339048)));
}
return cljs.core.apply.call(null,target_fn__339049,args);
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
var this__339050 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__339051 = this;
cljs.core.swap_BANG_.call(null,this__339051.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__339051.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__339051.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__339051.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__339052 = this;
cljs.core.swap_BANG_.call(null,this__339052.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__339052.method_cache,this__339052.method_table,this__339052.cached_hierarchy,this__339052.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__339053 = this;
cljs.core.swap_BANG_.call(null,this__339053.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__339053.method_cache,this__339053.method_table,this__339053.cached_hierarchy,this__339053.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__339054 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__339054.cached_hierarchy),cljs.core.deref.call(null,this__339054.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__339054.method_cache,this__339054.method_table,this__339054.cached_hierarchy,this__339054.hierarchy);
}
var temp__3695__auto____339055 = cljs.core.deref.call(null,this__339054.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____339055))
{var target_fn__339056 = temp__3695__auto____339055;

return target_fn__339056;
} else
{var temp__3695__auto____339057 = cljs.core.find_and_cache_best_method.call(null,this__339054.name,dispatch_val,this__339054.hierarchy,this__339054.method_table,this__339054.prefer_table,this__339054.method_cache,this__339054.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____339057))
{var target_fn__339058 = temp__3695__auto____339057;

return target_fn__339058;
} else
{return cljs.core.deref.call(null,this__339054.method_table).call(null,this__339054.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__339059 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__339059.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__339059.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__339059.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__339059.method_cache,this__339059.method_table,this__339059.cached_hierarchy,this__339059.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__339060 = this;
return cljs.core.deref.call(null,this__339060.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__339061 = this;
return cljs.core.deref.call(null,this__339061.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__339062 = this;
return cljs.core.do_dispatch.call(null,mf,this__339062.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__339063__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__339063 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__339063__delegate.call(this, _, args);
};
G__339063.cljs$lang$maxFixedArity = 1;
G__339063.cljs$lang$applyTo = (function (arglist__339064){
var _ = cljs.core.first(arglist__339064);
var args = cljs.core.rest(arglist__339064);
return G__339063__delegate.call(this, _, args);
});
return G__339063;
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
