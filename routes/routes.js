
const express = require('express')
const router = express.Router()
const {getCoinDetails} = require("../services/coinDetails");

// define the home page route
router.get('/', function (req, res) {
  res.send('Nothing to see here')
})

router.get('/coin-details', async function (req, res) { 
  try {
    const coinDetails = await getCoinDetails();
    res.send(coinDetails);
  } catch (error) {
    console.log(error)
    res.send('something went wrong' + error);
  }
})

module.exports = router