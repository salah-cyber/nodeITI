const mongoose = require('mongoose');
const valid = require("validator"); // npm package
const jwt = require("jsonwebtoken")
const config = require("config"); // to deal with config file because i want to hide token n my code



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true,
        minlength: 3,
        maxlength: 50,
        trim: true
    },
    email: {
        type: String,
        reqired: true,
        unique: true,
        //validate: (val) => {
            //return valid.isEmail(val);
        //},
        //message: '{value} is not valid email'
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    isAdmin:{
        type:Boolean
    }
})
userSchema.methods.genAuthToken=function(){
    const token = jwt.sign({
        userid:this._id,
        adminRole:this.isAdmin
    },config.get("jwtsec")); 
    return token;
};


//const User = mongoose.model("users", userSchema); // users collection in small letter
//users -> name of collection in database
//module.exports = User; //User act as class

exports.User = mongoose.model("users", userSchema);
