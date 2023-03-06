const fs = require('fs');
const mysql = require('mysql');
const inquirer = require('inquirer');
const ctable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3000, // might be 3306
    user: "root",
    password: null,
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
    empTrack();
});

