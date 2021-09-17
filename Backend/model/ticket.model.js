let mongoose = require("mongoose");

mongoose.pluralize(null);

let ticketSchema = mongoose.Schema({
    _id:{type:Number, require:true},
    userid:{type:Number, require:true},
    issue:{type:String, require:true},
    status:{type:String, require:true}
})

let ticketModel = mongoose.model("Ticket",ticketSchema);

module.exports = ticketModel