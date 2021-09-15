//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let productController = require("../controller/product.controller");


// router.post("/signIn",userController.signIn);
// router.post("/signUp",userController.signUp);

module.exports=router;