const app= require("./src/app")

const batatinha = process.env.DB_PORT

app.listen(batatinha,() =>
console.log("ouvindo porta: "+ batatinha)
)