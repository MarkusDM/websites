$(function() {


    //  стрелки выдвигающие картинку 

    $(".plan__prev").on('click', function() {
        $(".plan__wrapper").css('padding-left','0');

    })

    $(".plan__next").on('click', function() {
        $(".plan__wrapper").css('padding-left','19rem');

    })



    $(".header__burger").click(function() {
        $(".header__nav").addClass('active');

      })

      $(".header__nav-close").click(function() {
        $(".header__nav").removeClass('active');

      })


    // открытие фильтра мобила 

    $(".catalog__filter-open").click(function() {
        $(".catalog__left").addClass('active');

      })

      $(".catalog__left-buttons-close").click(function() {
        $(".catalog__left").removeClass('active');

      })




  $(".formalization__btn--bridge").on('click', function() {
    $(".formalization__btn--bridge").toggleClass("formalization__btn--active");
    $(".formalization__lists--bridge").toggleClass("formalization__lists--active");
    })


    $(".formalization__btn--mail").on('click', function() {
        $(".formalization__btn--mail").toggleClass("formalization__btn--active");
        $(".formalization__lists--mail").toggleClass("formalization__lists--active");
    })


    $(".header__search").on('click', function() {
            $(".header__search-block").toggleClass("search-block-active ");

    })





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

$(".article__top").on('click', function() {
    $(".js-open-size").toggleClass("js-open-size--active");
    $(".article__top").toggleClass("article__top--active");
})


$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "смотреть все") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("свернуть");


        $(".cabinet-order__wrapper").addClass('cabinet-order__wrapper--active');

      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("смотреть все");
        $(".cabinet-order__wrapper").removeClass('cabinet-order__wrapper--active');

      }


    });





  });


  function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}


