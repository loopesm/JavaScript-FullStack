const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
  if (req.session.user) {
    res.render("contato");
  } else {
    res.render("login", { csrfToken: req.csrfToken() });
  }
};

exports.cadastro = (req, res) => {
  if (req.session.user) {
    res.render("cadastro");
  } else {
    res.render("login", { csrfToken: req.csrfToken() });
  }
};