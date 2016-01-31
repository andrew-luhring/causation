(function() {
  'use strict';
  var express = require('express')
    , appPort = 5000
    , Server = require('./server')
    , serveStatic = require('serve-static')
    , session = require('express-session')
    , app = express()
    , fs = require('fs')
    , bodyParser = require('body-parser')
    , registrar = require('./backend/registrar.js')

  //, wwwhisper = require('connect-wwwhisper')

  //  view paths
  //==============================
  //
  //
  //
    , coverageD = __dirname + '/tests/coverage/'
    , publicD = __dirname + '/public/';
  //app.use(wwwhisper());
  app.use('/', serveStatic(publicD))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .set('port', (process.env.PORT || appPort))
    .set('cache', false)
    .label = 'app';


  app.post('/add', function(req, res) {
    var body = req.body;
    registrar(body);
    res.send(body);
  });

  app.use('/coverage', serveStatic(coverageD));
  new Server (app);

})();
