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
              "View All The Managers?",
              "View all Emplyees By Deparments", 
              "View total salary budget?",
              "Update an employee",
              "Add an employee?",
              "Add a new role?",
              "Add a new department?"
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

        case "View All The Managers?":
        viewAllManagers();
        break;

        case "View all Emplyees By Deparments":
        viewAllDepartments();
        break;

        case "Update an employee":
        updateEmployees();
        break;

        case "Add an employee?":
        addEmployee();
        break;

        case "Add a new role?":
        addRole();
        break;

        case "Add a new department?":
        addDepartment();
        break;

        case "View total salary budget?":
        viewTotalSalary();
        break;
    }
  })
}

// function to view all of the employees
function viewAllEmployees(){
// found some help with this online this is pretty much saying take employee's first and last name, their role title, salary, and department name.
// the concat line is saying grab the first name and last name join that into a string giving a space in between. this is for the manager table that way their names are displayed properly.
// AS makes it easier to read and is basically creating an alias called manager, it's getting the names FROM the employee table. first inner join is to make the salary table. 
// ON basically means to join but I am using it here to join the actual role id and saying that it is coming from the employee role id making the link from the different columns.
// using the same concept again to get the department name table and then left join basically means starting from the left ending at the right side, also include the managers.
// if you don't specify left in this case it will not include the managers which isn't good in this case.
  connection.query("SELECT employee.first_name, employee.last_name, role.title AS job_title, role.salary, department.name AS department_name, CONCAT(e.first_name, ' ' ,e.last_name) AS manager FROM employee INNER JOIN role ON role.id = employee.role_id INNER JOIN department ON department.id = role.department_id LEFT JOIN employee e ON employee.manager_id = e.id;", 
// similar to req, res functions, instead of request I am using this to handle any errors and if there are no errors it will run the response
   async function(err, res) {
      if (err) throw console.error("Can't view all the employee's at this time, the query needs adjusting");
// this case the response is to generate the console table npm to display a well formatted table
      console.table(res);
//  this function line lets me have the program to wait before it calls back to the employee menu I don't want the menu to instantly appear once the table is generated
      await new Promise(resolve => setTimeout(resolve, 500));
      return employeeMenu();
    })
}

// function to view all the employees and their roles
function viewAllRoles(){
// this gets the employee's first and last name along with their job title. Make a table that is called job_title since you can't have spaces.
// left in this case retains the original order that I created the db in. join the job titles to the respective employee
  connection.query("SELECT employee.first_name, employee.last_name, role.title AS job_title FROM employee LEFT JOIN role ON employee.role_id = role.id;",
  async function(err,res){
    if (err) throw console.error("Can't view all the employee's at this time, the query needs adjusting")
    console.table(res);
    await new Promise(resolve => setTimeout(resolve, 500));
    return employeeMenu();
  });
}

// function to view all the managers
function viewAllManagers(){
  // basically the same as view all employee's except I changed the name column to department_name and 
  // title to job title
  // this time specificed that I am only looking for employees with the id of null since they are the managers
  connection.query("SELECT employee.first_name, employee.last_name, role.title AS job_title, role.salary, department.name AS department_name FROM employee INNER JOIN role ON role.id = employee.role_id INNER JOIN department ON department.id = role.department_id WHERE manager_id IS NULL;", 
  async function(err,res){
    if (err) throw console.error("Can't view all the employee's at this time, the query needs adjusting")
    console.table(res);
    await new Promise(resolve => setTimeout(resolve, 500));
    return employeeMenu();
  });
}

// function to view all the employees and their departments
function viewAllDepartments(){
  connection.query("SELECT employee.first_name, employee.last_name, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;", 
  async function(err,res){
    if (err) throw console.error("Can't view all the employee's at this time, the query needs adjusting")
    console.table(res);
    await new Promise(resolve => setTimeout(resolve, 500));
    return employeeMenu();
  });
}
// function to view total salary
function viewTotalSalary(){
  // this basically adds up all of the salaries and outputs it as one total value
  connection.query("SELECT SUM(salary) AS total_salary_budget FROM role", 
  async function(err,res){
    if (err) throw console.error("Can't view all the employee's at this time, the query needs adjusting")
    console.table(res);
    await new Promise(resolve => setTimeout(resolve, 500));
    return employeeMenu();
  });
}
// using an array to help store the needed data
// must be outside the function in order to keep the data or else the the last part of the function will return as undefined
var roleArray= []
// function to select a role and show it as a choice that the user can select
// the functions have to be outside because these functions have a name that I call back to. if the function was anonymous then 
function selectRole() {
  // this is selecting everything from the role table
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw console.error("the connection query has a typo, please re-check the query and adjust accordingly.")
    for (var i = 0; i < res.length; i++) {
      roleArray.push(res[i].title);
    }

  })
  return roleArray;
}

var managersArray=[]
// function to select a manager that also provides a list that a user can select
function selectManager(){
        // this is selecting the manager's first and last name and specifing that the id is null because all of the managers have a null id
        connection.query("SELECT employee.first_name, employee.last_name FROM employee WHERE manager_id IS NULL", function(err, res) {
          if (err) throw console.error("the connection query has a typo, please re-check the query and adjust accordingly.")
          for (var i = 0; i < res.length; i++) {
            managersArray.push(res[i].first_name);
          }
      
        })
        return managersArray;
}

function addEmployee(){
  inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?"
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?"
    },
    {
      type: "list",
      name: "addRole",
      message: "What is the employee's role in this company?",
      choices: selectRole()
    },
    {
      type: "list",
      name: "addManager",
      message: "Choosing by first name, what is the manager's name that is assigned to this employee?",
      choices: selectManager()
      
    }
  ]).then(function (value) {
    // an array starts at the index of 0, I have all the managers at 1-4 so plus one makes it that the outcome will for the managers choices will be correct.
    // same concept applies to the roles
    var roleId = selectRole().indexOf(value.addRole) + 1
    var managerId = selectManager().indexOf(value.addManager) + 1
    // cool trick is that in sql the ? is a dynamic parameter and set there as a place holder. in this case that would be where we assign the first and last name, along with the ids to the proper values
    connection.query("INSERT INTO employee SET ?", 
    {
        first_name: value.firstName,
        last_name: value.lastName,
        manager_id: managerId,
        role_id: roleId
        
    }, async function(err){
        if (err) throw console.error("please recheck the query along with the variables to see if you have written them correctly.")
        console.table(value)
        await new Promise(resolve => setTimeout(resolve, 500));
        return employeeMenu();
    })

})
}
