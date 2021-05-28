const {
  initialize: initScraper,
  getResults
} = require('../utils/scrape');

const {
 getPosts
} = require('../utils/redditBot');

const defaultsubreddit = 'CryptoMoonShots'

const coinDetailService =  {
  getScrapeCoinDetails: async () => {
  
    await initScraper();
    
    const scrapeResults = await getResults(defaultsubreddit, 300);
  
    return scrapeResults;  
  },

  getApiCoinDetails: async () => {
    return await getPosts(defaultsubreddit, false, 200)  ; 
  }
}

module.exports = coinDetailService