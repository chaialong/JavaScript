var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('test\/demo.txt');

http.createServer(function (req, res) {
  var utc = new Date().toJSON().slice(0,10);
  var time = new Date().toLocaleTimeString();
  var currentTime = utc + " " + time;
  console.log(currentTime + " [200] " + req.method + " to " + req.url);
  res.writeHead(200, {'Content-Type': 'text/html','Access-Control-Allow-Origin': '*'});
  res.end(index);
}).listen(8080);