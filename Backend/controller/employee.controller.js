//import model
let employeeModel = require("../model/employee.model");
let employeepass = require("../model/employee.model");

let sendrequest = async (request,response)=>{
    let employee = request.body;//get employee from form body
    let last = await employeeModel.findOne({}).sort({_id:-1});//get last user in database
    let employeeIndex = await employeeModel.findOne({items:employee.items,productquantity:employee.productquantity});
    if(employeeIndex!=null){
        response.send("Products be must be unique!");
    }
    else{
        await employeeModel.insertMany(employee);//add employee to database
        response.send(`Thank you for signing up your employee ID is: ${employee._id}`)
    }
}
let editprofile = async (request,response)=>{
    let employee = request.body;//get employee from form body
    let last = await employeepass.findOne({}).sort({_id:-1});
    let employeeIndex = await employeepass.findOne({Password:employee.Password});//make sure that the password
    if(employeeIndex!=null){
        response.send("Password be must be unique!");
    }
    else{
        await employeepass.insertMany(employee);//add employee to database
        response.send(`Thank you for signing up your employee ID is: ${employee._id}`)
    }
}

module.exports={sendrequest,editprofile};