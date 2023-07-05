const userController = require("./userHandler")

const express= require("express")

const router = express.Router()

router.get("/:first_name",userController.getUser)

router.post("/createUser",userController.createUser)


module.exports=router