$(document).ready(function(){
	var w = $(window).width();
	$('#login').width(w);

	$(window).resize(function(event) {
		var w = $(window).width();
		$('#login').width(w);
	});
	$('#submit-login').click(function(event){
		var username = $('#login-name').val();
		var password = $('#login-pwd').val();
		if(!localStorage.getItem(username)){
			alert('请输入格式正确的邮箱/手机号');
			$('#login-name').val('');
			return;
		}else{
			if(password != JSON.parse(localStorage.getItem(username)).userPwd){
				alert('请输入正确的密码');
				$('#login-pwd').val('');
				return;
			}
			else{
				alert('登录成功');
				$('#login').css('display','none');
			}
		}					
	});
});