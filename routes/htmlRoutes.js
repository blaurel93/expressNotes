var path = require("path");
noteCount = 0;
module.exports = function (app) {

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // app.get("/api/notes", function(req, res) {
    //     res.sendFile(path.join(_dirname, "../db/db.json"))
    // })

};