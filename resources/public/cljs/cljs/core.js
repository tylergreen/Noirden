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
var or__3548__auto____199236 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____199236))
{return or__3548__auto____199236;
} else
{var or__3548__auto____199237 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____199237))
{return or__3548__auto____199237;
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
var _invoke__199301 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____199238 = this$;

if(cljs.core.truth_(and__3546__auto____199238))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199238;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____199239 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199239))
{return or__3548__auto____199239;
} else
{var or__3548__auto____199240 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199240))
{return or__3548__auto____199240;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__199302 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____199241 = this$;

if(cljs.core.truth_(and__3546__auto____199241))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199241;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____199242 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199242))
{return or__3548__auto____199242;
} else
{var or__3548__auto____199243 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199243))
{return or__3548__auto____199243;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__199303 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____199244 = this$;

if(cljs.core.truth_(and__3546__auto____199244))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199244;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____199245 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199245))
{return or__3548__auto____199245;
} else
{var or__3548__auto____199246 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199246))
{return or__3548__auto____199246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__199304 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____199247 = this$;

if(cljs.core.truth_(and__3546__auto____199247))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199247;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____199248 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199248))
{return or__3548__auto____199248;
} else
{var or__3548__auto____199249 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199249))
{return or__3548__auto____199249;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__199305 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____199250 = this$;

if(cljs.core.truth_(and__3546__auto____199250))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199250;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____199251 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199251))
{return or__3548__auto____199251;
} else
{var or__3548__auto____199252 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199252))
{return or__3548__auto____199252;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__199306 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____199253 = this$;

if(cljs.core.truth_(and__3546__auto____199253))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199253;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____199254 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199254))
{return or__3548__auto____199254;
} else
{var or__3548__auto____199255 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199255))
{return or__3548__auto____199255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__199307 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____199256 = this$;

if(cljs.core.truth_(and__3546__auto____199256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____199257 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199257))
{return or__3548__auto____199257;
} else
{var or__3548__auto____199258 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199258))
{return or__3548__auto____199258;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__199308 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____199259 = this$;

if(cljs.core.truth_(and__3546__auto____199259))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199259;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____199260 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199260))
{return or__3548__auto____199260;
} else
{var or__3548__auto____199261 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199261))
{return or__3548__auto____199261;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__199309 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____199262 = this$;

if(cljs.core.truth_(and__3546__auto____199262))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199262;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____199263 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199263))
{return or__3548__auto____199263;
} else
{var or__3548__auto____199264 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199264))
{return or__3548__auto____199264;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__199310 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____199265 = this$;

if(cljs.core.truth_(and__3546__auto____199265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____199266 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199266))
{return or__3548__auto____199266;
} else
{var or__3548__auto____199267 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199267))
{return or__3548__auto____199267;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__199311 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____199268 = this$;

if(cljs.core.truth_(and__3546__auto____199268))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199268;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____199269 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199269))
{return or__3548__auto____199269;
} else
{var or__3548__auto____199270 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199270))
{return or__3548__auto____199270;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__199312 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____199271 = this$;

if(cljs.core.truth_(and__3546__auto____199271))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199271;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____199272 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199272))
{return or__3548__auto____199272;
} else
{var or__3548__auto____199273 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199273))
{return or__3548__auto____199273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__199313 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____199274 = this$;

if(cljs.core.truth_(and__3546__auto____199274))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199274;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____199275 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199275))
{return or__3548__auto____199275;
} else
{var or__3548__auto____199276 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199276))
{return or__3548__auto____199276;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__199314 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____199277 = this$;

if(cljs.core.truth_(and__3546__auto____199277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____199278 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199278))
{return or__3548__auto____199278;
} else
{var or__3548__auto____199279 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199279))
{return or__3548__auto____199279;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__199315 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____199280 = this$;

if(cljs.core.truth_(and__3546__auto____199280))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199280;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____199281 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199281))
{return or__3548__auto____199281;
} else
{var or__3548__auto____199282 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199282))
{return or__3548__auto____199282;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__199316 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____199283 = this$;

if(cljs.core.truth_(and__3546__auto____199283))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199283;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____199284 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199284))
{return or__3548__auto____199284;
} else
{var or__3548__auto____199285 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199285))
{return or__3548__auto____199285;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__199317 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____199286 = this$;

if(cljs.core.truth_(and__3546__auto____199286))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199286;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____199287 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199287))
{return or__3548__auto____199287;
} else
{var or__3548__auto____199288 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199288))
{return or__3548__auto____199288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__199318 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____199289 = this$;

if(cljs.core.truth_(and__3546__auto____199289))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199289;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____199290 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199290))
{return or__3548__auto____199290;
} else
{var or__3548__auto____199291 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199291))
{return or__3548__auto____199291;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__199319 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____199292 = this$;

if(cljs.core.truth_(and__3546__auto____199292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____199293 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199293))
{return or__3548__auto____199293;
} else
{var or__3548__auto____199294 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199294))
{return or__3548__auto____199294;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__199320 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____199295 = this$;

if(cljs.core.truth_(and__3546__auto____199295))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199295;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____199296 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199296))
{return or__3548__auto____199296;
} else
{var or__3548__auto____199297 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199297))
{return or__3548__auto____199297;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__199321 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____199298 = this$;

if(cljs.core.truth_(and__3546__auto____199298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____199298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____199299 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199299))
{return or__3548__auto____199299;
} else
{var or__3548__auto____199300 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____199300))
{return or__3548__auto____199300;
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
return _invoke__199301.call(this,this$);
case  2 :
return _invoke__199302.call(this,this$,a);
case  3 :
return _invoke__199303.call(this,this$,a,b);
case  4 :
return _invoke__199304.call(this,this$,a,b,c);
case  5 :
return _invoke__199305.call(this,this$,a,b,c,d);
case  6 :
return _invoke__199306.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__199307.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__199308.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__199309.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__199310.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__199311.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__199312.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__199313.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__199314.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__199315.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__199316.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__199317.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__199318.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__199319.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__199320.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__199321.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____199323 = coll;

if(cljs.core.truth_(and__3546__auto____199323))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____199323;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____199324 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199324))
{return or__3548__auto____199324;
} else
{var or__3548__auto____199325 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____199325))
{return or__3548__auto____199325;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____199326 = coll;

if(cljs.core.truth_(and__3546__auto____199326))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____199326;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____199327 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199327))
{return or__3548__auto____199327;
} else
{var or__3548__auto____199328 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____199328))
{return or__3548__auto____199328;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____199329 = coll;

if(cljs.core.truth_(and__3546__auto____199329))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____199329;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____199330 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199330))
{return or__3548__auto____199330;
} else
{var or__3548__auto____199331 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____199331))
{return or__3548__auto____199331;
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
var _nth__199338 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____199332 = coll;

if(cljs.core.truth_(and__3546__auto____199332))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____199332;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____199333 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199333))
{return or__3548__auto____199333;
} else
{var or__3548__auto____199334 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____199334))
{return or__3548__auto____199334;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__199339 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____199335 = coll;

if(cljs.core.truth_(and__3546__auto____199335))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____199335;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____199336 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199336))
{return or__3548__auto____199336;
} else
{var or__3548__auto____199337 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____199337))
{return or__3548__auto____199337;
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
return _nth__199338.call(this,coll,n);
case  3 :
return _nth__199339.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____199341 = coll;

if(cljs.core.truth_(and__3546__auto____199341))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____199341;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____199342 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199342))
{return or__3548__auto____199342;
} else
{var or__3548__auto____199343 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____199343))
{return or__3548__auto____199343;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____199344 = coll;

if(cljs.core.truth_(and__3546__auto____199344))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____199344;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____199345 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199345))
{return or__3548__auto____199345;
} else
{var or__3548__auto____199346 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____199346))
{return or__3548__auto____199346;
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
var _lookup__199353 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____199347 = o;

if(cljs.core.truth_(and__3546__auto____199347))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____199347;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____199348 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199348))
{return or__3548__auto____199348;
} else
{var or__3548__auto____199349 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____199349))
{return or__3548__auto____199349;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__199354 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____199350 = o;

if(cljs.core.truth_(and__3546__auto____199350))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____199350;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____199351 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199351))
{return or__3548__auto____199351;
} else
{var or__3548__auto____199352 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____199352))
{return or__3548__auto____199352;
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
return _lookup__199353.call(this,o,k);
case  3 :
return _lookup__199354.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____199356 = coll;

if(cljs.core.truth_(and__3546__auto____199356))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____199356;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____199357 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199357))
{return or__3548__auto____199357;
} else
{var or__3548__auto____199358 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____199358))
{return or__3548__auto____199358;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____199359 = coll;

if(cljs.core.truth_(and__3546__auto____199359))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____199359;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____199360 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199360))
{return or__3548__auto____199360;
} else
{var or__3548__auto____199361 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____199361))
{return or__3548__auto____199361;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____199362 = coll;

if(cljs.core.truth_(and__3546__auto____199362))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____199362;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____199363 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199363))
{return or__3548__auto____199363;
} else
{var or__3548__auto____199364 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____199364))
{return or__3548__auto____199364;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____199365 = coll;

if(cljs.core.truth_(and__3546__auto____199365))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____199365;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____199366 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199366))
{return or__3548__auto____199366;
} else
{var or__3548__auto____199367 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____199367))
{return or__3548__auto____199367;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____199368 = coll;

if(cljs.core.truth_(and__3546__auto____199368))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____199368;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____199369 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199369))
{return or__3548__auto____199369;
} else
{var or__3548__auto____199370 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____199370))
{return or__3548__auto____199370;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____199371 = coll;

if(cljs.core.truth_(and__3546__auto____199371))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____199371;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____199372 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199372))
{return or__3548__auto____199372;
} else
{var or__3548__auto____199373 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____199373))
{return or__3548__auto____199373;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____199374 = coll;

if(cljs.core.truth_(and__3546__auto____199374))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____199374;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____199375 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199375))
{return or__3548__auto____199375;
} else
{var or__3548__auto____199376 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____199376))
{return or__3548__auto____199376;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____199377 = o;

if(cljs.core.truth_(and__3546__auto____199377))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____199377;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____199378 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199378))
{return or__3548__auto____199378;
} else
{var or__3548__auto____199379 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____199379))
{return or__3548__auto____199379;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____199380 = o;

if(cljs.core.truth_(and__3546__auto____199380))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____199380;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____199381 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199381))
{return or__3548__auto____199381;
} else
{var or__3548__auto____199382 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____199382))
{return or__3548__auto____199382;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____199383 = o;

if(cljs.core.truth_(and__3546__auto____199383))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____199383;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____199384 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199384))
{return or__3548__auto____199384;
} else
{var or__3548__auto____199385 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____199385))
{return or__3548__auto____199385;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____199386 = o;

if(cljs.core.truth_(and__3546__auto____199386))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____199386;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____199387 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199387))
{return or__3548__auto____199387;
} else
{var or__3548__auto____199388 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____199388))
{return or__3548__auto____199388;
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
var _reduce__199395 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____199389 = coll;

if(cljs.core.truth_(and__3546__auto____199389))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____199389;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____199390 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199390))
{return or__3548__auto____199390;
} else
{var or__3548__auto____199391 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____199391))
{return or__3548__auto____199391;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__199396 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____199392 = coll;

if(cljs.core.truth_(and__3546__auto____199392))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____199392;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____199393 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____199393))
{return or__3548__auto____199393;
} else
{var or__3548__auto____199394 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____199394))
{return or__3548__auto____199394;
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
return _reduce__199395.call(this,coll,f);
case  3 :
return _reduce__199396.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____199398 = o;

if(cljs.core.truth_(and__3546__auto____199398))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____199398;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____199399 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199399))
{return or__3548__auto____199399;
} else
{var or__3548__auto____199400 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____199400))
{return or__3548__auto____199400;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____199401 = o;

if(cljs.core.truth_(and__3546__auto____199401))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____199401;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____199402 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199402))
{return or__3548__auto____199402;
} else
{var or__3548__auto____199403 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____199403))
{return or__3548__auto____199403;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____199404 = o;

if(cljs.core.truth_(and__3546__auto____199404))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____199404;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____199405 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199405))
{return or__3548__auto____199405;
} else
{var or__3548__auto____199406 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____199406))
{return or__3548__auto____199406;
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
if(cljs.core.truth_((function (){var and__3546__auto____199407 = o;

if(cljs.core.truth_(and__3546__auto____199407))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____199407;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____199408 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____199408))
{return or__3548__auto____199408;
} else
{var or__3548__auto____199409 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____199409))
{return or__3548__auto____199409;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____199410 = d;

if(cljs.core.truth_(and__3546__auto____199410))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____199410;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____199411 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____199411))
{return or__3548__auto____199411;
} else
{var or__3548__auto____199412 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____199412))
{return or__3548__auto____199412;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____199413 = this$;

if(cljs.core.truth_(and__3546__auto____199413))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____199413;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____199414 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199414))
{return or__3548__auto____199414;
} else
{var or__3548__auto____199415 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____199415))
{return or__3548__auto____199415;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____199416 = this$;

if(cljs.core.truth_(and__3546__auto____199416))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____199416;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____199417 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199417))
{return or__3548__auto____199417;
} else
{var or__3548__auto____199418 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____199418))
{return or__3548__auto____199418;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____199419 = this$;

if(cljs.core.truth_(and__3546__auto____199419))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____199419;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____199420 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____199420))
{return or__3548__auto____199420;
} else
{var or__3548__auto____199421 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____199421))
{return or__3548__auto____199421;
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
var G__199422 = null;
var G__199422__199423 = (function (o,k){
return null;
});
var G__199422__199424 = (function (o,k,not_found){
return not_found;
});
G__199422 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__199422__199423.call(this,o,k);
case  3 :
return G__199422__199424.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199422;
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
var G__199426 = null;
var G__199426__199427 = (function (_,f){
return f.call(null);
});
var G__199426__199428 = (function (_,f,start){
return start;
});
G__199426 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__199426__199427.call(this,_,f);
case  3 :
return G__199426__199428.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199426;
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
var G__199430 = null;
var G__199430__199431 = (function (_,n){
return null;
});
var G__199430__199432 = (function (_,n,not_found){
return not_found;
});
G__199430 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__199430__199431.call(this,_,n);
case  3 :
return G__199430__199432.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199430;
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
var ci_reduce__199440 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__199434 = cljs.core._nth.call(null,cicoll,0);
var n__199435 = 1;

while(true){
if(cljs.core.truth_((n__199435 < cljs.core._count.call(null,cicoll))))
{{
var G__199444 = f.call(null,val__199434,cljs.core._nth.call(null,cicoll,n__199435));
var G__199445 = (n__199435 + 1);
val__199434 = G__199444;
n__199435 = G__199445;
continue;
}
} else
{return val__199434;
}
break;
}
}
});
var ci_reduce__199441 = (function (cicoll,f,val){
var val__199436 = val;
var n__199437 = 0;

while(true){
if(cljs.core.truth_((n__199437 < cljs.core._count.call(null,cicoll))))
{{
var G__199446 = f.call(null,val__199436,cljs.core._nth.call(null,cicoll,n__199437));
var G__199447 = (n__199437 + 1);
val__199436 = G__199446;
n__199437 = G__199447;
continue;
}
} else
{return val__199436;
}
break;
}
});
var ci_reduce__199442 = (function (cicoll,f,val,idx){
var val__199438 = val;
var n__199439 = idx;

while(true){
if(cljs.core.truth_((n__199439 < cljs.core._count.call(null,cicoll))))
{{
var G__199448 = f.call(null,val__199438,cljs.core._nth.call(null,cicoll,n__199439));
var G__199449 = (n__199439 + 1);
val__199438 = G__199448;
n__199439 = G__199449;
continue;
}
} else
{return val__199438;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__199440.call(this,cicoll,f);
case  3 :
return ci_reduce__199441.call(this,cicoll,f,val);
case  4 :
return ci_reduce__199442.call(this,cicoll,f,val,idx);
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
var this__199450 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__199463 = null;
var G__199463__199464 = (function (_,f){
var this__199451 = this;
return cljs.core.ci_reduce.call(null,this__199451.a,f,(this__199451.a[this__199451.i]),(this__199451.i + 1));
});
var G__199463__199465 = (function (_,f,start){
var this__199452 = this;
return cljs.core.ci_reduce.call(null,this__199452.a,f,start,this__199452.i);
});
G__199463 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__199463__199464.call(this,_,f);
case  3 :
return G__199463__199465.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199463;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__199453 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__199454 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__199467 = null;
var G__199467__199468 = (function (coll,n){
var this__199455 = this;
var i__199456 = (n + this__199455.i);

if(cljs.core.truth_((i__199456 < this__199455.a.length)))
{return (this__199455.a[i__199456]);
} else
{return null;
}
});
var G__199467__199469 = (function (coll,n,not_found){
var this__199457 = this;
var i__199458 = (n + this__199457.i);

if(cljs.core.truth_((i__199458 < this__199457.a.length)))
{return (this__199457.a[i__199458]);
} else
{return not_found;
}
});
G__199467 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__199467__199468.call(this,coll,n);
case  3 :
return G__199467__199469.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199467;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__199459 = this;
return (this__199459.a.length - this__199459.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__199460 = this;
return (this__199460.a[this__199460.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__199461 = this;
if(cljs.core.truth_(((this__199461.i + 1) < this__199461.a.length)))
{return (new cljs.core.IndexedSeq(this__199461.a,(this__199461.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__199462 = this;
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
var G__199471 = null;
var G__199471__199472 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__199471__199473 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__199471 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__199471__199472.call(this,array,f);
case  3 :
return G__199471__199473.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199471;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__199475 = null;
var G__199475__199476 = (function (array,k){
return (array[k]);
});
var G__199475__199477 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__199475 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__199475__199476.call(this,array,k);
case  3 :
return G__199475__199477.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199475;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__199479 = null;
var G__199479__199480 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__199479__199481 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__199479 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__199479__199480.call(this,array,n);
case  3 :
return G__199479__199481.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199479;
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
var temp__3698__auto____199483 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____199483))
{var s__199484 = temp__3698__auto____199483;

return cljs.core._first.call(null,s__199484);
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
var G__199485 = cljs.core.next.call(null,s);
s = G__199485;
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
var s__199486 = cljs.core.seq.call(null,x);
var n__199487 = 0;

while(true){
if(cljs.core.truth_(s__199486))
{{
var G__199488 = cljs.core.next.call(null,s__199486);
var G__199489 = (n__199487 + 1);
s__199486 = G__199488;
n__199487 = G__199489;
continue;
}
} else
{return n__199487;
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
var conj__199490 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__199491 = (function() { 
var G__199493__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__199494 = conj.call(null,coll,x);
var G__199495 = cljs.core.first.call(null,xs);
var G__199496 = cljs.core.next.call(null,xs);
coll = G__199494;
x = G__199495;
xs = G__199496;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__199493 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199493__delegate.call(this, coll, x, xs);
};
G__199493.cljs$lang$maxFixedArity = 2;
G__199493.cljs$lang$applyTo = (function (arglist__199497){
var coll = cljs.core.first(arglist__199497);
var x = cljs.core.first(cljs.core.next(arglist__199497));
var xs = cljs.core.rest(cljs.core.next(arglist__199497));
return G__199493__delegate.call(this, coll, x, xs);
});
return G__199493;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__199490.call(this,coll,x);
default:
return conj__199491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__199491.cljs$lang$applyTo;
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
var nth__199498 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__199499 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__199498.call(this,coll,n);
case  3 :
return nth__199499.call(this,coll,n,not_found);
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
var get__199501 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__199502 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__199501.call(this,o,k);
case  3 :
return get__199502.call(this,o,k,not_found);
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
var assoc__199505 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__199506 = (function() { 
var G__199508__delegate = function (coll,k,v,kvs){
while(true){
var ret__199504 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__199509 = ret__199504;
var G__199510 = cljs.core.first.call(null,kvs);
var G__199511 = cljs.core.second.call(null,kvs);
var G__199512 = cljs.core.nnext.call(null,kvs);
coll = G__199509;
k = G__199510;
v = G__199511;
kvs = G__199512;
continue;
}
} else
{return ret__199504;
}
break;
}
};
var G__199508 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__199508__delegate.call(this, coll, k, v, kvs);
};
G__199508.cljs$lang$maxFixedArity = 3;
G__199508.cljs$lang$applyTo = (function (arglist__199513){
var coll = cljs.core.first(arglist__199513);
var k = cljs.core.first(cljs.core.next(arglist__199513));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199513)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__199513)));
return G__199508__delegate.call(this, coll, k, v, kvs);
});
return G__199508;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__199505.call(this,coll,k,v);
default:
return assoc__199506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__199506.cljs$lang$applyTo;
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
var dissoc__199515 = (function (coll){
return coll;
});
var dissoc__199516 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__199517 = (function() { 
var G__199519__delegate = function (coll,k,ks){
while(true){
var ret__199514 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__199520 = ret__199514;
var G__199521 = cljs.core.first.call(null,ks);
var G__199522 = cljs.core.next.call(null,ks);
coll = G__199520;
k = G__199521;
ks = G__199522;
continue;
}
} else
{return ret__199514;
}
break;
}
};
var G__199519 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199519__delegate.call(this, coll, k, ks);
};
G__199519.cljs$lang$maxFixedArity = 2;
G__199519.cljs$lang$applyTo = (function (arglist__199523){
var coll = cljs.core.first(arglist__199523);
var k = cljs.core.first(cljs.core.next(arglist__199523));
var ks = cljs.core.rest(cljs.core.next(arglist__199523));
return G__199519__delegate.call(this, coll, k, ks);
});
return G__199519;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__199515.call(this,coll);
case  2 :
return dissoc__199516.call(this,coll,k);
default:
return dissoc__199517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__199517.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____199524 = o;

if(cljs.core.truth_((function (){var and__3546__auto____199525 = x__450__auto____199524;

if(cljs.core.truth_(and__3546__auto____199525))
{var and__3546__auto____199526 = x__450__auto____199524.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____199526))
{return cljs.core.not.call(null,x__450__auto____199524.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____199526;
}
} else
{return and__3546__auto____199525;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____199524);
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
var disj__199528 = (function (coll){
return coll;
});
var disj__199529 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__199530 = (function() { 
var G__199532__delegate = function (coll,k,ks){
while(true){
var ret__199527 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__199533 = ret__199527;
var G__199534 = cljs.core.first.call(null,ks);
var G__199535 = cljs.core.next.call(null,ks);
coll = G__199533;
k = G__199534;
ks = G__199535;
continue;
}
} else
{return ret__199527;
}
break;
}
};
var G__199532 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199532__delegate.call(this, coll, k, ks);
};
G__199532.cljs$lang$maxFixedArity = 2;
G__199532.cljs$lang$applyTo = (function (arglist__199536){
var coll = cljs.core.first(arglist__199536);
var k = cljs.core.first(cljs.core.next(arglist__199536));
var ks = cljs.core.rest(cljs.core.next(arglist__199536));
return G__199532__delegate.call(this, coll, k, ks);
});
return G__199532;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__199528.call(this,coll);
case  2 :
return disj__199529.call(this,coll,k);
default:
return disj__199530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__199530.cljs$lang$applyTo;
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
{var x__450__auto____199537 = x;

if(cljs.core.truth_((function (){var and__3546__auto____199538 = x__450__auto____199537;

if(cljs.core.truth_(and__3546__auto____199538))
{var and__3546__auto____199539 = x__450__auto____199537.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____199539))
{return cljs.core.not.call(null,x__450__auto____199537.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____199539;
}
} else
{return and__3546__auto____199538;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____199537);
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
{var x__450__auto____199540 = x;

if(cljs.core.truth_((function (){var and__3546__auto____199541 = x__450__auto____199540;

if(cljs.core.truth_(and__3546__auto____199541))
{var and__3546__auto____199542 = x__450__auto____199540.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____199542))
{return cljs.core.not.call(null,x__450__auto____199540.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____199542;
}
} else
{return and__3546__auto____199541;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____199540);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____199543 = x;

if(cljs.core.truth_((function (){var and__3546__auto____199544 = x__450__auto____199543;

if(cljs.core.truth_(and__3546__auto____199544))
{var and__3546__auto____199545 = x__450__auto____199543.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____199545))
{return cljs.core.not.call(null,x__450__auto____199543.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____199545;
}
} else
{return and__3546__auto____199544;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____199543);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____199546 = x;

if(cljs.core.truth_((function (){var and__3546__auto____199547 = x__450__auto____199546;

if(cljs.core.truth_(and__3546__auto____199547))
{var and__3546__auto____199548 = x__450__auto____199546.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____199548))
{return cljs.core.not.call(null,x__450__auto____199546.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____199548;
}
} else
{return and__3546__auto____199547;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____199546);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____199549 = x;

if(cljs.core.truth_((function (){var and__3546__auto____199550 = x__450__auto____199549;

if(cljs.core.truth_(and__3546__auto____199550))
{var and__3546__auto____199551 = x__450__auto____199549.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____199551))
{return cljs.core.not.call(null,x__450__auto____199549.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____199551;
}
} else
{return and__3546__auto____199550;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____199549);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____199552 = x;

if(cljs.core.truth_((function (){var and__3546__auto____199553 = x__450__auto____199552;

if(cljs.core.truth_(and__3546__auto____199553))
{var and__3546__auto____199554 = x__450__auto____199552.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____199554))
{return cljs.core.not.call(null,x__450__auto____199552.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____199554;
}
} else
{return and__3546__auto____199553;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____199552);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____199555 = x;

if(cljs.core.truth_((function (){var and__3546__auto____199556 = x__450__auto____199555;

if(cljs.core.truth_(and__3546__auto____199556))
{var and__3546__auto____199557 = x__450__auto____199555.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____199557))
{return cljs.core.not.call(null,x__450__auto____199555.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____199557;
}
} else
{return and__3546__auto____199556;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____199555);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__199558 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__199558.push(key);
}));
return keys__199558;
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
{var x__450__auto____199559 = s;

if(cljs.core.truth_((function (){var and__3546__auto____199560 = x__450__auto____199559;

if(cljs.core.truth_(and__3546__auto____199560))
{var and__3546__auto____199561 = x__450__auto____199559.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____199561))
{return cljs.core.not.call(null,x__450__auto____199559.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____199561;
}
} else
{return and__3546__auto____199560;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____199559);
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
var and__3546__auto____199562 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____199562))
{return cljs.core.not.call(null,(function (){var or__3548__auto____199563 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____199563))
{return or__3548__auto____199563;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____199562;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____199564 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____199564))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____199564;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____199565 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____199565))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____199565;
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
var and__3546__auto____199566 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____199566))
{return (n == n.toFixed());
} else
{return and__3546__auto____199566;
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
if(cljs.core.truth_((function (){var and__3546__auto____199567 = coll;

if(cljs.core.truth_(and__3546__auto____199567))
{var and__3546__auto____199568 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____199568))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____199568;
}
} else
{return and__3546__auto____199567;
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
var distinct_QMARK___199573 = (function (x){
return true;
});
var distinct_QMARK___199574 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___199575 = (function() { 
var G__199577__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__199569 = cljs.core.set([y,x]);
var xs__199570 = more;

while(true){
var x__199571 = cljs.core.first.call(null,xs__199570);
var etc__199572 = cljs.core.next.call(null,xs__199570);

if(cljs.core.truth_(xs__199570))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__199569,x__199571)))
{return false;
} else
{{
var G__199578 = cljs.core.conj.call(null,s__199569,x__199571);
var G__199579 = etc__199572;
s__199569 = G__199578;
xs__199570 = G__199579;
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
var G__199577 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199577__delegate.call(this, x, y, more);
};
G__199577.cljs$lang$maxFixedArity = 2;
G__199577.cljs$lang$applyTo = (function (arglist__199580){
var x = cljs.core.first(arglist__199580);
var y = cljs.core.first(cljs.core.next(arglist__199580));
var more = cljs.core.rest(cljs.core.next(arglist__199580));
return G__199577__delegate.call(this, x, y, more);
});
return G__199577;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___199573.call(this,x);
case  2 :
return distinct_QMARK___199574.call(this,x,y);
default:
return distinct_QMARK___199575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___199575.cljs$lang$applyTo;
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
var r__199581 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__199581)))
{return r__199581;
} else
{if(cljs.core.truth_(r__199581))
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
var sort__199583 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__199584 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__199582 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__199582,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__199582);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__199583.call(this,comp);
case  2 :
return sort__199584.call(this,comp,coll);
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
var sort_by__199586 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__199587 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__199586.call(this,keyfn,comp);
case  3 :
return sort_by__199587.call(this,keyfn,comp,coll);
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
var reduce__199589 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__199590 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__199589.call(this,f,val);
case  3 :
return reduce__199590.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__199596 = (function (f,coll){
var temp__3695__auto____199592 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____199592))
{var s__199593 = temp__3695__auto____199592;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__199593),cljs.core.next.call(null,s__199593));
} else
{return f.call(null);
}
});
var seq_reduce__199597 = (function (f,val,coll){
var val__199594 = val;
var coll__199595 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__199595))
{{
var G__199599 = f.call(null,val__199594,cljs.core.first.call(null,coll__199595));
var G__199600 = cljs.core.next.call(null,coll__199595);
val__199594 = G__199599;
coll__199595 = G__199600;
continue;
}
} else
{return val__199594;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__199596.call(this,f,val);
case  3 :
return seq_reduce__199597.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__199601 = null;
var G__199601__199602 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__199601__199603 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__199601 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__199601__199602.call(this,coll,f);
case  3 :
return G__199601__199603.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199601;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___199605 = (function (){
return 0;
});
var _PLUS___199606 = (function (x){
return x;
});
var _PLUS___199607 = (function (x,y){
return (x + y);
});
var _PLUS___199608 = (function() { 
var G__199610__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__199610 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199610__delegate.call(this, x, y, more);
};
G__199610.cljs$lang$maxFixedArity = 2;
G__199610.cljs$lang$applyTo = (function (arglist__199611){
var x = cljs.core.first(arglist__199611);
var y = cljs.core.first(cljs.core.next(arglist__199611));
var more = cljs.core.rest(cljs.core.next(arglist__199611));
return G__199610__delegate.call(this, x, y, more);
});
return G__199610;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___199605.call(this);
case  1 :
return _PLUS___199606.call(this,x);
case  2 :
return _PLUS___199607.call(this,x,y);
default:
return _PLUS___199608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___199608.cljs$lang$applyTo;
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
var ___199612 = (function (x){
return (- x);
});
var ___199613 = (function (x,y){
return (x - y);
});
var ___199614 = (function() { 
var G__199616__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__199616 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199616__delegate.call(this, x, y, more);
};
G__199616.cljs$lang$maxFixedArity = 2;
G__199616.cljs$lang$applyTo = (function (arglist__199617){
var x = cljs.core.first(arglist__199617);
var y = cljs.core.first(cljs.core.next(arglist__199617));
var more = cljs.core.rest(cljs.core.next(arglist__199617));
return G__199616__delegate.call(this, x, y, more);
});
return G__199616;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___199612.call(this,x);
case  2 :
return ___199613.call(this,x,y);
default:
return ___199614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___199614.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___199618 = (function (){
return 1;
});
var _STAR___199619 = (function (x){
return x;
});
var _STAR___199620 = (function (x,y){
return (x * y);
});
var _STAR___199621 = (function() { 
var G__199623__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__199623 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199623__delegate.call(this, x, y, more);
};
G__199623.cljs$lang$maxFixedArity = 2;
G__199623.cljs$lang$applyTo = (function (arglist__199624){
var x = cljs.core.first(arglist__199624);
var y = cljs.core.first(cljs.core.next(arglist__199624));
var more = cljs.core.rest(cljs.core.next(arglist__199624));
return G__199623__delegate.call(this, x, y, more);
});
return G__199623;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___199618.call(this);
case  1 :
return _STAR___199619.call(this,x);
case  2 :
return _STAR___199620.call(this,x,y);
default:
return _STAR___199621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___199621.cljs$lang$applyTo;
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
var _SLASH___199625 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___199626 = (function (x,y){
return (x / y);
});
var _SLASH___199627 = (function() { 
var G__199629__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__199629 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199629__delegate.call(this, x, y, more);
};
G__199629.cljs$lang$maxFixedArity = 2;
G__199629.cljs$lang$applyTo = (function (arglist__199630){
var x = cljs.core.first(arglist__199630);
var y = cljs.core.first(cljs.core.next(arglist__199630));
var more = cljs.core.rest(cljs.core.next(arglist__199630));
return G__199629__delegate.call(this, x, y, more);
});
return G__199629;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___199625.call(this,x);
case  2 :
return _SLASH___199626.call(this,x,y);
default:
return _SLASH___199627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___199627.cljs$lang$applyTo;
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
var _LT___199631 = (function (x){
return true;
});
var _LT___199632 = (function (x,y){
return (x < y);
});
var _LT___199633 = (function() { 
var G__199635__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__199636 = y;
var G__199637 = cljs.core.first.call(null,more);
var G__199638 = cljs.core.next.call(null,more);
x = G__199636;
y = G__199637;
more = G__199638;
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
var G__199635 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199635__delegate.call(this, x, y, more);
};
G__199635.cljs$lang$maxFixedArity = 2;
G__199635.cljs$lang$applyTo = (function (arglist__199639){
var x = cljs.core.first(arglist__199639);
var y = cljs.core.first(cljs.core.next(arglist__199639));
var more = cljs.core.rest(cljs.core.next(arglist__199639));
return G__199635__delegate.call(this, x, y, more);
});
return G__199635;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___199631.call(this,x);
case  2 :
return _LT___199632.call(this,x,y);
default:
return _LT___199633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___199633.cljs$lang$applyTo;
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
var _LT__EQ___199640 = (function (x){
return true;
});
var _LT__EQ___199641 = (function (x,y){
return (x <= y);
});
var _LT__EQ___199642 = (function() { 
var G__199644__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__199645 = y;
var G__199646 = cljs.core.first.call(null,more);
var G__199647 = cljs.core.next.call(null,more);
x = G__199645;
y = G__199646;
more = G__199647;
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
var G__199644 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199644__delegate.call(this, x, y, more);
};
G__199644.cljs$lang$maxFixedArity = 2;
G__199644.cljs$lang$applyTo = (function (arglist__199648){
var x = cljs.core.first(arglist__199648);
var y = cljs.core.first(cljs.core.next(arglist__199648));
var more = cljs.core.rest(cljs.core.next(arglist__199648));
return G__199644__delegate.call(this, x, y, more);
});
return G__199644;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___199640.call(this,x);
case  2 :
return _LT__EQ___199641.call(this,x,y);
default:
return _LT__EQ___199642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___199642.cljs$lang$applyTo;
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
var _GT___199649 = (function (x){
return true;
});
var _GT___199650 = (function (x,y){
return (x > y);
});
var _GT___199651 = (function() { 
var G__199653__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__199654 = y;
var G__199655 = cljs.core.first.call(null,more);
var G__199656 = cljs.core.next.call(null,more);
x = G__199654;
y = G__199655;
more = G__199656;
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
var G__199653 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199653__delegate.call(this, x, y, more);
};
G__199653.cljs$lang$maxFixedArity = 2;
G__199653.cljs$lang$applyTo = (function (arglist__199657){
var x = cljs.core.first(arglist__199657);
var y = cljs.core.first(cljs.core.next(arglist__199657));
var more = cljs.core.rest(cljs.core.next(arglist__199657));
return G__199653__delegate.call(this, x, y, more);
});
return G__199653;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___199649.call(this,x);
case  2 :
return _GT___199650.call(this,x,y);
default:
return _GT___199651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___199651.cljs$lang$applyTo;
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
var _GT__EQ___199658 = (function (x){
return true;
});
var _GT__EQ___199659 = (function (x,y){
return (x >= y);
});
var _GT__EQ___199660 = (function() { 
var G__199662__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__199663 = y;
var G__199664 = cljs.core.first.call(null,more);
var G__199665 = cljs.core.next.call(null,more);
x = G__199663;
y = G__199664;
more = G__199665;
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
var G__199662 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199662__delegate.call(this, x, y, more);
};
G__199662.cljs$lang$maxFixedArity = 2;
G__199662.cljs$lang$applyTo = (function (arglist__199666){
var x = cljs.core.first(arglist__199666);
var y = cljs.core.first(cljs.core.next(arglist__199666));
var more = cljs.core.rest(cljs.core.next(arglist__199666));
return G__199662__delegate.call(this, x, y, more);
});
return G__199662;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___199658.call(this,x);
case  2 :
return _GT__EQ___199659.call(this,x,y);
default:
return _GT__EQ___199660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___199660.cljs$lang$applyTo;
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
var max__199667 = (function (x){
return x;
});
var max__199668 = (function (x,y){
return ((x > y) ? x : y);
});
var max__199669 = (function() { 
var G__199671__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__199671 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199671__delegate.call(this, x, y, more);
};
G__199671.cljs$lang$maxFixedArity = 2;
G__199671.cljs$lang$applyTo = (function (arglist__199672){
var x = cljs.core.first(arglist__199672);
var y = cljs.core.first(cljs.core.next(arglist__199672));
var more = cljs.core.rest(cljs.core.next(arglist__199672));
return G__199671__delegate.call(this, x, y, more);
});
return G__199671;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__199667.call(this,x);
case  2 :
return max__199668.call(this,x,y);
default:
return max__199669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__199669.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__199673 = (function (x){
return x;
});
var min__199674 = (function (x,y){
return ((x < y) ? x : y);
});
var min__199675 = (function() { 
var G__199677__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__199677 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199677__delegate.call(this, x, y, more);
};
G__199677.cljs$lang$maxFixedArity = 2;
G__199677.cljs$lang$applyTo = (function (arglist__199678){
var x = cljs.core.first(arglist__199678);
var y = cljs.core.first(cljs.core.next(arglist__199678));
var more = cljs.core.rest(cljs.core.next(arglist__199678));
return G__199677__delegate.call(this, x, y, more);
});
return G__199677;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__199673.call(this,x);
case  2 :
return min__199674.call(this,x,y);
default:
return min__199675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__199675.cljs$lang$applyTo;
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
var rem__199679 = (n % d);

return cljs.core.fix.call(null,((n - rem__199679) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__199680 = cljs.core.quot.call(null,n,d);

return (n - (d * q__199680));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__199681 = (function (){
return Math.random.call(null);
});
var rand__199682 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__199681.call(this);
case  1 :
return rand__199682.call(this,n);
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
var _EQ__EQ___199684 = (function (x){
return true;
});
var _EQ__EQ___199685 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___199686 = (function() { 
var G__199688__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__199689 = y;
var G__199690 = cljs.core.first.call(null,more);
var G__199691 = cljs.core.next.call(null,more);
x = G__199689;
y = G__199690;
more = G__199691;
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
var G__199688 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199688__delegate.call(this, x, y, more);
};
G__199688.cljs$lang$maxFixedArity = 2;
G__199688.cljs$lang$applyTo = (function (arglist__199692){
var x = cljs.core.first(arglist__199692);
var y = cljs.core.first(cljs.core.next(arglist__199692));
var more = cljs.core.rest(cljs.core.next(arglist__199692));
return G__199688__delegate.call(this, x, y, more);
});
return G__199688;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___199684.call(this,x);
case  2 :
return _EQ__EQ___199685.call(this,x,y);
default:
return _EQ__EQ___199686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___199686.cljs$lang$applyTo;
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
var n__199693 = n;
var xs__199694 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____199695 = xs__199694;

if(cljs.core.truth_(and__3546__auto____199695))
{return (n__199693 > 0);
} else
{return and__3546__auto____199695;
}
})()))
{{
var G__199696 = (n__199693 - 1);
var G__199697 = cljs.core.next.call(null,xs__199694);
n__199693 = G__199696;
xs__199694 = G__199697;
continue;
}
} else
{return xs__199694;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__199702 = null;
var G__199702__199703 = (function (coll,n){
var temp__3695__auto____199698 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____199698))
{var xs__199699 = temp__3695__auto____199698;

return cljs.core.first.call(null,xs__199699);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__199702__199704 = (function (coll,n,not_found){
var temp__3695__auto____199700 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____199700))
{var xs__199701 = temp__3695__auto____199700;

return cljs.core.first.call(null,xs__199701);
} else
{return not_found;
}
});
G__199702 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__199702__199703.call(this,coll,n);
case  3 :
return G__199702__199704.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199702;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___199706 = (function (){
return "";
});
var str_STAR___199707 = (function (x){
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
var str_STAR___199708 = (function() { 
var G__199710__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__199711 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__199712 = cljs.core.next.call(null,more);
sb = G__199711;
more = G__199712;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__199710 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__199710__delegate.call(this, x, ys);
};
G__199710.cljs$lang$maxFixedArity = 1;
G__199710.cljs$lang$applyTo = (function (arglist__199713){
var x = cljs.core.first(arglist__199713);
var ys = cljs.core.rest(arglist__199713);
return G__199710__delegate.call(this, x, ys);
});
return G__199710;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___199706.call(this);
case  1 :
return str_STAR___199707.call(this,x);
default:
return str_STAR___199708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___199708.cljs$lang$applyTo;
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
var str__199714 = (function (){
return "";
});
var str__199715 = (function (x){
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
var str__199716 = (function() { 
var G__199718__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__199718 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__199718__delegate.call(this, x, ys);
};
G__199718.cljs$lang$maxFixedArity = 1;
G__199718.cljs$lang$applyTo = (function (arglist__199719){
var x = cljs.core.first(arglist__199719);
var ys = cljs.core.rest(arglist__199719);
return G__199718__delegate.call(this, x, ys);
});
return G__199718;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__199714.call(this);
case  1 :
return str__199715.call(this,x);
default:
return str__199716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__199716.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__199720 = (function (s,start){
return s.substring(start);
});
var subs__199721 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__199720.call(this,s,start);
case  3 :
return subs__199721.call(this,s,start,end);
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
var symbol__199723 = (function (name){
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
var symbol__199724 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__199723.call(this,ns);
case  2 :
return symbol__199724.call(this,ns,name);
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
var keyword__199726 = (function (name){
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
var keyword__199727 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__199726.call(this,ns);
case  2 :
return keyword__199727.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__199729 = cljs.core.seq.call(null,x);
var ys__199730 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__199729 === null)))
{return (ys__199730 === null);
} else
{if(cljs.core.truth_((ys__199730 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__199729),cljs.core.first.call(null,ys__199730))))
{{
var G__199731 = cljs.core.next.call(null,xs__199729);
var G__199732 = cljs.core.next.call(null,ys__199730);
xs__199729 = G__199731;
ys__199730 = G__199732;
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
return cljs.core.reduce.call(null,(function (p1__199733_SHARP_,p2__199734_SHARP_){
return cljs.core.hash_combine.call(null,p1__199733_SHARP_,cljs.core.hash.call(null,p2__199734_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__199735__199736 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__199735__199736))
{var G__199738__199740 = cljs.core.first.call(null,G__199735__199736);
var vec__199739__199741 = G__199738__199740;
var key_name__199742 = cljs.core.nth.call(null,vec__199739__199741,0,null);
var f__199743 = cljs.core.nth.call(null,vec__199739__199741,1,null);
var G__199735__199744 = G__199735__199736;

var G__199738__199745 = G__199738__199740;
var G__199735__199746 = G__199735__199744;

while(true){
var vec__199747__199748 = G__199738__199745;
var key_name__199749 = cljs.core.nth.call(null,vec__199747__199748,0,null);
var f__199750 = cljs.core.nth.call(null,vec__199747__199748,1,null);
var G__199735__199751 = G__199735__199746;

var str_name__199752 = cljs.core.name.call(null,key_name__199749);

obj[str_name__199752] = f__199750;
var temp__3698__auto____199753 = cljs.core.next.call(null,G__199735__199751);

if(cljs.core.truth_(temp__3698__auto____199753))
{var G__199735__199754 = temp__3698__auto____199753;

{
var G__199755 = cljs.core.first.call(null,G__199735__199754);
var G__199756 = G__199735__199754;
G__199738__199745 = G__199755;
G__199735__199746 = G__199756;
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
var this__199757 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__199758 = this;
return (new cljs.core.List(this__199758.meta,o,coll,(this__199758.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__199759 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__199760 = this;
return this__199760.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__199761 = this;
return this__199761.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__199762 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__199763 = this;
return this__199763.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__199764 = this;
return this__199764.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__199765 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__199766 = this;
return (new cljs.core.List(meta,this__199766.first,this__199766.rest,this__199766.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__199767 = this;
return this__199767.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__199768 = this;
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
var this__199769 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__199770 = this;
return (new cljs.core.List(this__199770.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__199771 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__199772 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__199773 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__199774 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__199775 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__199776 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__199777 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__199778 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__199779 = this;
return this__199779.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__199780 = this;
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
list.cljs$lang$applyTo = (function (arglist__199781){
var items = cljs.core.seq( arglist__199781 );;
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
var this__199782 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__199783 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__199784 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__199785 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__199785.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__199786 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__199787 = this;
return this__199787.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__199788 = this;
if(cljs.core.truth_((this__199788.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__199788.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__199789 = this;
return this__199789.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__199790 = this;
return (new cljs.core.Cons(meta,this__199790.first,this__199790.rest));
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
var G__199791 = null;
var G__199791__199792 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__199791__199793 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__199791 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__199791__199792.call(this,string,f);
case  3 :
return G__199791__199793.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199791;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__199795 = null;
var G__199795__199796 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__199795__199797 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__199795 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__199795__199796.call(this,string,k);
case  3 :
return G__199795__199797.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199795;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__199799 = null;
var G__199799__199800 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__199799__199801 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__199799 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__199799__199800.call(this,string,n);
case  3 :
return G__199799__199801.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199799;
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
var G__199809 = null;
var G__199809__199810 = (function (tsym199803,coll){
var tsym199803__199805 = this;

var this$__199806 = tsym199803__199805;

return cljs.core.get.call(null,coll,this$__199806.toString());
});
var G__199809__199811 = (function (tsym199804,coll,not_found){
var tsym199804__199807 = this;

var this$__199808 = tsym199804__199807;

return cljs.core.get.call(null,coll,this$__199808.toString(),not_found);
});
G__199809 = function(tsym199804,coll,not_found){
switch(arguments.length){
case  2 :
return G__199809__199810.call(this,tsym199804,coll);
case  3 :
return G__199809__199811.call(this,tsym199804,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__199809;
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
var x__199813 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__199813;
} else
{lazy_seq.x = x__199813.call(null);
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
var this__199814 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__199815 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__199816 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__199817 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__199817.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__199818 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__199819 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__199820 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__199821 = this;
return this__199821.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__199822 = this;
return (new cljs.core.LazySeq(meta,this__199822.realized,this__199822.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__199823 = cljs.core.array.call(null);

var s__199824 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__199824)))
{ary__199823.push(cljs.core.first.call(null,s__199824));
{
var G__199825 = cljs.core.next.call(null,s__199824);
s__199824 = G__199825;
continue;
}
} else
{return ary__199823;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__199826 = s;
var i__199827 = n;
var sum__199828 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____199829 = (i__199827 > 0);

if(cljs.core.truth_(and__3546__auto____199829))
{return cljs.core.seq.call(null,s__199826);
} else
{return and__3546__auto____199829;
}
})()))
{{
var G__199830 = cljs.core.next.call(null,s__199826);
var G__199831 = (i__199827 - 1);
var G__199832 = (sum__199828 + 1);
s__199826 = G__199830;
i__199827 = G__199831;
sum__199828 = G__199832;
continue;
}
} else
{return sum__199828;
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
var concat__199836 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__199837 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__199838 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__199833 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__199833))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__199833),concat.call(null,cljs.core.rest.call(null,s__199833),y));
} else
{return y;
}
})));
});
var concat__199839 = (function() { 
var G__199841__delegate = function (x,y,zs){
var cat__199835 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__199834 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__199834))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__199834),cat.call(null,cljs.core.rest.call(null,xys__199834),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__199835.call(null,concat.call(null,x,y),zs);
};
var G__199841 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199841__delegate.call(this, x, y, zs);
};
G__199841.cljs$lang$maxFixedArity = 2;
G__199841.cljs$lang$applyTo = (function (arglist__199842){
var x = cljs.core.first(arglist__199842);
var y = cljs.core.first(cljs.core.next(arglist__199842));
var zs = cljs.core.rest(cljs.core.next(arglist__199842));
return G__199841__delegate.call(this, x, y, zs);
});
return G__199841;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__199836.call(this);
case  1 :
return concat__199837.call(this,x);
case  2 :
return concat__199838.call(this,x,y);
default:
return concat__199839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__199839.cljs$lang$applyTo;
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
var list_STAR___199843 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___199844 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___199845 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___199846 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___199847 = (function() { 
var G__199849__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__199849 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__199849__delegate.call(this, a, b, c, d, more);
};
G__199849.cljs$lang$maxFixedArity = 4;
G__199849.cljs$lang$applyTo = (function (arglist__199850){
var a = cljs.core.first(arglist__199850);
var b = cljs.core.first(cljs.core.next(arglist__199850));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199850)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__199850))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__199850))));
return G__199849__delegate.call(this, a, b, c, d, more);
});
return G__199849;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___199843.call(this,a);
case  2 :
return list_STAR___199844.call(this,a,b);
case  3 :
return list_STAR___199845.call(this,a,b,c);
case  4 :
return list_STAR___199846.call(this,a,b,c,d);
default:
return list_STAR___199847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___199847.cljs$lang$applyTo;
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
var apply__199860 = (function (f,args){
var fixed_arity__199851 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__199851 + 1)) <= fixed_arity__199851)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__199861 = (function (f,x,args){
var arglist__199852 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__199853 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__199852,fixed_arity__199853) <= fixed_arity__199853)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__199852));
} else
{return f.cljs$lang$applyTo(arglist__199852);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__199852));
}
});
var apply__199862 = (function (f,x,y,args){
var arglist__199854 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__199855 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__199854,fixed_arity__199855) <= fixed_arity__199855)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__199854));
} else
{return f.cljs$lang$applyTo(arglist__199854);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__199854));
}
});
var apply__199863 = (function (f,x,y,z,args){
var arglist__199856 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__199857 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__199856,fixed_arity__199857) <= fixed_arity__199857)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__199856));
} else
{return f.cljs$lang$applyTo(arglist__199856);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__199856));
}
});
var apply__199864 = (function() { 
var G__199866__delegate = function (f,a,b,c,d,args){
var arglist__199858 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__199859 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__199858,fixed_arity__199859) <= fixed_arity__199859)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__199858));
} else
{return f.cljs$lang$applyTo(arglist__199858);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__199858));
}
};
var G__199866 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__199866__delegate.call(this, f, a, b, c, d, args);
};
G__199866.cljs$lang$maxFixedArity = 5;
G__199866.cljs$lang$applyTo = (function (arglist__199867){
var f = cljs.core.first(arglist__199867);
var a = cljs.core.first(cljs.core.next(arglist__199867));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199867)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__199867))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__199867)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__199867)))));
return G__199866__delegate.call(this, f, a, b, c, d, args);
});
return G__199866;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__199860.call(this,f,a);
case  3 :
return apply__199861.call(this,f,a,b);
case  4 :
return apply__199862.call(this,f,a,b,c);
case  5 :
return apply__199863.call(this,f,a,b,c,d);
default:
return apply__199864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__199864.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__199868){
var obj = cljs.core.first(arglist__199868);
var f = cljs.core.first(cljs.core.next(arglist__199868));
var args = cljs.core.rest(cljs.core.next(arglist__199868));
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
var not_EQ___199869 = (function (x){
return false;
});
var not_EQ___199870 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___199871 = (function() { 
var G__199873__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__199873 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199873__delegate.call(this, x, y, more);
};
G__199873.cljs$lang$maxFixedArity = 2;
G__199873.cljs$lang$applyTo = (function (arglist__199874){
var x = cljs.core.first(arglist__199874);
var y = cljs.core.first(cljs.core.next(arglist__199874));
var more = cljs.core.rest(cljs.core.next(arglist__199874));
return G__199873__delegate.call(this, x, y, more);
});
return G__199873;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___199869.call(this,x);
case  2 :
return not_EQ___199870.call(this,x,y);
default:
return not_EQ___199871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___199871.cljs$lang$applyTo;
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
var G__199875 = pred;
var G__199876 = cljs.core.next.call(null,coll);
pred = G__199875;
coll = G__199876;
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
{var or__3548__auto____199877 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____199877))
{return or__3548__auto____199877;
} else
{{
var G__199878 = pred;
var G__199879 = cljs.core.next.call(null,coll);
pred = G__199878;
coll = G__199879;
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
var G__199880 = null;
var G__199880__199881 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__199880__199882 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__199880__199883 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__199880__199884 = (function() { 
var G__199886__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__199886 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__199886__delegate.call(this, x, y, zs);
};
G__199886.cljs$lang$maxFixedArity = 2;
G__199886.cljs$lang$applyTo = (function (arglist__199887){
var x = cljs.core.first(arglist__199887);
var y = cljs.core.first(cljs.core.next(arglist__199887));
var zs = cljs.core.rest(cljs.core.next(arglist__199887));
return G__199886__delegate.call(this, x, y, zs);
});
return G__199886;
})()
;
G__199880 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__199880__199881.call(this);
case  1 :
return G__199880__199882.call(this,x);
case  2 :
return G__199880__199883.call(this,x,y);
default:
return G__199880__199884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__199880.cljs$lang$maxFixedArity = 2;
G__199880.cljs$lang$applyTo = G__199880__199884.cljs$lang$applyTo;
return G__199880;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__199888__delegate = function (args){
return x;
};
var G__199888 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__199888__delegate.call(this, args);
};
G__199888.cljs$lang$maxFixedArity = 0;
G__199888.cljs$lang$applyTo = (function (arglist__199889){
var args = cljs.core.seq( arglist__199889 );;
return G__199888__delegate.call(this, args);
});
return G__199888;
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
var comp__199893 = (function (){
return cljs.core.identity;
});
var comp__199894 = (function (f){
return f;
});
var comp__199895 = (function (f,g){
return (function() {
var G__199899 = null;
var G__199899__199900 = (function (){
return f.call(null,g.call(null));
});
var G__199899__199901 = (function (x){
return f.call(null,g.call(null,x));
});
var G__199899__199902 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__199899__199903 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__199899__199904 = (function() { 
var G__199906__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__199906 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__199906__delegate.call(this, x, y, z, args);
};
G__199906.cljs$lang$maxFixedArity = 3;
G__199906.cljs$lang$applyTo = (function (arglist__199907){
var x = cljs.core.first(arglist__199907);
var y = cljs.core.first(cljs.core.next(arglist__199907));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199907)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__199907)));
return G__199906__delegate.call(this, x, y, z, args);
});
return G__199906;
})()
;
G__199899 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__199899__199900.call(this);
case  1 :
return G__199899__199901.call(this,x);
case  2 :
return G__199899__199902.call(this,x,y);
case  3 :
return G__199899__199903.call(this,x,y,z);
default:
return G__199899__199904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__199899.cljs$lang$maxFixedArity = 3;
G__199899.cljs$lang$applyTo = G__199899__199904.cljs$lang$applyTo;
return G__199899;
})()
});
var comp__199896 = (function (f,g,h){
return (function() {
var G__199908 = null;
var G__199908__199909 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__199908__199910 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__199908__199911 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__199908__199912 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__199908__199913 = (function() { 
var G__199915__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__199915 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__199915__delegate.call(this, x, y, z, args);
};
G__199915.cljs$lang$maxFixedArity = 3;
G__199915.cljs$lang$applyTo = (function (arglist__199916){
var x = cljs.core.first(arglist__199916);
var y = cljs.core.first(cljs.core.next(arglist__199916));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199916)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__199916)));
return G__199915__delegate.call(this, x, y, z, args);
});
return G__199915;
})()
;
G__199908 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__199908__199909.call(this);
case  1 :
return G__199908__199910.call(this,x);
case  2 :
return G__199908__199911.call(this,x,y);
case  3 :
return G__199908__199912.call(this,x,y,z);
default:
return G__199908__199913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__199908.cljs$lang$maxFixedArity = 3;
G__199908.cljs$lang$applyTo = G__199908__199913.cljs$lang$applyTo;
return G__199908;
})()
});
var comp__199897 = (function() { 
var G__199917__delegate = function (f1,f2,f3,fs){
var fs__199890 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__199918__delegate = function (args){
var ret__199891 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__199890),args);
var fs__199892 = cljs.core.next.call(null,fs__199890);

while(true){
if(cljs.core.truth_(fs__199892))
{{
var G__199919 = cljs.core.first.call(null,fs__199892).call(null,ret__199891);
var G__199920 = cljs.core.next.call(null,fs__199892);
ret__199891 = G__199919;
fs__199892 = G__199920;
continue;
}
} else
{return ret__199891;
}
break;
}
};
var G__199918 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__199918__delegate.call(this, args);
};
G__199918.cljs$lang$maxFixedArity = 0;
G__199918.cljs$lang$applyTo = (function (arglist__199921){
var args = cljs.core.seq( arglist__199921 );;
return G__199918__delegate.call(this, args);
});
return G__199918;
})()
;
};
var G__199917 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__199917__delegate.call(this, f1, f2, f3, fs);
};
G__199917.cljs$lang$maxFixedArity = 3;
G__199917.cljs$lang$applyTo = (function (arglist__199922){
var f1 = cljs.core.first(arglist__199922);
var f2 = cljs.core.first(cljs.core.next(arglist__199922));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199922)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__199922)));
return G__199917__delegate.call(this, f1, f2, f3, fs);
});
return G__199917;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__199893.call(this);
case  1 :
return comp__199894.call(this,f1);
case  2 :
return comp__199895.call(this,f1,f2);
case  3 :
return comp__199896.call(this,f1,f2,f3);
default:
return comp__199897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__199897.cljs$lang$applyTo;
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
var partial__199923 = (function (f,arg1){
return (function() { 
var G__199928__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__199928 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__199928__delegate.call(this, args);
};
G__199928.cljs$lang$maxFixedArity = 0;
G__199928.cljs$lang$applyTo = (function (arglist__199929){
var args = cljs.core.seq( arglist__199929 );;
return G__199928__delegate.call(this, args);
});
return G__199928;
})()
;
});
var partial__199924 = (function (f,arg1,arg2){
return (function() { 
var G__199930__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__199930 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__199930__delegate.call(this, args);
};
G__199930.cljs$lang$maxFixedArity = 0;
G__199930.cljs$lang$applyTo = (function (arglist__199931){
var args = cljs.core.seq( arglist__199931 );;
return G__199930__delegate.call(this, args);
});
return G__199930;
})()
;
});
var partial__199925 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__199932__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__199932 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__199932__delegate.call(this, args);
};
G__199932.cljs$lang$maxFixedArity = 0;
G__199932.cljs$lang$applyTo = (function (arglist__199933){
var args = cljs.core.seq( arglist__199933 );;
return G__199932__delegate.call(this, args);
});
return G__199932;
})()
;
});
var partial__199926 = (function() { 
var G__199934__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__199935__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__199935 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__199935__delegate.call(this, args);
};
G__199935.cljs$lang$maxFixedArity = 0;
G__199935.cljs$lang$applyTo = (function (arglist__199936){
var args = cljs.core.seq( arglist__199936 );;
return G__199935__delegate.call(this, args);
});
return G__199935;
})()
;
};
var G__199934 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__199934__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__199934.cljs$lang$maxFixedArity = 4;
G__199934.cljs$lang$applyTo = (function (arglist__199937){
var f = cljs.core.first(arglist__199937);
var arg1 = cljs.core.first(cljs.core.next(arglist__199937));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199937)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__199937))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__199937))));
return G__199934__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__199934;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__199923.call(this,f,arg1);
case  3 :
return partial__199924.call(this,f,arg1,arg2);
case  4 :
return partial__199925.call(this,f,arg1,arg2,arg3);
default:
return partial__199926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__199926.cljs$lang$applyTo;
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
var fnil__199938 = (function (f,x){
return (function() {
var G__199942 = null;
var G__199942__199943 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__199942__199944 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__199942__199945 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__199942__199946 = (function() { 
var G__199948__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__199948 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__199948__delegate.call(this, a, b, c, ds);
};
G__199948.cljs$lang$maxFixedArity = 3;
G__199948.cljs$lang$applyTo = (function (arglist__199949){
var a = cljs.core.first(arglist__199949);
var b = cljs.core.first(cljs.core.next(arglist__199949));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199949)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__199949)));
return G__199948__delegate.call(this, a, b, c, ds);
});
return G__199948;
})()
;
G__199942 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__199942__199943.call(this,a);
case  2 :
return G__199942__199944.call(this,a,b);
case  3 :
return G__199942__199945.call(this,a,b,c);
default:
return G__199942__199946.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__199942.cljs$lang$maxFixedArity = 3;
G__199942.cljs$lang$applyTo = G__199942__199946.cljs$lang$applyTo;
return G__199942;
})()
});
var fnil__199939 = (function (f,x,y){
return (function() {
var G__199950 = null;
var G__199950__199951 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__199950__199952 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__199950__199953 = (function() { 
var G__199955__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__199955 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__199955__delegate.call(this, a, b, c, ds);
};
G__199955.cljs$lang$maxFixedArity = 3;
G__199955.cljs$lang$applyTo = (function (arglist__199956){
var a = cljs.core.first(arglist__199956);
var b = cljs.core.first(cljs.core.next(arglist__199956));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199956)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__199956)));
return G__199955__delegate.call(this, a, b, c, ds);
});
return G__199955;
})()
;
G__199950 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__199950__199951.call(this,a,b);
case  3 :
return G__199950__199952.call(this,a,b,c);
default:
return G__199950__199953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__199950.cljs$lang$maxFixedArity = 3;
G__199950.cljs$lang$applyTo = G__199950__199953.cljs$lang$applyTo;
return G__199950;
})()
});
var fnil__199940 = (function (f,x,y,z){
return (function() {
var G__199957 = null;
var G__199957__199958 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__199957__199959 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__199957__199960 = (function() { 
var G__199962__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__199962 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__199962__delegate.call(this, a, b, c, ds);
};
G__199962.cljs$lang$maxFixedArity = 3;
G__199962.cljs$lang$applyTo = (function (arglist__199963){
var a = cljs.core.first(arglist__199963);
var b = cljs.core.first(cljs.core.next(arglist__199963));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__199963)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__199963)));
return G__199962__delegate.call(this, a, b, c, ds);
});
return G__199962;
})()
;
G__199957 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__199957__199958.call(this,a,b);
case  3 :
return G__199957__199959.call(this,a,b,c);
default:
return G__199957__199960.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__199957.cljs$lang$maxFixedArity = 3;
G__199957.cljs$lang$applyTo = G__199957__199960.cljs$lang$applyTo;
return G__199957;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__199938.call(this,f,x);
case  3 :
return fnil__199939.call(this,f,x,y);
case  4 :
return fnil__199940.call(this,f,x,y,z);
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
var mapi__199966 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____199964 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____199964))
{var s__199965 = temp__3698__auto____199964;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__199965)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__199965)));
} else
{return null;
}
})));
});

