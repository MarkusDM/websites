document.addEventListener('DOMContentLoaded', function() {

        const Main = new Swiper('.main__background-swiper', {
            slidesPerView: 1,
            loop: true,
            wrapperClass: 'main__background-swiper-wrapper',
            slideClass: 'main__background-swiper-slide',
            effect: 'fade',
            autoplay: true,
            autoplay: {
                delay: 4000,
            },
            
            pagination: {
                
                el: ".main__bullets-block",
                clickable: true,
                dynamicBullets: true,
            

            },
            
            
            
        });


        const box = new Swiper('.main__boxs-swiper', {
            slidesPerView: 2,
            loop: true,
            wrapperClass: 'main__boxs-swiper-wrapper',
            slideClass: 'main__boxs-swiper-slider',
            spaceBetween: 20,
            breakpoints: {
                
                748: {
                    slidesPerView: 5,
                    
                   
                },
                
            },

            
        
        });


        // двойной слайдер
     
        const swiperHome = new Swiper('.new__left-swiper ', {
            slidesPerView: 1,
            loop: true,
            wrapperClass: 'new__left-swiper-wrapper',
            watchSlidesProgress: true,
            autoplay: true,
            autoplay: {
                delay: 5000,
            },
          
    
            pagination: {
                el: ".new__left-numbers ",
                
                type: "fraction",
                formatFractionCurrent: addZero,
                formatFractionTotal: addZero
                 
            },

            navigation: {
                nextEl: '.new__left-next',
                prevEl: '.new__left-prev',
            },

          
            
         
        });
        
        function addZero(num) {
            return (num > 9) ? num : '0' + num;
        }

        const swiperHome2 = new Swiper('.new__right-swiper', {
            slidesPerView: 1,
            wrapperClass: 'new__right-swiper-wrapper ',
            loop:true,
            watchSlidesProgress: true,
            autoplay: true,
            autoplay: {
                delay: 5000,
            },
           
            thumbs: {
                swiper: swiperHome,
            },


            navigation: {
              nextEl: '.new__left-next',
              prevEl: '.new__left-prev',
          },
    
    
        });

        // ------------------------------------------


        function format(data) {
            if (data < 10) {
              data = '0' + data;
            }
            return data;
          }
      
        document.querySelectorAll('.events__swiper').forEach(n => {
            const fraction = document.getElementById("events__service");
            const all = document.getElementById("events__all-service");
            const slides = document.querySelectorAll(".events__swiper-slide");
            const slideCount = slides.length;
            fraction.textContent = format(`1`);
            all.textContent = format(`${slideCount}`);
            
            const swiper = new Swiper(".events__swiper", {
               slidesPerView: 'auto',
               spaceBetween: 20,
               navigation: {
                prevEl: '.events__bottom-two-prev',
                nextEl: '.events__bottom-two-next',
              },
               pagination: {
                el: ".events__bullets"
              },

              breakpoints: {
                
                748: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                
            },
              on: {
                slideChange: () => {
                  fraction.textContent = format(`${swiper.realIndex + 1} `);
                  all.textContent =   format(`${slideCount}`);
        
                
                  
                }
              }
        
              
            });
             
        });
        
        
        document.querySelectorAll('.developments__swiper').forEach(n => {
            const fractionDev = document.getElementById("developments__service");
            const allDev = document.getElementById("developments__all-service");
            const slidesDev = document.querySelectorAll(".developments__swiper-slide");
            const slideCountDev = slidesDev.length  ;
            fractionDev.textContent = format(`1`);
            allDev.textContent = format(`${slideCountDev}`);
            
            const swiperDev = new Swiper(".developments__swiper", {
              slidesPerView: 'auto',
              spaceBetween: 20,
              slidesPerGroup: 1,
              
              navigation: {
                prevEl: '.developments__bottom-two-prev',
                nextEl: '.developments__bottom-two-next',
              },
              pagination: {
                el: ".developments__bullets",
                dynamicBullets: true,
                
              },
              breakpoints: {
                
                748: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 46,
                },
                
            },
             
              on: {
                slideChange: () => {
                  fractionDev.textContent = format(`${swiperDev.realIndex + 1} `);
                  allDev.textContent =   format(`${slideCountDev}`);
                }
              }
        
              
            });
            
            
        });
        
        document.querySelectorAll('.stock-block__swiper').forEach(n => {
            const fractionSt = document.getElementById("stock-block__service");
            const allSt = document.getElementById("stock-block__all-service");
            const slidesSt = document.querySelectorAll(".stock-block__swiper-slide");
            const slideCountSt = slidesSt.length ;
            fractionSt.textContent = format(`1`);
            allSt.textContent = format(`${slideCountSt}`);
            
            const swiperSt = new Swiper(".stock-block__swiper", {
                slidesPerView: 'auto',
                spaceBetween: 20,
                slidesPerGroup: 1,
                
              navigation: {
                prevEl: '.stock-block__bottom-two-prev',
                nextEl: '.stock-block__bottom-two-next',
              },

              pagination: {
                el: ".stock-block__bullets",
                dynamicBullets: true,
                
              },
              breakpoints: {
                
                748: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 46,
                   
                   
                },
                
            },
             
              on: {
                slideChange: () => {
                  fractionSt.textContent = format(`${swiperSt.realIndex + 1} `);
                  allSt.textContent =  format(`${slideCountSt}`);
                }
              }
        
              
            });
            
            
        });


        $(function() {
          var Accordion = function(el, multiple) {
            this.el = el || {};
            // more then one submenu open?
            this.multiple = multiple || false;
            
            var dropdownlink = this.el.find('.dropdownlink');
            dropdownlink.on('click',
                            { el: this.el, multiple: this.multiple },
                            this.dropdown);
          };
          
          Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el,
                $this = $(this),
                //this is the ul.submenuItems
                $next = $this.next();
            
            $next.slideToggle();
            $this.parent().toggleClass('open');
            
            if(!e.data.multiple) {
              //show only one menu at the same time
              $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
            }
          }
          
          var accordion = new Accordion($('.score__accordion-menu'), false);
        })
        
     
       
 
});


