const express = require("express");
const  mongoose = require("mongoose");

const resSchema = new mongoose.Schema({
 fname:{
     type:String,
     required:true
 },
 lname:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
phone:{
    type:Number,
    required:true
},
msg:{
    type:String,
    required:true
},
});
 const registerRanking  = new mongoose.model("RegRanking",resSchema);
 module.exports = registerRanking;