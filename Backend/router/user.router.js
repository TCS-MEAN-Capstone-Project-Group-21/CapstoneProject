//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let userController = require("../controller/user.controller");

router.get("/displayUsers", userController.displayUsers)
router.post("/signIn",userController.signIn);
router.post("/signUp",userController.signUp);

module.exports=router;