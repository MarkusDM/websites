const data_swiper = new Swiper('.data__inner', {
  slidesPerView: 3.31,
  spaceBetween: 15.5,
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: '.categories__next',
    prevEl: '.categories__prev',
  },

  breakpoints: {
    769: {
      slidesPerView: 5,
      spaceBetween: 29,
    },
  }
});

const categories_swiper = new Swiper('.categories__inner', {
  slidesPerView: 3.62,
  spaceBetween: 15.5,
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: '.categories__next',
    prevEl: '.categories__prev',
  },

  breakpoints: {
    769: {
      slidesPerView: 5,
      spaceBetween: 29,
    },
  }
});

const swiper = new Swiper('.cart:not(.cart--large) .cart__inner', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 120,

  pagination: {
    el: '.cart__pagination',
    clickable: true,
  },
});

const swiperLarge = new Swiper('.cart--large .cart__inner', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 120,

  pagination: {
    el: '.cart__pagination',
    clickable: true,
  },
});

const card_swiper = new Swiper('.card__swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: '.card__pagination',
    type: "fraction",
  },

  navigation: {
    nextEl: '.card__swiper-next',
    prevEl: '.card__swiper-prev',
  },

  breakpoints: {
    769: {
    },
  }
});

$('.inner').css('height', $('body').height())

$('.cart__favorite').on('click', function (e) {
  $(this).closest(".cart").toggleClass('cart--favorite');
  e.preventDefault();
});

$('.info__favorite').on('click', function (e) {
  $(this).closest(".info__favorite").toggleClass('info__favorite--favorite');
  e.preventDefault();
});

$('.menu-mob__login').on('click', function (e) {
  $(this).closest(".menu-mob__top").removeClass('menu-mob__top--undefined');
  e.preventDefault();
});

$('.menu-mob__btn').on('click', function (e) {
  $(".menu-mob").addClass('menu-mob--active');
  $('body').addClass('body--active');
  $(".menu-mob__wrapper").slideToggle();
  e.preventDefault();
});

$(document).mouseup(function (e) {
  if ($(".menu-mob__inner").has(e.target).length === 0) {
    $('.menu-mob__wrapper').css('display', 'none')  
    $('body').removeClass('body--active');
    $(".menu-mob").removeClass('menu-mob--active');
  }
});

$('.header__categories').on('click', function (e) {
  $('body').addClass('body--active');
  $(".header .form").slideToggle();
  e.preventDefault();
});

$('.form__close').on('click', function (e) {
  $('body').removeClass('body--active');
  $(this).closest(".form").slideToggle();
});

$('.property-map__link--more').on('click', function (e) {
  $('body').addClass('body--active');
  $(".map-filter").slideToggle();
  e.preventDefault();
});

$('.map-filter:not(map-filter__inner), .map-filter__close').on('click', function (e) {
  $('body').removeClass('body--active');
  $(this).closest(".map-filter").css('display', 'none');
  e.preventDefault();
});

$('.header__application-add').on('click', function (e) {
  $('body').addClass('body--active');
  $(".announcement-modal").slideToggle();
  e.preventDefault();
});

$('.announcement-modal:not(announcement-modal__inner), .announcement-modal__close').on('click', function (e) {
  $('body').removeClass('body--active');
  $(this).closest(".announcement-modal").css('display', 'none');
  e.preventDefault();
});

$('.announcements__btn--filter').on('click', function (e) {
  $('body').addClass('body--active');
  $(".form-filter").slideToggle();
  e.preventDefault();
});

$('.announcements__btn--sort').on('click', function (e) {
  $('.main').addClass('main--sort');
  $('html, body').animate({scrollTop: $(".header").offset().top}, 700);
  e.preventDefault();
});

$('.form__select').on('click', function () {
  if (!$(this).hasClass('form__select--active')) {
    $('.form__select').removeClass('form__select--active').next().css('display', 'none');
    $(this).toggleClass('form__select--active');
    $(this).next().slideToggle();
  } else {
    $(this).toggleClass('form__select--active');
    $(this).next().slideToggle();
  }
});

