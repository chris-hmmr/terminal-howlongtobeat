# terminal-howlongtobeat

terminal-howlongtobeat is a terminal based application providing game length information from howlongtobeat.com for your favorite video-games!

### How to use

#### CLI usage without npm package installation
```sh
$ curl https://terminal-howlongtobeat.herokuapp.com/<Name+of+Game>
```

#### Example
```sh
$ curl https://terminal-howlongtobeat.herokuapp.com/Baldurs+Gate
```
![image](https://user-images.githubusercontent.com/1536058/212540149-03cd1671-5af3-4452-b182-9c07262f3cfd.png)


### CLI usage with npm package
You can also install terminal-howlongtobeat package from npm and run the built-in commands from command line interface (cli)

1. install cli globally
```sh
npm i terminal-howlongtobeat -g
```

2. run the commands to get information
###### Available commands
```sh
terminal-howlongtobeat --help // to get help
terminal-howlongtobeat --version  // to see the version
terminal-howlongtobeat -g [name of game] // to fetch data for provided name
```

### Example
```sh
terminal-howlongtobeat -g Dishonored
```
![image](https://user-images.githubusercontent.com/1536058/212540201-7200e07a-4e70-4701-889b-c866a6a5a14a.png)


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
Want to contribute? Great! Feel free to open a PR

### Support
If you like what you see, feel free to buy me a ☕️.

<a href="https://www.buymeacoffee.com/chrishmmr" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a> 

### Enjoy! :)
