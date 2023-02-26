var express = require('express');
var router = express.Router();
const weatherController = require('../controllers/weatherController.js');
/* GET home page. */

router.get('/v1/weather', weatherController.weather_forecast);

module.exports = router;
