// GLOBAL VARIABLES -------------------------------------------------------------------------------------------------------------
// Temporary object that will fill with NPS data (reference using parks.whatever in functions)
var obj = {};
// New break tag to be used wherever as needed
var br = $("<br>");


// "MAP IT" BUTTON CREATIONS/FUNCTIONALITY -------------------------------------------------------------------------------------
// Function that takes Latitude and Longitude from NPS API and creates the "View on Map" button
function addMapBtn(park, targetDiv, parkName) {
    var button = $("<button>");
    // Initializes latitude and longitude variables for the jQuery construction        
    var parkLat = ""
    var parkLong = ""
    // Checks the API response to ensure that the data received is structured as expected.
    if (park.latLong) {
        // Variable that is an array with the latitude and longitude, reassigns previous variables to equal the API information                        
        var firstSplit = park.latLong.split(", ")
        parkLat = firstSplit[0].replace("lat:", "")
        parkLong = firstSplit[1].replace("long:", "")
        
        // Use jQuery to create a button for the user to view and specific park on the map
        // Take predefined jQuery button and attach attributes for each park
        button.attr("data-lat", parkLat).attr("data-long", parkLong).attr("data-name", parkName).attr("class", "btn btn-success btn-lg view-on-map").attr("role", "button");
        // Add text to the button
        button.text("Map it");
        // Appends and button to the target div        
        $(targetDiv).append(button)
        // $(targetDiv).append("<br><button data-lat="+parkLat+" data-long="+parkLong+" data-name="+parkName+" class='view-on-map' role='button' class='btn btn-success btn-lg'>VIEW ON MAP</button>")
    }      
}


// GENERATE NEW MAP WITH PARK MARKER -------------------------------------------------------------------------------------------
// Function to add marker for the park to the map
var addMarker = function(e) {
    var mapDiv = $("<div>")
    // remove the initial map
    map.remove()
    // define parkLat, parkLong, and parkName values
    var parkLat = e.target.attributes[0].nodeValue
    var parkLong = e.target.attributes[1].nodeValue
    var parkName = e.target.attributes[2].nodeValue
    // make a new map div and latch it onto the #map-home div in the HTML
    mapDiv.attr("id", "map")
    $("#map-home").append(mapDiv)
    // build a new map using the parkLat, parkLong, and parkName variables
    loadMap(parkLat, parkLong, parkName)
}

// add marker with View on Map button is clicked
$("body").on("click", ".view-on-map", addMarker) 


// GET PARKS DATA WITH AJAX CALL TO NPS.GOV ------------------------------------------------------------------------------------
// Function to run AJAX call to NPS.gov and gather the park data
var displayParks = function(ST) {
    var stateCode = ST
    console.log(ST)
    var apiKey = "q3aVXF4M4Hq6z0fi3Ithx6UFbnKa4aRIn45OIpKo"
    var queryURL = "http://api.nps.gov/api/v1/parks?stateCode=" +stateCode + "&fields=images" + "&api_key=" + apiKey
    // AJAX request to get info from NPS API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // add the response data to the temporary object "obj"
        obj.parks = response.data
        // run the createTable function
        createTable()   
    })
}


// SHOW PARK DATA FOR THE STATE/TERRITORY IN THE TABLE BELOW THE MAP-----------------------------------------------------------
// Function to populate the table beneath the map with park data for the selected state
function createTable() {
    for (var i = 0; i < obj.parks.length; i++) {
        // variables to create new HTML elements in the DOM
        var newRow = $("<tr>");
        var subRow = $("<tr><td>")
        var newTd = $("<td>")
        var targetDiv = $("<div class='collapse'>")
        // variables to define the park data pulled from temporary object "obj"
        var park = obj.parks[i]
        var parkImage;
        var parkDescription = park.description
        var parkDirections = park.directionsInfo
        var parkDirectionsURL = park.directionsUrl

        // Create a new table row for each park in the API response array
        // var newRow = $("<tr class='clickable' data-toggle='collapse'>");
        newRow.addClass("clickable").attr("data-toggle", "collapse");
        console.log(newRow)
        // add new row to the table and append the subRow to it
        $("#table-body").append(newRow).append(subRow)
        // add collapsible targetDive and new table data tag to the subRow
        $(subRow).append(newTd).append(targetDiv)
        if (park.images.length > 0 ) {
            parkImage = park.images[0].url
        $(targetDiv).append("<img class='park-image' src='" + parkImage + "'>")
        } else {
            $(targetDiv).append("<img class='park-image' src='Assets/img/imageUnavailable.svg'>")
        }

        // BE CAREFUL WITH THIS LINE!
        $(targetDiv).append("<div id='park-description'><h4>Description: </h4><p>" + parkDescription + "</p></div>").append("<div id='park-directions'><h4>Directions: </h4><p>" + parkDirections + "</p></div>").append("<a href='" + parkDirectionsURL +"' role='button' class='btn btn-success btn-lg' target='_blank'>GET DIRECTIONS FROM NPS</a>")
        // <a href='" + parkDirectionsURL + "' role='button' class='btn btn-success'></div>")
        var newColumn = $("<th scope='col'>")
        $(newRow).append(newColumn)
        var newLink = $("<a>")
        $(newColumn).append(newLink)
        var parkLink = park.url
        newLink.attr("href", parkLink)
        var parkName = park.fullName
        var parkCode = park.parkCode
        $(newRow).attr("data-target","#"+ parkCode).append(newColumn2).append(newColumn3)
        $(targetDiv).attr("id", parkCode)
        $(newLink).append(parkName)
        var newColumn2 = $("<th scope='col'>")
        var parkDesignation = park.designation
        $(newColumn2).append(parkDesignation)
        var newColumn3 = $("<th scope='col'>")
        var parkState = park.states
        $(newColumn3).append(parkState)
        // 
        addMapBtn(park, targetDiv, parkName)
    }
}




// HTML 5 geolocation code - yet to be implemented as of 9/19
var geoLocation = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser")
    }
}

// Function for initializing mapquest map based on lat, long into the #map div
var loadMap = function(lat, long, name) {
    L.mapquest.key = 'q3aVXF4M4Hq6z0fi3Ithx6UFbnKa4aRIn45OIpKo';
    var map = L.mapquest.map('map', {
        center: [lat, long],
        layers: L.mapquest.tileLayer('map'),
        zoom: 8
    }); map.addControl(L.mapquest.control());
        if (name) {
        L.mapquest.textMarker([lat, long], {
            text: name,
            position: "right",
            type: "marker",
            icon: {
            primaryColor: "#333333",
            secondaryColor: "#333333",
            size: "sm"
        }
        }).addTo(map)
        }
}

$("#submitBtn").on("click", function(event) {
    event.preventDefault()
    $("#table-body").empty()
    var y = $("#stateSelection option:selected").val();
    var stateLat =  $("#stateSelection option:selected").attr("data-lat")
    var stateLong =  $("#stateSelection option:selected").attr("data-long")
    // console.log(y)
    // console.log(stateLat)
    // console.log(stateLong)
    displayParks(y)
    map.remove()
    var mapDiv = $('<div id="map" style="width: 100%; height: 500px;">')
    $("#map-home").append(mapDiv)
    loadMap(stateLat, stateLong)
    })

// Initial Load
    
    loadMap(41.26093905,-81.57116722)
    