const express = require("express");
const app = express();

//         CRIAR,   LER,   ATUALIZAR,   APAGAR
// CRUD -> CREATE,  READ,  UPDATE,      DELETE
//         POST,    GET,   PUT,         DELETE

app.get("/", (req, res) => {
  res.send("<h1>Hello World! Moises Lopes - E</h1>");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
