goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__339084 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__339065__339066 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__339065__339066))
{var G__339068__339070 = cljs.core.first.call(null,G__339065__339066);
var vec__339069__339071 = G__339068__339070;
var k__339072 = cljs.core.nth.call(null,vec__339069__339071,0,null);
var v__339073 = cljs.core.nth.call(null,vec__339069__339071,1,null);
var G__339065__339074 = G__339065__339066;

var G__339068__339075 = G__339068__339070;
var G__339065__339076 = G__339065__339074;

while(true){
var vec__339077__339078 = G__339068__339075;
var k__339079 = cljs.core.nth.call(null,vec__339077__339078,0,null);
var v__339080 = cljs.core.nth.call(null,vec__339077__339078,1,null);
var G__339065__339081 = G__339065__339076;

dom_attr.call(null,elem,k__339079,v__339080);
var temp__3698__auto____339082 = cljs.core.next.call(null,G__339065__339081);

if(cljs.core.truth_(temp__3698__auto____339082))
{var G__339065__339083 = temp__3698__auto____339082;

{
var G__339087 = cljs.core.first.call(null,G__339065__339083);
var G__339088 = G__339065__339083;
G__339068__339075 = G__339087;
G__339065__339076 = G__339088;
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
var dom_attr__339085 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__339084.call(this,elem,k);
case  3 :
return dom_attr__339085.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__339089__339090 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__339089__339090))
{var c__339091 = cljs.core.first.call(null,G__339089__339090);
var G__339089__339092 = G__339089__339090;

while(true){
var child__339093 = (cljs.core.truth_((c__339091 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__339091))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__339091))?goog.dom.createTextNode.call(null,c__339091):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__339091))?crate.core.elem_factory.call(null,c__339091):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__339091))?as_content.call(null,parent,c__339091):(cljs.core.truth_(c__339091.nodeName)?c__339091:null))))));

if(cljs.core.truth_(child__339093))
{goog.dom.appendChild.call(null,parent,child__339093);
} else
{}
var temp__3698__auto____339094 = cljs.core.next.call(null,G__339089__339092);

if(cljs.core.truth_(temp__3698__auto____339094))
{var G__339089__339095 = temp__3698__auto____339094;

{
var G__339096 = cljs.core.first.call(null,G__339089__339095);
var G__339097 = G__339089__339095;
c__339091 = G__339096;
G__339089__339092 = G__339097;
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
crate.core.normalize_element = (function normalize_element(p__339099){
var vec__339100__339101 = p__339099;
var tag__339102 = cljs.core.nth.call(null,vec__339100__339101,0,null);
var content__339103 = cljs.core.nthnext.call(null,vec__339100__339101,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____339104 = cljs.core.keyword_QMARK_.call(null,tag__339102);

if(cljs.core.truth_(or__3548__auto____339104))
{return or__3548__auto____339104;
} else
{var or__3548__auto____339105 = cljs.core.symbol_QMARK_.call(null,tag__339102);

if(cljs.core.truth_(or__3548__auto____339105))
{return or__3548__auto____339105;
} else
{return cljs.core.string_QMARK_.call(null,tag__339102);
}
}
})())))
{throw cljs.core.str.call(null,tag__339102," is not a valid tag name.");
} else
{}
var vec__339106__339108 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__339102));
var ___339109 = cljs.core.nth.call(null,vec__339106__339108,0,null);
var tag__339110 = cljs.core.nth.call(null,vec__339106__339108,1,null);
var id__339111 = cljs.core.nth.call(null,vec__339106__339108,2,null);
var class$__339112 = cljs.core.nth.call(null,vec__339106__339108,3,null);
var vec__339107__339119 = (function (){var vec__339113__339114 = clojure.string.split.call(null,tag__339110,/:/);
var nsp__339115 = cljs.core.nth.call(null,vec__339113__339114,0,null);
var t__339116 = cljs.core.nth.call(null,vec__339113__339114,1,null);
var ns_xmlns__339117 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__339115));

if(cljs.core.truth_(t__339116))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____339118 = ns_xmlns__339117;

if(cljs.core.truth_(or__3548__auto____339118))
{return or__3548__auto____339118;
} else
{return nsp__339115;
}
})(),t__339116]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__339115]);
}
})();
var nsp__339120 = cljs.core.nth.call(null,vec__339107__339119,0,null);
var tag__339121 = cljs.core.nth.call(null,vec__339107__339119,1,null);
var tag_attrs__339123 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__339098_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__339098_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____339122 = id__339111;

if(cljs.core.truth_(or__3548__auto____339122))
{return or__3548__auto____339122;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__339112)?clojure.string.replace.call(null,class$__339112,/\./," "):null)})));
var map_attrs__339124 = cljs.core.first.call(null,content__339103);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__339124)))
{return cljs.core.Vector.fromArray([nsp__339120,tag__339121,cljs.core.merge.call(null,tag_attrs__339123,map_attrs__339124),cljs.core.next.call(null,content__339103)]);
} else
{return cljs.core.Vector.fromArray([nsp__339120,tag__339121,tag_attrs__339123,content__339103]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__339125 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__339125)))
{crate.core.dom_attr.call(null,elem,attrs__339125);
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
var vec__339126__339127 = crate.core.normalize_element.call(null,tag_def);
var nsp__339128 = cljs.core.nth.call(null,vec__339126__339127,0,null);
var tag__339129 = cljs.core.nth.call(null,vec__339126__339127,1,null);
var attrs__339130 = cljs.core.nth.call(null,vec__339126__339127,2,null);
var content__339131 = cljs.core.nth.call(null,vec__339126__339127,3,null);
var elem__339132 = crate.core.create_elem.call(null,nsp__339128,tag__339129);

crate.core.dom_attr.call(null,elem__339132,attrs__339130);
crate.core.as_content.call(null,elem__339132,content__339131);
return elem__339132;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__339133 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__339133)))
{return res__339133;
} else
{return cljs.core.first.call(null,res__339133);
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
html.cljs$lang$applyTo = (function (arglist__339134){
var tags = cljs.core.seq( arglist__339134 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
