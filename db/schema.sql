drop database retail;
create schema retail;
use retail;
create table departments (
id int primary key auto_increment,
name varchar(30)
);
create table roles (
id int primary key auto_increment,
title varchar (30),
salary decimal (8,2),
department_id int,
FOREIGN KEY (department_id) REFERENCES departments(id)
);
CREATE TABLE employees (
    id INT PRIMARY KEY auto_increment,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);


