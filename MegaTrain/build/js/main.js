document.addEventListener('DOMContentLoaded', function() {

    const metropolis = new Swiper('.metropolis__swiper', {
        slidesPerView: 1,
        direction: 'horizontal',
        slideClass: 'metropolis__slide',
        loop: true,
        wrapperClass: 'metropolis__swiper-wrapper',
        pagination: {
            el: ".metropolis__swiper-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + "</span>";
            },
        },

    });


    // слайдер скидки




    const saleRate = new Swiper('.rate__swiper', {
        slidesPerView: 1,
        direction: 'horizontal',
        slideClass: 'rate__slide',
        grabCursor: true,
        centeredSlides: true,
        wrapperClass: 'rate__swiper-wrapper',

        navigation: {
            nextEl: '.rate__swiper-button-next',
            prevEl: '.rate__swiper-button-prev',
        },


        pagination: {
            el: ".rate__swiper-pagination",
            type: "fraction",
        },

        scrollbar: {
            el: '.rate__swiper-scrollbar',
        },



    });


    //  слайдер о компании 




    const saleRateTwo = new Swiper('.about__swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        slideClass: 'about__slider',
        wrapperClass: 'about__swiper-wrapper',

        navigation: {
            nextEl: '.about__swiper-button-next',
            prevEl: '.about__swiper-button-prev',
        },


        pagination: {
            el: ".about__swiper-pagination",
            type: "fraction",
        },





    });

    const sw = (i) => {
        console.log(i.realIndex);

        const slide = document.querySelectorAll(`.js-tab-block-his`);
        slide.forEach((el, index) => {
            el.classList.remove(`js-tab-block-his-active`)
            if (index === i.realIndex) {
                el.classList.add(`js-tab-block-his-active`)
            }
        })
    }


    var historySlide = new Swiper('.history__swiper', {
        direction: 'horizontal',
        slideClass: 'history__slide',
        loop: true,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        slidesPerView: '3',
        wrapperClass: 'history__swiper-wrapper',
        pagination: {
            el: '.history__swiper-pagination',
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.history__swiper-button-next',
            prevEl: '.history__swiper-button-prev',
        },

        breakpoints: {

            748: {
                slidesPerView: '8',
            },


        },
        onAny(eventName, i, info) {


            switch (eventName) {
                case `click`:
                    sw(i);
                    break;
                case `slideChange`:
                    sw(i);
                    break;

                default:
                    return;
            }

        }
    });

    // Вагон ресторан

    const restSlider = new Swiper('.photo-car__swiper-wrapper', {
        direction: 'horizontal',
        slidesPerView: '4',
        slideClass: 'photo-car__slide',
        wrapperClass: 'photo-car__swiper-wrapper',

        navigation: {
            nextEl: '.photo-car__swiper-button-next',
            prevEl: '.photo-car__swiper-button-prev',
        },


        pagination: {
            el: ".photo-car__swiper-pagination",
            type: "fraction",
        },



        scrollbar: {
            el: '.photo-car__swiper-scrollbar',
        },




    });


    // табуляция

    function tab(parent, i = 0) {
        try {
            let p = parent
            let t = p.querySelectorAll('.equations-js')
            let b = p.querySelectorAll('.equations__block-js')

            function tabActive(index) {
                t.forEach(item => {
                    item.classList.remove('active-item')
                });
                t[index].classList.add('active-item')
                b.forEach(item => {
                    item.classList.remove('active')
                });
                b[index].classList.add('active')
            }

            tabActive(i)

            t.forEach((element, index) => {
                element.addEventListener('click', function(e) {
                    e.preventDefault()
                    tabActive(index)
                })
            });
        } catch {
            console.log('tabs error')
        }
    }

    if (document.querySelector('.equations')) {
        let myTabs = document.querySelectorAll('.equations')
        myTabs.forEach(element => {
            tab(element)
        });
    }



    // табуляция слайдера

    function sliderTab(parent, i = 0) {
        try {
            let p = parent
            let t = p.querySelectorAll('.trailers__item')


            function tabActive(index) {
                t.forEach(item => {
                    item.classList.remove('active')
                });
                t[index].classList.add('active')

            }

            tabActive(i)

            t.forEach((element, index) => {
                element.addEventListener('click', function(e) {
                    e.preventDefault()
                    tabActive(index)
                })
            });
        } catch {
            console.log('tabs error')
        }
    }

    if (document.querySelector('.trailers')) {
        let myTabs = document.querySelectorAll('.trailers')
        myTabs.forEach(element => {
            sliderTab(element)
        });
    }


    // Слайдер с табуляцией

    const tabuletSlider = new Swiper('.trailers__swiper', {
        direction: 'horizontal',
        slidesPerView: '4',

        slideClass: 'trailers__slide',
        wrapperClass: 'trailers__swiper-wrapper',

        navigation: {
            nextEl: '.trailers__swiper-button-next',
            prevEl: '.trailers__swiper-button-prev',
        },


        pagination: {
            el: ".trailers__swiper-pagination",
            type: "fraction",
        },



        scrollbar: {
            el: '.trailers__swiper-scrollbar',
        },




    });




    // табуляция слайдера

    function sliderTab(parent, i = 0) {
        try {
            let p = parent
            let t = p.querySelectorAll('.trailers__item')


            function tabActive(index) {
                t.forEach(item => {
                    item.classList.remove('active')
                });
                t[index].classList.add('active')

            }

            tabActive(i)

            t.forEach((element, index) => {
                element.addEventListener('click', function(e) {
                    e.preventDefault()
                    tabActive(index)
                })
            });
        } catch {
            console.log('tabs error')
        }
    }

    if (document.querySelector('.trailers')) {
        let myTabs = document.querySelectorAll('.trailers')
        myTabs.forEach(element => {
            sliderTab(element)
        });
    }


    // Слайдер cписок

    const list = new Swiper('.transportation-block__inner-swiper', {
        direction: 'vertical',
        slidesPerView: '7',
        // slideClass: 'trailers__slide',
        wrapperClass: 'transportation-block__inner-text-ul-swiper',

        navigation: {
            nextEl: '.transportation-block__inner-swiper-button-next',
            prevEl: '.transportation-block__inner-swiper-button-prev',
        },


        pagination: {
            el: ".transportation-block__inner-swiper-pagination",
            type: "fraction",
        },



        scrollbar: {
            el: '.transportation-block__inner-swiper-scrollbar',
        },




    });



    // слайдер фото ресторана 

    const restSlide = new Swiper('.photo-car__swiper', {
        slidesPerView: 'auto',
        direction: 'horizontal',
        scrollbarDraggable: true,
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slideClass: 'photo-car__slide',
        wrapperClass: 'photo-car__swiper-wrapper',


        navigation: {
            nextEl: '.photo-car__swiper-button-next',
            prevEl: '.photo-car__swiper-button-prev',
        },


        pagination: {
            el: ".photo-car__swiper-pagination",
            type: "fraction",
        },

        scrollbar: {
            el: '.photo-car__swiper-scrollbar',
        },

        breakpoints: {

            748: {
                slidesPerView: 'auto',
            },


        },

        onTouchStart: function() {
            return false;
        },





    });


    // Админка 



    function admin(parent, i = 0) {
        try {
            let p = parent
            let t = p.querySelectorAll('.js-tab')
            let b = p.querySelectorAll('.js-tab-block')

            function tabActive(index) {
                t.forEach(item => {
                    item.classList.remove('active-profil')
                });
                t[index].classList.add('active-profil')
                b.forEach(item => {
                    item.classList.remove('active')
                });
                b[index].classList.add('active')
            }

            tabActive(i)

            t.forEach((element, index) => {
                element.addEventListener('click', function(e) {
                    e.preventDefault()
                    tabActive(index)
                })
            });
        } catch {
            console.log('tabs error')
        }
    }

    if (document.querySelector('.admin__wrapper')) {
        let myTabs = document.querySelectorAll('.admin__wrapper')
        myTabs.forEach(element => {
            admin(element)
        });
    }



});




