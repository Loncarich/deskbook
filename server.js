var express= require('express');
var http=  require('http');
var bodyParser= require('body-parser');
var fs = require('fs');
var path = require('path');
var app= express();
var server= http.createServer(app);

var port= process.env.PORT || 3000;
server.listen(port);

app.use(bodyParser.json())
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/src/styles'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// app.get('/*', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

app.post('/data', function(req, res){
  var query= req.body.query.toLowerCase();
  var filePath= path.join(__dirname, '/data/data.json')
  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
      if (!err){
      var dataObj= JSON.parse(data);
      var allLocations= dataObj.rows;
      var matchingLocations= [];

      allLocations.forEach(function(location){
        var locationCity= location.location_city.toLowerCase();
        if(locationCity === query){
          matchingLocations.push(location);
        }
      })
      if (matchingLocations.length > 4){
        matchingLocations= matchingLocations.slice(0, 4);
      }
      res.send(matchingLocations);
      }else{
          console.log(err);
      }

  })
  // res.sendFile(__dirname + '/data.json');
});