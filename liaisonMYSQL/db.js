const mysql = require('mysql');
  
const con = mysql.createConnection({
    host: "192.168.1.250",
    user: "diva",
    password: "diva",
    database:"djo",
    port:3308
});
  
// Created the Connection
/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/
  
// Created the Database named as "gfg"
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  
 //   con.query("CREATE DATABASE gfg",
 //      function (err, result) {
 //           if (err) throw err;
  //          console.log("Database created");
 //       });
});
con.query("select * from ofabrication",(err,res)=>{
    return console.log(res)
})
let post = { IDOFabrication: "4545", OFAbrication: " blabla" };

  let sql = "INSERT INTO ofabrication SET ?";

  con.query(sql, post, (err,res) => {

    if (err) {

      throw err;

    }

    res.send("of 1 added");

  });


con.end