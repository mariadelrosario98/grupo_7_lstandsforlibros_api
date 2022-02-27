const express = require("express")
const router = express.Router()
const { productsController } = require("../productsController")

// Listado de productos
router.get("/", getProduct)
router.get("/:id",getProduct)

module.exports = router