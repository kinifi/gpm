var prompt = require('prompt'),
    fs = require('fs'),
    colors = require('colors'),
    ProgressBar = require('progress');

var localLocation;

module.exports = {

  cacheprocess: function(){
    return localLocation;
  },

  setcachelocation: function()
  {
    //the cache save location
    var cacheLocation = JSON.parse(fs.readFileSync('./cachelocation.json', 'utf8'));
    localLocation = cacheLocation.cache.location;
    //prompt the user for the new location
    prompt.get(['location'], function (err, result)
    {
      //make sure there are no errors
      if(err)
      {
        throw 'error: ' + err;
        process.exit(0);
      }

      //set the new location
      cacheLocation.cache.location = result.location;
      //mark that we have a location now and its not default null
      cacheLocation.cache.isset = true;

      fs.writeFile("./cachelocation.json", JSON.stringify(cacheLocation), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log(colors.inverse("Cache Location Saved"));
      });

      console.log("New Cache Location: " + result.location);
    });

  },

  // check if the cache has a location or not
  cachecheck: function()
  {
    //the cache save location
    var cacheLocation = JSON.parse(fs.readFileSync('./cachelocation.json', 'utf8'));
    localLocation = cacheLocation.cache.location;

    // console.log(cacheLocation.cache.location);
    //check if the cache location is set or not
    if(!cacheLocation.cache.isset)
    {

      prompt.get(['location'], function (err, result)
      {

        if(err)
        {
          throw 'error: ' + err;
          process.exit(0);
        }

        cacheLocation.cache.location = result.location;
        cacheLocation.cache.isset = true;

        fs.writeFile("./cachelocation.json", JSON.stringify(cacheLocation), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log(colors.inverse("Cache Location Saved"));
        });

        console.log("New Cache Location: " + result.location);
      });
    }

  }

}
