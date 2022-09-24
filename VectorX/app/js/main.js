$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.header__block').toggleClass('header__mobile');
    });

    $('.header-close').click(function() {
        $('.header__block').toggleClass('header__mobile');
    });

    // бургер

    $('.news-btn').click(function() {
        $('.news-btn__image').toggleClass('news-btn__image--mobile');
        $('.news__filter-list').toggleClass('news__filter-list--mobile');
    });
    // кнопка news


    $('.scroll_top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.scroll_top').addClass('active');
        } else {
            $('.scroll_top').removeClass('active');
        }
    });


    $(document).on('keyup', function(e) {
        if (e.which == 27) {
            closePopup();
        }
    });

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
    $('.js-open-modal').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.submit-form').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.js-modal-form').css("display", "none");
        $(".overlay").css("display", "none");
        $(".modal--happy").css("display", "none");
        $("body").css("overflow", "initial");

    }

    function openForm() {
        $('.js-modal-form ').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }

    function closeForm() {
        $('.js-modal-form ').css("display", "none");
        $('.modal--happy').css("display", "block");
        $(".overlay").css("display", "block");

    }


    function modalOpen() {
        document.querySelector(`.modal--happy`).classList.add(`modal__open`);
    }


    function modalClose() {
        document.querySelector(`.modal--happy`).classList.remove(`modal__open`);
    }

});


ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [55.760221, 37.628595],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.760221, 37.628595], {
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon/nav.png',
            // Размеры метки.
            iconImageSize: [73, 107],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});


document.addEventListener('DOMContentLoaded', function() {

    const personSlider = new Swiper('.person__slider', {
        slidesPerView: 3,
        direction: 'horizontal',
        slideClass: 'person__slide',
        loop: true,
        wrapperClass: 'person__wrapper',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },



        pagination: {
            el: ".swiper-pagination__team ",
            type: "fraction",
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
        },


        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },

        },


        onSlideChangeEnd: function(e) {
            personSlider.update(true);
        }

    });

    function addZero(num) {
        return (num > 9) ? num : '0' + num;
    }
});

// слайдер команды


document.addEventListener('DOMContentLoaded', function() {

    const Project = new Swiper(".trend-container", {
        slidesPerView: 3,
        slidesPerColumn: 3,
        direction: 'horizontal',
        wrapperClass: 'trend__wrapper',
        slideClass: 'trend-table',
        loop: true,
        navigation: {
            nextEl: '.trend-button-next',
            prevEl: '.trend-button-prev',
        },
        pagination: {
            el: ".swiper-pagination__trend",
            type: "fraction",
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
        },

        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 3,
                slidesPerColumn: 3,
            },

        },


        onSlideChangeEnd: function(e) {
            Project.update(true);
        }
    });

    function addZero(num) {
        return (num > 9) ? num : '0' + num;
    }

});

// слайдер

const width = window.innerWidth
if (width < 768) {
    // const priceSlider = new Swiper()
    moreAll();
}

function moreAll() {
    const btn = document.querySelector(`.btn-more-all`);
    const cards = document.querySelectorAll(`#js-slide-wrapper .prize-table`);

    cards.forEach((card, i) => {
        if (i > 7) {
            card.style.display = 'none';
        }
    })

    let open = false;
    btn.addEventListener(`click`, () => {
        if (!open) {
            cards.forEach(card => {
                card.style.display = 'block';
            })
            btn.textContent = 'скрыть';
            open = true;
        } else {
            cards.forEach((card, i) => {
                if (i > 7) {
                    card.style.display = 'none';
                }
            })
            btn.textContent = ' все бонусы и скидки';
            open = false;
        }
    })
}

// привелегии

function moreArticle() {
    const btn = document.querySelector(`.news-scroll`);
    const cards = document.querySelectorAll(`#js-articles-wrapper .news-article`);

    cards.forEach((card, i) => {
        if (i > 3) {
            card.style.display = 'none';
        }
    })

    let open = false;
    btn.addEventListener(`click`, () => {
        if (!open) {
            cards.forEach(card => {
                card.style.display = 'flex';
            })
            btn.style.transform = 'rotate(180deg)';
            btn.style.background = '#81F55A';
            btn.style.border = '0.1rem solid #81F55A';
            open = true;
        } else {
            cards.forEach((card, i) => {
                if (i > 3) {
                    card.style.display = 'none';
                }
            })
            btn.style.transform = 'rotate(360deg)';
            btn.style.background = 'none';
            btn.style.border = '0.1rem solid #DFDAC8';
            open = false;
        }
    })
}

moreArticle();

function marguee() {
    let wrap = document.querySelector('.marquee')
    let inner = document.querySelector('.marquee__inner')
    let head = document.querySelector('.marquee__head')
    let timeCof = 12;
    console.log(head.offsetWidth)
    wrap.insertAdjacentHTML('beforebegin', ` 
        <style> 
            @keyframes marquee { 
                0% { 
                    transform: translateX(0px); 
                } 
                100% { 
                    transform: translateX(-${head.offsetWidth}px); 
                } 
            } 
        </style> 
    `);
    inner.style.animationDuration = head.offsetWidth * timeCof + 'ms';
}
marguee();