var express = require('express');
var path = require("path");
var useragent = require('express-useragent');
var app = express();

// To get OS info
app.use(useragent.express());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"), function(err) {
        if (err) console.log(err);
    });
});

app.get("/api/whoami", function(req, res) {
    var ipAddr = req.headers['x-forwarded-for'];
    var lang = req.headers["accept-language"].split(",")[0];
    var browser = req.useragent.browser;
    var browserVersion = req.useragent.version;
    var os = req.useragent.os;
    var platform = req.useragent.platform;

    res.json({
        ip: ipAddr,
        language: lang,
        system: os,
        platform: platform,
        browser: browser,
        "browser version": browserVersion
    });
});

app.listen(process.env.PORT || 3000, function () {
    console.log('App Started');
});
