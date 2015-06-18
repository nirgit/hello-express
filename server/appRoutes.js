'use strict';

var express = require('express');
var bodyParser = require('body-parser')
var Firebase = require("firebase");

var myFirebaseRef = new Firebase("https://hxrfh6ss6ym.firebaseio-demo.com/tweets");

function initRoutes(app) {

	// parse application/json
	app.use(bodyParser.urlencoded({
    	extended: true
	}));
	app.use(bodyParser.json());

	// app.METHOD(PATH, HANDLER)
	app.get('/', function (req, res) {
	  res.sendFile(__dirname + "/static/pages/home.html");
	});

	app.get('/tweets', function(req, res) {
		myFirebaseRef.once("value", function(data) {
  			res.send(data.val());
		});
	});

	app.post('/posts', function(req, res) {
		// console.log('REQUEST /posts: ', req.body);
		res.json({status: "OK"});
	});

	app.post('/', function(req, res) {
		res.send("POST not supported... sorry dude...");
	});

	app.use(express.static('node_modules'));
	app.use(express.static('server/static'));

	app.use(function(req, res) {
		//console.log(req, req.toString());
		// one could also send a file here - a custom 404 page...
		res.send('404 - Sorry "' + req.path + '" wasn\'t found.');
	});

	console.log("App Routes initialized!");
}

exports.initRoutes = initRoutes;