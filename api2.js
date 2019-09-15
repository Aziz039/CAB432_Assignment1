var unirest = require("unirest");

var req = unirest("GET", "https://mashape-community-urban-dictionary.p.rapidapi.com/define");

req.query({
	"term": "beautiful"
});

req.headers({
	"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
	"x-rapidapi-key": "8ff3cfc964msh72f4c98a80b01f1p1e90c5jsn418d6d2862e8"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);
	//console.log(res.body);
});