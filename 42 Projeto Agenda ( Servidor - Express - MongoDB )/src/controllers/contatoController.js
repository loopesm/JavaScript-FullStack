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
  try {
    const contatos = new Contato(req.body);
    await contatos.register();
  
    if (contatos.errorsContatos.length > 0) {
      req.flash("errorsContatos", contatos.errorsContatos);
      req.session.save(function () {
        res.redirect(req.get("Referrer"));
        return
      });
      return;
    }
  
    req.flash("successContatos", "Contato criado com sucesso!");
    req.session.save(function () {
      res.redirect(req.get("Referrer"));
      return
    });
  
    return;
  } catch (error) {
    console.log(error);
    return res.render("404");
  }

};
