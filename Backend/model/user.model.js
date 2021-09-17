let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    _id:{type:Number, require:true},
    email:{type:String, unique:true},
    fname:{type:String},
    mname:{type:String},
    lname:{type:String},
    birth:{type:Date},
    attempts:{type:Number},
    funds:{type:Number},
    phone:{type:Number, min: [10, 'Please enter the full phone number including area code!']},
    password:{type:String, require:true, select:false}
})

let userModel = mongoose.model("User",userSchema);

module.exports = userModel