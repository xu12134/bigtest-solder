$(document).ready(function(){
	var w = $(window).width();
	$('#register').width(w);
	$(window).resize(function(event) {
		var w = $(window).width();
		$('#register').width(w);
	});	
	$('#register-name').blur(function(event) {
		var username = $(this).val();
		var usernameReg = /^\w+@((qq|126|163|sina|hotmail|gmail|sohu|139)\.com|sina\.cn|yeah\.net)$/;
		var usernameTel = /^1[34568][0-9]{9}$/;
		if(username){
			if(!usernameReg.test(username) && !usernameTel.test(username)){
				alert('请输入格式正确的常用邮箱或手机号');
				$(this).val('');
				return false;
			}
		}
	});
	$('#register-pwd').blur(function(event) {
		var password = $(this).val();
		var passwordReg = /^.{6,16}$/;
		if(password){
			if(!passwordReg.test(password)){
				alert('请输入6-16位的密码');
				$(this).val('');
				return false;
			}
		}
	});
	$('#confirm-register-pwd').blur(function(event) {
		var randomInput = $('#register-pwd').val();
		var cpwd = $(this).val();
		if(randomInput){
			if(randomInput != cpwd){
				alert('请输入相同密码');
				$(this).val('');
				return false;
			}
		}
	});	
	$('#submit-register').click(function(event) {
		var username = $('#register-name').val();
		if(!username){
			if($('.usernameMsg').length != 0)
				return;
			alert('请输入邮箱账号');
			return;
		}		
		var password = $('#register-pwd').val();
		if(!password){
			if($('.passwordMsg').length != 0)
				return;
			alert('请输入密码');
			return;
		}
		if(!$('#confirm-register-pwd').val()){
			if($('.randomMsg').length != 0)
				return;
			alert('请输入相同密码');
			return;
		}
		function User(username,userPwd){
			this.username = username;
			this.userPwd = userPwd;
		};
		var u = new User(username,password);
		if($('.msg').length == 0){
			localStorage.setItem(username,JSON.stringify(u));
			if(localStorage.getItem(username)){
				alert("注册成功！");
				alert("快去登录吧！");
				$('#register').hide();
				$('#login').show();
			} 
		}
		
	});
});
