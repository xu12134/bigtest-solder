var bannerList = document.getElementById('bannerList');
var banner = bannerList.getElementsByTagName('li');
var banBtncontItem = bannerList.getElementsByTagName('ul')[0];
var banBtn = banBtncontItem.getElementsByTagName('li');
var bannerTimeId;
function go(index) {
	move();
	function move() {
		
		if (index > 2)
			index = 0;
		for (var i = 0;i < banBtn.length;i ++) {
			banner[i].className = 'banner';
			banBtn[i].className = 'ban-btn';
		}
		banBtn[index].className += ' hover';
		banner[index].className += ' active';
		index ++;
	}
	bannerTimeId = setInterval(move,4000);
}

go(0);

;for (var i = 0;i < banBtn.length;i ++) {
	(function(i){
		banBtn[i].onclick = function() {
			clearInterval(bannerTimeId);
			go(i);
		}
	}(i));
}
var navPage = document.getElementById('navPage');
var navfixedFlag = 0;
window.onscroll = function (e) {

	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (sTop >= 763 && !navfixedFlag) {
		navPage.className += ' navfixed';
		navfixedFlag = 1;
	} else if (sTop <= 763 && navfixedFlag) {
		navPage.className = 'page-menu';
		navfixedFlag = 0;
	}
}
var animateTimeId;
var list = $('.list');
var left;
var newLeft;
var aniFlag = 0;
function fanyeAnimate(num,index) {
	if(aniFlag) 
		return;
	var liW = list.eq(index).find('img').eq(0).width();
	for (var i = 1;i < 7;i ++) {
		if (parseInt(list.eq(index).css('left')) > -liW * i) {
			newLeft = -liW * (i - 1 + num);
			break;
		}
	}
	if (newLeft > 0){
		list.eq(index).css('left',(-liW * 4));
		newLeft = -liW * 3;
	}
	if (newLeft < -5*liW) {
		list.eq(index).css('left',-liW);
		newLeft = -liW * 2;
	}
	function go() {
		aniFlag = 1;
		left = parseInt(list.eq(index).css('left'));

		if(num + 1 && left <= newLeft || !(num + 1) && left >= newLeft) {
			list.eq(index).css('left',newLeft);
			clearInterval(animateTimeId);
			aniFlag = 0;
		} else{
			list.eq(index).css('left',(left - 50*num)) ;
		}
	}
	animateTimeId = setInterval(go,10);
}
$('.double-north-prev').each(function(index, el) {
	el.onclick = function() {
		fanyeAnimate(-1,index);
	}
});
$('.double-north-next').each(function(index, el) {
	el.onclick = function() {
		fanyeAnimate(1,index);
	}
});

