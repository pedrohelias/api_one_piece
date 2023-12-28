const express = require("express") //importando o express
const mongoose = require("mongoose")



const app = express() //é uma aplicação express
app.use(express.json()) //isso permite que ele leia dados em json 
const port = 3000 //porta que será utilizada
mongoose.connect("mongodb+srv://pedroheliasoriginal:fWzTuJzDNSakLMmv@cluster0.czjbhy4.mongodb.net/?retryWrites=true&w=majority")

const Film = mongoose.model('Film', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String
}) //modelo do nosso banco


app.get("/", async(req,res) => {
    const films = await Film.find()
    return res.send(films)
})

app.delete("/:id", async(req,res) => {
    const film = await Film.findByIdAndDelete(req.params.id)
    return res.send(film)
}) //quando manda o paramentro entre dois pontos, reconhece que é uma variavel 

app.post("/", async (req,res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    })

    await film.save() //esperar o filme ser inserido para ser salvo
    return res.send(film) //vai mostrar na resposta
})

app.put("/:id", async (req,res) => { //update
    const film = await Film.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url  
    }, {
        new: true //isso vai fazer ela pegar a ultima instancia atualizada
    })

    return res.send(film)
})

app.listen(port, () => {
    console.log("App Running")
})