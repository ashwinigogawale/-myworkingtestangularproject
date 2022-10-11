const express = require ("express");
const { Mongoose } = require("mongoose");
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var { Register } = require ('../models/register');

router.get('/',(req,res)=>{
    Register.find((err,docs)=>{
if(!err){res.send(docs);}
else {console.log('Error in retriving :'+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`no rwcord with given id: ${req.params.id}`);
    Register.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in retriving :'+JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    var reg = new Register({
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password,
        birthdate:req.body.birthdate,
        country:req.body.country,
        gender:req.body.gender,
        phone:req.body.phone,
        check:req.body.check,
    });
    reg.save((err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in retriving :'+JSON.stringify(err,undefined,2));} 
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`no rwcord with given id: ${req.params.id}`);
var reg = {
    fullname:req.body.fullname,
    email:req.body.email,
    password:req.body.password,
    birthdate:req.body.birthdate,
    country:req.body.country,
    gender:req.body.gender,
    phone:req.body.phone,
    check:req.body.check,
};
Register.findByIdAndUpdate(req.params.id,{$set:reg},{new:true},(err,doc)=>{
    if(!err){res.send(doc);}
        else {console.log('Error in Update :'+JSON.stringify(err,undefined,2));} 
});
});


router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no rwcord with given id: ${req.params.id}`);
    
    Register.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in Delete :'+JSON.stringify(err,undefined,2));} 
    });
});

module.exports= router;