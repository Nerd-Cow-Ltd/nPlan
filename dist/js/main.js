"use strict";!function(n){n(document).ready(function(){n(".desktop-navigation .collection-item").each(function(){var e,o=n(this).children("a");"#"==o.attr("href")&&(e=n(this).children(".submenu"),o.on("mouseenter",function(){e.addClass("visible")}),e.on("mouseleave",function(){n(this).removeClass("visible")}))});var i=n("html"),t=n(".mobile-navigation");n(".hamburger__wrapper").on("click",function(){var e=n(this).children(".hamburger").children("div"),o=[self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop];e.hasClass("active")?(t.removeClass("visible"),e.removeClass("active"),i.css("overflow",i.data("previous-overflow"))):(t.addClass("visible"),e.addClass("active"),i.data("scroll-position",o),i.data("previous-overflow",i.css("overflow")),i.css("overflow","hidden")),window.scrollTo(o[0],o[1])});var o=window.location.pathname;n(".mobile-navigation a, .desktop-navigation a, .footer a").each(function(){var e=(e=n(this).attr("href")).replace(new RegExp("/","g"),"");o.includes(e)&&n(this).addClass("current-active")}),o.includes("owner-operators")||o.includes("contractors")||o.includes("research")?n(".desktop-navigation .collection-item:first-child > a").addClass("current-active"):(o.includes("news")||o.includes("blog"))&&n(".desktop-navigation .collection-item:nth-child(2) > a").addClass("current-active"),n(".desktop-navigation .menu-item__link").hover(function(){n(this).siblings(".menu-item__link").addClass("greyed-out")},function(){n(this).siblings(".menu-item__link").removeClass("greyed-out")}),n("select > option:first-child").attr("disabled",!0),n("select > option:first-child").attr("hidden",!0),n("select").on("focus",function(){n(this).css("color","#172B38")}),n("select").on("change",function(){n(this).css("color","#172B38")})}),n(window).on("load",function(){})}(jQuery);