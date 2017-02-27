// create placeholder variables
var userLatitude
  , userLongitude;
  , partyLatitude = 37.775214;
  , partyLongitude = -122.417509;

navigator.geolocation.watchPosition(function(position) {
    console.log(position);

    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
});
