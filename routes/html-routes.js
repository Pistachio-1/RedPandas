const path = require("path");

// Routes
// =============================================================

module.exports =function(app) {
    app.get("/bracket", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/bracket.html"));
    });
}