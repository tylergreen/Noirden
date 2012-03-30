goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__153042 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__153023__153024 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__153023__153024))
{var G__153026__153028 = cljs.core.first.call(null,G__153023__153024);
var vec__153027__153029 = G__153026__153028;
var k__153030 = cljs.core.nth.call(null,vec__153027__153029,0,null);
var v__153031 = cljs.core.nth.call(null,vec__153027__153029,1,null);
var G__153023__153032 = G__153023__153024;

var G__153026__153033 = G__153026__153028;
var G__153023__153034 = G__153023__153032;

while(true){
var vec__153035__153036 = G__153026__153033;
var k__153037 = cljs.core.nth.call(null,vec__153035__153036,0,null);
var v__153038 = cljs.core.nth.call(null,vec__153035__153036,1,null);
var G__153023__153039 = G__153023__153034;

dom_attr.call(null,elem,k__153037,v__153038);
var temp__3698__auto____153040 = cljs.core.next.call(null,G__153023__153039);

if(cljs.core.truth_(temp__3698__auto____153040))
{var G__153023__153041 = temp__3698__auto____153040;

{
var G__153045 = cljs.core.first.call(null,G__153023__153041);
var G__153046 = G__153023__153041;
G__153026__153033 = G__153045;
G__153023__153034 = G__153046;
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
var dom_attr__153043 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__153042.call(this,elem,k);
case  3 :
return dom_attr__153043.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__153047__153048 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__153047__153048))
{var c__153049 = cljs.core.first.call(null,G__153047__153048);
var G__153047__153050 = G__153047__153048;

while(true){
var child__153051 = (cljs.core.truth_((c__153049 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__153049))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__153049))?goog.dom.createTextNode.call(null,c__153049):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__153049))?crate.core.elem_factory.call(null,c__153049):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__153049))?as_content.call(null,parent,c__153049):(cljs.core.truth_(c__153049.nodeName)?c__153049:null))))));

if(cljs.core.truth_(child__153051))
{goog.dom.appendChild.call(null,parent,child__153051);
} else
{}
var temp__3698__auto____153052 = cljs.core.next.call(null,G__153047__153050);

if(cljs.core.truth_(temp__3698__auto____153052))
{var G__153047__153053 = temp__3698__auto____153052;

{
var G__153054 = cljs.core.first.call(null,G__153047__153053);
var G__153055 = G__153047__153053;
c__153049 = G__153054;
G__153047__153050 = G__153055;
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
crate.core.normalize_element = (function normalize_element(p__153057){
var vec__153058__153059 = p__153057;
var tag__153060 = cljs.core.nth.call(null,vec__153058__153059,0,null);
var content__153061 = cljs.core.nthnext.call(null,vec__153058__153059,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____153062 = cljs.core.keyword_QMARK_.call(null,tag__153060);

if(cljs.core.truth_(or__3548__auto____153062))
{return or__3548__auto____153062;
} else
{var or__3548__auto____153063 = cljs.core.symbol_QMARK_.call(null,tag__153060);

if(cljs.core.truth_(or__3548__auto____153063))
{return or__3548__auto____153063;
} else
{return cljs.core.string_QMARK_.call(null,tag__153060);
}
}
})())))
{throw cljs.core.str.call(null,tag__153060," is not a valid tag name.");
} else
{}
var vec__153064__153066 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__153060));
var ___153067 = cljs.core.nth.call(null,vec__153064__153066,0,null);
var tag__153068 = cljs.core.nth.call(null,vec__153064__153066,1,null);
var id__153069 = cljs.core.nth.call(null,vec__153064__153066,2,null);
var class$__153070 = cljs.core.nth.call(null,vec__153064__153066,3,null);
var vec__153065__153077 = (function (){var vec__153071__153072 = clojure.string.split.call(null,tag__153068,/:/);
var nsp__153073 = cljs.core.nth.call(null,vec__153071__153072,0,null);
var t__153074 = cljs.core.nth.call(null,vec__153071__153072,1,null);
var ns_xmlns__153075 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__153073));

if(cljs.core.truth_(t__153074))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____153076 = ns_xmlns__153075;

if(cljs.core.truth_(or__3548__auto____153076))
{return or__3548__auto____153076;
} else
{return nsp__153073;
}
})(),t__153074]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__153073]);
}
})();
var nsp__153078 = cljs.core.nth.call(null,vec__153065__153077,0,null);
var tag__153079 = cljs.core.nth.call(null,vec__153065__153077,1,null);
var tag_attrs__153081 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__153056_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__153056_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____153080 = id__153069;

if(cljs.core.truth_(or__3548__auto____153080))
{return or__3548__auto____153080;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__153070)?clojure.string.replace.call(null,class$__153070,/\./," "):null)})));
var map_attrs__153082 = cljs.core.first.call(null,content__153061);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__153082)))
{return cljs.core.Vector.fromArray([nsp__153078,tag__153079,cljs.core.merge.call(null,tag_attrs__153081,map_attrs__153082),cljs.core.next.call(null,content__153061)]);
} else
{return cljs.core.Vector.fromArray([nsp__153078,tag__153079,tag_attrs__153081,content__153061]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__153083 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__153083)))
{crate.core.dom_attr.call(null,elem,attrs__153083);
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
var vec__153084__153085 = crate.core.normalize_element.call(null,tag_def);
var nsp__153086 = cljs.core.nth.call(null,vec__153084__153085,0,null);
var tag__153087 = cljs.core.nth.call(null,vec__153084__153085,1,null);
var attrs__153088 = cljs.core.nth.call(null,vec__153084__153085,2,null);
var content__153089 = cljs.core.nth.call(null,vec__153084__153085,3,null);
var elem__153090 = crate.core.create_elem.call(null,nsp__153086,tag__153087);

crate.core.dom_attr.call(null,elem__153090,attrs__153088);
crate.core.as_content.call(null,elem__153090,content__153089);
return elem__153090;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__153091 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__153091)))
{return res__153091;
} else
{return cljs.core.first.call(null,res__153091);
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
html.cljs$lang$applyTo = (function (arglist__153092){
var tags = cljs.core.seq( arglist__153092 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
