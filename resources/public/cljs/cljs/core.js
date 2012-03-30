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
var or__3548__auto____263363 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____263363))
{return or__3548__auto____263363;
} else
{var or__3548__auto____263364 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____263364))
{return or__3548__auto____263364;
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
var _invoke__263428 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____263365 = this$;

if(cljs.core.truth_(and__3546__auto____263365))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263365;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____263366 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263366))
{return or__3548__auto____263366;
} else
{var or__3548__auto____263367 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263367))
{return or__3548__auto____263367;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__263429 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____263368 = this$;

if(cljs.core.truth_(and__3546__auto____263368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____263369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263369))
{return or__3548__auto____263369;
} else
{var or__3548__auto____263370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263370))
{return or__3548__auto____263370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__263430 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____263371 = this$;

if(cljs.core.truth_(and__3546__auto____263371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____263372 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263372))
{return or__3548__auto____263372;
} else
{var or__3548__auto____263373 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263373))
{return or__3548__auto____263373;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__263431 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____263374 = this$;

if(cljs.core.truth_(and__3546__auto____263374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____263375 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263375))
{return or__3548__auto____263375;
} else
{var or__3548__auto____263376 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263376))
{return or__3548__auto____263376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__263432 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____263377 = this$;

if(cljs.core.truth_(and__3546__auto____263377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____263378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263378))
{return or__3548__auto____263378;
} else
{var or__3548__auto____263379 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263379))
{return or__3548__auto____263379;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__263433 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____263380 = this$;

if(cljs.core.truth_(and__3546__auto____263380))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263380;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____263381 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263381))
{return or__3548__auto____263381;
} else
{var or__3548__auto____263382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263382))
{return or__3548__auto____263382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__263434 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____263383 = this$;

if(cljs.core.truth_(and__3546__auto____263383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____263384 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263384))
{return or__3548__auto____263384;
} else
{var or__3548__auto____263385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263385))
{return or__3548__auto____263385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__263435 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____263386 = this$;

if(cljs.core.truth_(and__3546__auto____263386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____263387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263387))
{return or__3548__auto____263387;
} else
{var or__3548__auto____263388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263388))
{return or__3548__auto____263388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__263436 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____263389 = this$;

if(cljs.core.truth_(and__3546__auto____263389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____263390 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263390))
{return or__3548__auto____263390;
} else
{var or__3548__auto____263391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263391))
{return or__3548__auto____263391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__263437 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____263392 = this$;

if(cljs.core.truth_(and__3546__auto____263392))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263392;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____263393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263393))
{return or__3548__auto____263393;
} else
{var or__3548__auto____263394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263394))
{return or__3548__auto____263394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__263438 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____263395 = this$;

if(cljs.core.truth_(and__3546__auto____263395))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263395;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____263396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263396))
{return or__3548__auto____263396;
} else
{var or__3548__auto____263397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263397))
{return or__3548__auto____263397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__263439 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____263398 = this$;

if(cljs.core.truth_(and__3546__auto____263398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____263399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263399))
{return or__3548__auto____263399;
} else
{var or__3548__auto____263400 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263400))
{return or__3548__auto____263400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__263440 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____263401 = this$;

if(cljs.core.truth_(and__3546__auto____263401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____263402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263402))
{return or__3548__auto____263402;
} else
{var or__3548__auto____263403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263403))
{return or__3548__auto____263403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__263441 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____263404 = this$;

if(cljs.core.truth_(and__3546__auto____263404))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263404;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____263405 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263405))
{return or__3548__auto____263405;
} else
{var or__3548__auto____263406 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263406))
{return or__3548__auto____263406;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__263442 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____263407 = this$;

if(cljs.core.truth_(and__3546__auto____263407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____263408 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263408))
{return or__3548__auto____263408;
} else
{var or__3548__auto____263409 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263409))
{return or__3548__auto____263409;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__263443 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____263410 = this$;

if(cljs.core.truth_(and__3546__auto____263410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____263411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263411))
{return or__3548__auto____263411;
} else
{var or__3548__auto____263412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263412))
{return or__3548__auto____263412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__263444 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____263413 = this$;

if(cljs.core.truth_(and__3546__auto____263413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____263414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263414))
{return or__3548__auto____263414;
} else
{var or__3548__auto____263415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263415))
{return or__3548__auto____263415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__263445 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____263416 = this$;

if(cljs.core.truth_(and__3546__auto____263416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____263417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263417))
{return or__3548__auto____263417;
} else
{var or__3548__auto____263418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263418))
{return or__3548__auto____263418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__263446 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____263419 = this$;

if(cljs.core.truth_(and__3546__auto____263419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____263420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263420))
{return or__3548__auto____263420;
} else
{var or__3548__auto____263421 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263421))
{return or__3548__auto____263421;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__263447 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____263422 = this$;

if(cljs.core.truth_(and__3546__auto____263422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____263423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263423))
{return or__3548__auto____263423;
} else
{var or__3548__auto____263424 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263424))
{return or__3548__auto____263424;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__263448 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____263425 = this$;

if(cljs.core.truth_(and__3546__auto____263425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____263425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____263426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263426))
{return or__3548__auto____263426;
} else
{var or__3548__auto____263427 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____263427))
{return or__3548__auto____263427;
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
return _invoke__263428.call(this,this$);
case  2 :
return _invoke__263429.call(this,this$,a);
case  3 :
return _invoke__263430.call(this,this$,a,b);
case  4 :
return _invoke__263431.call(this,this$,a,b,c);
case  5 :
return _invoke__263432.call(this,this$,a,b,c,d);
case  6 :
return _invoke__263433.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__263434.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__263435.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__263436.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__263437.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__263438.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__263439.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__263440.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__263441.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__263442.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__263443.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__263444.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__263445.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__263446.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__263447.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__263448.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____263450 = coll;

if(cljs.core.truth_(and__3546__auto____263450))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____263450;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____263451 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263451))
{return or__3548__auto____263451;
} else
{var or__3548__auto____263452 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____263452))
{return or__3548__auto____263452;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____263453 = coll;

if(cljs.core.truth_(and__3546__auto____263453))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____263453;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____263454 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263454))
{return or__3548__auto____263454;
} else
{var or__3548__auto____263455 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____263455))
{return or__3548__auto____263455;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____263456 = coll;

if(cljs.core.truth_(and__3546__auto____263456))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____263456;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____263457 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263457))
{return or__3548__auto____263457;
} else
{var or__3548__auto____263458 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____263458))
{return or__3548__auto____263458;
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
var _nth__263465 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____263459 = coll;

if(cljs.core.truth_(and__3546__auto____263459))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____263459;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____263460 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263460))
{return or__3548__auto____263460;
} else
{var or__3548__auto____263461 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____263461))
{return or__3548__auto____263461;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__263466 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____263462 = coll;

if(cljs.core.truth_(and__3546__auto____263462))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____263462;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____263463 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263463))
{return or__3548__auto____263463;
} else
{var or__3548__auto____263464 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____263464))
{return or__3548__auto____263464;
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
return _nth__263465.call(this,coll,n);
case  3 :
return _nth__263466.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____263468 = coll;

if(cljs.core.truth_(and__3546__auto____263468))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____263468;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____263469 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263469))
{return or__3548__auto____263469;
} else
{var or__3548__auto____263470 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____263470))
{return or__3548__auto____263470;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____263471 = coll;

if(cljs.core.truth_(and__3546__auto____263471))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____263471;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____263472 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263472))
{return or__3548__auto____263472;
} else
{var or__3548__auto____263473 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____263473))
{return or__3548__auto____263473;
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
var _lookup__263480 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____263474 = o;

if(cljs.core.truth_(and__3546__auto____263474))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____263474;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____263475 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263475))
{return or__3548__auto____263475;
} else
{var or__3548__auto____263476 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____263476))
{return or__3548__auto____263476;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__263481 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____263477 = o;

if(cljs.core.truth_(and__3546__auto____263477))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____263477;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____263478 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263478))
{return or__3548__auto____263478;
} else
{var or__3548__auto____263479 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____263479))
{return or__3548__auto____263479;
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
return _lookup__263480.call(this,o,k);
case  3 :
return _lookup__263481.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____263483 = coll;

if(cljs.core.truth_(and__3546__auto____263483))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____263483;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____263484 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263484))
{return or__3548__auto____263484;
} else
{var or__3548__auto____263485 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____263485))
{return or__3548__auto____263485;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____263486 = coll;

if(cljs.core.truth_(and__3546__auto____263486))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____263486;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____263487 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263487))
{return or__3548__auto____263487;
} else
{var or__3548__auto____263488 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____263488))
{return or__3548__auto____263488;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____263489 = coll;

if(cljs.core.truth_(and__3546__auto____263489))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____263489;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____263490 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263490))
{return or__3548__auto____263490;
} else
{var or__3548__auto____263491 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____263491))
{return or__3548__auto____263491;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____263492 = coll;

if(cljs.core.truth_(and__3546__auto____263492))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____263492;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____263493 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263493))
{return or__3548__auto____263493;
} else
{var or__3548__auto____263494 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____263494))
{return or__3548__auto____263494;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____263495 = coll;

if(cljs.core.truth_(and__3546__auto____263495))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____263495;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____263496 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263496))
{return or__3548__auto____263496;
} else
{var or__3548__auto____263497 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____263497))
{return or__3548__auto____263497;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____263498 = coll;

if(cljs.core.truth_(and__3546__auto____263498))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____263498;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____263499 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263499))
{return or__3548__auto____263499;
} else
{var or__3548__auto____263500 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____263500))
{return or__3548__auto____263500;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____263501 = coll;

if(cljs.core.truth_(and__3546__auto____263501))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____263501;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____263502 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263502))
{return or__3548__auto____263502;
} else
{var or__3548__auto____263503 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____263503))
{return or__3548__auto____263503;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____263504 = o;

if(cljs.core.truth_(and__3546__auto____263504))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____263504;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____263505 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263505))
{return or__3548__auto____263505;
} else
{var or__3548__auto____263506 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____263506))
{return or__3548__auto____263506;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____263507 = o;

if(cljs.core.truth_(and__3546__auto____263507))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____263507;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____263508 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263508))
{return or__3548__auto____263508;
} else
{var or__3548__auto____263509 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____263509))
{return or__3548__auto____263509;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____263510 = o;

if(cljs.core.truth_(and__3546__auto____263510))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____263510;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____263511 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263511))
{return or__3548__auto____263511;
} else
{var or__3548__auto____263512 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____263512))
{return or__3548__auto____263512;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____263513 = o;

if(cljs.core.truth_(and__3546__auto____263513))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____263513;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____263514 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263514))
{return or__3548__auto____263514;
} else
{var or__3548__auto____263515 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____263515))
{return or__3548__auto____263515;
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
var _reduce__263522 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____263516 = coll;

if(cljs.core.truth_(and__3546__auto____263516))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____263516;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____263517 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263517))
{return or__3548__auto____263517;
} else
{var or__3548__auto____263518 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____263518))
{return or__3548__auto____263518;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__263523 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____263519 = coll;

if(cljs.core.truth_(and__3546__auto____263519))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____263519;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____263520 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____263520))
{return or__3548__auto____263520;
} else
{var or__3548__auto____263521 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____263521))
{return or__3548__auto____263521;
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
return _reduce__263522.call(this,coll,f);
case  3 :
return _reduce__263523.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____263525 = o;

if(cljs.core.truth_(and__3546__auto____263525))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____263525;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____263526 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263526))
{return or__3548__auto____263526;
} else
{var or__3548__auto____263527 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____263527))
{return or__3548__auto____263527;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____263528 = o;

if(cljs.core.truth_(and__3546__auto____263528))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____263528;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____263529 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263529))
{return or__3548__auto____263529;
} else
{var or__3548__auto____263530 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____263530))
{return or__3548__auto____263530;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____263531 = o;

if(cljs.core.truth_(and__3546__auto____263531))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____263531;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____263532 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263532))
{return or__3548__auto____263532;
} else
{var or__3548__auto____263533 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____263533))
{return or__3548__auto____263533;
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
if(cljs.core.truth_((function (){var and__3546__auto____263534 = o;

if(cljs.core.truth_(and__3546__auto____263534))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____263534;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____263535 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____263535))
{return or__3548__auto____263535;
} else
{var or__3548__auto____263536 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____263536))
{return or__3548__auto____263536;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____263537 = d;

if(cljs.core.truth_(and__3546__auto____263537))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____263537;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____263538 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____263538))
{return or__3548__auto____263538;
} else
{var or__3548__auto____263539 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____263539))
{return or__3548__auto____263539;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____263540 = this$;

if(cljs.core.truth_(and__3546__auto____263540))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____263540;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____263541 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263541))
{return or__3548__auto____263541;
} else
{var or__3548__auto____263542 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____263542))
{return or__3548__auto____263542;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____263543 = this$;

if(cljs.core.truth_(and__3546__auto____263543))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____263543;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____263544 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263544))
{return or__3548__auto____263544;
} else
{var or__3548__auto____263545 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____263545))
{return or__3548__auto____263545;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____263546 = this$;

if(cljs.core.truth_(and__3546__auto____263546))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____263546;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____263547 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____263547))
{return or__3548__auto____263547;
} else
{var or__3548__auto____263548 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____263548))
{return or__3548__auto____263548;
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
var G__263549 = null;
var G__263549__263550 = (function (o,k){
return null;
});
var G__263549__263551 = (function (o,k,not_found){
return not_found;
});
G__263549 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__263549__263550.call(this,o,k);
case  3 :
return G__263549__263551.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263549;
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
var G__263553 = null;
var G__263553__263554 = (function (_,f){
return f.call(null);
});
var G__263553__263555 = (function (_,f,start){
return start;
});
G__263553 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__263553__263554.call(this,_,f);
case  3 :
return G__263553__263555.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263553;
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
var G__263557 = null;
var G__263557__263558 = (function (_,n){
return null;
});
var G__263557__263559 = (function (_,n,not_found){
return not_found;
});
G__263557 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__263557__263558.call(this,_,n);
case  3 :
return G__263557__263559.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263557;
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
var ci_reduce__263567 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__263561 = cljs.core._nth.call(null,cicoll,0);
var n__263562 = 1;

while(true){
if(cljs.core.truth_((n__263562 < cljs.core._count.call(null,cicoll))))
{{
var G__263571 = f.call(null,val__263561,cljs.core._nth.call(null,cicoll,n__263562));
var G__263572 = (n__263562 + 1);
val__263561 = G__263571;
n__263562 = G__263572;
continue;
}
} else
{return val__263561;
}
break;
}
}
});
var ci_reduce__263568 = (function (cicoll,f,val){
var val__263563 = val;
var n__263564 = 0;

while(true){
if(cljs.core.truth_((n__263564 < cljs.core._count.call(null,cicoll))))
{{
var G__263573 = f.call(null,val__263563,cljs.core._nth.call(null,cicoll,n__263564));
var G__263574 = (n__263564 + 1);
val__263563 = G__263573;
n__263564 = G__263574;
continue;
}
} else
{return val__263563;
}
break;
}
});
var ci_reduce__263569 = (function (cicoll,f,val,idx){
var val__263565 = val;
var n__263566 = idx;

while(true){
if(cljs.core.truth_((n__263566 < cljs.core._count.call(null,cicoll))))
{{
var G__263575 = f.call(null,val__263565,cljs.core._nth.call(null,cicoll,n__263566));
var G__263576 = (n__263566 + 1);
val__263565 = G__263575;
n__263566 = G__263576;
continue;
}
} else
{return val__263565;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__263567.call(this,cicoll,f);
case  3 :
return ci_reduce__263568.call(this,cicoll,f,val);
case  4 :
return ci_reduce__263569.call(this,cicoll,f,val,idx);
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
var this__263577 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__263590 = null;
var G__263590__263591 = (function (_,f){
var this__263578 = this;
return cljs.core.ci_reduce.call(null,this__263578.a,f,(this__263578.a[this__263578.i]),(this__263578.i + 1));
});
var G__263590__263592 = (function (_,f,start){
var this__263579 = this;
return cljs.core.ci_reduce.call(null,this__263579.a,f,start,this__263579.i);
});
G__263590 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__263590__263591.call(this,_,f);
case  3 :
return G__263590__263592.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263590;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__263580 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__263581 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__263594 = null;
var G__263594__263595 = (function (coll,n){
var this__263582 = this;
var i__263583 = (n + this__263582.i);

if(cljs.core.truth_((i__263583 < this__263582.a.length)))
{return (this__263582.a[i__263583]);
} else
{return null;
}
});
var G__263594__263596 = (function (coll,n,not_found){
var this__263584 = this;
var i__263585 = (n + this__263584.i);

if(cljs.core.truth_((i__263585 < this__263584.a.length)))
{return (this__263584.a[i__263585]);
} else
{return not_found;
}
});
G__263594 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__263594__263595.call(this,coll,n);
case  3 :
return G__263594__263596.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263594;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__263586 = this;
return (this__263586.a.length - this__263586.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__263587 = this;
return (this__263587.a[this__263587.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__263588 = this;
if(cljs.core.truth_(((this__263588.i + 1) < this__263588.a.length)))
{return (new cljs.core.IndexedSeq(this__263588.a,(this__263588.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__263589 = this;
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
var G__263598 = null;
var G__263598__263599 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__263598__263600 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__263598 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__263598__263599.call(this,array,f);
case  3 :
return G__263598__263600.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263598;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__263602 = null;
var G__263602__263603 = (function (array,k){
return (array[k]);
});
var G__263602__263604 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__263602 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__263602__263603.call(this,array,k);
case  3 :
return G__263602__263604.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263602;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__263606 = null;
var G__263606__263607 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__263606__263608 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__263606 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__263606__263607.call(this,array,n);
case  3 :
return G__263606__263608.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263606;
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
var temp__3698__auto____263610 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____263610))
{var s__263611 = temp__3698__auto____263610;

return cljs.core._first.call(null,s__263611);
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
var G__263612 = cljs.core.next.call(null,s);
s = G__263612;
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
var s__263613 = cljs.core.seq.call(null,x);
var n__263614 = 0;

while(true){
if(cljs.core.truth_(s__263613))
{{
var G__263615 = cljs.core.next.call(null,s__263613);
var G__263616 = (n__263614 + 1);
s__263613 = G__263615;
n__263614 = G__263616;
continue;
}
} else
{return n__263614;
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
var conj__263617 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__263618 = (function() { 
var G__263620__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__263621 = conj.call(null,coll,x);
var G__263622 = cljs.core.first.call(null,xs);
var G__263623 = cljs.core.next.call(null,xs);
coll = G__263621;
x = G__263622;
xs = G__263623;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__263620 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263620__delegate.call(this, coll, x, xs);
};
G__263620.cljs$lang$maxFixedArity = 2;
G__263620.cljs$lang$applyTo = (function (arglist__263624){
var coll = cljs.core.first(arglist__263624);
var x = cljs.core.first(cljs.core.next(arglist__263624));
var xs = cljs.core.rest(cljs.core.next(arglist__263624));
return G__263620__delegate.call(this, coll, x, xs);
});
return G__263620;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__263617.call(this,coll,x);
default:
return conj__263618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__263618.cljs$lang$applyTo;
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
var nth__263625 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__263626 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__263625.call(this,coll,n);
case  3 :
return nth__263626.call(this,coll,n,not_found);
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
var get__263628 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__263629 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__263628.call(this,o,k);
case  3 :
return get__263629.call(this,o,k,not_found);
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
var assoc__263632 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__263633 = (function() { 
var G__263635__delegate = function (coll,k,v,kvs){
while(true){
var ret__263631 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__263636 = ret__263631;
var G__263637 = cljs.core.first.call(null,kvs);
var G__263638 = cljs.core.second.call(null,kvs);
var G__263639 = cljs.core.nnext.call(null,kvs);
coll = G__263636;
k = G__263637;
v = G__263638;
kvs = G__263639;
continue;
}
} else
{return ret__263631;
}
break;
}
};
var G__263635 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__263635__delegate.call(this, coll, k, v, kvs);
};
G__263635.cljs$lang$maxFixedArity = 3;
G__263635.cljs$lang$applyTo = (function (arglist__263640){
var coll = cljs.core.first(arglist__263640);
var k = cljs.core.first(cljs.core.next(arglist__263640));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__263640)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__263640)));
return G__263635__delegate.call(this, coll, k, v, kvs);
});
return G__263635;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__263632.call(this,coll,k,v);
default:
return assoc__263633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__263633.cljs$lang$applyTo;
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
var dissoc__263642 = (function (coll){
return coll;
});
var dissoc__263643 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__263644 = (function() { 
var G__263646__delegate = function (coll,k,ks){
while(true){
var ret__263641 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__263647 = ret__263641;
var G__263648 = cljs.core.first.call(null,ks);
var G__263649 = cljs.core.next.call(null,ks);
coll = G__263647;
k = G__263648;
ks = G__263649;
continue;
}
} else
{return ret__263641;
}
break;
}
};
var G__263646 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263646__delegate.call(this, coll, k, ks);
};
G__263646.cljs$lang$maxFixedArity = 2;
G__263646.cljs$lang$applyTo = (function (arglist__263650){
var coll = cljs.core.first(arglist__263650);
var k = cljs.core.first(cljs.core.next(arglist__263650));
var ks = cljs.core.rest(cljs.core.next(arglist__263650));
return G__263646__delegate.call(this, coll, k, ks);
});
return G__263646;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__263642.call(this,coll);
case  2 :
return dissoc__263643.call(this,coll,k);
default:
return dissoc__263644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__263644.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____263651 = o;

if(cljs.core.truth_((function (){var and__3546__auto____263652 = x__450__auto____263651;

if(cljs.core.truth_(and__3546__auto____263652))
{var and__3546__auto____263653 = x__450__auto____263651.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____263653))
{return cljs.core.not.call(null,x__450__auto____263651.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____263653;
}
} else
{return and__3546__auto____263652;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____263651);
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
var disj__263655 = (function (coll){
return coll;
});
var disj__263656 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__263657 = (function() { 
var G__263659__delegate = function (coll,k,ks){
while(true){
var ret__263654 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__263660 = ret__263654;
var G__263661 = cljs.core.first.call(null,ks);
var G__263662 = cljs.core.next.call(null,ks);
coll = G__263660;
k = G__263661;
ks = G__263662;
continue;
}
} else
{return ret__263654;
}
break;
}
};
var G__263659 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263659__delegate.call(this, coll, k, ks);
};
G__263659.cljs$lang$maxFixedArity = 2;
G__263659.cljs$lang$applyTo = (function (arglist__263663){
var coll = cljs.core.first(arglist__263663);
var k = cljs.core.first(cljs.core.next(arglist__263663));
var ks = cljs.core.rest(cljs.core.next(arglist__263663));
return G__263659__delegate.call(this, coll, k, ks);
});
return G__263659;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__263655.call(this,coll);
case  2 :
return disj__263656.call(this,coll,k);
default:
return disj__263657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__263657.cljs$lang$applyTo;
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
{var x__450__auto____263664 = x;

if(cljs.core.truth_((function (){var and__3546__auto____263665 = x__450__auto____263664;

if(cljs.core.truth_(and__3546__auto____263665))
{var and__3546__auto____263666 = x__450__auto____263664.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____263666))
{return cljs.core.not.call(null,x__450__auto____263664.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____263666;
}
} else
{return and__3546__auto____263665;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____263664);
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
{var x__450__auto____263667 = x;

if(cljs.core.truth_((function (){var and__3546__auto____263668 = x__450__auto____263667;

if(cljs.core.truth_(and__3546__auto____263668))
{var and__3546__auto____263669 = x__450__auto____263667.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____263669))
{return cljs.core.not.call(null,x__450__auto____263667.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____263669;
}
} else
{return and__3546__auto____263668;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____263667);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____263670 = x;

if(cljs.core.truth_((function (){var and__3546__auto____263671 = x__450__auto____263670;

if(cljs.core.truth_(and__3546__auto____263671))
{var and__3546__auto____263672 = x__450__auto____263670.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____263672))
{return cljs.core.not.call(null,x__450__auto____263670.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____263672;
}
} else
{return and__3546__auto____263671;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____263670);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____263673 = x;

if(cljs.core.truth_((function (){var and__3546__auto____263674 = x__450__auto____263673;

if(cljs.core.truth_(and__3546__auto____263674))
{var and__3546__auto____263675 = x__450__auto____263673.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____263675))
{return cljs.core.not.call(null,x__450__auto____263673.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____263675;
}
} else
{return and__3546__auto____263674;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____263673);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____263676 = x;

if(cljs.core.truth_((function (){var and__3546__auto____263677 = x__450__auto____263676;

if(cljs.core.truth_(and__3546__auto____263677))
{var and__3546__auto____263678 = x__450__auto____263676.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____263678))
{return cljs.core.not.call(null,x__450__auto____263676.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____263678;
}
} else
{return and__3546__auto____263677;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____263676);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____263679 = x;

if(cljs.core.truth_((function (){var and__3546__auto____263680 = x__450__auto____263679;

if(cljs.core.truth_(and__3546__auto____263680))
{var and__3546__auto____263681 = x__450__auto____263679.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____263681))
{return cljs.core.not.call(null,x__450__auto____263679.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____263681;
}
} else
{return and__3546__auto____263680;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____263679);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____263682 = x;

if(cljs.core.truth_((function (){var and__3546__auto____263683 = x__450__auto____263682;

if(cljs.core.truth_(and__3546__auto____263683))
{var and__3546__auto____263684 = x__450__auto____263682.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____263684))
{return cljs.core.not.call(null,x__450__auto____263682.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____263684;
}
} else
{return and__3546__auto____263683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____263682);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__263685 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__263685.push(key);
}));
return keys__263685;
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
{var x__450__auto____263686 = s;

if(cljs.core.truth_((function (){var and__3546__auto____263687 = x__450__auto____263686;

if(cljs.core.truth_(and__3546__auto____263687))
{var and__3546__auto____263688 = x__450__auto____263686.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____263688))
{return cljs.core.not.call(null,x__450__auto____263686.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____263688;
}
} else
{return and__3546__auto____263687;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____263686);
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
var and__3546__auto____263689 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____263689))
{return cljs.core.not.call(null,(function (){var or__3548__auto____263690 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____263690))
{return or__3548__auto____263690;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____263689;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____263691 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____263691))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____263691;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____263692 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____263692))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____263692;
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
var and__3546__auto____263693 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____263693))
{return (n == n.toFixed());
} else
{return and__3546__auto____263693;
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
if(cljs.core.truth_((function (){var and__3546__auto____263694 = coll;

if(cljs.core.truth_(and__3546__auto____263694))
{var and__3546__auto____263695 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____263695))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____263695;
}
} else
{return and__3546__auto____263694;
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
var distinct_QMARK___263700 = (function (x){
return true;
});
var distinct_QMARK___263701 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___263702 = (function() { 
var G__263704__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__263696 = cljs.core.set([y,x]);
var xs__263697 = more;

while(true){
var x__263698 = cljs.core.first.call(null,xs__263697);
var etc__263699 = cljs.core.next.call(null,xs__263697);

if(cljs.core.truth_(xs__263697))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__263696,x__263698)))
{return false;
} else
{{
var G__263705 = cljs.core.conj.call(null,s__263696,x__263698);
var G__263706 = etc__263699;
s__263696 = G__263705;
xs__263697 = G__263706;
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
var G__263704 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263704__delegate.call(this, x, y, more);
};
G__263704.cljs$lang$maxFixedArity = 2;
G__263704.cljs$lang$applyTo = (function (arglist__263707){
var x = cljs.core.first(arglist__263707);
var y = cljs.core.first(cljs.core.next(arglist__263707));
var more = cljs.core.rest(cljs.core.next(arglist__263707));
return G__263704__delegate.call(this, x, y, more);
});
return G__263704;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___263700.call(this,x);
case  2 :
return distinct_QMARK___263701.call(this,x,y);
default:
return distinct_QMARK___263702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___263702.cljs$lang$applyTo;
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
var r__263708 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__263708)))
{return r__263708;
} else
{if(cljs.core.truth_(r__263708))
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
var sort__263710 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__263711 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__263709 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__263709,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__263709);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__263710.call(this,comp);
case  2 :
return sort__263711.call(this,comp,coll);
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
var sort_by__263713 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__263714 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__263713.call(this,keyfn,comp);
case  3 :
return sort_by__263714.call(this,keyfn,comp,coll);
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
var reduce__263716 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__263717 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__263716.call(this,f,val);
case  3 :
return reduce__263717.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__263723 = (function (f,coll){
var temp__3695__auto____263719 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____263719))
{var s__263720 = temp__3695__auto____263719;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__263720),cljs.core.next.call(null,s__263720));
} else
{return f.call(null);
}
});
var seq_reduce__263724 = (function (f,val,coll){
var val__263721 = val;
var coll__263722 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__263722))
{{
var G__263726 = f.call(null,val__263721,cljs.core.first.call(null,coll__263722));
var G__263727 = cljs.core.next.call(null,coll__263722);
val__263721 = G__263726;
coll__263722 = G__263727;
continue;
}
} else
{return val__263721;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__263723.call(this,f,val);
case  3 :
return seq_reduce__263724.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__263728 = null;
var G__263728__263729 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__263728__263730 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__263728 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__263728__263729.call(this,coll,f);
case  3 :
return G__263728__263730.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263728;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___263732 = (function (){
return 0;
});
var _PLUS___263733 = (function (x){
return x;
});
var _PLUS___263734 = (function (x,y){
return (x + y);
});
var _PLUS___263735 = (function() { 
var G__263737__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__263737 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263737__delegate.call(this, x, y, more);
};
G__263737.cljs$lang$maxFixedArity = 2;
G__263737.cljs$lang$applyTo = (function (arglist__263738){
var x = cljs.core.first(arglist__263738);
var y = cljs.core.first(cljs.core.next(arglist__263738));
var more = cljs.core.rest(cljs.core.next(arglist__263738));
return G__263737__delegate.call(this, x, y, more);
});
return G__263737;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___263732.call(this);
case  1 :
return _PLUS___263733.call(this,x);
case  2 :
return _PLUS___263734.call(this,x,y);
default:
return _PLUS___263735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___263735.cljs$lang$applyTo;
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
var ___263739 = (function (x){
return (- x);
});
var ___263740 = (function (x,y){
return (x - y);
});
var ___263741 = (function() { 
var G__263743__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__263743 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263743__delegate.call(this, x, y, more);
};
G__263743.cljs$lang$maxFixedArity = 2;
G__263743.cljs$lang$applyTo = (function (arglist__263744){
var x = cljs.core.first(arglist__263744);
var y = cljs.core.first(cljs.core.next(arglist__263744));
var more = cljs.core.rest(cljs.core.next(arglist__263744));
return G__263743__delegate.call(this, x, y, more);
});
return G__263743;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___263739.call(this,x);
case  2 :
return ___263740.call(this,x,y);
default:
return ___263741.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___263741.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___263745 = (function (){
return 1;
});
var _STAR___263746 = (function (x){
return x;
});
var _STAR___263747 = (function (x,y){
return (x * y);
});
var _STAR___263748 = (function() { 
var G__263750__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__263750 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263750__delegate.call(this, x, y, more);
};
G__263750.cljs$lang$maxFixedArity = 2;
G__263750.cljs$lang$applyTo = (function (arglist__263751){
var x = cljs.core.first(arglist__263751);
var y = cljs.core.first(cljs.core.next(arglist__263751));
var more = cljs.core.rest(cljs.core.next(arglist__263751));
return G__263750__delegate.call(this, x, y, more);
});
return G__263750;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___263745.call(this);
case  1 :
return _STAR___263746.call(this,x);
case  2 :
return _STAR___263747.call(this,x,y);
default:
return _STAR___263748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___263748.cljs$lang$applyTo;
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
var _SLASH___263752 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___263753 = (function (x,y){
return (x / y);
});
var _SLASH___263754 = (function() { 
var G__263756__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__263756 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263756__delegate.call(this, x, y, more);
};
G__263756.cljs$lang$maxFixedArity = 2;
G__263756.cljs$lang$applyTo = (function (arglist__263757){
var x = cljs.core.first(arglist__263757);
var y = cljs.core.first(cljs.core.next(arglist__263757));
var more = cljs.core.rest(cljs.core.next(arglist__263757));
return G__263756__delegate.call(this, x, y, more);
});
return G__263756;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___263752.call(this,x);
case  2 :
return _SLASH___263753.call(this,x,y);
default:
return _SLASH___263754.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___263754.cljs$lang$applyTo;
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
var _LT___263758 = (function (x){
return true;
});
var _LT___263759 = (function (x,y){
return (x < y);
});
var _LT___263760 = (function() { 
var G__263762__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__263763 = y;
var G__263764 = cljs.core.first.call(null,more);
var G__263765 = cljs.core.next.call(null,more);
x = G__263763;
y = G__263764;
more = G__263765;
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
var G__263762 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263762__delegate.call(this, x, y, more);
};
G__263762.cljs$lang$maxFixedArity = 2;
G__263762.cljs$lang$applyTo = (function (arglist__263766){
var x = cljs.core.first(arglist__263766);
var y = cljs.core.first(cljs.core.next(arglist__263766));
var more = cljs.core.rest(cljs.core.next(arglist__263766));
return G__263762__delegate.call(this, x, y, more);
});
return G__263762;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___263758.call(this,x);
case  2 :
return _LT___263759.call(this,x,y);
default:
return _LT___263760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___263760.cljs$lang$applyTo;
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
var _LT__EQ___263767 = (function (x){
return true;
});
var _LT__EQ___263768 = (function (x,y){
return (x <= y);
});
var _LT__EQ___263769 = (function() { 
var G__263771__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__263772 = y;
var G__263773 = cljs.core.first.call(null,more);
var G__263774 = cljs.core.next.call(null,more);
x = G__263772;
y = G__263773;
more = G__263774;
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
var G__263771 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263771__delegate.call(this, x, y, more);
};
G__263771.cljs$lang$maxFixedArity = 2;
G__263771.cljs$lang$applyTo = (function (arglist__263775){
var x = cljs.core.first(arglist__263775);
var y = cljs.core.first(cljs.core.next(arglist__263775));
var more = cljs.core.rest(cljs.core.next(arglist__263775));
return G__263771__delegate.call(this, x, y, more);
});
return G__263771;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___263767.call(this,x);
case  2 :
return _LT__EQ___263768.call(this,x,y);
default:
return _LT__EQ___263769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___263769.cljs$lang$applyTo;
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
var _GT___263776 = (function (x){
return true;
});
var _GT___263777 = (function (x,y){
return (x > y);
});
var _GT___263778 = (function() { 
var G__263780__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__263781 = y;
var G__263782 = cljs.core.first.call(null,more);
var G__263783 = cljs.core.next.call(null,more);
x = G__263781;
y = G__263782;
more = G__263783;
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
var G__263780 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263780__delegate.call(this, x, y, more);
};
G__263780.cljs$lang$maxFixedArity = 2;
G__263780.cljs$lang$applyTo = (function (arglist__263784){
var x = cljs.core.first(arglist__263784);
var y = cljs.core.first(cljs.core.next(arglist__263784));
var more = cljs.core.rest(cljs.core.next(arglist__263784));
return G__263780__delegate.call(this, x, y, more);
});
return G__263780;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___263776.call(this,x);
case  2 :
return _GT___263777.call(this,x,y);
default:
return _GT___263778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___263778.cljs$lang$applyTo;
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
var _GT__EQ___263785 = (function (x){
return true;
});
var _GT__EQ___263786 = (function (x,y){
return (x >= y);
});
var _GT__EQ___263787 = (function() { 
var G__263789__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__263790 = y;
var G__263791 = cljs.core.first.call(null,more);
var G__263792 = cljs.core.next.call(null,more);
x = G__263790;
y = G__263791;
more = G__263792;
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
var G__263789 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263789__delegate.call(this, x, y, more);
};
G__263789.cljs$lang$maxFixedArity = 2;
G__263789.cljs$lang$applyTo = (function (arglist__263793){
var x = cljs.core.first(arglist__263793);
var y = cljs.core.first(cljs.core.next(arglist__263793));
var more = cljs.core.rest(cljs.core.next(arglist__263793));
return G__263789__delegate.call(this, x, y, more);
});
return G__263789;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___263785.call(this,x);
case  2 :
return _GT__EQ___263786.call(this,x,y);
default:
return _GT__EQ___263787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___263787.cljs$lang$applyTo;
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
var max__263794 = (function (x){
return x;
});
var max__263795 = (function (x,y){
return ((x > y) ? x : y);
});
var max__263796 = (function() { 
var G__263798__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__263798 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263798__delegate.call(this, x, y, more);
};
G__263798.cljs$lang$maxFixedArity = 2;
G__263798.cljs$lang$applyTo = (function (arglist__263799){
var x = cljs.core.first(arglist__263799);
var y = cljs.core.first(cljs.core.next(arglist__263799));
var more = cljs.core.rest(cljs.core.next(arglist__263799));
return G__263798__delegate.call(this, x, y, more);
});
return G__263798;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__263794.call(this,x);
case  2 :
return max__263795.call(this,x,y);
default:
return max__263796.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__263796.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__263800 = (function (x){
return x;
});
var min__263801 = (function (x,y){
return ((x < y) ? x : y);
});
var min__263802 = (function() { 
var G__263804__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__263804 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263804__delegate.call(this, x, y, more);
};
G__263804.cljs$lang$maxFixedArity = 2;
G__263804.cljs$lang$applyTo = (function (arglist__263805){
var x = cljs.core.first(arglist__263805);
var y = cljs.core.first(cljs.core.next(arglist__263805));
var more = cljs.core.rest(cljs.core.next(arglist__263805));
return G__263804__delegate.call(this, x, y, more);
});
return G__263804;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__263800.call(this,x);
case  2 :
return min__263801.call(this,x,y);
default:
return min__263802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__263802.cljs$lang$applyTo;
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
var rem__263806 = (n % d);

return cljs.core.fix.call(null,((n - rem__263806) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__263807 = cljs.core.quot.call(null,n,d);

return (n - (d * q__263807));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__263808 = (function (){
return Math.random.call(null);
});
var rand__263809 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__263808.call(this);
case  1 :
return rand__263809.call(this,n);
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
var _EQ__EQ___263811 = (function (x){
return true;
});
var _EQ__EQ___263812 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___263813 = (function() { 
var G__263815__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__263816 = y;
var G__263817 = cljs.core.first.call(null,more);
var G__263818 = cljs.core.next.call(null,more);
x = G__263816;
y = G__263817;
more = G__263818;
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
var G__263815 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263815__delegate.call(this, x, y, more);
};
G__263815.cljs$lang$maxFixedArity = 2;
G__263815.cljs$lang$applyTo = (function (arglist__263819){
var x = cljs.core.first(arglist__263819);
var y = cljs.core.first(cljs.core.next(arglist__263819));
var more = cljs.core.rest(cljs.core.next(arglist__263819));
return G__263815__delegate.call(this, x, y, more);
});
return G__263815;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___263811.call(this,x);
case  2 :
return _EQ__EQ___263812.call(this,x,y);
default:
return _EQ__EQ___263813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___263813.cljs$lang$applyTo;
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
var n__263820 = n;
var xs__263821 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____263822 = xs__263821;

if(cljs.core.truth_(and__3546__auto____263822))
{return (n__263820 > 0);
} else
{return and__3546__auto____263822;
}
})()))
{{
var G__263823 = (n__263820 - 1);
var G__263824 = cljs.core.next.call(null,xs__263821);
n__263820 = G__263823;
xs__263821 = G__263824;
continue;
}
} else
{return xs__263821;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__263829 = null;
var G__263829__263830 = (function (coll,n){
var temp__3695__auto____263825 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____263825))
{var xs__263826 = temp__3695__auto____263825;

return cljs.core.first.call(null,xs__263826);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__263829__263831 = (function (coll,n,not_found){
var temp__3695__auto____263827 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____263827))
{var xs__263828 = temp__3695__auto____263827;

return cljs.core.first.call(null,xs__263828);
} else
{return not_found;
}
});
G__263829 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__263829__263830.call(this,coll,n);
case  3 :
return G__263829__263831.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263829;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___263833 = (function (){
return "";
});
var str_STAR___263834 = (function (x){
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
var str_STAR___263835 = (function() { 
var G__263837__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__263838 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__263839 = cljs.core.next.call(null,more);
sb = G__263838;
more = G__263839;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__263837 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__263837__delegate.call(this, x, ys);
};
G__263837.cljs$lang$maxFixedArity = 1;
G__263837.cljs$lang$applyTo = (function (arglist__263840){
var x = cljs.core.first(arglist__263840);
var ys = cljs.core.rest(arglist__263840);
return G__263837__delegate.call(this, x, ys);
});
return G__263837;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___263833.call(this);
case  1 :
return str_STAR___263834.call(this,x);
default:
return str_STAR___263835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___263835.cljs$lang$applyTo;
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
var str__263841 = (function (){
return "";
});
var str__263842 = (function (x){
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
var str__263843 = (function() { 
var G__263845__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__263845 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__263845__delegate.call(this, x, ys);
};
G__263845.cljs$lang$maxFixedArity = 1;
G__263845.cljs$lang$applyTo = (function (arglist__263846){
var x = cljs.core.first(arglist__263846);
var ys = cljs.core.rest(arglist__263846);
return G__263845__delegate.call(this, x, ys);
});
return G__263845;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__263841.call(this);
case  1 :
return str__263842.call(this,x);
default:
return str__263843.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__263843.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__263847 = (function (s,start){
return s.substring(start);
});
var subs__263848 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__263847.call(this,s,start);
case  3 :
return subs__263848.call(this,s,start,end);
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
var symbol__263850 = (function (name){
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
var symbol__263851 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__263850.call(this,ns);
case  2 :
return symbol__263851.call(this,ns,name);
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
var keyword__263853 = (function (name){
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
var keyword__263854 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__263853.call(this,ns);
case  2 :
return keyword__263854.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__263856 = cljs.core.seq.call(null,x);
var ys__263857 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__263856 === null)))
{return (ys__263857 === null);
} else
{if(cljs.core.truth_((ys__263857 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__263856),cljs.core.first.call(null,ys__263857))))
{{
var G__263858 = cljs.core.next.call(null,xs__263856);
var G__263859 = cljs.core.next.call(null,ys__263857);
xs__263856 = G__263858;
ys__263857 = G__263859;
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
return cljs.core.reduce.call(null,(function (p1__263860_SHARP_,p2__263861_SHARP_){
return cljs.core.hash_combine.call(null,p1__263860_SHARP_,cljs.core.hash.call(null,p2__263861_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__263862__263863 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__263862__263863))
{var G__263865__263867 = cljs.core.first.call(null,G__263862__263863);
var vec__263866__263868 = G__263865__263867;
var key_name__263869 = cljs.core.nth.call(null,vec__263866__263868,0,null);
var f__263870 = cljs.core.nth.call(null,vec__263866__263868,1,null);
var G__263862__263871 = G__263862__263863;

var G__263865__263872 = G__263865__263867;
var G__263862__263873 = G__263862__263871;

while(true){
var vec__263874__263875 = G__263865__263872;
var key_name__263876 = cljs.core.nth.call(null,vec__263874__263875,0,null);
var f__263877 = cljs.core.nth.call(null,vec__263874__263875,1,null);
var G__263862__263878 = G__263862__263873;

var str_name__263879 = cljs.core.name.call(null,key_name__263876);

obj[str_name__263879] = f__263877;
var temp__3698__auto____263880 = cljs.core.next.call(null,G__263862__263878);

if(cljs.core.truth_(temp__3698__auto____263880))
{var G__263862__263881 = temp__3698__auto____263880;

{
var G__263882 = cljs.core.first.call(null,G__263862__263881);
var G__263883 = G__263862__263881;
G__263865__263872 = G__263882;
G__263862__263873 = G__263883;
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
var this__263884 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__263885 = this;
return (new cljs.core.List(this__263885.meta,o,coll,(this__263885.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__263886 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__263887 = this;
return this__263887.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__263888 = this;
return this__263888.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__263889 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__263890 = this;
return this__263890.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__263891 = this;
return this__263891.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__263892 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__263893 = this;
return (new cljs.core.List(meta,this__263893.first,this__263893.rest,this__263893.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__263894 = this;
return this__263894.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__263895 = this;
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
var this__263896 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__263897 = this;
return (new cljs.core.List(this__263897.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__263898 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__263899 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__263900 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__263901 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__263902 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__263903 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__263904 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__263905 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__263906 = this;
return this__263906.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__263907 = this;
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
list.cljs$lang$applyTo = (function (arglist__263908){
var items = cljs.core.seq( arglist__263908 );;
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
var this__263909 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__263910 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__263911 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__263912 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__263912.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__263913 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__263914 = this;
return this__263914.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__263915 = this;
if(cljs.core.truth_((this__263915.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__263915.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__263916 = this;
return this__263916.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__263917 = this;
return (new cljs.core.Cons(meta,this__263917.first,this__263917.rest));
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
var G__263918 = null;
var G__263918__263919 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__263918__263920 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__263918 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__263918__263919.call(this,string,f);
case  3 :
return G__263918__263920.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263918;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__263922 = null;
var G__263922__263923 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__263922__263924 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__263922 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__263922__263923.call(this,string,k);
case  3 :
return G__263922__263924.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263922;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__263926 = null;
var G__263926__263927 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__263926__263928 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__263926 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__263926__263927.call(this,string,n);
case  3 :
return G__263926__263928.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263926;
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
var G__263936 = null;
var G__263936__263937 = (function (tsym263930,coll){
var tsym263930__263932 = this;

var this$__263933 = tsym263930__263932;

return cljs.core.get.call(null,coll,this$__263933.toString());
});
var G__263936__263938 = (function (tsym263931,coll,not_found){
var tsym263931__263934 = this;

var this$__263935 = tsym263931__263934;

return cljs.core.get.call(null,coll,this$__263935.toString(),not_found);
});
G__263936 = function(tsym263931,coll,not_found){
switch(arguments.length){
case  2 :
return G__263936__263937.call(this,tsym263931,coll);
case  3 :
return G__263936__263938.call(this,tsym263931,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__263936;
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
var x__263940 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__263940;
} else
{lazy_seq.x = x__263940.call(null);
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
var this__263941 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__263942 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__263943 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__263944 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__263944.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__263945 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__263946 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__263947 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__263948 = this;
return this__263948.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__263949 = this;
return (new cljs.core.LazySeq(meta,this__263949.realized,this__263949.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__263950 = cljs.core.array.call(null);

var s__263951 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__263951)))
{ary__263950.push(cljs.core.first.call(null,s__263951));
{
var G__263952 = cljs.core.next.call(null,s__263951);
s__263951 = G__263952;
continue;
}
} else
{return ary__263950;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__263953 = s;
var i__263954 = n;
var sum__263955 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____263956 = (i__263954 > 0);

if(cljs.core.truth_(and__3546__auto____263956))
{return cljs.core.seq.call(null,s__263953);
} else
{return and__3546__auto____263956;
}
})()))
{{
var G__263957 = cljs.core.next.call(null,s__263953);
var G__263958 = (i__263954 - 1);
var G__263959 = (sum__263955 + 1);
s__263953 = G__263957;
i__263954 = G__263958;
sum__263955 = G__263959;
continue;
}
} else
{return sum__263955;
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
var concat__263963 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__263964 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__263965 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__263960 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__263960))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__263960),concat.call(null,cljs.core.rest.call(null,s__263960),y));
} else
{return y;
}
})));
});
var concat__263966 = (function() { 
var G__263968__delegate = function (x,y,zs){
var cat__263962 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__263961 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__263961))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__263961),cat.call(null,cljs.core.rest.call(null,xys__263961),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__263962.call(null,concat.call(null,x,y),zs);
};
var G__263968 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__263968__delegate.call(this, x, y, zs);
};
G__263968.cljs$lang$maxFixedArity = 2;
G__263968.cljs$lang$applyTo = (function (arglist__263969){
var x = cljs.core.first(arglist__263969);
var y = cljs.core.first(cljs.core.next(arglist__263969));
var zs = cljs.core.rest(cljs.core.next(arglist__263969));
return G__263968__delegate.call(this, x, y, zs);
});
return G__263968;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__263963.call(this);
case  1 :
return concat__263964.call(this,x);
case  2 :
return concat__263965.call(this,x,y);
default:
return concat__263966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__263966.cljs$lang$applyTo;
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
var list_STAR___263970 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___263971 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___263972 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___263973 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___263974 = (function() { 
var G__263976__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__263976 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__263976__delegate.call(this, a, b, c, d, more);
};
G__263976.cljs$lang$maxFixedArity = 4;
G__263976.cljs$lang$applyTo = (function (arglist__263977){
var a = cljs.core.first(arglist__263977);
var b = cljs.core.first(cljs.core.next(arglist__263977));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__263977)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__263977))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__263977))));
return G__263976__delegate.call(this, a, b, c, d, more);
});
return G__263976;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___263970.call(this,a);
case  2 :
return list_STAR___263971.call(this,a,b);
case  3 :
return list_STAR___263972.call(this,a,b,c);
case  4 :
return list_STAR___263973.call(this,a,b,c,d);
default:
return list_STAR___263974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___263974.cljs$lang$applyTo;
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
var apply__263987 = (function (f,args){
var fixed_arity__263978 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__263978 + 1)) <= fixed_arity__263978)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__263988 = (function (f,x,args){
var arglist__263979 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__263980 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__263979,fixed_arity__263980) <= fixed_arity__263980)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__263979));
} else
{return f.cljs$lang$applyTo(arglist__263979);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__263979));
}
});
var apply__263989 = (function (f,x,y,args){
var arglist__263981 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__263982 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__263981,fixed_arity__263982) <= fixed_arity__263982)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__263981));
} else
{return f.cljs$lang$applyTo(arglist__263981);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__263981));
}
});
var apply__263990 = (function (f,x,y,z,args){
var arglist__263983 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__263984 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__263983,fixed_arity__263984) <= fixed_arity__263984)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__263983));
} else
{return f.cljs$lang$applyTo(arglist__263983);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__263983));
}
});
var apply__263991 = (function() { 
var G__263993__delegate = function (f,a,b,c,d,args){
var arglist__263985 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__263986 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__263985,fixed_arity__263986) <= fixed_arity__263986)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__263985));
} else
{return f.cljs$lang$applyTo(arglist__263985);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__263985));
}
};
var G__263993 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__263993__delegate.call(this, f, a, b, c, d, args);
};
G__263993.cljs$lang$maxFixedArity = 5;
G__263993.cljs$lang$applyTo = (function (arglist__263994){
var f = cljs.core.first(arglist__263994);
var a = cljs.core.first(cljs.core.next(arglist__263994));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__263994)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__263994))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__263994)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__263994)))));
return G__263993__delegate.call(this, f, a, b, c, d, args);
});
return G__263993;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__263987.call(this,f,a);
case  3 :
return apply__263988.call(this,f,a,b);
case  4 :
return apply__263989.call(this,f,a,b,c);
case  5 :
return apply__263990.call(this,f,a,b,c,d);
default:
return apply__263991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__263991.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__263995){
var obj = cljs.core.first(arglist__263995);
var f = cljs.core.first(cljs.core.next(arglist__263995));
var args = cljs.core.rest(cljs.core.next(arglist__263995));
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
var not_EQ___263996 = (function (x){
return false;
});
var not_EQ___263997 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___263998 = (function() { 
var G__264000__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__264000 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__264000__delegate.call(this, x, y, more);
};
G__264000.cljs$lang$maxFixedArity = 2;
G__264000.cljs$lang$applyTo = (function (arglist__264001){
var x = cljs.core.first(arglist__264001);
var y = cljs.core.first(cljs.core.next(arglist__264001));
var more = cljs.core.rest(cljs.core.next(arglist__264001));
return G__264000__delegate.call(this, x, y, more);
});
return G__264000;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___263996.call(this,x);
case  2 :
return not_EQ___263997.call(this,x,y);
default:
return not_EQ___263998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___263998.cljs$lang$applyTo;
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
var G__264002 = pred;
var G__264003 = cljs.core.next.call(null,coll);
pred = G__264002;
coll = G__264003;
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
{var or__3548__auto____264004 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____264004))
{return or__3548__auto____264004;
} else
{{
var G__264005 = pred;
var G__264006 = cljs.core.next.call(null,coll);
pred = G__264005;
coll = G__264006;
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
var G__264007 = null;
var G__264007__264008 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__264007__264009 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__264007__264010 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__264007__264011 = (function() { 
var G__264013__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__264013 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__264013__delegate.call(this, x, y, zs);
};
G__264013.cljs$lang$maxFixedArity = 2;
G__264013.cljs$lang$applyTo = (function (arglist__264014){
var x = cljs.core.first(arglist__264014);
var y = cljs.core.first(cljs.core.next(arglist__264014));
var zs = cljs.core.rest(cljs.core.next(arglist__264014));
return G__264013__delegate.call(this, x, y, zs);
});
return G__264013;
})()
;
G__264007 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__264007__264008.call(this);
case  1 :
return G__264007__264009.call(this,x);
case  2 :
return G__264007__264010.call(this,x,y);
default:
return G__264007__264011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264007.cljs$lang$maxFixedArity = 2;
G__264007.cljs$lang$applyTo = G__264007__264011.cljs$lang$applyTo;
return G__264007;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__264015__delegate = function (args){
return x;
};
var G__264015 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__264015__delegate.call(this, args);
};
G__264015.cljs$lang$maxFixedArity = 0;
G__264015.cljs$lang$applyTo = (function (arglist__264016){
var args = cljs.core.seq( arglist__264016 );;
return G__264015__delegate.call(this, args);
});
return G__264015;
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
var comp__264020 = (function (){
return cljs.core.identity;
});
var comp__264021 = (function (f){
return f;
});
var comp__264022 = (function (f,g){
return (function() {
var G__264026 = null;
var G__264026__264027 = (function (){
return f.call(null,g.call(null));
});
var G__264026__264028 = (function (x){
return f.call(null,g.call(null,x));
});
var G__264026__264029 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__264026__264030 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__264026__264031 = (function() { 
var G__264033__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__264033 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264033__delegate.call(this, x, y, z, args);
};
G__264033.cljs$lang$maxFixedArity = 3;
G__264033.cljs$lang$applyTo = (function (arglist__264034){
var x = cljs.core.first(arglist__264034);
var y = cljs.core.first(cljs.core.next(arglist__264034));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264034)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264034)));
return G__264033__delegate.call(this, x, y, z, args);
});
return G__264033;
})()
;
G__264026 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__264026__264027.call(this);
case  1 :
return G__264026__264028.call(this,x);
case  2 :
return G__264026__264029.call(this,x,y);
case  3 :
return G__264026__264030.call(this,x,y,z);
default:
return G__264026__264031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264026.cljs$lang$maxFixedArity = 3;
G__264026.cljs$lang$applyTo = G__264026__264031.cljs$lang$applyTo;
return G__264026;
})()
});
var comp__264023 = (function (f,g,h){
return (function() {
var G__264035 = null;
var G__264035__264036 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__264035__264037 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__264035__264038 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__264035__264039 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__264035__264040 = (function() { 
var G__264042__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__264042 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264042__delegate.call(this, x, y, z, args);
};
G__264042.cljs$lang$maxFixedArity = 3;
G__264042.cljs$lang$applyTo = (function (arglist__264043){
var x = cljs.core.first(arglist__264043);
var y = cljs.core.first(cljs.core.next(arglist__264043));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264043)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264043)));
return G__264042__delegate.call(this, x, y, z, args);
});
return G__264042;
})()
;
G__264035 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__264035__264036.call(this);
case  1 :
return G__264035__264037.call(this,x);
case  2 :
return G__264035__264038.call(this,x,y);
case  3 :
return G__264035__264039.call(this,x,y,z);
default:
return G__264035__264040.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264035.cljs$lang$maxFixedArity = 3;
G__264035.cljs$lang$applyTo = G__264035__264040.cljs$lang$applyTo;
return G__264035;
})()
});
var comp__264024 = (function() { 
var G__264044__delegate = function (f1,f2,f3,fs){
var fs__264017 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__264045__delegate = function (args){
var ret__264018 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__264017),args);
var fs__264019 = cljs.core.next.call(null,fs__264017);

while(true){
if(cljs.core.truth_(fs__264019))
{{
var G__264046 = cljs.core.first.call(null,fs__264019).call(null,ret__264018);
var G__264047 = cljs.core.next.call(null,fs__264019);
ret__264018 = G__264046;
fs__264019 = G__264047;
continue;
}
} else
{return ret__264018;
}
break;
}
};
var G__264045 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__264045__delegate.call(this, args);
};
G__264045.cljs$lang$maxFixedArity = 0;
G__264045.cljs$lang$applyTo = (function (arglist__264048){
var args = cljs.core.seq( arglist__264048 );;
return G__264045__delegate.call(this, args);
});
return G__264045;
})()
;
};
var G__264044 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264044__delegate.call(this, f1, f2, f3, fs);
};
G__264044.cljs$lang$maxFixedArity = 3;
G__264044.cljs$lang$applyTo = (function (arglist__264049){
var f1 = cljs.core.first(arglist__264049);
var f2 = cljs.core.first(cljs.core.next(arglist__264049));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264049)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264049)));
return G__264044__delegate.call(this, f1, f2, f3, fs);
});
return G__264044;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__264020.call(this);
case  1 :
return comp__264021.call(this,f1);
case  2 :
return comp__264022.call(this,f1,f2);
case  3 :
return comp__264023.call(this,f1,f2,f3);
default:
return comp__264024.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__264024.cljs$lang$applyTo;
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
var partial__264050 = (function (f,arg1){
return (function() { 
var G__264055__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__264055 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__264055__delegate.call(this, args);
};
G__264055.cljs$lang$maxFixedArity = 0;
G__264055.cljs$lang$applyTo = (function (arglist__264056){
var args = cljs.core.seq( arglist__264056 );;
return G__264055__delegate.call(this, args);
});
return G__264055;
})()
;
});
var partial__264051 = (function (f,arg1,arg2){
return (function() { 
var G__264057__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__264057 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__264057__delegate.call(this, args);
};
G__264057.cljs$lang$maxFixedArity = 0;
G__264057.cljs$lang$applyTo = (function (arglist__264058){
var args = cljs.core.seq( arglist__264058 );;
return G__264057__delegate.call(this, args);
});
return G__264057;
})()
;
});
var partial__264052 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__264059__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__264059 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__264059__delegate.call(this, args);
};
G__264059.cljs$lang$maxFixedArity = 0;
G__264059.cljs$lang$applyTo = (function (arglist__264060){
var args = cljs.core.seq( arglist__264060 );;
return G__264059__delegate.call(this, args);
});
return G__264059;
})()
;
});
var partial__264053 = (function() { 
var G__264061__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__264062__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__264062 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__264062__delegate.call(this, args);
};
G__264062.cljs$lang$maxFixedArity = 0;
G__264062.cljs$lang$applyTo = (function (arglist__264063){
var args = cljs.core.seq( arglist__264063 );;
return G__264062__delegate.call(this, args);
});
return G__264062;
})()
;
};
var G__264061 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__264061__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__264061.cljs$lang$maxFixedArity = 4;
G__264061.cljs$lang$applyTo = (function (arglist__264064){
var f = cljs.core.first(arglist__264064);
var arg1 = cljs.core.first(cljs.core.next(arglist__264064));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264064)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__264064))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__264064))));
return G__264061__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__264061;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__264050.call(this,f,arg1);
case  3 :
return partial__264051.call(this,f,arg1,arg2);
case  4 :
return partial__264052.call(this,f,arg1,arg2,arg3);
default:
return partial__264053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__264053.cljs$lang$applyTo;
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
var fnil__264065 = (function (f,x){
return (function() {
var G__264069 = null;
var G__264069__264070 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__264069__264071 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__264069__264072 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__264069__264073 = (function() { 
var G__264075__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__264075 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264075__delegate.call(this, a, b, c, ds);
};
G__264075.cljs$lang$maxFixedArity = 3;
G__264075.cljs$lang$applyTo = (function (arglist__264076){
var a = cljs.core.first(arglist__264076);
var b = cljs.core.first(cljs.core.next(arglist__264076));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264076)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264076)));
return G__264075__delegate.call(this, a, b, c, ds);
});
return G__264075;
})()
;
G__264069 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__264069__264070.call(this,a);
case  2 :
return G__264069__264071.call(this,a,b);
case  3 :
return G__264069__264072.call(this,a,b,c);
default:
return G__264069__264073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264069.cljs$lang$maxFixedArity = 3;
G__264069.cljs$lang$applyTo = G__264069__264073.cljs$lang$applyTo;
return G__264069;
})()
});
var fnil__264066 = (function (f,x,y){
return (function() {
var G__264077 = null;
var G__264077__264078 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__264077__264079 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__264077__264080 = (function() { 
var G__264082__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__264082 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264082__delegate.call(this, a, b, c, ds);
};
G__264082.cljs$lang$maxFixedArity = 3;
G__264082.cljs$lang$applyTo = (function (arglist__264083){
var a = cljs.core.first(arglist__264083);
var b = cljs.core.first(cljs.core.next(arglist__264083));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264083)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264083)));
return G__264082__delegate.call(this, a, b, c, ds);
});
return G__264082;
})()
;
G__264077 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__264077__264078.call(this,a,b);
case  3 :
return G__264077__264079.call(this,a,b,c);
default:
return G__264077__264080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264077.cljs$lang$maxFixedArity = 3;
G__264077.cljs$lang$applyTo = G__264077__264080.cljs$lang$applyTo;
return G__264077;
})()
});
var fnil__264067 = (function (f,x,y,z){
return (function() {
var G__264084 = null;
var G__264084__264085 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__264084__264086 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__264084__264087 = (function() { 
var G__264089__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__264089 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264089__delegate.call(this, a, b, c, ds);
};
G__264089.cljs$lang$maxFixedArity = 3;
G__264089.cljs$lang$applyTo = (function (arglist__264090){
var a = cljs.core.first(arglist__264090);
var b = cljs.core.first(cljs.core.next(arglist__264090));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264090)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264090)));
return G__264089__delegate.call(this, a, b, c, ds);
});
return G__264089;
})()
;
G__264084 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__264084__264085.call(this,a,b);
case  3 :
return G__264084__264086.call(this,a,b,c);
default:
return G__264084__264087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264084.cljs$lang$maxFixedArity = 3;
G__264084.cljs$lang$applyTo = G__264084__264087.cljs$lang$applyTo;
return G__264084;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__264065.call(this,f,x);
case  3 :
return fnil__264066.call(this,f,x,y);
case  4 :
return fnil__264067.call(this,f,x,y,z);
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
var mapi__264093 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264091 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264091))
{var s__264092 = temp__3698__auto____264091;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__264092)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__264092)));
} else
{return null;
}
})));
});

