const Table = require('cli-table3')
const colors = require('colors')
const terminalLink = require('terminal-link')
colors.enable()

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
            colors.yellow('Completionist'),
            colors.yellow('More Information')
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
                colors.cyan(data[i].gameplayCompletionist  + ' hours'),
                colors.cyan(terminalLink('Click here', encodeURI(`https://www.bestgameprice.net/search?q=${data[0].searchTerm}`))),
            ]
        );
    }


    return '\n' + table.toString() + '\n' + colors.green('Your search term was: "' + data[0].searchTerm + '"') + '\n\n'
        + colors.yellow(`[twitter: @chrishmmr] [Github: https://github.com/chris-hmmr/howlongtobeat]\n\n`);
}

function transformError(error) {
    return `\nSorry, no game data was found for the search term provided.\n\n ${error.message}`;
  }