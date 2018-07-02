$(function () {
	function matchesCallback(results, html_dest) {
		if (results.length > 0) {
			let status = "";
			results.forEach(r => {
				let away = r.away_team.country;
				let away_goals = r.away_team.goals;
				let home = r.home_team.country;
				let home_goals = r.home_team.goals;
				switch (r.status) {
					case "completed":
						status = "FINAL";
						break;
					case "future":
						status = "PENDING";
						break;
					case "in progress":
						status = "TIME: " + r.time;
						break;
					default:
						status = r.status;
						break;
				};

				let matchStatus = "";
				if (status === "PENDING") {
					matchStatus = away + " VS. " + " " + home;
				} else {
					matchStatus = away + " (" + away_goals + ") vs. (" + home_goals + ") " + home;
				}

				// add country flags
				let imgAway = document.createElement("img");
				imgAway.setAttribute("src", "images/countryflags/" + away.toLowerCase() + ".png");
				imgAway.classList.add("countryFlag");

				let imgHome = document.createElement("img");
				imgHome.setAttribute("src", "images/countryflags/" + home.toLowerCase() + ".png");
				imgHome.classList.add("countryFlag");

				matchStatus = imgAway.outerHTML + " " + matchStatus + " " + imgHome.outerHTML + "   " + status;
				html_dest.append(matchStatus + "<br><br>");
			})
		} else {
			html_dest.append("No matches in progress at this time.");
		}
	};
	// let html_dest = $("#todays-results");
	getMatch(TODAYMATCHES, null)
		.then(results => matchesCallback(results, $("#todays-results")));

	getMatch(TOMORROWMATCHES, null)
		.then(results => matchesCallback(results, $("#tomorrows-matches")));

	getMatch(CURRENTMATCHES, null)
		.then(results => matchesCallback(results, $("#current-results")));

	$("#login-form").show();
	$("#register-form").hide();
	$('#login-form-link').click( (event) => {
		$("#register-form").hide();
		$("#login-form").show();
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
	$('#register-form-link').click( (event) => {
		$("#login-form").hide();
		$("#register-form").show();
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
		const username = $("#user_name").val().trim();
		const email = $("#email").val().trim();
		const password = $("#pass_word").val().trim();
		const confPass = $("#confirm-password").val().trim();
		const roomSelect = $("#room").val();


		$.get("/api/rooms", (data) => {
			console.log(data)
			if(!data.length){
				window.location.href="/room"
			}
			const rowsToAdd= [];
			for(let i=0; i<data.length; i++){
				const listOption = $("<option>")
				console.log(data[i].id)
				listOption.attr("value", data[i].id);
				listOption.text(data[i].room_name);
				rowsToAdd.push(listOption);
			}
			// roomSelect.empty();
			console.log(roomSelect);
			roomSelect.append(rowsToAdd);
			roomSelect.val(data.id);
			console.log(roomSelect);
	
	
		});
	});

	const modal = document.getElementById('myModal');
	const login = document.getElementById("login-start");
	const span = document.getElementsByClassName("close")[0];
	login.onclick =  () => {
		modal.style.display = "block";
	}
	span.onclick =  () => {
		modal.style.display = "none";
	}
	window.onclick =  (event) => {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}


	$("#login-submit").on("click",  () => {
		const username = $("#username").val().trim();
		const password = $("#password").val().trim();
		$.get("/api/users/" + id,  (data) => {
			console.log(data)
			for(let i=0; i<data.length; i++){
				if (err) {
					throw err;
				}
				else if (username === data.user_name && password === data.user_password) {
					$("#welcomeUser").append("Welcome, " + username);
				}
				else {
					$("#incorrectUserPass").append("Username or Password is incorrect. Please try again")
				}
			}

		})

	})
	
	
	$("#register-submit").on("submit",  (event) => {
		event.preventDefault();
		if (!username || !email || !password || !confPass || !roomSelect) {
			$("#tryAgain").append("Please fill out the whole form.")
			return;
		}
		else if (password !== confPass) {
			$("#tryAgain").append("Passwords do not match. Please try again.")
		}
		const newUser = {
			user_name: username,
			email: email,
			user_password: password,
			RoomId: roomSelect.val()
		};

		console.log(newUser)

		$.post("api/users/", newUser)
			.then(function() {
				window.location.href = "/room";
		});

	});		

});
