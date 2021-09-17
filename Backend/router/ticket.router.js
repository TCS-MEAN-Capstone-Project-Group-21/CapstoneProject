//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let ticketController = require("../controller/ticket.controller");

router.get("/getTickets",ticketController.getTickets);
router.post("/resolveTicket",ticketController.resolveTicket)
router.post("/raiseticket",ticketController.raiseticket);

module.exports=router;