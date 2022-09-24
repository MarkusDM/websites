$(".score__popular-btn").on('click', function() {
    $(".score__popular-down").toggleClass("score__popular-down-active");         
    
})   



$(".header__geo-span").on('click', function() {
    $(".header__geo-block").toggleClass("header__geo-block--active");         
    
}) 


$('.header__search').click(function(){
	$('.header__search-block').css('display', 'block');
	$('.overlay').css('display', 'block');
	$('.header').css("overflow", "hidden");
})


$('.header__search-close').click(function(){
	$('.header__search-block').css('display', 'none');
	$('.overlay').css('display', 'none');
	$('.header').css("overflow", "initial");
	
	
})

$('.score__floats').each(function() {
	let ths = $(this);
	ths.find('.score__float-js').click(function() {
		ths.find('.score__float-js').removeClass('active').eq($(this).index()).addClass('active');
	}).eq(0).addClass('active');
});



$(".boutique__heart").on('click', function() {
    $(this).toggleClass("boutique__heart-active");         
    
})  

$(".stock-detail__brand-right-title-inner-heart").on('click', function() {
    $(this).toggleClass("stock-detail__brand-right-title-inner-heart--active");         
    
})  

$(".score__float-btn").on('click', function() {
	$(".score__float-btn").toggleClass("score__float-btn-active");   
	$(".score__floats--none").toggleClass("score__floats--none-active ");         
	
}) 


$(".score__filter-btn").click(function() {
	$(".score__sidebar").addClass('score__sidebar--active');
	
})

$(".score__sidebar-title-close").click(function() {
	$(".score__sidebar").removeClass('score__sidebar--active');
	
})

$(".all-btn-close").click(function() {
	$(".score__sidebar").removeClass('score__sidebar--active');
	
})


$(".header__burger").click(function() {
	$(".header__nav").addClass('header__nav--active');
	$('.header').css("overflow", "hidden");
})


$(".header__nav-close").click(function() {
	$(".header__nav").removeClass('header__nav--active');
	$('.header').css("overflow", "initial");
})


jQuery(($) => {
	$('.select').on('click', '.select__head', function() {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).next().fadeOut();
		} else {
			$('.select__head').removeClass('open');
			$('.select__list').fadeOut();
			$(this).addClass('open');
			$(this).next().fadeIn();
		}
	});

	$('.select').on('click', '.select__item', function() {
		$('.select__head').removeClass('open');
		$(this).parent().fadeOut();
		$(this).parent().prev().text($(this).text());
		$(this).parent().prev().prev().val($(this).text());
	});

	$(document).click(function(e) {
		if (!$(e.target).closest('.select').length) {
			$('.select__head').removeClass('open');
			$('.select__list').fadeOut();
		}
	});
});

$(".score__stock-types-block").on('click', function() {
	$(".score__stock-types-block-btn").toggleClass("score__stock-types-block-btn--active");   
	$(".score__stock-types").toggleClass("score__stock-types--active ");         
	
}) 




$(".detail-h__inner-stars-star").on('click', function() {
    $(this).toggleClass("detail-h__inner-stars-star--active");         
    
})  


