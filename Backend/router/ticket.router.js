//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let ticketController = require("../controller/ticket.controller");


router.post("/raiseticket",ticketController.raiseticket);
module.exports=router;