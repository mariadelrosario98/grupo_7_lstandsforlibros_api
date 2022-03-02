const express = require("express")
const app = express()

// Requerir y definir las rutas
const { mainRoutes, productsRoutes, usersRoutes } = require("./routes")
app.use("/", mainRoutes)
app.use("/api/products", productsRoutes)
app.use("/api/users", usersRoutes)

module.exports = app