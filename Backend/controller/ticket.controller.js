//import model
let ticketModel = require("../model/ticket.model");

let raiseticket = ((request,response)=> {
    let ticket = request.body;
    await ticketModel.insertMany(ticket);//insert ticket into Database
    response.send("Your ticket has been submitted!");
})

module.exports = {raiseticket}