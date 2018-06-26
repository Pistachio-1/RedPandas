//16.A pick
$(".round16A").click(function(){
    var teamA1 = $(this).val();
    $("#selectedA").append(teamA1);
    $(".round2AC1").val(teamA1);
    $(".round16A").attr("disabled", "disabled");
});

//16.C pick 
$(".round16C").click(function(){
    var teamC = $(this).val();
    $("#selectedC").append(teamC);
    $(".round2AC2").val(teamC);
    $(".round16C").attr("disabled", "disabled");
});

//16.E pick 
$(".round16E").click(function(){
    var teamE = $(this).val();
    console.log(teamE)
    $("#selectedE").append(teamE);
    $(".round16E").attr("disabled", "disabled");
    $(".round2EG1").val(teamE)
});

//16.G pick
$(".round16G").click(function(){
    var teamG = $(this).val();
    console.log(teamG)
    $("#selectedG").append(teamG);
    $(".round16G").attr("disabled", "disabled");
    $(".round2EG2").val(teamG)
})

//16.B pick 
$(".round16B").click(function(){
    var teamB = $(this).val();
    console.log(teamB)
    $("#selectedB").append(teamB);
    $(".round16B").attr("disabled", "disabled");
    $(".round2BD1").val(teamB)
})

//16.D pick 
$(".round16D").click(function(){
    var teamD = $(this).val();
    console.log(teamD)
    $("#selectedD").append(teamD);
    $(".round16D").attr("disabled", "disabled");
    $(".round2BD2").val(teamD)
})

//16.F pick
$(".round16F").click(function(){
    var teamF = $(this).val();
    console.log(teamF)
    $("#selectedF").append(teamF);
    $(".round16F").attr("disabled", "disabled");
    $(".round2FH1").val(teamF)
})

//16.H pick
$(".round16H").click(function(){
    var teamH = $(this).val();
    console.log(teamH)
    $("#selectedH").append(teamH);
    $(".round16H").attr("disabled", "disabled");
    $(".round2FH2").val(teamH)
})

//8.A/C pick
$(".round2AC1").click(function(){
    var teamACPick = ($(this).val());
    $("#selectedAC").append(teamACPick);
    $(".round2AC1").attr("disabled", "disabled");
    $(".round2AC2").attr("disabled", "disabled");
    $("#round3AC").val(teamACPick)
})

$(".round2AC2").click(function(){
    var teamACPick = ($(this).val());
    $("#selectedAC").append(teamACPick);
    $(".round2AC1").attr("disabled", "disabled");
    $(".round2AC2").attr("disabled", "disabled");
    $("#round3AC").val(teamACPick)
})

//8.E/G pick
$(".round2EG1").click(function(){
    var teamEGPick = ($(this).val());
    $("#selectedEG").append(teamEGPick);
    $(".round2AC1").attr("disabled", "disabled");
    $(".round2AC2").attr("disabled", "disabled");
    $("#round3EG").val(teamEGPick)
})

$(".round2EG2").click(function(){
    var teamEGPick = ($(this).val());
    $("#selectedEG").append(teamEGPick);
    $(".round2EG1").attr("disabled", "disabled");
    $(".round2EG2").attr("disabled", "disabled");
    $("#round3EG").val(teamEGPick)
})

//8.B/D pick
$(".round2BD1").click(function(){
    var teamBDPick = ($(this).val());
    $("#selectedBD").append(teamBDPick);
    $(".round2BD1").attr("disabled", "disabled");
    $(".round2BD2").attr("disabled", "disabled");
    $("#round3BD").val(teamBDPick);
})

$(".round2BD2").click(function(){
    var teamBDPick = ($(this).val());
    $("#selectedBD").append(teamBDPick);
    $(".round2BD1").attr("disabled", "disabled");
    $(".round2BD2").attr("disabled", "disabled");
    $("#round3BD").val(teamBDPick)
})

//8.F/H pick

$(".round2FH1").click(function(){
    var teamFHPick = ($(this).val());
    $("#selectedFH").append(teamFHPick);
    $(".round2FH1").attr("disabled", "disabled");
    $(".round2FH2").attr("disabled", "disabled");
    $("#round3FH").val(teamFHPick)
})

$(".round2FH2").click(function(){
    var teamFHPick = ($(this).val());
    $("#selectedFH").append(teamFHPick);
    $(".round2FH1").attr("disabled", "disabled");
    $(".round2FH2").attr("disabled", "disabled");
    $("#round3FH").val(teamFHPick)
})

//4.A/C/E/G

$("#round3AC").click(function(){
    var teamACEGPick = ($(this).val());
    $("#selectedACEG").append(teamACEGPick);
    $("#round3AC").attr("disabled", "disabled");   
});

$("#round3EG").click(function() {
    var teamACEGPick = ($(this).val());
    $("#selectedACEG").append(teamACEGPick);
    $("#round3AC").attr("disabled", "disabled");   
});

//4.B/D/F/H

$("#round3BD").click(function() {
    var teamBDFHPick = ($(this).val());
    console.log(teamBDFHPick);
    $("#selectedBDFH").append(teamBDFHPick);
});

$("#round3FH").click(function() {
    var teamBDFHPick = ($(this).val());
    console.log(teamBDFHPick);
    $("#selectedBDFH").append(teamBDFHPick);
})



//final winner pick 

$("#round4ACEG").click(function() {
    $("#selectedACEG").append(" - chosen winner!")
});

$("#round4BDFH").click(function() {
    $("#selectedBDFH").append(" - chosen winner!")
});
