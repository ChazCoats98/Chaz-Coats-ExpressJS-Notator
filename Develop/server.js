var express = require("express");
var fs = require("fs");
var path = require("path");
var PORT = process.env.PORT || 3001;
var app = express();
var apiRoute = require("./routes/apiRoute");
var htmlRoute = require("./routes/htmlRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", htmlRoute);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});