(function($) {
    $(document).ready(function() {
        $('.desktop-navigation .collection-item').each(function() {
            let $link = $(this).children('a');
            if ($link.attr('href') == '#') {
                let $submenu = $(this).children('.submenu');
                $link.on('mouseenter', function() {
                    $submenu.addClass('visible');
                });
                $submenu.on('mouseleave', function() {
                    $(this).removeClass('visible');
                });
            };
        });

        let $html = $('html');
      	let $mobileNav = $('.mobile-navigation');
		$('.hamburger__wrapper').on('click', function() {
            let $hamburger = $(this).children('.hamburger');
            let $icon = $hamburger.children('div');
            let scrollPosition = [
                self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
            ];
            if ($icon.hasClass('active')) {
                $mobileNav.removeClass('visible');
                $icon.removeClass('active');
                $html.css('overflow', $html.data('previous-overflow'));
                window.scrollTo(scrollPosition[0], scrollPosition[1]);
            } else {
                $mobileNav.addClass('visible');
                $icon.addClass('active');
                $html.data('scroll-position', scrollPosition);
                $html.data('previous-overflow', $html.css('overflow'));
                $html.css('overflow', 'hidden');
                window.scrollTo(scrollPosition[0], scrollPosition[1]);
            };
        });

        let currentSlug = window.location.pathname;
        currentSlug = currentSlug.replace(new RegExp('/', 'g'),"");
        $('.mobile-navigation a, .desktop-navigation a, .footer a').each(function() {
            let href = $(this).attr('href');
            if (~href.indexOf(window.location.origin)) {
                if (~href.indexOf(currentSlug) && currentSlug !== '') {
                    $(this).addClass('current-active')
                };
            } else {
                href = href.replace(new RegExp('/', 'g'),"");
                if (~currentSlug.indexOf(href)) {
                    $(this).addClass('current-active')
                };
            };
        });

        if (currentSlug.includes('owner-operators') || currentSlug.includes('contractors') || currentSlug.includes('research')) {
            $('.desktop-navigation .collection-item:first-child > a').addClass('current-active');
        } else if (currentSlug.includes('news') || currentSlug.includes('blog')) {
            $('.desktop-navigation .collection-item:nth-child(2) > a').addClass('current-active');
        };

        $('.desktop-navigation .menu-item__link').hover(function() {
            let $siblings = $(this).siblings('.menu-item__link');
            $siblings.addClass('greyed-out');
        }, function() {
            let $siblings = $(this).siblings('.menu-item__link');
            $siblings.removeClass('greyed-out');
        });

        $('select > option:first-child').attr('disabled', true);
        $('select > option:first-child').attr('hidden', true);

        $('select').on('focus', function() {
            $(this).css('color', '#172B38');
        });
        
        $('select').on('change', function() {
            $(this).css('color', '#172B38');
        });

        $('.js-toggle-video').on('click', function(e) {
            e.preventDefault();
            $('.js-video__wrapper').addClass('visible');
        });

        $('.js-close-video').on('click', function(e) {
            e.preventDefault();
            $('.js-video__wrapper').removeClass('visible');
        });

        $('.accordion p:first-child').on('click', function() {
            let $accordion = $(this).parent();
            if ($accordion.hasClass('active')) {
                $accordion.removeClass('active');
            } else {
                $accordion.addClass('active');
            };
        });

        $('.js-calculator').calculator();
    });

    $(window).on('load', function() {
        $('.slider').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            adaptiveHeight: true,
        });
        $('.slider--opinions').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            adaptiveHeight: true,
        });
    });

    $.fn.calculator = function () {
        let $el;

        let $form;

        let $progressBar;
        let progressBarAmount;
        let $progressBarInner;

        let $current;

        let $sector;
        let $phase;
        let $completion;
        let $completionError;
        let $value;
        let $valueError;
        let $cost;
        let $costError;
        let $contingency
        let $contingencyError;
        let $duration;
        let $durationError;
        let $activities;
        let $activitiesError;
        let $estimate;

        let $inputs;

        let $next;
        let $back;
        let $startAgain;

        let activities;
        let projectValue;
        let indirectCost;
        let durationYears;
        let projectContingency

        let projectTypeValue;
        let projectPhaseValue;

        let $result;
        let $secondaryResult;

        let init = function () {
            $form = $el.find('form');
            $progressBar = $el.find('.progress-bar');
            $progressBarInner = $progressBar.find('.progress-bar__inner');

            $current = $form.find('.calculator-item:first-child');

            $sector = $form.find('.calculator01');
            $phase = $form.find('.calculator02');
            $completion = $form.find('.calculator03');
            $completionError = $form.find('.calculator04');
            $value = $form.find('.calculator05');
            $valueError = $form.find('.calculator06');
            $cost = $form.find('.calculator07');
            $costError = $form.find('.calculator08');
            $contingency = $form.find('.calculator09');
            $contingencyError = $form.find('.calculator10');
            $duration = $form.find('.calculator11');
            $durationError = $form.find('.calculator12');
            $activities = $form.find('.calculator13');
            $activitiesError = $form.find('.calculator14');
            $estimate = $form.find('.calculator15');

            $inputs = $('input, select');

            $next = $form.find('.primary-next');
            $back = $form.find('.back-button');
            $startAgain = $form.find('.js-again');

            $result = $estimate.find('h2 span');
            $secondaryResult = $estimate.find('h4 span');

            progressBarAmount = $progressBar.outerWidth() / 8;
            $progressBarInner.animate({
                width: progressBarAmount
            }, 500);

            resetInputs();

            $next.on('click', function(e) {
				e.preventDefault();
                $current = $(this).closest('.calculator-item');
                InputValidation($current);
            });

            $back.on('click', function(e) {
				e.preventDefault();
                $current = $(this).closest('.calculator-item');
                let $itemBefore = $form.find(`#${+$current.attr('id') - 1}`);
                let phaseVal = $phase.find('select').val();
                if (phaseVal !== 'execution' && $current.is('#4')) {
                    $itemBefore = $form.find(`#${+$current.attr('id') - 2}`);
                };
                if (phaseVal == 'execution' && $current.is('#3')) {

                } else {
                    $progressBarInner.animate({
                        width: $progressBarInner.outerWidth() - progressBarAmount
                    }, 500);
                };
                $current.hide();
                $itemBefore.show();
            });

            $startAgain.on('click', function(e) {
				e.preventDefault();
                $current = $(this).closest('.calculator-item');
                resetInputs();
                $progressBar.removeClass('completed');
                $progressBarInner.animate({
                    width: progressBarAmount
                }, 500);
                $current.hide();
                $sector.show();
            });

            function InputValidation($current) {
                let $input = $current.find('input, select');
                let $buttonContainer = $current.find('.div-block-44');
                let $nextItem = $form.find(`#${+$current.attr('id') + 1}`);
                if ($input.val() == '') {
                    if (!$current.hasClass('error')) {
                        let $message = $('<div class="error-message">Please enter a number.</div>');
                        $current.addClass('error');
                        $buttonContainer.before($message);
                        setTimeout(function() {
                            $current.removeClass('error');
                            $message.remove();
                        }, 3000);
                    };
                } else if ($input.val() == null) {
                    if (!$current.hasClass('error')) {
                        let $message = $('<div class="error-message">Please select an option.</div>');
                        $current.addClass('error');
                        $buttonContainer.before($message);
                        setTimeout(function() {
                            $current.removeClass('error');
                            $message.remove();
                        }, 3000);
                    };
                } else if (($current.is('#3') || $current.is('#5') || $current.is('#6')) && ($current.val() < 0 || $current.val() > 100)) {
                    if (!$current.hasClass('error')) {
                        let $message = $('<div class="error-message">Please enter a number between 0 and 100.</div>');
                        $current.addClass('error');
                        $buttonContainer.before($message);
                        setTimeout(function() {
                            $current.removeClass('error');
                            $message.remove();
                        }, 3000);
                    };
                } else {
                    if ($current.is('#1')) {
                        $progressBarInner.animate({
                            width: $progressBarInner.outerWidth() + progressBarAmount
                        }, 500);
                        $current.hide();
                        $nextItem.show();
                        if ($input.val() == 'data-centre') {
                            projectTypeValue = 0.8;
                        } else if($input.val() == 'commercial-building') {
                            projectTypeValue = 0.7;
                        } else if($input.val() == 'road') {
                            projectTypeValue = 1.1;
                        } else if($input.val() == 'telecom') {
                            projectTypeValue = 1.07;
                        } else if($input.val() == 'water') {
                            projectTypeValue = 1.15;
                        } else if($input.val() == 'energy') {
                            projectTypeValue = 1.35;
                        } else if($input.val() == 'rail') {
                            projectTypeValue = 1.63;
                        };
                    } else if($current.is('#2')) {
                        if ($input.val() == 'execution') {
                            $current.hide();
                            $nextItem.show();
                        } else {
                            let $nextItem = $form.find(`#${+$current.attr('id') + 2}`);
                            $progressBarInner.animate({
                                width: $progressBarInner.outerWidth() + progressBarAmount
                            }, 500);
                            $current.hide();
                            $nextItem.show();
                        };
                        if ($input.val() == 'sanction') {
                            projectPhaseValue = 1;
                        } else if($input.val() == 'detailed-design') {
                            projectPhaseValue = 0.9;
                        } else if($input.val() == 'early-concept') {
                            projectPhaseValue = 0.5;
                        };
                    } else if($current.is('#3')) {
                        if ($input.val() > 90) {
                            $current.hide();
                            $completionError.show();
                        } else {
                            $progressBarInner.animate({
                                width: $progressBarInner.outerWidth() + progressBarAmount
                            }, 500);
                            $current.hide();
                            $nextItem.show();
                            projectPhaseValue = -Math.abs(1.0999999999999999) * ($input.val() / 100) + 0.9999999999999999;
                        };
                    } else if($current.is('#4')) {
                        if ($input.val() < 50000000) {
                            $current.hide();
                            $valueError.show();
                        } else {
                            $progressBarInner.animate({
                                width: $progressBarInner.outerWidth() + progressBarAmount
                            }, 500);
                            $current.hide();
                            $nextItem.show();
                            projectValue = $input.val();
                        };
                    } else if($current.is('#5')) {
                        if ($input.val() < 5 || $input.val() > 25) {
                            $current.hide();
                            $costError.show();
                        } else {
                            $progressBarInner.animate({
                                width: $progressBarInner.outerWidth() + progressBarAmount
                            }, 500);
                            $current.hide();
                            $nextItem.show();
                            indirectCost = $input.val() / 100;
                        };
                    } else if($current.is('#6')) {
                        if ($input.val() < 1 || $input.val() > 20) {
                            $current.hide();
                            $contingencyError.show();
                        } else {
                            $progressBarInner.animate({
                                width: $progressBarInner.outerWidth() + progressBarAmount
                            }, 500);
                            $current.hide();
                            $nextItem.show();
                            projectContingency = $input.val() / 100;
                        };
                    } else if($current.is('#7')) {
                        if ($input.val() < 0.5 || $input.val() > 10) {
                            $current.hide();
                            $durationError.show();
                        } else {
                            $progressBarInner.animate({
                                width: $progressBarInner.outerWidth() + progressBarAmount
                            }, 500);
                            $current.hide();
                            $nextItem.show();
                            durationYears = $input.val();
                        };
                    } else if($current.is('#8')) {
                        if ($input.val() < 100) {
                            $current.hide();
                            $activitiesError.show();
                        } else {
                            activities = $input.val();
                            let countHeading = (((+activities * 0.003 * 0.62714285714286 * ((+projectValue * +indirectCost) / (52 * +durationYears)))) + ((108600 * +durationYears) - (50000 * +durationYears)) + (+projectValue * 0.0006) + (+projectValue * +projectContingency * 0.03)) * projectTypeValue * projectPhaseValue;
                            let countSubheading = +countHeading + (+activities * 0.003 * 0.62714285714 * 10183150.1832);
                            $result.text((countHeading / 1000000).toFixed(2));
                            $secondaryResult.text((countSubheading / 1000000).toFixed(2));
                            $progressBarInner.animate({
                                width: $progressBarInner.outerWidth() + progressBarAmount
                            }, 500);
                            setTimeout(function() {
                                $progressBar.addClass('completed');
                            }, 500);
                            $current.hide();
                            $nextItem.show();
                        };
                    };
                };
            };

            function resetInputs() {
                $inputs.each(function() {
                    if($(this).is('input')) {
                        $(this).val('');
                    } else {
                        $(this).prop('selectedIndex', 0).change();
                    };
                });
            };
        };

        if (this.length > 0) {
            if (this.length > 1) {
                this.each(function () {
                    $(this).calculator();
                })
            } else {
                $el = this;
                init();
            }
        }
    };
})(jQuery);