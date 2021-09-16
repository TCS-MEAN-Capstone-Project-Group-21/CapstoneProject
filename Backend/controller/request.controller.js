let requestModel = require("../model/request.model");

let sendrequest = async (request,response)=>{
    let request = request.body;//get employee from form body
    await requestModel.insertMany(request);//add employee to database
    response.send(`Request Sent!`);
}

module.exports={sendrequest};