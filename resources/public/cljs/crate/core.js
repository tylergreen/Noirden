goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__394072 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__394053__394054 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__394053__394054))
{var G__394056__394058 = cljs.core.first.call(null,G__394053__394054);
var vec__394057__394059 = G__394056__394058;
var k__394060 = cljs.core.nth.call(null,vec__394057__394059,0,null);
var v__394061 = cljs.core.nth.call(null,vec__394057__394059,1,null);
var G__394053__394062 = G__394053__394054;

var G__394056__394063 = G__394056__394058;
var G__394053__394064 = G__394053__394062;

while(true){
var vec__394065__394066 = G__394056__394063;
var k__394067 = cljs.core.nth.call(null,vec__394065__394066,0,null);
var v__394068 = cljs.core.nth.call(null,vec__394065__394066,1,null);
var G__394053__394069 = G__394053__394064;

dom_attr.call(null,elem,k__394067,v__394068);
var temp__3698__auto____394070 = cljs.core.next.call(null,G__394053__394069);

if(cljs.core.truth_(temp__3698__auto____394070))
{var G__394053__394071 = temp__3698__auto____394070;

{
var G__394075 = cljs.core.first.call(null,G__394053__394071);
var G__394076 = G__394053__394071;
G__394056__394063 = G__394075;
G__394053__394064 = G__394076;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__394073 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__394072.call(this,elem,k);
case  3 :
return dom_attr__394073.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__394077__394078 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__394077__394078))
{var c__394079 = cljs.core.first.call(null,G__394077__394078);
var G__394077__394080 = G__394077__394078;

while(true){
var child__394081 = (cljs.core.truth_((c__394079 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__394079))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__394079))?goog.dom.createTextNode.call(null,c__394079):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__394079))?crate.core.elem_factory.call(null,c__394079):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__394079))?as_content.call(null,parent,c__394079):(cljs.core.truth_(c__394079.nodeName)?c__394079:null))))));

if(cljs.core.truth_(child__394081))
{goog.dom.appendChild.call(null,parent,child__394081);
} else
{}
var temp__3698__auto____394082 = cljs.core.next.call(null,G__394077__394080);

if(cljs.core.truth_(temp__3698__auto____394082))
{var G__394077__394083 = temp__3698__auto____394082;

{
var G__394084 = cljs.core.first.call(null,G__394077__394083);
var G__394085 = G__394077__394083;
c__394079 = G__394084;
G__394077__394080 = G__394085;
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
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.core.normalize_element = (function normalize_element(p__394087){
var vec__394088__394089 = p__394087;
var tag__394090 = cljs.core.nth.call(null,vec__394088__394089,0,null);
var content__394091 = cljs.core.nthnext.call(null,vec__394088__394089,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____394092 = cljs.core.keyword_QMARK_.call(null,tag__394090);

if(cljs.core.truth_(or__3548__auto____394092))
{return or__3548__auto____394092;
} else
{var or__3548__auto____394093 = cljs.core.symbol_QMARK_.call(null,tag__394090);

if(cljs.core.truth_(or__3548__auto____394093))
{return or__3548__auto____394093;
} else
{return cljs.core.string_QMARK_.call(null,tag__394090);
}
}
})())))
{throw cljs.core.str.call(null,tag__394090," is not a valid tag name.");
} else
{}
var vec__394094__394096 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__394090));
var ___394097 = cljs.core.nth.call(null,vec__394094__394096,0,null);
var tag__394098 = cljs.core.nth.call(null,vec__394094__394096,1,null);
var id__394099 = cljs.core.nth.call(null,vec__394094__394096,2,null);
var class$__394100 = cljs.core.nth.call(null,vec__394094__394096,3,null);
var vec__394095__394107 = (function (){var vec__394101__394102 = clojure.string.split.call(null,tag__394098,/:/);
var nsp__394103 = cljs.core.nth.call(null,vec__394101__394102,0,null);
var t__394104 = cljs.core.nth.call(null,vec__394101__394102,1,null);
var ns_xmlns__394105 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__394103));

if(cljs.core.truth_(t__394104))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____394106 = ns_xmlns__394105;

if(cljs.core.truth_(or__3548__auto____394106))
{return or__3548__auto____394106;
} else
{return nsp__394103;
}
})(),t__394104]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__394103]);
}
})();
var nsp__394108 = cljs.core.nth.call(null,vec__394095__394107,0,null);
var tag__394109 = cljs.core.nth.call(null,vec__394095__394107,1,null);
var tag_attrs__394111 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__394086_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__394086_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____394110 = id__394099;

if(cljs.core.truth_(or__3548__auto____394110))
{return or__3548__auto____394110;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__394100)?clojure.string.replace.call(null,class$__394100,/\./," "):null)})));
var map_attrs__394112 = cljs.core.first.call(null,content__394091);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__394112)))
{return cljs.core.Vector.fromArray([nsp__394108,tag__394109,cljs.core.merge.call(null,tag_attrs__394111,map_attrs__394112),cljs.core.next.call(null,content__394091)]);
} else
{return cljs.core.Vector.fromArray([nsp__394108,tag__394109,tag_attrs__394111,content__394091]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__394113 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__394113)))
{crate.core.dom_attr.call(null,elem,attrs__394113);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__394114__394115 = crate.core.normalize_element.call(null,tag_def);
var nsp__394116 = cljs.core.nth.call(null,vec__394114__394115,0,null);
var tag__394117 = cljs.core.nth.call(null,vec__394114__394115,1,null);
var attrs__394118 = cljs.core.nth.call(null,vec__394114__394115,2,null);
var content__394119 = cljs.core.nth.call(null,vec__394114__394115,3,null);
var elem__394120 = crate.core.create_elem.call(null,nsp__394116,tag__394117);

crate.core.dom_attr.call(null,elem__394120,attrs__394118);
crate.core.as_content.call(null,elem__394120,content__394119);
return elem__394120;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__394121 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__394121)))
{return res__394121;
} else
{return cljs.core.first.call(null,res__394121);
}
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__394122){
var tags = cljs.core.seq( arglist__394122 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
