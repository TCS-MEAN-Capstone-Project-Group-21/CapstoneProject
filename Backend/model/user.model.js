let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    email:{type:String, require:true, unique:true},
    fname:{type:String, require:true},
    mname:{type:String},
    lname:{type:String, require:true},
    birth:{type:Date, require:true},
    attempts:{type:Number},
    funds:{type:Number, require:true},
    phone:{type:Number, min: [10, 'Please enter the full phone number including area code!']},
    password:{type:String, require:true, select:false}
})

let userModel = mongoose.model("User",userSchema);

module.exports = userModel