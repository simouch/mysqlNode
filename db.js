const mysql = require('mysql');
  const sequelize = require("sequelize")
const con = mysql.createConnection({
    host: "192.168.1.250",
    user: "diva",
    password: "diva",
    database:"djo",
    port:3308
});
  

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  
 
});


module.exports = con
