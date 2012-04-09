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
var or__3548__auto____392354 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____392354))
{return or__3548__auto____392354;
} else
{var or__3548__auto____392355 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____392355))
{return or__3548__auto____392355;
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
var _invoke__392419 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____392356 = this$;

if(cljs.core.truth_(and__3546__auto____392356))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392356;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____392357 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392357))
{return or__3548__auto____392357;
} else
{var or__3548__auto____392358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392358))
{return or__3548__auto____392358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__392420 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____392359 = this$;

if(cljs.core.truth_(and__3546__auto____392359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____392360 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392360))
{return or__3548__auto____392360;
} else
{var or__3548__auto____392361 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392361))
{return or__3548__auto____392361;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__392421 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____392362 = this$;

if(cljs.core.truth_(and__3546__auto____392362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____392363 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392363))
{return or__3548__auto____392363;
} else
{var or__3548__auto____392364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392364))
{return or__3548__auto____392364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__392422 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____392365 = this$;

if(cljs.core.truth_(and__3546__auto____392365))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392365;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____392366 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392366))
{return or__3548__auto____392366;
} else
{var or__3548__auto____392367 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392367))
{return or__3548__auto____392367;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__392423 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____392368 = this$;

if(cljs.core.truth_(and__3546__auto____392368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____392369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392369))
{return or__3548__auto____392369;
} else
{var or__3548__auto____392370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392370))
{return or__3548__auto____392370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__392424 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____392371 = this$;

if(cljs.core.truth_(and__3546__auto____392371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____392372 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392372))
{return or__3548__auto____392372;
} else
{var or__3548__auto____392373 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392373))
{return or__3548__auto____392373;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__392425 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____392374 = this$;

if(cljs.core.truth_(and__3546__auto____392374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____392375 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392375))
{return or__3548__auto____392375;
} else
{var or__3548__auto____392376 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392376))
{return or__3548__auto____392376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__392426 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____392377 = this$;

if(cljs.core.truth_(and__3546__auto____392377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____392378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392378))
{return or__3548__auto____392378;
} else
{var or__3548__auto____392379 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392379))
{return or__3548__auto____392379;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__392427 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____392380 = this$;

if(cljs.core.truth_(and__3546__auto____392380))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392380;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____392381 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392381))
{return or__3548__auto____392381;
} else
{var or__3548__auto____392382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392382))
{return or__3548__auto____392382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__392428 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____392383 = this$;

if(cljs.core.truth_(and__3546__auto____392383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____392384 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392384))
{return or__3548__auto____392384;
} else
{var or__3548__auto____392385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392385))
{return or__3548__auto____392385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__392429 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____392386 = this$;

if(cljs.core.truth_(and__3546__auto____392386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____392387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392387))
{return or__3548__auto____392387;
} else
{var or__3548__auto____392388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392388))
{return or__3548__auto____392388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__392430 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____392389 = this$;

if(cljs.core.truth_(and__3546__auto____392389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____392390 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392390))
{return or__3548__auto____392390;
} else
{var or__3548__auto____392391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392391))
{return or__3548__auto____392391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__392431 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____392392 = this$;

if(cljs.core.truth_(and__3546__auto____392392))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392392;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____392393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392393))
{return or__3548__auto____392393;
} else
{var or__3548__auto____392394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392394))
{return or__3548__auto____392394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__392432 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____392395 = this$;

if(cljs.core.truth_(and__3546__auto____392395))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392395;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____392396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392396))
{return or__3548__auto____392396;
} else
{var or__3548__auto____392397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392397))
{return or__3548__auto____392397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__392433 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____392398 = this$;

if(cljs.core.truth_(and__3546__auto____392398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____392399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392399))
{return or__3548__auto____392399;
} else
{var or__3548__auto____392400 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392400))
{return or__3548__auto____392400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__392434 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____392401 = this$;

if(cljs.core.truth_(and__3546__auto____392401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____392402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392402))
{return or__3548__auto____392402;
} else
{var or__3548__auto____392403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392403))
{return or__3548__auto____392403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__392435 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____392404 = this$;

if(cljs.core.truth_(and__3546__auto____392404))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392404;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____392405 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392405))
{return or__3548__auto____392405;
} else
{var or__3548__auto____392406 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392406))
{return or__3548__auto____392406;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__392436 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____392407 = this$;

if(cljs.core.truth_(and__3546__auto____392407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____392408 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392408))
{return or__3548__auto____392408;
} else
{var or__3548__auto____392409 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392409))
{return or__3548__auto____392409;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__392437 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____392410 = this$;

if(cljs.core.truth_(and__3546__auto____392410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____392411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392411))
{return or__3548__auto____392411;
} else
{var or__3548__auto____392412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392412))
{return or__3548__auto____392412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__392438 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____392413 = this$;

if(cljs.core.truth_(and__3546__auto____392413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____392414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392414))
{return or__3548__auto____392414;
} else
{var or__3548__auto____392415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392415))
{return or__3548__auto____392415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__392439 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____392416 = this$;

if(cljs.core.truth_(and__3546__auto____392416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____392416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____392417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392417))
{return or__3548__auto____392417;
} else
{var or__3548__auto____392418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____392418))
{return or__3548__auto____392418;
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
return _invoke__392419.call(this,this$);
case  2 :
return _invoke__392420.call(this,this$,a);
case  3 :
return _invoke__392421.call(this,this$,a,b);
case  4 :
return _invoke__392422.call(this,this$,a,b,c);
case  5 :
return _invoke__392423.call(this,this$,a,b,c,d);
case  6 :
return _invoke__392424.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__392425.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__392426.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__392427.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__392428.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__392429.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__392430.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__392431.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__392432.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__392433.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__392434.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__392435.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__392436.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__392437.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__392438.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__392439.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____392441 = coll;

if(cljs.core.truth_(and__3546__auto____392441))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____392441;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____392442 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392442))
{return or__3548__auto____392442;
} else
{var or__3548__auto____392443 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____392443))
{return or__3548__auto____392443;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____392444 = coll;

if(cljs.core.truth_(and__3546__auto____392444))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____392444;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____392445 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392445))
{return or__3548__auto____392445;
} else
{var or__3548__auto____392446 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____392446))
{return or__3548__auto____392446;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____392447 = coll;

if(cljs.core.truth_(and__3546__auto____392447))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____392447;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____392448 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392448))
{return or__3548__auto____392448;
} else
{var or__3548__auto____392449 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____392449))
{return or__3548__auto____392449;
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
var _nth__392456 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____392450 = coll;

if(cljs.core.truth_(and__3546__auto____392450))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____392450;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____392451 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392451))
{return or__3548__auto____392451;
} else
{var or__3548__auto____392452 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____392452))
{return or__3548__auto____392452;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__392457 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____392453 = coll;

if(cljs.core.truth_(and__3546__auto____392453))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____392453;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____392454 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392454))
{return or__3548__auto____392454;
} else
{var or__3548__auto____392455 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____392455))
{return or__3548__auto____392455;
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
return _nth__392456.call(this,coll,n);
case  3 :
return _nth__392457.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____392459 = coll;

if(cljs.core.truth_(and__3546__auto____392459))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____392459;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____392460 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392460))
{return or__3548__auto____392460;
} else
{var or__3548__auto____392461 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____392461))
{return or__3548__auto____392461;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____392462 = coll;

if(cljs.core.truth_(and__3546__auto____392462))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____392462;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____392463 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392463))
{return or__3548__auto____392463;
} else
{var or__3548__auto____392464 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____392464))
{return or__3548__auto____392464;
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
var _lookup__392471 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____392465 = o;

if(cljs.core.truth_(and__3546__auto____392465))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____392465;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____392466 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392466))
{return or__3548__auto____392466;
} else
{var or__3548__auto____392467 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____392467))
{return or__3548__auto____392467;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__392472 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____392468 = o;

if(cljs.core.truth_(and__3546__auto____392468))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____392468;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____392469 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392469))
{return or__3548__auto____392469;
} else
{var or__3548__auto____392470 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____392470))
{return or__3548__auto____392470;
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
return _lookup__392471.call(this,o,k);
case  3 :
return _lookup__392472.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____392474 = coll;

if(cljs.core.truth_(and__3546__auto____392474))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____392474;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____392475 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392475))
{return or__3548__auto____392475;
} else
{var or__3548__auto____392476 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____392476))
{return or__3548__auto____392476;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____392477 = coll;

if(cljs.core.truth_(and__3546__auto____392477))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____392477;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____392478 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392478))
{return or__3548__auto____392478;
} else
{var or__3548__auto____392479 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____392479))
{return or__3548__auto____392479;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____392480 = coll;

if(cljs.core.truth_(and__3546__auto____392480))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____392480;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____392481 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392481))
{return or__3548__auto____392481;
} else
{var or__3548__auto____392482 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____392482))
{return or__3548__auto____392482;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____392483 = coll;

if(cljs.core.truth_(and__3546__auto____392483))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____392483;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____392484 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392484))
{return or__3548__auto____392484;
} else
{var or__3548__auto____392485 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____392485))
{return or__3548__auto____392485;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____392486 = coll;

if(cljs.core.truth_(and__3546__auto____392486))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____392486;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____392487 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392487))
{return or__3548__auto____392487;
} else
{var or__3548__auto____392488 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____392488))
{return or__3548__auto____392488;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____392489 = coll;

if(cljs.core.truth_(and__3546__auto____392489))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____392489;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____392490 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392490))
{return or__3548__auto____392490;
} else
{var or__3548__auto____392491 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____392491))
{return or__3548__auto____392491;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____392492 = coll;

if(cljs.core.truth_(and__3546__auto____392492))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____392492;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____392493 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392493))
{return or__3548__auto____392493;
} else
{var or__3548__auto____392494 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____392494))
{return or__3548__auto____392494;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____392495 = o;

if(cljs.core.truth_(and__3546__auto____392495))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____392495;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____392496 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392496))
{return or__3548__auto____392496;
} else
{var or__3548__auto____392497 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____392497))
{return or__3548__auto____392497;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____392498 = o;

if(cljs.core.truth_(and__3546__auto____392498))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____392498;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____392499 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392499))
{return or__3548__auto____392499;
} else
{var or__3548__auto____392500 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____392500))
{return or__3548__auto____392500;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____392501 = o;

if(cljs.core.truth_(and__3546__auto____392501))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____392501;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____392502 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392502))
{return or__3548__auto____392502;
} else
{var or__3548__auto____392503 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____392503))
{return or__3548__auto____392503;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____392504 = o;

if(cljs.core.truth_(and__3546__auto____392504))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____392504;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____392505 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392505))
{return or__3548__auto____392505;
} else
{var or__3548__auto____392506 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____392506))
{return or__3548__auto____392506;
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
var _reduce__392513 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____392507 = coll;

if(cljs.core.truth_(and__3546__auto____392507))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____392507;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____392508 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392508))
{return or__3548__auto____392508;
} else
{var or__3548__auto____392509 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____392509))
{return or__3548__auto____392509;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__392514 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____392510 = coll;

if(cljs.core.truth_(and__3546__auto____392510))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____392510;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____392511 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____392511))
{return or__3548__auto____392511;
} else
{var or__3548__auto____392512 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____392512))
{return or__3548__auto____392512;
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
return _reduce__392513.call(this,coll,f);
case  3 :
return _reduce__392514.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____392516 = o;

if(cljs.core.truth_(and__3546__auto____392516))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____392516;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____392517 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392517))
{return or__3548__auto____392517;
} else
{var or__3548__auto____392518 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____392518))
{return or__3548__auto____392518;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____392519 = o;

if(cljs.core.truth_(and__3546__auto____392519))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____392519;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____392520 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392520))
{return or__3548__auto____392520;
} else
{var or__3548__auto____392521 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____392521))
{return or__3548__auto____392521;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____392522 = o;

if(cljs.core.truth_(and__3546__auto____392522))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____392522;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____392523 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392523))
{return or__3548__auto____392523;
} else
{var or__3548__auto____392524 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____392524))
{return or__3548__auto____392524;
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
if(cljs.core.truth_((function (){var and__3546__auto____392525 = o;

if(cljs.core.truth_(and__3546__auto____392525))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____392525;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____392526 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____392526))
{return or__3548__auto____392526;
} else
{var or__3548__auto____392527 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____392527))
{return or__3548__auto____392527;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____392528 = d;

if(cljs.core.truth_(and__3546__auto____392528))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____392528;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____392529 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____392529))
{return or__3548__auto____392529;
} else
{var or__3548__auto____392530 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____392530))
{return or__3548__auto____392530;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____392531 = this$;

if(cljs.core.truth_(and__3546__auto____392531))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____392531;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____392532 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392532))
{return or__3548__auto____392532;
} else
{var or__3548__auto____392533 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____392533))
{return or__3548__auto____392533;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____392534 = this$;

if(cljs.core.truth_(and__3546__auto____392534))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____392534;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____392535 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392535))
{return or__3548__auto____392535;
} else
{var or__3548__auto____392536 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____392536))
{return or__3548__auto____392536;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____392537 = this$;

if(cljs.core.truth_(and__3546__auto____392537))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____392537;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____392538 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____392538))
{return or__3548__auto____392538;
} else
{var or__3548__auto____392539 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____392539))
{return or__3548__auto____392539;
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
var G__392540 = null;
var G__392540__392541 = (function (o,k){
return null;
});
var G__392540__392542 = (function (o,k,not_found){
return not_found;
});
G__392540 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__392540__392541.call(this,o,k);
case  3 :
return G__392540__392542.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392540;
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
var G__392544 = null;
var G__392544__392545 = (function (_,f){
return f.call(null);
});
var G__392544__392546 = (function (_,f,start){
return start;
});
G__392544 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__392544__392545.call(this,_,f);
case  3 :
return G__392544__392546.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392544;
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
var G__392548 = null;
var G__392548__392549 = (function (_,n){
return null;
});
var G__392548__392550 = (function (_,n,not_found){
return not_found;
});
G__392548 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__392548__392549.call(this,_,n);
case  3 :
return G__392548__392550.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392548;
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
var ci_reduce__392558 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__392552 = cljs.core._nth.call(null,cicoll,0);
var n__392553 = 1;

while(true){
if(cljs.core.truth_((n__392553 < cljs.core._count.call(null,cicoll))))
{{
var G__392562 = f.call(null,val__392552,cljs.core._nth.call(null,cicoll,n__392553));
var G__392563 = (n__392553 + 1);
val__392552 = G__392562;
n__392553 = G__392563;
continue;
}
} else
{return val__392552;
}
break;
}
}
});
var ci_reduce__392559 = (function (cicoll,f,val){
var val__392554 = val;
var n__392555 = 0;

while(true){
if(cljs.core.truth_((n__392555 < cljs.core._count.call(null,cicoll))))
{{
var G__392564 = f.call(null,val__392554,cljs.core._nth.call(null,cicoll,n__392555));
var G__392565 = (n__392555 + 1);
val__392554 = G__392564;
n__392555 = G__392565;
continue;
}
} else
{return val__392554;
}
break;
}
});
var ci_reduce__392560 = (function (cicoll,f,val,idx){
var val__392556 = val;
var n__392557 = idx;

while(true){
if(cljs.core.truth_((n__392557 < cljs.core._count.call(null,cicoll))))
{{
var G__392566 = f.call(null,val__392556,cljs.core._nth.call(null,cicoll,n__392557));
var G__392567 = (n__392557 + 1);
val__392556 = G__392566;
n__392557 = G__392567;
continue;
}
} else
{return val__392556;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__392558.call(this,cicoll,f);
case  3 :
return ci_reduce__392559.call(this,cicoll,f,val);
case  4 :
return ci_reduce__392560.call(this,cicoll,f,val,idx);
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
var this__392568 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__392581 = null;
var G__392581__392582 = (function (_,f){
var this__392569 = this;
return cljs.core.ci_reduce.call(null,this__392569.a,f,(this__392569.a[this__392569.i]),(this__392569.i + 1));
});
var G__392581__392583 = (function (_,f,start){
var this__392570 = this;
return cljs.core.ci_reduce.call(null,this__392570.a,f,start,this__392570.i);
});
G__392581 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__392581__392582.call(this,_,f);
case  3 :
return G__392581__392583.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392581;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__392571 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__392572 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__392585 = null;
var G__392585__392586 = (function (coll,n){
var this__392573 = this;
var i__392574 = (n + this__392573.i);

if(cljs.core.truth_((i__392574 < this__392573.a.length)))
{return (this__392573.a[i__392574]);
} else
{return null;
}
});
var G__392585__392587 = (function (coll,n,not_found){
var this__392575 = this;
var i__392576 = (n + this__392575.i);

if(cljs.core.truth_((i__392576 < this__392575.a.length)))
{return (this__392575.a[i__392576]);
} else
{return not_found;
}
});
G__392585 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__392585__392586.call(this,coll,n);
case  3 :
return G__392585__392587.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392585;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__392577 = this;
return (this__392577.a.length - this__392577.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__392578 = this;
return (this__392578.a[this__392578.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__392579 = this;
if(cljs.core.truth_(((this__392579.i + 1) < this__392579.a.length)))
{return (new cljs.core.IndexedSeq(this__392579.a,(this__392579.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__392580 = this;
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
var G__392589 = null;
var G__392589__392590 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__392589__392591 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__392589 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__392589__392590.call(this,array,f);
case  3 :
return G__392589__392591.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392589;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__392593 = null;
var G__392593__392594 = (function (array,k){
return (array[k]);
});
var G__392593__392595 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__392593 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__392593__392594.call(this,array,k);
case  3 :
return G__392593__392595.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392593;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__392597 = null;
var G__392597__392598 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__392597__392599 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__392597 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__392597__392598.call(this,array,n);
case  3 :
return G__392597__392599.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392597;
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
var temp__3698__auto____392601 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____392601))
{var s__392602 = temp__3698__auto____392601;

return cljs.core._first.call(null,s__392602);
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
var G__392603 = cljs.core.next.call(null,s);
s = G__392603;
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
var s__392604 = cljs.core.seq.call(null,x);
var n__392605 = 0;

while(true){
if(cljs.core.truth_(s__392604))
{{
var G__392606 = cljs.core.next.call(null,s__392604);
var G__392607 = (n__392605 + 1);
s__392604 = G__392606;
n__392605 = G__392607;
continue;
}
} else
{return n__392605;
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
var conj__392608 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__392609 = (function() { 
var G__392611__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__392612 = conj.call(null,coll,x);
var G__392613 = cljs.core.first.call(null,xs);
var G__392614 = cljs.core.next.call(null,xs);
coll = G__392612;
x = G__392613;
xs = G__392614;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__392611 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392611__delegate.call(this, coll, x, xs);
};
G__392611.cljs$lang$maxFixedArity = 2;
G__392611.cljs$lang$applyTo = (function (arglist__392615){
var coll = cljs.core.first(arglist__392615);
var x = cljs.core.first(cljs.core.next(arglist__392615));
var xs = cljs.core.rest(cljs.core.next(arglist__392615));
return G__392611__delegate.call(this, coll, x, xs);
});
return G__392611;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__392608.call(this,coll,x);
default:
return conj__392609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__392609.cljs$lang$applyTo;
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
var nth__392616 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__392617 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__392616.call(this,coll,n);
case  3 :
return nth__392617.call(this,coll,n,not_found);
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
var get__392619 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__392620 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__392619.call(this,o,k);
case  3 :
return get__392620.call(this,o,k,not_found);
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
var assoc__392623 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__392624 = (function() { 
var G__392626__delegate = function (coll,k,v,kvs){
while(true){
var ret__392622 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__392627 = ret__392622;
var G__392628 = cljs.core.first.call(null,kvs);
var G__392629 = cljs.core.second.call(null,kvs);
var G__392630 = cljs.core.nnext.call(null,kvs);
coll = G__392627;
k = G__392628;
v = G__392629;
kvs = G__392630;
continue;
}
} else
{return ret__392622;
}
break;
}
};
var G__392626 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__392626__delegate.call(this, coll, k, v, kvs);
};
G__392626.cljs$lang$maxFixedArity = 3;
G__392626.cljs$lang$applyTo = (function (arglist__392631){
var coll = cljs.core.first(arglist__392631);
var k = cljs.core.first(cljs.core.next(arglist__392631));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__392631)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__392631)));
return G__392626__delegate.call(this, coll, k, v, kvs);
});
return G__392626;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__392623.call(this,coll,k,v);
default:
return assoc__392624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__392624.cljs$lang$applyTo;
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
var dissoc__392633 = (function (coll){
return coll;
});
var dissoc__392634 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__392635 = (function() { 
var G__392637__delegate = function (coll,k,ks){
while(true){
var ret__392632 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__392638 = ret__392632;
var G__392639 = cljs.core.first.call(null,ks);
var G__392640 = cljs.core.next.call(null,ks);
coll = G__392638;
k = G__392639;
ks = G__392640;
continue;
}
} else
{return ret__392632;
}
break;
}
};
var G__392637 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392637__delegate.call(this, coll, k, ks);
};
G__392637.cljs$lang$maxFixedArity = 2;
G__392637.cljs$lang$applyTo = (function (arglist__392641){
var coll = cljs.core.first(arglist__392641);
var k = cljs.core.first(cljs.core.next(arglist__392641));
var ks = cljs.core.rest(cljs.core.next(arglist__392641));
return G__392637__delegate.call(this, coll, k, ks);
});
return G__392637;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__392633.call(this,coll);
case  2 :
return dissoc__392634.call(this,coll,k);
default:
return dissoc__392635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__392635.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____392642 = o;

if(cljs.core.truth_((function (){var and__3546__auto____392643 = x__450__auto____392642;

if(cljs.core.truth_(and__3546__auto____392643))
{var and__3546__auto____392644 = x__450__auto____392642.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____392644))
{return cljs.core.not.call(null,x__450__auto____392642.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____392644;
}
} else
{return and__3546__auto____392643;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____392642);
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
var disj__392646 = (function (coll){
return coll;
});
var disj__392647 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__392648 = (function() { 
var G__392650__delegate = function (coll,k,ks){
while(true){
var ret__392645 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__392651 = ret__392645;
var G__392652 = cljs.core.first.call(null,ks);
var G__392653 = cljs.core.next.call(null,ks);
coll = G__392651;
k = G__392652;
ks = G__392653;
continue;
}
} else
{return ret__392645;
}
break;
}
};
var G__392650 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392650__delegate.call(this, coll, k, ks);
};
G__392650.cljs$lang$maxFixedArity = 2;
G__392650.cljs$lang$applyTo = (function (arglist__392654){
var coll = cljs.core.first(arglist__392654);
var k = cljs.core.first(cljs.core.next(arglist__392654));
var ks = cljs.core.rest(cljs.core.next(arglist__392654));
return G__392650__delegate.call(this, coll, k, ks);
});
return G__392650;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__392646.call(this,coll);
case  2 :
return disj__392647.call(this,coll,k);
default:
return disj__392648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__392648.cljs$lang$applyTo;
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
{var x__450__auto____392655 = x;

if(cljs.core.truth_((function (){var and__3546__auto____392656 = x__450__auto____392655;

if(cljs.core.truth_(and__3546__auto____392656))
{var and__3546__auto____392657 = x__450__auto____392655.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____392657))
{return cljs.core.not.call(null,x__450__auto____392655.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____392657;
}
} else
{return and__3546__auto____392656;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____392655);
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
{var x__450__auto____392658 = x;

if(cljs.core.truth_((function (){var and__3546__auto____392659 = x__450__auto____392658;

if(cljs.core.truth_(and__3546__auto____392659))
{var and__3546__auto____392660 = x__450__auto____392658.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____392660))
{return cljs.core.not.call(null,x__450__auto____392658.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____392660;
}
} else
{return and__3546__auto____392659;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____392658);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____392661 = x;

if(cljs.core.truth_((function (){var and__3546__auto____392662 = x__450__auto____392661;

if(cljs.core.truth_(and__3546__auto____392662))
{var and__3546__auto____392663 = x__450__auto____392661.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____392663))
{return cljs.core.not.call(null,x__450__auto____392661.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____392663;
}
} else
{return and__3546__auto____392662;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____392661);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____392664 = x;

if(cljs.core.truth_((function (){var and__3546__auto____392665 = x__450__auto____392664;

if(cljs.core.truth_(and__3546__auto____392665))
{var and__3546__auto____392666 = x__450__auto____392664.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____392666))
{return cljs.core.not.call(null,x__450__auto____392664.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____392666;
}
} else
{return and__3546__auto____392665;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____392664);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____392667 = x;

if(cljs.core.truth_((function (){var and__3546__auto____392668 = x__450__auto____392667;

if(cljs.core.truth_(and__3546__auto____392668))
{var and__3546__auto____392669 = x__450__auto____392667.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____392669))
{return cljs.core.not.call(null,x__450__auto____392667.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____392669;
}
} else
{return and__3546__auto____392668;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____392667);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____392670 = x;

if(cljs.core.truth_((function (){var and__3546__auto____392671 = x__450__auto____392670;

if(cljs.core.truth_(and__3546__auto____392671))
{var and__3546__auto____392672 = x__450__auto____392670.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____392672))
{return cljs.core.not.call(null,x__450__auto____392670.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____392672;
}
} else
{return and__3546__auto____392671;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____392670);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____392673 = x;

if(cljs.core.truth_((function (){var and__3546__auto____392674 = x__450__auto____392673;

if(cljs.core.truth_(and__3546__auto____392674))
{var and__3546__auto____392675 = x__450__auto____392673.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____392675))
{return cljs.core.not.call(null,x__450__auto____392673.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____392675;
}
} else
{return and__3546__auto____392674;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____392673);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__392676 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__392676.push(key);
}));
return keys__392676;
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
{var x__450__auto____392677 = s;

if(cljs.core.truth_((function (){var and__3546__auto____392678 = x__450__auto____392677;

if(cljs.core.truth_(and__3546__auto____392678))
{var and__3546__auto____392679 = x__450__auto____392677.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____392679))
{return cljs.core.not.call(null,x__450__auto____392677.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____392679;
}
} else
{return and__3546__auto____392678;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____392677);
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
var and__3546__auto____392680 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____392680))
{return cljs.core.not.call(null,(function (){var or__3548__auto____392681 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____392681))
{return or__3548__auto____392681;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____392680;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____392682 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____392682))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____392682;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____392683 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____392683))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____392683;
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
var and__3546__auto____392684 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____392684))
{return (n == n.toFixed());
} else
{return and__3546__auto____392684;
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
if(cljs.core.truth_((function (){var and__3546__auto____392685 = coll;

if(cljs.core.truth_(and__3546__auto____392685))
{var and__3546__auto____392686 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____392686))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____392686;
}
} else
{return and__3546__auto____392685;
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
var distinct_QMARK___392691 = (function (x){
return true;
});
var distinct_QMARK___392692 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___392693 = (function() { 
var G__392695__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__392687 = cljs.core.set([y,x]);
var xs__392688 = more;

while(true){
var x__392689 = cljs.core.first.call(null,xs__392688);
var etc__392690 = cljs.core.next.call(null,xs__392688);

if(cljs.core.truth_(xs__392688))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__392687,x__392689)))
{return false;
} else
{{
var G__392696 = cljs.core.conj.call(null,s__392687,x__392689);
var G__392697 = etc__392690;
s__392687 = G__392696;
xs__392688 = G__392697;
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
var G__392695 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392695__delegate.call(this, x, y, more);
};
G__392695.cljs$lang$maxFixedArity = 2;
G__392695.cljs$lang$applyTo = (function (arglist__392698){
var x = cljs.core.first(arglist__392698);
var y = cljs.core.first(cljs.core.next(arglist__392698));
var more = cljs.core.rest(cljs.core.next(arglist__392698));
return G__392695__delegate.call(this, x, y, more);
});
return G__392695;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___392691.call(this,x);
case  2 :
return distinct_QMARK___392692.call(this,x,y);
default:
return distinct_QMARK___392693.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___392693.cljs$lang$applyTo;
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
var r__392699 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__392699)))
{return r__392699;
} else
{if(cljs.core.truth_(r__392699))
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
var sort__392701 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__392702 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__392700 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__392700,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__392700);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__392701.call(this,comp);
case  2 :
return sort__392702.call(this,comp,coll);
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
var sort_by__392704 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__392705 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__392704.call(this,keyfn,comp);
case  3 :
return sort_by__392705.call(this,keyfn,comp,coll);
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
var reduce__392707 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__392708 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__392707.call(this,f,val);
case  3 :
return reduce__392708.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__392714 = (function (f,coll){
var temp__3695__auto____392710 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____392710))
{var s__392711 = temp__3695__auto____392710;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__392711),cljs.core.next.call(null,s__392711));
} else
{return f.call(null);
}
});
var seq_reduce__392715 = (function (f,val,coll){
var val__392712 = val;
var coll__392713 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__392713))
{{
var G__392717 = f.call(null,val__392712,cljs.core.first.call(null,coll__392713));
var G__392718 = cljs.core.next.call(null,coll__392713);
val__392712 = G__392717;
coll__392713 = G__392718;
continue;
}
} else
{return val__392712;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__392714.call(this,f,val);
case  3 :
return seq_reduce__392715.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__392719 = null;
var G__392719__392720 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__392719__392721 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__392719 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__392719__392720.call(this,coll,f);
case  3 :
return G__392719__392721.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392719;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___392723 = (function (){
return 0;
});
var _PLUS___392724 = (function (x){
return x;
});
var _PLUS___392725 = (function (x,y){
return (x + y);
});
var _PLUS___392726 = (function() { 
var G__392728__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__392728 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392728__delegate.call(this, x, y, more);
};
G__392728.cljs$lang$maxFixedArity = 2;
G__392728.cljs$lang$applyTo = (function (arglist__392729){
var x = cljs.core.first(arglist__392729);
var y = cljs.core.first(cljs.core.next(arglist__392729));
var more = cljs.core.rest(cljs.core.next(arglist__392729));
return G__392728__delegate.call(this, x, y, more);
});
return G__392728;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___392723.call(this);
case  1 :
return _PLUS___392724.call(this,x);
case  2 :
return _PLUS___392725.call(this,x,y);
default:
return _PLUS___392726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___392726.cljs$lang$applyTo;
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
var ___392730 = (function (x){
return (- x);
});
var ___392731 = (function (x,y){
return (x - y);
});
var ___392732 = (function() { 
var G__392734__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__392734 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392734__delegate.call(this, x, y, more);
};
G__392734.cljs$lang$maxFixedArity = 2;
G__392734.cljs$lang$applyTo = (function (arglist__392735){
var x = cljs.core.first(arglist__392735);
var y = cljs.core.first(cljs.core.next(arglist__392735));
var more = cljs.core.rest(cljs.core.next(arglist__392735));
return G__392734__delegate.call(this, x, y, more);
});
return G__392734;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___392730.call(this,x);
case  2 :
return ___392731.call(this,x,y);
default:
return ___392732.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___392732.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___392736 = (function (){
return 1;
});
var _STAR___392737 = (function (x){
return x;
});
var _STAR___392738 = (function (x,y){
return (x * y);
});
var _STAR___392739 = (function() { 
var G__392741__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__392741 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392741__delegate.call(this, x, y, more);
};
G__392741.cljs$lang$maxFixedArity = 2;
G__392741.cljs$lang$applyTo = (function (arglist__392742){
var x = cljs.core.first(arglist__392742);
var y = cljs.core.first(cljs.core.next(arglist__392742));
var more = cljs.core.rest(cljs.core.next(arglist__392742));
return G__392741__delegate.call(this, x, y, more);
});
return G__392741;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___392736.call(this);
case  1 :
return _STAR___392737.call(this,x);
case  2 :
return _STAR___392738.call(this,x,y);
default:
return _STAR___392739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___392739.cljs$lang$applyTo;
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
var _SLASH___392743 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___392744 = (function (x,y){
return (x / y);
});
var _SLASH___392745 = (function() { 
var G__392747__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__392747 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392747__delegate.call(this, x, y, more);
};
G__392747.cljs$lang$maxFixedArity = 2;
G__392747.cljs$lang$applyTo = (function (arglist__392748){
var x = cljs.core.first(arglist__392748);
var y = cljs.core.first(cljs.core.next(arglist__392748));
var more = cljs.core.rest(cljs.core.next(arglist__392748));
return G__392747__delegate.call(this, x, y, more);
});
return G__392747;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___392743.call(this,x);
case  2 :
return _SLASH___392744.call(this,x,y);
default:
return _SLASH___392745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___392745.cljs$lang$applyTo;
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
var _LT___392749 = (function (x){
return true;
});
var _LT___392750 = (function (x,y){
return (x < y);
});
var _LT___392751 = (function() { 
var G__392753__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__392754 = y;
var G__392755 = cljs.core.first.call(null,more);
var G__392756 = cljs.core.next.call(null,more);
x = G__392754;
y = G__392755;
more = G__392756;
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
var G__392753 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392753__delegate.call(this, x, y, more);
};
G__392753.cljs$lang$maxFixedArity = 2;
G__392753.cljs$lang$applyTo = (function (arglist__392757){
var x = cljs.core.first(arglist__392757);
var y = cljs.core.first(cljs.core.next(arglist__392757));
var more = cljs.core.rest(cljs.core.next(arglist__392757));
return G__392753__delegate.call(this, x, y, more);
});
return G__392753;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___392749.call(this,x);
case  2 :
return _LT___392750.call(this,x,y);
default:
return _LT___392751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___392751.cljs$lang$applyTo;
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
var _LT__EQ___392758 = (function (x){
return true;
});
var _LT__EQ___392759 = (function (x,y){
return (x <= y);
});
var _LT__EQ___392760 = (function() { 
var G__392762__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__392763 = y;
var G__392764 = cljs.core.first.call(null,more);
var G__392765 = cljs.core.next.call(null,more);
x = G__392763;
y = G__392764;
more = G__392765;
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
var G__392762 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392762__delegate.call(this, x, y, more);
};
G__392762.cljs$lang$maxFixedArity = 2;
G__392762.cljs$lang$applyTo = (function (arglist__392766){
var x = cljs.core.first(arglist__392766);
var y = cljs.core.first(cljs.core.next(arglist__392766));
var more = cljs.core.rest(cljs.core.next(arglist__392766));
return G__392762__delegate.call(this, x, y, more);
});
return G__392762;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___392758.call(this,x);
case  2 :
return _LT__EQ___392759.call(this,x,y);
default:
return _LT__EQ___392760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___392760.cljs$lang$applyTo;
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
var _GT___392767 = (function (x){
return true;
});
var _GT___392768 = (function (x,y){
return (x > y);
});
var _GT___392769 = (function() { 
var G__392771__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__392772 = y;
var G__392773 = cljs.core.first.call(null,more);
var G__392774 = cljs.core.next.call(null,more);
x = G__392772;
y = G__392773;
more = G__392774;
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
var G__392771 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392771__delegate.call(this, x, y, more);
};
G__392771.cljs$lang$maxFixedArity = 2;
G__392771.cljs$lang$applyTo = (function (arglist__392775){
var x = cljs.core.first(arglist__392775);
var y = cljs.core.first(cljs.core.next(arglist__392775));
var more = cljs.core.rest(cljs.core.next(arglist__392775));
return G__392771__delegate.call(this, x, y, more);
});
return G__392771;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___392767.call(this,x);
case  2 :
return _GT___392768.call(this,x,y);
default:
return _GT___392769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___392769.cljs$lang$applyTo;
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
var _GT__EQ___392776 = (function (x){
return true;
});
var _GT__EQ___392777 = (function (x,y){
return (x >= y);
});
var _GT__EQ___392778 = (function() { 
var G__392780__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__392781 = y;
var G__392782 = cljs.core.first.call(null,more);
var G__392783 = cljs.core.next.call(null,more);
x = G__392781;
y = G__392782;
more = G__392783;
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
var G__392780 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392780__delegate.call(this, x, y, more);
};
G__392780.cljs$lang$maxFixedArity = 2;
G__392780.cljs$lang$applyTo = (function (arglist__392784){
var x = cljs.core.first(arglist__392784);
var y = cljs.core.first(cljs.core.next(arglist__392784));
var more = cljs.core.rest(cljs.core.next(arglist__392784));
return G__392780__delegate.call(this, x, y, more);
});
return G__392780;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___392776.call(this,x);
case  2 :
return _GT__EQ___392777.call(this,x,y);
default:
return _GT__EQ___392778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___392778.cljs$lang$applyTo;
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
var max__392785 = (function (x){
return x;
});
var max__392786 = (function (x,y){
return ((x > y) ? x : y);
});
var max__392787 = (function() { 
var G__392789__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__392789 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392789__delegate.call(this, x, y, more);
};
G__392789.cljs$lang$maxFixedArity = 2;
G__392789.cljs$lang$applyTo = (function (arglist__392790){
var x = cljs.core.first(arglist__392790);
var y = cljs.core.first(cljs.core.next(arglist__392790));
var more = cljs.core.rest(cljs.core.next(arglist__392790));
return G__392789__delegate.call(this, x, y, more);
});
return G__392789;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__392785.call(this,x);
case  2 :
return max__392786.call(this,x,y);
default:
return max__392787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__392787.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__392791 = (function (x){
return x;
});
var min__392792 = (function (x,y){
return ((x < y) ? x : y);
});
var min__392793 = (function() { 
var G__392795__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__392795 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392795__delegate.call(this, x, y, more);
};
G__392795.cljs$lang$maxFixedArity = 2;
G__392795.cljs$lang$applyTo = (function (arglist__392796){
var x = cljs.core.first(arglist__392796);
var y = cljs.core.first(cljs.core.next(arglist__392796));
var more = cljs.core.rest(cljs.core.next(arglist__392796));
return G__392795__delegate.call(this, x, y, more);
});
return G__392795;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__392791.call(this,x);
case  2 :
return min__392792.call(this,x,y);
default:
return min__392793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__392793.cljs$lang$applyTo;
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
var rem__392797 = (n % d);

return cljs.core.fix.call(null,((n - rem__392797) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__392798 = cljs.core.quot.call(null,n,d);

return (n - (d * q__392798));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__392799 = (function (){
return Math.random.call(null);
});
var rand__392800 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__392799.call(this);
case  1 :
return rand__392800.call(this,n);
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
var _EQ__EQ___392802 = (function (x){
return true;
});
var _EQ__EQ___392803 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___392804 = (function() { 
var G__392806__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__392807 = y;
var G__392808 = cljs.core.first.call(null,more);
var G__392809 = cljs.core.next.call(null,more);
x = G__392807;
y = G__392808;
more = G__392809;
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
var G__392806 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392806__delegate.call(this, x, y, more);
};
G__392806.cljs$lang$maxFixedArity = 2;
G__392806.cljs$lang$applyTo = (function (arglist__392810){
var x = cljs.core.first(arglist__392810);
var y = cljs.core.first(cljs.core.next(arglist__392810));
var more = cljs.core.rest(cljs.core.next(arglist__392810));
return G__392806__delegate.call(this, x, y, more);
});
return G__392806;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___392802.call(this,x);
case  2 :
return _EQ__EQ___392803.call(this,x,y);
default:
return _EQ__EQ___392804.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___392804.cljs$lang$applyTo;
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
var n__392811 = n;
var xs__392812 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____392813 = xs__392812;

if(cljs.core.truth_(and__3546__auto____392813))
{return (n__392811 > 0);
} else
{return and__3546__auto____392813;
}
})()))
{{
var G__392814 = (n__392811 - 1);
var G__392815 = cljs.core.next.call(null,xs__392812);
n__392811 = G__392814;
xs__392812 = G__392815;
continue;
}
} else
{return xs__392812;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__392820 = null;
var G__392820__392821 = (function (coll,n){
var temp__3695__auto____392816 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____392816))
{var xs__392817 = temp__3695__auto____392816;

return cljs.core.first.call(null,xs__392817);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__392820__392822 = (function (coll,n,not_found){
var temp__3695__auto____392818 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____392818))
{var xs__392819 = temp__3695__auto____392818;

return cljs.core.first.call(null,xs__392819);
} else
{return not_found;
}
});
G__392820 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__392820__392821.call(this,coll,n);
case  3 :
return G__392820__392822.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392820;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___392824 = (function (){
return "";
});
var str_STAR___392825 = (function (x){
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
var str_STAR___392826 = (function() { 
var G__392828__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__392829 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__392830 = cljs.core.next.call(null,more);
sb = G__392829;
more = G__392830;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__392828 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__392828__delegate.call(this, x, ys);
};
G__392828.cljs$lang$maxFixedArity = 1;
G__392828.cljs$lang$applyTo = (function (arglist__392831){
var x = cljs.core.first(arglist__392831);
var ys = cljs.core.rest(arglist__392831);
return G__392828__delegate.call(this, x, ys);
});
return G__392828;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___392824.call(this);
case  1 :
return str_STAR___392825.call(this,x);
default:
return str_STAR___392826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___392826.cljs$lang$applyTo;
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
var str__392832 = (function (){
return "";
});
var str__392833 = (function (x){
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
var str__392834 = (function() { 
var G__392836__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__392836 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__392836__delegate.call(this, x, ys);
};
G__392836.cljs$lang$maxFixedArity = 1;
G__392836.cljs$lang$applyTo = (function (arglist__392837){
var x = cljs.core.first(arglist__392837);
var ys = cljs.core.rest(arglist__392837);
return G__392836__delegate.call(this, x, ys);
});
return G__392836;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__392832.call(this);
case  1 :
return str__392833.call(this,x);
default:
return str__392834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__392834.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__392838 = (function (s,start){
return s.substring(start);
});
var subs__392839 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__392838.call(this,s,start);
case  3 :
return subs__392839.call(this,s,start,end);
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
var symbol__392841 = (function (name){
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
var symbol__392842 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__392841.call(this,ns);
case  2 :
return symbol__392842.call(this,ns,name);
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
var keyword__392844 = (function (name){
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
var keyword__392845 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__392844.call(this,ns);
case  2 :
return keyword__392845.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__392847 = cljs.core.seq.call(null,x);
var ys__392848 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__392847 === null)))
{return (ys__392848 === null);
} else
{if(cljs.core.truth_((ys__392848 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__392847),cljs.core.first.call(null,ys__392848))))
{{
var G__392849 = cljs.core.next.call(null,xs__392847);
var G__392850 = cljs.core.next.call(null,ys__392848);
xs__392847 = G__392849;
ys__392848 = G__392850;
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
return cljs.core.reduce.call(null,(function (p1__392851_SHARP_,p2__392852_SHARP_){
return cljs.core.hash_combine.call(null,p1__392851_SHARP_,cljs.core.hash.call(null,p2__392852_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__392853__392854 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__392853__392854))
{var G__392856__392858 = cljs.core.first.call(null,G__392853__392854);
var vec__392857__392859 = G__392856__392858;
var key_name__392860 = cljs.core.nth.call(null,vec__392857__392859,0,null);
var f__392861 = cljs.core.nth.call(null,vec__392857__392859,1,null);
var G__392853__392862 = G__392853__392854;

var G__392856__392863 = G__392856__392858;
var G__392853__392864 = G__392853__392862;

while(true){
var vec__392865__392866 = G__392856__392863;
var key_name__392867 = cljs.core.nth.call(null,vec__392865__392866,0,null);
var f__392868 = cljs.core.nth.call(null,vec__392865__392866,1,null);
var G__392853__392869 = G__392853__392864;

var str_name__392870 = cljs.core.name.call(null,key_name__392867);

obj[str_name__392870] = f__392868;
var temp__3698__auto____392871 = cljs.core.next.call(null,G__392853__392869);

if(cljs.core.truth_(temp__3698__auto____392871))
{var G__392853__392872 = temp__3698__auto____392871;

{
var G__392873 = cljs.core.first.call(null,G__392853__392872);
var G__392874 = G__392853__392872;
G__392856__392863 = G__392873;
G__392853__392864 = G__392874;
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
var this__392875 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__392876 = this;
return (new cljs.core.List(this__392876.meta,o,coll,(this__392876.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__392877 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__392878 = this;
return this__392878.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__392879 = this;
return this__392879.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__392880 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__392881 = this;
return this__392881.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__392882 = this;
return this__392882.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__392883 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__392884 = this;
return (new cljs.core.List(meta,this__392884.first,this__392884.rest,this__392884.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__392885 = this;
return this__392885.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__392886 = this;
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
var this__392887 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__392888 = this;
return (new cljs.core.List(this__392888.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__392889 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__392890 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__392891 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__392892 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__392893 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__392894 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__392895 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__392896 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__392897 = this;
return this__392897.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__392898 = this;
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
list.cljs$lang$applyTo = (function (arglist__392899){
var items = cljs.core.seq( arglist__392899 );;
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
var this__392900 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__392901 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__392902 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__392903 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__392903.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__392904 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__392905 = this;
return this__392905.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__392906 = this;
if(cljs.core.truth_((this__392906.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__392906.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__392907 = this;
return this__392907.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__392908 = this;
return (new cljs.core.Cons(meta,this__392908.first,this__392908.rest));
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
var G__392909 = null;
var G__392909__392910 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__392909__392911 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__392909 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__392909__392910.call(this,string,f);
case  3 :
return G__392909__392911.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392909;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__392913 = null;
var G__392913__392914 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__392913__392915 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__392913 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__392913__392914.call(this,string,k);
case  3 :
return G__392913__392915.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392913;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__392917 = null;
var G__392917__392918 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__392917__392919 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__392917 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__392917__392918.call(this,string,n);
case  3 :
return G__392917__392919.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392917;
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
var G__392927 = null;
var G__392927__392928 = (function (tsym392921,coll){
var tsym392921__392923 = this;

var this$__392924 = tsym392921__392923;

return cljs.core.get.call(null,coll,this$__392924.toString());
});
var G__392927__392929 = (function (tsym392922,coll,not_found){
var tsym392922__392925 = this;

var this$__392926 = tsym392922__392925;

return cljs.core.get.call(null,coll,this$__392926.toString(),not_found);
});
G__392927 = function(tsym392922,coll,not_found){
switch(arguments.length){
case  2 :
return G__392927__392928.call(this,tsym392922,coll);
case  3 :
return G__392927__392929.call(this,tsym392922,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__392927;
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
var x__392931 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__392931;
} else
{lazy_seq.x = x__392931.call(null);
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
var this__392932 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__392933 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__392934 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__392935 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__392935.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__392936 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__392937 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__392938 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__392939 = this;
return this__392939.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__392940 = this;
return (new cljs.core.LazySeq(meta,this__392940.realized,this__392940.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__392941 = cljs.core.array.call(null);

var s__392942 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__392942)))
{ary__392941.push(cljs.core.first.call(null,s__392942));
{
var G__392943 = cljs.core.next.call(null,s__392942);
s__392942 = G__392943;
continue;
}
} else
{return ary__392941;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__392944 = s;
var i__392945 = n;
var sum__392946 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____392947 = (i__392945 > 0);

if(cljs.core.truth_(and__3546__auto____392947))
{return cljs.core.seq.call(null,s__392944);
} else
{return and__3546__auto____392947;
}
})()))
{{
var G__392948 = cljs.core.next.call(null,s__392944);
var G__392949 = (i__392945 - 1);
var G__392950 = (sum__392946 + 1);
s__392944 = G__392948;
i__392945 = G__392949;
sum__392946 = G__392950;
continue;
}
} else
{return sum__392946;
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
var concat__392954 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__392955 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__392956 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__392951 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__392951))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__392951),concat.call(null,cljs.core.rest.call(null,s__392951),y));
} else
{return y;
}
})));
});
var concat__392957 = (function() { 
var G__392959__delegate = function (x,y,zs){
var cat__392953 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__392952 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__392952))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__392952),cat.call(null,cljs.core.rest.call(null,xys__392952),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__392953.call(null,concat.call(null,x,y),zs);
};
var G__392959 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392959__delegate.call(this, x, y, zs);
};
G__392959.cljs$lang$maxFixedArity = 2;
G__392959.cljs$lang$applyTo = (function (arglist__392960){
var x = cljs.core.first(arglist__392960);
var y = cljs.core.first(cljs.core.next(arglist__392960));
var zs = cljs.core.rest(cljs.core.next(arglist__392960));
return G__392959__delegate.call(this, x, y, zs);
});
return G__392959;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__392954.call(this);
case  1 :
return concat__392955.call(this,x);
case  2 :
return concat__392956.call(this,x,y);
default:
return concat__392957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__392957.cljs$lang$applyTo;
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
var list_STAR___392961 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___392962 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___392963 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___392964 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___392965 = (function() { 
var G__392967__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__392967 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__392967__delegate.call(this, a, b, c, d, more);
};
G__392967.cljs$lang$maxFixedArity = 4;
G__392967.cljs$lang$applyTo = (function (arglist__392968){
var a = cljs.core.first(arglist__392968);
var b = cljs.core.first(cljs.core.next(arglist__392968));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__392968)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__392968))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__392968))));
return G__392967__delegate.call(this, a, b, c, d, more);
});
return G__392967;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___392961.call(this,a);
case  2 :
return list_STAR___392962.call(this,a,b);
case  3 :
return list_STAR___392963.call(this,a,b,c);
case  4 :
return list_STAR___392964.call(this,a,b,c,d);
default:
return list_STAR___392965.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___392965.cljs$lang$applyTo;
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
var apply__392978 = (function (f,args){
var fixed_arity__392969 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__392969 + 1)) <= fixed_arity__392969)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__392979 = (function (f,x,args){
var arglist__392970 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__392971 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__392970,fixed_arity__392971) <= fixed_arity__392971)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__392970));
} else
{return f.cljs$lang$applyTo(arglist__392970);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__392970));
}
});
var apply__392980 = (function (f,x,y,args){
var arglist__392972 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__392973 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__392972,fixed_arity__392973) <= fixed_arity__392973)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__392972));
} else
{return f.cljs$lang$applyTo(arglist__392972);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__392972));
}
});
var apply__392981 = (function (f,x,y,z,args){
var arglist__392974 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__392975 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__392974,fixed_arity__392975) <= fixed_arity__392975)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__392974));
} else
{return f.cljs$lang$applyTo(arglist__392974);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__392974));
}
});
var apply__392982 = (function() { 
var G__392984__delegate = function (f,a,b,c,d,args){
var arglist__392976 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__392977 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__392976,fixed_arity__392977) <= fixed_arity__392977)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__392976));
} else
{return f.cljs$lang$applyTo(arglist__392976);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__392976));
}
};
var G__392984 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__392984__delegate.call(this, f, a, b, c, d, args);
};
G__392984.cljs$lang$maxFixedArity = 5;
G__392984.cljs$lang$applyTo = (function (arglist__392985){
var f = cljs.core.first(arglist__392985);
var a = cljs.core.first(cljs.core.next(arglist__392985));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__392985)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__392985))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__392985)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__392985)))));
return G__392984__delegate.call(this, f, a, b, c, d, args);
});
return G__392984;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__392978.call(this,f,a);
case  3 :
return apply__392979.call(this,f,a,b);
case  4 :
return apply__392980.call(this,f,a,b,c);
case  5 :
return apply__392981.call(this,f,a,b,c,d);
default:
return apply__392982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__392982.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__392986){
var obj = cljs.core.first(arglist__392986);
var f = cljs.core.first(cljs.core.next(arglist__392986));
var args = cljs.core.rest(cljs.core.next(arglist__392986));
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
var not_EQ___392987 = (function (x){
return false;
});
var not_EQ___392988 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___392989 = (function() { 
var G__392991__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__392991 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__392991__delegate.call(this, x, y, more);
};
G__392991.cljs$lang$maxFixedArity = 2;
G__392991.cljs$lang$applyTo = (function (arglist__392992){
var x = cljs.core.first(arglist__392992);
var y = cljs.core.first(cljs.core.next(arglist__392992));
var more = cljs.core.rest(cljs.core.next(arglist__392992));
return G__392991__delegate.call(this, x, y, more);
});
return G__392991;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___392987.call(this,x);
case  2 :
return not_EQ___392988.call(this,x,y);
default:
return not_EQ___392989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___392989.cljs$lang$applyTo;
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
var G__392993 = pred;
var G__392994 = cljs.core.next.call(null,coll);
pred = G__392993;
coll = G__392994;
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
{var or__3548__auto____392995 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____392995))
{return or__3548__auto____392995;
} else
{{
var G__392996 = pred;
var G__392997 = cljs.core.next.call(null,coll);
pred = G__392996;
coll = G__392997;
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
var G__392998 = null;
var G__392998__392999 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__392998__393000 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__392998__393001 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__392998__393002 = (function() { 
var G__393004__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__393004 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__393004__delegate.call(this, x, y, zs);
};
G__393004.cljs$lang$maxFixedArity = 2;
G__393004.cljs$lang$applyTo = (function (arglist__393005){
var x = cljs.core.first(arglist__393005);
var y = cljs.core.first(cljs.core.next(arglist__393005));
var zs = cljs.core.rest(cljs.core.next(arglist__393005));
return G__393004__delegate.call(this, x, y, zs);
});
return G__393004;
})()
;
G__392998 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__392998__392999.call(this);
case  1 :
return G__392998__393000.call(this,x);
case  2 :
return G__392998__393001.call(this,x,y);
default:
return G__392998__393002.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__392998.cljs$lang$maxFixedArity = 2;
G__392998.cljs$lang$applyTo = G__392998__393002.cljs$lang$applyTo;
return G__392998;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__393006__delegate = function (args){
return x;
};
var G__393006 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__393006__delegate.call(this, args);
};
G__393006.cljs$lang$maxFixedArity = 0;
G__393006.cljs$lang$applyTo = (function (arglist__393007){
var args = cljs.core.seq( arglist__393007 );;
return G__393006__delegate.call(this, args);
});
return G__393006;
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
var comp__393011 = (function (){
return cljs.core.identity;
});
var comp__393012 = (function (f){
return f;
});
var comp__393013 = (function (f,g){
return (function() {
var G__393017 = null;
var G__393017__393018 = (function (){
return f.call(null,g.call(null));
});
var G__393017__393019 = (function (x){
return f.call(null,g.call(null,x));
});
var G__393017__393020 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__393017__393021 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__393017__393022 = (function() { 
var G__393024__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__393024 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393024__delegate.call(this, x, y, z, args);
};
G__393024.cljs$lang$maxFixedArity = 3;
G__393024.cljs$lang$applyTo = (function (arglist__393025){
var x = cljs.core.first(arglist__393025);
var y = cljs.core.first(cljs.core.next(arglist__393025));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393025)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393025)));
return G__393024__delegate.call(this, x, y, z, args);
});
return G__393024;
})()
;
G__393017 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__393017__393018.call(this);
case  1 :
return G__393017__393019.call(this,x);
case  2 :
return G__393017__393020.call(this,x,y);
case  3 :
return G__393017__393021.call(this,x,y,z);
default:
return G__393017__393022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__393017.cljs$lang$maxFixedArity = 3;
G__393017.cljs$lang$applyTo = G__393017__393022.cljs$lang$applyTo;
return G__393017;
})()
});
var comp__393014 = (function (f,g,h){
return (function() {
var G__393026 = null;
var G__393026__393027 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__393026__393028 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__393026__393029 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__393026__393030 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__393026__393031 = (function() { 
var G__393033__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__393033 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393033__delegate.call(this, x, y, z, args);
};
G__393033.cljs$lang$maxFixedArity = 3;
G__393033.cljs$lang$applyTo = (function (arglist__393034){
var x = cljs.core.first(arglist__393034);
var y = cljs.core.first(cljs.core.next(arglist__393034));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393034)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393034)));
return G__393033__delegate.call(this, x, y, z, args);
});
return G__393033;
})()
;
G__393026 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__393026__393027.call(this);
case  1 :
return G__393026__393028.call(this,x);
case  2 :
return G__393026__393029.call(this,x,y);
case  3 :
return G__393026__393030.call(this,x,y,z);
default:
return G__393026__393031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__393026.cljs$lang$maxFixedArity = 3;
G__393026.cljs$lang$applyTo = G__393026__393031.cljs$lang$applyTo;
return G__393026;
})()
});
var comp__393015 = (function() { 
var G__393035__delegate = function (f1,f2,f3,fs){
var fs__393008 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__393036__delegate = function (args){
var ret__393009 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__393008),args);
var fs__393010 = cljs.core.next.call(null,fs__393008);

while(true){
if(cljs.core.truth_(fs__393010))
{{
var G__393037 = cljs.core.first.call(null,fs__393010).call(null,ret__393009);
var G__393038 = cljs.core.next.call(null,fs__393010);
ret__393009 = G__393037;
fs__393010 = G__393038;
continue;
}
} else
{return ret__393009;
}
break;
}
};
var G__393036 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__393036__delegate.call(this, args);
};
G__393036.cljs$lang$maxFixedArity = 0;
G__393036.cljs$lang$applyTo = (function (arglist__393039){
var args = cljs.core.seq( arglist__393039 );;
return G__393036__delegate.call(this, args);
});
return G__393036;
})()
;
};
var G__393035 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393035__delegate.call(this, f1, f2, f3, fs);
};
G__393035.cljs$lang$maxFixedArity = 3;
G__393035.cljs$lang$applyTo = (function (arglist__393040){
var f1 = cljs.core.first(arglist__393040);
var f2 = cljs.core.first(cljs.core.next(arglist__393040));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393040)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393040)));
return G__393035__delegate.call(this, f1, f2, f3, fs);
});
return G__393035;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__393011.call(this);
case  1 :
return comp__393012.call(this,f1);
case  2 :
return comp__393013.call(this,f1,f2);
case  3 :
return comp__393014.call(this,f1,f2,f3);
default:
return comp__393015.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__393015.cljs$lang$applyTo;
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
var partial__393041 = (function (f,arg1){
return (function() { 
var G__393046__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__393046 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__393046__delegate.call(this, args);
};
G__393046.cljs$lang$maxFixedArity = 0;
G__393046.cljs$lang$applyTo = (function (arglist__393047){
var args = cljs.core.seq( arglist__393047 );;
return G__393046__delegate.call(this, args);
});
return G__393046;
})()
;
});
var partial__393042 = (function (f,arg1,arg2){
return (function() { 
var G__393048__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__393048 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__393048__delegate.call(this, args);
};
G__393048.cljs$lang$maxFixedArity = 0;
G__393048.cljs$lang$applyTo = (function (arglist__393049){
var args = cljs.core.seq( arglist__393049 );;
return G__393048__delegate.call(this, args);
});
return G__393048;
})()
;
});
var partial__393043 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__393050__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__393050 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__393050__delegate.call(this, args);
};
G__393050.cljs$lang$maxFixedArity = 0;
G__393050.cljs$lang$applyTo = (function (arglist__393051){
var args = cljs.core.seq( arglist__393051 );;
return G__393050__delegate.call(this, args);
});
return G__393050;
})()
;
});
var partial__393044 = (function() { 
var G__393052__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__393053__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__393053 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__393053__delegate.call(this, args);
};
G__393053.cljs$lang$maxFixedArity = 0;
G__393053.cljs$lang$applyTo = (function (arglist__393054){
var args = cljs.core.seq( arglist__393054 );;
return G__393053__delegate.call(this, args);
});
return G__393053;
})()
;
};
var G__393052 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__393052__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__393052.cljs$lang$maxFixedArity = 4;
G__393052.cljs$lang$applyTo = (function (arglist__393055){
var f = cljs.core.first(arglist__393055);
var arg1 = cljs.core.first(cljs.core.next(arglist__393055));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393055)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__393055))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__393055))));
return G__393052__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__393052;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__393041.call(this,f,arg1);
case  3 :
return partial__393042.call(this,f,arg1,arg2);
case  4 :
return partial__393043.call(this,f,arg1,arg2,arg3);
default:
return partial__393044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__393044.cljs$lang$applyTo;
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
var fnil__393056 = (function (f,x){
return (function() {
var G__393060 = null;
var G__393060__393061 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__393060__393062 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__393060__393063 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__393060__393064 = (function() { 
var G__393066__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__393066 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393066__delegate.call(this, a, b, c, ds);
};
G__393066.cljs$lang$maxFixedArity = 3;
G__393066.cljs$lang$applyTo = (function (arglist__393067){
var a = cljs.core.first(arglist__393067);
var b = cljs.core.first(cljs.core.next(arglist__393067));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393067)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393067)));
return G__393066__delegate.call(this, a, b, c, ds);
});
return G__393066;
})()
;
G__393060 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__393060__393061.call(this,a);
case  2 :
return G__393060__393062.call(this,a,b);
case  3 :
return G__393060__393063.call(this,a,b,c);
default:
return G__393060__393064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__393060.cljs$lang$maxFixedArity = 3;
G__393060.cljs$lang$applyTo = G__393060__393064.cljs$lang$applyTo;
return G__393060;
})()
});
var fnil__393057 = (function (f,x,y){
return (function() {
var G__393068 = null;
var G__393068__393069 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__393068__393070 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__393068__393071 = (function() { 
var G__393073__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__393073 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393073__delegate.call(this, a, b, c, ds);
};
G__393073.cljs$lang$maxFixedArity = 3;
G__393073.cljs$lang$applyTo = (function (arglist__393074){
var a = cljs.core.first(arglist__393074);
var b = cljs.core.first(cljs.core.next(arglist__393074));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393074)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393074)));
return G__393073__delegate.call(this, a, b, c, ds);
});
return G__393073;
})()
;
G__393068 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__393068__393069.call(this,a,b);
case  3 :
return G__393068__393070.call(this,a,b,c);
default:
return G__393068__393071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__393068.cljs$lang$maxFixedArity = 3;
G__393068.cljs$lang$applyTo = G__393068__393071.cljs$lang$applyTo;
return G__393068;
})()
});
var fnil__393058 = (function (f,x,y,z){
return (function() {
var G__393075 = null;
var G__393075__393076 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__393075__393077 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__393075__393078 = (function() { 
var G__393080__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__393080 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393080__delegate.call(this, a, b, c, ds);
};
G__393080.cljs$lang$maxFixedArity = 3;
G__393080.cljs$lang$applyTo = (function (arglist__393081){
var a = cljs.core.first(arglist__393081);
var b = cljs.core.first(cljs.core.next(arglist__393081));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393081)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393081)));
return G__393080__delegate.call(this, a, b, c, ds);
});
return G__393080;
})()
;
G__393075 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__393075__393076.call(this,a,b);
case  3 :
return G__393075__393077.call(this,a,b,c);
default:
return G__393075__393078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__393075.cljs$lang$maxFixedArity = 3;
G__393075.cljs$lang$applyTo = G__393075__393078.cljs$lang$applyTo;
return G__393075;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__393056.call(this,f,x);
case  3 :
return fnil__393057.call(this,f,x,y);
case  4 :
return fnil__393058.call(this,f,x,y,z);
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
var mapi__393084 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393082 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393082))
{var s__393083 = temp__3698__auto____393082;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__393083)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__393083)));
} else
{return null;
}
})));
});

