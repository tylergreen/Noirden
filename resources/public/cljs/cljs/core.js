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
var or__3548__auto____3087 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3087))
{return or__3548__auto____3087;
} else
{var or__3548__auto____3088 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3088))
{return or__3548__auto____3088;
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
var _invoke__3152 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3089 = this$;

if(cljs.core.truth_(and__3546__auto____3089))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3089;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3090 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3090))
{return or__3548__auto____3090;
} else
{var or__3548__auto____3091 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3091))
{return or__3548__auto____3091;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3153 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3092 = this$;

if(cljs.core.truth_(and__3546__auto____3092))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3092;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3093 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3093))
{return or__3548__auto____3093;
} else
{var or__3548__auto____3094 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3094))
{return or__3548__auto____3094;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3154 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3095 = this$;

if(cljs.core.truth_(and__3546__auto____3095))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3095;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3096 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3096))
{return or__3548__auto____3096;
} else
{var or__3548__auto____3097 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3097))
{return or__3548__auto____3097;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3155 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3098 = this$;

if(cljs.core.truth_(and__3546__auto____3098))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3098;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3099 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3099))
{return or__3548__auto____3099;
} else
{var or__3548__auto____3100 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3100))
{return or__3548__auto____3100;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3156 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3101 = this$;

if(cljs.core.truth_(and__3546__auto____3101))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3101;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3102 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3102))
{return or__3548__auto____3102;
} else
{var or__3548__auto____3103 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3103))
{return or__3548__auto____3103;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3157 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3104 = this$;

if(cljs.core.truth_(and__3546__auto____3104))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3104;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3105 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3105))
{return or__3548__auto____3105;
} else
{var or__3548__auto____3106 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3106))
{return or__3548__auto____3106;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3158 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3107 = this$;

if(cljs.core.truth_(and__3546__auto____3107))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3107;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3108 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3108))
{return or__3548__auto____3108;
} else
{var or__3548__auto____3109 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3109))
{return or__3548__auto____3109;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3159 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3110 = this$;

if(cljs.core.truth_(and__3546__auto____3110))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3110;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3111 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3111))
{return or__3548__auto____3111;
} else
{var or__3548__auto____3112 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3112))
{return or__3548__auto____3112;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3160 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3113 = this$;

if(cljs.core.truth_(and__3546__auto____3113))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3113;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3114 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3114))
{return or__3548__auto____3114;
} else
{var or__3548__auto____3115 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3115))
{return or__3548__auto____3115;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3161 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3116 = this$;

if(cljs.core.truth_(and__3546__auto____3116))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3116;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3117 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3117))
{return or__3548__auto____3117;
} else
{var or__3548__auto____3118 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3118))
{return or__3548__auto____3118;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3162 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3119 = this$;

if(cljs.core.truth_(and__3546__auto____3119))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3119;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3120 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3120))
{return or__3548__auto____3120;
} else
{var or__3548__auto____3121 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3163 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3122 = this$;

if(cljs.core.truth_(and__3546__auto____3122))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3122;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3123 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3123))
{return or__3548__auto____3123;
} else
{var or__3548__auto____3124 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3124))
{return or__3548__auto____3124;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3164 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3125 = this$;

if(cljs.core.truth_(and__3546__auto____3125))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3125;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3126 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3126))
{return or__3548__auto____3126;
} else
{var or__3548__auto____3127 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3127))
{return or__3548__auto____3127;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3165 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3128 = this$;

if(cljs.core.truth_(and__3546__auto____3128))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3128;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3129 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3129))
{return or__3548__auto____3129;
} else
{var or__3548__auto____3130 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3130))
{return or__3548__auto____3130;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3166 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3131 = this$;

if(cljs.core.truth_(and__3546__auto____3131))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3131;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3132 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3132))
{return or__3548__auto____3132;
} else
{var or__3548__auto____3133 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3167 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3134 = this$;

if(cljs.core.truth_(and__3546__auto____3134))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3134;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3135 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3135))
{return or__3548__auto____3135;
} else
{var or__3548__auto____3136 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3168 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3137 = this$;

if(cljs.core.truth_(and__3546__auto____3137))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3137;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3138 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3138))
{return or__3548__auto____3138;
} else
{var or__3548__auto____3139 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3169 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3140 = this$;

if(cljs.core.truth_(and__3546__auto____3140))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3140;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3141 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3141))
{return or__3548__auto____3141;
} else
{var or__3548__auto____3142 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3170 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3143 = this$;

if(cljs.core.truth_(and__3546__auto____3143))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3143;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3144 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{var or__3548__auto____3145 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3171 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3146 = this$;

if(cljs.core.truth_(and__3546__auto____3146))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3146;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3147 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3147))
{return or__3548__auto____3147;
} else
{var or__3548__auto____3148 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3172 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3149 = this$;

if(cljs.core.truth_(and__3546__auto____3149))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3149;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3150 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3150))
{return or__3548__auto____3150;
} else
{var or__3548__auto____3151 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
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
return _invoke__3152.call(this,this$);
case  2 :
return _invoke__3153.call(this,this$,a);
case  3 :
return _invoke__3154.call(this,this$,a,b);
case  4 :
return _invoke__3155.call(this,this$,a,b,c);
case  5 :
return _invoke__3156.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3157.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3158.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3159.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3160.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3161.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3162.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3163.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3164.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3165.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3166.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3167.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3168.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3169.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3170.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3171.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3172.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3174 = coll;

if(cljs.core.truth_(and__3546__auto____3174))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3174;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3175 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{var or__3548__auto____3176 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3177 = coll;

if(cljs.core.truth_(and__3546__auto____3177))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3177;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3178 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{var or__3548__auto____3179 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3180 = coll;

if(cljs.core.truth_(and__3546__auto____3180))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3180;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3181 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{var or__3548__auto____3182 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3182))
{return or__3548__auto____3182;
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
var _nth__3189 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3183 = coll;

if(cljs.core.truth_(and__3546__auto____3183))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3183;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3184 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{var or__3548__auto____3185 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3185))
{return or__3548__auto____3185;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3190 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3186 = coll;

if(cljs.core.truth_(and__3546__auto____3186))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3186;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3187 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
} else
{var or__3548__auto____3188 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3188))
{return or__3548__auto____3188;
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
return _nth__3189.call(this,coll,n);
case  3 :
return _nth__3190.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3192 = coll;

if(cljs.core.truth_(and__3546__auto____3192))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3192;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3193 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{var or__3548__auto____3194 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3194))
{return or__3548__auto____3194;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3195 = coll;

if(cljs.core.truth_(and__3546__auto____3195))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3195;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3196 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{var or__3548__auto____3197 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3197))
{return or__3548__auto____3197;
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
var _lookup__3204 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3198 = o;

if(cljs.core.truth_(and__3546__auto____3198))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3198;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3199 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{var or__3548__auto____3200 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3205 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3201 = o;

if(cljs.core.truth_(and__3546__auto____3201))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3201;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3202 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{var or__3548__auto____3203 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
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
return _lookup__3204.call(this,o,k);
case  3 :
return _lookup__3205.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3207 = coll;

if(cljs.core.truth_(and__3546__auto____3207))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3207;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3208 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{var or__3548__auto____3209 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3210 = coll;

if(cljs.core.truth_(and__3546__auto____3210))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3210;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3211 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3211))
{return or__3548__auto____3211;
} else
{var or__3548__auto____3212 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3212))
{return or__3548__auto____3212;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3213 = coll;

if(cljs.core.truth_(and__3546__auto____3213))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3213;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3214 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3214))
{return or__3548__auto____3214;
} else
{var or__3548__auto____3215 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3215))
{return or__3548__auto____3215;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3216 = coll;

if(cljs.core.truth_(and__3546__auto____3216))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3216;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3217 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3217))
{return or__3548__auto____3217;
} else
{var or__3548__auto____3218 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3218))
{return or__3548__auto____3218;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3219 = coll;

if(cljs.core.truth_(and__3546__auto____3219))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3219;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3220 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3220))
{return or__3548__auto____3220;
} else
{var or__3548__auto____3221 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3221))
{return or__3548__auto____3221;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3222 = coll;

if(cljs.core.truth_(and__3546__auto____3222))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3222;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3223 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3223))
{return or__3548__auto____3223;
} else
{var or__3548__auto____3224 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3224))
{return or__3548__auto____3224;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3225 = coll;

if(cljs.core.truth_(and__3546__auto____3225))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3225;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3226 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3226))
{return or__3548__auto____3226;
} else
{var or__3548__auto____3227 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3227))
{return or__3548__auto____3227;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3228 = o;

if(cljs.core.truth_(and__3546__auto____3228))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3228;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3229 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3229))
{return or__3548__auto____3229;
} else
{var or__3548__auto____3230 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3230))
{return or__3548__auto____3230;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3231 = o;

if(cljs.core.truth_(and__3546__auto____3231))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3231;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3232 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3232))
{return or__3548__auto____3232;
} else
{var or__3548__auto____3233 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3233))
{return or__3548__auto____3233;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3234 = o;

if(cljs.core.truth_(and__3546__auto____3234))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3234;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3235 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3235))
{return or__3548__auto____3235;
} else
{var or__3548__auto____3236 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3236))
{return or__3548__auto____3236;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3237 = o;

if(cljs.core.truth_(and__3546__auto____3237))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3237;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3238 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3238))
{return or__3548__auto____3238;
} else
{var or__3548__auto____3239 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3239))
{return or__3548__auto____3239;
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
var _reduce__3246 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3240 = coll;

if(cljs.core.truth_(and__3546__auto____3240))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3240;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3241 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3241))
{return or__3548__auto____3241;
} else
{var or__3548__auto____3242 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3242))
{return or__3548__auto____3242;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3247 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3243 = coll;

if(cljs.core.truth_(and__3546__auto____3243))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3243;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3244 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3244))
{return or__3548__auto____3244;
} else
{var or__3548__auto____3245 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3245))
{return or__3548__auto____3245;
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
return _reduce__3246.call(this,coll,f);
case  3 :
return _reduce__3247.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3249 = o;

if(cljs.core.truth_(and__3546__auto____3249))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3249;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3250 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3250))
{return or__3548__auto____3250;
} else
{var or__3548__auto____3251 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3251))
{return or__3548__auto____3251;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3252 = o;

if(cljs.core.truth_(and__3546__auto____3252))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3252;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3253 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3253))
{return or__3548__auto____3253;
} else
{var or__3548__auto____3254 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3254))
{return or__3548__auto____3254;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3255 = o;

if(cljs.core.truth_(and__3546__auto____3255))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3255;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3256 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3256))
{return or__3548__auto____3256;
} else
{var or__3548__auto____3257 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3257))
{return or__3548__auto____3257;
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
if(cljs.core.truth_((function (){var and__3546__auto____3258 = o;

if(cljs.core.truth_(and__3546__auto____3258))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3258;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3259 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3259))
{return or__3548__auto____3259;
} else
{var or__3548__auto____3260 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3260))
{return or__3548__auto____3260;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3261 = d;

if(cljs.core.truth_(and__3546__auto____3261))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3261;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3262 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3262))
{return or__3548__auto____3262;
} else
{var or__3548__auto____3263 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3263))
{return or__3548__auto____3263;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3264 = this$;

if(cljs.core.truth_(and__3546__auto____3264))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3264;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3265 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3265))
{return or__3548__auto____3265;
} else
{var or__3548__auto____3266 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3266))
{return or__3548__auto____3266;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3267 = this$;

if(cljs.core.truth_(and__3546__auto____3267))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3267;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3268 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3268))
{return or__3548__auto____3268;
} else
{var or__3548__auto____3269 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3269))
{return or__3548__auto____3269;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3270 = this$;

if(cljs.core.truth_(and__3546__auto____3270))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3270;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3271 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3271))
{return or__3548__auto____3271;
} else
{var or__3548__auto____3272 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3272))
{return or__3548__auto____3272;
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
var G__3273 = null;
var G__3273__3274 = (function (o,k){
return null;
});
var G__3273__3275 = (function (o,k,not_found){
return not_found;
});
G__3273 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3273__3274.call(this,o,k);
case  3 :
return G__3273__3275.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3273;
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
var G__3277 = null;
var G__3277__3278 = (function (_,f){
return f.call(null);
});
var G__3277__3279 = (function (_,f,start){
return start;
});
G__3277 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3277__3278.call(this,_,f);
case  3 :
return G__3277__3279.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3277;
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
var G__3281 = null;
var G__3281__3282 = (function (_,n){
return null;
});
var G__3281__3283 = (function (_,n,not_found){
return not_found;
});
G__3281 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3281__3282.call(this,_,n);
case  3 :
return G__3281__3283.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3281;
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
var ci_reduce__3291 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3285 = cljs.core._nth.call(null,cicoll,0);
var n__3286 = 1;

while(true){
if(cljs.core.truth_((n__3286 < cljs.core._count.call(null,cicoll))))
{{
var G__3295 = f.call(null,val__3285,cljs.core._nth.call(null,cicoll,n__3286));
var G__3296 = (n__3286 + 1);
val__3285 = G__3295;
n__3286 = G__3296;
continue;
}
} else
{return val__3285;
}
break;
}
}
});
var ci_reduce__3292 = (function (cicoll,f,val){
var val__3287 = val;
var n__3288 = 0;

while(true){
if(cljs.core.truth_((n__3288 < cljs.core._count.call(null,cicoll))))
{{
var G__3297 = f.call(null,val__3287,cljs.core._nth.call(null,cicoll,n__3288));
var G__3298 = (n__3288 + 1);
val__3287 = G__3297;
n__3288 = G__3298;
continue;
}
} else
{return val__3287;
}
break;
}
});
var ci_reduce__3293 = (function (cicoll,f,val,idx){
var val__3289 = val;
var n__3290 = idx;

while(true){
if(cljs.core.truth_((n__3290 < cljs.core._count.call(null,cicoll))))
{{
var G__3299 = f.call(null,val__3289,cljs.core._nth.call(null,cicoll,n__3290));
var G__3300 = (n__3290 + 1);
val__3289 = G__3299;
n__3290 = G__3300;
continue;
}
} else
{return val__3289;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3291.call(this,cicoll,f);
case  3 :
return ci_reduce__3292.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3293.call(this,cicoll,f,val,idx);
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
var this__3301 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3314 = null;
var G__3314__3315 = (function (_,f){
var this__3302 = this;
return cljs.core.ci_reduce.call(null,this__3302.a,f,(this__3302.a[this__3302.i]),(this__3302.i + 1));
});
var G__3314__3316 = (function (_,f,start){
var this__3303 = this;
return cljs.core.ci_reduce.call(null,this__3303.a,f,start,this__3303.i);
});
G__3314 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3314__3315.call(this,_,f);
case  3 :
return G__3314__3316.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3314;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3304 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3305 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3318 = null;
var G__3318__3319 = (function (coll,n){
var this__3306 = this;
var i__3307 = (n + this__3306.i);

if(cljs.core.truth_((i__3307 < this__3306.a.length)))
{return (this__3306.a[i__3307]);
} else
{return null;
}
});
var G__3318__3320 = (function (coll,n,not_found){
var this__3308 = this;
var i__3309 = (n + this__3308.i);

if(cljs.core.truth_((i__3309 < this__3308.a.length)))
{return (this__3308.a[i__3309]);
} else
{return not_found;
}
});
G__3318 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3318__3319.call(this,coll,n);
case  3 :
return G__3318__3320.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3318;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3310 = this;
return (this__3310.a.length - this__3310.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3311 = this;
return (this__3311.a[this__3311.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3312 = this;
if(cljs.core.truth_(((this__3312.i + 1) < this__3312.a.length)))
{return (new cljs.core.IndexedSeq(this__3312.a,(this__3312.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3313 = this;
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
var G__3322 = null;
var G__3322__3323 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3322__3324 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3322 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3322__3323.call(this,array,f);
case  3 :
return G__3322__3324.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3322;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3326 = null;
var G__3326__3327 = (function (array,k){
return (array[k]);
});
var G__3326__3328 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3326 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3326__3327.call(this,array,k);
case  3 :
return G__3326__3328.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3326;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3330 = null;
var G__3330__3331 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3330__3332 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3330 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3330__3331.call(this,array,n);
case  3 :
return G__3330__3332.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3330;
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
var temp__3698__auto____3334 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3334))
{var s__3335 = temp__3698__auto____3334;

return cljs.core._first.call(null,s__3335);
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
var G__3336 = cljs.core.next.call(null,s);
s = G__3336;
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
var s__3337 = cljs.core.seq.call(null,x);
var n__3338 = 0;

while(true){
if(cljs.core.truth_(s__3337))
{{
var G__3339 = cljs.core.next.call(null,s__3337);
var G__3340 = (n__3338 + 1);
s__3337 = G__3339;
n__3338 = G__3340;
continue;
}
} else
{return n__3338;
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
var conj__3341 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3342 = (function() { 
var G__3344__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3345 = conj.call(null,coll,x);
var G__3346 = cljs.core.first.call(null,xs);
var G__3347 = cljs.core.next.call(null,xs);
coll = G__3345;
x = G__3346;
xs = G__3347;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3344 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3344__delegate.call(this, coll, x, xs);
};
G__3344.cljs$lang$maxFixedArity = 2;
G__3344.cljs$lang$applyTo = (function (arglist__3348){
var coll = cljs.core.first(arglist__3348);
var x = cljs.core.first(cljs.core.next(arglist__3348));
var xs = cljs.core.rest(cljs.core.next(arglist__3348));
return G__3344__delegate.call(this, coll, x, xs);
});
return G__3344;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3341.call(this,coll,x);
default:
return conj__3342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3342.cljs$lang$applyTo;
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
var nth__3349 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3350 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3349.call(this,coll,n);
case  3 :
return nth__3350.call(this,coll,n,not_found);
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
var get__3352 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3353 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3352.call(this,o,k);
case  3 :
return get__3353.call(this,o,k,not_found);
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
var assoc__3356 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3357 = (function() { 
var G__3359__delegate = function (coll,k,v,kvs){
while(true){
var ret__3355 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3360 = ret__3355;
var G__3361 = cljs.core.first.call(null,kvs);
var G__3362 = cljs.core.second.call(null,kvs);
var G__3363 = cljs.core.nnext.call(null,kvs);
coll = G__3360;
k = G__3361;
v = G__3362;
kvs = G__3363;
continue;
}
} else
{return ret__3355;
}
break;
}
};
var G__3359 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3359__delegate.call(this, coll, k, v, kvs);
};
G__3359.cljs$lang$maxFixedArity = 3;
G__3359.cljs$lang$applyTo = (function (arglist__3364){
var coll = cljs.core.first(arglist__3364);
var k = cljs.core.first(cljs.core.next(arglist__3364));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3364)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3364)));
return G__3359__delegate.call(this, coll, k, v, kvs);
});
return G__3359;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3356.call(this,coll,k,v);
default:
return assoc__3357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3357.cljs$lang$applyTo;
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
var dissoc__3366 = (function (coll){
return coll;
});
var dissoc__3367 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3368 = (function() { 
var G__3370__delegate = function (coll,k,ks){
while(true){
var ret__3365 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3371 = ret__3365;
var G__3372 = cljs.core.first.call(null,ks);
var G__3373 = cljs.core.next.call(null,ks);
coll = G__3371;
k = G__3372;
ks = G__3373;
continue;
}
} else
{return ret__3365;
}
break;
}
};
var G__3370 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3370__delegate.call(this, coll, k, ks);
};
G__3370.cljs$lang$maxFixedArity = 2;
G__3370.cljs$lang$applyTo = (function (arglist__3374){
var coll = cljs.core.first(arglist__3374);
var k = cljs.core.first(cljs.core.next(arglist__3374));
var ks = cljs.core.rest(cljs.core.next(arglist__3374));
return G__3370__delegate.call(this, coll, k, ks);
});
return G__3370;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3366.call(this,coll);
case  2 :
return dissoc__3367.call(this,coll,k);
default:
return dissoc__3368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3368.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____3375 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3376 = x__450__auto____3375;

if(cljs.core.truth_(and__3546__auto____3376))
{var and__3546__auto____3377 = x__450__auto____3375.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3377))
{return cljs.core.not.call(null,x__450__auto____3375.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3377;
}
} else
{return and__3546__auto____3376;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____3375);
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
var disj__3379 = (function (coll){
return coll;
});
var disj__3380 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3381 = (function() { 
var G__3383__delegate = function (coll,k,ks){
while(true){
var ret__3378 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3384 = ret__3378;
var G__3385 = cljs.core.first.call(null,ks);
var G__3386 = cljs.core.next.call(null,ks);
coll = G__3384;
k = G__3385;
ks = G__3386;
continue;
}
} else
{return ret__3378;
}
break;
}
};
var G__3383 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3383__delegate.call(this, coll, k, ks);
};
G__3383.cljs$lang$maxFixedArity = 2;
G__3383.cljs$lang$applyTo = (function (arglist__3387){
var coll = cljs.core.first(arglist__3387);
var k = cljs.core.first(cljs.core.next(arglist__3387));
var ks = cljs.core.rest(cljs.core.next(arglist__3387));
return G__3383__delegate.call(this, coll, k, ks);
});
return G__3383;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3379.call(this,coll);
case  2 :
return disj__3380.call(this,coll,k);
default:
return disj__3381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3381.cljs$lang$applyTo;
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
{var x__450__auto____3388 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3389 = x__450__auto____3388;

if(cljs.core.truth_(and__3546__auto____3389))
{var and__3546__auto____3390 = x__450__auto____3388.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3390))
{return cljs.core.not.call(null,x__450__auto____3388.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3390;
}
} else
{return and__3546__auto____3389;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____3388);
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
{var x__450__auto____3391 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3392 = x__450__auto____3391;

if(cljs.core.truth_(and__3546__auto____3392))
{var and__3546__auto____3393 = x__450__auto____3391.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3393))
{return cljs.core.not.call(null,x__450__auto____3391.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3393;
}
} else
{return and__3546__auto____3392;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____3391);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____3394 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3395 = x__450__auto____3394;

if(cljs.core.truth_(and__3546__auto____3395))
{var and__3546__auto____3396 = x__450__auto____3394.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3396))
{return cljs.core.not.call(null,x__450__auto____3394.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3396;
}
} else
{return and__3546__auto____3395;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____3394);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____3397 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3398 = x__450__auto____3397;

if(cljs.core.truth_(and__3546__auto____3398))
{var and__3546__auto____3399 = x__450__auto____3397.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3399))
{return cljs.core.not.call(null,x__450__auto____3397.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3399;
}
} else
{return and__3546__auto____3398;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____3397);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____3400 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3401 = x__450__auto____3400;

if(cljs.core.truth_(and__3546__auto____3401))
{var and__3546__auto____3402 = x__450__auto____3400.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3402))
{return cljs.core.not.call(null,x__450__auto____3400.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3402;
}
} else
{return and__3546__auto____3401;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____3400);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____3403 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3404 = x__450__auto____3403;

if(cljs.core.truth_(and__3546__auto____3404))
{var and__3546__auto____3405 = x__450__auto____3403.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3405))
{return cljs.core.not.call(null,x__450__auto____3403.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3405;
}
} else
{return and__3546__auto____3404;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____3403);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____3406 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3407 = x__450__auto____3406;

if(cljs.core.truth_(and__3546__auto____3407))
{var and__3546__auto____3408 = x__450__auto____3406.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3408))
{return cljs.core.not.call(null,x__450__auto____3406.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3408;
}
} else
{return and__3546__auto____3407;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____3406);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3409 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3409.push(key);
}));
return keys__3409;
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
{var x__450__auto____3410 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3411 = x__450__auto____3410;

if(cljs.core.truth_(and__3546__auto____3411))
{var and__3546__auto____3412 = x__450__auto____3410.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3412))
{return cljs.core.not.call(null,x__450__auto____3410.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3412;
}
} else
{return and__3546__auto____3411;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____3410);
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
var and__3546__auto____3413 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3413))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3414 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3414))
{return or__3548__auto____3414;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3413;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3415 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3415))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3415;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3416 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3416))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3416;
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
var and__3546__auto____3417 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3417))
{return (n == n.toFixed());
} else
{return and__3546__auto____3417;
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
if(cljs.core.truth_((function (){var and__3546__auto____3418 = coll;

if(cljs.core.truth_(and__3546__auto____3418))
{var and__3546__auto____3419 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3419))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3419;
}
} else
{return and__3546__auto____3418;
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
var distinct_QMARK___3424 = (function (x){
return true;
});
var distinct_QMARK___3425 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3426 = (function() { 
var G__3428__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3420 = cljs.core.set([y,x]);
var xs__3421 = more;

while(true){
var x__3422 = cljs.core.first.call(null,xs__3421);
var etc__3423 = cljs.core.next.call(null,xs__3421);

if(cljs.core.truth_(xs__3421))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3420,x__3422)))
{return false;
} else
{{
var G__3429 = cljs.core.conj.call(null,s__3420,x__3422);
var G__3430 = etc__3423;
s__3420 = G__3429;
xs__3421 = G__3430;
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
var G__3428 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3428__delegate.call(this, x, y, more);
};
G__3428.cljs$lang$maxFixedArity = 2;
G__3428.cljs$lang$applyTo = (function (arglist__3431){
var x = cljs.core.first(arglist__3431);
var y = cljs.core.first(cljs.core.next(arglist__3431));
var more = cljs.core.rest(cljs.core.next(arglist__3431));
return G__3428__delegate.call(this, x, y, more);
});
return G__3428;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3424.call(this,x);
case  2 :
return distinct_QMARK___3425.call(this,x,y);
default:
return distinct_QMARK___3426.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3426.cljs$lang$applyTo;
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
var r__3432 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3432)))
{return r__3432;
} else
{if(cljs.core.truth_(r__3432))
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
var sort__3434 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3435 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3433 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3433,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3433);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3434.call(this,comp);
case  2 :
return sort__3435.call(this,comp,coll);
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
var sort_by__3437 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3438 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3437.call(this,keyfn,comp);
case  3 :
return sort_by__3438.call(this,keyfn,comp,coll);
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
var reduce__3440 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3441 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3440.call(this,f,val);
case  3 :
return reduce__3441.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3447 = (function (f,coll){
var temp__3695__auto____3443 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3443))
{var s__3444 = temp__3695__auto____3443;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3444),cljs.core.next.call(null,s__3444));
} else
{return f.call(null);
}
});
var seq_reduce__3448 = (function (f,val,coll){
var val__3445 = val;
var coll__3446 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3446))
{{
var G__3450 = f.call(null,val__3445,cljs.core.first.call(null,coll__3446));
var G__3451 = cljs.core.next.call(null,coll__3446);
val__3445 = G__3450;
coll__3446 = G__3451;
continue;
}
} else
{return val__3445;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3447.call(this,f,val);
case  3 :
return seq_reduce__3448.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3452 = null;
var G__3452__3453 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3452__3454 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3452 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3452__3453.call(this,coll,f);
case  3 :
return G__3452__3454.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3452;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3456 = (function (){
return 0;
});
var _PLUS___3457 = (function (x){
return x;
});
var _PLUS___3458 = (function (x,y){
return (x + y);
});
var _PLUS___3459 = (function() { 
var G__3461__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3461 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3461__delegate.call(this, x, y, more);
};
G__3461.cljs$lang$maxFixedArity = 2;
G__3461.cljs$lang$applyTo = (function (arglist__3462){
var x = cljs.core.first(arglist__3462);
var y = cljs.core.first(cljs.core.next(arglist__3462));
var more = cljs.core.rest(cljs.core.next(arglist__3462));
return G__3461__delegate.call(this, x, y, more);
});
return G__3461;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3456.call(this);
case  1 :
return _PLUS___3457.call(this,x);
case  2 :
return _PLUS___3458.call(this,x,y);
default:
return _PLUS___3459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3459.cljs$lang$applyTo;
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
var ___3463 = (function (x){
return (- x);
});
var ___3464 = (function (x,y){
return (x - y);
});
var ___3465 = (function() { 
var G__3467__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3467 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3467__delegate.call(this, x, y, more);
};
G__3467.cljs$lang$maxFixedArity = 2;
G__3467.cljs$lang$applyTo = (function (arglist__3468){
var x = cljs.core.first(arglist__3468);
var y = cljs.core.first(cljs.core.next(arglist__3468));
var more = cljs.core.rest(cljs.core.next(arglist__3468));
return G__3467__delegate.call(this, x, y, more);
});
return G__3467;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3463.call(this,x);
case  2 :
return ___3464.call(this,x,y);
default:
return ___3465.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3465.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3469 = (function (){
return 1;
});
var _STAR___3470 = (function (x){
return x;
});
var _STAR___3471 = (function (x,y){
return (x * y);
});
var _STAR___3472 = (function() { 
var G__3474__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3474 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3474__delegate.call(this, x, y, more);
};
G__3474.cljs$lang$maxFixedArity = 2;
G__3474.cljs$lang$applyTo = (function (arglist__3475){
var x = cljs.core.first(arglist__3475);
var y = cljs.core.first(cljs.core.next(arglist__3475));
var more = cljs.core.rest(cljs.core.next(arglist__3475));
return G__3474__delegate.call(this, x, y, more);
});
return G__3474;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3469.call(this);
case  1 :
return _STAR___3470.call(this,x);
case  2 :
return _STAR___3471.call(this,x,y);
default:
return _STAR___3472.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3472.cljs$lang$applyTo;
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
var _SLASH___3476 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3477 = (function (x,y){
return (x / y);
});
var _SLASH___3478 = (function() { 
var G__3480__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3480 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3480__delegate.call(this, x, y, more);
};
G__3480.cljs$lang$maxFixedArity = 2;
G__3480.cljs$lang$applyTo = (function (arglist__3481){
var x = cljs.core.first(arglist__3481);
var y = cljs.core.first(cljs.core.next(arglist__3481));
var more = cljs.core.rest(cljs.core.next(arglist__3481));
return G__3480__delegate.call(this, x, y, more);
});
return G__3480;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3476.call(this,x);
case  2 :
return _SLASH___3477.call(this,x,y);
default:
return _SLASH___3478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3478.cljs$lang$applyTo;
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
var _LT___3482 = (function (x){
return true;
});
var _LT___3483 = (function (x,y){
return (x < y);
});
var _LT___3484 = (function() { 
var G__3486__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3487 = y;
var G__3488 = cljs.core.first.call(null,more);
var G__3489 = cljs.core.next.call(null,more);
x = G__3487;
y = G__3488;
more = G__3489;
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
var G__3486 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3486__delegate.call(this, x, y, more);
};
G__3486.cljs$lang$maxFixedArity = 2;
G__3486.cljs$lang$applyTo = (function (arglist__3490){
var x = cljs.core.first(arglist__3490);
var y = cljs.core.first(cljs.core.next(arglist__3490));
var more = cljs.core.rest(cljs.core.next(arglist__3490));
return G__3486__delegate.call(this, x, y, more);
});
return G__3486;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3482.call(this,x);
case  2 :
return _LT___3483.call(this,x,y);
default:
return _LT___3484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3484.cljs$lang$applyTo;
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
var _LT__EQ___3491 = (function (x){
return true;
});
var _LT__EQ___3492 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3493 = (function() { 
var G__3495__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3496 = y;
var G__3497 = cljs.core.first.call(null,more);
var G__3498 = cljs.core.next.call(null,more);
x = G__3496;
y = G__3497;
more = G__3498;
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
var G__3495 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3495__delegate.call(this, x, y, more);
};
G__3495.cljs$lang$maxFixedArity = 2;
G__3495.cljs$lang$applyTo = (function (arglist__3499){
var x = cljs.core.first(arglist__3499);
var y = cljs.core.first(cljs.core.next(arglist__3499));
var more = cljs.core.rest(cljs.core.next(arglist__3499));
return G__3495__delegate.call(this, x, y, more);
});
return G__3495;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3491.call(this,x);
case  2 :
return _LT__EQ___3492.call(this,x,y);
default:
return _LT__EQ___3493.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3493.cljs$lang$applyTo;
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
var _GT___3500 = (function (x){
return true;
});
var _GT___3501 = (function (x,y){
return (x > y);
});
var _GT___3502 = (function() { 
var G__3504__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3505 = y;
var G__3506 = cljs.core.first.call(null,more);
var G__3507 = cljs.core.next.call(null,more);
x = G__3505;
y = G__3506;
more = G__3507;
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
var G__3504 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3504__delegate.call(this, x, y, more);
};
G__3504.cljs$lang$maxFixedArity = 2;
G__3504.cljs$lang$applyTo = (function (arglist__3508){
var x = cljs.core.first(arglist__3508);
var y = cljs.core.first(cljs.core.next(arglist__3508));
var more = cljs.core.rest(cljs.core.next(arglist__3508));
return G__3504__delegate.call(this, x, y, more);
});
return G__3504;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3500.call(this,x);
case  2 :
return _GT___3501.call(this,x,y);
default:
return _GT___3502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3502.cljs$lang$applyTo;
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
var _GT__EQ___3509 = (function (x){
return true;
});
var _GT__EQ___3510 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3511 = (function() { 
var G__3513__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3514 = y;
var G__3515 = cljs.core.first.call(null,more);
var G__3516 = cljs.core.next.call(null,more);
x = G__3514;
y = G__3515;
more = G__3516;
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
var G__3513 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3513__delegate.call(this, x, y, more);
};
G__3513.cljs$lang$maxFixedArity = 2;
G__3513.cljs$lang$applyTo = (function (arglist__3517){
var x = cljs.core.first(arglist__3517);
var y = cljs.core.first(cljs.core.next(arglist__3517));
var more = cljs.core.rest(cljs.core.next(arglist__3517));
return G__3513__delegate.call(this, x, y, more);
});
return G__3513;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3509.call(this,x);
case  2 :
return _GT__EQ___3510.call(this,x,y);
default:
return _GT__EQ___3511.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3511.cljs$lang$applyTo;
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
var max__3518 = (function (x){
return x;
});
var max__3519 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3520 = (function() { 
var G__3522__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3522 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3522__delegate.call(this, x, y, more);
};
G__3522.cljs$lang$maxFixedArity = 2;
G__3522.cljs$lang$applyTo = (function (arglist__3523){
var x = cljs.core.first(arglist__3523);
var y = cljs.core.first(cljs.core.next(arglist__3523));
var more = cljs.core.rest(cljs.core.next(arglist__3523));
return G__3522__delegate.call(this, x, y, more);
});
return G__3522;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3518.call(this,x);
case  2 :
return max__3519.call(this,x,y);
default:
return max__3520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3520.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3524 = (function (x){
return x;
});
var min__3525 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3526 = (function() { 
var G__3528__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3528 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3528__delegate.call(this, x, y, more);
};
G__3528.cljs$lang$maxFixedArity = 2;
G__3528.cljs$lang$applyTo = (function (arglist__3529){
var x = cljs.core.first(arglist__3529);
var y = cljs.core.first(cljs.core.next(arglist__3529));
var more = cljs.core.rest(cljs.core.next(arglist__3529));
return G__3528__delegate.call(this, x, y, more);
});
return G__3528;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3524.call(this,x);
case  2 :
return min__3525.call(this,x,y);
default:
return min__3526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3526.cljs$lang$applyTo;
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
var rem__3530 = (n % d);

return cljs.core.fix.call(null,((n - rem__3530) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3531 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3531));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3532 = (function (){
return Math.random.call(null);
});
var rand__3533 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3532.call(this);
case  1 :
return rand__3533.call(this,n);
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
var _EQ__EQ___3535 = (function (x){
return true;
});
var _EQ__EQ___3536 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3537 = (function() { 
var G__3539__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3540 = y;
var G__3541 = cljs.core.first.call(null,more);
var G__3542 = cljs.core.next.call(null,more);
x = G__3540;
y = G__3541;
more = G__3542;
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
var G__3539 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3539__delegate.call(this, x, y, more);
};
G__3539.cljs$lang$maxFixedArity = 2;
G__3539.cljs$lang$applyTo = (function (arglist__3543){
var x = cljs.core.first(arglist__3543);
var y = cljs.core.first(cljs.core.next(arglist__3543));
var more = cljs.core.rest(cljs.core.next(arglist__3543));
return G__3539__delegate.call(this, x, y, more);
});
return G__3539;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3535.call(this,x);
case  2 :
return _EQ__EQ___3536.call(this,x,y);
default:
return _EQ__EQ___3537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3537.cljs$lang$applyTo;
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
var n__3544 = n;
var xs__3545 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3546 = xs__3545;

if(cljs.core.truth_(and__3546__auto____3546))
{return (n__3544 > 0);
} else
{return and__3546__auto____3546;
}
})()))
{{
var G__3547 = (n__3544 - 1);
var G__3548 = cljs.core.next.call(null,xs__3545);
n__3544 = G__3547;
xs__3545 = G__3548;
continue;
}
} else
{return xs__3545;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3553 = null;
var G__3553__3554 = (function (coll,n){
var temp__3695__auto____3549 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3549))
{var xs__3550 = temp__3695__auto____3549;

return cljs.core.first.call(null,xs__3550);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3553__3555 = (function (coll,n,not_found){
var temp__3695__auto____3551 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3551))
{var xs__3552 = temp__3695__auto____3551;

return cljs.core.first.call(null,xs__3552);
} else
{return not_found;
}
});
G__3553 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3553__3554.call(this,coll,n);
case  3 :
return G__3553__3555.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3553;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3557 = (function (){
return "";
});
var str_STAR___3558 = (function (x){
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
var str_STAR___3559 = (function() { 
var G__3561__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3562 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3563 = cljs.core.next.call(null,more);
sb = G__3562;
more = G__3563;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3561 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3561__delegate.call(this, x, ys);
};
G__3561.cljs$lang$maxFixedArity = 1;
G__3561.cljs$lang$applyTo = (function (arglist__3564){
var x = cljs.core.first(arglist__3564);
var ys = cljs.core.rest(arglist__3564);
return G__3561__delegate.call(this, x, ys);
});
return G__3561;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3557.call(this);
case  1 :
return str_STAR___3558.call(this,x);
default:
return str_STAR___3559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3559.cljs$lang$applyTo;
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
var str__3565 = (function (){
return "";
});
var str__3566 = (function (x){
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
var str__3567 = (function() { 
var G__3569__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3569 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3569__delegate.call(this, x, ys);
};
G__3569.cljs$lang$maxFixedArity = 1;
G__3569.cljs$lang$applyTo = (function (arglist__3570){
var x = cljs.core.first(arglist__3570);
var ys = cljs.core.rest(arglist__3570);
return G__3569__delegate.call(this, x, ys);
});
return G__3569;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3565.call(this);
case  1 :
return str__3566.call(this,x);
default:
return str__3567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3567.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3571 = (function (s,start){
return s.substring(start);
});
var subs__3572 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3571.call(this,s,start);
case  3 :
return subs__3572.call(this,s,start,end);
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
var symbol__3574 = (function (name){
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
var symbol__3575 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3574.call(this,ns);
case  2 :
return symbol__3575.call(this,ns,name);
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
var keyword__3577 = (function (name){
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
var keyword__3578 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3577.call(this,ns);
case  2 :
return keyword__3578.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3580 = cljs.core.seq.call(null,x);
var ys__3581 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3580 === null)))
{return (ys__3581 === null);
} else
{if(cljs.core.truth_((ys__3581 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3580),cljs.core.first.call(null,ys__3581))))
{{
var G__3582 = cljs.core.next.call(null,xs__3580);
var G__3583 = cljs.core.next.call(null,ys__3581);
xs__3580 = G__3582;
ys__3581 = G__3583;
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
return cljs.core.reduce.call(null,(function (p1__3584_SHARP_,p2__3585_SHARP_){
return cljs.core.hash_combine.call(null,p1__3584_SHARP_,cljs.core.hash.call(null,p2__3585_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3586__3587 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3586__3587))
{var G__3589__3591 = cljs.core.first.call(null,G__3586__3587);
var vec__3590__3592 = G__3589__3591;
var key_name__3593 = cljs.core.nth.call(null,vec__3590__3592,0,null);
var f__3594 = cljs.core.nth.call(null,vec__3590__3592,1,null);
var G__3586__3595 = G__3586__3587;

var G__3589__3596 = G__3589__3591;
var G__3586__3597 = G__3586__3595;

while(true){
var vec__3598__3599 = G__3589__3596;
var key_name__3600 = cljs.core.nth.call(null,vec__3598__3599,0,null);
var f__3601 = cljs.core.nth.call(null,vec__3598__3599,1,null);
var G__3586__3602 = G__3586__3597;

var str_name__3603 = cljs.core.name.call(null,key_name__3600);

obj[str_name__3603] = f__3601;
var temp__3698__auto____3604 = cljs.core.next.call(null,G__3586__3602);

if(cljs.core.truth_(temp__3698__auto____3604))
{var G__3586__3605 = temp__3698__auto____3604;

{
var G__3606 = cljs.core.first.call(null,G__3586__3605);
var G__3607 = G__3586__3605;
G__3589__3596 = G__3606;
G__3586__3597 = G__3607;
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
var this__3608 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3609 = this;
return (new cljs.core.List(this__3609.meta,o,coll,(this__3609.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3610 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3611 = this;
return this__3611.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3612 = this;
return this__3612.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3613 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3614 = this;
return this__3614.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3615 = this;
return this__3615.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3616 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3617 = this;
return (new cljs.core.List(meta,this__3617.first,this__3617.rest,this__3617.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3618 = this;
return this__3618.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3619 = this;
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
var this__3620 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3621 = this;
return (new cljs.core.List(this__3621.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3622 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3623 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3624 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3625 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3626 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3627 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3628 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3629 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3630 = this;
return this__3630.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3631 = this;
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
list.cljs$lang$applyTo = (function (arglist__3632){
var items = cljs.core.seq( arglist__3632 );;
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
var this__3633 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3634 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3635 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3636 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3636.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3637 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3638 = this;
return this__3638.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3639 = this;
if(cljs.core.truth_((this__3639.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3639.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3640 = this;
return this__3640.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3641 = this;
return (new cljs.core.Cons(meta,this__3641.first,this__3641.rest));
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
var G__3642 = null;
var G__3642__3643 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3642__3644 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3642 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3642__3643.call(this,string,f);
case  3 :
return G__3642__3644.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3642;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3646 = null;
var G__3646__3647 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3646__3648 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3646 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3646__3647.call(this,string,k);
case  3 :
return G__3646__3648.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3646;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3650 = null;
var G__3650__3651 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3650__3652 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3650 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3650__3651.call(this,string,n);
case  3 :
return G__3650__3652.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3650;
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
var G__3660 = null;
var G__3660__3661 = (function (tsym3654,coll){
var tsym3654__3656 = this;

var this$__3657 = tsym3654__3656;

return cljs.core.get.call(null,coll,this$__3657.toString());
});
var G__3660__3662 = (function (tsym3655,coll,not_found){
var tsym3655__3658 = this;

var this$__3659 = tsym3655__3658;

return cljs.core.get.call(null,coll,this$__3659.toString(),not_found);
});
G__3660 = function(tsym3655,coll,not_found){
switch(arguments.length){
case  2 :
return G__3660__3661.call(this,tsym3655,coll);
case  3 :
return G__3660__3662.call(this,tsym3655,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3660;
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
var x__3664 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3664;
} else
{lazy_seq.x = x__3664.call(null);
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
var this__3665 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3666 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3667 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3668 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3668.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3669 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3670 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3671 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3672 = this;
return this__3672.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3673 = this;
return (new cljs.core.LazySeq(meta,this__3673.realized,this__3673.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3674 = cljs.core.array.call(null);

var s__3675 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3675)))
{ary__3674.push(cljs.core.first.call(null,s__3675));
{
var G__3676 = cljs.core.next.call(null,s__3675);
s__3675 = G__3676;
continue;
}
} else
{return ary__3674;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3677 = s;
var i__3678 = n;
var sum__3679 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3680 = (i__3678 > 0);

if(cljs.core.truth_(and__3546__auto____3680))
{return cljs.core.seq.call(null,s__3677);
} else
{return and__3546__auto____3680;
}
})()))
{{
var G__3681 = cljs.core.next.call(null,s__3677);
var G__3682 = (i__3678 - 1);
var G__3683 = (sum__3679 + 1);
s__3677 = G__3681;
i__3678 = G__3682;
sum__3679 = G__3683;
continue;
}
} else
{return sum__3679;
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
var concat__3687 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3688 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3689 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3684 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3684))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3684),concat.call(null,cljs.core.rest.call(null,s__3684),y));
} else
{return y;
}
})));
});
var concat__3690 = (function() { 
var G__3692__delegate = function (x,y,zs){
var cat__3686 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3685 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3685))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3685),cat.call(null,cljs.core.rest.call(null,xys__3685),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3686.call(null,concat.call(null,x,y),zs);
};
var G__3692 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3692__delegate.call(this, x, y, zs);
};
G__3692.cljs$lang$maxFixedArity = 2;
G__3692.cljs$lang$applyTo = (function (arglist__3693){
var x = cljs.core.first(arglist__3693);
var y = cljs.core.first(cljs.core.next(arglist__3693));
var zs = cljs.core.rest(cljs.core.next(arglist__3693));
return G__3692__delegate.call(this, x, y, zs);
});
return G__3692;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3687.call(this);
case  1 :
return concat__3688.call(this,x);
case  2 :
return concat__3689.call(this,x,y);
default:
return concat__3690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3690.cljs$lang$applyTo;
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
var list_STAR___3694 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3695 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3696 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3697 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3698 = (function() { 
var G__3700__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3700 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3700__delegate.call(this, a, b, c, d, more);
};
G__3700.cljs$lang$maxFixedArity = 4;
G__3700.cljs$lang$applyTo = (function (arglist__3701){
var a = cljs.core.first(arglist__3701);
var b = cljs.core.first(cljs.core.next(arglist__3701));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3701)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3701))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3701))));
return G__3700__delegate.call(this, a, b, c, d, more);
});
return G__3700;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3694.call(this,a);
case  2 :
return list_STAR___3695.call(this,a,b);
case  3 :
return list_STAR___3696.call(this,a,b,c);
case  4 :
return list_STAR___3697.call(this,a,b,c,d);
default:
return list_STAR___3698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3698.cljs$lang$applyTo;
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
var apply__3711 = (function (f,args){
var fixed_arity__3702 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3702 + 1)) <= fixed_arity__3702)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3712 = (function (f,x,args){
var arglist__3703 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3704 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3703,fixed_arity__3704) <= fixed_arity__3704)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3703));
} else
{return f.cljs$lang$applyTo(arglist__3703);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3703));
}
});
var apply__3713 = (function (f,x,y,args){
var arglist__3705 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3706 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3705,fixed_arity__3706) <= fixed_arity__3706)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3705));
} else
{return f.cljs$lang$applyTo(arglist__3705);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3705));
}
});
var apply__3714 = (function (f,x,y,z,args){
var arglist__3707 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3708 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3707,fixed_arity__3708) <= fixed_arity__3708)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3707));
} else
{return f.cljs$lang$applyTo(arglist__3707);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3707));
}
});
var apply__3715 = (function() { 
var G__3717__delegate = function (f,a,b,c,d,args){
var arglist__3709 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3710 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3709,fixed_arity__3710) <= fixed_arity__3710)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3709));
} else
{return f.cljs$lang$applyTo(arglist__3709);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3709));
}
};
var G__3717 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3717__delegate.call(this, f, a, b, c, d, args);
};
G__3717.cljs$lang$maxFixedArity = 5;
G__3717.cljs$lang$applyTo = (function (arglist__3718){
var f = cljs.core.first(arglist__3718);
var a = cljs.core.first(cljs.core.next(arglist__3718));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3718)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3718))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3718)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3718)))));
return G__3717__delegate.call(this, f, a, b, c, d, args);
});
return G__3717;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3711.call(this,f,a);
case  3 :
return apply__3712.call(this,f,a,b);
case  4 :
return apply__3713.call(this,f,a,b,c);
case  5 :
return apply__3714.call(this,f,a,b,c,d);
default:
return apply__3715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3715.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3719){
var obj = cljs.core.first(arglist__3719);
var f = cljs.core.first(cljs.core.next(arglist__3719));
var args = cljs.core.rest(cljs.core.next(arglist__3719));
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
var not_EQ___3720 = (function (x){
return false;
});
var not_EQ___3721 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3722 = (function() { 
var G__3724__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3724 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3724__delegate.call(this, x, y, more);
};
G__3724.cljs$lang$maxFixedArity = 2;
G__3724.cljs$lang$applyTo = (function (arglist__3725){
var x = cljs.core.first(arglist__3725);
var y = cljs.core.first(cljs.core.next(arglist__3725));
var more = cljs.core.rest(cljs.core.next(arglist__3725));
return G__3724__delegate.call(this, x, y, more);
});
return G__3724;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3720.call(this,x);
case  2 :
return not_EQ___3721.call(this,x,y);
default:
return not_EQ___3722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3722.cljs$lang$applyTo;
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
var G__3726 = pred;
var G__3727 = cljs.core.next.call(null,coll);
pred = G__3726;
coll = G__3727;
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
{var or__3548__auto____3728 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3728))
{return or__3548__auto____3728;
} else
{{
var G__3729 = pred;
var G__3730 = cljs.core.next.call(null,coll);
pred = G__3729;
coll = G__3730;
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
var G__3731 = null;
var G__3731__3732 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3731__3733 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3731__3734 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3731__3735 = (function() { 
var G__3737__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3737 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3737__delegate.call(this, x, y, zs);
};
G__3737.cljs$lang$maxFixedArity = 2;
G__3737.cljs$lang$applyTo = (function (arglist__3738){
var x = cljs.core.first(arglist__3738);
var y = cljs.core.first(cljs.core.next(arglist__3738));
var zs = cljs.core.rest(cljs.core.next(arglist__3738));
return G__3737__delegate.call(this, x, y, zs);
});
return G__3737;
})()
;
G__3731 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3731__3732.call(this);
case  1 :
return G__3731__3733.call(this,x);
case  2 :
return G__3731__3734.call(this,x,y);
default:
return G__3731__3735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3731.cljs$lang$maxFixedArity = 2;
G__3731.cljs$lang$applyTo = G__3731__3735.cljs$lang$applyTo;
return G__3731;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3739__delegate = function (args){
return x;
};
var G__3739 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3739__delegate.call(this, args);
};
G__3739.cljs$lang$maxFixedArity = 0;
G__3739.cljs$lang$applyTo = (function (arglist__3740){
var args = cljs.core.seq( arglist__3740 );;
return G__3739__delegate.call(this, args);
});
return G__3739;
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
var comp__3744 = (function (){
return cljs.core.identity;
});
var comp__3745 = (function (f){
return f;
});
var comp__3746 = (function (f,g){
return (function() {
var G__3750 = null;
var G__3750__3751 = (function (){
return f.call(null,g.call(null));
});
var G__3750__3752 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3750__3753 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3750__3754 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3750__3755 = (function() { 
var G__3757__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3757 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3757__delegate.call(this, x, y, z, args);
};
G__3757.cljs$lang$maxFixedArity = 3;
G__3757.cljs$lang$applyTo = (function (arglist__3758){
var x = cljs.core.first(arglist__3758);
var y = cljs.core.first(cljs.core.next(arglist__3758));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3758)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3758)));
return G__3757__delegate.call(this, x, y, z, args);
});
return G__3757;
})()
;
G__3750 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3750__3751.call(this);
case  1 :
return G__3750__3752.call(this,x);
case  2 :
return G__3750__3753.call(this,x,y);
case  3 :
return G__3750__3754.call(this,x,y,z);
default:
return G__3750__3755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3750.cljs$lang$maxFixedArity = 3;
G__3750.cljs$lang$applyTo = G__3750__3755.cljs$lang$applyTo;
return G__3750;
})()
});
var comp__3747 = (function (f,g,h){
return (function() {
var G__3759 = null;
var G__3759__3760 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3759__3761 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3759__3762 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3759__3763 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3759__3764 = (function() { 
var G__3766__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3766 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3766__delegate.call(this, x, y, z, args);
};
G__3766.cljs$lang$maxFixedArity = 3;
G__3766.cljs$lang$applyTo = (function (arglist__3767){
var x = cljs.core.first(arglist__3767);
var y = cljs.core.first(cljs.core.next(arglist__3767));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3767)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3767)));
return G__3766__delegate.call(this, x, y, z, args);
});
return G__3766;
})()
;
G__3759 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3759__3760.call(this);
case  1 :
return G__3759__3761.call(this,x);
case  2 :
return G__3759__3762.call(this,x,y);
case  3 :
return G__3759__3763.call(this,x,y,z);
default:
return G__3759__3764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3759.cljs$lang$maxFixedArity = 3;
G__3759.cljs$lang$applyTo = G__3759__3764.cljs$lang$applyTo;
return G__3759;
})()
});
var comp__3748 = (function() { 
var G__3768__delegate = function (f1,f2,f3,fs){
var fs__3741 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3769__delegate = function (args){
var ret__3742 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3741),args);
var fs__3743 = cljs.core.next.call(null,fs__3741);

while(true){
if(cljs.core.truth_(fs__3743))
{{
var G__3770 = cljs.core.first.call(null,fs__3743).call(null,ret__3742);
var G__3771 = cljs.core.next.call(null,fs__3743);
ret__3742 = G__3770;
fs__3743 = G__3771;
continue;
}
} else
{return ret__3742;
}
break;
}
};
var G__3769 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3769__delegate.call(this, args);
};
G__3769.cljs$lang$maxFixedArity = 0;
G__3769.cljs$lang$applyTo = (function (arglist__3772){
var args = cljs.core.seq( arglist__3772 );;
return G__3769__delegate.call(this, args);
});
return G__3769;
})()
;
};
var G__3768 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3768__delegate.call(this, f1, f2, f3, fs);
};
G__3768.cljs$lang$maxFixedArity = 3;
G__3768.cljs$lang$applyTo = (function (arglist__3773){
var f1 = cljs.core.first(arglist__3773);
var f2 = cljs.core.first(cljs.core.next(arglist__3773));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3773)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3773)));
return G__3768__delegate.call(this, f1, f2, f3, fs);
});
return G__3768;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3744.call(this);
case  1 :
return comp__3745.call(this,f1);
case  2 :
return comp__3746.call(this,f1,f2);
case  3 :
return comp__3747.call(this,f1,f2,f3);
default:
return comp__3748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3748.cljs$lang$applyTo;
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
var partial__3774 = (function (f,arg1){
return (function() { 
var G__3779__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3779 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3779__delegate.call(this, args);
};
G__3779.cljs$lang$maxFixedArity = 0;
G__3779.cljs$lang$applyTo = (function (arglist__3780){
var args = cljs.core.seq( arglist__3780 );;
return G__3779__delegate.call(this, args);
});
return G__3779;
})()
;
});
var partial__3775 = (function (f,arg1,arg2){
return (function() { 
var G__3781__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3781 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3781__delegate.call(this, args);
};
G__3781.cljs$lang$maxFixedArity = 0;
G__3781.cljs$lang$applyTo = (function (arglist__3782){
var args = cljs.core.seq( arglist__3782 );;
return G__3781__delegate.call(this, args);
});
return G__3781;
})()
;
});
var partial__3776 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3783__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3783 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3783__delegate.call(this, args);
};
G__3783.cljs$lang$maxFixedArity = 0;
G__3783.cljs$lang$applyTo = (function (arglist__3784){
var args = cljs.core.seq( arglist__3784 );;
return G__3783__delegate.call(this, args);
});
return G__3783;
})()
;
});
var partial__3777 = (function() { 
var G__3785__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3786__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3786 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3786__delegate.call(this, args);
};
G__3786.cljs$lang$maxFixedArity = 0;
G__3786.cljs$lang$applyTo = (function (arglist__3787){
var args = cljs.core.seq( arglist__3787 );;
return G__3786__delegate.call(this, args);
});
return G__3786;
})()
;
};
var G__3785 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3785__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3785.cljs$lang$maxFixedArity = 4;
G__3785.cljs$lang$applyTo = (function (arglist__3788){
var f = cljs.core.first(arglist__3788);
var arg1 = cljs.core.first(cljs.core.next(arglist__3788));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3788)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3788))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3788))));
return G__3785__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3785;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3774.call(this,f,arg1);
case  3 :
return partial__3775.call(this,f,arg1,arg2);
case  4 :
return partial__3776.call(this,f,arg1,arg2,arg3);
default:
return partial__3777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3777.cljs$lang$applyTo;
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
var fnil__3789 = (function (f,x){
return (function() {
var G__3793 = null;
var G__3793__3794 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3793__3795 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3793__3796 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3793__3797 = (function() { 
var G__3799__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3799 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3799__delegate.call(this, a, b, c, ds);
};
G__3799.cljs$lang$maxFixedArity = 3;
G__3799.cljs$lang$applyTo = (function (arglist__3800){
var a = cljs.core.first(arglist__3800);
var b = cljs.core.first(cljs.core.next(arglist__3800));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3800)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3800)));
return G__3799__delegate.call(this, a, b, c, ds);
});
return G__3799;
})()
;
G__3793 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3793__3794.call(this,a);
case  2 :
return G__3793__3795.call(this,a,b);
case  3 :
return G__3793__3796.call(this,a,b,c);
default:
return G__3793__3797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3793.cljs$lang$maxFixedArity = 3;
G__3793.cljs$lang$applyTo = G__3793__3797.cljs$lang$applyTo;
return G__3793;
})()
});
var fnil__3790 = (function (f,x,y){
return (function() {
var G__3801 = null;
var G__3801__3802 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3801__3803 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3801__3804 = (function() { 
var G__3806__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3806 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3806__delegate.call(this, a, b, c, ds);
};
G__3806.cljs$lang$maxFixedArity = 3;
G__3806.cljs$lang$applyTo = (function (arglist__3807){
var a = cljs.core.first(arglist__3807);
var b = cljs.core.first(cljs.core.next(arglist__3807));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3807)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3807)));
return G__3806__delegate.call(this, a, b, c, ds);
});
return G__3806;
})()
;
G__3801 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3801__3802.call(this,a,b);
case  3 :
return G__3801__3803.call(this,a,b,c);
default:
return G__3801__3804.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3801.cljs$lang$maxFixedArity = 3;
G__3801.cljs$lang$applyTo = G__3801__3804.cljs$lang$applyTo;
return G__3801;
})()
});
var fnil__3791 = (function (f,x,y,z){
return (function() {
var G__3808 = null;
var G__3808__3809 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3808__3810 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3808__3811 = (function() { 
var G__3813__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3813 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3813__delegate.call(this, a, b, c, ds);
};
G__3813.cljs$lang$maxFixedArity = 3;
G__3813.cljs$lang$applyTo = (function (arglist__3814){
var a = cljs.core.first(arglist__3814);
var b = cljs.core.first(cljs.core.next(arglist__3814));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3814)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3814)));
return G__3813__delegate.call(this, a, b, c, ds);
});
return G__3813;
})()
;
G__3808 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3808__3809.call(this,a,b);
case  3 :
return G__3808__3810.call(this,a,b,c);
default:
return G__3808__3811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3808.cljs$lang$maxFixedArity = 3;
G__3808.cljs$lang$applyTo = G__3808__3811.cljs$lang$applyTo;
return G__3808;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3789.call(this,f,x);
case  3 :
return fnil__3790.call(this,f,x,y);
case  4 :
return fnil__3791.call(this,f,x,y,z);
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
var mapi__3817 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3815 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3815))
{var s__3816 = temp__3698__auto____3815;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3816)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3816)));
} else
{return null;
}
})));
});

