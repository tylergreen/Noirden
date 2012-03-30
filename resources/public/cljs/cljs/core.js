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
var or__3548__auto____151324 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____151324))
{return or__3548__auto____151324;
} else
{var or__3548__auto____151325 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____151325))
{return or__3548__auto____151325;
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
var _invoke__151389 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____151326 = this$;

if(cljs.core.truth_(and__3546__auto____151326))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151326;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____151327 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151327))
{return or__3548__auto____151327;
} else
{var or__3548__auto____151328 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151328))
{return or__3548__auto____151328;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__151390 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____151329 = this$;

if(cljs.core.truth_(and__3546__auto____151329))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151329;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____151330 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151330))
{return or__3548__auto____151330;
} else
{var or__3548__auto____151331 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151331))
{return or__3548__auto____151331;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__151391 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____151332 = this$;

if(cljs.core.truth_(and__3546__auto____151332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____151333 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151333))
{return or__3548__auto____151333;
} else
{var or__3548__auto____151334 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151334))
{return or__3548__auto____151334;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__151392 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____151335 = this$;

if(cljs.core.truth_(and__3546__auto____151335))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151335;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____151336 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151336))
{return or__3548__auto____151336;
} else
{var or__3548__auto____151337 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151337))
{return or__3548__auto____151337;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__151393 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____151338 = this$;

if(cljs.core.truth_(and__3546__auto____151338))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151338;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____151339 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151339))
{return or__3548__auto____151339;
} else
{var or__3548__auto____151340 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151340))
{return or__3548__auto____151340;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__151394 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____151341 = this$;

if(cljs.core.truth_(and__3546__auto____151341))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151341;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____151342 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151342))
{return or__3548__auto____151342;
} else
{var or__3548__auto____151343 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151343))
{return or__3548__auto____151343;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__151395 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____151344 = this$;

if(cljs.core.truth_(and__3546__auto____151344))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151344;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____151345 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151345))
{return or__3548__auto____151345;
} else
{var or__3548__auto____151346 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151346))
{return or__3548__auto____151346;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__151396 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____151347 = this$;

if(cljs.core.truth_(and__3546__auto____151347))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151347;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____151348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151348))
{return or__3548__auto____151348;
} else
{var or__3548__auto____151349 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151349))
{return or__3548__auto____151349;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__151397 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____151350 = this$;

if(cljs.core.truth_(and__3546__auto____151350))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151350;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____151351 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151351))
{return or__3548__auto____151351;
} else
{var or__3548__auto____151352 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151352))
{return or__3548__auto____151352;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__151398 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____151353 = this$;

if(cljs.core.truth_(and__3546__auto____151353))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151353;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____151354 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151354))
{return or__3548__auto____151354;
} else
{var or__3548__auto____151355 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151355))
{return or__3548__auto____151355;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__151399 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____151356 = this$;

if(cljs.core.truth_(and__3546__auto____151356))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151356;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____151357 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151357))
{return or__3548__auto____151357;
} else
{var or__3548__auto____151358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151358))
{return or__3548__auto____151358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__151400 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____151359 = this$;

if(cljs.core.truth_(and__3546__auto____151359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____151360 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151360))
{return or__3548__auto____151360;
} else
{var or__3548__auto____151361 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151361))
{return or__3548__auto____151361;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__151401 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____151362 = this$;

if(cljs.core.truth_(and__3546__auto____151362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____151363 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151363))
{return or__3548__auto____151363;
} else
{var or__3548__auto____151364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151364))
{return or__3548__auto____151364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__151402 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____151365 = this$;

if(cljs.core.truth_(and__3546__auto____151365))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151365;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____151366 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151366))
{return or__3548__auto____151366;
} else
{var or__3548__auto____151367 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151367))
{return or__3548__auto____151367;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__151403 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____151368 = this$;

if(cljs.core.truth_(and__3546__auto____151368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____151369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151369))
{return or__3548__auto____151369;
} else
{var or__3548__auto____151370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151370))
{return or__3548__auto____151370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__151404 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____151371 = this$;

if(cljs.core.truth_(and__3546__auto____151371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____151372 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151372))
{return or__3548__auto____151372;
} else
{var or__3548__auto____151373 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151373))
{return or__3548__auto____151373;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__151405 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____151374 = this$;

if(cljs.core.truth_(and__3546__auto____151374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____151375 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151375))
{return or__3548__auto____151375;
} else
{var or__3548__auto____151376 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151376))
{return or__3548__auto____151376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__151406 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____151377 = this$;

if(cljs.core.truth_(and__3546__auto____151377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____151378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151378))
{return or__3548__auto____151378;
} else
{var or__3548__auto____151379 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151379))
{return or__3548__auto____151379;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__151407 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____151380 = this$;

if(cljs.core.truth_(and__3546__auto____151380))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151380;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____151381 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151381))
{return or__3548__auto____151381;
} else
{var or__3548__auto____151382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151382))
{return or__3548__auto____151382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__151408 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____151383 = this$;

if(cljs.core.truth_(and__3546__auto____151383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____151384 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151384))
{return or__3548__auto____151384;
} else
{var or__3548__auto____151385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151385))
{return or__3548__auto____151385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__151409 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____151386 = this$;

if(cljs.core.truth_(and__3546__auto____151386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____151386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____151387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151387))
{return or__3548__auto____151387;
} else
{var or__3548__auto____151388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____151388))
{return or__3548__auto____151388;
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
return _invoke__151389.call(this,this$);
case  2 :
return _invoke__151390.call(this,this$,a);
case  3 :
return _invoke__151391.call(this,this$,a,b);
case  4 :
return _invoke__151392.call(this,this$,a,b,c);
case  5 :
return _invoke__151393.call(this,this$,a,b,c,d);
case  6 :
return _invoke__151394.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__151395.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__151396.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__151397.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__151398.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__151399.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__151400.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__151401.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__151402.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__151403.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__151404.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__151405.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__151406.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__151407.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__151408.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__151409.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____151411 = coll;

if(cljs.core.truth_(and__3546__auto____151411))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____151411;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____151412 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151412))
{return or__3548__auto____151412;
} else
{var or__3548__auto____151413 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____151413))
{return or__3548__auto____151413;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____151414 = coll;

if(cljs.core.truth_(and__3546__auto____151414))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____151414;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____151415 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151415))
{return or__3548__auto____151415;
} else
{var or__3548__auto____151416 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____151416))
{return or__3548__auto____151416;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____151417 = coll;

if(cljs.core.truth_(and__3546__auto____151417))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____151417;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____151418 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151418))
{return or__3548__auto____151418;
} else
{var or__3548__auto____151419 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____151419))
{return or__3548__auto____151419;
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
var _nth__151426 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____151420 = coll;

if(cljs.core.truth_(and__3546__auto____151420))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____151420;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____151421 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151421))
{return or__3548__auto____151421;
} else
{var or__3548__auto____151422 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____151422))
{return or__3548__auto____151422;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__151427 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____151423 = coll;

if(cljs.core.truth_(and__3546__auto____151423))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____151423;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____151424 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151424))
{return or__3548__auto____151424;
} else
{var or__3548__auto____151425 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____151425))
{return or__3548__auto____151425;
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
return _nth__151426.call(this,coll,n);
case  3 :
return _nth__151427.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____151429 = coll;

if(cljs.core.truth_(and__3546__auto____151429))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____151429;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____151430 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151430))
{return or__3548__auto____151430;
} else
{var or__3548__auto____151431 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____151431))
{return or__3548__auto____151431;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____151432 = coll;

if(cljs.core.truth_(and__3546__auto____151432))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____151432;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____151433 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151433))
{return or__3548__auto____151433;
} else
{var or__3548__auto____151434 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____151434))
{return or__3548__auto____151434;
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
var _lookup__151441 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____151435 = o;

if(cljs.core.truth_(and__3546__auto____151435))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____151435;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____151436 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151436))
{return or__3548__auto____151436;
} else
{var or__3548__auto____151437 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____151437))
{return or__3548__auto____151437;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__151442 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____151438 = o;

if(cljs.core.truth_(and__3546__auto____151438))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____151438;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____151439 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151439))
{return or__3548__auto____151439;
} else
{var or__3548__auto____151440 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____151440))
{return or__3548__auto____151440;
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
return _lookup__151441.call(this,o,k);
case  3 :
return _lookup__151442.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____151444 = coll;

if(cljs.core.truth_(and__3546__auto____151444))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____151444;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____151445 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151445))
{return or__3548__auto____151445;
} else
{var or__3548__auto____151446 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____151446))
{return or__3548__auto____151446;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____151447 = coll;

if(cljs.core.truth_(and__3546__auto____151447))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____151447;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____151448 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151448))
{return or__3548__auto____151448;
} else
{var or__3548__auto____151449 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____151449))
{return or__3548__auto____151449;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____151450 = coll;

if(cljs.core.truth_(and__3546__auto____151450))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____151450;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____151451 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151451))
{return or__3548__auto____151451;
} else
{var or__3548__auto____151452 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____151452))
{return or__3548__auto____151452;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____151453 = coll;

if(cljs.core.truth_(and__3546__auto____151453))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____151453;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____151454 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151454))
{return or__3548__auto____151454;
} else
{var or__3548__auto____151455 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____151455))
{return or__3548__auto____151455;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____151456 = coll;

if(cljs.core.truth_(and__3546__auto____151456))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____151456;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____151457 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151457))
{return or__3548__auto____151457;
} else
{var or__3548__auto____151458 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____151458))
{return or__3548__auto____151458;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____151459 = coll;

if(cljs.core.truth_(and__3546__auto____151459))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____151459;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____151460 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151460))
{return or__3548__auto____151460;
} else
{var or__3548__auto____151461 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____151461))
{return or__3548__auto____151461;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____151462 = coll;

if(cljs.core.truth_(and__3546__auto____151462))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____151462;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____151463 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151463))
{return or__3548__auto____151463;
} else
{var or__3548__auto____151464 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____151464))
{return or__3548__auto____151464;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____151465 = o;

if(cljs.core.truth_(and__3546__auto____151465))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____151465;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____151466 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151466))
{return or__3548__auto____151466;
} else
{var or__3548__auto____151467 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____151467))
{return or__3548__auto____151467;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____151468 = o;

if(cljs.core.truth_(and__3546__auto____151468))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____151468;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____151469 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151469))
{return or__3548__auto____151469;
} else
{var or__3548__auto____151470 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____151470))
{return or__3548__auto____151470;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____151471 = o;

if(cljs.core.truth_(and__3546__auto____151471))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____151471;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____151472 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151472))
{return or__3548__auto____151472;
} else
{var or__3548__auto____151473 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____151473))
{return or__3548__auto____151473;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____151474 = o;

if(cljs.core.truth_(and__3546__auto____151474))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____151474;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____151475 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151475))
{return or__3548__auto____151475;
} else
{var or__3548__auto____151476 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____151476))
{return or__3548__auto____151476;
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
var _reduce__151483 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____151477 = coll;

if(cljs.core.truth_(and__3546__auto____151477))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____151477;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____151478 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151478))
{return or__3548__auto____151478;
} else
{var or__3548__auto____151479 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____151479))
{return or__3548__auto____151479;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__151484 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____151480 = coll;

if(cljs.core.truth_(and__3546__auto____151480))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____151480;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____151481 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____151481))
{return or__3548__auto____151481;
} else
{var or__3548__auto____151482 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____151482))
{return or__3548__auto____151482;
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
return _reduce__151483.call(this,coll,f);
case  3 :
return _reduce__151484.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____151486 = o;

if(cljs.core.truth_(and__3546__auto____151486))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____151486;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____151487 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151487))
{return or__3548__auto____151487;
} else
{var or__3548__auto____151488 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____151488))
{return or__3548__auto____151488;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____151489 = o;

if(cljs.core.truth_(and__3546__auto____151489))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____151489;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____151490 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151490))
{return or__3548__auto____151490;
} else
{var or__3548__auto____151491 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____151491))
{return or__3548__auto____151491;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____151492 = o;

if(cljs.core.truth_(and__3546__auto____151492))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____151492;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____151493 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151493))
{return or__3548__auto____151493;
} else
{var or__3548__auto____151494 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____151494))
{return or__3548__auto____151494;
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
if(cljs.core.truth_((function (){var and__3546__auto____151495 = o;

if(cljs.core.truth_(and__3546__auto____151495))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____151495;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____151496 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____151496))
{return or__3548__auto____151496;
} else
{var or__3548__auto____151497 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____151497))
{return or__3548__auto____151497;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____151498 = d;

if(cljs.core.truth_(and__3546__auto____151498))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____151498;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____151499 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____151499))
{return or__3548__auto____151499;
} else
{var or__3548__auto____151500 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____151500))
{return or__3548__auto____151500;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____151501 = this$;

if(cljs.core.truth_(and__3546__auto____151501))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____151501;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____151502 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151502))
{return or__3548__auto____151502;
} else
{var or__3548__auto____151503 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____151503))
{return or__3548__auto____151503;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____151504 = this$;

if(cljs.core.truth_(and__3546__auto____151504))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____151504;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____151505 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151505))
{return or__3548__auto____151505;
} else
{var or__3548__auto____151506 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____151506))
{return or__3548__auto____151506;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____151507 = this$;

if(cljs.core.truth_(and__3546__auto____151507))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____151507;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____151508 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____151508))
{return or__3548__auto____151508;
} else
{var or__3548__auto____151509 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____151509))
{return or__3548__auto____151509;
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
var G__151510 = null;
var G__151510__151511 = (function (o,k){
return null;
});
var G__151510__151512 = (function (o,k,not_found){
return not_found;
});
G__151510 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__151510__151511.call(this,o,k);
case  3 :
return G__151510__151512.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151510;
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
var G__151514 = null;
var G__151514__151515 = (function (_,f){
return f.call(null);
});
var G__151514__151516 = (function (_,f,start){
return start;
});
G__151514 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__151514__151515.call(this,_,f);
case  3 :
return G__151514__151516.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151514;
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
var G__151518 = null;
var G__151518__151519 = (function (_,n){
return null;
});
var G__151518__151520 = (function (_,n,not_found){
return not_found;
});
G__151518 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__151518__151519.call(this,_,n);
case  3 :
return G__151518__151520.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151518;
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
var ci_reduce__151528 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__151522 = cljs.core._nth.call(null,cicoll,0);
var n__151523 = 1;

while(true){
if(cljs.core.truth_((n__151523 < cljs.core._count.call(null,cicoll))))
{{
var G__151532 = f.call(null,val__151522,cljs.core._nth.call(null,cicoll,n__151523));
var G__151533 = (n__151523 + 1);
val__151522 = G__151532;
n__151523 = G__151533;
continue;
}
} else
{return val__151522;
}
break;
}
}
});
var ci_reduce__151529 = (function (cicoll,f,val){
var val__151524 = val;
var n__151525 = 0;

while(true){
if(cljs.core.truth_((n__151525 < cljs.core._count.call(null,cicoll))))
{{
var G__151534 = f.call(null,val__151524,cljs.core._nth.call(null,cicoll,n__151525));
var G__151535 = (n__151525 + 1);
val__151524 = G__151534;
n__151525 = G__151535;
continue;
}
} else
{return val__151524;
}
break;
}
});
var ci_reduce__151530 = (function (cicoll,f,val,idx){
var val__151526 = val;
var n__151527 = idx;

while(true){
if(cljs.core.truth_((n__151527 < cljs.core._count.call(null,cicoll))))
{{
var G__151536 = f.call(null,val__151526,cljs.core._nth.call(null,cicoll,n__151527));
var G__151537 = (n__151527 + 1);
val__151526 = G__151536;
n__151527 = G__151537;
continue;
}
} else
{return val__151526;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__151528.call(this,cicoll,f);
case  3 :
return ci_reduce__151529.call(this,cicoll,f,val);
case  4 :
return ci_reduce__151530.call(this,cicoll,f,val,idx);
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
var this__151538 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__151551 = null;
var G__151551__151552 = (function (_,f){
var this__151539 = this;
return cljs.core.ci_reduce.call(null,this__151539.a,f,(this__151539.a[this__151539.i]),(this__151539.i + 1));
});
var G__151551__151553 = (function (_,f,start){
var this__151540 = this;
return cljs.core.ci_reduce.call(null,this__151540.a,f,start,this__151540.i);
});
G__151551 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__151551__151552.call(this,_,f);
case  3 :
return G__151551__151553.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151551;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__151541 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__151542 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__151555 = null;
var G__151555__151556 = (function (coll,n){
var this__151543 = this;
var i__151544 = (n + this__151543.i);

if(cljs.core.truth_((i__151544 < this__151543.a.length)))
{return (this__151543.a[i__151544]);
} else
{return null;
}
});
var G__151555__151557 = (function (coll,n,not_found){
var this__151545 = this;
var i__151546 = (n + this__151545.i);

if(cljs.core.truth_((i__151546 < this__151545.a.length)))
{return (this__151545.a[i__151546]);
} else
{return not_found;
}
});
G__151555 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__151555__151556.call(this,coll,n);
case  3 :
return G__151555__151557.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151555;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__151547 = this;
return (this__151547.a.length - this__151547.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__151548 = this;
return (this__151548.a[this__151548.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__151549 = this;
if(cljs.core.truth_(((this__151549.i + 1) < this__151549.a.length)))
{return (new cljs.core.IndexedSeq(this__151549.a,(this__151549.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__151550 = this;
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
var G__151559 = null;
var G__151559__151560 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__151559__151561 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__151559 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__151559__151560.call(this,array,f);
case  3 :
return G__151559__151561.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151559;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__151563 = null;
var G__151563__151564 = (function (array,k){
return (array[k]);
});
var G__151563__151565 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__151563 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__151563__151564.call(this,array,k);
case  3 :
return G__151563__151565.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151563;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__151567 = null;
var G__151567__151568 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__151567__151569 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__151567 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__151567__151568.call(this,array,n);
case  3 :
return G__151567__151569.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151567;
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
var temp__3698__auto____151571 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____151571))
{var s__151572 = temp__3698__auto____151571;

return cljs.core._first.call(null,s__151572);
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
var G__151573 = cljs.core.next.call(null,s);
s = G__151573;
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
var s__151574 = cljs.core.seq.call(null,x);
var n__151575 = 0;

while(true){
if(cljs.core.truth_(s__151574))
{{
var G__151576 = cljs.core.next.call(null,s__151574);
var G__151577 = (n__151575 + 1);
s__151574 = G__151576;
n__151575 = G__151577;
continue;
}
} else
{return n__151575;
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
var conj__151578 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__151579 = (function() { 
var G__151581__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__151582 = conj.call(null,coll,x);
var G__151583 = cljs.core.first.call(null,xs);
var G__151584 = cljs.core.next.call(null,xs);
coll = G__151582;
x = G__151583;
xs = G__151584;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__151581 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151581__delegate.call(this, coll, x, xs);
};
G__151581.cljs$lang$maxFixedArity = 2;
G__151581.cljs$lang$applyTo = (function (arglist__151585){
var coll = cljs.core.first(arglist__151585);
var x = cljs.core.first(cljs.core.next(arglist__151585));
var xs = cljs.core.rest(cljs.core.next(arglist__151585));
return G__151581__delegate.call(this, coll, x, xs);
});
return G__151581;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__151578.call(this,coll,x);
default:
return conj__151579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__151579.cljs$lang$applyTo;
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
var nth__151586 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__151587 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__151586.call(this,coll,n);
case  3 :
return nth__151587.call(this,coll,n,not_found);
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
var get__151589 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__151590 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__151589.call(this,o,k);
case  3 :
return get__151590.call(this,o,k,not_found);
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
var assoc__151593 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__151594 = (function() { 
var G__151596__delegate = function (coll,k,v,kvs){
while(true){
var ret__151592 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__151597 = ret__151592;
var G__151598 = cljs.core.first.call(null,kvs);
var G__151599 = cljs.core.second.call(null,kvs);
var G__151600 = cljs.core.nnext.call(null,kvs);
coll = G__151597;
k = G__151598;
v = G__151599;
kvs = G__151600;
continue;
}
} else
{return ret__151592;
}
break;
}
};
var G__151596 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__151596__delegate.call(this, coll, k, v, kvs);
};
G__151596.cljs$lang$maxFixedArity = 3;
G__151596.cljs$lang$applyTo = (function (arglist__151601){
var coll = cljs.core.first(arglist__151601);
var k = cljs.core.first(cljs.core.next(arglist__151601));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__151601)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__151601)));
return G__151596__delegate.call(this, coll, k, v, kvs);
});
return G__151596;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__151593.call(this,coll,k,v);
default:
return assoc__151594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__151594.cljs$lang$applyTo;
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
var dissoc__151603 = (function (coll){
return coll;
});
var dissoc__151604 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__151605 = (function() { 
var G__151607__delegate = function (coll,k,ks){
while(true){
var ret__151602 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__151608 = ret__151602;
var G__151609 = cljs.core.first.call(null,ks);
var G__151610 = cljs.core.next.call(null,ks);
coll = G__151608;
k = G__151609;
ks = G__151610;
continue;
}
} else
{return ret__151602;
}
break;
}
};
var G__151607 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151607__delegate.call(this, coll, k, ks);
};
G__151607.cljs$lang$maxFixedArity = 2;
G__151607.cljs$lang$applyTo = (function (arglist__151611){
var coll = cljs.core.first(arglist__151611);
var k = cljs.core.first(cljs.core.next(arglist__151611));
var ks = cljs.core.rest(cljs.core.next(arglist__151611));
return G__151607__delegate.call(this, coll, k, ks);
});
return G__151607;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__151603.call(this,coll);
case  2 :
return dissoc__151604.call(this,coll,k);
default:
return dissoc__151605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__151605.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____151612 = o;

if(cljs.core.truth_((function (){var and__3546__auto____151613 = x__450__auto____151612;

if(cljs.core.truth_(and__3546__auto____151613))
{var and__3546__auto____151614 = x__450__auto____151612.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____151614))
{return cljs.core.not.call(null,x__450__auto____151612.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____151614;
}
} else
{return and__3546__auto____151613;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____151612);
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
var disj__151616 = (function (coll){
return coll;
});
var disj__151617 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__151618 = (function() { 
var G__151620__delegate = function (coll,k,ks){
while(true){
var ret__151615 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__151621 = ret__151615;
var G__151622 = cljs.core.first.call(null,ks);
var G__151623 = cljs.core.next.call(null,ks);
coll = G__151621;
k = G__151622;
ks = G__151623;
continue;
}
} else
{return ret__151615;
}
break;
}
};
var G__151620 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151620__delegate.call(this, coll, k, ks);
};
G__151620.cljs$lang$maxFixedArity = 2;
G__151620.cljs$lang$applyTo = (function (arglist__151624){
var coll = cljs.core.first(arglist__151624);
var k = cljs.core.first(cljs.core.next(arglist__151624));
var ks = cljs.core.rest(cljs.core.next(arglist__151624));
return G__151620__delegate.call(this, coll, k, ks);
});
return G__151620;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__151616.call(this,coll);
case  2 :
return disj__151617.call(this,coll,k);
default:
return disj__151618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__151618.cljs$lang$applyTo;
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
{var x__450__auto____151625 = x;

if(cljs.core.truth_((function (){var and__3546__auto____151626 = x__450__auto____151625;

if(cljs.core.truth_(and__3546__auto____151626))
{var and__3546__auto____151627 = x__450__auto____151625.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____151627))
{return cljs.core.not.call(null,x__450__auto____151625.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____151627;
}
} else
{return and__3546__auto____151626;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____151625);
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
{var x__450__auto____151628 = x;

if(cljs.core.truth_((function (){var and__3546__auto____151629 = x__450__auto____151628;

if(cljs.core.truth_(and__3546__auto____151629))
{var and__3546__auto____151630 = x__450__auto____151628.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____151630))
{return cljs.core.not.call(null,x__450__auto____151628.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____151630;
}
} else
{return and__3546__auto____151629;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____151628);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____151631 = x;

if(cljs.core.truth_((function (){var and__3546__auto____151632 = x__450__auto____151631;

if(cljs.core.truth_(and__3546__auto____151632))
{var and__3546__auto____151633 = x__450__auto____151631.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____151633))
{return cljs.core.not.call(null,x__450__auto____151631.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____151633;
}
} else
{return and__3546__auto____151632;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____151631);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____151634 = x;

if(cljs.core.truth_((function (){var and__3546__auto____151635 = x__450__auto____151634;

if(cljs.core.truth_(and__3546__auto____151635))
{var and__3546__auto____151636 = x__450__auto____151634.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____151636))
{return cljs.core.not.call(null,x__450__auto____151634.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____151636;
}
} else
{return and__3546__auto____151635;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____151634);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____151637 = x;

if(cljs.core.truth_((function (){var and__3546__auto____151638 = x__450__auto____151637;

if(cljs.core.truth_(and__3546__auto____151638))
{var and__3546__auto____151639 = x__450__auto____151637.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____151639))
{return cljs.core.not.call(null,x__450__auto____151637.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____151639;
}
} else
{return and__3546__auto____151638;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____151637);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____151640 = x;

if(cljs.core.truth_((function (){var and__3546__auto____151641 = x__450__auto____151640;

if(cljs.core.truth_(and__3546__auto____151641))
{var and__3546__auto____151642 = x__450__auto____151640.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____151642))
{return cljs.core.not.call(null,x__450__auto____151640.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____151642;
}
} else
{return and__3546__auto____151641;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____151640);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____151643 = x;

if(cljs.core.truth_((function (){var and__3546__auto____151644 = x__450__auto____151643;

if(cljs.core.truth_(and__3546__auto____151644))
{var and__3546__auto____151645 = x__450__auto____151643.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____151645))
{return cljs.core.not.call(null,x__450__auto____151643.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____151645;
}
} else
{return and__3546__auto____151644;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____151643);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__151646 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__151646.push(key);
}));
return keys__151646;
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
{var x__450__auto____151647 = s;

if(cljs.core.truth_((function (){var and__3546__auto____151648 = x__450__auto____151647;

if(cljs.core.truth_(and__3546__auto____151648))
{var and__3546__auto____151649 = x__450__auto____151647.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____151649))
{return cljs.core.not.call(null,x__450__auto____151647.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____151649;
}
} else
{return and__3546__auto____151648;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____151647);
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
var and__3546__auto____151650 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____151650))
{return cljs.core.not.call(null,(function (){var or__3548__auto____151651 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____151651))
{return or__3548__auto____151651;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____151650;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____151652 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____151652))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____151652;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____151653 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____151653))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____151653;
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
var and__3546__auto____151654 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____151654))
{return (n == n.toFixed());
} else
{return and__3546__auto____151654;
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
if(cljs.core.truth_((function (){var and__3546__auto____151655 = coll;

if(cljs.core.truth_(and__3546__auto____151655))
{var and__3546__auto____151656 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____151656))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____151656;
}
} else
{return and__3546__auto____151655;
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
var distinct_QMARK___151661 = (function (x){
return true;
});
var distinct_QMARK___151662 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___151663 = (function() { 
var G__151665__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__151657 = cljs.core.set([y,x]);
var xs__151658 = more;

while(true){
var x__151659 = cljs.core.first.call(null,xs__151658);
var etc__151660 = cljs.core.next.call(null,xs__151658);

if(cljs.core.truth_(xs__151658))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__151657,x__151659)))
{return false;
} else
{{
var G__151666 = cljs.core.conj.call(null,s__151657,x__151659);
var G__151667 = etc__151660;
s__151657 = G__151666;
xs__151658 = G__151667;
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
var G__151665 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151665__delegate.call(this, x, y, more);
};
G__151665.cljs$lang$maxFixedArity = 2;
G__151665.cljs$lang$applyTo = (function (arglist__151668){
var x = cljs.core.first(arglist__151668);
var y = cljs.core.first(cljs.core.next(arglist__151668));
var more = cljs.core.rest(cljs.core.next(arglist__151668));
return G__151665__delegate.call(this, x, y, more);
});
return G__151665;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___151661.call(this,x);
case  2 :
return distinct_QMARK___151662.call(this,x,y);
default:
return distinct_QMARK___151663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___151663.cljs$lang$applyTo;
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
var r__151669 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__151669)))
{return r__151669;
} else
{if(cljs.core.truth_(r__151669))
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
var sort__151671 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__151672 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__151670 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__151670,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__151670);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__151671.call(this,comp);
case  2 :
return sort__151672.call(this,comp,coll);
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
var sort_by__151674 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__151675 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__151674.call(this,keyfn,comp);
case  3 :
return sort_by__151675.call(this,keyfn,comp,coll);
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
var reduce__151677 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__151678 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__151677.call(this,f,val);
case  3 :
return reduce__151678.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__151684 = (function (f,coll){
var temp__3695__auto____151680 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____151680))
{var s__151681 = temp__3695__auto____151680;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__151681),cljs.core.next.call(null,s__151681));
} else
{return f.call(null);
}
});
var seq_reduce__151685 = (function (f,val,coll){
var val__151682 = val;
var coll__151683 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__151683))
{{
var G__151687 = f.call(null,val__151682,cljs.core.first.call(null,coll__151683));
var G__151688 = cljs.core.next.call(null,coll__151683);
val__151682 = G__151687;
coll__151683 = G__151688;
continue;
}
} else
{return val__151682;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__151684.call(this,f,val);
case  3 :
return seq_reduce__151685.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__151689 = null;
var G__151689__151690 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__151689__151691 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__151689 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__151689__151690.call(this,coll,f);
case  3 :
return G__151689__151691.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151689;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___151693 = (function (){
return 0;
});
var _PLUS___151694 = (function (x){
return x;
});
var _PLUS___151695 = (function (x,y){
return (x + y);
});
var _PLUS___151696 = (function() { 
var G__151698__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__151698 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151698__delegate.call(this, x, y, more);
};
G__151698.cljs$lang$maxFixedArity = 2;
G__151698.cljs$lang$applyTo = (function (arglist__151699){
var x = cljs.core.first(arglist__151699);
var y = cljs.core.first(cljs.core.next(arglist__151699));
var more = cljs.core.rest(cljs.core.next(arglist__151699));
return G__151698__delegate.call(this, x, y, more);
});
return G__151698;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___151693.call(this);
case  1 :
return _PLUS___151694.call(this,x);
case  2 :
return _PLUS___151695.call(this,x,y);
default:
return _PLUS___151696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___151696.cljs$lang$applyTo;
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
var ___151700 = (function (x){
return (- x);
});
var ___151701 = (function (x,y){
return (x - y);
});
var ___151702 = (function() { 
var G__151704__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__151704 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151704__delegate.call(this, x, y, more);
};
G__151704.cljs$lang$maxFixedArity = 2;
G__151704.cljs$lang$applyTo = (function (arglist__151705){
var x = cljs.core.first(arglist__151705);
var y = cljs.core.first(cljs.core.next(arglist__151705));
var more = cljs.core.rest(cljs.core.next(arglist__151705));
return G__151704__delegate.call(this, x, y, more);
});
return G__151704;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___151700.call(this,x);
case  2 :
return ___151701.call(this,x,y);
default:
return ___151702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___151702.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___151706 = (function (){
return 1;
});
var _STAR___151707 = (function (x){
return x;
});
var _STAR___151708 = (function (x,y){
return (x * y);
});
var _STAR___151709 = (function() { 
var G__151711__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__151711 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151711__delegate.call(this, x, y, more);
};
G__151711.cljs$lang$maxFixedArity = 2;
G__151711.cljs$lang$applyTo = (function (arglist__151712){
var x = cljs.core.first(arglist__151712);
var y = cljs.core.first(cljs.core.next(arglist__151712));
var more = cljs.core.rest(cljs.core.next(arglist__151712));
return G__151711__delegate.call(this, x, y, more);
});
return G__151711;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___151706.call(this);
case  1 :
return _STAR___151707.call(this,x);
case  2 :
return _STAR___151708.call(this,x,y);
default:
return _STAR___151709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___151709.cljs$lang$applyTo;
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
var _SLASH___151713 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___151714 = (function (x,y){
return (x / y);
});
var _SLASH___151715 = (function() { 
var G__151717__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__151717 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151717__delegate.call(this, x, y, more);
};
G__151717.cljs$lang$maxFixedArity = 2;
G__151717.cljs$lang$applyTo = (function (arglist__151718){
var x = cljs.core.first(arglist__151718);
var y = cljs.core.first(cljs.core.next(arglist__151718));
var more = cljs.core.rest(cljs.core.next(arglist__151718));
return G__151717__delegate.call(this, x, y, more);
});
return G__151717;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___151713.call(this,x);
case  2 :
return _SLASH___151714.call(this,x,y);
default:
return _SLASH___151715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___151715.cljs$lang$applyTo;
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
var _LT___151719 = (function (x){
return true;
});
var _LT___151720 = (function (x,y){
return (x < y);
});
var _LT___151721 = (function() { 
var G__151723__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__151724 = y;
var G__151725 = cljs.core.first.call(null,more);
var G__151726 = cljs.core.next.call(null,more);
x = G__151724;
y = G__151725;
more = G__151726;
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
var G__151723 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151723__delegate.call(this, x, y, more);
};
G__151723.cljs$lang$maxFixedArity = 2;
G__151723.cljs$lang$applyTo = (function (arglist__151727){
var x = cljs.core.first(arglist__151727);
var y = cljs.core.first(cljs.core.next(arglist__151727));
var more = cljs.core.rest(cljs.core.next(arglist__151727));
return G__151723__delegate.call(this, x, y, more);
});
return G__151723;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___151719.call(this,x);
case  2 :
return _LT___151720.call(this,x,y);
default:
return _LT___151721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___151721.cljs$lang$applyTo;
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
var _LT__EQ___151728 = (function (x){
return true;
});
var _LT__EQ___151729 = (function (x,y){
return (x <= y);
});
var _LT__EQ___151730 = (function() { 
var G__151732__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__151733 = y;
var G__151734 = cljs.core.first.call(null,more);
var G__151735 = cljs.core.next.call(null,more);
x = G__151733;
y = G__151734;
more = G__151735;
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
var G__151732 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151732__delegate.call(this, x, y, more);
};
G__151732.cljs$lang$maxFixedArity = 2;
G__151732.cljs$lang$applyTo = (function (arglist__151736){
var x = cljs.core.first(arglist__151736);
var y = cljs.core.first(cljs.core.next(arglist__151736));
var more = cljs.core.rest(cljs.core.next(arglist__151736));
return G__151732__delegate.call(this, x, y, more);
});
return G__151732;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___151728.call(this,x);
case  2 :
return _LT__EQ___151729.call(this,x,y);
default:
return _LT__EQ___151730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___151730.cljs$lang$applyTo;
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
var _GT___151737 = (function (x){
return true;
});
var _GT___151738 = (function (x,y){
return (x > y);
});
var _GT___151739 = (function() { 
var G__151741__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__151742 = y;
var G__151743 = cljs.core.first.call(null,more);
var G__151744 = cljs.core.next.call(null,more);
x = G__151742;
y = G__151743;
more = G__151744;
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
var G__151741 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151741__delegate.call(this, x, y, more);
};
G__151741.cljs$lang$maxFixedArity = 2;
G__151741.cljs$lang$applyTo = (function (arglist__151745){
var x = cljs.core.first(arglist__151745);
var y = cljs.core.first(cljs.core.next(arglist__151745));
var more = cljs.core.rest(cljs.core.next(arglist__151745));
return G__151741__delegate.call(this, x, y, more);
});
return G__151741;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___151737.call(this,x);
case  2 :
return _GT___151738.call(this,x,y);
default:
return _GT___151739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___151739.cljs$lang$applyTo;
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
var _GT__EQ___151746 = (function (x){
return true;
});
var _GT__EQ___151747 = (function (x,y){
return (x >= y);
});
var _GT__EQ___151748 = (function() { 
var G__151750__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__151751 = y;
var G__151752 = cljs.core.first.call(null,more);
var G__151753 = cljs.core.next.call(null,more);
x = G__151751;
y = G__151752;
more = G__151753;
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
var G__151750 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151750__delegate.call(this, x, y, more);
};
G__151750.cljs$lang$maxFixedArity = 2;
G__151750.cljs$lang$applyTo = (function (arglist__151754){
var x = cljs.core.first(arglist__151754);
var y = cljs.core.first(cljs.core.next(arglist__151754));
var more = cljs.core.rest(cljs.core.next(arglist__151754));
return G__151750__delegate.call(this, x, y, more);
});
return G__151750;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___151746.call(this,x);
case  2 :
return _GT__EQ___151747.call(this,x,y);
default:
return _GT__EQ___151748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___151748.cljs$lang$applyTo;
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
var max__151755 = (function (x){
return x;
});
var max__151756 = (function (x,y){
return ((x > y) ? x : y);
});
var max__151757 = (function() { 
var G__151759__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__151759 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151759__delegate.call(this, x, y, more);
};
G__151759.cljs$lang$maxFixedArity = 2;
G__151759.cljs$lang$applyTo = (function (arglist__151760){
var x = cljs.core.first(arglist__151760);
var y = cljs.core.first(cljs.core.next(arglist__151760));
var more = cljs.core.rest(cljs.core.next(arglist__151760));
return G__151759__delegate.call(this, x, y, more);
});
return G__151759;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__151755.call(this,x);
case  2 :
return max__151756.call(this,x,y);
default:
return max__151757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__151757.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__151761 = (function (x){
return x;
});
var min__151762 = (function (x,y){
return ((x < y) ? x : y);
});
var min__151763 = (function() { 
var G__151765__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__151765 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151765__delegate.call(this, x, y, more);
};
G__151765.cljs$lang$maxFixedArity = 2;
G__151765.cljs$lang$applyTo = (function (arglist__151766){
var x = cljs.core.first(arglist__151766);
var y = cljs.core.first(cljs.core.next(arglist__151766));
var more = cljs.core.rest(cljs.core.next(arglist__151766));
return G__151765__delegate.call(this, x, y, more);
});
return G__151765;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__151761.call(this,x);
case  2 :
return min__151762.call(this,x,y);
default:
return min__151763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__151763.cljs$lang$applyTo;
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
var rem__151767 = (n % d);

return cljs.core.fix.call(null,((n - rem__151767) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__151768 = cljs.core.quot.call(null,n,d);

return (n - (d * q__151768));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__151769 = (function (){
return Math.random.call(null);
});
var rand__151770 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__151769.call(this);
case  1 :
return rand__151770.call(this,n);
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
var _EQ__EQ___151772 = (function (x){
return true;
});
var _EQ__EQ___151773 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___151774 = (function() { 
var G__151776__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__151777 = y;
var G__151778 = cljs.core.first.call(null,more);
var G__151779 = cljs.core.next.call(null,more);
x = G__151777;
y = G__151778;
more = G__151779;
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
var G__151776 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151776__delegate.call(this, x, y, more);
};
G__151776.cljs$lang$maxFixedArity = 2;
G__151776.cljs$lang$applyTo = (function (arglist__151780){
var x = cljs.core.first(arglist__151780);
var y = cljs.core.first(cljs.core.next(arglist__151780));
var more = cljs.core.rest(cljs.core.next(arglist__151780));
return G__151776__delegate.call(this, x, y, more);
});
return G__151776;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___151772.call(this,x);
case  2 :
return _EQ__EQ___151773.call(this,x,y);
default:
return _EQ__EQ___151774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___151774.cljs$lang$applyTo;
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
var n__151781 = n;
var xs__151782 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____151783 = xs__151782;

if(cljs.core.truth_(and__3546__auto____151783))
{return (n__151781 > 0);
} else
{return and__3546__auto____151783;
}
})()))
{{
var G__151784 = (n__151781 - 1);
var G__151785 = cljs.core.next.call(null,xs__151782);
n__151781 = G__151784;
xs__151782 = G__151785;
continue;
}
} else
{return xs__151782;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__151790 = null;
var G__151790__151791 = (function (coll,n){
var temp__3695__auto____151786 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____151786))
{var xs__151787 = temp__3695__auto____151786;

return cljs.core.first.call(null,xs__151787);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__151790__151792 = (function (coll,n,not_found){
var temp__3695__auto____151788 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____151788))
{var xs__151789 = temp__3695__auto____151788;

return cljs.core.first.call(null,xs__151789);
} else
{return not_found;
}
});
G__151790 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__151790__151791.call(this,coll,n);
case  3 :
return G__151790__151792.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151790;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___151794 = (function (){
return "";
});
var str_STAR___151795 = (function (x){
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
var str_STAR___151796 = (function() { 
var G__151798__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__151799 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__151800 = cljs.core.next.call(null,more);
sb = G__151799;
more = G__151800;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__151798 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__151798__delegate.call(this, x, ys);
};
G__151798.cljs$lang$maxFixedArity = 1;
G__151798.cljs$lang$applyTo = (function (arglist__151801){
var x = cljs.core.first(arglist__151801);
var ys = cljs.core.rest(arglist__151801);
return G__151798__delegate.call(this, x, ys);
});
return G__151798;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___151794.call(this);
case  1 :
return str_STAR___151795.call(this,x);
default:
return str_STAR___151796.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___151796.cljs$lang$applyTo;
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
var str__151802 = (function (){
return "";
});
var str__151803 = (function (x){
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
var str__151804 = (function() { 
var G__151806__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__151806 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__151806__delegate.call(this, x, ys);
};
G__151806.cljs$lang$maxFixedArity = 1;
G__151806.cljs$lang$applyTo = (function (arglist__151807){
var x = cljs.core.first(arglist__151807);
var ys = cljs.core.rest(arglist__151807);
return G__151806__delegate.call(this, x, ys);
});
return G__151806;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__151802.call(this);
case  1 :
return str__151803.call(this,x);
default:
return str__151804.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__151804.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__151808 = (function (s,start){
return s.substring(start);
});
var subs__151809 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__151808.call(this,s,start);
case  3 :
return subs__151809.call(this,s,start,end);
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
var symbol__151811 = (function (name){
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
var symbol__151812 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__151811.call(this,ns);
case  2 :
return symbol__151812.call(this,ns,name);
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
var keyword__151814 = (function (name){
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
var keyword__151815 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__151814.call(this,ns);
case  2 :
return keyword__151815.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__151817 = cljs.core.seq.call(null,x);
var ys__151818 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__151817 === null)))
{return (ys__151818 === null);
} else
{if(cljs.core.truth_((ys__151818 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__151817),cljs.core.first.call(null,ys__151818))))
{{
var G__151819 = cljs.core.next.call(null,xs__151817);
var G__151820 = cljs.core.next.call(null,ys__151818);
xs__151817 = G__151819;
ys__151818 = G__151820;
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
return cljs.core.reduce.call(null,(function (p1__151821_SHARP_,p2__151822_SHARP_){
return cljs.core.hash_combine.call(null,p1__151821_SHARP_,cljs.core.hash.call(null,p2__151822_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__151823__151824 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__151823__151824))
{var G__151826__151828 = cljs.core.first.call(null,G__151823__151824);
var vec__151827__151829 = G__151826__151828;
var key_name__151830 = cljs.core.nth.call(null,vec__151827__151829,0,null);
var f__151831 = cljs.core.nth.call(null,vec__151827__151829,1,null);
var G__151823__151832 = G__151823__151824;

var G__151826__151833 = G__151826__151828;
var G__151823__151834 = G__151823__151832;

while(true){
var vec__151835__151836 = G__151826__151833;
var key_name__151837 = cljs.core.nth.call(null,vec__151835__151836,0,null);
var f__151838 = cljs.core.nth.call(null,vec__151835__151836,1,null);
var G__151823__151839 = G__151823__151834;

var str_name__151840 = cljs.core.name.call(null,key_name__151837);

obj[str_name__151840] = f__151838;
var temp__3698__auto____151841 = cljs.core.next.call(null,G__151823__151839);

if(cljs.core.truth_(temp__3698__auto____151841))
{var G__151823__151842 = temp__3698__auto____151841;

{
var G__151843 = cljs.core.first.call(null,G__151823__151842);
var G__151844 = G__151823__151842;
G__151826__151833 = G__151843;
G__151823__151834 = G__151844;
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
var this__151845 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__151846 = this;
return (new cljs.core.List(this__151846.meta,o,coll,(this__151846.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__151847 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__151848 = this;
return this__151848.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__151849 = this;
return this__151849.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__151850 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__151851 = this;
return this__151851.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__151852 = this;
return this__151852.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__151853 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__151854 = this;
return (new cljs.core.List(meta,this__151854.first,this__151854.rest,this__151854.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__151855 = this;
return this__151855.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__151856 = this;
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
var this__151857 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__151858 = this;
return (new cljs.core.List(this__151858.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__151859 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__151860 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__151861 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__151862 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__151863 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__151864 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__151865 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__151866 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__151867 = this;
return this__151867.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__151868 = this;
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
list.cljs$lang$applyTo = (function (arglist__151869){
var items = cljs.core.seq( arglist__151869 );;
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
var this__151870 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__151871 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__151872 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__151873 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__151873.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__151874 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__151875 = this;
return this__151875.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__151876 = this;
if(cljs.core.truth_((this__151876.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__151876.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__151877 = this;
return this__151877.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__151878 = this;
return (new cljs.core.Cons(meta,this__151878.first,this__151878.rest));
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
var G__151879 = null;
var G__151879__151880 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__151879__151881 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__151879 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__151879__151880.call(this,string,f);
case  3 :
return G__151879__151881.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151879;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__151883 = null;
var G__151883__151884 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__151883__151885 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__151883 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__151883__151884.call(this,string,k);
case  3 :
return G__151883__151885.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151883;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__151887 = null;
var G__151887__151888 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__151887__151889 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__151887 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__151887__151888.call(this,string,n);
case  3 :
return G__151887__151889.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151887;
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
var G__151897 = null;
var G__151897__151898 = (function (tsym151891,coll){
var tsym151891__151893 = this;

var this$__151894 = tsym151891__151893;

return cljs.core.get.call(null,coll,this$__151894.toString());
});
var G__151897__151899 = (function (tsym151892,coll,not_found){
var tsym151892__151895 = this;

var this$__151896 = tsym151892__151895;

return cljs.core.get.call(null,coll,this$__151896.toString(),not_found);
});
G__151897 = function(tsym151892,coll,not_found){
switch(arguments.length){
case  2 :
return G__151897__151898.call(this,tsym151892,coll);
case  3 :
return G__151897__151899.call(this,tsym151892,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__151897;
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
var x__151901 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__151901;
} else
{lazy_seq.x = x__151901.call(null);
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
var this__151902 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__151903 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__151904 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__151905 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__151905.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__151906 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__151907 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__151908 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__151909 = this;
return this__151909.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__151910 = this;
return (new cljs.core.LazySeq(meta,this__151910.realized,this__151910.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__151911 = cljs.core.array.call(null);

var s__151912 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__151912)))
{ary__151911.push(cljs.core.first.call(null,s__151912));
{
var G__151913 = cljs.core.next.call(null,s__151912);
s__151912 = G__151913;
continue;
}
} else
{return ary__151911;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__151914 = s;
var i__151915 = n;
var sum__151916 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____151917 = (i__151915 > 0);

if(cljs.core.truth_(and__3546__auto____151917))
{return cljs.core.seq.call(null,s__151914);
} else
{return and__3546__auto____151917;
}
})()))
{{
var G__151918 = cljs.core.next.call(null,s__151914);
var G__151919 = (i__151915 - 1);
var G__151920 = (sum__151916 + 1);
s__151914 = G__151918;
i__151915 = G__151919;
sum__151916 = G__151920;
continue;
}
} else
{return sum__151916;
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
var concat__151924 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__151925 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__151926 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__151921 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__151921))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__151921),concat.call(null,cljs.core.rest.call(null,s__151921),y));
} else
{return y;
}
})));
});
var concat__151927 = (function() { 
var G__151929__delegate = function (x,y,zs){
var cat__151923 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__151922 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__151922))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__151922),cat.call(null,cljs.core.rest.call(null,xys__151922),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__151923.call(null,concat.call(null,x,y),zs);
};
var G__151929 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151929__delegate.call(this, x, y, zs);
};
G__151929.cljs$lang$maxFixedArity = 2;
G__151929.cljs$lang$applyTo = (function (arglist__151930){
var x = cljs.core.first(arglist__151930);
var y = cljs.core.first(cljs.core.next(arglist__151930));
var zs = cljs.core.rest(cljs.core.next(arglist__151930));
return G__151929__delegate.call(this, x, y, zs);
});
return G__151929;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__151924.call(this);
case  1 :
return concat__151925.call(this,x);
case  2 :
return concat__151926.call(this,x,y);
default:
return concat__151927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__151927.cljs$lang$applyTo;
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
var list_STAR___151931 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___151932 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___151933 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___151934 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___151935 = (function() { 
var G__151937__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__151937 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__151937__delegate.call(this, a, b, c, d, more);
};
G__151937.cljs$lang$maxFixedArity = 4;
G__151937.cljs$lang$applyTo = (function (arglist__151938){
var a = cljs.core.first(arglist__151938);
var b = cljs.core.first(cljs.core.next(arglist__151938));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__151938)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__151938))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__151938))));
return G__151937__delegate.call(this, a, b, c, d, more);
});
return G__151937;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___151931.call(this,a);
case  2 :
return list_STAR___151932.call(this,a,b);
case  3 :
return list_STAR___151933.call(this,a,b,c);
case  4 :
return list_STAR___151934.call(this,a,b,c,d);
default:
return list_STAR___151935.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___151935.cljs$lang$applyTo;
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
var apply__151948 = (function (f,args){
var fixed_arity__151939 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__151939 + 1)) <= fixed_arity__151939)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__151949 = (function (f,x,args){
var arglist__151940 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__151941 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__151940,fixed_arity__151941) <= fixed_arity__151941)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__151940));
} else
{return f.cljs$lang$applyTo(arglist__151940);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__151940));
}
});
var apply__151950 = (function (f,x,y,args){
var arglist__151942 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__151943 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__151942,fixed_arity__151943) <= fixed_arity__151943)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__151942));
} else
{return f.cljs$lang$applyTo(arglist__151942);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__151942));
}
});
var apply__151951 = (function (f,x,y,z,args){
var arglist__151944 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__151945 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__151944,fixed_arity__151945) <= fixed_arity__151945)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__151944));
} else
{return f.cljs$lang$applyTo(arglist__151944);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__151944));
}
});
var apply__151952 = (function() { 
var G__151954__delegate = function (f,a,b,c,d,args){
var arglist__151946 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__151947 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__151946,fixed_arity__151947) <= fixed_arity__151947)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__151946));
} else
{return f.cljs$lang$applyTo(arglist__151946);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__151946));
}
};
var G__151954 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__151954__delegate.call(this, f, a, b, c, d, args);
};
G__151954.cljs$lang$maxFixedArity = 5;
G__151954.cljs$lang$applyTo = (function (arglist__151955){
var f = cljs.core.first(arglist__151955);
var a = cljs.core.first(cljs.core.next(arglist__151955));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__151955)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__151955))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__151955)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__151955)))));
return G__151954__delegate.call(this, f, a, b, c, d, args);
});
return G__151954;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__151948.call(this,f,a);
case  3 :
return apply__151949.call(this,f,a,b);
case  4 :
return apply__151950.call(this,f,a,b,c);
case  5 :
return apply__151951.call(this,f,a,b,c,d);
default:
return apply__151952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__151952.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__151956){
var obj = cljs.core.first(arglist__151956);
var f = cljs.core.first(cljs.core.next(arglist__151956));
var args = cljs.core.rest(cljs.core.next(arglist__151956));
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
var not_EQ___151957 = (function (x){
return false;
});
var not_EQ___151958 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___151959 = (function() { 
var G__151961__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__151961 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151961__delegate.call(this, x, y, more);
};
G__151961.cljs$lang$maxFixedArity = 2;
G__151961.cljs$lang$applyTo = (function (arglist__151962){
var x = cljs.core.first(arglist__151962);
var y = cljs.core.first(cljs.core.next(arglist__151962));
var more = cljs.core.rest(cljs.core.next(arglist__151962));
return G__151961__delegate.call(this, x, y, more);
});
return G__151961;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___151957.call(this,x);
case  2 :
return not_EQ___151958.call(this,x,y);
default:
return not_EQ___151959.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___151959.cljs$lang$applyTo;
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
var G__151963 = pred;
var G__151964 = cljs.core.next.call(null,coll);
pred = G__151963;
coll = G__151964;
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
{var or__3548__auto____151965 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____151965))
{return or__3548__auto____151965;
} else
{{
var G__151966 = pred;
var G__151967 = cljs.core.next.call(null,coll);
pred = G__151966;
coll = G__151967;
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
var G__151968 = null;
var G__151968__151969 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__151968__151970 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__151968__151971 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__151968__151972 = (function() { 
var G__151974__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__151974 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__151974__delegate.call(this, x, y, zs);
};
G__151974.cljs$lang$maxFixedArity = 2;
G__151974.cljs$lang$applyTo = (function (arglist__151975){
var x = cljs.core.first(arglist__151975);
var y = cljs.core.first(cljs.core.next(arglist__151975));
var zs = cljs.core.rest(cljs.core.next(arglist__151975));
return G__151974__delegate.call(this, x, y, zs);
});
return G__151974;
})()
;
G__151968 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__151968__151969.call(this);
case  1 :
return G__151968__151970.call(this,x);
case  2 :
return G__151968__151971.call(this,x,y);
default:
return G__151968__151972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__151968.cljs$lang$maxFixedArity = 2;
G__151968.cljs$lang$applyTo = G__151968__151972.cljs$lang$applyTo;
return G__151968;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__151976__delegate = function (args){
return x;
};
var G__151976 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__151976__delegate.call(this, args);
};
G__151976.cljs$lang$maxFixedArity = 0;
G__151976.cljs$lang$applyTo = (function (arglist__151977){
var args = cljs.core.seq( arglist__151977 );;
return G__151976__delegate.call(this, args);
});
return G__151976;
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
var comp__151981 = (function (){
return cljs.core.identity;
});
var comp__151982 = (function (f){
return f;
});
var comp__151983 = (function (f,g){
return (function() {
var G__151987 = null;
var G__151987__151988 = (function (){
return f.call(null,g.call(null));
});
var G__151987__151989 = (function (x){
return f.call(null,g.call(null,x));
});
var G__151987__151990 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__151987__151991 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__151987__151992 = (function() { 
var G__151994__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__151994 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__151994__delegate.call(this, x, y, z, args);
};
G__151994.cljs$lang$maxFixedArity = 3;
G__151994.cljs$lang$applyTo = (function (arglist__151995){
var x = cljs.core.first(arglist__151995);
var y = cljs.core.first(cljs.core.next(arglist__151995));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__151995)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__151995)));
return G__151994__delegate.call(this, x, y, z, args);
});
return G__151994;
})()
;
G__151987 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__151987__151988.call(this);
case  1 :
return G__151987__151989.call(this,x);
case  2 :
return G__151987__151990.call(this,x,y);
case  3 :
return G__151987__151991.call(this,x,y,z);
default:
return G__151987__151992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__151987.cljs$lang$maxFixedArity = 3;
G__151987.cljs$lang$applyTo = G__151987__151992.cljs$lang$applyTo;
return G__151987;
})()
});
var comp__151984 = (function (f,g,h){
return (function() {
var G__151996 = null;
var G__151996__151997 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__151996__151998 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__151996__151999 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__151996__152000 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__151996__152001 = (function() { 
var G__152003__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__152003 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152003__delegate.call(this, x, y, z, args);
};
G__152003.cljs$lang$maxFixedArity = 3;
G__152003.cljs$lang$applyTo = (function (arglist__152004){
var x = cljs.core.first(arglist__152004);
var y = cljs.core.first(cljs.core.next(arglist__152004));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152004)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152004)));
return G__152003__delegate.call(this, x, y, z, args);
});
return G__152003;
})()
;
G__151996 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__151996__151997.call(this);
case  1 :
return G__151996__151998.call(this,x);
case  2 :
return G__151996__151999.call(this,x,y);
case  3 :
return G__151996__152000.call(this,x,y,z);
default:
return G__151996__152001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__151996.cljs$lang$maxFixedArity = 3;
G__151996.cljs$lang$applyTo = G__151996__152001.cljs$lang$applyTo;
return G__151996;
})()
});
var comp__151985 = (function() { 
var G__152005__delegate = function (f1,f2,f3,fs){
var fs__151978 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__152006__delegate = function (args){
var ret__151979 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__151978),args);
var fs__151980 = cljs.core.next.call(null,fs__151978);

while(true){
if(cljs.core.truth_(fs__151980))
{{
var G__152007 = cljs.core.first.call(null,fs__151980).call(null,ret__151979);
var G__152008 = cljs.core.next.call(null,fs__151980);
ret__151979 = G__152007;
fs__151980 = G__152008;
continue;
}
} else
{return ret__151979;
}
break;
}
};
var G__152006 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__152006__delegate.call(this, args);
};
G__152006.cljs$lang$maxFixedArity = 0;
G__152006.cljs$lang$applyTo = (function (arglist__152009){
var args = cljs.core.seq( arglist__152009 );;
return G__152006__delegate.call(this, args);
});
return G__152006;
})()
;
};
var G__152005 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152005__delegate.call(this, f1, f2, f3, fs);
};
G__152005.cljs$lang$maxFixedArity = 3;
G__152005.cljs$lang$applyTo = (function (arglist__152010){
var f1 = cljs.core.first(arglist__152010);
var f2 = cljs.core.first(cljs.core.next(arglist__152010));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152010)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152010)));
return G__152005__delegate.call(this, f1, f2, f3, fs);
});
return G__152005;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__151981.call(this);
case  1 :
return comp__151982.call(this,f1);
case  2 :
return comp__151983.call(this,f1,f2);
case  3 :
return comp__151984.call(this,f1,f2,f3);
default:
return comp__151985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__151985.cljs$lang$applyTo;
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
var partial__152011 = (function (f,arg1){
return (function() { 
var G__152016__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__152016 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__152016__delegate.call(this, args);
};
G__152016.cljs$lang$maxFixedArity = 0;
G__152016.cljs$lang$applyTo = (function (arglist__152017){
var args = cljs.core.seq( arglist__152017 );;
return G__152016__delegate.call(this, args);
});
return G__152016;
})()
;
});
var partial__152012 = (function (f,arg1,arg2){
return (function() { 
var G__152018__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__152018 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__152018__delegate.call(this, args);
};
G__152018.cljs$lang$maxFixedArity = 0;
G__152018.cljs$lang$applyTo = (function (arglist__152019){
var args = cljs.core.seq( arglist__152019 );;
return G__152018__delegate.call(this, args);
});
return G__152018;
})()
;
});
var partial__152013 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__152020__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__152020 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__152020__delegate.call(this, args);
};
G__152020.cljs$lang$maxFixedArity = 0;
G__152020.cljs$lang$applyTo = (function (arglist__152021){
var args = cljs.core.seq( arglist__152021 );;
return G__152020__delegate.call(this, args);
});
return G__152020;
})()
;
});
var partial__152014 = (function() { 
var G__152022__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__152023__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__152023 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__152023__delegate.call(this, args);
};
G__152023.cljs$lang$maxFixedArity = 0;
G__152023.cljs$lang$applyTo = (function (arglist__152024){
var args = cljs.core.seq( arglist__152024 );;
return G__152023__delegate.call(this, args);
});
return G__152023;
})()
;
};
var G__152022 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__152022__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__152022.cljs$lang$maxFixedArity = 4;
G__152022.cljs$lang$applyTo = (function (arglist__152025){
var f = cljs.core.first(arglist__152025);
var arg1 = cljs.core.first(cljs.core.next(arglist__152025));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152025)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__152025))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__152025))));
return G__152022__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__152022;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__152011.call(this,f,arg1);
case  3 :
return partial__152012.call(this,f,arg1,arg2);
case  4 :
return partial__152013.call(this,f,arg1,arg2,arg3);
default:
return partial__152014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__152014.cljs$lang$applyTo;
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
var fnil__152026 = (function (f,x){
return (function() {
var G__152030 = null;
var G__152030__152031 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__152030__152032 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__152030__152033 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__152030__152034 = (function() { 
var G__152036__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__152036 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152036__delegate.call(this, a, b, c, ds);
};
G__152036.cljs$lang$maxFixedArity = 3;
G__152036.cljs$lang$applyTo = (function (arglist__152037){
var a = cljs.core.first(arglist__152037);
var b = cljs.core.first(cljs.core.next(arglist__152037));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152037)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152037)));
return G__152036__delegate.call(this, a, b, c, ds);
});
return G__152036;
})()
;
G__152030 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__152030__152031.call(this,a);
case  2 :
return G__152030__152032.call(this,a,b);
case  3 :
return G__152030__152033.call(this,a,b,c);
default:
return G__152030__152034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__152030.cljs$lang$maxFixedArity = 3;
G__152030.cljs$lang$applyTo = G__152030__152034.cljs$lang$applyTo;
return G__152030;
})()
});
var fnil__152027 = (function (f,x,y){
return (function() {
var G__152038 = null;
var G__152038__152039 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__152038__152040 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__152038__152041 = (function() { 
var G__152043__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__152043 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152043__delegate.call(this, a, b, c, ds);
};
G__152043.cljs$lang$maxFixedArity = 3;
G__152043.cljs$lang$applyTo = (function (arglist__152044){
var a = cljs.core.first(arglist__152044);
var b = cljs.core.first(cljs.core.next(arglist__152044));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152044)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152044)));
return G__152043__delegate.call(this, a, b, c, ds);
});
return G__152043;
})()
;
G__152038 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__152038__152039.call(this,a,b);
case  3 :
return G__152038__152040.call(this,a,b,c);
default:
return G__152038__152041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__152038.cljs$lang$maxFixedArity = 3;
G__152038.cljs$lang$applyTo = G__152038__152041.cljs$lang$applyTo;
return G__152038;
})()
});
var fnil__152028 = (function (f,x,y,z){
return (function() {
var G__152045 = null;
var G__152045__152046 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__152045__152047 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__152045__152048 = (function() { 
var G__152050__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__152050 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152050__delegate.call(this, a, b, c, ds);
};
G__152050.cljs$lang$maxFixedArity = 3;
G__152050.cljs$lang$applyTo = (function (arglist__152051){
var a = cljs.core.first(arglist__152051);
var b = cljs.core.first(cljs.core.next(arglist__152051));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152051)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152051)));
return G__152050__delegate.call(this, a, b, c, ds);
});
return G__152050;
})()
;
G__152045 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__152045__152046.call(this,a,b);
case  3 :
return G__152045__152047.call(this,a,b,c);
default:
return G__152045__152048.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__152045.cljs$lang$maxFixedArity = 3;
G__152045.cljs$lang$applyTo = G__152045__152048.cljs$lang$applyTo;
return G__152045;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__152026.call(this,f,x);
case  3 :
return fnil__152027.call(this,f,x,y);
case  4 :
return fnil__152028.call(this,f,x,y,z);
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
var mapi__152054 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152052 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152052))
{var s__152053 = temp__3698__auto____152052;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__152053)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__152053)));
} else
{return null;
}
})));
});

