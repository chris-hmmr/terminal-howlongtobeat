const hltbService = require('../app/services/hltbservice')
const responseTransformer = require('../app/transformer/responseTransformer')

module.exports = {
    fetchGameData: fetchGameData
}

function fetchGameData(query) {
    hltbService.search(query)
        .then((data) => {
            console.log(responseTransformer.tansformGameData(data));
        }).catch((error) => {
            console.log(responseTransformer.transformError(error));
        });
}