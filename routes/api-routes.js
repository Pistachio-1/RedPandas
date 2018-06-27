const db = require("../models");

module.exports = function(app) {

    app.get("/api/users/", function(req,res){
        db.User.findAll({})
            .then(function(dbUser) {
            res.json(dbUser);
        });
    });
    app.get("/api/rooms/", function(req,res){
        db.Rooms.findAll({})
            .then(function(dbRooms) {
            res.json(dbRooms);
        });
    });
    app.get("/api/roomparticipants/", function(req,res){
        db.RoomParticipants.findAll({})
            .then(function(dbRoomParticipants) {
            res.json(dbRoomParticipants);
        });
    });
    app.get("/api/users/", function(req,res){
        db.User.findAll({})
            .then(function(dbUser) {
            res.json(dbUser);
        });
    });
}
