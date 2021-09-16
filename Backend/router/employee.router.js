//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let employeeController = require("../controller/employee.controller");

router.post("/addEmployee",employeeController.addEmployee);
router.post("/sendrequest",employeeController.sendrequest);
router.post("/editprofile",employeeController.editprofile);


module.exports=router;