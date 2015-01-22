var express = require('express'),
  swig = require('swig')
  helmetCsp = require('helmet-csp');

var app = express();

// Swig config
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);

// Helmet config
app.use(helmetCsp({
  scriptSrc: ['\'self\'', '\'unsafe-inline\''],
  disableAndroid: true
}));

app.get('/', function (req, res) {
  res.render('csp');
});

app.listen(3000);
console.log('Application Started on http://localhost:3000/');
