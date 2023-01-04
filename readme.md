# terminal-howlongtobeat

terminal-howlongtobeat is a terminal based application providing game length information from howlongtobeat.com for your favorite video-games!

### Documentation
tbd.

### How to use

#### CLI usage without npm package installation
```sh
$ curl https://terminal-howlongtobeat.herokuapp.com/<Name of Game>
```

#### Example
```sh
$ curl https://terminal-howlongtobeat.herokuapp.com/Dark Souls
```

### CLI usage with npm package
You can also install terminal-howlongtobeat package from npm and run the built-in commands from command line interface (cli)

- install cli globaly
```sh
npm i terminal-howlongtobeat -g
```

- run the commands to get information
###### Available commands
```sh
terminal-howlongtobeat --help // to get help
terminal-howlongtobeat --version  // to see the version
terminal-howlongtobeat -g [name of game] // to fetch game length data
```

### Example
```sh
terminal-howlongtobeat -g Dark Souls
```

### Tech
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [howlongtobeat] - npm package providing game data [@ckatzorke]
* [cli-table3] - allows to compose cli-optimized tables 

### Installation
Requires [Node.js](https://nodejs.org/) v8+ to run.
Install the dependencies and devDependencies and start the server.

```sh
$ git clone "https://github.com/chris-hmmr/terminal-howlongtobeat"
$ npm install
$ npm run serve
```
### Development
Want to contribute? Great! Feel free to open a PR.

### Support
<a href="https://www.buymeacoffee.com/chrishmmr" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a> 

### Enjoy! :)