const centralSlider = new Swiper('.central__swiper', {
  slidesPerView: 'auto',
  loop: true,
  wrapperClass: 'central__swiper-wrapper',
  slideClass: 'central__swiper-slide',

  autoplay: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    prevEl: '.central__prev',
    nextEl: '.central__next',
  },
 
  

  
  
  
});




var swiperMainSlider = new Swiper('.product-block__swiper-two', {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
 
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
                
    748: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    
},




});


var sliderMainTwo = new Swiper('.product-block__swiper-one', {
  slidesPerView: 'auto',
  loop: true,

  navigation: {
    nextEl: '.product-block__right-bottom-two-next',
    prevEl: '.product-block__right-bottom-two-prev',
  },

  pagination: {
    el: ".product-block__right-pagination",
    
    type: "fraction",
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
     
  },
  


  thumbs: {
    swiper: swiperMainSlider,
  },


  
  
});
function addZero(num) {
  return (num > 9) ? num : '0' + num;
}


function stockTab(parent, i = 0) {
  try {
      let p = parent
      let t = p.querySelectorAll('.score__stock-types-list-js')
      let b = p.querySelectorAll('.score__wrapper-stosk-js')

      function tabActive(index) {
          t.forEach(item => {
              item.classList.remove('score__stock-types-list-js--active')
          });
          t[index].classList.add('score__stock-types-list-js--active')
          b.forEach(item => {
              item.classList.remove('score__wrapper-stosk-js--active')
          });
          b[index].classList.add('score__wrapper-stosk-js--active')
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

if (document.querySelector('.score')) {
  let myTabs = document.querySelectorAll('.score')
  myTabs.forEach(element => {
    stockTab(element)
  });
}




const newsDetail = new Swiper('.detail-h__swiper', {
  
  
  wrapperClass: 'detail-h__swiper-wrapper',
  slideClass: 'detail-h__swiper-slide',
  slidesPerView: 'auto',
  spaceBetween: 27,
  loop: true,
  breakpoints: {
                
    748: {
      slidesPerView: 3,
      spaceBetween: 44,
     
      
    },
    
},
 
  

  
  
  
});






 
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.774948, 37.672989],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'VENOM CYBER LOUNGE',
          balloonContent: [
           `
           <div class="yandex-content">
    <div class="yandex-content__title">
        Venom
    </div>
    
</div>`
          ]
      }, {
          // // Опции.
          // // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // // Своё изображение иконки метки.
          iconImageHref: 'img/galka.png',
          // Размеры метки.
          iconImageSize: [50, 50],
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


