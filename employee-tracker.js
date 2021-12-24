// get what I need for the app
const inquirer= require('inquirer');
// get the console table
require('console.table')
const mysql = require('mysql2');
// setting up dotenv need this or else dotenv will NOT work
require('dotenv').config();
// these are all my connection variables
const dbUserName= process.env.sql_USER
const dbPass= process.env.sql_Pass
const dbHost= process.env.sql_HOST
const db= process.env.DB
const dbPort= process.env.PORT
// get the connection from my connection file
const connection =
    mysql.createConnection({
        host: dbHost,
        user: dbUserName,
        port: dbPort,
        password: dbPass,
        database: db
    });

// this cool function helps me use the connection I have already made
// throw basically means to generate and I wanted to add a more descriptive error message because if you just leave it as err it will say nothing and boot you off the program, 
// I will know where the error came from but a user just using their own version will not
connection.connect(function(err) {
  if (err) throw console.error("error getting connection")
  console.log("Connected as Id" + connection.threadId)
  employeeMenu();
});
//================== Initial Prompt =======================//
function employeeMenu() {
}