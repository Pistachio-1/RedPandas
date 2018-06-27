const path = require("path");

// Routes
// =============================================================

module.exports =function(app) {
    app.get("/bracket", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/bracket.html"));
    });
    
    app.get("/home", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    app.get("/room", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/room.html"));
    });
    
}