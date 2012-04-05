goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__200954 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__200935__200936 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__200935__200936))
{var G__200938__200940 = cljs.core.first.call(null,G__200935__200936);
var vec__200939__200941 = G__200938__200940;
var k__200942 = cljs.core.nth.call(null,vec__200939__200941,0,null);
var v__200943 = cljs.core.nth.call(null,vec__200939__200941,1,null);
var G__200935__200944 = G__200935__200936;

var G__200938__200945 = G__200938__200940;
var G__200935__200946 = G__200935__200944;

while(true){
var vec__200947__200948 = G__200938__200945;
var k__200949 = cljs.core.nth.call(null,vec__200947__200948,0,null);
var v__200950 = cljs.core.nth.call(null,vec__200947__200948,1,null);
var G__200935__200951 = G__200935__200946;

dom_attr.call(null,elem,k__200949,v__200950);
var temp__3698__auto____200952 = cljs.core.next.call(null,G__200935__200951);

if(cljs.core.truth_(temp__3698__auto____200952))
{var G__200935__200953 = temp__3698__auto____200952;

{
var G__200957 = cljs.core.first.call(null,G__200935__200953);
var G__200958 = G__200935__200953;
G__200938__200945 = G__200957;
G__200935__200946 = G__200958;
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
var dom_attr__200955 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__200954.call(this,elem,k);
case  3 :
return dom_attr__200955.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__200959__200960 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__200959__200960))
{var c__200961 = cljs.core.first.call(null,G__200959__200960);
var G__200959__200962 = G__200959__200960;

while(true){
var child__200963 = (cljs.core.truth_((c__200961 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__200961))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__200961))?goog.dom.createTextNode.call(null,c__200961):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__200961))?crate.core.elem_factory.call(null,c__200961):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__200961))?as_content.call(null,parent,c__200961):(cljs.core.truth_(c__200961.nodeName)?c__200961:null))))));

if(cljs.core.truth_(child__200963))
{goog.dom.appendChild.call(null,parent,child__200963);
} else
{}
var temp__3698__auto____200964 = cljs.core.next.call(null,G__200959__200962);

if(cljs.core.truth_(temp__3698__auto____200964))
{var G__200959__200965 = temp__3698__auto____200964;

{
var G__200966 = cljs.core.first.call(null,G__200959__200965);
var G__200967 = G__200959__200965;
c__200961 = G__200966;
G__200959__200962 = G__200967;
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
crate.core.normalize_element = (function normalize_element(p__200969){
var vec__200970__200971 = p__200969;
var tag__200972 = cljs.core.nth.call(null,vec__200970__200971,0,null);
var content__200973 = cljs.core.nthnext.call(null,vec__200970__200971,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____200974 = cljs.core.keyword_QMARK_.call(null,tag__200972);

if(cljs.core.truth_(or__3548__auto____200974))
{return or__3548__auto____200974;
} else
{var or__3548__auto____200975 = cljs.core.symbol_QMARK_.call(null,tag__200972);

if(cljs.core.truth_(or__3548__auto____200975))
{return or__3548__auto____200975;
} else
{return cljs.core.string_QMARK_.call(null,tag__200972);
}
}
})())))
{throw cljs.core.str.call(null,tag__200972," is not a valid tag name.");
} else
{}
var vec__200976__200978 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__200972));
var ___200979 = cljs.core.nth.call(null,vec__200976__200978,0,null);
var tag__200980 = cljs.core.nth.call(null,vec__200976__200978,1,null);
var id__200981 = cljs.core.nth.call(null,vec__200976__200978,2,null);
var class$__200982 = cljs.core.nth.call(null,vec__200976__200978,3,null);
var vec__200977__200989 = (function (){var vec__200983__200984 = clojure.string.split.call(null,tag__200980,/:/);
var nsp__200985 = cljs.core.nth.call(null,vec__200983__200984,0,null);
var t__200986 = cljs.core.nth.call(null,vec__200983__200984,1,null);
var ns_xmlns__200987 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__200985));

if(cljs.core.truth_(t__200986))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____200988 = ns_xmlns__200987;

if(cljs.core.truth_(or__3548__auto____200988))
{return or__3548__auto____200988;
} else
{return nsp__200985;
}
})(),t__200986]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__200985]);
}
})();
var nsp__200990 = cljs.core.nth.call(null,vec__200977__200989,0,null);
var tag__200991 = cljs.core.nth.call(null,vec__200977__200989,1,null);
var tag_attrs__200993 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__200968_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__200968_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____200992 = id__200981;

if(cljs.core.truth_(or__3548__auto____200992))
{return or__3548__auto____200992;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__200982)?clojure.string.replace.call(null,class$__200982,/\./," "):null)})));
var map_attrs__200994 = cljs.core.first.call(null,content__200973);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__200994)))
{return cljs.core.Vector.fromArray([nsp__200990,tag__200991,cljs.core.merge.call(null,tag_attrs__200993,map_attrs__200994),cljs.core.next.call(null,content__200973)]);
} else
{return cljs.core.Vector.fromArray([nsp__200990,tag__200991,tag_attrs__200993,content__200973]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__200995 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__200995)))
{crate.core.dom_attr.call(null,elem,attrs__200995);
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
var vec__200996__200997 = crate.core.normalize_element.call(null,tag_def);
var nsp__200998 = cljs.core.nth.call(null,vec__200996__200997,0,null);
var tag__200999 = cljs.core.nth.call(null,vec__200996__200997,1,null);
var attrs__201000 = cljs.core.nth.call(null,vec__200996__200997,2,null);
var content__201001 = cljs.core.nth.call(null,vec__200996__200997,3,null);
var elem__201002 = crate.core.create_elem.call(null,nsp__200998,tag__200999);

crate.core.dom_attr.call(null,elem__201002,attrs__201000);
crate.core.as_content.call(null,elem__201002,content__201001);
return elem__201002;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__201003 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__201003)))
{return res__201003;
} else
{return cljs.core.first.call(null,res__201003);
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
html.cljs$lang$applyTo = (function (arglist__201004){
var tags = cljs.core.seq( arglist__201004 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
