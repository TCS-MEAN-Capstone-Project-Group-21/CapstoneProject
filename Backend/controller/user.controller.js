//import model
let userModel = require("../model/user.model");

let displayUsers = async (request,response)=>{
    let users = await userModel.find()
    response.send(users);
}

//user Registration
let signUp = async (request,response)=>{
    let user = request.body;//get user from form body
    let last = await userModel.findOne({}).sort({_id:-1});//get last user in database
    let userIndex = await userModel.findOne({email:user.email});//make sure that the email is unique
    if(userIndex!=null){
        response.send("Email be must be unique!");
    }
    else{
        if(last!=null){
            user._id=last._id+1;//increment the id from last user and assign it
        }
        else{
            user._id=0
        }
        user.attempts = 3;
        user.funds = 100;
        await userModel.insertMany(user);//add user to database
        response.send(`Thank you for signing up your user ID is: ${user._id}`)
    }
}

//user Login
let signIn = async (request,response)=>{
    let user = request.body;
    let userInfo = await userModel.findOne({_id:user._id});
    let passwordCheck = await userModel.findOne({_id:user._id,password:user.password});
    if(passwordCheck!=null && userInfo.attempts>0){
        await userModel.updateOne({_id:user._id},{$set:{attempts:3}});
        response.send("Success");
    }
    else if(userInfo.attempts==0){
        response.send(`You have run out of login attempts.
        Please raise a ticket with our help desk to unlock your account.`)
    }
    else{
        if(userInfo!=null){
            await userModel.updateOne({_id:userInfo._id},{$set:{attempts:userInfo.attempts-1}})
        }
        response.send(`UserID or Password is incorrect! You have ${userInfo.attempts-1} attempts remaining.`);
    }
}

module.exports={signIn,signUp,displayUsers};