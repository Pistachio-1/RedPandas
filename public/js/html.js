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
    
    // $("#login-submit").on("click",function(){
        // let username = $("#username").val().trim();
		// const getLogin = (username) => {
		// 	if(username){
		// 		username = "/username/" + username;
		// 	}
		// 	$.get("/api/users"+ username, function(data){
		// 		console.log("Welcome" + username);

		// 	})
		// }
        // if (username = password from mysql){
        //     $("#welcomeUser").append("Welcome, " + username)
        // }
        // else {
        //     $("#incorrectUserPass").append("Username or Password is incorrect. Please try again")
        // }

    // })

    // $("#register-submit").on("click", function(){
        // if (password = confirm password && no repeating username) {
        //     post new username into database 
        // }
        // else if (username is taken) {
        //     $("#noMatch").append("this username is already taken")
        // }
        // else if( password !== confirm password) {
        //     $("#noMatch").append("passwords do not match")
        // }
    // });

	const modal = document.getElementById('myModal');
	// Get the button that opens the modal
	const login = document.getElementById("login-start");
	// Get the <span> element that closes the modal
	const span = document.getElementsByClassName("close")[0];	
	// When the user clicks on the button, open the modal 
	login.onclick = function() {
		modal.style.display = "block";
	}
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
});