return mapi__199966.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____199967 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____199967))
{var s__199968 = temp__3698__auto____199967;

var x__199969 = f.call(null,cljs.core.first.call(null,s__199968));

if(cljs.core.truth_((x__199969 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__199968));
} else
{return cljs.core.cons.call(null,x__199969,keep.call(null,f,cljs.core.rest.call(null,s__199968)));
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
var keepi__199979 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____199976 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____199976))
{var s__199977 = temp__3698__auto____199976;

var x__199978 = f.call(null,idx,cljs.core.first.call(null,s__199977));

if(cljs.core.truth_((x__199978 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__199977));
} else
{return cljs.core.cons.call(null,x__199978,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__199977)));
}
} else
{return null;
}
})));
});

return keepi__199979.call(null,0,coll);
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
var every_pred__200024 = (function (p){
return (function() {
var ep1 = null;
var ep1__200029 = (function (){
return true;
});
var ep1__200030 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__200031 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____199986 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____199986))
{return p.call(null,y);
} else
{return and__3546__auto____199986;
}
})());
});
var ep1__200032 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____199987 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____199987))
{var and__3546__auto____199988 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____199988))
{return p.call(null,z);
} else
{return and__3546__auto____199988;
}
} else
{return and__3546__auto____199987;
}
})());
});
var ep1__200033 = (function() { 
var G__200035__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____199989 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____199989))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____199989;
}
})());
};
var G__200035 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200035__delegate.call(this, x, y, z, args);
};
G__200035.cljs$lang$maxFixedArity = 3;
G__200035.cljs$lang$applyTo = (function (arglist__200036){
var x = cljs.core.first(arglist__200036);
var y = cljs.core.first(cljs.core.next(arglist__200036));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200036)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200036)));
return G__200035__delegate.call(this, x, y, z, args);
});
return G__200035;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__200029.call(this);
case  1 :
return ep1__200030.call(this,x);
case  2 :
return ep1__200031.call(this,x,y);
case  3 :
return ep1__200032.call(this,x,y,z);
default:
return ep1__200033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__200033.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__200025 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__200037 = (function (){
return true;
});
var ep2__200038 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____199990 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____199990))
{return p2.call(null,x);
} else
{return and__3546__auto____199990;
}
})());
});
var ep2__200039 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____199991 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____199991))
{var and__3546__auto____199992 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____199992))
{var and__3546__auto____199993 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____199993))
{return p2.call(null,y);
} else
{return and__3546__auto____199993;
}
} else
{return and__3546__auto____199992;
}
} else
{return and__3546__auto____199991;
}
})());
});
var ep2__200040 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____199994 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____199994))
{var and__3546__auto____199995 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____199995))
{var and__3546__auto____199996 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____199996))
{var and__3546__auto____199997 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____199997))
{var and__3546__auto____199998 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____199998))
{return p2.call(null,z);
} else
{return and__3546__auto____199998;
}
} else
{return and__3546__auto____199997;
}
} else
{return and__3546__auto____199996;
}
} else
{return and__3546__auto____199995;
}
} else
{return and__3546__auto____199994;
}
})());
});
var ep2__200041 = (function() { 
var G__200043__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____199999 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____199999))
{return cljs.core.every_QMARK_.call(null,(function (p1__199970_SHARP_){
var and__3546__auto____200000 = p1.call(null,p1__199970_SHARP_);

if(cljs.core.truth_(and__3546__auto____200000))
{return p2.call(null,p1__199970_SHARP_);
} else
{return and__3546__auto____200000;
}
}),args);
} else
{return and__3546__auto____199999;
}
})());
};
var G__200043 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200043__delegate.call(this, x, y, z, args);
};
G__200043.cljs$lang$maxFixedArity = 3;
G__200043.cljs$lang$applyTo = (function (arglist__200044){
var x = cljs.core.first(arglist__200044);
var y = cljs.core.first(cljs.core.next(arglist__200044));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200044)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200044)));
return G__200043__delegate.call(this, x, y, z, args);
});
return G__200043;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__200037.call(this);
case  1 :
return ep2__200038.call(this,x);
case  2 :
return ep2__200039.call(this,x,y);
case  3 :
return ep2__200040.call(this,x,y,z);
default:
return ep2__200041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__200041.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__200026 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__200045 = (function (){
return true;
});
var ep3__200046 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____200001 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____200001))
{var and__3546__auto____200002 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____200002))
{return p3.call(null,x);
} else
{return and__3546__auto____200002;
}
} else
{return and__3546__auto____200001;
}
})());
});
var ep3__200047 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____200003 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____200003))
{var and__3546__auto____200004 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____200004))
{var and__3546__auto____200005 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____200005))
{var and__3546__auto____200006 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____200006))
{var and__3546__auto____200007 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____200007))
{return p3.call(null,y);
} else
{return and__3546__auto____200007;
}
} else
{return and__3546__auto____200006;
}
} else
{return and__3546__auto____200005;
}
} else
{return and__3546__auto____200004;
}
} else
{return and__3546__auto____200003;
}
})());
});
var ep3__200048 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____200008 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____200008))
{var and__3546__auto____200009 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____200009))
{var and__3546__auto____200010 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____200010))
{var and__3546__auto____200011 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____200011))
{var and__3546__auto____200012 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____200012))
{var and__3546__auto____200013 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____200013))
{var and__3546__auto____200014 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____200014))
{var and__3546__auto____200015 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____200015))
{return p3.call(null,z);
} else
{return and__3546__auto____200015;
}
} else
{return and__3546__auto____200014;
}
} else
{return and__3546__auto____200013;
}
} else
{return and__3546__auto____200012;
}
} else
{return and__3546__auto____200011;
}
} else
{return and__3546__auto____200010;
}
} else
{return and__3546__auto____200009;
}
} else
{return and__3546__auto____200008;
}
})());
});
var ep3__200049 = (function() { 
var G__200051__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____200016 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____200016))
{return cljs.core.every_QMARK_.call(null,(function (p1__199971_SHARP_){
var and__3546__auto____200017 = p1.call(null,p1__199971_SHARP_);

if(cljs.core.truth_(and__3546__auto____200017))
{var and__3546__auto____200018 = p2.call(null,p1__199971_SHARP_);

if(cljs.core.truth_(and__3546__auto____200018))
{return p3.call(null,p1__199971_SHARP_);
} else
{return and__3546__auto____200018;
}
} else
{return and__3546__auto____200017;
}
}),args);
} else
{return and__3546__auto____200016;
}
})());
};
var G__200051 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200051__delegate.call(this, x, y, z, args);
};
G__200051.cljs$lang$maxFixedArity = 3;
G__200051.cljs$lang$applyTo = (function (arglist__200052){
var x = cljs.core.first(arglist__200052);
var y = cljs.core.first(cljs.core.next(arglist__200052));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200052)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200052)));
return G__200051__delegate.call(this, x, y, z, args);
});
return G__200051;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__200045.call(this);
case  1 :
return ep3__200046.call(this,x);
case  2 :
return ep3__200047.call(this,x,y);
case  3 :
return ep3__200048.call(this,x,y,z);
default:
return ep3__200049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__200049.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__200027 = (function() { 
var G__200053__delegate = function (p1,p2,p3,ps){
var ps__200019 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__200054 = (function (){
return true;
});
var epn__200055 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__199972_SHARP_){
return p1__199972_SHARP_.call(null,x);
}),ps__200019);
});
var epn__200056 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__199973_SHARP_){
var and__3546__auto____200020 = p1__199973_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____200020))
{return p1__199973_SHARP_.call(null,y);
} else
{return and__3546__auto____200020;
}
}),ps__200019);
});
var epn__200057 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__199974_SHARP_){
var and__3546__auto____200021 = p1__199974_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____200021))
{var and__3546__auto____200022 = p1__199974_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____200022))
{return p1__199974_SHARP_.call(null,z);
} else
{return and__3546__auto____200022;
}
} else
{return and__3546__auto____200021;
}
}),ps__200019);
});
var epn__200058 = (function() { 
var G__200060__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____200023 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____200023))
{return cljs.core.every_QMARK_.call(null,(function (p1__199975_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__199975_SHARP_,args);
}),ps__200019);
} else
{return and__3546__auto____200023;
}
})());
};
var G__200060 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200060__delegate.call(this, x, y, z, args);
};
G__200060.cljs$lang$maxFixedArity = 3;
G__200060.cljs$lang$applyTo = (function (arglist__200061){
var x = cljs.core.first(arglist__200061);
var y = cljs.core.first(cljs.core.next(arglist__200061));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200061)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200061)));
return G__200060__delegate.call(this, x, y, z, args);
});
return G__200060;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__200054.call(this);
case  1 :
return epn__200055.call(this,x);
case  2 :
return epn__200056.call(this,x,y);
case  3 :
return epn__200057.call(this,x,y,z);
default:
return epn__200058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__200058.cljs$lang$applyTo;
return epn;
})()
};
var G__200053 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200053__delegate.call(this, p1, p2, p3, ps);
};
G__200053.cljs$lang$maxFixedArity = 3;
G__200053.cljs$lang$applyTo = (function (arglist__200062){
var p1 = cljs.core.first(arglist__200062);
var p2 = cljs.core.first(cljs.core.next(arglist__200062));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200062)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200062)));
return G__200053__delegate.call(this, p1, p2, p3, ps);
});
return G__200053;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__200024.call(this,p1);
case  2 :
return every_pred__200025.call(this,p1,p2);
case  3 :
return every_pred__200026.call(this,p1,p2,p3);
default:
return every_pred__200027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__200027.cljs$lang$applyTo;
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
var some_fn__200102 = (function (p){
return (function() {
var sp1 = null;
var sp1__200107 = (function (){
return null;
});
var sp1__200108 = (function (x){
return p.call(null,x);
});
var sp1__200109 = (function (x,y){
var or__3548__auto____200064 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____200064))
{return or__3548__auto____200064;
} else
{return p.call(null,y);
}
});
var sp1__200110 = (function (x,y,z){
var or__3548__auto____200065 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____200065))
{return or__3548__auto____200065;
} else
{var or__3548__auto____200066 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____200066))
{return or__3548__auto____200066;
} else
{return p.call(null,z);
}
}
});
var sp1__200111 = (function() { 
var G__200113__delegate = function (x,y,z,args){
var or__3548__auto____200067 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____200067))
{return or__3548__auto____200067;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__200113 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200113__delegate.call(this, x, y, z, args);
};
G__200113.cljs$lang$maxFixedArity = 3;
G__200113.cljs$lang$applyTo = (function (arglist__200114){
var x = cljs.core.first(arglist__200114);
var y = cljs.core.first(cljs.core.next(arglist__200114));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200114)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200114)));
return G__200113__delegate.call(this, x, y, z, args);
});
return G__200113;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__200107.call(this);
case  1 :
return sp1__200108.call(this,x);
case  2 :
return sp1__200109.call(this,x,y);
case  3 :
return sp1__200110.call(this,x,y,z);
default:
return sp1__200111.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__200111.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__200103 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__200115 = (function (){
return null;
});
var sp2__200116 = (function (x){
var or__3548__auto____200068 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____200068))
{return or__3548__auto____200068;
} else
{return p2.call(null,x);
}
});
var sp2__200117 = (function (x,y){
var or__3548__auto____200069 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____200069))
{return or__3548__auto____200069;
} else
{var or__3548__auto____200070 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____200070))
{return or__3548__auto____200070;
} else
{var or__3548__auto____200071 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____200071))
{return or__3548__auto____200071;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__200118 = (function (x,y,z){
var or__3548__auto____200072 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____200072))
{return or__3548__auto____200072;
} else
{var or__3548__auto____200073 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____200073))
{return or__3548__auto____200073;
} else
{var or__3548__auto____200074 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____200074))
{return or__3548__auto____200074;
} else
{var or__3548__auto____200075 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____200075))
{return or__3548__auto____200075;
} else
{var or__3548__auto____200076 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____200076))
{return or__3548__auto____200076;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__200119 = (function() { 
var G__200121__delegate = function (x,y,z,args){
var or__3548__auto____200077 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____200077))
{return or__3548__auto____200077;
} else
{return cljs.core.some.call(null,(function (p1__199980_SHARP_){
var or__3548__auto____200078 = p1.call(null,p1__199980_SHARP_);

if(cljs.core.truth_(or__3548__auto____200078))
{return or__3548__auto____200078;
} else
{return p2.call(null,p1__199980_SHARP_);
}
}),args);
}
};
var G__200121 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200121__delegate.call(this, x, y, z, args);
};
G__200121.cljs$lang$maxFixedArity = 3;
G__200121.cljs$lang$applyTo = (function (arglist__200122){
var x = cljs.core.first(arglist__200122);
var y = cljs.core.first(cljs.core.next(arglist__200122));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200122)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200122)));
return G__200121__delegate.call(this, x, y, z, args);
});
return G__200121;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__200115.call(this);
case  1 :
return sp2__200116.call(this,x);
case  2 :
return sp2__200117.call(this,x,y);
case  3 :
return sp2__200118.call(this,x,y,z);
default:
return sp2__200119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__200119.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__200104 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__200123 = (function (){
return null;
});
var sp3__200124 = (function (x){
var or__3548__auto____200079 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____200079))
{return or__3548__auto____200079;
} else
{var or__3548__auto____200080 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____200080))
{return or__3548__auto____200080;
} else
{return p3.call(null,x);
}
}
});
var sp3__200125 = (function (x,y){
var or__3548__auto____200081 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____200081))
{return or__3548__auto____200081;
} else
{var or__3548__auto____200082 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____200082))
{return or__3548__auto____200082;
} else
{var or__3548__auto____200083 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____200083))
{return or__3548__auto____200083;
} else
{var or__3548__auto____200084 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____200084))
{return or__3548__auto____200084;
} else
{var or__3548__auto____200085 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____200085))
{return or__3548__auto____200085;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__200126 = (function (x,y,z){
var or__3548__auto____200086 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____200086))
{return or__3548__auto____200086;
} else
{var or__3548__auto____200087 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____200087))
{return or__3548__auto____200087;
} else
{var or__3548__auto____200088 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____200088))
{return or__3548__auto____200088;
} else
{var or__3548__auto____200089 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____200089))
{return or__3548__auto____200089;
} else
{var or__3548__auto____200090 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____200090))
{return or__3548__auto____200090;
} else
{var or__3548__auto____200091 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____200091))
{return or__3548__auto____200091;
} else
{var or__3548__auto____200092 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____200092))
{return or__3548__auto____200092;
} else
{var or__3548__auto____200093 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____200093))
{return or__3548__auto____200093;
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
var sp3__200127 = (function() { 
var G__200129__delegate = function (x,y,z,args){
var or__3548__auto____200094 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____200094))
{return or__3548__auto____200094;
} else
{return cljs.core.some.call(null,(function (p1__199981_SHARP_){
var or__3548__auto____200095 = p1.call(null,p1__199981_SHARP_);

if(cljs.core.truth_(or__3548__auto____200095))
{return or__3548__auto____200095;
} else
{var or__3548__auto____200096 = p2.call(null,p1__199981_SHARP_);

if(cljs.core.truth_(or__3548__auto____200096))
{return or__3548__auto____200096;
} else
{return p3.call(null,p1__199981_SHARP_);
}
}
}),args);
}
};
var G__200129 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200129__delegate.call(this, x, y, z, args);
};
G__200129.cljs$lang$maxFixedArity = 3;
G__200129.cljs$lang$applyTo = (function (arglist__200130){
var x = cljs.core.first(arglist__200130);
var y = cljs.core.first(cljs.core.next(arglist__200130));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200130)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200130)));
return G__200129__delegate.call(this, x, y, z, args);
});
return G__200129;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__200123.call(this);
case  1 :
return sp3__200124.call(this,x);
case  2 :
return sp3__200125.call(this,x,y);
case  3 :
return sp3__200126.call(this,x,y,z);
default:
return sp3__200127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__200127.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__200105 = (function() { 
var G__200131__delegate = function (p1,p2,p3,ps){
var ps__200097 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__200132 = (function (){
return null;
});
var spn__200133 = (function (x){
return cljs.core.some.call(null,(function (p1__199982_SHARP_){
return p1__199982_SHARP_.call(null,x);
}),ps__200097);
});
var spn__200134 = (function (x,y){
return cljs.core.some.call(null,(function (p1__199983_SHARP_){
var or__3548__auto____200098 = p1__199983_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____200098))
{return or__3548__auto____200098;
} else
{return p1__199983_SHARP_.call(null,y);
}
}),ps__200097);
});
var spn__200135 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__199984_SHARP_){
var or__3548__auto____200099 = p1__199984_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____200099))
{return or__3548__auto____200099;
} else
{var or__3548__auto____200100 = p1__199984_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____200100))
{return or__3548__auto____200100;
} else
{return p1__199984_SHARP_.call(null,z);
}
}
}),ps__200097);
});
var spn__200136 = (function() { 
var G__200138__delegate = function (x,y,z,args){
var or__3548__auto____200101 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____200101))
{return or__3548__auto____200101;
} else
{return cljs.core.some.call(null,(function (p1__199985_SHARP_){
return cljs.core.some.call(null,p1__199985_SHARP_,args);
}),ps__200097);
}
};
var G__200138 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200138__delegate.call(this, x, y, z, args);
};
G__200138.cljs$lang$maxFixedArity = 3;
G__200138.cljs$lang$applyTo = (function (arglist__200139){
var x = cljs.core.first(arglist__200139);
var y = cljs.core.first(cljs.core.next(arglist__200139));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200139)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200139)));
return G__200138__delegate.call(this, x, y, z, args);
});
return G__200138;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__200132.call(this);
case  1 :
return spn__200133.call(this,x);
case  2 :
return spn__200134.call(this,x,y);
case  3 :
return spn__200135.call(this,x,y,z);
default:
return spn__200136.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__200136.cljs$lang$applyTo;
return spn;
})()
};
var G__200131 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200131__delegate.call(this, p1, p2, p3, ps);
};
G__200131.cljs$lang$maxFixedArity = 3;
G__200131.cljs$lang$applyTo = (function (arglist__200140){
var p1 = cljs.core.first(arglist__200140);
var p2 = cljs.core.first(cljs.core.next(arglist__200140));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200140)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200140)));
return G__200131__delegate.call(this, p1, p2, p3, ps);
});
return G__200131;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__200102.call(this,p1);
case  2 :
return some_fn__200103.call(this,p1,p2);
case  3 :
return some_fn__200104.call(this,p1,p2,p3);
default:
return some_fn__200105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__200105.cljs$lang$applyTo;
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
var map__200153 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____200141 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200141))
{var s__200142 = temp__3698__auto____200141;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__200142)),map.call(null,f,cljs.core.rest.call(null,s__200142)));
} else
{return null;
}
})));
});
var map__200154 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__200143 = cljs.core.seq.call(null,c1);
var s2__200144 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____200145 = s1__200143;

