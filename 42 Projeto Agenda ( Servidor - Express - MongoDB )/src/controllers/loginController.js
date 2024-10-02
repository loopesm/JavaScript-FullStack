const Login = require('../models/LoginModel')

exports.index = (req, res) => {
  // **** TESTE SE A SESSÃO ESTÁ SENDO SALVA NO BANCO DE DADOS ****
  // req.session.usuario = { nome: "Moises", logado: true }

  // **** TESTE DE RETORNO DA SEÇÃO SALVA NO BANCO DE DADOS ****
  // console.log(req.session)

  // **** FLASH MESSAGES ****
  // req.flash('info', 'Informação sobre a requisição')
  // req.flash('success', "Sucesso na requisição")
  // req.flash('error', 'Erro na requisição')

  // console.log(req.flash('erro'))
  
  res.render('login', {csrfToken: req.csrfToken()});
};

exports.register = async (req, res) => {

  try {
    const login = new Login(req.body)
    await login.register()
  
    if(login.errors.length > 0 ) {
      req.flash('errors', login.errors)
      req.session.save(function(){
      //res.redirect('back')
      res.location('/login/index');
      res.status(302).send();
      return
      })
      return
    }
  
      req.flash('success', 'Seu usuário foi criado com sucesso!')
      req.session.save(function(){
      //res.redirect('back')
      res.location('/login/index');
      res.status(302).send();
      return
      })
    
  } catch (error) {
    console.log(error)
    res.render('404')
  }

};