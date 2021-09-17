let orderModel = require("../model/order.model");

let addOrder = async (request,response)=>{
    let order = request.body
    order.status="recieved"
    let last = await orderModel.findOne({}).sort({_id:-1});//get last order in database
    if(last!=null){
        order._id=last._id+1;//increment the id from last order and assign it
    }
    else{
        order._id=0//or start count at zero if Database is empty
    }
    await orderModel.insertMany(order);
    response.send("Thank you for your Order!")
}

module.exports={addOrder};