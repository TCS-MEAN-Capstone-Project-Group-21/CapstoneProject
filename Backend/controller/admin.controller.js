//import model
let adminModel = require("../model/admin.model");


//admin login
let signIn = async (request,response)=>{
    let user = request.body;
    let passwordCheck = await adminModel.findOne({_id:user._id,password:user.password});
    if(passwordCheck!=null){
        response.send("Success");
    }
    else{
        response.send("Id or Password is Incorrect");
    }
}


module.exports = {signIn};