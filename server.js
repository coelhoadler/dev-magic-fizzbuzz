var express = require("express");
var app = express();

app.use(express.static(__dirname + '/client'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("fizzbuzz");
})

app.listen(3000);