const db = require("../models");

module.exports = (app , db) => {

  app.get("/api/rooms/", (req, res)=>{
    db.Rooms.findAll({
      include: [
        {
          model: db.User,
          include: [
            {
              mdoel: db.Brackets
            }
          ]
        }
      ]
    }).then(Rooms => {
      const resobj = Rooms.map(room => {
        return Object.assign(
          {},
          {
            room_id: room.id,
            room_name: room.roomname,
            room_password: room.password,
            room_participants: room.User.map(user => {
              return Object.assign(
                {}, 
                {
                  user_id: user.id,
                  room_id: user.room_id,
                  user_name: user.username,
                  user_password: user.password,
                  email: email,
                  brackets: user.Brackets.map(bracket => {
                    return Object.assign(
                      {},
                      {
                        bracket_id: bracket.id,
                        user_id:bracket.user_id,
                        round16_game_1 : bracket.r16g1,
                        round16_game_2 : bracket.r16g2,
                        round16_game_3 : bracket.r16g3,
                        round16_game_4 : bracket.r16g4,
                        round16_game_5 : bracket.r16g5,
                        round16_game_6 : bracket.r16g6,
                        round16_game_7 : bracket.r16g7,
                        round16_game_8 : bracket.r16g8,
                        round8_game_1 : bracket.r8g1,
                        round8_game_2 : bracket.r8g2,
                        round8_game_3 : bracket.r8g3,
                        round8_game_4 : bracket.r8g4,
                        round4_game_1 : bracket.r4g1,
                        round4_game_2 : bracket.r4g2,
                        champion: bracket.champ
                      }
                    )
                  })
                }
              )
            })
          }
        )
      });
      res.json(resObj)
    });
  });

    app.post("/api/rooms/",(req, res) => {
        console.log(req.body);
        const created_at = new Date();
        const newRoom = req.body.room;
        db.Rooms.create({
          room_id: newRoom.id, 
          room_password: newRoom.roomname,
          room_password: newRoom.password
        }).then((room) => {
          res.json(room);
        });
    });
    // app.put("/api/rooms/",(req, res) => {
    //     db.Rooms.update(
    //       req.body,
    //       {
    //         where: {
    //           id: req.body.id
    //         }
    //       }).then((dbRooms) => {
    //       res.json(dbRooms);
    //     });
    // });
    app.post("/api/users/", (req, res) => {
      console.log(req.body);
      const created_at = new Date();
      const newUser = req.body.user;
      db.User.create({
        user_id: newUser.id,
        room_id: newUser.room_id,
        user_name: newUser.username,
        user_password: newUser.password,
        email: newUser.email,
        created_at: created_at
      }).then((user) => {
        res.json(user);
      });
  });

}