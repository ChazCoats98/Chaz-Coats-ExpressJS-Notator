var db = require("../db/db.json");
var fs = require("fs");
var id = require("generate-unique-id");
var util = require("util");
var app = require("express").Router();
var readFromFile = util.promisify(fs.readFile);

app.get("/", (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

app.post("/", (req, res) => {
    var newNote = {
        title: req.title,
        text: req.text,
        id: id()
    }

    
});

module.exports = app;