$('.form__group-select').on('click', function () {
  if (!$(this).hasClass('form__group-select--active')) {
    $('.form__group-select').removeClass('form__group-select--active').next().css('display', 'none');
    $(this).toggleClass('form__group-select--active');
    $(this).next().slideToggle();
  } else {
    $(this).toggleClass('form__group-select--active');
    $(this).next().slideToggle();
  }
});

$('.filter__select').on('click', function () {
  if (!$(this).hasClass('filter__select--active')) {
    $('.filter__select').removeClass('filter__select--active').next().css('display', 'none');
    $(this).toggleClass('filter__select--active');
    $(this).next().slideToggle();
  } else {
    $(this).toggleClass('filter__select--active');
    $(this).next().slideToggle();
  }
});

$('.form__item:not(.form__item--many) .filter__elem').on('click', function () {
  $(this).closest('.filter__item').children('.filter__select').removeClass('filter__select--active');
  $(this).closest(".filter__item").find('.filter__list').slideToggle();
  $(this).closest('.filter__item').find('.filter__select-input').val($(this).text());
  $(this).closest('.filter__item').find('.filter__subtitle').text($(this).text());
});

$('.announcements__select').on('click', function (e) {
  if ($(e.target).hasClass('announcements__elem')) {
    return false;
  } else {
    if (!$(this).hasClass('announcements__select--active')) {
      $('.announcements__select').removeClass('announcements__select--active').children('.announcements__list').css('display', 'none');
      $(this).toggleClass('announcements__select--active');
      $(this).children('.announcements__list').slideToggle();
    } else {
      $(this).toggleClass('announcements__select--active');
      $(this).children('.announcements__list').slideToggle();
    }
  }
});

$('.announcements__elem').on('click', function () {$(this).val()
  $(this).closest('.announcements__select').removeClass('announcements__select--active').children('.announcements__list').css('display', 'none');
  $(this).closest('.announcements__select').find('.announcements__select-text').text($(this).text());
});


$('.form__item--many .form__elem').on('click', function () {
  $(this).closest('.form__list').prev().toggleClass('form__select--active');
  $(this).closest(".form__list").slideToggle();
  $(this).closest('.form__list').prev().find('.form__select-input').val($(this).text());
});

$('.form__btn').on('click', function () {
  $(this).closest('.form__wrapper-box').detach();
});

$('.announcements__radio').on('change', function () {
  $('.announcements__radio').closest('.announcements__format').removeClass('announcements__format--active');
  $('.announcements__items').removeClass('announcements__items--justify');
  $(this).closest('.announcements__format').addClass('announcements__format--active');
  if ($(this).closest('.announcements__format').hasClass('announcements__format--justify')) {
    $('.announcements__items').addClass('announcements__items--justify');
    $('.cart').addClass('cart--justify');
  } else {
    $('.cart').removeClass('cart--justify');
  }
});

if($(window).width()< 769) {
  $('.announcements__format:not(.announcements__format--justify)').prop('checked', true);
  $('.announcements__items').removeClass('announcements__items--justify');
  
  for (let i = 1; i <= $('.data__categories--transport .data__categories-item').length; i++) {
    if(i==4) {
      $('.data__categories--transport .data__categories-item:nth-child(' + i + ')').find('.data__text').text('????????????????');
    } else {
      $('.data__categories--transport .data__categories-item:nth-child(' + i + ')').find('.data__text').text($('.data__categories--transport .data__categories-item:nth-child(' + i + ')').find('.data__text').text().split(' ')[0]);
    }
  }
}

$('.data__kinds .data__radio').on('change', function () {
  $('.data__kinds .data__radio').closest('.data__kind-label').removeClass('data__kind-label--active');
  $(this).closest('.data__kind-label').addClass('data__kind-label--active');
});

$('.filter__checkbox').on('change', function () {
  $(this).closest('.filter__label').toggleClass('filter__label--active');
});

$('.info__checkbox').on('change', function () {
  $(this).closest('.info__credit').toggleClass('info__credit--active');
});

$('.filter__item--status .filter__radio').on('change', function () {
  $('.filter__item--status .filter__label-radio').removeClass('filter__label-radio--active');
  $(this).closest('.filter__label-radio').addClass('filter__label-radio--active');
});

$('.filter__item--seller .filter__radio').on('change', function () {
  $('.filter__item--seller .filter__label-radio').removeClass('filter__label-radio--active');
  $(this).closest('.filter__label-radio').addClass('filter__label-radio--active');
});