return mapi__3817.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3818 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3818))
{var s__3819 = temp__3698__auto____3818;

var x__3820 = f.call(null,cljs.core.first.call(null,s__3819));

if(cljs.core.truth_((x__3820 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3819));
} else
{return cljs.core.cons.call(null,x__3820,keep.call(null,f,cljs.core.rest.call(null,s__3819)));
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
var keepi__3830 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3827 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3827))
{var s__3828 = temp__3698__auto____3827;

var x__3829 = f.call(null,idx,cljs.core.first.call(null,s__3828));

if(cljs.core.truth_((x__3829 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3828));
} else
{return cljs.core.cons.call(null,x__3829,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3828)));
}
} else
{return null;
}
})));
});

return keepi__3830.call(null,0,coll);
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
var every_pred__3875 = (function (p){
return (function() {
var ep1 = null;
var ep1__3880 = (function (){
return true;
});
var ep1__3881 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3882 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3837 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3837))
{return p.call(null,y);
} else
{return and__3546__auto____3837;
}
})());
});
var ep1__3883 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3838 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3838))
{var and__3546__auto____3839 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3839))
{return p.call(null,z);
} else
{return and__3546__auto____3839;
}
} else
{return and__3546__auto____3838;
}
})());
});
var ep1__3884 = (function() { 
var G__3886__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3840 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3840))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3840;
}
})());
};
var G__3886 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3886__delegate.call(this, x, y, z, args);
};
G__3886.cljs$lang$maxFixedArity = 3;
G__3886.cljs$lang$applyTo = (function (arglist__3887){
var x = cljs.core.first(arglist__3887);
var y = cljs.core.first(cljs.core.next(arglist__3887));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3887)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3887)));
return G__3886__delegate.call(this, x, y, z, args);
});
return G__3886;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3880.call(this);
case  1 :
return ep1__3881.call(this,x);
case  2 :
return ep1__3882.call(this,x,y);
case  3 :
return ep1__3883.call(this,x,y,z);
default:
return ep1__3884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3884.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3876 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3888 = (function (){
return true;
});
var ep2__3889 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3841 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3841))
{return p2.call(null,x);
} else
{return and__3546__auto____3841;
}
})());
});
var ep2__3890 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3842 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3842))
{var and__3546__auto____3843 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3843))
{var and__3546__auto____3844 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3844))
{return p2.call(null,y);
} else
{return and__3546__auto____3844;
}
} else
{return and__3546__auto____3843;
}
} else
{return and__3546__auto____3842;
}
})());
});
var ep2__3891 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3845 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3845))
{var and__3546__auto____3846 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3846))
{var and__3546__auto____3847 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3847))
{var and__3546__auto____3848 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3848))
{var and__3546__auto____3849 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3849))
{return p2.call(null,z);
} else
{return and__3546__auto____3849;
}
} else
{return and__3546__auto____3848;
}
} else
{return and__3546__auto____3847;
}
} else
{return and__3546__auto____3846;
}
} else
{return and__3546__auto____3845;
}
})());
});
var ep2__3892 = (function() { 
var G__3894__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3850 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3850))
{return cljs.core.every_QMARK_.call(null,(function (p1__3821_SHARP_){
var and__3546__auto____3851 = p1.call(null,p1__3821_SHARP_);

if(cljs.core.truth_(and__3546__auto____3851))
{return p2.call(null,p1__3821_SHARP_);
} else
{return and__3546__auto____3851;
}
}),args);
} else
{return and__3546__auto____3850;
}
})());
};
var G__3894 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3894__delegate.call(this, x, y, z, args);
};
G__3894.cljs$lang$maxFixedArity = 3;
G__3894.cljs$lang$applyTo = (function (arglist__3895){
var x = cljs.core.first(arglist__3895);
var y = cljs.core.first(cljs.core.next(arglist__3895));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3895)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3895)));
return G__3894__delegate.call(this, x, y, z, args);
});
return G__3894;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3888.call(this);
case  1 :
return ep2__3889.call(this,x);
case  2 :
return ep2__3890.call(this,x,y);
case  3 :
return ep2__3891.call(this,x,y,z);
default:
return ep2__3892.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3892.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3877 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3896 = (function (){
return true;
});
var ep3__3897 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3852 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3852))
{var and__3546__auto____3853 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3853))
{return p3.call(null,x);
} else
{return and__3546__auto____3853;
}
} else
{return and__3546__auto____3852;
}
})());
});
var ep3__3898 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3854 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3854))
{var and__3546__auto____3855 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3855))
{var and__3546__auto____3856 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3856))
{var and__3546__auto____3857 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3857))
{var and__3546__auto____3858 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3858))
{return p3.call(null,y);
} else
{return and__3546__auto____3858;
}
} else
{return and__3546__auto____3857;
}
} else
{return and__3546__auto____3856;
}
} else
{return and__3546__auto____3855;
}
} else
{return and__3546__auto____3854;
}
})());
});
var ep3__3899 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3859 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3859))
{var and__3546__auto____3860 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3860))
{var and__3546__auto____3861 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3861))
{var and__3546__auto____3862 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3862))
{var and__3546__auto____3863 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3863))
{var and__3546__auto____3864 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3864))
{var and__3546__auto____3865 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3865))
{var and__3546__auto____3866 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3866))
{return p3.call(null,z);
} else
{return and__3546__auto____3866;
}
} else
{return and__3546__auto____3865;
}
} else
{return and__3546__auto____3864;
}
} else
{return and__3546__auto____3863;
}
} else
{return and__3546__auto____3862;
}
} else
{return and__3546__auto____3861;
}
} else
{return and__3546__auto____3860;
}
} else
{return and__3546__auto____3859;
}
})());
});
var ep3__3900 = (function() { 
var G__3902__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3867 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3867))
{return cljs.core.every_QMARK_.call(null,(function (p1__3822_SHARP_){
var and__3546__auto____3868 = p1.call(null,p1__3822_SHARP_);

if(cljs.core.truth_(and__3546__auto____3868))
{var and__3546__auto____3869 = p2.call(null,p1__3822_SHARP_);

if(cljs.core.truth_(and__3546__auto____3869))
{return p3.call(null,p1__3822_SHARP_);
} else
{return and__3546__auto____3869;
}
} else
{return and__3546__auto____3868;
}
}),args);
} else
{return and__3546__auto____3867;
}
})());
};
var G__3902 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3902__delegate.call(this, x, y, z, args);
};
G__3902.cljs$lang$maxFixedArity = 3;
G__3902.cljs$lang$applyTo = (function (arglist__3903){
var x = cljs.core.first(arglist__3903);
var y = cljs.core.first(cljs.core.next(arglist__3903));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3903)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3903)));
return G__3902__delegate.call(this, x, y, z, args);
});
return G__3902;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3896.call(this);
case  1 :
return ep3__3897.call(this,x);
case  2 :
return ep3__3898.call(this,x,y);
case  3 :
return ep3__3899.call(this,x,y,z);
default:
return ep3__3900.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3900.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3878 = (function() { 
var G__3904__delegate = function (p1,p2,p3,ps){
var ps__3870 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3905 = (function (){
return true;
});
var epn__3906 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3823_SHARP_){
return p1__3823_SHARP_.call(null,x);
}),ps__3870);
});
var epn__3907 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3824_SHARP_){
var and__3546__auto____3871 = p1__3824_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3871))
{return p1__3824_SHARP_.call(null,y);
} else
{return and__3546__auto____3871;
}
}),ps__3870);
});
var epn__3908 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3825_SHARP_){
var and__3546__auto____3872 = p1__3825_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3872))
{var and__3546__auto____3873 = p1__3825_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3873))
{return p1__3825_SHARP_.call(null,z);
} else
{return and__3546__auto____3873;
}
} else
{return and__3546__auto____3872;
}
}),ps__3870);
});
var epn__3909 = (function() { 
var G__3911__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3874 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3874))
{return cljs.core.every_QMARK_.call(null,(function (p1__3826_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3826_SHARP_,args);
}),ps__3870);
} else
{return and__3546__auto____3874;
}
})());
};
var G__3911 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3911__delegate.call(this, x, y, z, args);
};
G__3911.cljs$lang$maxFixedArity = 3;
G__3911.cljs$lang$applyTo = (function (arglist__3912){
var x = cljs.core.first(arglist__3912);
var y = cljs.core.first(cljs.core.next(arglist__3912));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3912)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3912)));
return G__3911__delegate.call(this, x, y, z, args);
});
return G__3911;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3905.call(this);
case  1 :
return epn__3906.call(this,x);
case  2 :
return epn__3907.call(this,x,y);
case  3 :
return epn__3908.call(this,x,y,z);
default:
return epn__3909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3909.cljs$lang$applyTo;
return epn;
})()
};
var G__3904 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3904__delegate.call(this, p1, p2, p3, ps);
};
G__3904.cljs$lang$maxFixedArity = 3;
G__3904.cljs$lang$applyTo = (function (arglist__3913){
var p1 = cljs.core.first(arglist__3913);
var p2 = cljs.core.first(cljs.core.next(arglist__3913));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3913)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3913)));
return G__3904__delegate.call(this, p1, p2, p3, ps);
});
return G__3904;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3875.call(this,p1);
case  2 :
return every_pred__3876.call(this,p1,p2);
case  3 :
return every_pred__3877.call(this,p1,p2,p3);
default:
return every_pred__3878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3878.cljs$lang$applyTo;
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
var some_fn__3953 = (function (p){
return (function() {
var sp1 = null;
var sp1__3958 = (function (){
return null;
});
var sp1__3959 = (function (x){
return p.call(null,x);
});
var sp1__3960 = (function (x,y){
var or__3548__auto____3915 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3915))
{return or__3548__auto____3915;
} else
{return p.call(null,y);
}
});
var sp1__3961 = (function (x,y,z){
var or__3548__auto____3916 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3916))
{return or__3548__auto____3916;
} else
{var or__3548__auto____3917 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3917))
{return or__3548__auto____3917;
} else
{return p.call(null,z);
}
}
});
var sp1__3962 = (function() { 
var G__3964__delegate = function (x,y,z,args){
var or__3548__auto____3918 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3918))
{return or__3548__auto____3918;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3964 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3964__delegate.call(this, x, y, z, args);
};
G__3964.cljs$lang$maxFixedArity = 3;
G__3964.cljs$lang$applyTo = (function (arglist__3965){
var x = cljs.core.first(arglist__3965);
var y = cljs.core.first(cljs.core.next(arglist__3965));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3965)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3965)));
return G__3964__delegate.call(this, x, y, z, args);
});
return G__3964;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3958.call(this);
case  1 :
return sp1__3959.call(this,x);
case  2 :
return sp1__3960.call(this,x,y);
case  3 :
return sp1__3961.call(this,x,y,z);
default:
return sp1__3962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3962.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3954 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3966 = (function (){
return null;
});
var sp2__3967 = (function (x){
var or__3548__auto____3919 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3919))
{return or__3548__auto____3919;
} else
{return p2.call(null,x);
}
});
var sp2__3968 = (function (x,y){
var or__3548__auto____3920 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3920))
{return or__3548__auto____3920;
} else
{var or__3548__auto____3921 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3921))
{return or__3548__auto____3921;
} else
{var or__3548__auto____3922 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3922))
{return or__3548__auto____3922;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3969 = (function (x,y,z){
var or__3548__auto____3923 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3923))
{return or__3548__auto____3923;
} else
{var or__3548__auto____3924 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3924))
{return or__3548__auto____3924;
} else
{var or__3548__auto____3925 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3925))
{return or__3548__auto____3925;
} else
{var or__3548__auto____3926 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3926))
{return or__3548__auto____3926;
} else
{var or__3548__auto____3927 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3927))
{return or__3548__auto____3927;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3970 = (function() { 
var G__3972__delegate = function (x,y,z,args){
var or__3548__auto____3928 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3928))
{return or__3548__auto____3928;
} else
{return cljs.core.some.call(null,(function (p1__3831_SHARP_){
var or__3548__auto____3929 = p1.call(null,p1__3831_SHARP_);

if(cljs.core.truth_(or__3548__auto____3929))
{return or__3548__auto____3929;
} else
{return p2.call(null,p1__3831_SHARP_);
}
}),args);
}
};
var G__3972 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3972__delegate.call(this, x, y, z, args);
};
G__3972.cljs$lang$maxFixedArity = 3;
G__3972.cljs$lang$applyTo = (function (arglist__3973){
var x = cljs.core.first(arglist__3973);
var y = cljs.core.first(cljs.core.next(arglist__3973));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3973)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3973)));
return G__3972__delegate.call(this, x, y, z, args);
});
return G__3972;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3966.call(this);
case  1 :
return sp2__3967.call(this,x);
case  2 :
return sp2__3968.call(this,x,y);
case  3 :
return sp2__3969.call(this,x,y,z);
default:
return sp2__3970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3970.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3955 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3974 = (function (){
return null;
});
var sp3__3975 = (function (x){
var or__3548__auto____3930 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3930))
{return or__3548__auto____3930;
} else
{var or__3548__auto____3931 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3931))
{return or__3548__auto____3931;
} else
{return p3.call(null,x);
}
}
});
var sp3__3976 = (function (x,y){
var or__3548__auto____3932 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3932))
{return or__3548__auto____3932;
} else
{var or__3548__auto____3933 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3933))
{return or__3548__auto____3933;
} else
{var or__3548__auto____3934 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3934))
{return or__3548__auto____3934;
} else
{var or__3548__auto____3935 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3935))
{return or__3548__auto____3935;
} else
{var or__3548__auto____3936 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3936))
{return or__3548__auto____3936;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3977 = (function (x,y,z){
var or__3548__auto____3937 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3937))
{return or__3548__auto____3937;
} else
{var or__3548__auto____3938 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3938))
{return or__3548__auto____3938;
} else
{var or__3548__auto____3939 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3939))
{return or__3548__auto____3939;
} else
{var or__3548__auto____3940 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3940))
{return or__3548__auto____3940;
} else
{var or__3548__auto____3941 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3941))
{return or__3548__auto____3941;
} else
{var or__3548__auto____3942 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3942))
{return or__3548__auto____3942;
} else
{var or__3548__auto____3943 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3943))
{return or__3548__auto____3943;
} else
{var or__3548__auto____3944 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3944))
{return or__3548__auto____3944;
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
var sp3__3978 = (function() { 
var G__3980__delegate = function (x,y,z,args){
var or__3548__auto____3945 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3945))
{return or__3548__auto____3945;
} else
{return cljs.core.some.call(null,(function (p1__3832_SHARP_){
var or__3548__auto____3946 = p1.call(null,p1__3832_SHARP_);

if(cljs.core.truth_(or__3548__auto____3946))
{return or__3548__auto____3946;
} else
{var or__3548__auto____3947 = p2.call(null,p1__3832_SHARP_);

if(cljs.core.truth_(or__3548__auto____3947))
{return or__3548__auto____3947;
} else
{return p3.call(null,p1__3832_SHARP_);
}
}
}),args);
}
};
var G__3980 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3980__delegate.call(this, x, y, z, args);
};
G__3980.cljs$lang$maxFixedArity = 3;
G__3980.cljs$lang$applyTo = (function (arglist__3981){
var x = cljs.core.first(arglist__3981);
var y = cljs.core.first(cljs.core.next(arglist__3981));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3981)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3981)));
return G__3980__delegate.call(this, x, y, z, args);
});
return G__3980;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3974.call(this);
case  1 :
return sp3__3975.call(this,x);
case  2 :
return sp3__3976.call(this,x,y);
case  3 :
return sp3__3977.call(this,x,y,z);
default:
return sp3__3978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3978.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3956 = (function() { 
var G__3982__delegate = function (p1,p2,p3,ps){
var ps__3948 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3983 = (function (){
return null;
});
var spn__3984 = (function (x){
return cljs.core.some.call(null,(function (p1__3833_SHARP_){
return p1__3833_SHARP_.call(null,x);
}),ps__3948);
});
var spn__3985 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3834_SHARP_){
var or__3548__auto____3949 = p1__3834_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3949))
{return or__3548__auto____3949;
} else
{return p1__3834_SHARP_.call(null,y);
}
}),ps__3948);
});
var spn__3986 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3835_SHARP_){
var or__3548__auto____3950 = p1__3835_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3950))
{return or__3548__auto____3950;
} else
{var or__3548__auto____3951 = p1__3835_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3951))
{return or__3548__auto____3951;
} else
{return p1__3835_SHARP_.call(null,z);
}
}
}),ps__3948);
});
var spn__3987 = (function() { 
var G__3989__delegate = function (x,y,z,args){
var or__3548__auto____3952 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3952))
{return or__3548__auto____3952;
} else
{return cljs.core.some.call(null,(function (p1__3836_SHARP_){
return cljs.core.some.call(null,p1__3836_SHARP_,args);
}),ps__3948);
}
};
var G__3989 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3989__delegate.call(this, x, y, z, args);
};
G__3989.cljs$lang$maxFixedArity = 3;
G__3989.cljs$lang$applyTo = (function (arglist__3990){
var x = cljs.core.first(arglist__3990);
var y = cljs.core.first(cljs.core.next(arglist__3990));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3990)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3990)));
return G__3989__delegate.call(this, x, y, z, args);
});
return G__3989;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3983.call(this);
case  1 :
return spn__3984.call(this,x);
case  2 :
return spn__3985.call(this,x,y);
case  3 :
return spn__3986.call(this,x,y,z);
default:
return spn__3987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3987.cljs$lang$applyTo;
return spn;
})()
};
var G__3982 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3982__delegate.call(this, p1, p2, p3, ps);
};
G__3982.cljs$lang$maxFixedArity = 3;
G__3982.cljs$lang$applyTo = (function (arglist__3991){
var p1 = cljs.core.first(arglist__3991);
var p2 = cljs.core.first(cljs.core.next(arglist__3991));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3991)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3991)));
return G__3982__delegate.call(this, p1, p2, p3, ps);
});
return G__3982;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3953.call(this,p1);
case  2 :
return some_fn__3954.call(this,p1,p2);
case  3 :
return some_fn__3955.call(this,p1,p2,p3);
default:
return some_fn__3956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3956.cljs$lang$applyTo;
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
var map__4004 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3992 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3992))
{var s__3993 = temp__3698__auto____3992;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3993)),map.call(null,f,cljs.core.rest.call(null,s__3993)));
} else
{return null;
}
})));
});
var map__4005 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3994 = cljs.core.seq.call(null,c1);
var s2__3995 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3996 = s1__3994;

