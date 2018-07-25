/*var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/NodeMusic";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log(" created!");
  db.close();
});*/
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NodeMusic");
  dbo.createCollection("NodeDetails", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});*/


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NodeMusic");
  var myobj = [
  {SongName:"Evano Oruvan",                    Film:"Alai Payuthey",   MusicDirector:"A.R.Rahman",        Singer:"Swarnalatha"},
  {SongName:"Roja Poonthoddam",                Film:"Kannukkul Nilavu",MusicDirector:"Illayaraaja",       Singer:"Unnikrishnan,Anuradha"},
  {SongName:"Vennilave Vennilave Vinaithaandi",Film:"Minsaara Kanavu", MusicDirector:"A.R.Rahman",        Singer:"Hariharan,Sadhana Sargam"},
  {SongName:"Sollamal Thoddu Chellum",         Film:"Dheena",          MusicDirector:"Yuven Shankar Raja",Singer:"Hariharan"}];
  dbo.collection("NodeDetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
