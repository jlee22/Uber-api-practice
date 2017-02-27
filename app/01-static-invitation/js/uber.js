// Uber API Constants
var uberClientId = "ydW7vTGHvHjYhMI1X1KWj86oFqLIFZ71"
  , uberServerToken = "czYM-kgEUbw2AyaL2J9y-ftR4RkfU17tXidXNzUl";

// create placeholder variables
var userLatitude,
    userLongitude,
    partyLatitude = 37.775214,
    partyLongitude = -122.417509;

navigator.geolocation.watchPosition(function(position) {
    console.log(position);

    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
});

function getEstimatesForUserLocation(latitude,longitude) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "Token " + uberServerToken
    },
    data: {
      start_latitude: latitude,
      start_longitude: longitude,
      end_latitude: partyLatitude,
      end_longitude: partyLongitude
    },
    success: function(result) {
      console.log(result);
    }
  });
}
