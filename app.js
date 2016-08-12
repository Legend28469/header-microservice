var express = require('express');
var path = require("path");
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"), function(err) {
      if (err) console.log(err);
  });
});

app.get("/api/whoami", function(req, res) {
    res.json({
        Stuff: "Stuff"
    });
})

app.listen(process.env.PORT || 3000, function () {
  console.log('App Started');
});
