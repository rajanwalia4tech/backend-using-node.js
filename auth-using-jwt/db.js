const mysql = require("mysql2");
const config = require("config");

const connection = mysql.createConnection({
    "host": config.get("MYSQL.HOST"),
    "database": config.get("MYSQL.DATABASE"),
    "user":config.get("MYSQL.user"),
    "password":config.get("MYSQL.PASSWORD")
})


module.exports.connection = connection