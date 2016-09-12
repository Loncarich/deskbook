var express= require('express');
var http=  require('http');
var app= express();
var server= http.createServer(app);

var port= process.env.PORT || 3000;
server.listen(port);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/src/styles'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/data', function(req, res){
  res.sendFile(__dirname + '/data.json');
});