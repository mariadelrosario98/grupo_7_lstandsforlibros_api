const express = require("express")
const router = express.Router()
const { userssController } = require("../usersController")

// Listado de productos
router.get("/", getUser)
router.get("/:id",getUser)

module.exports = router