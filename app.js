/*	main application */
var express = require('express');
var todo    = require('./src/server/routes/todo');


var app = express();
app.use('/todo', todo);


app.use('/public', express.static(__dirname + '/src/public'));
app.all('/*', function (req, res, next) {
    res.sendFile('src/index.html', {root: __dirname});
});


var server = app.listen(10001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("listening on %s %s", host, port);
});
