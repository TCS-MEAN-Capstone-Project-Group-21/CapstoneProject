let mongoose = require("mongoose");

mongoose.pluralize(null);

let orderSchema = mongoose.Schema({
    _id:{type:Number, require:true},
    userId:{type:Number, require:true},
    status:{type:String, require:true},
    date:{type:Date, require:true},
    cost:{type:Number, require:true},
    itemsId:{type:Array, require:true},
    itemsQuantity:{type:Array, require:true}
})

let orderModel = mongoose.model("Order",orderSchema);

module.exports = orderModel