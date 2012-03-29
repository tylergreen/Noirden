goog.provide('noirden.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
alert.call(null,"Welcome to the system monitor!");
noirden.client.main.$graph = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#monitor"));
noirden.client.main.$panel = jayq.core.$.call(null,"\uFDD0'#panel");
(new Dygraph(noirden.client.main.$graph,"2007-06-07,10\n2007-06-08,30\n2007-06-09,80"));
