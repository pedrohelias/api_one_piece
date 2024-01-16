const express = require("express")
const router = require("./router") //vai chamar o arquivo router que criamos
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors()) //colar antes do app.use(router) por motivos obvios de que o cors vai gerenciar as rotas 

//é necessário dizer ao app para utilizar o router, para isso:
app.use(router)//toda requisicação vai cair no router, e dentro do router as rotas vão preparar a solucação
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


module.exports = app; //isso vai exportar nossa função para um outro arquivo qualquer 
