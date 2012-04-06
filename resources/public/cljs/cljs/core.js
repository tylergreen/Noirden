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
var or__3548__auto____390254 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____390254))
{return or__3548__auto____390254;
} else
{var or__3548__auto____390255 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____390255))
{return or__3548__auto____390255;
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
var _invoke__390319 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____390256 = this$;

if(cljs.core.truth_(and__3546__auto____390256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____390257 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390257))
{return or__3548__auto____390257;
} else
{var or__3548__auto____390258 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390258))
{return or__3548__auto____390258;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__390320 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____390259 = this$;

if(cljs.core.truth_(and__3546__auto____390259))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390259;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____390260 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390260))
{return or__3548__auto____390260;
} else
{var or__3548__auto____390261 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390261))
{return or__3548__auto____390261;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__390321 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____390262 = this$;

if(cljs.core.truth_(and__3546__auto____390262))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390262;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____390263 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390263))
{return or__3548__auto____390263;
} else
{var or__3548__auto____390264 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390264))
{return or__3548__auto____390264;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__390322 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____390265 = this$;

if(cljs.core.truth_(and__3546__auto____390265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____390266 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390266))
{return or__3548__auto____390266;
} else
{var or__3548__auto____390267 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390267))
{return or__3548__auto____390267;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__390323 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____390268 = this$;

if(cljs.core.truth_(and__3546__auto____390268))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390268;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____390269 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390269))
{return or__3548__auto____390269;
} else
{var or__3548__auto____390270 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390270))
{return or__3548__auto____390270;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__390324 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____390271 = this$;

if(cljs.core.truth_(and__3546__auto____390271))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390271;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____390272 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390272))
{return or__3548__auto____390272;
} else
{var or__3548__auto____390273 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390273))
{return or__3548__auto____390273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__390325 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____390274 = this$;

if(cljs.core.truth_(and__3546__auto____390274))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390274;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____390275 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390275))
{return or__3548__auto____390275;
} else
{var or__3548__auto____390276 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390276))
{return or__3548__auto____390276;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__390326 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____390277 = this$;

if(cljs.core.truth_(and__3546__auto____390277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____390278 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390278))
{return or__3548__auto____390278;
} else
{var or__3548__auto____390279 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390279))
{return or__3548__auto____390279;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__390327 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____390280 = this$;

if(cljs.core.truth_(and__3546__auto____390280))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390280;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____390281 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390281))
{return or__3548__auto____390281;
} else
{var or__3548__auto____390282 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390282))
{return or__3548__auto____390282;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__390328 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____390283 = this$;

if(cljs.core.truth_(and__3546__auto____390283))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390283;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____390284 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390284))
{return or__3548__auto____390284;
} else
{var or__3548__auto____390285 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390285))
{return or__3548__auto____390285;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__390329 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____390286 = this$;

if(cljs.core.truth_(and__3546__auto____390286))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390286;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____390287 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390287))
{return or__3548__auto____390287;
} else
{var or__3548__auto____390288 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390288))
{return or__3548__auto____390288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__390330 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____390289 = this$;

if(cljs.core.truth_(and__3546__auto____390289))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390289;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____390290 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390290))
{return or__3548__auto____390290;
} else
{var or__3548__auto____390291 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390291))
{return or__3548__auto____390291;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__390331 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____390292 = this$;

if(cljs.core.truth_(and__3546__auto____390292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____390293 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390293))
{return or__3548__auto____390293;
} else
{var or__3548__auto____390294 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390294))
{return or__3548__auto____390294;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__390332 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____390295 = this$;

if(cljs.core.truth_(and__3546__auto____390295))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390295;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____390296 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390296))
{return or__3548__auto____390296;
} else
{var or__3548__auto____390297 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390297))
{return or__3548__auto____390297;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__390333 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____390298 = this$;

if(cljs.core.truth_(and__3546__auto____390298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____390299 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390299))
{return or__3548__auto____390299;
} else
{var or__3548__auto____390300 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390300))
{return or__3548__auto____390300;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__390334 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____390301 = this$;

if(cljs.core.truth_(and__3546__auto____390301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____390302 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390302))
{return or__3548__auto____390302;
} else
{var or__3548__auto____390303 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390303))
{return or__3548__auto____390303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__390335 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____390304 = this$;

if(cljs.core.truth_(and__3546__auto____390304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____390305 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390305))
{return or__3548__auto____390305;
} else
{var or__3548__auto____390306 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390306))
{return or__3548__auto____390306;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__390336 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____390307 = this$;

if(cljs.core.truth_(and__3546__auto____390307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____390308 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390308))
{return or__3548__auto____390308;
} else
{var or__3548__auto____390309 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390309))
{return or__3548__auto____390309;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__390337 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____390310 = this$;

if(cljs.core.truth_(and__3546__auto____390310))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390310;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____390311 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390311))
{return or__3548__auto____390311;
} else
{var or__3548__auto____390312 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390312))
{return or__3548__auto____390312;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__390338 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____390313 = this$;

if(cljs.core.truth_(and__3546__auto____390313))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390313;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____390314 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390314))
{return or__3548__auto____390314;
} else
{var or__3548__auto____390315 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390315))
{return or__3548__auto____390315;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__390339 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____390316 = this$;

if(cljs.core.truth_(and__3546__auto____390316))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____390316;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____390317 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390317))
{return or__3548__auto____390317;
} else
{var or__3548__auto____390318 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____390318))
{return or__3548__auto____390318;
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
return _invoke__390319.call(this,this$);
case  2 :
return _invoke__390320.call(this,this$,a);
case  3 :
return _invoke__390321.call(this,this$,a,b);
case  4 :
return _invoke__390322.call(this,this$,a,b,c);
case  5 :
return _invoke__390323.call(this,this$,a,b,c,d);
case  6 :
return _invoke__390324.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__390325.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__390326.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__390327.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__390328.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__390329.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__390330.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__390331.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__390332.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__390333.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__390334.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__390335.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__390336.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__390337.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__390338.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__390339.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____390341 = coll;

if(cljs.core.truth_(and__3546__auto____390341))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____390341;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____390342 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390342))
{return or__3548__auto____390342;
} else
{var or__3548__auto____390343 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____390343))
{return or__3548__auto____390343;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____390344 = coll;

if(cljs.core.truth_(and__3546__auto____390344))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____390344;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____390345 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390345))
{return or__3548__auto____390345;
} else
{var or__3548__auto____390346 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____390346))
{return or__3548__auto____390346;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____390347 = coll;

if(cljs.core.truth_(and__3546__auto____390347))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____390347;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____390348 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390348))
{return or__3548__auto____390348;
} else
{var or__3548__auto____390349 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____390349))
{return or__3548__auto____390349;
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
var _nth__390356 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____390350 = coll;

if(cljs.core.truth_(and__3546__auto____390350))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____390350;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____390351 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390351))
{return or__3548__auto____390351;
} else
{var or__3548__auto____390352 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____390352))
{return or__3548__auto____390352;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__390357 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____390353 = coll;

if(cljs.core.truth_(and__3546__auto____390353))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____390353;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____390354 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390354))
{return or__3548__auto____390354;
} else
{var or__3548__auto____390355 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____390355))
{return or__3548__auto____390355;
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
return _nth__390356.call(this,coll,n);
case  3 :
return _nth__390357.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____390359 = coll;

if(cljs.core.truth_(and__3546__auto____390359))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____390359;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____390360 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390360))
{return or__3548__auto____390360;
} else
{var or__3548__auto____390361 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____390361))
{return or__3548__auto____390361;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____390362 = coll;

if(cljs.core.truth_(and__3546__auto____390362))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____390362;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____390363 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390363))
{return or__3548__auto____390363;
} else
{var or__3548__auto____390364 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____390364))
{return or__3548__auto____390364;
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
var _lookup__390371 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____390365 = o;

if(cljs.core.truth_(and__3546__auto____390365))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____390365;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____390366 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390366))
{return or__3548__auto____390366;
} else
{var or__3548__auto____390367 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____390367))
{return or__3548__auto____390367;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__390372 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____390368 = o;

if(cljs.core.truth_(and__3546__auto____390368))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____390368;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____390369 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390369))
{return or__3548__auto____390369;
} else
{var or__3548__auto____390370 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____390370))
{return or__3548__auto____390370;
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
return _lookup__390371.call(this,o,k);
case  3 :
return _lookup__390372.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____390374 = coll;

if(cljs.core.truth_(and__3546__auto____390374))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____390374;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____390375 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390375))
{return or__3548__auto____390375;
} else
{var or__3548__auto____390376 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____390376))
{return or__3548__auto____390376;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____390377 = coll;

if(cljs.core.truth_(and__3546__auto____390377))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____390377;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____390378 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390378))
{return or__3548__auto____390378;
} else
{var or__3548__auto____390379 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____390379))
{return or__3548__auto____390379;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____390380 = coll;

if(cljs.core.truth_(and__3546__auto____390380))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____390380;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____390381 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390381))
{return or__3548__auto____390381;
} else
{var or__3548__auto____390382 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____390382))
{return or__3548__auto____390382;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____390383 = coll;

if(cljs.core.truth_(and__3546__auto____390383))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____390383;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____390384 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390384))
{return or__3548__auto____390384;
} else
{var or__3548__auto____390385 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____390385))
{return or__3548__auto____390385;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____390386 = coll;

if(cljs.core.truth_(and__3546__auto____390386))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____390386;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____390387 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390387))
{return or__3548__auto____390387;
} else
{var or__3548__auto____390388 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____390388))
{return or__3548__auto____390388;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____390389 = coll;

if(cljs.core.truth_(and__3546__auto____390389))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____390389;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____390390 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390390))
{return or__3548__auto____390390;
} else
{var or__3548__auto____390391 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____390391))
{return or__3548__auto____390391;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____390392 = coll;

if(cljs.core.truth_(and__3546__auto____390392))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____390392;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____390393 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390393))
{return or__3548__auto____390393;
} else
{var or__3548__auto____390394 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____390394))
{return or__3548__auto____390394;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____390395 = o;

if(cljs.core.truth_(and__3546__auto____390395))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____390395;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____390396 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390396))
{return or__3548__auto____390396;
} else
{var or__3548__auto____390397 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____390397))
{return or__3548__auto____390397;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____390398 = o;

if(cljs.core.truth_(and__3546__auto____390398))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____390398;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____390399 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390399))
{return or__3548__auto____390399;
} else
{var or__3548__auto____390400 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____390400))
{return or__3548__auto____390400;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____390401 = o;

if(cljs.core.truth_(and__3546__auto____390401))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____390401;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____390402 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390402))
{return or__3548__auto____390402;
} else
{var or__3548__auto____390403 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____390403))
{return or__3548__auto____390403;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____390404 = o;

if(cljs.core.truth_(and__3546__auto____390404))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____390404;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____390405 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390405))
{return or__3548__auto____390405;
} else
{var or__3548__auto____390406 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____390406))
{return or__3548__auto____390406;
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
var _reduce__390413 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____390407 = coll;

if(cljs.core.truth_(and__3546__auto____390407))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____390407;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____390408 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390408))
{return or__3548__auto____390408;
} else
{var or__3548__auto____390409 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____390409))
{return or__3548__auto____390409;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__390414 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____390410 = coll;

if(cljs.core.truth_(and__3546__auto____390410))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____390410;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____390411 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____390411))
{return or__3548__auto____390411;
} else
{var or__3548__auto____390412 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____390412))
{return or__3548__auto____390412;
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
return _reduce__390413.call(this,coll,f);
case  3 :
return _reduce__390414.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____390416 = o;

if(cljs.core.truth_(and__3546__auto____390416))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____390416;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____390417 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390417))
{return or__3548__auto____390417;
} else
{var or__3548__auto____390418 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____390418))
{return or__3548__auto____390418;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____390419 = o;

if(cljs.core.truth_(and__3546__auto____390419))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____390419;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____390420 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390420))
{return or__3548__auto____390420;
} else
{var or__3548__auto____390421 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____390421))
{return or__3548__auto____390421;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____390422 = o;

if(cljs.core.truth_(and__3546__auto____390422))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____390422;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____390423 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390423))
{return or__3548__auto____390423;
} else
{var or__3548__auto____390424 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____390424))
{return or__3548__auto____390424;
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
if(cljs.core.truth_((function (){var and__3546__auto____390425 = o;

if(cljs.core.truth_(and__3546__auto____390425))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____390425;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____390426 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____390426))
{return or__3548__auto____390426;
} else
{var or__3548__auto____390427 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____390427))
{return or__3548__auto____390427;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____390428 = d;

if(cljs.core.truth_(and__3546__auto____390428))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____390428;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____390429 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____390429))
{return or__3548__auto____390429;
} else
{var or__3548__auto____390430 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____390430))
{return or__3548__auto____390430;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____390431 = this$;

if(cljs.core.truth_(and__3546__auto____390431))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____390431;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____390432 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390432))
{return or__3548__auto____390432;
} else
{var or__3548__auto____390433 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____390433))
{return or__3548__auto____390433;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____390434 = this$;

if(cljs.core.truth_(and__3546__auto____390434))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____390434;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____390435 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390435))
{return or__3548__auto____390435;
} else
{var or__3548__auto____390436 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____390436))
{return or__3548__auto____390436;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____390437 = this$;

if(cljs.core.truth_(and__3546__auto____390437))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____390437;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____390438 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____390438))
{return or__3548__auto____390438;
} else
{var or__3548__auto____390439 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____390439))
{return or__3548__auto____390439;
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
var G__390440 = null;
var G__390440__390441 = (function (o,k){
return null;
});
var G__390440__390442 = (function (o,k,not_found){
return not_found;
});
G__390440 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__390440__390441.call(this,o,k);
case  3 :
return G__390440__390442.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390440;
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
var G__390444 = null;
var G__390444__390445 = (function (_,f){
return f.call(null);
});
var G__390444__390446 = (function (_,f,start){
return start;
});
G__390444 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__390444__390445.call(this,_,f);
case  3 :
return G__390444__390446.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390444;
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
var G__390448 = null;
var G__390448__390449 = (function (_,n){
return null;
});
var G__390448__390450 = (function (_,n,not_found){
return not_found;
});
G__390448 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__390448__390449.call(this,_,n);
case  3 :
return G__390448__390450.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390448;
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
var ci_reduce__390458 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__390452 = cljs.core._nth.call(null,cicoll,0);
var n__390453 = 1;

while(true){
if(cljs.core.truth_((n__390453 < cljs.core._count.call(null,cicoll))))
{{
var G__390462 = f.call(null,val__390452,cljs.core._nth.call(null,cicoll,n__390453));
var G__390463 = (n__390453 + 1);
val__390452 = G__390462;
n__390453 = G__390463;
continue;
}
} else
{return val__390452;
}
break;
}
}
});
var ci_reduce__390459 = (function (cicoll,f,val){
var val__390454 = val;
var n__390455 = 0;

while(true){
if(cljs.core.truth_((n__390455 < cljs.core._count.call(null,cicoll))))
{{
var G__390464 = f.call(null,val__390454,cljs.core._nth.call(null,cicoll,n__390455));
var G__390465 = (n__390455 + 1);
val__390454 = G__390464;
n__390455 = G__390465;
continue;
}
} else
{return val__390454;
}
break;
}
});
var ci_reduce__390460 = (function (cicoll,f,val,idx){
var val__390456 = val;
var n__390457 = idx;

while(true){
if(cljs.core.truth_((n__390457 < cljs.core._count.call(null,cicoll))))
{{
var G__390466 = f.call(null,val__390456,cljs.core._nth.call(null,cicoll,n__390457));
var G__390467 = (n__390457 + 1);
val__390456 = G__390466;
n__390457 = G__390467;
continue;
}
} else
{return val__390456;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__390458.call(this,cicoll,f);
case  3 :
return ci_reduce__390459.call(this,cicoll,f,val);
case  4 :
return ci_reduce__390460.call(this,cicoll,f,val,idx);
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
var this__390468 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__390481 = null;
var G__390481__390482 = (function (_,f){
var this__390469 = this;
return cljs.core.ci_reduce.call(null,this__390469.a,f,(this__390469.a[this__390469.i]),(this__390469.i + 1));
});
var G__390481__390483 = (function (_,f,start){
var this__390470 = this;
return cljs.core.ci_reduce.call(null,this__390470.a,f,start,this__390470.i);
});
G__390481 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__390481__390482.call(this,_,f);
case  3 :
return G__390481__390483.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390481;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__390471 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__390472 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__390485 = null;
var G__390485__390486 = (function (coll,n){
var this__390473 = this;
var i__390474 = (n + this__390473.i);

if(cljs.core.truth_((i__390474 < this__390473.a.length)))
{return (this__390473.a[i__390474]);
} else
{return null;
}
});
var G__390485__390487 = (function (coll,n,not_found){
var this__390475 = this;
var i__390476 = (n + this__390475.i);

if(cljs.core.truth_((i__390476 < this__390475.a.length)))
{return (this__390475.a[i__390476]);
} else
{return not_found;
}
});
G__390485 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__390485__390486.call(this,coll,n);
case  3 :
return G__390485__390487.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390485;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__390477 = this;
return (this__390477.a.length - this__390477.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__390478 = this;
return (this__390478.a[this__390478.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__390479 = this;
if(cljs.core.truth_(((this__390479.i + 1) < this__390479.a.length)))
{return (new cljs.core.IndexedSeq(this__390479.a,(this__390479.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__390480 = this;
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
var G__390489 = null;
var G__390489__390490 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__390489__390491 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__390489 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__390489__390490.call(this,array,f);
case  3 :
return G__390489__390491.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390489;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__390493 = null;
var G__390493__390494 = (function (array,k){
return (array[k]);
});
var G__390493__390495 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__390493 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__390493__390494.call(this,array,k);
case  3 :
return G__390493__390495.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390493;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__390497 = null;
var G__390497__390498 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__390497__390499 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__390497 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__390497__390498.call(this,array,n);
case  3 :
return G__390497__390499.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390497;
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
var temp__3698__auto____390501 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____390501))
{var s__390502 = temp__3698__auto____390501;

return cljs.core._first.call(null,s__390502);
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
var G__390503 = cljs.core.next.call(null,s);
s = G__390503;
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
var s__390504 = cljs.core.seq.call(null,x);
var n__390505 = 0;

while(true){
if(cljs.core.truth_(s__390504))
{{
var G__390506 = cljs.core.next.call(null,s__390504);
var G__390507 = (n__390505 + 1);
s__390504 = G__390506;
n__390505 = G__390507;
continue;
}
} else
{return n__390505;
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
var conj__390508 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__390509 = (function() { 
var G__390511__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__390512 = conj.call(null,coll,x);
var G__390513 = cljs.core.first.call(null,xs);
var G__390514 = cljs.core.next.call(null,xs);
coll = G__390512;
x = G__390513;
xs = G__390514;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__390511 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390511__delegate.call(this, coll, x, xs);
};
G__390511.cljs$lang$maxFixedArity = 2;
G__390511.cljs$lang$applyTo = (function (arglist__390515){
var coll = cljs.core.first(arglist__390515);
var x = cljs.core.first(cljs.core.next(arglist__390515));
var xs = cljs.core.rest(cljs.core.next(arglist__390515));
return G__390511__delegate.call(this, coll, x, xs);
});
return G__390511;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__390508.call(this,coll,x);
default:
return conj__390509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__390509.cljs$lang$applyTo;
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
var nth__390516 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__390517 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__390516.call(this,coll,n);
case  3 :
return nth__390517.call(this,coll,n,not_found);
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
var get__390519 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__390520 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__390519.call(this,o,k);
case  3 :
return get__390520.call(this,o,k,not_found);
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
var assoc__390523 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__390524 = (function() { 
var G__390526__delegate = function (coll,k,v,kvs){
while(true){
var ret__390522 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__390527 = ret__390522;
var G__390528 = cljs.core.first.call(null,kvs);
var G__390529 = cljs.core.second.call(null,kvs);
var G__390530 = cljs.core.nnext.call(null,kvs);
coll = G__390527;
k = G__390528;
v = G__390529;
kvs = G__390530;
continue;
}
} else
{return ret__390522;
}
break;
}
};
var G__390526 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__390526__delegate.call(this, coll, k, v, kvs);
};
G__390526.cljs$lang$maxFixedArity = 3;
G__390526.cljs$lang$applyTo = (function (arglist__390531){
var coll = cljs.core.first(arglist__390531);
var k = cljs.core.first(cljs.core.next(arglist__390531));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390531)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__390531)));
return G__390526__delegate.call(this, coll, k, v, kvs);
});
return G__390526;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__390523.call(this,coll,k,v);
default:
return assoc__390524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__390524.cljs$lang$applyTo;
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
var dissoc__390533 = (function (coll){
return coll;
});
var dissoc__390534 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__390535 = (function() { 
var G__390537__delegate = function (coll,k,ks){
while(true){
var ret__390532 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__390538 = ret__390532;
var G__390539 = cljs.core.first.call(null,ks);
var G__390540 = cljs.core.next.call(null,ks);
coll = G__390538;
k = G__390539;
ks = G__390540;
continue;
}
} else
{return ret__390532;
}
break;
}
};
var G__390537 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390537__delegate.call(this, coll, k, ks);
};
G__390537.cljs$lang$maxFixedArity = 2;
G__390537.cljs$lang$applyTo = (function (arglist__390541){
var coll = cljs.core.first(arglist__390541);
var k = cljs.core.first(cljs.core.next(arglist__390541));
var ks = cljs.core.rest(cljs.core.next(arglist__390541));
return G__390537__delegate.call(this, coll, k, ks);
});
return G__390537;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__390533.call(this,coll);
case  2 :
return dissoc__390534.call(this,coll,k);
default:
return dissoc__390535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__390535.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____390542 = o;

if(cljs.core.truth_((function (){var and__3546__auto____390543 = x__450__auto____390542;

if(cljs.core.truth_(and__3546__auto____390543))
{var and__3546__auto____390544 = x__450__auto____390542.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____390544))
{return cljs.core.not.call(null,x__450__auto____390542.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____390544;
}
} else
{return and__3546__auto____390543;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____390542);
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
var disj__390546 = (function (coll){
return coll;
});
var disj__390547 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__390548 = (function() { 
var G__390550__delegate = function (coll,k,ks){
while(true){
var ret__390545 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__390551 = ret__390545;
var G__390552 = cljs.core.first.call(null,ks);
var G__390553 = cljs.core.next.call(null,ks);
coll = G__390551;
k = G__390552;
ks = G__390553;
continue;
}
} else
{return ret__390545;
}
break;
}
};
var G__390550 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390550__delegate.call(this, coll, k, ks);
};
G__390550.cljs$lang$maxFixedArity = 2;
G__390550.cljs$lang$applyTo = (function (arglist__390554){
var coll = cljs.core.first(arglist__390554);
var k = cljs.core.first(cljs.core.next(arglist__390554));
var ks = cljs.core.rest(cljs.core.next(arglist__390554));
return G__390550__delegate.call(this, coll, k, ks);
});
return G__390550;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__390546.call(this,coll);
case  2 :
return disj__390547.call(this,coll,k);
default:
return disj__390548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__390548.cljs$lang$applyTo;
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
{var x__450__auto____390555 = x;

if(cljs.core.truth_((function (){var and__3546__auto____390556 = x__450__auto____390555;

if(cljs.core.truth_(and__3546__auto____390556))
{var and__3546__auto____390557 = x__450__auto____390555.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____390557))
{return cljs.core.not.call(null,x__450__auto____390555.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____390557;
}
} else
{return and__3546__auto____390556;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____390555);
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
{var x__450__auto____390558 = x;

if(cljs.core.truth_((function (){var and__3546__auto____390559 = x__450__auto____390558;

if(cljs.core.truth_(and__3546__auto____390559))
{var and__3546__auto____390560 = x__450__auto____390558.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____390560))
{return cljs.core.not.call(null,x__450__auto____390558.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____390560;
}
} else
{return and__3546__auto____390559;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____390558);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____390561 = x;

if(cljs.core.truth_((function (){var and__3546__auto____390562 = x__450__auto____390561;

if(cljs.core.truth_(and__3546__auto____390562))
{var and__3546__auto____390563 = x__450__auto____390561.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____390563))
{return cljs.core.not.call(null,x__450__auto____390561.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____390563;
}
} else
{return and__3546__auto____390562;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____390561);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____390564 = x;

if(cljs.core.truth_((function (){var and__3546__auto____390565 = x__450__auto____390564;

if(cljs.core.truth_(and__3546__auto____390565))
{var and__3546__auto____390566 = x__450__auto____390564.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____390566))
{return cljs.core.not.call(null,x__450__auto____390564.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____390566;
}
} else
{return and__3546__auto____390565;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____390564);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____390567 = x;

if(cljs.core.truth_((function (){var and__3546__auto____390568 = x__450__auto____390567;

if(cljs.core.truth_(and__3546__auto____390568))
{var and__3546__auto____390569 = x__450__auto____390567.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____390569))
{return cljs.core.not.call(null,x__450__auto____390567.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____390569;
}
} else
{return and__3546__auto____390568;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____390567);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____390570 = x;

if(cljs.core.truth_((function (){var and__3546__auto____390571 = x__450__auto____390570;

if(cljs.core.truth_(and__3546__auto____390571))
{var and__3546__auto____390572 = x__450__auto____390570.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____390572))
{return cljs.core.not.call(null,x__450__auto____390570.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____390572;
}
} else
{return and__3546__auto____390571;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____390570);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____390573 = x;

if(cljs.core.truth_((function (){var and__3546__auto____390574 = x__450__auto____390573;

if(cljs.core.truth_(and__3546__auto____390574))
{var and__3546__auto____390575 = x__450__auto____390573.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____390575))
{return cljs.core.not.call(null,x__450__auto____390573.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____390575;
}
} else
{return and__3546__auto____390574;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____390573);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__390576 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__390576.push(key);
}));
return keys__390576;
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
{var x__450__auto____390577 = s;

if(cljs.core.truth_((function (){var and__3546__auto____390578 = x__450__auto____390577;

if(cljs.core.truth_(and__3546__auto____390578))
{var and__3546__auto____390579 = x__450__auto____390577.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____390579))
{return cljs.core.not.call(null,x__450__auto____390577.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____390579;
}
} else
{return and__3546__auto____390578;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____390577);
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
var and__3546__auto____390580 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____390580))
{return cljs.core.not.call(null,(function (){var or__3548__auto____390581 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____390581))
{return or__3548__auto____390581;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____390580;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____390582 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____390582))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____390582;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____390583 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____390583))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____390583;
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
var and__3546__auto____390584 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____390584))
{return (n == n.toFixed());
} else
{return and__3546__auto____390584;
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
if(cljs.core.truth_((function (){var and__3546__auto____390585 = coll;

if(cljs.core.truth_(and__3546__auto____390585))
{var and__3546__auto____390586 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____390586))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____390586;
}
} else
{return and__3546__auto____390585;
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
var distinct_QMARK___390591 = (function (x){
return true;
});
var distinct_QMARK___390592 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___390593 = (function() { 
var G__390595__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__390587 = cljs.core.set([y,x]);
var xs__390588 = more;

while(true){
var x__390589 = cljs.core.first.call(null,xs__390588);
var etc__390590 = cljs.core.next.call(null,xs__390588);

if(cljs.core.truth_(xs__390588))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__390587,x__390589)))
{return false;
} else
{{
var G__390596 = cljs.core.conj.call(null,s__390587,x__390589);
var G__390597 = etc__390590;
s__390587 = G__390596;
xs__390588 = G__390597;
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
var G__390595 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390595__delegate.call(this, x, y, more);
};
G__390595.cljs$lang$maxFixedArity = 2;
G__390595.cljs$lang$applyTo = (function (arglist__390598){
var x = cljs.core.first(arglist__390598);
var y = cljs.core.first(cljs.core.next(arglist__390598));
var more = cljs.core.rest(cljs.core.next(arglist__390598));
return G__390595__delegate.call(this, x, y, more);
});
return G__390595;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___390591.call(this,x);
case  2 :
return distinct_QMARK___390592.call(this,x,y);
default:
return distinct_QMARK___390593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___390593.cljs$lang$applyTo;
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
var r__390599 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__390599)))
{return r__390599;
} else
{if(cljs.core.truth_(r__390599))
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
var sort__390601 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__390602 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__390600 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__390600,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__390600);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__390601.call(this,comp);
case  2 :
return sort__390602.call(this,comp,coll);
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
var sort_by__390604 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__390605 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__390604.call(this,keyfn,comp);
case  3 :
return sort_by__390605.call(this,keyfn,comp,coll);
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
var reduce__390607 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__390608 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__390607.call(this,f,val);
case  3 :
return reduce__390608.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__390614 = (function (f,coll){
var temp__3695__auto____390610 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____390610))
{var s__390611 = temp__3695__auto____390610;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__390611),cljs.core.next.call(null,s__390611));
} else
{return f.call(null);
}
});
var seq_reduce__390615 = (function (f,val,coll){
var val__390612 = val;
var coll__390613 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__390613))
{{
var G__390617 = f.call(null,val__390612,cljs.core.first.call(null,coll__390613));
var G__390618 = cljs.core.next.call(null,coll__390613);
val__390612 = G__390617;
coll__390613 = G__390618;
continue;
}
} else
{return val__390612;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__390614.call(this,f,val);
case  3 :
return seq_reduce__390615.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__390619 = null;
var G__390619__390620 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__390619__390621 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__390619 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__390619__390620.call(this,coll,f);
case  3 :
return G__390619__390621.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390619;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___390623 = (function (){
return 0;
});
var _PLUS___390624 = (function (x){
return x;
});
var _PLUS___390625 = (function (x,y){
return (x + y);
});
var _PLUS___390626 = (function() { 
var G__390628__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__390628 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390628__delegate.call(this, x, y, more);
};
G__390628.cljs$lang$maxFixedArity = 2;
G__390628.cljs$lang$applyTo = (function (arglist__390629){
var x = cljs.core.first(arglist__390629);
var y = cljs.core.first(cljs.core.next(arglist__390629));
var more = cljs.core.rest(cljs.core.next(arglist__390629));
return G__390628__delegate.call(this, x, y, more);
});
return G__390628;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___390623.call(this);
case  1 :
return _PLUS___390624.call(this,x);
case  2 :
return _PLUS___390625.call(this,x,y);
default:
return _PLUS___390626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___390626.cljs$lang$applyTo;
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
var ___390630 = (function (x){
return (- x);
});
var ___390631 = (function (x,y){
return (x - y);
});
var ___390632 = (function() { 
var G__390634__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__390634 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390634__delegate.call(this, x, y, more);
};
G__390634.cljs$lang$maxFixedArity = 2;
G__390634.cljs$lang$applyTo = (function (arglist__390635){
var x = cljs.core.first(arglist__390635);
var y = cljs.core.first(cljs.core.next(arglist__390635));
var more = cljs.core.rest(cljs.core.next(arglist__390635));
return G__390634__delegate.call(this, x, y, more);
});
return G__390634;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___390630.call(this,x);
case  2 :
return ___390631.call(this,x,y);
default:
return ___390632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___390632.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___390636 = (function (){
return 1;
});
var _STAR___390637 = (function (x){
return x;
});
var _STAR___390638 = (function (x,y){
return (x * y);
});
var _STAR___390639 = (function() { 
var G__390641__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__390641 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390641__delegate.call(this, x, y, more);
};
G__390641.cljs$lang$maxFixedArity = 2;
G__390641.cljs$lang$applyTo = (function (arglist__390642){
var x = cljs.core.first(arglist__390642);
var y = cljs.core.first(cljs.core.next(arglist__390642));
var more = cljs.core.rest(cljs.core.next(arglist__390642));
return G__390641__delegate.call(this, x, y, more);
});
return G__390641;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___390636.call(this);
case  1 :
return _STAR___390637.call(this,x);
case  2 :
return _STAR___390638.call(this,x,y);
default:
return _STAR___390639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___390639.cljs$lang$applyTo;
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
var _SLASH___390643 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___390644 = (function (x,y){
return (x / y);
});
var _SLASH___390645 = (function() { 
var G__390647__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__390647 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390647__delegate.call(this, x, y, more);
};
G__390647.cljs$lang$maxFixedArity = 2;
G__390647.cljs$lang$applyTo = (function (arglist__390648){
var x = cljs.core.first(arglist__390648);
var y = cljs.core.first(cljs.core.next(arglist__390648));
var more = cljs.core.rest(cljs.core.next(arglist__390648));
return G__390647__delegate.call(this, x, y, more);
});
return G__390647;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___390643.call(this,x);
case  2 :
return _SLASH___390644.call(this,x,y);
default:
return _SLASH___390645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___390645.cljs$lang$applyTo;
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
var _LT___390649 = (function (x){
return true;
});
var _LT___390650 = (function (x,y){
return (x < y);
});
var _LT___390651 = (function() { 
var G__390653__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__390654 = y;
var G__390655 = cljs.core.first.call(null,more);
var G__390656 = cljs.core.next.call(null,more);
x = G__390654;
y = G__390655;
more = G__390656;
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
var G__390653 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390653__delegate.call(this, x, y, more);
};
G__390653.cljs$lang$maxFixedArity = 2;
G__390653.cljs$lang$applyTo = (function (arglist__390657){
var x = cljs.core.first(arglist__390657);
var y = cljs.core.first(cljs.core.next(arglist__390657));
var more = cljs.core.rest(cljs.core.next(arglist__390657));
return G__390653__delegate.call(this, x, y, more);
});
return G__390653;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___390649.call(this,x);
case  2 :
return _LT___390650.call(this,x,y);
default:
return _LT___390651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___390651.cljs$lang$applyTo;
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
var _LT__EQ___390658 = (function (x){
return true;
});
var _LT__EQ___390659 = (function (x,y){
return (x <= y);
});
var _LT__EQ___390660 = (function() { 
var G__390662__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__390663 = y;
var G__390664 = cljs.core.first.call(null,more);
var G__390665 = cljs.core.next.call(null,more);
x = G__390663;
y = G__390664;
more = G__390665;
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
var G__390662 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390662__delegate.call(this, x, y, more);
};
G__390662.cljs$lang$maxFixedArity = 2;
G__390662.cljs$lang$applyTo = (function (arglist__390666){
var x = cljs.core.first(arglist__390666);
var y = cljs.core.first(cljs.core.next(arglist__390666));
var more = cljs.core.rest(cljs.core.next(arglist__390666));
return G__390662__delegate.call(this, x, y, more);
});
return G__390662;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___390658.call(this,x);
case  2 :
return _LT__EQ___390659.call(this,x,y);
default:
return _LT__EQ___390660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___390660.cljs$lang$applyTo;
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
var _GT___390667 = (function (x){
return true;
});
var _GT___390668 = (function (x,y){
return (x > y);
});
var _GT___390669 = (function() { 
var G__390671__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__390672 = y;
var G__390673 = cljs.core.first.call(null,more);
var G__390674 = cljs.core.next.call(null,more);
x = G__390672;
y = G__390673;
more = G__390674;
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
var G__390671 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390671__delegate.call(this, x, y, more);
};
G__390671.cljs$lang$maxFixedArity = 2;
G__390671.cljs$lang$applyTo = (function (arglist__390675){
var x = cljs.core.first(arglist__390675);
var y = cljs.core.first(cljs.core.next(arglist__390675));
var more = cljs.core.rest(cljs.core.next(arglist__390675));
return G__390671__delegate.call(this, x, y, more);
});
return G__390671;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___390667.call(this,x);
case  2 :
return _GT___390668.call(this,x,y);
default:
return _GT___390669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___390669.cljs$lang$applyTo;
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
var _GT__EQ___390676 = (function (x){
return true;
});
var _GT__EQ___390677 = (function (x,y){
return (x >= y);
});
var _GT__EQ___390678 = (function() { 
var G__390680__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__390681 = y;
var G__390682 = cljs.core.first.call(null,more);
var G__390683 = cljs.core.next.call(null,more);
x = G__390681;
y = G__390682;
more = G__390683;
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
var G__390680 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390680__delegate.call(this, x, y, more);
};
G__390680.cljs$lang$maxFixedArity = 2;
G__390680.cljs$lang$applyTo = (function (arglist__390684){
var x = cljs.core.first(arglist__390684);
var y = cljs.core.first(cljs.core.next(arglist__390684));
var more = cljs.core.rest(cljs.core.next(arglist__390684));
return G__390680__delegate.call(this, x, y, more);
});
return G__390680;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___390676.call(this,x);
case  2 :
return _GT__EQ___390677.call(this,x,y);
default:
return _GT__EQ___390678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___390678.cljs$lang$applyTo;
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
var max__390685 = (function (x){
return x;
});
var max__390686 = (function (x,y){
return ((x > y) ? x : y);
});
var max__390687 = (function() { 
var G__390689__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__390689 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390689__delegate.call(this, x, y, more);
};
G__390689.cljs$lang$maxFixedArity = 2;
G__390689.cljs$lang$applyTo = (function (arglist__390690){
var x = cljs.core.first(arglist__390690);
var y = cljs.core.first(cljs.core.next(arglist__390690));
var more = cljs.core.rest(cljs.core.next(arglist__390690));
return G__390689__delegate.call(this, x, y, more);
});
return G__390689;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__390685.call(this,x);
case  2 :
return max__390686.call(this,x,y);
default:
return max__390687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__390687.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__390691 = (function (x){
return x;
});
var min__390692 = (function (x,y){
return ((x < y) ? x : y);
});
var min__390693 = (function() { 
var G__390695__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__390695 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390695__delegate.call(this, x, y, more);
};
G__390695.cljs$lang$maxFixedArity = 2;
G__390695.cljs$lang$applyTo = (function (arglist__390696){
var x = cljs.core.first(arglist__390696);
var y = cljs.core.first(cljs.core.next(arglist__390696));
var more = cljs.core.rest(cljs.core.next(arglist__390696));
return G__390695__delegate.call(this, x, y, more);
});
return G__390695;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__390691.call(this,x);
case  2 :
return min__390692.call(this,x,y);
default:
return min__390693.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__390693.cljs$lang$applyTo;
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
var rem__390697 = (n % d);

return cljs.core.fix.call(null,((n - rem__390697) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__390698 = cljs.core.quot.call(null,n,d);

return (n - (d * q__390698));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__390699 = (function (){
return Math.random.call(null);
});
var rand__390700 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__390699.call(this);
case  1 :
return rand__390700.call(this,n);
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
var _EQ__EQ___390702 = (function (x){
return true;
});
var _EQ__EQ___390703 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___390704 = (function() { 
var G__390706__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__390707 = y;
var G__390708 = cljs.core.first.call(null,more);
var G__390709 = cljs.core.next.call(null,more);
x = G__390707;
y = G__390708;
more = G__390709;
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
var G__390706 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390706__delegate.call(this, x, y, more);
};
G__390706.cljs$lang$maxFixedArity = 2;
G__390706.cljs$lang$applyTo = (function (arglist__390710){
var x = cljs.core.first(arglist__390710);
var y = cljs.core.first(cljs.core.next(arglist__390710));
var more = cljs.core.rest(cljs.core.next(arglist__390710));
return G__390706__delegate.call(this, x, y, more);
});
return G__390706;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___390702.call(this,x);
case  2 :
return _EQ__EQ___390703.call(this,x,y);
default:
return _EQ__EQ___390704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___390704.cljs$lang$applyTo;
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
var n__390711 = n;
var xs__390712 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____390713 = xs__390712;

if(cljs.core.truth_(and__3546__auto____390713))
{return (n__390711 > 0);
} else
{return and__3546__auto____390713;
}
})()))
{{
var G__390714 = (n__390711 - 1);
var G__390715 = cljs.core.next.call(null,xs__390712);
n__390711 = G__390714;
xs__390712 = G__390715;
continue;
}
} else
{return xs__390712;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__390720 = null;
var G__390720__390721 = (function (coll,n){
var temp__3695__auto____390716 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____390716))
{var xs__390717 = temp__3695__auto____390716;

return cljs.core.first.call(null,xs__390717);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__390720__390722 = (function (coll,n,not_found){
var temp__3695__auto____390718 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____390718))
{var xs__390719 = temp__3695__auto____390718;

return cljs.core.first.call(null,xs__390719);
} else
{return not_found;
}
});
G__390720 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__390720__390721.call(this,coll,n);
case  3 :
return G__390720__390722.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390720;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___390724 = (function (){
return "";
});
var str_STAR___390725 = (function (x){
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
var str_STAR___390726 = (function() { 
var G__390728__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__390729 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__390730 = cljs.core.next.call(null,more);
sb = G__390729;
more = G__390730;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__390728 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__390728__delegate.call(this, x, ys);
};
G__390728.cljs$lang$maxFixedArity = 1;
G__390728.cljs$lang$applyTo = (function (arglist__390731){
var x = cljs.core.first(arglist__390731);
var ys = cljs.core.rest(arglist__390731);
return G__390728__delegate.call(this, x, ys);
});
return G__390728;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___390724.call(this);
case  1 :
return str_STAR___390725.call(this,x);
default:
return str_STAR___390726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___390726.cljs$lang$applyTo;
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
var str__390732 = (function (){
return "";
});
var str__390733 = (function (x){
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
var str__390734 = (function() { 
var G__390736__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__390736 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__390736__delegate.call(this, x, ys);
};
G__390736.cljs$lang$maxFixedArity = 1;
G__390736.cljs$lang$applyTo = (function (arglist__390737){
var x = cljs.core.first(arglist__390737);
var ys = cljs.core.rest(arglist__390737);
return G__390736__delegate.call(this, x, ys);
});
return G__390736;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__390732.call(this);
case  1 :
return str__390733.call(this,x);
default:
return str__390734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__390734.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__390738 = (function (s,start){
return s.substring(start);
});
var subs__390739 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__390738.call(this,s,start);
case  3 :
return subs__390739.call(this,s,start,end);
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
var symbol__390741 = (function (name){
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
var symbol__390742 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__390741.call(this,ns);
case  2 :
return symbol__390742.call(this,ns,name);
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
var keyword__390744 = (function (name){
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
var keyword__390745 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__390744.call(this,ns);
case  2 :
return keyword__390745.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__390747 = cljs.core.seq.call(null,x);
var ys__390748 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__390747 === null)))
{return (ys__390748 === null);
} else
{if(cljs.core.truth_((ys__390748 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__390747),cljs.core.first.call(null,ys__390748))))
{{
var G__390749 = cljs.core.next.call(null,xs__390747);
var G__390750 = cljs.core.next.call(null,ys__390748);
xs__390747 = G__390749;
ys__390748 = G__390750;
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
return cljs.core.reduce.call(null,(function (p1__390751_SHARP_,p2__390752_SHARP_){
return cljs.core.hash_combine.call(null,p1__390751_SHARP_,cljs.core.hash.call(null,p2__390752_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__390753__390754 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__390753__390754))
{var G__390756__390758 = cljs.core.first.call(null,G__390753__390754);
var vec__390757__390759 = G__390756__390758;
var key_name__390760 = cljs.core.nth.call(null,vec__390757__390759,0,null);
var f__390761 = cljs.core.nth.call(null,vec__390757__390759,1,null);
var G__390753__390762 = G__390753__390754;

var G__390756__390763 = G__390756__390758;
var G__390753__390764 = G__390753__390762;

while(true){
var vec__390765__390766 = G__390756__390763;
var key_name__390767 = cljs.core.nth.call(null,vec__390765__390766,0,null);
var f__390768 = cljs.core.nth.call(null,vec__390765__390766,1,null);
var G__390753__390769 = G__390753__390764;

var str_name__390770 = cljs.core.name.call(null,key_name__390767);

obj[str_name__390770] = f__390768;
var temp__3698__auto____390771 = cljs.core.next.call(null,G__390753__390769);

if(cljs.core.truth_(temp__3698__auto____390771))
{var G__390753__390772 = temp__3698__auto____390771;

{
var G__390773 = cljs.core.first.call(null,G__390753__390772);
var G__390774 = G__390753__390772;
G__390756__390763 = G__390773;
G__390753__390764 = G__390774;
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
var this__390775 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__390776 = this;
return (new cljs.core.List(this__390776.meta,o,coll,(this__390776.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__390777 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__390778 = this;
return this__390778.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__390779 = this;
return this__390779.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__390780 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__390781 = this;
return this__390781.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__390782 = this;
return this__390782.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__390783 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__390784 = this;
return (new cljs.core.List(meta,this__390784.first,this__390784.rest,this__390784.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__390785 = this;
return this__390785.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__390786 = this;
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
var this__390787 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__390788 = this;
return (new cljs.core.List(this__390788.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__390789 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__390790 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__390791 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__390792 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__390793 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__390794 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__390795 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__390796 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__390797 = this;
return this__390797.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__390798 = this;
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
list.cljs$lang$applyTo = (function (arglist__390799){
var items = cljs.core.seq( arglist__390799 );;
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
var this__390800 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__390801 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__390802 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__390803 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__390803.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__390804 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__390805 = this;
return this__390805.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__390806 = this;
if(cljs.core.truth_((this__390806.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__390806.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__390807 = this;
return this__390807.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__390808 = this;
return (new cljs.core.Cons(meta,this__390808.first,this__390808.rest));
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
var G__390809 = null;
var G__390809__390810 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__390809__390811 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__390809 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__390809__390810.call(this,string,f);
case  3 :
return G__390809__390811.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390809;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__390813 = null;
var G__390813__390814 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__390813__390815 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__390813 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__390813__390814.call(this,string,k);
case  3 :
return G__390813__390815.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390813;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__390817 = null;
var G__390817__390818 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__390817__390819 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__390817 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__390817__390818.call(this,string,n);
case  3 :
return G__390817__390819.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390817;
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
var G__390827 = null;
var G__390827__390828 = (function (tsym390821,coll){
var tsym390821__390823 = this;

var this$__390824 = tsym390821__390823;

return cljs.core.get.call(null,coll,this$__390824.toString());
});
var G__390827__390829 = (function (tsym390822,coll,not_found){
var tsym390822__390825 = this;

var this$__390826 = tsym390822__390825;

return cljs.core.get.call(null,coll,this$__390826.toString(),not_found);
});
G__390827 = function(tsym390822,coll,not_found){
switch(arguments.length){
case  2 :
return G__390827__390828.call(this,tsym390822,coll);
case  3 :
return G__390827__390829.call(this,tsym390822,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__390827;
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
var x__390831 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__390831;
} else
{lazy_seq.x = x__390831.call(null);
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
var this__390832 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__390833 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__390834 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__390835 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__390835.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__390836 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__390837 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__390838 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__390839 = this;
return this__390839.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__390840 = this;
return (new cljs.core.LazySeq(meta,this__390840.realized,this__390840.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__390841 = cljs.core.array.call(null);

var s__390842 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__390842)))
{ary__390841.push(cljs.core.first.call(null,s__390842));
{
var G__390843 = cljs.core.next.call(null,s__390842);
s__390842 = G__390843;
continue;
}
} else
{return ary__390841;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__390844 = s;
var i__390845 = n;
var sum__390846 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____390847 = (i__390845 > 0);

if(cljs.core.truth_(and__3546__auto____390847))
{return cljs.core.seq.call(null,s__390844);
} else
{return and__3546__auto____390847;
}
})()))
{{
var G__390848 = cljs.core.next.call(null,s__390844);
var G__390849 = (i__390845 - 1);
var G__390850 = (sum__390846 + 1);
s__390844 = G__390848;
i__390845 = G__390849;
sum__390846 = G__390850;
continue;
}
} else
{return sum__390846;
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
var concat__390854 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__390855 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__390856 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__390851 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__390851))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__390851),concat.call(null,cljs.core.rest.call(null,s__390851),y));
} else
{return y;
}
})));
});
var concat__390857 = (function() { 
var G__390859__delegate = function (x,y,zs){
var cat__390853 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__390852 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__390852))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__390852),cat.call(null,cljs.core.rest.call(null,xys__390852),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__390853.call(null,concat.call(null,x,y),zs);
};
var G__390859 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390859__delegate.call(this, x, y, zs);
};
G__390859.cljs$lang$maxFixedArity = 2;
G__390859.cljs$lang$applyTo = (function (arglist__390860){
var x = cljs.core.first(arglist__390860);
var y = cljs.core.first(cljs.core.next(arglist__390860));
var zs = cljs.core.rest(cljs.core.next(arglist__390860));
return G__390859__delegate.call(this, x, y, zs);
});
return G__390859;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__390854.call(this);
case  1 :
return concat__390855.call(this,x);
case  2 :
return concat__390856.call(this,x,y);
default:
return concat__390857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__390857.cljs$lang$applyTo;
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
var list_STAR___390861 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___390862 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___390863 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___390864 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___390865 = (function() { 
var G__390867__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__390867 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__390867__delegate.call(this, a, b, c, d, more);
};
G__390867.cljs$lang$maxFixedArity = 4;
G__390867.cljs$lang$applyTo = (function (arglist__390868){
var a = cljs.core.first(arglist__390868);
var b = cljs.core.first(cljs.core.next(arglist__390868));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390868)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__390868))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__390868))));
return G__390867__delegate.call(this, a, b, c, d, more);
});
return G__390867;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___390861.call(this,a);
case  2 :
return list_STAR___390862.call(this,a,b);
case  3 :
return list_STAR___390863.call(this,a,b,c);
case  4 :
return list_STAR___390864.call(this,a,b,c,d);
default:
return list_STAR___390865.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___390865.cljs$lang$applyTo;
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
var apply__390878 = (function (f,args){
var fixed_arity__390869 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__390869 + 1)) <= fixed_arity__390869)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__390879 = (function (f,x,args){
var arglist__390870 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__390871 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__390870,fixed_arity__390871) <= fixed_arity__390871)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__390870));
} else
{return f.cljs$lang$applyTo(arglist__390870);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__390870));
}
});
var apply__390880 = (function (f,x,y,args){
var arglist__390872 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__390873 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__390872,fixed_arity__390873) <= fixed_arity__390873)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__390872));
} else
{return f.cljs$lang$applyTo(arglist__390872);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__390872));
}
});
var apply__390881 = (function (f,x,y,z,args){
var arglist__390874 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__390875 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__390874,fixed_arity__390875) <= fixed_arity__390875)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__390874));
} else
{return f.cljs$lang$applyTo(arglist__390874);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__390874));
}
});
var apply__390882 = (function() { 
var G__390884__delegate = function (f,a,b,c,d,args){
var arglist__390876 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__390877 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__390876,fixed_arity__390877) <= fixed_arity__390877)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__390876));
} else
{return f.cljs$lang$applyTo(arglist__390876);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__390876));
}
};
var G__390884 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__390884__delegate.call(this, f, a, b, c, d, args);
};
G__390884.cljs$lang$maxFixedArity = 5;
G__390884.cljs$lang$applyTo = (function (arglist__390885){
var f = cljs.core.first(arglist__390885);
var a = cljs.core.first(cljs.core.next(arglist__390885));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390885)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__390885))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__390885)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__390885)))));
return G__390884__delegate.call(this, f, a, b, c, d, args);
});
return G__390884;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__390878.call(this,f,a);
case  3 :
return apply__390879.call(this,f,a,b);
case  4 :
return apply__390880.call(this,f,a,b,c);
case  5 :
return apply__390881.call(this,f,a,b,c,d);
default:
return apply__390882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__390882.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__390886){
var obj = cljs.core.first(arglist__390886);
var f = cljs.core.first(cljs.core.next(arglist__390886));
var args = cljs.core.rest(cljs.core.next(arglist__390886));
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
var not_EQ___390887 = (function (x){
return false;
});
var not_EQ___390888 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___390889 = (function() { 
var G__390891__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__390891 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390891__delegate.call(this, x, y, more);
};
G__390891.cljs$lang$maxFixedArity = 2;
G__390891.cljs$lang$applyTo = (function (arglist__390892){
var x = cljs.core.first(arglist__390892);
var y = cljs.core.first(cljs.core.next(arglist__390892));
var more = cljs.core.rest(cljs.core.next(arglist__390892));
return G__390891__delegate.call(this, x, y, more);
});
return G__390891;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___390887.call(this,x);
case  2 :
return not_EQ___390888.call(this,x,y);
default:
return not_EQ___390889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___390889.cljs$lang$applyTo;
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
var G__390893 = pred;
var G__390894 = cljs.core.next.call(null,coll);
pred = G__390893;
coll = G__390894;
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
{var or__3548__auto____390895 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____390895))
{return or__3548__auto____390895;
} else
{{
var G__390896 = pred;
var G__390897 = cljs.core.next.call(null,coll);
pred = G__390896;
coll = G__390897;
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
var G__390898 = null;
var G__390898__390899 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__390898__390900 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__390898__390901 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__390898__390902 = (function() { 
var G__390904__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__390904 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__390904__delegate.call(this, x, y, zs);
};
G__390904.cljs$lang$maxFixedArity = 2;
G__390904.cljs$lang$applyTo = (function (arglist__390905){
var x = cljs.core.first(arglist__390905);
var y = cljs.core.first(cljs.core.next(arglist__390905));
var zs = cljs.core.rest(cljs.core.next(arglist__390905));
return G__390904__delegate.call(this, x, y, zs);
});
return G__390904;
})()
;
G__390898 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__390898__390899.call(this);
case  1 :
return G__390898__390900.call(this,x);
case  2 :
return G__390898__390901.call(this,x,y);
default:
return G__390898__390902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__390898.cljs$lang$maxFixedArity = 2;
G__390898.cljs$lang$applyTo = G__390898__390902.cljs$lang$applyTo;
return G__390898;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__390906__delegate = function (args){
return x;
};
var G__390906 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__390906__delegate.call(this, args);
};
G__390906.cljs$lang$maxFixedArity = 0;
G__390906.cljs$lang$applyTo = (function (arglist__390907){
var args = cljs.core.seq( arglist__390907 );;
return G__390906__delegate.call(this, args);
});
return G__390906;
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
var comp__390911 = (function (){
return cljs.core.identity;
});
var comp__390912 = (function (f){
return f;
});
var comp__390913 = (function (f,g){
return (function() {
var G__390917 = null;
var G__390917__390918 = (function (){
return f.call(null,g.call(null));
});
var G__390917__390919 = (function (x){
return f.call(null,g.call(null,x));
});
var G__390917__390920 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__390917__390921 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__390917__390922 = (function() { 
var G__390924__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__390924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__390924__delegate.call(this, x, y, z, args);
};
G__390924.cljs$lang$maxFixedArity = 3;
G__390924.cljs$lang$applyTo = (function (arglist__390925){
var x = cljs.core.first(arglist__390925);
var y = cljs.core.first(cljs.core.next(arglist__390925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__390925)));
return G__390924__delegate.call(this, x, y, z, args);
});
return G__390924;
})()
;
G__390917 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__390917__390918.call(this);
case  1 :
return G__390917__390919.call(this,x);
case  2 :
return G__390917__390920.call(this,x,y);
case  3 :
return G__390917__390921.call(this,x,y,z);
default:
return G__390917__390922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__390917.cljs$lang$maxFixedArity = 3;
G__390917.cljs$lang$applyTo = G__390917__390922.cljs$lang$applyTo;
return G__390917;
})()
});
var comp__390914 = (function (f,g,h){
return (function() {
var G__390926 = null;
var G__390926__390927 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__390926__390928 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__390926__390929 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__390926__390930 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__390926__390931 = (function() { 
var G__390933__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__390933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__390933__delegate.call(this, x, y, z, args);
};
G__390933.cljs$lang$maxFixedArity = 3;
G__390933.cljs$lang$applyTo = (function (arglist__390934){
var x = cljs.core.first(arglist__390934);
var y = cljs.core.first(cljs.core.next(arglist__390934));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390934)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__390934)));
return G__390933__delegate.call(this, x, y, z, args);
});
return G__390933;
})()
;
G__390926 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__390926__390927.call(this);
case  1 :
return G__390926__390928.call(this,x);
case  2 :
return G__390926__390929.call(this,x,y);
case  3 :
return G__390926__390930.call(this,x,y,z);
default:
return G__390926__390931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__390926.cljs$lang$maxFixedArity = 3;
G__390926.cljs$lang$applyTo = G__390926__390931.cljs$lang$applyTo;
return G__390926;
})()
});
var comp__390915 = (function() { 
var G__390935__delegate = function (f1,f2,f3,fs){
var fs__390908 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__390936__delegate = function (args){
var ret__390909 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__390908),args);
var fs__390910 = cljs.core.next.call(null,fs__390908);

while(true){
if(cljs.core.truth_(fs__390910))
{{
var G__390937 = cljs.core.first.call(null,fs__390910).call(null,ret__390909);
var G__390938 = cljs.core.next.call(null,fs__390910);
ret__390909 = G__390937;
fs__390910 = G__390938;
continue;
}
} else
{return ret__390909;
}
break;
}
};
var G__390936 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__390936__delegate.call(this, args);
};
G__390936.cljs$lang$maxFixedArity = 0;
G__390936.cljs$lang$applyTo = (function (arglist__390939){
var args = cljs.core.seq( arglist__390939 );;
return G__390936__delegate.call(this, args);
});
return G__390936;
})()
;
};
var G__390935 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__390935__delegate.call(this, f1, f2, f3, fs);
};
G__390935.cljs$lang$maxFixedArity = 3;
G__390935.cljs$lang$applyTo = (function (arglist__390940){
var f1 = cljs.core.first(arglist__390940);
var f2 = cljs.core.first(cljs.core.next(arglist__390940));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390940)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__390940)));
return G__390935__delegate.call(this, f1, f2, f3, fs);
});
return G__390935;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__390911.call(this);
case  1 :
return comp__390912.call(this,f1);
case  2 :
return comp__390913.call(this,f1,f2);
case  3 :
return comp__390914.call(this,f1,f2,f3);
default:
return comp__390915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__390915.cljs$lang$applyTo;
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
var partial__390941 = (function (f,arg1){
return (function() { 
var G__390946__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__390946 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__390946__delegate.call(this, args);
};
G__390946.cljs$lang$maxFixedArity = 0;
G__390946.cljs$lang$applyTo = (function (arglist__390947){
var args = cljs.core.seq( arglist__390947 );;
return G__390946__delegate.call(this, args);
});
return G__390946;
})()
;
});
var partial__390942 = (function (f,arg1,arg2){
return (function() { 
var G__390948__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__390948 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__390948__delegate.call(this, args);
};
G__390948.cljs$lang$maxFixedArity = 0;
G__390948.cljs$lang$applyTo = (function (arglist__390949){
var args = cljs.core.seq( arglist__390949 );;
return G__390948__delegate.call(this, args);
});
return G__390948;
})()
;
});
var partial__390943 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__390950__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__390950 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__390950__delegate.call(this, args);
};
G__390950.cljs$lang$maxFixedArity = 0;
G__390950.cljs$lang$applyTo = (function (arglist__390951){
var args = cljs.core.seq( arglist__390951 );;
return G__390950__delegate.call(this, args);
});
return G__390950;
})()
;
});
var partial__390944 = (function() { 
var G__390952__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__390953__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__390953 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__390953__delegate.call(this, args);
};
G__390953.cljs$lang$maxFixedArity = 0;
G__390953.cljs$lang$applyTo = (function (arglist__390954){
var args = cljs.core.seq( arglist__390954 );;
return G__390953__delegate.call(this, args);
});
return G__390953;
})()
;
};
var G__390952 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__390952__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__390952.cljs$lang$maxFixedArity = 4;
G__390952.cljs$lang$applyTo = (function (arglist__390955){
var f = cljs.core.first(arglist__390955);
var arg1 = cljs.core.first(cljs.core.next(arglist__390955));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390955)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__390955))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__390955))));
return G__390952__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__390952;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__390941.call(this,f,arg1);
case  3 :
return partial__390942.call(this,f,arg1,arg2);
case  4 :
return partial__390943.call(this,f,arg1,arg2,arg3);
default:
return partial__390944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__390944.cljs$lang$applyTo;
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
var fnil__390956 = (function (f,x){
return (function() {
var G__390960 = null;
var G__390960__390961 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__390960__390962 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__390960__390963 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__390960__390964 = (function() { 
var G__390966__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__390966 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__390966__delegate.call(this, a, b, c, ds);
};
G__390966.cljs$lang$maxFixedArity = 3;
G__390966.cljs$lang$applyTo = (function (arglist__390967){
var a = cljs.core.first(arglist__390967);
var b = cljs.core.first(cljs.core.next(arglist__390967));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390967)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__390967)));
return G__390966__delegate.call(this, a, b, c, ds);
});
return G__390966;
})()
;
G__390960 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__390960__390961.call(this,a);
case  2 :
return G__390960__390962.call(this,a,b);
case  3 :
return G__390960__390963.call(this,a,b,c);
default:
return G__390960__390964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__390960.cljs$lang$maxFixedArity = 3;
G__390960.cljs$lang$applyTo = G__390960__390964.cljs$lang$applyTo;
return G__390960;
})()
});
var fnil__390957 = (function (f,x,y){
return (function() {
var G__390968 = null;
var G__390968__390969 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__390968__390970 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__390968__390971 = (function() { 
var G__390973__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__390973 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__390973__delegate.call(this, a, b, c, ds);
};
G__390973.cljs$lang$maxFixedArity = 3;
G__390973.cljs$lang$applyTo = (function (arglist__390974){
var a = cljs.core.first(arglist__390974);
var b = cljs.core.first(cljs.core.next(arglist__390974));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390974)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__390974)));
return G__390973__delegate.call(this, a, b, c, ds);
});
return G__390973;
})()
;
G__390968 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__390968__390969.call(this,a,b);
case  3 :
return G__390968__390970.call(this,a,b,c);
default:
return G__390968__390971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__390968.cljs$lang$maxFixedArity = 3;
G__390968.cljs$lang$applyTo = G__390968__390971.cljs$lang$applyTo;
return G__390968;
})()
});
var fnil__390958 = (function (f,x,y,z){
return (function() {
var G__390975 = null;
var G__390975__390976 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__390975__390977 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__390975__390978 = (function() { 
var G__390980__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__390980 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__390980__delegate.call(this, a, b, c, ds);
};
G__390980.cljs$lang$maxFixedArity = 3;
G__390980.cljs$lang$applyTo = (function (arglist__390981){
var a = cljs.core.first(arglist__390981);
var b = cljs.core.first(cljs.core.next(arglist__390981));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__390981)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__390981)));
return G__390980__delegate.call(this, a, b, c, ds);
});
return G__390980;
})()
;
G__390975 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__390975__390976.call(this,a,b);
case  3 :
return G__390975__390977.call(this,a,b,c);
default:
return G__390975__390978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__390975.cljs$lang$maxFixedArity = 3;
G__390975.cljs$lang$applyTo = G__390975__390978.cljs$lang$applyTo;
return G__390975;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__390956.call(this,f,x);
case  3 :
return fnil__390957.call(this,f,x,y);
case  4 :
return fnil__390958.call(this,f,x,y,z);
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
var mapi__390984 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____390982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____390982))
{var s__390983 = temp__3698__auto____390982;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__390983)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__390983)));
} else
{return null;
}
})));
});

