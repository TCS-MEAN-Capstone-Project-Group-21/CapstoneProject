let mongoose = require("mongoose");

mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    email:{type:String},
    fname:{type:String},
    lname:{type:String},
    _id:{type:Number, require:true},
    password:{type:String, require:true, select:false}
})

let employeeModel = mongoose.model("Employee",employeeSchema);

module.exports = employeeModel