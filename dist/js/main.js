"use strict";!function(n){n(document).ready(function(){n(".desktop-navigation .collection-item").each(function(){var e,i=n(this).children("a");"#"==i.attr("href")&&(e=n(this).children(".submenu"),i.on("mouseenter",function(){e.addClass("visible")}),e.on("mouseleave",function(){n(this).removeClass("visible")}))});var s=n("html"),o=n(".mobile-navigation");n(".hamburger__wrapper").on("click",function(){var e=n(this).children(".hamburger").children("div"),i=[self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop];e.hasClass("active")?(o.removeClass("visible"),e.removeClass("active"),s.css("overflow",s.data("previous-overflow"))):(o.addClass("visible"),e.addClass("active"),s.data("scroll-position",i),s.data("previous-overflow",s.css("overflow")),s.css("overflow","hidden")),window.scrollTo(i[0],i[1])});var i=(i=window.location.pathname).replace(new RegExp("/","g"),"");n(".mobile-navigation a, .desktop-navigation a, .footer a").each(function(){var e=n(this).attr("href");~e.indexOf(window.location.origin)?~e.indexOf(i)&&""!==i&&n(this).addClass("current-active"):(e=e.replace(new RegExp("/","g"),""),~i.indexOf(e)&&n(this).addClass("current-active"))}),i.includes("owner-operators")||i.includes("contractors")||i.includes("research")?n(".desktop-navigation .collection-item:first-child > a").addClass("current-active"):(i.includes("news")||i.includes("blog"))&&n(".desktop-navigation .collection-item:nth-child(2) > a").addClass("current-active"),n(".desktop-navigation .menu-item__link").hover(function(){n(this).siblings(".menu-item__link").addClass("greyed-out")},function(){n(this).siblings(".menu-item__link").removeClass("greyed-out")}),n("select > option:first-child").attr("disabled",!0),n("select > option:first-child").attr("hidden",!0),n("select").on("focus",function(){n(this).css("color","#172B38")}),n("select").on("change",function(){n(this).css("color","#172B38")}),n(".accordion p:first-child").on("click",function(){var e=n(this).parent();e.hasClass("active")?e.removeClass("active"):e.addClass("active")})}),n(window).on("load",function(){n(".slider").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear",variableWidth:!0}),n(".slider--opinions").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear"})})}(jQuery);