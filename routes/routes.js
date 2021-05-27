
const express = require('express')
const router = express.Router()
const {getScrapeCoinDetails, getApiCoinDetails} = require("../services/coinDetails");
const {getCoinDetails} = require("../services/coinDetails");

// define the home page route
router.get('/', function (req, res) {
  res.send('Nothing to see here')
})

router.get('/scrape-coin-details', async function (req, res) { 
  try {
    const coinDetails = await getScrapeCoinDetails();
    res.send(coinDetails);
  } catch (error) {
    console.log(error)
    res.send('something went wrong' + error);
  }
})

router.get('/coin-details', async function (req, res) { 
  try {
    const coinDetails = await getApiCoinDetails();
    res.send(coinDetails);
  } catch (error) {
    console.log(error)
    res.send('something went wrong' + error);
  }
})

module.exports = router