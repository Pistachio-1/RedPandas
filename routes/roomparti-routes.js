const db = require("../models");

module.exports = function(app) {
    app.get("/api/roomparticipants/", function(req,res){
        db.RoomParticipants.findAll({})
            .then(function(dbRoomParticipants) {
            res.json(dbRoomParticipants);
        });
    });
    app.post("/api/roomparticipants/", function(req, res) {
        console.log(req.body);
        db.RoomParticipants.create(req.body).then(function(dbRoomParticipants) {
          res.json(dbRoomParticipants);
        });
    });
    app.put("/api/roomparticipants/", function(req, res) {
        db.RoomParticipants.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbRoomParticipants) {
          res.json(dbRoomParticipants);
        });
    });
}