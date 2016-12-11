var colors = require('colors');
var gpmversion = require('./version');
var prompt = require('prompt');
var fs = require('fs');
var progressbar = require('progress');
var open = require("open");

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
