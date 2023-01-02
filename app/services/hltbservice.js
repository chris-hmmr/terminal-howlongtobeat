const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();

module.exports = {
    search: search
}

async function search(query) {
    try {
       return await hltbService.search(query)
    }
    catch (error) {
        if (error) {
            throw new Error(error);
        } else if (error.response.status !== 200) {
            throw new Error(`Got a non-200 status code from howlongtobeat.com [${error.response.status}]
            ${JSON.stringify(error.response)}
          `);
        }
    }
}