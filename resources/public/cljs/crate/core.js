goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__265081 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__265062__265063 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__265062__265063))
{var G__265065__265067 = cljs.core.first.call(null,G__265062__265063);
var vec__265066__265068 = G__265065__265067;
var k__265069 = cljs.core.nth.call(null,vec__265066__265068,0,null);
var v__265070 = cljs.core.nth.call(null,vec__265066__265068,1,null);
var G__265062__265071 = G__265062__265063;

var G__265065__265072 = G__265065__265067;
var G__265062__265073 = G__265062__265071;

while(true){
var vec__265074__265075 = G__265065__265072;
var k__265076 = cljs.core.nth.call(null,vec__265074__265075,0,null);
var v__265077 = cljs.core.nth.call(null,vec__265074__265075,1,null);
var G__265062__265078 = G__265062__265073;

dom_attr.call(null,elem,k__265076,v__265077);
var temp__3698__auto____265079 = cljs.core.next.call(null,G__265062__265078);

if(cljs.core.truth_(temp__3698__auto____265079))
{var G__265062__265080 = temp__3698__auto____265079;

{
var G__265084 = cljs.core.first.call(null,G__265062__265080);
var G__265085 = G__265062__265080;
G__265065__265072 = G__265084;
G__265062__265073 = G__265085;
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
var dom_attr__265082 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__265081.call(this,elem,k);
case  3 :
return dom_attr__265082.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__265086__265087 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__265086__265087))
{var c__265088 = cljs.core.first.call(null,G__265086__265087);
var G__265086__265089 = G__265086__265087;

while(true){
var child__265090 = (cljs.core.truth_((c__265088 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__265088))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__265088))?goog.dom.createTextNode.call(null,c__265088):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__265088))?crate.core.elem_factory.call(null,c__265088):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__265088))?as_content.call(null,parent,c__265088):(cljs.core.truth_(c__265088.nodeName)?c__265088:null))))));

if(cljs.core.truth_(child__265090))
{goog.dom.appendChild.call(null,parent,child__265090);
} else
{}
var temp__3698__auto____265091 = cljs.core.next.call(null,G__265086__265089);

if(cljs.core.truth_(temp__3698__auto____265091))
{var G__265086__265092 = temp__3698__auto____265091;

{
var G__265093 = cljs.core.first.call(null,G__265086__265092);
var G__265094 = G__265086__265092;
c__265088 = G__265093;
G__265086__265089 = G__265094;
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
crate.core.normalize_element = (function normalize_element(p__265096){
var vec__265097__265098 = p__265096;
var tag__265099 = cljs.core.nth.call(null,vec__265097__265098,0,null);
var content__265100 = cljs.core.nthnext.call(null,vec__265097__265098,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____265101 = cljs.core.keyword_QMARK_.call(null,tag__265099);

if(cljs.core.truth_(or__3548__auto____265101))
{return or__3548__auto____265101;
} else
{var or__3548__auto____265102 = cljs.core.symbol_QMARK_.call(null,tag__265099);

if(cljs.core.truth_(or__3548__auto____265102))
{return or__3548__auto____265102;
} else
{return cljs.core.string_QMARK_.call(null,tag__265099);
}
}
})())))
{throw cljs.core.str.call(null,tag__265099," is not a valid tag name.");
} else
{}
var vec__265103__265105 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__265099));
var ___265106 = cljs.core.nth.call(null,vec__265103__265105,0,null);
var tag__265107 = cljs.core.nth.call(null,vec__265103__265105,1,null);
var id__265108 = cljs.core.nth.call(null,vec__265103__265105,2,null);
var class$__265109 = cljs.core.nth.call(null,vec__265103__265105,3,null);
var vec__265104__265116 = (function (){var vec__265110__265111 = clojure.string.split.call(null,tag__265107,/:/);
var nsp__265112 = cljs.core.nth.call(null,vec__265110__265111,0,null);
var t__265113 = cljs.core.nth.call(null,vec__265110__265111,1,null);
var ns_xmlns__265114 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__265112));

if(cljs.core.truth_(t__265113))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____265115 = ns_xmlns__265114;

if(cljs.core.truth_(or__3548__auto____265115))
{return or__3548__auto____265115;
} else
{return nsp__265112;
}
})(),t__265113]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__265112]);
}
})();
var nsp__265117 = cljs.core.nth.call(null,vec__265104__265116,0,null);
var tag__265118 = cljs.core.nth.call(null,vec__265104__265116,1,null);
var tag_attrs__265120 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__265095_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__265095_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____265119 = id__265108;

if(cljs.core.truth_(or__3548__auto____265119))
{return or__3548__auto____265119;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__265109)?clojure.string.replace.call(null,class$__265109,/\./," "):null)})));
var map_attrs__265121 = cljs.core.first.call(null,content__265100);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__265121)))
{return cljs.core.Vector.fromArray([nsp__265117,tag__265118,cljs.core.merge.call(null,tag_attrs__265120,map_attrs__265121),cljs.core.next.call(null,content__265100)]);
} else
{return cljs.core.Vector.fromArray([nsp__265117,tag__265118,tag_attrs__265120,content__265100]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__265122 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__265122)))
{crate.core.dom_attr.call(null,elem,attrs__265122);
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
var vec__265123__265124 = crate.core.normalize_element.call(null,tag_def);
var nsp__265125 = cljs.core.nth.call(null,vec__265123__265124,0,null);
var tag__265126 = cljs.core.nth.call(null,vec__265123__265124,1,null);
var attrs__265127 = cljs.core.nth.call(null,vec__265123__265124,2,null);
var content__265128 = cljs.core.nth.call(null,vec__265123__265124,3,null);
var elem__265129 = crate.core.create_elem.call(null,nsp__265125,tag__265126);

crate.core.dom_attr.call(null,elem__265129,attrs__265127);
crate.core.as_content.call(null,elem__265129,content__265128);
return elem__265129;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__265130 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__265130)))
{return res__265130;
} else
{return cljs.core.first.call(null,res__265130);
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
html.cljs$lang$applyTo = (function (arglist__265131){
var tags = cljs.core.seq( arglist__265131 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
