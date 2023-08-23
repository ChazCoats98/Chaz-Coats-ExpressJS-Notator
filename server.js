var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 3001;
var app = express();
var api = require("./routes/apiRoute");
var db = require("./db/db.json");

//these functions are used to parse JSON and url encoded data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//function to host the public folder as a static resource
app.use(express.static("public"));


//These functions connect routes to the links clicked on the page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.use("/api/notes",api);
//This initializes the server 
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});