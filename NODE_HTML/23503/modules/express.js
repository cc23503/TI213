const express = require("express");
const aplicacao = express();
const porta = 3000;


const path = require("path");
aplicacao.set("views", "./views");
aplicacao.set("view engine", "ejs");

aplicacao.use(express.static("arquivos"));

aplicacao.get("/principal", (req, res) => {
    res.render('principal');
});

aplicacao.get("/calculando", (req, res) => {
    res.render('calculando');
    console.log("Valor de A = XX");
    console.log("Valor de B = XX");
    console.log("Valor de C = XX");
    console.log("MEDIA = XX")

});



aplicacao.listen(porta, () => console.log("SERVIDOR TA NA BALA"));