return mapi__390984.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____390985 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____390985))
{var s__390986 = temp__3698__auto____390985;

var x__390987 = f.call(null,cljs.core.first.call(null,s__390986));

if(cljs.core.truth_((x__390987 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__390986));
} else
{return cljs.core.cons.call(null,x__390987,keep.call(null,f,cljs.core.rest.call(null,s__390986)));
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
var keepi__390997 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____390994 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____390994))
{var s__390995 = temp__3698__auto____390994;

var x__390996 = f.call(null,idx,cljs.core.first.call(null,s__390995));

if(cljs.core.truth_((x__390996 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__390995));
} else
{return cljs.core.cons.call(null,x__390996,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__390995)));
}
} else
{return null;
}
})));
});

return keepi__390997.call(null,0,coll);
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
var every_pred__391042 = (function (p){
return (function() {
var ep1 = null;
var ep1__391047 = (function (){
return true;
});
var ep1__391048 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__391049 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391004 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____391004))
{return p.call(null,y);
} else
{return and__3546__auto____391004;
}
})());
});
var ep1__391050 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391005 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____391005))
{var and__3546__auto____391006 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____391006))
{return p.call(null,z);
} else
{return and__3546__auto____391006;
}
} else
{return and__3546__auto____391005;
}
})());
});
var ep1__391051 = (function() { 
var G__391053__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391007 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____391007))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____391007;
}
})());
};
var G__391053 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391053__delegate.call(this, x, y, z, args);
};
G__391053.cljs$lang$maxFixedArity = 3;
G__391053.cljs$lang$applyTo = (function (arglist__391054){
var x = cljs.core.first(arglist__391054);
var y = cljs.core.first(cljs.core.next(arglist__391054));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391054)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391054)));
return G__391053__delegate.call(this, x, y, z, args);
});
return G__391053;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__391047.call(this);
case  1 :
return ep1__391048.call(this,x);
case  2 :
return ep1__391049.call(this,x,y);
case  3 :
return ep1__391050.call(this,x,y,z);
default:
return ep1__391051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__391051.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__391043 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__391055 = (function (){
return true;
});
var ep2__391056 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391008 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____391008))
{return p2.call(null,x);
} else
{return and__3546__auto____391008;
}
})());
});
var ep2__391057 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391009 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____391009))
{var and__3546__auto____391010 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____391010))
{var and__3546__auto____391011 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____391011))
{return p2.call(null,y);
} else
{return and__3546__auto____391011;
}
} else
{return and__3546__auto____391010;
}
} else
{return and__3546__auto____391009;
}
})());
});
var ep2__391058 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391012 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____391012))
{var and__3546__auto____391013 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____391013))
{var and__3546__auto____391014 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____391014))
{var and__3546__auto____391015 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____391015))
{var and__3546__auto____391016 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____391016))
{return p2.call(null,z);
} else
{return and__3546__auto____391016;
}
} else
{return and__3546__auto____391015;
}
} else
{return and__3546__auto____391014;
}
} else
{return and__3546__auto____391013;
}
} else
{return and__3546__auto____391012;
}
})());
});
var ep2__391059 = (function() { 
var G__391061__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391017 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____391017))
{return cljs.core.every_QMARK_.call(null,(function (p1__390988_SHARP_){
var and__3546__auto____391018 = p1.call(null,p1__390988_SHARP_);

if(cljs.core.truth_(and__3546__auto____391018))
{return p2.call(null,p1__390988_SHARP_);
} else
{return and__3546__auto____391018;
}
}),args);
} else
{return and__3546__auto____391017;
}
})());
};
var G__391061 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391061__delegate.call(this, x, y, z, args);
};
G__391061.cljs$lang$maxFixedArity = 3;
G__391061.cljs$lang$applyTo = (function (arglist__391062){
var x = cljs.core.first(arglist__391062);
var y = cljs.core.first(cljs.core.next(arglist__391062));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391062)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391062)));
return G__391061__delegate.call(this, x, y, z, args);
});
return G__391061;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__391055.call(this);
case  1 :
return ep2__391056.call(this,x);
case  2 :
return ep2__391057.call(this,x,y);
case  3 :
return ep2__391058.call(this,x,y,z);
default:
return ep2__391059.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__391059.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__391044 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__391063 = (function (){
return true;
});
var ep3__391064 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391019 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____391019))
{var and__3546__auto____391020 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____391020))
{return p3.call(null,x);
} else
{return and__3546__auto____391020;
}
} else
{return and__3546__auto____391019;
}
})());
});
var ep3__391065 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391021 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____391021))
{var and__3546__auto____391022 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____391022))
{var and__3546__auto____391023 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____391023))
{var and__3546__auto____391024 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____391024))
{var and__3546__auto____391025 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____391025))
{return p3.call(null,y);
} else
{return and__3546__auto____391025;
}
} else
{return and__3546__auto____391024;
}
} else
{return and__3546__auto____391023;
}
} else
{return and__3546__auto____391022;
}
} else
{return and__3546__auto____391021;
}
})());
});
var ep3__391066 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391026 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____391026))
{var and__3546__auto____391027 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____391027))
{var and__3546__auto____391028 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____391028))
{var and__3546__auto____391029 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____391029))
{var and__3546__auto____391030 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____391030))
{var and__3546__auto____391031 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____391031))
{var and__3546__auto____391032 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____391032))
{var and__3546__auto____391033 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____391033))
{return p3.call(null,z);
} else
{return and__3546__auto____391033;
}
} else
{return and__3546__auto____391032;
}
} else
{return and__3546__auto____391031;
}
} else
{return and__3546__auto____391030;
}
} else
{return and__3546__auto____391029;
}
} else
{return and__3546__auto____391028;
}
} else
{return and__3546__auto____391027;
}
} else
{return and__3546__auto____391026;
}
})());
});
var ep3__391067 = (function() { 
var G__391069__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391034 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____391034))
{return cljs.core.every_QMARK_.call(null,(function (p1__390989_SHARP_){
var and__3546__auto____391035 = p1.call(null,p1__390989_SHARP_);

if(cljs.core.truth_(and__3546__auto____391035))
{var and__3546__auto____391036 = p2.call(null,p1__390989_SHARP_);

if(cljs.core.truth_(and__3546__auto____391036))
{return p3.call(null,p1__390989_SHARP_);
} else
{return and__3546__auto____391036;
}
} else
{return and__3546__auto____391035;
}
}),args);
} else
{return and__3546__auto____391034;
}
})());
};
var G__391069 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391069__delegate.call(this, x, y, z, args);
};
G__391069.cljs$lang$maxFixedArity = 3;
G__391069.cljs$lang$applyTo = (function (arglist__391070){
var x = cljs.core.first(arglist__391070);
var y = cljs.core.first(cljs.core.next(arglist__391070));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391070)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391070)));
return G__391069__delegate.call(this, x, y, z, args);
});
return G__391069;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__391063.call(this);
case  1 :
return ep3__391064.call(this,x);
case  2 :
return ep3__391065.call(this,x,y);
case  3 :
return ep3__391066.call(this,x,y,z);
default:
return ep3__391067.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__391067.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__391045 = (function() { 
var G__391071__delegate = function (p1,p2,p3,ps){
var ps__391037 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__391072 = (function (){
return true;
});
var epn__391073 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__390990_SHARP_){
return p1__390990_SHARP_.call(null,x);
}),ps__391037);
});
var epn__391074 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__390991_SHARP_){
var and__3546__auto____391038 = p1__390991_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____391038))
{return p1__390991_SHARP_.call(null,y);
} else
{return and__3546__auto____391038;
}
}),ps__391037);
});
var epn__391075 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__390992_SHARP_){
var and__3546__auto____391039 = p1__390992_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____391039))
{var and__3546__auto____391040 = p1__390992_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____391040))
{return p1__390992_SHARP_.call(null,z);
} else
{return and__3546__auto____391040;
}
} else
{return and__3546__auto____391039;
}
}),ps__391037);
});
var epn__391076 = (function() { 
var G__391078__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____391041 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____391041))
{return cljs.core.every_QMARK_.call(null,(function (p1__390993_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__390993_SHARP_,args);
}),ps__391037);
} else
{return and__3546__auto____391041;
}
})());
};
var G__391078 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391078__delegate.call(this, x, y, z, args);
};
G__391078.cljs$lang$maxFixedArity = 3;
G__391078.cljs$lang$applyTo = (function (arglist__391079){
var x = cljs.core.first(arglist__391079);
var y = cljs.core.first(cljs.core.next(arglist__391079));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391079)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391079)));
return G__391078__delegate.call(this, x, y, z, args);
});
return G__391078;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__391072.call(this);
case  1 :
return epn__391073.call(this,x);
case  2 :
return epn__391074.call(this,x,y);
case  3 :
return epn__391075.call(this,x,y,z);
default:
return epn__391076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__391076.cljs$lang$applyTo;
return epn;
})()
};
var G__391071 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391071__delegate.call(this, p1, p2, p3, ps);
};
G__391071.cljs$lang$maxFixedArity = 3;
G__391071.cljs$lang$applyTo = (function (arglist__391080){
var p1 = cljs.core.first(arglist__391080);
var p2 = cljs.core.first(cljs.core.next(arglist__391080));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391080)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391080)));
return G__391071__delegate.call(this, p1, p2, p3, ps);
});
return G__391071;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__391042.call(this,p1);
case  2 :
return every_pred__391043.call(this,p1,p2);
case  3 :
return every_pred__391044.call(this,p1,p2,p3);
default:
return every_pred__391045.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__391045.cljs$lang$applyTo;
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
var some_fn__391120 = (function (p){
return (function() {
var sp1 = null;
var sp1__391125 = (function (){
return null;
});
var sp1__391126 = (function (x){
return p.call(null,x);
});
var sp1__391127 = (function (x,y){
var or__3548__auto____391082 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____391082))
{return or__3548__auto____391082;
} else
{return p.call(null,y);
}
});
var sp1__391128 = (function (x,y,z){
var or__3548__auto____391083 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____391083))
{return or__3548__auto____391083;
} else
{var or__3548__auto____391084 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____391084))
{return or__3548__auto____391084;
} else
{return p.call(null,z);
}
}
});
var sp1__391129 = (function() { 
var G__391131__delegate = function (x,y,z,args){
var or__3548__auto____391085 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____391085))
{return or__3548__auto____391085;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__391131 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391131__delegate.call(this, x, y, z, args);
};
G__391131.cljs$lang$maxFixedArity = 3;
G__391131.cljs$lang$applyTo = (function (arglist__391132){
var x = cljs.core.first(arglist__391132);
var y = cljs.core.first(cljs.core.next(arglist__391132));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391132)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391132)));
return G__391131__delegate.call(this, x, y, z, args);
});
return G__391131;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__391125.call(this);
case  1 :
return sp1__391126.call(this,x);
case  2 :
return sp1__391127.call(this,x,y);
case  3 :
return sp1__391128.call(this,x,y,z);
default:
return sp1__391129.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__391129.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__391121 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__391133 = (function (){
return null;
});
var sp2__391134 = (function (x){
var or__3548__auto____391086 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____391086))
{return or__3548__auto____391086;
} else
{return p2.call(null,x);
}
});
var sp2__391135 = (function (x,y){
var or__3548__auto____391087 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____391087))
{return or__3548__auto____391087;
} else
{var or__3548__auto____391088 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____391088))
{return or__3548__auto____391088;
} else
{var or__3548__auto____391089 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____391089))
{return or__3548__auto____391089;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__391136 = (function (x,y,z){
var or__3548__auto____391090 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____391090))
{return or__3548__auto____391090;
} else
{var or__3548__auto____391091 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____391091))
{return or__3548__auto____391091;
} else
{var or__3548__auto____391092 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____391092))
{return or__3548__auto____391092;
} else
{var or__3548__auto____391093 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____391093))
{return or__3548__auto____391093;
} else
{var or__3548__auto____391094 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____391094))
{return or__3548__auto____391094;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__391137 = (function() { 
var G__391139__delegate = function (x,y,z,args){
var or__3548__auto____391095 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____391095))
{return or__3548__auto____391095;
} else
{return cljs.core.some.call(null,(function (p1__390998_SHARP_){
var or__3548__auto____391096 = p1.call(null,p1__390998_SHARP_);

if(cljs.core.truth_(or__3548__auto____391096))
{return or__3548__auto____391096;
} else
{return p2.call(null,p1__390998_SHARP_);
}
}),args);
}
};
var G__391139 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391139__delegate.call(this, x, y, z, args);
};
G__391139.cljs$lang$maxFixedArity = 3;
G__391139.cljs$lang$applyTo = (function (arglist__391140){
var x = cljs.core.first(arglist__391140);
var y = cljs.core.first(cljs.core.next(arglist__391140));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391140)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391140)));
return G__391139__delegate.call(this, x, y, z, args);
});
return G__391139;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__391133.call(this);
case  1 :
return sp2__391134.call(this,x);
case  2 :
return sp2__391135.call(this,x,y);
case  3 :
return sp2__391136.call(this,x,y,z);
default:
return sp2__391137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__391137.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__391122 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__391141 = (function (){
return null;
});
var sp3__391142 = (function (x){
var or__3548__auto____391097 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____391097))
{return or__3548__auto____391097;
} else
{var or__3548__auto____391098 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____391098))
{return or__3548__auto____391098;
} else
{return p3.call(null,x);
}
}
});
var sp3__391143 = (function (x,y){
var or__3548__auto____391099 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____391099))
{return or__3548__auto____391099;
} else
{var or__3548__auto____391100 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____391100))
{return or__3548__auto____391100;
} else
{var or__3548__auto____391101 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____391101))
{return or__3548__auto____391101;
} else
{var or__3548__auto____391102 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____391102))
{return or__3548__auto____391102;
} else
{var or__3548__auto____391103 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____391103))
{return or__3548__auto____391103;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__391144 = (function (x,y,z){
var or__3548__auto____391104 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____391104))
{return or__3548__auto____391104;
} else
{var or__3548__auto____391105 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____391105))
{return or__3548__auto____391105;
} else
{var or__3548__auto____391106 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____391106))
{return or__3548__auto____391106;
} else
{var or__3548__auto____391107 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____391107))
{return or__3548__auto____391107;
} else
{var or__3548__auto____391108 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____391108))
{return or__3548__auto____391108;
} else
{var or__3548__auto____391109 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____391109))
{return or__3548__auto____391109;
} else
{var or__3548__auto____391110 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____391110))
{return or__3548__auto____391110;
} else
{var or__3548__auto____391111 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____391111))
{return or__3548__auto____391111;
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
var sp3__391145 = (function() { 
var G__391147__delegate = function (x,y,z,args){
var or__3548__auto____391112 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____391112))
{return or__3548__auto____391112;
} else
{return cljs.core.some.call(null,(function (p1__390999_SHARP_){
var or__3548__auto____391113 = p1.call(null,p1__390999_SHARP_);

if(cljs.core.truth_(or__3548__auto____391113))
{return or__3548__auto____391113;
} else
{var or__3548__auto____391114 = p2.call(null,p1__390999_SHARP_);

if(cljs.core.truth_(or__3548__auto____391114))
{return or__3548__auto____391114;
} else
{return p3.call(null,p1__390999_SHARP_);
}
}
}),args);
}
};
var G__391147 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391147__delegate.call(this, x, y, z, args);
};
G__391147.cljs$lang$maxFixedArity = 3;
G__391147.cljs$lang$applyTo = (function (arglist__391148){
var x = cljs.core.first(arglist__391148);
var y = cljs.core.first(cljs.core.next(arglist__391148));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391148)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391148)));
return G__391147__delegate.call(this, x, y, z, args);
});
return G__391147;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__391141.call(this);
case  1 :
return sp3__391142.call(this,x);
case  2 :
return sp3__391143.call(this,x,y);
case  3 :
return sp3__391144.call(this,x,y,z);
default:
return sp3__391145.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__391145.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__391123 = (function() { 
var G__391149__delegate = function (p1,p2,p3,ps){
var ps__391115 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__391150 = (function (){
return null;
});
var spn__391151 = (function (x){
return cljs.core.some.call(null,(function (p1__391000_SHARP_){
return p1__391000_SHARP_.call(null,x);
}),ps__391115);
});
var spn__391152 = (function (x,y){
return cljs.core.some.call(null,(function (p1__391001_SHARP_){
var or__3548__auto____391116 = p1__391001_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____391116))
{return or__3548__auto____391116;
} else
{return p1__391001_SHARP_.call(null,y);
}
}),ps__391115);
});
var spn__391153 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__391002_SHARP_){
var or__3548__auto____391117 = p1__391002_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____391117))
{return or__3548__auto____391117;
} else
{var or__3548__auto____391118 = p1__391002_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____391118))
{return or__3548__auto____391118;
} else
{return p1__391002_SHARP_.call(null,z);
}
}
}),ps__391115);
});
var spn__391154 = (function() { 
var G__391156__delegate = function (x,y,z,args){
var or__3548__auto____391119 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____391119))
{return or__3548__auto____391119;
} else
{return cljs.core.some.call(null,(function (p1__391003_SHARP_){
return cljs.core.some.call(null,p1__391003_SHARP_,args);
}),ps__391115);
}
};
var G__391156 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391156__delegate.call(this, x, y, z, args);
};
G__391156.cljs$lang$maxFixedArity = 3;
G__391156.cljs$lang$applyTo = (function (arglist__391157){
var x = cljs.core.first(arglist__391157);
var y = cljs.core.first(cljs.core.next(arglist__391157));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391157)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391157)));
return G__391156__delegate.call(this, x, y, z, args);
});
return G__391156;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__391150.call(this);
case  1 :
return spn__391151.call(this,x);
case  2 :
return spn__391152.call(this,x,y);
case  3 :
return spn__391153.call(this,x,y,z);
default:
return spn__391154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__391154.cljs$lang$applyTo;
return spn;
})()
};
var G__391149 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391149__delegate.call(this, p1, p2, p3, ps);
};
G__391149.cljs$lang$maxFixedArity = 3;
G__391149.cljs$lang$applyTo = (function (arglist__391158){
var p1 = cljs.core.first(arglist__391158);
var p2 = cljs.core.first(cljs.core.next(arglist__391158));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391158)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391158)));
return G__391149__delegate.call(this, p1, p2, p3, ps);
});
return G__391149;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__391120.call(this,p1);
case  2 :
return some_fn__391121.call(this,p1,p2);
case  3 :
return some_fn__391122.call(this,p1,p2,p3);
default:
return some_fn__391123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__391123.cljs$lang$applyTo;
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
var map__391171 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____391159 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391159))
{var s__391160 = temp__3698__auto____391159;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__391160)),map.call(null,f,cljs.core.rest.call(null,s__391160)));
} else
{return null;
}
})));
});
var map__391172 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__391161 = cljs.core.seq.call(null,c1);
var s2__391162 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____391163 = s1__391161;

