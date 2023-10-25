insert into departments (name)
values ('Bakery');

insert into roles (title, salary, department_id)
values ('Head Baker', 100000, 1);

insert into employees (first_name, last_name, role_id, manager_id)
values ('Dallas', 'Thompson', 1, null);
