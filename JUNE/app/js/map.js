



	
 $('.map__image-scheme-item').on('click', function(){
	$('.map__image-scheme-popup').hide();
	$('.map__image  path').attr('class', 'part');
 
	var popup = $(this).find('.map__image-scheme-popup');
	$(popup).css('top', '-' + ($(popup).outerHeight(true) + 15) + 'px');
	$(popup).css('left', '-' + (($(popup).outerWidth(true) / 2) - ($(this).outerWidth(true) / 2)) + 'px');
	$('.map__image  path[data-id=' + $(this).data('id') + ']').attr('class', 'active');
	$(popup).show();
});

 
// Клик по полигону магазина - также открывается подсказка.
$('.map__image path').click(function(){
	$('.map__image-scheme-popup').hide();
	$('.map__image-scheme-item[data-id=' + $(this).data('id') + ']').trigger('click');
});
 
// Клик вне магазинов все закрывает.
$("body").click(function(e) {
	if ($(e.target).closest(".map__image path, .map__image-scheme-item").length == 0) {
		$(".map__image-scheme-popup").hide();
		$('.map__image path').attr('class', 'part');
	}
});