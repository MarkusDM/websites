let app = {
    body: $('body'),
    header: $('.header'),
    scrollbar_width: 0,
    init: function() {
        app.scrollbar_width = app.scrollbarWidth();
    },
    //scrollbar width
    scrollbarWidth: function() {
        var block = $('<div>').css({
                'height': '50px',
                'width': '50px'
            }),
            indicator = $('<div>').css({
                'height': '200px'
            });
        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    },
    fillScrollWidth: function(status, obj) {
        var container = $(obj),
            body = app.body;

        if (status == 'hide') {
            if (!body.hasClass('hide-scroll')) {
                body.addClass('hide-scroll');
                if (document.documentElement.clientWidth != window.innerWidth) {
                    body.css({
                        'overflow': 'hidden',
                        'padding-right': app.scrollbar_width
                    });
                    app.header.css('padding-right', app.scrollbar_width);
                    app.site_modal.css('padding-right', app.scrollbar_width);

                } else {
                    body.css('overflow', 'hidden');
                }


                //iOS fix
                app.scroll_position = $(document).scrollTop();
                body.css({
                    'position': 'fixed',
                    'top': '-' + app.scroll_position + 'px',
                    'height': '100%'
                });
            }
        } else {
            body.removeClass('hide-scroll');
            body.css({
                'overflow': '',
                'padding-right': '',
                'position': '',
                'top': '',
                'height': ''
            });
            app.header.css('padding-right', '');
            app.site_modal.css('padding-right', '');
            $(document).scrollTop(app.scroll_position);
        }
    },
    placeholderToggle: function(that) {
        $(that).each(function() {
            if ($(this).val() !== '') {
                $(this).parent().addClass("active");
            }
            if ($(this).is(':disabled')) {
                $(this).parent().addClass("disabled");
            }
        });
        $(that).parent().addClass('input-load');
        setTimeout(function() {
            $(that).parent().removeClass('input-load');
        }, 300);

        $(that).focus(function() {
            $(this).parent().addClass("active");
        });
        $(that).blur(function() {
            if ($(this).val() === "") {
                $(this).parent().removeClass("active");
            }
        });
    },
    headerFixed: function() {
        if (app.site_modals_open) return;
        if ($(window).scrollTop() > 0) {
            app.header.addClass('fixed');
        } else {
            if (!app.body.hasClass('hide-scroll')) {
                app.header.removeClass('fixed');
            }
        }
    },
    customSelect: {
        openClose: function(status, that) {
            if (status == 'open') {
                $('.custom-select').removeClass('open');
                $(that).closest('.custom-select').addClass('open');
                if (Scrollbar.get($(that).closest('.custom-select').find('.c-select-scroll')[0]) !== undefined) {
                    Scrollbar.get(($(that).closest('.custom-select').find('.c-select-scroll')[0])).update();
                }
            } else {
                $('.custom-select.open').removeClass('open');
            }
        },
        select: function(that) {
            var this_item = $(that);
            this_item.closest('.custom-select').find('.c-select-list>li').removeClass('selected');
            this_item.parent().addClass('selected');
            this_item.closest('.custom-select').find('input').val(this_item.attr('data-val'));

            this_item.closest('.custom-select').find('.c-select-title span').text(this_item.text());

        },
        update: function() {
            $(".custom-select").each(function() {
                var active = $(this).find('.c-select-list>li.selected a');
                if (!active.length) {
                    active = $(this).find('.c-select-list>li:first a');
                }
                app.customSelect.select(active);
            });
        },
        selectScrollBarInit: function() {

        },
        init: function() {
            app.customSelect.update();

            $(document).on('click', '.c-select-title', function(e) {
                e.preventDefault();
                if ($(this).parent().hasClass('open')) {
                    app.customSelect.openClose('close');
                } else {
                    app.customSelect.openClose('open', this);
                }
            });
            $(document).on('click', '.c-select-list a', function(e) {
                e.preventDefault();
                app.customSelect.select(this);
                app.customSelect.openClose('close');
            });
            $(document).on('mousedown', function(event) {
                if ($(event.target).closest(".custom-select").length)
                    return;
                app.customSelect.openClose('close');
                event.stopPropagation();
            });
            //preventDefault for swipe
            $(document).on('dragstart', '.custom-select a', function(event) {
                event.preventDefault();
            });
        }
    },
    zIndexFromLast: function(obj, start_index) {
        $(obj.get().reverse()).each(function() {
            $(this).css('z-index', start_index);
            start_index++;
        });
    },


}
app.init();




$(document).ready(function() {
    //	app.headerFixed();
    //	app.placeholderToggle(".input input, .textarea textarea");
    //	app.customSelect.init();
    //	app.zIndexFromLast($('.custom-select'), 3);
});








$(document).ready(function() {
    let load_screen = $('.load-screen');
    if (!sessionStorage.getItem('preloader')) {
        load_screen.addClass('active');
        setTimeout(function() {
            load_screen.fadeOut(500);
        }, 4000);
        sessionStorage.setItem('preloader', 'open')
    } else {

        load_screen.css('display', 'none')


    }

});








/*    
$('[data-fancybox]').fancybox({
	touch: true,
	smallBtn: true,
	animationEffect: "fade",
	backFocus: false,
	beforeShow: function (instance, current) {
		app.fillScrollWidth('hide', 'body');
	},
	afterClose: function (instance, current) {
		app.fillScrollWidth('show', 'body');
	}
});
	    
	*/


/*    
    //object-fit
    $(function () {
        objectFitImages()
    });
*/

/*    
    //mask
    $("input[type='tel']").inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnFocus: true,
		showMaskOnHover: false
    });
*/

/*    
    //form validation
    $(".validation").each(function () {
        $(this).parsley({
			excluded: '.excluded',
			classHandler: function (el) {
				return el.$element.closest('.err-target');
			}
		});
    });  
*/

/*   
    // slider
    $('.slick-slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-arr-l"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon-arr-r"></i></button>',
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
*/