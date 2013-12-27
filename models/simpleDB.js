var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var simpledb = new AWS.SimpleDB();
var async = require('async');

var userTable = "beer_users";
var dataTable = "beer_data";

