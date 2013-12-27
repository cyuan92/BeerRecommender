//Routes for the app

var db = require('../models/simpleDB.js');
var bcrypt = require('bcrypt-nodejs');
var async = require('async');

//Route for root page /
var getMain = function(req, res) {
	var message = getMessage(req);
	//Render the page, given any messages
	res.render('main.ejs', {message: message});

};

//Check if there is a message to be passed in the session variable "message". Return either the string or null
var getMessage = function(req) {
	var message = null;

	if (req.session.message) {
		message = req.session.message;
		
		//Remove it from the session so it doesn't get called again
		req.session.message = null;
	}

	return message;
};

var routes = {
	get_main: getMain
};

module.exports = routes;