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
  console.log(req.session.user)
  
  res.render('login', {csrfToken: req.csrfToken()});
};

exports.register = async (req, res) => {

  try {
    const login = new Login(req.body)
    await login.register()
  
    if(login.errorsRegister.length > 0 ) {
      req.flash('errorsRegister', login.errorsRegister)
      req.session.save(function(){
      //res.redirect('back')
      res.location('/login/index');
      res.status(302).send();
      return
      })
      return
    }
  
      req.flash('successRegister', 'Seu usuário foi criado com sucesso!')
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

exports.login = async (req, res) => {

  try {
    const login = new Login(req.body)
    await login.login()
  
    if(login.errorsLogin.length > 0 ) {
      req.flash('errorsLogin', login.errorsLogin)
      req.session.save(function(){
      //res.redirect('back')
      res.location('/login/index');
      res.status(302).send();
      return
      })
      return
    }
  
      req.flash('successLogin', 'Acesso ao sistema liberado!')
      req.session.user = login.user
      req.session.save(function(){
      //res.redirect('back')
      res.location('/login/login');
      res.status(302).send();
      return
      })
    
  } catch (error) {
    console.log(error)
    res.render('404')
  }

};