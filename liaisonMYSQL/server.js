const express =require("express")
const db= require("./db")
const app= express()
const router =require("./router/router")
app.get('/', (req, res) => {
    res.send();
  });
  





app.listen(5000,()=>{
    console.log ("...is listening")
})
