const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: null,
    database: "employees"
});

connection.connect();

connection.query = util.promisfy(connection.query);

module.exports = connection;