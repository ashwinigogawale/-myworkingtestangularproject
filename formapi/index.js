const express = require ("express");
const bodyparser = require ("body-parser");
const cors = require("cors");

const mongoose = require('./db.js');
var regcontroller = require('./controllers/regcontrollers.js');
const app = express();
app.use(bodyparser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use('/registerf',regcontroller);

app.listen(3000,()=>{
    console.log(`server is running on port: ${3000}`)
});
