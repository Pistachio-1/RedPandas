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
});

$("#login-submit").on("click",function(){
	const username = $("#username").val().trim();
	const password = $("#password").val().trim();
	const getLogin = (username) => {
		$.get("/api/users/"+username, function(data){
			console.log("Welcome ", data)

		})
	}
	// if (username = password from mysql){
	// 	$("#incorrectUserPass").append("Welcome, " + username);
	// }
	// else {
	// 	$("#incorrectUserPass").append("Username or Password is incorrect. Please try again")
	// }

})

$("#register-submit").on("click", function(){
	// if (password = confirm password && no repeating username) {
	// 	post new username into database 
	// }
	// else if (username is taken) {
	// 	$("#tryAgain").append("this username is already taken")
	// }
	// else if( password !== confirm password) {
	// 	$("#tryAgain").append("passwords do not match")
	// }
});