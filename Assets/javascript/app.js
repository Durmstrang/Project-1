// Psuedo code for our Parker App

// The below code fills in the first row of the table
var userInput = "";
var queryURL = "https://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=04fe08d12c90e98f7e8cfd4e6f903a2c";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // Get reference to existing tbody element, create a new table row element
  var tBody = $("tbody");
  var tRow = $("<tr>");

  // Methods run on jQuery selectors return the selector they we run on
  // This is why we can create and save a reference to a td in the same statement we update its text
  var titleTd = $("<td>").text(response.Title);
  var yearTd = $("<td>").text(response.Year);
  var actorsTd = $("<td>").text(response.Actors);
  // Append the newly created table data to the table row
  tRow.append(titleTd, yearTd, actorsTd);
  // Append the table row to the table body
  tBody.append(tRow);
});


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

    // Configure Algolia
    var applicationID = 'latency';
    var apiKey = '04fe08d12c90e98f7e8cfd4e6f903a2c';
    var indexName = 'bestbuy';
    var client = algoliasearch(applicationID, apiKey);
    var helper = algoliasearchHelper(client, indexName); 
 
    helper.search();

    helper.on('result', function(content) {
        renderHits(content);
    });
      
    function renderHits(content) {
        $('#container').html(JSON.stringify(content, null, 2));
    }

    function renderHits(content) {
        $('#container').html(function() {
            return $.map(content.hits, function(hit) {
                return '<li>' + hit.name + '</li>';
            });
        });
    }
});


// Grab users location and store input (variable) in firebase
    /* from firebase we can pull the state info and use Bing/Mapquest API to generate a map, then use the
    National Park Service API to populate "pins" on that map of state parks in the user's state 
        --our stretch goal is to change this to show all national parks within 50 miles from it */

/* Once the user click ons a "pin", show some handpicked data from the park's webpage 
(Location, operating hours, entrance fee/pass information)
    --stretch goal is to add photos, possibly from instagram and/or add weather info? */

// create a toggle menu in the top right of the page to show previous searches
