const express=require("express");
const app=express();
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})
app.listen(4000,()=>{
    console.log("APP RUNNING AT PORT 4000")
})