return mapi__393084.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393085 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393085))
{var s__393086 = temp__3698__auto____393085;

var x__393087 = f.call(null,cljs.core.first.call(null,s__393086));

if(cljs.core.truth_((x__393087 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__393086));
} else
{return cljs.core.cons.call(null,x__393087,keep.call(null,f,cljs.core.rest.call(null,s__393086)));
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
var keepi__393097 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393094 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393094))
{var s__393095 = temp__3698__auto____393094;

var x__393096 = f.call(null,idx,cljs.core.first.call(null,s__393095));

if(cljs.core.truth_((x__393096 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__393095));
} else
{return cljs.core.cons.call(null,x__393096,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__393095)));
}
} else
{return null;
}
})));
});

return keepi__393097.call(null,0,coll);
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
var every_pred__393142 = (function (p){
return (function() {
var ep1 = null;
var ep1__393147 = (function (){
return true;
});
var ep1__393148 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__393149 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393104 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____393104))
{return p.call(null,y);
} else
{return and__3546__auto____393104;
}
})());
});
var ep1__393150 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393105 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____393105))
{var and__3546__auto____393106 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____393106))
{return p.call(null,z);
} else
{return and__3546__auto____393106;
}
} else
{return and__3546__auto____393105;
}
})());
});
var ep1__393151 = (function() { 
var G__393153__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393107 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____393107))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____393107;
}
})());
};
var G__393153 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393153__delegate.call(this, x, y, z, args);
};
G__393153.cljs$lang$maxFixedArity = 3;
G__393153.cljs$lang$applyTo = (function (arglist__393154){
var x = cljs.core.first(arglist__393154);
var y = cljs.core.first(cljs.core.next(arglist__393154));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393154)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393154)));
return G__393153__delegate.call(this, x, y, z, args);
});
return G__393153;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__393147.call(this);
case  1 :
return ep1__393148.call(this,x);
case  2 :
return ep1__393149.call(this,x,y);
case  3 :
return ep1__393150.call(this,x,y,z);
default:
return ep1__393151.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__393151.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__393143 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__393155 = (function (){
return true;
});
var ep2__393156 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393108 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____393108))
{return p2.call(null,x);
} else
{return and__3546__auto____393108;
}
})());
});
var ep2__393157 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393109 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____393109))
{var and__3546__auto____393110 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____393110))
{var and__3546__auto____393111 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____393111))
{return p2.call(null,y);
} else
{return and__3546__auto____393111;
}
} else
{return and__3546__auto____393110;
}
} else
{return and__3546__auto____393109;
}
})());
});
var ep2__393158 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393112 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____393112))
{var and__3546__auto____393113 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____393113))
{var and__3546__auto____393114 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____393114))
{var and__3546__auto____393115 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____393115))
{var and__3546__auto____393116 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____393116))
{return p2.call(null,z);
} else
{return and__3546__auto____393116;
}
} else
{return and__3546__auto____393115;
}
} else
{return and__3546__auto____393114;
}
} else
{return and__3546__auto____393113;
}
} else
{return and__3546__auto____393112;
}
})());
});
var ep2__393159 = (function() { 
var G__393161__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393117 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____393117))
{return cljs.core.every_QMARK_.call(null,(function (p1__393088_SHARP_){
var and__3546__auto____393118 = p1.call(null,p1__393088_SHARP_);

if(cljs.core.truth_(and__3546__auto____393118))
{return p2.call(null,p1__393088_SHARP_);
} else
{return and__3546__auto____393118;
}
}),args);
} else
{return and__3546__auto____393117;
}
})());
};
var G__393161 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393161__delegate.call(this, x, y, z, args);
};
G__393161.cljs$lang$maxFixedArity = 3;
G__393161.cljs$lang$applyTo = (function (arglist__393162){
var x = cljs.core.first(arglist__393162);
var y = cljs.core.first(cljs.core.next(arglist__393162));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393162)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393162)));
return G__393161__delegate.call(this, x, y, z, args);
});
return G__393161;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__393155.call(this);
case  1 :
return ep2__393156.call(this,x);
case  2 :
return ep2__393157.call(this,x,y);
case  3 :
return ep2__393158.call(this,x,y,z);
default:
return ep2__393159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__393159.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__393144 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__393163 = (function (){
return true;
});
var ep3__393164 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393119 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____393119))
{var and__3546__auto____393120 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____393120))
{return p3.call(null,x);
} else
{return and__3546__auto____393120;
}
} else
{return and__3546__auto____393119;
}
})());
});
var ep3__393165 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393121 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____393121))
{var and__3546__auto____393122 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____393122))
{var and__3546__auto____393123 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____393123))
{var and__3546__auto____393124 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____393124))
{var and__3546__auto____393125 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____393125))
{return p3.call(null,y);
} else
{return and__3546__auto____393125;
}
} else
{return and__3546__auto____393124;
}
} else
{return and__3546__auto____393123;
}
} else
{return and__3546__auto____393122;
}
} else
{return and__3546__auto____393121;
}
})());
});
var ep3__393166 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393126 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____393126))
{var and__3546__auto____393127 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____393127))
{var and__3546__auto____393128 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____393128))
{var and__3546__auto____393129 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____393129))
{var and__3546__auto____393130 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____393130))
{var and__3546__auto____393131 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____393131))
{var and__3546__auto____393132 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____393132))
{var and__3546__auto____393133 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____393133))
{return p3.call(null,z);
} else
{return and__3546__auto____393133;
}
} else
{return and__3546__auto____393132;
}
} else
{return and__3546__auto____393131;
}
} else
{return and__3546__auto____393130;
}
} else
{return and__3546__auto____393129;
}
} else
{return and__3546__auto____393128;
}
} else
{return and__3546__auto____393127;
}
} else
{return and__3546__auto____393126;
}
})());
});
var ep3__393167 = (function() { 
var G__393169__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393134 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____393134))
{return cljs.core.every_QMARK_.call(null,(function (p1__393089_SHARP_){
var and__3546__auto____393135 = p1.call(null,p1__393089_SHARP_);

if(cljs.core.truth_(and__3546__auto____393135))
{var and__3546__auto____393136 = p2.call(null,p1__393089_SHARP_);

if(cljs.core.truth_(and__3546__auto____393136))
{return p3.call(null,p1__393089_SHARP_);
} else
{return and__3546__auto____393136;
}
} else
{return and__3546__auto____393135;
}
}),args);
} else
{return and__3546__auto____393134;
}
})());
};
var G__393169 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393169__delegate.call(this, x, y, z, args);
};
G__393169.cljs$lang$maxFixedArity = 3;
G__393169.cljs$lang$applyTo = (function (arglist__393170){
var x = cljs.core.first(arglist__393170);
var y = cljs.core.first(cljs.core.next(arglist__393170));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393170)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393170)));
return G__393169__delegate.call(this, x, y, z, args);
});
return G__393169;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__393163.call(this);
case  1 :
return ep3__393164.call(this,x);
case  2 :
return ep3__393165.call(this,x,y);
case  3 :
return ep3__393166.call(this,x,y,z);
default:
return ep3__393167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__393167.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__393145 = (function() { 
var G__393171__delegate = function (p1,p2,p3,ps){
var ps__393137 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__393172 = (function (){
return true;
});
var epn__393173 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__393090_SHARP_){
return p1__393090_SHARP_.call(null,x);
}),ps__393137);
});
var epn__393174 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__393091_SHARP_){
var and__3546__auto____393138 = p1__393091_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____393138))
{return p1__393091_SHARP_.call(null,y);
} else
{return and__3546__auto____393138;
}
}),ps__393137);
});
var epn__393175 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__393092_SHARP_){
var and__3546__auto____393139 = p1__393092_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____393139))
{var and__3546__auto____393140 = p1__393092_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____393140))
{return p1__393092_SHARP_.call(null,z);
} else
{return and__3546__auto____393140;
}
} else
{return and__3546__auto____393139;
}
}),ps__393137);
});
var epn__393176 = (function() { 
var G__393178__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____393141 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____393141))
{return cljs.core.every_QMARK_.call(null,(function (p1__393093_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__393093_SHARP_,args);
}),ps__393137);
} else
{return and__3546__auto____393141;
}
})());
};
var G__393178 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393178__delegate.call(this, x, y, z, args);
};
G__393178.cljs$lang$maxFixedArity = 3;
G__393178.cljs$lang$applyTo = (function (arglist__393179){
var x = cljs.core.first(arglist__393179);
var y = cljs.core.first(cljs.core.next(arglist__393179));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393179)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393179)));
return G__393178__delegate.call(this, x, y, z, args);
});
return G__393178;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__393172.call(this);
case  1 :
return epn__393173.call(this,x);
case  2 :
return epn__393174.call(this,x,y);
case  3 :
return epn__393175.call(this,x,y,z);
default:
return epn__393176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__393176.cljs$lang$applyTo;
return epn;
})()
};
var G__393171 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393171__delegate.call(this, p1, p2, p3, ps);
};
G__393171.cljs$lang$maxFixedArity = 3;
G__393171.cljs$lang$applyTo = (function (arglist__393180){
var p1 = cljs.core.first(arglist__393180);
var p2 = cljs.core.first(cljs.core.next(arglist__393180));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393180)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393180)));
return G__393171__delegate.call(this, p1, p2, p3, ps);
});
return G__393171;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__393142.call(this,p1);
case  2 :
return every_pred__393143.call(this,p1,p2);
case  3 :
return every_pred__393144.call(this,p1,p2,p3);
default:
return every_pred__393145.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__393145.cljs$lang$applyTo;
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
var some_fn__393220 = (function (p){
return (function() {
var sp1 = null;
var sp1__393225 = (function (){
return null;
});
var sp1__393226 = (function (x){
return p.call(null,x);
});
var sp1__393227 = (function (x,y){
var or__3548__auto____393182 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____393182))
{return or__3548__auto____393182;
} else
{return p.call(null,y);
}
});
var sp1__393228 = (function (x,y,z){
var or__3548__auto____393183 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____393183))
{return or__3548__auto____393183;
} else
{var or__3548__auto____393184 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____393184))
{return or__3548__auto____393184;
} else
{return p.call(null,z);
}
}
});
var sp1__393229 = (function() { 
var G__393231__delegate = function (x,y,z,args){
var or__3548__auto____393185 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____393185))
{return or__3548__auto____393185;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__393231 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393231__delegate.call(this, x, y, z, args);
};
G__393231.cljs$lang$maxFixedArity = 3;
G__393231.cljs$lang$applyTo = (function (arglist__393232){
var x = cljs.core.first(arglist__393232);
var y = cljs.core.first(cljs.core.next(arglist__393232));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393232)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393232)));
return G__393231__delegate.call(this, x, y, z, args);
});
return G__393231;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__393225.call(this);
case  1 :
return sp1__393226.call(this,x);
case  2 :
return sp1__393227.call(this,x,y);
case  3 :
return sp1__393228.call(this,x,y,z);
default:
return sp1__393229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__393229.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__393221 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__393233 = (function (){
return null;
});
var sp2__393234 = (function (x){
var or__3548__auto____393186 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____393186))
{return or__3548__auto____393186;
} else
{return p2.call(null,x);
}
});
var sp2__393235 = (function (x,y){
var or__3548__auto____393187 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____393187))
{return or__3548__auto____393187;
} else
{var or__3548__auto____393188 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____393188))
{return or__3548__auto____393188;
} else
{var or__3548__auto____393189 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____393189))
{return or__3548__auto____393189;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__393236 = (function (x,y,z){
var or__3548__auto____393190 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____393190))
{return or__3548__auto____393190;
} else
{var or__3548__auto____393191 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____393191))
{return or__3548__auto____393191;
} else
{var or__3548__auto____393192 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____393192))
{return or__3548__auto____393192;
} else
{var or__3548__auto____393193 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____393193))
{return or__3548__auto____393193;
} else
{var or__3548__auto____393194 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____393194))
{return or__3548__auto____393194;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__393237 = (function() { 
var G__393239__delegate = function (x,y,z,args){
var or__3548__auto____393195 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____393195))
{return or__3548__auto____393195;
} else
{return cljs.core.some.call(null,(function (p1__393098_SHARP_){
var or__3548__auto____393196 = p1.call(null,p1__393098_SHARP_);

if(cljs.core.truth_(or__3548__auto____393196))
{return or__3548__auto____393196;
} else
{return p2.call(null,p1__393098_SHARP_);
}
}),args);
}
};
var G__393239 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393239__delegate.call(this, x, y, z, args);
};
G__393239.cljs$lang$maxFixedArity = 3;
G__393239.cljs$lang$applyTo = (function (arglist__393240){
var x = cljs.core.first(arglist__393240);
var y = cljs.core.first(cljs.core.next(arglist__393240));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393240)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393240)));
return G__393239__delegate.call(this, x, y, z, args);
});
return G__393239;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__393233.call(this);
case  1 :
return sp2__393234.call(this,x);
case  2 :
return sp2__393235.call(this,x,y);
case  3 :
return sp2__393236.call(this,x,y,z);
default:
return sp2__393237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__393237.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__393222 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__393241 = (function (){
return null;
});
var sp3__393242 = (function (x){
var or__3548__auto____393197 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____393197))
{return or__3548__auto____393197;
} else
{var or__3548__auto____393198 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____393198))
{return or__3548__auto____393198;
} else
{return p3.call(null,x);
}
}
});
var sp3__393243 = (function (x,y){
var or__3548__auto____393199 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____393199))
{return or__3548__auto____393199;
} else
{var or__3548__auto____393200 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____393200))
{return or__3548__auto____393200;
} else
{var or__3548__auto____393201 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____393201))
{return or__3548__auto____393201;
} else
{var or__3548__auto____393202 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____393202))
{return or__3548__auto____393202;
} else
{var or__3548__auto____393203 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____393203))
{return or__3548__auto____393203;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__393244 = (function (x,y,z){
var or__3548__auto____393204 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____393204))
{return or__3548__auto____393204;
} else
{var or__3548__auto____393205 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____393205))
{return or__3548__auto____393205;
} else
{var or__3548__auto____393206 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____393206))
{return or__3548__auto____393206;
} else
{var or__3548__auto____393207 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____393207))
{return or__3548__auto____393207;
} else
{var or__3548__auto____393208 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____393208))
{return or__3548__auto____393208;
} else
{var or__3548__auto____393209 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____393209))
{return or__3548__auto____393209;
} else
{var or__3548__auto____393210 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____393210))
{return or__3548__auto____393210;
} else
{var or__3548__auto____393211 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____393211))
{return or__3548__auto____393211;
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
var sp3__393245 = (function() { 
var G__393247__delegate = function (x,y,z,args){
var or__3548__auto____393212 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____393212))
{return or__3548__auto____393212;
} else
{return cljs.core.some.call(null,(function (p1__393099_SHARP_){
var or__3548__auto____393213 = p1.call(null,p1__393099_SHARP_);

if(cljs.core.truth_(or__3548__auto____393213))
{return or__3548__auto____393213;
} else
{var or__3548__auto____393214 = p2.call(null,p1__393099_SHARP_);

if(cljs.core.truth_(or__3548__auto____393214))
{return or__3548__auto____393214;
} else
{return p3.call(null,p1__393099_SHARP_);
}
}
}),args);
}
};
var G__393247 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393247__delegate.call(this, x, y, z, args);
};
G__393247.cljs$lang$maxFixedArity = 3;
G__393247.cljs$lang$applyTo = (function (arglist__393248){
var x = cljs.core.first(arglist__393248);
var y = cljs.core.first(cljs.core.next(arglist__393248));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393248)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393248)));
return G__393247__delegate.call(this, x, y, z, args);
});
return G__393247;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__393241.call(this);
case  1 :
return sp3__393242.call(this,x);
case  2 :
return sp3__393243.call(this,x,y);
case  3 :
return sp3__393244.call(this,x,y,z);
default:
return sp3__393245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__393245.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__393223 = (function() { 
var G__393249__delegate = function (p1,p2,p3,ps){
var ps__393215 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__393250 = (function (){
return null;
});
var spn__393251 = (function (x){
return cljs.core.some.call(null,(function (p1__393100_SHARP_){
return p1__393100_SHARP_.call(null,x);
}),ps__393215);
});
var spn__393252 = (function (x,y){
return cljs.core.some.call(null,(function (p1__393101_SHARP_){
var or__3548__auto____393216 = p1__393101_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____393216))
{return or__3548__auto____393216;
} else
{return p1__393101_SHARP_.call(null,y);
}
}),ps__393215);
});
var spn__393253 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__393102_SHARP_){
var or__3548__auto____393217 = p1__393102_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____393217))
{return or__3548__auto____393217;
} else
{var or__3548__auto____393218 = p1__393102_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____393218))
{return or__3548__auto____393218;
} else
{return p1__393102_SHARP_.call(null,z);
}
}
}),ps__393215);
});
var spn__393254 = (function() { 
var G__393256__delegate = function (x,y,z,args){
var or__3548__auto____393219 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____393219))
{return or__3548__auto____393219;
} else
{return cljs.core.some.call(null,(function (p1__393103_SHARP_){
return cljs.core.some.call(null,p1__393103_SHARP_,args);
}),ps__393215);
}
};
var G__393256 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393256__delegate.call(this, x, y, z, args);
};
G__393256.cljs$lang$maxFixedArity = 3;
G__393256.cljs$lang$applyTo = (function (arglist__393257){
var x = cljs.core.first(arglist__393257);
var y = cljs.core.first(cljs.core.next(arglist__393257));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393257)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393257)));
return G__393256__delegate.call(this, x, y, z, args);
});
return G__393256;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__393250.call(this);
case  1 :
return spn__393251.call(this,x);
case  2 :
return spn__393252.call(this,x,y);
case  3 :
return spn__393253.call(this,x,y,z);
default:
return spn__393254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__393254.cljs$lang$applyTo;
return spn;
})()
};
var G__393249 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393249__delegate.call(this, p1, p2, p3, ps);
};
G__393249.cljs$lang$maxFixedArity = 3;
G__393249.cljs$lang$applyTo = (function (arglist__393258){
var p1 = cljs.core.first(arglist__393258);
var p2 = cljs.core.first(cljs.core.next(arglist__393258));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393258)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393258)));
return G__393249__delegate.call(this, p1, p2, p3, ps);
});
return G__393249;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__393220.call(this,p1);
case  2 :
return some_fn__393221.call(this,p1,p2);
case  3 :
return some_fn__393222.call(this,p1,p2,p3);
default:
return some_fn__393223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__393223.cljs$lang$applyTo;
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
var map__393271 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393259 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393259))
{var s__393260 = temp__3698__auto____393259;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__393260)),map.call(null,f,cljs.core.rest.call(null,s__393260)));
} else
{return null;
}
})));
});
var map__393272 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__393261 = cljs.core.seq.call(null,c1);
var s2__393262 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____393263 = s1__393261;

