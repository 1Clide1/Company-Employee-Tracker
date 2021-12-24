-- drop database if it exists as a just incase I mess up I can restart the db process
DROP DATABASE IF EXISTS employee_tracker_db;
-- creates the db
CREATE DATABASE employee_tracker_db;

-- that way I can actually use the db
USE employee_tracker_db;

-- create a department table
CREATE Table department(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- that way we can hold a department name, works the same way as name and title
name VARCHAR(30)
);

-- create role
CREATE Table role(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  -- I need to refrence the department_id to the role that department belongs to I can do this with the use of a foreign key because this can do exactly that
  -- the same idea will be used under the employee table
  FOREIGN KEY (department_id) REFERENCES department(id)
);
-- lastly create a table for employee
CREATE Table employee(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);
