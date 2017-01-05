# Game Package Manager

![Game Package Manager](http://i.imgur.com/dU0w44o.png)

#### A Package Manager for Game Developers. The web has NPM, Bower and a million others. I dont want all of their shit. I want only gamedev related packages and I want to install them where I want to!

---

##What is this? 

This is a package manager made for game devs. Most game devs just want to easily pull down plugins and put them in their desired location. NPM makes it convenient by putting everything in a "nodemodules" folder but they aren't writing games for 6+ SKU's on different hardware. We need to easily pull down plugins, scripts, and placeholder art and put them in a location *we choose*.

---

##How does this work?

The first implementation will store gpm.json files into a database the contains a bunch of information but more importantly Git Repo links. When you type commands like 

```
gpm install steamworksdotnet
```

The assets for that git repo are stored on github, bitbucket, or whatever else. Soon to be on our own servers. 

---

##How does this work?

Poly - a package that contains assets to be consumed in a game project.

---

##What if I dont have internet?

You can install *polys* locally to a general GPM directory on your computer with the ```gpm install steamworksdotnet -g``` command. This will save that *poly* for later use. So incase you aren't connected to the internet or have slow internet you can call ```gpm install steamworksdotnet -l```

server:
- /addrepo/ - adds a repo to the database
- /getpackageinfo/  Searches the database and returns the gpm.json file information for a given package
- /open/ - gets the github readme url for a given package name from its gpm.json file
- /install/ - gets the gitrepo pull url from the given package name
- /checklist/ - checks a list of dependencies and checks to see if they have updates
- /login/ - prompts the user for a username and password. checks the database and returns with an auth token. Adds auth token to the users info with an expiration date and IP.
- /register/ - prompts the user for an email, and password. Creates an account with email, password, hasConfirmed[BOOL], and a confirmation uniqueID. Sends email with uniqueID as url param
- /confirm-registration/ - find the account in the database with that uniqueID and check to see is hasConfirmed = true or false. Mark as true if hasConfirmed = false
- /search/ - search the database with given keywords and return a list of 50

---

client:
- cache - the place locally where global packages are installed for offline use
- help - displays a list of all the commands
- home - Opens a package homepage into your favorite browser
- info - Displays overall information of a package
- init - Interactively creates a gpm.json file
- installglobal - installs a given package to your cache location for offline use
- installlocal - adds the package name to your gpm.json file as a dependency and installs it to a given location
- list - List packages in your gpm and possible updates[feature].
- login - login with your given username and password
- prune - Uninstalls local given package name from cache
- register - allows to create a new account with a given username and password
- registerpkg - register an init file with the server. 
- search - search the package manager database with given keywords
- update - updates the given package name
- uninstall - uninstall the given package name from your given folder destination
- version - logs the version number

Branding: 
Please use the logo above if you write talk about GPM

