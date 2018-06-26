const db = require("../models");

module.exports = function(app) {

    app.get("/api/users/", function(req,res){
        db.Post.findAll({})
        .then(function(dbPost) {
          res.json(dbPost);
        });
    })
    app.get("/api/users/usernames/:username", function(req, res) {
      db.User.findOne({
          where:{
              user_name: req.params.usernames
          }
      })
        .then(function(dbUser) {
          res.json(dbUser);
        });
    });
}
