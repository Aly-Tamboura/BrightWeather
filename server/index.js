'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/css'))

app.listen(3000, function() {
	console.log('weather app listening on port 3000');
})