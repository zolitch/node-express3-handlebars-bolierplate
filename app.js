
/* jshint laxcomma : true, quotmark:false */
/* global require, console */

var express = require('express')
  , exphbs  = require('express3-handlebars')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , port = 2005
  , app = express()
  ;

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: "views/partials/"
}));
app.set('view engine', 'handlebars');

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware({
    src : __dirname,
    dest : __dirname + '/public'
  }));
app.use(express.static(path.join(__dirname, 'public')));


/*Locals will be available in templates*/
app.locals = {
  Title : "Super App"
}

app.get('/', routes.index);

app.listen(port);
console.log('Server listening on port ' + port);

