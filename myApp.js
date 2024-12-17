let express = require('express');
let app = express();

console.log("Hello World");



app.get("/",function response(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });




































 module.exports = app;
