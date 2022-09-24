
$(".header__burger").click(function() {
	$(".header__nav").addClass('header__nav--active');
	$('.header').css("overflow", "hidden");
})


$(".header__close").click(function() {
	$(".header__nav").removeClass('header__nav--active');
	$('.header').css("overflow", "initial");
})



$(".js-open-size").on('click', function() {
	$(".overlay-black").toggleClass('overlay-black--active');



})