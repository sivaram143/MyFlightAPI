var express = require('express');
var router = express.Router();

var FlightStatsAPI = require( 'flightstats' )
var api = new FlightStatsAPI({
  appId: 'xxxxxxxxxx',
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
})


// Retrieve a list of airlines
router.get('/fetchAirlines', function(req, res) {
    var options = {
      all: true
      //date: {Date},
      //iata: {String},
      //icao: {String},
      //fs: {String},
    }
    api.getAirlines(options, function(err, data) {
      if (err) {
        console.log(err, err.stack);
      }
      else{
        res.json(data);
      }
    });
});

// Retrieve a list of airports
router.get('/fetchAirPorts', function(req, res) {
    var options = {
      all: true
    }
    api.getAirports(options, function(err, data) {
      if (err) {
        console.log(err, err.stack);
      }
      else{
        res.json(data);
      }
    });
});

module.exports = router;
