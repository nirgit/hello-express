'use strict';

var express = require('express');

function initRoutes(app) {

	// app.METHOD(PATH, HANDLER)
	app.get('/', function (req, res) {
	  res.sendFile(__dirname + "/static/pages/home.html");
	});

	app.post('/', function(req, res) {
		res.send("POST not supported... sorry dude..");
	});

	app.use(express.static('server/static'));

	app.use(function(req, res) {
		//console.log(req, req.toString());
		// one could also send a file here - a custom 404 page...
		res.send('404 - Sorry "' + req.path + '" wasn\'t found.');
	});

	console.log("App Routes initialized!");
}

exports.initRoutes = initRoutes;