return mapi__152054.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152055 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152055))
{var s__152056 = temp__3698__auto____152055;

var x__152057 = f.call(null,cljs.core.first.call(null,s__152056));

if(cljs.core.truth_((x__152057 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__152056));
} else
{return cljs.core.cons.call(null,x__152057,keep.call(null,f,cljs.core.rest.call(null,s__152056)));
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
var keepi__152067 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152064 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152064))
{var s__152065 = temp__3698__auto____152064;

var x__152066 = f.call(null,idx,cljs.core.first.call(null,s__152065));

if(cljs.core.truth_((x__152066 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__152065));
} else
{return cljs.core.cons.call(null,x__152066,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__152065)));
}
} else
{return null;
}
})));
});

return keepi__152067.call(null,0,coll);
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
var every_pred__152112 = (function (p){
return (function() {
var ep1 = null;
var ep1__152117 = (function (){
return true;
});
var ep1__152118 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__152119 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152074 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____152074))
{return p.call(null,y);
} else
{return and__3546__auto____152074;
}
})());
});
var ep1__152120 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152075 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____152075))
{var and__3546__auto____152076 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____152076))
{return p.call(null,z);
} else
{return and__3546__auto____152076;
}
} else
{return and__3546__auto____152075;
}
})());
});
var ep1__152121 = (function() { 
var G__152123__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152077 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____152077))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____152077;
}
})());
};
var G__152123 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152123__delegate.call(this, x, y, z, args);
};
G__152123.cljs$lang$maxFixedArity = 3;
G__152123.cljs$lang$applyTo = (function (arglist__152124){
var x = cljs.core.first(arglist__152124);
var y = cljs.core.first(cljs.core.next(arglist__152124));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152124)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152124)));
return G__152123__delegate.call(this, x, y, z, args);
});
return G__152123;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__152117.call(this);
case  1 :
return ep1__152118.call(this,x);
case  2 :
return ep1__152119.call(this,x,y);
case  3 :
return ep1__152120.call(this,x,y,z);
default:
return ep1__152121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__152121.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__152113 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__152125 = (function (){
return true;
});
var ep2__152126 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152078 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____152078))
{return p2.call(null,x);
} else
{return and__3546__auto____152078;
}
})());
});
var ep2__152127 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152079 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____152079))
{var and__3546__auto____152080 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____152080))
{var and__3546__auto____152081 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____152081))
{return p2.call(null,y);
} else
{return and__3546__auto____152081;
}
} else
{return and__3546__auto____152080;
}
} else
{return and__3546__auto____152079;
}
})());
});
var ep2__152128 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152082 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____152082))
{var and__3546__auto____152083 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____152083))
{var and__3546__auto____152084 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____152084))
{var and__3546__auto____152085 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____152085))
{var and__3546__auto____152086 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____152086))
{return p2.call(null,z);
} else
{return and__3546__auto____152086;
}
} else
{return and__3546__auto____152085;
}
} else
{return and__3546__auto____152084;
}
} else
{return and__3546__auto____152083;
}
} else
{return and__3546__auto____152082;
}
})());
});
var ep2__152129 = (function() { 
var G__152131__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152087 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____152087))
{return cljs.core.every_QMARK_.call(null,(function (p1__152058_SHARP_){
var and__3546__auto____152088 = p1.call(null,p1__152058_SHARP_);

if(cljs.core.truth_(and__3546__auto____152088))
{return p2.call(null,p1__152058_SHARP_);
} else
{return and__3546__auto____152088;
}
}),args);
} else
{return and__3546__auto____152087;
}
})());
};
var G__152131 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152131__delegate.call(this, x, y, z, args);
};
G__152131.cljs$lang$maxFixedArity = 3;
G__152131.cljs$lang$applyTo = (function (arglist__152132){
var x = cljs.core.first(arglist__152132);
var y = cljs.core.first(cljs.core.next(arglist__152132));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152132)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152132)));
return G__152131__delegate.call(this, x, y, z, args);
});
return G__152131;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__152125.call(this);
case  1 :
return ep2__152126.call(this,x);
case  2 :
return ep2__152127.call(this,x,y);
case  3 :
return ep2__152128.call(this,x,y,z);
default:
return ep2__152129.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__152129.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__152114 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__152133 = (function (){
return true;
});
var ep3__152134 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152089 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____152089))
{var and__3546__auto____152090 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____152090))
{return p3.call(null,x);
} else
{return and__3546__auto____152090;
}
} else
{return and__3546__auto____152089;
}
})());
});
var ep3__152135 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152091 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____152091))
{var and__3546__auto____152092 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____152092))
{var and__3546__auto____152093 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____152093))
{var and__3546__auto____152094 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____152094))
{var and__3546__auto____152095 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____152095))
{return p3.call(null,y);
} else
{return and__3546__auto____152095;
}
} else
{return and__3546__auto____152094;
}
} else
{return and__3546__auto____152093;
}
} else
{return and__3546__auto____152092;
}
} else
{return and__3546__auto____152091;
}
})());
});
var ep3__152136 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152096 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____152096))
{var and__3546__auto____152097 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____152097))
{var and__3546__auto____152098 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____152098))
{var and__3546__auto____152099 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____152099))
{var and__3546__auto____152100 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____152100))
{var and__3546__auto____152101 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____152101))
{var and__3546__auto____152102 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____152102))
{var and__3546__auto____152103 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____152103))
{return p3.call(null,z);
} else
{return and__3546__auto____152103;
}
} else
{return and__3546__auto____152102;
}
} else
{return and__3546__auto____152101;
}
} else
{return and__3546__auto____152100;
}
} else
{return and__3546__auto____152099;
}
} else
{return and__3546__auto____152098;
}
} else
{return and__3546__auto____152097;
}
} else
{return and__3546__auto____152096;
}
})());
});
var ep3__152137 = (function() { 
var G__152139__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152104 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____152104))
{return cljs.core.every_QMARK_.call(null,(function (p1__152059_SHARP_){
var and__3546__auto____152105 = p1.call(null,p1__152059_SHARP_);

if(cljs.core.truth_(and__3546__auto____152105))
{var and__3546__auto____152106 = p2.call(null,p1__152059_SHARP_);

if(cljs.core.truth_(and__3546__auto____152106))
{return p3.call(null,p1__152059_SHARP_);
} else
{return and__3546__auto____152106;
}
} else
{return and__3546__auto____152105;
}
}),args);
} else
{return and__3546__auto____152104;
}
})());
};
var G__152139 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152139__delegate.call(this, x, y, z, args);
};
G__152139.cljs$lang$maxFixedArity = 3;
G__152139.cljs$lang$applyTo = (function (arglist__152140){
var x = cljs.core.first(arglist__152140);
var y = cljs.core.first(cljs.core.next(arglist__152140));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152140)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152140)));
return G__152139__delegate.call(this, x, y, z, args);
});
return G__152139;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__152133.call(this);
case  1 :
return ep3__152134.call(this,x);
case  2 :
return ep3__152135.call(this,x,y);
case  3 :
return ep3__152136.call(this,x,y,z);
default:
return ep3__152137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__152137.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__152115 = (function() { 
var G__152141__delegate = function (p1,p2,p3,ps){
var ps__152107 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__152142 = (function (){
return true;
});
var epn__152143 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__152060_SHARP_){
return p1__152060_SHARP_.call(null,x);
}),ps__152107);
});
var epn__152144 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__152061_SHARP_){
var and__3546__auto____152108 = p1__152061_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____152108))
{return p1__152061_SHARP_.call(null,y);
} else
{return and__3546__auto____152108;
}
}),ps__152107);
});
var epn__152145 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__152062_SHARP_){
var and__3546__auto____152109 = p1__152062_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____152109))
{var and__3546__auto____152110 = p1__152062_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____152110))
{return p1__152062_SHARP_.call(null,z);
} else
{return and__3546__auto____152110;
}
} else
{return and__3546__auto____152109;
}
}),ps__152107);
});
var epn__152146 = (function() { 
var G__152148__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____152111 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____152111))
{return cljs.core.every_QMARK_.call(null,(function (p1__152063_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__152063_SHARP_,args);
}),ps__152107);
} else
{return and__3546__auto____152111;
}
})());
};
var G__152148 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152148__delegate.call(this, x, y, z, args);
};
G__152148.cljs$lang$maxFixedArity = 3;
G__152148.cljs$lang$applyTo = (function (arglist__152149){
var x = cljs.core.first(arglist__152149);
var y = cljs.core.first(cljs.core.next(arglist__152149));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152149)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152149)));
return G__152148__delegate.call(this, x, y, z, args);
});
return G__152148;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__152142.call(this);
case  1 :
return epn__152143.call(this,x);
case  2 :
return epn__152144.call(this,x,y);
case  3 :
return epn__152145.call(this,x,y,z);
default:
return epn__152146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__152146.cljs$lang$applyTo;
return epn;
})()
};
var G__152141 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152141__delegate.call(this, p1, p2, p3, ps);
};
G__152141.cljs$lang$maxFixedArity = 3;
G__152141.cljs$lang$applyTo = (function (arglist__152150){
var p1 = cljs.core.first(arglist__152150);
var p2 = cljs.core.first(cljs.core.next(arglist__152150));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152150)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152150)));
return G__152141__delegate.call(this, p1, p2, p3, ps);
});
return G__152141;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__152112.call(this,p1);
case  2 :
return every_pred__152113.call(this,p1,p2);
case  3 :
return every_pred__152114.call(this,p1,p2,p3);
default:
return every_pred__152115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__152115.cljs$lang$applyTo;
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
var some_fn__152190 = (function (p){
return (function() {
var sp1 = null;
var sp1__152195 = (function (){
return null;
});
var sp1__152196 = (function (x){
return p.call(null,x);
});
var sp1__152197 = (function (x,y){
var or__3548__auto____152152 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____152152))
{return or__3548__auto____152152;
} else
{return p.call(null,y);
}
});
var sp1__152198 = (function (x,y,z){
var or__3548__auto____152153 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____152153))
{return or__3548__auto____152153;
} else
{var or__3548__auto____152154 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____152154))
{return or__3548__auto____152154;
} else
{return p.call(null,z);
}
}
});
var sp1__152199 = (function() { 
var G__152201__delegate = function (x,y,z,args){
var or__3548__auto____152155 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____152155))
{return or__3548__auto____152155;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__152201 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152201__delegate.call(this, x, y, z, args);
};
G__152201.cljs$lang$maxFixedArity = 3;
G__152201.cljs$lang$applyTo = (function (arglist__152202){
var x = cljs.core.first(arglist__152202);
var y = cljs.core.first(cljs.core.next(arglist__152202));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152202)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152202)));
return G__152201__delegate.call(this, x, y, z, args);
});
return G__152201;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__152195.call(this);
case  1 :
return sp1__152196.call(this,x);
case  2 :
return sp1__152197.call(this,x,y);
case  3 :
return sp1__152198.call(this,x,y,z);
default:
return sp1__152199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__152199.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__152191 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__152203 = (function (){
return null;
});
var sp2__152204 = (function (x){
var or__3548__auto____152156 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____152156))
{return or__3548__auto____152156;
} else
{return p2.call(null,x);
}
});
var sp2__152205 = (function (x,y){
var or__3548__auto____152157 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____152157))
{return or__3548__auto____152157;
} else
{var or__3548__auto____152158 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____152158))
{return or__3548__auto____152158;
} else
{var or__3548__auto____152159 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____152159))
{return or__3548__auto____152159;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__152206 = (function (x,y,z){
var or__3548__auto____152160 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____152160))
{return or__3548__auto____152160;
} else
{var or__3548__auto____152161 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____152161))
{return or__3548__auto____152161;
} else
{var or__3548__auto____152162 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____152162))
{return or__3548__auto____152162;
} else
{var or__3548__auto____152163 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____152163))
{return or__3548__auto____152163;
} else
{var or__3548__auto____152164 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____152164))
{return or__3548__auto____152164;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__152207 = (function() { 
var G__152209__delegate = function (x,y,z,args){
var or__3548__auto____152165 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____152165))
{return or__3548__auto____152165;
} else
{return cljs.core.some.call(null,(function (p1__152068_SHARP_){
var or__3548__auto____152166 = p1.call(null,p1__152068_SHARP_);

if(cljs.core.truth_(or__3548__auto____152166))
{return or__3548__auto____152166;
} else
{return p2.call(null,p1__152068_SHARP_);
}
}),args);
}
};
var G__152209 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152209__delegate.call(this, x, y, z, args);
};
G__152209.cljs$lang$maxFixedArity = 3;
G__152209.cljs$lang$applyTo = (function (arglist__152210){
var x = cljs.core.first(arglist__152210);
var y = cljs.core.first(cljs.core.next(arglist__152210));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152210)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152210)));
return G__152209__delegate.call(this, x, y, z, args);
});
return G__152209;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__152203.call(this);
case  1 :
return sp2__152204.call(this,x);
case  2 :
return sp2__152205.call(this,x,y);
case  3 :
return sp2__152206.call(this,x,y,z);
default:
return sp2__152207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__152207.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__152192 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__152211 = (function (){
return null;
});
var sp3__152212 = (function (x){
var or__3548__auto____152167 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____152167))
{return or__3548__auto____152167;
} else
{var or__3548__auto____152168 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____152168))
{return or__3548__auto____152168;
} else
{return p3.call(null,x);
}
}
});
var sp3__152213 = (function (x,y){
var or__3548__auto____152169 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____152169))
{return or__3548__auto____152169;
} else
{var or__3548__auto____152170 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____152170))
{return or__3548__auto____152170;
} else
{var or__3548__auto____152171 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____152171))
{return or__3548__auto____152171;
} else
{var or__3548__auto____152172 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____152172))
{return or__3548__auto____152172;
} else
{var or__3548__auto____152173 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____152173))
{return or__3548__auto____152173;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__152214 = (function (x,y,z){
var or__3548__auto____152174 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____152174))
{return or__3548__auto____152174;
} else
{var or__3548__auto____152175 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____152175))
{return or__3548__auto____152175;
} else
{var or__3548__auto____152176 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____152176))
{return or__3548__auto____152176;
} else
{var or__3548__auto____152177 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____152177))
{return or__3548__auto____152177;
} else
{var or__3548__auto____152178 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____152178))
{return or__3548__auto____152178;
} else
{var or__3548__auto____152179 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____152179))
{return or__3548__auto____152179;
} else
{var or__3548__auto____152180 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____152180))
{return or__3548__auto____152180;
} else
{var or__3548__auto____152181 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____152181))
{return or__3548__auto____152181;
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
var sp3__152215 = (function() { 
var G__152217__delegate = function (x,y,z,args){
var or__3548__auto____152182 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____152182))
{return or__3548__auto____152182;
} else
{return cljs.core.some.call(null,(function (p1__152069_SHARP_){
var or__3548__auto____152183 = p1.call(null,p1__152069_SHARP_);

if(cljs.core.truth_(or__3548__auto____152183))
{return or__3548__auto____152183;
} else
{var or__3548__auto____152184 = p2.call(null,p1__152069_SHARP_);

if(cljs.core.truth_(or__3548__auto____152184))
{return or__3548__auto____152184;
} else
{return p3.call(null,p1__152069_SHARP_);
}
}
}),args);
}
};
var G__152217 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152217__delegate.call(this, x, y, z, args);
};
G__152217.cljs$lang$maxFixedArity = 3;
G__152217.cljs$lang$applyTo = (function (arglist__152218){
var x = cljs.core.first(arglist__152218);
var y = cljs.core.first(cljs.core.next(arglist__152218));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152218)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152218)));
return G__152217__delegate.call(this, x, y, z, args);
});
return G__152217;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__152211.call(this);
case  1 :
return sp3__152212.call(this,x);
case  2 :
return sp3__152213.call(this,x,y);
case  3 :
return sp3__152214.call(this,x,y,z);
default:
return sp3__152215.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__152215.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__152193 = (function() { 
var G__152219__delegate = function (p1,p2,p3,ps){
var ps__152185 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__152220 = (function (){
return null;
});
var spn__152221 = (function (x){
return cljs.core.some.call(null,(function (p1__152070_SHARP_){
return p1__152070_SHARP_.call(null,x);
}),ps__152185);
});
var spn__152222 = (function (x,y){
return cljs.core.some.call(null,(function (p1__152071_SHARP_){
var or__3548__auto____152186 = p1__152071_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____152186))
{return or__3548__auto____152186;
} else
{return p1__152071_SHARP_.call(null,y);
}
}),ps__152185);
});
var spn__152223 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__152072_SHARP_){
var or__3548__auto____152187 = p1__152072_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____152187))
{return or__3548__auto____152187;
} else
{var or__3548__auto____152188 = p1__152072_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____152188))
{return or__3548__auto____152188;
} else
{return p1__152072_SHARP_.call(null,z);
}
}
}),ps__152185);
});
var spn__152224 = (function() { 
var G__152226__delegate = function (x,y,z,args){
var or__3548__auto____152189 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____152189))
{return or__3548__auto____152189;
} else
{return cljs.core.some.call(null,(function (p1__152073_SHARP_){
return cljs.core.some.call(null,p1__152073_SHARP_,args);
}),ps__152185);
}
};
var G__152226 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152226__delegate.call(this, x, y, z, args);
};
G__152226.cljs$lang$maxFixedArity = 3;
G__152226.cljs$lang$applyTo = (function (arglist__152227){
var x = cljs.core.first(arglist__152227);
var y = cljs.core.first(cljs.core.next(arglist__152227));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152227)));
return G__152226__delegate.call(this, x, y, z, args);
});
return G__152226;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__152220.call(this);
case  1 :
return spn__152221.call(this,x);
case  2 :
return spn__152222.call(this,x,y);
case  3 :
return spn__152223.call(this,x,y,z);
default:
return spn__152224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__152224.cljs$lang$applyTo;
return spn;
})()
};
var G__152219 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152219__delegate.call(this, p1, p2, p3, ps);
};
G__152219.cljs$lang$maxFixedArity = 3;
G__152219.cljs$lang$applyTo = (function (arglist__152228){
var p1 = cljs.core.first(arglist__152228);
var p2 = cljs.core.first(cljs.core.next(arglist__152228));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152228)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152228)));
return G__152219__delegate.call(this, p1, p2, p3, ps);
});
return G__152219;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__152190.call(this,p1);
case  2 :
return some_fn__152191.call(this,p1,p2);
case  3 :
return some_fn__152192.call(this,p1,p2,p3);
default:
return some_fn__152193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__152193.cljs$lang$applyTo;
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
var map__152241 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152229 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152229))
{var s__152230 = temp__3698__auto____152229;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__152230)),map.call(null,f,cljs.core.rest.call(null,s__152230)));
} else
{return null;
}
})));
});
var map__152242 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__152231 = cljs.core.seq.call(null,c1);
var s2__152232 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____152233 = s1__152231;

