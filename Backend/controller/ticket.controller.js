//import model
const { response } = require("express");
let ticketModel = require("../model/ticket.model");

let raiseticket = ((request,response)=> {
    let ticket = request.body;
    await ticketModel.insertMany(ticket);//insert ticket into Database
    response.send("Your ticket has been submitted!");
})

//get all the tickets
let getTickets = async (request, response)=>{
    let tickets = await ticketModel.find();
    response.send(tickets);
}

module.exports = {raiseticket,getTickets}