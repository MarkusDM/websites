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
    $('.js-open-restoran').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.submit-edit').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.modal-restoran-js').css("display", "none");
        $(".overlay").css("display", "none");
        $(".modal-happy").css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.modal-restoran-js').css("display", "flex");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");



    }

    function closeForm() {
        $('.modal-restoran-js').css("display", "none");
        $('.modal-happy').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }
});

const modalSwiper = new Swiper('.modal-restoran__swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    slideClass: 'modal-restoran__slide',
    wrapperClass: 'modal-restoran__swiper-wrapper',

    navigation: {
        nextEl: '.modal-restoran__swiper-button-next',
        prevEl: '.modal-restoran__swiper-button-prev',
    },


    pagination: {
        el: ".modal-restoran__swiper-pagination ",
        type: "fraction",
    },

    scrollbar: {
        el: '.modal-restoran__swiper-scrollbar ',
    },

    breakpoints: {

        748: {
            slidesPerView: 2,
            spaceBetween: 12,
        }
    }


});

function modalRestoran(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.modal-restoran__item')
        let b = p.querySelectorAll('.js-tab-block-menu')

        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('active-item')
            });
            t[index].classList.add('active-item')
            b.forEach(item => {
                item.classList.remove('active-restoran')
            });
            b[index].classList.add('active-restoran')
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

if (document.querySelector('.modal-restoran__content')) {
    let myTabs = document.querySelectorAll('.modal-restoran__content')
    myTabs.forEach(element => {
        modalRestoran(element)
    });
}


$(".modal-restoran__btn-js").on("click", function() {

    $('.modal-restoran__sidebar').toggleClass("active-menu");
    $('.modal-restoran__btn-js').toggleClass("active-before");

});


// modal-work



$('input[type="file"]').change(function() {
    var value = $("input[type='file']").val();
    $('.js-value').text(value);
});
// });