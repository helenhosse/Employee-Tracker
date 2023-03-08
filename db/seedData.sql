USE employees;

--Insert Data To Department Table
INSERT INTO department(name)

VALUES ('Development'), ('Quality Assurance'), ('Human Resources'), ('Operations');


-- Insert Data into Role Table
INSERT INTO Role (title, salary, department_id)

VALUES
('Development Lead', 150000, 1), ('Developer', 100000, 1),
('Lead Test Engineer', 150000, 2), ('Test Engineer', 100000, 2),
('HR Manager', 110000, 3), ('HR Represenative', 80000, 3),
('Operations Lead', 140000, 4), ('Operations Engineer', 90000, 4);

-- Insert Data into Employee Table
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Helen', 'Hosse', 1, NULL), ('Lucie', 'Thompson', 2, 1), ('Kara', 'Faris', 3, NULL),
    ('Mike', 'Swalito', 4, 3), ('Erin', 'Beery', 5, NULL), ('Marina', 'Star', 6, 5),
    ('David', 'Owens', 7, NULL), ('Rico', 'Ricardo', 8, 7);