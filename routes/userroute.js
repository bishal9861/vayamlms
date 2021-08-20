const express=require("express");
const path=require("path")
const route=express.Router()
const userfunction=require("../controller/function.js")

route.get('/login' ,userfunction.userLogin )
route.get("/signup",userfunction.userSignup)
route.post("/loggedIn",userfunction.userLogged)

module.exports= route;