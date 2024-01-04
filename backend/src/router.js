const express = require("express")
const router = express.Router()
const models = require("./models/cardsModel")
const cardsController = require("./controllers/cardsController")

router.get("/cards", models.getAll)
router.post("/addCards", models.addCard)



module.exports = router