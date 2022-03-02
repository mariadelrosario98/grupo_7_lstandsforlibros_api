const express = require("express")
const router = express.Router()
const { greet } = require("../controller/main.controller")

router.get("/", greet)

module.exports = router


