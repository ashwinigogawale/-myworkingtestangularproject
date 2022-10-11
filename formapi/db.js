const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/registers",{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true  
}).then(()=>{
    console.log(` Mongodb connection successfully`);
}).catch((e)=>{
    console.log(`No connection`);
});
module.exports=mongoose;
