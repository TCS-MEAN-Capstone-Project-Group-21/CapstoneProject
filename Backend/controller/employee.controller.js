//import model
let employeeModel = require("../model/employee.model");

//add employee
let addEmployee = async (request,response)=>{
    let employee = request.body;//get employee from form body
    let last = await employeeModel.findOne({}).sort({_id:-1});//get last employee in database
    let employeeInfo = await employeeModel.findOne({email:employee.email});//make sure that the email is unique
    if(employeeInfo!=null){
        response.send("Email be must be unique!");
    }
    else{
        if(last!=null){
            employee._id=last._id+1;//increment the id from last user and assign it
        }
        else{//if no employees exits set first employee number
            employee._id=1
        }
        employee.password = "welcome123"
        console.log(employee);
        await employeeModel.insertMany(employee);//add employee to database
        response.send(`New Employee added the Employee ID is: ${employee._id}`)
    }
}

let deleteEmployee= async(request,response)=>{
    let employee = request.body;//get employee from form body
    let employeeInfo = await employeeModel.findOne({_id:employee._id});//find employee based on id
    if(employeeInfo!=null){
        await employeeModel.deleteOne({_id:employee._id});
        response.send(`Employee ID:${employee._id} has been terminated!`);
    }
    else{
        response.send(`Employee ID:${employee._id} not found.`);
    }

}


let editprofile = async (request,response)=>{
    let employee = request.body;//get employee from form body
    let employeeIndex = await employeeModel.findOne({Password:employee.Password});//make sure that the password
    if(employeeIndex!=null){
        response.send("Password be must be unique!");
    }
    else{
        await employeeModel.updateOne(employee);//update employee in database
        response.send(`Thank you for signing up your employee ID is: ${employee._id}`)
    }
}

module.exports={editprofile,addEmployee,
    deleteEmployee};