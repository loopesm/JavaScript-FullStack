const express = require("express");
const route = express.Router();

// CONTROLLERS
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// ROTAS HOME
route.get("/", homeController.index);

// ROTAS LOGIN
route.get("/login/index", loginController.index)
route.post("/login/register", loginController.register)



module.exports = route;
