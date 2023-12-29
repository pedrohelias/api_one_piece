const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
const port = 5000
mongoose.connect("mongodb+srv://pedrohelias:eAzR6s3rjpKQzwGV@cluster0.kmbxlfw.mongodb.net/?retryWrites=true&w=majority")

const Card = mongoose.model("Card", {
    name: String,
    cost: String,
    power: String,
    type: String, 
    description: String,
    image_url: String 
})

app.get("/", async(req,res) => {
    const cards = await Card.find()
    return res.send(cards)
})

app.post("/", async(req,res) => {
    const card = new Card({
        name: req.body.name,
        cost: req.body.cost,
        power: req.body.power,
        type: req.body.type,
        description: req.body.description,
        image_url: req.body.image_url
    })

    await card.save()
    return res.send(card)
})

app.delete("/:id", async(req,res) => {
    const cardDel = await Card.findByIdAndDelete(req.params.id)
    return res.send(cardDel)
})

app.put("/:id", async(req,res) => {
    const card = await Card.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        cost: req.body.cost,
        power: req.body.power,
        type: req.body.type,
        description: req.body.description,
        image_url: req.body.image_url
    }, {
        new: true //pega a ultima instancia editada 
    })

    return res.send(card) 
})



app.listen(port, () => {
    console.log("app running on port " + port)
})