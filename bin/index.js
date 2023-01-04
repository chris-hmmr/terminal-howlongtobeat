#!/usr/bin/env node

const hltbCli = require('../cli/hltbCli')

var argv = require('yargs/yargs')(process.argv.slice(2))
.usage('Usage: $0 -game [string]')
.example('$0 -game <Name of game>', 'returns the game-length data for the name provided')
.alias('g', 'game')
.describe('g', 'Name of the game to fetch data for')
.help('h')
.alias('h', 'help')
.alias('v', 'version')
.argv

if(argv.game) {
    const gameName = argv.game.trim()
    hltbCli.fetchGameData(gameName)
}