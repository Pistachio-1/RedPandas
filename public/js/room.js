$(function() {
  $("#all-rooms").hide();
  $("#create-room").hide();

  $("#joinRoom").on("click",(event)=> {
    $("#all-rooms").show();
    // initializeRows();
    initializeUsers();
    $("#joinRoom").off();
  })

  $("#createRoom").on("click",(event) => {
    $("#create-room").show();
    room();
  });

   function room() {
    
    $("#room-submit").on("click", (event) => {
      const room = $("#room_name").val().trim();
      const roomPass = $("#room_pass").val().trim();
      const roomConPass = $("#room_confirmpass").val().trim();
    event.preventDefault();
    if (!user || !room || !roomConPass || !roomPass ) {
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

    // console.log(newRoom);
    $("#all-rooms").append(newRoom)

    $.post("/api/rooms/", newRoom);
      initializeUsers();
    })
  }
  
  function initializeUsers() {
    
    $.get("/api/rooms/", (res) => {
      $.get("/api/users/", (data) => {
        console.log(res);
        console.log(data);
        for(let i = 0; i < res.length; i++) {
          const list = $("<div>");
          list.attr("id", "roomList"+res[i].id)
          list.addClass("roomList");
          list.data("room", res[i].id);
          list.append("Room:   <span> " + res[i].room_name.toUpperCase() + " </span>")

          $("#all-rooms").append(list)

          $("#roomList"+res[i].id).on("click", () => {
            $("#roomList"+res[i].id).off();
            const enterPass = $("<form/>");
            enterPass.attr("id", "enterPass");
            enterPass.addClass("enterPass")
            const form = $("<input/>", {type:"password"})
            form.attr({name:"roomcode"});
            form.attr({id:"enter-pass"+res[i].id});
            form.addClass("form-control");
            form.attr({placeholder:"Enter 4 digit password"});
            const submit = $("<input/>", {type: "button"})
            submit.attr({id:"room-submit"+res[i].id});
            submit.addClass("form-control");
            submit.attr({value:"Submit"});
  
            enterPass.prepend(form);
            enterPass.append(submit);

            list.append(enterPass)    

            $("#room-submit"+res[i].id).on("click", () =>{
                const passcode = $("#enter-pass"+res[i].id).val();
                const add = $("<div>")
                list.append(add)
               
                if (passcode == res[i].room_password){
                  console.log(res[i].room_password, passcode)
                  enterPass.hide();
                  const userList = $("<div>")
                  userList.append("Users:   <br>")

                  for(let p = 0; p < data.length; p++){
                      if(data[p].Room.id === res[i].id){
                        userList.attr("id", "user"+data[p].id);
                        userList.addClass("user")
                        userList.append("<ul>" + data[p].user_name.toUpperCase() + "</ul>")
                        list.append(userList)

                        $("#user"+data[p].id).on("click", () => {
                          $(location).attr('href', '/bracket')

                        })
                        
                      }
          
                  };
                 
                }
                else {
                  enterPass.prepend("Enter the 4 digit code")
                }
                    
              })  
            })
      }
      return data;
    })
    return res;
  })
  }
  
})
