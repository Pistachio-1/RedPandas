const db = require("../models");

module.exports = (app) => {
    app.get("/api/brackets/", (req,res)=> {
        db.Brackets.findAll({
            include: [db.Rooms],
            include: [db.User]
        }).then((dbBrackets) => {
            res.json(dbBrackets);
          });
        }); 
    app.get("/api/brackets/:id", (req,res)=> {
        db.Brackets.findOne({
            where: {
              id: req.params.id
            },
            include: [db.Rooms],
            include: [db.User]
          }).then((dbBrackets) => {
            res.json(dbBrackets);
          });
        });
    app.post("/api/brackets/", (req, res) => {
        db.Brackets.create(req.body).then((dbBrackets) => {
          res.json(dbBrackets);
        });
    });

    app.put("/api/brackets/", (req, res) => {
        db.Brackets.update(
          req.body, {
            where: {
              user_name: req.body.user_name,
              Room_id: req.body.Room_id
            }
          }).then((dbBrackets) => {
          res.json(dbBrackets);
        });
    });
}