// Регистрация

$(document).ready(function() {
    //  modal 4

    // .js-modal-overlay Оверлэй закрывает окна

    $('.js-modal-overlay').click(function(event) {
        event.preventDefault();
        closePopup();
    });

    // .js-modal-close класс для крестиков хакрыть в нутри окон
    $('.js-modal-close').click(function(event) {
        event.preventDefault();
        closePopup();
        $("body").css("owerflow", "initial");
    });

    // .js-open-modal класс для всех кнопок "ПОЛУЧИТЬ ПОМОЩЬ"
    $('.js-open-register').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.submit-exit').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.registration-js').css("display", "none");
        $(".overlay").css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.registration-js ').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");



    }

    function closeForm() {
        $('.registration-js').css("display", "none");
        $('.exit-js').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }


    //  modal 5

    // .js-modal-overlay Оверлэй закрывает окна

    $('.js-modal-overlay').click(function(event) {
        event.preventDefault();
        closePopup();
    });

    // .js-modal-close класс для крестиков хакрыть в нутри окон
    $('.js-modal-close').click(function(event) {
        event.preventDefault();
        closePopup();
        $("body").css("owerflow", "initial");
    });

    // .js-open-modal класс для всех кнопок "ПОЛУЧИТЬ ПОМОЩЬ"
    $('.submit-exit').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.submit-register').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.exit-js').css("display", "none");
        $('.registration-js').css("display", "none");
        $(".overlay").css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.exit-js').css("display", "block");
        $(".overlay").css("display", "block");
        $(".registration-js").css("display", "none");
        $("body").css("overflow", "hidden");



    }

    function closeForm() {
        $('.registration-js').css("display", "block");
        $('.exit-js').css("display", "none");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }






    // общественные данные

    $('.data-edit').click(function() {
        $('.admin-block-data ').css('display', 'flex');
        $('.data-edit').css('display', 'none');
        $('.total-information').css('display', 'none');
        $('.data-save').css('display', 'block');
    });

    $('.data-save').click(function() {
        $('.total-information').css('display', 'flex');
        $('.data-save').css('display', 'none');
        $('.data-edit').css('display', 'block');
        $('.admin-block-data').css('display', 'none');
    });



    // паспортные  данные

    $('.passport-edit').click(function() {
        $('.passport-inner').css('display', 'flex');
        $('.passport-edit').css('display', 'none');
        $('.passport-block').css('display', 'none');
        $('.passport-save').css('display', 'block');
    });

    $('.passport-save').click(function() {
        $('.passport-block').css('display', 'flex');
        $('.passport-save').css('display', 'none');
        $('.passport-edit').css('display', 'block');
        $('.passport-inner').css('display', 'none');
    });


    // пароль


    $('.end-edit').click(function() {
        $('.end-inner').css('display', 'flex');
        $('.end-edit').css('display', 'none');
        $('.end-save').css('display', 'block');
    });

    $('.end-save').click(function() {

        $('.end-save').css('display', 'none');
        $('.end-edit').css('display', 'block');
        $('.end-inner').css('display', 'none');
    });


    jQuery(($) => {
        $('.select').on('click', '.select__head', function() {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).next().fadeOut();
            } else {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
                $(this).addClass('open');
                $(this).next().fadeIn();
            }
        });

        $('.select').on('click', '.select__item', function() {
            $('.select__head').removeClass('open');
            $(this).parent().fadeOut();
            // $(this).parent().prev().text($(this).text());
            // $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function(e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
            }
        });
    });



    $('.header__burger').click(function() {
        $('.header__block').toggleClass('header__mobile-menu');
        $('body').toggleClass('body-block');
    });


    $('.header__close').click(function() {
        $('.header__block').toggleClass('header__mobile-menu');
        $('body').toggleClass('body-block');
    });





    jQuery(($) => {
        $('.select-form').on('click', '.select__head-form', function() {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).next().fadeOut();
            } else {
                $('.select__head-form').removeClass('open');
                $('.select__list-form').fadeOut();
                $(this).addClass('open');
                $(this).next().fadeIn();
            }
        });

        $('.select-form').on('click', '.select__item-form', function() {
            $('.select__head-form').removeClass('open');
            $(this).parent().fadeOut();
            $(this).parent().prev().text($(this).text());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function(e) {
            if (!$(e.target).closest('.select-form').length) {
                $('.select__head-form').removeClass('open');
                $('.select__list-form').fadeOut();
            }
        });
    });




    $(window).on('scroll', function() {
        var $nav = $('.footer'),
            scroll = $(this).scrollTop();

        if (scroll > 20) {
            $nav.addClass('navbar-scroll');
        } else {
            $nav.removeClass('navbar-scroll');
        }
    });




    // Скрипт картинки


    $('.metropolis__table-btn-js').click(function() {
        $('.metropolis__block-table-two').css('display', 'block');
        $('.metropolis__block-table').css('display', 'none');
    });


    $('.metropolis__block-table-two-btns-one').click(function() {
        $('.metropolis__block-table-two').css('display', 'none');
        $('.metropolis__block-table').css('display', 'block');
    });


});


