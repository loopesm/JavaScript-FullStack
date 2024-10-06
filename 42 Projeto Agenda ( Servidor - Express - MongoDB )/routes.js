const express = require("express");
const route = express.Router();

// CONTROLLERS
const loginController = require("./src/controllers/loginController");


// ROTAS LOGIN
route.get("/", loginController.index)
// route.get("/login/index", loginController.login)
route.post("/login/register", loginController.register)
route.post("/login/login", loginController.login)
route.get("/login/logado", loginController.logado)
route.get("/login/logout", loginController.logout)



module.exports = route;
