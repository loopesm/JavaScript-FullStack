const ContatoModel = require("../models/ContatoModel");

exports.index = (req, res) => {
  if (req.session.user) {
    const userIdMoises = req.session.user._id;
    res.render("cadastro");
    console.log(userIdMoises);
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
    const contatos = new ContatoModel(req.body);
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
      console.log(req.body)
      return
    });
  
    return;
  } catch (error) {
    console.log(error);
    return res.render("404");
  }

};
