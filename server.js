const express =require("express")
const db= require("./db")
const app= express()
const ofR = require("./router/router")
app.get('/', (req, res) => {
    res.send();
  });
  


  app.use('/of',ofR);


app.listen(4000,()=>{
    console.log ("...is listening")
})