$('.data__categories .data__radio').on('change', function () {
  $('.data__categories .data__radio').closest('.data__categories-item').removeClass('data__categories-item--active');
  $(this).closest('.data__categories-item').addClass('data__categories-item--active');
});

$('.data__isuse .data__radio').on('change', function () {
  $('.data__isuse .data__radio').closest('.data__isuse-label').removeClass('data__isuse-label--active');
  $(this).closest('.data__isuse-label').addClass('data__isuse-label--active');
});

$('.info__radio').on('change', function () {
  $('.info__radio').closest('.info__label').removeClass('info__label--active');
  $(this).closest('.info__label').addClass('info__label--active');
});

$('.form__block .form__radio').on('change', function () {
  $('.form__block .form__radio').closest('.form__is-new').removeClass('form__is-new--active');
  $(this).closest('.form__is-new').addClass('form__is-new--active');
});

$('.form__item--many .form__radio').on('change', function () {
  $('.form__item--many .form__radio').closest('.form__characteristic').removeClass('form__characteristic--active');
  $(this).closest('.form__characteristic').addClass('form__characteristic--active');
});

$('.form__radio[name="count-user"]').on('change', function () {
  $('.form__radio[name="count-user"]').closest('.form__characteristic').removeClass('form__characteristic--active');
  $(this).closest('.form__characteristic').addClass('form__characteristic--active');
});

$('.form__credit').on('change', function () {
  $(this).toggleClass('form__credit--active');
});

if ($(".polzunok").html() != null) {
  $(".polzunok").slider({
    min: 1000,
    max: 8000,
    values: [3000, 5100],
    range: true,
    animate: "fast",
    slide: function (event, ui) {
      $(".polzunok-input-left").val(ui.values[0]);
      $(".polzunok-input-right").val(ui.values[1]);
    }
  });
  $(".polzunok-input-left").val($(".polzunok").slider("values", 0));
  $(".polzunok-input-right").val($(".polzunok").slider("values", 1));
  $(".polzunok-container input").change(function () {
    var input_left = $(".polzunok-input-left").val().replace(/[^0-9]/g, ''),
      opt_left = $(".polzunok").slider("option", "min"),
      where_right = $(".polzunok").slider("values", 1),
      input_right = $(".polzunok-input-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".polzunok").slider("option", "max"),
      where_left = $(".polzunok").slider("values", 0);
    if (input_left > where_right) {
      input_left = where_right;
    }
    if (input_left < opt_left) {
      input_left = opt_left;
    }
    if (input_left == "") {
      input_left = 0;
    }
    if (input_right < where_left) {
      input_right = where_left;
    }
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == "") {
      input_right = 0;
    }
    $(".polzunok-input-left").val(input_left);
    $(".polzunok-input-right").val(input_right);
    if (input_left != where_left) {
      $(".polzunok").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
      $(".polzunok").slider("values", 1, input_right);
    }
  });
}

if ($(".card__cost-polzunok--sum .cost-polzunok").html() != null) {
  $(".card__cost-polzunok--sum .cost-polzunok").slider({
    min: 0,
    max: 400000,
    value: 300000,
    range: "min",
    animate: "fast",
    slide: function (event, ui) {
      $(".card__cost-polzunok--sum .cost-polzunok__input-right").val(ui.value);
    },
  });

  $(".card__cost-polzunok--sum .cost-polzunok__input-right").val($(".card__cost-polzunok--sum .cost-polzunok").slider("values", 1));
  $(".card__cost-polzunok--sum .card__cost-polzunok input").change(function () {
    where_right = $(".card__cost-polzunok--sum .cost-polzunok").slider("values", 1),
      input_right = $(".card__cost-polzunok--sum .cost-polzunok__input-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".card__cost-polzunok--sum .cost-polzunok").slider("option", "max");
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == "") {
      input_right = 0;
    }
    $(".card__cost-polzunok--sum .cost-polzunok__input-right").val(input_right);
    if (input_right != where_right) {
      $(".card__cost-polzunok--sum .cost-polzunok").slider("value", input_right);
    }
  });
}

