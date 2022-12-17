const app= require("./src/app")

const port = process.env.DB_PORT;

app.listen(port,() =>
console.log("ouvindo porta: "+ port)
)