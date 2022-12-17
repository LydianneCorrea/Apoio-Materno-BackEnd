require('dotenv').config({path: __dirname + '/.env'});
const express= require("express")
const cors = require("cors")
const redeDeApoioRoutes= require("./routes/routes")
const mongoose= require("./database/dbConnect")

const app= express()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use("/redeDeApoio",redeDeApoioRoutes)


module.exports=app
