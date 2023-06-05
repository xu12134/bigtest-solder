$('#register-btn').click(function(event) {
	$('#register').css('display','block');
});
$('#login-btn').click(function(event) {
	$('#login').css('display','block');
});
$('#btn2').click(function(event) {
	$('#register').css('display','none');
	$('#login').css('display','block');
});
$('#btn').click(function(event) {
	$('#login').css('display','none');
	$('#register').css('display','block');
});
$('.title').eq(0).click(function(event){
    $('.title').eq(1).removeClass('active');
    $(this).addClass('active');
});
$('.title').eq(1).click(function(event){
    $('.title').eq(0).removeClass('active');
    $(this).addClass('active');
});