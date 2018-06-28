$(function() {
	GETMATCH.getMatch(GETMATCH.TODAYMATCHES, null, function(results) {
		let strResults = JSON.stringify(results).slice(0,100);
		$("#lead1").val=strResults;
	});

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
		
		function getLogin(username){
			$.get("/api/users/"+username, function(data){
				if(username === data.user_name && password === data.user_password){
					$("#incorrectUserPass").append("Welcome, " + username);
				}
				else {
					$("#incorrectUserPass").append("Username or Password is incorrect. Please try again")
				}
	
			})
		}
		getLogin();
	})
	
	
	$("#register-submit").on("click", function(){
		const user_name = $("#user_name").val().trim();
		const email = $("#email").val().trim();
		const pass_word = $("#pass_word").val().trim();
		const confPass = $("#confirm-password").val().trim();
		if (!user_name || !email || !pass_word || !confPass) {
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
	
		function register(newUser) {
			$.post("/api/users/", newUser)
				.then(function(data){
				console.log(data);
				alert("Adding new user")
			});
		}


		register();
	});
});
