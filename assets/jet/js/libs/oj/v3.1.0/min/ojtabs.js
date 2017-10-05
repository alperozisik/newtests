/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojconveyorbelt","ojs/ojmenu","jqueryui-amd/widgets/sortable","ojs/ojtouchproxy"],function(a,g){(function(){var c={cut:"ojtabscut","paste-before":"ojtabspastebefore","paste-after":"ojtabspasteafter",remove:"ojtabsremove"},b={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter",remove:"labelRemove"};a.ab("oj.ojTabs",g.oj.baseComponent,{widgetEventPrefix:"oj",delay:300,options:{selected:0,disabledTabs:null,truncation:"auto",
selectOn:"click",orientation:"horizontal",edge:"top",removable:!1,reorderable:!1,beforeSelect:null,select:null,beforeDeselect:null,deselect:null,beforeRemove:null,remove:null,beforeReorder:null,reorder:null},_ComponentCreate:function(){var a=this.options;this._super();this.d5=!1;this.Si=!0;this.$0(a.edge);this.vga=0==this.element.children("ul").length;this.Oza();this.aia();this.Xa={};this.Xa.xi=!1;this.Xa.UJ=[];this.Xa.Uf=null;this.Xa.sl=null;this.Xa.Am=null;this.Nu();this.gh();a=this.vda(a.selected);
void 0===a&&(a=0);this.UF(a);this.Si=void 0},UF:function(a,b){this.sO(a)&&(a=this.AY(a));this.aF(void 0===a?void 0:g(this.mc[a]),b)},hi:function(a,b,c){if(this.nHa(b.target)&&(!this.hI||!this.hI.BP)){var h="keyboard"===c;if("contextmenu"==b.type||h||"touch"==c){var k=g(b.target).closest("li");a={launcher:k};this.Xa.tab=h?this.pb:a.launcher;if(this.Xa.tab){if(this.Xa.TJ){if(((h=k.hasClass("oj-disabled"))||0==this.qB(k).length)&&1==this.Xa.Uf.children().length){b.preventDefault();return}h||!this.f_(k)?
this.Xa.TJ.addClass("oj-disabled"):this.Xa.TJ.removeClass("oj-disabled")}if(this.Xa.sl||this.Xa.Am)k=!this.Xa.kQ,this.Xa.sl.hasClass("oj-disabled")!=k&&(k?(this.Xa.sl.addClass("oj-disabled"),this.Xa.Am.addClass("oj-disabled")):(this.Xa.sl.removeClass("oj-disabled"),this.Xa.Am.removeClass("oj-disabled")),this.Xa.Uf.ojMenu("refresh"));this.ji(b,c,a)}else b.preventDefault()}}},iNa:function(a){if(!this.gfa(a)){var b=g(this.document[0].activeElement).closest("li"),c=this.fG(),h=c.index(b),k=c.length;switch(a.keyCode){case g.ui.keyCode.RIGHT:case g.ui.keyCode.DOWN:h=
(h+1)%k;break;case g.ui.keyCode.UP:case g.ui.keyCode.LEFT:h=((0==h?k:h)-1)%k;break;case g.ui.keyCode.END:h=k-1;break;case g.ui.keyCode.HOME:h=0;break;case 46:(b=this.pb)&&0<this.qB(b).length&&(a.preventDefault(),this.aP(b,null,a));return;default:return}a.preventDefault();clearTimeout(this.nOa);var l=g(c[h]);l.focus();if(!a.ctrlKey){b.attr("aria-selected","false");l.attr("aria-selected","true");var m=this;this.nOa=this._delay(function(){m&&m.mc&&m.aF(l,a)},this.delay)}}},fJa:function(a){g(a.target).closest(".oj-tabs-selected").attr("id")===
this.element.children(".oj-tabs-selected").attr("id")&&!this.gfa(a)&&a.ctrlKey&&a.keyCode===g.ui.keyCode.UP&&(a.preventDefault(),this.pb.focus())},gfa:function(a){var b=this.JY();if(a.ctrlKey&&a.keyCode===g.ui.keyCode.PAGE_UP)return this.aF(this.Ica(b,!1)),!0;if(a.ctrlKey&&a.keyCode===g.ui.keyCode.PAGE_DOWN)return this.aF(this.Ica(b,!0)),!0},sO:function(a){return 0<=a&&a<this.mc.length?g(this.mc[a]).hasClass("oj-disabled"):!1},Ica:function(a,b){var c=this.fG(),h=c.index(this.mc[a]),k=c.length,c=g(c[b?
(h+1)%k:((0==h?k:h)-1)%k]);c.focus();return c},AY:function(a){for(var b=a+1,c=this.mc.length-1;b<=c;){if(!this.sO(b))return b;b++}for(b=a-1;0<=b;){if(!this.sO(b))return b;b--}},ce:function(){return"top"==this.options.edge||"bottom"==this.options.edge},_setOption:function(a,b,c){"selected"===a?(b=this.PY(b),void 0!==b&&this.aF(b)):"disabledTabs"===a?(null===b&&(b=[]),Array.isArray(b)&&(this.Kja(b),a=this.JY(),this.sO(a)&&this.UF(a),this.refresh())):"removable"===a||"truncation"===a?b!=this.options[a]&&
(this._super(a,b,c),this.refresh()):"reorderable"===a?b!==this.options.reorderable&&(this._super(a,b,c),this.refresh()):"orientation"===a?this.pX||(a=this.Hha(b))&&this.$0(a)&&this.refresh():"edge"===a?this.$0(b)&&(this.pX=!0,this._super(a,b,c),this.refresh()):"selectOn"===a?(this.uC(!0),this._super(a,b,c),this.Uo()):("contextMenu"===a&&(this.xx(),b&&this.Nu(b)),this._super(a,b,c),"translations"===a&&c&&"removeCueText"===c.subkey&&this.ke&&this.qB(this.ke).attr("aria-label",b?b.removeCueText:""))},
refresh:function(){this._super();this.aia();this.gh();if(!this.element.children(".oj-tabs-selected").length){var a=this.AY(-1);0<=a&&this.UF(a)}},gh:function(){var a=this.element.children(".oj-tabs-selected");this.pb=a.length?this.ke.children(".oj-selected"):g();this.hza();this.Uo();this.mc.not(this.pb).attr({"aria-selected":"false",tabIndex:"-1"});this.ym.not(this.Gu(this.pb)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});this.pb.length?(this.pb.addClass("oj-selected").attr({"aria-selected":"true",
tabIndex:"0"}),a.show().attr("aria-expanded","true").removeAttr("aria-hidden")):g(this.mc[0]).attr("tabIndex","0");this.ce()&&(0<this.mc.length?(this.GNa(),this.Dwa()):this.QY(),this.Gwa());void 0===this.options.selected||0==this.JY()?this.element.addClass("oj-first-child-selected"):this.element.removeClass("oj-first-child-selected");this.IMa()},Dwa:function(){var a=this.ke.uniqueId().attr("id");this.Ws=this.QY().parent().ojConveyorBelt({orientation:"horizontal",contentParent:"#"+a}).attr("data-oj-internal",
"");a=this.Ws.parent();if(a.hasClass("oj-tabs-conveyorbelt-wrapper")){var b="0 1 "+this.fCa()+"px";a.css("flex",b);a.css("-webkit-flex",b);a.css("-ms-flex",b)}},aia:function(){var a=this,b=this.options.edge;this.Pba();this.Nza();this.ke=this.element.children("ul").addClass("oj-tabs-nav oj-helper-clearfix").attr("role","tablist");var c=this.ke.index(),h,k;this.element.children(".oj-tabs-facet").each(function(){var a=g(this);a.index()<c?(a.addClass("oj-start"),h=a):(k||(k=a),a.removeClass("oj-start"))});
this.element.children(".oj-tabs-panel");"start"==b||"top"==b?h?h.after(this.ke):this.element.prepend(this.ke):k?k.before(this.ke):this.element.append(this.ke);this.mc=g();this.ym=g();this.ke.children("li").each(function(){var b=g(this).addClass("oj-tabs-tab").attr({role:"tab",tabIndex:"-1"}).removeAttr("aria-hidden"),c=b.children();c.addClass("oj-tabs-tab-content");c=c.children();c.addClass("oj-tabs-anchor").attr({role:"presentation",tabIndex:"-1"});c.children().addClass("oj-tabs-title").removeAttr("aria-hidden");
a.mc=a.mc.add(b);var c=c.uniqueId().attr("id"),e=b.attr("data-content"),f=a.element.find(a.Ey(e));b.attr({"aria-controls":e,"aria-labelledby":c});a.ym=a.ym.add(f);f.attr("aria-labelledby",c).attr("role","tabpanel")});"start"!=b&&"end"!=b||a.ke.addClass("oj-tabs-nav-root");this.Si&&this.Kja(this.options.disabledTabs)},Uo:function(){var b=this,c={keydown:this.iNa},f=this.options.selectOn,h=!1;f&&g.each(f.split(" "),function(f,g){"click"==g&&(h=!0);a.Q.jR(g)&&(c[g]=b.iB)});var k=this.fG();this._on(k,
c);h||this._on(k,{click:function(a){a.preventDefault()}});this.ym.on("keydown"+this.eventNamespace,this.fJa.bind(this));if(this.options.removable){var f={click:this.HKa},l=this.qB(k);this._on(l,f);this.Yf(l);this.pk(l)}this._focusable({element:k,applyHighlight:!0});this.Yf(k);this.pk({element:k,afterToggle:function(a){"mousedown"===a&&k.filter(".oj-focus-highlight").blur()}})},uC:function(a){var b=this.fG();a||this.mx(this.qB(b));this.mx(b);this.ym&&this.ym.off("keydown"+this.eventNamespace)},iB:function(a,
b){var c=this.pb,h=g(a.currentTarget).closest("li"),k=c&&h[0]===c[0],l=this.Gu(h),m=c&&c.length?this.Gu(c):g(),c={fromTab:c,fromContent:m,toTab:h,toContent:l};a.preventDefault();var p=b?b:a;h.hasClass("oj-disabled")||this.d5||k||m&&m.length&&!1===this._trigger("beforeDeselect",p,c)||!this.Si&&!1===this._trigger("beforeSelect",p,c)||(this.Si?this.options.selected=this.HN(h):this.option("selected",this.HN(h),{_context:{originalEvent:p,kb:!0}}),this.pb=h,l.addClass("oj-tabs-selected"),m&&m.length&&m.removeClass("oj-tabs-selected"),
this.uNa(p,c))},uNa:function(b,c){var f=c.toTab.closest("li"),h=c.toContent,k=c.fromContent;this.d5=!0;var l=c.fromTab.closest("li").removeClass("oj-selected");k.hide();0<k.length&&a.Components.lw(k[0]);f.addClass("oj-selected");this.ce()&&0<this.mc.length&&(0==f.index()?this.element.addClass("oj-first-child-selected"):this.element.removeClass("oj-first-child-selected"));h.show();0<h.length&&a.Components.Gt(h[0]);this.d5=!1;this.Si||(this._trigger("deselect",b,c),this._trigger("select",b,c));k.attr({"aria-expanded":"false",
"aria-hidden":"true"});l.attr("aria-selected","false");h.length&&k.length?l.attr("tabIndex","-1"):h.length&&this.mc.filter(function(){return"0"===g(this).attr("tabIndex")}).attr("tabIndex","-1");h.attr("aria-expanded","true").removeAttr("aria-hidden");f.attr({"aria-selected":"true",tabIndex:"0"})},aF:function(a,b){if(void 0!==a){var c;this.pb&&a[0]===this.pb[0]||(c=a.find(".oj-tabs-anchor")[0],this.iB({target:c,currentTarget:c,preventDefault:g.noop},b))}},hza:function(){if(this.options.removable&&
this.ce()){var a=this.R("removeCueText"),b=this;this.fG().each(function(c){if(b.f_(g(this))){var h=g(this).find("\x3e :first-child");h.addClass("oj-removable");c="ojtabs-id_rm_"+c;g(this).attr("aria-describedby",c);g("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon-nocontext oj-tabs-close-icon").attr({id:c,tabIndex:"-1","aria-label":a,role:"presentation"}).appendTo(h)}})}},fG:function(){return g(this.mc.not(".oj-disabled"))},qB:function(a){return a.find(".oj-tabs-close-icon")},
Pba:function(){this.mc&&this.uC();this.rfa&&(a.Q.zm(this.element[0],this.Fh),this.rfa=!1,this.O_=void 0);this.m1&&(a.Q.Qe()&&this.Mka(),this.ke.sortable("instance")&&this.ke.sortable("destroy"),this.m1=void 0);var b=this.element.children(".oj-tabs-nav-root"),c=!b.hasClass("oj-tabs-nav");if(this.mc&&(this.qB(this.mc).remove(),b.length)){var f=b,h=!0,k=this.ke;b.children().each(function(){var a=g(this);if(a.hasClass("oj-tabs-conveyorbelt-wrapper"))a=k;else if(!a.hasClass("oj-tabs-facet"))return;h=!1;
f.after(a);f=a});h&&c&&b.after(k)}this.Ws&&(this.Ws.ojConveyorBelt("destroy"),this.Ws.remove(),this.pb=this.Ws=null);c&&b.remove();this.ke=this.mc=null},_destroy:function(){this.xx();this.ce()?this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-tabs-top oj-tabs-bottom oj-first-child-selected"):this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-tabs-start oj-tabs-end oj-helper-clearfix");var a=this,b,c,h,k;this.mc.each(function(l){b=g(this);b.removeAttr("tabIndex").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-controls").removeAttr("aria-disabled").removeAttr("aria-describedby").removeAttr("role").removeAttr("data-content").removeClass("oj-active oj-disabled oj-selected oj-tabs-gen-id oj-tabs-tab").removeUniqueId().css("display",
"");c=b.children("div").removeClass("oj-tabs-tab-content");h=c.children("a").removeClass("oj-tabs-anchor").removeAttr("tabIndex").removeAttr("role");k=h.children();k.removeClass("oj-tabs-title").removeAttr("aria-hidden");a.vga?k.prependTo(a.ym.get(l)):c.hasClass("oj-tabs-gen-div")&&h.hasClass("oj-tabs-gen-a")?(k.prependTo(b),c.remove()):h.hasClass("oj-tabs-gen-a")?(k.prependTo(c),h.remove()):c.hasClass("oj-tabs-gen-div")&&(h.prependTo(b),c.remove())});var l=this.ke;this.Pba();l.removeAttr("tabIndex").removeAttr("role").removeClass("oj-tabs-nav oj-tabs-nav-root oj-helper-clearfix").removeUniqueId();
this.vga&&l.remove();this.ym.each(function(){g(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-tabs-selected oj-tabs-gen-id oj-tabs-panel").removeUniqueId().css("display","")});this.element.children(".oj-tabs-facet").removeClass("oj-start")},f_:function(a){var b=this.options.removable;return b&&(!Array.isArray(b)||-1<b.indexOf(a.attr("id")))},aP:function(a,b,c){if(this.f_(a)){var h=
this.Gu(a),k={tab:a,content:h};c=c?c:b?b:{target:a,currentTarget:a,preventDefault:g.noop};if(a&&!1!==this._trigger("beforeRemove",c,k)){b&&b.preventDefault();if(a.hasClass("oj-selected")){b=this.mc.index(a);var l=this.AY(b);void 0===l?(this.pb=void 0,this.option("selected",void 0,{_context:{originalEvent:c,kb:!0}})):(this.UF(l,c),l=this.HN(g(this.mc[l])),"number"===typeof l&&l>b&&l--,this.option("selected",l,{_context:{originalEvent:c,kb:!0}}))}this.uC();this.mc=this.mc.not(a);a.remove();h.remove();
this.Z1();this.refresh();this._trigger("remove",c,k)}}},HKa:function(a,b){this.aP(g(a.currentTarget).closest("li"),a,b)},removeTab:function(a){if("string"!==typeof a)throw Error("'"+a+"' is not a tab id");this.aP(this.PY(a),null,null)},VP:function(a,b){var c;if("li"==a.prop("tagName").toLowerCase()){c=a;var g=c.children("div");1==g.length&&g.hasClass("oj-tabs-tab-content")?(g=g.children("a"),1!=g.length&&(c.wrapInner("\x3ca href\x3d'#'\x3e\x3c/a\x3e"),g.addClass("oj-tabs-gen-a"))):(g=c.wrapInner("\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e").children(),
g.addClass("oj-tabs-gen-div oj-tabs-tab-content"),g.children().addClass("oj-tabs-gen-a"))}else c=a.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent().parent().parent(),c.addClass("oj-tabs-gen-li"),c.children().addClass("oj-tabs-gen-div oj-tabs-tab-content");b&&c.attr("data-content",b);return c},addTab:function(a){var b,c,h=-1;a.tab&&a.content?(c=a.content,b=this.VP(a.tab,this.KN(c)),void 0!==a.index&&(h=a.index)):(c=a,b=this.VP(g(a).find("\x3e :first-child"),
this.KN(c)));a=this.element.children(".oj-tabs-nav-root");a=a.hasClass("oj-tabs-nav")?a:a.length?a.find(".oj-tabs-nav"):this.element.children(".oj-tabs-nav");var k=!1;a.length||(a=g("\x3cul\x3e"),k=!0);k&&a.prependTo(this.element);0<=h&&h<a.children().length?(h=a.children(":eq("+h+")"),a=this.element.children(this.Ey(h.attr("aria-controls"))),h.before(b),a.before(c)):(b.appendTo(a),c.appendTo(this.element));this.refresh();0==this.pb.length&&this.UF(0);b[0].scrollIntoView(!1)},KMa:function(){this.hI=
a.wg.t2(this.ke)},Mka:function(){a.wg.Z4(this.ke)},IMa:function(){if(this.options.reorderable){var b=this;a.Q.Qe()&&this.KMa();this.ke.sortable({axis:b.ce()?"x":"y",distance:10,start:function(){b.ke.children(".ui-sortable-placeholder").each(function(){g(this).addClass("oj-sortable-placeholder")})},stop:function(a,c){var g=c.item;b.$ba(a,g,g.prev())||b.ke.sortable("cancel")}});this.m1=!0}else this.Mka(),this.m1=!1},Sg:function(a,b){var c=b.edge;this.pX="top"==c||"bottom"==c||"start"==c||"end"==c;this._super(a,
b)},Hha:function(a){return"horizontal"==a?"top":"vertical"==a?"start":null},$0:function(a){if(this.Si&&!this.pX||!a)a=this.Hha(this.options.orientation);var b=this.options.edge;this.element.removeClass("oj-tabs-top oj-tabs-bottom oj-tabs-start oj-tabs-end");switch(a){case "top":case "bottom":!this.ym||"start"!=b&&"end"!=b||this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");"bottom"==a?this.element.addClass("oj-tabs-bottom"):
this.element.addClass("oj-tabs-top");this.Si?this.options.orientation="horizontal":"horizontal"!=this.options.orientation&&this.option("orientation","horizontal",{_context:{kb:!0},changed:!0});break;case "start":case "end":!this.ym||"top"!=b&&"bottom"!=b||this.element.removeClass("oj-tabs-horizontal");this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");"end"==a?this.element.addClass("oj-tabs-end"):this.element.addClass("oj-tabs-start");this.Si?this.options.orientation=
"vertical":"vertical"!=this.options.orientation&&this.option("orientation","vertical",{_context:{kb:!0},changed:!0});break;default:return!1}this.Si?this.options.edge=a:this.options.edge!=a&&this.option("edge",a,{_context:{kb:!0},changed:!0});return!0},QY:function(){var a=this.ke.parent();a.hasClass("oj-tabs-conveyor")||(a=this.ke.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"),(0<this.element.children(".oj-tabs-facet").length?a.wrap("\x3cdiv\x3e").wrap("\x3cdiv\x3e").parent().parent().addClass("oj-tabs-conveyorbelt-wrapper"):
a).wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));return a},IVa:function(a){0>a.id.indexOf("ojtabs-id_")&&g(a).attr("id","ojtabs-id_"+a.id)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var b=a.subId;a=a.index;if("oj-conveyorbelt"!=b&&("number"!==typeof a||0>a||a>=this.ym.length))return null;switch(b){case "oj-conveyorbelt":return this.Ws?this.Ws[0]:null;case "oj-tabs-panel":return this.Gu(this.mc[a])[0];case "oj-tabs-tab":return this.mc[a];
case "oj-tabs-title":return g(this.mc[a]).find(".oj-tabs-title")[0];case "oj-tabs-close-icon":case "oj-tabs-close":return g(this.mc[a]).find(".oj-tabs-close-icon")[0]}return null},getSubIdByNode:function(a){for(var b=[],c=0;c<this.mc.length;c++)b.push(this.Gu(this.mc[c])[0]);for(var g=c=-1,k=a;k;){if(this.Ws&&k===this.Ws[0])return{subId:"oj-conveyorbelt"};c=Array.prototype.indexOf.call(this.mc,k);if(-1!=c)break;g=b.indexOf(k);if(-1!=g)return{subId:"oj-tabs-panel",index:g};k=k.parentElement}if(-1!=
c)for(b=this.getNodeBySubId({subId:"oj-tabs-title",index:c}),g=this.getNodeBySubId({subId:"oj-tabs-close",index:c}),k=a;k;){if(k===b)return{subId:"oj-tabs-title",index:c};if(k===g)return{subId:"oj-tabs-close",index:c};if(k===this.mc[c])return{subId:"oj-tabs-tab",index:c};k=k.parentElement}return null},fCa:function(){return this.O_+10},rea:function(){var a=this.element.find(".oj-tabs-conveyorbelt-wrapper");return a.length?a[0].clientWidth:this.element[0].clientWidth},xga:function(){return this.O_>
this.rea()},EDa:function(){var a=Math.floor(this.rea()/this.mc.length);this.options.removable&&(a-=28);return a},B$:function(){var a=this.EDa();this.ke.find(".oj-tabs-title").each(function(){g(this).css("max-width",""+a+"px").addClass("oj-tabs-title-overflow")})},IKa:function(){this.ke.find(".oj-tabs-title").each(function(){g(this).css("max-width","").removeClass("oj-tabs-title-overflow")})},rWa:function(){},bh:function(){this.Dga()&&(this.xga()?this.B$():this.IKa())},Dga:function(){return"auto"==
this.options.truncation||"progressive"==this.options.truncation},GNa:function(){this.ce()&&0<this.mc.length&&(null==this.Fh&&(this.Fh=this.bh.bind(this)),a.Q.Xk(this.element[0],this.Fh),this.rfa=!0,this.O_=this.QY()[0].scrollWidth,this.Dga()&&this.xga()&&this.B$())},Pp:function(){this._super();this.refresh()},oo:function(){this._super();this.refresh()},wk:function(a){return g("\x3ca\x3e").text(this.R(b[a])).attr("href","#").wrap("\x3cli\x3e").parent().attr("id",c[a]).addClass("oj-menu-item")},nIa:function(a){if(!a||
!a.length)return!1;this.Xa.kQ=a},nha:function(a,b,c){if(!b||!b.length||!this.Xa.kQ)return!1;var g=this.Xa.kQ;this.Xa.kQ=!1;this.$ba(a,g,b,c)},oIa:function(a,b){if(!b||!b.length)return!1;this.aP(b,null,a)},dm:function(a,b){var c=b?b.item.attr("id"):void 0;"ojtabscut"===c?this.nIa(this.Xa.tab):"ojtabspastebefore"===c?this.nha(a,this.Xa.tab,!0):"ojtabspasteafter"===c?this.nha(a,this.Xa.tab,!1):"ojtabsremove"===c&&this.oIa(a,this.Xa.tab)},Nu:function(a){if(a=a||this.options.contextMenu){if("function"==
g.type(a)){try{a=a()}catch(b){a=null}g.type(a)}a&&g(a).length&&(this.options.contextMenu=a)}this.Xa.xi=!!a;this.gu()},QL:function(a,b,c){-1==b.indexOf(c)&&(b=this.wk(c),a.append(b),this.Xa.UJ.push(b))},gu:function(){var a=g(this.options.contextMenu);if(0!=a.length||this.options.reorderable||this.options.removable){var c=this;if(0==a.length){var f=this.options.reorderable?"labelReorder":b.remove,h=this.element.uniqueId().attr("id")+"contextmenu",a=g("\x3cul\x3e");a.css("display","none").attr("id",
h).attr("aria-label",this.R(f));g(document.body).append(a);a.ojMenu();this.options.contextMenu=this.Ey(h)}var k=[];a.find("[data-oj-command]").each(function(){if(0===g(this).children("a").length){var a=g(this).attr("data-oj-command").slice(8);g(this).replaceWith(c.wk(a));g(this).addClass("oj-menu-item");k.push(a)}});this.options.reorderable&&(this.QL(a,k,"cut"),this.QL(a,k,"paste-before"),this.QL(a,k,"paste-after"),this.Xa.sl=a.find("#ojtabspastebefore"),this.Xa.Am=a.find("#ojtabspasteafter"));this.options.removable&&
(this.QL(a,k,"remove"),this.Xa.TJ=a.find("#ojtabsremove"));this.Xa.Uf=a;a.ojMenu("refresh");a.on("ojselect",g.proxy(this.dm,this))}},xx:function(){var a=this.Xa;if(a&&a.Uf){a.Uf.off("ojselect");a.xi||(a.Uf.ojMenu("destroy"),a.Uf.remove());if(a.UJ)for(;0<a.UJ.length;)a.UJ.pop().remove();a.Uf=null}a.sl=null;a.Am=null;a.TJ=null},$ba:function(a,b,c,g){var k=this.Gu(b),l={tab:b,content:k};if(!1===this._trigger("beforeReorder",a,l))return!1;var m=this.mc.index(b);if(c.length){if(this.mc.index(c)==m)return!0;
m=this.Gu(c);g?(c.before(b),m.before(k)):(c.after(b),m.after(k))}else if(0<this.mc.length){if(0==m)return!0;this.mc.first().before(b);this.ym.first().before(k)}this.Z1();this.refresh();c.blur();b.focus();this._trigger("reorder",a,l);return!0},eja:function(a){return a?a.replace(/[#!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$\x26"):""},Ey:function(a){return a?"#"+this.eja(a):""},Gu:function(a){return this.element.find(this.Ey(g(a).attr("aria-controls")))},KN:function(a){var b=a.attr("id");b||(b=a.uniqueId().attr("id"),
a.addClass("oj-tabs-gen-id"));return b},PY:function(a){a=this.vda(a);if(-1!==a)return g(this.mc[a])},vda:function(b){var c=-1;"number"===typeof b?0<=b&&b<this.mc.length&&(c=b):"string"===typeof b&&(b=this.eja(b),a.Q.jR(b)&&(b=this.element.find(this.Ey(b)),b.length&&(c=this.mc.index(b),-1==c&&(c=this.ym.index(b)))));return c},JY:function(){var a=this.options.selected;return"number"===typeof a?a:this.mc.index(g(this.Ey(a)))},HN:function(a){if(a){var b=a.attr("id");return b?b:this.mc.index(a)}},Kja:function(a){var b=
(this.ke?this.ke:this.element.children("ul")).children("li");b.removeClass("oj-disabled").removeAttr("aria-disabled");var c=[];if(a&&0<a.length)for(var g,k,l=0;l<a.length;l++)if(k=this.PY(a[l]))k.addClass("oj-disabled"),k.attr("aria-disabled","true"),k.find(".oj-tabs-anchor").removeAttr("href"),g=k.attr("id"),c.push(g?g:b.index(k));this.Z1(c)},Z1:function(b){if(!b){b=[];var c=this;this.ke.children().each(function(){var a=g(this);a.hasClass("oj-disabled")&&b.push(c.HN(a))})}a.f.Maa(b,this.options.disabledTabs)||
(this.Si?this.options.disabledTabs=b:this.option({disabledTabs:b},{_context:{kb:!0,yd:!0},changed:!0}))},nHa:function(a){var b=!1;this.mc.each(function(){if(this===a||g.contains(this,a))return b=!0,!1});return b},Nza:function(){var a=this.Xca(),b=this,c=this.element.children("ul");0<c.length&&c.children("li").each(function(c){b.VP(g(this),a[c])})},Oza:function(){var a=this.element.children("ul");if(0==a.length){var b=this,c=this.Xca(),a=g("\x3cul\x3e");this.element.children().each(function(h){b.VP(g(this).find("\x3e :first-child"),
c[h]).appendTo(a)});a.prependTo(this.element)}},Gwa:function(){var a=this.element.children(".oj-tabs-nav-root"),b=this,c=a.children(".oj-tabs-conveyorbelt-wrapper");a.index();this.element.children(".oj-tabs-facet").each(function(){var h=g(this),k=b.KN(h);0==a.find(b.Ey(k)).length&&(h.hasClass("oj-start")?c.before(h):h.appendTo(a))})},Xca:function(){var a=[],b=this;this.element.children(":not(ul):not(.oj-tabs-facet)").each(function(){var c=g(this);c.addClass("oj-tabs-panel");a.push(b.KN(c))});return a}})})();
a.U.qb("oj-tabs","baseComponent",{properties:{disabledTabs:{type:"Array"},edge:{type:"string"},orientation:{type:"string"},removable:{type:"boolean|Array"},reorderable:{type:"boolean"},selected:{type:"string|number"},selectOn:{type:"string"},truncation:{type:"string"}},methods:{addTab:{},refresh:{},removeTab:{}},extension:{nb:"ojTabs"}});a.U.register("oj-tabs",{metadata:a.U.getMetadata("oj-tabs")})});