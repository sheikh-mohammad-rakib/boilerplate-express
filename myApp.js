let express = require('express');
let app = express();

console.log("Hello World");



app.get("/",function response(req, res) {
    res.send('Response String');
  });




































 module.exports = app;
