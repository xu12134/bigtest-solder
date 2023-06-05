$(document).ready(function(){
	$('.next').click(function(event) {
		$('html,body').animate({scrollTop: $('#golf-hotel').offset().top}, 1500);
	});
	$('.prev').click(function(event) {
		$('html,body').animate({scrollTop: $('#bannerList').offset().top}, 1500);
	});
	$('.prev').hide();
	$('.content-txt').show();
	$('.content-txt').css('position','relative').css('top',0);
	$('.gift').click(function(event) {
		$('.hidden-content').show();
		$('.content-txt').animate({top:'33%'}, 1000);
	});
	$('.white-content').children('img').click(function(event) {
		$('.hidden-content').hide();
	});
	$('.menu-icon').click(function(event) {
		$(this).hide();
		$('.logo').hide();
		$('.nav').children('img').show();
		$('.nav-title').fadeIn(500);
		$('.booking').children('span').css('background','none').children('a').css('color','#412313');
		$('.gift').css('backgroundColor','rgba(255,255,255,0)');
		$('.gift').children('img').show();
	});
	$('.nav').children('img').click(function(event) {
		$('.nav-title').hide();
		$(this).hide();
		$('.menu-icon').show();
		$('.logo').show();
		$('.booking').children('span').css('background','#412313').children('a').css('color','#fff');
		$('.gift').css('backgroundColor','#ad9f8d');
		$('.gift').children('img').hide();
	});
	$(window).scroll(function(event){
		var sTop = $(window).scrollTop();
		if (sTop >= 321) {
			$('.logo').fadeOut('400');
			$('.prev').fadeIn('400');
		}else {
			$('.logo').fadeIn('400');
			$('.prev').fadeOut('400');
		}
		if (sTop >= 500) {
			$('.f-left .content-info').eq(0).animate({right:'70'},1000);
			$('.f-left .panel').eq(0).animate({bottom:'40'},1000);
		}
		if (sTop >= 1000) {
			$('.f-right .content-info').eq(0).animate({left:'100'},1000);
		}
		if (sTop >= 2000) {
			$('.f-left .content-info').eq(1).animate({right:'70'},1000);
		}	
		if (sTop >= 2500) {
			$('.f-right .content-info').eq(1).animate({left:'100'},1000);
		}	
		if (sTop >= 3500) {
			$('.f-left .content-info').eq(2).animate({right:'70'},1000);
			$('.f-left .panel').eq(1).animate({bottom:'40'},1000);
		}		
	});	
	$('.f-left .popup-close').click(function(event) {
		$('.f-left .popup').animate({width:'0'},1000);
	});
	$('.f-left .content-sidebar a').eq(0).click(function(event) {
		$('.f-left .popup').eq(1).animate({width:'0'}, 500);
		$('.f-left .popup').eq(0).animate({width:'820'}, 500);
	});
	$('.f-left .content-sidebar a').eq(1).click(function(event) {
		$('.f-left .popup').eq(0).animate({width:'0'}, 500);
		$('.f-left .popup').eq(1).animate({width:'820'}, 500);
	});
	$('.f-left .content-sidebar a').eq(2).click(function(event) {
		$('.f-left .popup').eq(3).animate({width:'0'}, 500);
		$('.f-left .popup').eq(2).animate({width:'820'}, 500);
	});
	$('.f-left .content-sidebar a').eq(3).click(function(event) {
		$('.f-left .popup').eq(2).animate({width:'0'}, 500);
		$('.f-left .popup').eq(3).animate({width:'820'}, 500);
	});
	$('.f-left .content-sidebar a').eq(4).click(function(event) {
		$('.f-left .popup').eq(5).animate({width:'0'}, 500);
		$('.f-left .popup').eq(4).animate({width:'820'}, 500);
	});
	$('.f-left .content-sidebar a').eq(5).click(function(event) {
		$('.f-left .popup').eq(4).animate({width:'0'}, 500);
		$('.f-left .popup').eq(5).animate({width:'820'}, 500);
	});
	$('.f-right .popup-close').click(function(event) {
		$('.f-right .popup').animate({width:'0'},1000);
	});
	$('.f-right .content-sidebar a').eq(0).click(function(event) {
		$('.f-right .popup').eq(1).animate({width:'0'}, 500);
		$('.f-right .popup').eq(0).animate({width:'820'}, 500);
	});
	$('.f-right .content-sidebar a').eq(1).click(function(event) {
		$('.f-right .popup').eq(0).animate({width:'0'}, 500);
		$('.f-right .popup').eq(1).animate({width:'820'}, 500);
	});
	$('.f-right .content-sidebar a').eq(2).click(function(event) {
		$('.f-right .popup').eq(3).animate({width:'0'}, 500);
		$('.f-right .popup').eq(2).animate({width:'820'}, 500);
	});
	$('.f-right .content-sidebar a').eq(3).click(function(event) {
		$('.f-right .popup').eq(2).animate({width:'0'}, 500);
		$('.f-right .popup').eq(3).animate({width:'820'}, 500);
	});
	$('.page-menu li').eq(0).click(function(event) {
		$('html,body').animate({scrollTop: $('#double-north').offset().top}, 2000);
	});
	$('.page-menu li').eq(1).click(function(event) {
		$('html,body').animate({scrollTop: $('#double-corner').offset().top}, 2000);
	});
	$('.page-menu li').eq(2).click(function(event) {
		$('html,body').animate({scrollTop: $('#deluxe-rooms').offset().top}, 2000);
	});
	$('.page-menu li').eq(3).click(function(event) {
		$('html,body').animate({scrollTop: $('#junior-suites').offset().top}, 2000);
	});
	$('.page-menu li').eq(4).click(function(event) {
		$('html,body').animate({scrollTop: $('#suites-south').offset().top}, 2000);
	});
	$('.page-menu li').eq(5).click(function(event) {
		$('html,body').animate({scrollTop: $('#offers').offset().top}, 2000);
	});
	
});