if ($(".card__cost-polzunok--time .cost-polzunok").html() != null) {
  $(".card__cost-polzunok--time .cost-polzunok").slider({
    min: 0,
    max: 20,
    value: 5,
    range: "min",
    animate: "fast",
    slide: function (event, ui) {
      $(".card__cost-polzunok--time .cost-polzunok__input-right").val(ui.value + " ??????");
    },
  });

  $(".card__cost-polzunok--time .cost-polzunok__input-right").val($(".card__cost-polzunok--time .cost-polzunok").slider("values", 1) + " ??????");
  $(".card__cost-polzunok--time .card__cost-polzunok input").change(function () {
    where_right = $(".card__cost-polzunok--time .cost-polzunok").slider("values", 1),
      input_right = $(".card__cost-polzunok--time .cost-polzunok__input-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".card__cost-polzunok--time .cost-polzunok").slider("option", "max");
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == "") {
      input_right = 0;
    }
    $(".card__cost-polzunok--time .cost-polzunok__input-right").val(input_right + " ??????");
    if (input_right != where_right) {
      $(".card__cost-polzunok--time .cost-polzunok").slider("value", input_right + " ??????");
    }
  });
}

if ($(".card__cost-polzunok--money .cost-polzunok").html() != null) {
  $(".card__cost-polzunok--money .cost-polzunok").slider({
    min: 0,
    max: 23000000,
    value: 18360000,
    range: "min",
    animate: "fast",
    slide: function (event, ui) {
      $(".card__cost-polzunok--money .cost-polzunok__input-right").text(ui.value);
    },
  });

  $(".card__cost-polzunok--money .cost-polzunok__input-right").text($(".card__cost-polzunok--money .cost-polzunok").slider("values", 1));
  $(".card__cost-polzunok--money .card__cost-polzunok input").change(function () {
    where_right = $(".card__cost-polzunok--money .cost-polzunok").slider("values", 1),
      input_right = $(".card__cost-polzunok--money .cost-polzunok__input-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".card__cost-polzunok--money .cost-polzunok").slider("option", "max");
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == "") {
      input_right = 0;
    }
    $(".card__cost-polzunok--money .cost-polzunok__input-right").text(input_right);
    if (input_right != where_right) {
      $(".card__cost-polzunok--money .cost-polzunok").slider("value", input_right);
    }
  });
}

if ($(".card__cost-polzunok--first .cost-polzunok").html() != null) {
  $(".card__cost-polzunok--first .cost-polzunok").slider({
    min: 0,
    max: 3000000,
    value: 1836000,
    range: "min",
    animate: "fast",
    slide: function (event, ui) {
      $(".card__cost-polzunok--first .cost-polzunok__input-right").text(ui.value);
    },
  });

  $(".card__cost-polzunok--first .cost-polzunok__input-right").text($(".card__cost-polzunok--first .cost-polzunok").slider("values", 1));
  $(".card__cost-polzunok--first .card__cost-polzunok input").change(function () {
    where_right = $(".card__cost-polzunok--first .cost-polzunok").slider("values", 1),
      input_right = $(".card__cost-polzunok--first .cost-polzunok__input-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".card__cost-polzunok--first .cost-polzunok").slider("option", "max");
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == "") {
      input_right = 0;
    }
    $(".card__cost-polzunok--first .cost-polzunok__input-right").text(input_right);
    if (input_right != where_right) {
      $(".card__cost-polzunok--first .cost-polzunok").slider("value", input_right);
    }
  });
}

if ($(".card__cost-polzunok--long .cost-polzunok").html() != null) {
  $(".card__cost-polzunok--long .cost-polzunok").slider({
    min: 5,
    max: 40,
    value: 20,
    range: "min",
    animate: "fast",
    slide: function (event, ui) {
      $(".card__cost-polzunok--long .cost-polzunok__input-right").text(ui.value + '????????');
    },
  });

  $(".card__cost-polzunok--long .cost-polzunok__input-right").text($(".card__cost-polzunok--long .cost-polzunok").slider("values", 1) + "????????");
  $(".card__cost-polzunok--long .card__cost-polzunok input").change(function () {
    where_right = $(".card__cost-polzunok--long .cost-polzunok").slider("values", 1),
      input_right = $(".card__cost-polzunok--long .cost-polzunok__input-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".card__cost-polzunok--long .cost-polzunok").slider("option", "max");
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == "") {
      input_right = 0;
    }
    $(".card__cost-polzunok--long .cost-polzunok__input-right").text(input_right + "????????");
    if (input_right != where_right) {
      $(".card__cost-polzunok--long .cost-polzunok").slider("value", input_right);
    }
  });
}

