const mongoose = require("mongoose");

const customer = new mongoose.Schema({
    email:{
    type:String,
    required:true,
    unique:true
},
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }

})

// we need to create collection

const Register = new mongoose.model("User",customer);

module.exports = Register;