//import model
let userModel = require("../model/user.model");

let signUp = async (request,response)=>{
    let user = request.body;
    let userIndex = await userModel.findOne({email:user.email});
    if(userIndex!=null){
        response.send("Email and username must be unique!");
    }
    else{
        await userModel.insertMany(user);
        user = await userModel.findOne({email:user.email});
        response.send(`Thank you for signing up your user ID is: ${user._id}`)
    }
}
let signIn = async (request,response)=>{
    let user = request.body;
    let userIndex = await userModel.findOne({email:user.email,password:user.password});
    if(userIndex!=null){
        response.send("Success")
    }
    else{
        response.send("Username or Password is incorrect!");
        
    }
}

module.exports={signIn,signUp};