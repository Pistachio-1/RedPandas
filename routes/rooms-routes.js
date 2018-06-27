const db = require("../models");

module.exports = function(app) {

    app.get("/api/rooms/", function(req,res){
        db.Rooms.findAll({})
            .then(function(dbRooms) {
            res.json(dbRooms);
        });
    });
    app.get("/api/rooms/:roomname", function(req, res) {
        db.Rooms.findOne({
          where: {
            room_name: req.params.id
          }
        }).then(function(dbRooms) {
          console.log(dbRooms);
          res.json(dbRooms);
        });
    });
    app.post("/api/rooms/", function(req, res) {
        console.log(req.body);
        db.Rooms.create(req.body).then(function(dbRooms) {
          res.json(dbRooms);
        });
    });
    app.put("/api/rooms/", function(req, res) {
        db.Rooms.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbRooms) {
          res.json(dbRooms);
        });
    });

}