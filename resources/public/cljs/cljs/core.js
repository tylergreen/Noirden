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
var or__3548__auto____155366 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____155366))
{return or__3548__auto____155366;
} else
{var or__3548__auto____155367 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____155367))
{return or__3548__auto____155367;
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
var _invoke__155431 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____155368 = this$;

if(cljs.core.truth_(and__3546__auto____155368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____155369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155369))
{return or__3548__auto____155369;
} else
{var or__3548__auto____155370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155370))
{return or__3548__auto____155370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__155432 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____155371 = this$;

if(cljs.core.truth_(and__3546__auto____155371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____155372 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155372))
{return or__3548__auto____155372;
} else
{var or__3548__auto____155373 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155373))
{return or__3548__auto____155373;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__155433 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____155374 = this$;

if(cljs.core.truth_(and__3546__auto____155374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____155375 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155375))
{return or__3548__auto____155375;
} else
{var or__3548__auto____155376 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155376))
{return or__3548__auto____155376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__155434 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____155377 = this$;

if(cljs.core.truth_(and__3546__auto____155377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____155378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155378))
{return or__3548__auto____155378;
} else
{var or__3548__auto____155379 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155379))
{return or__3548__auto____155379;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__155435 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____155380 = this$;

if(cljs.core.truth_(and__3546__auto____155380))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155380;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____155381 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155381))
{return or__3548__auto____155381;
} else
{var or__3548__auto____155382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155382))
{return or__3548__auto____155382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__155436 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____155383 = this$;

if(cljs.core.truth_(and__3546__auto____155383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____155384 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155384))
{return or__3548__auto____155384;
} else
{var or__3548__auto____155385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155385))
{return or__3548__auto____155385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__155437 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____155386 = this$;

if(cljs.core.truth_(and__3546__auto____155386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____155387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155387))
{return or__3548__auto____155387;
} else
{var or__3548__auto____155388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155388))
{return or__3548__auto____155388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__155438 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____155389 = this$;

if(cljs.core.truth_(and__3546__auto____155389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____155390 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155390))
{return or__3548__auto____155390;
} else
{var or__3548__auto____155391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155391))
{return or__3548__auto____155391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__155439 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____155392 = this$;

if(cljs.core.truth_(and__3546__auto____155392))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155392;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____155393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155393))
{return or__3548__auto____155393;
} else
{var or__3548__auto____155394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155394))
{return or__3548__auto____155394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__155440 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____155395 = this$;

if(cljs.core.truth_(and__3546__auto____155395))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155395;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____155396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155396))
{return or__3548__auto____155396;
} else
{var or__3548__auto____155397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155397))
{return or__3548__auto____155397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__155441 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____155398 = this$;

if(cljs.core.truth_(and__3546__auto____155398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____155399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155399))
{return or__3548__auto____155399;
} else
{var or__3548__auto____155400 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155400))
{return or__3548__auto____155400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__155442 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____155401 = this$;

if(cljs.core.truth_(and__3546__auto____155401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____155402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155402))
{return or__3548__auto____155402;
} else
{var or__3548__auto____155403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155403))
{return or__3548__auto____155403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__155443 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____155404 = this$;

if(cljs.core.truth_(and__3546__auto____155404))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155404;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____155405 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155405))
{return or__3548__auto____155405;
} else
{var or__3548__auto____155406 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155406))
{return or__3548__auto____155406;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__155444 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____155407 = this$;

if(cljs.core.truth_(and__3546__auto____155407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____155408 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155408))
{return or__3548__auto____155408;
} else
{var or__3548__auto____155409 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155409))
{return or__3548__auto____155409;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__155445 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____155410 = this$;

if(cljs.core.truth_(and__3546__auto____155410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____155411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155411))
{return or__3548__auto____155411;
} else
{var or__3548__auto____155412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155412))
{return or__3548__auto____155412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__155446 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____155413 = this$;

if(cljs.core.truth_(and__3546__auto____155413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____155414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155414))
{return or__3548__auto____155414;
} else
{var or__3548__auto____155415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155415))
{return or__3548__auto____155415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__155447 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____155416 = this$;

if(cljs.core.truth_(and__3546__auto____155416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____155417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155417))
{return or__3548__auto____155417;
} else
{var or__3548__auto____155418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155418))
{return or__3548__auto____155418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__155448 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____155419 = this$;

if(cljs.core.truth_(and__3546__auto____155419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____155420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155420))
{return or__3548__auto____155420;
} else
{var or__3548__auto____155421 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155421))
{return or__3548__auto____155421;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__155449 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____155422 = this$;

if(cljs.core.truth_(and__3546__auto____155422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____155423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155423))
{return or__3548__auto____155423;
} else
{var or__3548__auto____155424 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155424))
{return or__3548__auto____155424;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__155450 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____155425 = this$;

if(cljs.core.truth_(and__3546__auto____155425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____155426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155426))
{return or__3548__auto____155426;
} else
{var or__3548__auto____155427 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155427))
{return or__3548__auto____155427;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__155451 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____155428 = this$;

if(cljs.core.truth_(and__3546__auto____155428))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155428;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____155429 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155429))
{return or__3548__auto____155429;
} else
{var or__3548__auto____155430 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155430))
{return or__3548__auto____155430;
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
return _invoke__155431.call(this,this$);
case  2 :
return _invoke__155432.call(this,this$,a);
case  3 :
return _invoke__155433.call(this,this$,a,b);
case  4 :
return _invoke__155434.call(this,this$,a,b,c);
case  5 :
return _invoke__155435.call(this,this$,a,b,c,d);
case  6 :
return _invoke__155436.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__155437.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__155438.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__155439.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__155440.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__155441.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__155442.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__155443.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__155444.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__155445.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__155446.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__155447.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__155448.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__155449.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__155450.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__155451.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155453 = coll;

if(cljs.core.truth_(and__3546__auto____155453))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____155453;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____155454 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155454))
{return or__3548__auto____155454;
} else
{var or__3548__auto____155455 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____155455))
{return or__3548__auto____155455;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155456 = coll;

if(cljs.core.truth_(and__3546__auto____155456))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____155456;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____155457 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155457))
{return or__3548__auto____155457;
} else
{var or__3548__auto____155458 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____155458))
{return or__3548__auto____155458;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____155459 = coll;

if(cljs.core.truth_(and__3546__auto____155459))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____155459;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____155460 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155460))
{return or__3548__auto____155460;
} else
{var or__3548__auto____155461 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____155461))
{return or__3548__auto____155461;
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
var _nth__155468 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____155462 = coll;

if(cljs.core.truth_(and__3546__auto____155462))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____155462;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____155463 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155463))
{return or__3548__auto____155463;
} else
{var or__3548__auto____155464 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____155464))
{return or__3548__auto____155464;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__155469 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____155465 = coll;

if(cljs.core.truth_(and__3546__auto____155465))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____155465;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____155466 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155466))
{return or__3548__auto____155466;
} else
{var or__3548__auto____155467 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____155467))
{return or__3548__auto____155467;
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
return _nth__155468.call(this,coll,n);
case  3 :
return _nth__155469.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155471 = coll;

if(cljs.core.truth_(and__3546__auto____155471))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____155471;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____155472 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155472))
{return or__3548__auto____155472;
} else
{var or__3548__auto____155473 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____155473))
{return or__3548__auto____155473;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155474 = coll;

if(cljs.core.truth_(and__3546__auto____155474))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____155474;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____155475 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155475))
{return or__3548__auto____155475;
} else
{var or__3548__auto____155476 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____155476))
{return or__3548__auto____155476;
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
var _lookup__155483 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____155477 = o;

if(cljs.core.truth_(and__3546__auto____155477))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____155477;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____155478 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155478))
{return or__3548__auto____155478;
} else
{var or__3548__auto____155479 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____155479))
{return or__3548__auto____155479;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__155484 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____155480 = o;

if(cljs.core.truth_(and__3546__auto____155480))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____155480;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____155481 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155481))
{return or__3548__auto____155481;
} else
{var or__3548__auto____155482 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____155482))
{return or__3548__auto____155482;
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
return _lookup__155483.call(this,o,k);
case  3 :
return _lookup__155484.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____155486 = coll;

if(cljs.core.truth_(and__3546__auto____155486))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____155486;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____155487 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155487))
{return or__3548__auto____155487;
} else
{var or__3548__auto____155488 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____155488))
{return or__3548__auto____155488;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____155489 = coll;

if(cljs.core.truth_(and__3546__auto____155489))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____155489;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____155490 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155490))
{return or__3548__auto____155490;
} else
{var or__3548__auto____155491 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____155491))
{return or__3548__auto____155491;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____155492 = coll;

if(cljs.core.truth_(and__3546__auto____155492))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____155492;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____155493 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155493))
{return or__3548__auto____155493;
} else
{var or__3548__auto____155494 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____155494))
{return or__3548__auto____155494;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____155495 = coll;

if(cljs.core.truth_(and__3546__auto____155495))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____155495;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____155496 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155496))
{return or__3548__auto____155496;
} else
{var or__3548__auto____155497 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____155497))
{return or__3548__auto____155497;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155498 = coll;

if(cljs.core.truth_(and__3546__auto____155498))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____155498;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____155499 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155499))
{return or__3548__auto____155499;
} else
{var or__3548__auto____155500 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____155500))
{return or__3548__auto____155500;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155501 = coll;

if(cljs.core.truth_(and__3546__auto____155501))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____155501;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____155502 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155502))
{return or__3548__auto____155502;
} else
{var or__3548__auto____155503 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____155503))
{return or__3548__auto____155503;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____155504 = coll;

if(cljs.core.truth_(and__3546__auto____155504))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____155504;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____155505 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155505))
{return or__3548__auto____155505;
} else
{var or__3548__auto____155506 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____155506))
{return or__3548__auto____155506;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____155507 = o;

if(cljs.core.truth_(and__3546__auto____155507))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____155507;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____155508 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155508))
{return or__3548__auto____155508;
} else
{var or__3548__auto____155509 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____155509))
{return or__3548__auto____155509;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____155510 = o;

if(cljs.core.truth_(and__3546__auto____155510))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____155510;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____155511 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155511))
{return or__3548__auto____155511;
} else
{var or__3548__auto____155512 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____155512))
{return or__3548__auto____155512;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____155513 = o;

if(cljs.core.truth_(and__3546__auto____155513))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____155513;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____155514 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155514))
{return or__3548__auto____155514;
} else
{var or__3548__auto____155515 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____155515))
{return or__3548__auto____155515;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____155516 = o;

if(cljs.core.truth_(and__3546__auto____155516))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____155516;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____155517 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155517))
{return or__3548__auto____155517;
} else
{var or__3548__auto____155518 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____155518))
{return or__3548__auto____155518;
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
var _reduce__155525 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____155519 = coll;

if(cljs.core.truth_(and__3546__auto____155519))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____155519;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____155520 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155520))
{return or__3548__auto____155520;
} else
{var or__3548__auto____155521 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____155521))
{return or__3548__auto____155521;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__155526 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____155522 = coll;

if(cljs.core.truth_(and__3546__auto____155522))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____155522;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____155523 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155523))
{return or__3548__auto____155523;
} else
{var or__3548__auto____155524 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____155524))
{return or__3548__auto____155524;
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
return _reduce__155525.call(this,coll,f);
case  3 :
return _reduce__155526.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____155528 = o;

if(cljs.core.truth_(and__3546__auto____155528))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____155528;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____155529 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155529))
{return or__3548__auto____155529;
} else
{var or__3548__auto____155530 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____155530))
{return or__3548__auto____155530;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____155531 = o;

if(cljs.core.truth_(and__3546__auto____155531))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____155531;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____155532 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155532))
{return or__3548__auto____155532;
} else
{var or__3548__auto____155533 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____155533))
{return or__3548__auto____155533;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____155534 = o;

if(cljs.core.truth_(and__3546__auto____155534))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____155534;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____155535 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155535))
{return or__3548__auto____155535;
} else
{var or__3548__auto____155536 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____155536))
{return or__3548__auto____155536;
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
if(cljs.core.truth_((function (){var and__3546__auto____155537 = o;

if(cljs.core.truth_(and__3546__auto____155537))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____155537;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____155538 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155538))
{return or__3548__auto____155538;
} else
{var or__3548__auto____155539 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____155539))
{return or__3548__auto____155539;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____155540 = d;

if(cljs.core.truth_(and__3546__auto____155540))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____155540;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____155541 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____155541))
{return or__3548__auto____155541;
} else
{var or__3548__auto____155542 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____155542))
{return or__3548__auto____155542;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____155543 = this$;

if(cljs.core.truth_(and__3546__auto____155543))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____155543;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____155544 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155544))
{return or__3548__auto____155544;
} else
{var or__3548__auto____155545 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____155545))
{return or__3548__auto____155545;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____155546 = this$;

if(cljs.core.truth_(and__3546__auto____155546))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____155546;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____155547 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155547))
{return or__3548__auto____155547;
} else
{var or__3548__auto____155548 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____155548))
{return or__3548__auto____155548;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____155549 = this$;

if(cljs.core.truth_(and__3546__auto____155549))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____155549;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____155550 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155550))
{return or__3548__auto____155550;
} else
{var or__3548__auto____155551 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____155551))
{return or__3548__auto____155551;
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
var G__155552 = null;
var G__155552__155553 = (function (o,k){
return null;
});
var G__155552__155554 = (function (o,k,not_found){
return not_found;
});
G__155552 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__155552__155553.call(this,o,k);
case  3 :
return G__155552__155554.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155552;
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
var G__155556 = null;
var G__155556__155557 = (function (_,f){
return f.call(null);
});
var G__155556__155558 = (function (_,f,start){
return start;
});
G__155556 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__155556__155557.call(this,_,f);
case  3 :
return G__155556__155558.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155556;
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
var G__155560 = null;
var G__155560__155561 = (function (_,n){
return null;
});
var G__155560__155562 = (function (_,n,not_found){
return not_found;
});
G__155560 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__155560__155561.call(this,_,n);
case  3 :
return G__155560__155562.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155560;
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
var ci_reduce__155570 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__155564 = cljs.core._nth.call(null,cicoll,0);
var n__155565 = 1;

while(true){
if(cljs.core.truth_((n__155565 < cljs.core._count.call(null,cicoll))))
{{
var G__155574 = f.call(null,val__155564,cljs.core._nth.call(null,cicoll,n__155565));
var G__155575 = (n__155565 + 1);
val__155564 = G__155574;
n__155565 = G__155575;
continue;
}
} else
{return val__155564;
}
break;
}
}
});
var ci_reduce__155571 = (function (cicoll,f,val){
var val__155566 = val;
var n__155567 = 0;

while(true){
if(cljs.core.truth_((n__155567 < cljs.core._count.call(null,cicoll))))
{{
var G__155576 = f.call(null,val__155566,cljs.core._nth.call(null,cicoll,n__155567));
var G__155577 = (n__155567 + 1);
val__155566 = G__155576;
n__155567 = G__155577;
continue;
}
} else
{return val__155566;
}
break;
}
});
var ci_reduce__155572 = (function (cicoll,f,val,idx){
var val__155568 = val;
var n__155569 = idx;

while(true){
if(cljs.core.truth_((n__155569 < cljs.core._count.call(null,cicoll))))
{{
var G__155578 = f.call(null,val__155568,cljs.core._nth.call(null,cicoll,n__155569));
var G__155579 = (n__155569 + 1);
val__155568 = G__155578;
n__155569 = G__155579;
continue;
}
} else
{return val__155568;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__155570.call(this,cicoll,f);
case  3 :
return ci_reduce__155571.call(this,cicoll,f,val);
case  4 :
return ci_reduce__155572.call(this,cicoll,f,val,idx);
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
var this__155580 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__155593 = null;
var G__155593__155594 = (function (_,f){
var this__155581 = this;
return cljs.core.ci_reduce.call(null,this__155581.a,f,(this__155581.a[this__155581.i]),(this__155581.i + 1));
});
var G__155593__155595 = (function (_,f,start){
var this__155582 = this;
return cljs.core.ci_reduce.call(null,this__155582.a,f,start,this__155582.i);
});
G__155593 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__155593__155594.call(this,_,f);
case  3 :
return G__155593__155595.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155593;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155583 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155584 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__155597 = null;
var G__155597__155598 = (function (coll,n){
var this__155585 = this;
var i__155586 = (n + this__155585.i);

if(cljs.core.truth_((i__155586 < this__155585.a.length)))
{return (this__155585.a[i__155586]);
} else
{return null;
}
});
var G__155597__155599 = (function (coll,n,not_found){
var this__155587 = this;
var i__155588 = (n + this__155587.i);

if(cljs.core.truth_((i__155588 < this__155587.a.length)))
{return (this__155587.a[i__155588]);
} else
{return not_found;
}
});
G__155597 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__155597__155598.call(this,coll,n);
case  3 :
return G__155597__155599.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155597;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__155589 = this;
return (this__155589.a.length - this__155589.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__155590 = this;
return (this__155590.a[this__155590.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__155591 = this;
if(cljs.core.truth_(((this__155591.i + 1) < this__155591.a.length)))
{return (new cljs.core.IndexedSeq(this__155591.a,(this__155591.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__155592 = this;
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
var G__155601 = null;
var G__155601__155602 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__155601__155603 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__155601 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__155601__155602.call(this,array,f);
case  3 :
return G__155601__155603.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155601;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__155605 = null;
var G__155605__155606 = (function (array,k){
return (array[k]);
});
var G__155605__155607 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__155605 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__155605__155606.call(this,array,k);
case  3 :
return G__155605__155607.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155605;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__155609 = null;
var G__155609__155610 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__155609__155611 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__155609 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__155609__155610.call(this,array,n);
case  3 :
return G__155609__155611.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155609;
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
var temp__3698__auto____155613 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____155613))
{var s__155614 = temp__3698__auto____155613;

return cljs.core._first.call(null,s__155614);
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
var G__155615 = cljs.core.next.call(null,s);
s = G__155615;
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
var s__155616 = cljs.core.seq.call(null,x);
var n__155617 = 0;

while(true){
if(cljs.core.truth_(s__155616))
{{
var G__155618 = cljs.core.next.call(null,s__155616);
var G__155619 = (n__155617 + 1);
s__155616 = G__155618;
n__155617 = G__155619;
continue;
}
} else
{return n__155617;
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
var conj__155620 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__155621 = (function() { 
var G__155623__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__155624 = conj.call(null,coll,x);
var G__155625 = cljs.core.first.call(null,xs);
var G__155626 = cljs.core.next.call(null,xs);
coll = G__155624;
x = G__155625;
xs = G__155626;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__155623 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155623__delegate.call(this, coll, x, xs);
};
G__155623.cljs$lang$maxFixedArity = 2;
G__155623.cljs$lang$applyTo = (function (arglist__155627){
var coll = cljs.core.first(arglist__155627);
var x = cljs.core.first(cljs.core.next(arglist__155627));
var xs = cljs.core.rest(cljs.core.next(arglist__155627));
return G__155623__delegate.call(this, coll, x, xs);
});
return G__155623;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__155620.call(this,coll,x);
default:
return conj__155621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__155621.cljs$lang$applyTo;
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
var nth__155628 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__155629 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__155628.call(this,coll,n);
case  3 :
return nth__155629.call(this,coll,n,not_found);
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
var get__155631 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__155632 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__155631.call(this,o,k);
case  3 :
return get__155632.call(this,o,k,not_found);
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
var assoc__155635 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__155636 = (function() { 
var G__155638__delegate = function (coll,k,v,kvs){
while(true){
var ret__155634 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__155639 = ret__155634;
var G__155640 = cljs.core.first.call(null,kvs);
var G__155641 = cljs.core.second.call(null,kvs);
var G__155642 = cljs.core.nnext.call(null,kvs);
coll = G__155639;
k = G__155640;
v = G__155641;
kvs = G__155642;
continue;
}
} else
{return ret__155634;
}
break;
}
};
var G__155638 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__155638__delegate.call(this, coll, k, v, kvs);
};
G__155638.cljs$lang$maxFixedArity = 3;
G__155638.cljs$lang$applyTo = (function (arglist__155643){
var coll = cljs.core.first(arglist__155643);
var k = cljs.core.first(cljs.core.next(arglist__155643));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155643)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__155643)));
return G__155638__delegate.call(this, coll, k, v, kvs);
});
return G__155638;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__155635.call(this,coll,k,v);
default:
return assoc__155636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__155636.cljs$lang$applyTo;
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
var dissoc__155645 = (function (coll){
return coll;
});
var dissoc__155646 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__155647 = (function() { 
var G__155649__delegate = function (coll,k,ks){
while(true){
var ret__155644 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__155650 = ret__155644;
var G__155651 = cljs.core.first.call(null,ks);
var G__155652 = cljs.core.next.call(null,ks);
coll = G__155650;
k = G__155651;
ks = G__155652;
continue;
}
} else
{return ret__155644;
}
break;
}
};
var G__155649 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155649__delegate.call(this, coll, k, ks);
};
G__155649.cljs$lang$maxFixedArity = 2;
G__155649.cljs$lang$applyTo = (function (arglist__155653){
var coll = cljs.core.first(arglist__155653);
var k = cljs.core.first(cljs.core.next(arglist__155653));
var ks = cljs.core.rest(cljs.core.next(arglist__155653));
return G__155649__delegate.call(this, coll, k, ks);
});
return G__155649;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__155645.call(this,coll);
case  2 :
return dissoc__155646.call(this,coll,k);
default:
return dissoc__155647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__155647.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____155654 = o;

if(cljs.core.truth_((function (){var and__3546__auto____155655 = x__450__auto____155654;

if(cljs.core.truth_(and__3546__auto____155655))
{var and__3546__auto____155656 = x__450__auto____155654.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____155656))
{return cljs.core.not.call(null,x__450__auto____155654.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____155656;
}
} else
{return and__3546__auto____155655;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____155654);
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
var disj__155658 = (function (coll){
return coll;
});
var disj__155659 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__155660 = (function() { 
var G__155662__delegate = function (coll,k,ks){
while(true){
var ret__155657 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__155663 = ret__155657;
var G__155664 = cljs.core.first.call(null,ks);
var G__155665 = cljs.core.next.call(null,ks);
coll = G__155663;
k = G__155664;
ks = G__155665;
continue;
}
} else
{return ret__155657;
}
break;
}
};
var G__155662 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155662__delegate.call(this, coll, k, ks);
};
G__155662.cljs$lang$maxFixedArity = 2;
G__155662.cljs$lang$applyTo = (function (arglist__155666){
var coll = cljs.core.first(arglist__155666);
var k = cljs.core.first(cljs.core.next(arglist__155666));
var ks = cljs.core.rest(cljs.core.next(arglist__155666));
return G__155662__delegate.call(this, coll, k, ks);
});
return G__155662;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__155658.call(this,coll);
case  2 :
return disj__155659.call(this,coll,k);
default:
return disj__155660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__155660.cljs$lang$applyTo;
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
{var x__450__auto____155667 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155668 = x__450__auto____155667;

if(cljs.core.truth_(and__3546__auto____155668))
{var and__3546__auto____155669 = x__450__auto____155667.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____155669))
{return cljs.core.not.call(null,x__450__auto____155667.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____155669;
}
} else
{return and__3546__auto____155668;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____155667);
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
{var x__450__auto____155670 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155671 = x__450__auto____155670;

if(cljs.core.truth_(and__3546__auto____155671))
{var and__3546__auto____155672 = x__450__auto____155670.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____155672))
{return cljs.core.not.call(null,x__450__auto____155670.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____155672;
}
} else
{return and__3546__auto____155671;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____155670);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____155673 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155674 = x__450__auto____155673;

if(cljs.core.truth_(and__3546__auto____155674))
{var and__3546__auto____155675 = x__450__auto____155673.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____155675))
{return cljs.core.not.call(null,x__450__auto____155673.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____155675;
}
} else
{return and__3546__auto____155674;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____155673);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____155676 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155677 = x__450__auto____155676;

if(cljs.core.truth_(and__3546__auto____155677))
{var and__3546__auto____155678 = x__450__auto____155676.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____155678))
{return cljs.core.not.call(null,x__450__auto____155676.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____155678;
}
} else
{return and__3546__auto____155677;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____155676);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____155679 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155680 = x__450__auto____155679;

if(cljs.core.truth_(and__3546__auto____155680))
{var and__3546__auto____155681 = x__450__auto____155679.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____155681))
{return cljs.core.not.call(null,x__450__auto____155679.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____155681;
}
} else
{return and__3546__auto____155680;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____155679);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____155682 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155683 = x__450__auto____155682;

if(cljs.core.truth_(and__3546__auto____155683))
{var and__3546__auto____155684 = x__450__auto____155682.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____155684))
{return cljs.core.not.call(null,x__450__auto____155682.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____155684;
}
} else
{return and__3546__auto____155683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____155682);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____155685 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155686 = x__450__auto____155685;

if(cljs.core.truth_(and__3546__auto____155686))
{var and__3546__auto____155687 = x__450__auto____155685.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____155687))
{return cljs.core.not.call(null,x__450__auto____155685.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____155687;
}
} else
{return and__3546__auto____155686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____155685);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__155688 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__155688.push(key);
}));
return keys__155688;
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
{var x__450__auto____155689 = s;

if(cljs.core.truth_((function (){var and__3546__auto____155690 = x__450__auto____155689;

if(cljs.core.truth_(and__3546__auto____155690))
{var and__3546__auto____155691 = x__450__auto____155689.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____155691))
{return cljs.core.not.call(null,x__450__auto____155689.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____155691;
}
} else
{return and__3546__auto____155690;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____155689);
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
var and__3546__auto____155692 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____155692))
{return cljs.core.not.call(null,(function (){var or__3548__auto____155693 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____155693))
{return or__3548__auto____155693;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____155692;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____155694 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____155694))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____155694;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____155695 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____155695))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____155695;
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
var and__3546__auto____155696 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____155696))
{return (n == n.toFixed());
} else
{return and__3546__auto____155696;
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
if(cljs.core.truth_((function (){var and__3546__auto____155697 = coll;

if(cljs.core.truth_(and__3546__auto____155697))
{var and__3546__auto____155698 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____155698))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____155698;
}
} else
{return and__3546__auto____155697;
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
var distinct_QMARK___155703 = (function (x){
return true;
});
var distinct_QMARK___155704 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___155705 = (function() { 
var G__155707__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__155699 = cljs.core.set([y,x]);
var xs__155700 = more;

while(true){
var x__155701 = cljs.core.first.call(null,xs__155700);
var etc__155702 = cljs.core.next.call(null,xs__155700);

if(cljs.core.truth_(xs__155700))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__155699,x__155701)))
{return false;
} else
{{
var G__155708 = cljs.core.conj.call(null,s__155699,x__155701);
var G__155709 = etc__155702;
s__155699 = G__155708;
xs__155700 = G__155709;
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
var G__155707 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155707__delegate.call(this, x, y, more);
};
G__155707.cljs$lang$maxFixedArity = 2;
G__155707.cljs$lang$applyTo = (function (arglist__155710){
var x = cljs.core.first(arglist__155710);
var y = cljs.core.first(cljs.core.next(arglist__155710));
var more = cljs.core.rest(cljs.core.next(arglist__155710));
return G__155707__delegate.call(this, x, y, more);
});
return G__155707;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___155703.call(this,x);
case  2 :
return distinct_QMARK___155704.call(this,x,y);
default:
return distinct_QMARK___155705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___155705.cljs$lang$applyTo;
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
var r__155711 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__155711)))
{return r__155711;
} else
{if(cljs.core.truth_(r__155711))
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
var sort__155713 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__155714 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__155712 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__155712,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__155712);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__155713.call(this,comp);
case  2 :
return sort__155714.call(this,comp,coll);
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
var sort_by__155716 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__155717 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__155716.call(this,keyfn,comp);
case  3 :
return sort_by__155717.call(this,keyfn,comp,coll);
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
var reduce__155719 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__155720 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__155719.call(this,f,val);
case  3 :
return reduce__155720.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__155726 = (function (f,coll){
var temp__3695__auto____155722 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____155722))
{var s__155723 = temp__3695__auto____155722;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__155723),cljs.core.next.call(null,s__155723));
} else
{return f.call(null);
}
});
var seq_reduce__155727 = (function (f,val,coll){
var val__155724 = val;
var coll__155725 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__155725))
{{
var G__155729 = f.call(null,val__155724,cljs.core.first.call(null,coll__155725));
var G__155730 = cljs.core.next.call(null,coll__155725);
val__155724 = G__155729;
coll__155725 = G__155730;
continue;
}
} else
{return val__155724;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__155726.call(this,f,val);
case  3 :
return seq_reduce__155727.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__155731 = null;
var G__155731__155732 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__155731__155733 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__155731 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__155731__155732.call(this,coll,f);
case  3 :
return G__155731__155733.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155731;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___155735 = (function (){
return 0;
});
var _PLUS___155736 = (function (x){
return x;
});
var _PLUS___155737 = (function (x,y){
return (x + y);
});
var _PLUS___155738 = (function() { 
var G__155740__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__155740 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155740__delegate.call(this, x, y, more);
};
G__155740.cljs$lang$maxFixedArity = 2;
G__155740.cljs$lang$applyTo = (function (arglist__155741){
var x = cljs.core.first(arglist__155741);
var y = cljs.core.first(cljs.core.next(arglist__155741));
var more = cljs.core.rest(cljs.core.next(arglist__155741));
return G__155740__delegate.call(this, x, y, more);
});
return G__155740;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___155735.call(this);
case  1 :
return _PLUS___155736.call(this,x);
case  2 :
return _PLUS___155737.call(this,x,y);
default:
return _PLUS___155738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___155738.cljs$lang$applyTo;
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
var ___155742 = (function (x){
return (- x);
});
var ___155743 = (function (x,y){
return (x - y);
});
var ___155744 = (function() { 
var G__155746__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__155746 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155746__delegate.call(this, x, y, more);
};
G__155746.cljs$lang$maxFixedArity = 2;
G__155746.cljs$lang$applyTo = (function (arglist__155747){
var x = cljs.core.first(arglist__155747);
var y = cljs.core.first(cljs.core.next(arglist__155747));
var more = cljs.core.rest(cljs.core.next(arglist__155747));
return G__155746__delegate.call(this, x, y, more);
});
return G__155746;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___155742.call(this,x);
case  2 :
return ___155743.call(this,x,y);
default:
return ___155744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___155744.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___155748 = (function (){
return 1;
});
var _STAR___155749 = (function (x){
return x;
});
var _STAR___155750 = (function (x,y){
return (x * y);
});
var _STAR___155751 = (function() { 
var G__155753__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__155753 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155753__delegate.call(this, x, y, more);
};
G__155753.cljs$lang$maxFixedArity = 2;
G__155753.cljs$lang$applyTo = (function (arglist__155754){
var x = cljs.core.first(arglist__155754);
var y = cljs.core.first(cljs.core.next(arglist__155754));
var more = cljs.core.rest(cljs.core.next(arglist__155754));
return G__155753__delegate.call(this, x, y, more);
});
return G__155753;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___155748.call(this);
case  1 :
return _STAR___155749.call(this,x);
case  2 :
return _STAR___155750.call(this,x,y);
default:
return _STAR___155751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___155751.cljs$lang$applyTo;
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
var _SLASH___155755 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___155756 = (function (x,y){
return (x / y);
});
var _SLASH___155757 = (function() { 
var G__155759__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__155759 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155759__delegate.call(this, x, y, more);
};
G__155759.cljs$lang$maxFixedArity = 2;
G__155759.cljs$lang$applyTo = (function (arglist__155760){
var x = cljs.core.first(arglist__155760);
var y = cljs.core.first(cljs.core.next(arglist__155760));
var more = cljs.core.rest(cljs.core.next(arglist__155760));
return G__155759__delegate.call(this, x, y, more);
});
return G__155759;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___155755.call(this,x);
case  2 :
return _SLASH___155756.call(this,x,y);
default:
return _SLASH___155757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___155757.cljs$lang$applyTo;
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
var _LT___155761 = (function (x){
return true;
});
var _LT___155762 = (function (x,y){
return (x < y);
});
var _LT___155763 = (function() { 
var G__155765__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155766 = y;
var G__155767 = cljs.core.first.call(null,more);
var G__155768 = cljs.core.next.call(null,more);
x = G__155766;
y = G__155767;
more = G__155768;
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
var G__155765 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155765__delegate.call(this, x, y, more);
};
G__155765.cljs$lang$maxFixedArity = 2;
G__155765.cljs$lang$applyTo = (function (arglist__155769){
var x = cljs.core.first(arglist__155769);
var y = cljs.core.first(cljs.core.next(arglist__155769));
var more = cljs.core.rest(cljs.core.next(arglist__155769));
return G__155765__delegate.call(this, x, y, more);
});
return G__155765;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___155761.call(this,x);
case  2 :
return _LT___155762.call(this,x,y);
default:
return _LT___155763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___155763.cljs$lang$applyTo;
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
var _LT__EQ___155770 = (function (x){
return true;
});
var _LT__EQ___155771 = (function (x,y){
return (x <= y);
});
var _LT__EQ___155772 = (function() { 
var G__155774__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155775 = y;
var G__155776 = cljs.core.first.call(null,more);
var G__155777 = cljs.core.next.call(null,more);
x = G__155775;
y = G__155776;
more = G__155777;
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
var G__155774 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155774__delegate.call(this, x, y, more);
};
G__155774.cljs$lang$maxFixedArity = 2;
G__155774.cljs$lang$applyTo = (function (arglist__155778){
var x = cljs.core.first(arglist__155778);
var y = cljs.core.first(cljs.core.next(arglist__155778));
var more = cljs.core.rest(cljs.core.next(arglist__155778));
return G__155774__delegate.call(this, x, y, more);
});
return G__155774;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___155770.call(this,x);
case  2 :
return _LT__EQ___155771.call(this,x,y);
default:
return _LT__EQ___155772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___155772.cljs$lang$applyTo;
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
var _GT___155779 = (function (x){
return true;
});
var _GT___155780 = (function (x,y){
return (x > y);
});
var _GT___155781 = (function() { 
var G__155783__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155784 = y;
var G__155785 = cljs.core.first.call(null,more);
var G__155786 = cljs.core.next.call(null,more);
x = G__155784;
y = G__155785;
more = G__155786;
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
var G__155783 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155783__delegate.call(this, x, y, more);
};
G__155783.cljs$lang$maxFixedArity = 2;
G__155783.cljs$lang$applyTo = (function (arglist__155787){
var x = cljs.core.first(arglist__155787);
var y = cljs.core.first(cljs.core.next(arglist__155787));
var more = cljs.core.rest(cljs.core.next(arglist__155787));
return G__155783__delegate.call(this, x, y, more);
});
return G__155783;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___155779.call(this,x);
case  2 :
return _GT___155780.call(this,x,y);
default:
return _GT___155781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___155781.cljs$lang$applyTo;
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
var _GT__EQ___155788 = (function (x){
return true;
});
var _GT__EQ___155789 = (function (x,y){
return (x >= y);
});
var _GT__EQ___155790 = (function() { 
var G__155792__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155793 = y;
var G__155794 = cljs.core.first.call(null,more);
var G__155795 = cljs.core.next.call(null,more);
x = G__155793;
y = G__155794;
more = G__155795;
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
var G__155792 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155792__delegate.call(this, x, y, more);
};
G__155792.cljs$lang$maxFixedArity = 2;
G__155792.cljs$lang$applyTo = (function (arglist__155796){
var x = cljs.core.first(arglist__155796);
var y = cljs.core.first(cljs.core.next(arglist__155796));
var more = cljs.core.rest(cljs.core.next(arglist__155796));
return G__155792__delegate.call(this, x, y, more);
});
return G__155792;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___155788.call(this,x);
case  2 :
return _GT__EQ___155789.call(this,x,y);
default:
return _GT__EQ___155790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___155790.cljs$lang$applyTo;
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
var max__155797 = (function (x){
return x;
});
var max__155798 = (function (x,y){
return ((x > y) ? x : y);
});
var max__155799 = (function() { 
var G__155801__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__155801 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155801__delegate.call(this, x, y, more);
};
G__155801.cljs$lang$maxFixedArity = 2;
G__155801.cljs$lang$applyTo = (function (arglist__155802){
var x = cljs.core.first(arglist__155802);
var y = cljs.core.first(cljs.core.next(arglist__155802));
var more = cljs.core.rest(cljs.core.next(arglist__155802));
return G__155801__delegate.call(this, x, y, more);
});
return G__155801;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__155797.call(this,x);
case  2 :
return max__155798.call(this,x,y);
default:
return max__155799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__155799.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__155803 = (function (x){
return x;
});
var min__155804 = (function (x,y){
return ((x < y) ? x : y);
});
var min__155805 = (function() { 
var G__155807__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__155807 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155807__delegate.call(this, x, y, more);
};
G__155807.cljs$lang$maxFixedArity = 2;
G__155807.cljs$lang$applyTo = (function (arglist__155808){
var x = cljs.core.first(arglist__155808);
var y = cljs.core.first(cljs.core.next(arglist__155808));
var more = cljs.core.rest(cljs.core.next(arglist__155808));
return G__155807__delegate.call(this, x, y, more);
});
return G__155807;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__155803.call(this,x);
case  2 :
return min__155804.call(this,x,y);
default:
return min__155805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__155805.cljs$lang$applyTo;
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
var rem__155809 = (n % d);

return cljs.core.fix.call(null,((n - rem__155809) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__155810 = cljs.core.quot.call(null,n,d);

return (n - (d * q__155810));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__155811 = (function (){
return Math.random.call(null);
});
var rand__155812 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__155811.call(this);
case  1 :
return rand__155812.call(this,n);
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
var _EQ__EQ___155814 = (function (x){
return true;
});
var _EQ__EQ___155815 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___155816 = (function() { 
var G__155818__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155819 = y;
var G__155820 = cljs.core.first.call(null,more);
var G__155821 = cljs.core.next.call(null,more);
x = G__155819;
y = G__155820;
more = G__155821;
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
var G__155818 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155818__delegate.call(this, x, y, more);
};
G__155818.cljs$lang$maxFixedArity = 2;
G__155818.cljs$lang$applyTo = (function (arglist__155822){
var x = cljs.core.first(arglist__155822);
var y = cljs.core.first(cljs.core.next(arglist__155822));
var more = cljs.core.rest(cljs.core.next(arglist__155822));
return G__155818__delegate.call(this, x, y, more);
});
return G__155818;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___155814.call(this,x);
case  2 :
return _EQ__EQ___155815.call(this,x,y);
default:
return _EQ__EQ___155816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___155816.cljs$lang$applyTo;
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
var n__155823 = n;
var xs__155824 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____155825 = xs__155824;

if(cljs.core.truth_(and__3546__auto____155825))
{return (n__155823 > 0);
} else
{return and__3546__auto____155825;
}
})()))
{{
var G__155826 = (n__155823 - 1);
var G__155827 = cljs.core.next.call(null,xs__155824);
n__155823 = G__155826;
xs__155824 = G__155827;
continue;
}
} else
{return xs__155824;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__155832 = null;
var G__155832__155833 = (function (coll,n){
var temp__3695__auto____155828 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____155828))
{var xs__155829 = temp__3695__auto____155828;

return cljs.core.first.call(null,xs__155829);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__155832__155834 = (function (coll,n,not_found){
var temp__3695__auto____155830 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____155830))
{var xs__155831 = temp__3695__auto____155830;

return cljs.core.first.call(null,xs__155831);
} else
{return not_found;
}
});
G__155832 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__155832__155833.call(this,coll,n);
case  3 :
return G__155832__155834.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155832;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___155836 = (function (){
return "";
});
var str_STAR___155837 = (function (x){
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
var str_STAR___155838 = (function() { 
var G__155840__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__155841 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__155842 = cljs.core.next.call(null,more);
sb = G__155841;
more = G__155842;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__155840 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__155840__delegate.call(this, x, ys);
};
G__155840.cljs$lang$maxFixedArity = 1;
G__155840.cljs$lang$applyTo = (function (arglist__155843){
var x = cljs.core.first(arglist__155843);
var ys = cljs.core.rest(arglist__155843);
return G__155840__delegate.call(this, x, ys);
});
return G__155840;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___155836.call(this);
case  1 :
return str_STAR___155837.call(this,x);
default:
return str_STAR___155838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___155838.cljs$lang$applyTo;
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
var str__155844 = (function (){
return "";
});
var str__155845 = (function (x){
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
var str__155846 = (function() { 
var G__155848__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__155848 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__155848__delegate.call(this, x, ys);
};
G__155848.cljs$lang$maxFixedArity = 1;
G__155848.cljs$lang$applyTo = (function (arglist__155849){
var x = cljs.core.first(arglist__155849);
var ys = cljs.core.rest(arglist__155849);
return G__155848__delegate.call(this, x, ys);
});
return G__155848;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__155844.call(this);
case  1 :
return str__155845.call(this,x);
default:
return str__155846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__155846.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__155850 = (function (s,start){
return s.substring(start);
});
var subs__155851 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__155850.call(this,s,start);
case  3 :
return subs__155851.call(this,s,start,end);
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
var symbol__155853 = (function (name){
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
var symbol__155854 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__155853.call(this,ns);
case  2 :
return symbol__155854.call(this,ns,name);
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
var keyword__155856 = (function (name){
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
var keyword__155857 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__155856.call(this,ns);
case  2 :
return keyword__155857.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__155859 = cljs.core.seq.call(null,x);
var ys__155860 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__155859 === null)))
{return (ys__155860 === null);
} else
{if(cljs.core.truth_((ys__155860 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__155859),cljs.core.first.call(null,ys__155860))))
{{
var G__155861 = cljs.core.next.call(null,xs__155859);
var G__155862 = cljs.core.next.call(null,ys__155860);
xs__155859 = G__155861;
ys__155860 = G__155862;
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
return cljs.core.reduce.call(null,(function (p1__155863_SHARP_,p2__155864_SHARP_){
return cljs.core.hash_combine.call(null,p1__155863_SHARP_,cljs.core.hash.call(null,p2__155864_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__155865__155866 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__155865__155866))
{var G__155868__155870 = cljs.core.first.call(null,G__155865__155866);
var vec__155869__155871 = G__155868__155870;
var key_name__155872 = cljs.core.nth.call(null,vec__155869__155871,0,null);
var f__155873 = cljs.core.nth.call(null,vec__155869__155871,1,null);
var G__155865__155874 = G__155865__155866;

var G__155868__155875 = G__155868__155870;
var G__155865__155876 = G__155865__155874;

while(true){
var vec__155877__155878 = G__155868__155875;
var key_name__155879 = cljs.core.nth.call(null,vec__155877__155878,0,null);
var f__155880 = cljs.core.nth.call(null,vec__155877__155878,1,null);
var G__155865__155881 = G__155865__155876;

var str_name__155882 = cljs.core.name.call(null,key_name__155879);

obj[str_name__155882] = f__155880;
var temp__3698__auto____155883 = cljs.core.next.call(null,G__155865__155881);

if(cljs.core.truth_(temp__3698__auto____155883))
{var G__155865__155884 = temp__3698__auto____155883;

{
var G__155885 = cljs.core.first.call(null,G__155865__155884);
var G__155886 = G__155865__155884;
G__155868__155875 = G__155885;
G__155865__155876 = G__155886;
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
var this__155887 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155888 = this;
return (new cljs.core.List(this__155888.meta,o,coll,(this__155888.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__155889 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__155890 = this;
return this__155890.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__155891 = this;
return this__155891.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__155892 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__155893 = this;
return this__155893.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__155894 = this;
return this__155894.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155895 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__155896 = this;
return (new cljs.core.List(meta,this__155896.first,this__155896.rest,this__155896.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__155897 = this;
return this__155897.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__155898 = this;
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
var this__155899 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155900 = this;
return (new cljs.core.List(this__155900.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__155901 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__155902 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__155903 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__155904 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__155905 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__155906 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155907 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__155908 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__155909 = this;
return this__155909.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__155910 = this;
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
list.cljs$lang$applyTo = (function (arglist__155911){
var items = cljs.core.seq( arglist__155911 );;
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
var this__155912 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__155913 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155914 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__155915 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__155915.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155916 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__155917 = this;
return this__155917.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__155918 = this;
if(cljs.core.truth_((this__155918.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__155918.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__155919 = this;
return this__155919.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__155920 = this;
return (new cljs.core.Cons(meta,this__155920.first,this__155920.rest));
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
var G__155921 = null;
var G__155921__155922 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__155921__155923 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__155921 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__155921__155922.call(this,string,f);
case  3 :
return G__155921__155923.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155921;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__155925 = null;
var G__155925__155926 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__155925__155927 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__155925 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__155925__155926.call(this,string,k);
case  3 :
return G__155925__155927.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155925;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__155929 = null;
var G__155929__155930 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__155929__155931 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__155929 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__155929__155930.call(this,string,n);
case  3 :
return G__155929__155931.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155929;
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
var G__155939 = null;
var G__155939__155940 = (function (tsym155933,coll){
var tsym155933__155935 = this;

var this$__155936 = tsym155933__155935;

return cljs.core.get.call(null,coll,this$__155936.toString());
});
var G__155939__155941 = (function (tsym155934,coll,not_found){
var tsym155934__155937 = this;

var this$__155938 = tsym155934__155937;

return cljs.core.get.call(null,coll,this$__155938.toString(),not_found);
});
G__155939 = function(tsym155934,coll,not_found){
switch(arguments.length){
case  2 :
return G__155939__155940.call(this,tsym155934,coll);
case  3 :
return G__155939__155941.call(this,tsym155934,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155939;
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
var x__155943 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__155943;
} else
{lazy_seq.x = x__155943.call(null);
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
var this__155944 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__155945 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155946 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__155947 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__155947.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155948 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__155949 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__155950 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__155951 = this;
return this__155951.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__155952 = this;
return (new cljs.core.LazySeq(meta,this__155952.realized,this__155952.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__155953 = cljs.core.array.call(null);

var s__155954 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__155954)))
{ary__155953.push(cljs.core.first.call(null,s__155954));
{
var G__155955 = cljs.core.next.call(null,s__155954);
s__155954 = G__155955;
continue;
}
} else
{return ary__155953;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__155956 = s;
var i__155957 = n;
var sum__155958 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____155959 = (i__155957 > 0);

if(cljs.core.truth_(and__3546__auto____155959))
{return cljs.core.seq.call(null,s__155956);
} else
{return and__3546__auto____155959;
}
})()))
{{
var G__155960 = cljs.core.next.call(null,s__155956);
var G__155961 = (i__155957 - 1);
var G__155962 = (sum__155958 + 1);
s__155956 = G__155960;
i__155957 = G__155961;
sum__155958 = G__155962;
continue;
}
} else
{return sum__155958;
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
var concat__155966 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__155967 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__155968 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__155963 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__155963))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__155963),concat.call(null,cljs.core.rest.call(null,s__155963),y));
} else
{return y;
}
})));
});
var concat__155969 = (function() { 
var G__155971__delegate = function (x,y,zs){
var cat__155965 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__155964 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__155964))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__155964),cat.call(null,cljs.core.rest.call(null,xys__155964),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__155965.call(null,concat.call(null,x,y),zs);
};
var G__155971 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155971__delegate.call(this, x, y, zs);
};
G__155971.cljs$lang$maxFixedArity = 2;
G__155971.cljs$lang$applyTo = (function (arglist__155972){
var x = cljs.core.first(arglist__155972);
var y = cljs.core.first(cljs.core.next(arglist__155972));
var zs = cljs.core.rest(cljs.core.next(arglist__155972));
return G__155971__delegate.call(this, x, y, zs);
});
return G__155971;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__155966.call(this);
case  1 :
return concat__155967.call(this,x);
case  2 :
return concat__155968.call(this,x,y);
default:
return concat__155969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__155969.cljs$lang$applyTo;
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
var list_STAR___155973 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___155974 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___155975 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___155976 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___155977 = (function() { 
var G__155979__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__155979 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__155979__delegate.call(this, a, b, c, d, more);
};
G__155979.cljs$lang$maxFixedArity = 4;
G__155979.cljs$lang$applyTo = (function (arglist__155980){
var a = cljs.core.first(arglist__155980);
var b = cljs.core.first(cljs.core.next(arglist__155980));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155980)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155980))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155980))));
return G__155979__delegate.call(this, a, b, c, d, more);
});
return G__155979;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___155973.call(this,a);
case  2 :
return list_STAR___155974.call(this,a,b);
case  3 :
return list_STAR___155975.call(this,a,b,c);
case  4 :
return list_STAR___155976.call(this,a,b,c,d);
default:
return list_STAR___155977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___155977.cljs$lang$applyTo;
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
var apply__155990 = (function (f,args){
var fixed_arity__155981 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__155981 + 1)) <= fixed_arity__155981)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__155991 = (function (f,x,args){
var arglist__155982 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__155983 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__155982,fixed_arity__155983) <= fixed_arity__155983)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__155982));
} else
{return f.cljs$lang$applyTo(arglist__155982);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__155982));
}
});
var apply__155992 = (function (f,x,y,args){
var arglist__155984 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__155985 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__155984,fixed_arity__155985) <= fixed_arity__155985)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__155984));
} else
{return f.cljs$lang$applyTo(arglist__155984);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__155984));
}
});
var apply__155993 = (function (f,x,y,z,args){
var arglist__155986 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__155987 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__155986,fixed_arity__155987) <= fixed_arity__155987)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__155986));
} else
{return f.cljs$lang$applyTo(arglist__155986);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__155986));
}
});
var apply__155994 = (function() { 
var G__155996__delegate = function (f,a,b,c,d,args){
var arglist__155988 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__155989 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__155988,fixed_arity__155989) <= fixed_arity__155989)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__155988));
} else
{return f.cljs$lang$applyTo(arglist__155988);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__155988));
}
};
var G__155996 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__155996__delegate.call(this, f, a, b, c, d, args);
};
G__155996.cljs$lang$maxFixedArity = 5;
G__155996.cljs$lang$applyTo = (function (arglist__155997){
var f = cljs.core.first(arglist__155997);
var a = cljs.core.first(cljs.core.next(arglist__155997));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155997)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155997))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155997)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155997)))));
return G__155996__delegate.call(this, f, a, b, c, d, args);
});
return G__155996;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__155990.call(this,f,a);
case  3 :
return apply__155991.call(this,f,a,b);
case  4 :
return apply__155992.call(this,f,a,b,c);
case  5 :
return apply__155993.call(this,f,a,b,c,d);
default:
return apply__155994.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__155994.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__155998){
var obj = cljs.core.first(arglist__155998);
var f = cljs.core.first(cljs.core.next(arglist__155998));
var args = cljs.core.rest(cljs.core.next(arglist__155998));
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
var not_EQ___155999 = (function (x){
return false;
});
var not_EQ___156000 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___156001 = (function() { 
var G__156003__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__156003 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__156003__delegate.call(this, x, y, more);
};
G__156003.cljs$lang$maxFixedArity = 2;
G__156003.cljs$lang$applyTo = (function (arglist__156004){
var x = cljs.core.first(arglist__156004);
var y = cljs.core.first(cljs.core.next(arglist__156004));
var more = cljs.core.rest(cljs.core.next(arglist__156004));
return G__156003__delegate.call(this, x, y, more);
});
return G__156003;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___155999.call(this,x);
case  2 :
return not_EQ___156000.call(this,x,y);
default:
return not_EQ___156001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___156001.cljs$lang$applyTo;
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
var G__156005 = pred;
var G__156006 = cljs.core.next.call(null,coll);
pred = G__156005;
coll = G__156006;
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
{var or__3548__auto____156007 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____156007))
{return or__3548__auto____156007;
} else
{{
var G__156008 = pred;
var G__156009 = cljs.core.next.call(null,coll);
pred = G__156008;
coll = G__156009;
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
var G__156010 = null;
var G__156010__156011 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__156010__156012 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__156010__156013 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__156010__156014 = (function() { 
var G__156016__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__156016 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__156016__delegate.call(this, x, y, zs);
};
G__156016.cljs$lang$maxFixedArity = 2;
G__156016.cljs$lang$applyTo = (function (arglist__156017){
var x = cljs.core.first(arglist__156017);
var y = cljs.core.first(cljs.core.next(arglist__156017));
var zs = cljs.core.rest(cljs.core.next(arglist__156017));
return G__156016__delegate.call(this, x, y, zs);
});
return G__156016;
})()
;
G__156010 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__156010__156011.call(this);
case  1 :
return G__156010__156012.call(this,x);
case  2 :
return G__156010__156013.call(this,x,y);
default:
return G__156010__156014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156010.cljs$lang$maxFixedArity = 2;
G__156010.cljs$lang$applyTo = G__156010__156014.cljs$lang$applyTo;
return G__156010;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__156018__delegate = function (args){
return x;
};
var G__156018 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__156018__delegate.call(this, args);
};
G__156018.cljs$lang$maxFixedArity = 0;
G__156018.cljs$lang$applyTo = (function (arglist__156019){
var args = cljs.core.seq( arglist__156019 );;
return G__156018__delegate.call(this, args);
});
return G__156018;
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
var comp__156023 = (function (){
return cljs.core.identity;
});
var comp__156024 = (function (f){
return f;
});
var comp__156025 = (function (f,g){
return (function() {
var G__156029 = null;
var G__156029__156030 = (function (){
return f.call(null,g.call(null));
});
var G__156029__156031 = (function (x){
return f.call(null,g.call(null,x));
});
var G__156029__156032 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__156029__156033 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__156029__156034 = (function() { 
var G__156036__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__156036 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156036__delegate.call(this, x, y, z, args);
};
G__156036.cljs$lang$maxFixedArity = 3;
G__156036.cljs$lang$applyTo = (function (arglist__156037){
var x = cljs.core.first(arglist__156037);
var y = cljs.core.first(cljs.core.next(arglist__156037));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156037)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156037)));
return G__156036__delegate.call(this, x, y, z, args);
});
return G__156036;
})()
;
G__156029 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156029__156030.call(this);
case  1 :
return G__156029__156031.call(this,x);
case  2 :
return G__156029__156032.call(this,x,y);
case  3 :
return G__156029__156033.call(this,x,y,z);
default:
return G__156029__156034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156029.cljs$lang$maxFixedArity = 3;
G__156029.cljs$lang$applyTo = G__156029__156034.cljs$lang$applyTo;
return G__156029;
})()
});
var comp__156026 = (function (f,g,h){
return (function() {
var G__156038 = null;
var G__156038__156039 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__156038__156040 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__156038__156041 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__156038__156042 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__156038__156043 = (function() { 
var G__156045__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__156045 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156045__delegate.call(this, x, y, z, args);
};
G__156045.cljs$lang$maxFixedArity = 3;
G__156045.cljs$lang$applyTo = (function (arglist__156046){
var x = cljs.core.first(arglist__156046);
var y = cljs.core.first(cljs.core.next(arglist__156046));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156046)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156046)));
return G__156045__delegate.call(this, x, y, z, args);
});
return G__156045;
})()
;
G__156038 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156038__156039.call(this);
case  1 :
return G__156038__156040.call(this,x);
case  2 :
return G__156038__156041.call(this,x,y);
case  3 :
return G__156038__156042.call(this,x,y,z);
default:
return G__156038__156043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156038.cljs$lang$maxFixedArity = 3;
G__156038.cljs$lang$applyTo = G__156038__156043.cljs$lang$applyTo;
return G__156038;
})()
});
var comp__156027 = (function() { 
var G__156047__delegate = function (f1,f2,f3,fs){
var fs__156020 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__156048__delegate = function (args){
var ret__156021 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__156020),args);
var fs__156022 = cljs.core.next.call(null,fs__156020);

while(true){
if(cljs.core.truth_(fs__156022))
{{
var G__156049 = cljs.core.first.call(null,fs__156022).call(null,ret__156021);
var G__156050 = cljs.core.next.call(null,fs__156022);
ret__156021 = G__156049;
fs__156022 = G__156050;
continue;
}
} else
{return ret__156021;
}
break;
}
};
var G__156048 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__156048__delegate.call(this, args);
};
G__156048.cljs$lang$maxFixedArity = 0;
G__156048.cljs$lang$applyTo = (function (arglist__156051){
var args = cljs.core.seq( arglist__156051 );;
return G__156048__delegate.call(this, args);
});
return G__156048;
})()
;
};
var G__156047 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156047__delegate.call(this, f1, f2, f3, fs);
};
G__156047.cljs$lang$maxFixedArity = 3;
G__156047.cljs$lang$applyTo = (function (arglist__156052){
var f1 = cljs.core.first(arglist__156052);
var f2 = cljs.core.first(cljs.core.next(arglist__156052));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156052)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156052)));
return G__156047__delegate.call(this, f1, f2, f3, fs);
});
return G__156047;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__156023.call(this);
case  1 :
return comp__156024.call(this,f1);
case  2 :
return comp__156025.call(this,f1,f2);
case  3 :
return comp__156026.call(this,f1,f2,f3);
default:
return comp__156027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__156027.cljs$lang$applyTo;
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
var partial__156053 = (function (f,arg1){
return (function() { 
var G__156058__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__156058 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__156058__delegate.call(this, args);
};
G__156058.cljs$lang$maxFixedArity = 0;
G__156058.cljs$lang$applyTo = (function (arglist__156059){
var args = cljs.core.seq( arglist__156059 );;
return G__156058__delegate.call(this, args);
});
return G__156058;
})()
;
});
var partial__156054 = (function (f,arg1,arg2){
return (function() { 
var G__156060__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__156060 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__156060__delegate.call(this, args);
};
G__156060.cljs$lang$maxFixedArity = 0;
G__156060.cljs$lang$applyTo = (function (arglist__156061){
var args = cljs.core.seq( arglist__156061 );;
return G__156060__delegate.call(this, args);
});
return G__156060;
})()
;
});
var partial__156055 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__156062__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__156062 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__156062__delegate.call(this, args);
};
G__156062.cljs$lang$maxFixedArity = 0;
G__156062.cljs$lang$applyTo = (function (arglist__156063){
var args = cljs.core.seq( arglist__156063 );;
return G__156062__delegate.call(this, args);
});
return G__156062;
})()
;
});
var partial__156056 = (function() { 
var G__156064__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__156065__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__156065 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__156065__delegate.call(this, args);
};
G__156065.cljs$lang$maxFixedArity = 0;
G__156065.cljs$lang$applyTo = (function (arglist__156066){
var args = cljs.core.seq( arglist__156066 );;
return G__156065__delegate.call(this, args);
});
return G__156065;
})()
;
};
var G__156064 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__156064__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__156064.cljs$lang$maxFixedArity = 4;
G__156064.cljs$lang$applyTo = (function (arglist__156067){
var f = cljs.core.first(arglist__156067);
var arg1 = cljs.core.first(cljs.core.next(arglist__156067));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156067)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156067))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156067))));
return G__156064__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__156064;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__156053.call(this,f,arg1);
case  3 :
return partial__156054.call(this,f,arg1,arg2);
case  4 :
return partial__156055.call(this,f,arg1,arg2,arg3);
default:
return partial__156056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__156056.cljs$lang$applyTo;
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
var fnil__156068 = (function (f,x){
return (function() {
var G__156072 = null;
var G__156072__156073 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__156072__156074 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__156072__156075 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__156072__156076 = (function() { 
var G__156078__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__156078 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156078__delegate.call(this, a, b, c, ds);
};
G__156078.cljs$lang$maxFixedArity = 3;
G__156078.cljs$lang$applyTo = (function (arglist__156079){
var a = cljs.core.first(arglist__156079);
var b = cljs.core.first(cljs.core.next(arglist__156079));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156079)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156079)));
return G__156078__delegate.call(this, a, b, c, ds);
});
return G__156078;
})()
;
G__156072 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__156072__156073.call(this,a);
case  2 :
return G__156072__156074.call(this,a,b);
case  3 :
return G__156072__156075.call(this,a,b,c);
default:
return G__156072__156076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156072.cljs$lang$maxFixedArity = 3;
G__156072.cljs$lang$applyTo = G__156072__156076.cljs$lang$applyTo;
return G__156072;
})()
});
var fnil__156069 = (function (f,x,y){
return (function() {
var G__156080 = null;
var G__156080__156081 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__156080__156082 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__156080__156083 = (function() { 
var G__156085__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__156085 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156085__delegate.call(this, a, b, c, ds);
};
G__156085.cljs$lang$maxFixedArity = 3;
G__156085.cljs$lang$applyTo = (function (arglist__156086){
var a = cljs.core.first(arglist__156086);
var b = cljs.core.first(cljs.core.next(arglist__156086));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156086)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156086)));
return G__156085__delegate.call(this, a, b, c, ds);
});
return G__156085;
})()
;
G__156080 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__156080__156081.call(this,a,b);
case  3 :
return G__156080__156082.call(this,a,b,c);
default:
return G__156080__156083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156080.cljs$lang$maxFixedArity = 3;
G__156080.cljs$lang$applyTo = G__156080__156083.cljs$lang$applyTo;
return G__156080;
})()
});
var fnil__156070 = (function (f,x,y,z){
return (function() {
var G__156087 = null;
var G__156087__156088 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__156087__156089 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__156087__156090 = (function() { 
var G__156092__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__156092 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156092__delegate.call(this, a, b, c, ds);
};
G__156092.cljs$lang$maxFixedArity = 3;
G__156092.cljs$lang$applyTo = (function (arglist__156093){
var a = cljs.core.first(arglist__156093);
var b = cljs.core.first(cljs.core.next(arglist__156093));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156093)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156093)));
return G__156092__delegate.call(this, a, b, c, ds);
});
return G__156092;
})()
;
G__156087 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__156087__156088.call(this,a,b);
case  3 :
return G__156087__156089.call(this,a,b,c);
default:
return G__156087__156090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156087.cljs$lang$maxFixedArity = 3;
G__156087.cljs$lang$applyTo = G__156087__156090.cljs$lang$applyTo;
return G__156087;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__156068.call(this,f,x);
case  3 :
return fnil__156069.call(this,f,x,y);
case  4 :
return fnil__156070.call(this,f,x,y,z);
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
var mapi__156096 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156094 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156094))
{var s__156095 = temp__3698__auto____156094;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__156095)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__156095)));
} else
{return null;
}
})));
});

