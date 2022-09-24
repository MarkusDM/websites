
// Клик по названию магазина - открывается подсказка.
$('.scheme-item').on('click', function(){
	$('.scheme-popup').hide();
	$('.svg-block > div').attr('class', '');

	var popup = $(this).find('.scheme-popup');
	$(popup).css('top', '-' + ($(popup).outerHeight(true) + 15) + 'px');
	$(popup).css('left', '-' + (($(popup).outerWidth(true) / 2) - ($(this).outerWidth(true) / 2)) + 'px');
	$('.svg-block div[data-id=' + $(this).data('id') + ']').attr('class', 'active');
	$(popup).show();
});

// Клик по полигону магазина - также открывается подсказка.
$('.svg-block div').click(function(){
	$('.scheme-popup').hide();
	$('.scheme-item[data-id=' + $(this).data('id') + ']').trigger('click');
});

// Клик вне магазинов все закрывает.
$("body").click(function(e) {
	if ($(e.target).closest(".svg-block div, .scheme-item").length == 0) {
		$(".scheme-popup").hide();
		$('.svg-block div').attr('class', '');
	}
});


Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
      on: {
        change: (that) => {
          mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });








function tab(parent, i = 0) {
  try {
      let p = parent
      let t = p.querySelectorAll('.certificate__item-js')
      let b = p.querySelectorAll('.certificate__block-js')

      function tabActive(index) {
          t.forEach(item => {
              item.classList.remove('active-item')
          });
          t[index].classList.add('active-item')
          b.forEach(item => {
              item.classList.remove('active-block')
          });
          b[index].classList.add('active-block')
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

if (document.querySelector('.certificate__wrapper')) {
  let myTabs = document.querySelectorAll('.certificate__wrapper')
  myTabs.forEach(element => {
      tab(element)
  });
}

document.addEventListener('DOMContentLoaded', function() {

const sliderMain = new Swiper('.home__right-container', {
    slidesPerView: 1.5,
    loop: true,
    wrapperClass: 'home__right-wrapper',
    slideClass: 'home__slide',
    navigation: {
      prevEl: '.home__right-prev',
      nextEl: '.home__right-next',
    },

    pagination: {
          el: ".home__right-pagination",
          type: "fraction",
          formatFractionCurrent: addZero,
          formatFractionTotal: addZero
           
      },
   
    
});
function addZero(num) {
    return (num > 9) ? num : '0' + num;
}


const philoperSlider = new Swiper('.philosopher__swiper', {
    slidesPerView: 1.5,
    spaceBetween: 60,
    loop: true,
    wrapperClass: 'philosopher__swiper-wrapper',
    slideClass: 'philosopher__slide',
    navigation: {
      prevEl: '.philosopher__arrow-prev',
      nextEl: '.philosopher__arrow-next',
    },


    breakpoints: {
      748: {
        slidesPerView: 4.5,
        spaceBetween: 60,
      },
}

   
   
    
});



// слайдер на странице каталога 


const catalogSlider = new Swiper('.best-two__swiper', {
    slidesPerView: 1,
    loop: true,
    wrapperClass: 'best-two__swiper-wrapper',
    slideClass: 'best-two__slide',
    navigation: {
      prevEl: '.best-two__prev',
      nextEl: '.best-two__next',
    },

    breakpoints: {
      748: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
    
});


function quest(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.questions-form__item-js')
        let b = p.querySelectorAll('.questions-form__block-js')
  
        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('active-item')
            });
            t[index].classList.add('active-item')
            b.forEach(item => {
                item.classList.remove('active-block')
            });
            b[index].classList.add('active-block')
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
  
  if (document.querySelector('.questions-form')) {
    let myTabs = document.querySelectorAll('.questions-form')
    myTabs.forEach(element => {
        quest(element)
    });
  }


//   табуляция в продуктах

function perfume(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.perfume__product-item-js')
        let b = p.querySelectorAll('.perfume__product-text-js')
  
        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('active-item')
            });
            t[index].classList.add('active-item')
            b.forEach(item => {
                item.classList.remove('active-block')
            });
            b[index].classList.add('active-block')
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
  
  if (document.querySelector('.perfume__product')) {
    let myTabs = document.querySelectorAll('.perfume__product')
    myTabs.forEach(element => {
        perfume(element)
    });
  }



});


//  переключатель для кожи))




//  кнопка прикрепить файл

let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.input__file-button-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.input__file-button-text').innerText = labelVal;
  });
});



