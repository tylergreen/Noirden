goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__89429 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__89410__89411 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__89410__89411))
{var G__89413__89415 = cljs.core.first.call(null,G__89410__89411);
var vec__89414__89416 = G__89413__89415;
var k__89417 = cljs.core.nth.call(null,vec__89414__89416,0,null);
var v__89418 = cljs.core.nth.call(null,vec__89414__89416,1,null);
var G__89410__89419 = G__89410__89411;

var G__89413__89420 = G__89413__89415;
var G__89410__89421 = G__89410__89419;

while(true){
var vec__89422__89423 = G__89413__89420;
var k__89424 = cljs.core.nth.call(null,vec__89422__89423,0,null);
var v__89425 = cljs.core.nth.call(null,vec__89422__89423,1,null);
var G__89410__89426 = G__89410__89421;

dom_attr.call(null,elem,k__89424,v__89425);
var temp__3698__auto____89427 = cljs.core.next.call(null,G__89410__89426);

if(cljs.core.truth_(temp__3698__auto____89427))
{var G__89410__89428 = temp__3698__auto____89427;

{
var G__89432 = cljs.core.first.call(null,G__89410__89428);
var G__89433 = G__89410__89428;
G__89413__89420 = G__89432;
G__89410__89421 = G__89433;
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
var dom_attr__89430 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__89429.call(this,elem,k);
case  3 :
return dom_attr__89430.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__89434__89435 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__89434__89435))
{var c__89436 = cljs.core.first.call(null,G__89434__89435);
var G__89434__89437 = G__89434__89435;

while(true){
var child__89438 = (cljs.core.truth_((c__89436 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__89436))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__89436))?goog.dom.createTextNode.call(null,c__89436):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__89436))?crate.core.elem_factory.call(null,c__89436):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__89436))?as_content.call(null,parent,c__89436):(cljs.core.truth_(c__89436.nodeName)?c__89436:null))))));

if(cljs.core.truth_(child__89438))
{goog.dom.appendChild.call(null,parent,child__89438);
} else
{}
var temp__3698__auto____89439 = cljs.core.next.call(null,G__89434__89437);

if(cljs.core.truth_(temp__3698__auto____89439))
{var G__89434__89440 = temp__3698__auto____89439;

{
var G__89441 = cljs.core.first.call(null,G__89434__89440);
var G__89442 = G__89434__89440;
c__89436 = G__89441;
G__89434__89437 = G__89442;
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
crate.core.normalize_element = (function normalize_element(p__89444){
var vec__89445__89446 = p__89444;
var tag__89447 = cljs.core.nth.call(null,vec__89445__89446,0,null);
var content__89448 = cljs.core.nthnext.call(null,vec__89445__89446,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____89449 = cljs.core.keyword_QMARK_.call(null,tag__89447);

if(cljs.core.truth_(or__3548__auto____89449))
{return or__3548__auto____89449;
} else
{var or__3548__auto____89450 = cljs.core.symbol_QMARK_.call(null,tag__89447);

if(cljs.core.truth_(or__3548__auto____89450))
{return or__3548__auto____89450;
} else
{return cljs.core.string_QMARK_.call(null,tag__89447);
}
}
})())))
{throw cljs.core.str.call(null,tag__89447," is not a valid tag name.");
} else
{}
var vec__89451__89453 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__89447));
var ___89454 = cljs.core.nth.call(null,vec__89451__89453,0,null);
var tag__89455 = cljs.core.nth.call(null,vec__89451__89453,1,null);
var id__89456 = cljs.core.nth.call(null,vec__89451__89453,2,null);
var class$__89457 = cljs.core.nth.call(null,vec__89451__89453,3,null);
var vec__89452__89464 = (function (){var vec__89458__89459 = clojure.string.split.call(null,tag__89455,/:/);
var nsp__89460 = cljs.core.nth.call(null,vec__89458__89459,0,null);
var t__89461 = cljs.core.nth.call(null,vec__89458__89459,1,null);
var ns_xmlns__89462 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__89460));

if(cljs.core.truth_(t__89461))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____89463 = ns_xmlns__89462;

if(cljs.core.truth_(or__3548__auto____89463))
{return or__3548__auto____89463;
} else
{return nsp__89460;
}
})(),t__89461]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__89460]);
}
})();
var nsp__89465 = cljs.core.nth.call(null,vec__89452__89464,0,null);
var tag__89466 = cljs.core.nth.call(null,vec__89452__89464,1,null);
var tag_attrs__89468 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__89443_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__89443_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____89467 = id__89456;

if(cljs.core.truth_(or__3548__auto____89467))
{return or__3548__auto____89467;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__89457)?clojure.string.replace.call(null,class$__89457,/\./," "):null)})));
var map_attrs__89469 = cljs.core.first.call(null,content__89448);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__89469)))
{return cljs.core.Vector.fromArray([nsp__89465,tag__89466,cljs.core.merge.call(null,tag_attrs__89468,map_attrs__89469),cljs.core.next.call(null,content__89448)]);
} else
{return cljs.core.Vector.fromArray([nsp__89465,tag__89466,tag_attrs__89468,content__89448]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__89470 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__89470)))
{crate.core.dom_attr.call(null,elem,attrs__89470);
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
var vec__89471__89472 = crate.core.normalize_element.call(null,tag_def);
var nsp__89473 = cljs.core.nth.call(null,vec__89471__89472,0,null);
var tag__89474 = cljs.core.nth.call(null,vec__89471__89472,1,null);
var attrs__89475 = cljs.core.nth.call(null,vec__89471__89472,2,null);
var content__89476 = cljs.core.nth.call(null,vec__89471__89472,3,null);
var elem__89477 = crate.core.create_elem.call(null,nsp__89473,tag__89474);

crate.core.dom_attr.call(null,elem__89477,attrs__89475);
crate.core.as_content.call(null,elem__89477,content__89476);
return elem__89477;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__89478 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__89478)))
{return res__89478;
} else
{return cljs.core.first.call(null,res__89478);
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
html.cljs$lang$applyTo = (function (arglist__89479){
var tags = cljs.core.seq( arglist__89479 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