return mapi__156096.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156097))
{var s__156098 = temp__3698__auto____156097;

var x__156099 = f.call(null,cljs.core.first.call(null,s__156098));

if(cljs.core.truth_((x__156099 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__156098));
} else
{return cljs.core.cons.call(null,x__156099,keep.call(null,f,cljs.core.rest.call(null,s__156098)));
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
var keepi__156109 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156106 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156106))
{var s__156107 = temp__3698__auto____156106;

var x__156108 = f.call(null,idx,cljs.core.first.call(null,s__156107));

if(cljs.core.truth_((x__156108 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__156107));
} else
{return cljs.core.cons.call(null,x__156108,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__156107)));
}
} else
{return null;
}
})));
});

return keepi__156109.call(null,0,coll);
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
var every_pred__156154 = (function (p){
return (function() {
var ep1 = null;
var ep1__156159 = (function (){
return true;
});
var ep1__156160 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__156161 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156116 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____156116))
{return p.call(null,y);
} else
{return and__3546__auto____156116;
}
})());
});
var ep1__156162 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156117 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____156117))
{var and__3546__auto____156118 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____156118))
{return p.call(null,z);
} else
{return and__3546__auto____156118;
}
} else
{return and__3546__auto____156117;
}
})());
});
var ep1__156163 = (function() { 
var G__156165__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156119 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____156119))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____156119;
}
})());
};
var G__156165 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156165__delegate.call(this, x, y, z, args);
};
G__156165.cljs$lang$maxFixedArity = 3;
G__156165.cljs$lang$applyTo = (function (arglist__156166){
var x = cljs.core.first(arglist__156166);
var y = cljs.core.first(cljs.core.next(arglist__156166));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156166)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156166)));
return G__156165__delegate.call(this, x, y, z, args);
});
return G__156165;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__156159.call(this);
case  1 :
return ep1__156160.call(this,x);
case  2 :
return ep1__156161.call(this,x,y);
case  3 :
return ep1__156162.call(this,x,y,z);
default:
return ep1__156163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__156163.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__156155 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__156167 = (function (){
return true;
});
var ep2__156168 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156120 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____156120))
{return p2.call(null,x);
} else
{return and__3546__auto____156120;
}
})());
});
var ep2__156169 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156121 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____156121))
{var and__3546__auto____156122 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____156122))
{var and__3546__auto____156123 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____156123))
{return p2.call(null,y);
} else
{return and__3546__auto____156123;
}
} else
{return and__3546__auto____156122;
}
} else
{return and__3546__auto____156121;
}
})());
});
var ep2__156170 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156124 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____156124))
{var and__3546__auto____156125 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____156125))
{var and__3546__auto____156126 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____156126))
{var and__3546__auto____156127 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____156127))
{var and__3546__auto____156128 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____156128))
{return p2.call(null,z);
} else
{return and__3546__auto____156128;
}
} else
{return and__3546__auto____156127;
}
} else
{return and__3546__auto____156126;
}
} else
{return and__3546__auto____156125;
}
} else
{return and__3546__auto____156124;
}
})());
});
var ep2__156171 = (function() { 
var G__156173__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156129 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____156129))
{return cljs.core.every_QMARK_.call(null,(function (p1__156100_SHARP_){
var and__3546__auto____156130 = p1.call(null,p1__156100_SHARP_);

if(cljs.core.truth_(and__3546__auto____156130))
{return p2.call(null,p1__156100_SHARP_);
} else
{return and__3546__auto____156130;
}
}),args);
} else
{return and__3546__auto____156129;
}
})());
};
var G__156173 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156173__delegate.call(this, x, y, z, args);
};
G__156173.cljs$lang$maxFixedArity = 3;
G__156173.cljs$lang$applyTo = (function (arglist__156174){
var x = cljs.core.first(arglist__156174);
var y = cljs.core.first(cljs.core.next(arglist__156174));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156174)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156174)));
return G__156173__delegate.call(this, x, y, z, args);
});
return G__156173;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__156167.call(this);
case  1 :
return ep2__156168.call(this,x);
case  2 :
return ep2__156169.call(this,x,y);
case  3 :
return ep2__156170.call(this,x,y,z);
default:
return ep2__156171.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__156171.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__156156 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__156175 = (function (){
return true;
});
var ep3__156176 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156131 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____156131))
{var and__3546__auto____156132 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____156132))
{return p3.call(null,x);
} else
{return and__3546__auto____156132;
}
} else
{return and__3546__auto____156131;
}
})());
});
var ep3__156177 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156133 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____156133))
{var and__3546__auto____156134 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____156134))
{var and__3546__auto____156135 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____156135))
{var and__3546__auto____156136 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____156136))
{var and__3546__auto____156137 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____156137))
{return p3.call(null,y);
} else
{return and__3546__auto____156137;
}
} else
{return and__3546__auto____156136;
}
} else
{return and__3546__auto____156135;
}
} else
{return and__3546__auto____156134;
}
} else
{return and__3546__auto____156133;
}
})());
});
var ep3__156178 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156138 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____156138))
{var and__3546__auto____156139 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____156139))
{var and__3546__auto____156140 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____156140))
{var and__3546__auto____156141 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____156141))
{var and__3546__auto____156142 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____156142))
{var and__3546__auto____156143 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____156143))
{var and__3546__auto____156144 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____156144))
{var and__3546__auto____156145 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____156145))
{return p3.call(null,z);
} else
{return and__3546__auto____156145;
}
} else
{return and__3546__auto____156144;
}
} else
{return and__3546__auto____156143;
}
} else
{return and__3546__auto____156142;
}
} else
{return and__3546__auto____156141;
}
} else
{return and__3546__auto____156140;
}
} else
{return and__3546__auto____156139;
}
} else
{return and__3546__auto____156138;
}
})());
});
var ep3__156179 = (function() { 
var G__156181__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156146 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____156146))
{return cljs.core.every_QMARK_.call(null,(function (p1__156101_SHARP_){
var and__3546__auto____156147 = p1.call(null,p1__156101_SHARP_);

if(cljs.core.truth_(and__3546__auto____156147))
{var and__3546__auto____156148 = p2.call(null,p1__156101_SHARP_);

if(cljs.core.truth_(and__3546__auto____156148))
{return p3.call(null,p1__156101_SHARP_);
} else
{return and__3546__auto____156148;
}
} else
{return and__3546__auto____156147;
}
}),args);
} else
{return and__3546__auto____156146;
}
})());
};
var G__156181 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156181__delegate.call(this, x, y, z, args);
};
G__156181.cljs$lang$maxFixedArity = 3;
G__156181.cljs$lang$applyTo = (function (arglist__156182){
var x = cljs.core.first(arglist__156182);
var y = cljs.core.first(cljs.core.next(arglist__156182));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156182)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156182)));
return G__156181__delegate.call(this, x, y, z, args);
});
return G__156181;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__156175.call(this);
case  1 :
return ep3__156176.call(this,x);
case  2 :
return ep3__156177.call(this,x,y);
case  3 :
return ep3__156178.call(this,x,y,z);
default:
return ep3__156179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__156179.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__156157 = (function() { 
var G__156183__delegate = function (p1,p2,p3,ps){
var ps__156149 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__156184 = (function (){
return true;
});
var epn__156185 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__156102_SHARP_){
return p1__156102_SHARP_.call(null,x);
}),ps__156149);
});
var epn__156186 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__156103_SHARP_){
var and__3546__auto____156150 = p1__156103_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____156150))
{return p1__156103_SHARP_.call(null,y);
} else
{return and__3546__auto____156150;
}
}),ps__156149);
});
var epn__156187 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__156104_SHARP_){
var and__3546__auto____156151 = p1__156104_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____156151))
{var and__3546__auto____156152 = p1__156104_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____156152))
{return p1__156104_SHARP_.call(null,z);
} else
{return and__3546__auto____156152;
}
} else
{return and__3546__auto____156151;
}
}),ps__156149);
});
var epn__156188 = (function() { 
var G__156190__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____156153 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____156153))
{return cljs.core.every_QMARK_.call(null,(function (p1__156105_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__156105_SHARP_,args);
}),ps__156149);
} else
{return and__3546__auto____156153;
}
})());
};
var G__156190 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156190__delegate.call(this, x, y, z, args);
};
G__156190.cljs$lang$maxFixedArity = 3;
G__156190.cljs$lang$applyTo = (function (arglist__156191){
var x = cljs.core.first(arglist__156191);
var y = cljs.core.first(cljs.core.next(arglist__156191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156191)));
return G__156190__delegate.call(this, x, y, z, args);
});
return G__156190;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__156184.call(this);
case  1 :
return epn__156185.call(this,x);
case  2 :
return epn__156186.call(this,x,y);
case  3 :
return epn__156187.call(this,x,y,z);
default:
return epn__156188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__156188.cljs$lang$applyTo;
return epn;
})()
};
var G__156183 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156183__delegate.call(this, p1, p2, p3, ps);
};
G__156183.cljs$lang$maxFixedArity = 3;
G__156183.cljs$lang$applyTo = (function (arglist__156192){
var p1 = cljs.core.first(arglist__156192);
var p2 = cljs.core.first(cljs.core.next(arglist__156192));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156192)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156192)));
return G__156183__delegate.call(this, p1, p2, p3, ps);
});
return G__156183;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__156154.call(this,p1);
case  2 :
return every_pred__156155.call(this,p1,p2);
case  3 :
return every_pred__156156.call(this,p1,p2,p3);
default:
return every_pred__156157.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__156157.cljs$lang$applyTo;
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
var some_fn__156232 = (function (p){
return (function() {
var sp1 = null;
var sp1__156237 = (function (){
return null;
});
var sp1__156238 = (function (x){
return p.call(null,x);
});
var sp1__156239 = (function (x,y){
var or__3548__auto____156194 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____156194))
{return or__3548__auto____156194;
} else
{return p.call(null,y);
}
});
var sp1__156240 = (function (x,y,z){
var or__3548__auto____156195 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____156195))
{return or__3548__auto____156195;
} else
{var or__3548__auto____156196 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____156196))
{return or__3548__auto____156196;
} else
{return p.call(null,z);
}
}
});
var sp1__156241 = (function() { 
var G__156243__delegate = function (x,y,z,args){
var or__3548__auto____156197 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____156197))
{return or__3548__auto____156197;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__156243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156243__delegate.call(this, x, y, z, args);
};
G__156243.cljs$lang$maxFixedArity = 3;
G__156243.cljs$lang$applyTo = (function (arglist__156244){
var x = cljs.core.first(arglist__156244);
var y = cljs.core.first(cljs.core.next(arglist__156244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156244)));
return G__156243__delegate.call(this, x, y, z, args);
});
return G__156243;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__156237.call(this);
case  1 :
return sp1__156238.call(this,x);
case  2 :
return sp1__156239.call(this,x,y);
case  3 :
return sp1__156240.call(this,x,y,z);
default:
return sp1__156241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__156241.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__156233 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__156245 = (function (){
return null;
});
var sp2__156246 = (function (x){
var or__3548__auto____156198 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156198))
{return or__3548__auto____156198;
} else
{return p2.call(null,x);
}
});
var sp2__156247 = (function (x,y){
var or__3548__auto____156199 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156199))
{return or__3548__auto____156199;
} else
{var or__3548__auto____156200 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____156200))
{return or__3548__auto____156200;
} else
{var or__3548__auto____156201 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156201))
{return or__3548__auto____156201;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__156248 = (function (x,y,z){
var or__3548__auto____156202 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156202))
{return or__3548__auto____156202;
} else
{var or__3548__auto____156203 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____156203))
{return or__3548__auto____156203;
} else
{var or__3548__auto____156204 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____156204))
{return or__3548__auto____156204;
} else
{var or__3548__auto____156205 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156205))
{return or__3548__auto____156205;
} else
{var or__3548__auto____156206 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____156206))
{return or__3548__auto____156206;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__156249 = (function() { 
var G__156251__delegate = function (x,y,z,args){
var or__3548__auto____156207 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____156207))
{return or__3548__auto____156207;
} else
{return cljs.core.some.call(null,(function (p1__156110_SHARP_){
var or__3548__auto____156208 = p1.call(null,p1__156110_SHARP_);

if(cljs.core.truth_(or__3548__auto____156208))
{return or__3548__auto____156208;
} else
{return p2.call(null,p1__156110_SHARP_);
}
}),args);
}
};
var G__156251 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156251__delegate.call(this, x, y, z, args);
};
G__156251.cljs$lang$maxFixedArity = 3;
G__156251.cljs$lang$applyTo = (function (arglist__156252){
var x = cljs.core.first(arglist__156252);
var y = cljs.core.first(cljs.core.next(arglist__156252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156252)));
return G__156251__delegate.call(this, x, y, z, args);
});
return G__156251;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__156245.call(this);
case  1 :
return sp2__156246.call(this,x);
case  2 :
return sp2__156247.call(this,x,y);
case  3 :
return sp2__156248.call(this,x,y,z);
default:
return sp2__156249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__156249.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__156234 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__156253 = (function (){
return null;
});
var sp3__156254 = (function (x){
var or__3548__auto____156209 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156209))
{return or__3548__auto____156209;
} else
{var or__3548__auto____156210 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156210))
{return or__3548__auto____156210;
} else
{return p3.call(null,x);
}
}
});
var sp3__156255 = (function (x,y){
var or__3548__auto____156211 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156211))
{return or__3548__auto____156211;
} else
{var or__3548__auto____156212 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156212))
{return or__3548__auto____156212;
} else
{var or__3548__auto____156213 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____156213))
{return or__3548__auto____156213;
} else
{var or__3548__auto____156214 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____156214))
{return or__3548__auto____156214;
} else
{var or__3548__auto____156215 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____156215))
{return or__3548__auto____156215;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__156256 = (function (x,y,z){
var or__3548__auto____156216 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156216))
{return or__3548__auto____156216;
} else
{var or__3548__auto____156217 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156217))
{return or__3548__auto____156217;
} else
{var or__3548__auto____156218 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____156218))
{return or__3548__auto____156218;
} else
{var or__3548__auto____156219 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____156219))
{return or__3548__auto____156219;
} else
{var or__3548__auto____156220 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____156220))
{return or__3548__auto____156220;
} else
{var or__3548__auto____156221 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____156221))
{return or__3548__auto____156221;
} else
{var or__3548__auto____156222 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____156222))
{return or__3548__auto____156222;
} else
{var or__3548__auto____156223 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____156223))
{return or__3548__auto____156223;
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
var sp3__156257 = (function() { 
var G__156259__delegate = function (x,y,z,args){
var or__3548__auto____156224 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____156224))
{return or__3548__auto____156224;
} else
{return cljs.core.some.call(null,(function (p1__156111_SHARP_){
var or__3548__auto____156225 = p1.call(null,p1__156111_SHARP_);

if(cljs.core.truth_(or__3548__auto____156225))
{return or__3548__auto____156225;
} else
{var or__3548__auto____156226 = p2.call(null,p1__156111_SHARP_);

if(cljs.core.truth_(or__3548__auto____156226))
{return or__3548__auto____156226;
} else
{return p3.call(null,p1__156111_SHARP_);
}
}
}),args);
}
};
var G__156259 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156259__delegate.call(this, x, y, z, args);
};
G__156259.cljs$lang$maxFixedArity = 3;
G__156259.cljs$lang$applyTo = (function (arglist__156260){
var x = cljs.core.first(arglist__156260);
var y = cljs.core.first(cljs.core.next(arglist__156260));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156260)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156260)));
return G__156259__delegate.call(this, x, y, z, args);
});
return G__156259;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__156253.call(this);
case  1 :
return sp3__156254.call(this,x);
case  2 :
return sp3__156255.call(this,x,y);
case  3 :
return sp3__156256.call(this,x,y,z);
default:
return sp3__156257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__156257.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__156235 = (function() { 
var G__156261__delegate = function (p1,p2,p3,ps){
var ps__156227 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__156262 = (function (){
return null;
});
var spn__156263 = (function (x){
return cljs.core.some.call(null,(function (p1__156112_SHARP_){
return p1__156112_SHARP_.call(null,x);
}),ps__156227);
});
var spn__156264 = (function (x,y){
return cljs.core.some.call(null,(function (p1__156113_SHARP_){
var or__3548__auto____156228 = p1__156113_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____156228))
{return or__3548__auto____156228;
} else
{return p1__156113_SHARP_.call(null,y);
}
}),ps__156227);
});
var spn__156265 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__156114_SHARP_){
var or__3548__auto____156229 = p1__156114_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____156229))
{return or__3548__auto____156229;
} else
{var or__3548__auto____156230 = p1__156114_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____156230))
{return or__3548__auto____156230;
} else
{return p1__156114_SHARP_.call(null,z);
}
}
}),ps__156227);
});
var spn__156266 = (function() { 
var G__156268__delegate = function (x,y,z,args){
var or__3548__auto____156231 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____156231))
{return or__3548__auto____156231;
} else
{return cljs.core.some.call(null,(function (p1__156115_SHARP_){
return cljs.core.some.call(null,p1__156115_SHARP_,args);
}),ps__156227);
}
};
var G__156268 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156268__delegate.call(this, x, y, z, args);
};
G__156268.cljs$lang$maxFixedArity = 3;
G__156268.cljs$lang$applyTo = (function (arglist__156269){
var x = cljs.core.first(arglist__156269);
var y = cljs.core.first(cljs.core.next(arglist__156269));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156269)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156269)));
return G__156268__delegate.call(this, x, y, z, args);
});
return G__156268;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__156262.call(this);
case  1 :
return spn__156263.call(this,x);
case  2 :
return spn__156264.call(this,x,y);
case  3 :
return spn__156265.call(this,x,y,z);
default:
return spn__156266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__156266.cljs$lang$applyTo;
return spn;
})()
};
var G__156261 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156261__delegate.call(this, p1, p2, p3, ps);
};
G__156261.cljs$lang$maxFixedArity = 3;
G__156261.cljs$lang$applyTo = (function (arglist__156270){
var p1 = cljs.core.first(arglist__156270);
var p2 = cljs.core.first(cljs.core.next(arglist__156270));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156270)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156270)));
return G__156261__delegate.call(this, p1, p2, p3, ps);
});
return G__156261;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__156232.call(this,p1);
case  2 :
return some_fn__156233.call(this,p1,p2);
case  3 :
return some_fn__156234.call(this,p1,p2,p3);
default:
return some_fn__156235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__156235.cljs$lang$applyTo;
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
var map__156283 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156271 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156271))
{var s__156272 = temp__3698__auto____156271;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__156272)),map.call(null,f,cljs.core.rest.call(null,s__156272)));
} else
{return null;
}
})));
});
var map__156284 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__156273 = cljs.core.seq.call(null,c1);
var s2__156274 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____156275 = s1__156273;

