var bannerList = document.getElementById('bannerList');
var banner = bannerList.getElementsByTagName('li');
var banBtncontItem = bannerList.getElementsByTagName('ul')[0];
var banBtn = banBtncontItem.getElementsByTagName('li');
var bannerTimeId;
for (var i = 0;i < banBtn.length;i ++) {
	banner[i].style.background = 'url(images/' + (i + 1) + '.jpg) round';
}
function go(index) {
	move();
	function move() {
		
		if (index > 4)
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