var express = require('express');
var expressHandlebars  = require('express-handlebars');
var http = require('http');

var PORT = 8000;

var LINES = [
    "2",
    "3",
    "4",
    "5d",
];

var lineIndex = 0;

var app = express();
app.engine('html', expressHandlebars());
app.set('view engine', 'html');
app.set('views', __dirname);
app.get('/', function(req, res) {
    var message = LINES[lineIndex];

    lineIndex += 1;
    if (lineIndex >= LINES.length) {
        lineIndex = 0;
    }

    res.render('index', {message: message});
});

http.Server(app).listen(PORT, function() {
    console.log("HTTP server listening on port %s", PORT);
});