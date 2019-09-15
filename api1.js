var unirest = require("unirest");

var req = unirest("POST", "https://andruxnet-random-famous-quotes.p.rapidapi.com/");

req.query({
	"count": "10",
	"cat": "movies"
});

req.headers({
	"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
	"x-rapidapi-key": "8ff3cfc964msh72f4c98a80b01f1p1e90c5jsn418d6d2862e8",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);
    console.log(res.body);
    // console.log(typeof app);
});

