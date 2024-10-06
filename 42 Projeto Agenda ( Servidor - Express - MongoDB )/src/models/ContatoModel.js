const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

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




}

module.exports = Contatos;