if(cljs.core.truth_(and__3546__auto____152233))
{return s2__152232;
} else
{return and__3546__auto____152233;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__152231),cljs.core.first.call(null,s2__152232)),map.call(null,f,cljs.core.rest.call(null,s1__152231),cljs.core.rest.call(null,s2__152232)));
} else
{return null;
}
})));
});
var map__152243 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__152234 = cljs.core.seq.call(null,c1);
var s2__152235 = cljs.core.seq.call(null,c2);
var s3__152236 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____152237 = s1__152234;

if(cljs.core.truth_(and__3546__auto____152237))
{var and__3546__auto____152238 = s2__152235;

if(cljs.core.truth_(and__3546__auto____152238))
{return s3__152236;
} else
{return and__3546__auto____152238;
}
} else
{return and__3546__auto____152237;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__152234),cljs.core.first.call(null,s2__152235),cljs.core.first.call(null,s3__152236)),map.call(null,f,cljs.core.rest.call(null,s1__152234),cljs.core.rest.call(null,s2__152235),cljs.core.rest.call(null,s3__152236)));
} else
{return null;
}
})));
});
var map__152244 = (function() { 
var G__152246__delegate = function (f,c1,c2,c3,colls){
var step__152240 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__152239 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__152239)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__152239),step.call(null,map.call(null,cljs.core.rest,ss__152239)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__152151_SHARP_){
return cljs.core.apply.call(null,f,p1__152151_SHARP_);
}),step__152240.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__152246 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__152246__delegate.call(this, f, c1, c2, c3, colls);
};
G__152246.cljs$lang$maxFixedArity = 4;
G__152246.cljs$lang$applyTo = (function (arglist__152247){
var f = cljs.core.first(arglist__152247);
var c1 = cljs.core.first(cljs.core.next(arglist__152247));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152247)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__152247))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__152247))));
return G__152246__delegate.call(this, f, c1, c2, c3, colls);
});
return G__152246;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__152241.call(this,f,c1);
case  3 :
return map__152242.call(this,f,c1,c2);
case  4 :
return map__152243.call(this,f,c1,c2,c3);
default:
return map__152244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__152244.cljs$lang$applyTo;
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
{var temp__3698__auto____152248 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152248))
{var s__152249 = temp__3698__auto____152248;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__152249),take.call(null,(n - 1),cljs.core.rest.call(null,s__152249)));
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
var step__152252 = (function (n,coll){
while(true){
var s__152250 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____152251 = (n > 0);

if(cljs.core.truth_(and__3546__auto____152251))
{return s__152250;
} else
{return and__3546__auto____152251;
}
})()))
{{
var G__152253 = (n - 1);
var G__152254 = cljs.core.rest.call(null,s__152250);
n = G__152253;
coll = G__152254;
continue;
}
} else
{return s__152250;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__152252.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__152255 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__152256 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__152255.call(this,n);
case  2 :
return drop_last__152256.call(this,n,s);
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
var s__152258 = cljs.core.seq.call(null,coll);
var lead__152259 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__152259))
{{
var G__152260 = cljs.core.next.call(null,s__152258);
var G__152261 = cljs.core.next.call(null,lead__152259);
s__152258 = G__152260;
lead__152259 = G__152261;
continue;
}
} else
{return s__152258;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__152264 = (function (pred,coll){
while(true){
var s__152262 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____152263 = s__152262;

if(cljs.core.truth_(and__3546__auto____152263))
{return pred.call(null,cljs.core.first.call(null,s__152262));
} else
{return and__3546__auto____152263;
}
})()))
{{
var G__152265 = pred;
var G__152266 = cljs.core.rest.call(null,s__152262);
pred = G__152265;
coll = G__152266;
continue;
}
} else
{return s__152262;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__152264.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152267))
{var s__152268 = temp__3698__auto____152267;

return cljs.core.concat.call(null,s__152268,cycle.call(null,s__152268));
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
var repeat__152269 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__152270 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__152269.call(this,n);
case  2 :
return repeat__152270.call(this,n,x);
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
var repeatedly__152272 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__152273 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__152272.call(this,n);
case  2 :
return repeatedly__152273.call(this,n,f);
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
var interleave__152279 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__152275 = cljs.core.seq.call(null,c1);
var s2__152276 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____152277 = s1__152275;

if(cljs.core.truth_(and__3546__auto____152277))
{return s2__152276;
} else
{return and__3546__auto____152277;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__152275),cljs.core.cons.call(null,cljs.core.first.call(null,s2__152276),interleave.call(null,cljs.core.rest.call(null,s1__152275),cljs.core.rest.call(null,s2__152276))));
} else
{return null;
}
})));
});
var interleave__152280 = (function() { 
var G__152282__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__152278 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__152278)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__152278),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__152278)));
} else
{return null;
}
})));
};
var G__152282 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__152282__delegate.call(this, c1, c2, colls);
};
G__152282.cljs$lang$maxFixedArity = 2;
G__152282.cljs$lang$applyTo = (function (arglist__152283){
var c1 = cljs.core.first(arglist__152283);
var c2 = cljs.core.first(cljs.core.next(arglist__152283));
var colls = cljs.core.rest(cljs.core.next(arglist__152283));
return G__152282__delegate.call(this, c1, c2, colls);
});
return G__152282;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__152279.call(this,c1,c2);
default:
return interleave__152280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__152280.cljs$lang$applyTo;
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
var cat__152286 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____152284 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____152284))
{var coll__152285 = temp__3695__auto____152284;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__152285),cat.call(null,cljs.core.rest.call(null,coll__152285),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__152286.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__152287 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__152288 = (function() { 
var G__152290__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__152290 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__152290__delegate.call(this, f, coll, colls);
};
G__152290.cljs$lang$maxFixedArity = 2;
G__152290.cljs$lang$applyTo = (function (arglist__152291){
var f = cljs.core.first(arglist__152291);
var coll = cljs.core.first(cljs.core.next(arglist__152291));
var colls = cljs.core.rest(cljs.core.next(arglist__152291));
return G__152290__delegate.call(this, f, coll, colls);
});
return G__152290;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__152287.call(this,f,coll);
default:
return mapcat__152288.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__152288.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152292 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152292))
{var s__152293 = temp__3698__auto____152292;

var f__152294 = cljs.core.first.call(null,s__152293);
var r__152295 = cljs.core.rest.call(null,s__152293);

if(cljs.core.truth_(pred.call(null,f__152294)))
{return cljs.core.cons.call(null,f__152294,filter.call(null,pred,r__152295));
} else
{return filter.call(null,pred,r__152295);
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
var walk__152297 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__152297.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__152296_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__152296_SHARP_));
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
var partition__152304 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__152305 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152298 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152298))
{var s__152299 = temp__3698__auto____152298;

var p__152300 = cljs.core.take.call(null,n,s__152299);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__152300))))
{return cljs.core.cons.call(null,p__152300,partition.call(null,n,step,cljs.core.drop.call(null,step,s__152299)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__152306 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152301 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152301))
{var s__152302 = temp__3698__auto____152301;

var p__152303 = cljs.core.take.call(null,n,s__152302);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__152303))))
{return cljs.core.cons.call(null,p__152303,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__152302)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__152303,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__152304.call(this,n,step);
case  3 :
return partition__152305.call(this,n,step,pad);
case  4 :
return partition__152306.call(this,n,step,pad,coll);
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
var get_in__152312 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__152313 = (function (m,ks,not_found){
var sentinel__152308 = cljs.core.lookup_sentinel;
var m__152309 = m;
var ks__152310 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__152310))
{var m__152311 = cljs.core.get.call(null,m__152309,cljs.core.first.call(null,ks__152310),sentinel__152308);

if(cljs.core.truth_((sentinel__152308 === m__152311)))
{return not_found;
} else
{{
var G__152315 = sentinel__152308;
var G__152316 = m__152311;
var G__152317 = cljs.core.next.call(null,ks__152310);
sentinel__152308 = G__152315;
m__152309 = G__152316;
ks__152310 = G__152317;
continue;
}
}
} else
{return m__152309;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__152312.call(this,m,ks);
case  3 :
return get_in__152313.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__152318,v){
var vec__152319__152320 = p__152318;
var k__152321 = cljs.core.nth.call(null,vec__152319__152320,0,null);
var ks__152322 = cljs.core.nthnext.call(null,vec__152319__152320,1);

if(cljs.core.truth_(ks__152322))
{return cljs.core.assoc.call(null,m,k__152321,assoc_in.call(null,cljs.core.get.call(null,m,k__152321),ks__152322,v));
} else
{return cljs.core.assoc.call(null,m,k__152321,v);
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
var update_in__delegate = function (m,p__152323,f,args){
var vec__152324__152325 = p__152323;
var k__152326 = cljs.core.nth.call(null,vec__152324__152325,0,null);
var ks__152327 = cljs.core.nthnext.call(null,vec__152324__152325,1);

if(cljs.core.truth_(ks__152327))
{return cljs.core.assoc.call(null,m,k__152326,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__152326),ks__152327,f,args));
} else
{return cljs.core.assoc.call(null,m,k__152326,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__152326),args));
}
};
var update_in = function (m,p__152323,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__152323, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__152328){
var m = cljs.core.first(arglist__152328);
var p__152323 = cljs.core.first(cljs.core.next(arglist__152328));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152328)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152328)));
return update_in__delegate.call(this, m, p__152323, f, args);
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
var this__152329 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__152362 = null;
var G__152362__152363 = (function (coll,k){
var this__152330 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__152362__152364 = (function (coll,k,not_found){
var this__152331 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__152362 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__152362__152363.call(this,coll,k);
case  3 :
return G__152362__152364.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152362;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__152332 = this;
var new_array__152333 = cljs.core.aclone.call(null,this__152332.array);

(new_array__152333[k] = v);
return (new cljs.core.Vector(this__152332.meta,new_array__152333));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__152366 = null;
var G__152366__152367 = (function (tsym152334,k){
var this__152336 = this;
var tsym152334__152337 = this;

var coll__152338 = tsym152334__152337;

return cljs.core._lookup.call(null,coll__152338,k);
});
var G__152366__152368 = (function (tsym152335,k,not_found){
var this__152339 = this;
var tsym152335__152340 = this;

var coll__152341 = tsym152335__152340;

return cljs.core._lookup.call(null,coll__152341,k,not_found);
});
G__152366 = function(tsym152335,k,not_found){
switch(arguments.length){
case  2 :
return G__152366__152367.call(this,tsym152335,k);
case  3 :
return G__152366__152368.call(this,tsym152335,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152366;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__152342 = this;
var new_array__152343 = cljs.core.aclone.call(null,this__152342.array);

new_array__152343.push(o);
return (new cljs.core.Vector(this__152342.meta,new_array__152343));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__152370 = null;
var G__152370__152371 = (function (v,f){
var this__152344 = this;
return cljs.core.ci_reduce.call(null,this__152344.array,f);
});
var G__152370__152372 = (function (v,f,start){
var this__152345 = this;
return cljs.core.ci_reduce.call(null,this__152345.array,f,start);
});
G__152370 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__152370__152371.call(this,v,f);
case  3 :
return G__152370__152372.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152370;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__152346 = this;
if(cljs.core.truth_((this__152346.array.length > 0)))
{var vector_seq__152347 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__152346.array.length)))
{return cljs.core.cons.call(null,(this__152346.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__152347.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__152348 = this;
return this__152348.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__152349 = this;
var count__152350 = this__152349.array.length;

if(cljs.core.truth_((count__152350 > 0)))
{return (this__152349.array[(count__152350 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__152351 = this;
if(cljs.core.truth_((this__152351.array.length > 0)))
{var new_array__152352 = cljs.core.aclone.call(null,this__152351.array);

new_array__152352.pop();
return (new cljs.core.Vector(this__152351.meta,new_array__152352));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__152353 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__152354 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__152355 = this;
return (new cljs.core.Vector(meta,this__152355.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__152356 = this;
return this__152356.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__152374 = null;
var G__152374__152375 = (function (coll,n){
var this__152357 = this;
if(cljs.core.truth_((function (){var and__3546__auto____152358 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____152358))
{return (n < this__152357.array.length);
} else
{return and__3546__auto____152358;
}
})()))
{return (this__152357.array[n]);
} else
{return null;
}
});
var G__152374__152376 = (function (coll,n,not_found){
var this__152359 = this;
if(cljs.core.truth_((function (){var and__3546__auto____152360 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____152360))
{return (n < this__152359.array.length);
} else
{return and__3546__auto____152360;
}
})()))
{return (this__152359.array[n]);
} else
{return not_found;
}
});
G__152374 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__152374__152375.call(this,coll,n);
case  3 :
return G__152374__152376.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152374;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__152361 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__152361.meta);
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
vector.cljs$lang$applyTo = (function (arglist__152378){
var args = cljs.core.seq( arglist__152378 );;
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
var this__152379 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__152407 = null;
var G__152407__152408 = (function (coll,k){
var this__152380 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__152407__152409 = (function (coll,k,not_found){
var this__152381 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__152407 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__152407__152408.call(this,coll,k);
case  3 :
return G__152407__152409.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152407;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__152382 = this;
var v_pos__152383 = (this__152382.start + key);

return (new cljs.core.Subvec(this__152382.meta,cljs.core._assoc.call(null,this__152382.v,v_pos__152383,val),this__152382.start,((this__152382.end > (v_pos__152383 + 1)) ? this__152382.end : (v_pos__152383 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__152411 = null;
var G__152411__152412 = (function (tsym152384,k){
var this__152386 = this;
var tsym152384__152387 = this;

var coll__152388 = tsym152384__152387;

return cljs.core._lookup.call(null,coll__152388,k);
});
var G__152411__152413 = (function (tsym152385,k,not_found){
var this__152389 = this;
var tsym152385__152390 = this;

var coll__152391 = tsym152385__152390;

return cljs.core._lookup.call(null,coll__152391,k,not_found);
});
G__152411 = function(tsym152385,k,not_found){
switch(arguments.length){
case  2 :
return G__152411__152412.call(this,tsym152385,k);
case  3 :
return G__152411__152413.call(this,tsym152385,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152411;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__152392 = this;
return (new cljs.core.Subvec(this__152392.meta,cljs.core._assoc_n.call(null,this__152392.v,this__152392.end,o),this__152392.start,(this__152392.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__152415 = null;
var G__152415__152416 = (function (coll,f){
var this__152393 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__152415__152417 = (function (coll,f,start){
var this__152394 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__152415 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__152415__152416.call(this,coll,f);
case  3 :
return G__152415__152417.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152415;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__152395 = this;
var subvec_seq__152396 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__152395.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__152395.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__152396.call(null,this__152395.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__152397 = this;
return (this__152397.end - this__152397.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__152398 = this;
return cljs.core._nth.call(null,this__152398.v,(this__152398.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__152399 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__152399.start,this__152399.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__152399.meta,this__152399.v,this__152399.start,(this__152399.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__152400 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__152401 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__152402 = this;
return (new cljs.core.Subvec(meta,this__152402.v,this__152402.start,this__152402.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__152403 = this;
return this__152403.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__152419 = null;
var G__152419__152420 = (function (coll,n){
var this__152404 = this;
return cljs.core._nth.call(null,this__152404.v,(this__152404.start + n));
});
var G__152419__152421 = (function (coll,n,not_found){
var this__152405 = this;
return cljs.core._nth.call(null,this__152405.v,(this__152405.start + n),not_found);
});
G__152419 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__152419__152420.call(this,coll,n);
case  3 :
return G__152419__152421.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152419;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__152406 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__152406.meta);
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
var subvec__152423 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__152424 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__152423.call(this,v,start);
case  3 :
return subvec__152424.call(this,v,start,end);
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
var this__152426 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__152427 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__152428 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__152429 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__152429.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__152430 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__152431 = this;
return cljs.core._first.call(null,this__152431.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__152432 = this;
var temp__3695__auto____152433 = cljs.core.next.call(null,this__152432.front);

if(cljs.core.truth_(temp__3695__auto____152433))
{var f1__152434 = temp__3695__auto____152433;

return (new cljs.core.PersistentQueueSeq(this__152432.meta,f1__152434,this__152432.rear));
} else
{if(cljs.core.truth_((this__152432.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__152432.meta,this__152432.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__152435 = this;
return this__152435.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__152436 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__152436.front,this__152436.rear));
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
var this__152437 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__152438 = this;
if(cljs.core.truth_(this__152438.front))
{return (new cljs.core.PersistentQueue(this__152438.meta,(this__152438.count + 1),this__152438.front,cljs.core.conj.call(null,(function (){var or__3548__auto____152439 = this__152438.rear;

if(cljs.core.truth_(or__3548__auto____152439))
{return or__3548__auto____152439;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__152438.meta,(this__152438.count + 1),cljs.core.conj.call(null,this__152438.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__152440 = this;
var rear__152441 = cljs.core.seq.call(null,this__152440.rear);

if(cljs.core.truth_((function (){var or__3548__auto____152442 = this__152440.front;

if(cljs.core.truth_(or__3548__auto____152442))
{return or__3548__auto____152442;
} else
{return rear__152441;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__152440.front,cljs.core.seq.call(null,rear__152441)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__152443 = this;
return this__152443.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__152444 = this;
return cljs.core._first.call(null,this__152444.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__152445 = this;
if(cljs.core.truth_(this__152445.front))
{var temp__3695__auto____152446 = cljs.core.next.call(null,this__152445.front);

if(cljs.core.truth_(temp__3695__auto____152446))
{var f1__152447 = temp__3695__auto____152446;

return (new cljs.core.PersistentQueue(this__152445.meta,(this__152445.count - 1),f1__152447,this__152445.rear));
} else
{return (new cljs.core.PersistentQueue(this__152445.meta,(this__152445.count - 1),cljs.core.seq.call(null,this__152445.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__152448 = this;
return cljs.core.first.call(null,this__152448.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__152449 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__152450 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__152451 = this;
return (new cljs.core.PersistentQueue(meta,this__152451.count,this__152451.front,this__152451.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__152452 = this;
return this__152452.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__152453 = this;
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
var this__152454 = this;
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
var len__152455 = array.length;

var i__152456 = 0;

while(true){
if(cljs.core.truth_((i__152456 < len__152455)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__152456]))))
{return i__152456;
} else
{{
var G__152457 = (i__152456 + incr);
i__152456 = G__152457;
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
var obj_map_contains_key_QMARK___152459 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___152460 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____152458 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____152458))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____152458;
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
return obj_map_contains_key_QMARK___152459.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___152460.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__152463 = cljs.core.hash.call(null,a);
var b__152464 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__152463 < b__152464)))
{return -1;
} else
{if(cljs.core.truth_((a__152463 > b__152464)))
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
var this__152465 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__152492 = null;
var G__152492__152493 = (function (coll,k){
var this__152466 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__152492__152494 = (function (coll,k,not_found){
var this__152467 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__152467.strobj,(this__152467.strobj[k]),not_found);
});
G__152492 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__152492__152493.call(this,coll,k);
case  3 :
return G__152492__152494.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152492;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__152468 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__152469 = goog.object.clone.call(null,this__152468.strobj);
var overwrite_QMARK___152470 = new_strobj__152469.hasOwnProperty(k);

(new_strobj__152469[k] = v);
if(cljs.core.truth_(overwrite_QMARK___152470))
{return (new cljs.core.ObjMap(this__152468.meta,this__152468.keys,new_strobj__152469));
} else
{var new_keys__152471 = cljs.core.aclone.call(null,this__152468.keys);

new_keys__152471.push(k);
return (new cljs.core.ObjMap(this__152468.meta,new_keys__152471,new_strobj__152469));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__152468.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__152472 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__152472.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__152496 = null;
var G__152496__152497 = (function (tsym152473,k){
var this__152475 = this;
var tsym152473__152476 = this;

var coll__152477 = tsym152473__152476;

return cljs.core._lookup.call(null,coll__152477,k);
});
var G__152496__152498 = (function (tsym152474,k,not_found){
var this__152478 = this;
var tsym152474__152479 = this;

var coll__152480 = tsym152474__152479;

return cljs.core._lookup.call(null,coll__152480,k,not_found);
});
G__152496 = function(tsym152474,k,not_found){
switch(arguments.length){
case  2 :
return G__152496__152497.call(this,tsym152474,k);
case  3 :
return G__152496__152498.call(this,tsym152474,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152496;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__152481 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__152482 = this;
if(cljs.core.truth_((this__152482.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__152462_SHARP_){
return cljs.core.vector.call(null,p1__152462_SHARP_,(this__152482.strobj[p1__152462_SHARP_]));
}),this__152482.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__152483 = this;
return this__152483.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__152484 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__152485 = this;
return (new cljs.core.ObjMap(meta,this__152485.keys,this__152485.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__152486 = this;
return this__152486.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__152487 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__152487.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__152488 = this;
if(cljs.core.truth_((function (){var and__3546__auto____152489 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____152489))
{return this__152488.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____152489;
}
})()))
{var new_keys__152490 = cljs.core.aclone.call(null,this__152488.keys);
var new_strobj__152491 = goog.object.clone.call(null,this__152488.strobj);

new_keys__152490.splice(cljs.core.scan_array.call(null,1,k,new_keys__152490),1);
cljs.core.js_delete.call(null,new_strobj__152491,k);
return (new cljs.core.ObjMap(this__152488.meta,new_keys__152490,new_strobj__152491));
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
var this__152501 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__152539 = null;
var G__152539__152540 = (function (coll,k){
var this__152502 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__152539__152541 = (function (coll,k,not_found){
var this__152503 = this;
var bucket__152504 = (this__152503.hashobj[cljs.core.hash.call(null,k)]);
var i__152505 = (cljs.core.truth_(bucket__152504)?cljs.core.scan_array.call(null,2,k,bucket__152504):null);

if(cljs.core.truth_(i__152505))
{return (bucket__152504[(i__152505 + 1)]);
} else
{return not_found;
}
});
G__152539 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__152539__152540.call(this,coll,k);
case  3 :
return G__152539__152541.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152539;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__152506 = this;
var h__152507 = cljs.core.hash.call(null,k);
var bucket__152508 = (this__152506.hashobj[h__152507]);

if(cljs.core.truth_(bucket__152508))
{var new_bucket__152509 = cljs.core.aclone.call(null,bucket__152508);
var new_hashobj__152510 = goog.object.clone.call(null,this__152506.hashobj);

(new_hashobj__152510[h__152507] = new_bucket__152509);
var temp__3695__auto____152511 = cljs.core.scan_array.call(null,2,k,new_bucket__152509);

if(cljs.core.truth_(temp__3695__auto____152511))
{var i__152512 = temp__3695__auto____152511;

(new_bucket__152509[(i__152512 + 1)] = v);
return (new cljs.core.HashMap(this__152506.meta,this__152506.count,new_hashobj__152510));
} else
{new_bucket__152509.push(k,v);
return (new cljs.core.HashMap(this__152506.meta,(this__152506.count + 1),new_hashobj__152510));
}
} else
{var new_hashobj__152513 = goog.object.clone.call(null,this__152506.hashobj);

(new_hashobj__152513[h__152507] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__152506.meta,(this__152506.count + 1),new_hashobj__152513));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__152514 = this;
var bucket__152515 = (this__152514.hashobj[cljs.core.hash.call(null,k)]);
var i__152516 = (cljs.core.truth_(bucket__152515)?cljs.core.scan_array.call(null,2,k,bucket__152515):null);

if(cljs.core.truth_(i__152516))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__152543 = null;
var G__152543__152544 = (function (tsym152517,k){
var this__152519 = this;
var tsym152517__152520 = this;

var coll__152521 = tsym152517__152520;

return cljs.core._lookup.call(null,coll__152521,k);
});
var G__152543__152545 = (function (tsym152518,k,not_found){
var this__152522 = this;
var tsym152518__152523 = this;

var coll__152524 = tsym152518__152523;

return cljs.core._lookup.call(null,coll__152524,k,not_found);
});
G__152543 = function(tsym152518,k,not_found){
switch(arguments.length){
case  2 :
return G__152543__152544.call(this,tsym152518,k);
case  3 :
return G__152543__152545.call(this,tsym152518,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152543;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__152525 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__152526 = this;
if(cljs.core.truth_((this__152526.count > 0)))
{var hashes__152527 = cljs.core.js_keys.call(null,this__152526.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__152500_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__152526.hashobj[p1__152500_SHARP_])));
}),hashes__152527);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__152528 = this;
return this__152528.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__152529 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__152530 = this;
return (new cljs.core.HashMap(meta,this__152530.count,this__152530.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__152531 = this;
return this__152531.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__152532 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__152532.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__152533 = this;
var h__152534 = cljs.core.hash.call(null,k);
var bucket__152535 = (this__152533.hashobj[h__152534]);
var i__152536 = (cljs.core.truth_(bucket__152535)?cljs.core.scan_array.call(null,2,k,bucket__152535):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__152536)))
{return coll;
} else
{var new_hashobj__152537 = goog.object.clone.call(null,this__152533.hashobj);

if(cljs.core.truth_((3 > bucket__152535.length)))
{cljs.core.js_delete.call(null,new_hashobj__152537,h__152534);
} else
{var new_bucket__152538 = cljs.core.aclone.call(null,bucket__152535);

new_bucket__152538.splice(i__152536,2);
(new_hashobj__152537[h__152534] = new_bucket__152538);
}
return (new cljs.core.HashMap(this__152533.meta,(this__152533.count - 1),new_hashobj__152537));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__152547 = ks.length;

var i__152548 = 0;
var out__152549 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__152548 < len__152547)))
{{
var G__152550 = (i__152548 + 1);
var G__152551 = cljs.core.assoc.call(null,out__152549,(ks[i__152548]),(vs[i__152548]));
i__152548 = G__152550;
out__152549 = G__152551;
continue;
}
} else
{return out__152549;
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
var in$__152552 = cljs.core.seq.call(null,keyvals);
var out__152553 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__152552))
{{
var G__152554 = cljs.core.nnext.call(null,in$__152552);
var G__152555 = cljs.core.assoc.call(null,out__152553,cljs.core.first.call(null,in$__152552),cljs.core.second.call(null,in$__152552));
in$__152552 = G__152554;
out__152553 = G__152555;
continue;
}
} else
{return out__152553;
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
hash_map.cljs$lang$applyTo = (function (arglist__152556){
var keyvals = cljs.core.seq( arglist__152556 );;
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
{return cljs.core.reduce.call(null,(function (p1__152557_SHARP_,p2__152558_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____152559 = p1__152557_SHARP_;

if(cljs.core.truth_(or__3548__auto____152559))
{return or__3548__auto____152559;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__152558_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__152560){
var maps = cljs.core.seq( arglist__152560 );;
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
{var merge_entry__152563 = (function (m,e){
var k__152561 = cljs.core.first.call(null,e);
var v__152562 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__152561)))
{return cljs.core.assoc.call(null,m,k__152561,f.call(null,cljs.core.get.call(null,m,k__152561),v__152562));
} else
{return cljs.core.assoc.call(null,m,k__152561,v__152562);
}
});
var merge2__152565 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__152563,(function (){var or__3548__auto____152564 = m1;

if(cljs.core.truth_(or__3548__auto____152564))
{return or__3548__auto____152564;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__152565,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__152566){
var f = cljs.core.first(arglist__152566);
var maps = cljs.core.rest(arglist__152566);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__152568 = cljs.core.ObjMap.fromObject([],{});
var keys__152569 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__152569))
{var key__152570 = cljs.core.first.call(null,keys__152569);
var entry__152571 = cljs.core.get.call(null,map,key__152570,"\uFDD0'user/not-found");

{
var G__152572 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__152571,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__152568,key__152570,entry__152571):ret__152568);
var G__152573 = cljs.core.next.call(null,keys__152569);
ret__152568 = G__152572;
keys__152569 = G__152573;
continue;
}
} else
{return ret__152568;
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
var this__152574 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__152595 = null;
var G__152595__152596 = (function (coll,v){
var this__152575 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__152595__152597 = (function (coll,v,not_found){
var this__152576 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__152576.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__152595 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__152595__152596.call(this,coll,v);
case  3 :
return G__152595__152597.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152595;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__152599 = null;
var G__152599__152600 = (function (tsym152577,k){
var this__152579 = this;
var tsym152577__152580 = this;

var coll__152581 = tsym152577__152580;

return cljs.core._lookup.call(null,coll__152581,k);
});
var G__152599__152601 = (function (tsym152578,k,not_found){
var this__152582 = this;
var tsym152578__152583 = this;

var coll__152584 = tsym152578__152583;

return cljs.core._lookup.call(null,coll__152584,k,not_found);
});
G__152599 = function(tsym152578,k,not_found){
switch(arguments.length){
case  2 :
return G__152599__152600.call(this,tsym152578,k);
case  3 :
return G__152599__152601.call(this,tsym152578,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152599;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__152585 = this;
return (new cljs.core.Set(this__152585.meta,cljs.core.assoc.call(null,this__152585.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__152586 = this;
return cljs.core.keys.call(null,this__152586.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__152587 = this;
return (new cljs.core.Set(this__152587.meta,cljs.core.dissoc.call(null,this__152587.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__152588 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__152589 = this;
var and__3546__auto____152590 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____152590))
{var and__3546__auto____152591 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____152591))
{return cljs.core.every_QMARK_.call(null,(function (p1__152567_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__152567_SHARP_);
}),other);
} else
{return and__3546__auto____152591;
}
} else
{return and__3546__auto____152590;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__152592 = this;
return (new cljs.core.Set(meta,this__152592.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__152593 = this;
return this__152593.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__152594 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__152594.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__152604 = cljs.core.seq.call(null,coll);
var out__152605 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__152604))))
{{
var G__152606 = cljs.core.rest.call(null,in$__152604);
var G__152607 = cljs.core.conj.call(null,out__152605,cljs.core.first.call(null,in$__152604));
in$__152604 = G__152606;
out__152605 = G__152607;
continue;
}
} else
{return out__152605;
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
{var n__152608 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____152609 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____152609))
{var e__152610 = temp__3695__auto____152609;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__152610));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__152608,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__152603_SHARP_){
var temp__3695__auto____152611 = cljs.core.find.call(null,smap,p1__152603_SHARP_);

if(cljs.core.truth_(temp__3695__auto____152611))
{var e__152612 = temp__3695__auto____152611;

return cljs.core.second.call(null,e__152612);
} else
{return p1__152603_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__152620 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__152613,seen){
while(true){
var vec__152614__152615 = p__152613;
var f__152616 = cljs.core.nth.call(null,vec__152614__152615,0,null);
var xs__152617 = vec__152614__152615;

var temp__3698__auto____152618 = cljs.core.seq.call(null,xs__152617);

if(cljs.core.truth_(temp__3698__auto____152618))
{var s__152619 = temp__3698__auto____152618;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__152616)))
{{
var G__152621 = cljs.core.rest.call(null,s__152619);
var G__152622 = seen;
p__152613 = G__152621;
seen = G__152622;
continue;
}
} else
{return cljs.core.cons.call(null,f__152616,step.call(null,cljs.core.rest.call(null,s__152619),cljs.core.conj.call(null,seen,f__152616)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__152620.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__152623 = cljs.core.Vector.fromArray([]);
var s__152624 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__152624)))
{{
var G__152625 = cljs.core.conj.call(null,ret__152623,cljs.core.first.call(null,s__152624));
var G__152626 = cljs.core.next.call(null,s__152624);
ret__152623 = G__152625;
s__152624 = G__152626;
continue;
}
} else
{return cljs.core.seq.call(null,ret__152623);
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
{if(cljs.core.truth_((function (){var or__3548__auto____152627 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____152627))
{return or__3548__auto____152627;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__152628 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__152628 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__152628 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____152629 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____152629))
{return or__3548__auto____152629;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__152630 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__152630 > -1)))
{return cljs.core.subs.call(null,x,2,i__152630);
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
var map__152633 = cljs.core.ObjMap.fromObject([],{});
var ks__152634 = cljs.core.seq.call(null,keys);
var vs__152635 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____152636 = ks__152634;

if(cljs.core.truth_(and__3546__auto____152636))
{return vs__152635;
} else
{return and__3546__auto____152636;
}
})()))
{{
var G__152637 = cljs.core.assoc.call(null,map__152633,cljs.core.first.call(null,ks__152634),cljs.core.first.call(null,vs__152635));
var G__152638 = cljs.core.next.call(null,ks__152634);
var G__152639 = cljs.core.next.call(null,vs__152635);
map__152633 = G__152637;
ks__152634 = G__152638;
vs__152635 = G__152639;
continue;
}
} else
{return map__152633;
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
var max_key__152642 = (function (k,x){
return x;
});
var max_key__152643 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__152644 = (function() { 
var G__152646__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__152631_SHARP_,p2__152632_SHARP_){
return max_key.call(null,k,p1__152631_SHARP_,p2__152632_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__152646 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152646__delegate.call(this, k, x, y, more);
};
G__152646.cljs$lang$maxFixedArity = 3;
G__152646.cljs$lang$applyTo = (function (arglist__152647){
var k = cljs.core.first(arglist__152647);
var x = cljs.core.first(cljs.core.next(arglist__152647));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152647)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152647)));
return G__152646__delegate.call(this, k, x, y, more);
});
return G__152646;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__152642.call(this,k,x);
case  3 :
return max_key__152643.call(this,k,x,y);
default:
return max_key__152644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__152644.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__152648 = (function (k,x){
return x;
});
var min_key__152649 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__152650 = (function() { 
var G__152652__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__152640_SHARP_,p2__152641_SHARP_){
return min_key.call(null,k,p1__152640_SHARP_,p2__152641_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__152652 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152652__delegate.call(this, k, x, y, more);
};
G__152652.cljs$lang$maxFixedArity = 3;
G__152652.cljs$lang$applyTo = (function (arglist__152653){
var k = cljs.core.first(arglist__152653);
var x = cljs.core.first(cljs.core.next(arglist__152653));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152653)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152653)));
return G__152652__delegate.call(this, k, x, y, more);
});
return G__152652;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__152648.call(this,k,x);
case  3 :
return min_key__152649.call(this,k,x,y);
default:
return min_key__152650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__152650.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__152656 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__152657 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152654 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152654))
{var s__152655 = temp__3698__auto____152654;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__152655),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__152655)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__152656.call(this,n,step);
case  3 :
return partition_all__152657.call(this,n,step,coll);
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
var temp__3698__auto____152659 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152659))
{var s__152660 = temp__3698__auto____152659;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__152660))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__152660),take_while.call(null,pred,cljs.core.rest.call(null,s__152660)));
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
var this__152661 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__152662 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__152678 = null;
var G__152678__152679 = (function (rng,f){
var this__152663 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__152678__152680 = (function (rng,f,s){
var this__152664 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__152678 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__152678__152679.call(this,rng,f);
case  3 :
return G__152678__152680.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152678;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__152665 = this;
var comp__152666 = (cljs.core.truth_((this__152665.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__152666.call(null,this__152665.start,this__152665.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__152667 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__152667.end - this__152667.start) / this__152667.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__152668 = this;
return this__152668.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__152669 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__152669.meta,(this__152669.start + this__152669.step),this__152669.end,this__152669.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__152670 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__152671 = this;
return (new cljs.core.Range(meta,this__152671.start,this__152671.end,this__152671.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__152672 = this;
return this__152672.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__152682 = null;
var G__152682__152683 = (function (rng,n){
var this__152673 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__152673.start + (n * this__152673.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____152674 = (this__152673.start > this__152673.end);

if(cljs.core.truth_(and__3546__auto____152674))
{return cljs.core._EQ_.call(null,this__152673.step,0);
} else
{return and__3546__auto____152674;
}
})()))
{return this__152673.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__152682__152684 = (function (rng,n,not_found){
var this__152675 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__152675.start + (n * this__152675.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____152676 = (this__152675.start > this__152675.end);

if(cljs.core.truth_(and__3546__auto____152676))
{return cljs.core._EQ_.call(null,this__152675.step,0);
} else
{return and__3546__auto____152676;
}
})()))
{return this__152675.start;
} else
{return not_found;
}
}
});
G__152682 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__152682__152683.call(this,rng,n);
case  3 :
return G__152682__152684.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__152682;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__152677 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__152677.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__152686 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__152687 = (function (end){
return range.call(null,0,end,1);
});
var range__152688 = (function (start,end){
return range.call(null,start,end,1);
});
var range__152689 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__152686.call(this);
case  1 :
return range__152687.call(this,start);
case  2 :
return range__152688.call(this,start,end);
case  3 :
return range__152689.call(this,start,end,step);
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
var temp__3698__auto____152691 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152691))
{var s__152692 = temp__3698__auto____152691;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__152692),take_nth.call(null,n,cljs.core.drop.call(null,n,s__152692)));
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
var temp__3698__auto____152694 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152694))
{var s__152695 = temp__3698__auto____152694;

var fst__152696 = cljs.core.first.call(null,s__152695);
var fv__152697 = f.call(null,fst__152696);
var run__152698 = cljs.core.cons.call(null,fst__152696,cljs.core.take_while.call(null,(function (p1__152693_SHARP_){
return cljs.core._EQ_.call(null,fv__152697,f.call(null,p1__152693_SHARP_));
}),cljs.core.next.call(null,s__152695)));

return cljs.core.cons.call(null,run__152698,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__152698),s__152695))));
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
var reductions__152713 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____152709 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____152709))
{var s__152710 = temp__3695__auto____152709;

return reductions.call(null,f,cljs.core.first.call(null,s__152710),cljs.core.rest.call(null,s__152710));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__152714 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____152711 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____152711))
{var s__152712 = temp__3698__auto____152711;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__152712)),cljs.core.rest.call(null,s__152712));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__152713.call(this,f,init);
case  3 :
return reductions__152714.call(this,f,init,coll);
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
var juxt__152717 = (function (f){
return (function() {
var G__152722 = null;
var G__152722__152723 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__152722__152724 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__152722__152725 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__152722__152726 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__152722__152727 = (function() { 
var G__152729__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__152729 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152729__delegate.call(this, x, y, z, args);
};
G__152729.cljs$lang$maxFixedArity = 3;
G__152729.cljs$lang$applyTo = (function (arglist__152730){
var x = cljs.core.first(arglist__152730);
var y = cljs.core.first(cljs.core.next(arglist__152730));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152730)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152730)));
return G__152729__delegate.call(this, x, y, z, args);
});
return G__152729;
})()
;
G__152722 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__152722__152723.call(this);
case  1 :
return G__152722__152724.call(this,x);
case  2 :
return G__152722__152725.call(this,x,y);
case  3 :
return G__152722__152726.call(this,x,y,z);
default:
return G__152722__152727.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__152722.cljs$lang$maxFixedArity = 3;
G__152722.cljs$lang$applyTo = G__152722__152727.cljs$lang$applyTo;
return G__152722;
})()
});
var juxt__152718 = (function (f,g){
return (function() {
var G__152731 = null;
var G__152731__152732 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__152731__152733 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__152731__152734 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__152731__152735 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__152731__152736 = (function() { 
var G__152738__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__152738 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152738__delegate.call(this, x, y, z, args);
};
G__152738.cljs$lang$maxFixedArity = 3;
G__152738.cljs$lang$applyTo = (function (arglist__152739){
var x = cljs.core.first(arglist__152739);
var y = cljs.core.first(cljs.core.next(arglist__152739));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152739)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152739)));
return G__152738__delegate.call(this, x, y, z, args);
});
return G__152738;
})()
;
G__152731 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__152731__152732.call(this);
case  1 :
return G__152731__152733.call(this,x);
case  2 :
return G__152731__152734.call(this,x,y);
case  3 :
return G__152731__152735.call(this,x,y,z);
default:
return G__152731__152736.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__152731.cljs$lang$maxFixedArity = 3;
G__152731.cljs$lang$applyTo = G__152731__152736.cljs$lang$applyTo;
return G__152731;
})()
});
var juxt__152719 = (function (f,g,h){
return (function() {
var G__152740 = null;
var G__152740__152741 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__152740__152742 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__152740__152743 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__152740__152744 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__152740__152745 = (function() { 
var G__152747__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__152747 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152747__delegate.call(this, x, y, z, args);
};
G__152747.cljs$lang$maxFixedArity = 3;
G__152747.cljs$lang$applyTo = (function (arglist__152748){
var x = cljs.core.first(arglist__152748);
var y = cljs.core.first(cljs.core.next(arglist__152748));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152748)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152748)));
return G__152747__delegate.call(this, x, y, z, args);
});
return G__152747;
})()
;
G__152740 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__152740__152741.call(this);
case  1 :
return G__152740__152742.call(this,x);
case  2 :
return G__152740__152743.call(this,x,y);
case  3 :
return G__152740__152744.call(this,x,y,z);
default:
return G__152740__152745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__152740.cljs$lang$maxFixedArity = 3;
G__152740.cljs$lang$applyTo = G__152740__152745.cljs$lang$applyTo;
return G__152740;
})()
});
var juxt__152720 = (function() { 
var G__152749__delegate = function (f,g,h,fs){
var fs__152716 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__152750 = null;
var G__152750__152751 = (function (){
return cljs.core.reduce.call(null,(function (p1__152699_SHARP_,p2__152700_SHARP_){
return cljs.core.conj.call(null,p1__152699_SHARP_,p2__152700_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__152716);
});
var G__152750__152752 = (function (x){
return cljs.core.reduce.call(null,(function (p1__152701_SHARP_,p2__152702_SHARP_){
return cljs.core.conj.call(null,p1__152701_SHARP_,p2__152702_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__152716);
});
var G__152750__152753 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__152703_SHARP_,p2__152704_SHARP_){
return cljs.core.conj.call(null,p1__152703_SHARP_,p2__152704_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__152716);
});
var G__152750__152754 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__152705_SHARP_,p2__152706_SHARP_){
return cljs.core.conj.call(null,p1__152705_SHARP_,p2__152706_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__152716);
});
var G__152750__152755 = (function() { 
var G__152757__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__152707_SHARP_,p2__152708_SHARP_){
return cljs.core.conj.call(null,p1__152707_SHARP_,cljs.core.apply.call(null,p2__152708_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__152716);
};
var G__152757 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152757__delegate.call(this, x, y, z, args);
};
G__152757.cljs$lang$maxFixedArity = 3;
G__152757.cljs$lang$applyTo = (function (arglist__152758){
var x = cljs.core.first(arglist__152758);
var y = cljs.core.first(cljs.core.next(arglist__152758));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152758)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152758)));
return G__152757__delegate.call(this, x, y, z, args);
});
return G__152757;
})()
;
G__152750 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__152750__152751.call(this);
case  1 :
return G__152750__152752.call(this,x);
case  2 :
return G__152750__152753.call(this,x,y);
case  3 :
return G__152750__152754.call(this,x,y,z);
default:
return G__152750__152755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__152750.cljs$lang$maxFixedArity = 3;
G__152750.cljs$lang$applyTo = G__152750__152755.cljs$lang$applyTo;
return G__152750;
})()
};
var G__152749 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__152749__delegate.call(this, f, g, h, fs);
};
G__152749.cljs$lang$maxFixedArity = 3;
G__152749.cljs$lang$applyTo = (function (arglist__152759){
var f = cljs.core.first(arglist__152759);
var g = cljs.core.first(cljs.core.next(arglist__152759));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152759)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__152759)));
return G__152749__delegate.call(this, f, g, h, fs);
});
return G__152749;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__152717.call(this,f);
case  2 :
return juxt__152718.call(this,f,g);
case  3 :
return juxt__152719.call(this,f,g,h);
default:
return juxt__152720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__152720.cljs$lang$applyTo;
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
var dorun__152761 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__152764 = cljs.core.next.call(null,coll);
coll = G__152764;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__152762 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____152760 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____152760))
{return (n > 0);
} else
{return and__3546__auto____152760;
}
})()))
{{
var G__152765 = (n - 1);
var G__152766 = cljs.core.next.call(null,coll);
n = G__152765;
coll = G__152766;
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
return dorun__152761.call(this,n);
case  2 :
return dorun__152762.call(this,n,coll);
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
var doall__152767 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__152768 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__152767.call(this,n);
case  2 :
return doall__152768.call(this,n,coll);
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
var matches__152770 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__152770),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__152770),1)))
{return cljs.core.first.call(null,matches__152770);
} else
{return cljs.core.vec.call(null,matches__152770);
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
var matches__152771 = re.exec(s);

if(cljs.core.truth_((matches__152771 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__152771),1)))
{return cljs.core.first.call(null,matches__152771);
} else
{return cljs.core.vec.call(null,matches__152771);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__152772 = cljs.core.re_find.call(null,re,s);
var match_idx__152773 = s.search(re);
var match_str__152774 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__152772))?cljs.core.first.call(null,match_data__152772):match_data__152772);
var post_match__152775 = cljs.core.subs.call(null,s,(match_idx__152773 + cljs.core.count.call(null,match_str__152774)));

if(cljs.core.truth_(match_data__152772))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__152772,re_seq.call(null,re,post_match__152775));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__152777__152778 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___152779 = cljs.core.nth.call(null,vec__152777__152778,0,null);
var flags__152780 = cljs.core.nth.call(null,vec__152777__152778,1,null);
var pattern__152781 = cljs.core.nth.call(null,vec__152777__152778,2,null);

return (new RegExp(pattern__152781,flags__152780));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__152776_SHARP_){
return print_one.call(null,p1__152776_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____152782 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____152782))
{var and__3546__auto____152786 = (function (){var x__450__auto____152783 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____152784 = x__450__auto____152783;

if(cljs.core.truth_(and__3546__auto____152784))
{var and__3546__auto____152785 = x__450__auto____152783.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____152785))
{return cljs.core.not.call(null,x__450__auto____152783.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____152785;
}
} else
{return and__3546__auto____152784;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____152783);
}
})();

if(cljs.core.truth_(and__3546__auto____152786))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____152786;
}
} else
{return and__3546__auto____152782;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____152787 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____152788 = x__450__auto____152787;

if(cljs.core.truth_(and__3546__auto____152788))
{var and__3546__auto____152789 = x__450__auto____152787.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____152789))
{return cljs.core.not.call(null,x__450__auto____152787.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____152789;
}
} else
{return and__3546__auto____152788;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____152787);
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
var first_obj__152790 = cljs.core.first.call(null,objs);
var sb__152791 = (new goog.string.StringBuffer());

var G__152792__152793 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__152792__152793))
{var obj__152794 = cljs.core.first.call(null,G__152792__152793);
var G__152792__152795 = G__152792__152793;

while(true){
if(cljs.core.truth_((obj__152794 === first_obj__152790)))
{} else
{sb__152791.append(" ");
}
var G__152796__152797 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__152794,opts));

if(cljs.core.truth_(G__152796__152797))
{var string__152798 = cljs.core.first.call(null,G__152796__152797);
var G__152796__152799 = G__152796__152797;

while(true){
sb__152791.append(string__152798);
var temp__3698__auto____152800 = cljs.core.next.call(null,G__152796__152799);

if(cljs.core.truth_(temp__3698__auto____152800))
{var G__152796__152801 = temp__3698__auto____152800;

{
var G__152804 = cljs.core.first.call(null,G__152796__152801);
var G__152805 = G__152796__152801;
string__152798 = G__152804;
G__152796__152799 = G__152805;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____152802 = cljs.core.next.call(null,G__152792__152795);

if(cljs.core.truth_(temp__3698__auto____152802))
{var G__152792__152803 = temp__3698__auto____152802;

{
var G__152806 = cljs.core.first.call(null,G__152792__152803);
var G__152807 = G__152792__152803;
obj__152794 = G__152806;
G__152792__152795 = G__152807;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__152791);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__152808 = cljs.core.first.call(null,objs);

var G__152809__152810 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__152809__152810))
{var obj__152811 = cljs.core.first.call(null,G__152809__152810);
var G__152809__152812 = G__152809__152810;

while(true){
if(cljs.core.truth_((obj__152811 === first_obj__152808)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__152813__152814 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__152811,opts));

if(cljs.core.truth_(G__152813__152814))
{var string__152815 = cljs.core.first.call(null,G__152813__152814);
var G__152813__152816 = G__152813__152814;

while(true){
cljs.core.string_print.call(null,string__152815);
var temp__3698__auto____152817 = cljs.core.next.call(null,G__152813__152816);

if(cljs.core.truth_(temp__3698__auto____152817))
{var G__152813__152818 = temp__3698__auto____152817;

{
var G__152821 = cljs.core.first.call(null,G__152813__152818);
var G__152822 = G__152813__152818;
string__152815 = G__152821;
G__152813__152816 = G__152822;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____152819 = cljs.core.next.call(null,G__152809__152812);

if(cljs.core.truth_(temp__3698__auto____152819))
{var G__152809__152820 = temp__3698__auto____152819;

{
var G__152823 = cljs.core.first.call(null,G__152809__152820);
var G__152824 = G__152809__152820;
obj__152811 = G__152823;
G__152809__152812 = G__152824;
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
pr_str.cljs$lang$applyTo = (function (arglist__152825){
var objs = cljs.core.seq( arglist__152825 );;
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
pr.cljs$lang$applyTo = (function (arglist__152826){
var objs = cljs.core.seq( arglist__152826 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__152827){
var objs = cljs.core.seq( arglist__152827 );;
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
println.cljs$lang$applyTo = (function (arglist__152828){
var objs = cljs.core.seq( arglist__152828 );;
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
prn.cljs$lang$applyTo = (function (arglist__152829){
var objs = cljs.core.seq( arglist__152829 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__152830 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__152830,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____152831 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____152831))
{var nspc__152832 = temp__3698__auto____152831;

return cljs.core.str.call(null,nspc__152832,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____152833 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____152833))
{var nspc__152834 = temp__3698__auto____152833;

return cljs.core.str.call(null,nspc__152834,"\/");
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
var pr_pair__152835 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__152835,"{",", ","}",opts,coll);
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
var this__152836 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__152837 = this;
var G__152838__152839 = cljs.core.seq.call(null,this__152837.watches);

if(cljs.core.truth_(G__152838__152839))
{var G__152841__152843 = cljs.core.first.call(null,G__152838__152839);
var vec__152842__152844 = G__152841__152843;
var key__152845 = cljs.core.nth.call(null,vec__152842__152844,0,null);
var f__152846 = cljs.core.nth.call(null,vec__152842__152844,1,null);
var G__152838__152847 = G__152838__152839;

var G__152841__152848 = G__152841__152843;
var G__152838__152849 = G__152838__152847;

while(true){
var vec__152850__152851 = G__152841__152848;
var key__152852 = cljs.core.nth.call(null,vec__152850__152851,0,null);
var f__152853 = cljs.core.nth.call(null,vec__152850__152851,1,null);
var G__152838__152854 = G__152838__152849;

f__152853.call(null,key__152852,this$,oldval,newval);
var temp__3698__auto____152855 = cljs.core.next.call(null,G__152838__152854);

if(cljs.core.truth_(temp__3698__auto____152855))
{var G__152838__152856 = temp__3698__auto____152855;

{
var G__152863 = cljs.core.first.call(null,G__152838__152856);
var G__152864 = G__152838__152856;
G__152841__152848 = G__152863;
G__152838__152849 = G__152864;
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
var this__152857 = this;
return this$.watches = cljs.core.assoc.call(null,this__152857.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__152858 = this;
return this$.watches = cljs.core.dissoc.call(null,this__152858.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__152859 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__152859.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__152860 = this;
return this__152860.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__152861 = this;
return this__152861.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__152862 = this;
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
var atom__152871 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__152872 = (function() { 
var G__152874__delegate = function (x,p__152865){
var map__152866__152867 = p__152865;
var map__152866__152868 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__152866__152867))?cljs.core.apply.call(null,cljs.core.hash_map,map__152866__152867):map__152866__152867);
var validator__152869 = cljs.core.get.call(null,map__152866__152868,"\uFDD0'validator");
var meta__152870 = cljs.core.get.call(null,map__152866__152868,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__152870,validator__152869,null));
};
var G__152874 = function (x,var_args){
var p__152865 = null;
if (goog.isDef(var_args)) {
  p__152865 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__152874__delegate.call(this, x, p__152865);
};
G__152874.cljs$lang$maxFixedArity = 1;
G__152874.cljs$lang$applyTo = (function (arglist__152875){
var x = cljs.core.first(arglist__152875);
var p__152865 = cljs.core.rest(arglist__152875);
return G__152874__delegate.call(this, x, p__152865);
});
return G__152874;
})()
;
atom = function(x,var_args){
var p__152865 = var_args;
switch(arguments.length){
case  1 :
return atom__152871.call(this,x);
default:
return atom__152872.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__152872.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____152876 = a.validator;

if(cljs.core.truth_(temp__3698__auto____152876))
{var validate__152877 = temp__3698__auto____152876;

if(cljs.core.truth_(validate__152877.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__152878 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__152878,new_value);
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
var swap_BANG___152879 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___152880 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___152881 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___152882 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___152883 = (function() { 
var G__152885__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__152885 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__152885__delegate.call(this, a, f, x, y, z, more);
};
G__152885.cljs$lang$maxFixedArity = 5;
G__152885.cljs$lang$applyTo = (function (arglist__152886){
var a = cljs.core.first(arglist__152886);
var f = cljs.core.first(cljs.core.next(arglist__152886));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__152886)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__152886))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__152886)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__152886)))));
return G__152885__delegate.call(this, a, f, x, y, z, more);
});
return G__152885;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___152879.call(this,a,f);
case  3 :
return swap_BANG___152880.call(this,a,f,x);
case  4 :
return swap_BANG___152881.call(this,a,f,x,y);
case  5 :
return swap_BANG___152882.call(this,a,f,x,y,z);
default:
return swap_BANG___152883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___152883.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__152887){
var iref = cljs.core.first(arglist__152887);
var f = cljs.core.first(cljs.core.next(arglist__152887));
var args = cljs.core.rest(cljs.core.next(arglist__152887));
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
var gensym__152888 = (function (){
return gensym.call(null,"G__");
});
var gensym__152889 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__152888.call(this);
case  1 :
return gensym__152889.call(this,prefix_string);
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
var this__152891 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__152891.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__152892 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__152892.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__152892.state,this__152892.f);
}
return cljs.core.deref.call(null,this__152892.state);
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
delay.cljs$lang$applyTo = (function (arglist__152893){
var body = cljs.core.seq( arglist__152893 );;
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
var map__152894__152895 = options;
var map__152894__152896 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__152894__152895))?cljs.core.apply.call(null,cljs.core.hash_map,map__152894__152895):map__152894__152895);
var keywordize_keys__152897 = cljs.core.get.call(null,map__152894__152896,"\uFDD0'keywordize-keys");
var keyfn__152898 = (cljs.core.truth_(keywordize_keys__152897)?cljs.core.keyword:cljs.core.str);
var f__152904 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____152903 = (function iter__152899(s__152900){
return (new cljs.core.LazySeq(null,false,(function (){
var s__152900__152901 = s__152900;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__152900__152901)))
{var k__152902 = cljs.core.first.call(null,s__152900__152901);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__152898.call(null,k__152902),thisfn.call(null,(x[k__152902]))]),iter__152899.call(null,cljs.core.rest.call(null,s__152900__152901)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____152903.call(null,cljs.core.js_keys.call(null,x));
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

return f__152904.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__152905){
var x = cljs.core.first(arglist__152905);
var options = cljs.core.rest(arglist__152905);
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
var mem__152906 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__152910__delegate = function (args){
var temp__3695__auto____152907 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__152906),args);

if(cljs.core.truth_(temp__3695__auto____152907))
{var v__152908 = temp__3695__auto____152907;

return v__152908;
} else
{var ret__152909 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__152906,cljs.core.assoc,args,ret__152909);
return ret__152909;
}
};
var G__152910 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__152910__delegate.call(this, args);
};
G__152910.cljs$lang$maxFixedArity = 0;
G__152910.cljs$lang$applyTo = (function (arglist__152911){
var args = cljs.core.seq( arglist__152911 );;
return G__152910__delegate.call(this, args);
});
return G__152910;
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
var trampoline__152913 = (function (f){
while(true){
var ret__152912 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__152912)))
{{
var G__152916 = ret__152912;
f = G__152916;
continue;
}
} else
{return ret__152912;
}
break;
}
});
var trampoline__152914 = (function() { 
var G__152917__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__152917 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__152917__delegate.call(this, f, args);
};
G__152917.cljs$lang$maxFixedArity = 1;
G__152917.cljs$lang$applyTo = (function (arglist__152918){
var f = cljs.core.first(arglist__152918);
var args = cljs.core.rest(arglist__152918);
return G__152917__delegate.call(this, f, args);
});
return G__152917;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__152913.call(this,f);
default:
return trampoline__152914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__152914.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__152919 = (function (){
return rand.call(null,1);
});
var rand__152920 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__152919.call(this);
case  1 :
return rand__152920.call(this,n);
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
var k__152922 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__152922,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__152922,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___152931 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___152932 = (function (h,child,parent){
var or__3548__auto____152923 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____152923))
{return or__3548__auto____152923;
} else
{var or__3548__auto____152924 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____152924))
{return or__3548__auto____152924;
} else
{var and__3546__auto____152925 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____152925))
{var and__3546__auto____152926 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____152926))
{var and__3546__auto____152927 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____152927))
{var ret__152928 = true;
var i__152929 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____152930 = cljs.core.not.call(null,ret__152928);

if(cljs.core.truth_(or__3548__auto____152930))
{return or__3548__auto____152930;
} else
{return cljs.core._EQ_.call(null,i__152929,cljs.core.count.call(null,parent));
}
})()))
{return ret__152928;
} else
{{
var G__152934 = isa_QMARK_.call(null,h,child.call(null,i__152929),parent.call(null,i__152929));
var G__152935 = (i__152929 + 1);
ret__152928 = G__152934;
i__152929 = G__152935;
continue;
}
}
break;
}
} else
{return and__3546__auto____152927;
}
} else
{return and__3546__auto____152926;
}
} else
{return and__3546__auto____152925;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___152931.call(this,h,child);
case  3 :
return isa_QMARK___152932.call(this,h,child,parent);
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
var parents__152936 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__152937 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__152936.call(this,h);
case  2 :
return parents__152937.call(this,h,tag);
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
var ancestors__152939 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__152940 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__152939.call(this,h);
case  2 :
return ancestors__152940.call(this,h,tag);
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
var descendants__152942 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__152943 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__152942.call(this,h);
case  2 :
return descendants__152943.call(this,h,tag);
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
var derive__152953 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__152954 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__152948 = "\uFDD0'parents".call(null,h);
var td__152949 = "\uFDD0'descendants".call(null,h);
var ta__152950 = "\uFDD0'ancestors".call(null,h);
var tf__152951 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____152952 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__152948.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__152950.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__152950.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__152948,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__152951.call(null,"\uFDD0'ancestors".call(null,h),tag,td__152949,parent,ta__152950),"\uFDD0'descendants":tf__152951.call(null,"\uFDD0'descendants".call(null,h),parent,ta__152950,tag,td__152949)});
})());

if(cljs.core.truth_(or__3548__auto____152952))
{return or__3548__auto____152952;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__152953.call(this,h,tag);
case  3 :
return derive__152954.call(this,h,tag,parent);
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
var underive__152960 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__152961 = (function (h,tag,parent){
var parentMap__152956 = "\uFDD0'parents".call(null,h);
var childsParents__152957 = (cljs.core.truth_(parentMap__152956.call(null,tag))?cljs.core.disj.call(null,parentMap__152956.call(null,tag),parent):cljs.core.set([]));
var newParents__152958 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__152957))?cljs.core.assoc.call(null,parentMap__152956,tag,childsParents__152957):cljs.core.dissoc.call(null,parentMap__152956,tag));
var deriv_seq__152959 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__152945_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__152945_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__152945_SHARP_),cljs.core.second.call(null,p1__152945_SHARP_)));
}),cljs.core.seq.call(null,newParents__152958)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__152956.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__152946_SHARP_,p2__152947_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__152946_SHARP_,p2__152947_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__152959));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__152960.call(this,h,tag);
case  3 :
return underive__152961.call(this,h,tag,parent);
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
var xprefs__152963 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____152965 = (cljs.core.truth_((function (){var and__3546__auto____152964 = xprefs__152963;

if(cljs.core.truth_(and__3546__auto____152964))
{return xprefs__152963.call(null,y);
} else
{return and__3546__auto____152964;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____152965))
{return or__3548__auto____152965;
} else
{var or__3548__auto____152967 = (function (){var ps__152966 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__152966) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__152966),prefer_table)))
{} else
{}
{
var G__152970 = cljs.core.rest.call(null,ps__152966);
ps__152966 = G__152970;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____152967))
{return or__3548__auto____152967;
} else
{var or__3548__auto____152969 = (function (){var ps__152968 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__152968) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__152968),y,prefer_table)))
{} else
{}
{
var G__152971 = cljs.core.rest.call(null,ps__152968);
ps__152968 = G__152971;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____152969))
{return or__3548__auto____152969;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____152972 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____152972))
{return or__3548__auto____152972;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__152981 = cljs.core.reduce.call(null,(function (be,p__152973){
var vec__152974__152975 = p__152973;
var k__152976 = cljs.core.nth.call(null,vec__152974__152975,0,null);
var ___152977 = cljs.core.nth.call(null,vec__152974__152975,1,null);
var e__152978 = vec__152974__152975;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__152976)))
{var be2__152980 = (cljs.core.truth_((function (){var or__3548__auto____152979 = (be === null);

if(cljs.core.truth_(or__3548__auto____152979))
{return or__3548__auto____152979;
} else
{return cljs.core.dominates.call(null,k__152976,cljs.core.first.call(null,be),prefer_table);
}
})())?e__152978:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__152980),k__152976,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__152976," and ",cljs.core.first.call(null,be2__152980),", and neither is preferred")));
}
return be2__152980;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__152981))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__152981));
return cljs.core.second.call(null,best_entry__152981);
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
if(cljs.core.truth_((function (){var and__3546__auto____152982 = mf;

if(cljs.core.truth_(and__3546__auto____152982))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____152982;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____152983 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____152983))
{return or__3548__auto____152983;
} else
{var or__3548__auto____152984 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____152984))
{return or__3548__auto____152984;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____152985 = mf;

if(cljs.core.truth_(and__3546__auto____152985))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____152985;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____152986 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____152986))
{return or__3548__auto____152986;
} else
{var or__3548__auto____152987 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____152987))
{return or__3548__auto____152987;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____152988 = mf;

if(cljs.core.truth_(and__3546__auto____152988))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____152988;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____152989 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____152989))
{return or__3548__auto____152989;
} else
{var or__3548__auto____152990 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____152990))
{return or__3548__auto____152990;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____152991 = mf;

if(cljs.core.truth_(and__3546__auto____152991))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____152991;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____152992 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____152992))
{return or__3548__auto____152992;
} else
{var or__3548__auto____152993 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____152993))
{return or__3548__auto____152993;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____152994 = mf;

if(cljs.core.truth_(and__3546__auto____152994))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____152994;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____152995 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____152995))
{return or__3548__auto____152995;
} else
{var or__3548__auto____152996 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____152996))
{return or__3548__auto____152996;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____152997 = mf;

if(cljs.core.truth_(and__3546__auto____152997))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____152997;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____152998 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____152998))
{return or__3548__auto____152998;
} else
{var or__3548__auto____152999 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____152999))
{return or__3548__auto____152999;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____153000 = mf;

if(cljs.core.truth_(and__3546__auto____153000))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____153000;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____153001 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____153001))
{return or__3548__auto____153001;
} else
{var or__3548__auto____153002 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____153002))
{return or__3548__auto____153002;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____153003 = mf;

if(cljs.core.truth_(and__3546__auto____153003))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____153003;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____153004 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____153004))
{return or__3548__auto____153004;
} else
{var or__3548__auto____153005 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____153005))
{return or__3548__auto____153005;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__153006 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__153007 = cljs.core._get_method.call(null,mf,dispatch_val__153006);

if(cljs.core.truth_(target_fn__153007))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__153006)));
}
return cljs.core.apply.call(null,target_fn__153007,args);
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
var this__153008 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__153009 = this;
cljs.core.swap_BANG_.call(null,this__153009.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__153009.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__153009.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__153009.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__153010 = this;
cljs.core.swap_BANG_.call(null,this__153010.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__153010.method_cache,this__153010.method_table,this__153010.cached_hierarchy,this__153010.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__153011 = this;
cljs.core.swap_BANG_.call(null,this__153011.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__153011.method_cache,this__153011.method_table,this__153011.cached_hierarchy,this__153011.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__153012 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__153012.cached_hierarchy),cljs.core.deref.call(null,this__153012.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__153012.method_cache,this__153012.method_table,this__153012.cached_hierarchy,this__153012.hierarchy);
}
var temp__3695__auto____153013 = cljs.core.deref.call(null,this__153012.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____153013))
{var target_fn__153014 = temp__3695__auto____153013;

return target_fn__153014;
} else
{var temp__3695__auto____153015 = cljs.core.find_and_cache_best_method.call(null,this__153012.name,dispatch_val,this__153012.hierarchy,this__153012.method_table,this__153012.prefer_table,this__153012.method_cache,this__153012.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____153015))
{var target_fn__153016 = temp__3695__auto____153015;

return target_fn__153016;
} else
{return cljs.core.deref.call(null,this__153012.method_table).call(null,this__153012.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__153017 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__153017.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__153017.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__153017.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__153017.method_cache,this__153017.method_table,this__153017.cached_hierarchy,this__153017.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__153018 = this;
return cljs.core.deref.call(null,this__153018.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__153019 = this;
return cljs.core.deref.call(null,this__153019.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__153020 = this;
return cljs.core.do_dispatch.call(null,mf,this__153020.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__153021__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__153021 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__153021__delegate.call(this, _, args);
};
G__153021.cljs$lang$maxFixedArity = 1;
G__153021.cljs$lang$applyTo = (function (arglist__153022){
var _ = cljs.core.first(arglist__153022);
var args = cljs.core.rest(arglist__153022);
return G__153021__delegate.call(this, _, args);
});
return G__153021;
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
