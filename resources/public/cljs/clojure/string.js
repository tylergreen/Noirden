goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__157135 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__157136 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__157135.call(this,separator);
case  2 :
return join__157136.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__157144 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__157145 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__157138 = s;
var limit__157139 = limit;
var parts__157140 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__157139,1)))
{return cljs.core.conj.call(null,parts__157140,s__157138);
} else
{var temp__3695__auto____157141 = cljs.core.re_find.call(null,re,s__157138);

if(cljs.core.truth_(temp__3695__auto____157141))
{var m__157142 = temp__3695__auto____157141;

var index__157143 = s__157138.indexOf(m__157142);

{
var G__157147 = s__157138.substring((index__157143 + cljs.core.count.call(null,m__157142)));
var G__157148 = (limit__157139 - 1);
var G__157149 = cljs.core.conj.call(null,parts__157140,s__157138.substring(0,index__157143));
s__157138 = G__157147;
limit__157139 = G__157148;
parts__157140 = G__157149;
continue;
}
} else
{return cljs.core.conj.call(null,parts__157140,s__157138);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__157144.call(this,s,re);
case  3 :
return split__157145.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__157150 = s.length;

while(true){
if(cljs.core.truth_((index__157150 === 0)))
{return "";
} else
{var ch__157151 = cljs.core.get.call(null,s,(index__157150 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____157152 = cljs.core._EQ_.call(null,ch__157151,"\n");

if(cljs.core.truth_(or__3548__auto____157152))
{return or__3548__auto____157152;
} else
{return cljs.core._EQ_.call(null,ch__157151,"\r");
}
})()))
{{
var G__157153 = (index__157150 - 1);
index__157150 = G__157153;
continue;
}
} else
{return s.substring(0,index__157150);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__157154 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____157155 = cljs.core.not.call(null,s__157154);

if(cljs.core.truth_(or__3548__auto____157155))
{return or__3548__auto____157155;
} else
{var or__3548__auto____157156 = cljs.core._EQ_.call(null,"",s__157154);

if(cljs.core.truth_(or__3548__auto____157156))
{return or__3548__auto____157156;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__157154);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__157157 = (new goog.string.StringBuffer());
var length__157158 = s.length;

var index__157159 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__157158,index__157159)))
{return buffer__157157.toString();
} else
{var ch__157160 = s.charAt(index__157159);

var temp__3695__auto____157161 = cljs.core.get.call(null,cmap,ch__157160);

if(cljs.core.truth_(temp__3695__auto____157161))
{var replacement__157162 = temp__3695__auto____157161;

buffer__157157.append(cljs.core.str.call(null,replacement__157162));
} else
{buffer__157157.append(ch__157160);
}
{
var G__157163 = (index__157159 + 1);
index__157159 = G__157163;
continue;
}
}
break;
}
});
