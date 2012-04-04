goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__75433 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__75414__75415 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__75414__75415))
{var G__75417__75419 = cljs.core.first.call(null,G__75414__75415);
var vec__75418__75420 = G__75417__75419;
var k__75421 = cljs.core.nth.call(null,vec__75418__75420,0,null);
var v__75422 = cljs.core.nth.call(null,vec__75418__75420,1,null);
var G__75414__75423 = G__75414__75415;

var G__75417__75424 = G__75417__75419;
var G__75414__75425 = G__75414__75423;

while(true){
var vec__75426__75427 = G__75417__75424;
var k__75428 = cljs.core.nth.call(null,vec__75426__75427,0,null);
var v__75429 = cljs.core.nth.call(null,vec__75426__75427,1,null);
var G__75414__75430 = G__75414__75425;

dom_attr.call(null,elem,k__75428,v__75429);
var temp__3698__auto____75431 = cljs.core.next.call(null,G__75414__75430);

if(cljs.core.truth_(temp__3698__auto____75431))
{var G__75414__75432 = temp__3698__auto____75431;

{
var G__75436 = cljs.core.first.call(null,G__75414__75432);
var G__75437 = G__75414__75432;
G__75417__75424 = G__75436;
G__75414__75425 = G__75437;
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
var dom_attr__75434 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__75433.call(this,elem,k);
case  3 :
return dom_attr__75434.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__75438__75439 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__75438__75439))
{var c__75440 = cljs.core.first.call(null,G__75438__75439);
var G__75438__75441 = G__75438__75439;

while(true){
var child__75442 = (cljs.core.truth_((c__75440 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__75440))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__75440))?goog.dom.createTextNode.call(null,c__75440):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__75440))?crate.core.elem_factory.call(null,c__75440):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__75440))?as_content.call(null,parent,c__75440):(cljs.core.truth_(c__75440.nodeName)?c__75440:null))))));

if(cljs.core.truth_(child__75442))
{goog.dom.appendChild.call(null,parent,child__75442);
} else
{}
var temp__3698__auto____75443 = cljs.core.next.call(null,G__75438__75441);

if(cljs.core.truth_(temp__3698__auto____75443))
{var G__75438__75444 = temp__3698__auto____75443;

{
var G__75445 = cljs.core.first.call(null,G__75438__75444);
var G__75446 = G__75438__75444;
c__75440 = G__75445;
G__75438__75441 = G__75446;
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
crate.core.normalize_element = (function normalize_element(p__75448){
var vec__75449__75450 = p__75448;
var tag__75451 = cljs.core.nth.call(null,vec__75449__75450,0,null);
var content__75452 = cljs.core.nthnext.call(null,vec__75449__75450,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____75453 = cljs.core.keyword_QMARK_.call(null,tag__75451);

if(cljs.core.truth_(or__3548__auto____75453))
{return or__3548__auto____75453;
} else
{var or__3548__auto____75454 = cljs.core.symbol_QMARK_.call(null,tag__75451);

if(cljs.core.truth_(or__3548__auto____75454))
{return or__3548__auto____75454;
} else
{return cljs.core.string_QMARK_.call(null,tag__75451);
}
}
})())))
{throw cljs.core.str.call(null,tag__75451," is not a valid tag name.");
} else
{}
var vec__75455__75457 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__75451));
var ___75458 = cljs.core.nth.call(null,vec__75455__75457,0,null);
var tag__75459 = cljs.core.nth.call(null,vec__75455__75457,1,null);
var id__75460 = cljs.core.nth.call(null,vec__75455__75457,2,null);
var class$__75461 = cljs.core.nth.call(null,vec__75455__75457,3,null);
var vec__75456__75468 = (function (){var vec__75462__75463 = clojure.string.split.call(null,tag__75459,/:/);
var nsp__75464 = cljs.core.nth.call(null,vec__75462__75463,0,null);
var t__75465 = cljs.core.nth.call(null,vec__75462__75463,1,null);
var ns_xmlns__75466 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__75464));

if(cljs.core.truth_(t__75465))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____75467 = ns_xmlns__75466;

if(cljs.core.truth_(or__3548__auto____75467))
{return or__3548__auto____75467;
} else
{return nsp__75464;
}
})(),t__75465]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__75464]);
}
})();
var nsp__75469 = cljs.core.nth.call(null,vec__75456__75468,0,null);
var tag__75470 = cljs.core.nth.call(null,vec__75456__75468,1,null);
var tag_attrs__75472 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__75447_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__75447_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____75471 = id__75460;

if(cljs.core.truth_(or__3548__auto____75471))
{return or__3548__auto____75471;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__75461)?clojure.string.replace.call(null,class$__75461,/\./," "):null)})));
var map_attrs__75473 = cljs.core.first.call(null,content__75452);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__75473)))
{return cljs.core.Vector.fromArray([nsp__75469,tag__75470,cljs.core.merge.call(null,tag_attrs__75472,map_attrs__75473),cljs.core.next.call(null,content__75452)]);
} else
{return cljs.core.Vector.fromArray([nsp__75469,tag__75470,tag_attrs__75472,content__75452]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__75474 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__75474)))
{crate.core.dom_attr.call(null,elem,attrs__75474);
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
var vec__75475__75476 = crate.core.normalize_element.call(null,tag_def);
var nsp__75477 = cljs.core.nth.call(null,vec__75475__75476,0,null);
var tag__75478 = cljs.core.nth.call(null,vec__75475__75476,1,null);
var attrs__75479 = cljs.core.nth.call(null,vec__75475__75476,2,null);
var content__75480 = cljs.core.nth.call(null,vec__75475__75476,3,null);
var elem__75481 = crate.core.create_elem.call(null,nsp__75477,tag__75478);

crate.core.dom_attr.call(null,elem__75481,attrs__75479);
crate.core.as_content.call(null,elem__75481,content__75480);
return elem__75481;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__75482 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__75482)))
{return res__75482;
} else
{return cljs.core.first.call(null,res__75482);
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
html.cljs$lang$applyTo = (function (arglist__75483){
var tags = cljs.core.seq( arglist__75483 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
