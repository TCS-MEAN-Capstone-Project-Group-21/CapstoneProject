//import model
const { response } = require("express");
let ticketModel = require("../model/ticket.model");

let raiseticket = ((request,response)=> {
    let ticket = request.body;
    ticket.status = "active";
    let last = await ticketModel.findOne({}).sort({_id:-1});//get last ticket in database
    if(last!=null){
        order._id=last._id+1;//increment the id from last ticket and assign it
    }
    else{
        order._id=0
    }
    await ticketModel.insertMany(ticket);//insert ticket into Database
    response.send("Your ticket has been submitted!");
})

//get all the tickets
let getTickets = async (request, response)=>{
    let tickets = await ticketModel.find({status:"active"});
    response.send(tickets);
}

let resolveTicket = async (request, response)=>{
    let ticket = request.body;
    await ticketModel.updateOne({_id:ticket._id},{$set:{status:"Resolved"}})
    response.send(`Ticket ${ticket._id} has been closed!`)
}

module.exports = {raiseticket,getTickets,resolveTicket}