$('.info__select').on('click', function () {
  if (!$(this).hasClass('info__select--active')) {
    $('.info__select').removeClass('info__select--active').find('.info__list').css('display', 'none');
    $(this).toggleClass('info__select--active');
    $(this).find('.info__list').slideToggle();
  } else {
    $(this).toggleClass('info__select--active');
    $(this).find('.info__list').slideToggle();
  }
});

$('.info__elem').on('click', function () {
  $(this).closest('.info__select').removeClass('filter__select--active');
  $(this).closest('.info__select').find('.info__select-input').val($(this).text());
});

$('.card__bank-link .link').on('click', function (e) {
  e.preventDefault();
  $(this).next().slideToggle();
  if($(window).width() < 769) {
    $('body').toggleClass('body--active');
  }
});

$('.card__bank-inner:not(.card__bank-list), .card__bank-close').on('click', function (e) {
  e.preventDefault();
  $(this).closest('.card__bank-inner').css('display', 'none');
  $('body').removeClass('body--active');
});

$('.card__cost-index').on('click', function (e) {
  e.preventDefault();
  $('.card__history').slideToggle();
  if ($(window).width() < 769) {
    $('body').toggleClass('body--active');
  }
});

$('.card__history:not(.card__history-inner), .card__history-close').on('click', function (e) {
  e.preventDefault();
  $('.card__history').css('display', 'none');
  $('body').removeClass('body--active');
});


//  ??????????????
// ?????????????? ???????? ???????????????????? 

function tab(parent, i = 0) {
  try {
    let p = parent
    let t = p.querySelectorAll('.js-tab-item')
    let b = p.querySelectorAll('.advertisement-content-js')

    function tabActive(index) {
      t.forEach(item => {
        item.classList.remove('active-item')
      });
      t[index].classList.add('active-item')
      b.forEach(item => {
        item.classList.remove('active-block-cont')
      });
      b[index].classList.add('active-block-cont')
    }

    tabActive(i)

    t.forEach((element, index) => {
      element.addEventListener('click', function (e) {
        e.preventDefault()
        tabActive(index)
      })
    });
  } catch {
    console.log('tabs error')
  }
}

if (document.querySelector('.admin-st__right')) {
  let myTabs = document.querySelectorAll('.admin-st__right')
  myTabs.forEach(element => {
    tab(element)
  });
}

// ?????????????? ?????????????????? ??????????

function global(parent, i = 0) {
  try {
    let p = parent
    let t = p.querySelectorAll('.sidebar-item-js')
    let b = p.querySelectorAll('.global-block-js')

    function tabActive(index) {
      t.forEach(item => {
        item.classList.remove('active-item-js')
      });
      t[index].classList.add('active-item-js')
      b.forEach(item => {
        item.classList.remove('active-global-block')
      });
      b[index].classList.add('active-global-block')
    }

    tabActive(i)

    t.forEach((element, index) => {
      element.addEventListener('click', function (e) {
        e.preventDefault()
        tabActive(index)
      })
    });
  } catch {
    console.log('tabs error')
  }
}

if (document.querySelector('.admin-st__wrapper')) {
  let myTabs = document.querySelectorAll('.admin-st__wrapper')
  myTabs.forEach(element => {
    global(element)
  });
}

// ?????????????? ????????????

function reviews(parent, i = 0) {
  try {
    let p = parent
    let t = p.querySelectorAll('.reviews-item-js')
    let b = p.querySelectorAll('.reviews-content-js')

    function tabActive(index) {
      t.forEach(item => {
        item.classList.remove('reviews-item-js-active')
      });
      t[index].classList.add('reviews-item-js-active')
      b.forEach(item => {
        item.classList.remove('reviews-content-js-active')
      });
      b[index].classList.add('reviews-content-js-active')
    }

    tabActive(i)

    t.forEach((element, index) => {
      element.addEventListener('click', function (e) {
        e.preventDefault()
        tabActive(index)
      })
    });
  } catch {
    console.log('tabs error')
  }
}

