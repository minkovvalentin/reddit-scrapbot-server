
const express = require('express')
const router = express.Router()
const { getScrapeCoinDetails, getApiCoinDetails } = require("../services/coinDetails")
const { createUser } = require("../services/user")

/* Get Home Route */
router.get('/', function (req, res) {
  res.send('Nothing to see here')
})

/*Get Scraped Coin Details */
router.get('/scrape-coin-details', async function (req, res) { 
  try {
    const coinDetails = await getScrapeCoinDetails();
    res.send(coinDetails);
  } catch (error) {
    console.log(error)
    res.send('something went wrong' + error);
  }
})

/*Get Api Coin Detials */
router.get('/coin-details', async function (req, res) { 
  try {
    const coinDetails = await getApiCoinDetails();
    res.send(coinDetails);
  } catch (error) {
    console.log(error)
    res.send('something went wrong' + error);
  }
})

/* Get User */
router.get('/user', async function (req, res) { 
  res.send('No users yet homeboy')
})

/* Post User */
router.post('/user', async function (req, res) { 


  try {
    const user = await createUser();
    res.send(user);
  } catch (error) {
    console.log(error)
    res.send(error);
  } 
})

/*Get Local Coin */
router.get('/coin', async function (req, res) { 
  res.send('Nothing to see here')
})

/* Post Local Coin */
router.post('/coin', async function (req, res) { 
  res.send('Nothing to see here')
})

/*Get Local Coins */
router.get('/coins', async function (req, res) { 
  res.send('Nothing to see here')
})

module.exports = router