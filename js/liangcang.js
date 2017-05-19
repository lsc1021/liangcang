$("#phone").blur(function(){
			$reg =/^[\w]{3,20}$/;
			$str=$("#phone").val();
			if($reg.test($str)==true){
				$("#formart_phone").hide();
			}else{
				$("#formart_phone").show();
			}
		})
		$("#pwd").blur(function(){
			var reg1=/^[\w]{6,20}$/;
			var str1=$("#pwd").val();
			if(reg1.test(str1)==true){
				$("#formart_password").hide();
			}else{
				$("#formart_password").show();
			}
		})
		$("#pwd-1").blur(function(){
			if($("#pwd").val()==$(this).val()){
				$("#formart_password_1").hide();
			}else{
				$("#formart_password_1").show();
			}
		})
		$("#chek").click(function(){
			var check=$("#chek").prop("checked");
			if (check) {
				$("#zhucebtn").attr("disabled",false)
				$("#formart_check").hide();
			} else{
				$("#zhucebtn").attr("disabled",true)
				$("#formart_check").show();
			}
		})
		$("#zhucebtn").click(function(){
			var str=$("#phone").val();
			var str1=$("#pwd").val();
			$.post("http://lc.shudong.wang/api_user.php",
			{"status":"register","username":str,"password":str1},
			function(data){
				if(data.code==0){
					alert(data.message);
					location.href="denglu.html";
				}else{
					alert(data.message);
				}
			},"json")
		})