return mapi__264093.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264094 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264094))
{var s__264095 = temp__3698__auto____264094;

var x__264096 = f.call(null,cljs.core.first.call(null,s__264095));

if(cljs.core.truth_((x__264096 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__264095));
} else
{return cljs.core.cons.call(null,x__264096,keep.call(null,f,cljs.core.rest.call(null,s__264095)));
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
var keepi__264106 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264103))
{var s__264104 = temp__3698__auto____264103;

var x__264105 = f.call(null,idx,cljs.core.first.call(null,s__264104));

if(cljs.core.truth_((x__264105 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__264104));
} else
{return cljs.core.cons.call(null,x__264105,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__264104)));
}
} else
{return null;
}
})));
});

return keepi__264106.call(null,0,coll);
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
var every_pred__264151 = (function (p){
return (function() {
var ep1 = null;
var ep1__264156 = (function (){
return true;
});
var ep1__264157 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__264158 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264113 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____264113))
{return p.call(null,y);
} else
{return and__3546__auto____264113;
}
})());
});
var ep1__264159 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264114 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____264114))
{var and__3546__auto____264115 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____264115))
{return p.call(null,z);
} else
{return and__3546__auto____264115;
}
} else
{return and__3546__auto____264114;
}
})());
});
var ep1__264160 = (function() { 
var G__264162__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264116 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____264116))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____264116;
}
})());
};
var G__264162 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264162__delegate.call(this, x, y, z, args);
};
G__264162.cljs$lang$maxFixedArity = 3;
G__264162.cljs$lang$applyTo = (function (arglist__264163){
var x = cljs.core.first(arglist__264163);
var y = cljs.core.first(cljs.core.next(arglist__264163));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264163)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264163)));
return G__264162__delegate.call(this, x, y, z, args);
});
return G__264162;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__264156.call(this);
case  1 :
return ep1__264157.call(this,x);
case  2 :
return ep1__264158.call(this,x,y);
case  3 :
return ep1__264159.call(this,x,y,z);
default:
return ep1__264160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__264160.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__264152 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__264164 = (function (){
return true;
});
var ep2__264165 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264117 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____264117))
{return p2.call(null,x);
} else
{return and__3546__auto____264117;
}
})());
});
var ep2__264166 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264118 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____264118))
{var and__3546__auto____264119 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____264119))
{var and__3546__auto____264120 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____264120))
{return p2.call(null,y);
} else
{return and__3546__auto____264120;
}
} else
{return and__3546__auto____264119;
}
} else
{return and__3546__auto____264118;
}
})());
});
var ep2__264167 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264121 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____264121))
{var and__3546__auto____264122 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____264122))
{var and__3546__auto____264123 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____264123))
{var and__3546__auto____264124 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____264124))
{var and__3546__auto____264125 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____264125))
{return p2.call(null,z);
} else
{return and__3546__auto____264125;
}
} else
{return and__3546__auto____264124;
}
} else
{return and__3546__auto____264123;
}
} else
{return and__3546__auto____264122;
}
} else
{return and__3546__auto____264121;
}
})());
});
var ep2__264168 = (function() { 
var G__264170__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264126 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____264126))
{return cljs.core.every_QMARK_.call(null,(function (p1__264097_SHARP_){
var and__3546__auto____264127 = p1.call(null,p1__264097_SHARP_);

if(cljs.core.truth_(and__3546__auto____264127))
{return p2.call(null,p1__264097_SHARP_);
} else
{return and__3546__auto____264127;
}
}),args);
} else
{return and__3546__auto____264126;
}
})());
};
var G__264170 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264170__delegate.call(this, x, y, z, args);
};
G__264170.cljs$lang$maxFixedArity = 3;
G__264170.cljs$lang$applyTo = (function (arglist__264171){
var x = cljs.core.first(arglist__264171);
var y = cljs.core.first(cljs.core.next(arglist__264171));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264171)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264171)));
return G__264170__delegate.call(this, x, y, z, args);
});
return G__264170;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__264164.call(this);
case  1 :
return ep2__264165.call(this,x);
case  2 :
return ep2__264166.call(this,x,y);
case  3 :
return ep2__264167.call(this,x,y,z);
default:
return ep2__264168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__264168.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__264153 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__264172 = (function (){
return true;
});
var ep3__264173 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264128 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____264128))
{var and__3546__auto____264129 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____264129))
{return p3.call(null,x);
} else
{return and__3546__auto____264129;
}
} else
{return and__3546__auto____264128;
}
})());
});
var ep3__264174 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264130 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____264130))
{var and__3546__auto____264131 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____264131))
{var and__3546__auto____264132 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____264132))
{var and__3546__auto____264133 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____264133))
{var and__3546__auto____264134 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____264134))
{return p3.call(null,y);
} else
{return and__3546__auto____264134;
}
} else
{return and__3546__auto____264133;
}
} else
{return and__3546__auto____264132;
}
} else
{return and__3546__auto____264131;
}
} else
{return and__3546__auto____264130;
}
})());
});
var ep3__264175 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264135 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____264135))
{var and__3546__auto____264136 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____264136))
{var and__3546__auto____264137 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____264137))
{var and__3546__auto____264138 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____264138))
{var and__3546__auto____264139 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____264139))
{var and__3546__auto____264140 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____264140))
{var and__3546__auto____264141 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____264141))
{var and__3546__auto____264142 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____264142))
{return p3.call(null,z);
} else
{return and__3546__auto____264142;
}
} else
{return and__3546__auto____264141;
}
} else
{return and__3546__auto____264140;
}
} else
{return and__3546__auto____264139;
}
} else
{return and__3546__auto____264138;
}
} else
{return and__3546__auto____264137;
}
} else
{return and__3546__auto____264136;
}
} else
{return and__3546__auto____264135;
}
})());
});
var ep3__264176 = (function() { 
var G__264178__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264143 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____264143))
{return cljs.core.every_QMARK_.call(null,(function (p1__264098_SHARP_){
var and__3546__auto____264144 = p1.call(null,p1__264098_SHARP_);

if(cljs.core.truth_(and__3546__auto____264144))
{var and__3546__auto____264145 = p2.call(null,p1__264098_SHARP_);

if(cljs.core.truth_(and__3546__auto____264145))
{return p3.call(null,p1__264098_SHARP_);
} else
{return and__3546__auto____264145;
}
} else
{return and__3546__auto____264144;
}
}),args);
} else
{return and__3546__auto____264143;
}
})());
};
var G__264178 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264178__delegate.call(this, x, y, z, args);
};
G__264178.cljs$lang$maxFixedArity = 3;
G__264178.cljs$lang$applyTo = (function (arglist__264179){
var x = cljs.core.first(arglist__264179);
var y = cljs.core.first(cljs.core.next(arglist__264179));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264179)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264179)));
return G__264178__delegate.call(this, x, y, z, args);
});
return G__264178;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__264172.call(this);
case  1 :
return ep3__264173.call(this,x);
case  2 :
return ep3__264174.call(this,x,y);
case  3 :
return ep3__264175.call(this,x,y,z);
default:
return ep3__264176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__264176.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__264154 = (function() { 
var G__264180__delegate = function (p1,p2,p3,ps){
var ps__264146 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__264181 = (function (){
return true;
});
var epn__264182 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__264099_SHARP_){
return p1__264099_SHARP_.call(null,x);
}),ps__264146);
});
var epn__264183 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__264100_SHARP_){
var and__3546__auto____264147 = p1__264100_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____264147))
{return p1__264100_SHARP_.call(null,y);
} else
{return and__3546__auto____264147;
}
}),ps__264146);
});
var epn__264184 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__264101_SHARP_){
var and__3546__auto____264148 = p1__264101_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____264148))
{var and__3546__auto____264149 = p1__264101_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____264149))
{return p1__264101_SHARP_.call(null,z);
} else
{return and__3546__auto____264149;
}
} else
{return and__3546__auto____264148;
}
}),ps__264146);
});
var epn__264185 = (function() { 
var G__264187__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____264150 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____264150))
{return cljs.core.every_QMARK_.call(null,(function (p1__264102_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__264102_SHARP_,args);
}),ps__264146);
} else
{return and__3546__auto____264150;
}
})());
};
var G__264187 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264187__delegate.call(this, x, y, z, args);
};
G__264187.cljs$lang$maxFixedArity = 3;
G__264187.cljs$lang$applyTo = (function (arglist__264188){
var x = cljs.core.first(arglist__264188);
var y = cljs.core.first(cljs.core.next(arglist__264188));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264188)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264188)));
return G__264187__delegate.call(this, x, y, z, args);
});
return G__264187;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__264181.call(this);
case  1 :
return epn__264182.call(this,x);
case  2 :
return epn__264183.call(this,x,y);
case  3 :
return epn__264184.call(this,x,y,z);
default:
return epn__264185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__264185.cljs$lang$applyTo;
return epn;
})()
};
var G__264180 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264180__delegate.call(this, p1, p2, p3, ps);
};
G__264180.cljs$lang$maxFixedArity = 3;
G__264180.cljs$lang$applyTo = (function (arglist__264189){
var p1 = cljs.core.first(arglist__264189);
var p2 = cljs.core.first(cljs.core.next(arglist__264189));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264189)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264189)));
return G__264180__delegate.call(this, p1, p2, p3, ps);
});
return G__264180;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__264151.call(this,p1);
case  2 :
return every_pred__264152.call(this,p1,p2);
case  3 :
return every_pred__264153.call(this,p1,p2,p3);
default:
return every_pred__264154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__264154.cljs$lang$applyTo;
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
var some_fn__264229 = (function (p){
return (function() {
var sp1 = null;
var sp1__264234 = (function (){
return null;
});
var sp1__264235 = (function (x){
return p.call(null,x);
});
var sp1__264236 = (function (x,y){
var or__3548__auto____264191 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____264191))
{return or__3548__auto____264191;
} else
{return p.call(null,y);
}
});
var sp1__264237 = (function (x,y,z){
var or__3548__auto____264192 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____264192))
{return or__3548__auto____264192;
} else
{var or__3548__auto____264193 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____264193))
{return or__3548__auto____264193;
} else
{return p.call(null,z);
}
}
});
var sp1__264238 = (function() { 
var G__264240__delegate = function (x,y,z,args){
var or__3548__auto____264194 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____264194))
{return or__3548__auto____264194;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__264240 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264240__delegate.call(this, x, y, z, args);
};
G__264240.cljs$lang$maxFixedArity = 3;
G__264240.cljs$lang$applyTo = (function (arglist__264241){
var x = cljs.core.first(arglist__264241);
var y = cljs.core.first(cljs.core.next(arglist__264241));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264241)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264241)));
return G__264240__delegate.call(this, x, y, z, args);
});
return G__264240;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__264234.call(this);
case  1 :
return sp1__264235.call(this,x);
case  2 :
return sp1__264236.call(this,x,y);
case  3 :
return sp1__264237.call(this,x,y,z);
default:
return sp1__264238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__264238.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__264230 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__264242 = (function (){
return null;
});
var sp2__264243 = (function (x){
var or__3548__auto____264195 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____264195))
{return or__3548__auto____264195;
} else
{return p2.call(null,x);
}
});
var sp2__264244 = (function (x,y){
var or__3548__auto____264196 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____264196))
{return or__3548__auto____264196;
} else
{var or__3548__auto____264197 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____264197))
{return or__3548__auto____264197;
} else
{var or__3548__auto____264198 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____264198))
{return or__3548__auto____264198;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__264245 = (function (x,y,z){
var or__3548__auto____264199 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____264199))
{return or__3548__auto____264199;
} else
{var or__3548__auto____264200 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____264200))
{return or__3548__auto____264200;
} else
{var or__3548__auto____264201 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____264201))
{return or__3548__auto____264201;
} else
{var or__3548__auto____264202 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____264202))
{return or__3548__auto____264202;
} else
{var or__3548__auto____264203 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____264203))
{return or__3548__auto____264203;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__264246 = (function() { 
var G__264248__delegate = function (x,y,z,args){
var or__3548__auto____264204 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____264204))
{return or__3548__auto____264204;
} else
{return cljs.core.some.call(null,(function (p1__264107_SHARP_){
var or__3548__auto____264205 = p1.call(null,p1__264107_SHARP_);

if(cljs.core.truth_(or__3548__auto____264205))
{return or__3548__auto____264205;
} else
{return p2.call(null,p1__264107_SHARP_);
}
}),args);
}
};
var G__264248 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264248__delegate.call(this, x, y, z, args);
};
G__264248.cljs$lang$maxFixedArity = 3;
G__264248.cljs$lang$applyTo = (function (arglist__264249){
var x = cljs.core.first(arglist__264249);
var y = cljs.core.first(cljs.core.next(arglist__264249));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264249)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264249)));
return G__264248__delegate.call(this, x, y, z, args);
});
return G__264248;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__264242.call(this);
case  1 :
return sp2__264243.call(this,x);
case  2 :
return sp2__264244.call(this,x,y);
case  3 :
return sp2__264245.call(this,x,y,z);
default:
return sp2__264246.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__264246.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__264231 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__264250 = (function (){
return null;
});
var sp3__264251 = (function (x){
var or__3548__auto____264206 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____264206))
{return or__3548__auto____264206;
} else
{var or__3548__auto____264207 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____264207))
{return or__3548__auto____264207;
} else
{return p3.call(null,x);
}
}
});
var sp3__264252 = (function (x,y){
var or__3548__auto____264208 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____264208))
{return or__3548__auto____264208;
} else
{var or__3548__auto____264209 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____264209))
{return or__3548__auto____264209;
} else
{var or__3548__auto____264210 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____264210))
{return or__3548__auto____264210;
} else
{var or__3548__auto____264211 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____264211))
{return or__3548__auto____264211;
} else
{var or__3548__auto____264212 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____264212))
{return or__3548__auto____264212;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__264253 = (function (x,y,z){
var or__3548__auto____264213 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____264213))
{return or__3548__auto____264213;
} else
{var or__3548__auto____264214 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____264214))
{return or__3548__auto____264214;
} else
{var or__3548__auto____264215 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____264215))
{return or__3548__auto____264215;
} else
{var or__3548__auto____264216 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____264216))
{return or__3548__auto____264216;
} else
{var or__3548__auto____264217 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____264217))
{return or__3548__auto____264217;
} else
{var or__3548__auto____264218 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____264218))
{return or__3548__auto____264218;
} else
{var or__3548__auto____264219 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____264219))
{return or__3548__auto____264219;
} else
{var or__3548__auto____264220 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____264220))
{return or__3548__auto____264220;
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
var sp3__264254 = (function() { 
var G__264256__delegate = function (x,y,z,args){
var or__3548__auto____264221 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____264221))
{return or__3548__auto____264221;
} else
{return cljs.core.some.call(null,(function (p1__264108_SHARP_){
var or__3548__auto____264222 = p1.call(null,p1__264108_SHARP_);

if(cljs.core.truth_(or__3548__auto____264222))
{return or__3548__auto____264222;
} else
{var or__3548__auto____264223 = p2.call(null,p1__264108_SHARP_);

if(cljs.core.truth_(or__3548__auto____264223))
{return or__3548__auto____264223;
} else
{return p3.call(null,p1__264108_SHARP_);
}
}
}),args);
}
};
var G__264256 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264256__delegate.call(this, x, y, z, args);
};
G__264256.cljs$lang$maxFixedArity = 3;
G__264256.cljs$lang$applyTo = (function (arglist__264257){
var x = cljs.core.first(arglist__264257);
var y = cljs.core.first(cljs.core.next(arglist__264257));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264257)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264257)));
return G__264256__delegate.call(this, x, y, z, args);
});
return G__264256;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__264250.call(this);
case  1 :
return sp3__264251.call(this,x);
case  2 :
return sp3__264252.call(this,x,y);
case  3 :
return sp3__264253.call(this,x,y,z);
default:
return sp3__264254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__264254.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__264232 = (function() { 
var G__264258__delegate = function (p1,p2,p3,ps){
var ps__264224 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__264259 = (function (){
return null;
});
var spn__264260 = (function (x){
return cljs.core.some.call(null,(function (p1__264109_SHARP_){
return p1__264109_SHARP_.call(null,x);
}),ps__264224);
});
var spn__264261 = (function (x,y){
return cljs.core.some.call(null,(function (p1__264110_SHARP_){
var or__3548__auto____264225 = p1__264110_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____264225))
{return or__3548__auto____264225;
} else
{return p1__264110_SHARP_.call(null,y);
}
}),ps__264224);
});
var spn__264262 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__264111_SHARP_){
var or__3548__auto____264226 = p1__264111_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____264226))
{return or__3548__auto____264226;
} else
{var or__3548__auto____264227 = p1__264111_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____264227))
{return or__3548__auto____264227;
} else
{return p1__264111_SHARP_.call(null,z);
}
}
}),ps__264224);
});
var spn__264263 = (function() { 
var G__264265__delegate = function (x,y,z,args){
var or__3548__auto____264228 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____264228))
{return or__3548__auto____264228;
} else
{return cljs.core.some.call(null,(function (p1__264112_SHARP_){
return cljs.core.some.call(null,p1__264112_SHARP_,args);
}),ps__264224);
}
};
var G__264265 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264265__delegate.call(this, x, y, z, args);
};
G__264265.cljs$lang$maxFixedArity = 3;
G__264265.cljs$lang$applyTo = (function (arglist__264266){
var x = cljs.core.first(arglist__264266);
var y = cljs.core.first(cljs.core.next(arglist__264266));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264266)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264266)));
return G__264265__delegate.call(this, x, y, z, args);
});
return G__264265;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__264259.call(this);
case  1 :
return spn__264260.call(this,x);
case  2 :
return spn__264261.call(this,x,y);
case  3 :
return spn__264262.call(this,x,y,z);
default:
return spn__264263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__264263.cljs$lang$applyTo;
return spn;
})()
};
var G__264258 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264258__delegate.call(this, p1, p2, p3, ps);
};
G__264258.cljs$lang$maxFixedArity = 3;
G__264258.cljs$lang$applyTo = (function (arglist__264267){
var p1 = cljs.core.first(arglist__264267);
var p2 = cljs.core.first(cljs.core.next(arglist__264267));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264267)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264267)));
return G__264258__delegate.call(this, p1, p2, p3, ps);
});
return G__264258;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__264229.call(this,p1);
case  2 :
return some_fn__264230.call(this,p1,p2);
case  3 :
return some_fn__264231.call(this,p1,p2,p3);
default:
return some_fn__264232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__264232.cljs$lang$applyTo;
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
var map__264280 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264268 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264268))
{var s__264269 = temp__3698__auto____264268;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__264269)),map.call(null,f,cljs.core.rest.call(null,s__264269)));
} else
{return null;
}
})));
});
var map__264281 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__264270 = cljs.core.seq.call(null,c1);
var s2__264271 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____264272 = s1__264270;

