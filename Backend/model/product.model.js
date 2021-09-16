let mongoose = require("mongoose");

mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    _id:{type:Number, require:true},
    productid:{type:Number, require:true},
    productname:{type:String},
    productprice:{type:Number},
    productquantity:{type:Number},
    totalProductAmount:{type:Number}

})

let productModel = mongoose.model("Product",productSchema);

module.exports = productModel;