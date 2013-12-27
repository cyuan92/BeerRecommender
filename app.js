//Instantiaate the app using the Express framework for Node
var express = require('express');
var routes = require('./routes/routes.js');
var app = express();

app.use(express.bodyParser());
app.use(express.logger('default'));

//Enable sessions and cookies
app.use(express.cookieParser());
app.use(express.session({secret: '2938fj0a87hf7'}));

//Enable static files in /public for stylesheets, fonts, and client side javascript
app.use(express.static(__dirname + '/public'));

//Define the application's routes
app.get('/', routes.get_main);

//Start the server
var port = 8080;
app.listen(port);
console.log('Server running on port ' + port);