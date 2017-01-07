var prompt = require('prompt');
var fs = require('fs');
var colors = require('colors');
var progressBar = require('progress');
var requestify = require('requestify');

//example of command call
//node app.js install steamworksdotnet -l

for (var i = 0; i < process.argv.length; i++) {
  //ignore the first and second index
  console.log(i + ": " + process.argv[i]);
}