const quest = () => {



    const block = document.querySelector(`.answers__wrapper`);
    if (!block) return;
    block.addEventListener(`click`, (evt) => {

        const target = evt.target;

        if (target.closest('.answers__questions')) {
            const btns = block.querySelectorAll('.answers__questions');
            const contents = block.querySelectorAll('.answers__answer');
            btns.forEach(el => {
                el.classList.remove('active');
            })
            contents.forEach(el => {
                el.classList.remove('active');
            })


            const wrapper = target.closest(`.question-el`);


            const btn = wrapper.querySelector('.answers__questions');
            btn.classList.add('active');
            const content = wrapper.querySelector('.answers__answer');
            content.classList.add('active');

        }

    })
}
quest();



// .js-modal-close класс для крестиков хакрыть в нутри окон
$('.js-modal-close').click(function(event) {
    event.preventDefault();
    closePopup();
    $("body").css("owerflow", "initial");
});

function closePopup() {
    $('.work-modal-js').css("display", "none");
    $(".overlay").css("display", "none");
    $(".modal-happy").css("display", "none");
    $("body").css("overflow", "inherit");
}

function openForm() {
    $('.work-modal-js').css("display", "flex");
    $(".overlay").css("display", "block");
    $("body").css("overflow", "hidden");



}

function closeForm() {
    $('.work-modal-js').css("display", "none");
    $('.modal-happy').css("display", "block");
    $(".overlay").css("display", "block");
    $("body").css("overflow", "hidden");

}



const work = () => {



    const block = document.querySelector(`.work-main__wrapper`);
    if (!block) return;
    block.addEventListener(`click`, (evt) => {

        const target = evt.target;

        if (target.closest('.work-modal-open')) {

            openForm();
        }

    })
}
work();



$('.scroll_top').click(function(){
    $('html, body').animate({scrollTop: 0}, 1000);
  });
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
        $('.scroll_top').addClass('active');
    }
    else{
        $('.scroll_top').removeClass('active');
    }
  });


  $(document).ready(function() {
    
    $('.js-modal-overlay').click(function(event) {
        event.preventDefault();
        closePopup();
    });

    $('.js-modal-close').click(function(event) {
        event.preventDefault();
        closePopup();
        $("body").css("owerflow", "initial");
    });


    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.forgot-open').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.exit-js').css("display", "none");
        $(".overlay").css("display", "none");
        $(".forget-js").css("display", "none");
        $("body").css("overflow", "inherit");


    }

   
    function closeForm() {
        $('.exit-js').css("display", "none");
        $('.forget-js').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }


});