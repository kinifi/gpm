var colors = require('colors');
var gpmversion = require('./version');
var prompt = require('prompt');
var fs = require('fs');
var progressbar = require('progress');
var open = require("open");
//the json template for init files
var init_template = require('./init_template');
//helps resolve paths for different OS'
var path = require('path');
var request = require('request');


module.exports = {

  //prompts for the user to change the location of the localcache
  setcachelocation: function(){

    cacheloc.cachecheck();

  },

  //lists all the commands
  help: function(){
    console.log(colors.inverse("cache, help, home, info, init, installglobal, installlocal, registerpkg \n list, login, prune, register, search, update, uninstall, version"));
  },

  registerpkg: function(initfile){

      request({
          url: "http://josiahchoi.com/api/addrepo",
          method: "POST",
          json: true,
          body: initfile
      }, function (error, response, body){
          console.log(response);
      });

    // console.log("registering pkg");

  },

  // Opens a package homepage into your favorite browser
  home: function(packagename){
    //once the api is done change this to the path name for the package
    // example: gpm.com/packagenamegoeshere
    open("https://github.com/kinifi/gpm");
  },

  info: function(){

  },

  init: function(){

    //the schema to ask questions
    var schema = {
        properties: {
          name: {
            description: 'Name of package: ',
            message: 'Name is required',
            required: true
          },
          version: {
            description: 'Version Number: ',
            message: 'Version Number is required',
            required: true
          },
          description: {
            description: 'Package Description: ',
            message: 'Description is required',
            required: true
          },
          repository: {
            description: 'Repo Link (Github, Bitbucket, etc): '
          },
          repositoryType: {
            description: 'What type of Repo is it? Git(G) or Mercurial?(M): '
          },
          keywords: {
            description: 'Keywords (Separate by Commas): ',
            message: 'Keywords are required',
            required: true
          },
          author: {
            description: 'Author(s): ',
            message: 'Author(s) is required',
            required: true
          },
          license: {
            description: 'License(MIT): ',
            message: 'License is required',
            required: true
          },
          bugs: {
            description: 'A way to report bugs: ',
            message: 'Bugs link is required'
          },
          website: {
            description: 'website (optional)'
          },
          filelocation: {
            description: 'Location to save this file. Usually plugin root directory',
            required: true
          }
        }
      };

    //prompt for the questions needed to create a init files
    prompt.get(schema, function (err, result) {
      //
      // Log the results and prompt the user if this is okay? If NOT call Init again
      //
      //set all the results into the json schema
      init_template.name = result.name;
      init_template.version = result.version;
      init_template.description = result.description;
      init_template.repository.url = result.repository;
      init_template.repository.type = result.repositoryType;
      init_template.keywords = result.keywords;
      init_template.author = result.author;
      init_template.license = result.license;
      init_template.bugs.url = result.bugs;
      init_template.website = result.website;

      //TODO: ask the user if these results work or not
      // console.log("How does this look?");

      //TODO: change the filelocation to the location we are calling this process from.

      //write the file to location JSON.stringify(myData, null, 4)
      fs.writeFile(path.resolve(result.filelocation, "init.json"), JSON.stringify(init_template, null, 4), function(err) {
        if(err) {
            return console.log(err);
        }
        //call success
        console.log(colors.inverse("Init File Successfully Created: " + result.filelocation));

      });

      //send request to server and upload the file
      registerpkg(JSON.stringify(init_template, null, 4));


    });


  },

  installglobal: function(){

  },

  installlocal: function(){

  },

  list: function(){

  },

  login: function(){

  },

  prune: function(){

  },

  register: function(){

  },

  search: function(){

  },

  update: function(){

  },

  uninstall: function(){

  },

  version: function(){
    gpmversion.getVersion();
  }

};
