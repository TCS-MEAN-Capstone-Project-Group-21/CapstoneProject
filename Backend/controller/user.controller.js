//import model
let userModel = require("../model/user.model");

let signUp = async (request,response)=>{
    let user = request.body;//get user from form body
    let last = await userModel.findOne({}).sort({_id:-1});//get last user in database
    let userIndex = await userModel.findOne({email:user.email});//make sure that the email is unique
    if(userIndex!=null){
        response.send("Email be must be unique!");
    }
    else{
        user._id=last._id+1;//increment the id from last user and assign it
        await userModel.insertMany(user);//add user to database
        response.send(`Thank you for signing up your user ID is: ${user._id}`)
    }
}
let signIn = async (request,response)=>{
    let user = request.body;
    let userIndex = await userModel.findOne({_id:user._id,password:user.password});
    if(userIndex!=null){
        response.send("Success");
    }
    else{
        response.send("UserID or Password is incorrect!");
    }
}

module.exports={signIn,signUp};