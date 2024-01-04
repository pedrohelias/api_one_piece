//conexão com o banco
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://pedrohelias:eAzR6s3rjpKQzwGV@cluster0.kmbxlfw.mongodb.net/?retryWrites=true&w=majority")

const Card = mongoose.model("Card", {
    name: String,
    cost: String,
    power: String,
    type: String, 
    description: String,
    image_url: String 
})

module.exports = {
    Card

} 