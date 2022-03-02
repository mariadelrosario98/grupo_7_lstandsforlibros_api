const express = require("express")
const router = express.Router()
const { usersController } = require("../usersController")

// Listado de productos
router.get("/", getUser)
router.get("/:id",getUser)

module.exports = router