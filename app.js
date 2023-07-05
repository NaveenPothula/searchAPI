const express=   require("express");
const bodyParser= require("body-parser");
const userRouter = require("./userRoutes");




const app =express()

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true}))


app.use("/api/users",userRouter)


app.all('*', (req, res, next) => {
   next("cannot find the url");    
 });
 


 module.exports =app;  
