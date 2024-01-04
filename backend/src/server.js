const app = require("./app") //vai puxar toda a parte do app, como requires, inicalizaões, configurações
const port = 8000


app.listen(port, () => {
    console.log("server running on port " + port)
})