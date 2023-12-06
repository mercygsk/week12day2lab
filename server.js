// Load express

const express = require('express');
const app = express();
const port = 3000;

const magic8ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

// Create our express app
app.get('/magic/:indexOfmagic8ballArray', (req, res) => {
    if (req.params.indexOfmagic8ballArray == "Will I Be A Millionaire") {
    res.send('Question:' + req.params.indexOfmagic8ballArray + " : <h1>" + magic8ball[Math.floor(Math.random()*(magic8ball.length - 0 + 1)+0)] + "</h1>");
    }
    else {
        res.send('cannot find anything at this index: ' + req.params.indexOfmagic8ballArray);
    }
});

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

app.get('/tip/:total/:tipPercentage', (req, res) => {
	console.log(req.params);
	res.send('TIP:' + req.params.total * req.params.tipPercentage/100);
});


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});