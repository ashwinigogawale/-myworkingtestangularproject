const mongoose = require ("mongoose");

var Register = mongoose.model('Register',{
    fullname:{type:String},
    email:{type:String},
    password:{type:String},
    birthdate:{type:String},
    country:{type:String},
    gender:{type:String},
    phone:{type:String},
    check:{type:String}
});

module.exports = {Register};