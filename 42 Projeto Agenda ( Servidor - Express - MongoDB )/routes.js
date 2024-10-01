const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const erroController = require("./src/controllers/erroController");

// Rotas da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rota de Erro
route.get("/erro", erroController.pagina404)

module.exports = route;
