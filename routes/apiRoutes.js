var noteData = require("../db/db.json");

// console.log(noteData);

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    app.post("/api/notes", function (req, res) {
        noteData.push(req.body);
        res.json(true);
    });
    // app.delete("/api/notes/0", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../db/db.json"))
    // });
    // app.delete("")
    app.delete("/api/notes/:id", function (req, res) {
        // console.log(req.body);
        noteData.splice(req.body);
        res.json(true);
    });


}
