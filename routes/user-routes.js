const db = require("../models");

module.exports = function(app) {

    // app.get("/api/users/", function(req,res){
    //     db.User.findAll({
    //       include:[
    //         {
    //           model: db.Brackets
    //         }
    //       ]
    //     }).then(User => {
    //       const resObj = User.map(user => {
    //         return Object.assign(
    //           {},
    //           {
    //             id: user.id,
    //             user_name: user.username,
    //             user_password: user.password,
    //             email: user.email,
  
    //           }
    //         )
    //       })
    //     })
            

    app.get("/api/users/:username", (req, res) => {
        db.User.findOne({
          where: {
            user_name: req.params.id
          }
        }).then((dbUser) => {
          console.log(dbUser);
          res.json(dbUser);
        });
    });

    app.post("/api/users/", (req, res) => {
        console.log(req.body);
        db.User.create(req.body).then((dbUser) => {
          res.json(dbUser);
        });
    });
    app.put("/api/users", (req, res) => {
        db.User.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then((dbUser) => {
          res.json(dbUser);
        });
    });
}
