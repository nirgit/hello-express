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

	app.use(express.static('static'));

	console.log("App Routes initialized!");
}

exports.initRoutes = initRoutes;