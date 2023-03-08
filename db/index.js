const inquirer = require("inquirer");
const cTable = require("console.table");
const connection = require("./connection.js");
const mysql = require("mysql");
const mysql2 = require("mysql2");

function runSearch() {
    inquirer
    .prompt({
        name: "action",
        type: "rawlist",
        message: "Please choose from the following options:",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Exit",
        ],
    })
    .then(function (answer) {
        switch (answer.action) {
            case "View All Departments":
                viewDepartments();
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "View All Employees":
                viewEmployees();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Update Employee Role":
                updateEmpoyeeRole();
                break;

            case "Exit":
                exit();
                break;
        }
    });
}

function viewDepartments() {
    var query = "SELECT name, id FROM employees.department ORDER BY id asc";
    connection.query(query, function (err, res){
        console.table(res);
        runSearch();
    })
}

function viewEmployees() {
    var query = 
    "SELECT employee.first_name, employee.last_name, role.title FROM employee, role WHERE employee.id = role.id";
    connection.query(query, function (err, res){
        console.table(res);
        runSearch();
    });
}

function viewRoles() {
    var query = 
    "SELECT role.title, role.salary, department.name FROM role, department WHERE department.id = role.department_id;";
    connection.query(query, function (err, res){
        console.table(res);
        runSearch();
    });
}

function addEmployee() {
    inquirer
    .prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?",
        },
        {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?",
        },
        {
            name: "roleID",
            type: "input",
            message: "What is the Role ID of the employee?",
        },
        {
            name: "managerID",
            type: "input",
            message: "What is the manager's ID?",
        },
    ])
    .then(function (answer) {
        var query = 
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
        connection.query(
            query,
            [answer.firstName, answer.lastName, answer.roleID, answer.manID],
            function (err, res) {
                if (err) throw err;
                    console.log(`Successfully Added the Employee: ${answer.firstName} ${answer.lastName}`);
                    runSearch();
            }
        );
    });
}

function addRole() {
    inquirer
    .prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of the new role?",
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the role?",
        },
        {
            name: "departmentID",
            type: "input",
            message: "What is the department ID for the new role? Please select 1 for Sales, 2 for Engineering, 3 for Finance, and 4 for Legal",
            choices: [1, 2, 3, 4],
        },
    ])
    .then(function (answer) {
        var query = 
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
        connection.query(
            query,
            [answer.title, answer.salary, answer.deparmentID],
            function (err, res) {
                if (err) throw err;
                console.log(`Successfully added the role: ${answer.title}`);
                runSearch();
            }
        )
    })
}

