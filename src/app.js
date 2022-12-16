const express= require("express")
const cors = require("cors")
const redeDeApoioRoutes= require("./routes/redeDeApoioRoutes")

const app= express()

app.use(express.json())
app.use(cors())

app.use("/redeDeApoio",redeDeApoioRoutes)


module.exports=app
