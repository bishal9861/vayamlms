const express=require("express");
const path=require("path")
const route=express.Router()
const userfunction=require("../../controller/usercontroller/function.js")

route.get('/login' ,userfunction.userLogin )

module.exports= route;