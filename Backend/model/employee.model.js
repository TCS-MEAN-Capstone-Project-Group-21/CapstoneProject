let mongoose = require("mongoose");

mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({    
    _id:{type:Number, require:true},
    email:{type:String, unique:true},
    fname:{type:String},
    lname:{type:String},
    password:{type:String, require:true, select:false}
})

let employeeModel = mongoose.model("Employee",employeeSchema);
module.exports = employeeModel