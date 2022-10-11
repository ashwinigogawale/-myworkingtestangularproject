const express = require ("express");
const app = express();
require("./db/conn");
const RegRanking= require("./models/res");
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.json());

const static_path = path.join(__dirname, "../public" );
app.use(express.static(static_path));// it write inex.html in here file code or it is static path
app.set("view engine","hbs");// to use this file use res.render in method
//get method
app.get("/",(req,res)=>{
    res.send("WELCOME TO DATABASE")
});
app.get("/register",(req,res)=>{
    res.send("WELCOME TO APPOINMENT")
});
app.get("/register1",(req,res)=>{
    res.send("WELCOME TO REGISTRATION FORM")
});
app.get("*",(req,res)=>{
    res.send("OOPS 404 ERROR")
});
//post method
app.post("/register1",async(req,res)=>{
    try{
const addingrecord = new RegRanking(req.body)
console.log(req.body);
const insertreg = await addingrecord.save();
res.status(201).send(insertreg);
addingrecord.save();
    }catch(e){
res.status(400).send(e);
    }
})
//get method
app.get("/register1",async(req,res)=>{
    try{
      const getreg =await RegRanking.find({}).sort({"_id":1});
res.send(getreg);

    }catch(e){
res.status(400).send(e);
    }
})
//get with id
app.get("/register1/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
      const getregs =await RegRanking.findById({_id});
res.send(getregs);

    }catch(e){
res.status(400).send(e);
    }
})
//patch or put method
app.patch("/register1/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
      const getregs =await RegRanking.findByIdAndUpdate(_id,req.body,{new:true});
res.send(getregs);

    }catch(e){
res.status(500).send(e);
    }
})
//delete method
app.delete("/register1/:id",async(req,res)=>{
    try{
        
      const getregs =await RegRanking.findByIdAndDelete(req.params.id);
res.send(getregs);

    }catch(e){
res.status(500).send(e);
    }
})

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
});