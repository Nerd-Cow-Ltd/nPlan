"use strict";!function(t){t(document).ready(function(){t(".desktop-navigation .collection-item").each(function(){var e,i=t(this).children("a");"#"==i.attr("href")&&(e=t(this).children(".submenu"),i.on("mouseenter",function(){e.addClass("visible")}),e.on("mouseleave",function(){t(this).removeClass("visible")}))});var s=t("html"),o=t(".mobile-navigation");t(".hamburger__wrapper").on("click",function(){var e=t(this).children(".hamburger").children("div"),i=[self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop];e.hasClass("active")?(o.removeClass("visible"),e.removeClass("active"),s.css("overflow",s.data("previous-overflow"))):(o.addClass("visible"),e.addClass("active"),s.data("scroll-position",i),s.data("previous-overflow",s.css("overflow")),s.css("overflow","hidden")),window.scrollTo(i[0],i[1])});var i=(i=window.location.pathname).replace(new RegExp("/","g"),"");t(".mobile-navigation a, .desktop-navigation a, .footer a").each(function(){var e=t(this).attr("href");~e.indexOf(window.location.origin)?~e.indexOf(i)&&""!==i&&t(this).addClass("current-active"):(e=e.replace(new RegExp("/","g"),""),~i.indexOf(e)&&t(this).addClass("current-active"))}),i.includes("owner-operators")||i.includes("contractors")||i.includes("research")?t(".desktop-navigation .collection-item:first-child > a").addClass("current-active"):(i.includes("news")||i.includes("blog"))&&t(".desktop-navigation .collection-item:nth-child(2) > a").addClass("current-active"),t(".desktop-navigation .menu-item__link").hover(function(){t(this).siblings(".menu-item__link").addClass("greyed-out")},function(){t(this).siblings(".menu-item__link").removeClass("greyed-out")}),t("select > option:first-child").attr("disabled",!0),t("select > option:first-child").attr("hidden",!0),t("select").on("focus",function(){t(this).css("color","#172B38")}),t("select").on("change",function(){t(this).css("color","#172B38")}),t(".accordion p:first-child").on("click",function(){var e=t(this).parent();e.hasClass("active")?e.removeClass("active"):e.addClass("active")})}),t(window).on("load",function(){t(".slider").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear",adaptiveHeight:!0}),t(".slider--opinions").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear",adaptiveHeight:!0})})}(jQuery);