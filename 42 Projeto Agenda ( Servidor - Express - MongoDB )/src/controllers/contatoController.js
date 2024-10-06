const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
  if (req.session.user) {
    res.render("contato");
  } else {
    try {
      
      res.render("login", { csrfToken: req.csrfToken() });
    } catch (error) {
      res.render('404')
    }
  }
};

exports.cadastro = (req, res) => {
  if (req.session.user) {
    res.render("cadastro");
  } else {
    try { 
      res.render("login", { csrfToken: req.csrfToken() });
    } catch (error) {
      res.render('404')
    }
  }
};

exports.register = (req, res) => {
  if (req.session.user) {
    res.send("OK");
  } else {
    try {
      res.render("login", { csrfToken: req.csrfToken() });
    } catch (error) {
      res.render('404')
    }
  }
};