if(cljs.core.truth_(and__3546__auto____391163))
{return s2__391162;
} else
{return and__3546__auto____391163;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__391161),cljs.core.first.call(null,s2__391162)),map.call(null,f,cljs.core.rest.call(null,s1__391161),cljs.core.rest.call(null,s2__391162)));
} else
{return null;
}
})));
});
var map__391173 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__391164 = cljs.core.seq.call(null,c1);
var s2__391165 = cljs.core.seq.call(null,c2);
var s3__391166 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____391167 = s1__391164;

if(cljs.core.truth_(and__3546__auto____391167))
{var and__3546__auto____391168 = s2__391165;

if(cljs.core.truth_(and__3546__auto____391168))
{return s3__391166;
} else
{return and__3546__auto____391168;
}
} else
{return and__3546__auto____391167;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__391164),cljs.core.first.call(null,s2__391165),cljs.core.first.call(null,s3__391166)),map.call(null,f,cljs.core.rest.call(null,s1__391164),cljs.core.rest.call(null,s2__391165),cljs.core.rest.call(null,s3__391166)));
} else
{return null;
}
})));
});
var map__391174 = (function() { 
var G__391176__delegate = function (f,c1,c2,c3,colls){
var step__391170 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__391169 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__391169)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__391169),step.call(null,map.call(null,cljs.core.rest,ss__391169)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__391081_SHARP_){
return cljs.core.apply.call(null,f,p1__391081_SHARP_);
}),step__391170.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__391176 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__391176__delegate.call(this, f, c1, c2, c3, colls);
};
G__391176.cljs$lang$maxFixedArity = 4;
G__391176.cljs$lang$applyTo = (function (arglist__391177){
var f = cljs.core.first(arglist__391177);
var c1 = cljs.core.first(cljs.core.next(arglist__391177));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391177)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__391177))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__391177))));
return G__391176__delegate.call(this, f, c1, c2, c3, colls);
});
return G__391176;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__391171.call(this,f,c1);
case  3 :
return map__391172.call(this,f,c1,c2);
case  4 :
return map__391173.call(this,f,c1,c2,c3);
default:
return map__391174.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__391174.cljs$lang$applyTo;
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
{var temp__3698__auto____391178 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391178))
{var s__391179 = temp__3698__auto____391178;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__391179),take.call(null,(n - 1),cljs.core.rest.call(null,s__391179)));
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
var step__391182 = (function (n,coll){
while(true){
var s__391180 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____391181 = (n > 0);

if(cljs.core.truth_(and__3546__auto____391181))
{return s__391180;
} else
{return and__3546__auto____391181;
}
})()))
{{
var G__391183 = (n - 1);
var G__391184 = cljs.core.rest.call(null,s__391180);
n = G__391183;
coll = G__391184;
continue;
}
} else
{return s__391180;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__391182.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__391185 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__391186 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__391185.call(this,n);
case  2 :
return drop_last__391186.call(this,n,s);
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
var s__391188 = cljs.core.seq.call(null,coll);
var lead__391189 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__391189))
{{
var G__391190 = cljs.core.next.call(null,s__391188);
var G__391191 = cljs.core.next.call(null,lead__391189);
s__391188 = G__391190;
lead__391189 = G__391191;
continue;
}
} else
{return s__391188;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__391194 = (function (pred,coll){
while(true){
var s__391192 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____391193 = s__391192;

if(cljs.core.truth_(and__3546__auto____391193))
{return pred.call(null,cljs.core.first.call(null,s__391192));
} else
{return and__3546__auto____391193;
}
})()))
{{
var G__391195 = pred;
var G__391196 = cljs.core.rest.call(null,s__391192);
pred = G__391195;
coll = G__391196;
continue;
}
} else
{return s__391192;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__391194.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____391197 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391197))
{var s__391198 = temp__3698__auto____391197;

return cljs.core.concat.call(null,s__391198,cycle.call(null,s__391198));
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
var repeat__391199 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__391200 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__391199.call(this,n);
case  2 :
return repeat__391200.call(this,n,x);
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
var repeatedly__391202 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__391203 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__391202.call(this,n);
case  2 :
return repeatedly__391203.call(this,n,f);
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
var interleave__391209 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__391205 = cljs.core.seq.call(null,c1);
var s2__391206 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____391207 = s1__391205;

if(cljs.core.truth_(and__3546__auto____391207))
{return s2__391206;
} else
{return and__3546__auto____391207;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__391205),cljs.core.cons.call(null,cljs.core.first.call(null,s2__391206),interleave.call(null,cljs.core.rest.call(null,s1__391205),cljs.core.rest.call(null,s2__391206))));
} else
{return null;
}
})));
});
var interleave__391210 = (function() { 
var G__391212__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__391208 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__391208)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__391208),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__391208)));
} else
{return null;
}
})));
};
var G__391212 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__391212__delegate.call(this, c1, c2, colls);
};
G__391212.cljs$lang$maxFixedArity = 2;
G__391212.cljs$lang$applyTo = (function (arglist__391213){
var c1 = cljs.core.first(arglist__391213);
var c2 = cljs.core.first(cljs.core.next(arglist__391213));
var colls = cljs.core.rest(cljs.core.next(arglist__391213));
return G__391212__delegate.call(this, c1, c2, colls);
});
return G__391212;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__391209.call(this,c1,c2);
default:
return interleave__391210.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__391210.cljs$lang$applyTo;
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
var cat__391216 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____391214 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____391214))
{var coll__391215 = temp__3695__auto____391214;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__391215),cat.call(null,cljs.core.rest.call(null,coll__391215),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__391216.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__391217 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__391218 = (function() { 
var G__391220__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__391220 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__391220__delegate.call(this, f, coll, colls);
};
G__391220.cljs$lang$maxFixedArity = 2;
G__391220.cljs$lang$applyTo = (function (arglist__391221){
var f = cljs.core.first(arglist__391221);
var coll = cljs.core.first(cljs.core.next(arglist__391221));
var colls = cljs.core.rest(cljs.core.next(arglist__391221));
return G__391220__delegate.call(this, f, coll, colls);
});
return G__391220;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__391217.call(this,f,coll);
default:
return mapcat__391218.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__391218.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____391222 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391222))
{var s__391223 = temp__3698__auto____391222;

var f__391224 = cljs.core.first.call(null,s__391223);
var r__391225 = cljs.core.rest.call(null,s__391223);

if(cljs.core.truth_(pred.call(null,f__391224)))
{return cljs.core.cons.call(null,f__391224,filter.call(null,pred,r__391225));
} else
{return filter.call(null,pred,r__391225);
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
var walk__391227 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__391227.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__391226_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__391226_SHARP_));
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
var partition__391234 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__391235 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____391228 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391228))
{var s__391229 = temp__3698__auto____391228;

var p__391230 = cljs.core.take.call(null,n,s__391229);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__391230))))
{return cljs.core.cons.call(null,p__391230,partition.call(null,n,step,cljs.core.drop.call(null,step,s__391229)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__391236 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____391231 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391231))
{var s__391232 = temp__3698__auto____391231;

var p__391233 = cljs.core.take.call(null,n,s__391232);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__391233))))
{return cljs.core.cons.call(null,p__391233,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__391232)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__391233,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__391234.call(this,n,step);
case  3 :
return partition__391235.call(this,n,step,pad);
case  4 :
return partition__391236.call(this,n,step,pad,coll);
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
var get_in__391242 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__391243 = (function (m,ks,not_found){
var sentinel__391238 = cljs.core.lookup_sentinel;
var m__391239 = m;
var ks__391240 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__391240))
{var m__391241 = cljs.core.get.call(null,m__391239,cljs.core.first.call(null,ks__391240),sentinel__391238);

if(cljs.core.truth_((sentinel__391238 === m__391241)))
{return not_found;
} else
{{
var G__391245 = sentinel__391238;
var G__391246 = m__391241;
var G__391247 = cljs.core.next.call(null,ks__391240);
sentinel__391238 = G__391245;
m__391239 = G__391246;
ks__391240 = G__391247;
continue;
}
}
} else
{return m__391239;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__391242.call(this,m,ks);
case  3 :
return get_in__391243.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__391248,v){
var vec__391249__391250 = p__391248;
var k__391251 = cljs.core.nth.call(null,vec__391249__391250,0,null);
var ks__391252 = cljs.core.nthnext.call(null,vec__391249__391250,1);

if(cljs.core.truth_(ks__391252))
{return cljs.core.assoc.call(null,m,k__391251,assoc_in.call(null,cljs.core.get.call(null,m,k__391251),ks__391252,v));
} else
{return cljs.core.assoc.call(null,m,k__391251,v);
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
var update_in__delegate = function (m,p__391253,f,args){
var vec__391254__391255 = p__391253;
var k__391256 = cljs.core.nth.call(null,vec__391254__391255,0,null);
var ks__391257 = cljs.core.nthnext.call(null,vec__391254__391255,1);

if(cljs.core.truth_(ks__391257))
{return cljs.core.assoc.call(null,m,k__391256,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__391256),ks__391257,f,args));
} else
{return cljs.core.assoc.call(null,m,k__391256,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__391256),args));
}
};
var update_in = function (m,p__391253,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__391253, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__391258){
var m = cljs.core.first(arglist__391258);
var p__391253 = cljs.core.first(cljs.core.next(arglist__391258));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391258)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391258)));
return update_in__delegate.call(this, m, p__391253, f, args);
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
var this__391259 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__391292 = null;
var G__391292__391293 = (function (coll,k){
var this__391260 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__391292__391294 = (function (coll,k,not_found){
var this__391261 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__391292 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__391292__391293.call(this,coll,k);
case  3 :
return G__391292__391294.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391292;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__391262 = this;
var new_array__391263 = cljs.core.aclone.call(null,this__391262.array);

(new_array__391263[k] = v);
return (new cljs.core.Vector(this__391262.meta,new_array__391263));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__391296 = null;
var G__391296__391297 = (function (tsym391264,k){
var this__391266 = this;
var tsym391264__391267 = this;

var coll__391268 = tsym391264__391267;

return cljs.core._lookup.call(null,coll__391268,k);
});
var G__391296__391298 = (function (tsym391265,k,not_found){
var this__391269 = this;
var tsym391265__391270 = this;

var coll__391271 = tsym391265__391270;

return cljs.core._lookup.call(null,coll__391271,k,not_found);
});
G__391296 = function(tsym391265,k,not_found){
switch(arguments.length){
case  2 :
return G__391296__391297.call(this,tsym391265,k);
case  3 :
return G__391296__391298.call(this,tsym391265,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391296;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__391272 = this;
var new_array__391273 = cljs.core.aclone.call(null,this__391272.array);

new_array__391273.push(o);
return (new cljs.core.Vector(this__391272.meta,new_array__391273));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__391300 = null;
var G__391300__391301 = (function (v,f){
var this__391274 = this;
return cljs.core.ci_reduce.call(null,this__391274.array,f);
});
var G__391300__391302 = (function (v,f,start){
var this__391275 = this;
return cljs.core.ci_reduce.call(null,this__391275.array,f,start);
});
G__391300 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__391300__391301.call(this,v,f);
case  3 :
return G__391300__391302.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391300;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__391276 = this;
if(cljs.core.truth_((this__391276.array.length > 0)))
{var vector_seq__391277 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__391276.array.length)))
{return cljs.core.cons.call(null,(this__391276.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__391277.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__391278 = this;
return this__391278.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__391279 = this;
var count__391280 = this__391279.array.length;

if(cljs.core.truth_((count__391280 > 0)))
{return (this__391279.array[(count__391280 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__391281 = this;
if(cljs.core.truth_((this__391281.array.length > 0)))
{var new_array__391282 = cljs.core.aclone.call(null,this__391281.array);

new_array__391282.pop();
return (new cljs.core.Vector(this__391281.meta,new_array__391282));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__391283 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__391284 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__391285 = this;
return (new cljs.core.Vector(meta,this__391285.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__391286 = this;
return this__391286.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__391304 = null;
var G__391304__391305 = (function (coll,n){
var this__391287 = this;
if(cljs.core.truth_((function (){var and__3546__auto____391288 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____391288))
{return (n < this__391287.array.length);
} else
{return and__3546__auto____391288;
}
})()))
{return (this__391287.array[n]);
} else
{return null;
}
});
var G__391304__391306 = (function (coll,n,not_found){
var this__391289 = this;
if(cljs.core.truth_((function (){var and__3546__auto____391290 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____391290))
{return (n < this__391289.array.length);
} else
{return and__3546__auto____391290;
}
})()))
{return (this__391289.array[n]);
} else
{return not_found;
}
});
G__391304 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__391304__391305.call(this,coll,n);
case  3 :
return G__391304__391306.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391304;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__391291 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__391291.meta);
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
vector.cljs$lang$applyTo = (function (arglist__391308){
var args = cljs.core.seq( arglist__391308 );;
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
var this__391309 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__391337 = null;
var G__391337__391338 = (function (coll,k){
var this__391310 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__391337__391339 = (function (coll,k,not_found){
var this__391311 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__391337 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__391337__391338.call(this,coll,k);
case  3 :
return G__391337__391339.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391337;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__391312 = this;
var v_pos__391313 = (this__391312.start + key);

return (new cljs.core.Subvec(this__391312.meta,cljs.core._assoc.call(null,this__391312.v,v_pos__391313,val),this__391312.start,((this__391312.end > (v_pos__391313 + 1)) ? this__391312.end : (v_pos__391313 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__391341 = null;
var G__391341__391342 = (function (tsym391314,k){
var this__391316 = this;
var tsym391314__391317 = this;

var coll__391318 = tsym391314__391317;

return cljs.core._lookup.call(null,coll__391318,k);
});
var G__391341__391343 = (function (tsym391315,k,not_found){
var this__391319 = this;
var tsym391315__391320 = this;

var coll__391321 = tsym391315__391320;

return cljs.core._lookup.call(null,coll__391321,k,not_found);
});
G__391341 = function(tsym391315,k,not_found){
switch(arguments.length){
case  2 :
return G__391341__391342.call(this,tsym391315,k);
case  3 :
return G__391341__391343.call(this,tsym391315,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391341;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__391322 = this;
return (new cljs.core.Subvec(this__391322.meta,cljs.core._assoc_n.call(null,this__391322.v,this__391322.end,o),this__391322.start,(this__391322.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__391345 = null;
var G__391345__391346 = (function (coll,f){
var this__391323 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__391345__391347 = (function (coll,f,start){
var this__391324 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__391345 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__391345__391346.call(this,coll,f);
case  3 :
return G__391345__391347.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391345;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__391325 = this;
var subvec_seq__391326 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__391325.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__391325.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__391326.call(null,this__391325.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__391327 = this;
return (this__391327.end - this__391327.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__391328 = this;
return cljs.core._nth.call(null,this__391328.v,(this__391328.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__391329 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__391329.start,this__391329.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__391329.meta,this__391329.v,this__391329.start,(this__391329.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__391330 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__391331 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__391332 = this;
return (new cljs.core.Subvec(meta,this__391332.v,this__391332.start,this__391332.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__391333 = this;
return this__391333.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__391349 = null;
var G__391349__391350 = (function (coll,n){
var this__391334 = this;
return cljs.core._nth.call(null,this__391334.v,(this__391334.start + n));
});
var G__391349__391351 = (function (coll,n,not_found){
var this__391335 = this;
return cljs.core._nth.call(null,this__391335.v,(this__391335.start + n),not_found);
});
G__391349 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__391349__391350.call(this,coll,n);
case  3 :
return G__391349__391351.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391349;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__391336 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__391336.meta);
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
var subvec__391353 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__391354 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__391353.call(this,v,start);
case  3 :
return subvec__391354.call(this,v,start,end);
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
var this__391356 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__391357 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__391358 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__391359 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__391359.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__391360 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__391361 = this;
return cljs.core._first.call(null,this__391361.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__391362 = this;
var temp__3695__auto____391363 = cljs.core.next.call(null,this__391362.front);

if(cljs.core.truth_(temp__3695__auto____391363))
{var f1__391364 = temp__3695__auto____391363;

return (new cljs.core.PersistentQueueSeq(this__391362.meta,f1__391364,this__391362.rear));
} else
{if(cljs.core.truth_((this__391362.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__391362.meta,this__391362.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__391365 = this;
return this__391365.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__391366 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__391366.front,this__391366.rear));
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
var this__391367 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__391368 = this;
if(cljs.core.truth_(this__391368.front))
{return (new cljs.core.PersistentQueue(this__391368.meta,(this__391368.count + 1),this__391368.front,cljs.core.conj.call(null,(function (){var or__3548__auto____391369 = this__391368.rear;

if(cljs.core.truth_(or__3548__auto____391369))
{return or__3548__auto____391369;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__391368.meta,(this__391368.count + 1),cljs.core.conj.call(null,this__391368.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__391370 = this;
var rear__391371 = cljs.core.seq.call(null,this__391370.rear);

if(cljs.core.truth_((function (){var or__3548__auto____391372 = this__391370.front;

if(cljs.core.truth_(or__3548__auto____391372))
{return or__3548__auto____391372;
} else
{return rear__391371;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__391370.front,cljs.core.seq.call(null,rear__391371)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__391373 = this;
return this__391373.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__391374 = this;
return cljs.core._first.call(null,this__391374.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__391375 = this;
if(cljs.core.truth_(this__391375.front))
{var temp__3695__auto____391376 = cljs.core.next.call(null,this__391375.front);

if(cljs.core.truth_(temp__3695__auto____391376))
{var f1__391377 = temp__3695__auto____391376;

return (new cljs.core.PersistentQueue(this__391375.meta,(this__391375.count - 1),f1__391377,this__391375.rear));
} else
{return (new cljs.core.PersistentQueue(this__391375.meta,(this__391375.count - 1),cljs.core.seq.call(null,this__391375.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__391378 = this;
return cljs.core.first.call(null,this__391378.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__391379 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__391380 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__391381 = this;
return (new cljs.core.PersistentQueue(meta,this__391381.count,this__391381.front,this__391381.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__391382 = this;
return this__391382.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__391383 = this;
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
var this__391384 = this;
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
var len__391385 = array.length;

var i__391386 = 0;

while(true){
if(cljs.core.truth_((i__391386 < len__391385)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__391386]))))
{return i__391386;
} else
{{
var G__391387 = (i__391386 + incr);
i__391386 = G__391387;
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
var obj_map_contains_key_QMARK___391389 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___391390 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____391388 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____391388))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____391388;
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
return obj_map_contains_key_QMARK___391389.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___391390.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__391393 = cljs.core.hash.call(null,a);
var b__391394 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__391393 < b__391394)))
{return -1;
} else
{if(cljs.core.truth_((a__391393 > b__391394)))
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
var this__391395 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__391422 = null;
var G__391422__391423 = (function (coll,k){
var this__391396 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__391422__391424 = (function (coll,k,not_found){
var this__391397 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__391397.strobj,(this__391397.strobj[k]),not_found);
});
G__391422 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__391422__391423.call(this,coll,k);
case  3 :
return G__391422__391424.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391422;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__391398 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__391399 = goog.object.clone.call(null,this__391398.strobj);
var overwrite_QMARK___391400 = new_strobj__391399.hasOwnProperty(k);

(new_strobj__391399[k] = v);
if(cljs.core.truth_(overwrite_QMARK___391400))
{return (new cljs.core.ObjMap(this__391398.meta,this__391398.keys,new_strobj__391399));
} else
{var new_keys__391401 = cljs.core.aclone.call(null,this__391398.keys);

new_keys__391401.push(k);
return (new cljs.core.ObjMap(this__391398.meta,new_keys__391401,new_strobj__391399));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__391398.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__391402 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__391402.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__391426 = null;
var G__391426__391427 = (function (tsym391403,k){
var this__391405 = this;
var tsym391403__391406 = this;

var coll__391407 = tsym391403__391406;

return cljs.core._lookup.call(null,coll__391407,k);
});
var G__391426__391428 = (function (tsym391404,k,not_found){
var this__391408 = this;
var tsym391404__391409 = this;

var coll__391410 = tsym391404__391409;

return cljs.core._lookup.call(null,coll__391410,k,not_found);
});
G__391426 = function(tsym391404,k,not_found){
switch(arguments.length){
case  2 :
return G__391426__391427.call(this,tsym391404,k);
case  3 :
return G__391426__391428.call(this,tsym391404,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391426;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__391411 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__391412 = this;
if(cljs.core.truth_((this__391412.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__391392_SHARP_){
return cljs.core.vector.call(null,p1__391392_SHARP_,(this__391412.strobj[p1__391392_SHARP_]));
}),this__391412.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__391413 = this;
return this__391413.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__391414 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__391415 = this;
return (new cljs.core.ObjMap(meta,this__391415.keys,this__391415.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__391416 = this;
return this__391416.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__391417 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__391417.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__391418 = this;
if(cljs.core.truth_((function (){var and__3546__auto____391419 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____391419))
{return this__391418.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____391419;
}
})()))
{var new_keys__391420 = cljs.core.aclone.call(null,this__391418.keys);
var new_strobj__391421 = goog.object.clone.call(null,this__391418.strobj);

new_keys__391420.splice(cljs.core.scan_array.call(null,1,k,new_keys__391420),1);
cljs.core.js_delete.call(null,new_strobj__391421,k);
return (new cljs.core.ObjMap(this__391418.meta,new_keys__391420,new_strobj__391421));
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
var this__391431 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__391469 = null;
var G__391469__391470 = (function (coll,k){
var this__391432 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__391469__391471 = (function (coll,k,not_found){
var this__391433 = this;
var bucket__391434 = (this__391433.hashobj[cljs.core.hash.call(null,k)]);
var i__391435 = (cljs.core.truth_(bucket__391434)?cljs.core.scan_array.call(null,2,k,bucket__391434):null);

if(cljs.core.truth_(i__391435))
{return (bucket__391434[(i__391435 + 1)]);
} else
{return not_found;
}
});
G__391469 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__391469__391470.call(this,coll,k);
case  3 :
return G__391469__391471.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391469;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__391436 = this;
var h__391437 = cljs.core.hash.call(null,k);
var bucket__391438 = (this__391436.hashobj[h__391437]);

if(cljs.core.truth_(bucket__391438))
{var new_bucket__391439 = cljs.core.aclone.call(null,bucket__391438);
var new_hashobj__391440 = goog.object.clone.call(null,this__391436.hashobj);

(new_hashobj__391440[h__391437] = new_bucket__391439);
var temp__3695__auto____391441 = cljs.core.scan_array.call(null,2,k,new_bucket__391439);

if(cljs.core.truth_(temp__3695__auto____391441))
{var i__391442 = temp__3695__auto____391441;

(new_bucket__391439[(i__391442 + 1)] = v);
return (new cljs.core.HashMap(this__391436.meta,this__391436.count,new_hashobj__391440));
} else
{new_bucket__391439.push(k,v);
return (new cljs.core.HashMap(this__391436.meta,(this__391436.count + 1),new_hashobj__391440));
}
} else
{var new_hashobj__391443 = goog.object.clone.call(null,this__391436.hashobj);

(new_hashobj__391443[h__391437] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__391436.meta,(this__391436.count + 1),new_hashobj__391443));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__391444 = this;
var bucket__391445 = (this__391444.hashobj[cljs.core.hash.call(null,k)]);
var i__391446 = (cljs.core.truth_(bucket__391445)?cljs.core.scan_array.call(null,2,k,bucket__391445):null);

if(cljs.core.truth_(i__391446))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__391473 = null;
var G__391473__391474 = (function (tsym391447,k){
var this__391449 = this;
var tsym391447__391450 = this;

var coll__391451 = tsym391447__391450;

return cljs.core._lookup.call(null,coll__391451,k);
});
var G__391473__391475 = (function (tsym391448,k,not_found){
var this__391452 = this;
var tsym391448__391453 = this;

var coll__391454 = tsym391448__391453;

return cljs.core._lookup.call(null,coll__391454,k,not_found);
});
G__391473 = function(tsym391448,k,not_found){
switch(arguments.length){
case  2 :
return G__391473__391474.call(this,tsym391448,k);
case  3 :
return G__391473__391475.call(this,tsym391448,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391473;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__391455 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__391456 = this;
if(cljs.core.truth_((this__391456.count > 0)))
{var hashes__391457 = cljs.core.js_keys.call(null,this__391456.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__391430_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__391456.hashobj[p1__391430_SHARP_])));
}),hashes__391457);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__391458 = this;
return this__391458.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__391459 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__391460 = this;
return (new cljs.core.HashMap(meta,this__391460.count,this__391460.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__391461 = this;
return this__391461.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__391462 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__391462.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__391463 = this;
var h__391464 = cljs.core.hash.call(null,k);
var bucket__391465 = (this__391463.hashobj[h__391464]);
var i__391466 = (cljs.core.truth_(bucket__391465)?cljs.core.scan_array.call(null,2,k,bucket__391465):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__391466)))
{return coll;
} else
{var new_hashobj__391467 = goog.object.clone.call(null,this__391463.hashobj);

if(cljs.core.truth_((3 > bucket__391465.length)))
{cljs.core.js_delete.call(null,new_hashobj__391467,h__391464);
} else
{var new_bucket__391468 = cljs.core.aclone.call(null,bucket__391465);

new_bucket__391468.splice(i__391466,2);
(new_hashobj__391467[h__391464] = new_bucket__391468);
}
return (new cljs.core.HashMap(this__391463.meta,(this__391463.count - 1),new_hashobj__391467));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__391477 = ks.length;

var i__391478 = 0;
var out__391479 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__391478 < len__391477)))
{{
var G__391480 = (i__391478 + 1);
var G__391481 = cljs.core.assoc.call(null,out__391479,(ks[i__391478]),(vs[i__391478]));
i__391478 = G__391480;
out__391479 = G__391481;
continue;
}
} else
{return out__391479;
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
var in$__391482 = cljs.core.seq.call(null,keyvals);
var out__391483 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__391482))
{{
var G__391484 = cljs.core.nnext.call(null,in$__391482);
var G__391485 = cljs.core.assoc.call(null,out__391483,cljs.core.first.call(null,in$__391482),cljs.core.second.call(null,in$__391482));
in$__391482 = G__391484;
out__391483 = G__391485;
continue;
}
} else
{return out__391483;
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
hash_map.cljs$lang$applyTo = (function (arglist__391486){
var keyvals = cljs.core.seq( arglist__391486 );;
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
{return cljs.core.reduce.call(null,(function (p1__391487_SHARP_,p2__391488_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____391489 = p1__391487_SHARP_;

if(cljs.core.truth_(or__3548__auto____391489))
{return or__3548__auto____391489;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__391488_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__391490){
var maps = cljs.core.seq( arglist__391490 );;
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
{var merge_entry__391493 = (function (m,e){
var k__391491 = cljs.core.first.call(null,e);
var v__391492 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__391491)))
{return cljs.core.assoc.call(null,m,k__391491,f.call(null,cljs.core.get.call(null,m,k__391491),v__391492));
} else
{return cljs.core.assoc.call(null,m,k__391491,v__391492);
}
});
var merge2__391495 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__391493,(function (){var or__3548__auto____391494 = m1;

if(cljs.core.truth_(or__3548__auto____391494))
{return or__3548__auto____391494;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__391495,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__391496){
var f = cljs.core.first(arglist__391496);
var maps = cljs.core.rest(arglist__391496);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__391498 = cljs.core.ObjMap.fromObject([],{});
var keys__391499 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__391499))
{var key__391500 = cljs.core.first.call(null,keys__391499);
var entry__391501 = cljs.core.get.call(null,map,key__391500,"\uFDD0'user/not-found");

{
var G__391502 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__391501,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__391498,key__391500,entry__391501):ret__391498);
var G__391503 = cljs.core.next.call(null,keys__391499);
ret__391498 = G__391502;
keys__391499 = G__391503;
continue;
}
} else
{return ret__391498;
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
var this__391504 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__391525 = null;
var G__391525__391526 = (function (coll,v){
var this__391505 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__391525__391527 = (function (coll,v,not_found){
var this__391506 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__391506.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__391525 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__391525__391526.call(this,coll,v);
case  3 :
return G__391525__391527.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391525;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__391529 = null;
var G__391529__391530 = (function (tsym391507,k){
var this__391509 = this;
var tsym391507__391510 = this;

var coll__391511 = tsym391507__391510;

return cljs.core._lookup.call(null,coll__391511,k);
});
var G__391529__391531 = (function (tsym391508,k,not_found){
var this__391512 = this;
var tsym391508__391513 = this;

var coll__391514 = tsym391508__391513;

return cljs.core._lookup.call(null,coll__391514,k,not_found);
});
G__391529 = function(tsym391508,k,not_found){
switch(arguments.length){
case  2 :
return G__391529__391530.call(this,tsym391508,k);
case  3 :
return G__391529__391531.call(this,tsym391508,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391529;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__391515 = this;
return (new cljs.core.Set(this__391515.meta,cljs.core.assoc.call(null,this__391515.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__391516 = this;
return cljs.core.keys.call(null,this__391516.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__391517 = this;
return (new cljs.core.Set(this__391517.meta,cljs.core.dissoc.call(null,this__391517.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__391518 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__391519 = this;
var and__3546__auto____391520 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____391520))
{var and__3546__auto____391521 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____391521))
{return cljs.core.every_QMARK_.call(null,(function (p1__391497_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__391497_SHARP_);
}),other);
} else
{return and__3546__auto____391521;
}
} else
{return and__3546__auto____391520;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__391522 = this;
return (new cljs.core.Set(meta,this__391522.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__391523 = this;
return this__391523.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__391524 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__391524.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__391534 = cljs.core.seq.call(null,coll);
var out__391535 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__391534))))
{{
var G__391536 = cljs.core.rest.call(null,in$__391534);
var G__391537 = cljs.core.conj.call(null,out__391535,cljs.core.first.call(null,in$__391534));
in$__391534 = G__391536;
out__391535 = G__391537;
continue;
}
} else
{return out__391535;
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
{var n__391538 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____391539 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____391539))
{var e__391540 = temp__3695__auto____391539;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__391540));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__391538,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__391533_SHARP_){
var temp__3695__auto____391541 = cljs.core.find.call(null,smap,p1__391533_SHARP_);

if(cljs.core.truth_(temp__3695__auto____391541))
{var e__391542 = temp__3695__auto____391541;

return cljs.core.second.call(null,e__391542);
} else
{return p1__391533_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__391550 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__391543,seen){
while(true){
var vec__391544__391545 = p__391543;
var f__391546 = cljs.core.nth.call(null,vec__391544__391545,0,null);
var xs__391547 = vec__391544__391545;

var temp__3698__auto____391548 = cljs.core.seq.call(null,xs__391547);

if(cljs.core.truth_(temp__3698__auto____391548))
{var s__391549 = temp__3698__auto____391548;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__391546)))
{{
var G__391551 = cljs.core.rest.call(null,s__391549);
var G__391552 = seen;
p__391543 = G__391551;
seen = G__391552;
continue;
}
} else
{return cljs.core.cons.call(null,f__391546,step.call(null,cljs.core.rest.call(null,s__391549),cljs.core.conj.call(null,seen,f__391546)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__391550.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__391553 = cljs.core.Vector.fromArray([]);
var s__391554 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__391554)))
{{
var G__391555 = cljs.core.conj.call(null,ret__391553,cljs.core.first.call(null,s__391554));
var G__391556 = cljs.core.next.call(null,s__391554);
ret__391553 = G__391555;
s__391554 = G__391556;
continue;
}
} else
{return cljs.core.seq.call(null,ret__391553);
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
{if(cljs.core.truth_((function (){var or__3548__auto____391557 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____391557))
{return or__3548__auto____391557;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__391558 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__391558 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__391558 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____391559 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____391559))
{return or__3548__auto____391559;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__391560 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__391560 > -1)))
{return cljs.core.subs.call(null,x,2,i__391560);
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
var map__391563 = cljs.core.ObjMap.fromObject([],{});
var ks__391564 = cljs.core.seq.call(null,keys);
var vs__391565 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____391566 = ks__391564;

if(cljs.core.truth_(and__3546__auto____391566))
{return vs__391565;
} else
{return and__3546__auto____391566;
}
})()))
{{
var G__391567 = cljs.core.assoc.call(null,map__391563,cljs.core.first.call(null,ks__391564),cljs.core.first.call(null,vs__391565));
var G__391568 = cljs.core.next.call(null,ks__391564);
var G__391569 = cljs.core.next.call(null,vs__391565);
map__391563 = G__391567;
ks__391564 = G__391568;
vs__391565 = G__391569;
continue;
}
} else
{return map__391563;
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
var max_key__391572 = (function (k,x){
return x;
});
var max_key__391573 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__391574 = (function() { 
var G__391576__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__391561_SHARP_,p2__391562_SHARP_){
return max_key.call(null,k,p1__391561_SHARP_,p2__391562_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__391576 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391576__delegate.call(this, k, x, y, more);
};
G__391576.cljs$lang$maxFixedArity = 3;
G__391576.cljs$lang$applyTo = (function (arglist__391577){
var k = cljs.core.first(arglist__391577);
var x = cljs.core.first(cljs.core.next(arglist__391577));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391577)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391577)));
return G__391576__delegate.call(this, k, x, y, more);
});
return G__391576;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__391572.call(this,k,x);
case  3 :
return max_key__391573.call(this,k,x,y);
default:
return max_key__391574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__391574.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__391578 = (function (k,x){
return x;
});
var min_key__391579 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__391580 = (function() { 
var G__391582__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__391570_SHARP_,p2__391571_SHARP_){
return min_key.call(null,k,p1__391570_SHARP_,p2__391571_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__391582 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391582__delegate.call(this, k, x, y, more);
};
G__391582.cljs$lang$maxFixedArity = 3;
G__391582.cljs$lang$applyTo = (function (arglist__391583){
var k = cljs.core.first(arglist__391583);
var x = cljs.core.first(cljs.core.next(arglist__391583));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391583)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391583)));
return G__391582__delegate.call(this, k, x, y, more);
});
return G__391582;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__391578.call(this,k,x);
case  3 :
return min_key__391579.call(this,k,x,y);
default:
return min_key__391580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__391580.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__391586 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__391587 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____391584 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391584))
{var s__391585 = temp__3698__auto____391584;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__391585),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__391585)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__391586.call(this,n,step);
case  3 :
return partition_all__391587.call(this,n,step,coll);
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
var temp__3698__auto____391589 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391589))
{var s__391590 = temp__3698__auto____391589;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__391590))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__391590),take_while.call(null,pred,cljs.core.rest.call(null,s__391590)));
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
var this__391591 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__391592 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__391608 = null;
var G__391608__391609 = (function (rng,f){
var this__391593 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__391608__391610 = (function (rng,f,s){
var this__391594 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__391608 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__391608__391609.call(this,rng,f);
case  3 :
return G__391608__391610.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391608;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__391595 = this;
var comp__391596 = (cljs.core.truth_((this__391595.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__391596.call(null,this__391595.start,this__391595.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__391597 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__391597.end - this__391597.start) / this__391597.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__391598 = this;
return this__391598.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__391599 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__391599.meta,(this__391599.start + this__391599.step),this__391599.end,this__391599.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__391600 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__391601 = this;
return (new cljs.core.Range(meta,this__391601.start,this__391601.end,this__391601.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__391602 = this;
return this__391602.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__391612 = null;
var G__391612__391613 = (function (rng,n){
var this__391603 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__391603.start + (n * this__391603.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____391604 = (this__391603.start > this__391603.end);

if(cljs.core.truth_(and__3546__auto____391604))
{return cljs.core._EQ_.call(null,this__391603.step,0);
} else
{return and__3546__auto____391604;
}
})()))
{return this__391603.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__391612__391614 = (function (rng,n,not_found){
var this__391605 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__391605.start + (n * this__391605.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____391606 = (this__391605.start > this__391605.end);

if(cljs.core.truth_(and__3546__auto____391606))
{return cljs.core._EQ_.call(null,this__391605.step,0);
} else
{return and__3546__auto____391606;
}
})()))
{return this__391605.start;
} else
{return not_found;
}
}
});
G__391612 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__391612__391613.call(this,rng,n);
case  3 :
return G__391612__391614.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__391612;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__391607 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__391607.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__391616 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__391617 = (function (end){
return range.call(null,0,end,1);
});
var range__391618 = (function (start,end){
return range.call(null,start,end,1);
});
var range__391619 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__391616.call(this);
case  1 :
return range__391617.call(this,start);
case  2 :
return range__391618.call(this,start,end);
case  3 :
return range__391619.call(this,start,end,step);
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
var temp__3698__auto____391621 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391621))
{var s__391622 = temp__3698__auto____391621;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__391622),take_nth.call(null,n,cljs.core.drop.call(null,n,s__391622)));
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
var temp__3698__auto____391624 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391624))
{var s__391625 = temp__3698__auto____391624;

var fst__391626 = cljs.core.first.call(null,s__391625);
var fv__391627 = f.call(null,fst__391626);
var run__391628 = cljs.core.cons.call(null,fst__391626,cljs.core.take_while.call(null,(function (p1__391623_SHARP_){
return cljs.core._EQ_.call(null,fv__391627,f.call(null,p1__391623_SHARP_));
}),cljs.core.next.call(null,s__391625)));

return cljs.core.cons.call(null,run__391628,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__391628),s__391625))));
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
var reductions__391643 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____391639 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____391639))
{var s__391640 = temp__3695__auto____391639;

return reductions.call(null,f,cljs.core.first.call(null,s__391640),cljs.core.rest.call(null,s__391640));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__391644 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____391641 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____391641))
{var s__391642 = temp__3698__auto____391641;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__391642)),cljs.core.rest.call(null,s__391642));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__391643.call(this,f,init);
case  3 :
return reductions__391644.call(this,f,init,coll);
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
var juxt__391647 = (function (f){
return (function() {
var G__391652 = null;
var G__391652__391653 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__391652__391654 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__391652__391655 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__391652__391656 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__391652__391657 = (function() { 
var G__391659__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__391659 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391659__delegate.call(this, x, y, z, args);
};
G__391659.cljs$lang$maxFixedArity = 3;
G__391659.cljs$lang$applyTo = (function (arglist__391660){
var x = cljs.core.first(arglist__391660);
var y = cljs.core.first(cljs.core.next(arglist__391660));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391660)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391660)));
return G__391659__delegate.call(this, x, y, z, args);
});
return G__391659;
})()
;
G__391652 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__391652__391653.call(this);
case  1 :
return G__391652__391654.call(this,x);
case  2 :
return G__391652__391655.call(this,x,y);
case  3 :
return G__391652__391656.call(this,x,y,z);
default:
return G__391652__391657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__391652.cljs$lang$maxFixedArity = 3;
G__391652.cljs$lang$applyTo = G__391652__391657.cljs$lang$applyTo;
return G__391652;
})()
});
var juxt__391648 = (function (f,g){
return (function() {
var G__391661 = null;
var G__391661__391662 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__391661__391663 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__391661__391664 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__391661__391665 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__391661__391666 = (function() { 
var G__391668__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__391668 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391668__delegate.call(this, x, y, z, args);
};
G__391668.cljs$lang$maxFixedArity = 3;
G__391668.cljs$lang$applyTo = (function (arglist__391669){
var x = cljs.core.first(arglist__391669);
var y = cljs.core.first(cljs.core.next(arglist__391669));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391669)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391669)));
return G__391668__delegate.call(this, x, y, z, args);
});
return G__391668;
})()
;
G__391661 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__391661__391662.call(this);
case  1 :
return G__391661__391663.call(this,x);
case  2 :
return G__391661__391664.call(this,x,y);
case  3 :
return G__391661__391665.call(this,x,y,z);
default:
return G__391661__391666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__391661.cljs$lang$maxFixedArity = 3;
G__391661.cljs$lang$applyTo = G__391661__391666.cljs$lang$applyTo;
return G__391661;
})()
});
var juxt__391649 = (function (f,g,h){
return (function() {
var G__391670 = null;
var G__391670__391671 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__391670__391672 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__391670__391673 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__391670__391674 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__391670__391675 = (function() { 
var G__391677__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__391677 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391677__delegate.call(this, x, y, z, args);
};
G__391677.cljs$lang$maxFixedArity = 3;
G__391677.cljs$lang$applyTo = (function (arglist__391678){
var x = cljs.core.first(arglist__391678);
var y = cljs.core.first(cljs.core.next(arglist__391678));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391678)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391678)));
return G__391677__delegate.call(this, x, y, z, args);
});
return G__391677;
})()
;
G__391670 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__391670__391671.call(this);
case  1 :
return G__391670__391672.call(this,x);
case  2 :
return G__391670__391673.call(this,x,y);
case  3 :
return G__391670__391674.call(this,x,y,z);
default:
return G__391670__391675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__391670.cljs$lang$maxFixedArity = 3;
G__391670.cljs$lang$applyTo = G__391670__391675.cljs$lang$applyTo;
return G__391670;
})()
});
var juxt__391650 = (function() { 
var G__391679__delegate = function (f,g,h,fs){
var fs__391646 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__391680 = null;
var G__391680__391681 = (function (){
return cljs.core.reduce.call(null,(function (p1__391629_SHARP_,p2__391630_SHARP_){
return cljs.core.conj.call(null,p1__391629_SHARP_,p2__391630_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__391646);
});
var G__391680__391682 = (function (x){
return cljs.core.reduce.call(null,(function (p1__391631_SHARP_,p2__391632_SHARP_){
return cljs.core.conj.call(null,p1__391631_SHARP_,p2__391632_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__391646);
});
var G__391680__391683 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__391633_SHARP_,p2__391634_SHARP_){
return cljs.core.conj.call(null,p1__391633_SHARP_,p2__391634_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__391646);
});
var G__391680__391684 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__391635_SHARP_,p2__391636_SHARP_){
return cljs.core.conj.call(null,p1__391635_SHARP_,p2__391636_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__391646);
});
var G__391680__391685 = (function() { 
var G__391687__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__391637_SHARP_,p2__391638_SHARP_){
return cljs.core.conj.call(null,p1__391637_SHARP_,cljs.core.apply.call(null,p2__391638_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__391646);
};
var G__391687 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391687__delegate.call(this, x, y, z, args);
};
G__391687.cljs$lang$maxFixedArity = 3;
G__391687.cljs$lang$applyTo = (function (arglist__391688){
var x = cljs.core.first(arglist__391688);
var y = cljs.core.first(cljs.core.next(arglist__391688));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391688)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391688)));
return G__391687__delegate.call(this, x, y, z, args);
});
return G__391687;
})()
;
G__391680 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__391680__391681.call(this);
case  1 :
return G__391680__391682.call(this,x);
case  2 :
return G__391680__391683.call(this,x,y);
case  3 :
return G__391680__391684.call(this,x,y,z);
default:
return G__391680__391685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__391680.cljs$lang$maxFixedArity = 3;
G__391680.cljs$lang$applyTo = G__391680__391685.cljs$lang$applyTo;
return G__391680;
})()
};
var G__391679 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__391679__delegate.call(this, f, g, h, fs);
};
G__391679.cljs$lang$maxFixedArity = 3;
G__391679.cljs$lang$applyTo = (function (arglist__391689){
var f = cljs.core.first(arglist__391689);
var g = cljs.core.first(cljs.core.next(arglist__391689));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391689)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__391689)));
return G__391679__delegate.call(this, f, g, h, fs);
});
return G__391679;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__391647.call(this,f);
case  2 :
return juxt__391648.call(this,f,g);
case  3 :
return juxt__391649.call(this,f,g,h);
default:
return juxt__391650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__391650.cljs$lang$applyTo;
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
var dorun__391691 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__391694 = cljs.core.next.call(null,coll);
coll = G__391694;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__391692 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____391690 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____391690))
{return (n > 0);
} else
{return and__3546__auto____391690;
}
})()))
{{
var G__391695 = (n - 1);
var G__391696 = cljs.core.next.call(null,coll);
n = G__391695;
coll = G__391696;
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
return dorun__391691.call(this,n);
case  2 :
return dorun__391692.call(this,n,coll);
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
var doall__391697 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__391698 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__391697.call(this,n);
case  2 :
return doall__391698.call(this,n,coll);
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
var matches__391700 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__391700),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__391700),1)))
{return cljs.core.first.call(null,matches__391700);
} else
{return cljs.core.vec.call(null,matches__391700);
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
var matches__391701 = re.exec(s);

if(cljs.core.truth_((matches__391701 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__391701),1)))
{return cljs.core.first.call(null,matches__391701);
} else
{return cljs.core.vec.call(null,matches__391701);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__391702 = cljs.core.re_find.call(null,re,s);
var match_idx__391703 = s.search(re);
var match_str__391704 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__391702))?cljs.core.first.call(null,match_data__391702):match_data__391702);
var post_match__391705 = cljs.core.subs.call(null,s,(match_idx__391703 + cljs.core.count.call(null,match_str__391704)));

if(cljs.core.truth_(match_data__391702))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__391702,re_seq.call(null,re,post_match__391705));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__391707__391708 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___391709 = cljs.core.nth.call(null,vec__391707__391708,0,null);
var flags__391710 = cljs.core.nth.call(null,vec__391707__391708,1,null);
var pattern__391711 = cljs.core.nth.call(null,vec__391707__391708,2,null);

return (new RegExp(pattern__391711,flags__391710));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__391706_SHARP_){
return print_one.call(null,p1__391706_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____391712 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____391712))
{var and__3546__auto____391716 = (function (){var x__450__auto____391713 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____391714 = x__450__auto____391713;

if(cljs.core.truth_(and__3546__auto____391714))
{var and__3546__auto____391715 = x__450__auto____391713.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____391715))
{return cljs.core.not.call(null,x__450__auto____391713.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____391715;
}
} else
{return and__3546__auto____391714;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____391713);
}
})();

if(cljs.core.truth_(and__3546__auto____391716))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____391716;
}
} else
{return and__3546__auto____391712;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____391717 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____391718 = x__450__auto____391717;

if(cljs.core.truth_(and__3546__auto____391718))
{var and__3546__auto____391719 = x__450__auto____391717.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____391719))
{return cljs.core.not.call(null,x__450__auto____391717.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____391719;
}
} else
{return and__3546__auto____391718;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____391717);
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
var first_obj__391720 = cljs.core.first.call(null,objs);
var sb__391721 = (new goog.string.StringBuffer());

var G__391722__391723 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__391722__391723))
{var obj__391724 = cljs.core.first.call(null,G__391722__391723);
var G__391722__391725 = G__391722__391723;

while(true){
if(cljs.core.truth_((obj__391724 === first_obj__391720)))
{} else
{sb__391721.append(" ");
}
var G__391726__391727 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__391724,opts));

if(cljs.core.truth_(G__391726__391727))
{var string__391728 = cljs.core.first.call(null,G__391726__391727);
var G__391726__391729 = G__391726__391727;

while(true){
sb__391721.append(string__391728);
var temp__3698__auto____391730 = cljs.core.next.call(null,G__391726__391729);

if(cljs.core.truth_(temp__3698__auto____391730))
{var G__391726__391731 = temp__3698__auto____391730;

{
var G__391734 = cljs.core.first.call(null,G__391726__391731);
var G__391735 = G__391726__391731;
string__391728 = G__391734;
G__391726__391729 = G__391735;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____391732 = cljs.core.next.call(null,G__391722__391725);

if(cljs.core.truth_(temp__3698__auto____391732))
{var G__391722__391733 = temp__3698__auto____391732;

{
var G__391736 = cljs.core.first.call(null,G__391722__391733);
var G__391737 = G__391722__391733;
obj__391724 = G__391736;
G__391722__391725 = G__391737;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__391721);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__391738 = cljs.core.first.call(null,objs);

var G__391739__391740 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__391739__391740))
{var obj__391741 = cljs.core.first.call(null,G__391739__391740);
var G__391739__391742 = G__391739__391740;

while(true){
if(cljs.core.truth_((obj__391741 === first_obj__391738)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__391743__391744 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__391741,opts));

if(cljs.core.truth_(G__391743__391744))
{var string__391745 = cljs.core.first.call(null,G__391743__391744);
var G__391743__391746 = G__391743__391744;

while(true){
cljs.core.string_print.call(null,string__391745);
var temp__3698__auto____391747 = cljs.core.next.call(null,G__391743__391746);

if(cljs.core.truth_(temp__3698__auto____391747))
{var G__391743__391748 = temp__3698__auto____391747;

{
var G__391751 = cljs.core.first.call(null,G__391743__391748);
var G__391752 = G__391743__391748;
string__391745 = G__391751;
G__391743__391746 = G__391752;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____391749 = cljs.core.next.call(null,G__391739__391742);

if(cljs.core.truth_(temp__3698__auto____391749))
{var G__391739__391750 = temp__3698__auto____391749;

{
var G__391753 = cljs.core.first.call(null,G__391739__391750);
var G__391754 = G__391739__391750;
obj__391741 = G__391753;
G__391739__391742 = G__391754;
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
pr_str.cljs$lang$applyTo = (function (arglist__391755){
var objs = cljs.core.seq( arglist__391755 );;
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
pr.cljs$lang$applyTo = (function (arglist__391756){
var objs = cljs.core.seq( arglist__391756 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__391757){
var objs = cljs.core.seq( arglist__391757 );;
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
println.cljs$lang$applyTo = (function (arglist__391758){
var objs = cljs.core.seq( arglist__391758 );;
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
prn.cljs$lang$applyTo = (function (arglist__391759){
var objs = cljs.core.seq( arglist__391759 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__391760 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__391760,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____391761 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____391761))
{var nspc__391762 = temp__3698__auto____391761;

return cljs.core.str.call(null,nspc__391762,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____391763 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____391763))
{var nspc__391764 = temp__3698__auto____391763;

return cljs.core.str.call(null,nspc__391764,"\/");
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
var pr_pair__391765 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__391765,"{",", ","}",opts,coll);
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
var this__391766 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__391767 = this;
var G__391768__391769 = cljs.core.seq.call(null,this__391767.watches);

if(cljs.core.truth_(G__391768__391769))
{var G__391771__391773 = cljs.core.first.call(null,G__391768__391769);
var vec__391772__391774 = G__391771__391773;
var key__391775 = cljs.core.nth.call(null,vec__391772__391774,0,null);
var f__391776 = cljs.core.nth.call(null,vec__391772__391774,1,null);
var G__391768__391777 = G__391768__391769;

var G__391771__391778 = G__391771__391773;
var G__391768__391779 = G__391768__391777;

while(true){
var vec__391780__391781 = G__391771__391778;
var key__391782 = cljs.core.nth.call(null,vec__391780__391781,0,null);
var f__391783 = cljs.core.nth.call(null,vec__391780__391781,1,null);
var G__391768__391784 = G__391768__391779;

f__391783.call(null,key__391782,this$,oldval,newval);
var temp__3698__auto____391785 = cljs.core.next.call(null,G__391768__391784);

if(cljs.core.truth_(temp__3698__auto____391785))
{var G__391768__391786 = temp__3698__auto____391785;

{
var G__391793 = cljs.core.first.call(null,G__391768__391786);
var G__391794 = G__391768__391786;
G__391771__391778 = G__391793;
G__391768__391779 = G__391794;
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
var this__391787 = this;
return this$.watches = cljs.core.assoc.call(null,this__391787.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__391788 = this;
return this$.watches = cljs.core.dissoc.call(null,this__391788.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__391789 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__391789.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__391790 = this;
return this__391790.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__391791 = this;
return this__391791.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__391792 = this;
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
var atom__391801 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__391802 = (function() { 
var G__391804__delegate = function (x,p__391795){
var map__391796__391797 = p__391795;
var map__391796__391798 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__391796__391797))?cljs.core.apply.call(null,cljs.core.hash_map,map__391796__391797):map__391796__391797);
var validator__391799 = cljs.core.get.call(null,map__391796__391798,"\uFDD0'validator");
var meta__391800 = cljs.core.get.call(null,map__391796__391798,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__391800,validator__391799,null));
};
var G__391804 = function (x,var_args){
var p__391795 = null;
if (goog.isDef(var_args)) {
  p__391795 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__391804__delegate.call(this, x, p__391795);
};
G__391804.cljs$lang$maxFixedArity = 1;
G__391804.cljs$lang$applyTo = (function (arglist__391805){
var x = cljs.core.first(arglist__391805);
var p__391795 = cljs.core.rest(arglist__391805);
return G__391804__delegate.call(this, x, p__391795);
});
return G__391804;
})()
;
atom = function(x,var_args){
var p__391795 = var_args;
switch(arguments.length){
case  1 :
return atom__391801.call(this,x);
default:
return atom__391802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__391802.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____391806 = a.validator;

if(cljs.core.truth_(temp__3698__auto____391806))
{var validate__391807 = temp__3698__auto____391806;

if(cljs.core.truth_(validate__391807.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__391808 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__391808,new_value);
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
var swap_BANG___391809 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___391810 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___391811 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___391812 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___391813 = (function() { 
var G__391815__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__391815 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__391815__delegate.call(this, a, f, x, y, z, more);
};
G__391815.cljs$lang$maxFixedArity = 5;
G__391815.cljs$lang$applyTo = (function (arglist__391816){
var a = cljs.core.first(arglist__391816);
var f = cljs.core.first(cljs.core.next(arglist__391816));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__391816)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__391816))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__391816)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__391816)))));
return G__391815__delegate.call(this, a, f, x, y, z, more);
});
return G__391815;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___391809.call(this,a,f);
case  3 :
return swap_BANG___391810.call(this,a,f,x);
case  4 :
return swap_BANG___391811.call(this,a,f,x,y);
case  5 :
return swap_BANG___391812.call(this,a,f,x,y,z);
default:
return swap_BANG___391813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___391813.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__391817){
var iref = cljs.core.first(arglist__391817);
var f = cljs.core.first(cljs.core.next(arglist__391817));
var args = cljs.core.rest(cljs.core.next(arglist__391817));
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
var gensym__391818 = (function (){
return gensym.call(null,"G__");
});
var gensym__391819 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__391818.call(this);
case  1 :
return gensym__391819.call(this,prefix_string);
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
var this__391821 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__391821.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__391822 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__391822.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__391822.state,this__391822.f);
}
return cljs.core.deref.call(null,this__391822.state);
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
delay.cljs$lang$applyTo = (function (arglist__391823){
var body = cljs.core.seq( arglist__391823 );;
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
var map__391824__391825 = options;
var map__391824__391826 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__391824__391825))?cljs.core.apply.call(null,cljs.core.hash_map,map__391824__391825):map__391824__391825);
var keywordize_keys__391827 = cljs.core.get.call(null,map__391824__391826,"\uFDD0'keywordize-keys");
var keyfn__391828 = (cljs.core.truth_(keywordize_keys__391827)?cljs.core.keyword:cljs.core.str);
var f__391834 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____391833 = (function iter__391829(s__391830){
return (new cljs.core.LazySeq(null,false,(function (){
var s__391830__391831 = s__391830;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__391830__391831)))
{var k__391832 = cljs.core.first.call(null,s__391830__391831);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__391828.call(null,k__391832),thisfn.call(null,(x[k__391832]))]),iter__391829.call(null,cljs.core.rest.call(null,s__391830__391831)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____391833.call(null,cljs.core.js_keys.call(null,x));
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

return f__391834.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__391835){
var x = cljs.core.first(arglist__391835);
var options = cljs.core.rest(arglist__391835);
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
var mem__391836 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__391840__delegate = function (args){
var temp__3695__auto____391837 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__391836),args);

if(cljs.core.truth_(temp__3695__auto____391837))
{var v__391838 = temp__3695__auto____391837;

return v__391838;
} else
{var ret__391839 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__391836,cljs.core.assoc,args,ret__391839);
return ret__391839;
}
};
var G__391840 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__391840__delegate.call(this, args);
};
G__391840.cljs$lang$maxFixedArity = 0;
G__391840.cljs$lang$applyTo = (function (arglist__391841){
var args = cljs.core.seq( arglist__391841 );;
return G__391840__delegate.call(this, args);
});
return G__391840;
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
var trampoline__391843 = (function (f){
while(true){
var ret__391842 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__391842)))
{{
var G__391846 = ret__391842;
f = G__391846;
continue;
}
} else
{return ret__391842;
}
break;
}
});
var trampoline__391844 = (function() { 
var G__391847__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__391847 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__391847__delegate.call(this, f, args);
};
G__391847.cljs$lang$maxFixedArity = 1;
G__391847.cljs$lang$applyTo = (function (arglist__391848){
var f = cljs.core.first(arglist__391848);
var args = cljs.core.rest(arglist__391848);
return G__391847__delegate.call(this, f, args);
});
return G__391847;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__391843.call(this,f);
default:
return trampoline__391844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__391844.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__391849 = (function (){
return rand.call(null,1);
});
var rand__391850 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__391849.call(this);
case  1 :
return rand__391850.call(this,n);
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
var k__391852 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__391852,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__391852,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___391861 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___391862 = (function (h,child,parent){
var or__3548__auto____391853 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____391853))
{return or__3548__auto____391853;
} else
{var or__3548__auto____391854 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____391854))
{return or__3548__auto____391854;
} else
{var and__3546__auto____391855 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____391855))
{var and__3546__auto____391856 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____391856))
{var and__3546__auto____391857 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____391857))
{var ret__391858 = true;
var i__391859 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____391860 = cljs.core.not.call(null,ret__391858);

if(cljs.core.truth_(or__3548__auto____391860))
{return or__3548__auto____391860;
} else
{return cljs.core._EQ_.call(null,i__391859,cljs.core.count.call(null,parent));
}
})()))
{return ret__391858;
} else
{{
var G__391864 = isa_QMARK_.call(null,h,child.call(null,i__391859),parent.call(null,i__391859));
var G__391865 = (i__391859 + 1);
ret__391858 = G__391864;
i__391859 = G__391865;
continue;
}
}
break;
}
} else
{return and__3546__auto____391857;
}
} else
{return and__3546__auto____391856;
}
} else
{return and__3546__auto____391855;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___391861.call(this,h,child);
case  3 :
return isa_QMARK___391862.call(this,h,child,parent);
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
var parents__391866 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__391867 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__391866.call(this,h);
case  2 :
return parents__391867.call(this,h,tag);
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
var ancestors__391869 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__391870 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__391869.call(this,h);
case  2 :
return ancestors__391870.call(this,h,tag);
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
var descendants__391872 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__391873 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__391872.call(this,h);
case  2 :
return descendants__391873.call(this,h,tag);
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
var derive__391883 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__391884 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__391878 = "\uFDD0'parents".call(null,h);
var td__391879 = "\uFDD0'descendants".call(null,h);
var ta__391880 = "\uFDD0'ancestors".call(null,h);
var tf__391881 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____391882 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__391878.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__391880.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__391880.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__391878,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__391881.call(null,"\uFDD0'ancestors".call(null,h),tag,td__391879,parent,ta__391880),"\uFDD0'descendants":tf__391881.call(null,"\uFDD0'descendants".call(null,h),parent,ta__391880,tag,td__391879)});
})());

if(cljs.core.truth_(or__3548__auto____391882))
{return or__3548__auto____391882;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__391883.call(this,h,tag);
case  3 :
return derive__391884.call(this,h,tag,parent);
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
var underive__391890 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__391891 = (function (h,tag,parent){
var parentMap__391886 = "\uFDD0'parents".call(null,h);
var childsParents__391887 = (cljs.core.truth_(parentMap__391886.call(null,tag))?cljs.core.disj.call(null,parentMap__391886.call(null,tag),parent):cljs.core.set([]));
var newParents__391888 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__391887))?cljs.core.assoc.call(null,parentMap__391886,tag,childsParents__391887):cljs.core.dissoc.call(null,parentMap__391886,tag));
var deriv_seq__391889 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__391875_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__391875_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__391875_SHARP_),cljs.core.second.call(null,p1__391875_SHARP_)));
}),cljs.core.seq.call(null,newParents__391888)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__391886.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__391876_SHARP_,p2__391877_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__391876_SHARP_,p2__391877_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__391889));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__391890.call(this,h,tag);
case  3 :
return underive__391891.call(this,h,tag,parent);
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
var xprefs__391893 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____391895 = (cljs.core.truth_((function (){var and__3546__auto____391894 = xprefs__391893;

if(cljs.core.truth_(and__3546__auto____391894))
{return xprefs__391893.call(null,y);
} else
{return and__3546__auto____391894;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____391895))
{return or__3548__auto____391895;
} else
{var or__3548__auto____391897 = (function (){var ps__391896 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__391896) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__391896),prefer_table)))
{} else
{}
{
var G__391900 = cljs.core.rest.call(null,ps__391896);
ps__391896 = G__391900;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____391897))
{return or__3548__auto____391897;
} else
{var or__3548__auto____391899 = (function (){var ps__391898 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__391898) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__391898),y,prefer_table)))
{} else
{}
{
var G__391901 = cljs.core.rest.call(null,ps__391898);
ps__391898 = G__391901;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____391899))
{return or__3548__auto____391899;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____391902 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____391902))
{return or__3548__auto____391902;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__391911 = cljs.core.reduce.call(null,(function (be,p__391903){
var vec__391904__391905 = p__391903;
var k__391906 = cljs.core.nth.call(null,vec__391904__391905,0,null);
var ___391907 = cljs.core.nth.call(null,vec__391904__391905,1,null);
var e__391908 = vec__391904__391905;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__391906)))
{var be2__391910 = (cljs.core.truth_((function (){var or__3548__auto____391909 = (be === null);

if(cljs.core.truth_(or__3548__auto____391909))
{return or__3548__auto____391909;
} else
{return cljs.core.dominates.call(null,k__391906,cljs.core.first.call(null,be),prefer_table);
}
})())?e__391908:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__391910),k__391906,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__391906," and ",cljs.core.first.call(null,be2__391910),", and neither is preferred")));
}
return be2__391910;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__391911))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__391911));
return cljs.core.second.call(null,best_entry__391911);
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
if(cljs.core.truth_((function (){var and__3546__auto____391912 = mf;

if(cljs.core.truth_(and__3546__auto____391912))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____391912;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____391913 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____391913))
{return or__3548__auto____391913;
} else
{var or__3548__auto____391914 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____391914))
{return or__3548__auto____391914;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____391915 = mf;

if(cljs.core.truth_(and__3546__auto____391915))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____391915;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____391916 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____391916))
{return or__3548__auto____391916;
} else
{var or__3548__auto____391917 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____391917))
{return or__3548__auto____391917;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____391918 = mf;

if(cljs.core.truth_(and__3546__auto____391918))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____391918;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____391919 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____391919))
{return or__3548__auto____391919;
} else
{var or__3548__auto____391920 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____391920))
{return or__3548__auto____391920;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____391921 = mf;

if(cljs.core.truth_(and__3546__auto____391921))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____391921;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____391922 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____391922))
{return or__3548__auto____391922;
} else
{var or__3548__auto____391923 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____391923))
{return or__3548__auto____391923;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____391924 = mf;

if(cljs.core.truth_(and__3546__auto____391924))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____391924;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____391925 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____391925))
{return or__3548__auto____391925;
} else
{var or__3548__auto____391926 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____391926))
{return or__3548__auto____391926;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____391927 = mf;

if(cljs.core.truth_(and__3546__auto____391927))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____391927;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____391928 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____391928))
{return or__3548__auto____391928;
} else
{var or__3548__auto____391929 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____391929))
{return or__3548__auto____391929;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____391930 = mf;

if(cljs.core.truth_(and__3546__auto____391930))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____391930;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____391931 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____391931))
{return or__3548__auto____391931;
} else
{var or__3548__auto____391932 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____391932))
{return or__3548__auto____391932;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____391933 = mf;

if(cljs.core.truth_(and__3546__auto____391933))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____391933;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____391934 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____391934))
{return or__3548__auto____391934;
} else
{var or__3548__auto____391935 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____391935))
{return or__3548__auto____391935;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__391936 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__391937 = cljs.core._get_method.call(null,mf,dispatch_val__391936);

if(cljs.core.truth_(target_fn__391937))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__391936)));
}
return cljs.core.apply.call(null,target_fn__391937,args);
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
var this__391938 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__391939 = this;
cljs.core.swap_BANG_.call(null,this__391939.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__391939.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__391939.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__391939.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__391940 = this;
cljs.core.swap_BANG_.call(null,this__391940.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__391940.method_cache,this__391940.method_table,this__391940.cached_hierarchy,this__391940.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__391941 = this;
cljs.core.swap_BANG_.call(null,this__391941.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__391941.method_cache,this__391941.method_table,this__391941.cached_hierarchy,this__391941.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__391942 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__391942.cached_hierarchy),cljs.core.deref.call(null,this__391942.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__391942.method_cache,this__391942.method_table,this__391942.cached_hierarchy,this__391942.hierarchy);
}
var temp__3695__auto____391943 = cljs.core.deref.call(null,this__391942.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____391943))
{var target_fn__391944 = temp__3695__auto____391943;

return target_fn__391944;
} else
{var temp__3695__auto____391945 = cljs.core.find_and_cache_best_method.call(null,this__391942.name,dispatch_val,this__391942.hierarchy,this__391942.method_table,this__391942.prefer_table,this__391942.method_cache,this__391942.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____391945))
{var target_fn__391946 = temp__3695__auto____391945;

return target_fn__391946;
} else
{return cljs.core.deref.call(null,this__391942.method_table).call(null,this__391942.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__391947 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__391947.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__391947.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__391947.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__391947.method_cache,this__391947.method_table,this__391947.cached_hierarchy,this__391947.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__391948 = this;
return cljs.core.deref.call(null,this__391948.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__391949 = this;
return cljs.core.deref.call(null,this__391949.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__391950 = this;
return cljs.core.do_dispatch.call(null,mf,this__391950.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__391951__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__391951 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__391951__delegate.call(this, _, args);
};
G__391951.cljs$lang$maxFixedArity = 1;
G__391951.cljs$lang$applyTo = (function (arglist__391952){
var _ = cljs.core.first(arglist__391952);
var args = cljs.core.rest(arglist__391952);
return G__391951__delegate.call(this, _, args);
});
return G__391951;
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