if(cljs.core.truth_(and__3546__auto____156275))
{return s2__156274;
} else
{return and__3546__auto____156275;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__156273),cljs.core.first.call(null,s2__156274)),map.call(null,f,cljs.core.rest.call(null,s1__156273),cljs.core.rest.call(null,s2__156274)));
} else
{return null;
}
})));
});
var map__156285 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__156276 = cljs.core.seq.call(null,c1);
var s2__156277 = cljs.core.seq.call(null,c2);
var s3__156278 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____156279 = s1__156276;

if(cljs.core.truth_(and__3546__auto____156279))
{var and__3546__auto____156280 = s2__156277;

if(cljs.core.truth_(and__3546__auto____156280))
{return s3__156278;
} else
{return and__3546__auto____156280;
}
} else
{return and__3546__auto____156279;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__156276),cljs.core.first.call(null,s2__156277),cljs.core.first.call(null,s3__156278)),map.call(null,f,cljs.core.rest.call(null,s1__156276),cljs.core.rest.call(null,s2__156277),cljs.core.rest.call(null,s3__156278)));
} else
{return null;
}
})));
});
var map__156286 = (function() { 
var G__156288__delegate = function (f,c1,c2,c3,colls){
var step__156282 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__156281 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__156281)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__156281),step.call(null,map.call(null,cljs.core.rest,ss__156281)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__156193_SHARP_){
return cljs.core.apply.call(null,f,p1__156193_SHARP_);
}),step__156282.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__156288 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__156288__delegate.call(this, f, c1, c2, c3, colls);
};
G__156288.cljs$lang$maxFixedArity = 4;
G__156288.cljs$lang$applyTo = (function (arglist__156289){
var f = cljs.core.first(arglist__156289);
var c1 = cljs.core.first(cljs.core.next(arglist__156289));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156289)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156289))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156289))));
return G__156288__delegate.call(this, f, c1, c2, c3, colls);
});
return G__156288;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__156283.call(this,f,c1);
case  3 :
return map__156284.call(this,f,c1,c2);
case  4 :
return map__156285.call(this,f,c1,c2,c3);
default:
return map__156286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__156286.cljs$lang$applyTo;
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
{var temp__3698__auto____156290 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156290))
{var s__156291 = temp__3698__auto____156290;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__156291),take.call(null,(n - 1),cljs.core.rest.call(null,s__156291)));
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
var step__156294 = (function (n,coll){
while(true){
var s__156292 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____156293 = (n > 0);

if(cljs.core.truth_(and__3546__auto____156293))
{return s__156292;
} else
{return and__3546__auto____156293;
}
})()))
{{
var G__156295 = (n - 1);
var G__156296 = cljs.core.rest.call(null,s__156292);
n = G__156295;
coll = G__156296;
continue;
}
} else
{return s__156292;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__156294.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__156297 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__156298 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__156297.call(this,n);
case  2 :
return drop_last__156298.call(this,n,s);
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
var s__156300 = cljs.core.seq.call(null,coll);
var lead__156301 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__156301))
{{
var G__156302 = cljs.core.next.call(null,s__156300);
var G__156303 = cljs.core.next.call(null,lead__156301);
s__156300 = G__156302;
lead__156301 = G__156303;
continue;
}
} else
{return s__156300;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__156306 = (function (pred,coll){
while(true){
var s__156304 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____156305 = s__156304;

if(cljs.core.truth_(and__3546__auto____156305))
{return pred.call(null,cljs.core.first.call(null,s__156304));
} else
{return and__3546__auto____156305;
}
})()))
{{
var G__156307 = pred;
var G__156308 = cljs.core.rest.call(null,s__156304);
pred = G__156307;
coll = G__156308;
continue;
}
} else
{return s__156304;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__156306.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156309 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156309))
{var s__156310 = temp__3698__auto____156309;

return cljs.core.concat.call(null,s__156310,cycle.call(null,s__156310));
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
var repeat__156311 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__156312 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__156311.call(this,n);
case  2 :
return repeat__156312.call(this,n,x);
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
var repeatedly__156314 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__156315 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__156314.call(this,n);
case  2 :
return repeatedly__156315.call(this,n,f);
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
var interleave__156321 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__156317 = cljs.core.seq.call(null,c1);
var s2__156318 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____156319 = s1__156317;

if(cljs.core.truth_(and__3546__auto____156319))
{return s2__156318;
} else
{return and__3546__auto____156319;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__156317),cljs.core.cons.call(null,cljs.core.first.call(null,s2__156318),interleave.call(null,cljs.core.rest.call(null,s1__156317),cljs.core.rest.call(null,s2__156318))));
} else
{return null;
}
})));
});
var interleave__156322 = (function() { 
var G__156324__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__156320 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__156320)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__156320),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__156320)));
} else
{return null;
}
})));
};
var G__156324 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__156324__delegate.call(this, c1, c2, colls);
};
G__156324.cljs$lang$maxFixedArity = 2;
G__156324.cljs$lang$applyTo = (function (arglist__156325){
var c1 = cljs.core.first(arglist__156325);
var c2 = cljs.core.first(cljs.core.next(arglist__156325));
var colls = cljs.core.rest(cljs.core.next(arglist__156325));
return G__156324__delegate.call(this, c1, c2, colls);
});
return G__156324;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__156321.call(this,c1,c2);
default:
return interleave__156322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__156322.cljs$lang$applyTo;
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
var cat__156328 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____156326 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____156326))
{var coll__156327 = temp__3695__auto____156326;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__156327),cat.call(null,cljs.core.rest.call(null,coll__156327),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__156328.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__156329 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__156330 = (function() { 
var G__156332__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__156332 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__156332__delegate.call(this, f, coll, colls);
};
G__156332.cljs$lang$maxFixedArity = 2;
G__156332.cljs$lang$applyTo = (function (arglist__156333){
var f = cljs.core.first(arglist__156333);
var coll = cljs.core.first(cljs.core.next(arglist__156333));
var colls = cljs.core.rest(cljs.core.next(arglist__156333));
return G__156332__delegate.call(this, f, coll, colls);
});
return G__156332;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__156329.call(this,f,coll);
default:
return mapcat__156330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__156330.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156334 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156334))
{var s__156335 = temp__3698__auto____156334;

var f__156336 = cljs.core.first.call(null,s__156335);
var r__156337 = cljs.core.rest.call(null,s__156335);

if(cljs.core.truth_(pred.call(null,f__156336)))
{return cljs.core.cons.call(null,f__156336,filter.call(null,pred,r__156337));
} else
{return filter.call(null,pred,r__156337);
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
var walk__156339 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__156339.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__156338_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__156338_SHARP_));
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
var partition__156346 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__156347 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156340 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156340))
{var s__156341 = temp__3698__auto____156340;

var p__156342 = cljs.core.take.call(null,n,s__156341);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__156342))))
{return cljs.core.cons.call(null,p__156342,partition.call(null,n,step,cljs.core.drop.call(null,step,s__156341)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__156348 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156343 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156343))
{var s__156344 = temp__3698__auto____156343;

var p__156345 = cljs.core.take.call(null,n,s__156344);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__156345))))
{return cljs.core.cons.call(null,p__156345,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__156344)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__156345,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__156346.call(this,n,step);
case  3 :
return partition__156347.call(this,n,step,pad);
case  4 :
return partition__156348.call(this,n,step,pad,coll);
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
var get_in__156354 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__156355 = (function (m,ks,not_found){
var sentinel__156350 = cljs.core.lookup_sentinel;
var m__156351 = m;
var ks__156352 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__156352))
{var m__156353 = cljs.core.get.call(null,m__156351,cljs.core.first.call(null,ks__156352),sentinel__156350);

if(cljs.core.truth_((sentinel__156350 === m__156353)))
{return not_found;
} else
{{
var G__156357 = sentinel__156350;
var G__156358 = m__156353;
var G__156359 = cljs.core.next.call(null,ks__156352);
sentinel__156350 = G__156357;
m__156351 = G__156358;
ks__156352 = G__156359;
continue;
}
}
} else
{return m__156351;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__156354.call(this,m,ks);
case  3 :
return get_in__156355.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__156360,v){
var vec__156361__156362 = p__156360;
var k__156363 = cljs.core.nth.call(null,vec__156361__156362,0,null);
var ks__156364 = cljs.core.nthnext.call(null,vec__156361__156362,1);

if(cljs.core.truth_(ks__156364))
{return cljs.core.assoc.call(null,m,k__156363,assoc_in.call(null,cljs.core.get.call(null,m,k__156363),ks__156364,v));
} else
{return cljs.core.assoc.call(null,m,k__156363,v);
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
var update_in__delegate = function (m,p__156365,f,args){
var vec__156366__156367 = p__156365;
var k__156368 = cljs.core.nth.call(null,vec__156366__156367,0,null);
var ks__156369 = cljs.core.nthnext.call(null,vec__156366__156367,1);

if(cljs.core.truth_(ks__156369))
{return cljs.core.assoc.call(null,m,k__156368,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__156368),ks__156369,f,args));
} else
{return cljs.core.assoc.call(null,m,k__156368,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__156368),args));
}
};
var update_in = function (m,p__156365,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__156365, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__156370){
var m = cljs.core.first(arglist__156370);
var p__156365 = cljs.core.first(cljs.core.next(arglist__156370));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156370)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156370)));
return update_in__delegate.call(this, m, p__156365, f, args);
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
var this__156371 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156404 = null;
var G__156404__156405 = (function (coll,k){
var this__156372 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__156404__156406 = (function (coll,k,not_found){
var this__156373 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__156404 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__156404__156405.call(this,coll,k);
case  3 :
return G__156404__156406.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156404;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__156374 = this;
var new_array__156375 = cljs.core.aclone.call(null,this__156374.array);

(new_array__156375[k] = v);
return (new cljs.core.Vector(this__156374.meta,new_array__156375));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__156408 = null;
var G__156408__156409 = (function (tsym156376,k){
var this__156378 = this;
var tsym156376__156379 = this;

var coll__156380 = tsym156376__156379;

return cljs.core._lookup.call(null,coll__156380,k);
});
var G__156408__156410 = (function (tsym156377,k,not_found){
var this__156381 = this;
var tsym156377__156382 = this;

var coll__156383 = tsym156377__156382;

return cljs.core._lookup.call(null,coll__156383,k,not_found);
});
G__156408 = function(tsym156377,k,not_found){
switch(arguments.length){
case  2 :
return G__156408__156409.call(this,tsym156377,k);
case  3 :
return G__156408__156410.call(this,tsym156377,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156408;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156384 = this;
var new_array__156385 = cljs.core.aclone.call(null,this__156384.array);

new_array__156385.push(o);
return (new cljs.core.Vector(this__156384.meta,new_array__156385));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__156412 = null;
var G__156412__156413 = (function (v,f){
var this__156386 = this;
return cljs.core.ci_reduce.call(null,this__156386.array,f);
});
var G__156412__156414 = (function (v,f,start){
var this__156387 = this;
return cljs.core.ci_reduce.call(null,this__156387.array,f,start);
});
G__156412 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__156412__156413.call(this,v,f);
case  3 :
return G__156412__156414.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156412;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156388 = this;
if(cljs.core.truth_((this__156388.array.length > 0)))
{var vector_seq__156389 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__156388.array.length)))
{return cljs.core.cons.call(null,(this__156388.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__156389.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156390 = this;
return this__156390.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__156391 = this;
var count__156392 = this__156391.array.length;

if(cljs.core.truth_((count__156392 > 0)))
{return (this__156391.array[(count__156392 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__156393 = this;
if(cljs.core.truth_((this__156393.array.length > 0)))
{var new_array__156394 = cljs.core.aclone.call(null,this__156393.array);

new_array__156394.pop();
return (new cljs.core.Vector(this__156393.meta,new_array__156394));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__156395 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156396 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156397 = this;
return (new cljs.core.Vector(meta,this__156397.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156398 = this;
return this__156398.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__156416 = null;
var G__156416__156417 = (function (coll,n){
var this__156399 = this;
if(cljs.core.truth_((function (){var and__3546__auto____156400 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____156400))
{return (n < this__156399.array.length);
} else
{return and__3546__auto____156400;
}
})()))
{return (this__156399.array[n]);
} else
{return null;
}
});
var G__156416__156418 = (function (coll,n,not_found){
var this__156401 = this;
if(cljs.core.truth_((function (){var and__3546__auto____156402 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____156402))
{return (n < this__156401.array.length);
} else
{return and__3546__auto____156402;
}
})()))
{return (this__156401.array[n]);
} else
{return not_found;
}
});
G__156416 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__156416__156417.call(this,coll,n);
case  3 :
return G__156416__156418.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156416;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156403 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__156403.meta);
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
vector.cljs$lang$applyTo = (function (arglist__156420){
var args = cljs.core.seq( arglist__156420 );;
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
var this__156421 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156449 = null;
var G__156449__156450 = (function (coll,k){
var this__156422 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__156449__156451 = (function (coll,k,not_found){
var this__156423 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__156449 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__156449__156450.call(this,coll,k);
case  3 :
return G__156449__156451.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156449;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__156424 = this;
var v_pos__156425 = (this__156424.start + key);

return (new cljs.core.Subvec(this__156424.meta,cljs.core._assoc.call(null,this__156424.v,v_pos__156425,val),this__156424.start,((this__156424.end > (v_pos__156425 + 1)) ? this__156424.end : (v_pos__156425 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__156453 = null;
var G__156453__156454 = (function (tsym156426,k){
var this__156428 = this;
var tsym156426__156429 = this;

var coll__156430 = tsym156426__156429;

return cljs.core._lookup.call(null,coll__156430,k);
});
var G__156453__156455 = (function (tsym156427,k,not_found){
var this__156431 = this;
var tsym156427__156432 = this;

var coll__156433 = tsym156427__156432;

return cljs.core._lookup.call(null,coll__156433,k,not_found);
});
G__156453 = function(tsym156427,k,not_found){
switch(arguments.length){
case  2 :
return G__156453__156454.call(this,tsym156427,k);
case  3 :
return G__156453__156455.call(this,tsym156427,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156453;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156434 = this;
return (new cljs.core.Subvec(this__156434.meta,cljs.core._assoc_n.call(null,this__156434.v,this__156434.end,o),this__156434.start,(this__156434.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__156457 = null;
var G__156457__156458 = (function (coll,f){
var this__156435 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__156457__156459 = (function (coll,f,start){
var this__156436 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__156457 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__156457__156458.call(this,coll,f);
case  3 :
return G__156457__156459.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156457;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156437 = this;
var subvec_seq__156438 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__156437.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__156437.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__156438.call(null,this__156437.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156439 = this;
return (this__156439.end - this__156439.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__156440 = this;
return cljs.core._nth.call(null,this__156440.v,(this__156440.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__156441 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__156441.start,this__156441.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__156441.meta,this__156441.v,this__156441.start,(this__156441.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__156442 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156443 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156444 = this;
return (new cljs.core.Subvec(meta,this__156444.v,this__156444.start,this__156444.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156445 = this;
return this__156445.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__156461 = null;
var G__156461__156462 = (function (coll,n){
var this__156446 = this;
return cljs.core._nth.call(null,this__156446.v,(this__156446.start + n));
});
var G__156461__156463 = (function (coll,n,not_found){
var this__156447 = this;
return cljs.core._nth.call(null,this__156447.v,(this__156447.start + n),not_found);
});
G__156461 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__156461__156462.call(this,coll,n);
case  3 :
return G__156461__156463.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156461;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156448 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__156448.meta);
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
var subvec__156465 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__156466 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__156465.call(this,v,start);
case  3 :
return subvec__156466.call(this,v,start,end);
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
var this__156468 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__156469 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156470 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156471 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__156471.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156472 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__156473 = this;
return cljs.core._first.call(null,this__156473.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__156474 = this;
var temp__3695__auto____156475 = cljs.core.next.call(null,this__156474.front);

if(cljs.core.truth_(temp__3695__auto____156475))
{var f1__156476 = temp__3695__auto____156475;

return (new cljs.core.PersistentQueueSeq(this__156474.meta,f1__156476,this__156474.rear));
} else
{if(cljs.core.truth_((this__156474.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__156474.meta,this__156474.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156477 = this;
return this__156477.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156478 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__156478.front,this__156478.rear));
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
var this__156479 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156480 = this;
if(cljs.core.truth_(this__156480.front))
{return (new cljs.core.PersistentQueue(this__156480.meta,(this__156480.count + 1),this__156480.front,cljs.core.conj.call(null,(function (){var or__3548__auto____156481 = this__156480.rear;

if(cljs.core.truth_(or__3548__auto____156481))
{return or__3548__auto____156481;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__156480.meta,(this__156480.count + 1),cljs.core.conj.call(null,this__156480.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156482 = this;
var rear__156483 = cljs.core.seq.call(null,this__156482.rear);

if(cljs.core.truth_((function (){var or__3548__auto____156484 = this__156482.front;

if(cljs.core.truth_(or__3548__auto____156484))
{return or__3548__auto____156484;
} else
{return rear__156483;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__156482.front,cljs.core.seq.call(null,rear__156483)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156485 = this;
return this__156485.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__156486 = this;
return cljs.core._first.call(null,this__156486.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__156487 = this;
if(cljs.core.truth_(this__156487.front))
{var temp__3695__auto____156488 = cljs.core.next.call(null,this__156487.front);

if(cljs.core.truth_(temp__3695__auto____156488))
{var f1__156489 = temp__3695__auto____156488;

return (new cljs.core.PersistentQueue(this__156487.meta,(this__156487.count - 1),f1__156489,this__156487.rear));
} else
{return (new cljs.core.PersistentQueue(this__156487.meta,(this__156487.count - 1),cljs.core.seq.call(null,this__156487.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__156490 = this;
return cljs.core.first.call(null,this__156490.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__156491 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156492 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156493 = this;
return (new cljs.core.PersistentQueue(meta,this__156493.count,this__156493.front,this__156493.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156494 = this;
return this__156494.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156495 = this;
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
var this__156496 = this;
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
var len__156497 = array.length;

var i__156498 = 0;

while(true){
if(cljs.core.truth_((i__156498 < len__156497)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__156498]))))
{return i__156498;
} else
{{
var G__156499 = (i__156498 + incr);
i__156498 = G__156499;
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
var obj_map_contains_key_QMARK___156501 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___156502 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____156500 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____156500))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____156500;
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
return obj_map_contains_key_QMARK___156501.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___156502.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__156505 = cljs.core.hash.call(null,a);
var b__156506 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__156505 < b__156506)))
{return -1;
} else
{if(cljs.core.truth_((a__156505 > b__156506)))
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
var this__156507 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156534 = null;
var G__156534__156535 = (function (coll,k){
var this__156508 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__156534__156536 = (function (coll,k,not_found){
var this__156509 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__156509.strobj,(this__156509.strobj[k]),not_found);
});
G__156534 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__156534__156535.call(this,coll,k);
case  3 :
return G__156534__156536.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156534;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__156510 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__156511 = goog.object.clone.call(null,this__156510.strobj);
var overwrite_QMARK___156512 = new_strobj__156511.hasOwnProperty(k);

(new_strobj__156511[k] = v);
if(cljs.core.truth_(overwrite_QMARK___156512))
{return (new cljs.core.ObjMap(this__156510.meta,this__156510.keys,new_strobj__156511));
} else
{var new_keys__156513 = cljs.core.aclone.call(null,this__156510.keys);

new_keys__156513.push(k);
return (new cljs.core.ObjMap(this__156510.meta,new_keys__156513,new_strobj__156511));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__156510.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__156514 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__156514.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__156538 = null;
var G__156538__156539 = (function (tsym156515,k){
var this__156517 = this;
var tsym156515__156518 = this;

var coll__156519 = tsym156515__156518;

return cljs.core._lookup.call(null,coll__156519,k);
});
var G__156538__156540 = (function (tsym156516,k,not_found){
var this__156520 = this;
var tsym156516__156521 = this;

var coll__156522 = tsym156516__156521;

return cljs.core._lookup.call(null,coll__156522,k,not_found);
});
G__156538 = function(tsym156516,k,not_found){
switch(arguments.length){
case  2 :
return G__156538__156539.call(this,tsym156516,k);
case  3 :
return G__156538__156540.call(this,tsym156516,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156538;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__156523 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156524 = this;
if(cljs.core.truth_((this__156524.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__156504_SHARP_){
return cljs.core.vector.call(null,p1__156504_SHARP_,(this__156524.strobj[p1__156504_SHARP_]));
}),this__156524.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156525 = this;
return this__156525.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156526 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156527 = this;
return (new cljs.core.ObjMap(meta,this__156527.keys,this__156527.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156528 = this;
return this__156528.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156529 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__156529.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__156530 = this;
if(cljs.core.truth_((function (){var and__3546__auto____156531 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____156531))
{return this__156530.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____156531;
}
})()))
{var new_keys__156532 = cljs.core.aclone.call(null,this__156530.keys);
var new_strobj__156533 = goog.object.clone.call(null,this__156530.strobj);

new_keys__156532.splice(cljs.core.scan_array.call(null,1,k,new_keys__156532),1);
cljs.core.js_delete.call(null,new_strobj__156533,k);
return (new cljs.core.ObjMap(this__156530.meta,new_keys__156532,new_strobj__156533));
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
var this__156543 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156581 = null;
var G__156581__156582 = (function (coll,k){
var this__156544 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__156581__156583 = (function (coll,k,not_found){
var this__156545 = this;
var bucket__156546 = (this__156545.hashobj[cljs.core.hash.call(null,k)]);
var i__156547 = (cljs.core.truth_(bucket__156546)?cljs.core.scan_array.call(null,2,k,bucket__156546):null);

if(cljs.core.truth_(i__156547))
{return (bucket__156546[(i__156547 + 1)]);
} else
{return not_found;
}
});
G__156581 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__156581__156582.call(this,coll,k);
case  3 :
return G__156581__156583.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156581;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__156548 = this;
var h__156549 = cljs.core.hash.call(null,k);
var bucket__156550 = (this__156548.hashobj[h__156549]);

if(cljs.core.truth_(bucket__156550))
{var new_bucket__156551 = cljs.core.aclone.call(null,bucket__156550);
var new_hashobj__156552 = goog.object.clone.call(null,this__156548.hashobj);

(new_hashobj__156552[h__156549] = new_bucket__156551);
var temp__3695__auto____156553 = cljs.core.scan_array.call(null,2,k,new_bucket__156551);

if(cljs.core.truth_(temp__3695__auto____156553))
{var i__156554 = temp__3695__auto____156553;

(new_bucket__156551[(i__156554 + 1)] = v);
return (new cljs.core.HashMap(this__156548.meta,this__156548.count,new_hashobj__156552));
} else
{new_bucket__156551.push(k,v);
return (new cljs.core.HashMap(this__156548.meta,(this__156548.count + 1),new_hashobj__156552));
}
} else
{var new_hashobj__156555 = goog.object.clone.call(null,this__156548.hashobj);

(new_hashobj__156555[h__156549] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__156548.meta,(this__156548.count + 1),new_hashobj__156555));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__156556 = this;
var bucket__156557 = (this__156556.hashobj[cljs.core.hash.call(null,k)]);
var i__156558 = (cljs.core.truth_(bucket__156557)?cljs.core.scan_array.call(null,2,k,bucket__156557):null);

if(cljs.core.truth_(i__156558))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__156585 = null;
var G__156585__156586 = (function (tsym156559,k){
var this__156561 = this;
var tsym156559__156562 = this;

var coll__156563 = tsym156559__156562;

return cljs.core._lookup.call(null,coll__156563,k);
});
var G__156585__156587 = (function (tsym156560,k,not_found){
var this__156564 = this;
var tsym156560__156565 = this;

var coll__156566 = tsym156560__156565;

return cljs.core._lookup.call(null,coll__156566,k,not_found);
});
G__156585 = function(tsym156560,k,not_found){
switch(arguments.length){
case  2 :
return G__156585__156586.call(this,tsym156560,k);
case  3 :
return G__156585__156587.call(this,tsym156560,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156585;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__156567 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156568 = this;
if(cljs.core.truth_((this__156568.count > 0)))
{var hashes__156569 = cljs.core.js_keys.call(null,this__156568.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__156542_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__156568.hashobj[p1__156542_SHARP_])));
}),hashes__156569);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156570 = this;
return this__156570.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156571 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156572 = this;
return (new cljs.core.HashMap(meta,this__156572.count,this__156572.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156573 = this;
return this__156573.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156574 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__156574.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__156575 = this;
var h__156576 = cljs.core.hash.call(null,k);
var bucket__156577 = (this__156575.hashobj[h__156576]);
var i__156578 = (cljs.core.truth_(bucket__156577)?cljs.core.scan_array.call(null,2,k,bucket__156577):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__156578)))
{return coll;
} else
{var new_hashobj__156579 = goog.object.clone.call(null,this__156575.hashobj);

if(cljs.core.truth_((3 > bucket__156577.length)))
{cljs.core.js_delete.call(null,new_hashobj__156579,h__156576);
} else
{var new_bucket__156580 = cljs.core.aclone.call(null,bucket__156577);

new_bucket__156580.splice(i__156578,2);
(new_hashobj__156579[h__156576] = new_bucket__156580);
}
return (new cljs.core.HashMap(this__156575.meta,(this__156575.count - 1),new_hashobj__156579));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__156589 = ks.length;

var i__156590 = 0;
var out__156591 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__156590 < len__156589)))
{{
var G__156592 = (i__156590 + 1);
var G__156593 = cljs.core.assoc.call(null,out__156591,(ks[i__156590]),(vs[i__156590]));
i__156590 = G__156592;
out__156591 = G__156593;
continue;
}
} else
{return out__156591;
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
var in$__156594 = cljs.core.seq.call(null,keyvals);
var out__156595 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__156594))
{{
var G__156596 = cljs.core.nnext.call(null,in$__156594);
var G__156597 = cljs.core.assoc.call(null,out__156595,cljs.core.first.call(null,in$__156594),cljs.core.second.call(null,in$__156594));
in$__156594 = G__156596;
out__156595 = G__156597;
continue;
}
} else
{return out__156595;
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
hash_map.cljs$lang$applyTo = (function (arglist__156598){
var keyvals = cljs.core.seq( arglist__156598 );;
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
{return cljs.core.reduce.call(null,(function (p1__156599_SHARP_,p2__156600_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____156601 = p1__156599_SHARP_;

if(cljs.core.truth_(or__3548__auto____156601))
{return or__3548__auto____156601;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__156600_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__156602){
var maps = cljs.core.seq( arglist__156602 );;
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
{var merge_entry__156605 = (function (m,e){
var k__156603 = cljs.core.first.call(null,e);
var v__156604 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__156603)))
{return cljs.core.assoc.call(null,m,k__156603,f.call(null,cljs.core.get.call(null,m,k__156603),v__156604));
} else
{return cljs.core.assoc.call(null,m,k__156603,v__156604);
}
});
var merge2__156607 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__156605,(function (){var or__3548__auto____156606 = m1;

if(cljs.core.truth_(or__3548__auto____156606))
{return or__3548__auto____156606;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__156607,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__156608){
var f = cljs.core.first(arglist__156608);
var maps = cljs.core.rest(arglist__156608);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__156610 = cljs.core.ObjMap.fromObject([],{});
var keys__156611 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__156611))
{var key__156612 = cljs.core.first.call(null,keys__156611);
var entry__156613 = cljs.core.get.call(null,map,key__156612,"\uFDD0'user/not-found");

{
var G__156614 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__156613,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__156610,key__156612,entry__156613):ret__156610);
var G__156615 = cljs.core.next.call(null,keys__156611);
ret__156610 = G__156614;
keys__156611 = G__156615;
continue;
}
} else
{return ret__156610;
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
var this__156616 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156637 = null;
var G__156637__156638 = (function (coll,v){
var this__156617 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__156637__156639 = (function (coll,v,not_found){
var this__156618 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__156618.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__156637 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__156637__156638.call(this,coll,v);
case  3 :
return G__156637__156639.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156637;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__156641 = null;
var G__156641__156642 = (function (tsym156619,k){
var this__156621 = this;
var tsym156619__156622 = this;

var coll__156623 = tsym156619__156622;

return cljs.core._lookup.call(null,coll__156623,k);
});
var G__156641__156643 = (function (tsym156620,k,not_found){
var this__156624 = this;
var tsym156620__156625 = this;

var coll__156626 = tsym156620__156625;

return cljs.core._lookup.call(null,coll__156626,k,not_found);
});
G__156641 = function(tsym156620,k,not_found){
switch(arguments.length){
case  2 :
return G__156641__156642.call(this,tsym156620,k);
case  3 :
return G__156641__156643.call(this,tsym156620,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156641;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156627 = this;
return (new cljs.core.Set(this__156627.meta,cljs.core.assoc.call(null,this__156627.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156628 = this;
return cljs.core.keys.call(null,this__156628.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__156629 = this;
return (new cljs.core.Set(this__156629.meta,cljs.core.dissoc.call(null,this__156629.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156630 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156631 = this;
var and__3546__auto____156632 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____156632))
{var and__3546__auto____156633 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____156633))
{return cljs.core.every_QMARK_.call(null,(function (p1__156609_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__156609_SHARP_);
}),other);
} else
{return and__3546__auto____156633;
}
} else
{return and__3546__auto____156632;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156634 = this;
return (new cljs.core.Set(meta,this__156634.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156635 = this;
return this__156635.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156636 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__156636.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__156646 = cljs.core.seq.call(null,coll);
var out__156647 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__156646))))
{{
var G__156648 = cljs.core.rest.call(null,in$__156646);
var G__156649 = cljs.core.conj.call(null,out__156647,cljs.core.first.call(null,in$__156646));
in$__156646 = G__156648;
out__156647 = G__156649;
continue;
}
} else
{return out__156647;
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
{var n__156650 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____156651 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____156651))
{var e__156652 = temp__3695__auto____156651;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__156652));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__156650,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__156645_SHARP_){
var temp__3695__auto____156653 = cljs.core.find.call(null,smap,p1__156645_SHARP_);

if(cljs.core.truth_(temp__3695__auto____156653))
{var e__156654 = temp__3695__auto____156653;

return cljs.core.second.call(null,e__156654);
} else
{return p1__156645_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__156662 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__156655,seen){
while(true){
var vec__156656__156657 = p__156655;
var f__156658 = cljs.core.nth.call(null,vec__156656__156657,0,null);
var xs__156659 = vec__156656__156657;

var temp__3698__auto____156660 = cljs.core.seq.call(null,xs__156659);

if(cljs.core.truth_(temp__3698__auto____156660))
{var s__156661 = temp__3698__auto____156660;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__156658)))
{{
var G__156663 = cljs.core.rest.call(null,s__156661);
var G__156664 = seen;
p__156655 = G__156663;
seen = G__156664;
continue;
}
} else
{return cljs.core.cons.call(null,f__156658,step.call(null,cljs.core.rest.call(null,s__156661),cljs.core.conj.call(null,seen,f__156658)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__156662.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__156665 = cljs.core.Vector.fromArray([]);
var s__156666 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__156666)))
{{
var G__156667 = cljs.core.conj.call(null,ret__156665,cljs.core.first.call(null,s__156666));
var G__156668 = cljs.core.next.call(null,s__156666);
ret__156665 = G__156667;
s__156666 = G__156668;
continue;
}
} else
{return cljs.core.seq.call(null,ret__156665);
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
{if(cljs.core.truth_((function (){var or__3548__auto____156669 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____156669))
{return or__3548__auto____156669;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__156670 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__156670 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__156670 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____156671 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____156671))
{return or__3548__auto____156671;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__156672 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__156672 > -1)))
{return cljs.core.subs.call(null,x,2,i__156672);
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
var map__156675 = cljs.core.ObjMap.fromObject([],{});
var ks__156676 = cljs.core.seq.call(null,keys);
var vs__156677 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____156678 = ks__156676;

if(cljs.core.truth_(and__3546__auto____156678))
{return vs__156677;
} else
{return and__3546__auto____156678;
}
})()))
{{
var G__156679 = cljs.core.assoc.call(null,map__156675,cljs.core.first.call(null,ks__156676),cljs.core.first.call(null,vs__156677));
var G__156680 = cljs.core.next.call(null,ks__156676);
var G__156681 = cljs.core.next.call(null,vs__156677);
map__156675 = G__156679;
ks__156676 = G__156680;
vs__156677 = G__156681;
continue;
}
} else
{return map__156675;
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
var max_key__156684 = (function (k,x){
return x;
});
var max_key__156685 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__156686 = (function() { 
var G__156688__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__156673_SHARP_,p2__156674_SHARP_){
return max_key.call(null,k,p1__156673_SHARP_,p2__156674_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__156688 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156688__delegate.call(this, k, x, y, more);
};
G__156688.cljs$lang$maxFixedArity = 3;
G__156688.cljs$lang$applyTo = (function (arglist__156689){
var k = cljs.core.first(arglist__156689);
var x = cljs.core.first(cljs.core.next(arglist__156689));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156689)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156689)));
return G__156688__delegate.call(this, k, x, y, more);
});
return G__156688;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__156684.call(this,k,x);
case  3 :
return max_key__156685.call(this,k,x,y);
default:
return max_key__156686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__156686.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__156690 = (function (k,x){
return x;
});
var min_key__156691 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__156692 = (function() { 
var G__156694__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__156682_SHARP_,p2__156683_SHARP_){
return min_key.call(null,k,p1__156682_SHARP_,p2__156683_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__156694 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156694__delegate.call(this, k, x, y, more);
};
G__156694.cljs$lang$maxFixedArity = 3;
G__156694.cljs$lang$applyTo = (function (arglist__156695){
var k = cljs.core.first(arglist__156695);
var x = cljs.core.first(cljs.core.next(arglist__156695));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156695)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156695)));
return G__156694__delegate.call(this, k, x, y, more);
});
return G__156694;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__156690.call(this,k,x);
case  3 :
return min_key__156691.call(this,k,x,y);
default:
return min_key__156692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__156692.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__156698 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__156699 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156696 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156696))
{var s__156697 = temp__3698__auto____156696;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__156697),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__156697)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__156698.call(this,n,step);
case  3 :
return partition_all__156699.call(this,n,step,coll);
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
var temp__3698__auto____156701 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156701))
{var s__156702 = temp__3698__auto____156701;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__156702))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__156702),take_while.call(null,pred,cljs.core.rest.call(null,s__156702)));
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
var this__156703 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__156704 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__156720 = null;
var G__156720__156721 = (function (rng,f){
var this__156705 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__156720__156722 = (function (rng,f,s){
var this__156706 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__156720 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__156720__156721.call(this,rng,f);
case  3 :
return G__156720__156722.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156720;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__156707 = this;
var comp__156708 = (cljs.core.truth_((this__156707.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__156708.call(null,this__156707.start,this__156707.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__156709 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__156709.end - this__156709.start) / this__156709.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__156710 = this;
return this__156710.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__156711 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__156711.meta,(this__156711.start + this__156711.step),this__156711.end,this__156711.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__156712 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__156713 = this;
return (new cljs.core.Range(meta,this__156713.start,this__156713.end,this__156713.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__156714 = this;
return this__156714.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__156724 = null;
var G__156724__156725 = (function (rng,n){
var this__156715 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__156715.start + (n * this__156715.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____156716 = (this__156715.start > this__156715.end);

if(cljs.core.truth_(and__3546__auto____156716))
{return cljs.core._EQ_.call(null,this__156715.step,0);
} else
{return and__3546__auto____156716;
}
})()))
{return this__156715.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__156724__156726 = (function (rng,n,not_found){
var this__156717 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__156717.start + (n * this__156717.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____156718 = (this__156717.start > this__156717.end);

if(cljs.core.truth_(and__3546__auto____156718))
{return cljs.core._EQ_.call(null,this__156717.step,0);
} else
{return and__3546__auto____156718;
}
})()))
{return this__156717.start;
} else
{return not_found;
}
}
});
G__156724 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__156724__156725.call(this,rng,n);
case  3 :
return G__156724__156726.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156724;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__156719 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__156719.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__156728 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__156729 = (function (end){
return range.call(null,0,end,1);
});
var range__156730 = (function (start,end){
return range.call(null,start,end,1);
});
var range__156731 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__156728.call(this);
case  1 :
return range__156729.call(this,start);
case  2 :
return range__156730.call(this,start,end);
case  3 :
return range__156731.call(this,start,end,step);
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
var temp__3698__auto____156733 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156733))
{var s__156734 = temp__3698__auto____156733;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__156734),take_nth.call(null,n,cljs.core.drop.call(null,n,s__156734)));
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
var temp__3698__auto____156736 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156736))
{var s__156737 = temp__3698__auto____156736;

var fst__156738 = cljs.core.first.call(null,s__156737);
var fv__156739 = f.call(null,fst__156738);
var run__156740 = cljs.core.cons.call(null,fst__156738,cljs.core.take_while.call(null,(function (p1__156735_SHARP_){
return cljs.core._EQ_.call(null,fv__156739,f.call(null,p1__156735_SHARP_));
}),cljs.core.next.call(null,s__156737)));

return cljs.core.cons.call(null,run__156740,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__156740),s__156737))));
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
var reductions__156755 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____156751 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____156751))
{var s__156752 = temp__3695__auto____156751;

return reductions.call(null,f,cljs.core.first.call(null,s__156752),cljs.core.rest.call(null,s__156752));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__156756 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156753 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156753))
{var s__156754 = temp__3698__auto____156753;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__156754)),cljs.core.rest.call(null,s__156754));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__156755.call(this,f,init);
case  3 :
return reductions__156756.call(this,f,init,coll);
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
var juxt__156759 = (function (f){
return (function() {
var G__156764 = null;
var G__156764__156765 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__156764__156766 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__156764__156767 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__156764__156768 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__156764__156769 = (function() { 
var G__156771__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__156771 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156771__delegate.call(this, x, y, z, args);
};
G__156771.cljs$lang$maxFixedArity = 3;
G__156771.cljs$lang$applyTo = (function (arglist__156772){
var x = cljs.core.first(arglist__156772);
var y = cljs.core.first(cljs.core.next(arglist__156772));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156772)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156772)));
return G__156771__delegate.call(this, x, y, z, args);
});
return G__156771;
})()
;
G__156764 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156764__156765.call(this);
case  1 :
return G__156764__156766.call(this,x);
case  2 :
return G__156764__156767.call(this,x,y);
case  3 :
return G__156764__156768.call(this,x,y,z);
default:
return G__156764__156769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156764.cljs$lang$maxFixedArity = 3;
G__156764.cljs$lang$applyTo = G__156764__156769.cljs$lang$applyTo;
return G__156764;
})()
});
var juxt__156760 = (function (f,g){
return (function() {
var G__156773 = null;
var G__156773__156774 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__156773__156775 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__156773__156776 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__156773__156777 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__156773__156778 = (function() { 
var G__156780__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__156780 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156780__delegate.call(this, x, y, z, args);
};
G__156780.cljs$lang$maxFixedArity = 3;
G__156780.cljs$lang$applyTo = (function (arglist__156781){
var x = cljs.core.first(arglist__156781);
var y = cljs.core.first(cljs.core.next(arglist__156781));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156781)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156781)));
return G__156780__delegate.call(this, x, y, z, args);
});
return G__156780;
})()
;
G__156773 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156773__156774.call(this);
case  1 :
return G__156773__156775.call(this,x);
case  2 :
return G__156773__156776.call(this,x,y);
case  3 :
return G__156773__156777.call(this,x,y,z);
default:
return G__156773__156778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156773.cljs$lang$maxFixedArity = 3;
G__156773.cljs$lang$applyTo = G__156773__156778.cljs$lang$applyTo;
return G__156773;
})()
});
var juxt__156761 = (function (f,g,h){
return (function() {
var G__156782 = null;
var G__156782__156783 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__156782__156784 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__156782__156785 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__156782__156786 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__156782__156787 = (function() { 
var G__156789__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__156789 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156789__delegate.call(this, x, y, z, args);
};
G__156789.cljs$lang$maxFixedArity = 3;
G__156789.cljs$lang$applyTo = (function (arglist__156790){
var x = cljs.core.first(arglist__156790);
var y = cljs.core.first(cljs.core.next(arglist__156790));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156790)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156790)));
return G__156789__delegate.call(this, x, y, z, args);
});
return G__156789;
})()
;
G__156782 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156782__156783.call(this);
case  1 :
return G__156782__156784.call(this,x);
case  2 :
return G__156782__156785.call(this,x,y);
case  3 :
return G__156782__156786.call(this,x,y,z);
default:
return G__156782__156787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156782.cljs$lang$maxFixedArity = 3;
G__156782.cljs$lang$applyTo = G__156782__156787.cljs$lang$applyTo;
return G__156782;
})()
});
var juxt__156762 = (function() { 
var G__156791__delegate = function (f,g,h,fs){
var fs__156758 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__156792 = null;
var G__156792__156793 = (function (){
return cljs.core.reduce.call(null,(function (p1__156741_SHARP_,p2__156742_SHARP_){
return cljs.core.conj.call(null,p1__156741_SHARP_,p2__156742_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__156758);
});
var G__156792__156794 = (function (x){
return cljs.core.reduce.call(null,(function (p1__156743_SHARP_,p2__156744_SHARP_){
return cljs.core.conj.call(null,p1__156743_SHARP_,p2__156744_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__156758);
});
var G__156792__156795 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__156745_SHARP_,p2__156746_SHARP_){
return cljs.core.conj.call(null,p1__156745_SHARP_,p2__156746_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__156758);
});
var G__156792__156796 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__156747_SHARP_,p2__156748_SHARP_){
return cljs.core.conj.call(null,p1__156747_SHARP_,p2__156748_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__156758);
});
var G__156792__156797 = (function() { 
var G__156799__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__156749_SHARP_,p2__156750_SHARP_){
return cljs.core.conj.call(null,p1__156749_SHARP_,cljs.core.apply.call(null,p2__156750_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__156758);
};
var G__156799 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156799__delegate.call(this, x, y, z, args);
};
G__156799.cljs$lang$maxFixedArity = 3;
G__156799.cljs$lang$applyTo = (function (arglist__156800){
var x = cljs.core.first(arglist__156800);
var y = cljs.core.first(cljs.core.next(arglist__156800));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156800)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156800)));
return G__156799__delegate.call(this, x, y, z, args);
});
return G__156799;
})()
;
G__156792 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156792__156793.call(this);
case  1 :
return G__156792__156794.call(this,x);
case  2 :
return G__156792__156795.call(this,x,y);
case  3 :
return G__156792__156796.call(this,x,y,z);
default:
return G__156792__156797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156792.cljs$lang$maxFixedArity = 3;
G__156792.cljs$lang$applyTo = G__156792__156797.cljs$lang$applyTo;
return G__156792;
})()
};
var G__156791 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156791__delegate.call(this, f, g, h, fs);
};
G__156791.cljs$lang$maxFixedArity = 3;
G__156791.cljs$lang$applyTo = (function (arglist__156801){
var f = cljs.core.first(arglist__156801);
var g = cljs.core.first(cljs.core.next(arglist__156801));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156801)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156801)));
return G__156791__delegate.call(this, f, g, h, fs);
});
return G__156791;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__156759.call(this,f);
case  2 :
return juxt__156760.call(this,f,g);
case  3 :
return juxt__156761.call(this,f,g,h);
default:
return juxt__156762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__156762.cljs$lang$applyTo;
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
var dorun__156803 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__156806 = cljs.core.next.call(null,coll);
coll = G__156806;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__156804 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____156802 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____156802))
{return (n > 0);
} else
{return and__3546__auto____156802;
}
})()))
{{
var G__156807 = (n - 1);
var G__156808 = cljs.core.next.call(null,coll);
n = G__156807;
coll = G__156808;
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
return dorun__156803.call(this,n);
case  2 :
return dorun__156804.call(this,n,coll);
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
var doall__156809 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__156810 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__156809.call(this,n);
case  2 :
return doall__156810.call(this,n,coll);
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
var matches__156812 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__156812),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__156812),1)))
{return cljs.core.first.call(null,matches__156812);
} else
{return cljs.core.vec.call(null,matches__156812);
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
var matches__156813 = re.exec(s);

if(cljs.core.truth_((matches__156813 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__156813),1)))
{return cljs.core.first.call(null,matches__156813);
} else
{return cljs.core.vec.call(null,matches__156813);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__156814 = cljs.core.re_find.call(null,re,s);
var match_idx__156815 = s.search(re);
var match_str__156816 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__156814))?cljs.core.first.call(null,match_data__156814):match_data__156814);
var post_match__156817 = cljs.core.subs.call(null,s,(match_idx__156815 + cljs.core.count.call(null,match_str__156816)));

if(cljs.core.truth_(match_data__156814))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__156814,re_seq.call(null,re,post_match__156817));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__156819__156820 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___156821 = cljs.core.nth.call(null,vec__156819__156820,0,null);
var flags__156822 = cljs.core.nth.call(null,vec__156819__156820,1,null);
var pattern__156823 = cljs.core.nth.call(null,vec__156819__156820,2,null);

return (new RegExp(pattern__156823,flags__156822));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__156818_SHARP_){
return print_one.call(null,p1__156818_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____156824 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____156824))
{var and__3546__auto____156828 = (function (){var x__450__auto____156825 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____156826 = x__450__auto____156825;

if(cljs.core.truth_(and__3546__auto____156826))
{var and__3546__auto____156827 = x__450__auto____156825.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____156827))
{return cljs.core.not.call(null,x__450__auto____156825.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____156827;
}
} else
{return and__3546__auto____156826;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____156825);
}
})();

if(cljs.core.truth_(and__3546__auto____156828))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____156828;
}
} else
{return and__3546__auto____156824;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____156829 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____156830 = x__450__auto____156829;

if(cljs.core.truth_(and__3546__auto____156830))
{var and__3546__auto____156831 = x__450__auto____156829.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____156831))
{return cljs.core.not.call(null,x__450__auto____156829.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____156831;
}
} else
{return and__3546__auto____156830;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____156829);
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
var first_obj__156832 = cljs.core.first.call(null,objs);
var sb__156833 = (new goog.string.StringBuffer());

var G__156834__156835 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__156834__156835))
{var obj__156836 = cljs.core.first.call(null,G__156834__156835);
var G__156834__156837 = G__156834__156835;

while(true){
if(cljs.core.truth_((obj__156836 === first_obj__156832)))
{} else
{sb__156833.append(" ");
}
var G__156838__156839 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__156836,opts));

if(cljs.core.truth_(G__156838__156839))
{var string__156840 = cljs.core.first.call(null,G__156838__156839);
var G__156838__156841 = G__156838__156839;

while(true){
sb__156833.append(string__156840);
var temp__3698__auto____156842 = cljs.core.next.call(null,G__156838__156841);

if(cljs.core.truth_(temp__3698__auto____156842))
{var G__156838__156843 = temp__3698__auto____156842;

{
var G__156846 = cljs.core.first.call(null,G__156838__156843);
var G__156847 = G__156838__156843;
string__156840 = G__156846;
G__156838__156841 = G__156847;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____156844 = cljs.core.next.call(null,G__156834__156837);

if(cljs.core.truth_(temp__3698__auto____156844))
{var G__156834__156845 = temp__3698__auto____156844;

{
var G__156848 = cljs.core.first.call(null,G__156834__156845);
var G__156849 = G__156834__156845;
obj__156836 = G__156848;
G__156834__156837 = G__156849;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__156833);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__156850 = cljs.core.first.call(null,objs);

var G__156851__156852 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__156851__156852))
{var obj__156853 = cljs.core.first.call(null,G__156851__156852);
var G__156851__156854 = G__156851__156852;

while(true){
if(cljs.core.truth_((obj__156853 === first_obj__156850)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__156855__156856 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__156853,opts));

if(cljs.core.truth_(G__156855__156856))
{var string__156857 = cljs.core.first.call(null,G__156855__156856);
var G__156855__156858 = G__156855__156856;

while(true){
cljs.core.string_print.call(null,string__156857);
var temp__3698__auto____156859 = cljs.core.next.call(null,G__156855__156858);

if(cljs.core.truth_(temp__3698__auto____156859))
{var G__156855__156860 = temp__3698__auto____156859;

{
var G__156863 = cljs.core.first.call(null,G__156855__156860);
var G__156864 = G__156855__156860;
string__156857 = G__156863;
G__156855__156858 = G__156864;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____156861 = cljs.core.next.call(null,G__156851__156854);

if(cljs.core.truth_(temp__3698__auto____156861))
{var G__156851__156862 = temp__3698__auto____156861;

{
var G__156865 = cljs.core.first.call(null,G__156851__156862);
var G__156866 = G__156851__156862;
obj__156853 = G__156865;
G__156851__156854 = G__156866;
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
pr_str.cljs$lang$applyTo = (function (arglist__156867){
var objs = cljs.core.seq( arglist__156867 );;
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
pr.cljs$lang$applyTo = (function (arglist__156868){
var objs = cljs.core.seq( arglist__156868 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__156869){
var objs = cljs.core.seq( arglist__156869 );;
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
println.cljs$lang$applyTo = (function (arglist__156870){
var objs = cljs.core.seq( arglist__156870 );;
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
prn.cljs$lang$applyTo = (function (arglist__156871){
var objs = cljs.core.seq( arglist__156871 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__156872 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__156872,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____156873 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____156873))
{var nspc__156874 = temp__3698__auto____156873;

return cljs.core.str.call(null,nspc__156874,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____156875 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____156875))
{var nspc__156876 = temp__3698__auto____156875;

return cljs.core.str.call(null,nspc__156876,"\/");
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
var pr_pair__156877 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__156877,"{",", ","}",opts,coll);
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
var this__156878 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__156879 = this;
var G__156880__156881 = cljs.core.seq.call(null,this__156879.watches);

if(cljs.core.truth_(G__156880__156881))
{var G__156883__156885 = cljs.core.first.call(null,G__156880__156881);
var vec__156884__156886 = G__156883__156885;
var key__156887 = cljs.core.nth.call(null,vec__156884__156886,0,null);
var f__156888 = cljs.core.nth.call(null,vec__156884__156886,1,null);
var G__156880__156889 = G__156880__156881;

var G__156883__156890 = G__156883__156885;
var G__156880__156891 = G__156880__156889;

while(true){
var vec__156892__156893 = G__156883__156890;
var key__156894 = cljs.core.nth.call(null,vec__156892__156893,0,null);
var f__156895 = cljs.core.nth.call(null,vec__156892__156893,1,null);
var G__156880__156896 = G__156880__156891;

f__156895.call(null,key__156894,this$,oldval,newval);
var temp__3698__auto____156897 = cljs.core.next.call(null,G__156880__156896);

if(cljs.core.truth_(temp__3698__auto____156897))
{var G__156880__156898 = temp__3698__auto____156897;

{
var G__156905 = cljs.core.first.call(null,G__156880__156898);
var G__156906 = G__156880__156898;
G__156883__156890 = G__156905;
G__156880__156891 = G__156906;
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
var this__156899 = this;
return this$.watches = cljs.core.assoc.call(null,this__156899.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__156900 = this;
return this$.watches = cljs.core.dissoc.call(null,this__156900.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__156901 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__156901.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__156902 = this;
return this__156902.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__156903 = this;
return this__156903.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__156904 = this;
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
var atom__156913 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__156914 = (function() { 
var G__156916__delegate = function (x,p__156907){
var map__156908__156909 = p__156907;
var map__156908__156910 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__156908__156909))?cljs.core.apply.call(null,cljs.core.hash_map,map__156908__156909):map__156908__156909);
var validator__156911 = cljs.core.get.call(null,map__156908__156910,"\uFDD0'validator");
var meta__156912 = cljs.core.get.call(null,map__156908__156910,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__156912,validator__156911,null));
};
var G__156916 = function (x,var_args){
var p__156907 = null;
if (goog.isDef(var_args)) {
  p__156907 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__156916__delegate.call(this, x, p__156907);
};
G__156916.cljs$lang$maxFixedArity = 1;
G__156916.cljs$lang$applyTo = (function (arglist__156917){
var x = cljs.core.first(arglist__156917);
var p__156907 = cljs.core.rest(arglist__156917);
return G__156916__delegate.call(this, x, p__156907);
});
return G__156916;
})()
;
atom = function(x,var_args){
var p__156907 = var_args;
switch(arguments.length){
case  1 :
return atom__156913.call(this,x);
default:
return atom__156914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__156914.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____156918 = a.validator;

if(cljs.core.truth_(temp__3698__auto____156918))
{var validate__156919 = temp__3698__auto____156918;

if(cljs.core.truth_(validate__156919.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__156920 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__156920,new_value);
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
var swap_BANG___156921 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___156922 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___156923 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___156924 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___156925 = (function() { 
var G__156927__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__156927 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__156927__delegate.call(this, a, f, x, y, z, more);
};
G__156927.cljs$lang$maxFixedArity = 5;
G__156927.cljs$lang$applyTo = (function (arglist__156928){
var a = cljs.core.first(arglist__156928);
var f = cljs.core.first(cljs.core.next(arglist__156928));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156928)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156928))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156928)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156928)))));
return G__156927__delegate.call(this, a, f, x, y, z, more);
});
return G__156927;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___156921.call(this,a,f);
case  3 :
return swap_BANG___156922.call(this,a,f,x);
case  4 :
return swap_BANG___156923.call(this,a,f,x,y);
case  5 :
return swap_BANG___156924.call(this,a,f,x,y,z);
default:
return swap_BANG___156925.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___156925.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__156929){
var iref = cljs.core.first(arglist__156929);
var f = cljs.core.first(cljs.core.next(arglist__156929));
var args = cljs.core.rest(cljs.core.next(arglist__156929));
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
var gensym__156930 = (function (){
return gensym.call(null,"G__");
});
var gensym__156931 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__156930.call(this);
case  1 :
return gensym__156931.call(this,prefix_string);
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
var this__156933 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__156933.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__156934 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__156934.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__156934.state,this__156934.f);
}
return cljs.core.deref.call(null,this__156934.state);
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
delay.cljs$lang$applyTo = (function (arglist__156935){
var body = cljs.core.seq( arglist__156935 );;
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
var map__156936__156937 = options;
var map__156936__156938 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__156936__156937))?cljs.core.apply.call(null,cljs.core.hash_map,map__156936__156937):map__156936__156937);
var keywordize_keys__156939 = cljs.core.get.call(null,map__156936__156938,"\uFDD0'keywordize-keys");
var keyfn__156940 = (cljs.core.truth_(keywordize_keys__156939)?cljs.core.keyword:cljs.core.str);
var f__156946 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____156945 = (function iter__156941(s__156942){
return (new cljs.core.LazySeq(null,false,(function (){
var s__156942__156943 = s__156942;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__156942__156943)))
{var k__156944 = cljs.core.first.call(null,s__156942__156943);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__156940.call(null,k__156944),thisfn.call(null,(x[k__156944]))]),iter__156941.call(null,cljs.core.rest.call(null,s__156942__156943)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____156945.call(null,cljs.core.js_keys.call(null,x));
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

return f__156946.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__156947){
var x = cljs.core.first(arglist__156947);
var options = cljs.core.rest(arglist__156947);
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
var mem__156948 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__156952__delegate = function (args){
var temp__3695__auto____156949 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__156948),args);

if(cljs.core.truth_(temp__3695__auto____156949))
{var v__156950 = temp__3695__auto____156949;

return v__156950;
} else
{var ret__156951 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__156948,cljs.core.assoc,args,ret__156951);
return ret__156951;
}
};
var G__156952 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__156952__delegate.call(this, args);
};
G__156952.cljs$lang$maxFixedArity = 0;
G__156952.cljs$lang$applyTo = (function (arglist__156953){
var args = cljs.core.seq( arglist__156953 );;
return G__156952__delegate.call(this, args);
});
return G__156952;
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
var trampoline__156955 = (function (f){
while(true){
var ret__156954 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__156954)))
{{
var G__156958 = ret__156954;
f = G__156958;
continue;
}
} else
{return ret__156954;
}
break;
}
});
var trampoline__156956 = (function() { 
var G__156959__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__156959 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__156959__delegate.call(this, f, args);
};
G__156959.cljs$lang$maxFixedArity = 1;
G__156959.cljs$lang$applyTo = (function (arglist__156960){
var f = cljs.core.first(arglist__156960);
var args = cljs.core.rest(arglist__156960);
return G__156959__delegate.call(this, f, args);
});
return G__156959;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__156955.call(this,f);
default:
return trampoline__156956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__156956.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__156961 = (function (){
return rand.call(null,1);
});
var rand__156962 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__156961.call(this);
case  1 :
return rand__156962.call(this,n);
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
var k__156964 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__156964,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__156964,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___156973 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___156974 = (function (h,child,parent){
var or__3548__auto____156965 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____156965))
{return or__3548__auto____156965;
} else
{var or__3548__auto____156966 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____156966))
{return or__3548__auto____156966;
} else
{var and__3546__auto____156967 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____156967))
{var and__3546__auto____156968 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____156968))
{var and__3546__auto____156969 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____156969))
{var ret__156970 = true;
var i__156971 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____156972 = cljs.core.not.call(null,ret__156970);

if(cljs.core.truth_(or__3548__auto____156972))
{return or__3548__auto____156972;
} else
{return cljs.core._EQ_.call(null,i__156971,cljs.core.count.call(null,parent));
}
})()))
{return ret__156970;
} else
{{
var G__156976 = isa_QMARK_.call(null,h,child.call(null,i__156971),parent.call(null,i__156971));
var G__156977 = (i__156971 + 1);
ret__156970 = G__156976;
i__156971 = G__156977;
continue;
}
}
break;
}
} else
{return and__3546__auto____156969;
}
} else
{return and__3546__auto____156968;
}
} else
{return and__3546__auto____156967;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___156973.call(this,h,child);
case  3 :
return isa_QMARK___156974.call(this,h,child,parent);
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
var parents__156978 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__156979 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__156978.call(this,h);
case  2 :
return parents__156979.call(this,h,tag);
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
var ancestors__156981 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__156982 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__156981.call(this,h);
case  2 :
return ancestors__156982.call(this,h,tag);
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
var descendants__156984 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__156985 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__156984.call(this,h);
case  2 :
return descendants__156985.call(this,h,tag);
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
var derive__156995 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__156996 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__156990 = "\uFDD0'parents".call(null,h);
var td__156991 = "\uFDD0'descendants".call(null,h);
var ta__156992 = "\uFDD0'ancestors".call(null,h);
var tf__156993 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____156994 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__156990.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__156992.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__156992.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__156990,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__156993.call(null,"\uFDD0'ancestors".call(null,h),tag,td__156991,parent,ta__156992),"\uFDD0'descendants":tf__156993.call(null,"\uFDD0'descendants".call(null,h),parent,ta__156992,tag,td__156991)});
})());

if(cljs.core.truth_(or__3548__auto____156994))
{return or__3548__auto____156994;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__156995.call(this,h,tag);
case  3 :
return derive__156996.call(this,h,tag,parent);
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
var underive__157002 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__157003 = (function (h,tag,parent){
var parentMap__156998 = "\uFDD0'parents".call(null,h);
var childsParents__156999 = (cljs.core.truth_(parentMap__156998.call(null,tag))?cljs.core.disj.call(null,parentMap__156998.call(null,tag),parent):cljs.core.set([]));
var newParents__157000 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__156999))?cljs.core.assoc.call(null,parentMap__156998,tag,childsParents__156999):cljs.core.dissoc.call(null,parentMap__156998,tag));
var deriv_seq__157001 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__156987_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__156987_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__156987_SHARP_),cljs.core.second.call(null,p1__156987_SHARP_)));
}),cljs.core.seq.call(null,newParents__157000)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__156998.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__156988_SHARP_,p2__156989_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__156988_SHARP_,p2__156989_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__157001));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__157002.call(this,h,tag);
case  3 :
return underive__157003.call(this,h,tag,parent);
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
var xprefs__157005 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____157007 = (cljs.core.truth_((function (){var and__3546__auto____157006 = xprefs__157005;

if(cljs.core.truth_(and__3546__auto____157006))
{return xprefs__157005.call(null,y);
} else
{return and__3546__auto____157006;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____157007))
{return or__3548__auto____157007;
} else
{var or__3548__auto____157009 = (function (){var ps__157008 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__157008) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__157008),prefer_table)))
{} else
{}
{
var G__157012 = cljs.core.rest.call(null,ps__157008);
ps__157008 = G__157012;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____157009))
{return or__3548__auto____157009;
} else
{var or__3548__auto____157011 = (function (){var ps__157010 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__157010) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__157010),y,prefer_table)))
{} else
{}
{
var G__157013 = cljs.core.rest.call(null,ps__157010);
ps__157010 = G__157013;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____157011))
{return or__3548__auto____157011;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____157014 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____157014))
{return or__3548__auto____157014;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__157023 = cljs.core.reduce.call(null,(function (be,p__157015){
var vec__157016__157017 = p__157015;
var k__157018 = cljs.core.nth.call(null,vec__157016__157017,0,null);
var ___157019 = cljs.core.nth.call(null,vec__157016__157017,1,null);
var e__157020 = vec__157016__157017;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__157018)))
{var be2__157022 = (cljs.core.truth_((function (){var or__3548__auto____157021 = (be === null);

if(cljs.core.truth_(or__3548__auto____157021))
{return or__3548__auto____157021;
} else
{return cljs.core.dominates.call(null,k__157018,cljs.core.first.call(null,be),prefer_table);
}
})())?e__157020:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__157022),k__157018,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__157018," and ",cljs.core.first.call(null,be2__157022),", and neither is preferred")));
}
return be2__157022;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__157023))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__157023));
return cljs.core.second.call(null,best_entry__157023);
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
if(cljs.core.truth_((function (){var and__3546__auto____157024 = mf;

if(cljs.core.truth_(and__3546__auto____157024))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____157024;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____157025 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____157025))
{return or__3548__auto____157025;
} else
{var or__3548__auto____157026 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____157026))
{return or__3548__auto____157026;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____157027 = mf;

if(cljs.core.truth_(and__3546__auto____157027))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____157027;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____157028 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____157028))
{return or__3548__auto____157028;
} else
{var or__3548__auto____157029 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____157029))
{return or__3548__auto____157029;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____157030 = mf;

if(cljs.core.truth_(and__3546__auto____157030))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____157030;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____157031 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____157031))
{return or__3548__auto____157031;
} else
{var or__3548__auto____157032 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____157032))
{return or__3548__auto____157032;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____157033 = mf;

if(cljs.core.truth_(and__3546__auto____157033))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____157033;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____157034 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____157034))
{return or__3548__auto____157034;
} else
{var or__3548__auto____157035 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____157035))
{return or__3548__auto____157035;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____157036 = mf;

if(cljs.core.truth_(and__3546__auto____157036))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____157036;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____157037 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____157037))
{return or__3548__auto____157037;
} else
{var or__3548__auto____157038 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____157038))
{return or__3548__auto____157038;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____157039 = mf;

if(cljs.core.truth_(and__3546__auto____157039))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____157039;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____157040 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____157040))
{return or__3548__auto____157040;
} else
{var or__3548__auto____157041 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____157041))
{return or__3548__auto____157041;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____157042 = mf;

if(cljs.core.truth_(and__3546__auto____157042))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____157042;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____157043 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____157043))
{return or__3548__auto____157043;
} else
{var or__3548__auto____157044 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____157044))
{return or__3548__auto____157044;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____157045 = mf;

if(cljs.core.truth_(and__3546__auto____157045))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____157045;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____157046 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____157046))
{return or__3548__auto____157046;
} else
{var or__3548__auto____157047 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____157047))
{return or__3548__auto____157047;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__157048 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__157049 = cljs.core._get_method.call(null,mf,dispatch_val__157048);

if(cljs.core.truth_(target_fn__157049))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__157048)));
}
return cljs.core.apply.call(null,target_fn__157049,args);
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
var this__157050 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__157051 = this;
cljs.core.swap_BANG_.call(null,this__157051.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__157051.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__157051.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__157051.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__157052 = this;
cljs.core.swap_BANG_.call(null,this__157052.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__157052.method_cache,this__157052.method_table,this__157052.cached_hierarchy,this__157052.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__157053 = this;
cljs.core.swap_BANG_.call(null,this__157053.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__157053.method_cache,this__157053.method_table,this__157053.cached_hierarchy,this__157053.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__157054 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__157054.cached_hierarchy),cljs.core.deref.call(null,this__157054.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__157054.method_cache,this__157054.method_table,this__157054.cached_hierarchy,this__157054.hierarchy);
}
var temp__3695__auto____157055 = cljs.core.deref.call(null,this__157054.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____157055))
{var target_fn__157056 = temp__3695__auto____157055;

return target_fn__157056;
} else
{var temp__3695__auto____157057 = cljs.core.find_and_cache_best_method.call(null,this__157054.name,dispatch_val,this__157054.hierarchy,this__157054.method_table,this__157054.prefer_table,this__157054.method_cache,this__157054.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____157057))
{var target_fn__157058 = temp__3695__auto____157057;

return target_fn__157058;
} else
{return cljs.core.deref.call(null,this__157054.method_table).call(null,this__157054.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__157059 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__157059.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__157059.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__157059.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__157059.method_cache,this__157059.method_table,this__157059.cached_hierarchy,this__157059.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__157060 = this;
return cljs.core.deref.call(null,this__157060.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__157061 = this;
return cljs.core.deref.call(null,this__157061.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__157062 = this;
return cljs.core.do_dispatch.call(null,mf,this__157062.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__157063__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__157063 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__157063__delegate.call(this, _, args);
};
G__157063.cljs$lang$maxFixedArity = 1;
G__157063.cljs$lang$applyTo = (function (arglist__157064){
var _ = cljs.core.first(arglist__157064);
var args = cljs.core.rest(arglist__157064);
return G__157063__delegate.call(this, _, args);
});
return G__157063;
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
