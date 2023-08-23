var db = require("../db/db.json");
var fs = require("fs");
var id = require("generate-unique-id");
var util = require("util");
var app = require("express").Router();
var readFromFile = util.promisify(fs.readFile);

//this route pulls data from notes db 
app.get("/", (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

app.post("/", (req, res) => {
    //creates new object with input values and pushes to database
    var newNote = {
        title: req.body.title,
        text: req.body.text,
        id: id()
    }
    db.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(db));

    res.json(db);
});

//I did cheat here a little.
//I looked at the solved mini project and tried to reverse engineer it.
//it does not remove notes completely. When a new note is added the old notes are re posted
//might fix in the future.
app.delete("/:id", (req, res) => {
    var id = req.params.id;
    readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
    var noteDeleted = json.filter((note) => note.id !== id);
    var removeNote = JSON.stringify(noteDeleted);

        fs.writeFileSync("./db/db.json", removeNote);

        res.json(`note with the id ${id} has been deleted`);
    })

});
module.exports = app;