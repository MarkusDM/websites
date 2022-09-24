document.addEventListener('DOMContentLoaded', function() {

    const personSlider = new Swiper('.variances-slider__container', {
        slidesPerView: 1,
        direction: 'horizontal',
        slideClass: 'variances-slider__slide',
        loop: true,
        wrapperClass: 'variances-slider__wrapper',
        navigation: {
            nextEl: '.variances-button-next',
            prevEl: '.variances-button-prev',
        },





        pagination: {
            el: ".variances-pagination ",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index < 10 ? '0' + (index + 1) : (index + 1)) + "</span>";
            },

        },




        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 1,

            },

        },




    });

    function addZero(num) {
        return (num > 9) ? num : '0' + num;
    }

});