/*	main application */
var express = require('express');
var app = express();
var controllers = require('./src/server/controllers');

controllers.init(app);

var server = app.listen(10001, function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("listening on %s %s", host, port);
});