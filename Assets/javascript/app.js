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

// document.onload = function(){
//     // This function handles events where the submit button is clicked
// $("#submit").on("click", function(event) {
//     event.preventDefault();
//   }
  





// }
// ALGOLIA STUFF----------------------------------------------------------------------------------------------------
var placesAutocomplete = places({
    container: document.querySelector('#address-input')
  });



/* CAPTURE DATA FROM SUBMIT BUTTON----------------------------------------------------------------------------------
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    var locationInput = $("#location-input").val().trim()
    console.log("location: " + locationInput) */


// Grab users location and store input (variable) in firebase
    /*  1) use Algolia to autofill the city, state.
        2) use Mapquest API to generate a map of the state. 
        3) use the city, state info to run the state through the National Park Service API.
        4) populate "pins" on the Mapquest map of state parks in the user's state 

/* Once the user click ons a "pin", show some handpicked data from the park's webpage 
(Location, operating hours, entrance fee/pass information)
    --stretch goal: is to show all national parks within 50 miles instead of just in 
    that state. Also add photos, possibly from instagram and/or add weather info? */
