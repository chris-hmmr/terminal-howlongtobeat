const Table = require('cli-table3')
const colors = require('colors')
colors.enable()
const blessed = require('blessed')
const contrib = require('blessed-contrib')
const ansiup = require('ansi_up')

module.exports = {
    transformGameData: transformGameData,
    transformError: transformError
}

function transformGameData(data) {
    var table = new Table({
        head: [
            colors.yellow('Game Name'),
            colors.yellow('Main Story'),
            colors.yellow('Main + Extra'),
            colors.yellow('Completionist')
        ],
        style: {
            head: []
        }
    })

    for (let i = 0; i < data.length; i++) {
        table.push(
            [
                data[i].name,
                colors.cyan(data[i].gameplayMain + ' hours'),
                colors.cyan(data[i].gameplayMainExtra  + ' hours'),
                colors.cyan(data[i].gameplayCompletionist  + ' hours')
            ]
        );
    }


    return '\n' + table.toString() + '\n' + colors.grey('Your search term was: "' + colors.grey(data[0].searchTerm)) + '"\n\n'
        + colors.yellow(`[twitter: @chrishmmr] [Github: https://github.com/chris-hmmr/howlongtobeat]\n\n`);
}

function transformError(error) {
    return `\nSorry, no game data was found for the search term provided.\n\n ${error.message}`;
  }