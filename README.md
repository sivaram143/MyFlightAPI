# MyFlightAPI

- To Develop the API to get the FlightStats from the FlightstatsAPI

## Pre-requisites

- Node installed on your machine/host
- API Keys from : https://developer.flightstats.com/signup
  ```
  appId: 'xxxxxxxxxx',
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
  ```

  ## To Run Application

  1. Clone the source
     ```
      git clone https://github.com/sivaram143/MyFlightAPI.git
      git pull
     ```
  2. install packages
     ```
     npm install
     ```
  2. Run the Server
     ```
     npm start
     ```
  ## To Access api in browser

  1. To Get the all airlines
     ```
     http://localhost:3000/fetchAirlines
     ```
  2. To Get the all airPorts
     ```
     http://localhost:3000/fetchAirPorts
     ```

## References

- https://github.com/jhermsmeier/node-flightstats/blob/master/docs/API.md#new_FlightStats_new
