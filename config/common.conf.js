var files = require ('./files.js');

module.exports = {
  basePath: '../'
, frameworks: ['jasmine']
, files: files
, exclude: []
, port: 9876
, colors: true
, autoWatch: true
, coverageReporter: {
    type: 'html'
  , dir: './tests/coverage/'
  , subdir: function (browser) {
      "use strict";
      //normalize browser directory names
      return browser.toLowerCase ().split (/[ /-]/)[0];
    }
  }
//preprocessors: {
  //  'public/js/**/*.js' : ['traceur']
  // ,  'tests/unit/**/*.js' : ['traceur']
  //}
};
