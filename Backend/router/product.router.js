//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let productController = require("../controller/product.controller");

router.post("/addProdRoute", productController.getNewProduct);
router.put("/updateProdRoute", productController.updateNewProduct);
router.delete("/deleteProdRoute", productController.deleteNewProduct);


module.exports = router;