//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let requestController = require("../controller/request.controller");

router.post("/sendRequest",requestController.sendrequest);


module.exports=router;