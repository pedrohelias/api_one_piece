const express = require("express")
const router = express.Router()
const models = require("./models/cardsModel")
const cardsController = require("./controllers/cardsController")

router.get("/cards", models.getAll)
router.post("/addCards", models.addCard)
//router.get("/testeController", cardsController.getAll)
router.put("/updateCard/:id", models.updateCard)
router.delete("/deleteCard/:id", models.deleteCard)



module.exports = router