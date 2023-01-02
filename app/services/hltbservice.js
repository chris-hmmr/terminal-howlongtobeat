const axios = require('axios')


const BASE_URL = 'https://howlongtobeat.com/'
const SEARCH_URL = `${BASE_URL}api/search`

const payload = {
    "searchType": "games",
    "searchTerms": [

    ],
    "searchPage": 1,
    "size": 20,
    "searchOptions": {
        "games": {
            "userId": 0,
            "platform": "",
            "sortCategory": "popular",
            "rangeCategory": "main",
            "rangeTime": {
                "min": 0,
                "max": 0
            },
            "gameplay": {
                "perspective": "",
                "flow": "",
                "genre": ""
            },
            "modifier": ""
        },
        "users": {
            "sortCategory": "postcount"
        },
        "filter": "",
        "sort": 0,
        "randomizer": 0
    }
}

module.exports = {
    search: search
}

async function search(query) {
    let search = { ...payload }
    search.searchTerms = query

    try {
        let result =
            await axios.post(SEARCH_URL, search, {
                headers: {
                    'content-type': 'application/json',
                    'origin': 'https://howlongtobeat.com/',
                    'referer': 'https://howlongtobeat.com/'
                },
                timeout: 20000,
            });
        console.log('Result', JSON.stringify(result.data));
        return result.data;
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