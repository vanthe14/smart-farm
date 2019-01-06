var express = require('express')
var path    = require('path')
var http = require('http')
var cookieParser = require('cookie-parser');
var i18n = require('i18n')

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

/* SETTING MUTILANGUAGE */
app.use(cookieParser());

i18n.configure({
    locales: ['en', 'vi' , 'ja'],
    register: global,
    fallbacks: {'en' : 'vi'},
    cookie: 'language',
    queryParameter: 'lang',
    defaultLocale: 'en',
    directory: __dirname + '/languages',
    autoReload: true,
    updateFiles: true,
    api: {
        '__' : '__',
        '__n' : '__n'
    },
    
})
app.use(function(req, res, next){
    i18n.init(req, res, next);
});

app.use(function(req, res, next){
    res.locals.clanguage = req.getLocale();
    res.locals.languages = i18n.getLocales();
   
    next();
})

/*SETTING ROUTE */
var homeRoutes = require('./app/routes/homeRoute');

app.use('/',homeRoutes)

// some environment variables
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });

  //add 1 commit

  // add 2 commit

  // adđ rename origin
  //add new demo