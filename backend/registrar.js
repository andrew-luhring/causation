'use strict';
var data = require('./data.js');
var _ = require('lodash');
var fs = require('fs');


/**
 * lowercases, and removes white space from a string
 * @param {string} - str - string to normalize
 * @returns {string}
 */
function normalize(str){
  if(typeof str !== 'string'){
    console.trace();
    throw new TypeError('tried to normalize a non-string: ' + str);
  }
  str = str.toLowerCase().replace(/[^a-zA-Z0-9- ]+/g, '');
  return str;
}

function register(data){
  var str = 'module.exports = { "patients":' + JSON.stringify(data.patients) + ', "signers":' + JSON.stringify(data.signers) + '};';
  fs.writeFile('./backend/data.js', str);
}

function dedupe(registrant){
  var normFn = normalize(registrant.patient.firstname)
    , normLn = normalize(registrant.patient.lastname)
    , exists = false;

  _.each(data.patients, function(obj, idx){
    if (normalize(obj.firstname) === normFn && normalize(obj.lastname) === normLn) {
      exists = true;
    }
  });

  if (exists === false) {
    data.patients[normFn + "_" + normLn] = registrant.patient;
    console.log ('writing!');
    register(data);
  } else {
    console.log ('not writing!');
  }
    return registrant;
}

module.exports = function(registrant){
  dedupe(registrant);
};
