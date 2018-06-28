const db = require("../models");

module.exports = function(app) {

    app.get("/api/users/", function(req,res){
        db.User.findAll({})
            .then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:username", function(req, res) {
        db.User.findOne({
          where: {
            user_name: req.params.id
          }
        }).then(function(dbUser) {
          console.log(dbUser);
          res.json(dbUser);
        });
    });

    app.post("/api/users/", function(req, res) {
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
          res.json(dbUser);
        });
    });
    app.put("/api/users", function(req, res) {
        db.User.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbUser) {
          res.json(dbUser);
        });
    });
}
