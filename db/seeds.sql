-- I have to use the database that way I can 
USE employee_tracker_db;
-- Department Seeds
-- these are the department names aka sales, finance, engineering, and legal
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

-- Employee Role Seeds
-- this is the what their job title is, their salary they get for that role, and the id # that role belongs to
-- id helps sql understand what set of data I just made to store it under the id I set
-- aka if it's sales then this id will be 1, engineering is 2, etc
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant Manager", 160000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 4);

-- Employer Seeds
-- this is all the employees that show their full names, who their manager is and what their role is
-- if the manager id is null then that means they are the manager
-- manager id = the employee id aka brad jhonson is a sales lead his manager id is 1 since he is the first person on the employee list
-- their role_id relates to the actual roles' ids
-- aka sales lead is 2, sales person is 1 etc
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Brad", "Johnson", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Cindy", "Lu", 1, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John", "Doe", null, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Ashley", "Rodriguez", 3, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Liam", "Nesson", null, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Chris", "Diaz", 5, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Johnny","Good", null, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Brandon", "Baker", 7, 8);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tom", "Nook", 7, 8);

-- this helps with mysql2 to basically search through everyone in the department, role, and employee tables 
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;