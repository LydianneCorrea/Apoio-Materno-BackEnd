const controller = require("../controller/controller")
const express = require("express")


const router = express.Router()

router.get("/all", controller.findAllRedeDeApoio)
router.get("/:id", controller.findRedeDeApoioById)
router.post("/cadastrar", controller.addNewRedeDeApoio)
router.patch("/:id", controller.updateRedeDeApoio)
router.delete("/:id", controller.deleteRedeDeApoio)

module.exports = router
