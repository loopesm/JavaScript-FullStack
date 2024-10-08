const { create } = require("connect-mongo");
const mongoose = require("mongoose");
const validator = require("validator");

const ContatosSchema = new mongoose.Schema({
  //userId: user._id,
  contatoName: { type: String, required: true },    
  contatoLastName: { type: String, required: false, default: '' },
  phoneContato: { type: String, required: false, default: '' },
  emailContato: { type: String, required: false, default: '' },
  createdAt: { type: Date, default: Date.now },
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

    this.contatos = await ContatosModel.create(this.body)

  }

  validaContato(){
    this.cleanUp();
    // E-mail precisa ser válida
    if( this.body.emailContato && !validator.isEmail(this.body.emailContato)) {
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