function show_hide(target){
	var input = document.getElementById('password-input__dop');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function show_hidePass(target){
	var input = document.getElementById('password-input__pas');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}



// cabinet-data Личные данные 

$(document).ready(function() {




    // при нажатие на кнопку добавить открывается форма 


    $('.cabinet-data__date-btn-center').click(function(event) {
        event.preventDefault();
        openFormData();
    });

    function openFormData() {
        $('.cabinet-data__save-btn ').css("display", "flex");
        $(".cabinet-data__form").css("display", "block");
        $(".cabinet-data__close").css("display", "block");
        $(".cabinet-data__date-btn-center").css("display", "none");
        $(".cabinet-data__attention").css("display", "none");
    }


    //  при нажатие на сохранить и крест выходит блок с данными 

    $('.cabinet-data__save-btn,  .cabinet-data__close').click(function(event) {
        event.preventDefault();
        openData();
    });

    function openData() {
        $('.cabinet-data__save-btn ').css("display", "none");
        $(".cabinet-data__form").css("display", "none");
        $(".cabinet-data__close").css("display", "none");

        $(".cabinet-data__data").css("display", "block");
        $(".cabinet-data__edit-btn").css("display", "flex");

    }


    // кнопка изменить

    $('.cabinet-data__edit-btn').click(function(event) {
        event.preventDefault();
        openDataEdit();
    });

    function openDataEdit() {
        $('.cabinet-data__save-btn ').css("display", "flex");
        $(".cabinet-data__form").css("display", "block");
        $(".cabinet-data__close").css("display", "block");

        $(".cabinet-data__data").css("display", "none");
        $(".cabinet-data__edit-btn").css("display", "none");

    }



});

$(document).ready(function() {




    // при нажатие на кнопку добавить открывается форма 


    $('.cabinet-address__start-btn').click(function(event) {
        event.preventDefault();
        openFormData();
    });

    function openFormData() {
        $('.cabinet-address__save-btn').css("display", "flex");
        $(".cabinet-address__form").css("display", "block");
        $(".cabinet-address__close").css("display", "block");
        $(".cabinet-address__start-btn").css("display", "none");
        $(".cabinet-address__start-text").css("display", "none");
    }


    //  при нажатие на сохранить и крест выходит блок с данными 

    $('.cabinet-address__save-btn,  .cabinet-address__close').click(function(event) {
        event.preventDefault();
        openData();
    });

    function openData() {
        $('.cabinet-address__save-btn ').css("display", "none");
        $(".cabinet-address__form").css("display", "none");
        $(".cabinet-address__close").css("display", "none");

        $(".cabinet-address__data").css("display", "block");
        $(".cabinet-address__edit-btn").css("display", "flex");

    }


    // кнопка изменить

    $('.cabinet-address__edit-btn').click(function(event) {
        event.preventDefault();
        openDataEdit();
    });

    function openDataEdit() {
        $('.cabinet-address__save-btn ').css("display", "flex");
        $(".cabinet-address__form").css("display", "block");
        $(".cabinet-address__close").css("display", "block");

        $(".cabinet-address__data").css("display", "none");
        $(".cabinet-address__edit-btn").css("display", "none");

    }



});

$(document).ready(function() {




    // при нажатие на кнопку добавить открывается форма 


    $('.cabinet-payment__add-btn').click(function(event) {
        event.preventDefault();
        openFormData();
    });

    function openFormData() {
        $('.cabinet-payment__save-btn').css("display", "flex");
        $(".cabinet-payment__form").css("display", "block");
        $(".cabinet-payment__close").css("display", "block");
        $(".cabinet-payment__add-btn").css("display", "none");
        $(".cabinet-payment__start-text").css("display", "none");
    }


    //  при нажатие на сохранить и крест выходит блок с данными 

    $('.cabinet-payment__save-btn,  .cabinet-payment__close').click(function(event) {
        event.preventDefault();
        openData();
    });

    function openData() {
        $('.cabinet-payment__save-btn ').css("display", "none");
        $(".cabinet-payment__form").css("display", "none");
        $(".cabinet-payment__close").css("display", "none");

        $(".cabinet-payment__data").css("display", "block");
        $(".cabinet-payment__edit-btn").css("display", "flex");

    }


    // кнопка изменить

    $('.cabinet-payment__edit-btn').click(function(event) {
        event.preventDefault();
        openDataEdit();
    });

    function openDataEdit() {
        $('.cabinet-payment__save-btn ').css("display", "flex");
        $(".cabinet-payment__form").css("display", "block");
        $(".cabinet-payment__close").css("display", "block");

        $(".cabinet-payment__data").css("display", "none");
        $(".cabinet-payment__edit-btn").css("display", "none");

    }



});


$(".product__heart").on('click', function() {
    $(this).toggleClass("product__heart--active");

})




$(".perfume__btns-heart").on('click', function() {
    $(this).toggleClass("perfume__btns-heart--active");

})



$(document).ready(function() {
    //  modal 4

    // .js-modal-overlay Оверлэй закрывает окна



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
        $('.modal-password-js').css("display", "none");
        $("body").css("overflow", "inherit");


    }

    // открытие модального окна

    function openForm() {
        $('.overlay-black ').css("display", "block");
        $('.modal').css("display", "block");

    }

    $('.modal__right-menu-btn-register').click(function(event) {
        event.preventDefault();
        openRegister();
    });

    function openRegister() {
        $('.modal__right-menu-btn-register').addClass("modal__right-menu-btn-register--active");
        $('.modal__right-entry-content').css("display", "none");
        $('.modal__right-text').css("display", "none");
        $('.modal__right-register-content-one').css("display", "block");
        $('.modal__left-numbers').css("display", "block");
        $('.modal__left-image').css("display", "none");
        $('.modal__right-menu-btn-entry').removeClass("modal__right-menu-btn-entry--active");
        $('.modal__left-numbers-one').addClass("modal__left-numbers-one--active");
        $('.mobile-v').css("display","flex");
    }


    $('.modal__right-register-content-one-skip').click(function(event) {
        event.preventDefault();
        openStepOne();
    });

    function openStepOne() {

        $('.modal__right-register-content-one').css("display", "none");
        $('.modal__right-register-content-two').css("display", "block");
        $('.modal__left-numbers-one').removeClass("modal__left-numbers-one--active");
        $('.modal__left-numbers-one').addClass("modal__left-numbers-one--active-plus");
        $('.modal__left-numbers-two').addClass("modal__left-numbers-two--active");


    }



    function backRegister() {

        $('.modal__right-register-content-one').css("display", "block");
        $('.modal__right-register-content-two').css("display", "none");
        $('.modal__left-numbers-one').addClass("modal__left-numbers-one--active");
        $('.modal__left-numbers-one').removeClass("modal__left-numbers-one--active-plus");
        $('.modal__left-numbers-two').removeClass("modal__left-numbers-two--active");

    }




    $('.modal__right-register-content-two-back').click(function(event) {
        event.preventDefault();
        backRegister();
    });





    // entry

    $('.modal__right-menu-btn-entry').click(function(event) {
        event.preventDefault();
        openEntry();
    });


    function openEntry() {

        $('.modal__right-entry-content').css("display", "block");
        $('.modal__right-menu-btn-entry').addClass("modal__right-menu-btn-entry--active");
        $('.modal__right-menu-btn-register').removeClass("modal__right-menu-btn-register--active");
        $('.mobile-v').css("display", "none");
        $('.modal__right-text').css("display", "block");
        $('.modal__left-image').css("display", "block");
        $('.modal__left-numbers').css("display", "none");
        $('.modal__right-register-content-one').css("display", "none");
        $('.modal__right-register-content-two').css("display", "none");




    }



    function closeModalGlobal() {
        $('.overlay-black ').css("display", "none");
        $('.modal').css("display", "none");

    }

    $('.modal__left-image-close').click(function(event) {
        event.preventDefault();
        closeModalGlobal();
    });



    function overlayClose() {
        $('.overlay-black ').css("display", "none");
        $('.modal').css("display", "none");



    }

    $('.overlay-black').click(function(event) {
        event.preventDefault();
        overlayClose();
    });



});



$(function () {
    var galleryThumbsProduct = new Swiper(".perfume__images-swiper-two", {

      direction: "horizontal",
      spaceBetween: 10,
      slidesPerView: 2,
      loop: true,
      watchSlidesProgress: true,
      wrapperClass: 'perfume__images-swiper-wrapper-two',
      slideClass: 'perfume__images-swiper-two-slide',
      breakpoints: {
        748: {

          direction: "vertical",
          slidesPerView: 3,

        }
      }
    });
    var galleryTopProduct = new Swiper(".perfume__images-swiper-one", {
      direction: "horizontal",
      spaceBetween: 10,
      loop: true,
      wrapperClass: 'perfume__images-swiper-wrapper-one',
      slideClass: 'perfume__images-swiper-slide-one ',
      thumbs: {
        swiper: galleryThumbsProduct
      }
    });
    galleryTopProduct.on("slideChangeTransitionStart", function () {
      galleryThumbsProduct.slideTo(galleryTopProduct.activeIndex);
    });
    galleryThumbsProduct.on("transitionStart", function () {
      galleryTopProduct.slideTo(galleryThumbsProduct.activeIndex);
    });
  });