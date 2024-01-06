const cardsModel = require("../models/cardsModel")
 

const getAll = async(req,res) => {

    //return res.status(200).json({message: "tudo certo!"})
    const cards = await cardsModel.getAll()
    return res.send(cards)
}

module.exports = {
    getAll
}