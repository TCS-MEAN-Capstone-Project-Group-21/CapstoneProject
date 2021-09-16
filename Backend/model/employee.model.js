let mongoose = require("mongoose");

mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    Products:{type:String, unique:true},
    quantity:{type:String, unique:true},

    
})
let employeeDetails = mongoose.Schema({
    password:{type:String, unique:true}
    
    
})

let employeeModel = mongoose.model("Employee",employeeSchema);
let employeepass = mongoose.model("Employee-editpass",employeeDetails);
module.exports = employeeModel,employeepass