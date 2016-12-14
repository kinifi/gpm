var colors = require('colors');
var gpmversion = require('./version');
var prompt = require('prompt');
var fs = require('fs');
var progressbar = require('progress');
var open = require("open");
//the json template for init files
var init_template = require('./init_template');
var process = require('process');


module.exports = {

  //prompts for the user to change the location of the localcache
  setcachelocation: function(){

    cacheloc.cachecheck();

  },

  //lists all the commands
  help: function(){
    console.log(colors.inverse("cache, help, home, info, init, installglobal, installlocal, list, login, prune, register, search, update, uninstall, version"));
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
            description: 'website: '
          }
        }
      };

    //prompt for the questions needed to create a init files
    prompt.get(schema, function (err, result) {
      //
      // Log the results and prompt the user if this is okay? If NOT call Init again
      //
      console.log('Command-line input received:');
      console.log('  name: ' + result.name);
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
      // console.log(init_template);
      //write the file to location
      // fs.writeFile(process.cwd + "/init.json", JSON.stringify(init_template), function(err) {
      //   if(err) {
      //       return console.log(err);
      //   }
      // });



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
