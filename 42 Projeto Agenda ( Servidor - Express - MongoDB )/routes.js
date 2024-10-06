const express = require("express");
const route = express.Router();

// CONTROLLERS
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController");
const { erroServidor } = require("./src/middlewares/middleware");

// ROTAS LOGIN
route.get("/", loginController.index);
// route.get("/login/index", loginController.login)
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logado", loginController.logado);
route.get("/login/logout", loginController.logout);

// ROTAS CONTATO
route.get("/contato", contatoController.index);
route.get("/contato/cadastro", contatoController.cadastro);
route.post("/contato/cadastro", contatoController.register);

// ROTA DE ERRO

route.use((req, res , next) => {
    res.status(404).render("404");
})

module.exports = route;
