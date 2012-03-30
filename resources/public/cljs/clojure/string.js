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
var join__153093 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__153094 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__153093.call(this,separator);
case  2 :
return join__153094.call(this,separator,coll);
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
var split__153102 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__153103 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__153096 = s;
var limit__153097 = limit;
var parts__153098 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__153097,1)))
{return cljs.core.conj.call(null,parts__153098,s__153096);
} else
{var temp__3695__auto____153099 = cljs.core.re_find.call(null,re,s__153096);

if(cljs.core.truth_(temp__3695__auto____153099))
{var m__153100 = temp__3695__auto____153099;

var index__153101 = s__153096.indexOf(m__153100);

{
var G__153105 = s__153096.substring((index__153101 + cljs.core.count.call(null,m__153100)));
var G__153106 = (limit__153097 - 1);
var G__153107 = cljs.core.conj.call(null,parts__153098,s__153096.substring(0,index__153101));
s__153096 = G__153105;
limit__153097 = G__153106;
parts__153098 = G__153107;
continue;
}
} else
{return cljs.core.conj.call(null,parts__153098,s__153096);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__153102.call(this,s,re);
case  3 :
return split__153103.call(this,s,re,limit);
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
var index__153108 = s.length;

while(true){
if(cljs.core.truth_((index__153108 === 0)))
{return "";
} else
{var ch__153109 = cljs.core.get.call(null,s,(index__153108 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____153110 = cljs.core._EQ_.call(null,ch__153109,"\n");

if(cljs.core.truth_(or__3548__auto____153110))
{return or__3548__auto____153110;
} else
{return cljs.core._EQ_.call(null,ch__153109,"\r");
}
})()))
{{
var G__153111 = (index__153108 - 1);
index__153108 = G__153111;
continue;
}
} else
{return s.substring(0,index__153108);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__153112 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____153113 = cljs.core.not.call(null,s__153112);

if(cljs.core.truth_(or__3548__auto____153113))
{return or__3548__auto____153113;
} else
{var or__3548__auto____153114 = cljs.core._EQ_.call(null,"",s__153112);

if(cljs.core.truth_(or__3548__auto____153114))
{return or__3548__auto____153114;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__153112);
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
var buffer__153115 = (new goog.string.StringBuffer());
var length__153116 = s.length;

var index__153117 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__153116,index__153117)))
{return buffer__153115.toString();
} else
{var ch__153118 = s.charAt(index__153117);

var temp__3695__auto____153119 = cljs.core.get.call(null,cmap,ch__153118);

if(cljs.core.truth_(temp__3695__auto____153119))
{var replacement__153120 = temp__3695__auto____153119;

buffer__153115.append(cljs.core.str.call(null,replacement__153120));
} else
{buffer__153115.append(ch__153118);
}
{
var G__153121 = (index__153117 + 1);
index__153117 = G__153121;
continue;
}
}
break;
}
});