if (document.querySelector('.admin-st__reviews')) {
  let myTabs = document.querySelectorAll('.admin-st__reviews')
  myTabs.forEach(element => {
    reviews(element)
  });
}

// ?????????????? ??????????????????

function fav(parent, i = 0) {
  try {
    let p = parent
    let t = p.querySelectorAll('.fav-tab-js')
    let b = p.querySelectorAll('.fav-content-js')

    function tabActive(index) {
      t.forEach(item => {
        item.classList.remove('fav-item-active')
      });
      t[index].classList.add('fav-item-active')
      b.forEach(item => {
        item.classList.remove('fav-content-active')
      });
      b[index].classList.add('fav-content-active')
    }

    tabActive(i)

    t.forEach((element, index) => {
      element.addEventListener('click', function (e) {
        e.preventDefault()
        tabActive(index)
      })
    });
  } catch {
    console.log('tabs error')
  }
}

if (document.querySelector('.admin-st__fav')) {
  let myTabs = document.querySelectorAll('.admin-st__fav')
  myTabs.forEach(element => {
    fav(element)
  });
}

// ???????????? ?? ?????????????? ??????????????????

const metropolis = new Swiper('.admin-st__fav-swiper', {
  slidesPerView: 3,
  direction: 'horizontal',
  slideClass: 'admin-st__fav-slide',
  spaceBetween: 29,
  wrapperClass: 'admin-st__fav-swiper-wrapper',

  navigation: {
    nextEl: '.admin-st__fav-seller-arrow-next',
    prevEl: '.admin-st__fav-seller-arrow-prev',
  },


});

document.addEventListener('DOMContentLoaded', () => {

  const forms = document.querySelectorAll('form');
  const inputFile = document.querySelectorAll('.upload-file__input');

  /////////// ???????????? ?????????????????????? ?????????? /////////// 
  inputFile.forEach(function (el) {
    let textSelector = document.querySelector('.upload-file__text');
    let fileList;

    // ?????????????? ???????????? ??????????(????) 
    el.addEventListener('change', function (e) {

      // ?????????????? ???????????? ???????????? 
      fileList = [];
      for (let i = 0; i < el.files.length; i++) {
        fileList.push(el.files[i]);
      }

      // ?????????? ?????????????? ?????? ?????????????? ?????????? 
      fileList.forEach(file => {
        uploadFile(file);
      });
    });

    // ?????????????????? ???????????? ???????????? ?? ?????????????? ???????????????? 
    const uploadFile = (file) => {

      // ?????????? <5 ???? 
      if (file.size > 5 * 1024 * 1024) {
        alert('???????? ???????????? ???????? ???? ?????????? 5 ????.');
        return;
      }

      // ?????????? ?????????????????????? ???????????? 
      if (file && file.length > 1) {
        if (file.length <= 4) {
          textSelector.textContent = `?????????????? ${file.length} ??????????`;
        }
        if (file.length > 4) {
          textSelector.textContent = `?????????????? ${file.length} ????????????`;
        }
      } else {
        textSelector.textContent = file.name;
      }
    }

  });

  // ???????????????? ?????????? ???? ???????????? 
  const postData = async (url, fData) => { // ?????????? ?????????????????????? ???????????????? 

    // ???????????? ???????????????? 
    // ?????????? ?????????? ???????????????????? ???????????????????????? ?? ???????????? ???????????????? 

    // ???????? ??????????, ???????????? ?????????? ?????? ?????? ???????????? ???????????? 
    let fetchResponse = await fetch(url, {
      method: 'POST',
      body: fData
    });

    // ???????? ?????????????????? ???????????????? 
    return await fetchResponse.text();
  };

  if (forms) {
    forms.forEach(el => {
      el.addEventListener('submit', function (e) {
        e.preventDefault();

        // ???????????????? ?????????????? FormData 
        let fData = new FormData();

        // ???????????????????? ???????? input, ?????????? type="file" 
        el.querySelectorAll('input:not([type="file"])').forEach(input => {
          fData.append(input.name, input.value);
        });

        // ???????????????????? ???????????? input type file 
        let file = el.querySelector('.upload-file__input');
        for (let i = 0; i < (file.files.length); i++) {
          fData.append('files[]', file.files[i]); // ?????????????????? ?????????? ?? ???????????? FormData() 
        }

        // ???????????????? ???? ???????????? 
        postData('./mail.php', fData)
          .then(fetchResponse => {
            console.log('???????????? ?????????????? ????????????????????!');
            console.log(fetchResponse);
          })
          .catch(function (error) {
            console.log('????????????!');
            console.log(error);
          });
      });
    });
  };

});

