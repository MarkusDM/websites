$(document).ready(function () {
   
   $('.lk__nav-link').on('click', function (e) {
      e.preventDefault();
      $('.lk__nav-link').not(this).removeClass('lk__nav-link--active');
      $(this).toggleClass('lk__nav-link--active');
   });
   
   $('.lk__tab').on('click', function (e) {
      e.preventDefault();
      $('.lk__tab').not(this).removeClass('lk__tab--active');
      $(this).addClass('lk__tab--active');
      check_lk();
   });

   function check_lk() {
      if($('.lk__tab--private').hasClass('lk__tab--active')) {
         $('.lk__content').not('.lk__private').slideUp(5);
         $('.lk__private').slideDown(80);
      } else if($('.lk__tab--notification').hasClass('lk__tab--active')) {
         $('.lk__content').not('.lk__notific').slideUp(5);
         $('.lk__notific').slideDown(80);
      } else if($('.lk__tab--favorite').hasClass('lk__tab--active')) {
         $('.lk__content').not('.lk__favorite').slideUp(5);
         $('.lk__favorite').slideDown(80);
      }
   }
   check_lk();


   $('.form-lk__password-visible').on('click', function (e) {
      e.preventDefault();

      
      if ($(this).closest('label').find('input').attr('type')=='password') {
         $(this).closest('label').find('input').attr('type', 'text');
      } else {
         $(this).closest('label').find('input').attr('type', 'password');
      }
   });

   $('.lk__data-edit').on('click', function (e) {
      e.preventDefault();
      $(this).next().find('.lk__data-save').slideToggle();
      $(this).closest('.lk__data').find('.lk__data-howlong').slideToggle();
      if ($(this).next().find('.lk__data-password').length) {
         $(this).next().find('.lk__data-password').slideToggle();
      } else {
         $(this).next().find('.lk__data-input').toggleClass('lk__data-input--active')[0].disabled = false;
         $(this).next().find('.lk__data-input').toggleClass('lk__data-input--active')[1].disabled = false;
         $(this).next().find('.lk__data-input').toggleClass('lk__data-input--active')[2].disabled = false;
      }
      $(this).toggleClass('lk__data-edit--active');
   });

   $('.lk__data-save').on('click', function (e) {
      e.preventDefault();
   });
});