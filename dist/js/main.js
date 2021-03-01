"use strict";!function(D){D(document).ready(function(){D(".desktop-navigation .collection-item").each(function(){var e,i=D(this).children("a");"#"==i.attr("href")&&(e=D(this).children(".submenu"),i.on("mouseenter",function(){e.addClass("visible")}),e.on("mouseleave",function(){D(this).removeClass("visible")}))});var t=D("html"),a=D(".mobile-navigation");D(".hamburger__wrapper").on("click",function(){var e=D(this).children(".hamburger").children("div"),i=[self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop];e.hasClass("active")?(a.removeClass("visible"),e.removeClass("active"),t.css("overflow",t.data("previous-overflow"))):(a.addClass("visible"),e.addClass("active"),t.data("scroll-position",i),t.data("previous-overflow",t.css("overflow")),t.css("overflow","hidden")),window.scrollTo(i[0],i[1])});var i=(i=window.location.pathname).replace(new RegExp("/","g"),"");D(".mobile-navigation a, .desktop-navigation a, .footer a").each(function(){var e=D(this).attr("href");~e.indexOf(window.location.origin)?~e.indexOf(i)&&""!==i&&D(this).addClass("current-active"):(e=e.replace(new RegExp("/","g"),""),~i.indexOf(e)&&D(this).addClass("current-active"))}),i.includes("owner-operators")||i.includes("contractors")||i.includes("research")?D(".desktop-navigation .collection-item:first-child > a").addClass("current-active"):(i.includes("news")||i.includes("blog"))&&D(".desktop-navigation .collection-item:nth-child(2) > a").addClass("current-active"),D(".desktop-navigation .menu-item__link").hover(function(){D(this).siblings(".menu-item__link").addClass("greyed-out")},function(){D(this).siblings(".menu-item__link").removeClass("greyed-out")}),D("select > option:first-child").attr("disabled",!0),D("select > option:first-child").attr("hidden",!0),D("select").on("focus",function(){D(this).css("color","#172B38")}),D("select").on("change",function(){D(this).css("color","#172B38")}),D(".js-toggle-video").on("click",function(e){e.preventDefault();e=D(".js-video__wrapper");document.body.clientWidth<=560&&D("body").animate({"margin-top":e.innerHeight()},400),e.addClass("visible")}),D(".js-close-video").on("click",function(e){e.preventDefault();e=D(".js-video__wrapper");document.body.clientWidth<=560&&D("body").animate({"margin-top":0},400),e.removeClass("visible");var i=e.find("iframe"),t=i.attr("src");setTimeout(function(){i.attr("src",""),i.attr("src",t)},500)}),D(".accordion p:first-child").on("click",function(){var e=D(this).parent();e.hasClass("active")?e.removeClass("active"):e.addClass("active")}),D(".js-calculator").calculator()}),D(window).on("load",function(){D(".slider").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear",adaptiveHeight:!0}),D(".slider--opinions").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear",adaptiveHeight:!0})}),D.fn.calculator=function(){var e,c,r,d,h,u,i,t,v,f,m,p,w,g,a,o,s,n,l,b,C,k,x,_,y,T,W,j;function E(){o.each(function(){D(this).is("input")?D(this).val(""):D(this).prop("selectedIndex",0).change()})}0<this.length&&(1<this.length?this.each(function(){D(this).calculator()}):(c=(e=this).find("form"),r=e.find(".progress-bar"),h=r.find(".progress-bar__inner"),u=c.find(".calculator-item:first-child"),i=c.find(".calculator01"),t=c.find(".calculator02"),c.find(".calculator03"),v=c.find(".calculator04"),c.find(".calculator05"),f=c.find(".calculator06"),c.find(".calculator07"),m=c.find(".calculator08"),c.find(".calculator09"),p=c.find(".calculator10"),c.find(".calculator11"),w=c.find(".calculator12"),c.find(".calculator13"),g=c.find(".calculator14"),a=c.find(".calculator15"),o=e.find("input, select"),s=c.find(".primary-next"),n=c.find(".back-button"),l=c.find(".js-again"),W=a.find("h2 span"),j=a.find("h4 span"),d=r.outerWidth()/8,h.animate({width:d},500),E(),s.on("click",function(e){var i,t,a,o,s,n,l;e.preventDefault(),u=D(this).closest(".calculator-item"),n=(i=u).find("input, select"),l=i.find(".div-block-44"),e=c.find("#".concat(+i.attr("id")+1)),""==n.val()?i.hasClass("error")||(t=D('<div class="error-message">Please enter a number.</div>'),i.addClass("error"),l.before(t),setTimeout(function(){i.removeClass("error"),t.remove()},3e3)):null==n.val()?i.hasClass("error")||(a=D('<div class="error-message">Please select an option.</div>'),i.addClass("error"),l.before(a),setTimeout(function(){i.removeClass("error"),a.remove()},3e3)):(i.is("#3")||i.is("#5")||i.is("#6"))&&(i.val()<0||100<i.val())?i.hasClass("error")||(o=D('<div class="error-message">Please enter a number between 0 and 100.</div>'),i.addClass("error"),l.before(o),setTimeout(function(){i.removeClass("error"),o.remove()},3e3)):i.is("#1")?(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),"data-centre"==n.val()?y=.8:"commercial-building"==n.val()?y=.7:"road"==n.val()?y=1.1:"telecom"==n.val()?y=1.07:"water"==n.val()?y=1.15:"energy"==n.val()?y=1.35:"rail"==n.val()&&(y=1.63)):i.is("#2")?("execution"==n.val()?(i.hide(),e.show()):(s=c.find("#".concat(+i.attr("id")+2)),h.animate({width:h.outerWidth()+d},500),i.hide(),s.show()),"sanction"==n.val()?T=1:"detailed-design"==n.val()?T=.9:"early-concept"==n.val()&&(T=.5)):i.is("#3")?90<n.val()?(i.hide(),v.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),T=-Math.abs(1.0999999999999999)*(n.val()/100)+.9999999999999999):i.is("#4")?n.val()<5e7?(i.hide(),f.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),C=n.val()):i.is("#5")?n.val()<5||25<n.val()?(i.hide(),m.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),k=n.val()/100):i.is("#6")?n.val()<1||20<n.val()?(i.hide(),p.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),_=n.val()/100):i.is("#7")?n.val()<.5||10<n.val()?(i.hide(),w.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),x=n.val()):i.is("#8")&&(n.val()<100?(i.hide(),g.show()):(n=+(s=(.003*+(b=n.val())*.62714285714286*(+C*+k/(52*+x))+(108600*+x-5e4*+x)+6e-4*+C+ +C*+_*.03)*y*T)+.003*+b*.62714285714*10183150.1832,W.text((s/1e6).toFixed(2)),j.text((n/1e6).toFixed(2)),h.animate({width:h.outerWidth()+d},500),setTimeout(function(){r.addClass("completed")},500),i.hide(),e.show()))}),n.on("click",function(e){e.preventDefault(),u=D(this).closest(".calculator-item");var i=c.find("#".concat(+u.attr("id")-1)),e=t.find("select").val();"execution"!==e&&u.is("#4")&&(i=c.find("#".concat(+u.attr("id")-2))),"execution"==e&&u.is("#3")||h.animate({width:h.outerWidth()-d},500),u.hide(),i.show()}),l.on("click",function(e){e.preventDefault(),u=D(this).closest(".calculator-item"),E(),r.removeClass("completed"),h.animate({width:d},500),u.hide(),i.show()})))}}(jQuery);