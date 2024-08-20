const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const port=process.env.PORT ||'3000'


//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view-engine','ejs');

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/',{
useNewURLParser:true,
useUnifiedTopology:true
});

//Use routes



//Start Server
app.use(3000,()=>{
    console.log(`Server is running at ${port}`);
    
})