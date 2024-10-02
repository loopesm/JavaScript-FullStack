const mongoose = require('mongoose');
const validator = require('validator');
const { checkCsrError } = require('../middlewares/middleware');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null
  }

  async register(){
    this.valida()
    if (this.errors.length > 0 ) {
      return
    }
    try {
      this.user = await LoginModel.create(this.body)
    } catch (e) {
      console.log(e)
    }
    
  }

  valida(){
    this.cleanUp();
    // E-mail precisa ser válida
    if(!validator.isEmail(this.body.email) && validator.isEmail(this.body.email) == ''  ) {
      this.errors.push('Email inválido')
    }

    // A senha precisa ter entre 8 e 25 caracteres
    if(this.body.password.length < 8 || this.body.password.length > 25 && this.body.password == '')  {
      this.errors.push('A senha precisa ter entre 8 e 25 caracteres')
    }
  }

  cleanUp() {
    for(const key in this.body ){
      if(typeof this.body[key] !== "string") {
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    }
  }

}

module.exports = Login;