if(cljs.core.truth_(and__3546__auto____200145))
{return s2__200144;
} else
{return and__3546__auto____200145;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__200143),cljs.core.first.call(null,s2__200144)),map.call(null,f,cljs.core.rest.call(null,s1__200143),cljs.core.rest.call(null,s2__200144)));
} else
{return null;
}
})));
});
var map__200155 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__200146 = cljs.core.seq.call(null,c1);
var s2__200147 = cljs.core.seq.call(null,c2);
var s3__200148 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____200149 = s1__200146;

if(cljs.core.truth_(and__3546__auto____200149))
{var and__3546__auto____200150 = s2__200147;

if(cljs.core.truth_(and__3546__auto____200150))
{return s3__200148;
} else
{return and__3546__auto____200150;
}
} else
{return and__3546__auto____200149;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__200146),cljs.core.first.call(null,s2__200147),cljs.core.first.call(null,s3__200148)),map.call(null,f,cljs.core.rest.call(null,s1__200146),cljs.core.rest.call(null,s2__200147),cljs.core.rest.call(null,s3__200148)));
} else
{return null;
}
})));
});
var map__200156 = (function() { 
var G__200158__delegate = function (f,c1,c2,c3,colls){
var step__200152 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__200151 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__200151)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__200151),step.call(null,map.call(null,cljs.core.rest,ss__200151)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__200063_SHARP_){
return cljs.core.apply.call(null,f,p1__200063_SHARP_);
}),step__200152.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__200158 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__200158__delegate.call(this, f, c1, c2, c3, colls);
};
G__200158.cljs$lang$maxFixedArity = 4;
G__200158.cljs$lang$applyTo = (function (arglist__200159){
var f = cljs.core.first(arglist__200159);
var c1 = cljs.core.first(cljs.core.next(arglist__200159));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200159)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__200159))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__200159))));
return G__200158__delegate.call(this, f, c1, c2, c3, colls);
});
return G__200158;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__200153.call(this,f,c1);
case  3 :
return map__200154.call(this,f,c1,c2);
case  4 :
return map__200155.call(this,f,c1,c2,c3);
default:
return map__200156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__200156.cljs$lang$applyTo;
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
{var temp__3698__auto____200160 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200160))
{var s__200161 = temp__3698__auto____200160;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__200161),take.call(null,(n - 1),cljs.core.rest.call(null,s__200161)));
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
var step__200164 = (function (n,coll){
while(true){
var s__200162 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____200163 = (n > 0);

if(cljs.core.truth_(and__3546__auto____200163))
{return s__200162;
} else
{return and__3546__auto____200163;
}
})()))
{{
var G__200165 = (n - 1);
var G__200166 = cljs.core.rest.call(null,s__200162);
n = G__200165;
coll = G__200166;
continue;
}
} else
{return s__200162;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__200164.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__200167 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__200168 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__200167.call(this,n);
case  2 :
return drop_last__200168.call(this,n,s);
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
var s__200170 = cljs.core.seq.call(null,coll);
var lead__200171 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__200171))
{{
var G__200172 = cljs.core.next.call(null,s__200170);
var G__200173 = cljs.core.next.call(null,lead__200171);
s__200170 = G__200172;
lead__200171 = G__200173;
continue;
}
} else
{return s__200170;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__200176 = (function (pred,coll){
while(true){
var s__200174 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____200175 = s__200174;

if(cljs.core.truth_(and__3546__auto____200175))
{return pred.call(null,cljs.core.first.call(null,s__200174));
} else
{return and__3546__auto____200175;
}
})()))
{{
var G__200177 = pred;
var G__200178 = cljs.core.rest.call(null,s__200174);
pred = G__200177;
coll = G__200178;
continue;
}
} else
{return s__200174;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__200176.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____200179 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200179))
{var s__200180 = temp__3698__auto____200179;

return cljs.core.concat.call(null,s__200180,cycle.call(null,s__200180));
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
var repeat__200181 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__200182 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__200181.call(this,n);
case  2 :
return repeat__200182.call(this,n,x);
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
var repeatedly__200184 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__200185 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__200184.call(this,n);
case  2 :
return repeatedly__200185.call(this,n,f);
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
var interleave__200191 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__200187 = cljs.core.seq.call(null,c1);
var s2__200188 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____200189 = s1__200187;

if(cljs.core.truth_(and__3546__auto____200189))
{return s2__200188;
} else
{return and__3546__auto____200189;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__200187),cljs.core.cons.call(null,cljs.core.first.call(null,s2__200188),interleave.call(null,cljs.core.rest.call(null,s1__200187),cljs.core.rest.call(null,s2__200188))));
} else
{return null;
}
})));
});
var interleave__200192 = (function() { 
var G__200194__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__200190 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__200190)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__200190),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__200190)));
} else
{return null;
}
})));
};
var G__200194 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__200194__delegate.call(this, c1, c2, colls);
};
G__200194.cljs$lang$maxFixedArity = 2;
G__200194.cljs$lang$applyTo = (function (arglist__200195){
var c1 = cljs.core.first(arglist__200195);
var c2 = cljs.core.first(cljs.core.next(arglist__200195));
var colls = cljs.core.rest(cljs.core.next(arglist__200195));
return G__200194__delegate.call(this, c1, c2, colls);
});
return G__200194;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__200191.call(this,c1,c2);
default:
return interleave__200192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__200192.cljs$lang$applyTo;
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
var cat__200198 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____200196 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____200196))
{var coll__200197 = temp__3695__auto____200196;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__200197),cat.call(null,cljs.core.rest.call(null,coll__200197),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__200198.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__200199 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__200200 = (function() { 
var G__200202__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__200202 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__200202__delegate.call(this, f, coll, colls);
};
G__200202.cljs$lang$maxFixedArity = 2;
G__200202.cljs$lang$applyTo = (function (arglist__200203){
var f = cljs.core.first(arglist__200203);
var coll = cljs.core.first(cljs.core.next(arglist__200203));
var colls = cljs.core.rest(cljs.core.next(arglist__200203));
return G__200202__delegate.call(this, f, coll, colls);
});
return G__200202;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__200199.call(this,f,coll);
default:
return mapcat__200200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__200200.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____200204 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200204))
{var s__200205 = temp__3698__auto____200204;

var f__200206 = cljs.core.first.call(null,s__200205);
var r__200207 = cljs.core.rest.call(null,s__200205);

if(cljs.core.truth_(pred.call(null,f__200206)))
{return cljs.core.cons.call(null,f__200206,filter.call(null,pred,r__200207));
} else
{return filter.call(null,pred,r__200207);
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
var walk__200209 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__200209.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__200208_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__200208_SHARP_));
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
var partition__200216 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__200217 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____200210 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200210))
{var s__200211 = temp__3698__auto____200210;

var p__200212 = cljs.core.take.call(null,n,s__200211);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__200212))))
{return cljs.core.cons.call(null,p__200212,partition.call(null,n,step,cljs.core.drop.call(null,step,s__200211)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__200218 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____200213 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200213))
{var s__200214 = temp__3698__auto____200213;

var p__200215 = cljs.core.take.call(null,n,s__200214);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__200215))))
{return cljs.core.cons.call(null,p__200215,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__200214)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__200215,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__200216.call(this,n,step);
case  3 :
return partition__200217.call(this,n,step,pad);
case  4 :
return partition__200218.call(this,n,step,pad,coll);
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
var get_in__200224 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__200225 = (function (m,ks,not_found){
var sentinel__200220 = cljs.core.lookup_sentinel;
var m__200221 = m;
var ks__200222 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__200222))
{var m__200223 = cljs.core.get.call(null,m__200221,cljs.core.first.call(null,ks__200222),sentinel__200220);

if(cljs.core.truth_((sentinel__200220 === m__200223)))
{return not_found;
} else
{{
var G__200227 = sentinel__200220;
var G__200228 = m__200223;
var G__200229 = cljs.core.next.call(null,ks__200222);
sentinel__200220 = G__200227;
m__200221 = G__200228;
ks__200222 = G__200229;
continue;
}
}
} else
{return m__200221;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__200224.call(this,m,ks);
case  3 :
return get_in__200225.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__200230,v){
var vec__200231__200232 = p__200230;
var k__200233 = cljs.core.nth.call(null,vec__200231__200232,0,null);
var ks__200234 = cljs.core.nthnext.call(null,vec__200231__200232,1);

if(cljs.core.truth_(ks__200234))
{return cljs.core.assoc.call(null,m,k__200233,assoc_in.call(null,cljs.core.get.call(null,m,k__200233),ks__200234,v));
} else
{return cljs.core.assoc.call(null,m,k__200233,v);
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
var update_in__delegate = function (m,p__200235,f,args){
var vec__200236__200237 = p__200235;
var k__200238 = cljs.core.nth.call(null,vec__200236__200237,0,null);
var ks__200239 = cljs.core.nthnext.call(null,vec__200236__200237,1);

if(cljs.core.truth_(ks__200239))
{return cljs.core.assoc.call(null,m,k__200238,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__200238),ks__200239,f,args));
} else
{return cljs.core.assoc.call(null,m,k__200238,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__200238),args));
}
};
var update_in = function (m,p__200235,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__200235, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__200240){
var m = cljs.core.first(arglist__200240);
var p__200235 = cljs.core.first(cljs.core.next(arglist__200240));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200240)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200240)));
return update_in__delegate.call(this, m, p__200235, f, args);
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
var this__200241 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__200274 = null;
var G__200274__200275 = (function (coll,k){
var this__200242 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__200274__200276 = (function (coll,k,not_found){
var this__200243 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__200274 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__200274__200275.call(this,coll,k);
case  3 :
return G__200274__200276.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200274;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__200244 = this;
var new_array__200245 = cljs.core.aclone.call(null,this__200244.array);

(new_array__200245[k] = v);
return (new cljs.core.Vector(this__200244.meta,new_array__200245));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__200278 = null;
var G__200278__200279 = (function (tsym200246,k){
var this__200248 = this;
var tsym200246__200249 = this;

var coll__200250 = tsym200246__200249;

return cljs.core._lookup.call(null,coll__200250,k);
});
var G__200278__200280 = (function (tsym200247,k,not_found){
var this__200251 = this;
var tsym200247__200252 = this;

var coll__200253 = tsym200247__200252;

return cljs.core._lookup.call(null,coll__200253,k,not_found);
});
G__200278 = function(tsym200247,k,not_found){
switch(arguments.length){
case  2 :
return G__200278__200279.call(this,tsym200247,k);
case  3 :
return G__200278__200280.call(this,tsym200247,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200278;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__200254 = this;
var new_array__200255 = cljs.core.aclone.call(null,this__200254.array);

new_array__200255.push(o);
return (new cljs.core.Vector(this__200254.meta,new_array__200255));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__200282 = null;
var G__200282__200283 = (function (v,f){
var this__200256 = this;
return cljs.core.ci_reduce.call(null,this__200256.array,f);
});
var G__200282__200284 = (function (v,f,start){
var this__200257 = this;
return cljs.core.ci_reduce.call(null,this__200257.array,f,start);
});
G__200282 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__200282__200283.call(this,v,f);
case  3 :
return G__200282__200284.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200282;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__200258 = this;
if(cljs.core.truth_((this__200258.array.length > 0)))
{var vector_seq__200259 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__200258.array.length)))
{return cljs.core.cons.call(null,(this__200258.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__200259.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__200260 = this;
return this__200260.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__200261 = this;
var count__200262 = this__200261.array.length;

if(cljs.core.truth_((count__200262 > 0)))
{return (this__200261.array[(count__200262 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__200263 = this;
if(cljs.core.truth_((this__200263.array.length > 0)))
{var new_array__200264 = cljs.core.aclone.call(null,this__200263.array);

new_array__200264.pop();
return (new cljs.core.Vector(this__200263.meta,new_array__200264));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__200265 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__200266 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__200267 = this;
return (new cljs.core.Vector(meta,this__200267.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__200268 = this;
return this__200268.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__200286 = null;
var G__200286__200287 = (function (coll,n){
var this__200269 = this;
if(cljs.core.truth_((function (){var and__3546__auto____200270 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____200270))
{return (n < this__200269.array.length);
} else
{return and__3546__auto____200270;
}
})()))
{return (this__200269.array[n]);
} else
{return null;
}
});
var G__200286__200288 = (function (coll,n,not_found){
var this__200271 = this;
if(cljs.core.truth_((function (){var and__3546__auto____200272 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____200272))
{return (n < this__200271.array.length);
} else
{return and__3546__auto____200272;
}
})()))
{return (this__200271.array[n]);
} else
{return not_found;
}
});
G__200286 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__200286__200287.call(this,coll,n);
case  3 :
return G__200286__200288.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200286;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__200273 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__200273.meta);
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
vector.cljs$lang$applyTo = (function (arglist__200290){
var args = cljs.core.seq( arglist__200290 );;
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
var this__200291 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__200319 = null;
var G__200319__200320 = (function (coll,k){
var this__200292 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__200319__200321 = (function (coll,k,not_found){
var this__200293 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__200319 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__200319__200320.call(this,coll,k);
case  3 :
return G__200319__200321.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200319;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__200294 = this;
var v_pos__200295 = (this__200294.start + key);

return (new cljs.core.Subvec(this__200294.meta,cljs.core._assoc.call(null,this__200294.v,v_pos__200295,val),this__200294.start,((this__200294.end > (v_pos__200295 + 1)) ? this__200294.end : (v_pos__200295 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__200323 = null;
var G__200323__200324 = (function (tsym200296,k){
var this__200298 = this;
var tsym200296__200299 = this;

var coll__200300 = tsym200296__200299;

return cljs.core._lookup.call(null,coll__200300,k);
});
var G__200323__200325 = (function (tsym200297,k,not_found){
var this__200301 = this;
var tsym200297__200302 = this;

var coll__200303 = tsym200297__200302;

return cljs.core._lookup.call(null,coll__200303,k,not_found);
});
G__200323 = function(tsym200297,k,not_found){
switch(arguments.length){
case  2 :
return G__200323__200324.call(this,tsym200297,k);
case  3 :
return G__200323__200325.call(this,tsym200297,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200323;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__200304 = this;
return (new cljs.core.Subvec(this__200304.meta,cljs.core._assoc_n.call(null,this__200304.v,this__200304.end,o),this__200304.start,(this__200304.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__200327 = null;
var G__200327__200328 = (function (coll,f){
var this__200305 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__200327__200329 = (function (coll,f,start){
var this__200306 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__200327 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__200327__200328.call(this,coll,f);
case  3 :
return G__200327__200329.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200327;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__200307 = this;
var subvec_seq__200308 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__200307.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__200307.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__200308.call(null,this__200307.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__200309 = this;
return (this__200309.end - this__200309.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__200310 = this;
return cljs.core._nth.call(null,this__200310.v,(this__200310.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__200311 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__200311.start,this__200311.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__200311.meta,this__200311.v,this__200311.start,(this__200311.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__200312 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__200313 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__200314 = this;
return (new cljs.core.Subvec(meta,this__200314.v,this__200314.start,this__200314.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__200315 = this;
return this__200315.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__200331 = null;
var G__200331__200332 = (function (coll,n){
var this__200316 = this;
return cljs.core._nth.call(null,this__200316.v,(this__200316.start + n));
});
var G__200331__200333 = (function (coll,n,not_found){
var this__200317 = this;
return cljs.core._nth.call(null,this__200317.v,(this__200317.start + n),not_found);
});
G__200331 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__200331__200332.call(this,coll,n);
case  3 :
return G__200331__200333.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200331;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__200318 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__200318.meta);
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
var subvec__200335 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__200336 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__200335.call(this,v,start);
case  3 :
return subvec__200336.call(this,v,start,end);
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
var this__200338 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__200339 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__200340 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__200341 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__200341.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__200342 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__200343 = this;
return cljs.core._first.call(null,this__200343.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__200344 = this;
var temp__3695__auto____200345 = cljs.core.next.call(null,this__200344.front);

if(cljs.core.truth_(temp__3695__auto____200345))
{var f1__200346 = temp__3695__auto____200345;

return (new cljs.core.PersistentQueueSeq(this__200344.meta,f1__200346,this__200344.rear));
} else
{if(cljs.core.truth_((this__200344.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__200344.meta,this__200344.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__200347 = this;
return this__200347.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__200348 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__200348.front,this__200348.rear));
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
var this__200349 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__200350 = this;
if(cljs.core.truth_(this__200350.front))
{return (new cljs.core.PersistentQueue(this__200350.meta,(this__200350.count + 1),this__200350.front,cljs.core.conj.call(null,(function (){var or__3548__auto____200351 = this__200350.rear;

if(cljs.core.truth_(or__3548__auto____200351))
{return or__3548__auto____200351;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__200350.meta,(this__200350.count + 1),cljs.core.conj.call(null,this__200350.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__200352 = this;
var rear__200353 = cljs.core.seq.call(null,this__200352.rear);

if(cljs.core.truth_((function (){var or__3548__auto____200354 = this__200352.front;

if(cljs.core.truth_(or__3548__auto____200354))
{return or__3548__auto____200354;
} else
{return rear__200353;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__200352.front,cljs.core.seq.call(null,rear__200353)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__200355 = this;
return this__200355.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__200356 = this;
return cljs.core._first.call(null,this__200356.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__200357 = this;
if(cljs.core.truth_(this__200357.front))
{var temp__3695__auto____200358 = cljs.core.next.call(null,this__200357.front);

if(cljs.core.truth_(temp__3695__auto____200358))
{var f1__200359 = temp__3695__auto____200358;

return (new cljs.core.PersistentQueue(this__200357.meta,(this__200357.count - 1),f1__200359,this__200357.rear));
} else
{return (new cljs.core.PersistentQueue(this__200357.meta,(this__200357.count - 1),cljs.core.seq.call(null,this__200357.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__200360 = this;
return cljs.core.first.call(null,this__200360.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__200361 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__200362 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__200363 = this;
return (new cljs.core.PersistentQueue(meta,this__200363.count,this__200363.front,this__200363.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__200364 = this;
return this__200364.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__200365 = this;
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
var this__200366 = this;
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
var len__200367 = array.length;

var i__200368 = 0;

while(true){
if(cljs.core.truth_((i__200368 < len__200367)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__200368]))))
{return i__200368;
} else
{{
var G__200369 = (i__200368 + incr);
i__200368 = G__200369;
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
var obj_map_contains_key_QMARK___200371 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___200372 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____200370 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____200370))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____200370;
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
return obj_map_contains_key_QMARK___200371.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___200372.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__200375 = cljs.core.hash.call(null,a);
var b__200376 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__200375 < b__200376)))
{return -1;
} else
{if(cljs.core.truth_((a__200375 > b__200376)))
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
var this__200377 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__200404 = null;
var G__200404__200405 = (function (coll,k){
var this__200378 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__200404__200406 = (function (coll,k,not_found){
var this__200379 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__200379.strobj,(this__200379.strobj[k]),not_found);
});
G__200404 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__200404__200405.call(this,coll,k);
case  3 :
return G__200404__200406.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200404;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__200380 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__200381 = goog.object.clone.call(null,this__200380.strobj);
var overwrite_QMARK___200382 = new_strobj__200381.hasOwnProperty(k);

(new_strobj__200381[k] = v);
if(cljs.core.truth_(overwrite_QMARK___200382))
{return (new cljs.core.ObjMap(this__200380.meta,this__200380.keys,new_strobj__200381));
} else
{var new_keys__200383 = cljs.core.aclone.call(null,this__200380.keys);

new_keys__200383.push(k);
return (new cljs.core.ObjMap(this__200380.meta,new_keys__200383,new_strobj__200381));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__200380.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__200384 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__200384.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__200408 = null;
var G__200408__200409 = (function (tsym200385,k){
var this__200387 = this;
var tsym200385__200388 = this;

var coll__200389 = tsym200385__200388;

return cljs.core._lookup.call(null,coll__200389,k);
});
var G__200408__200410 = (function (tsym200386,k,not_found){
var this__200390 = this;
var tsym200386__200391 = this;

var coll__200392 = tsym200386__200391;

return cljs.core._lookup.call(null,coll__200392,k,not_found);
});
G__200408 = function(tsym200386,k,not_found){
switch(arguments.length){
case  2 :
return G__200408__200409.call(this,tsym200386,k);
case  3 :
return G__200408__200410.call(this,tsym200386,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200408;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__200393 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__200394 = this;
if(cljs.core.truth_((this__200394.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__200374_SHARP_){
return cljs.core.vector.call(null,p1__200374_SHARP_,(this__200394.strobj[p1__200374_SHARP_]));
}),this__200394.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__200395 = this;
return this__200395.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__200396 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__200397 = this;
return (new cljs.core.ObjMap(meta,this__200397.keys,this__200397.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__200398 = this;
return this__200398.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__200399 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__200399.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__200400 = this;
if(cljs.core.truth_((function (){var and__3546__auto____200401 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____200401))
{return this__200400.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____200401;
}
})()))
{var new_keys__200402 = cljs.core.aclone.call(null,this__200400.keys);
var new_strobj__200403 = goog.object.clone.call(null,this__200400.strobj);

new_keys__200402.splice(cljs.core.scan_array.call(null,1,k,new_keys__200402),1);
cljs.core.js_delete.call(null,new_strobj__200403,k);
return (new cljs.core.ObjMap(this__200400.meta,new_keys__200402,new_strobj__200403));
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
var this__200413 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__200451 = null;
var G__200451__200452 = (function (coll,k){
var this__200414 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__200451__200453 = (function (coll,k,not_found){
var this__200415 = this;
var bucket__200416 = (this__200415.hashobj[cljs.core.hash.call(null,k)]);
var i__200417 = (cljs.core.truth_(bucket__200416)?cljs.core.scan_array.call(null,2,k,bucket__200416):null);

if(cljs.core.truth_(i__200417))
{return (bucket__200416[(i__200417 + 1)]);
} else
{return not_found;
}
});
G__200451 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__200451__200452.call(this,coll,k);
case  3 :
return G__200451__200453.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200451;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__200418 = this;
var h__200419 = cljs.core.hash.call(null,k);
var bucket__200420 = (this__200418.hashobj[h__200419]);

if(cljs.core.truth_(bucket__200420))
{var new_bucket__200421 = cljs.core.aclone.call(null,bucket__200420);
var new_hashobj__200422 = goog.object.clone.call(null,this__200418.hashobj);

(new_hashobj__200422[h__200419] = new_bucket__200421);
var temp__3695__auto____200423 = cljs.core.scan_array.call(null,2,k,new_bucket__200421);

if(cljs.core.truth_(temp__3695__auto____200423))
{var i__200424 = temp__3695__auto____200423;

(new_bucket__200421[(i__200424 + 1)] = v);
return (new cljs.core.HashMap(this__200418.meta,this__200418.count,new_hashobj__200422));
} else
{new_bucket__200421.push(k,v);
return (new cljs.core.HashMap(this__200418.meta,(this__200418.count + 1),new_hashobj__200422));
}
} else
{var new_hashobj__200425 = goog.object.clone.call(null,this__200418.hashobj);

(new_hashobj__200425[h__200419] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__200418.meta,(this__200418.count + 1),new_hashobj__200425));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__200426 = this;
var bucket__200427 = (this__200426.hashobj[cljs.core.hash.call(null,k)]);
var i__200428 = (cljs.core.truth_(bucket__200427)?cljs.core.scan_array.call(null,2,k,bucket__200427):null);

if(cljs.core.truth_(i__200428))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__200455 = null;
var G__200455__200456 = (function (tsym200429,k){
var this__200431 = this;
var tsym200429__200432 = this;

var coll__200433 = tsym200429__200432;

return cljs.core._lookup.call(null,coll__200433,k);
});
var G__200455__200457 = (function (tsym200430,k,not_found){
var this__200434 = this;
var tsym200430__200435 = this;

var coll__200436 = tsym200430__200435;

return cljs.core._lookup.call(null,coll__200436,k,not_found);
});
G__200455 = function(tsym200430,k,not_found){
switch(arguments.length){
case  2 :
return G__200455__200456.call(this,tsym200430,k);
case  3 :
return G__200455__200457.call(this,tsym200430,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200455;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__200437 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__200438 = this;
if(cljs.core.truth_((this__200438.count > 0)))
{var hashes__200439 = cljs.core.js_keys.call(null,this__200438.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__200412_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__200438.hashobj[p1__200412_SHARP_])));
}),hashes__200439);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__200440 = this;
return this__200440.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__200441 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__200442 = this;
return (new cljs.core.HashMap(meta,this__200442.count,this__200442.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__200443 = this;
return this__200443.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__200444 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__200444.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__200445 = this;
var h__200446 = cljs.core.hash.call(null,k);
var bucket__200447 = (this__200445.hashobj[h__200446]);
var i__200448 = (cljs.core.truth_(bucket__200447)?cljs.core.scan_array.call(null,2,k,bucket__200447):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__200448)))
{return coll;
} else
{var new_hashobj__200449 = goog.object.clone.call(null,this__200445.hashobj);

if(cljs.core.truth_((3 > bucket__200447.length)))
{cljs.core.js_delete.call(null,new_hashobj__200449,h__200446);
} else
{var new_bucket__200450 = cljs.core.aclone.call(null,bucket__200447);

new_bucket__200450.splice(i__200448,2);
(new_hashobj__200449[h__200446] = new_bucket__200450);
}
return (new cljs.core.HashMap(this__200445.meta,(this__200445.count - 1),new_hashobj__200449));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__200459 = ks.length;

var i__200460 = 0;
var out__200461 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__200460 < len__200459)))
{{
var G__200462 = (i__200460 + 1);
var G__200463 = cljs.core.assoc.call(null,out__200461,(ks[i__200460]),(vs[i__200460]));
i__200460 = G__200462;
out__200461 = G__200463;
continue;
}
} else
{return out__200461;
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
var in$__200464 = cljs.core.seq.call(null,keyvals);
var out__200465 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__200464))
{{
var G__200466 = cljs.core.nnext.call(null,in$__200464);
var G__200467 = cljs.core.assoc.call(null,out__200465,cljs.core.first.call(null,in$__200464),cljs.core.second.call(null,in$__200464));
in$__200464 = G__200466;
out__200465 = G__200467;
continue;
}
} else
{return out__200465;
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
hash_map.cljs$lang$applyTo = (function (arglist__200468){
var keyvals = cljs.core.seq( arglist__200468 );;
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
{return cljs.core.reduce.call(null,(function (p1__200469_SHARP_,p2__200470_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____200471 = p1__200469_SHARP_;

if(cljs.core.truth_(or__3548__auto____200471))
{return or__3548__auto____200471;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__200470_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__200472){
var maps = cljs.core.seq( arglist__200472 );;
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
{var merge_entry__200475 = (function (m,e){
var k__200473 = cljs.core.first.call(null,e);
var v__200474 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__200473)))
{return cljs.core.assoc.call(null,m,k__200473,f.call(null,cljs.core.get.call(null,m,k__200473),v__200474));
} else
{return cljs.core.assoc.call(null,m,k__200473,v__200474);
}
});
var merge2__200477 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__200475,(function (){var or__3548__auto____200476 = m1;

if(cljs.core.truth_(or__3548__auto____200476))
{return or__3548__auto____200476;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__200477,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__200478){
var f = cljs.core.first(arglist__200478);
var maps = cljs.core.rest(arglist__200478);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__200480 = cljs.core.ObjMap.fromObject([],{});
var keys__200481 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__200481))
{var key__200482 = cljs.core.first.call(null,keys__200481);
var entry__200483 = cljs.core.get.call(null,map,key__200482,"\uFDD0'user/not-found");

{
var G__200484 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__200483,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__200480,key__200482,entry__200483):ret__200480);
var G__200485 = cljs.core.next.call(null,keys__200481);
ret__200480 = G__200484;
keys__200481 = G__200485;
continue;
}
} else
{return ret__200480;
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
var this__200486 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__200507 = null;
var G__200507__200508 = (function (coll,v){
var this__200487 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__200507__200509 = (function (coll,v,not_found){
var this__200488 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__200488.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__200507 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__200507__200508.call(this,coll,v);
case  3 :
return G__200507__200509.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200507;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__200511 = null;
var G__200511__200512 = (function (tsym200489,k){
var this__200491 = this;
var tsym200489__200492 = this;

var coll__200493 = tsym200489__200492;

return cljs.core._lookup.call(null,coll__200493,k);
});
var G__200511__200513 = (function (tsym200490,k,not_found){
var this__200494 = this;
var tsym200490__200495 = this;

var coll__200496 = tsym200490__200495;

return cljs.core._lookup.call(null,coll__200496,k,not_found);
});
G__200511 = function(tsym200490,k,not_found){
switch(arguments.length){
case  2 :
return G__200511__200512.call(this,tsym200490,k);
case  3 :
return G__200511__200513.call(this,tsym200490,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200511;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__200497 = this;
return (new cljs.core.Set(this__200497.meta,cljs.core.assoc.call(null,this__200497.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__200498 = this;
return cljs.core.keys.call(null,this__200498.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__200499 = this;
return (new cljs.core.Set(this__200499.meta,cljs.core.dissoc.call(null,this__200499.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__200500 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__200501 = this;
var and__3546__auto____200502 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____200502))
{var and__3546__auto____200503 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____200503))
{return cljs.core.every_QMARK_.call(null,(function (p1__200479_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__200479_SHARP_);
}),other);
} else
{return and__3546__auto____200503;
}
} else
{return and__3546__auto____200502;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__200504 = this;
return (new cljs.core.Set(meta,this__200504.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__200505 = this;
return this__200505.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__200506 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__200506.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__200516 = cljs.core.seq.call(null,coll);
var out__200517 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__200516))))
{{
var G__200518 = cljs.core.rest.call(null,in$__200516);
var G__200519 = cljs.core.conj.call(null,out__200517,cljs.core.first.call(null,in$__200516));
in$__200516 = G__200518;
out__200517 = G__200519;
continue;
}
} else
{return out__200517;
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
{var n__200520 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____200521 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____200521))
{var e__200522 = temp__3695__auto____200521;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__200522));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__200520,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__200515_SHARP_){
var temp__3695__auto____200523 = cljs.core.find.call(null,smap,p1__200515_SHARP_);

if(cljs.core.truth_(temp__3695__auto____200523))
{var e__200524 = temp__3695__auto____200523;

return cljs.core.second.call(null,e__200524);
} else
{return p1__200515_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__200532 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__200525,seen){
while(true){
var vec__200526__200527 = p__200525;
var f__200528 = cljs.core.nth.call(null,vec__200526__200527,0,null);
var xs__200529 = vec__200526__200527;

var temp__3698__auto____200530 = cljs.core.seq.call(null,xs__200529);

if(cljs.core.truth_(temp__3698__auto____200530))
{var s__200531 = temp__3698__auto____200530;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__200528)))
{{
var G__200533 = cljs.core.rest.call(null,s__200531);
var G__200534 = seen;
p__200525 = G__200533;
seen = G__200534;
continue;
}
} else
{return cljs.core.cons.call(null,f__200528,step.call(null,cljs.core.rest.call(null,s__200531),cljs.core.conj.call(null,seen,f__200528)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__200532.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__200535 = cljs.core.Vector.fromArray([]);
var s__200536 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__200536)))
{{
var G__200537 = cljs.core.conj.call(null,ret__200535,cljs.core.first.call(null,s__200536));
var G__200538 = cljs.core.next.call(null,s__200536);
ret__200535 = G__200537;
s__200536 = G__200538;
continue;
}
} else
{return cljs.core.seq.call(null,ret__200535);
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
{if(cljs.core.truth_((function (){var or__3548__auto____200539 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____200539))
{return or__3548__auto____200539;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__200540 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__200540 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__200540 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____200541 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____200541))
{return or__3548__auto____200541;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__200542 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__200542 > -1)))
{return cljs.core.subs.call(null,x,2,i__200542);
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
var map__200545 = cljs.core.ObjMap.fromObject([],{});
var ks__200546 = cljs.core.seq.call(null,keys);
var vs__200547 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____200548 = ks__200546;

if(cljs.core.truth_(and__3546__auto____200548))
{return vs__200547;
} else
{return and__3546__auto____200548;
}
})()))
{{
var G__200549 = cljs.core.assoc.call(null,map__200545,cljs.core.first.call(null,ks__200546),cljs.core.first.call(null,vs__200547));
var G__200550 = cljs.core.next.call(null,ks__200546);
var G__200551 = cljs.core.next.call(null,vs__200547);
map__200545 = G__200549;
ks__200546 = G__200550;
vs__200547 = G__200551;
continue;
}
} else
{return map__200545;
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
var max_key__200554 = (function (k,x){
return x;
});
var max_key__200555 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__200556 = (function() { 
var G__200558__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__200543_SHARP_,p2__200544_SHARP_){
return max_key.call(null,k,p1__200543_SHARP_,p2__200544_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__200558 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200558__delegate.call(this, k, x, y, more);
};
G__200558.cljs$lang$maxFixedArity = 3;
G__200558.cljs$lang$applyTo = (function (arglist__200559){
var k = cljs.core.first(arglist__200559);
var x = cljs.core.first(cljs.core.next(arglist__200559));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200559)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200559)));
return G__200558__delegate.call(this, k, x, y, more);
});
return G__200558;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__200554.call(this,k,x);
case  3 :
return max_key__200555.call(this,k,x,y);
default:
return max_key__200556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__200556.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__200560 = (function (k,x){
return x;
});
var min_key__200561 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__200562 = (function() { 
var G__200564__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__200552_SHARP_,p2__200553_SHARP_){
return min_key.call(null,k,p1__200552_SHARP_,p2__200553_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__200564 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200564__delegate.call(this, k, x, y, more);
};
G__200564.cljs$lang$maxFixedArity = 3;
G__200564.cljs$lang$applyTo = (function (arglist__200565){
var k = cljs.core.first(arglist__200565);
var x = cljs.core.first(cljs.core.next(arglist__200565));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200565)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200565)));
return G__200564__delegate.call(this, k, x, y, more);
});
return G__200564;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__200560.call(this,k,x);
case  3 :
return min_key__200561.call(this,k,x,y);
default:
return min_key__200562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__200562.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__200568 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__200569 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____200566 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200566))
{var s__200567 = temp__3698__auto____200566;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__200567),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__200567)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__200568.call(this,n,step);
case  3 :
return partition_all__200569.call(this,n,step,coll);
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
var temp__3698__auto____200571 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200571))
{var s__200572 = temp__3698__auto____200571;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__200572))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__200572),take_while.call(null,pred,cljs.core.rest.call(null,s__200572)));
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
var this__200573 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__200574 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__200590 = null;
var G__200590__200591 = (function (rng,f){
var this__200575 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__200590__200592 = (function (rng,f,s){
var this__200576 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__200590 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__200590__200591.call(this,rng,f);
case  3 :
return G__200590__200592.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200590;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__200577 = this;
var comp__200578 = (cljs.core.truth_((this__200577.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__200578.call(null,this__200577.start,this__200577.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__200579 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__200579.end - this__200579.start) / this__200579.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__200580 = this;
return this__200580.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__200581 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__200581.meta,(this__200581.start + this__200581.step),this__200581.end,this__200581.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__200582 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__200583 = this;
return (new cljs.core.Range(meta,this__200583.start,this__200583.end,this__200583.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__200584 = this;
return this__200584.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__200594 = null;
var G__200594__200595 = (function (rng,n){
var this__200585 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__200585.start + (n * this__200585.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____200586 = (this__200585.start > this__200585.end);

if(cljs.core.truth_(and__3546__auto____200586))
{return cljs.core._EQ_.call(null,this__200585.step,0);
} else
{return and__3546__auto____200586;
}
})()))
{return this__200585.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__200594__200596 = (function (rng,n,not_found){
var this__200587 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__200587.start + (n * this__200587.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____200588 = (this__200587.start > this__200587.end);

if(cljs.core.truth_(and__3546__auto____200588))
{return cljs.core._EQ_.call(null,this__200587.step,0);
} else
{return and__3546__auto____200588;
}
})()))
{return this__200587.start;
} else
{return not_found;
}
}
});
G__200594 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__200594__200595.call(this,rng,n);
case  3 :
return G__200594__200596.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__200594;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__200589 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__200589.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__200598 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__200599 = (function (end){
return range.call(null,0,end,1);
});
var range__200600 = (function (start,end){
return range.call(null,start,end,1);
});
var range__200601 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__200598.call(this);
case  1 :
return range__200599.call(this,start);
case  2 :
return range__200600.call(this,start,end);
case  3 :
return range__200601.call(this,start,end,step);
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
var temp__3698__auto____200603 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200603))
{var s__200604 = temp__3698__auto____200603;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__200604),take_nth.call(null,n,cljs.core.drop.call(null,n,s__200604)));
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
var temp__3698__auto____200606 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200606))
{var s__200607 = temp__3698__auto____200606;

var fst__200608 = cljs.core.first.call(null,s__200607);
var fv__200609 = f.call(null,fst__200608);
var run__200610 = cljs.core.cons.call(null,fst__200608,cljs.core.take_while.call(null,(function (p1__200605_SHARP_){
return cljs.core._EQ_.call(null,fv__200609,f.call(null,p1__200605_SHARP_));
}),cljs.core.next.call(null,s__200607)));

return cljs.core.cons.call(null,run__200610,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__200610),s__200607))));
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
var reductions__200625 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____200621 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____200621))
{var s__200622 = temp__3695__auto____200621;

return reductions.call(null,f,cljs.core.first.call(null,s__200622),cljs.core.rest.call(null,s__200622));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__200626 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____200623 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____200623))
{var s__200624 = temp__3698__auto____200623;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__200624)),cljs.core.rest.call(null,s__200624));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__200625.call(this,f,init);
case  3 :
return reductions__200626.call(this,f,init,coll);
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
var juxt__200629 = (function (f){
return (function() {
var G__200634 = null;
var G__200634__200635 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__200634__200636 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__200634__200637 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__200634__200638 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__200634__200639 = (function() { 
var G__200641__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__200641 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200641__delegate.call(this, x, y, z, args);
};
G__200641.cljs$lang$maxFixedArity = 3;
G__200641.cljs$lang$applyTo = (function (arglist__200642){
var x = cljs.core.first(arglist__200642);
var y = cljs.core.first(cljs.core.next(arglist__200642));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200642)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200642)));
return G__200641__delegate.call(this, x, y, z, args);
});
return G__200641;
})()
;
G__200634 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__200634__200635.call(this);
case  1 :
return G__200634__200636.call(this,x);
case  2 :
return G__200634__200637.call(this,x,y);
case  3 :
return G__200634__200638.call(this,x,y,z);
default:
return G__200634__200639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__200634.cljs$lang$maxFixedArity = 3;
G__200634.cljs$lang$applyTo = G__200634__200639.cljs$lang$applyTo;
return G__200634;
})()
});
var juxt__200630 = (function (f,g){
return (function() {
var G__200643 = null;
var G__200643__200644 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__200643__200645 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__200643__200646 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__200643__200647 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__200643__200648 = (function() { 
var G__200650__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__200650 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200650__delegate.call(this, x, y, z, args);
};
G__200650.cljs$lang$maxFixedArity = 3;
G__200650.cljs$lang$applyTo = (function (arglist__200651){
var x = cljs.core.first(arglist__200651);
var y = cljs.core.first(cljs.core.next(arglist__200651));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200651)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200651)));
return G__200650__delegate.call(this, x, y, z, args);
});
return G__200650;
})()
;
G__200643 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__200643__200644.call(this);
case  1 :
return G__200643__200645.call(this,x);
case  2 :
return G__200643__200646.call(this,x,y);
case  3 :
return G__200643__200647.call(this,x,y,z);
default:
return G__200643__200648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__200643.cljs$lang$maxFixedArity = 3;
G__200643.cljs$lang$applyTo = G__200643__200648.cljs$lang$applyTo;
return G__200643;
})()
});
var juxt__200631 = (function (f,g,h){
return (function() {
var G__200652 = null;
var G__200652__200653 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__200652__200654 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__200652__200655 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__200652__200656 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__200652__200657 = (function() { 
var G__200659__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__200659 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200659__delegate.call(this, x, y, z, args);
};
G__200659.cljs$lang$maxFixedArity = 3;
G__200659.cljs$lang$applyTo = (function (arglist__200660){
var x = cljs.core.first(arglist__200660);
var y = cljs.core.first(cljs.core.next(arglist__200660));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200660)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200660)));
return G__200659__delegate.call(this, x, y, z, args);
});
return G__200659;
})()
;
G__200652 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__200652__200653.call(this);
case  1 :
return G__200652__200654.call(this,x);
case  2 :
return G__200652__200655.call(this,x,y);
case  3 :
return G__200652__200656.call(this,x,y,z);
default:
return G__200652__200657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__200652.cljs$lang$maxFixedArity = 3;
G__200652.cljs$lang$applyTo = G__200652__200657.cljs$lang$applyTo;
return G__200652;
})()
});
var juxt__200632 = (function() { 
var G__200661__delegate = function (f,g,h,fs){
var fs__200628 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__200662 = null;
var G__200662__200663 = (function (){
return cljs.core.reduce.call(null,(function (p1__200611_SHARP_,p2__200612_SHARP_){
return cljs.core.conj.call(null,p1__200611_SHARP_,p2__200612_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__200628);
});
var G__200662__200664 = (function (x){
return cljs.core.reduce.call(null,(function (p1__200613_SHARP_,p2__200614_SHARP_){
return cljs.core.conj.call(null,p1__200613_SHARP_,p2__200614_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__200628);
});
var G__200662__200665 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__200615_SHARP_,p2__200616_SHARP_){
return cljs.core.conj.call(null,p1__200615_SHARP_,p2__200616_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__200628);
});
var G__200662__200666 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__200617_SHARP_,p2__200618_SHARP_){
return cljs.core.conj.call(null,p1__200617_SHARP_,p2__200618_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__200628);
});
var G__200662__200667 = (function() { 
var G__200669__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__200619_SHARP_,p2__200620_SHARP_){
return cljs.core.conj.call(null,p1__200619_SHARP_,cljs.core.apply.call(null,p2__200620_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__200628);
};
var G__200669 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200669__delegate.call(this, x, y, z, args);
};
G__200669.cljs$lang$maxFixedArity = 3;
G__200669.cljs$lang$applyTo = (function (arglist__200670){
var x = cljs.core.first(arglist__200670);
var y = cljs.core.first(cljs.core.next(arglist__200670));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200670)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200670)));
return G__200669__delegate.call(this, x, y, z, args);
});
return G__200669;
})()
;
G__200662 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__200662__200663.call(this);
case  1 :
return G__200662__200664.call(this,x);
case  2 :
return G__200662__200665.call(this,x,y);
case  3 :
return G__200662__200666.call(this,x,y,z);
default:
return G__200662__200667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__200662.cljs$lang$maxFixedArity = 3;
G__200662.cljs$lang$applyTo = G__200662__200667.cljs$lang$applyTo;
return G__200662;
})()
};
var G__200661 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__200661__delegate.call(this, f, g, h, fs);
};
G__200661.cljs$lang$maxFixedArity = 3;
G__200661.cljs$lang$applyTo = (function (arglist__200671){
var f = cljs.core.first(arglist__200671);
var g = cljs.core.first(cljs.core.next(arglist__200671));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200671)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__200671)));
return G__200661__delegate.call(this, f, g, h, fs);
});
return G__200661;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__200629.call(this,f);
case  2 :
return juxt__200630.call(this,f,g);
case  3 :
return juxt__200631.call(this,f,g,h);
default:
return juxt__200632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__200632.cljs$lang$applyTo;
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
var dorun__200673 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__200676 = cljs.core.next.call(null,coll);
coll = G__200676;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__200674 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____200672 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____200672))
{return (n > 0);
} else
{return and__3546__auto____200672;
}
})()))
{{
var G__200677 = (n - 1);
var G__200678 = cljs.core.next.call(null,coll);
n = G__200677;
coll = G__200678;
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
return dorun__200673.call(this,n);
case  2 :
return dorun__200674.call(this,n,coll);
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
var doall__200679 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__200680 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__200679.call(this,n);
case  2 :
return doall__200680.call(this,n,coll);
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
var matches__200682 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__200682),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__200682),1)))
{return cljs.core.first.call(null,matches__200682);
} else
{return cljs.core.vec.call(null,matches__200682);
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
var matches__200683 = re.exec(s);

if(cljs.core.truth_((matches__200683 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__200683),1)))
{return cljs.core.first.call(null,matches__200683);
} else
{return cljs.core.vec.call(null,matches__200683);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__200684 = cljs.core.re_find.call(null,re,s);
var match_idx__200685 = s.search(re);
var match_str__200686 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__200684))?cljs.core.first.call(null,match_data__200684):match_data__200684);
var post_match__200687 = cljs.core.subs.call(null,s,(match_idx__200685 + cljs.core.count.call(null,match_str__200686)));

if(cljs.core.truth_(match_data__200684))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__200684,re_seq.call(null,re,post_match__200687));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__200689__200690 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___200691 = cljs.core.nth.call(null,vec__200689__200690,0,null);
var flags__200692 = cljs.core.nth.call(null,vec__200689__200690,1,null);
var pattern__200693 = cljs.core.nth.call(null,vec__200689__200690,2,null);

return (new RegExp(pattern__200693,flags__200692));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__200688_SHARP_){
return print_one.call(null,p1__200688_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____200694 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____200694))
{var and__3546__auto____200698 = (function (){var x__450__auto____200695 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____200696 = x__450__auto____200695;

if(cljs.core.truth_(and__3546__auto____200696))
{var and__3546__auto____200697 = x__450__auto____200695.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____200697))
{return cljs.core.not.call(null,x__450__auto____200695.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____200697;
}
} else
{return and__3546__auto____200696;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____200695);
}
})();

if(cljs.core.truth_(and__3546__auto____200698))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____200698;
}
} else
{return and__3546__auto____200694;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____200699 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____200700 = x__450__auto____200699;

if(cljs.core.truth_(and__3546__auto____200700))
{var and__3546__auto____200701 = x__450__auto____200699.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____200701))
{return cljs.core.not.call(null,x__450__auto____200699.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____200701;
}
} else
{return and__3546__auto____200700;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____200699);
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
var first_obj__200702 = cljs.core.first.call(null,objs);
var sb__200703 = (new goog.string.StringBuffer());

var G__200704__200705 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__200704__200705))
{var obj__200706 = cljs.core.first.call(null,G__200704__200705);
var G__200704__200707 = G__200704__200705;

while(true){
if(cljs.core.truth_((obj__200706 === first_obj__200702)))
{} else
{sb__200703.append(" ");
}
var G__200708__200709 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__200706,opts));

if(cljs.core.truth_(G__200708__200709))
{var string__200710 = cljs.core.first.call(null,G__200708__200709);
var G__200708__200711 = G__200708__200709;

while(true){
sb__200703.append(string__200710);
var temp__3698__auto____200712 = cljs.core.next.call(null,G__200708__200711);

if(cljs.core.truth_(temp__3698__auto____200712))
{var G__200708__200713 = temp__3698__auto____200712;

{
var G__200716 = cljs.core.first.call(null,G__200708__200713);
var G__200717 = G__200708__200713;
string__200710 = G__200716;
G__200708__200711 = G__200717;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____200714 = cljs.core.next.call(null,G__200704__200707);

if(cljs.core.truth_(temp__3698__auto____200714))
{var G__200704__200715 = temp__3698__auto____200714;

{
var G__200718 = cljs.core.first.call(null,G__200704__200715);
var G__200719 = G__200704__200715;
obj__200706 = G__200718;
G__200704__200707 = G__200719;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__200703);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__200720 = cljs.core.first.call(null,objs);

var G__200721__200722 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__200721__200722))
{var obj__200723 = cljs.core.first.call(null,G__200721__200722);
var G__200721__200724 = G__200721__200722;

while(true){
if(cljs.core.truth_((obj__200723 === first_obj__200720)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__200725__200726 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__200723,opts));

if(cljs.core.truth_(G__200725__200726))
{var string__200727 = cljs.core.first.call(null,G__200725__200726);
var G__200725__200728 = G__200725__200726;

while(true){
cljs.core.string_print.call(null,string__200727);
var temp__3698__auto____200729 = cljs.core.next.call(null,G__200725__200728);

if(cljs.core.truth_(temp__3698__auto____200729))
{var G__200725__200730 = temp__3698__auto____200729;

{
var G__200733 = cljs.core.first.call(null,G__200725__200730);
var G__200734 = G__200725__200730;
string__200727 = G__200733;
G__200725__200728 = G__200734;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____200731 = cljs.core.next.call(null,G__200721__200724);

if(cljs.core.truth_(temp__3698__auto____200731))
{var G__200721__200732 = temp__3698__auto____200731;

{
var G__200735 = cljs.core.first.call(null,G__200721__200732);
var G__200736 = G__200721__200732;
obj__200723 = G__200735;
G__200721__200724 = G__200736;
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
pr_str.cljs$lang$applyTo = (function (arglist__200737){
var objs = cljs.core.seq( arglist__200737 );;
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
pr.cljs$lang$applyTo = (function (arglist__200738){
var objs = cljs.core.seq( arglist__200738 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__200739){
var objs = cljs.core.seq( arglist__200739 );;
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
println.cljs$lang$applyTo = (function (arglist__200740){
var objs = cljs.core.seq( arglist__200740 );;
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
prn.cljs$lang$applyTo = (function (arglist__200741){
var objs = cljs.core.seq( arglist__200741 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__200742 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__200742,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____200743 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____200743))
{var nspc__200744 = temp__3698__auto____200743;

return cljs.core.str.call(null,nspc__200744,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____200745 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____200745))
{var nspc__200746 = temp__3698__auto____200745;

return cljs.core.str.call(null,nspc__200746,"\/");
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
var pr_pair__200747 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__200747,"{",", ","}",opts,coll);
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
var this__200748 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__200749 = this;
var G__200750__200751 = cljs.core.seq.call(null,this__200749.watches);

if(cljs.core.truth_(G__200750__200751))
{var G__200753__200755 = cljs.core.first.call(null,G__200750__200751);
var vec__200754__200756 = G__200753__200755;
var key__200757 = cljs.core.nth.call(null,vec__200754__200756,0,null);
var f__200758 = cljs.core.nth.call(null,vec__200754__200756,1,null);
var G__200750__200759 = G__200750__200751;

var G__200753__200760 = G__200753__200755;
var G__200750__200761 = G__200750__200759;

while(true){
var vec__200762__200763 = G__200753__200760;
var key__200764 = cljs.core.nth.call(null,vec__200762__200763,0,null);
var f__200765 = cljs.core.nth.call(null,vec__200762__200763,1,null);
var G__200750__200766 = G__200750__200761;

f__200765.call(null,key__200764,this$,oldval,newval);
var temp__3698__auto____200767 = cljs.core.next.call(null,G__200750__200766);

if(cljs.core.truth_(temp__3698__auto____200767))
{var G__200750__200768 = temp__3698__auto____200767;

{
var G__200775 = cljs.core.first.call(null,G__200750__200768);
var G__200776 = G__200750__200768;
G__200753__200760 = G__200775;
G__200750__200761 = G__200776;
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
var this__200769 = this;
return this$.watches = cljs.core.assoc.call(null,this__200769.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__200770 = this;
return this$.watches = cljs.core.dissoc.call(null,this__200770.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__200771 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__200771.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__200772 = this;
return this__200772.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__200773 = this;
return this__200773.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__200774 = this;
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
var atom__200783 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__200784 = (function() { 
var G__200786__delegate = function (x,p__200777){
var map__200778__200779 = p__200777;
var map__200778__200780 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__200778__200779))?cljs.core.apply.call(null,cljs.core.hash_map,map__200778__200779):map__200778__200779);
var validator__200781 = cljs.core.get.call(null,map__200778__200780,"\uFDD0'validator");
var meta__200782 = cljs.core.get.call(null,map__200778__200780,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__200782,validator__200781,null));
};
var G__200786 = function (x,var_args){
var p__200777 = null;
if (goog.isDef(var_args)) {
  p__200777 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__200786__delegate.call(this, x, p__200777);
};
G__200786.cljs$lang$maxFixedArity = 1;
G__200786.cljs$lang$applyTo = (function (arglist__200787){
var x = cljs.core.first(arglist__200787);
var p__200777 = cljs.core.rest(arglist__200787);
return G__200786__delegate.call(this, x, p__200777);
});
return G__200786;
})()
;
atom = function(x,var_args){
var p__200777 = var_args;
switch(arguments.length){
case  1 :
return atom__200783.call(this,x);
default:
return atom__200784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__200784.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____200788 = a.validator;

if(cljs.core.truth_(temp__3698__auto____200788))
{var validate__200789 = temp__3698__auto____200788;

if(cljs.core.truth_(validate__200789.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__200790 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__200790,new_value);
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
var swap_BANG___200791 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___200792 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___200793 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___200794 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___200795 = (function() { 
var G__200797__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__200797 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__200797__delegate.call(this, a, f, x, y, z, more);
};
G__200797.cljs$lang$maxFixedArity = 5;
G__200797.cljs$lang$applyTo = (function (arglist__200798){
var a = cljs.core.first(arglist__200798);
var f = cljs.core.first(cljs.core.next(arglist__200798));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__200798)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__200798))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__200798)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__200798)))));
return G__200797__delegate.call(this, a, f, x, y, z, more);
});
return G__200797;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___200791.call(this,a,f);
case  3 :
return swap_BANG___200792.call(this,a,f,x);
case  4 :
return swap_BANG___200793.call(this,a,f,x,y);
case  5 :
return swap_BANG___200794.call(this,a,f,x,y,z);
default:
return swap_BANG___200795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___200795.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__200799){
var iref = cljs.core.first(arglist__200799);
var f = cljs.core.first(cljs.core.next(arglist__200799));
var args = cljs.core.rest(cljs.core.next(arglist__200799));
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
var gensym__200800 = (function (){
return gensym.call(null,"G__");
});
var gensym__200801 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__200800.call(this);
case  1 :
return gensym__200801.call(this,prefix_string);
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
var this__200803 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__200803.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__200804 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__200804.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__200804.state,this__200804.f);
}
return cljs.core.deref.call(null,this__200804.state);
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
delay.cljs$lang$applyTo = (function (arglist__200805){
var body = cljs.core.seq( arglist__200805 );;
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
var map__200806__200807 = options;
var map__200806__200808 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__200806__200807))?cljs.core.apply.call(null,cljs.core.hash_map,map__200806__200807):map__200806__200807);
var keywordize_keys__200809 = cljs.core.get.call(null,map__200806__200808,"\uFDD0'keywordize-keys");
var keyfn__200810 = (cljs.core.truth_(keywordize_keys__200809)?cljs.core.keyword:cljs.core.str);
var f__200816 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____200815 = (function iter__200811(s__200812){
return (new cljs.core.LazySeq(null,false,(function (){
var s__200812__200813 = s__200812;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__200812__200813)))
{var k__200814 = cljs.core.first.call(null,s__200812__200813);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__200810.call(null,k__200814),thisfn.call(null,(x[k__200814]))]),iter__200811.call(null,cljs.core.rest.call(null,s__200812__200813)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____200815.call(null,cljs.core.js_keys.call(null,x));
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

return f__200816.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__200817){
var x = cljs.core.first(arglist__200817);
var options = cljs.core.rest(arglist__200817);
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
var mem__200818 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__200822__delegate = function (args){
var temp__3695__auto____200819 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__200818),args);

if(cljs.core.truth_(temp__3695__auto____200819))
{var v__200820 = temp__3695__auto____200819;

return v__200820;
} else
{var ret__200821 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__200818,cljs.core.assoc,args,ret__200821);
return ret__200821;
}
};
var G__200822 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__200822__delegate.call(this, args);
};
G__200822.cljs$lang$maxFixedArity = 0;
G__200822.cljs$lang$applyTo = (function (arglist__200823){
var args = cljs.core.seq( arglist__200823 );;
return G__200822__delegate.call(this, args);
});
return G__200822;
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
var trampoline__200825 = (function (f){
while(true){
var ret__200824 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__200824)))
{{
var G__200828 = ret__200824;
f = G__200828;
continue;
}
} else
{return ret__200824;
}
break;
}
});
var trampoline__200826 = (function() { 
var G__200829__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__200829 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__200829__delegate.call(this, f, args);
};
G__200829.cljs$lang$maxFixedArity = 1;
G__200829.cljs$lang$applyTo = (function (arglist__200830){
var f = cljs.core.first(arglist__200830);
var args = cljs.core.rest(arglist__200830);
return G__200829__delegate.call(this, f, args);
});
return G__200829;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__200825.call(this,f);
default:
return trampoline__200826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__200826.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__200831 = (function (){
return rand.call(null,1);
});
var rand__200832 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__200831.call(this);
case  1 :
return rand__200832.call(this,n);
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
var k__200834 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__200834,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__200834,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___200843 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___200844 = (function (h,child,parent){
var or__3548__auto____200835 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____200835))
{return or__3548__auto____200835;
} else
{var or__3548__auto____200836 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____200836))
{return or__3548__auto____200836;
} else
{var and__3546__auto____200837 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____200837))
{var and__3546__auto____200838 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____200838))
{var and__3546__auto____200839 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____200839))
{var ret__200840 = true;
var i__200841 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____200842 = cljs.core.not.call(null,ret__200840);

if(cljs.core.truth_(or__3548__auto____200842))
{return or__3548__auto____200842;
} else
{return cljs.core._EQ_.call(null,i__200841,cljs.core.count.call(null,parent));
}
})()))
{return ret__200840;
} else
{{
var G__200846 = isa_QMARK_.call(null,h,child.call(null,i__200841),parent.call(null,i__200841));
var G__200847 = (i__200841 + 1);
ret__200840 = G__200846;
i__200841 = G__200847;
continue;
}
}
break;
}
} else
{return and__3546__auto____200839;
}
} else
{return and__3546__auto____200838;
}
} else
{return and__3546__auto____200837;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___200843.call(this,h,child);
case  3 :
return isa_QMARK___200844.call(this,h,child,parent);
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
var parents__200848 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__200849 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__200848.call(this,h);
case  2 :
return parents__200849.call(this,h,tag);
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
var ancestors__200851 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__200852 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__200851.call(this,h);
case  2 :
return ancestors__200852.call(this,h,tag);
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
var descendants__200854 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__200855 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__200854.call(this,h);
case  2 :
return descendants__200855.call(this,h,tag);
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
var derive__200865 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__200866 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__200860 = "\uFDD0'parents".call(null,h);
var td__200861 = "\uFDD0'descendants".call(null,h);
var ta__200862 = "\uFDD0'ancestors".call(null,h);
var tf__200863 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____200864 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__200860.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__200862.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__200862.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__200860,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__200863.call(null,"\uFDD0'ancestors".call(null,h),tag,td__200861,parent,ta__200862),"\uFDD0'descendants":tf__200863.call(null,"\uFDD0'descendants".call(null,h),parent,ta__200862,tag,td__200861)});
})());

if(cljs.core.truth_(or__3548__auto____200864))
{return or__3548__auto____200864;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__200865.call(this,h,tag);
case  3 :
return derive__200866.call(this,h,tag,parent);
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
var underive__200872 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__200873 = (function (h,tag,parent){
var parentMap__200868 = "\uFDD0'parents".call(null,h);
var childsParents__200869 = (cljs.core.truth_(parentMap__200868.call(null,tag))?cljs.core.disj.call(null,parentMap__200868.call(null,tag),parent):cljs.core.set([]));
var newParents__200870 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__200869))?cljs.core.assoc.call(null,parentMap__200868,tag,childsParents__200869):cljs.core.dissoc.call(null,parentMap__200868,tag));
var deriv_seq__200871 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__200857_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__200857_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__200857_SHARP_),cljs.core.second.call(null,p1__200857_SHARP_)));
}),cljs.core.seq.call(null,newParents__200870)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__200868.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__200858_SHARP_,p2__200859_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__200858_SHARP_,p2__200859_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__200871));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__200872.call(this,h,tag);
case  3 :
return underive__200873.call(this,h,tag,parent);
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
var xprefs__200875 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____200877 = (cljs.core.truth_((function (){var and__3546__auto____200876 = xprefs__200875;

if(cljs.core.truth_(and__3546__auto____200876))
{return xprefs__200875.call(null,y);
} else
{return and__3546__auto____200876;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____200877))
{return or__3548__auto____200877;
} else
{var or__3548__auto____200879 = (function (){var ps__200878 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__200878) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__200878),prefer_table)))
{} else
{}
{
var G__200882 = cljs.core.rest.call(null,ps__200878);
ps__200878 = G__200882;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____200879))
{return or__3548__auto____200879;
} else
{var or__3548__auto____200881 = (function (){var ps__200880 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__200880) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__200880),y,prefer_table)))
{} else
{}
{
var G__200883 = cljs.core.rest.call(null,ps__200880);
ps__200880 = G__200883;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____200881))
{return or__3548__auto____200881;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____200884 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____200884))
{return or__3548__auto____200884;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__200893 = cljs.core.reduce.call(null,(function (be,p__200885){
var vec__200886__200887 = p__200885;
var k__200888 = cljs.core.nth.call(null,vec__200886__200887,0,null);
var ___200889 = cljs.core.nth.call(null,vec__200886__200887,1,null);
var e__200890 = vec__200886__200887;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__200888)))
{var be2__200892 = (cljs.core.truth_((function (){var or__3548__auto____200891 = (be === null);

if(cljs.core.truth_(or__3548__auto____200891))
{return or__3548__auto____200891;
} else
{return cljs.core.dominates.call(null,k__200888,cljs.core.first.call(null,be),prefer_table);
}
})())?e__200890:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__200892),k__200888,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__200888," and ",cljs.core.first.call(null,be2__200892),", and neither is preferred")));
}
return be2__200892;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__200893))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__200893));
return cljs.core.second.call(null,best_entry__200893);
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
if(cljs.core.truth_((function (){var and__3546__auto____200894 = mf;

if(cljs.core.truth_(and__3546__auto____200894))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____200894;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____200895 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____200895))
{return or__3548__auto____200895;
} else
{var or__3548__auto____200896 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____200896))
{return or__3548__auto____200896;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____200897 = mf;

if(cljs.core.truth_(and__3546__auto____200897))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____200897;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____200898 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____200898))
{return or__3548__auto____200898;
} else
{var or__3548__auto____200899 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____200899))
{return or__3548__auto____200899;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____200900 = mf;

if(cljs.core.truth_(and__3546__auto____200900))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____200900;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____200901 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____200901))
{return or__3548__auto____200901;
} else
{var or__3548__auto____200902 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____200902))
{return or__3548__auto____200902;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____200903 = mf;

if(cljs.core.truth_(and__3546__auto____200903))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____200903;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____200904 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____200904))
{return or__3548__auto____200904;
} else
{var or__3548__auto____200905 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____200905))
{return or__3548__auto____200905;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____200906 = mf;

if(cljs.core.truth_(and__3546__auto____200906))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____200906;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____200907 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____200907))
{return or__3548__auto____200907;
} else
{var or__3548__auto____200908 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____200908))
{return or__3548__auto____200908;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____200909 = mf;

if(cljs.core.truth_(and__3546__auto____200909))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____200909;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____200910 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____200910))
{return or__3548__auto____200910;
} else
{var or__3548__auto____200911 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____200911))
{return or__3548__auto____200911;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____200912 = mf;

if(cljs.core.truth_(and__3546__auto____200912))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____200912;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____200913 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____200913))
{return or__3548__auto____200913;
} else
{var or__3548__auto____200914 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____200914))
{return or__3548__auto____200914;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____200915 = mf;

if(cljs.core.truth_(and__3546__auto____200915))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____200915;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____200916 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____200916))
{return or__3548__auto____200916;
} else
{var or__3548__auto____200917 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____200917))
{return or__3548__auto____200917;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__200918 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__200919 = cljs.core._get_method.call(null,mf,dispatch_val__200918);

if(cljs.core.truth_(target_fn__200919))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__200918)));
}
return cljs.core.apply.call(null,target_fn__200919,args);
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
var this__200920 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__200921 = this;
cljs.core.swap_BANG_.call(null,this__200921.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__200921.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__200921.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__200921.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__200922 = this;
cljs.core.swap_BANG_.call(null,this__200922.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__200922.method_cache,this__200922.method_table,this__200922.cached_hierarchy,this__200922.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__200923 = this;
cljs.core.swap_BANG_.call(null,this__200923.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__200923.method_cache,this__200923.method_table,this__200923.cached_hierarchy,this__200923.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__200924 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__200924.cached_hierarchy),cljs.core.deref.call(null,this__200924.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__200924.method_cache,this__200924.method_table,this__200924.cached_hierarchy,this__200924.hierarchy);
}
var temp__3695__auto____200925 = cljs.core.deref.call(null,this__200924.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____200925))
{var target_fn__200926 = temp__3695__auto____200925;

return target_fn__200926;
} else
{var temp__3695__auto____200927 = cljs.core.find_and_cache_best_method.call(null,this__200924.name,dispatch_val,this__200924.hierarchy,this__200924.method_table,this__200924.prefer_table,this__200924.method_cache,this__200924.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____200927))
{var target_fn__200928 = temp__3695__auto____200927;

return target_fn__200928;
} else
{return cljs.core.deref.call(null,this__200924.method_table).call(null,this__200924.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__200929 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__200929.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__200929.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__200929.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__200929.method_cache,this__200929.method_table,this__200929.cached_hierarchy,this__200929.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__200930 = this;
return cljs.core.deref.call(null,this__200930.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__200931 = this;
return cljs.core.deref.call(null,this__200931.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__200932 = this;
return cljs.core.do_dispatch.call(null,mf,this__200932.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__200933__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__200933 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__200933__delegate.call(this, _, args);
};
G__200933.cljs$lang$maxFixedArity = 1;
G__200933.cljs$lang$applyTo = (function (arglist__200934){
var _ = cljs.core.first(arglist__200934);
var args = cljs.core.rest(arglist__200934);
return G__200933__delegate.call(this, _, args);
});
return G__200933;
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