if(cljs.core.truth_(and__3546__auto____3996))
{return s2__3995;
} else
{return and__3546__auto____3996;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3994),cljs.core.first.call(null,s2__3995)),map.call(null,f,cljs.core.rest.call(null,s1__3994),cljs.core.rest.call(null,s2__3995)));
} else
{return null;
}
})));
});
var map__4006 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3997 = cljs.core.seq.call(null,c1);
var s2__3998 = cljs.core.seq.call(null,c2);
var s3__3999 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4000 = s1__3997;

if(cljs.core.truth_(and__3546__auto____4000))
{var and__3546__auto____4001 = s2__3998;

if(cljs.core.truth_(and__3546__auto____4001))
{return s3__3999;
} else
{return and__3546__auto____4001;
}
} else
{return and__3546__auto____4000;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3997),cljs.core.first.call(null,s2__3998),cljs.core.first.call(null,s3__3999)),map.call(null,f,cljs.core.rest.call(null,s1__3997),cljs.core.rest.call(null,s2__3998),cljs.core.rest.call(null,s3__3999)));
} else
{return null;
}
})));
});
var map__4007 = (function() { 
var G__4009__delegate = function (f,c1,c2,c3,colls){
var step__4003 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4002 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4002)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4002),step.call(null,map.call(null,cljs.core.rest,ss__4002)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3914_SHARP_){
return cljs.core.apply.call(null,f,p1__3914_SHARP_);
}),step__4003.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4009 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4009__delegate.call(this, f, c1, c2, c3, colls);
};
G__4009.cljs$lang$maxFixedArity = 4;
G__4009.cljs$lang$applyTo = (function (arglist__4010){
var f = cljs.core.first(arglist__4010);
var c1 = cljs.core.first(cljs.core.next(arglist__4010));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4010)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4010))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4010))));
return G__4009__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4009;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4004.call(this,f,c1);
case  3 :
return map__4005.call(this,f,c1,c2);
case  4 :
return map__4006.call(this,f,c1,c2,c3);
default:
return map__4007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4007.cljs$lang$applyTo;
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
{var temp__3698__auto____4011 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4011))
{var s__4012 = temp__3698__auto____4011;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4012),take.call(null,(n - 1),cljs.core.rest.call(null,s__4012)));
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
var step__4015 = (function (n,coll){
while(true){
var s__4013 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4014 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4014))
{return s__4013;
} else
{return and__3546__auto____4014;
}
})()))
{{
var G__4016 = (n - 1);
var G__4017 = cljs.core.rest.call(null,s__4013);
n = G__4016;
coll = G__4017;
continue;
}
} else
{return s__4013;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4015.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4018 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4019 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4018.call(this,n);
case  2 :
return drop_last__4019.call(this,n,s);
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
var s__4021 = cljs.core.seq.call(null,coll);
var lead__4022 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4022))
{{
var G__4023 = cljs.core.next.call(null,s__4021);
var G__4024 = cljs.core.next.call(null,lead__4022);
s__4021 = G__4023;
lead__4022 = G__4024;
continue;
}
} else
{return s__4021;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4027 = (function (pred,coll){
while(true){
var s__4025 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4026 = s__4025;

if(cljs.core.truth_(and__3546__auto____4026))
{return pred.call(null,cljs.core.first.call(null,s__4025));
} else
{return and__3546__auto____4026;
}
})()))
{{
var G__4028 = pred;
var G__4029 = cljs.core.rest.call(null,s__4025);
pred = G__4028;
coll = G__4029;
continue;
}
} else
{return s__4025;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4027.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4030 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4030))
{var s__4031 = temp__3698__auto____4030;

return cljs.core.concat.call(null,s__4031,cycle.call(null,s__4031));
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
var repeat__4032 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4033 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4032.call(this,n);
case  2 :
return repeat__4033.call(this,n,x);
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
var repeatedly__4035 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4036 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4035.call(this,n);
case  2 :
return repeatedly__4036.call(this,n,f);
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
var interleave__4042 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4038 = cljs.core.seq.call(null,c1);
var s2__4039 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4040 = s1__4038;

if(cljs.core.truth_(and__3546__auto____4040))
{return s2__4039;
} else
{return and__3546__auto____4040;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4038),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4039),interleave.call(null,cljs.core.rest.call(null,s1__4038),cljs.core.rest.call(null,s2__4039))));
} else
{return null;
}
})));
});
var interleave__4043 = (function() { 
var G__4045__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4041 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4041)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4041),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4041)));
} else
{return null;
}
})));
};
var G__4045 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4045__delegate.call(this, c1, c2, colls);
};
G__4045.cljs$lang$maxFixedArity = 2;
G__4045.cljs$lang$applyTo = (function (arglist__4046){
var c1 = cljs.core.first(arglist__4046);
var c2 = cljs.core.first(cljs.core.next(arglist__4046));
var colls = cljs.core.rest(cljs.core.next(arglist__4046));
return G__4045__delegate.call(this, c1, c2, colls);
});
return G__4045;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4042.call(this,c1,c2);
default:
return interleave__4043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4043.cljs$lang$applyTo;
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
var cat__4049 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4047 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4047))
{var coll__4048 = temp__3695__auto____4047;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4048),cat.call(null,cljs.core.rest.call(null,coll__4048),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4049.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4050 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4051 = (function() { 
var G__4053__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4053 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4053__delegate.call(this, f, coll, colls);
};
G__4053.cljs$lang$maxFixedArity = 2;
G__4053.cljs$lang$applyTo = (function (arglist__4054){
var f = cljs.core.first(arglist__4054);
var coll = cljs.core.first(cljs.core.next(arglist__4054));
var colls = cljs.core.rest(cljs.core.next(arglist__4054));
return G__4053__delegate.call(this, f, coll, colls);
});
return G__4053;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4050.call(this,f,coll);
default:
return mapcat__4051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4051.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4055 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4055))
{var s__4056 = temp__3698__auto____4055;

var f__4057 = cljs.core.first.call(null,s__4056);
var r__4058 = cljs.core.rest.call(null,s__4056);

if(cljs.core.truth_(pred.call(null,f__4057)))
{return cljs.core.cons.call(null,f__4057,filter.call(null,pred,r__4058));
} else
{return filter.call(null,pred,r__4058);
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
var walk__4060 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4060.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4059_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4059_SHARP_));
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
var partition__4067 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4068 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4061 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4061))
{var s__4062 = temp__3698__auto____4061;

var p__4063 = cljs.core.take.call(null,n,s__4062);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4063))))
{return cljs.core.cons.call(null,p__4063,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4062)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4069 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4064 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4064))
{var s__4065 = temp__3698__auto____4064;

var p__4066 = cljs.core.take.call(null,n,s__4065);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4066))))
{return cljs.core.cons.call(null,p__4066,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4065)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4066,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4067.call(this,n,step);
case  3 :
return partition__4068.call(this,n,step,pad);
case  4 :
return partition__4069.call(this,n,step,pad,coll);
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
var get_in__4075 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4076 = (function (m,ks,not_found){
var sentinel__4071 = cljs.core.lookup_sentinel;
var m__4072 = m;
var ks__4073 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4073))
{var m__4074 = cljs.core.get.call(null,m__4072,cljs.core.first.call(null,ks__4073),sentinel__4071);

if(cljs.core.truth_((sentinel__4071 === m__4074)))
{return not_found;
} else
{{
var G__4078 = sentinel__4071;
var G__4079 = m__4074;
var G__4080 = cljs.core.next.call(null,ks__4073);
sentinel__4071 = G__4078;
m__4072 = G__4079;
ks__4073 = G__4080;
continue;
}
}
} else
{return m__4072;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4075.call(this,m,ks);
case  3 :
return get_in__4076.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__4081,v){
var vec__4082__4083 = p__4081;
var k__4084 = cljs.core.nth.call(null,vec__4082__4083,0,null);
var ks__4085 = cljs.core.nthnext.call(null,vec__4082__4083,1);

if(cljs.core.truth_(ks__4085))
{return cljs.core.assoc.call(null,m,k__4084,assoc_in.call(null,cljs.core.get.call(null,m,k__4084),ks__4085,v));
} else
{return cljs.core.assoc.call(null,m,k__4084,v);
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
var update_in__delegate = function (m,p__4086,f,args){
var vec__4087__4088 = p__4086;
var k__4089 = cljs.core.nth.call(null,vec__4087__4088,0,null);
var ks__4090 = cljs.core.nthnext.call(null,vec__4087__4088,1);

if(cljs.core.truth_(ks__4090))
{return cljs.core.assoc.call(null,m,k__4089,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4089),ks__4090,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4089,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4089),args));
}
};
var update_in = function (m,p__4086,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4086, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4091){
var m = cljs.core.first(arglist__4091);
var p__4086 = cljs.core.first(cljs.core.next(arglist__4091));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4091)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4091)));
return update_in__delegate.call(this, m, p__4086, f, args);
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
var this__4092 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4125 = null;
var G__4125__4126 = (function (coll,k){
var this__4093 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4125__4127 = (function (coll,k,not_found){
var this__4094 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4125 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4125__4126.call(this,coll,k);
case  3 :
return G__4125__4127.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4125;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4095 = this;
var new_array__4096 = cljs.core.aclone.call(null,this__4095.array);

(new_array__4096[k] = v);
return (new cljs.core.Vector(this__4095.meta,new_array__4096));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4129 = null;
var G__4129__4130 = (function (tsym4097,k){
var this__4099 = this;
var tsym4097__4100 = this;

var coll__4101 = tsym4097__4100;

return cljs.core._lookup.call(null,coll__4101,k);
});
var G__4129__4131 = (function (tsym4098,k,not_found){
var this__4102 = this;
var tsym4098__4103 = this;

var coll__4104 = tsym4098__4103;

return cljs.core._lookup.call(null,coll__4104,k,not_found);
});
G__4129 = function(tsym4098,k,not_found){
switch(arguments.length){
case  2 :
return G__4129__4130.call(this,tsym4098,k);
case  3 :
return G__4129__4131.call(this,tsym4098,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4129;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4105 = this;
var new_array__4106 = cljs.core.aclone.call(null,this__4105.array);

new_array__4106.push(o);
return (new cljs.core.Vector(this__4105.meta,new_array__4106));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4133 = null;
var G__4133__4134 = (function (v,f){
var this__4107 = this;
return cljs.core.ci_reduce.call(null,this__4107.array,f);
});
var G__4133__4135 = (function (v,f,start){
var this__4108 = this;
return cljs.core.ci_reduce.call(null,this__4108.array,f,start);
});
G__4133 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4133__4134.call(this,v,f);
case  3 :
return G__4133__4135.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4133;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4109 = this;
if(cljs.core.truth_((this__4109.array.length > 0)))
{var vector_seq__4110 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4109.array.length)))
{return cljs.core.cons.call(null,(this__4109.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4110.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4111 = this;
return this__4111.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4112 = this;
var count__4113 = this__4112.array.length;

if(cljs.core.truth_((count__4113 > 0)))
{return (this__4112.array[(count__4113 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4114 = this;
if(cljs.core.truth_((this__4114.array.length > 0)))
{var new_array__4115 = cljs.core.aclone.call(null,this__4114.array);

new_array__4115.pop();
return (new cljs.core.Vector(this__4114.meta,new_array__4115));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4116 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4117 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4118 = this;
return (new cljs.core.Vector(meta,this__4118.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4119 = this;
return this__4119.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4137 = null;
var G__4137__4138 = (function (coll,n){
var this__4120 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4121 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4121))
{return (n < this__4120.array.length);
} else
{return and__3546__auto____4121;
}
})()))
{return (this__4120.array[n]);
} else
{return null;
}
});
var G__4137__4139 = (function (coll,n,not_found){
var this__4122 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4123 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4123))
{return (n < this__4122.array.length);
} else
{return and__3546__auto____4123;
}
})()))
{return (this__4122.array[n]);
} else
{return not_found;
}
});
G__4137 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4137__4138.call(this,coll,n);
case  3 :
return G__4137__4139.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4137;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4124 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4124.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4141){
var args = cljs.core.seq( arglist__4141 );;
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
var this__4142 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4170 = null;
var G__4170__4171 = (function (coll,k){
var this__4143 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4170__4172 = (function (coll,k,not_found){
var this__4144 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4170 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4170__4171.call(this,coll,k);
case  3 :
return G__4170__4172.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4170;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4145 = this;
var v_pos__4146 = (this__4145.start + key);

return (new cljs.core.Subvec(this__4145.meta,cljs.core._assoc.call(null,this__4145.v,v_pos__4146,val),this__4145.start,((this__4145.end > (v_pos__4146 + 1)) ? this__4145.end : (v_pos__4146 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4174 = null;
var G__4174__4175 = (function (tsym4147,k){
var this__4149 = this;
var tsym4147__4150 = this;

var coll__4151 = tsym4147__4150;

return cljs.core._lookup.call(null,coll__4151,k);
});
var G__4174__4176 = (function (tsym4148,k,not_found){
var this__4152 = this;
var tsym4148__4153 = this;

var coll__4154 = tsym4148__4153;

return cljs.core._lookup.call(null,coll__4154,k,not_found);
});
G__4174 = function(tsym4148,k,not_found){
switch(arguments.length){
case  2 :
return G__4174__4175.call(this,tsym4148,k);
case  3 :
return G__4174__4176.call(this,tsym4148,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4174;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4155 = this;
return (new cljs.core.Subvec(this__4155.meta,cljs.core._assoc_n.call(null,this__4155.v,this__4155.end,o),this__4155.start,(this__4155.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4178 = null;
var G__4178__4179 = (function (coll,f){
var this__4156 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4178__4180 = (function (coll,f,start){
var this__4157 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4178 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4178__4179.call(this,coll,f);
case  3 :
return G__4178__4180.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4178;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4158 = this;
var subvec_seq__4159 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4158.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4158.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4159.call(null,this__4158.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4160 = this;
return (this__4160.end - this__4160.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4161 = this;
return cljs.core._nth.call(null,this__4161.v,(this__4161.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4162 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4162.start,this__4162.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4162.meta,this__4162.v,this__4162.start,(this__4162.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4163 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4164 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4165 = this;
return (new cljs.core.Subvec(meta,this__4165.v,this__4165.start,this__4165.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4166 = this;
return this__4166.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4182 = null;
var G__4182__4183 = (function (coll,n){
var this__4167 = this;
return cljs.core._nth.call(null,this__4167.v,(this__4167.start + n));
});
var G__4182__4184 = (function (coll,n,not_found){
var this__4168 = this;
return cljs.core._nth.call(null,this__4168.v,(this__4168.start + n),not_found);
});
G__4182 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4182__4183.call(this,coll,n);
case  3 :
return G__4182__4184.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4182;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4169 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4169.meta);
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
var subvec__4186 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4187 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4186.call(this,v,start);
case  3 :
return subvec__4187.call(this,v,start,end);
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
var this__4189 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4190 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4191 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4192 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4192.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4193 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4194 = this;
return cljs.core._first.call(null,this__4194.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4195 = this;
var temp__3695__auto____4196 = cljs.core.next.call(null,this__4195.front);

if(cljs.core.truth_(temp__3695__auto____4196))
{var f1__4197 = temp__3695__auto____4196;

return (new cljs.core.PersistentQueueSeq(this__4195.meta,f1__4197,this__4195.rear));
} else
{if(cljs.core.truth_((this__4195.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4195.meta,this__4195.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4198 = this;
return this__4198.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4199 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4199.front,this__4199.rear));
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
var this__4200 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4201 = this;
if(cljs.core.truth_(this__4201.front))
{return (new cljs.core.PersistentQueue(this__4201.meta,(this__4201.count + 1),this__4201.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4202 = this__4201.rear;

if(cljs.core.truth_(or__3548__auto____4202))
{return or__3548__auto____4202;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4201.meta,(this__4201.count + 1),cljs.core.conj.call(null,this__4201.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4203 = this;
var rear__4204 = cljs.core.seq.call(null,this__4203.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4205 = this__4203.front;

if(cljs.core.truth_(or__3548__auto____4205))
{return or__3548__auto____4205;
} else
{return rear__4204;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4203.front,cljs.core.seq.call(null,rear__4204)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4206 = this;
return this__4206.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4207 = this;
return cljs.core._first.call(null,this__4207.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4208 = this;
if(cljs.core.truth_(this__4208.front))
{var temp__3695__auto____4209 = cljs.core.next.call(null,this__4208.front);

if(cljs.core.truth_(temp__3695__auto____4209))
{var f1__4210 = temp__3695__auto____4209;

return (new cljs.core.PersistentQueue(this__4208.meta,(this__4208.count - 1),f1__4210,this__4208.rear));
} else
{return (new cljs.core.PersistentQueue(this__4208.meta,(this__4208.count - 1),cljs.core.seq.call(null,this__4208.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4211 = this;
return cljs.core.first.call(null,this__4211.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4212 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4213 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4214 = this;
return (new cljs.core.PersistentQueue(meta,this__4214.count,this__4214.front,this__4214.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4215 = this;
return this__4215.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4216 = this;
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
var this__4217 = this;
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
var len__4218 = array.length;

var i__4219 = 0;

while(true){
if(cljs.core.truth_((i__4219 < len__4218)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4219]))))
{return i__4219;
} else
{{
var G__4220 = (i__4219 + incr);
i__4219 = G__4220;
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
var obj_map_contains_key_QMARK___4222 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4223 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4221 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4221))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4221;
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
return obj_map_contains_key_QMARK___4222.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4223.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4226 = cljs.core.hash.call(null,a);
var b__4227 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4226 < b__4227)))
{return -1;
} else
{if(cljs.core.truth_((a__4226 > b__4227)))
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
var this__4228 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4255 = null;
var G__4255__4256 = (function (coll,k){
var this__4229 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4255__4257 = (function (coll,k,not_found){
var this__4230 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4230.strobj,(this__4230.strobj[k]),not_found);
});
G__4255 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4255__4256.call(this,coll,k);
case  3 :
return G__4255__4257.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4255;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4231 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4232 = goog.object.clone.call(null,this__4231.strobj);
var overwrite_QMARK___4233 = new_strobj__4232.hasOwnProperty(k);

(new_strobj__4232[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4233))
{return (new cljs.core.ObjMap(this__4231.meta,this__4231.keys,new_strobj__4232));
} else
{var new_keys__4234 = cljs.core.aclone.call(null,this__4231.keys);

new_keys__4234.push(k);
return (new cljs.core.ObjMap(this__4231.meta,new_keys__4234,new_strobj__4232));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4231.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4235 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4235.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4259 = null;
var G__4259__4260 = (function (tsym4236,k){
var this__4238 = this;
var tsym4236__4239 = this;

var coll__4240 = tsym4236__4239;

return cljs.core._lookup.call(null,coll__4240,k);
});
var G__4259__4261 = (function (tsym4237,k,not_found){
var this__4241 = this;
var tsym4237__4242 = this;

var coll__4243 = tsym4237__4242;

return cljs.core._lookup.call(null,coll__4243,k,not_found);
});
G__4259 = function(tsym4237,k,not_found){
switch(arguments.length){
case  2 :
return G__4259__4260.call(this,tsym4237,k);
case  3 :
return G__4259__4261.call(this,tsym4237,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4259;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4244 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4245 = this;
if(cljs.core.truth_((this__4245.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4225_SHARP_){
return cljs.core.vector.call(null,p1__4225_SHARP_,(this__4245.strobj[p1__4225_SHARP_]));
}),this__4245.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4246 = this;
return this__4246.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4247 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4248 = this;
return (new cljs.core.ObjMap(meta,this__4248.keys,this__4248.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4249 = this;
return this__4249.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4250 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4250.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4251 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4252 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4252))
{return this__4251.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4252;
}
})()))
{var new_keys__4253 = cljs.core.aclone.call(null,this__4251.keys);
var new_strobj__4254 = goog.object.clone.call(null,this__4251.strobj);

new_keys__4253.splice(cljs.core.scan_array.call(null,1,k,new_keys__4253),1);
cljs.core.js_delete.call(null,new_strobj__4254,k);
return (new cljs.core.ObjMap(this__4251.meta,new_keys__4253,new_strobj__4254));
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
var this__4264 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4302 = null;
var G__4302__4303 = (function (coll,k){
var this__4265 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4302__4304 = (function (coll,k,not_found){
var this__4266 = this;
var bucket__4267 = (this__4266.hashobj[cljs.core.hash.call(null,k)]);
var i__4268 = (cljs.core.truth_(bucket__4267)?cljs.core.scan_array.call(null,2,k,bucket__4267):null);

if(cljs.core.truth_(i__4268))
{return (bucket__4267[(i__4268 + 1)]);
} else
{return not_found;
}
});
G__4302 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4302__4303.call(this,coll,k);
case  3 :
return G__4302__4304.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4302;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4269 = this;
var h__4270 = cljs.core.hash.call(null,k);
var bucket__4271 = (this__4269.hashobj[h__4270]);

if(cljs.core.truth_(bucket__4271))
{var new_bucket__4272 = cljs.core.aclone.call(null,bucket__4271);
var new_hashobj__4273 = goog.object.clone.call(null,this__4269.hashobj);

(new_hashobj__4273[h__4270] = new_bucket__4272);
var temp__3695__auto____4274 = cljs.core.scan_array.call(null,2,k,new_bucket__4272);

if(cljs.core.truth_(temp__3695__auto____4274))
{var i__4275 = temp__3695__auto____4274;

(new_bucket__4272[(i__4275 + 1)] = v);
return (new cljs.core.HashMap(this__4269.meta,this__4269.count,new_hashobj__4273));
} else
{new_bucket__4272.push(k,v);
return (new cljs.core.HashMap(this__4269.meta,(this__4269.count + 1),new_hashobj__4273));
}
} else
{var new_hashobj__4276 = goog.object.clone.call(null,this__4269.hashobj);

(new_hashobj__4276[h__4270] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4269.meta,(this__4269.count + 1),new_hashobj__4276));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4277 = this;
var bucket__4278 = (this__4277.hashobj[cljs.core.hash.call(null,k)]);
var i__4279 = (cljs.core.truth_(bucket__4278)?cljs.core.scan_array.call(null,2,k,bucket__4278):null);

if(cljs.core.truth_(i__4279))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4306 = null;
var G__4306__4307 = (function (tsym4280,k){
var this__4282 = this;
var tsym4280__4283 = this;

var coll__4284 = tsym4280__4283;

return cljs.core._lookup.call(null,coll__4284,k);
});
var G__4306__4308 = (function (tsym4281,k,not_found){
var this__4285 = this;
var tsym4281__4286 = this;

var coll__4287 = tsym4281__4286;

return cljs.core._lookup.call(null,coll__4287,k,not_found);
});
G__4306 = function(tsym4281,k,not_found){
switch(arguments.length){
case  2 :
return G__4306__4307.call(this,tsym4281,k);
case  3 :
return G__4306__4308.call(this,tsym4281,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4306;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4288 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4289 = this;
if(cljs.core.truth_((this__4289.count > 0)))
{var hashes__4290 = cljs.core.js_keys.call(null,this__4289.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4263_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4289.hashobj[p1__4263_SHARP_])));
}),hashes__4290);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4291 = this;
return this__4291.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4292 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4293 = this;
return (new cljs.core.HashMap(meta,this__4293.count,this__4293.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4294 = this;
return this__4294.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4295 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4295.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4296 = this;
var h__4297 = cljs.core.hash.call(null,k);
var bucket__4298 = (this__4296.hashobj[h__4297]);
var i__4299 = (cljs.core.truth_(bucket__4298)?cljs.core.scan_array.call(null,2,k,bucket__4298):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4299)))
{return coll;
} else
{var new_hashobj__4300 = goog.object.clone.call(null,this__4296.hashobj);

if(cljs.core.truth_((3 > bucket__4298.length)))
{cljs.core.js_delete.call(null,new_hashobj__4300,h__4297);
} else
{var new_bucket__4301 = cljs.core.aclone.call(null,bucket__4298);

new_bucket__4301.splice(i__4299,2);
(new_hashobj__4300[h__4297] = new_bucket__4301);
}
return (new cljs.core.HashMap(this__4296.meta,(this__4296.count - 1),new_hashobj__4300));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4310 = ks.length;

var i__4311 = 0;
var out__4312 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4311 < len__4310)))
{{
var G__4313 = (i__4311 + 1);
var G__4314 = cljs.core.assoc.call(null,out__4312,(ks[i__4311]),(vs[i__4311]));
i__4311 = G__4313;
out__4312 = G__4314;
continue;
}
} else
{return out__4312;
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
var in$__4315 = cljs.core.seq.call(null,keyvals);
var out__4316 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4315))
{{
var G__4317 = cljs.core.nnext.call(null,in$__4315);
var G__4318 = cljs.core.assoc.call(null,out__4316,cljs.core.first.call(null,in$__4315),cljs.core.second.call(null,in$__4315));
in$__4315 = G__4317;
out__4316 = G__4318;
continue;
}
} else
{return out__4316;
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
hash_map.cljs$lang$applyTo = (function (arglist__4319){
var keyvals = cljs.core.seq( arglist__4319 );;
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
{return cljs.core.reduce.call(null,(function (p1__4320_SHARP_,p2__4321_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4322 = p1__4320_SHARP_;

if(cljs.core.truth_(or__3548__auto____4322))
{return or__3548__auto____4322;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4321_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4323){
var maps = cljs.core.seq( arglist__4323 );;
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
{var merge_entry__4326 = (function (m,e){
var k__4324 = cljs.core.first.call(null,e);
var v__4325 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4324)))
{return cljs.core.assoc.call(null,m,k__4324,f.call(null,cljs.core.get.call(null,m,k__4324),v__4325));
} else
{return cljs.core.assoc.call(null,m,k__4324,v__4325);
}
});
var merge2__4328 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4326,(function (){var or__3548__auto____4327 = m1;

if(cljs.core.truth_(or__3548__auto____4327))
{return or__3548__auto____4327;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4328,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4329){
var f = cljs.core.first(arglist__4329);
var maps = cljs.core.rest(arglist__4329);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4331 = cljs.core.ObjMap.fromObject([],{});
var keys__4332 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4332))
{var key__4333 = cljs.core.first.call(null,keys__4332);
var entry__4334 = cljs.core.get.call(null,map,key__4333,"\uFDD0'user/not-found");

{
var G__4335 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4334,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__4331,key__4333,entry__4334):ret__4331);
var G__4336 = cljs.core.next.call(null,keys__4332);
ret__4331 = G__4335;
keys__4332 = G__4336;
continue;
}
} else
{return ret__4331;
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
var this__4337 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4358 = null;
var G__4358__4359 = (function (coll,v){
var this__4338 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4358__4360 = (function (coll,v,not_found){
var this__4339 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4339.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4358 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4358__4359.call(this,coll,v);
case  3 :
return G__4358__4360.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4358;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4362 = null;
var G__4362__4363 = (function (tsym4340,k){
var this__4342 = this;
var tsym4340__4343 = this;

var coll__4344 = tsym4340__4343;

return cljs.core._lookup.call(null,coll__4344,k);
});
var G__4362__4364 = (function (tsym4341,k,not_found){
var this__4345 = this;
var tsym4341__4346 = this;

var coll__4347 = tsym4341__4346;

return cljs.core._lookup.call(null,coll__4347,k,not_found);
});
G__4362 = function(tsym4341,k,not_found){
switch(arguments.length){
case  2 :
return G__4362__4363.call(this,tsym4341,k);
case  3 :
return G__4362__4364.call(this,tsym4341,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4362;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4348 = this;
return (new cljs.core.Set(this__4348.meta,cljs.core.assoc.call(null,this__4348.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4349 = this;
return cljs.core.keys.call(null,this__4349.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4350 = this;
return (new cljs.core.Set(this__4350.meta,cljs.core.dissoc.call(null,this__4350.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4351 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4352 = this;
var and__3546__auto____4353 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4353))
{var and__3546__auto____4354 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4354))
{return cljs.core.every_QMARK_.call(null,(function (p1__4330_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4330_SHARP_);
}),other);
} else
{return and__3546__auto____4354;
}
} else
{return and__3546__auto____4353;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4355 = this;
return (new cljs.core.Set(meta,this__4355.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4356 = this;
return this__4356.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4357 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4357.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4367 = cljs.core.seq.call(null,coll);
var out__4368 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4367))))
{{
var G__4369 = cljs.core.rest.call(null,in$__4367);
var G__4370 = cljs.core.conj.call(null,out__4368,cljs.core.first.call(null,in$__4367));
in$__4367 = G__4369;
out__4368 = G__4370;
continue;
}
} else
{return out__4368;
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
{var n__4371 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4372 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4372))
{var e__4373 = temp__3695__auto____4372;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4373));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4371,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4366_SHARP_){
var temp__3695__auto____4374 = cljs.core.find.call(null,smap,p1__4366_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4374))
{var e__4375 = temp__3695__auto____4374;

return cljs.core.second.call(null,e__4375);
} else
{return p1__4366_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4383 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4376,seen){
while(true){
var vec__4377__4378 = p__4376;
var f__4379 = cljs.core.nth.call(null,vec__4377__4378,0,null);
var xs__4380 = vec__4377__4378;

var temp__3698__auto____4381 = cljs.core.seq.call(null,xs__4380);

if(cljs.core.truth_(temp__3698__auto____4381))
{var s__4382 = temp__3698__auto____4381;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4379)))
{{
var G__4384 = cljs.core.rest.call(null,s__4382);
var G__4385 = seen;
p__4376 = G__4384;
seen = G__4385;
continue;
}
} else
{return cljs.core.cons.call(null,f__4379,step.call(null,cljs.core.rest.call(null,s__4382),cljs.core.conj.call(null,seen,f__4379)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4383.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4386 = cljs.core.Vector.fromArray([]);
var s__4387 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4387)))
{{
var G__4388 = cljs.core.conj.call(null,ret__4386,cljs.core.first.call(null,s__4387));
var G__4389 = cljs.core.next.call(null,s__4387);
ret__4386 = G__4388;
s__4387 = G__4389;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4386);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4390 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4390))
{return or__3548__auto____4390;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4391 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__4391 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4391 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4392 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4392))
{return or__3548__auto____4392;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4393 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__4393 > -1)))
{return cljs.core.subs.call(null,x,2,i__4393);
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
var map__4396 = cljs.core.ObjMap.fromObject([],{});
var ks__4397 = cljs.core.seq.call(null,keys);
var vs__4398 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4399 = ks__4397;

if(cljs.core.truth_(and__3546__auto____4399))
{return vs__4398;
} else
{return and__3546__auto____4399;
}
})()))
{{
var G__4400 = cljs.core.assoc.call(null,map__4396,cljs.core.first.call(null,ks__4397),cljs.core.first.call(null,vs__4398));
var G__4401 = cljs.core.next.call(null,ks__4397);
var G__4402 = cljs.core.next.call(null,vs__4398);
map__4396 = G__4400;
ks__4397 = G__4401;
vs__4398 = G__4402;
continue;
}
} else
{return map__4396;
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
var max_key__4405 = (function (k,x){
return x;
});
var max_key__4406 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4407 = (function() { 
var G__4409__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4394_SHARP_,p2__4395_SHARP_){
return max_key.call(null,k,p1__4394_SHARP_,p2__4395_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4409 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4409__delegate.call(this, k, x, y, more);
};
G__4409.cljs$lang$maxFixedArity = 3;
G__4409.cljs$lang$applyTo = (function (arglist__4410){
var k = cljs.core.first(arglist__4410);
var x = cljs.core.first(cljs.core.next(arglist__4410));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4410)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4410)));
return G__4409__delegate.call(this, k, x, y, more);
});
return G__4409;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4405.call(this,k,x);
case  3 :
return max_key__4406.call(this,k,x,y);
default:
return max_key__4407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4407.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4411 = (function (k,x){
return x;
});
var min_key__4412 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4413 = (function() { 
var G__4415__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4403_SHARP_,p2__4404_SHARP_){
return min_key.call(null,k,p1__4403_SHARP_,p2__4404_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4415 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4415__delegate.call(this, k, x, y, more);
};
G__4415.cljs$lang$maxFixedArity = 3;
G__4415.cljs$lang$applyTo = (function (arglist__4416){
var k = cljs.core.first(arglist__4416);
var x = cljs.core.first(cljs.core.next(arglist__4416));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4416)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4416)));
return G__4415__delegate.call(this, k, x, y, more);
});
return G__4415;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4411.call(this,k,x);
case  3 :
return min_key__4412.call(this,k,x,y);
default:
return min_key__4413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4413.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4419 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4420 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4417 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4417))
{var s__4418 = temp__3698__auto____4417;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4418),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4418)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4419.call(this,n,step);
case  3 :
return partition_all__4420.call(this,n,step,coll);
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
var temp__3698__auto____4422 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4422))
{var s__4423 = temp__3698__auto____4422;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4423))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4423),take_while.call(null,pred,cljs.core.rest.call(null,s__4423)));
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
var this__4424 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4425 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4441 = null;
var G__4441__4442 = (function (rng,f){
var this__4426 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4441__4443 = (function (rng,f,s){
var this__4427 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4441 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4441__4442.call(this,rng,f);
case  3 :
return G__4441__4443.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4441;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4428 = this;
var comp__4429 = (cljs.core.truth_((this__4428.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4429.call(null,this__4428.start,this__4428.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4430 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4430.end - this__4430.start) / this__4430.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4431 = this;
return this__4431.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4432 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4432.meta,(this__4432.start + this__4432.step),this__4432.end,this__4432.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4433 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4434 = this;
return (new cljs.core.Range(meta,this__4434.start,this__4434.end,this__4434.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4435 = this;
return this__4435.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4445 = null;
var G__4445__4446 = (function (rng,n){
var this__4436 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4436.start + (n * this__4436.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4437 = (this__4436.start > this__4436.end);

if(cljs.core.truth_(and__3546__auto____4437))
{return cljs.core._EQ_.call(null,this__4436.step,0);
} else
{return and__3546__auto____4437;
}
})()))
{return this__4436.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4445__4447 = (function (rng,n,not_found){
var this__4438 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4438.start + (n * this__4438.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4439 = (this__4438.start > this__4438.end);

if(cljs.core.truth_(and__3546__auto____4439))
{return cljs.core._EQ_.call(null,this__4438.step,0);
} else
{return and__3546__auto____4439;
}
})()))
{return this__4438.start;
} else
{return not_found;
}
}
});
G__4445 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4445__4446.call(this,rng,n);
case  3 :
return G__4445__4447.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4445;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4440 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4440.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4449 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4450 = (function (end){
return range.call(null,0,end,1);
});
var range__4451 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4452 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4449.call(this);
case  1 :
return range__4450.call(this,start);
case  2 :
return range__4451.call(this,start,end);
case  3 :
return range__4452.call(this,start,end,step);
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
var temp__3698__auto____4454 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4454))
{var s__4455 = temp__3698__auto____4454;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4455),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4455)));
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
var temp__3698__auto____4457 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4457))
{var s__4458 = temp__3698__auto____4457;

var fst__4459 = cljs.core.first.call(null,s__4458);
var fv__4460 = f.call(null,fst__4459);
var run__4461 = cljs.core.cons.call(null,fst__4459,cljs.core.take_while.call(null,(function (p1__4456_SHARP_){
return cljs.core._EQ_.call(null,fv__4460,f.call(null,p1__4456_SHARP_));
}),cljs.core.next.call(null,s__4458)));

return cljs.core.cons.call(null,run__4461,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4461),s__4458))));
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
var reductions__4476 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4472 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4472))
{var s__4473 = temp__3695__auto____4472;

return reductions.call(null,f,cljs.core.first.call(null,s__4473),cljs.core.rest.call(null,s__4473));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4477 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4474 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4474))
{var s__4475 = temp__3698__auto____4474;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4475)),cljs.core.rest.call(null,s__4475));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4476.call(this,f,init);
case  3 :
return reductions__4477.call(this,f,init,coll);
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
var juxt__4480 = (function (f){
return (function() {
var G__4485 = null;
var G__4485__4486 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4485__4487 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4485__4488 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4485__4489 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4485__4490 = (function() { 
var G__4492__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4492 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4492__delegate.call(this, x, y, z, args);
};
G__4492.cljs$lang$maxFixedArity = 3;
G__4492.cljs$lang$applyTo = (function (arglist__4493){
var x = cljs.core.first(arglist__4493);
var y = cljs.core.first(cljs.core.next(arglist__4493));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4493)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4493)));
return G__4492__delegate.call(this, x, y, z, args);
});
return G__4492;
})()
;
G__4485 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4485__4486.call(this);
case  1 :
return G__4485__4487.call(this,x);
case  2 :
return G__4485__4488.call(this,x,y);
case  3 :
return G__4485__4489.call(this,x,y,z);
default:
return G__4485__4490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4485.cljs$lang$maxFixedArity = 3;
G__4485.cljs$lang$applyTo = G__4485__4490.cljs$lang$applyTo;
return G__4485;
})()
});
var juxt__4481 = (function (f,g){
return (function() {
var G__4494 = null;
var G__4494__4495 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4494__4496 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4494__4497 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4494__4498 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4494__4499 = (function() { 
var G__4501__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4501 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4501__delegate.call(this, x, y, z, args);
};
G__4501.cljs$lang$maxFixedArity = 3;
G__4501.cljs$lang$applyTo = (function (arglist__4502){
var x = cljs.core.first(arglist__4502);
var y = cljs.core.first(cljs.core.next(arglist__4502));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4502)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4502)));
return G__4501__delegate.call(this, x, y, z, args);
});
return G__4501;
})()
;
G__4494 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4494__4495.call(this);
case  1 :
return G__4494__4496.call(this,x);
case  2 :
return G__4494__4497.call(this,x,y);
case  3 :
return G__4494__4498.call(this,x,y,z);
default:
return G__4494__4499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4494.cljs$lang$maxFixedArity = 3;
G__4494.cljs$lang$applyTo = G__4494__4499.cljs$lang$applyTo;
return G__4494;
})()
});
var juxt__4482 = (function (f,g,h){
return (function() {
var G__4503 = null;
var G__4503__4504 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4503__4505 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4503__4506 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4503__4507 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4503__4508 = (function() { 
var G__4510__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4510 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4510__delegate.call(this, x, y, z, args);
};
G__4510.cljs$lang$maxFixedArity = 3;
G__4510.cljs$lang$applyTo = (function (arglist__4511){
var x = cljs.core.first(arglist__4511);
var y = cljs.core.first(cljs.core.next(arglist__4511));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4511)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4511)));
return G__4510__delegate.call(this, x, y, z, args);
});
return G__4510;
})()
;
G__4503 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4503__4504.call(this);
case  1 :
return G__4503__4505.call(this,x);
case  2 :
return G__4503__4506.call(this,x,y);
case  3 :
return G__4503__4507.call(this,x,y,z);
default:
return G__4503__4508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4503.cljs$lang$maxFixedArity = 3;
G__4503.cljs$lang$applyTo = G__4503__4508.cljs$lang$applyTo;
return G__4503;
})()
});
var juxt__4483 = (function() { 
var G__4512__delegate = function (f,g,h,fs){
var fs__4479 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4513 = null;
var G__4513__4514 = (function (){
return cljs.core.reduce.call(null,(function (p1__4462_SHARP_,p2__4463_SHARP_){
return cljs.core.conj.call(null,p1__4462_SHARP_,p2__4463_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4479);
});
var G__4513__4515 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4464_SHARP_,p2__4465_SHARP_){
return cljs.core.conj.call(null,p1__4464_SHARP_,p2__4465_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4479);
});
var G__4513__4516 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4466_SHARP_,p2__4467_SHARP_){
return cljs.core.conj.call(null,p1__4466_SHARP_,p2__4467_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4479);
});
var G__4513__4517 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4468_SHARP_,p2__4469_SHARP_){
return cljs.core.conj.call(null,p1__4468_SHARP_,p2__4469_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4479);
});
var G__4513__4518 = (function() { 
var G__4520__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4470_SHARP_,p2__4471_SHARP_){
return cljs.core.conj.call(null,p1__4470_SHARP_,cljs.core.apply.call(null,p2__4471_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4479);
};
var G__4520 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4520__delegate.call(this, x, y, z, args);
};
G__4520.cljs$lang$maxFixedArity = 3;
G__4520.cljs$lang$applyTo = (function (arglist__4521){
var x = cljs.core.first(arglist__4521);
var y = cljs.core.first(cljs.core.next(arglist__4521));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4521)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4521)));
return G__4520__delegate.call(this, x, y, z, args);
});
return G__4520;
})()
;
G__4513 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4513__4514.call(this);
case  1 :
return G__4513__4515.call(this,x);
case  2 :
return G__4513__4516.call(this,x,y);
case  3 :
return G__4513__4517.call(this,x,y,z);
default:
return G__4513__4518.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4513.cljs$lang$maxFixedArity = 3;
G__4513.cljs$lang$applyTo = G__4513__4518.cljs$lang$applyTo;
return G__4513;
})()
};
var G__4512 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4512__delegate.call(this, f, g, h, fs);
};
G__4512.cljs$lang$maxFixedArity = 3;
G__4512.cljs$lang$applyTo = (function (arglist__4522){
var f = cljs.core.first(arglist__4522);
var g = cljs.core.first(cljs.core.next(arglist__4522));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4522)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4522)));
return G__4512__delegate.call(this, f, g, h, fs);
});
return G__4512;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4480.call(this,f);
case  2 :
return juxt__4481.call(this,f,g);
case  3 :
return juxt__4482.call(this,f,g,h);
default:
return juxt__4483.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4483.cljs$lang$applyTo;
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
var dorun__4524 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4527 = cljs.core.next.call(null,coll);
coll = G__4527;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4525 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4523 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4523))
{return (n > 0);
} else
{return and__3546__auto____4523;
}
})()))
{{
var G__4528 = (n - 1);
var G__4529 = cljs.core.next.call(null,coll);
n = G__4528;
coll = G__4529;
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
return dorun__4524.call(this,n);
case  2 :
return dorun__4525.call(this,n,coll);
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
var doall__4530 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4531 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4530.call(this,n);
case  2 :
return doall__4531.call(this,n,coll);
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
var matches__4533 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4533),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4533),1)))
{return cljs.core.first.call(null,matches__4533);
} else
{return cljs.core.vec.call(null,matches__4533);
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
var matches__4534 = re.exec(s);

if(cljs.core.truth_((matches__4534 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4534),1)))
{return cljs.core.first.call(null,matches__4534);
} else
{return cljs.core.vec.call(null,matches__4534);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4535 = cljs.core.re_find.call(null,re,s);
var match_idx__4536 = s.search(re);
var match_str__4537 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4535))?cljs.core.first.call(null,match_data__4535):match_data__4535);
var post_match__4538 = cljs.core.subs.call(null,s,(match_idx__4536 + cljs.core.count.call(null,match_str__4537)));

