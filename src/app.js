const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

require('dotenv').config();
const express = require("express")
const cors = require("cors")
const redeDeApoioRoutes = require("./routes/routes")
const mongoose = require("./database/dbConnect")

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use("/redeDeApoio", redeDeApoioRoutes);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app
