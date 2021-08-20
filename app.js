const bodyParser = require("body-parser");
const express=require("express");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
const sequelize=require("./database/connect")
const userroute=require("./routes/userroute")

app.use(userroute)

app.listen(4000,()=>{
    
    console.log("APP RUNNING AT PORT 4000")
})