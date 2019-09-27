const express = require('express');
const path = require('path');
var http = require('http');
const api1 = require(path.join(__dirname,'/api1.js'));
var unirest = require("unirest");


// Translation text
var text = 'hello';

// init express
const app = express();

// set public folder static
app.use(express.static(path.join(__dirname, 'public')));

// determine the PORT
const PORT = process.env.PORT || 8080;

// send quotes API to '/api/quotes'
app.get('/api/quotes', (req, res) => {
	res.set('Content-Type', 'application/json');
	res.json(api1);
});

// send translation API to '/api/translated'
app.get('/api/translated', (req, res) => {
	// get word from cookie or default to hello
	text =  parseCookies(req).translateFrom || 'hello';
	// my API
	var api = "AIzaSyA5gK46O4OiVxQrKHYi5fWQK8cb4tqUIFU";
	// translate words from api
    var googleTranslate = require('google-translate')(api);
	googleTranslate.translate(text, 'es', function(err, translation) {
		exports.translateResult = translation.translatedText;
		res.json(exports.translateResult);
	});

});

// listes to requests
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

// function to parse cookies
function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}