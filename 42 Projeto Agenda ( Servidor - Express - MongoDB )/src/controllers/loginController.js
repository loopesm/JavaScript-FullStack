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
  return;
};