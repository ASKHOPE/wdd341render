var express = require('express');
var app = express();

const routes = require("express").Router();

app.get("/", (req, res,next) => {
  
  res.send("Awesome Mr.Nobody"); //Send 
  //res.end(); // Finsihes the response
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


module.exports = routes;