const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/customer").then(()=>{
    console.log("connection successFull");
}).catch((err)=>{
    console.log("not success")
}) 