if(cljs.core.truth_(match_data__4535))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4535,re_seq.call(null,re,post_match__4538));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4540__4541 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4542 = cljs.core.nth.call(null,vec__4540__4541,0,null);
var flags__4543 = cljs.core.nth.call(null,vec__4540__4541,1,null);
var pattern__4544 = cljs.core.nth.call(null,vec__4540__4541,2,null);

return (new RegExp(pattern__4544,flags__4543));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4539_SHARP_){
return print_one.call(null,p1__4539_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4545 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4545))
{var and__3546__auto____4549 = (function (){var x__450__auto____4546 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4547 = x__450__auto____4546;

if(cljs.core.truth_(and__3546__auto____4547))
{var and__3546__auto____4548 = x__450__auto____4546.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4548))
{return cljs.core.not.call(null,x__450__auto____4546.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4548;
}
} else
{return and__3546__auto____4547;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____4546);
}
})();

if(cljs.core.truth_(and__3546__auto____4549))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4549;
}
} else
{return and__3546__auto____4545;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____4550 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4551 = x__450__auto____4550;

if(cljs.core.truth_(and__3546__auto____4551))
{var and__3546__auto____4552 = x__450__auto____4550.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4552))
{return cljs.core.not.call(null,x__450__auto____4550.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4552;
}
} else
{return and__3546__auto____4551;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____4550);
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
var first_obj__4553 = cljs.core.first.call(null,objs);
var sb__4554 = (new goog.string.StringBuffer());

