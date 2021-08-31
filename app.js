const bodyParser = require("body-parser");
const express=require("express");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
const sequelize=require("./database/connect")
const userroute=require("./routes/userroute")

const mongoose=require("mongoose")

app.use(userroute)


mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false").then(
    result=>{
        //console.log(result)
        console.log("APP RUNNING AT PORT 4000")
        app.listen(4000)
    }
).catch(
    err=>{
        console.log(err)
    }
)
