var db = require("../db/db.json");
var fs = require("fs");
var id = require("generate-unique-id");
var app = require("express").Router();

app.get("/api/notes", (req, res) => {
    fs.readFile(db).then((data) => res.json(JSON.parse(data)));
});

app.post("/api/notes", (req, res) => {
    var newNote = {
        title,
        text,
        id: id()
    }

    fs.writeToFile(db, newNote)
});