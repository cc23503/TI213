const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// o que é body-parser?
// o que é middleware ?

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

module.exports = app;
