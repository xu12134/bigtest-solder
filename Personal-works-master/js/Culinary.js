$('.page-menu li').eq(0).click(function(event) {
	$('html,body').animate({scrollTop: $('#restaurant').offset().top}, 2000);
});
$('.page-menu li').eq(1).click(function(event) {
	$('html,body').animate({scrollTop: $('#guarda-golf-lounge').offset().top}, 2000);
});
$('.page-menu li').eq(2).click(function(event) {
	$('html,body').animate({scrollTop: $('#grand-sunday-buffet').offset().top}, 2000);
});
$('.page-menu li').eq(3).click(function(event) {
	$('html,body').animate({scrollTop: $('#catering').offset().top}, 2000);
});