//to make a binary of everything use http://enclosejs.com/

var prompt = require('prompt'),
    fs = require('fs'),
    colors = require('colors'),
    ProgressBar = require('progress');
var cacheloc = require('./libs/cachelocation');

//get the command List
var commands = require('./libs/commanddefinitions');

//
// Start the prompt
//
//location is not set. Prompt to get location
prompt.start();

// check if the cache has a location or not
cacheloc.cachecheck();


function promptForCommand()
{
  //start of the normal process
  console.log(colors.inverse("Game Package Manager: "));
  commands.help();

  prompt.get(['Command'], function (err, result)
  {

    if(err)
    {
      throw 'error: ' + err;
      process.exit(0);
    }

    if(result.Command == 'c' || result.Command == 'cache')
    {
      console.log(cacheloc.cacheprocess());
    }
    else if(result.Command == 'sc' || result.Command == 'setcachelocation')
    {
      cacheloc.setcachelocation();
    }
    else if(result.Command == 'h' || result.Command == 'help')
    {
      commands.help();
    }
    else if(result.Command == 'ho' || result.Command == 'home')
    {
      commands.home();
    }
    else if(result.Command == 'in' || result.Command == 'info')
    {
      commands.info();
    }
    else if(result.Command == 'ing' || result.Command == 'installglobal')
    {
      commands.installglobal();
    }
    else if(result.Command == 'inl' || result.Command == 'installlocal')
    {
      commands.installlocal();
    }
    else if(result.Command == 'li' || result.Command == 'list')
    {
      commands.list();
    }
    else if(result.Command == 'lo' || result.Command == 'login')
    {
      commands.login();
    }
    else if(result.Command == 'p' || result.Command == 'prune')
    {
      commands.prune();
    }
    else if(result.Command == 'r' || result.Command == 'register')
    {
      commands.register();
    }
    else if(result.Command == 's' || result.Command == 'search')
    {
      commands.search();
    }
    else if(result.Command == 'u' || result.Command == 'update')
    {
      commands.update();
    }
    else if(result.Command == 'un' || result.Command == 'uninstall')
    {
      commands.uninstall();
    }
    else if(result.Command == 'v' || result.Command == 'version')
    {
      commands.version();
    }
    else if(result.Command == 'init')
    {
      commands.init();
    }
    else if(result.Command == 'exit')
    {
      console.log('exiting');
      process.exit(0);
    }

  });
}

//run the default command function if we have a cache location
promptForCommand();