var G__4555__4556 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4555__4556))
{var obj__4557 = cljs.core.first.call(null,G__4555__4556);
var G__4555__4558 = G__4555__4556;

while(true){
if(cljs.core.truth_((obj__4557 === first_obj__4553)))
{} else
{sb__4554.append(" ");
}
var G__4559__4560 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4557,opts));

if(cljs.core.truth_(G__4559__4560))
{var string__4561 = cljs.core.first.call(null,G__4559__4560);
var G__4559__4562 = G__4559__4560;

while(true){
sb__4554.append(string__4561);
var temp__3698__auto____4563 = cljs.core.next.call(null,G__4559__4562);

if(cljs.core.truth_(temp__3698__auto____4563))
{var G__4559__4564 = temp__3698__auto____4563;

{
var G__4567 = cljs.core.first.call(null,G__4559__4564);
var G__4568 = G__4559__4564;
string__4561 = G__4567;
G__4559__4562 = G__4568;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4565 = cljs.core.next.call(null,G__4555__4558);

if(cljs.core.truth_(temp__3698__auto____4565))
{var G__4555__4566 = temp__3698__auto____4565;

{
var G__4569 = cljs.core.first.call(null,G__4555__4566);
var G__4570 = G__4555__4566;
obj__4557 = G__4569;
G__4555__4558 = G__4570;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4554);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4571 = cljs.core.first.call(null,objs);

var G__4572__4573 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4572__4573))
{var obj__4574 = cljs.core.first.call(null,G__4572__4573);
var G__4572__4575 = G__4572__4573;

while(true){
if(cljs.core.truth_((obj__4574 === first_obj__4571)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4576__4577 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4574,opts));

if(cljs.core.truth_(G__4576__4577))
{var string__4578 = cljs.core.first.call(null,G__4576__4577);
var G__4576__4579 = G__4576__4577;

while(true){
cljs.core.string_print.call(null,string__4578);
var temp__3698__auto____4580 = cljs.core.next.call(null,G__4576__4579);

if(cljs.core.truth_(temp__3698__auto____4580))
{var G__4576__4581 = temp__3698__auto____4580;

{
var G__4584 = cljs.core.first.call(null,G__4576__4581);
var G__4585 = G__4576__4581;
string__4578 = G__4584;
G__4576__4579 = G__4585;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4582 = cljs.core.next.call(null,G__4572__4575);

if(cljs.core.truth_(temp__3698__auto____4582))
{var G__4572__4583 = temp__3698__auto____4582;

{
var G__4586 = cljs.core.first.call(null,G__4572__4583);
var G__4587 = G__4572__4583;
obj__4574 = G__4586;
G__4572__4575 = G__4587;
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
pr_str.cljs$lang$applyTo = (function (arglist__4588){
var objs = cljs.core.seq( arglist__4588 );;
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
pr.cljs$lang$applyTo = (function (arglist__4589){
var objs = cljs.core.seq( arglist__4589 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4590){
var objs = cljs.core.seq( arglist__4590 );;
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
println.cljs$lang$applyTo = (function (arglist__4591){
var objs = cljs.core.seq( arglist__4591 );;
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
prn.cljs$lang$applyTo = (function (arglist__4592){
var objs = cljs.core.seq( arglist__4592 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4593 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4593,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4594 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4594))
{var nspc__4595 = temp__3698__auto____4594;

return cljs.core.str.call(null,nspc__4595,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4596 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4596))
{var nspc__4597 = temp__3698__auto____4596;

return cljs.core.str.call(null,nspc__4597,"\/");
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
var pr_pair__4598 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4598,"{",", ","}",opts,coll);
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
var this__4599 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4600 = this;
var G__4601__4602 = cljs.core.seq.call(null,this__4600.watches);

if(cljs.core.truth_(G__4601__4602))
{var G__4604__4606 = cljs.core.first.call(null,G__4601__4602);
var vec__4605__4607 = G__4604__4606;
var key__4608 = cljs.core.nth.call(null,vec__4605__4607,0,null);
var f__4609 = cljs.core.nth.call(null,vec__4605__4607,1,null);
var G__4601__4610 = G__4601__4602;

var G__4604__4611 = G__4604__4606;
var G__4601__4612 = G__4601__4610;

while(true){
var vec__4613__4614 = G__4604__4611;
var key__4615 = cljs.core.nth.call(null,vec__4613__4614,0,null);
var f__4616 = cljs.core.nth.call(null,vec__4613__4614,1,null);
var G__4601__4617 = G__4601__4612;

f__4616.call(null,key__4615,this$,oldval,newval);
var temp__3698__auto____4618 = cljs.core.next.call(null,G__4601__4617);

if(cljs.core.truth_(temp__3698__auto____4618))
{var G__4601__4619 = temp__3698__auto____4618;

{
var G__4626 = cljs.core.first.call(null,G__4601__4619);
var G__4627 = G__4601__4619;
G__4604__4611 = G__4626;
G__4601__4612 = G__4627;
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
var this__4620 = this;
return this$.watches = cljs.core.assoc.call(null,this__4620.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4621 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4621.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4622 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4622.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4623 = this;
return this__4623.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4624 = this;
return this__4624.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4625 = this;
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
var atom__4634 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4635 = (function() { 
var G__4637__delegate = function (x,p__4628){
var map__4629__4630 = p__4628;
var map__4629__4631 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4629__4630))?cljs.core.apply.call(null,cljs.core.hash_map,map__4629__4630):map__4629__4630);
var validator__4632 = cljs.core.get.call(null,map__4629__4631,"\uFDD0'validator");
var meta__4633 = cljs.core.get.call(null,map__4629__4631,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4633,validator__4632,null));
};
var G__4637 = function (x,var_args){
var p__4628 = null;
if (goog.isDef(var_args)) {
  p__4628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4637__delegate.call(this, x, p__4628);
};
G__4637.cljs$lang$maxFixedArity = 1;
G__4637.cljs$lang$applyTo = (function (arglist__4638){
var x = cljs.core.first(arglist__4638);
var p__4628 = cljs.core.rest(arglist__4638);
return G__4637__delegate.call(this, x, p__4628);
});
return G__4637;
})()
;
atom = function(x,var_args){
var p__4628 = var_args;
switch(arguments.length){
case  1 :
return atom__4634.call(this,x);
default:
return atom__4635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4635.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4639 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4639))
{var validate__4640 = temp__3698__auto____4639;

if(cljs.core.truth_(validate__4640.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__4641 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4641,new_value);
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
var swap_BANG___4642 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4643 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4644 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4645 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4646 = (function() { 
var G__4648__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4648 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4648__delegate.call(this, a, f, x, y, z, more);
};
G__4648.cljs$lang$maxFixedArity = 5;
G__4648.cljs$lang$applyTo = (function (arglist__4649){
var a = cljs.core.first(arglist__4649);
var f = cljs.core.first(cljs.core.next(arglist__4649));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4649)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4649))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4649)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4649)))));
return G__4648__delegate.call(this, a, f, x, y, z, more);
});
return G__4648;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4642.call(this,a,f);
case  3 :
return swap_BANG___4643.call(this,a,f,x);
case  4 :
return swap_BANG___4644.call(this,a,f,x,y);
case  5 :
return swap_BANG___4645.call(this,a,f,x,y,z);
default:
return swap_BANG___4646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4646.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4650){
var iref = cljs.core.first(arglist__4650);
var f = cljs.core.first(cljs.core.next(arglist__4650));
var args = cljs.core.rest(cljs.core.next(arglist__4650));
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
var gensym__4651 = (function (){
return gensym.call(null,"G__");
});
var gensym__4652 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4651.call(this);
case  1 :
return gensym__4652.call(this,prefix_string);
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
var this__4654 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__4654.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4655 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4655.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4655.state,this__4655.f);
}
return cljs.core.deref.call(null,this__4655.state);
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
delay.cljs$lang$applyTo = (function (arglist__4656){
var body = cljs.core.seq( arglist__4656 );;
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
var map__4657__4658 = options;
var map__4657__4659 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4657__4658))?cljs.core.apply.call(null,cljs.core.hash_map,map__4657__4658):map__4657__4658);
var keywordize_keys__4660 = cljs.core.get.call(null,map__4657__4659,"\uFDD0'keywordize-keys");
var keyfn__4661 = (cljs.core.truth_(keywordize_keys__4660)?cljs.core.keyword:cljs.core.str);
var f__4667 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____4666 = (function iter__4662(s__4663){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4663__4664 = s__4663;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4663__4664)))
{var k__4665 = cljs.core.first.call(null,s__4663__4664);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4661.call(null,k__4665),thisfn.call(null,(x[k__4665]))]),iter__4662.call(null,cljs.core.rest.call(null,s__4663__4664)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____4666.call(null,cljs.core.js_keys.call(null,x));
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

return f__4667.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4668){
var x = cljs.core.first(arglist__4668);
var options = cljs.core.rest(arglist__4668);
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
var mem__4669 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4673__delegate = function (args){
var temp__3695__auto____4670 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4669),args);

if(cljs.core.truth_(temp__3695__auto____4670))
{var v__4671 = temp__3695__auto____4670;

return v__4671;
} else
{var ret__4672 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4669,cljs.core.assoc,args,ret__4672);
return ret__4672;
}
};
var G__4673 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4673__delegate.call(this, args);
};
G__4673.cljs$lang$maxFixedArity = 0;
G__4673.cljs$lang$applyTo = (function (arglist__4674){
var args = cljs.core.seq( arglist__4674 );;
return G__4673__delegate.call(this, args);
});
return G__4673;
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
var trampoline__4676 = (function (f){
while(true){
var ret__4675 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4675)))
{{
var G__4679 = ret__4675;
f = G__4679;
continue;
}
} else
{return ret__4675;
}
break;
}
});
var trampoline__4677 = (function() { 
var G__4680__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4680 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4680__delegate.call(this, f, args);
};
G__4680.cljs$lang$maxFixedArity = 1;
G__4680.cljs$lang$applyTo = (function (arglist__4681){
var f = cljs.core.first(arglist__4681);
var args = cljs.core.rest(arglist__4681);
return G__4680__delegate.call(this, f, args);
});
return G__4680;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4676.call(this,f);
default:
return trampoline__4677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4677.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4682 = (function (){
return rand.call(null,1);
});
var rand__4683 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4682.call(this);
case  1 :
return rand__4683.call(this,n);
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
var k__4685 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4685,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4685,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___4694 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4695 = (function (h,child,parent){
var or__3548__auto____4686 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4686))
{return or__3548__auto____4686;
} else
{var or__3548__auto____4687 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4687))
{return or__3548__auto____4687;
} else
{var and__3546__auto____4688 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4688))
{var and__3546__auto____4689 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4689))
{var and__3546__auto____4690 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4690))
{var ret__4691 = true;
var i__4692 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4693 = cljs.core.not.call(null,ret__4691);

if(cljs.core.truth_(or__3548__auto____4693))
{return or__3548__auto____4693;
} else
{return cljs.core._EQ_.call(null,i__4692,cljs.core.count.call(null,parent));
}
})()))
{return ret__4691;
} else
{{
var G__4697 = isa_QMARK_.call(null,h,child.call(null,i__4692),parent.call(null,i__4692));
var G__4698 = (i__4692 + 1);
ret__4691 = G__4697;
i__4692 = G__4698;
continue;
}
}
break;
}
} else
{return and__3546__auto____4690;
}
} else
{return and__3546__auto____4689;
}
} else
{return and__3546__auto____4688;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4694.call(this,h,child);
case  3 :
return isa_QMARK___4695.call(this,h,child,parent);
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
var parents__4699 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4700 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4699.call(this,h);
case  2 :
return parents__4700.call(this,h,tag);
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
var ancestors__4702 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4703 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4702.call(this,h);
case  2 :
return ancestors__4703.call(this,h,tag);
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
var descendants__4705 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4706 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4705.call(this,h);
case  2 :
return descendants__4706.call(this,h,tag);
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
var derive__4716 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4717 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__4711 = "\uFDD0'parents".call(null,h);
var td__4712 = "\uFDD0'descendants".call(null,h);
var ta__4713 = "\uFDD0'ancestors".call(null,h);
var tf__4714 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4715 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4711.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4713.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4713.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4711,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4714.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4712,parent,ta__4713),"\uFDD0'descendants":tf__4714.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4713,tag,td__4712)});
})());

