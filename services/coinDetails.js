const {
  initialize: initScraper,
  getResults
} = require('../utils/scrape');

const coinDetailService =  {
  getCoinDetails: async () => {
    const defaultsubreddit = 'CryptoMoonShots'
  
    await initScraper();
    
    const scrapeResults = await getResults(defaultsubreddit, 30);
  
    return scrapeResults;  
  }
}

module.exports = coinDetailService