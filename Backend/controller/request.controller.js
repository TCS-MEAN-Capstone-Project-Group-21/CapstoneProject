let requestModel = require("../model/request.model");

let sendrequest = async (request,response)=>{
    let supply = request.body;//get employee from form body
    console.log(supply);
    await requestModel.insertMany(supply);//add employee to database
    response.send(`Request Sent!`);
}

module.exports={sendrequest};