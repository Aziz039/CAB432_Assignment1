const express = require('express');
const path = require('path');
// var unirest = require("unirest");
// const api1 = require('./api1.js');
// const api2 = require('./api2.js');

const app = express();



app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;


app.get('/api/quotes', (req, res) => {
    res.send('<h1>Hello Mo</h1>');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    //console.log(api1);
});