var express = require('express')
var path    = require('path')
var http = require('http')

var ejsLayouts = require("express-ejs-layouts")

var app = express();

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Set view engine to ejs
app.engine('ejs', require('ejs-locals'));
app.set("view engine", "ejs"); 
app.set('layout', path.join(__dirname,'/templates/layouts/home_layout'));
app.use(ejsLayouts);
app.set("views", path.join(__dirname, 'templates')); 

var homeRoutes = require('./app/routes/homeRoute');

app.use('/',homeRoutes)

// some environment variables
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });