var express = require('express');
var path = require("path");
var useragent = require('express-useragent');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"), function(err) {
        if (err) console.log(err);
    });
});

app.get("/api/whoami", function(req, res) {
    var ipAddr = request.headers['x-forwarded-for'];

    res.json({
        ip: ipAddr
    });
});

app.listen(process.env.PORT || 3000, function () {
    console.log('App Started');
});
