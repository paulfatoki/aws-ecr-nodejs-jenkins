var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Welcome to the amazing world of AI" }');
});

app.get('/next', function (req, res) {
    res.send('{ "response": "yes this is the next page,please register your account"}');
});
app.get('/ok', function (req, res) {
    res.send('{ "response": " Nice Job!, cool job and welldone!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;