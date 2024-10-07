const mongoose = require("mongoose");
const validator = require("validator");

const ContatosSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const ContatosModel = mongoose.model("Contatos", ContatosSchema);

class Contatos {
  constructor(body) {
    this.body = body;
    this.errorsContatos = [];
    this.contatos = null;
  }

  async register() {
    this.validaContato()

    if(this.errorsContatos.length > 0) {
      return
    }

    this.contato = await ContatosModel.create(this.body)

  }

  validaContato(){
    this.cleanUp();
    // E-mail precisa ser válida
    if( this.body.emailContato && !validator.isEmail(this.body.emailContato) && validator.isEmail(this.body.emailContato) == ''  ) {
      this.errorsContatos.push('Email inválido.')
    }
    if(!this.body.contatoName) {
      this.errorsContatos.push('Nome é um campo obrigatório.')
    }
    if(!this.body.emailContato && !this.body.phoneContato) {
      this.errorsContatos.push('Pelo menos um contato precisa ser informado: E-mail ou Telefone.')
    }

  }

  cleanUp() {
    for(const key in this.body ){
      if(typeof this.body[key] !== "string") {
        this.body[key] = '';
      }
    }

    this.body = {
      userId: this.body.userId,
      contatoName: this.body.contatoName,
      contatoLastName: this.body.contatoLastName,
      phoneContato: this.body.phoneContato,
      emailContato: this.body.emailContato
    }
  }










}



module.exports = Contatos;
