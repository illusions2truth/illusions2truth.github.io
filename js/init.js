!function(e){skel.init({reset:"full",breakpoints:{global:{href:"css/style.css",containers:"70em",grid:{gutters:["2.5em",0]}},xlarge:{media:"(max-width: 1680px)",href:"css/style-xlarge.css"},large:{media:"(max-width: 1280px)",href:"css/style-large.css",containers:"90%",viewport:{scalable:!1}},medium:{media:"(max-width: 980px)",href:"css/style-medium.css",containers:"100%!"},small:{media:"(max-width: 736px)",href:"css/style-small.css"},xsmall:{media:"(max-width: 480px)",href:"css/style-xsmall.css"}},plugins:{layers:{config:{mode:function(){return skel.vars.isMobile||"safari"==skel.vars.browser?"transform":"position"}},navPanel:{animation:"pushX",breakpoints:"small",clickToHide:!0,height:"100%",hidden:!0,html:'<div data-action="navList" data-args="nav"></div>',orientation:"vertical",position:"top-left",side:"left",width:250},titleBar:{breakpoints:"small",height:44,html:'<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span><span class="title" data-action="copyText" data-args="logo"></span>',position:"top-left",side:"top",width:"100%"}}}}),e(function(){var a=e(window),t=e("body");t.addClass("is-loading"),a.on("load",function(){window.setTimeout(function(){t.removeClass("is-loading")},0)}),skel.vars.isMobile&&t.addClass("is-touch");var i=e("form");i.length>0&&skel.vars.IEVersion<10&&(e.fn.n33_formerize=function(){var a=new Array,t=e(this);return t.find("input[type=text],textarea").each(function(){var a=e(this);(""==a.val()||a.val()==a.attr("placeholder"))&&(a.addClass("formerize-placeholder"),a.val(a.attr("placeholder")))}).blur(function(){var a=e(this);a.attr("name").match(/_fakeformerizefield$/)||""==a.val()&&(a.addClass("formerize-placeholder"),a.val(a.attr("placeholder")))}).focus(function(){var a=e(this);a.attr("name").match(/_fakeformerizefield$/)||a.val()==a.attr("placeholder")&&(a.removeClass("formerize-placeholder"),a.val(""))}),t.find("input[type=password]").each(function(){var a=e(this),t=e(e("<div>").append(a.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=a.attr("id")&&t.attr("id",a.attr("id")+"_fakeformerizefield"),""!=a.attr("name")&&t.attr("name",a.attr("name")+"_fakeformerizefield"),t.addClass("formerize-placeholder").val(t.attr("placeholder")).insertAfter(a),""==a.val()?a.hide():t.hide(),a.blur(function(a){a.preventDefault();var t=e(this),i=t.parent().find("input[name="+t.attr("name")+"_fakeformerizefield]");""==t.val()&&(t.hide(),i.show())}),t.focus(function(a){a.preventDefault();var t=e(this),i=t.parent().find("input[name="+t.attr("name").replace("_fakeformerizefield","")+"]");t.hide(),i.show().focus()}),t.keypress(function(e){e.preventDefault(),t.val("")})}),t.submit(function(){e(this).find("input[type=text],input[type=password],textarea").each(function(){var a=e(this);a.attr("name").match(/_fakeformerizefield$/)&&a.attr("name",""),a.val()==a.attr("placeholder")&&(a.removeClass("formerize-placeholder"),a.val(""))})}).bind("reset",function(t){t.preventDefault(),e(this).find("select").val(e("option:first").val()),e(this).find("input,textarea").each(function(){var a,t=e(this);switch(t.removeClass("formerize-placeholder"),this.type){case"submit":case"reset":break;case"password":t.val(t.attr("defaultValue")),a=t.parent().find("input[name="+t.attr("name")+"_fakeformerizefield]"),""==t.val()?(t.hide(),a.show()):(t.show(),a.hide());break;case"checkbox":case"radio":t.attr("checked",t.attr("defaultValue"));break;case"text":case"textarea":t.val(t.attr("defaultValue")),""==t.val()&&(t.addClass("formerize-placeholder"),t.val(t.attr("placeholder")));break;default:t.val(t.attr("defaultValue"))}}),window.setTimeout(function(){for(x in a)a[x].trigger("formerize_sync")},10)}),t},i.n33_formerize()),e(".scrolly").scrolly({speed:2e3}),e("#nav > ul").dropotron({alignment:"right",hideDelay:350}),"ie"==skel.vars.browser||skel.vars.isMobile?e.fn._parallax=function(){return e(this)}:(e.fn._parallax=function(){return e(this).each(function(){var t,i,r=e(this);t=function(){r.css("background-position","center 0px"),a.on("scroll._parallax",function(){var e=parseInt(a.scrollTop())-parseInt(r.position().top);r.css("background-position","center "+e*-.15+"px")})},i=function(){r.css("background-position",""),a.off("scroll._parallax")},skel.change(function(){skel.isActive("medium")?i():t()})}),e(this)},a.on("load resize",function(){a.trigger("scroll")}));var r=e(".spotlight");r._parallax().each(function(){var a,t,i=e(this);a=function(){if(i.css("background-image",'url("'+i.find(".image.main > img").attr("src")+'")'),skel.canUseProperty("transition")){var e,a,t;i.hasClass("top")?(t="top",e="-20%",a=0):i.hasClass("bottom")?(t="bottom-only",e=0,a="20%"):(t="middle",e=0,a=0),i.scrollex({mode:t,top:e,bottom:a,initialize:function(){i.addClass("inactive")},terminate:function(){i.removeClass("inactive")},enter:function(){i.removeClass("inactive")}})}},t=function(){i.css("background-image",""),skel.canUseProperty("transition")&&i.unscrollex()},skel.on("change",function(){skel.isActive("medium")?t():a()})});var s=e(".wrapper");s.each(function(){var a,t,i=e(this);a=function(){skel.canUseProperty("transition")&&i.scrollex({top:250,bottom:0,initialize:function(){i.addClass("inactive")},terminate:function(){i.removeClass("inactive")},enter:function(){i.removeClass("inactive")}})},t=function(){skel.canUseProperty("transition")&&i.unscrollex()},skel.on("change",function(){skel.isActive("medium")?t():a()})});var n=e("#banner");n._parallax()})}(jQuery);