const express = require("express")
const router = express.Router()
const models = require("./models/cardsModel")
const cardsController = require("./controllers/cardsController")

router.get("/cards", cardsController.getAll)
router.get("cardsFind", models.getAll)



module.exports = router