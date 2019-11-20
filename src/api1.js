var unirest = require('unirest');

var req = unirest('POST', 'https://andruxnet-random-famous-quotes.p.rapidapi.com/');

// query 10 quotes
req.query({
	count : '10',
	cat   : 'famous'
});

// headers 
req.headers({
	'x-rapidapi-host' : 'andruxnet-random-famous-quotes.p.rapidapi.com',
	'x-rapidapi-key'  : 'KEY',
	'content-type'    : 'application/x-www-form-urlencoded'
});
req.form({});

// export response
req.end(function(res){
	if (res.error) throw new Error(res.error);
	exports.quotes = res.body;
});
