var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

//enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Auth-Token, Auth-Schema"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const baseUrl = "/api";

app.get(`${baseUrl}/hello/:firstName`, function (req, res) {
  res.set("Content-Type", "application/json");
  fs.readFile(
    __dirname + "/responses/sampleResponse.json",
    "utf8",
    function (err, data) {
      console.log("First Name: ", req.params.firstName);
      res.end(data);
    }
  );
});

app.post(`${baseUrl}/hello/:firstName`, function (req, res) {
  res.set("Content-Type", "application/json");
  fs.readFile(
    __dirname + "/responses/sampleResponse.json",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Mock apis running at http://localhost:${port}`);
});
