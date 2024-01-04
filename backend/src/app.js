const express = require("express")
const router = require("./router") //vai chamar o arquivo router que criamos



const app = express()
//é necessário dizer ao app para utilizar o router, para isso:
app.use(router)//toda requisicação vai cair no router, e dentro do router as rotas vão preparar a solucação




module.exports = app; //isso vai exportar nossa função para um outro arquivo qualquer 
