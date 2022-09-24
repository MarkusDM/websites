
function newsTab(parent, i = 0) {
  try {
      let p = parent
      let t = p.querySelectorAll('.news__swiper-slide-item-js')
      let b = p.querySelectorAll('.news__wrapper-js')

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

if (document.querySelector('.news')) {
  let myTabs = document.querySelectorAll('.news')
  myTabs.forEach(element => {
    newsTab(element)
  });
}



// document.querySelectorAll('#main-block__inner').forEach(n => {
//   const elementStart = document.querySelector('.span-start');
//   const elementMid = document.querySelector('.span-middle');
//   const elementEnd = document.querySelector('.span-end');
  

//   const sliderMain = new Swiper('.main-block__swiper', {
//     slidesPerView: 1,
    
//     wrapperClass: 'main-block__swiper-wrapper',
//     slideClass: 'main-block__swiper-slide',
//     effect: 'fade',
//     fadeEffect: {
//       crossFade: true
//     },
//     autoplay: true,
//     autoplay: {
//         delay: 3000,
//     },
//     navigation: {
//       prevEl: '.main-block__prev',
//       nextEl: '.main-block__next',
//     },

//     loop: true,
//     on: {
//       //Если слайд последний
//       reachEnd: () => {
//         elementEnd.classList.add('span-active');
//         elementMid.classList.remove('span-active');
//       },
//      //Если слайд первый
//       reachBeginning: () => {
//         elementStart.classList.add('span-active');
//         elementMid.classList.remove('span-active');
//       },
//       // Если не начальная и не конечная позиция
//       fromEdge: () => {
//         elementStart.classList.remove('span-active');
//         elementEnd.classList.remove('span-active');
//         elementMid.classList.add('span-active');
//       }
     
//     }

    
   
//   });





// });


const sliderMain = new Swiper('.main-block__swiper', {
  slidesPerView: 1,
  
  wrapperClass: 'main-block__swiper-wrapper',
  slideClass: 'main-block__swiper-slide',
  effect: 'fade',
  loop: true,
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  autoplay: {
      delay: 3000,
  },
  navigation: {
    prevEl: '.main-block__prev',
    nextEl: '.main-block__next',
  },

  pagination: {
    el: ".main-block__bullets",
    dynamicBullets: true,
    dynamicMainBullets: 4
  }

 
 

  
 
});

const sliderExperts = new Swiper('.experts__right-swiper', {
  slidesPerView: 'auto',
  loop: true,
  wrapperClass: 'experts__right-swiper-wrapper',
  slideClass: 'experts__right-slide',

  navigation: {
    prevEl: '.experts__prev',
    nextEl: '.experts__next',
  },
  pagination: {
    el: ".experts__bullets",
    dynamicBullets: true,
    dynamicMainBullets: 4
  }
  

  
 
});




const sliderNew = new Swiper('.new__swiper', {
  slidesPerView: '4',
  loop: true,
  wrapperClass: 'new__swiper-wrapper',
  slideClass: 'new__slide',
  navigation: {
    prevEl: '.new__prev',
    nextEl: '.new__next',
  },
  pagination: {
    el: ".new__bullets",
    dynamicBullets: true,
    dynamicMainBullets: 4
  }
  

  
 
});



const partnersSlider = new Swiper('.partners__swiper', {
  slidesPerView: 'auto',
  loop: true,
  wrapperClass: 'partners__swiper-wrapper',
  slideClass: 'partners__slide',
  navigation: {
    prevEl: '.partners__prev',
    nextEl: '.partners__next',
  },
  pagination: {
    el: ".partners__bullets",
    dynamicBullets: true,
    dynamicMainBullets: 4
  }
  

  
 
});





var init = false;

function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".news__swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);



 
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.749633, 37.537434],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'DEEP VAPE',
          balloonContent: [
           `
           <div class="yandex-content">
    <div class="yandex-content__title">
        DEEP VAPE
    </div>
    
</div>`
          ]
      }, {
          // // Опции.
          // // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // // Своё изображение иконки метки.
          iconImageHref: 'img/galka.svg',
          // Размеры метки.
          iconImageSize: [69, 78],
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
          iconImageHref: 'img\galka.svg',
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




const CatalogSwiper = new Swiper(".catalog-main__table-swiper", {
  slidesPerView: 1,
  freeMode: true,
  effect: 'fade',
  loop: true,
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  autoplay: {
      delay: 3000,
  },

  



  wrapperClass: 'catalog-main__table-swiper-wrapper',
  slideClass: 'catalog-main__table-swiper-slide',
  watchSlidesProgress: true,
});


var CatalogSwiper2 = new Swiper(".catalog-main__swiper", {
  slidesPerView: 1,
  freeMode: true,
  effect: 'fade',
  loop: true,
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  autoplay: {
      delay: 3000,
  },
  wrapperClass: 'catalog-main__swiper-wrapper',
  slideClass: 'catalog-main__swiper-slide',
  navigation: {
    prevEl: '.catalog-main__prev',
    nextEl: '.catalog-main__next',
    nextEl: '.catalog-main__table-next'
  },
  pagination: {
    el: ".catalog-main__bullets",
    dynamicBullets: true,
    dynamicMainBullets: 4
  },
  thumbs: {
    swiper: CatalogSwiper,
  },
});


const largeSlider = ()=>{
	let largeSliders = document.querySelectorAll('.catalog__swiper')
	let prevArrow = document.querySelectorAll('.catalog__prev')
	let nextArrow = document.querySelectorAll('.catalog__next')
	largeSliders.forEach((slider, index)=>{
    // this bit checks if there's more than 1 slide, if there's only 1 it won't loop
		let sliderLength = slider.children[0].children.length
		let result = (sliderLength > 1) ? true : false
		const catalogSliderTwo = new Swiper(slider, {
            slidesPerView: 'auto',
            direction: 'horizontal',
            loop: true,
            slideClass: 'catalog__slide',
            wrapperClass: 'catalog__swiper-wrapper',
            navigation: {
              
                      nextEl: nextArrow[index],
                      prevEl: prevArrow[index],
                    },

            pagination: {
                    el: ".catalog__bullets",
                    dynamicBullets: true,
                    dynamicMainBullets: 4
              },

                    
                      
        
    });	
	})
}
window.addEventListener('load', largeSlider)





var init = false;

function swiperCardTwo() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".catalog__swiper-item", {
        direction: "horizontal",
        slidesPerView: "auto",
        
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCardTwo();
window.addEventListener("resize", swiperCardTwo);








