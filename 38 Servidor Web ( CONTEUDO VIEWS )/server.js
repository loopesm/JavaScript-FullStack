//           CRIAR   LER   ATUALIZAR  APAGAR     
// CRUD  ->  CREATE  READ  UPDATE     DELETE
//           POST    GET   PUT        DELETE

require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.connectionString)
    .then(()=>{
    app.emit('conectado');
    console.log('Conectado com o BD')
    })
    .catch( e => console.log(e));

const session = require('express-session')
const MongoStore = require ('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const meuMiddlewares = require('./src/middlewares/middlewares')

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname,'src', 'views'))
app.set('view engine', 'ejs')

// Nosso Proprio MIddlewares Global que intercepta todas as requisições
app.use(meuMiddlewares)
app.use(routes)

app.on('conectado', () => {
    app.listen(3000, () => {
        console.log ("Acessar http://localhost:3000")
        console.log ("Servidor executando na porta 3000")
    })
})

const sessionOptions = session({
    secret: 'chavealeatoriaSHUAHSHDAUSIDHUAISDIJNAS',
    store: MongoStore.create({mongoUrl: process.env.connectionString}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

