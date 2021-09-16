//Load in all the modules
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let app = express();
let routerProduct = require("./router/product.router");
let userRouter = require("./router/user.router")
let productRouter = require("./router/product.router");
let employeeRouter = require("./router/employee.router");
let ticketRouter = require("./router/ticket.router");
let adminRouter = require("./router/admin.router");



//add middleware
app.use(cors());
app.use(bodyParser.json())

//Database URL
let url = "mongodb://localhost:27017/mylib"

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));


app.use("/api/admin",adminRouter)
app.use("/api/product",routerProduct);
app.use("/api/user",userRouter);
app.use("/api/product", productRouter);
app.use("/api/employee",employeeRouter);
app.use("/api/ticket",ticketRouter);

app.listen(9090, () => console.log("Server running on port number 9090"))