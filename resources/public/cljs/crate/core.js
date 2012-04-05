goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__157084 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__157065__157066 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__157065__157066))
{var G__157068__157070 = cljs.core.first.call(null,G__157065__157066);
var vec__157069__157071 = G__157068__157070;
var k__157072 = cljs.core.nth.call(null,vec__157069__157071,0,null);
var v__157073 = cljs.core.nth.call(null,vec__157069__157071,1,null);
var G__157065__157074 = G__157065__157066;

var G__157068__157075 = G__157068__157070;
var G__157065__157076 = G__157065__157074;

while(true){
var vec__157077__157078 = G__157068__157075;
var k__157079 = cljs.core.nth.call(null,vec__157077__157078,0,null);
var v__157080 = cljs.core.nth.call(null,vec__157077__157078,1,null);
var G__157065__157081 = G__157065__157076;

dom_attr.call(null,elem,k__157079,v__157080);
var temp__3698__auto____157082 = cljs.core.next.call(null,G__157065__157081);

if(cljs.core.truth_(temp__3698__auto____157082))
{var G__157065__157083 = temp__3698__auto____157082;

{
var G__157087 = cljs.core.first.call(null,G__157065__157083);
var G__157088 = G__157065__157083;
G__157068__157075 = G__157087;
G__157065__157076 = G__157088;
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
var dom_attr__157085 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__157084.call(this,elem,k);
case  3 :
return dom_attr__157085.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__157089__157090 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__157089__157090))
{var c__157091 = cljs.core.first.call(null,G__157089__157090);
var G__157089__157092 = G__157089__157090;

while(true){
var child__157093 = (cljs.core.truth_((c__157091 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__157091))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__157091))?goog.dom.createTextNode.call(null,c__157091):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__157091))?crate.core.elem_factory.call(null,c__157091):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__157091))?as_content.call(null,parent,c__157091):(cljs.core.truth_(c__157091.nodeName)?c__157091:null))))));

if(cljs.core.truth_(child__157093))
{goog.dom.appendChild.call(null,parent,child__157093);
} else
{}
var temp__3698__auto____157094 = cljs.core.next.call(null,G__157089__157092);

if(cljs.core.truth_(temp__3698__auto____157094))
{var G__157089__157095 = temp__3698__auto____157094;

{
var G__157096 = cljs.core.first.call(null,G__157089__157095);
var G__157097 = G__157089__157095;
c__157091 = G__157096;
G__157089__157092 = G__157097;
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
crate.core.normalize_element = (function normalize_element(p__157099){
var vec__157100__157101 = p__157099;
var tag__157102 = cljs.core.nth.call(null,vec__157100__157101,0,null);
var content__157103 = cljs.core.nthnext.call(null,vec__157100__157101,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____157104 = cljs.core.keyword_QMARK_.call(null,tag__157102);

if(cljs.core.truth_(or__3548__auto____157104))
{return or__3548__auto____157104;
} else
{var or__3548__auto____157105 = cljs.core.symbol_QMARK_.call(null,tag__157102);

if(cljs.core.truth_(or__3548__auto____157105))
{return or__3548__auto____157105;
} else
{return cljs.core.string_QMARK_.call(null,tag__157102);
}
}
})())))
{throw cljs.core.str.call(null,tag__157102," is not a valid tag name.");
} else
{}
var vec__157106__157108 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__157102));
var ___157109 = cljs.core.nth.call(null,vec__157106__157108,0,null);
var tag__157110 = cljs.core.nth.call(null,vec__157106__157108,1,null);
var id__157111 = cljs.core.nth.call(null,vec__157106__157108,2,null);
var class$__157112 = cljs.core.nth.call(null,vec__157106__157108,3,null);
var vec__157107__157119 = (function (){var vec__157113__157114 = clojure.string.split.call(null,tag__157110,/:/);
var nsp__157115 = cljs.core.nth.call(null,vec__157113__157114,0,null);
var t__157116 = cljs.core.nth.call(null,vec__157113__157114,1,null);
var ns_xmlns__157117 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__157115));

if(cljs.core.truth_(t__157116))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____157118 = ns_xmlns__157117;

if(cljs.core.truth_(or__3548__auto____157118))
{return or__3548__auto____157118;
} else
{return nsp__157115;
}
})(),t__157116]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__157115]);
}
})();
var nsp__157120 = cljs.core.nth.call(null,vec__157107__157119,0,null);
var tag__157121 = cljs.core.nth.call(null,vec__157107__157119,1,null);
var tag_attrs__157123 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__157098_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__157098_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____157122 = id__157111;

if(cljs.core.truth_(or__3548__auto____157122))
{return or__3548__auto____157122;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__157112)?clojure.string.replace.call(null,class$__157112,/\./," "):null)})));
var map_attrs__157124 = cljs.core.first.call(null,content__157103);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__157124)))
{return cljs.core.Vector.fromArray([nsp__157120,tag__157121,cljs.core.merge.call(null,tag_attrs__157123,map_attrs__157124),cljs.core.next.call(null,content__157103)]);
} else
{return cljs.core.Vector.fromArray([nsp__157120,tag__157121,tag_attrs__157123,content__157103]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__157125 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__157125)))
{crate.core.dom_attr.call(null,elem,attrs__157125);
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
var vec__157126__157127 = crate.core.normalize_element.call(null,tag_def);
var nsp__157128 = cljs.core.nth.call(null,vec__157126__157127,0,null);
var tag__157129 = cljs.core.nth.call(null,vec__157126__157127,1,null);
var attrs__157130 = cljs.core.nth.call(null,vec__157126__157127,2,null);
var content__157131 = cljs.core.nth.call(null,vec__157126__157127,3,null);
var elem__157132 = crate.core.create_elem.call(null,nsp__157128,tag__157129);

crate.core.dom_attr.call(null,elem__157132,attrs__157130);
crate.core.as_content.call(null,elem__157132,content__157131);
return elem__157132;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__157133 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__157133)))
{return res__157133;
} else
{return cljs.core.first.call(null,res__157133);
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
html.cljs$lang$applyTo = (function (arglist__157134){
var tags = cljs.core.seq( arglist__157134 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
