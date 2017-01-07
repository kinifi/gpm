var prompt = require('prompt');
var fs = require('fs');
var colors = require('colors');
var progressBar = require('progress');
var requestify = require('requestify');

//get all of the parameters passed to this script
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
