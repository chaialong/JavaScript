var http = require('http');
var fs = require('fs');
//var index = fs.readFileSync('test\/calculator.html');

function walkSync(currentDirPath, callback) {
    var fs = require('fs'),
        path = require('path');
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

http.createServer(function (req, res) {
    var utc = new Date().toJSON().slice(0,10);
    var time = new Date().toLocaleTimeString();
    var currentTime = utc + " " + time;
    console.log(currentTime + " [200] " + req.method + " to " + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    walkSync('test', function(filepath, stat){
            if(req == filepath) {
                res.end(req);
            }
      });


}).listen(8081);