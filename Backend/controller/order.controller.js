let orderModel = require("../model/order.model");

let addOrder = async (request,response)=>{
    let order = request.body
    let date = new Date();
    order.status="recieved";
    order.date = date;
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

let findOrder = async (request,response)=>{
    let query = request.body;
    let timeEnd = query.date;//set an end query time
    timeEnd.setHours(23);//Always set end query time to end of day
    timeEnd.setMinutes(59);
    timeEnd.setSeconds(59);
    if(query.type == "weekly"){
        timeEnd.setDate(query.date.getDate()+6);//if the report is for a week set the end date to 6 days ahead of the start date
    }
    else if(query.type == "Monthly"){
        timeEnd.setMonth(query.date.getMonth()+1);//if the report is for a month increment the month
    }
    let result = await orderModel.find({
        ...query.userId ? {userId:query.userId}:{},//where userId maches entered user Id
        ...query.productId ? {items:{$in:query.productId}}:{},//where product Id is included in the items array
        date:{$gt:query.date,$lt:timeEnd}//on orders that fall between the start and end date
    })
    response.send(result);//return result of query to front end
}

module.exports={addOrder,findOrder};