$(function() {
	$("#login-form").show();
	$("#register-form").hide();
    $('#login-form-link').click(function(event) {
		$("#register-form").hide();
		$("#login-form").show();
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
	$('#register-form-link').click(function(event) {
		$("#login-form").hide();
		$("#register-form").show();
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	const modal = document.getElementById('myModal');
	const login = document.getElementById("login-start");
	const span = document.getElementsByClassName("close")[0];
	login.onclick = function() {
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

	$("#login-submit").on("click",function(){
		const username = $("#username").val().trim();
		const password = $("#password").val().trim();
		getLogin();
	
	})
	
	$("#register-submit").on("click", function(){
		const username = $("#user_name").val().trim();
		const email = $("#email").val().trim();
		const password = $("#pass_word").val().trim();
		const confPass = $("#confirm-password").val().trim();
		if (!username || !email || !password || !confPass) {
			$("#tryAgain").append("Please fill out the whole form.")
			return;
		}
		else if(password !== confPass){
			$("#tryAgain").append("Passwords do not match. Please try again.")
		}
		const newUser = {
			user_name: username,
			email: email,
			user_password: password
		};
		console.log(newUser)
	
		// $.ajax ({
		// 	url:'/api/users/',
		// 	data: {	
		// 		user_name: username,
		// 		email: email,
		// 		user_password: password
		// 		},
		// 	type: 'post',
		// 	success: function(response) {
		// 		$("#welcomeUser").append("Welcome, " + username);
		// 	},
		// 	error : function(err) {
		// 		alert("data not sent");
		// 		throw err;
		// 	}
		// });
		$.get("api/users/", newUser).then(getLogin)
	});

	function getLogin(){
		$.get("/api/users/"+username, function(data){
			if(err){
				throw err;
			}
			else if (username === data.user_name && password === data.user_password){
				$("#welcomeUser").append("Welcome, " + username);
			}
			else {
				$("#incorrectUserPass").append("Username or Password is incorrect. Please try again")
			}

		})
	}
});
