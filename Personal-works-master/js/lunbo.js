$(document).ready(function(){
    var curIndex = 0; 
    itemLength = $('.item-list li').length;
    var autoChange = setInterval(function(){ 
        if(curIndex < itemLength - 3){ 
            curIndex ++; 
        }else{ 
            curIndex = 0;
        }
        changeTo(curIndex);  
    },2000);

    $('.owl-prev').click(function(event) {
        if (curIndex > 0) {
            curIndex --;
        }else {
            curIndex = itemLength - 3;
        }
        changeTo(curIndex);
    });
    $('.owl-next').click(function(event) {
        if (curIndex < itemLength - 3) {
            curIndex ++;
        }else {
            curIndex = 0;
        }
        changeTo(curIndex);
    });
    function changeTo(index){ 

        var goLeft = index * 384;

        $('.item-list').animate({left: '-' + goLeft + 'px'},500);
    }
}); 