let mongoose = require("mongoose");

mongoose.pluralize(null);


let requestSchema = mongoose.Schema({
    _id:{type:Number},
    product:{type:String},
    quantity:{type:String}
})

let requestModel = mongoose.model("Requests",requestSchema);

module.exports = requestModel