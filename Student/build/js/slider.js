document.querySelectorAll('.modal-registration__inner').forEach(modalInput => {
    const
        input = modalInput.querySelector('.input'),
        label = modalInput.querySelector('.input-label');

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.classList.remove('active');
        }
    })
});


document.querySelectorAll('.contacts__right-form-inner').forEach(modalInput => {
    const
        input = modalInput.querySelector('.input'),
        label = modalInput.querySelector('.input-label');

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.classList.remove('active');
        }
    })
});


document.querySelectorAll('.modal-exit__inner').forEach(modalInput => {
    const
        input = modalInput.querySelector('.input'),
        label = modalInput.querySelector('.input-label');

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.classList.remove('active');
        }
    })
});


document.querySelectorAll('.modal-bell__form').forEach(modalInput => {
    const
        input = modalInput.querySelector('.input'),
        label = modalInput.querySelector('.input-label');

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.classList.remove('active');
        }
    })
});


document.querySelectorAll('.modal-questions__form').forEach(modalInput => {
    const
        input = modalInput.querySelector('.input'),
        label = modalInput.querySelector('.input-label');

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.classList.remove('active');
        }
    })
});

document.querySelectorAll('.modal-password__inner').forEach(modalInput => {
    const
        input = modalInput.querySelector('.input'),
        label = modalInput.querySelector('.input-label');

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.classList.remove('active');
        }
    })
});


// модальное окно уверены ли вы))


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
    $('.js-open-application').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.submit-edit').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.application-js').css("display", "none");
        $(".overlay").css("display", "none");
        $(".modal-happy").css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.application-js ').css("display", "flex");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }

});







// модальное окно уверены изенить пароль


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
    $('.modal-password-open').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.submit-good').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.modal-password-js').css("display", "none");
        $(".overlay").css("display", "none");
        $(".modal-good").css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.modal-password-js').css("display", "flex");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }

    function closeForm() {
        $('.modal-password-js').css("display", "none");
        $('.modal-good').css("display", "flex");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }

});


// модалка с вопросами


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
    $('.modal-questions-open').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.questions-good-js-open').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.modal-questions-js').css("display", "none");
        $(".overlay").css("display", "none");
        $(".questions-good-js").css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.modal-questions-js').css("display", "flex");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }

    function closeForm() {
        $('.modal-questions-js').css("display", "none");
        $('.questions-good-js').css("display", "flex");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

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

    $('.js-open-register').click(function(event) {
        event.preventDefault();
        openForm();
    });


    $('.js-open-exit').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.registration-js').css("display", "none");
        $(".overlay").css("display", "none");
        $(".modal-happy").css("display", "none");
        $("body").css("overflow", "inherit");
    }

    function openForm() {
        $('.registration-js ').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }

    function closeForm() {
        $('.registration-js').css("display", "none");
        $('.modal-happy').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }

});


$(document).ready(function() {
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
    $('.js-open-exit').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.submit-edit').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.exit-js').css("display", "none");
        $(".overlay").css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.exit-js').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }

});




$(document).ready(function() {
    // .js-modal-overlay Оверлэй закрывает окна
    $('.js-modal-overlay').click(function(event) {
        event.preventDefault();
        closePopup();
    });

    // .js-modal-close класс для крестиков хакрыть в нутри окон
    $('.js-modal-close').click(function(event) {
        event.preventDefault();
        closePopup();
        $("body").css(" overflow", "initial");
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
        $('.modal-lot').css("display", "none");
        $(".overlay").css("display", "none");
        $(".modal-happy").css("display", "none");
        $("body").css(" overflow", "initial");


    }

    function openForm() {
        $('.js-modal-form ').css("display", "block");
        $('.modal-lot').css("display", "block");
        $(".overlay").css("display", "block");





    }

    function closeForm() {
        $('.js-modal-form ').css("display", "none");
        $('.modal-lot').css("display", "none");
        $('.modal-happy').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }


    // modal 3


    $('.modal-reason').click(function(e) {
        e.preventDefault();
        $('body').addClass('o-hidden');
        $('#popup').addClass('active');
    });

    $('.modal-application').click(function(e) {
        e.preventDefault();
        $('body').addClass('o-hidden');
        $('#popup-application').addClass('active');
    });

    $('.popup-close').click(function(e) {
        e.preventDefault();
        $('body').removeClass('o-hidden');
        $('#popup, #popup-application').removeClass('active');
    });






    // select

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
            $(this).parent().prev().text($(this).text());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function(e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
            }
        });
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

});


