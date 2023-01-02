const hltbCli = require('../cli/hltbCli')

var argv = require('yargs/yargs')(process.argv.slice(2))
.usage('Usage: $0 -howlong [string]')
.example('$0 -howlong <nameOfGame>', 'returns the data of game name provided')
.help('h')
.alias('h', 'help')
.alias('v', 'version')
.argv

if(argv.howlong) {
    const gameName = argv.gameName.trim()
    hltbCli.fetchGameData(gameName)
}