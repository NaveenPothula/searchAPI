const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name: String,
    age: Number,
    gender: String,
    email: String,
    phone: Number,
    Birth_date: Date
})

const User= mongoose.model("User",userSchema)  

module.exports= User