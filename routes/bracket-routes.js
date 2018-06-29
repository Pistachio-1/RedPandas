const db = require("../models");

module.exports = function(app) {

    app.get("/api/brackets/", function(req,res){
        db.Brackets.findAll({})
            .then(function(dbBrackets) {
            res.json(dbBrackets);
        });
    });
    app.post("/api/brackets/", function(req, res) {
        console.log(req.body);
        db.Brackets.create(req.body).then(function(dbBrackets) {
          res.json(dbBrackets);
        });
    });
    app.put("/api/brackets/", function(req, res) {
        db.Brackets.update(
          req.body, {
            where: {
              user_name: "allison"
            }
          }).then(function(dbBrackets) {
          res.json(dbBrackets);
        });
    });
}