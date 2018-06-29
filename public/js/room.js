$(function() {
  $("#all-rooms").hide();
  $("#create-room").hide();

  $("#joinRoom").on("click",function(event){ 
    $("#all-rooms").show();
    initializeRows();
    $("#joinRoom").off();
  })

  $("#createRoom").on("click",function(event){
    $("#create-room").show();
    room();
  });

  function room() {  
    
    $("#room-submit").on("click", function(event){
      const room = $("#room_name").val().trim();
      const roomPass = $("#room_pass").val().trim();
      const roomConPass = $("#room_confirmpass").val().trim();
    event.preventDefault();
    if (!room || !roomConPass || !roomPass ) {
      $("#inputAlert").append("Please fill out the whole form.");
      return;
    }
    else if(roomPass !== roomConPass){
      $("#inputAlert").append("Passwords do not match. Please try again.");
      return;
    }
    else if(isNaN(roomPass)){
      $("#inputAlert").append("Password is not valid. Please input a 4 digit number");
      return;
    }
    const newRoom = {
      room_name: room,
      room_password: roomPass
    }

    console.log(newRoom);
    $("#all-rooms").append(newRoom)

    $.post("/api/rooms/", newRoom);
    $(location).attr('href', '/bracket')
  })
}
  
  function initializeRows() {
    const roomsToAdd = [];
    $.get("/api/rooms/", function(res){
      console.log(res);
    if (res.length !==0){
      for (let i = 0; i < res.length; i++) {
        roomsToAdd.push(createNewRow(res[i]));
      
        $("#all-rooms").append(roomsToAdd);
      }
      return res;
    }
    })
  }
  function createNewRow(res) {
    const list = $("<div>");
    list.attr("id", "roomList"+res.id)
    list.addClass("roomList")
    list.data("room", res.id);
    list.append("<p>" + res.room_name.toUpperCase() + "</p>");

    const enterPass = $("<form/>");
    //enterPass.attr("id", "enterPass");
    enterPass.addClass("enterPass")

    const form = $("<input/>", {type:"password"})
    form.attr({name:"roomcode"});
    form.attr({id:"enter-pass"+res.id});
    form.addClass("form-control");
    form.attr({placeholder:"Enter 4 digit password"});
    const submit = $("<input/>", {type: "submit"})
    submit.attr({id:"room-submit"+res.id});
    submit.addClass("form-control");
    submit.attr({value:"Submit"});

    enterPass.prepend(form);
    enterPass.append(submit);

    $(".roomList").on("click",function(res){
      console.log("i'm being clicked")
      $(this).append(enterPass)
    })
      
    $("#room-submit").on("click",function(){
      const passcode = $("#enter-pass").val().trim();
   
      if (passcode = res.room_password){
        $("#room").hide();
        $("#room-participants").show();
        roomParti();
      }
    })
    return list;
  }
  function roomParti(res) {
    
  }




  
})