$(document).ready(function() {
    //  modal 2

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
    $('.js-open-edit').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.submit-edit').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.js-modal-edit').css("display", "none");
        $(".overlay").css("display", "none");
        $(".modal-save").css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.js-modal-edit ').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");



    }

    function closeForm() {
        $('.js-modal-edit ').css("display", "none");
        $('.modal-save').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }
});



$(document).ready(function() {
    //  modal 6

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
    $('.js-bell-open').click(function(event) {
        event.preventDefault();
        openForm();
    });

    // .submit-form класс для всех кнопок "ОТПРАВИТЬ"
    $('.submit-edit').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $('.bell-js').css("display", "none");
        $(".overlay").css("display", "none");
        $(".modal-happy").css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.bell-js').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");



    }

    function closeForm() {
        $('.bell-js').css("display", "none");
        $('.modal-happy').css("display", "block");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }
});




(function() {

    'use strict';

    $('.input-file').each(function() {
        var $input = $(this),
            $label = $input.closest('.js-labelFile'),
            $btn = ('.has-btn'),
            labelVal = $label.html();

        $input.on('change', function(element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
            $('.has-btn').css('display', 'block');
            $input.closest('.js-labelFile').addClass('has-file');

        });



    });

    let btn = document.querySelectorAll(`.has-btn`);

    btn.forEach(el => {
        el.addEventListener(`click`, (evt) => {
            evt.preventDefault();

            const container = el.closest(`div`);
            el.style.display = 'none';
            container.querySelector(`.input-file`).value = '';
            container.querySelector(`.js-labelFile`).classList.remove(`has-file`);
            container.querySelector(`.js-fileName`).textContent = `Загрузить`;


        });
    })

    // $('.has-btn').each(function() {

    //     var $btn = $(this);
    //     console.log($btn);

    //     $btn.on('click', function(element) {
    // var fileName = '';

    // let container =  $btn.closest('div');
    // console.log(container);

    // let inp = {...container}
    // console.log({inp});



    //     });
    // });


})();


$(document).ready(function() {
    $(window).keyup(function(e) {
        var target = $('.checkbox-ios input:focus');
        if (e.keyCode == 9 && $(target).length) {
            $(target).parent().addClass('focused');

        }
    });

    $('.checkbox-ios input').focusout(function() {
        $(this).parent().removeClass('focused');

    });




    $('.checkbox-ios input').on('click', function(event) {
        $(event.target).closest(".admin-answer__documents-item-check").toggleClass("verified");

    });



});


$('.button-all-open-block').click(function() {
    $('.profile__btn-block-edit').css('display', 'flex');
    $('.profile__btn').css('display', 'none');
});

$('.button-all-block-close').click(function() {
    $('.profile__btn-block-edit').css('display', 'none');
    $('.profile__btn').css('display', 'flex');
});





$(document).ready(function() {
    //  modal happy

    $('.js-modal-overlay').click(function(event) {
        event.preventDefault();
        closePopup();
    });

    $('.js-modal-close').click(function(event) {
        event.preventDefault();
        closePopup();
        $("body").css("owerflow", "initial");
    });

    
    $('.js-open-on').click(function(event) {
        event.preventDefault();
        openForm();
    });

    $('.submit-edit').click(function(event) {
        event.preventDefault();
        closeForm();
    });


    function closePopup() {
        $(".overlay").css("display", "none");
        $(".modal-happy").css("display", "none");
        $("body").css("overflow", "inherit");


    }
    function openForm() {
        $('.modal-happy-on').css("display", "flex");
        $(".overlay").css("display", "block");
        $("body").css("overflow", "hidden");

    }

});