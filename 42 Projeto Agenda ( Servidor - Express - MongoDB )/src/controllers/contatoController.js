const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
  if (req.session.user) {
    res.render("cadastro");
  } else {
    try {
      res.render("login", { csrfToken: req.csrfToken() });
    } catch (error) {
      res.render("404");
    }
  }
};

exports.register = async (req, res) => {
  const contato = new Contato(req.body);
  try {
    if (req.session.user) {
      await contato.register();
      if (contato.errorsContatos.length > 0) {
        req.flash("errorsContatos", contato.errorsContatos);
        //req.session.save(() => res.redirect("back"));
        console.log(contato.errorsContatos);
        return;
      }
      req.flash("successContatos", "Contato criado com sucesso");
      res.send(req.body)
      console.log("Contato Criado");
    } else {
      res.render("login", { csrfToken: req.csrfToken() });
      console.log("Acesso negado");
    }  
  } catch (error) {
    res.render("404");
    console.log(error);
  }

};
