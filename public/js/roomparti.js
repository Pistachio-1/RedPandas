$(function(){
    $.get("/api/roomparticipants/:room", function(data){
        console.log(data);
        const roomparti = data
       console.log(roomparti[0].RoomId)
       console.log(roomparti.UserId);
    }).then(
        $.get("api/rooms/", function(roomparti){
            console.log(roomparti);
        })
    )

})