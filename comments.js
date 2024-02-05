// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";

// Create a server
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true, false);
    console.log("URL path: " + urlObj.pathname);
    console.log("URL search: " + urlObj.search);
    console.log("URL query: " + urlObj.query["q"]);

    // If the URL is a comment, then process the comment
    if (urlObj.pathname.indexOf("comment") != -1) {
        console.log("comment route");
        if (req.method === "POST") {
            console.log("POST comment route")