let mongoose = require("mongoose");

mongoose.pluralize(null);

let orderSchema = mongoose.Schema({
    _id:{type:Number, require:true},
    userId:{type:Number, require:true},
    status:{type:String, require:true},
    cost:{type:Number, require:true},
    itemid:{type:Number, require:true}
})

let orderModel = mongoose.model("Order",orderSchema);

module.exports = orderModel