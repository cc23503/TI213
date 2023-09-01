const express = require("express");
const aplicacao = express();
const porta = 3000;

const path = require("path");
aplicacao.set("views", "./views")
aplicacao.set("view engine", "ejs");

aplicacao.use(express.static("arquivos"));

aplicacao.get("/home", (req, res) => {
    res.render("index");
});

aplicacao.get("/calculadora", (req, res) => {
    res.render("main");
});

aplicacao.get("/vitrine", (req, res) => {
    res.render("grid");
});

aplicacao.listen(porta, () => console.log("SERVIDOR TA NA BALA"));