if(cljs.core.truth_(or__3548__auto____4715))
{return or__3548__auto____4715;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4716.call(this,h,tag);
case  3 :
return derive__4717.call(this,h,tag,parent);
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
var underive__4723 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4724 = (function (h,tag,parent){
var parentMap__4719 = "\uFDD0'parents".call(null,h);
var childsParents__4720 = (cljs.core.truth_(parentMap__4719.call(null,tag))?cljs.core.disj.call(null,parentMap__4719.call(null,tag),parent):cljs.core.set([]));
var newParents__4721 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4720))?cljs.core.assoc.call(null,parentMap__4719,tag,childsParents__4720):cljs.core.dissoc.call(null,parentMap__4719,tag));
var deriv_seq__4722 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4708_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4708_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4708_SHARP_),cljs.core.second.call(null,p1__4708_SHARP_)));
}),cljs.core.seq.call(null,newParents__4721)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4719.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4709_SHARP_,p2__4710_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4709_SHARP_,p2__4710_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4722));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4723.call(this,h,tag);
case  3 :
return underive__4724.call(this,h,tag,parent);
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
var xprefs__4726 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4728 = (cljs.core.truth_((function (){var and__3546__auto____4727 = xprefs__4726;

if(cljs.core.truth_(and__3546__auto____4727))
{return xprefs__4726.call(null,y);
} else
{return and__3546__auto____4727;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4728))
{return or__3548__auto____4728;
} else
{var or__3548__auto____4730 = (function (){var ps__4729 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4729) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4729),prefer_table)))
{} else
{}
{
var G__4733 = cljs.core.rest.call(null,ps__4729);
ps__4729 = G__4733;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4730))
{return or__3548__auto____4730;
} else
{var or__3548__auto____4732 = (function (){var ps__4731 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4731) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4731),y,prefer_table)))
{} else
{}
{
var G__4734 = cljs.core.rest.call(null,ps__4731);
ps__4731 = G__4734;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4732))
{return or__3548__auto____4732;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4735 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4735))
{return or__3548__auto____4735;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4744 = cljs.core.reduce.call(null,(function (be,p__4736){
var vec__4737__4738 = p__4736;
var k__4739 = cljs.core.nth.call(null,vec__4737__4738,0,null);
var ___4740 = cljs.core.nth.call(null,vec__4737__4738,1,null);
var e__4741 = vec__4737__4738;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4739)))
{var be2__4743 = (cljs.core.truth_((function (){var or__3548__auto____4742 = (be === null);

if(cljs.core.truth_(or__3548__auto____4742))
{return or__3548__auto____4742;
} else
{return cljs.core.dominates.call(null,k__4739,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4741:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4743),k__4739,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4739," and ",cljs.core.first.call(null,be2__4743),", and neither is preferred")));
}
return be2__4743;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4744))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4744));
return cljs.core.second.call(null,best_entry__4744);
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
if(cljs.core.truth_((function (){var and__3546__auto____4745 = mf;

if(cljs.core.truth_(and__3546__auto____4745))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4745;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4746 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4746))
{return or__3548__auto____4746;
} else
{var or__3548__auto____4747 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4747))
{return or__3548__auto____4747;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4748 = mf;

if(cljs.core.truth_(and__3546__auto____4748))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4748;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4749 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4749))
{return or__3548__auto____4749;
} else
{var or__3548__auto____4750 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4750))
{return or__3548__auto____4750;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4751 = mf;

if(cljs.core.truth_(and__3546__auto____4751))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4751;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4752 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4752))
{return or__3548__auto____4752;
} else
{var or__3548__auto____4753 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4753))
{return or__3548__auto____4753;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4754 = mf;

if(cljs.core.truth_(and__3546__auto____4754))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4754;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4755 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4755))
{return or__3548__auto____4755;
} else
{var or__3548__auto____4756 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4756))
{return or__3548__auto____4756;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4757 = mf;

if(cljs.core.truth_(and__3546__auto____4757))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4757;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4758 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4758))
{return or__3548__auto____4758;
} else
{var or__3548__auto____4759 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4759))
{return or__3548__auto____4759;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4760 = mf;

if(cljs.core.truth_(and__3546__auto____4760))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4760;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4761 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4761))
{return or__3548__auto____4761;
} else
{var or__3548__auto____4762 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4762))
{return or__3548__auto____4762;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4763 = mf;

if(cljs.core.truth_(and__3546__auto____4763))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4763;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4764 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4764))
{return or__3548__auto____4764;
} else
{var or__3548__auto____4765 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4765))
{return or__3548__auto____4765;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4766 = mf;

if(cljs.core.truth_(and__3546__auto____4766))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4766;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4767 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4767))
{return or__3548__auto____4767;
} else
{var or__3548__auto____4768 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4768))
{return or__3548__auto____4768;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4769 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4770 = cljs.core._get_method.call(null,mf,dispatch_val__4769);

if(cljs.core.truth_(target_fn__4770))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4769)));
}
return cljs.core.apply.call(null,target_fn__4770,args);
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
var this__4771 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4772 = this;
cljs.core.swap_BANG_.call(null,this__4772.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4772.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4772.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4772.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4773 = this;
cljs.core.swap_BANG_.call(null,this__4773.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4773.method_cache,this__4773.method_table,this__4773.cached_hierarchy,this__4773.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4774 = this;
cljs.core.swap_BANG_.call(null,this__4774.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4774.method_cache,this__4774.method_table,this__4774.cached_hierarchy,this__4774.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4775 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4775.cached_hierarchy),cljs.core.deref.call(null,this__4775.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4775.method_cache,this__4775.method_table,this__4775.cached_hierarchy,this__4775.hierarchy);
}
var temp__3695__auto____4776 = cljs.core.deref.call(null,this__4775.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4776))
{var target_fn__4777 = temp__3695__auto____4776;

return target_fn__4777;
} else
{var temp__3695__auto____4778 = cljs.core.find_and_cache_best_method.call(null,this__4775.name,dispatch_val,this__4775.hierarchy,this__4775.method_table,this__4775.prefer_table,this__4775.method_cache,this__4775.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4778))
{var target_fn__4779 = temp__3695__auto____4778;

return target_fn__4779;
} else
{return cljs.core.deref.call(null,this__4775.method_table).call(null,this__4775.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4780 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4780.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4780.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4780.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4780.method_cache,this__4780.method_table,this__4780.cached_hierarchy,this__4780.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4781 = this;
return cljs.core.deref.call(null,this__4781.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4782 = this;
return cljs.core.deref.call(null,this__4782.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4783 = this;
return cljs.core.do_dispatch.call(null,mf,this__4783.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4784__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4784 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4784__delegate.call(this, _, args);
};
G__4784.cljs$lang$maxFixedArity = 1;
G__4784.cljs$lang$applyTo = (function (arglist__4785){
var _ = cljs.core.first(arglist__4785);
var args = cljs.core.rest(arglist__4785);
return G__4784__delegate.call(this, _, args);
});
return G__4784;
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
