$(function() {
  $("#all-rooms").hide();
  $("#create-room").hide();

  $("#joinRoom").on("click",function(event){ 
    $("#all-rooms").show();
    initializeRows();
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

    $.post("/api/rooms/", newRoom).then(initializeRows)
  })
}
  
  function initializeRows() {
    const roomsToAdd = [];
    $.get("/api/rooms/", function(res){
      console.log(res);
    for (var i = 0; i < res.length; i++) {
      roomsToAdd.push(createNewRow(res[i]));
    
    $("#all-rooms").append(roomsToAdd);

    function createNewRow() {
      console.log(res);
      var newTr = $("<ul>");
      newTr.data("room", res);
      newTr.append("<li>" + res[i].room_name.toUpperCase() + "</li>");
      return newTr;
    } 
    }

  })
  }
 
})