// $('body').addEventListener('scroll', () => {
//   let scrollTop = this.scrollHeight;
//   console.log(scrollTop);
// });

// $('body').on('load scroll', function () {
//   let scrollTop = $('body').scrollHeight;
//   console.log(scrollTop);
// })

$(window).on('scroll', function () {
  if ($(this).scrollTop() >= '300' && $(window).width() > 768) {
    $('.card__seller').addClass('card__seller--scroll');
  } else {
    $('.card__seller').removeClass('card__seller--scroll');
  }
});







document.addEventListener('DOMContentLoaded', () => {
  $('.select_checked').click(function () {
    $(this).next().slideToggle();
  });

  $('.select-dropdown__option').click(function () {
    var value = $(this).attr('data-value');
    $(this).parent().find('.select-dropdown__option').removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().parent().find('.announcement-filter__select').val(value);
    $(this).parent().parent().find('.select_checked').find('.select-text').text(value);
    $(this).parent().slideUp();
  });

  //???????????????????? ???????? ?? ???????????????? ????????????
  class AddPortfolio {
    constructor(selector, options) {
      this.$element = document.querySelector('.announcement-content__appearance-photos-wrap');
      this.setUp();
    }
    setUp() {
      if (this.$element) {
        this.$file = this.$element.querySelector('.announcement-content__appearance-photo-input');
        this.$list = this.$element.querySelector('.announcement-content__appearance-photos');
        this.fileHendler();
        this.removeHendler();
      }
    }
    fileHendler() {
      this.$file.addEventListener('change', () => {
        if (this.$file.files.length > 0) {
          let path = this.imgPath = window.URL.createObjectURL(this.$file.files[0]);
          this.addItem(path);
        }
      })
    }
    removeHendler() {
      this.$list.addEventListener('click', (e) => {
        if (e.target.dataset.appearancephotoremove) {
          this.removeItem(e.target.dataset.appearancephotoremove);
        }
      })
    }
    removeItem(id) {
      document.querySelector(`.announcement-content__appearance-photo[data-appearance-photo="${id}"]`).remove();
    }
    addItem(path) {
      let items = document.querySelectorAll('.announcement-content__appearance-photo');
      let id = items.length > 0 ? items[items.length - 1].getAttribute('data-appearance-photo') : 0;
      this.$list.insertAdjacentHTML('beforeend', this.getTemplate(path, +id + 1));
      this.$file.value = "";
    }
    getTemplate(path, id) {
      return `
        <div class="announcement-content__appearance-photo" data-appearance-photo="${id}">
          <div class="announcement-content__appearance-photo-img">
            <img src="${path}" alt="">
          </div>
          <div class="announcement-content__appearance-photo-remove" data-appearancePhotoRemove="${id}">
            <img src="images/announcement/appearance-photo-delete.svg" alt="">
          </div>
        </div>
      `;
    }
  }

  const addPOrtfolio = new AddPortfolio();

  if ($('.announcement-promotion-switch__item input').checked) {
    console.log(1);
  }

  $('.announcement-promotion-switch__item input').change(function () {
    $('.announcement-promotion-switch__item').removeClass('promotion-switch-checked');

    if ($(this).is(':checked')) {
      $(this).parent().addClass('promotion-switch-checked');
    }
  });

  $('.announcement-content__category-subcategory-link').click(function (e) {
    e.preventDefault();
    $('.announcement-content__category-subcategory-list').removeClass('active').parent().removeClass('active');
    $(this).parent().addClass('active').parent('.announcement-content__category-subcategory').addClass('active').find('.announcement-content__category-subcategory-list').addClass('active');
  });

  $('.announcement-content__category-subcategory-back').click(function (e) {
    e.preventDefault();
    $('.announcement-content__category-subcategory-list').removeClass('active').parent().removeClass('active').parent().removeClass('active');
  });
});