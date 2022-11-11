const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    class:String,
    email:{
        type:String,
        required:true,
        index:{
            unique:true,
        },
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type:String,
        required:true
    }
});


const user = mongoose.model("User",userSchema)//cretae a database if there will be no folder with i t will create a basic folder with product
module.exports = user 