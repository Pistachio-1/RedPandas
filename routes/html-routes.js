const path = require("path");

// Routes
// =============================================================

module.exports =function(app) {
    app.get("/bracket", function(req,res) {
        res.render(path.join(__dirname, "bracket.handlebars"));
    })
}