function leather(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.perfume__leather-js')
       
  
        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('perfume-item')
            });
            t[index].classList.add('perfume-item')
           
        }
  
       
  
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
  
  if (document.querySelector('.perfume__leather-wrapper')) {
    let myTabs = document.querySelectorAll('.perfume__leather-wrapper')
    myTabs.forEach(element => {
        leather(element)
    });
  }


  $(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

const asideSlider = new Swiper('.aside__swiper', {
    slidesPerView: 1,
    loop: true,
    wrapperClass: 'aside__swiper-wrapper',
    slideClass: 'aside__slide',
    navigation: {
      prevEl: '.aside__prev',
      nextEl: '.aside__next',
    },

    breakpoints: {
      748: {
        slidesPerView: 1,
      },
    }
   
    
});


// табуляция в разделе оплата заказа


function formalizationTab(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.formalization__payment-item-js')
        let b = p.querySelectorAll('.formalization__left-payment-inner-js')
  
        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('formalization__payment-item-active')
            });
            t[index].classList.add('formalization__payment-item-active')
            b.forEach(item => {
                item.classList.remove('formalization__left-payment-inner-active')
            });
            b[index].classList.add('formalization__left-payment-inner-active')
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
  
  if (document.querySelector('.formalization__wrapper')) {
    let myTabs = document.querySelectorAll('.formalization__wrapper')
    myTabs.forEach(element => {
        formalizationTab(element)
    });
  }


  function reg(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.registration__item-js')
        let b = p.querySelectorAll('.registration__left-block-js')
  
        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('active')
            });
            t[index].classList.add('active')
            b.forEach(item => {
                item.classList.remove('active-block')
            });
            b[index].classList.add('active-block')
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
  
  if (document.querySelector('.registration__wrapper')) {
    let myTabs = document.querySelectorAll('.registration__wrapper')
    myTabs.forEach(element => {
        reg(element)
    });
  }



var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
    var details = event.target.parentNode.children;
    for(i=0;i<details.length;i++) {
      if (details[i].tagName != "DETAILS" || 
         !details[i].hasAttribute('open') || 
         event.target == details[i]) {
         continue;
      }
      details[i].removeAttribute("open");
    }
}



function historyTab(parent, i = 0) {
  try {
      let p = parent
      let t = p.querySelectorAll('.history__number-button--js')
      let b = p.querySelectorAll('.history__block-inner--js')

      function tabActive(index) {
          t.forEach(item => {
              item.classList.remove('active')
          });
          t[index].classList.add('active')
          b.forEach(item => {
              item.classList.remove('active-block')
          });
          b[index].classList.add('active-block')
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

if (document.querySelector('.history__wrapper')) {
  let myTabs = document.querySelectorAll('.history__wrapper')
  myTabs.forEach(element => {
    historyTab(element)
  });
}




const certificate = new Swiper('.certificate__swiper', {
  slidesPerView: 1,
  loop: true,
  wrapperClass: 'certificate__swiper-wrapper',
  slideClass: 'certificate__slider',

  navigation: {
    prevEl: '.certificate__prev',
    nextEl: '.certificate__next',
  },
  
 
  
});



function global(parent, i = 0) {
  try {
      let p = parent
      let t = p.querySelectorAll('.sidebar-item-js')
      let b = p.querySelectorAll('.admin-register__global-js')

      function tabActive(index) {
          t.forEach(item => {
              item.classList.remove('active-item-js')
          });
          t[index].classList.add('active-item-js')
          b.forEach(item => {
              item.classList.remove('admin-register__global-js--active')
          });
          b[index].classList.add('admin-register__global-js--active')
      }

     

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

if (document.querySelector('.admin-register__wrapper')) {
  let myTabs = document.querySelectorAll('.admin-register__wrapper')
  myTabs.forEach(element => {
      global(element)
  });
}


const openSize = () => {
  const button = document.querySelector(`.js-open-size`);
  if (!button) return;

  const sizeText = document.querySelector(`.js-size`);
  button.addEventListener(`click`, (evt) => {
    button.classList.toggle(`open`);


    if (evt.target.closest(`.admin-register__sidebar-item`)) {
        const block = evt.target.closest(`.admin-register__sidebar-item`)
      const text = block.innerHTML;
      sizeText.innerHTML = text;
    }

  })
}

openSize();


if (document.getElementById('progress')) document.getElementById('progress').value = '50';






ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.785979, 37.660521],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Gemma',
          balloonContent: 'Gemma'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/my.png',
          // Размеры метки.
          iconImageSize: [30, 30],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.785979, 37.660521], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/ball.png',
          // Размеры метки.
          iconImageSize: [48, 48],
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



