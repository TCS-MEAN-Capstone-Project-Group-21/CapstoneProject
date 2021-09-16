//import model
let productModel = require("../model/product.model");

let getNewProduct = ((request,response)=>{
    let product = request.body
    productModel.create(product, (err,results)=>{
        if(!err){
            console.log("getNewProdcut results..."+JSON.stringify(results))
        }else{
            console.log("error.."+err)
        }
    })
})

let updateNewProduct = ((request,response)=>{
    let product = request.body
    
    productModel.updateOne({
        prodPrice:product.updateProdPrice
        },
        {$set:
            {prodQuantity:product.updateProdQuantity
        }}, 
        (err,results)=>{
        if(!err){
            console.log("updateNewProdcut results..."+ JSON.stringify(results))
        }else{
            console.log("error.."+err)
        }
    })
})

let deleteNewProduct = ((request,response)=>{
    //let product = request.params.delprodId
    let product = request.body  
    
    productModel.deleteOne({prodPrice:product.delprodId},(err,results)=>{
        if(!err){
            console.log("delNewProdcut results..."+ JSON.stringify(results))
            console.log("this is dell request..."+JSON.stringify(product.delprodId))
        }else{
            console.log("error.."+err)
        }
    })
})

let getAllProductDetails = (request,response)=> {
    
    productModel.find({},(err,data)=> {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}

let storedProductInfo = (request,response)=> {
    let product = request.body;

    productModel.insertMany(product,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}

let deleteProductInfo = (request,response)=> {
    let pid = request.params.pid;
    productModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}

let updateProductDetails = (request,response)=> {
    let product = request.body;
    productModel.updateOne({_id:product._id},{$set:{price:product.price}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}


module.exports = {getNewProduct,updateNewProduct,deleteNewProduct}
