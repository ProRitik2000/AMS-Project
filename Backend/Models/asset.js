const mongoose=require('mongoose');

//Define User Schemas
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});


//Create User Model

const User=mongoose.model('User',userSchema);

module.exports=User;