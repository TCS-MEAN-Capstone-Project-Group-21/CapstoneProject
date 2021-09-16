//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let adminController = require("../controller/admin.controller")

router.post("/signIn",adminController.signIn);

//export router
module.exports=router;