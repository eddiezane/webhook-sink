var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var multer = require('multer');

server.listen(3000);

app.use(bodyParser());
app.use(multer());

app.get('/', function(req, res) {
  res.end();
});

app.post('/', function(req, res) {
  res.end();
});
