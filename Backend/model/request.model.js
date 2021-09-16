let mongoose = require("mongoose");

mongoose.pluralize(null);


let requestSchema = mongoose.Schema({
    _id:{type:Number},
    Products:{type:String},
    quantity:{type:String}
})

let requesteModel = mongoose.model("Requests",requestSchema);
module.exports = requesteModel