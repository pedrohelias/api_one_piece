 //aqui se escreve todas fuções que interagem com o banco de dados

const Card = require("./databaseConnection")

 

const getAll = async(req,res)=>{
    const cards = await Card.find()
    console.log("listado")
    return res.send(cards)
}
 
 
const addCard = async(req,res) => {
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
}

const updateCard = async(req,res) => {
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
}

const deleteCard = async(req,res) => {
    const cardDel = await Card.findByIdAndDelete(req.params.id)
    return res.send(cardDel)
}


 



module.exports = {
    getAll,
    addCard,
    deleteCard,
    updateCard
 }; //para enviar todas as funções dentro de um mesmo arquivo, se utiliza esse modelo