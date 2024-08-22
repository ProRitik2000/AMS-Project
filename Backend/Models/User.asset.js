import mongoose from "mongoose";

//Define User Schemas
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Religion:{
    type:String,
    required:true
  }

});

//Create User Model

export default mongoose.model("User", userSchema);


