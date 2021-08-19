const mysql=require("mysql");
require("dotenv").config()
let password=process.env.DB_PASSWORD
const pool= mysql.createConnection({
    user:"bishal",
    host:"localhost",
    database:"vayam",
    password:password
})
module.exports= pool