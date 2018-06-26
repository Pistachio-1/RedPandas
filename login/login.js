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