if(cljs.core.truth_(and__3546__auto____264272))
{return s2__264271;
} else
{return and__3546__auto____264272;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__264270),cljs.core.first.call(null,s2__264271)),map.call(null,f,cljs.core.rest.call(null,s1__264270),cljs.core.rest.call(null,s2__264271)));
} else
{return null;
}
})));
});
var map__264282 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__264273 = cljs.core.seq.call(null,c1);
var s2__264274 = cljs.core.seq.call(null,c2);
var s3__264275 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____264276 = s1__264273;

if(cljs.core.truth_(and__3546__auto____264276))
{var and__3546__auto____264277 = s2__264274;

if(cljs.core.truth_(and__3546__auto____264277))
{return s3__264275;
} else
{return and__3546__auto____264277;
}
} else
{return and__3546__auto____264276;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__264273),cljs.core.first.call(null,s2__264274),cljs.core.first.call(null,s3__264275)),map.call(null,f,cljs.core.rest.call(null,s1__264273),cljs.core.rest.call(null,s2__264274),cljs.core.rest.call(null,s3__264275)));
} else
{return null;
}
})));
});
var map__264283 = (function() { 
var G__264285__delegate = function (f,c1,c2,c3,colls){
var step__264279 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__264278 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__264278)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__264278),step.call(null,map.call(null,cljs.core.rest,ss__264278)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__264190_SHARP_){
return cljs.core.apply.call(null,f,p1__264190_SHARP_);
}),step__264279.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__264285 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__264285__delegate.call(this, f, c1, c2, c3, colls);
};
G__264285.cljs$lang$maxFixedArity = 4;
G__264285.cljs$lang$applyTo = (function (arglist__264286){
var f = cljs.core.first(arglist__264286);
var c1 = cljs.core.first(cljs.core.next(arglist__264286));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264286)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__264286))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__264286))));
return G__264285__delegate.call(this, f, c1, c2, c3, colls);
});
return G__264285;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__264280.call(this,f,c1);
case  3 :
return map__264281.call(this,f,c1,c2);
case  4 :
return map__264282.call(this,f,c1,c2,c3);
default:
return map__264283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__264283.cljs$lang$applyTo;
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
{var temp__3698__auto____264287 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264287))
{var s__264288 = temp__3698__auto____264287;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__264288),take.call(null,(n - 1),cljs.core.rest.call(null,s__264288)));
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
var step__264291 = (function (n,coll){
while(true){
var s__264289 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____264290 = (n > 0);

if(cljs.core.truth_(and__3546__auto____264290))
{return s__264289;
} else
{return and__3546__auto____264290;
}
})()))
{{
var G__264292 = (n - 1);
var G__264293 = cljs.core.rest.call(null,s__264289);
n = G__264292;
coll = G__264293;
continue;
}
} else
{return s__264289;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__264291.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__264294 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__264295 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__264294.call(this,n);
case  2 :
return drop_last__264295.call(this,n,s);
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
var s__264297 = cljs.core.seq.call(null,coll);
var lead__264298 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__264298))
{{
var G__264299 = cljs.core.next.call(null,s__264297);
var G__264300 = cljs.core.next.call(null,lead__264298);
s__264297 = G__264299;
lead__264298 = G__264300;
continue;
}
} else
{return s__264297;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__264303 = (function (pred,coll){
while(true){
var s__264301 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____264302 = s__264301;

if(cljs.core.truth_(and__3546__auto____264302))
{return pred.call(null,cljs.core.first.call(null,s__264301));
} else
{return and__3546__auto____264302;
}
})()))
{{
var G__264304 = pred;
var G__264305 = cljs.core.rest.call(null,s__264301);
pred = G__264304;
coll = G__264305;
continue;
}
} else
{return s__264301;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__264303.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264306 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264306))
{var s__264307 = temp__3698__auto____264306;

return cljs.core.concat.call(null,s__264307,cycle.call(null,s__264307));
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
var repeat__264308 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__264309 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__264308.call(this,n);
case  2 :
return repeat__264309.call(this,n,x);
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
var repeatedly__264311 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__264312 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__264311.call(this,n);
case  2 :
return repeatedly__264312.call(this,n,f);
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
var interleave__264318 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__264314 = cljs.core.seq.call(null,c1);
var s2__264315 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____264316 = s1__264314;

if(cljs.core.truth_(and__3546__auto____264316))
{return s2__264315;
} else
{return and__3546__auto____264316;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__264314),cljs.core.cons.call(null,cljs.core.first.call(null,s2__264315),interleave.call(null,cljs.core.rest.call(null,s1__264314),cljs.core.rest.call(null,s2__264315))));
} else
{return null;
}
})));
});
var interleave__264319 = (function() { 
var G__264321__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__264317 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__264317)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__264317),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__264317)));
} else
{return null;
}
})));
};
var G__264321 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__264321__delegate.call(this, c1, c2, colls);
};
G__264321.cljs$lang$maxFixedArity = 2;
G__264321.cljs$lang$applyTo = (function (arglist__264322){
var c1 = cljs.core.first(arglist__264322);
var c2 = cljs.core.first(cljs.core.next(arglist__264322));
var colls = cljs.core.rest(cljs.core.next(arglist__264322));
return G__264321__delegate.call(this, c1, c2, colls);
});
return G__264321;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__264318.call(this,c1,c2);
default:
return interleave__264319.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__264319.cljs$lang$applyTo;
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
var cat__264325 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____264323 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____264323))
{var coll__264324 = temp__3695__auto____264323;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__264324),cat.call(null,cljs.core.rest.call(null,coll__264324),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__264325.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__264326 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__264327 = (function() { 
var G__264329__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__264329 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__264329__delegate.call(this, f, coll, colls);
};
G__264329.cljs$lang$maxFixedArity = 2;
G__264329.cljs$lang$applyTo = (function (arglist__264330){
var f = cljs.core.first(arglist__264330);
var coll = cljs.core.first(cljs.core.next(arglist__264330));
var colls = cljs.core.rest(cljs.core.next(arglist__264330));
return G__264329__delegate.call(this, f, coll, colls);
});
return G__264329;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__264326.call(this,f,coll);
default:
return mapcat__264327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__264327.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264331 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264331))
{var s__264332 = temp__3698__auto____264331;

var f__264333 = cljs.core.first.call(null,s__264332);
var r__264334 = cljs.core.rest.call(null,s__264332);

if(cljs.core.truth_(pred.call(null,f__264333)))
{return cljs.core.cons.call(null,f__264333,filter.call(null,pred,r__264334));
} else
{return filter.call(null,pred,r__264334);
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
var walk__264336 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__264336.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__264335_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__264335_SHARP_));
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
var partition__264343 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__264344 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264337 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264337))
{var s__264338 = temp__3698__auto____264337;

var p__264339 = cljs.core.take.call(null,n,s__264338);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__264339))))
{return cljs.core.cons.call(null,p__264339,partition.call(null,n,step,cljs.core.drop.call(null,step,s__264338)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__264345 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264340 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264340))
{var s__264341 = temp__3698__auto____264340;

var p__264342 = cljs.core.take.call(null,n,s__264341);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__264342))))
{return cljs.core.cons.call(null,p__264342,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__264341)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__264342,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__264343.call(this,n,step);
case  3 :
return partition__264344.call(this,n,step,pad);
case  4 :
return partition__264345.call(this,n,step,pad,coll);
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
var get_in__264351 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__264352 = (function (m,ks,not_found){
var sentinel__264347 = cljs.core.lookup_sentinel;
var m__264348 = m;
var ks__264349 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__264349))
{var m__264350 = cljs.core.get.call(null,m__264348,cljs.core.first.call(null,ks__264349),sentinel__264347);

if(cljs.core.truth_((sentinel__264347 === m__264350)))
{return not_found;
} else
{{
var G__264354 = sentinel__264347;
var G__264355 = m__264350;
var G__264356 = cljs.core.next.call(null,ks__264349);
sentinel__264347 = G__264354;
m__264348 = G__264355;
ks__264349 = G__264356;
continue;
}
}
} else
{return m__264348;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__264351.call(this,m,ks);
case  3 :
return get_in__264352.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__264357,v){
var vec__264358__264359 = p__264357;
var k__264360 = cljs.core.nth.call(null,vec__264358__264359,0,null);
var ks__264361 = cljs.core.nthnext.call(null,vec__264358__264359,1);

if(cljs.core.truth_(ks__264361))
{return cljs.core.assoc.call(null,m,k__264360,assoc_in.call(null,cljs.core.get.call(null,m,k__264360),ks__264361,v));
} else
{return cljs.core.assoc.call(null,m,k__264360,v);
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
var update_in__delegate = function (m,p__264362,f,args){
var vec__264363__264364 = p__264362;
var k__264365 = cljs.core.nth.call(null,vec__264363__264364,0,null);
var ks__264366 = cljs.core.nthnext.call(null,vec__264363__264364,1);

if(cljs.core.truth_(ks__264366))
{return cljs.core.assoc.call(null,m,k__264365,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__264365),ks__264366,f,args));
} else
{return cljs.core.assoc.call(null,m,k__264365,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__264365),args));
}
};
var update_in = function (m,p__264362,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__264362, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__264367){
var m = cljs.core.first(arglist__264367);
var p__264362 = cljs.core.first(cljs.core.next(arglist__264367));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264367)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264367)));
return update_in__delegate.call(this, m, p__264362, f, args);
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
var this__264368 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__264401 = null;
var G__264401__264402 = (function (coll,k){
var this__264369 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__264401__264403 = (function (coll,k,not_found){
var this__264370 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__264401 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__264401__264402.call(this,coll,k);
case  3 :
return G__264401__264403.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264401;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__264371 = this;
var new_array__264372 = cljs.core.aclone.call(null,this__264371.array);

(new_array__264372[k] = v);
return (new cljs.core.Vector(this__264371.meta,new_array__264372));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__264405 = null;
var G__264405__264406 = (function (tsym264373,k){
var this__264375 = this;
var tsym264373__264376 = this;

var coll__264377 = tsym264373__264376;

return cljs.core._lookup.call(null,coll__264377,k);
});
var G__264405__264407 = (function (tsym264374,k,not_found){
var this__264378 = this;
var tsym264374__264379 = this;

var coll__264380 = tsym264374__264379;

return cljs.core._lookup.call(null,coll__264380,k,not_found);
});
G__264405 = function(tsym264374,k,not_found){
switch(arguments.length){
case  2 :
return G__264405__264406.call(this,tsym264374,k);
case  3 :
return G__264405__264407.call(this,tsym264374,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264405;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__264381 = this;
var new_array__264382 = cljs.core.aclone.call(null,this__264381.array);

new_array__264382.push(o);
return (new cljs.core.Vector(this__264381.meta,new_array__264382));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__264409 = null;
var G__264409__264410 = (function (v,f){
var this__264383 = this;
return cljs.core.ci_reduce.call(null,this__264383.array,f);
});
var G__264409__264411 = (function (v,f,start){
var this__264384 = this;
return cljs.core.ci_reduce.call(null,this__264384.array,f,start);
});
G__264409 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__264409__264410.call(this,v,f);
case  3 :
return G__264409__264411.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264409;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__264385 = this;
if(cljs.core.truth_((this__264385.array.length > 0)))
{var vector_seq__264386 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__264385.array.length)))
{return cljs.core.cons.call(null,(this__264385.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__264386.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__264387 = this;
return this__264387.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__264388 = this;
var count__264389 = this__264388.array.length;

if(cljs.core.truth_((count__264389 > 0)))
{return (this__264388.array[(count__264389 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__264390 = this;
if(cljs.core.truth_((this__264390.array.length > 0)))
{var new_array__264391 = cljs.core.aclone.call(null,this__264390.array);

new_array__264391.pop();
return (new cljs.core.Vector(this__264390.meta,new_array__264391));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__264392 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__264393 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__264394 = this;
return (new cljs.core.Vector(meta,this__264394.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__264395 = this;
return this__264395.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__264413 = null;
var G__264413__264414 = (function (coll,n){
var this__264396 = this;
if(cljs.core.truth_((function (){var and__3546__auto____264397 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____264397))
{return (n < this__264396.array.length);
} else
{return and__3546__auto____264397;
}
})()))
{return (this__264396.array[n]);
} else
{return null;
}
});
var G__264413__264415 = (function (coll,n,not_found){
var this__264398 = this;
if(cljs.core.truth_((function (){var and__3546__auto____264399 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____264399))
{return (n < this__264398.array.length);
} else
{return and__3546__auto____264399;
}
})()))
{return (this__264398.array[n]);
} else
{return not_found;
}
});
G__264413 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__264413__264414.call(this,coll,n);
case  3 :
return G__264413__264415.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264413;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__264400 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__264400.meta);
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
vector.cljs$lang$applyTo = (function (arglist__264417){
var args = cljs.core.seq( arglist__264417 );;
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
var this__264418 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__264446 = null;
var G__264446__264447 = (function (coll,k){
var this__264419 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__264446__264448 = (function (coll,k,not_found){
var this__264420 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__264446 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__264446__264447.call(this,coll,k);
case  3 :
return G__264446__264448.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264446;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__264421 = this;
var v_pos__264422 = (this__264421.start + key);

return (new cljs.core.Subvec(this__264421.meta,cljs.core._assoc.call(null,this__264421.v,v_pos__264422,val),this__264421.start,((this__264421.end > (v_pos__264422 + 1)) ? this__264421.end : (v_pos__264422 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__264450 = null;
var G__264450__264451 = (function (tsym264423,k){
var this__264425 = this;
var tsym264423__264426 = this;

var coll__264427 = tsym264423__264426;

return cljs.core._lookup.call(null,coll__264427,k);
});
var G__264450__264452 = (function (tsym264424,k,not_found){
var this__264428 = this;
var tsym264424__264429 = this;

var coll__264430 = tsym264424__264429;

return cljs.core._lookup.call(null,coll__264430,k,not_found);
});
G__264450 = function(tsym264424,k,not_found){
switch(arguments.length){
case  2 :
return G__264450__264451.call(this,tsym264424,k);
case  3 :
return G__264450__264452.call(this,tsym264424,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264450;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__264431 = this;
return (new cljs.core.Subvec(this__264431.meta,cljs.core._assoc_n.call(null,this__264431.v,this__264431.end,o),this__264431.start,(this__264431.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__264454 = null;
var G__264454__264455 = (function (coll,f){
var this__264432 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__264454__264456 = (function (coll,f,start){
var this__264433 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__264454 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__264454__264455.call(this,coll,f);
case  3 :
return G__264454__264456.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264454;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__264434 = this;
var subvec_seq__264435 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__264434.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__264434.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__264435.call(null,this__264434.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__264436 = this;
return (this__264436.end - this__264436.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__264437 = this;
return cljs.core._nth.call(null,this__264437.v,(this__264437.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__264438 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__264438.start,this__264438.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__264438.meta,this__264438.v,this__264438.start,(this__264438.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__264439 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__264440 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__264441 = this;
return (new cljs.core.Subvec(meta,this__264441.v,this__264441.start,this__264441.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__264442 = this;
return this__264442.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__264458 = null;
var G__264458__264459 = (function (coll,n){
var this__264443 = this;
return cljs.core._nth.call(null,this__264443.v,(this__264443.start + n));
});
var G__264458__264460 = (function (coll,n,not_found){
var this__264444 = this;
return cljs.core._nth.call(null,this__264444.v,(this__264444.start + n),not_found);
});
G__264458 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__264458__264459.call(this,coll,n);
case  3 :
return G__264458__264460.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264458;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__264445 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__264445.meta);
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
var subvec__264462 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__264463 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__264462.call(this,v,start);
case  3 :
return subvec__264463.call(this,v,start,end);
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
var this__264465 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__264466 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__264467 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__264468 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__264468.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__264469 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__264470 = this;
return cljs.core._first.call(null,this__264470.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__264471 = this;
var temp__3695__auto____264472 = cljs.core.next.call(null,this__264471.front);

if(cljs.core.truth_(temp__3695__auto____264472))
{var f1__264473 = temp__3695__auto____264472;

return (new cljs.core.PersistentQueueSeq(this__264471.meta,f1__264473,this__264471.rear));
} else
{if(cljs.core.truth_((this__264471.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__264471.meta,this__264471.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__264474 = this;
return this__264474.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__264475 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__264475.front,this__264475.rear));
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
var this__264476 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__264477 = this;
if(cljs.core.truth_(this__264477.front))
{return (new cljs.core.PersistentQueue(this__264477.meta,(this__264477.count + 1),this__264477.front,cljs.core.conj.call(null,(function (){var or__3548__auto____264478 = this__264477.rear;

if(cljs.core.truth_(or__3548__auto____264478))
{return or__3548__auto____264478;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__264477.meta,(this__264477.count + 1),cljs.core.conj.call(null,this__264477.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__264479 = this;
var rear__264480 = cljs.core.seq.call(null,this__264479.rear);

if(cljs.core.truth_((function (){var or__3548__auto____264481 = this__264479.front;

if(cljs.core.truth_(or__3548__auto____264481))
{return or__3548__auto____264481;
} else
{return rear__264480;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__264479.front,cljs.core.seq.call(null,rear__264480)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__264482 = this;
return this__264482.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__264483 = this;
return cljs.core._first.call(null,this__264483.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__264484 = this;
if(cljs.core.truth_(this__264484.front))
{var temp__3695__auto____264485 = cljs.core.next.call(null,this__264484.front);

if(cljs.core.truth_(temp__3695__auto____264485))
{var f1__264486 = temp__3695__auto____264485;

return (new cljs.core.PersistentQueue(this__264484.meta,(this__264484.count - 1),f1__264486,this__264484.rear));
} else
{return (new cljs.core.PersistentQueue(this__264484.meta,(this__264484.count - 1),cljs.core.seq.call(null,this__264484.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__264487 = this;
return cljs.core.first.call(null,this__264487.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__264488 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__264489 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__264490 = this;
return (new cljs.core.PersistentQueue(meta,this__264490.count,this__264490.front,this__264490.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__264491 = this;
return this__264491.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__264492 = this;
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
var this__264493 = this;
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
var len__264494 = array.length;

var i__264495 = 0;

while(true){
if(cljs.core.truth_((i__264495 < len__264494)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__264495]))))
{return i__264495;
} else
{{
var G__264496 = (i__264495 + incr);
i__264495 = G__264496;
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
var obj_map_contains_key_QMARK___264498 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___264499 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____264497 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____264497))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____264497;
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
return obj_map_contains_key_QMARK___264498.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___264499.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__264502 = cljs.core.hash.call(null,a);
var b__264503 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__264502 < b__264503)))
{return -1;
} else
{if(cljs.core.truth_((a__264502 > b__264503)))
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
var this__264504 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__264531 = null;
var G__264531__264532 = (function (coll,k){
var this__264505 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__264531__264533 = (function (coll,k,not_found){
var this__264506 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__264506.strobj,(this__264506.strobj[k]),not_found);
});
G__264531 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__264531__264532.call(this,coll,k);
case  3 :
return G__264531__264533.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264531;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__264507 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__264508 = goog.object.clone.call(null,this__264507.strobj);
var overwrite_QMARK___264509 = new_strobj__264508.hasOwnProperty(k);

(new_strobj__264508[k] = v);
if(cljs.core.truth_(overwrite_QMARK___264509))
{return (new cljs.core.ObjMap(this__264507.meta,this__264507.keys,new_strobj__264508));
} else
{var new_keys__264510 = cljs.core.aclone.call(null,this__264507.keys);

new_keys__264510.push(k);
return (new cljs.core.ObjMap(this__264507.meta,new_keys__264510,new_strobj__264508));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__264507.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__264511 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__264511.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__264535 = null;
var G__264535__264536 = (function (tsym264512,k){
var this__264514 = this;
var tsym264512__264515 = this;

var coll__264516 = tsym264512__264515;

return cljs.core._lookup.call(null,coll__264516,k);
});
var G__264535__264537 = (function (tsym264513,k,not_found){
var this__264517 = this;
var tsym264513__264518 = this;

var coll__264519 = tsym264513__264518;

return cljs.core._lookup.call(null,coll__264519,k,not_found);
});
G__264535 = function(tsym264513,k,not_found){
switch(arguments.length){
case  2 :
return G__264535__264536.call(this,tsym264513,k);
case  3 :
return G__264535__264537.call(this,tsym264513,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264535;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__264520 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__264521 = this;
if(cljs.core.truth_((this__264521.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__264501_SHARP_){
return cljs.core.vector.call(null,p1__264501_SHARP_,(this__264521.strobj[p1__264501_SHARP_]));
}),this__264521.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__264522 = this;
return this__264522.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__264523 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__264524 = this;
return (new cljs.core.ObjMap(meta,this__264524.keys,this__264524.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__264525 = this;
return this__264525.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__264526 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__264526.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__264527 = this;
if(cljs.core.truth_((function (){var and__3546__auto____264528 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____264528))
{return this__264527.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____264528;
}
})()))
{var new_keys__264529 = cljs.core.aclone.call(null,this__264527.keys);
var new_strobj__264530 = goog.object.clone.call(null,this__264527.strobj);

new_keys__264529.splice(cljs.core.scan_array.call(null,1,k,new_keys__264529),1);
cljs.core.js_delete.call(null,new_strobj__264530,k);
return (new cljs.core.ObjMap(this__264527.meta,new_keys__264529,new_strobj__264530));
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
var this__264540 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__264578 = null;
var G__264578__264579 = (function (coll,k){
var this__264541 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__264578__264580 = (function (coll,k,not_found){
var this__264542 = this;
var bucket__264543 = (this__264542.hashobj[cljs.core.hash.call(null,k)]);
var i__264544 = (cljs.core.truth_(bucket__264543)?cljs.core.scan_array.call(null,2,k,bucket__264543):null);

if(cljs.core.truth_(i__264544))
{return (bucket__264543[(i__264544 + 1)]);
} else
{return not_found;
}
});
G__264578 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__264578__264579.call(this,coll,k);
case  3 :
return G__264578__264580.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264578;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__264545 = this;
var h__264546 = cljs.core.hash.call(null,k);
var bucket__264547 = (this__264545.hashobj[h__264546]);

if(cljs.core.truth_(bucket__264547))
{var new_bucket__264548 = cljs.core.aclone.call(null,bucket__264547);
var new_hashobj__264549 = goog.object.clone.call(null,this__264545.hashobj);

(new_hashobj__264549[h__264546] = new_bucket__264548);
var temp__3695__auto____264550 = cljs.core.scan_array.call(null,2,k,new_bucket__264548);

if(cljs.core.truth_(temp__3695__auto____264550))
{var i__264551 = temp__3695__auto____264550;

(new_bucket__264548[(i__264551 + 1)] = v);
return (new cljs.core.HashMap(this__264545.meta,this__264545.count,new_hashobj__264549));
} else
{new_bucket__264548.push(k,v);
return (new cljs.core.HashMap(this__264545.meta,(this__264545.count + 1),new_hashobj__264549));
}
} else
{var new_hashobj__264552 = goog.object.clone.call(null,this__264545.hashobj);

(new_hashobj__264552[h__264546] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__264545.meta,(this__264545.count + 1),new_hashobj__264552));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__264553 = this;
var bucket__264554 = (this__264553.hashobj[cljs.core.hash.call(null,k)]);
var i__264555 = (cljs.core.truth_(bucket__264554)?cljs.core.scan_array.call(null,2,k,bucket__264554):null);

if(cljs.core.truth_(i__264555))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__264582 = null;
var G__264582__264583 = (function (tsym264556,k){
var this__264558 = this;
var tsym264556__264559 = this;

var coll__264560 = tsym264556__264559;

return cljs.core._lookup.call(null,coll__264560,k);
});
var G__264582__264584 = (function (tsym264557,k,not_found){
var this__264561 = this;
var tsym264557__264562 = this;

var coll__264563 = tsym264557__264562;

return cljs.core._lookup.call(null,coll__264563,k,not_found);
});
G__264582 = function(tsym264557,k,not_found){
switch(arguments.length){
case  2 :
return G__264582__264583.call(this,tsym264557,k);
case  3 :
return G__264582__264584.call(this,tsym264557,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264582;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__264564 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__264565 = this;
if(cljs.core.truth_((this__264565.count > 0)))
{var hashes__264566 = cljs.core.js_keys.call(null,this__264565.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__264539_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__264565.hashobj[p1__264539_SHARP_])));
}),hashes__264566);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__264567 = this;
return this__264567.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__264568 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__264569 = this;
return (new cljs.core.HashMap(meta,this__264569.count,this__264569.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__264570 = this;
return this__264570.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__264571 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__264571.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__264572 = this;
var h__264573 = cljs.core.hash.call(null,k);
var bucket__264574 = (this__264572.hashobj[h__264573]);
var i__264575 = (cljs.core.truth_(bucket__264574)?cljs.core.scan_array.call(null,2,k,bucket__264574):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__264575)))
{return coll;
} else
{var new_hashobj__264576 = goog.object.clone.call(null,this__264572.hashobj);

if(cljs.core.truth_((3 > bucket__264574.length)))
{cljs.core.js_delete.call(null,new_hashobj__264576,h__264573);
} else
{var new_bucket__264577 = cljs.core.aclone.call(null,bucket__264574);

new_bucket__264577.splice(i__264575,2);
(new_hashobj__264576[h__264573] = new_bucket__264577);
}
return (new cljs.core.HashMap(this__264572.meta,(this__264572.count - 1),new_hashobj__264576));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__264586 = ks.length;

var i__264587 = 0;
var out__264588 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__264587 < len__264586)))
{{
var G__264589 = (i__264587 + 1);
var G__264590 = cljs.core.assoc.call(null,out__264588,(ks[i__264587]),(vs[i__264587]));
i__264587 = G__264589;
out__264588 = G__264590;
continue;
}
} else
{return out__264588;
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
var in$__264591 = cljs.core.seq.call(null,keyvals);
var out__264592 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__264591))
{{
var G__264593 = cljs.core.nnext.call(null,in$__264591);
var G__264594 = cljs.core.assoc.call(null,out__264592,cljs.core.first.call(null,in$__264591),cljs.core.second.call(null,in$__264591));
in$__264591 = G__264593;
out__264592 = G__264594;
continue;
}
} else
{return out__264592;
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
hash_map.cljs$lang$applyTo = (function (arglist__264595){
var keyvals = cljs.core.seq( arglist__264595 );;
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
{return cljs.core.reduce.call(null,(function (p1__264596_SHARP_,p2__264597_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____264598 = p1__264596_SHARP_;

if(cljs.core.truth_(or__3548__auto____264598))
{return or__3548__auto____264598;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__264597_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__264599){
var maps = cljs.core.seq( arglist__264599 );;
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
{var merge_entry__264602 = (function (m,e){
var k__264600 = cljs.core.first.call(null,e);
var v__264601 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__264600)))
{return cljs.core.assoc.call(null,m,k__264600,f.call(null,cljs.core.get.call(null,m,k__264600),v__264601));
} else
{return cljs.core.assoc.call(null,m,k__264600,v__264601);
}
});
var merge2__264604 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__264602,(function (){var or__3548__auto____264603 = m1;

if(cljs.core.truth_(or__3548__auto____264603))
{return or__3548__auto____264603;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__264604,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__264605){
var f = cljs.core.first(arglist__264605);
var maps = cljs.core.rest(arglist__264605);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__264607 = cljs.core.ObjMap.fromObject([],{});
var keys__264608 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__264608))
{var key__264609 = cljs.core.first.call(null,keys__264608);
var entry__264610 = cljs.core.get.call(null,map,key__264609,"\uFDD0'user/not-found");

{
var G__264611 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__264610,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__264607,key__264609,entry__264610):ret__264607);
var G__264612 = cljs.core.next.call(null,keys__264608);
ret__264607 = G__264611;
keys__264608 = G__264612;
continue;
}
} else
{return ret__264607;
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
var this__264613 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__264634 = null;
var G__264634__264635 = (function (coll,v){
var this__264614 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__264634__264636 = (function (coll,v,not_found){
var this__264615 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__264615.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__264634 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__264634__264635.call(this,coll,v);
case  3 :
return G__264634__264636.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264634;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__264638 = null;
var G__264638__264639 = (function (tsym264616,k){
var this__264618 = this;
var tsym264616__264619 = this;

var coll__264620 = tsym264616__264619;

return cljs.core._lookup.call(null,coll__264620,k);
});
var G__264638__264640 = (function (tsym264617,k,not_found){
var this__264621 = this;
var tsym264617__264622 = this;

var coll__264623 = tsym264617__264622;

return cljs.core._lookup.call(null,coll__264623,k,not_found);
});
G__264638 = function(tsym264617,k,not_found){
switch(arguments.length){
case  2 :
return G__264638__264639.call(this,tsym264617,k);
case  3 :
return G__264638__264640.call(this,tsym264617,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264638;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__264624 = this;
return (new cljs.core.Set(this__264624.meta,cljs.core.assoc.call(null,this__264624.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__264625 = this;
return cljs.core.keys.call(null,this__264625.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__264626 = this;
return (new cljs.core.Set(this__264626.meta,cljs.core.dissoc.call(null,this__264626.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__264627 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__264628 = this;
var and__3546__auto____264629 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____264629))
{var and__3546__auto____264630 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____264630))
{return cljs.core.every_QMARK_.call(null,(function (p1__264606_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__264606_SHARP_);
}),other);
} else
{return and__3546__auto____264630;
}
} else
{return and__3546__auto____264629;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__264631 = this;
return (new cljs.core.Set(meta,this__264631.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__264632 = this;
return this__264632.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__264633 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__264633.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__264643 = cljs.core.seq.call(null,coll);
var out__264644 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__264643))))
{{
var G__264645 = cljs.core.rest.call(null,in$__264643);
var G__264646 = cljs.core.conj.call(null,out__264644,cljs.core.first.call(null,in$__264643));
in$__264643 = G__264645;
out__264644 = G__264646;
continue;
}
} else
{return out__264644;
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
{var n__264647 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____264648 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____264648))
{var e__264649 = temp__3695__auto____264648;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__264649));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__264647,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__264642_SHARP_){
var temp__3695__auto____264650 = cljs.core.find.call(null,smap,p1__264642_SHARP_);

if(cljs.core.truth_(temp__3695__auto____264650))
{var e__264651 = temp__3695__auto____264650;

return cljs.core.second.call(null,e__264651);
} else
{return p1__264642_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__264659 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__264652,seen){
while(true){
var vec__264653__264654 = p__264652;
var f__264655 = cljs.core.nth.call(null,vec__264653__264654,0,null);
var xs__264656 = vec__264653__264654;

var temp__3698__auto____264657 = cljs.core.seq.call(null,xs__264656);

if(cljs.core.truth_(temp__3698__auto____264657))
{var s__264658 = temp__3698__auto____264657;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__264655)))
{{
var G__264660 = cljs.core.rest.call(null,s__264658);
var G__264661 = seen;
p__264652 = G__264660;
seen = G__264661;
continue;
}
} else
{return cljs.core.cons.call(null,f__264655,step.call(null,cljs.core.rest.call(null,s__264658),cljs.core.conj.call(null,seen,f__264655)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__264659.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__264662 = cljs.core.Vector.fromArray([]);
var s__264663 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__264663)))
{{
var G__264664 = cljs.core.conj.call(null,ret__264662,cljs.core.first.call(null,s__264663));
var G__264665 = cljs.core.next.call(null,s__264663);
ret__264662 = G__264664;
s__264663 = G__264665;
continue;
}
} else
{return cljs.core.seq.call(null,ret__264662);
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
{if(cljs.core.truth_((function (){var or__3548__auto____264666 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____264666))
{return or__3548__auto____264666;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__264667 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__264667 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__264667 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____264668 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____264668))
{return or__3548__auto____264668;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__264669 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__264669 > -1)))
{return cljs.core.subs.call(null,x,2,i__264669);
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
var map__264672 = cljs.core.ObjMap.fromObject([],{});
var ks__264673 = cljs.core.seq.call(null,keys);
var vs__264674 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____264675 = ks__264673;

if(cljs.core.truth_(and__3546__auto____264675))
{return vs__264674;
} else
{return and__3546__auto____264675;
}
})()))
{{
var G__264676 = cljs.core.assoc.call(null,map__264672,cljs.core.first.call(null,ks__264673),cljs.core.first.call(null,vs__264674));
var G__264677 = cljs.core.next.call(null,ks__264673);
var G__264678 = cljs.core.next.call(null,vs__264674);
map__264672 = G__264676;
ks__264673 = G__264677;
vs__264674 = G__264678;
continue;
}
} else
{return map__264672;
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
var max_key__264681 = (function (k,x){
return x;
});
var max_key__264682 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__264683 = (function() { 
var G__264685__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__264670_SHARP_,p2__264671_SHARP_){
return max_key.call(null,k,p1__264670_SHARP_,p2__264671_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__264685 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264685__delegate.call(this, k, x, y, more);
};
G__264685.cljs$lang$maxFixedArity = 3;
G__264685.cljs$lang$applyTo = (function (arglist__264686){
var k = cljs.core.first(arglist__264686);
var x = cljs.core.first(cljs.core.next(arglist__264686));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264686)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264686)));
return G__264685__delegate.call(this, k, x, y, more);
});
return G__264685;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__264681.call(this,k,x);
case  3 :
return max_key__264682.call(this,k,x,y);
default:
return max_key__264683.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__264683.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__264687 = (function (k,x){
return x;
});
var min_key__264688 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__264689 = (function() { 
var G__264691__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__264679_SHARP_,p2__264680_SHARP_){
return min_key.call(null,k,p1__264679_SHARP_,p2__264680_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__264691 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264691__delegate.call(this, k, x, y, more);
};
G__264691.cljs$lang$maxFixedArity = 3;
G__264691.cljs$lang$applyTo = (function (arglist__264692){
var k = cljs.core.first(arglist__264692);
var x = cljs.core.first(cljs.core.next(arglist__264692));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264692)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264692)));
return G__264691__delegate.call(this, k, x, y, more);
});
return G__264691;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__264687.call(this,k,x);
case  3 :
return min_key__264688.call(this,k,x,y);
default:
return min_key__264689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__264689.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__264695 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__264696 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264693 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264693))
{var s__264694 = temp__3698__auto____264693;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__264694),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__264694)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__264695.call(this,n,step);
case  3 :
return partition_all__264696.call(this,n,step,coll);
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
var temp__3698__auto____264698 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264698))
{var s__264699 = temp__3698__auto____264698;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__264699))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__264699),take_while.call(null,pred,cljs.core.rest.call(null,s__264699)));
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
var this__264700 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__264701 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__264717 = null;
var G__264717__264718 = (function (rng,f){
var this__264702 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__264717__264719 = (function (rng,f,s){
var this__264703 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__264717 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__264717__264718.call(this,rng,f);
case  3 :
return G__264717__264719.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264717;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__264704 = this;
var comp__264705 = (cljs.core.truth_((this__264704.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__264705.call(null,this__264704.start,this__264704.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__264706 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__264706.end - this__264706.start) / this__264706.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__264707 = this;
return this__264707.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__264708 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__264708.meta,(this__264708.start + this__264708.step),this__264708.end,this__264708.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__264709 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__264710 = this;
return (new cljs.core.Range(meta,this__264710.start,this__264710.end,this__264710.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__264711 = this;
return this__264711.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__264721 = null;
var G__264721__264722 = (function (rng,n){
var this__264712 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__264712.start + (n * this__264712.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____264713 = (this__264712.start > this__264712.end);

if(cljs.core.truth_(and__3546__auto____264713))
{return cljs.core._EQ_.call(null,this__264712.step,0);
} else
{return and__3546__auto____264713;
}
})()))
{return this__264712.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__264721__264723 = (function (rng,n,not_found){
var this__264714 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__264714.start + (n * this__264714.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____264715 = (this__264714.start > this__264714.end);

if(cljs.core.truth_(and__3546__auto____264715))
{return cljs.core._EQ_.call(null,this__264714.step,0);
} else
{return and__3546__auto____264715;
}
})()))
{return this__264714.start;
} else
{return not_found;
}
}
});
G__264721 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__264721__264722.call(this,rng,n);
case  3 :
return G__264721__264723.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__264721;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__264716 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__264716.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__264725 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__264726 = (function (end){
return range.call(null,0,end,1);
});
var range__264727 = (function (start,end){
return range.call(null,start,end,1);
});
var range__264728 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__264725.call(this);
case  1 :
return range__264726.call(this,start);
case  2 :
return range__264727.call(this,start,end);
case  3 :
return range__264728.call(this,start,end,step);
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
var temp__3698__auto____264730 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264730))
{var s__264731 = temp__3698__auto____264730;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__264731),take_nth.call(null,n,cljs.core.drop.call(null,n,s__264731)));
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
var temp__3698__auto____264733 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264733))
{var s__264734 = temp__3698__auto____264733;

var fst__264735 = cljs.core.first.call(null,s__264734);
var fv__264736 = f.call(null,fst__264735);
var run__264737 = cljs.core.cons.call(null,fst__264735,cljs.core.take_while.call(null,(function (p1__264732_SHARP_){
return cljs.core._EQ_.call(null,fv__264736,f.call(null,p1__264732_SHARP_));
}),cljs.core.next.call(null,s__264734)));

return cljs.core.cons.call(null,run__264737,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__264737),s__264734))));
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
var reductions__264752 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____264748 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____264748))
{var s__264749 = temp__3695__auto____264748;

return reductions.call(null,f,cljs.core.first.call(null,s__264749),cljs.core.rest.call(null,s__264749));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__264753 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____264750 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____264750))
{var s__264751 = temp__3698__auto____264750;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__264751)),cljs.core.rest.call(null,s__264751));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__264752.call(this,f,init);
case  3 :
return reductions__264753.call(this,f,init,coll);
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
var juxt__264756 = (function (f){
return (function() {
var G__264761 = null;
var G__264761__264762 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__264761__264763 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__264761__264764 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__264761__264765 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__264761__264766 = (function() { 
var G__264768__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__264768 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264768__delegate.call(this, x, y, z, args);
};
G__264768.cljs$lang$maxFixedArity = 3;
G__264768.cljs$lang$applyTo = (function (arglist__264769){
var x = cljs.core.first(arglist__264769);
var y = cljs.core.first(cljs.core.next(arglist__264769));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264769)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264769)));
return G__264768__delegate.call(this, x, y, z, args);
});
return G__264768;
})()
;
G__264761 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__264761__264762.call(this);
case  1 :
return G__264761__264763.call(this,x);
case  2 :
return G__264761__264764.call(this,x,y);
case  3 :
return G__264761__264765.call(this,x,y,z);
default:
return G__264761__264766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264761.cljs$lang$maxFixedArity = 3;
G__264761.cljs$lang$applyTo = G__264761__264766.cljs$lang$applyTo;
return G__264761;
})()
});
var juxt__264757 = (function (f,g){
return (function() {
var G__264770 = null;
var G__264770__264771 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__264770__264772 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__264770__264773 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__264770__264774 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__264770__264775 = (function() { 
var G__264777__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__264777 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264777__delegate.call(this, x, y, z, args);
};
G__264777.cljs$lang$maxFixedArity = 3;
G__264777.cljs$lang$applyTo = (function (arglist__264778){
var x = cljs.core.first(arglist__264778);
var y = cljs.core.first(cljs.core.next(arglist__264778));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264778)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264778)));
return G__264777__delegate.call(this, x, y, z, args);
});
return G__264777;
})()
;
G__264770 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__264770__264771.call(this);
case  1 :
return G__264770__264772.call(this,x);
case  2 :
return G__264770__264773.call(this,x,y);
case  3 :
return G__264770__264774.call(this,x,y,z);
default:
return G__264770__264775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264770.cljs$lang$maxFixedArity = 3;
G__264770.cljs$lang$applyTo = G__264770__264775.cljs$lang$applyTo;
return G__264770;
})()
});
var juxt__264758 = (function (f,g,h){
return (function() {
var G__264779 = null;
var G__264779__264780 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__264779__264781 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__264779__264782 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__264779__264783 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__264779__264784 = (function() { 
var G__264786__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__264786 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264786__delegate.call(this, x, y, z, args);
};
G__264786.cljs$lang$maxFixedArity = 3;
G__264786.cljs$lang$applyTo = (function (arglist__264787){
var x = cljs.core.first(arglist__264787);
var y = cljs.core.first(cljs.core.next(arglist__264787));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264787)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264787)));
return G__264786__delegate.call(this, x, y, z, args);
});
return G__264786;
})()
;
G__264779 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__264779__264780.call(this);
case  1 :
return G__264779__264781.call(this,x);
case  2 :
return G__264779__264782.call(this,x,y);
case  3 :
return G__264779__264783.call(this,x,y,z);
default:
return G__264779__264784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264779.cljs$lang$maxFixedArity = 3;
G__264779.cljs$lang$applyTo = G__264779__264784.cljs$lang$applyTo;
return G__264779;
})()
});
var juxt__264759 = (function() { 
var G__264788__delegate = function (f,g,h,fs){
var fs__264755 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__264789 = null;
var G__264789__264790 = (function (){
return cljs.core.reduce.call(null,(function (p1__264738_SHARP_,p2__264739_SHARP_){
return cljs.core.conj.call(null,p1__264738_SHARP_,p2__264739_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__264755);
});
var G__264789__264791 = (function (x){
return cljs.core.reduce.call(null,(function (p1__264740_SHARP_,p2__264741_SHARP_){
return cljs.core.conj.call(null,p1__264740_SHARP_,p2__264741_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__264755);
});
var G__264789__264792 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__264742_SHARP_,p2__264743_SHARP_){
return cljs.core.conj.call(null,p1__264742_SHARP_,p2__264743_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__264755);
});
var G__264789__264793 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__264744_SHARP_,p2__264745_SHARP_){
return cljs.core.conj.call(null,p1__264744_SHARP_,p2__264745_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__264755);
});
var G__264789__264794 = (function() { 
var G__264796__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__264746_SHARP_,p2__264747_SHARP_){
return cljs.core.conj.call(null,p1__264746_SHARP_,cljs.core.apply.call(null,p2__264747_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__264755);
};
var G__264796 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264796__delegate.call(this, x, y, z, args);
};
G__264796.cljs$lang$maxFixedArity = 3;
G__264796.cljs$lang$applyTo = (function (arglist__264797){
var x = cljs.core.first(arglist__264797);
var y = cljs.core.first(cljs.core.next(arglist__264797));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264797)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264797)));
return G__264796__delegate.call(this, x, y, z, args);
});
return G__264796;
})()
;
G__264789 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__264789__264790.call(this);
case  1 :
return G__264789__264791.call(this,x);
case  2 :
return G__264789__264792.call(this,x,y);
case  3 :
return G__264789__264793.call(this,x,y,z);
default:
return G__264789__264794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__264789.cljs$lang$maxFixedArity = 3;
G__264789.cljs$lang$applyTo = G__264789__264794.cljs$lang$applyTo;
return G__264789;
})()
};
var G__264788 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__264788__delegate.call(this, f, g, h, fs);
};
G__264788.cljs$lang$maxFixedArity = 3;
G__264788.cljs$lang$applyTo = (function (arglist__264798){
var f = cljs.core.first(arglist__264798);
var g = cljs.core.first(cljs.core.next(arglist__264798));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264798)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__264798)));
return G__264788__delegate.call(this, f, g, h, fs);
});
return G__264788;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__264756.call(this,f);
case  2 :
return juxt__264757.call(this,f,g);
case  3 :
return juxt__264758.call(this,f,g,h);
default:
return juxt__264759.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__264759.cljs$lang$applyTo;
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
var dorun__264800 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__264803 = cljs.core.next.call(null,coll);
coll = G__264803;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__264801 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____264799 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____264799))
{return (n > 0);
} else
{return and__3546__auto____264799;
}
})()))
{{
var G__264804 = (n - 1);
var G__264805 = cljs.core.next.call(null,coll);
n = G__264804;
coll = G__264805;
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
return dorun__264800.call(this,n);
case  2 :
return dorun__264801.call(this,n,coll);
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
var doall__264806 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__264807 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__264806.call(this,n);
case  2 :
return doall__264807.call(this,n,coll);
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
var matches__264809 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__264809),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__264809),1)))
{return cljs.core.first.call(null,matches__264809);
} else
{return cljs.core.vec.call(null,matches__264809);
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
var matches__264810 = re.exec(s);

if(cljs.core.truth_((matches__264810 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__264810),1)))
{return cljs.core.first.call(null,matches__264810);
} else
{return cljs.core.vec.call(null,matches__264810);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__264811 = cljs.core.re_find.call(null,re,s);
var match_idx__264812 = s.search(re);
var match_str__264813 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__264811))?cljs.core.first.call(null,match_data__264811):match_data__264811);
var post_match__264814 = cljs.core.subs.call(null,s,(match_idx__264812 + cljs.core.count.call(null,match_str__264813)));

if(cljs.core.truth_(match_data__264811))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__264811,re_seq.call(null,re,post_match__264814));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__264816__264817 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___264818 = cljs.core.nth.call(null,vec__264816__264817,0,null);
var flags__264819 = cljs.core.nth.call(null,vec__264816__264817,1,null);
var pattern__264820 = cljs.core.nth.call(null,vec__264816__264817,2,null);

return (new RegExp(pattern__264820,flags__264819));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__264815_SHARP_){
return print_one.call(null,p1__264815_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____264821 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____264821))
{var and__3546__auto____264825 = (function (){var x__450__auto____264822 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____264823 = x__450__auto____264822;

if(cljs.core.truth_(and__3546__auto____264823))
{var and__3546__auto____264824 = x__450__auto____264822.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____264824))
{return cljs.core.not.call(null,x__450__auto____264822.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____264824;
}
} else
{return and__3546__auto____264823;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____264822);
}
})();

if(cljs.core.truth_(and__3546__auto____264825))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____264825;
}
} else
{return and__3546__auto____264821;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____264826 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____264827 = x__450__auto____264826;

if(cljs.core.truth_(and__3546__auto____264827))
{var and__3546__auto____264828 = x__450__auto____264826.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____264828))
{return cljs.core.not.call(null,x__450__auto____264826.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____264828;
}
} else
{return and__3546__auto____264827;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____264826);
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
var first_obj__264829 = cljs.core.first.call(null,objs);
var sb__264830 = (new goog.string.StringBuffer());

var G__264831__264832 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__264831__264832))
{var obj__264833 = cljs.core.first.call(null,G__264831__264832);
var G__264831__264834 = G__264831__264832;

while(true){
if(cljs.core.truth_((obj__264833 === first_obj__264829)))
{} else
{sb__264830.append(" ");
}
var G__264835__264836 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__264833,opts));

if(cljs.core.truth_(G__264835__264836))
{var string__264837 = cljs.core.first.call(null,G__264835__264836);
var G__264835__264838 = G__264835__264836;

while(true){
sb__264830.append(string__264837);
var temp__3698__auto____264839 = cljs.core.next.call(null,G__264835__264838);

if(cljs.core.truth_(temp__3698__auto____264839))
{var G__264835__264840 = temp__3698__auto____264839;

{
var G__264843 = cljs.core.first.call(null,G__264835__264840);
var G__264844 = G__264835__264840;
string__264837 = G__264843;
G__264835__264838 = G__264844;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____264841 = cljs.core.next.call(null,G__264831__264834);

if(cljs.core.truth_(temp__3698__auto____264841))
{var G__264831__264842 = temp__3698__auto____264841;

{
var G__264845 = cljs.core.first.call(null,G__264831__264842);
var G__264846 = G__264831__264842;
obj__264833 = G__264845;
G__264831__264834 = G__264846;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__264830);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__264847 = cljs.core.first.call(null,objs);

var G__264848__264849 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__264848__264849))
{var obj__264850 = cljs.core.first.call(null,G__264848__264849);
var G__264848__264851 = G__264848__264849;

while(true){
if(cljs.core.truth_((obj__264850 === first_obj__264847)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__264852__264853 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__264850,opts));

if(cljs.core.truth_(G__264852__264853))
{var string__264854 = cljs.core.first.call(null,G__264852__264853);
var G__264852__264855 = G__264852__264853;

while(true){
cljs.core.string_print.call(null,string__264854);
var temp__3698__auto____264856 = cljs.core.next.call(null,G__264852__264855);

if(cljs.core.truth_(temp__3698__auto____264856))
{var G__264852__264857 = temp__3698__auto____264856;

{
var G__264860 = cljs.core.first.call(null,G__264852__264857);
var G__264861 = G__264852__264857;
string__264854 = G__264860;
G__264852__264855 = G__264861;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____264858 = cljs.core.next.call(null,G__264848__264851);

if(cljs.core.truth_(temp__3698__auto____264858))
{var G__264848__264859 = temp__3698__auto____264858;

{
var G__264862 = cljs.core.first.call(null,G__264848__264859);
var G__264863 = G__264848__264859;
obj__264850 = G__264862;
G__264848__264851 = G__264863;
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
pr_str.cljs$lang$applyTo = (function (arglist__264864){
var objs = cljs.core.seq( arglist__264864 );;
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
pr.cljs$lang$applyTo = (function (arglist__264865){
var objs = cljs.core.seq( arglist__264865 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__264866){
var objs = cljs.core.seq( arglist__264866 );;
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
println.cljs$lang$applyTo = (function (arglist__264867){
var objs = cljs.core.seq( arglist__264867 );;
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
prn.cljs$lang$applyTo = (function (arglist__264868){
var objs = cljs.core.seq( arglist__264868 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__264869 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__264869,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____264870 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____264870))
{var nspc__264871 = temp__3698__auto____264870;

return cljs.core.str.call(null,nspc__264871,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____264872 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____264872))
{var nspc__264873 = temp__3698__auto____264872;

return cljs.core.str.call(null,nspc__264873,"\/");
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
var pr_pair__264874 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__264874,"{",", ","}",opts,coll);
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
var this__264875 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__264876 = this;
var G__264877__264878 = cljs.core.seq.call(null,this__264876.watches);

if(cljs.core.truth_(G__264877__264878))
{var G__264880__264882 = cljs.core.first.call(null,G__264877__264878);
var vec__264881__264883 = G__264880__264882;
var key__264884 = cljs.core.nth.call(null,vec__264881__264883,0,null);
var f__264885 = cljs.core.nth.call(null,vec__264881__264883,1,null);
var G__264877__264886 = G__264877__264878;

var G__264880__264887 = G__264880__264882;
var G__264877__264888 = G__264877__264886;

while(true){
var vec__264889__264890 = G__264880__264887;
var key__264891 = cljs.core.nth.call(null,vec__264889__264890,0,null);
var f__264892 = cljs.core.nth.call(null,vec__264889__264890,1,null);
var G__264877__264893 = G__264877__264888;

f__264892.call(null,key__264891,this$,oldval,newval);
var temp__3698__auto____264894 = cljs.core.next.call(null,G__264877__264893);

if(cljs.core.truth_(temp__3698__auto____264894))
{var G__264877__264895 = temp__3698__auto____264894;

{
var G__264902 = cljs.core.first.call(null,G__264877__264895);
var G__264903 = G__264877__264895;
G__264880__264887 = G__264902;
G__264877__264888 = G__264903;
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
var this__264896 = this;
return this$.watches = cljs.core.assoc.call(null,this__264896.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__264897 = this;
return this$.watches = cljs.core.dissoc.call(null,this__264897.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__264898 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__264898.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__264899 = this;
return this__264899.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__264900 = this;
return this__264900.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__264901 = this;
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
var atom__264910 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__264911 = (function() { 
var G__264913__delegate = function (x,p__264904){
var map__264905__264906 = p__264904;
var map__264905__264907 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__264905__264906))?cljs.core.apply.call(null,cljs.core.hash_map,map__264905__264906):map__264905__264906);
var validator__264908 = cljs.core.get.call(null,map__264905__264907,"\uFDD0'validator");
var meta__264909 = cljs.core.get.call(null,map__264905__264907,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__264909,validator__264908,null));
};
var G__264913 = function (x,var_args){
var p__264904 = null;
if (goog.isDef(var_args)) {
  p__264904 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__264913__delegate.call(this, x, p__264904);
};
G__264913.cljs$lang$maxFixedArity = 1;
G__264913.cljs$lang$applyTo = (function (arglist__264914){
var x = cljs.core.first(arglist__264914);
var p__264904 = cljs.core.rest(arglist__264914);
return G__264913__delegate.call(this, x, p__264904);
});
return G__264913;
})()
;
atom = function(x,var_args){
var p__264904 = var_args;
switch(arguments.length){
case  1 :
return atom__264910.call(this,x);
default:
return atom__264911.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__264911.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____264915 = a.validator;

if(cljs.core.truth_(temp__3698__auto____264915))
{var validate__264916 = temp__3698__auto____264915;

if(cljs.core.truth_(validate__264916.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__264917 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__264917,new_value);
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
var swap_BANG___264918 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___264919 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___264920 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___264921 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___264922 = (function() { 
var G__264924__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__264924 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__264924__delegate.call(this, a, f, x, y, z, more);
};
G__264924.cljs$lang$maxFixedArity = 5;
G__264924.cljs$lang$applyTo = (function (arglist__264925){
var a = cljs.core.first(arglist__264925);
var f = cljs.core.first(cljs.core.next(arglist__264925));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__264925)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__264925))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__264925)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__264925)))));
return G__264924__delegate.call(this, a, f, x, y, z, more);
});
return G__264924;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___264918.call(this,a,f);
case  3 :
return swap_BANG___264919.call(this,a,f,x);
case  4 :
return swap_BANG___264920.call(this,a,f,x,y);
case  5 :
return swap_BANG___264921.call(this,a,f,x,y,z);
default:
return swap_BANG___264922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___264922.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__264926){
var iref = cljs.core.first(arglist__264926);
var f = cljs.core.first(cljs.core.next(arglist__264926));
var args = cljs.core.rest(cljs.core.next(arglist__264926));
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
var gensym__264927 = (function (){
return gensym.call(null,"G__");
});
var gensym__264928 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__264927.call(this);
case  1 :
return gensym__264928.call(this,prefix_string);
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
var this__264930 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__264930.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__264931 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__264931.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__264931.state,this__264931.f);
}
return cljs.core.deref.call(null,this__264931.state);
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
delay.cljs$lang$applyTo = (function (arglist__264932){
var body = cljs.core.seq( arglist__264932 );;
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
var map__264933__264934 = options;
var map__264933__264935 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__264933__264934))?cljs.core.apply.call(null,cljs.core.hash_map,map__264933__264934):map__264933__264934);
var keywordize_keys__264936 = cljs.core.get.call(null,map__264933__264935,"\uFDD0'keywordize-keys");
var keyfn__264937 = (cljs.core.truth_(keywordize_keys__264936)?cljs.core.keyword:cljs.core.str);
var f__264943 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____264942 = (function iter__264938(s__264939){
return (new cljs.core.LazySeq(null,false,(function (){
var s__264939__264940 = s__264939;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__264939__264940)))
{var k__264941 = cljs.core.first.call(null,s__264939__264940);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__264937.call(null,k__264941),thisfn.call(null,(x[k__264941]))]),iter__264938.call(null,cljs.core.rest.call(null,s__264939__264940)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____264942.call(null,cljs.core.js_keys.call(null,x));
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

return f__264943.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__264944){
var x = cljs.core.first(arglist__264944);
var options = cljs.core.rest(arglist__264944);
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
var mem__264945 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__264949__delegate = function (args){
var temp__3695__auto____264946 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__264945),args);

if(cljs.core.truth_(temp__3695__auto____264946))
{var v__264947 = temp__3695__auto____264946;

return v__264947;
} else
{var ret__264948 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__264945,cljs.core.assoc,args,ret__264948);
return ret__264948;
}
};
var G__264949 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__264949__delegate.call(this, args);
};
G__264949.cljs$lang$maxFixedArity = 0;
G__264949.cljs$lang$applyTo = (function (arglist__264950){
var args = cljs.core.seq( arglist__264950 );;
return G__264949__delegate.call(this, args);
});
return G__264949;
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
var trampoline__264952 = (function (f){
while(true){
var ret__264951 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__264951)))
{{
var G__264955 = ret__264951;
f = G__264955;
continue;
}
} else
{return ret__264951;
}
break;
}
});
var trampoline__264953 = (function() { 
var G__264956__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__264956 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__264956__delegate.call(this, f, args);
};
G__264956.cljs$lang$maxFixedArity = 1;
G__264956.cljs$lang$applyTo = (function (arglist__264957){
var f = cljs.core.first(arglist__264957);
var args = cljs.core.rest(arglist__264957);
return G__264956__delegate.call(this, f, args);
});
return G__264956;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__264952.call(this,f);
default:
return trampoline__264953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__264953.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__264958 = (function (){
return rand.call(null,1);
});
var rand__264959 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__264958.call(this);
case  1 :
return rand__264959.call(this,n);
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
var k__264961 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__264961,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__264961,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___264970 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___264971 = (function (h,child,parent){
var or__3548__auto____264962 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____264962))
{return or__3548__auto____264962;
} else
{var or__3548__auto____264963 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____264963))
{return or__3548__auto____264963;
} else
{var and__3546__auto____264964 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____264964))
{var and__3546__auto____264965 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____264965))
{var and__3546__auto____264966 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____264966))
{var ret__264967 = true;
var i__264968 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____264969 = cljs.core.not.call(null,ret__264967);

if(cljs.core.truth_(or__3548__auto____264969))
{return or__3548__auto____264969;
} else
{return cljs.core._EQ_.call(null,i__264968,cljs.core.count.call(null,parent));
}
})()))
{return ret__264967;
} else
{{
var G__264973 = isa_QMARK_.call(null,h,child.call(null,i__264968),parent.call(null,i__264968));
var G__264974 = (i__264968 + 1);
ret__264967 = G__264973;
i__264968 = G__264974;
continue;
}
}
break;
}
} else
{return and__3546__auto____264966;
}
} else
{return and__3546__auto____264965;
}
} else
{return and__3546__auto____264964;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___264970.call(this,h,child);
case  3 :
return isa_QMARK___264971.call(this,h,child,parent);
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
var parents__264975 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__264976 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__264975.call(this,h);
case  2 :
return parents__264976.call(this,h,tag);
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
var ancestors__264978 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__264979 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__264978.call(this,h);
case  2 :
return ancestors__264979.call(this,h,tag);
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
var descendants__264981 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__264982 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__264981.call(this,h);
case  2 :
return descendants__264982.call(this,h,tag);
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
var derive__264992 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__264993 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__264987 = "\uFDD0'parents".call(null,h);
var td__264988 = "\uFDD0'descendants".call(null,h);
var ta__264989 = "\uFDD0'ancestors".call(null,h);
var tf__264990 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____264991 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__264987.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__264989.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__264989.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__264987,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__264990.call(null,"\uFDD0'ancestors".call(null,h),tag,td__264988,parent,ta__264989),"\uFDD0'descendants":tf__264990.call(null,"\uFDD0'descendants".call(null,h),parent,ta__264989,tag,td__264988)});
})());

if(cljs.core.truth_(or__3548__auto____264991))
{return or__3548__auto____264991;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__264992.call(this,h,tag);
case  3 :
return derive__264993.call(this,h,tag,parent);
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
var underive__264999 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__265000 = (function (h,tag,parent){
var parentMap__264995 = "\uFDD0'parents".call(null,h);
var childsParents__264996 = (cljs.core.truth_(parentMap__264995.call(null,tag))?cljs.core.disj.call(null,parentMap__264995.call(null,tag),parent):cljs.core.set([]));
var newParents__264997 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__264996))?cljs.core.assoc.call(null,parentMap__264995,tag,childsParents__264996):cljs.core.dissoc.call(null,parentMap__264995,tag));
var deriv_seq__264998 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__264984_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__264984_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__264984_SHARP_),cljs.core.second.call(null,p1__264984_SHARP_)));
}),cljs.core.seq.call(null,newParents__264997)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__264995.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__264985_SHARP_,p2__264986_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__264985_SHARP_,p2__264986_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__264998));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__264999.call(this,h,tag);
case  3 :
return underive__265000.call(this,h,tag,parent);
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
var xprefs__265002 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____265004 = (cljs.core.truth_((function (){var and__3546__auto____265003 = xprefs__265002;

if(cljs.core.truth_(and__3546__auto____265003))
{return xprefs__265002.call(null,y);
} else
{return and__3546__auto____265003;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____265004))
{return or__3548__auto____265004;
} else
{var or__3548__auto____265006 = (function (){var ps__265005 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__265005) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__265005),prefer_table)))
{} else
{}
{
var G__265009 = cljs.core.rest.call(null,ps__265005);
ps__265005 = G__265009;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____265006))
{return or__3548__auto____265006;
} else
{var or__3548__auto____265008 = (function (){var ps__265007 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__265007) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__265007),y,prefer_table)))
{} else
{}
{
var G__265010 = cljs.core.rest.call(null,ps__265007);
ps__265007 = G__265010;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____265008))
{return or__3548__auto____265008;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____265011 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____265011))
{return or__3548__auto____265011;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__265020 = cljs.core.reduce.call(null,(function (be,p__265012){
var vec__265013__265014 = p__265012;
var k__265015 = cljs.core.nth.call(null,vec__265013__265014,0,null);
var ___265016 = cljs.core.nth.call(null,vec__265013__265014,1,null);
var e__265017 = vec__265013__265014;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__265015)))
{var be2__265019 = (cljs.core.truth_((function (){var or__3548__auto____265018 = (be === null);

if(cljs.core.truth_(or__3548__auto____265018))
{return or__3548__auto____265018;
} else
{return cljs.core.dominates.call(null,k__265015,cljs.core.first.call(null,be),prefer_table);
}
})())?e__265017:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__265019),k__265015,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__265015," and ",cljs.core.first.call(null,be2__265019),", and neither is preferred")));
}
return be2__265019;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__265020))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__265020));
return cljs.core.second.call(null,best_entry__265020);
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
if(cljs.core.truth_((function (){var and__3546__auto____265021 = mf;

if(cljs.core.truth_(and__3546__auto____265021))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____265021;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____265022 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____265022))
{return or__3548__auto____265022;
} else
{var or__3548__auto____265023 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____265023))
{return or__3548__auto____265023;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____265024 = mf;

if(cljs.core.truth_(and__3546__auto____265024))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____265024;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____265025 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____265025))
{return or__3548__auto____265025;
} else
{var or__3548__auto____265026 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____265026))
{return or__3548__auto____265026;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____265027 = mf;

if(cljs.core.truth_(and__3546__auto____265027))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____265027;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____265028 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____265028))
{return or__3548__auto____265028;
} else
{var or__3548__auto____265029 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____265029))
{return or__3548__auto____265029;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____265030 = mf;

if(cljs.core.truth_(and__3546__auto____265030))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____265030;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____265031 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____265031))
{return or__3548__auto____265031;
} else
{var or__3548__auto____265032 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____265032))
{return or__3548__auto____265032;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____265033 = mf;

if(cljs.core.truth_(and__3546__auto____265033))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____265033;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____265034 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____265034))
{return or__3548__auto____265034;
} else
{var or__3548__auto____265035 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____265035))
{return or__3548__auto____265035;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____265036 = mf;

if(cljs.core.truth_(and__3546__auto____265036))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____265036;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____265037 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____265037))
{return or__3548__auto____265037;
} else
{var or__3548__auto____265038 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____265038))
{return or__3548__auto____265038;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____265039 = mf;

if(cljs.core.truth_(and__3546__auto____265039))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____265039;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____265040 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____265040))
{return or__3548__auto____265040;
} else
{var or__3548__auto____265041 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____265041))
{return or__3548__auto____265041;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____265042 = mf;

if(cljs.core.truth_(and__3546__auto____265042))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____265042;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____265043 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____265043))
{return or__3548__auto____265043;
} else
{var or__3548__auto____265044 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____265044))
{return or__3548__auto____265044;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__265045 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__265046 = cljs.core._get_method.call(null,mf,dispatch_val__265045);

if(cljs.core.truth_(target_fn__265046))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__265045)));
}
return cljs.core.apply.call(null,target_fn__265046,args);
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
var this__265047 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__265048 = this;
cljs.core.swap_BANG_.call(null,this__265048.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__265048.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__265048.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__265048.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__265049 = this;
cljs.core.swap_BANG_.call(null,this__265049.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__265049.method_cache,this__265049.method_table,this__265049.cached_hierarchy,this__265049.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__265050 = this;
cljs.core.swap_BANG_.call(null,this__265050.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__265050.method_cache,this__265050.method_table,this__265050.cached_hierarchy,this__265050.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__265051 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__265051.cached_hierarchy),cljs.core.deref.call(null,this__265051.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__265051.method_cache,this__265051.method_table,this__265051.cached_hierarchy,this__265051.hierarchy);
}
var temp__3695__auto____265052 = cljs.core.deref.call(null,this__265051.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____265052))
{var target_fn__265053 = temp__3695__auto____265052;

return target_fn__265053;
} else
{var temp__3695__auto____265054 = cljs.core.find_and_cache_best_method.call(null,this__265051.name,dispatch_val,this__265051.hierarchy,this__265051.method_table,this__265051.prefer_table,this__265051.method_cache,this__265051.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____265054))
{var target_fn__265055 = temp__3695__auto____265054;

return target_fn__265055;
} else
{return cljs.core.deref.call(null,this__265051.method_table).call(null,this__265051.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__265056 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__265056.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__265056.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__265056.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__265056.method_cache,this__265056.method_table,this__265056.cached_hierarchy,this__265056.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__265057 = this;
return cljs.core.deref.call(null,this__265057.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__265058 = this;
return cljs.core.deref.call(null,this__265058.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__265059 = this;
return cljs.core.do_dispatch.call(null,mf,this__265059.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__265060__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__265060 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__265060__delegate.call(this, _, args);
};
G__265060.cljs$lang$maxFixedArity = 1;
G__265060.cljs$lang$applyTo = (function (arglist__265061){
var _ = cljs.core.first(arglist__265061);
var args = cljs.core.rest(arglist__265061);
return G__265060__delegate.call(this, _, args);
});
return G__265060;
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
