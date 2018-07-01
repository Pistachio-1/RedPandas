
const db = require("../models");

module.exports = (app) =>{

  app.get("/api/rooms", (req, res) => {
    let query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Rooms.findAll({
      where: query
    }).then((dbRooms) => {
      res.json(dbRooms);
    });
  });

  app.get("/api/rooms/:id", (req, res) => {
    db.Rooms.findOne({
      where: {
        id: req.params.id
      }
    }).then((dbRooms) => {
      console.log(dbRooms);
      res.json(dbRooms);
    });
  });

  app.post("/api/rooms", (req, res) => {
    db.Rooms.create(req.body).then((dbRooms) => {
      res.json(dbRooms);
    });
  });

  app.delete("/api/rooms/:id", (req, res) => {
    db.Rooms.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbRooms) => {
      res.json(dbRooms);
    });
  });

  app.put("/api/rooms", (req, res) => {
    db.Rooms.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then((dbRooms) => {
      res.json(dbRooms);
    });
  });

  app.get("/api/roomslist", (req, res) => {
    db.Rooms.findAll({}).then(dbRooms => {
  
        const roomArr = [];
  
        for(let i = 0; i < dbRooms.length; i++){
  
            const roomData = dbRooms[i].dataValues;
  
            const room = {
                id: roomData.id,
                name: roomData.product_name,
                price: roomData.price,
                description: roomData.description,
            }
            roomArr.push(room);
        }
  
        res.render('inventory', {roomArr})
    });
  });
};