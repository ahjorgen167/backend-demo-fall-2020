var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var usersRouter = require('./routes/users');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors())

app.use('/users', usersRouter);

app.use('/', function(req, res) {
  res.send("Uh oh")
})
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("starting at" + port);
})
