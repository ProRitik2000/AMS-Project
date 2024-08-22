import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./Routes/User.routes.js";

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || "3000";
const URL = process.env.Mongo_URL;

//Connect to MongoDB
mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected successfully...");

    app.listen(PORT, () => {
      console.log(`Server is running on port number: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));


  app.use('/api',route);
  
  