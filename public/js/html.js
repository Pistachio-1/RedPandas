$(function () {

	let html_dest = $("#parallax2-content");
	function matchesCallback(resp) {
		console.log(resp);
		html_dest.val = "";
		resp.forEach(r => {
			console.log(r);
			let away = r.away_team.country;
			let away_goals = r.away_team.goals;
			let home = r.home_team.country;
			let home_goals = r.home_team.goals;
			let status = (r.status === "completed") ? "FINAL" : r.status;

			let matchStatus = away + " (" + away_goals + ") vs. (" + home_goals + ") " + home + "   " + status;
			console.log(matchStatus);
			html_dest.append(matchStatus + "<br>");
		});
	};
	getMatch(TODAYMATCHES, null).then(matchesCallback);


	$("#login-form").show();
	$("#register-form").hide();
	$('#login-form-link').click(function (event) {
		$("#register-form").hide();
		$("#login-form").show();
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
	$('#register-form-link').click(function (event) {
		$("#login-form").hide();
		$("#register-form").show();
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	const modal = document.getElementById('myModal');
	const login = document.getElementById("login-start");
	const span = document.getElementsByClassName("close")[0];
	login.onclick = function () {
		modal.style.display = "block";
	}
	span.onclick = function () {
		modal.style.display = "none";
	}
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

	$("#login-submit").on("click", function () {
		const username = $("#username").val().trim();
		const password = $("#password").val().trim();
		$.get("/api/users/"+username, function(data){
			console.log(data)
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
		else if (password !== confPass) {
			$("#tryAgain").append("Passwords do not match. Please try again.")
		}
		const newUser = {
			user_name: username,
			email: email,
			user_password: password
		};
		console.log(newUser)
	
		$.post("api/users/", newUser)
			.then($.get("/api/users/"+username, function(res){
				if(err){
					throw err;
				}
				else {
					console.log(res)
					$("#welcomeUser").append("Welcome, " + res.user_name);
				}
			})
			
		)
	});


});
