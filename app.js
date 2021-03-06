var express = require('express');
var routes = require('./server/appRoutes');

var app = express();
routes.initRoutes(app);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});
