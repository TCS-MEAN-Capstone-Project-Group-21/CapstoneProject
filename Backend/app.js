//Load in all the modules
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let app = express();
let userRouter = require("./router/user.router")
let productRouter = require("./router/product.router");

//add middleware
app.use(cors());

//bodyparser is depricated replaced by express.urlencoded
app.use(bodyParser.json())
//app.use(express.urlencoded({ extended: true }));

//Database URL
let url = "mongodb://localhost:27017/mylib"
//!!!!---- Replace with AWS Database URL ----!!!!

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

app.use("/api/user",userRouter);
app.use("/api/product", productRouter);

app.listen(9090, () => console.log("Server running on port number 9090"))