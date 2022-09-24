
const sliderMain = new Swiper('.home__swiper', {
    slidesPerView: 1,
    loop: true,
    wrapperClass: 'home__swiper-wrapper',
    slideClass: 'home__swiper-slide',
    effect: 'fade',
    autoplay: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
      prevEl: '.home__prev',
      nextEl: '.home__next',
    },

    pagination: {
          el: ".home__pagination",
          type: "fraction",
         
           
    },
    
    scrollbar: {
      el: ".home__scroll-bar",
    },
    
});

const apxMainSlider = new Swiper('.apx-main__right-swiper', {
    slidesPerView: 'auto',
    loop: true,
    wrapperClass: 'apx-main__right-swiper-wrapper',
    slideClass: 'apx-main__right-swiper-slide',
    autoplay: true,
    autoplay: {
        delay: 2000,
    },
   
    
});


const partnersSwiper = new Swiper('.partners__swiper', {
    slidesPerView: 'auto',
    wrapperClass: 'partners__swiper-wrapper',
    slideClass: 'partners__swiper-slide',
    spaceBetween: 30,
    autoplay: true,
    autoplay: {
        delay: 2000,
    },
   
    
});



const largeSlider = ()=>{
	let largeSliders = document.querySelectorAll('.portfolio__swiper')
	let prevArrow = document.querySelectorAll('.portfolio__inner-prev')
	let nextArrow = document.querySelectorAll('.portfolio__inner-next')
	largeSliders.forEach((slider, index)=>{
    // this bit checks if there's more than 1 slide, if there's only 1 it won't loop
		let sliderLength = slider.children[0].children.length
		let result = (sliderLength > 1) ? true : false
		const metropolis = new Swiper(slider, {
            slidesPerView: 'auto',
            direction: 'horizontal',
            loop: true,
            slideClass: 'portfolio__swiper-slide',
            wrapperClass: 'portfolio__swiper-wrapper',
            navigation: {
              
                        nextEl: nextArrow[index],
                        prevEl: prevArrow[index],
                    },

                    
                      
        
        });	
	})
}
window.addEventListener('load', largeSlider)


document.addEventListener("DOMContentLoaded", () => {

  const forms = document.querySelectorAll("form");
  const inputFile = document.querySelectorAll(".upload-file__input");

  /////////// Кнопка «Прикрепить файл» ///////////
  inputFile.forEach(function(el) {
      let textSelector = document.querySelector(".upload-file__text");
      let fileList;

      // Событие выбора файла(ов)
      el.addEventListener("change", function (e) {

          // создаём массив файлов
          fileList = [];
          for (let i = 0; i < el.files.length; i++) {
              fileList.push(el.files[i]);
          }

          // вызов функции для каждого файла
          fileList.forEach(file => {
              uploadFile(file);
          });
      });

      // Проверяем размер файлов и выводим название
      const uploadFile = (file) => {

          // файла <5 Мб
          if (file.size > 5 * 1024 * 1024) {
              alert("Файл должен быть не более 5 МБ.");
              return;
          }

          // Показ загружаемых файлов
          if (file && file.length > 1) {
              if ( file.length <= 4 ) {
                  textSelector.textContent = `Выбрано ${file.length} файла`;
              }
              if ( file.length > 4 ) {
                  textSelector.textContent = `Выбрано ${file.length} файлов`;
              }
          } else {
              textSelector.textContent = file.name;
          }
      }

  });

  // Отправка формы на сервер
  const postData = async (url, fData) => { // имеет асинхронные операции

      // начало отправки
      // здесь можно оповестить пользователя о начале отправки

      // ждём ответ, только тогда наш код пойдёт дальше
      let fetchResponse = await fetch(url, {
          method: "POST",
          body: fData
      });

      // ждём окончания операции
      return await fetchResponse.text();
  };

  if (forms) {
      forms.forEach(el => {
          el.addEventListener("submit", function (e) {
              e.preventDefault();

              // создание объекта FormData
              let fData = new FormData(this);

              // Добавление файлов input type file
              let file = el.querySelector(".upload-file__input");
              for (let i = 0; i < (file.files.length); i++) {
                  fData.append("files[]", file.files[i]); // добавляем файлы в объект FormData()
              }

              // // Отправка на сервер
              // postData("./mail.php", fData)
              //     .then(fetchResponse => {
              //         console.log("Данные успешно отправлены!");
              //         console.log(fetchResponse);
              //     })
              //     .catch(function (error) {
              //         console.log("Ошибка!");
              //         console.log(error);
              //     });
          });
      });
  };

});



// табуляция проекты 



function zoneTab(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.project__item-js')
        let b = p.querySelectorAll('.project__wrapper-js')
  
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
  
  if (document.querySelector('.project')) {
    let myTabs = document.querySelectorAll('.project')
    myTabs.forEach(element => {
      zoneTab(element)
    });
  }




  const projectsSliderPage = new Swiper('.de-project__swiper', {
    slidesPerView: 'auto',
    loop: true,
    wrapperClass: 'de-project__swiper-wrapper',
    slideClass: 'de-project__swiper-slide',
    autoplay: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
      prevEl: '.de-project__prev',
      nextEl: '.de-project__next',
    },

 
    
});


const openSize = () => {
    const button = document.querySelector(`.js-open-size`);
    if (!button) return;
  
    const sizeText = document.querySelector(`.js-size`);
    button.addEventListener(`click`, (evt) => {
      button.classList.toggle(`open`);
  
  
      if (evt.target.closest(`.project__item-js`)) {
          const block = evt.target.closest(`.project__item-js`)
        const text = block.innerHTML;
        sizeText.innerHTML = text;
      }
  
    })
  }
  
  openSize();



const swiperDe = new Swiper(".de-project__swiper-one", {
    slidesPerView: 'auto',
    loop: true,
    freeMode: true,
    navigation: {
        nextEl: ".de-project__next",
        prevEl: ".de-project__prev",
      },
    watchSlidesProgress: true,
  });
const swiperDeTwo = new Swiper(".de-project__swiper-two", {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".de-project__next",
      prevEl: ".de-project__prev",
    },
    thumbs: {
      swiper: swiperDe,
    },
  });