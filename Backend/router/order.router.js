//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let orderController = require("../controller/order.controller");

router.post("/addOrder",orderController.addOrder);
router.post("/queryReport",orderController.findOrder);

module.exports=router