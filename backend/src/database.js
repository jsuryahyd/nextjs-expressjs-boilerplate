// @ts-check

var mysql = require("mysql");
const pool = mysql.createPool({
  multipleStatements: true,
  host: process.env.dbHost,
  user: process.env.dbUsername,
  password: process.env.dbPassword,
  database: process.env.isTesting
    ? "testing_" + process.env.database
    : process.env.database,
  charset: "utf8mb4"
  // useUnicode: "yes"
  // connectionLimit : 10
});

export default pool;
