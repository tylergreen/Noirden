goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__391972 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__391953__391954 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__391953__391954))
{var G__391956__391958 = cljs.core.first.call(null,G__391953__391954);
var vec__391957__391959 = G__391956__391958;
var k__391960 = cljs.core.nth.call(null,vec__391957__391959,0,null);
var v__391961 = cljs.core.nth.call(null,vec__391957__391959,1,null);
var G__391953__391962 = G__391953__391954;

var G__391956__391963 = G__391956__391958;
var G__391953__391964 = G__391953__391962;

while(true){
var vec__391965__391966 = G__391956__391963;
var k__391967 = cljs.core.nth.call(null,vec__391965__391966,0,null);
var v__391968 = cljs.core.nth.call(null,vec__391965__391966,1,null);
var G__391953__391969 = G__391953__391964;

dom_attr.call(null,elem,k__391967,v__391968);
var temp__3698__auto____391970 = cljs.core.next.call(null,G__391953__391969);

if(cljs.core.truth_(temp__3698__auto____391970))
{var G__391953__391971 = temp__3698__auto____391970;

{
var G__391975 = cljs.core.first.call(null,G__391953__391971);
var G__391976 = G__391953__391971;
G__391956__391963 = G__391975;
G__391953__391964 = G__391976;
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
var dom_attr__391973 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__391972.call(this,elem,k);
case  3 :
return dom_attr__391973.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__391977__391978 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__391977__391978))
{var c__391979 = cljs.core.first.call(null,G__391977__391978);
var G__391977__391980 = G__391977__391978;

while(true){
var child__391981 = (cljs.core.truth_((c__391979 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__391979))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__391979))?goog.dom.createTextNode.call(null,c__391979):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__391979))?crate.core.elem_factory.call(null,c__391979):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__391979))?as_content.call(null,parent,c__391979):(cljs.core.truth_(c__391979.nodeName)?c__391979:null))))));

if(cljs.core.truth_(child__391981))
{goog.dom.appendChild.call(null,parent,child__391981);
} else
{}
var temp__3698__auto____391982 = cljs.core.next.call(null,G__391977__391980);

if(cljs.core.truth_(temp__3698__auto____391982))
{var G__391977__391983 = temp__3698__auto____391982;

{
var G__391984 = cljs.core.first.call(null,G__391977__391983);
var G__391985 = G__391977__391983;
c__391979 = G__391984;
G__391977__391980 = G__391985;
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
crate.core.normalize_element = (function normalize_element(p__391987){
var vec__391988__391989 = p__391987;
var tag__391990 = cljs.core.nth.call(null,vec__391988__391989,0,null);
var content__391991 = cljs.core.nthnext.call(null,vec__391988__391989,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____391992 = cljs.core.keyword_QMARK_.call(null,tag__391990);

if(cljs.core.truth_(or__3548__auto____391992))
{return or__3548__auto____391992;
} else
{var or__3548__auto____391993 = cljs.core.symbol_QMARK_.call(null,tag__391990);

if(cljs.core.truth_(or__3548__auto____391993))
{return or__3548__auto____391993;
} else
{return cljs.core.string_QMARK_.call(null,tag__391990);
}
}
})())))
{throw cljs.core.str.call(null,tag__391990," is not a valid tag name.");
} else
{}
var vec__391994__391996 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__391990));
var ___391997 = cljs.core.nth.call(null,vec__391994__391996,0,null);
var tag__391998 = cljs.core.nth.call(null,vec__391994__391996,1,null);
var id__391999 = cljs.core.nth.call(null,vec__391994__391996,2,null);
var class$__392000 = cljs.core.nth.call(null,vec__391994__391996,3,null);
var vec__391995__392007 = (function (){var vec__392001__392002 = clojure.string.split.call(null,tag__391998,/:/);
var nsp__392003 = cljs.core.nth.call(null,vec__392001__392002,0,null);
var t__392004 = cljs.core.nth.call(null,vec__392001__392002,1,null);
var ns_xmlns__392005 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__392003));

if(cljs.core.truth_(t__392004))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____392006 = ns_xmlns__392005;

if(cljs.core.truth_(or__3548__auto____392006))
{return or__3548__auto____392006;
} else
{return nsp__392003;
}
})(),t__392004]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__392003]);
}
})();
var nsp__392008 = cljs.core.nth.call(null,vec__391995__392007,0,null);
var tag__392009 = cljs.core.nth.call(null,vec__391995__392007,1,null);
var tag_attrs__392011 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__391986_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__391986_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____392010 = id__391999;

if(cljs.core.truth_(or__3548__auto____392010))
{return or__3548__auto____392010;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__392000)?clojure.string.replace.call(null,class$__392000,/\./," "):null)})));
var map_attrs__392012 = cljs.core.first.call(null,content__391991);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__392012)))
{return cljs.core.Vector.fromArray([nsp__392008,tag__392009,cljs.core.merge.call(null,tag_attrs__392011,map_attrs__392012),cljs.core.next.call(null,content__391991)]);
} else
{return cljs.core.Vector.fromArray([nsp__392008,tag__392009,tag_attrs__392011,content__391991]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__392013 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__392013)))
{crate.core.dom_attr.call(null,elem,attrs__392013);
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
var vec__392014__392015 = crate.core.normalize_element.call(null,tag_def);
var nsp__392016 = cljs.core.nth.call(null,vec__392014__392015,0,null);
var tag__392017 = cljs.core.nth.call(null,vec__392014__392015,1,null);
var attrs__392018 = cljs.core.nth.call(null,vec__392014__392015,2,null);
var content__392019 = cljs.core.nth.call(null,vec__392014__392015,3,null);
var elem__392020 = crate.core.create_elem.call(null,nsp__392016,tag__392017);

crate.core.dom_attr.call(null,elem__392020,attrs__392018);
crate.core.as_content.call(null,elem__392020,content__392019);
return elem__392020;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__392021 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__392021)))
{return res__392021;
} else
{return cljs.core.first.call(null,res__392021);
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
html.cljs$lang$applyTo = (function (arglist__392022){
var tags = cljs.core.seq( arglist__392022 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
