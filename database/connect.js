const mysql=require("mysql");
require("dotenv").config()
let password=process.env.DB_PASSWORD
const Sequelize=require("sequelize");
const sequelize = new Sequelize('vayam', 'bishal', "Cs190048", {
    host: 'localhost',
    dialect: "mysql"
  });
module.exports= sequelize