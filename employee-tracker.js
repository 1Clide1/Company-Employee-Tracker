// get what I need for the app
const inquirer= require('inquirer');
// get the console table
require('console.table')
const mysql = require('mysql2');
// setting up dotenv need this or else dotenv will NOT work
require('dotenv').config();
// this is a separate file of all my connection variables
const env= require('./conncetion-variables/connectionVariables')
// get the connection from my connection file
const connection =
    mysql.createConnection({
        host: env.dbHost,
        user: env.dbUserName,
        port: env.dbPort,
        password: env.dbPass,
        database: env.db
    });

// this cool function helps me use the connection I have already made
// throw basically means to generate and I wanted to add a more descriptive error message because if you just leave it as err it will say nothing and boot you off the program, 
// I will know where the error came from but a user just using their own version will not
// this is also a triple check to see if I wrote down the correct variables right in the connection object
connection.connect(function(err) {
  if (err) throw console.error("error getting connection, please recheck the connection variables")
  console.log("Connected as Id" + connection.threadId)
  employeeMenu();
});

// Main app begins
function employeeMenu() {
  inquirer.prompt([
    {
      type: "list",
      name:"optionsList",
      message: "Select an option, choose what you want to do.",
      choices: [
              "View All Employees?", 
              "View All Employee's By Roles?",
              "View all Emplyees By Deparments", 
              "Update Employee",
              "Add Employee?",
              "Add Role?",
              "Add Department?"
      ]
    }
  ]).then(function(value){
    switch (value.optionsList) {
      default:
        viewAllEmployees();
        break;

        case "View All Employee's By Roles?":
        viewAllRoles();
        break;

        case "View all Emplyees By Deparments":
        viewAllDepartments();
        break;

        case "Update Employee":
        updateEmployees();
        break;

        case "Add Employee?":
        addEmployee();
        break;

        case "Add Role?":
        addRole();
        break;

        case "Add Department?":
        addDepartment();
        break;
    
    }
  })
}
function viewAllEmployees(){
// found some help with this online this is pretty much saying take employee's first and last name, their role title, salary, and department name.
// the concat line is saying grab the first name and last name join that into a string giving a space in between. this is for the manager table that way their names are displayed properly.
// AS makes it easier to read and is basically creating an alias called manager, it's getting the names FROM the employee table. first inner join is to make the salary table. 
// ON basically means to join but I am using it here to join the actual role id and saying that it is coming from the employee role id making the link from the different columns.
// using the same concept again to get the department name table and then left join basically means starting from the left ending at the right side, also include the managers.
// if you don't specify left in this case it will not include the managers which isn't good in this case.
  connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS manager FROM employee INNER JOIN role ON role.id = employee.role_id INNER JOIN department ON department.id = role.department_id LEFT JOIN employee e ON employee.manager_id = e.id;", 
// similar to req, res functions, instead of request I am using this to handle any errors and if there are no errors it will run the response
   async function(err, res) {
      if (err) throw console.error("Can't view all the employee's at this time, the query needs adjusting");
// this case the response is to generate the console table npm to display a well formatted table
      console.table(res);
//  this function line lets me have the program to wait before it calls back to the employee menu I don't want the menu to instantly appear once the table is generated
      await new Promise(resolve => setTimeout(resolve, 300));
      return employeeMenu();
    })
}
function viewAllRoles(){
// this gets the employee's first and last name along with their job title. Make a table that is called job_title since you can't have spaces.
// left in this case retains the original order that I created the db in. join the job titles to the respective employee
  connection.query("SELECT employee.first_name, employee.last_name, role.title AS job_title FROM employee LEFT JOIN role ON employee.role_id = role.id;",
  async function(err,res){
    if (err) throw console.error("Can't view all the employee's at this time, the query needs adjusting")
    console.table(res);
    await new Promise(resolve => setTimeout(resolve, 300));
    return employeeMenu();
  });
}