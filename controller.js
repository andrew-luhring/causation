(function () {
  'use strict';
  var express = require ('express')
    , appPort = 5000
    , Server = require ('./server')
    , serveStatic = require ('serve-static')
    , session = require ('express-session')
    , app = express ()
    , fs = require ('fs')
  //, wwwhisper = require('connect-wwwhisper')

  //  view paths
  //==============================
  //
  //
  //
    , coverageD = __dirname + '/tests/coverage/'
    , publicD = __dirname + '/public/';
  //app.use(wwwhisper());
  app.use ('/', serveStatic (publicD))
    .set ('port', (process.env.PORT || appPort))
    .set ('cache', false)
    .label = 'app';
  app.use ('/coverage', serveStatic (coverageD));
  new Server (app);

})();


