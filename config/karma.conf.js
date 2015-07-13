var commonConfig = require ('./common.conf.js');

module.exports = function (config) {
  "use strict";
  commonConfig.reporters = ['nyan', 'growl'];
  commonConfig.browsers = [];
  commonConfig.captureTimeout = 60000;
  commonConfig.singleRun = false;
  commonConfig.logLevel = config.LOG_DEBUG;
  config.set (commonConfig);
};

//    commonConfig.browsers  = ['PhantomJS', 'Chrome']
//    commonConfig.browsers  = ['PhantomJS', 'Chrome', 'Safari', 'Firefox'],

