const mobileMenuList = () => {
	const buttons = document.querySelectorAll(`.catalog-filters__toggle`);
	const nav = document.querySelector(`.catalog-filters`);
	buttons.forEach(btn => {
		btn.addEventListener(`click`, (evt) => {
			evt.preventDefault();
			if (!evt.target.closest('.catalog-filters__block-toggle')) return;

			// const activeClass = nav.querySelectorAll(`.active`);
			// console.log('activeClass: ', activeClass);
			// activeClass.forEach(el => {
			//   console.log(el);
			//   el.classList.remove(`active`);
			// })



			evt.target.closest('.catalog-filters__block-toggle').classList.toggle('catalog-filters__block-toggle--open');

		})
	})
}
mobileMenuList();


/*
	в html изминид div на form
  <form class="catalog-filters"> 

	в catalog-choise.scss убрал display: none;

	с формой работать проще чем с div!!!

*/




setTimeout(function(){
	const filter = () => {
		const form = document.querySelector(`form.catalog-filters`); // находим форму
		if (!form) return; // Если форма не найдена, выходим из функции
		const catalogChoice = form.querySelector('.catalog-choice'); // находим в форме контейнер для кнопочек прямоугольных серых.
	
		const createChoiceItem = (text, key) => {
			return (
				`
			<button class="btn-reset catalog-choice__item" data-key='${key}'>
			<svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z" fill="#1A1B20"/>
			</svg>
			${text}   
			</button>
			`
			);
		};
		const checks = new Map(); // создаем обьект, где храним нажатые чекбоксы
		form.addEventListener('change', (event) => { // отслеживаем изминения инпутов батонов итд в форме
			event.preventDefault();
			const checkbox = [...form.elements].filter((item) => item.type === 'checkbox'); // ищем все чекбоксы
			checks.clear(); // очищаем обьект с чекбоксами
			checkbox.forEach((el, i) => { // перебераем нажатые чекбоксы
				if (el.checked) {
					checks.set(i, el); // добавляем в обьект названия со спана (после input => span)
				}
			});
	
			catalogChoice.innerHTML = ''; // очищаем со страницы выбранные кнопочки (прямоугольные)
			checks.forEach((value, key, map) => { // перебераем обьект и выводим кнопочи на страницу
				catalogChoice.insertAdjacentHTML('beforeend', createChoiceItem(value.nextSibling.nextSibling.textContent, key));
			});
	
			greenActive(checks);
		});
	
		const catalogChoiceClear = form.querySelector(`.catalog-choice__clear`);
		catalogChoiceClear.addEventListener(`click`, (event) => {
			
				event.preventDefault();
				checks.clear();
				catalogChoice.innerHTML = '';
				form.reset();
				greenActive(checks);
	
		})
	
		catalogChoice.addEventListener(`click`, (evt) => {
			evt.preventDefault()
	
			if (evt.target.matches(`.btn-reset`)) {
				const text = evt.target.textContent.trim();
				checks.forEach((value, key, map) => {
					if (value.nextSibling.nextSibling.textContent === text && Number(evt.target.getAttribute(`data-key`)) === key) {
						value.checked = false;
						checks.delete(key);
					}
				});
				catalogChoice.innerHTML = '';
				checks.forEach((value, key, map) => { // перебераем обьект и выводим кнопочи на страницу
					catalogChoice.insertAdjacentHTML('beforeend', createChoiceItem(value.nextSibling.nextSibling.textContent, key));
				});
			}
			greenActive(checks);
		})
	}
	filter();
}, 1000);

const greenActive = (checks) => {
	if (checks.size !== 0) {
		$('.catalog__left-buttons-green').addClass("catalog__left-buttons-green--active");
	} else {
		$('.catalog__left-buttons-green').removeClass("catalog__left-buttons-green--active");
	}
	console.log(checks.size);
}






// function toggle() {
// 	var div = document.querySelector('.catalog__left-buttons-green');
// 	if (this.checked)
// 		$('.catalog__left-buttons-green').addClass("catalog__left-buttons-green--active");
// 	else
// 		$('.catalog__left-buttons-green').removeClass("catalog__left-buttons-green--active");
// }
// document.querySelector('.custom-checkbox__input').onchange = toggle;






// $('.custom-checkbox__input').click(function () {
// 	if ($(this).is(':checked')) {

// 		$('.catalog__left-buttons-green').addClass('catalog__left-buttons-green--active');

// 	} else {
// 		$('.catalog__left-buttons-green').removeClass('catalog__left-buttons-green--active');
// 	}
// });









// const catalogFilterItems = document.querySelectorAll('.catalog-filters__item');
// const catalogChoice = document.querySelector('.catalog-choice');
// const createChoiceItem = (text) => { 
// 	return (
// 		`
// 			<button class="btn-reset catalog-choice__item">
// 			<svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
// 					<path d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z" fill="#1A1B20"/>
// 			</svg>
// 			${text}   
// 			</button>
// 			`
// 	);
// };
// catalogFilterItems.forEach(el => {
//     el.querySelector('input').addEventListener('change', (e) => {
//        let checked = el.querySelector('input').checked;
//        if (checked) {
//            el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
//            let text = el.querySelector('.custom-checkbox__text').textContent;
//            catalogChoice.insertAdjacentHTML('afterbegin', createChoiceItem(text));
//        } else {
//         el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
//        }
//        let activeCheckBoxes = document.querySelectorAll('.custom-checkbox--active');
//        if (activeCheckBoxes.length > 0) {
//         catalogChoice.style.display = 'block';
//        }else {
//         catalogChoice.style.display = 'none';
//        }
//     });
// });
// catalogChoice.addEventListener('click', (e) =>{
//     if (e.target.classList.contains('catalog-choice__item')) {
//         e.target.remove();
//         let text = e.target.textContent.trimLeft().trimRight();
//         document.querySelector(`[data-text="${text}"]`).querySelector('input').checked = false;
//         document.querySelector(`[data-text="${text}"]`).classList.remove('custom-checkbox--active');
//     }
//     if (e.target.classList.contains('catalog-choice__clear')) {
//         Array.from(e.currentTarget.children).forEach(el => {
//             if(!el.classList.contains('catalog-choice__clear')) {
//                 el.remove();
//             }
//             catalogFilterItems.forEach(el => {
//                 el.querySelector('input').checked = false;
//                 el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
//             });
//         });
//     }
//     if (e.currentTarget.children.length === 0) {
//         e.currentTarget.style.display = 'none';
//     }
// });