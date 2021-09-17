let mongoose = require("mongoose");

mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    _id:{type:Number, require:true},
    password:{type:String, require:true, select:false}
})


let adminModel = mongoose.model("Admin",adminSchema);

module.exports = adminModel