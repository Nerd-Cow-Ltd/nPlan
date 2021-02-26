"use strict";!function(S){S(document).ready(function(){S(".desktop-navigation .collection-item").each(function(){var e,i=S(this).children("a");"#"==i.attr("href")&&(e=S(this).children(".submenu"),i.on("mouseenter",function(){e.addClass("visible")}),e.on("mouseleave",function(){S(this).removeClass("visible")}))});var a=S("html"),t=S(".mobile-navigation");S(".hamburger__wrapper").on("click",function(){var e=S(this).children(".hamburger").children("div"),i=[self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop];e.hasClass("active")?(t.removeClass("visible"),e.removeClass("active"),a.css("overflow",a.data("previous-overflow"))):(t.addClass("visible"),e.addClass("active"),a.data("scroll-position",i),a.data("previous-overflow",a.css("overflow")),a.css("overflow","hidden")),window.scrollTo(i[0],i[1])});var i=(i=window.location.pathname).replace(new RegExp("/","g"),"");S(".mobile-navigation a, .desktop-navigation a, .footer a").each(function(){var e=S(this).attr("href");~e.indexOf(window.location.origin)?~e.indexOf(i)&&""!==i&&S(this).addClass("current-active"):(e=e.replace(new RegExp("/","g"),""),~i.indexOf(e)&&S(this).addClass("current-active"))}),i.includes("owner-operators")||i.includes("contractors")||i.includes("research")?S(".desktop-navigation .collection-item:first-child > a").addClass("current-active"):(i.includes("news")||i.includes("blog"))&&S(".desktop-navigation .collection-item:nth-child(2) > a").addClass("current-active"),S(".desktop-navigation .menu-item__link").hover(function(){S(this).siblings(".menu-item__link").addClass("greyed-out")},function(){S(this).siblings(".menu-item__link").removeClass("greyed-out")}),S("select > option:first-child").attr("disabled",!0),S("select > option:first-child").attr("hidden",!0),S("select").on("focus",function(){S(this).css("color","#172B38")}),S("select").on("change",function(){S(this).css("color","#172B38")}),S(".accordion p:first-child").on("click",function(){var e=S(this).parent();e.hasClass("active")?e.removeClass("active"):e.addClass("active")}),S(".js-calculator").calculator()}),S(window).on("load",function(){S(".slider").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear",adaptiveHeight:!0}),S(".slider--opinions").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear",adaptiveHeight:!0})}),S.fn.calculator=function(){var e,c,r,d,h,u,i,a,v,f,m,w,p,g,t,o,s,n,l,b,C,k,x,T,W,_,y,E;function O(){o.each(function(){S(this).is("input")?S(this).val(""):S(this).prop("selectedIndex",0).change()})}0<this.length&&(1<this.length?this.each(function(){S(this).calculator()}):(c=(e=this).find("form"),r=e.find(".progress-bar"),h=r.find(".progress-bar__inner"),u=c.find(".calculator-item:first-child"),i=c.find(".calculator01"),a=c.find(".calculator02"),c.find(".calculator03"),v=c.find(".calculator04"),c.find(".calculator05"),f=c.find(".calculator06"),c.find(".calculator07"),m=c.find(".calculator08"),c.find(".calculator09"),w=c.find(".calculator10"),c.find(".calculator11"),p=c.find(".calculator12"),c.find(".calculator13"),g=c.find(".calculator14"),t=c.find(".calculator15"),o=S("input, select"),s=c.find(".primary-next"),n=c.find(".back-button"),l=c.find(".js-again"),y=t.find("h2 span"),E=t.find("h4 span"),d=r.outerWidth()/8,h.animate({width:d},500),O(),s.on("click",function(e){var i,a,t,o,s,n,l;e.preventDefault(),u=S(this).closest(".calculator-item"),n=(i=u).find("input, select"),l=i.find(".div-block-44"),e=c.find("#".concat(+i.attr("id")+1)),""==n.val()?i.hasClass("error")||(a=S('<div class="error-message">Please enter a number.</div>'),i.addClass("error"),l.before(a),setTimeout(function(){i.removeClass("error"),a.remove()},3e3)):null==n.val()?i.hasClass("error")||(t=S('<div class="error-message">Please select an option.</div>'),i.addClass("error"),l.before(t),setTimeout(function(){i.removeClass("error"),t.remove()},3e3)):(i.is("#3")||i.is("#5")||i.is("#6"))&&(i.val()<0||100<i.val())?i.hasClass("error")||(o=S('<div class="error-message">Please enter a number between 0 and 100.</div>'),i.addClass("error"),l.before(o),setTimeout(function(){i.removeClass("error"),o.remove()},3e3)):i.is("#1")?(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),"data-centre"==n.val()?W=.8:"commercial-building"==n.val()?W=.7:"road"==n.val()?W=1.1:"telecom"==n.val()?W=1.07:"water"==n.val()?W=1.15:"energy"==n.val()?W=1.35:"rail"==n.val()&&(W=1.63)):i.is("#2")?("execution"==n.val()?(i.hide(),e.show()):(s=c.find("#".concat(+i.attr("id")+2)),h.animate({width:h.outerWidth()+d},500),i.hide(),s.show()),"sanction"==n.val()?_=1:"detailed-design"==n.val()?_=.9:"early-concept"==n.val()&&(_=.5)):i.is("#3")?90<n.val()?(i.hide(),v.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),_=-Math.abs(1.0999999999999999)*(n.val()/100)+.9999999999999999):i.is("#4")?n.val()<5e7?(i.hide(),f.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),C=n.val()):i.is("#5")?n.val()<5||25<n.val()?(i.hide(),m.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),k=n.val()/100):i.is("#6")?n.val()<1||20<n.val()?(i.hide(),w.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),T=n.val()/100):i.is("#7")?n.val()<.5||10<n.val()?(i.hide(),p.show()):(h.animate({width:h.outerWidth()+d},500),i.hide(),e.show(),x=n.val()):i.is("#8")&&(n.val()<100?(i.hide(),g.show()):(n=+(s=(.003*+(b=n.val())*.62714285714286*(+C*+k/(52*+x))+(108600*+x-5e4*+x)+6e-4*+C+ +C*+T*.03)*W*_)+.003*+b*.62714285714*10183150.1832,y.text((s/1e6).toFixed(2)),E.text((n/1e6).toFixed(2)),h.animate({width:h.outerWidth()+d},500),setTimeout(function(){r.addClass("completed")},500),i.hide(),e.show()))}),n.on("click",function(e){e.preventDefault(),u=S(this).closest(".calculator-item");var i=c.find("#".concat(+u.attr("id")-1)),e=a.find("select").val();"execution"!==e&&u.is("#4")&&(i=c.find("#".concat(+u.attr("id")-2))),"execution"==e&&u.is("#3")||h.animate({width:h.outerWidth()-d},500),u.hide(),i.show()}),l.on("click",function(e){e.preventDefault(),u=S(this).closest(".calculator-item"),O(),r.removeClass("completed"),h.animate({width:d},500),u.hide(),i.show()})))}}(jQuery);