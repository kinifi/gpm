#!/usr/bin/env node --harmony

var prompt      = require('prompt');
var fs          = require('fs');
var colors      = require('colors');
var progressBar = require('progress');
var program     = require('commander');
var path        = require('path');
var superagent  = require('superagent');
var simplegit   = require('simple-git');
var path        = require('path');
var process     = require('process');
var dirString   = path.resolve(process.cwd());

//the server to pull polys from. If you are hosting on your own, change this to your server IP
var serverLocation = "http://localhost:9000";
//console.log('working directory', dirString);

program
  .version('0.0.1')

program
  .command('install [polyname]')
  .description('installs poly on the working directory')
  // TODO: finish the prompt for local cache setting and getting
  // .option("-g, --global", "Installs to a local cache folder for later use instead of pulling from the web")
  .action(function(polyname, options) {

    if(polyname === undefined || polyname === '' || polyname === null)
    {
      console.log('Follow [install] command with a [polyname]');
      return;
    }

    //get the for the poly from the server
    superagent
      .get(serverLocation + '/api/poly/' + polyname)
      .end(function(err, res){
        //check if error
        if(err){
          console.log(err);
        }

        if(res) {
            //get the repo url
            // console.log(res.body);
            if(res.body.error)
            {
              console.log(colors.inverse("Error: " + res.body.message));
            }
            else {

              var repourl = res.body[0].repourl;
              if(options.global) {
                  var config = options.global;
                  console.log(colors.inverse("Install Globally: " + config));
              }
              else {
                  //install locally at current process location
                  console.log(colors.inverse("Installing locally at current directory"));
                  simplegit()
                   .outputHandler(function (command, stdout, stderr) {
                      stdout.pipe(process.stdout);
                      stderr.pipe(process.stderr);
                   })
                   //clone into the directory we are in right now
                   .clone(repourl, dirString);

              }
            }

        }

      });


    // console.log('installing ' + polyname);
  });


program
  .command('*')
  .description('error catching')
  .action(function(env){
    console.log('not a command "%s"', env);
  });


program.parse(process.argv);
