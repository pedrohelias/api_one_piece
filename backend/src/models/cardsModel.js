 //aqui se escreve todas fuções que interagem com o banco de dados

 const Card = require("./databaseCollection")

 const getAll = async(req,res)=>{
    const cards = await Card.find()
    console.log("feito")
    return res.send(cards)
    }
 
 
 const addCard = () => {

 }


 module.exports = {
    getAll
 }; //para enviar todas as funções dentro de um mesmo arquivo, se utiliza esse modelo