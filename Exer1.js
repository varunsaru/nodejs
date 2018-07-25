/*var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Welcome to Uki. I am Varun");
    res.end();
}).listen(8080);*/
/*var http = require('http');
var fs= require("fs")
http.createServer(function(req, res){
  fs.readFile('ukinode.txt',function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Welcome to Uki. I am Varun");
    res.write(data);
    res.end();

});
}).listen(8080);*/
/*var fs = require('fs');
fs.appendFile('ukinode.txt',' Iam an Ukian!', function(err){
  if(err)throw err;
  console.log('Saved!');
});*/

/*var fs= require('fs');
fs.rename('ukinode.txt','ukinodejsexercise1.txt', function(err){
  if(err)throw err;
  console.log('File Renamed!');
});*/

/*var fs= require('fs');
fs.unlink('ukinodejsexercise1.txt', function(err){
  if(err)throw err;
  console.log('File Renamed!');
});*/

/*var http = require('http');
var caps = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(caps("Uki is the best place to learn programming !"));
    res.end();
}).listen(8080);*/

/*var action = require('events');
var emitter = new action.EventEmitter();
var dogSound = function(){
  console.log("I bark when i see strangers !");
}
emitter.on('bark', dogSound);
emitter.emit('bark');*/

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/ukistu04/Documents/uki3/Backend/nodejs/lecture/lib/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload" ><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);


/*var http = require('http');
var sum = require('./mymodule');

http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write("Sum of two numbers is : " + sum.sumAndAverage(123, 321));
  res.end();
}).listen(8080);*/
