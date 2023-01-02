const hltbService = require('../app/services/hltbservice')
const responseTransformer = require('../app/transformer/responseTransformer')

module.exports = function (app) {
    app.get('/:gameName', function (req, res) {
        const gameName = req.params.gameName

        hltbService.search(gameName.trim())
            .then((data) => {
                res.send(responseTransformer.transformGameData(data));
            }).catch((error) => {
                res.send(responseTransformer.transformError(error));
            });
    })
}