goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__242236 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__242217__242218 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__242217__242218))
{var G__242220__242222 = cljs.core.first.call(null,G__242217__242218);
var vec__242221__242223 = G__242220__242222;
var k__242224 = cljs.core.nth.call(null,vec__242221__242223,0,null);
var v__242225 = cljs.core.nth.call(null,vec__242221__242223,1,null);
var G__242217__242226 = G__242217__242218;

var G__242220__242227 = G__242220__242222;
var G__242217__242228 = G__242217__242226;

while(true){
var vec__242229__242230 = G__242220__242227;
var k__242231 = cljs.core.nth.call(null,vec__242229__242230,0,null);
var v__242232 = cljs.core.nth.call(null,vec__242229__242230,1,null);
var G__242217__242233 = G__242217__242228;

dom_attr.call(null,elem,k__242231,v__242232);
var temp__3698__auto____242234 = cljs.core.next.call(null,G__242217__242233);

if(cljs.core.truth_(temp__3698__auto____242234))
{var G__242217__242235 = temp__3698__auto____242234;

{
var G__242239 = cljs.core.first.call(null,G__242217__242235);
var G__242240 = G__242217__242235;
G__242220__242227 = G__242239;
G__242217__242228 = G__242240;
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
var dom_attr__242237 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__242236.call(this,elem,k);
case  3 :
return dom_attr__242237.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__242241__242242 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__242241__242242))
{var c__242243 = cljs.core.first.call(null,G__242241__242242);
var G__242241__242244 = G__242241__242242;

while(true){
var child__242245 = (cljs.core.truth_((c__242243 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__242243))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__242243))?goog.dom.createTextNode.call(null,c__242243):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__242243))?crate.core.elem_factory.call(null,c__242243):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__242243))?as_content.call(null,parent,c__242243):(cljs.core.truth_(c__242243.nodeName)?c__242243:null))))));

if(cljs.core.truth_(child__242245))
{goog.dom.appendChild.call(null,parent,child__242245);
} else
{}
var temp__3698__auto____242246 = cljs.core.next.call(null,G__242241__242244);

if(cljs.core.truth_(temp__3698__auto____242246))
{var G__242241__242247 = temp__3698__auto____242246;

{
var G__242248 = cljs.core.first.call(null,G__242241__242247);
var G__242249 = G__242241__242247;
c__242243 = G__242248;
G__242241__242244 = G__242249;
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
crate.core.normalize_element = (function normalize_element(p__242251){
var vec__242252__242253 = p__242251;
var tag__242254 = cljs.core.nth.call(null,vec__242252__242253,0,null);
var content__242255 = cljs.core.nthnext.call(null,vec__242252__242253,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____242256 = cljs.core.keyword_QMARK_.call(null,tag__242254);

if(cljs.core.truth_(or__3548__auto____242256))
{return or__3548__auto____242256;
} else
{var or__3548__auto____242257 = cljs.core.symbol_QMARK_.call(null,tag__242254);

if(cljs.core.truth_(or__3548__auto____242257))
{return or__3548__auto____242257;
} else
{return cljs.core.string_QMARK_.call(null,tag__242254);
}
}
})())))
{throw cljs.core.str.call(null,tag__242254," is not a valid tag name.");
} else
{}
var vec__242258__242260 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__242254));
var ___242261 = cljs.core.nth.call(null,vec__242258__242260,0,null);
var tag__242262 = cljs.core.nth.call(null,vec__242258__242260,1,null);
var id__242263 = cljs.core.nth.call(null,vec__242258__242260,2,null);
var class$__242264 = cljs.core.nth.call(null,vec__242258__242260,3,null);
var vec__242259__242271 = (function (){var vec__242265__242266 = clojure.string.split.call(null,tag__242262,/:/);
var nsp__242267 = cljs.core.nth.call(null,vec__242265__242266,0,null);
var t__242268 = cljs.core.nth.call(null,vec__242265__242266,1,null);
var ns_xmlns__242269 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__242267));

if(cljs.core.truth_(t__242268))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____242270 = ns_xmlns__242269;

if(cljs.core.truth_(or__3548__auto____242270))
{return or__3548__auto____242270;
} else
{return nsp__242267;
}
})(),t__242268]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__242267]);
}
})();
var nsp__242272 = cljs.core.nth.call(null,vec__242259__242271,0,null);
var tag__242273 = cljs.core.nth.call(null,vec__242259__242271,1,null);
var tag_attrs__242275 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__242250_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__242250_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____242274 = id__242263;

if(cljs.core.truth_(or__3548__auto____242274))
{return or__3548__auto____242274;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__242264)?clojure.string.replace.call(null,class$__242264,/\./," "):null)})));
var map_attrs__242276 = cljs.core.first.call(null,content__242255);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__242276)))
{return cljs.core.Vector.fromArray([nsp__242272,tag__242273,cljs.core.merge.call(null,tag_attrs__242275,map_attrs__242276),cljs.core.next.call(null,content__242255)]);
} else
{return cljs.core.Vector.fromArray([nsp__242272,tag__242273,tag_attrs__242275,content__242255]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__242277 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__242277)))
{crate.core.dom_attr.call(null,elem,attrs__242277);
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
var vec__242278__242279 = crate.core.normalize_element.call(null,tag_def);
var nsp__242280 = cljs.core.nth.call(null,vec__242278__242279,0,null);
var tag__242281 = cljs.core.nth.call(null,vec__242278__242279,1,null);
var attrs__242282 = cljs.core.nth.call(null,vec__242278__242279,2,null);
var content__242283 = cljs.core.nth.call(null,vec__242278__242279,3,null);
var elem__242284 = crate.core.create_elem.call(null,nsp__242280,tag__242281);

crate.core.dom_attr.call(null,elem__242284,attrs__242282);
crate.core.as_content.call(null,elem__242284,content__242283);
return elem__242284;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__242285 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__242285)))
{return res__242285;
} else
{return cljs.core.first.call(null,res__242285);
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
html.cljs$lang$applyTo = (function (arglist__242286){
var tags = cljs.core.seq( arglist__242286 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
