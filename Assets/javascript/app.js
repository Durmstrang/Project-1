// Psuedo code for our Parker App


// MAPQUEST STUFF----------------------------------------------------------------------------------------------------
window.onload = function() {
    L.mapquest.key = 'q3aVXF4M4Hq6z0fi3Ithx6UFbnKa4aRIn45OIpKo';
  
    var lat = 37.7749
    var long = -122.4194
    
    var map = L.mapquest.map('map', {
        center: [lat, long],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });

    map.addControl(L.mapquest.control());
}

// CAPTURE DATA FROM SUBMIT BUTTON----------------------------------------------------------------------------------
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    var locationInput = $("#location-input").val().trim()
    console.log("location: " + locationInput)


// Grab users location and store input (variable) in firebase
    /* from firebase we can pull the state info and use Bing/Mapquest API to generate a map, then use the
    National Park Service API to populate "pins" on that map of state parks in the user's state 
        --our stretch goal is to change this to show all national parks within 50 miles from it */

/* Once the user click ons a "pin", show some handpicked data from the park's webpage 
(Location, operating hours, entrance fee/pass information)
    --stretch goal is to add photos, possibly from instagram and/or add weather info? */

// create a toggle menu in the top right of the page to show previous searches