if(cljs.core.truth_(and__3546__auto____393263))
{return s2__393262;
} else
{return and__3546__auto____393263;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__393261),cljs.core.first.call(null,s2__393262)),map.call(null,f,cljs.core.rest.call(null,s1__393261),cljs.core.rest.call(null,s2__393262)));
} else
{return null;
}
})));
});
var map__393273 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__393264 = cljs.core.seq.call(null,c1);
var s2__393265 = cljs.core.seq.call(null,c2);
var s3__393266 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____393267 = s1__393264;

if(cljs.core.truth_(and__3546__auto____393267))
{var and__3546__auto____393268 = s2__393265;

if(cljs.core.truth_(and__3546__auto____393268))
{return s3__393266;
} else
{return and__3546__auto____393268;
}
} else
{return and__3546__auto____393267;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__393264),cljs.core.first.call(null,s2__393265),cljs.core.first.call(null,s3__393266)),map.call(null,f,cljs.core.rest.call(null,s1__393264),cljs.core.rest.call(null,s2__393265),cljs.core.rest.call(null,s3__393266)));
} else
{return null;
}
})));
});
var map__393274 = (function() { 
var G__393276__delegate = function (f,c1,c2,c3,colls){
var step__393270 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__393269 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__393269)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__393269),step.call(null,map.call(null,cljs.core.rest,ss__393269)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__393181_SHARP_){
return cljs.core.apply.call(null,f,p1__393181_SHARP_);
}),step__393270.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__393276 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__393276__delegate.call(this, f, c1, c2, c3, colls);
};
G__393276.cljs$lang$maxFixedArity = 4;
G__393276.cljs$lang$applyTo = (function (arglist__393277){
var f = cljs.core.first(arglist__393277);
var c1 = cljs.core.first(cljs.core.next(arglist__393277));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393277)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__393277))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__393277))));
return G__393276__delegate.call(this, f, c1, c2, c3, colls);
});
return G__393276;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__393271.call(this,f,c1);
case  3 :
return map__393272.call(this,f,c1,c2);
case  4 :
return map__393273.call(this,f,c1,c2,c3);
default:
return map__393274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__393274.cljs$lang$applyTo;
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
{var temp__3698__auto____393278 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393278))
{var s__393279 = temp__3698__auto____393278;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__393279),take.call(null,(n - 1),cljs.core.rest.call(null,s__393279)));
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
var step__393282 = (function (n,coll){
while(true){
var s__393280 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____393281 = (n > 0);

if(cljs.core.truth_(and__3546__auto____393281))
{return s__393280;
} else
{return and__3546__auto____393281;
}
})()))
{{
var G__393283 = (n - 1);
var G__393284 = cljs.core.rest.call(null,s__393280);
n = G__393283;
coll = G__393284;
continue;
}
} else
{return s__393280;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__393282.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__393285 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__393286 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__393285.call(this,n);
case  2 :
return drop_last__393286.call(this,n,s);
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
var s__393288 = cljs.core.seq.call(null,coll);
var lead__393289 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__393289))
{{
var G__393290 = cljs.core.next.call(null,s__393288);
var G__393291 = cljs.core.next.call(null,lead__393289);
s__393288 = G__393290;
lead__393289 = G__393291;
continue;
}
} else
{return s__393288;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__393294 = (function (pred,coll){
while(true){
var s__393292 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____393293 = s__393292;

if(cljs.core.truth_(and__3546__auto____393293))
{return pred.call(null,cljs.core.first.call(null,s__393292));
} else
{return and__3546__auto____393293;
}
})()))
{{
var G__393295 = pred;
var G__393296 = cljs.core.rest.call(null,s__393292);
pred = G__393295;
coll = G__393296;
continue;
}
} else
{return s__393292;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__393294.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393297 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393297))
{var s__393298 = temp__3698__auto____393297;

return cljs.core.concat.call(null,s__393298,cycle.call(null,s__393298));
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
var repeat__393299 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__393300 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__393299.call(this,n);
case  2 :
return repeat__393300.call(this,n,x);
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
var repeatedly__393302 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__393303 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__393302.call(this,n);
case  2 :
return repeatedly__393303.call(this,n,f);
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
var interleave__393309 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__393305 = cljs.core.seq.call(null,c1);
var s2__393306 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____393307 = s1__393305;

if(cljs.core.truth_(and__3546__auto____393307))
{return s2__393306;
} else
{return and__3546__auto____393307;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__393305),cljs.core.cons.call(null,cljs.core.first.call(null,s2__393306),interleave.call(null,cljs.core.rest.call(null,s1__393305),cljs.core.rest.call(null,s2__393306))));
} else
{return null;
}
})));
});
var interleave__393310 = (function() { 
var G__393312__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__393308 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__393308)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__393308),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__393308)));
} else
{return null;
}
})));
};
var G__393312 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__393312__delegate.call(this, c1, c2, colls);
};
G__393312.cljs$lang$maxFixedArity = 2;
G__393312.cljs$lang$applyTo = (function (arglist__393313){
var c1 = cljs.core.first(arglist__393313);
var c2 = cljs.core.first(cljs.core.next(arglist__393313));
var colls = cljs.core.rest(cljs.core.next(arglist__393313));
return G__393312__delegate.call(this, c1, c2, colls);
});
return G__393312;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__393309.call(this,c1,c2);
default:
return interleave__393310.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__393310.cljs$lang$applyTo;
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
var cat__393316 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____393314 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____393314))
{var coll__393315 = temp__3695__auto____393314;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__393315),cat.call(null,cljs.core.rest.call(null,coll__393315),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__393316.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__393317 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__393318 = (function() { 
var G__393320__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__393320 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__393320__delegate.call(this, f, coll, colls);
};
G__393320.cljs$lang$maxFixedArity = 2;
G__393320.cljs$lang$applyTo = (function (arglist__393321){
var f = cljs.core.first(arglist__393321);
var coll = cljs.core.first(cljs.core.next(arglist__393321));
var colls = cljs.core.rest(cljs.core.next(arglist__393321));
return G__393320__delegate.call(this, f, coll, colls);
});
return G__393320;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__393317.call(this,f,coll);
default:
return mapcat__393318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__393318.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393322 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393322))
{var s__393323 = temp__3698__auto____393322;

var f__393324 = cljs.core.first.call(null,s__393323);
var r__393325 = cljs.core.rest.call(null,s__393323);

if(cljs.core.truth_(pred.call(null,f__393324)))
{return cljs.core.cons.call(null,f__393324,filter.call(null,pred,r__393325));
} else
{return filter.call(null,pred,r__393325);
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
var walk__393327 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__393327.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__393326_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__393326_SHARP_));
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
var partition__393334 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__393335 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393328 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393328))
{var s__393329 = temp__3698__auto____393328;

var p__393330 = cljs.core.take.call(null,n,s__393329);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__393330))))
{return cljs.core.cons.call(null,p__393330,partition.call(null,n,step,cljs.core.drop.call(null,step,s__393329)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__393336 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393331 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393331))
{var s__393332 = temp__3698__auto____393331;

var p__393333 = cljs.core.take.call(null,n,s__393332);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__393333))))
{return cljs.core.cons.call(null,p__393333,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__393332)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__393333,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__393334.call(this,n,step);
case  3 :
return partition__393335.call(this,n,step,pad);
case  4 :
return partition__393336.call(this,n,step,pad,coll);
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
var get_in__393342 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__393343 = (function (m,ks,not_found){
var sentinel__393338 = cljs.core.lookup_sentinel;
var m__393339 = m;
var ks__393340 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__393340))
{var m__393341 = cljs.core.get.call(null,m__393339,cljs.core.first.call(null,ks__393340),sentinel__393338);

if(cljs.core.truth_((sentinel__393338 === m__393341)))
{return not_found;
} else
{{
var G__393345 = sentinel__393338;
var G__393346 = m__393341;
var G__393347 = cljs.core.next.call(null,ks__393340);
sentinel__393338 = G__393345;
m__393339 = G__393346;
ks__393340 = G__393347;
continue;
}
}
} else
{return m__393339;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__393342.call(this,m,ks);
case  3 :
return get_in__393343.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__393348,v){
var vec__393349__393350 = p__393348;
var k__393351 = cljs.core.nth.call(null,vec__393349__393350,0,null);
var ks__393352 = cljs.core.nthnext.call(null,vec__393349__393350,1);

if(cljs.core.truth_(ks__393352))
{return cljs.core.assoc.call(null,m,k__393351,assoc_in.call(null,cljs.core.get.call(null,m,k__393351),ks__393352,v));
} else
{return cljs.core.assoc.call(null,m,k__393351,v);
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
var update_in__delegate = function (m,p__393353,f,args){
var vec__393354__393355 = p__393353;
var k__393356 = cljs.core.nth.call(null,vec__393354__393355,0,null);
var ks__393357 = cljs.core.nthnext.call(null,vec__393354__393355,1);

if(cljs.core.truth_(ks__393357))
{return cljs.core.assoc.call(null,m,k__393356,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__393356),ks__393357,f,args));
} else
{return cljs.core.assoc.call(null,m,k__393356,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__393356),args));
}
};
var update_in = function (m,p__393353,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__393353, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__393358){
var m = cljs.core.first(arglist__393358);
var p__393353 = cljs.core.first(cljs.core.next(arglist__393358));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393358)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393358)));
return update_in__delegate.call(this, m, p__393353, f, args);
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
var this__393359 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__393392 = null;
var G__393392__393393 = (function (coll,k){
var this__393360 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__393392__393394 = (function (coll,k,not_found){
var this__393361 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__393392 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__393392__393393.call(this,coll,k);
case  3 :
return G__393392__393394.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393392;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__393362 = this;
var new_array__393363 = cljs.core.aclone.call(null,this__393362.array);

(new_array__393363[k] = v);
return (new cljs.core.Vector(this__393362.meta,new_array__393363));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__393396 = null;
var G__393396__393397 = (function (tsym393364,k){
var this__393366 = this;
var tsym393364__393367 = this;

var coll__393368 = tsym393364__393367;

return cljs.core._lookup.call(null,coll__393368,k);
});
var G__393396__393398 = (function (tsym393365,k,not_found){
var this__393369 = this;
var tsym393365__393370 = this;

var coll__393371 = tsym393365__393370;

return cljs.core._lookup.call(null,coll__393371,k,not_found);
});
G__393396 = function(tsym393365,k,not_found){
switch(arguments.length){
case  2 :
return G__393396__393397.call(this,tsym393365,k);
case  3 :
return G__393396__393398.call(this,tsym393365,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393396;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__393372 = this;
var new_array__393373 = cljs.core.aclone.call(null,this__393372.array);

new_array__393373.push(o);
return (new cljs.core.Vector(this__393372.meta,new_array__393373));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__393400 = null;
var G__393400__393401 = (function (v,f){
var this__393374 = this;
return cljs.core.ci_reduce.call(null,this__393374.array,f);
});
var G__393400__393402 = (function (v,f,start){
var this__393375 = this;
return cljs.core.ci_reduce.call(null,this__393375.array,f,start);
});
G__393400 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__393400__393401.call(this,v,f);
case  3 :
return G__393400__393402.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393400;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__393376 = this;
if(cljs.core.truth_((this__393376.array.length > 0)))
{var vector_seq__393377 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__393376.array.length)))
{return cljs.core.cons.call(null,(this__393376.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__393377.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__393378 = this;
return this__393378.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__393379 = this;
var count__393380 = this__393379.array.length;

if(cljs.core.truth_((count__393380 > 0)))
{return (this__393379.array[(count__393380 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__393381 = this;
if(cljs.core.truth_((this__393381.array.length > 0)))
{var new_array__393382 = cljs.core.aclone.call(null,this__393381.array);

new_array__393382.pop();
return (new cljs.core.Vector(this__393381.meta,new_array__393382));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__393383 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__393384 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__393385 = this;
return (new cljs.core.Vector(meta,this__393385.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__393386 = this;
return this__393386.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__393404 = null;
var G__393404__393405 = (function (coll,n){
var this__393387 = this;
if(cljs.core.truth_((function (){var and__3546__auto____393388 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____393388))
{return (n < this__393387.array.length);
} else
{return and__3546__auto____393388;
}
})()))
{return (this__393387.array[n]);
} else
{return null;
}
});
var G__393404__393406 = (function (coll,n,not_found){
var this__393389 = this;
if(cljs.core.truth_((function (){var and__3546__auto____393390 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____393390))
{return (n < this__393389.array.length);
} else
{return and__3546__auto____393390;
}
})()))
{return (this__393389.array[n]);
} else
{return not_found;
}
});
G__393404 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__393404__393405.call(this,coll,n);
case  3 :
return G__393404__393406.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393404;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__393391 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__393391.meta);
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
vector.cljs$lang$applyTo = (function (arglist__393408){
var args = cljs.core.seq( arglist__393408 );;
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
var this__393409 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__393437 = null;
var G__393437__393438 = (function (coll,k){
var this__393410 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__393437__393439 = (function (coll,k,not_found){
var this__393411 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__393437 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__393437__393438.call(this,coll,k);
case  3 :
return G__393437__393439.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393437;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__393412 = this;
var v_pos__393413 = (this__393412.start + key);

return (new cljs.core.Subvec(this__393412.meta,cljs.core._assoc.call(null,this__393412.v,v_pos__393413,val),this__393412.start,((this__393412.end > (v_pos__393413 + 1)) ? this__393412.end : (v_pos__393413 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__393441 = null;
var G__393441__393442 = (function (tsym393414,k){
var this__393416 = this;
var tsym393414__393417 = this;

var coll__393418 = tsym393414__393417;

return cljs.core._lookup.call(null,coll__393418,k);
});
var G__393441__393443 = (function (tsym393415,k,not_found){
var this__393419 = this;
var tsym393415__393420 = this;

var coll__393421 = tsym393415__393420;

return cljs.core._lookup.call(null,coll__393421,k,not_found);
});
G__393441 = function(tsym393415,k,not_found){
switch(arguments.length){
case  2 :
return G__393441__393442.call(this,tsym393415,k);
case  3 :
return G__393441__393443.call(this,tsym393415,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393441;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__393422 = this;
return (new cljs.core.Subvec(this__393422.meta,cljs.core._assoc_n.call(null,this__393422.v,this__393422.end,o),this__393422.start,(this__393422.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__393445 = null;
var G__393445__393446 = (function (coll,f){
var this__393423 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__393445__393447 = (function (coll,f,start){
var this__393424 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__393445 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__393445__393446.call(this,coll,f);
case  3 :
return G__393445__393447.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393445;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__393425 = this;
var subvec_seq__393426 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__393425.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__393425.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__393426.call(null,this__393425.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__393427 = this;
return (this__393427.end - this__393427.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__393428 = this;
return cljs.core._nth.call(null,this__393428.v,(this__393428.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__393429 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__393429.start,this__393429.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__393429.meta,this__393429.v,this__393429.start,(this__393429.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__393430 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__393431 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__393432 = this;
return (new cljs.core.Subvec(meta,this__393432.v,this__393432.start,this__393432.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__393433 = this;
return this__393433.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__393449 = null;
var G__393449__393450 = (function (coll,n){
var this__393434 = this;
return cljs.core._nth.call(null,this__393434.v,(this__393434.start + n));
});
var G__393449__393451 = (function (coll,n,not_found){
var this__393435 = this;
return cljs.core._nth.call(null,this__393435.v,(this__393435.start + n),not_found);
});
G__393449 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__393449__393450.call(this,coll,n);
case  3 :
return G__393449__393451.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393449;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__393436 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__393436.meta);
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
var subvec__393453 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__393454 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__393453.call(this,v,start);
case  3 :
return subvec__393454.call(this,v,start,end);
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
var this__393456 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__393457 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__393458 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__393459 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__393459.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__393460 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__393461 = this;
return cljs.core._first.call(null,this__393461.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__393462 = this;
var temp__3695__auto____393463 = cljs.core.next.call(null,this__393462.front);

if(cljs.core.truth_(temp__3695__auto____393463))
{var f1__393464 = temp__3695__auto____393463;

return (new cljs.core.PersistentQueueSeq(this__393462.meta,f1__393464,this__393462.rear));
} else
{if(cljs.core.truth_((this__393462.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__393462.meta,this__393462.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__393465 = this;
return this__393465.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__393466 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__393466.front,this__393466.rear));
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
var this__393467 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__393468 = this;
if(cljs.core.truth_(this__393468.front))
{return (new cljs.core.PersistentQueue(this__393468.meta,(this__393468.count + 1),this__393468.front,cljs.core.conj.call(null,(function (){var or__3548__auto____393469 = this__393468.rear;

if(cljs.core.truth_(or__3548__auto____393469))
{return or__3548__auto____393469;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__393468.meta,(this__393468.count + 1),cljs.core.conj.call(null,this__393468.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__393470 = this;
var rear__393471 = cljs.core.seq.call(null,this__393470.rear);

if(cljs.core.truth_((function (){var or__3548__auto____393472 = this__393470.front;

if(cljs.core.truth_(or__3548__auto____393472))
{return or__3548__auto____393472;
} else
{return rear__393471;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__393470.front,cljs.core.seq.call(null,rear__393471)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__393473 = this;
return this__393473.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__393474 = this;
return cljs.core._first.call(null,this__393474.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__393475 = this;
if(cljs.core.truth_(this__393475.front))
{var temp__3695__auto____393476 = cljs.core.next.call(null,this__393475.front);

if(cljs.core.truth_(temp__3695__auto____393476))
{var f1__393477 = temp__3695__auto____393476;

return (new cljs.core.PersistentQueue(this__393475.meta,(this__393475.count - 1),f1__393477,this__393475.rear));
} else
{return (new cljs.core.PersistentQueue(this__393475.meta,(this__393475.count - 1),cljs.core.seq.call(null,this__393475.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__393478 = this;
return cljs.core.first.call(null,this__393478.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__393479 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__393480 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__393481 = this;
return (new cljs.core.PersistentQueue(meta,this__393481.count,this__393481.front,this__393481.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__393482 = this;
return this__393482.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__393483 = this;
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
var this__393484 = this;
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
var len__393485 = array.length;

var i__393486 = 0;

while(true){
if(cljs.core.truth_((i__393486 < len__393485)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__393486]))))
{return i__393486;
} else
{{
var G__393487 = (i__393486 + incr);
i__393486 = G__393487;
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
var obj_map_contains_key_QMARK___393489 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___393490 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____393488 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____393488))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____393488;
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
return obj_map_contains_key_QMARK___393489.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___393490.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__393493 = cljs.core.hash.call(null,a);
var b__393494 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__393493 < b__393494)))
{return -1;
} else
{if(cljs.core.truth_((a__393493 > b__393494)))
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
var this__393495 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__393522 = null;
var G__393522__393523 = (function (coll,k){
var this__393496 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__393522__393524 = (function (coll,k,not_found){
var this__393497 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__393497.strobj,(this__393497.strobj[k]),not_found);
});
G__393522 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__393522__393523.call(this,coll,k);
case  3 :
return G__393522__393524.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393522;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__393498 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__393499 = goog.object.clone.call(null,this__393498.strobj);
var overwrite_QMARK___393500 = new_strobj__393499.hasOwnProperty(k);

(new_strobj__393499[k] = v);
if(cljs.core.truth_(overwrite_QMARK___393500))
{return (new cljs.core.ObjMap(this__393498.meta,this__393498.keys,new_strobj__393499));
} else
{var new_keys__393501 = cljs.core.aclone.call(null,this__393498.keys);

new_keys__393501.push(k);
return (new cljs.core.ObjMap(this__393498.meta,new_keys__393501,new_strobj__393499));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__393498.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__393502 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__393502.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__393526 = null;
var G__393526__393527 = (function (tsym393503,k){
var this__393505 = this;
var tsym393503__393506 = this;

var coll__393507 = tsym393503__393506;

return cljs.core._lookup.call(null,coll__393507,k);
});
var G__393526__393528 = (function (tsym393504,k,not_found){
var this__393508 = this;
var tsym393504__393509 = this;

var coll__393510 = tsym393504__393509;

return cljs.core._lookup.call(null,coll__393510,k,not_found);
});
G__393526 = function(tsym393504,k,not_found){
switch(arguments.length){
case  2 :
return G__393526__393527.call(this,tsym393504,k);
case  3 :
return G__393526__393528.call(this,tsym393504,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393526;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__393511 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__393512 = this;
if(cljs.core.truth_((this__393512.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__393492_SHARP_){
return cljs.core.vector.call(null,p1__393492_SHARP_,(this__393512.strobj[p1__393492_SHARP_]));
}),this__393512.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__393513 = this;
return this__393513.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__393514 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__393515 = this;
return (new cljs.core.ObjMap(meta,this__393515.keys,this__393515.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__393516 = this;
return this__393516.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__393517 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__393517.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__393518 = this;
if(cljs.core.truth_((function (){var and__3546__auto____393519 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____393519))
{return this__393518.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____393519;
}
})()))
{var new_keys__393520 = cljs.core.aclone.call(null,this__393518.keys);
var new_strobj__393521 = goog.object.clone.call(null,this__393518.strobj);

new_keys__393520.splice(cljs.core.scan_array.call(null,1,k,new_keys__393520),1);
cljs.core.js_delete.call(null,new_strobj__393521,k);
return (new cljs.core.ObjMap(this__393518.meta,new_keys__393520,new_strobj__393521));
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
var this__393531 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__393569 = null;
var G__393569__393570 = (function (coll,k){
var this__393532 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__393569__393571 = (function (coll,k,not_found){
var this__393533 = this;
var bucket__393534 = (this__393533.hashobj[cljs.core.hash.call(null,k)]);
var i__393535 = (cljs.core.truth_(bucket__393534)?cljs.core.scan_array.call(null,2,k,bucket__393534):null);

if(cljs.core.truth_(i__393535))
{return (bucket__393534[(i__393535 + 1)]);
} else
{return not_found;
}
});
G__393569 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__393569__393570.call(this,coll,k);
case  3 :
return G__393569__393571.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393569;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__393536 = this;
var h__393537 = cljs.core.hash.call(null,k);
var bucket__393538 = (this__393536.hashobj[h__393537]);

if(cljs.core.truth_(bucket__393538))
{var new_bucket__393539 = cljs.core.aclone.call(null,bucket__393538);
var new_hashobj__393540 = goog.object.clone.call(null,this__393536.hashobj);

(new_hashobj__393540[h__393537] = new_bucket__393539);
var temp__3695__auto____393541 = cljs.core.scan_array.call(null,2,k,new_bucket__393539);

if(cljs.core.truth_(temp__3695__auto____393541))
{var i__393542 = temp__3695__auto____393541;

(new_bucket__393539[(i__393542 + 1)] = v);
return (new cljs.core.HashMap(this__393536.meta,this__393536.count,new_hashobj__393540));
} else
{new_bucket__393539.push(k,v);
return (new cljs.core.HashMap(this__393536.meta,(this__393536.count + 1),new_hashobj__393540));
}
} else
{var new_hashobj__393543 = goog.object.clone.call(null,this__393536.hashobj);

(new_hashobj__393543[h__393537] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__393536.meta,(this__393536.count + 1),new_hashobj__393543));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__393544 = this;
var bucket__393545 = (this__393544.hashobj[cljs.core.hash.call(null,k)]);
var i__393546 = (cljs.core.truth_(bucket__393545)?cljs.core.scan_array.call(null,2,k,bucket__393545):null);

if(cljs.core.truth_(i__393546))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__393573 = null;
var G__393573__393574 = (function (tsym393547,k){
var this__393549 = this;
var tsym393547__393550 = this;

var coll__393551 = tsym393547__393550;

return cljs.core._lookup.call(null,coll__393551,k);
});
var G__393573__393575 = (function (tsym393548,k,not_found){
var this__393552 = this;
var tsym393548__393553 = this;

var coll__393554 = tsym393548__393553;

return cljs.core._lookup.call(null,coll__393554,k,not_found);
});
G__393573 = function(tsym393548,k,not_found){
switch(arguments.length){
case  2 :
return G__393573__393574.call(this,tsym393548,k);
case  3 :
return G__393573__393575.call(this,tsym393548,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393573;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__393555 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__393556 = this;
if(cljs.core.truth_((this__393556.count > 0)))
{var hashes__393557 = cljs.core.js_keys.call(null,this__393556.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__393530_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__393556.hashobj[p1__393530_SHARP_])));
}),hashes__393557);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__393558 = this;
return this__393558.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__393559 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__393560 = this;
return (new cljs.core.HashMap(meta,this__393560.count,this__393560.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__393561 = this;
return this__393561.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__393562 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__393562.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__393563 = this;
var h__393564 = cljs.core.hash.call(null,k);
var bucket__393565 = (this__393563.hashobj[h__393564]);
var i__393566 = (cljs.core.truth_(bucket__393565)?cljs.core.scan_array.call(null,2,k,bucket__393565):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__393566)))
{return coll;
} else
{var new_hashobj__393567 = goog.object.clone.call(null,this__393563.hashobj);

if(cljs.core.truth_((3 > bucket__393565.length)))
{cljs.core.js_delete.call(null,new_hashobj__393567,h__393564);
} else
{var new_bucket__393568 = cljs.core.aclone.call(null,bucket__393565);

new_bucket__393568.splice(i__393566,2);
(new_hashobj__393567[h__393564] = new_bucket__393568);
}
return (new cljs.core.HashMap(this__393563.meta,(this__393563.count - 1),new_hashobj__393567));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__393577 = ks.length;

var i__393578 = 0;
var out__393579 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__393578 < len__393577)))
{{
var G__393580 = (i__393578 + 1);
var G__393581 = cljs.core.assoc.call(null,out__393579,(ks[i__393578]),(vs[i__393578]));
i__393578 = G__393580;
out__393579 = G__393581;
continue;
}
} else
{return out__393579;
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
var in$__393582 = cljs.core.seq.call(null,keyvals);
var out__393583 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__393582))
{{
var G__393584 = cljs.core.nnext.call(null,in$__393582);
var G__393585 = cljs.core.assoc.call(null,out__393583,cljs.core.first.call(null,in$__393582),cljs.core.second.call(null,in$__393582));
in$__393582 = G__393584;
out__393583 = G__393585;
continue;
}
} else
{return out__393583;
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
hash_map.cljs$lang$applyTo = (function (arglist__393586){
var keyvals = cljs.core.seq( arglist__393586 );;
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
{return cljs.core.reduce.call(null,(function (p1__393587_SHARP_,p2__393588_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____393589 = p1__393587_SHARP_;

if(cljs.core.truth_(or__3548__auto____393589))
{return or__3548__auto____393589;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__393588_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__393590){
var maps = cljs.core.seq( arglist__393590 );;
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
{var merge_entry__393593 = (function (m,e){
var k__393591 = cljs.core.first.call(null,e);
var v__393592 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__393591)))
{return cljs.core.assoc.call(null,m,k__393591,f.call(null,cljs.core.get.call(null,m,k__393591),v__393592));
} else
{return cljs.core.assoc.call(null,m,k__393591,v__393592);
}
});
var merge2__393595 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__393593,(function (){var or__3548__auto____393594 = m1;

if(cljs.core.truth_(or__3548__auto____393594))
{return or__3548__auto____393594;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__393595,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__393596){
var f = cljs.core.first(arglist__393596);
var maps = cljs.core.rest(arglist__393596);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__393598 = cljs.core.ObjMap.fromObject([],{});
var keys__393599 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__393599))
{var key__393600 = cljs.core.first.call(null,keys__393599);
var entry__393601 = cljs.core.get.call(null,map,key__393600,"\uFDD0'user/not-found");

{
var G__393602 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__393601,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__393598,key__393600,entry__393601):ret__393598);
var G__393603 = cljs.core.next.call(null,keys__393599);
ret__393598 = G__393602;
keys__393599 = G__393603;
continue;
}
} else
{return ret__393598;
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
var this__393604 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__393625 = null;
var G__393625__393626 = (function (coll,v){
var this__393605 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__393625__393627 = (function (coll,v,not_found){
var this__393606 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__393606.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__393625 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__393625__393626.call(this,coll,v);
case  3 :
return G__393625__393627.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393625;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__393629 = null;
var G__393629__393630 = (function (tsym393607,k){
var this__393609 = this;
var tsym393607__393610 = this;

var coll__393611 = tsym393607__393610;

return cljs.core._lookup.call(null,coll__393611,k);
});
var G__393629__393631 = (function (tsym393608,k,not_found){
var this__393612 = this;
var tsym393608__393613 = this;

var coll__393614 = tsym393608__393613;

return cljs.core._lookup.call(null,coll__393614,k,not_found);
});
G__393629 = function(tsym393608,k,not_found){
switch(arguments.length){
case  2 :
return G__393629__393630.call(this,tsym393608,k);
case  3 :
return G__393629__393631.call(this,tsym393608,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393629;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__393615 = this;
return (new cljs.core.Set(this__393615.meta,cljs.core.assoc.call(null,this__393615.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__393616 = this;
return cljs.core.keys.call(null,this__393616.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__393617 = this;
return (new cljs.core.Set(this__393617.meta,cljs.core.dissoc.call(null,this__393617.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__393618 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__393619 = this;
var and__3546__auto____393620 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____393620))
{var and__3546__auto____393621 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____393621))
{return cljs.core.every_QMARK_.call(null,(function (p1__393597_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__393597_SHARP_);
}),other);
} else
{return and__3546__auto____393621;
}
} else
{return and__3546__auto____393620;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__393622 = this;
return (new cljs.core.Set(meta,this__393622.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__393623 = this;
return this__393623.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__393624 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__393624.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__393634 = cljs.core.seq.call(null,coll);
var out__393635 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__393634))))
{{
var G__393636 = cljs.core.rest.call(null,in$__393634);
var G__393637 = cljs.core.conj.call(null,out__393635,cljs.core.first.call(null,in$__393634));
in$__393634 = G__393636;
out__393635 = G__393637;
continue;
}
} else
{return out__393635;
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
{var n__393638 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____393639 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____393639))
{var e__393640 = temp__3695__auto____393639;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__393640));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__393638,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__393633_SHARP_){
var temp__3695__auto____393641 = cljs.core.find.call(null,smap,p1__393633_SHARP_);

if(cljs.core.truth_(temp__3695__auto____393641))
{var e__393642 = temp__3695__auto____393641;

return cljs.core.second.call(null,e__393642);
} else
{return p1__393633_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__393650 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__393643,seen){
while(true){
var vec__393644__393645 = p__393643;
var f__393646 = cljs.core.nth.call(null,vec__393644__393645,0,null);
var xs__393647 = vec__393644__393645;

var temp__3698__auto____393648 = cljs.core.seq.call(null,xs__393647);

if(cljs.core.truth_(temp__3698__auto____393648))
{var s__393649 = temp__3698__auto____393648;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__393646)))
{{
var G__393651 = cljs.core.rest.call(null,s__393649);
var G__393652 = seen;
p__393643 = G__393651;
seen = G__393652;
continue;
}
} else
{return cljs.core.cons.call(null,f__393646,step.call(null,cljs.core.rest.call(null,s__393649),cljs.core.conj.call(null,seen,f__393646)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__393650.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__393653 = cljs.core.Vector.fromArray([]);
var s__393654 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__393654)))
{{
var G__393655 = cljs.core.conj.call(null,ret__393653,cljs.core.first.call(null,s__393654));
var G__393656 = cljs.core.next.call(null,s__393654);
ret__393653 = G__393655;
s__393654 = G__393656;
continue;
}
} else
{return cljs.core.seq.call(null,ret__393653);
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
{if(cljs.core.truth_((function (){var or__3548__auto____393657 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____393657))
{return or__3548__auto____393657;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__393658 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__393658 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__393658 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____393659 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____393659))
{return or__3548__auto____393659;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__393660 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__393660 > -1)))
{return cljs.core.subs.call(null,x,2,i__393660);
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
var map__393663 = cljs.core.ObjMap.fromObject([],{});
var ks__393664 = cljs.core.seq.call(null,keys);
var vs__393665 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____393666 = ks__393664;

if(cljs.core.truth_(and__3546__auto____393666))
{return vs__393665;
} else
{return and__3546__auto____393666;
}
})()))
{{
var G__393667 = cljs.core.assoc.call(null,map__393663,cljs.core.first.call(null,ks__393664),cljs.core.first.call(null,vs__393665));
var G__393668 = cljs.core.next.call(null,ks__393664);
var G__393669 = cljs.core.next.call(null,vs__393665);
map__393663 = G__393667;
ks__393664 = G__393668;
vs__393665 = G__393669;
continue;
}
} else
{return map__393663;
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
var max_key__393672 = (function (k,x){
return x;
});
var max_key__393673 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__393674 = (function() { 
var G__393676__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__393661_SHARP_,p2__393662_SHARP_){
return max_key.call(null,k,p1__393661_SHARP_,p2__393662_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__393676 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393676__delegate.call(this, k, x, y, more);
};
G__393676.cljs$lang$maxFixedArity = 3;
G__393676.cljs$lang$applyTo = (function (arglist__393677){
var k = cljs.core.first(arglist__393677);
var x = cljs.core.first(cljs.core.next(arglist__393677));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393677)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393677)));
return G__393676__delegate.call(this, k, x, y, more);
});
return G__393676;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__393672.call(this,k,x);
case  3 :
return max_key__393673.call(this,k,x,y);
default:
return max_key__393674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__393674.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__393678 = (function (k,x){
return x;
});
var min_key__393679 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__393680 = (function() { 
var G__393682__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__393670_SHARP_,p2__393671_SHARP_){
return min_key.call(null,k,p1__393670_SHARP_,p2__393671_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__393682 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393682__delegate.call(this, k, x, y, more);
};
G__393682.cljs$lang$maxFixedArity = 3;
G__393682.cljs$lang$applyTo = (function (arglist__393683){
var k = cljs.core.first(arglist__393683);
var x = cljs.core.first(cljs.core.next(arglist__393683));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393683)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393683)));
return G__393682__delegate.call(this, k, x, y, more);
});
return G__393682;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__393678.call(this,k,x);
case  3 :
return min_key__393679.call(this,k,x,y);
default:
return min_key__393680.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__393680.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__393686 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__393687 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393684 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393684))
{var s__393685 = temp__3698__auto____393684;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__393685),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__393685)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__393686.call(this,n,step);
case  3 :
return partition_all__393687.call(this,n,step,coll);
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
var temp__3698__auto____393689 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393689))
{var s__393690 = temp__3698__auto____393689;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__393690))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__393690),take_while.call(null,pred,cljs.core.rest.call(null,s__393690)));
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
var this__393691 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__393692 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__393708 = null;
var G__393708__393709 = (function (rng,f){
var this__393693 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__393708__393710 = (function (rng,f,s){
var this__393694 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__393708 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__393708__393709.call(this,rng,f);
case  3 :
return G__393708__393710.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393708;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__393695 = this;
var comp__393696 = (cljs.core.truth_((this__393695.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__393696.call(null,this__393695.start,this__393695.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__393697 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__393697.end - this__393697.start) / this__393697.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__393698 = this;
return this__393698.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__393699 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__393699.meta,(this__393699.start + this__393699.step),this__393699.end,this__393699.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__393700 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__393701 = this;
return (new cljs.core.Range(meta,this__393701.start,this__393701.end,this__393701.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__393702 = this;
return this__393702.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__393712 = null;
var G__393712__393713 = (function (rng,n){
var this__393703 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__393703.start + (n * this__393703.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____393704 = (this__393703.start > this__393703.end);

if(cljs.core.truth_(and__3546__auto____393704))
{return cljs.core._EQ_.call(null,this__393703.step,0);
} else
{return and__3546__auto____393704;
}
})()))
{return this__393703.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__393712__393714 = (function (rng,n,not_found){
var this__393705 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__393705.start + (n * this__393705.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____393706 = (this__393705.start > this__393705.end);

if(cljs.core.truth_(and__3546__auto____393706))
{return cljs.core._EQ_.call(null,this__393705.step,0);
} else
{return and__3546__auto____393706;
}
})()))
{return this__393705.start;
} else
{return not_found;
}
}
});
G__393712 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__393712__393713.call(this,rng,n);
case  3 :
return G__393712__393714.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__393712;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__393707 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__393707.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__393716 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__393717 = (function (end){
return range.call(null,0,end,1);
});
var range__393718 = (function (start,end){
return range.call(null,start,end,1);
});
var range__393719 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__393716.call(this);
case  1 :
return range__393717.call(this,start);
case  2 :
return range__393718.call(this,start,end);
case  3 :
return range__393719.call(this,start,end,step);
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
var temp__3698__auto____393721 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393721))
{var s__393722 = temp__3698__auto____393721;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__393722),take_nth.call(null,n,cljs.core.drop.call(null,n,s__393722)));
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
var temp__3698__auto____393724 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393724))
{var s__393725 = temp__3698__auto____393724;

var fst__393726 = cljs.core.first.call(null,s__393725);
var fv__393727 = f.call(null,fst__393726);
var run__393728 = cljs.core.cons.call(null,fst__393726,cljs.core.take_while.call(null,(function (p1__393723_SHARP_){
return cljs.core._EQ_.call(null,fv__393727,f.call(null,p1__393723_SHARP_));
}),cljs.core.next.call(null,s__393725)));

return cljs.core.cons.call(null,run__393728,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__393728),s__393725))));
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
var reductions__393743 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____393739 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____393739))
{var s__393740 = temp__3695__auto____393739;

return reductions.call(null,f,cljs.core.first.call(null,s__393740),cljs.core.rest.call(null,s__393740));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__393744 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____393741 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____393741))
{var s__393742 = temp__3698__auto____393741;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__393742)),cljs.core.rest.call(null,s__393742));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__393743.call(this,f,init);
case  3 :
return reductions__393744.call(this,f,init,coll);
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
var juxt__393747 = (function (f){
return (function() {
var G__393752 = null;
var G__393752__393753 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__393752__393754 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__393752__393755 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__393752__393756 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__393752__393757 = (function() { 
var G__393759__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__393759 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393759__delegate.call(this, x, y, z, args);
};
G__393759.cljs$lang$maxFixedArity = 3;
G__393759.cljs$lang$applyTo = (function (arglist__393760){
var x = cljs.core.first(arglist__393760);
var y = cljs.core.first(cljs.core.next(arglist__393760));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393760)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393760)));
return G__393759__delegate.call(this, x, y, z, args);
});
return G__393759;
})()
;
G__393752 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__393752__393753.call(this);
case  1 :
return G__393752__393754.call(this,x);
case  2 :
return G__393752__393755.call(this,x,y);
case  3 :
return G__393752__393756.call(this,x,y,z);
default:
return G__393752__393757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__393752.cljs$lang$maxFixedArity = 3;
G__393752.cljs$lang$applyTo = G__393752__393757.cljs$lang$applyTo;
return G__393752;
})()
});
var juxt__393748 = (function (f,g){
return (function() {
var G__393761 = null;
var G__393761__393762 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__393761__393763 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__393761__393764 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__393761__393765 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__393761__393766 = (function() { 
var G__393768__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__393768 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393768__delegate.call(this, x, y, z, args);
};
G__393768.cljs$lang$maxFixedArity = 3;
G__393768.cljs$lang$applyTo = (function (arglist__393769){
var x = cljs.core.first(arglist__393769);
var y = cljs.core.first(cljs.core.next(arglist__393769));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393769)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393769)));
return G__393768__delegate.call(this, x, y, z, args);
});
return G__393768;
})()
;
G__393761 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__393761__393762.call(this);
case  1 :
return G__393761__393763.call(this,x);
case  2 :
return G__393761__393764.call(this,x,y);
case  3 :
return G__393761__393765.call(this,x,y,z);
default:
return G__393761__393766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__393761.cljs$lang$maxFixedArity = 3;
G__393761.cljs$lang$applyTo = G__393761__393766.cljs$lang$applyTo;
return G__393761;
})()
});
var juxt__393749 = (function (f,g,h){
return (function() {
var G__393770 = null;
var G__393770__393771 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__393770__393772 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__393770__393773 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__393770__393774 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__393770__393775 = (function() { 
var G__393777__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__393777 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393777__delegate.call(this, x, y, z, args);
};
G__393777.cljs$lang$maxFixedArity = 3;
G__393777.cljs$lang$applyTo = (function (arglist__393778){
var x = cljs.core.first(arglist__393778);
var y = cljs.core.first(cljs.core.next(arglist__393778));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393778)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393778)));
return G__393777__delegate.call(this, x, y, z, args);
});
return G__393777;
})()
;
G__393770 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__393770__393771.call(this);
case  1 :
return G__393770__393772.call(this,x);
case  2 :
return G__393770__393773.call(this,x,y);
case  3 :
return G__393770__393774.call(this,x,y,z);
default:
return G__393770__393775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__393770.cljs$lang$maxFixedArity = 3;
G__393770.cljs$lang$applyTo = G__393770__393775.cljs$lang$applyTo;
return G__393770;
})()
});
var juxt__393750 = (function() { 
var G__393779__delegate = function (f,g,h,fs){
var fs__393746 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__393780 = null;
var G__393780__393781 = (function (){
return cljs.core.reduce.call(null,(function (p1__393729_SHARP_,p2__393730_SHARP_){
return cljs.core.conj.call(null,p1__393729_SHARP_,p2__393730_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__393746);
});
var G__393780__393782 = (function (x){
return cljs.core.reduce.call(null,(function (p1__393731_SHARP_,p2__393732_SHARP_){
return cljs.core.conj.call(null,p1__393731_SHARP_,p2__393732_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__393746);
});
var G__393780__393783 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__393733_SHARP_,p2__393734_SHARP_){
return cljs.core.conj.call(null,p1__393733_SHARP_,p2__393734_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__393746);
});
var G__393780__393784 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__393735_SHARP_,p2__393736_SHARP_){
return cljs.core.conj.call(null,p1__393735_SHARP_,p2__393736_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__393746);
});
var G__393780__393785 = (function() { 
var G__393787__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__393737_SHARP_,p2__393738_SHARP_){
return cljs.core.conj.call(null,p1__393737_SHARP_,cljs.core.apply.call(null,p2__393738_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__393746);
};
var G__393787 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393787__delegate.call(this, x, y, z, args);
};
G__393787.cljs$lang$maxFixedArity = 3;
G__393787.cljs$lang$applyTo = (function (arglist__393788){
var x = cljs.core.first(arglist__393788);
var y = cljs.core.first(cljs.core.next(arglist__393788));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393788)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393788)));
return G__393787__delegate.call(this, x, y, z, args);
});
return G__393787;
})()
;
G__393780 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__393780__393781.call(this);
case  1 :
return G__393780__393782.call(this,x);
case  2 :
return G__393780__393783.call(this,x,y);
case  3 :
return G__393780__393784.call(this,x,y,z);
default:
return G__393780__393785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__393780.cljs$lang$maxFixedArity = 3;
G__393780.cljs$lang$applyTo = G__393780__393785.cljs$lang$applyTo;
return G__393780;
})()
};
var G__393779 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__393779__delegate.call(this, f, g, h, fs);
};
G__393779.cljs$lang$maxFixedArity = 3;
G__393779.cljs$lang$applyTo = (function (arglist__393789){
var f = cljs.core.first(arglist__393789);
var g = cljs.core.first(cljs.core.next(arglist__393789));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393789)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__393789)));
return G__393779__delegate.call(this, f, g, h, fs);
});
return G__393779;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__393747.call(this,f);
case  2 :
return juxt__393748.call(this,f,g);
case  3 :
return juxt__393749.call(this,f,g,h);
default:
return juxt__393750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__393750.cljs$lang$applyTo;
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
var dorun__393791 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__393794 = cljs.core.next.call(null,coll);
coll = G__393794;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__393792 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____393790 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____393790))
{return (n > 0);
} else
{return and__3546__auto____393790;
}
})()))
{{
var G__393795 = (n - 1);
var G__393796 = cljs.core.next.call(null,coll);
n = G__393795;
coll = G__393796;
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
return dorun__393791.call(this,n);
case  2 :
return dorun__393792.call(this,n,coll);
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
var doall__393797 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__393798 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__393797.call(this,n);
case  2 :
return doall__393798.call(this,n,coll);
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
var matches__393800 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__393800),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__393800),1)))
{return cljs.core.first.call(null,matches__393800);
} else
{return cljs.core.vec.call(null,matches__393800);
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
var matches__393801 = re.exec(s);

if(cljs.core.truth_((matches__393801 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__393801),1)))
{return cljs.core.first.call(null,matches__393801);
} else
{return cljs.core.vec.call(null,matches__393801);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__393802 = cljs.core.re_find.call(null,re,s);
var match_idx__393803 = s.search(re);
var match_str__393804 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__393802))?cljs.core.first.call(null,match_data__393802):match_data__393802);
var post_match__393805 = cljs.core.subs.call(null,s,(match_idx__393803 + cljs.core.count.call(null,match_str__393804)));

if(cljs.core.truth_(match_data__393802))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__393802,re_seq.call(null,re,post_match__393805));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__393807__393808 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___393809 = cljs.core.nth.call(null,vec__393807__393808,0,null);
var flags__393810 = cljs.core.nth.call(null,vec__393807__393808,1,null);
var pattern__393811 = cljs.core.nth.call(null,vec__393807__393808,2,null);

return (new RegExp(pattern__393811,flags__393810));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__393806_SHARP_){
return print_one.call(null,p1__393806_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____393812 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____393812))
{var and__3546__auto____393816 = (function (){var x__450__auto____393813 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____393814 = x__450__auto____393813;

if(cljs.core.truth_(and__3546__auto____393814))
{var and__3546__auto____393815 = x__450__auto____393813.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____393815))
{return cljs.core.not.call(null,x__450__auto____393813.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____393815;
}
} else
{return and__3546__auto____393814;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____393813);
}
})();

if(cljs.core.truth_(and__3546__auto____393816))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____393816;
}
} else
{return and__3546__auto____393812;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____393817 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____393818 = x__450__auto____393817;

if(cljs.core.truth_(and__3546__auto____393818))
{var and__3546__auto____393819 = x__450__auto____393817.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____393819))
{return cljs.core.not.call(null,x__450__auto____393817.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____393819;
}
} else
{return and__3546__auto____393818;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____393817);
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
var first_obj__393820 = cljs.core.first.call(null,objs);
var sb__393821 = (new goog.string.StringBuffer());

var G__393822__393823 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__393822__393823))
{var obj__393824 = cljs.core.first.call(null,G__393822__393823);
var G__393822__393825 = G__393822__393823;

while(true){
if(cljs.core.truth_((obj__393824 === first_obj__393820)))
{} else
{sb__393821.append(" ");
}
var G__393826__393827 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__393824,opts));

if(cljs.core.truth_(G__393826__393827))
{var string__393828 = cljs.core.first.call(null,G__393826__393827);
var G__393826__393829 = G__393826__393827;

while(true){
sb__393821.append(string__393828);
var temp__3698__auto____393830 = cljs.core.next.call(null,G__393826__393829);

if(cljs.core.truth_(temp__3698__auto____393830))
{var G__393826__393831 = temp__3698__auto____393830;

{
var G__393834 = cljs.core.first.call(null,G__393826__393831);
var G__393835 = G__393826__393831;
string__393828 = G__393834;
G__393826__393829 = G__393835;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____393832 = cljs.core.next.call(null,G__393822__393825);

if(cljs.core.truth_(temp__3698__auto____393832))
{var G__393822__393833 = temp__3698__auto____393832;

{
var G__393836 = cljs.core.first.call(null,G__393822__393833);
var G__393837 = G__393822__393833;
obj__393824 = G__393836;
G__393822__393825 = G__393837;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__393821);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__393838 = cljs.core.first.call(null,objs);

var G__393839__393840 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__393839__393840))
{var obj__393841 = cljs.core.first.call(null,G__393839__393840);
var G__393839__393842 = G__393839__393840;

while(true){
if(cljs.core.truth_((obj__393841 === first_obj__393838)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__393843__393844 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__393841,opts));

if(cljs.core.truth_(G__393843__393844))
{var string__393845 = cljs.core.first.call(null,G__393843__393844);
var G__393843__393846 = G__393843__393844;

while(true){
cljs.core.string_print.call(null,string__393845);
var temp__3698__auto____393847 = cljs.core.next.call(null,G__393843__393846);

if(cljs.core.truth_(temp__3698__auto____393847))
{var G__393843__393848 = temp__3698__auto____393847;

{
var G__393851 = cljs.core.first.call(null,G__393843__393848);
var G__393852 = G__393843__393848;
string__393845 = G__393851;
G__393843__393846 = G__393852;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____393849 = cljs.core.next.call(null,G__393839__393842);

if(cljs.core.truth_(temp__3698__auto____393849))
{var G__393839__393850 = temp__3698__auto____393849;

{
var G__393853 = cljs.core.first.call(null,G__393839__393850);
var G__393854 = G__393839__393850;
obj__393841 = G__393853;
G__393839__393842 = G__393854;
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
pr_str.cljs$lang$applyTo = (function (arglist__393855){
var objs = cljs.core.seq( arglist__393855 );;
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
pr.cljs$lang$applyTo = (function (arglist__393856){
var objs = cljs.core.seq( arglist__393856 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__393857){
var objs = cljs.core.seq( arglist__393857 );;
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
println.cljs$lang$applyTo = (function (arglist__393858){
var objs = cljs.core.seq( arglist__393858 );;
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
prn.cljs$lang$applyTo = (function (arglist__393859){
var objs = cljs.core.seq( arglist__393859 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__393860 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__393860,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____393861 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____393861))
{var nspc__393862 = temp__3698__auto____393861;

return cljs.core.str.call(null,nspc__393862,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____393863 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____393863))
{var nspc__393864 = temp__3698__auto____393863;

return cljs.core.str.call(null,nspc__393864,"\/");
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
var pr_pair__393865 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__393865,"{",", ","}",opts,coll);
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
var this__393866 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__393867 = this;
var G__393868__393869 = cljs.core.seq.call(null,this__393867.watches);

if(cljs.core.truth_(G__393868__393869))
{var G__393871__393873 = cljs.core.first.call(null,G__393868__393869);
var vec__393872__393874 = G__393871__393873;
var key__393875 = cljs.core.nth.call(null,vec__393872__393874,0,null);
var f__393876 = cljs.core.nth.call(null,vec__393872__393874,1,null);
var G__393868__393877 = G__393868__393869;

var G__393871__393878 = G__393871__393873;
var G__393868__393879 = G__393868__393877;

while(true){
var vec__393880__393881 = G__393871__393878;
var key__393882 = cljs.core.nth.call(null,vec__393880__393881,0,null);
var f__393883 = cljs.core.nth.call(null,vec__393880__393881,1,null);
var G__393868__393884 = G__393868__393879;

f__393883.call(null,key__393882,this$,oldval,newval);
var temp__3698__auto____393885 = cljs.core.next.call(null,G__393868__393884);

if(cljs.core.truth_(temp__3698__auto____393885))
{var G__393868__393886 = temp__3698__auto____393885;

{
var G__393893 = cljs.core.first.call(null,G__393868__393886);
var G__393894 = G__393868__393886;
G__393871__393878 = G__393893;
G__393868__393879 = G__393894;
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
var this__393887 = this;
return this$.watches = cljs.core.assoc.call(null,this__393887.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__393888 = this;
return this$.watches = cljs.core.dissoc.call(null,this__393888.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__393889 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__393889.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__393890 = this;
return this__393890.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__393891 = this;
return this__393891.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__393892 = this;
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
var atom__393901 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__393902 = (function() { 
var G__393904__delegate = function (x,p__393895){
var map__393896__393897 = p__393895;
var map__393896__393898 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__393896__393897))?cljs.core.apply.call(null,cljs.core.hash_map,map__393896__393897):map__393896__393897);
var validator__393899 = cljs.core.get.call(null,map__393896__393898,"\uFDD0'validator");
var meta__393900 = cljs.core.get.call(null,map__393896__393898,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__393900,validator__393899,null));
};
var G__393904 = function (x,var_args){
var p__393895 = null;
if (goog.isDef(var_args)) {
  p__393895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__393904__delegate.call(this, x, p__393895);
};
G__393904.cljs$lang$maxFixedArity = 1;
G__393904.cljs$lang$applyTo = (function (arglist__393905){
var x = cljs.core.first(arglist__393905);
var p__393895 = cljs.core.rest(arglist__393905);
return G__393904__delegate.call(this, x, p__393895);
});
return G__393904;
})()
;
atom = function(x,var_args){
var p__393895 = var_args;
switch(arguments.length){
case  1 :
return atom__393901.call(this,x);
default:
return atom__393902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__393902.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____393906 = a.validator;

if(cljs.core.truth_(temp__3698__auto____393906))
{var validate__393907 = temp__3698__auto____393906;

if(cljs.core.truth_(validate__393907.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__393908 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__393908,new_value);
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
var swap_BANG___393909 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___393910 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___393911 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___393912 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___393913 = (function() { 
var G__393915__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__393915 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__393915__delegate.call(this, a, f, x, y, z, more);
};
G__393915.cljs$lang$maxFixedArity = 5;
G__393915.cljs$lang$applyTo = (function (arglist__393916){
var a = cljs.core.first(arglist__393916);
var f = cljs.core.first(cljs.core.next(arglist__393916));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__393916)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__393916))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__393916)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__393916)))));
return G__393915__delegate.call(this, a, f, x, y, z, more);
});
return G__393915;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___393909.call(this,a,f);
case  3 :
return swap_BANG___393910.call(this,a,f,x);
case  4 :
return swap_BANG___393911.call(this,a,f,x,y);
case  5 :
return swap_BANG___393912.call(this,a,f,x,y,z);
default:
return swap_BANG___393913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___393913.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__393917){
var iref = cljs.core.first(arglist__393917);
var f = cljs.core.first(cljs.core.next(arglist__393917));
var args = cljs.core.rest(cljs.core.next(arglist__393917));
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
var gensym__393918 = (function (){
return gensym.call(null,"G__");
});
var gensym__393919 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__393918.call(this);
case  1 :
return gensym__393919.call(this,prefix_string);
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
var this__393921 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__393921.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__393922 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__393922.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__393922.state,this__393922.f);
}
return cljs.core.deref.call(null,this__393922.state);
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
delay.cljs$lang$applyTo = (function (arglist__393923){
var body = cljs.core.seq( arglist__393923 );;
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
var map__393924__393925 = options;
var map__393924__393926 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__393924__393925))?cljs.core.apply.call(null,cljs.core.hash_map,map__393924__393925):map__393924__393925);
var keywordize_keys__393927 = cljs.core.get.call(null,map__393924__393926,"\uFDD0'keywordize-keys");
var keyfn__393928 = (cljs.core.truth_(keywordize_keys__393927)?cljs.core.keyword:cljs.core.str);
var f__393934 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____393933 = (function iter__393929(s__393930){
return (new cljs.core.LazySeq(null,false,(function (){
var s__393930__393931 = s__393930;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__393930__393931)))
{var k__393932 = cljs.core.first.call(null,s__393930__393931);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__393928.call(null,k__393932),thisfn.call(null,(x[k__393932]))]),iter__393929.call(null,cljs.core.rest.call(null,s__393930__393931)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____393933.call(null,cljs.core.js_keys.call(null,x));
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

return f__393934.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__393935){
var x = cljs.core.first(arglist__393935);
var options = cljs.core.rest(arglist__393935);
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
var mem__393936 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__393940__delegate = function (args){
var temp__3695__auto____393937 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__393936),args);

if(cljs.core.truth_(temp__3695__auto____393937))
{var v__393938 = temp__3695__auto____393937;

return v__393938;
} else
{var ret__393939 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__393936,cljs.core.assoc,args,ret__393939);
return ret__393939;
}
};
var G__393940 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__393940__delegate.call(this, args);
};
G__393940.cljs$lang$maxFixedArity = 0;
G__393940.cljs$lang$applyTo = (function (arglist__393941){
var args = cljs.core.seq( arglist__393941 );;
return G__393940__delegate.call(this, args);
});
return G__393940;
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
var trampoline__393943 = (function (f){
while(true){
var ret__393942 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__393942)))
{{
var G__393946 = ret__393942;
f = G__393946;
continue;
}
} else
{return ret__393942;
}
break;
}
});
var trampoline__393944 = (function() { 
var G__393947__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__393947 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__393947__delegate.call(this, f, args);
};
G__393947.cljs$lang$maxFixedArity = 1;
G__393947.cljs$lang$applyTo = (function (arglist__393948){
var f = cljs.core.first(arglist__393948);
var args = cljs.core.rest(arglist__393948);
return G__393947__delegate.call(this, f, args);
});
return G__393947;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__393943.call(this,f);
default:
return trampoline__393944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__393944.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__393949 = (function (){
return rand.call(null,1);
});
var rand__393950 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__393949.call(this);
case  1 :
return rand__393950.call(this,n);
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
var k__393952 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__393952,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__393952,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___393961 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___393962 = (function (h,child,parent){
var or__3548__auto____393953 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____393953))
{return or__3548__auto____393953;
} else
{var or__3548__auto____393954 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____393954))
{return or__3548__auto____393954;
} else
{var and__3546__auto____393955 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____393955))
{var and__3546__auto____393956 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____393956))
{var and__3546__auto____393957 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____393957))
{var ret__393958 = true;
var i__393959 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____393960 = cljs.core.not.call(null,ret__393958);

if(cljs.core.truth_(or__3548__auto____393960))
{return or__3548__auto____393960;
} else
{return cljs.core._EQ_.call(null,i__393959,cljs.core.count.call(null,parent));
}
})()))
{return ret__393958;
} else
{{
var G__393964 = isa_QMARK_.call(null,h,child.call(null,i__393959),parent.call(null,i__393959));
var G__393965 = (i__393959 + 1);
ret__393958 = G__393964;
i__393959 = G__393965;
continue;
}
}
break;
}
} else
{return and__3546__auto____393957;
}
} else
{return and__3546__auto____393956;
}
} else
{return and__3546__auto____393955;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___393961.call(this,h,child);
case  3 :
return isa_QMARK___393962.call(this,h,child,parent);
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
var parents__393966 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__393967 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__393966.call(this,h);
case  2 :
return parents__393967.call(this,h,tag);
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
var ancestors__393969 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__393970 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__393969.call(this,h);
case  2 :
return ancestors__393970.call(this,h,tag);
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
var descendants__393972 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__393973 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__393972.call(this,h);
case  2 :
return descendants__393973.call(this,h,tag);
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
var derive__393983 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__393984 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__393978 = "\uFDD0'parents".call(null,h);
var td__393979 = "\uFDD0'descendants".call(null,h);
var ta__393980 = "\uFDD0'ancestors".call(null,h);
var tf__393981 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____393982 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__393978.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__393980.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__393980.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__393978,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__393981.call(null,"\uFDD0'ancestors".call(null,h),tag,td__393979,parent,ta__393980),"\uFDD0'descendants":tf__393981.call(null,"\uFDD0'descendants".call(null,h),parent,ta__393980,tag,td__393979)});
})());

if(cljs.core.truth_(or__3548__auto____393982))
{return or__3548__auto____393982;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__393983.call(this,h,tag);
case  3 :
return derive__393984.call(this,h,tag,parent);
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
var underive__393990 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__393991 = (function (h,tag,parent){
var parentMap__393986 = "\uFDD0'parents".call(null,h);
var childsParents__393987 = (cljs.core.truth_(parentMap__393986.call(null,tag))?cljs.core.disj.call(null,parentMap__393986.call(null,tag),parent):cljs.core.set([]));
var newParents__393988 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__393987))?cljs.core.assoc.call(null,parentMap__393986,tag,childsParents__393987):cljs.core.dissoc.call(null,parentMap__393986,tag));
var deriv_seq__393989 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__393975_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__393975_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__393975_SHARP_),cljs.core.second.call(null,p1__393975_SHARP_)));
}),cljs.core.seq.call(null,newParents__393988)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__393986.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__393976_SHARP_,p2__393977_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__393976_SHARP_,p2__393977_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__393989));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__393990.call(this,h,tag);
case  3 :
return underive__393991.call(this,h,tag,parent);
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
var xprefs__393993 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____393995 = (cljs.core.truth_((function (){var and__3546__auto____393994 = xprefs__393993;

if(cljs.core.truth_(and__3546__auto____393994))
{return xprefs__393993.call(null,y);
} else
{return and__3546__auto____393994;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____393995))
{return or__3548__auto____393995;
} else
{var or__3548__auto____393997 = (function (){var ps__393996 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__393996) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__393996),prefer_table)))
{} else
{}
{
var G__394000 = cljs.core.rest.call(null,ps__393996);
ps__393996 = G__394000;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____393997))
{return or__3548__auto____393997;
} else
{var or__3548__auto____393999 = (function (){var ps__393998 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__393998) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__393998),y,prefer_table)))
{} else
{}
{
var G__394001 = cljs.core.rest.call(null,ps__393998);
ps__393998 = G__394001;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____393999))
{return or__3548__auto____393999;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____394002 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____394002))
{return or__3548__auto____394002;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__394011 = cljs.core.reduce.call(null,(function (be,p__394003){
var vec__394004__394005 = p__394003;
var k__394006 = cljs.core.nth.call(null,vec__394004__394005,0,null);
var ___394007 = cljs.core.nth.call(null,vec__394004__394005,1,null);
var e__394008 = vec__394004__394005;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__394006)))
{var be2__394010 = (cljs.core.truth_((function (){var or__3548__auto____394009 = (be === null);

if(cljs.core.truth_(or__3548__auto____394009))
{return or__3548__auto____394009;
} else
{return cljs.core.dominates.call(null,k__394006,cljs.core.first.call(null,be),prefer_table);
}
})())?e__394008:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__394010),k__394006,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__394006," and ",cljs.core.first.call(null,be2__394010),", and neither is preferred")));
}
return be2__394010;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__394011))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__394011));
return cljs.core.second.call(null,best_entry__394011);
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
if(cljs.core.truth_((function (){var and__3546__auto____394012 = mf;

if(cljs.core.truth_(and__3546__auto____394012))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____394012;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____394013 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____394013))
{return or__3548__auto____394013;
} else
{var or__3548__auto____394014 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____394014))
{return or__3548__auto____394014;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____394015 = mf;

if(cljs.core.truth_(and__3546__auto____394015))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____394015;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____394016 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____394016))
{return or__3548__auto____394016;
} else
{var or__3548__auto____394017 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____394017))
{return or__3548__auto____394017;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____394018 = mf;

if(cljs.core.truth_(and__3546__auto____394018))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____394018;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____394019 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____394019))
{return or__3548__auto____394019;
} else
{var or__3548__auto____394020 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____394020))
{return or__3548__auto____394020;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____394021 = mf;

if(cljs.core.truth_(and__3546__auto____394021))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____394021;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____394022 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____394022))
{return or__3548__auto____394022;
} else
{var or__3548__auto____394023 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____394023))
{return or__3548__auto____394023;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____394024 = mf;

if(cljs.core.truth_(and__3546__auto____394024))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____394024;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____394025 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____394025))
{return or__3548__auto____394025;
} else
{var or__3548__auto____394026 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____394026))
{return or__3548__auto____394026;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____394027 = mf;

if(cljs.core.truth_(and__3546__auto____394027))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____394027;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____394028 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____394028))
{return or__3548__auto____394028;
} else
{var or__3548__auto____394029 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____394029))
{return or__3548__auto____394029;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____394030 = mf;

if(cljs.core.truth_(and__3546__auto____394030))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____394030;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____394031 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____394031))
{return or__3548__auto____394031;
} else
{var or__3548__auto____394032 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____394032))
{return or__3548__auto____394032;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____394033 = mf;

if(cljs.core.truth_(and__3546__auto____394033))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____394033;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____394034 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____394034))
{return or__3548__auto____394034;
} else
{var or__3548__auto____394035 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____394035))
{return or__3548__auto____394035;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__394036 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__394037 = cljs.core._get_method.call(null,mf,dispatch_val__394036);

if(cljs.core.truth_(target_fn__394037))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__394036)));
}
return cljs.core.apply.call(null,target_fn__394037,args);
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
var this__394038 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__394039 = this;
cljs.core.swap_BANG_.call(null,this__394039.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__394039.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__394039.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__394039.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__394040 = this;
cljs.core.swap_BANG_.call(null,this__394040.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__394040.method_cache,this__394040.method_table,this__394040.cached_hierarchy,this__394040.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__394041 = this;
cljs.core.swap_BANG_.call(null,this__394041.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__394041.method_cache,this__394041.method_table,this__394041.cached_hierarchy,this__394041.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__394042 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__394042.cached_hierarchy),cljs.core.deref.call(null,this__394042.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__394042.method_cache,this__394042.method_table,this__394042.cached_hierarchy,this__394042.hierarchy);
}
var temp__3695__auto____394043 = cljs.core.deref.call(null,this__394042.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____394043))
{var target_fn__394044 = temp__3695__auto____394043;

return target_fn__394044;
} else
{var temp__3695__auto____394045 = cljs.core.find_and_cache_best_method.call(null,this__394042.name,dispatch_val,this__394042.hierarchy,this__394042.method_table,this__394042.prefer_table,this__394042.method_cache,this__394042.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____394045))
{var target_fn__394046 = temp__3695__auto____394045;

return target_fn__394046;
} else
{return cljs.core.deref.call(null,this__394042.method_table).call(null,this__394042.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__394047 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__394047.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__394047.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__394047.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__394047.method_cache,this__394047.method_table,this__394047.cached_hierarchy,this__394047.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__394048 = this;
return cljs.core.deref.call(null,this__394048.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__394049 = this;
return cljs.core.deref.call(null,this__394049.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__394050 = this;
return cljs.core.do_dispatch.call(null,mf,this__394050.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__394051__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__394051 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__394051__delegate.call(this, _, args);
};
G__394051.cljs$lang$maxFixedArity = 1;
G__394051.cljs$lang$applyTo = (function (arglist__394052){
var _ = cljs.core.first(arglist__394052);
var args = cljs.core.rest(arglist__394052);
return G__394051__delegate.call(this, _, args);
});
return G__394051;
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
