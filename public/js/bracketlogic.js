//16.A pick
$(".round16A").click(function(){
    var teamA1 = $(this).val();
    $("#selectedA").append(teamA1);
    $(".round2AC1").val(teamA1);
    $(".round16A").attr("disabled", "disabled");
    $.ajax ({
        url:'/api/brackets/',
        data: {round16_game_1: teamA1,
        user_name: "alliehahn"},
        type: 'post',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
});

//16.C pick 
$(".round16C").click(function(){
    var teamC = $(this).val();
    $("#selectedC").append(teamC);
    $(".round2AC2").val(teamC);
    $(".round16C").attr("disabled", "disabled");
    $.ajax ({
        url:'/api/brackets/',
        data: {round16_game_2: teamC},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
});

//16.E pick 
$(".round16E").click(function(){
    var teamE = $(this).val();
    console.log(teamE)
    $("#selectedE").append(teamE);
    $(".round16E").attr("disabled", "disabled");
    $(".round2EG1").val(teamE)
    $.ajax ({
        url:'/api/brackets/',
        data: {round16_game_3: teamE},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
});

//16.G pick
$(".round16G").click(function(){
    var teamG = $(this).val();
    console.log(teamG)
    $("#selectedG").append(teamG);
    $(".round16G").attr("disabled", "disabled");
    $(".round2EG2").val(teamG)
    $.ajax ({
        url:'/api/brackets/',
        data: {round16_game_4: teamG},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

//16.B pick 
$(".round16B").click(function(){
    var teamB = $(this).val();
    console.log(teamB)
    $("#selectedB").append(teamB);
    $(".round16B").attr("disabled", "disabled");
    $(".round2BD1").val(teamB);
    $.ajax ({
        url:'/api/brackets/',
        data: {round16_game_5: teamB},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

//16.D pick 
$(".round16D").click(function(){
    var teamD = $(this).val();
    console.log(teamD)
    $("#selectedD").append(teamD);
    $(".round16D").attr("disabled", "disabled");
    $(".round2BD2").val(teamD);
    $.ajax ({
        url:'/api/brackets/',
        data: {round16_game_6: teamD},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

//16.F pick
$(".round16F").click(function(){
    var teamF = $(this).val();
    console.log(teamF)
    $("#selectedF").append(teamF);
    $(".round16F").attr("disabled", "disabled");
    $(".round2FH1").val(teamF);
    $.ajax ({
        url:'/api/brackets/',
        data: {round16_game_7: teamF},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

//16.H pick
$(".round16H").click(function(){
    var teamH = $(this).val();
    console.log(teamH)
    $("#selectedH").append(teamH);
    $(".round16H").attr("disabled", "disabled");
    $(".round2FH2").val(teamH);
    $.ajax ({
        url:'/api/brackets/',
        data: {round16_game_8: teamH},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
        }
    });
})

//8.A/C pick
$(".round2AC1").click(function(){
    var teamACPick = ($(this).val());
    $("#selectedAC").append(teamACPick);
    $(".round2AC1").attr("disabled", "disabled");
    $(".round2AC2").attr("disabled", "disabled");
    $("#round3AC").val(teamACPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round8_game_1: teamACPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

$(".round2AC2").click(function(){
    var teamACPick = ($(this).val());
    $("#selectedAC").append(teamACPick);
    $(".round2AC1").attr("disabled", "disabled");
    $(".round2AC2").attr("disabled", "disabled");
    $("#round3AC").val(teamACPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round8_game_1: teamACPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

//8.E/G pick
$(".round2EG1").click(function(){
    var teamEGPick = ($(this).val());
    $("#selectedEG").append(teamEGPick);
    $(".round2EG1").attr("disabled", "disabled");
    $(".round2EG2").attr("disabled", "disabled");
    $("#round3EG").val(teamEGPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round8_game_2: teamEGPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

$(".round2EG2").click(function(){
    var teamEGPick = ($(this).val());
    $("#selectedEG").append(teamEGPick);
    $(".round2EG1").attr("disabled", "disabled");
    $(".round2EG2").attr("disabled", "disabled");
    $("#round3EG").val(teamEGPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round8_game_2: teamEGPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

//8.B/D pick
$(".round2BD1").click(function(){
    var teamBDPick = ($(this).val());
    $("#selectedBD").append(teamBDPick);
    $(".round2BD1").attr("disabled", "disabled");
    $(".round2BD2").attr("disabled", "disabled");
    $("#round3BD").val(teamBDPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round8_game_3: teamBDPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

$(".round2BD2").click(function(){
    var teamBDPick = ($(this).val());
    $("#selectedBD").append(teamBDPick);
    $(".round2BD1").attr("disabled", "disabled");
    $(".round2BD2").attr("disabled", "disabled");
    $("#round3BD").val(teamBDPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round8_game_3: teamBDPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

//8.F/H pick

$(".round2FH1").click(function(){
    var teamFHPick = ($(this).val());
    $("#selectedFH").append(teamFHPick);
    $(".round2FH1").attr("disabled", "disabled");
    $(".round2FH2").attr("disabled", "disabled");
    $("#round3FH").val(teamFHPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round8_game_4: teamFHPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

$(".round2FH2").click(function(){
    var teamFHPick = ($(this).val());
    $("#selectedFH").append(teamFHPick);
    $(".round2FH1").attr("disabled", "disabled");
    $(".round2FH2").attr("disabled", "disabled");
    $("#round3FH").val(teamFHPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round8_game_4: teamFHPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });
})

//4.A/C/E/G

$("#round3AC").click(function(){
    var teamACEGPick = ($(this).val());
    $("#selectedACEG").append(teamACEGPick);
    $("#round3AC").attr("disabled", "disabled");
    $("#round3EG").attr("disabled", "disabled");
    $("#round4ACEG").val(teamACEGPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round4_game_1: teamACEGPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });      
});

$("#round3EG").click(function() {
    var teamACEGPick = ($(this).val());
    $("#selectedACEG").append(teamACEGPick);
    $("#round3AC").attr("disabled", "disabled");  
    $("#round3EG").attr("disabled", "disabled");
    $("#round4ACEG").val(teamACEGPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round4_game_1: teamACEGPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });     
});

//4.B/D/F/H

$("#round3BD").click(function() {
    var teamBDFHPick = ($(this).val());
    $("#selectedBDFH").append(teamBDFHPick);
    $("#round3BD").attr("disabled", "disabled");  
    $("#round3EF").attr("disabled", "disabled"); 
    $("#round4BDFH").val(teamBDFHPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round4_game_2: teamBDFHPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });    
});

$("#round3FH").click(function() {
    var teamBDFHPick = ($(this).val());
    console.log(teamBDFHPick);
    $("#selectedBDFH").append(teamBDFHPick);
    $("#round3BD").attr("disabled", "disabled");  
    $("#round3EF").attr("disabled", "disabled"); 
    $("#round4BDFH").val(teamBDFHPick);
    $.ajax ({
        url:'/api/brackets/',
        data: {round4_game_2: teamBDFHPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });   
})



//final winner pick 

$("#round4ACEG").click(function() {
    var championPick = ($(this).val());
    $("#selectedACEG").append(" - chosen winner!");
    $("#round4ACEG").attr("disabled", "disabled"); 
    $("#round4BDFH").attr("disabled", "disabled"); 
    $.ajax ({
        url:'/api/brackets/',
        data: {champion: championPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });   
});

$("#round4BDFH").click(function() {
    var championPick = ($(this).val());
    $("#selectedBDFH").append(" - chosen winner!")
    $("#round4ACEG").attr("disabled", "disabled"); 
    $("#round4BDFH").attr("disabled", "disabled"); 
    $.ajax ({
        url:'/api/brackets/',
        data: {champion: championPick},
        type: 'put',
        success: function(response) {
        },
        error : function(e) {
            alert("data not sent")
        }
    });  
});
