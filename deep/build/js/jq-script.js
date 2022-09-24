$(".burger > input").on('click', function() {
    $(".header__nav").toggleClass("header__nav--open")
    $("main").toggleClass("main-none")
});




$(document).ready(function() {
    //  modal 4


    // .js-modal-close класс для крестиков хакрыть в нутри окон
    $('.js-modal-close').click(function(event) {
        event.preventDefault();
        closePopup();

    });

    // .js-open-modal класс для всех кнопок "ПОЛУЧИТЬ ПОМОЩЬ"
    $('.modal-open').click(function(event) {
        event.preventDefault();
        openForm();
    });

    function closePopup() {
        $('.modal').css("display", "none");
        $("body").css("overflow", "inherit");

    }

    function openForm() {
        $('.modal').css("display", "block");

    }

    function closeModalGlobal() {
        $('.modal').css("display", "none");

    }

    $('.modal__close').click(function(event) {
        event.preventDefault();
        closeModalGlobal();
    });


  
});

