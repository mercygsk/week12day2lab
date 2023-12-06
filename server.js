// Load express

const express = require('express');
const app = express();
const port = 3000;

// Create our express app


// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Hello Worldsssss!</h1>');
});
app.get('/greeting', function (req, res) {
    res.send('<h1>Hello Starnger!</h1>');
  });
//   app.get('/greeting/:name', function (req, res) {
//     res.send("Hello"  + req.params.firstname);
//   });
app.get('/greeting/:name', function(req, res) {
    res.send(' wow ! hello there,' + req.params.name );
})
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});