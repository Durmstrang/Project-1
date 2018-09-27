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
        button.text("Map it")
        // Appends and button to the target div        
        $(targetDiv).append(button).append(br)
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
    // new apikey as of 9/25/18 (old one was causing errors)
    var apiKey = "AHxYpzNIdier9Velo2UerDKo7wSmswmujiAOecJt"
    var queryURL = "https://api.nps.gov/api/v1/parks?stateCode=" +stateCode + "&fields=images" + "&api_key=" + apiKey
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

// GET WEATHER DATA FROM OpenWeatherMaps API

function getWeather(lat, lon, targetDiv) {
    var weatherKey = "3030d802c0a765839ca208f55d3af7b0";

    var weatherQuery = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=" + weatherKey;

    $.ajax({
        url: weatherQuery,
        method: "GET"
    }).then(function(w) {
        $(targetDiv).prepend("<br><h5 class='text-center'> Current Temp (F) in " + w.name + " is:  <strong>" + w.main.temp + " F</strong>")
    })
}


// SHOW PARK DATA FOR THE STATE/TERRITORY IN THE TABLE BELOW THE MAP-----------------------------------------------------------
// Function to populate the table beneath the map with park data for the selected state
function createTable() {
    for (var i = 0; i < obj.parks.length; i++) {
        // variables to create new HTML elements in the DOM
        var newRow = $("<tr class='text-center'>");
        var newTd = $("<td>")
        var targetDiv = $("<div class='collapse'>")
        var newBtn = $("<button role='button' class='btn btn-info btn-lg'>")
        var newColumn = $("<th scope='col'>")
        var newColumn2 = $("<th scope='col'>")
        var newColumn3 = $("<th scope='col'>")
        var newLink = $("<a>")
        // variables to define the park data pulled from temporary object "obj"
        var park = obj.parks[i]
        var parkImage;
        var parkDescription = park.description
        var parkDirectionsURL = park.directionsUrl
        var parkDesignation = park.designation
        var parkName = park.fullName
        var parkCode = park.parkCode
        var parkState = park.states
        var parkLink = park.url
        // if loop to separate pLat and pLong when it exists
        if (park.latLong) {                      
            var fSplit = park.latLong.split(", ")
            pLat = fSplit[0].replace("lat:", "")
            pLong = fSplit[1].replace("long:", "")
            getWeather(pLat, pLong, targetDiv)
        } else {
            console.log("Weather information for this park is currently unavailable")
        }
        // Create a new table row for each park in the API response array
        newRow.addClass("clickable").attr("data-toggle", "collapse");
        // add new row and table data to the targetDiv and append to the div with the table-body ID
        $("#table-body").append(newRow).append(newTd).append(targetDiv)
        if (park.images.length > 0 ) {
            parkImage = park.images[0].url
            $(targetDiv).append(newTd).append("<img class='park-image' src='" + parkImage + "'>")
        } else {
            $(targetDiv).append(newTd).append("<img class='park-image' src='Assets/img/imageUnavailable.svg'>")
        }

        // Assign the the park's url to the href, a class of parkPage to use in the CSS, and have the link open in a new browser tab when clicked
        newLink.attr("href", parkLink).attr("target", "_blank").attr("class", "parkPage")
        // append the parkName to the newLink, then append both to a newColumn element
        $(newColumn).append(newLink)
        $(newLink).append(parkName)
        // append the parks' designation to column 2 and the state(s) the park is in to column 3
        $(newColumn2).append(parkDesignation)
        $(newColumn3).append(parkState)
        // append all three columns to the newRow
        $(newRow).append(newColumn).append(newColumn2).append(newColumn3)
        // add data-target id of parkCode to the newRow
        $(newRow).attr("data-target","#"+ parkCode) 
        // Add park description to the collapsible targetDiv element
        $(targetDiv).append("<div id='park-description'><h5>Description: </h5><p>" + parkDescription + "</p></div>")
        
        // Add 'Get Directions' button to the same targetDiv and have it open the directions in a new tab
        $(newBtn).append("<a href='" + parkDirectionsURL + "' target='_blank' class='directions'>Get Directions</a>")
        $(targetDiv).append(newBtn)
        // add the parkCode as the targetDiv's ID
        $(targetDiv).attr("id", parkCode)
        // call the addMapBtn that plots the marker on the new map
        addMapBtn(park, targetDiv, parkName)
    }
}


// Function for initializing leaflet map based on lat, long into the #map div
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

// When the user clicks the submit button,
$("#submitBtn").on("click", function(event) {
    var y = $("#stateSelection option:selected").val();
    var z = y.toUpperCase()
    var stateLat =  $("#stateSelection option:selected").attr("data-lat")
    var stateLong =  $("#stateSelection option:selected").attr("data-long")
    // prevent the browse default
    event.preventDefault()
    // empty the table body element
    $("#table-body").empty()
    // run the displayParks function for the state/territory that was selected
    displayParks(y)
    // remove the current map
    map.remove()
    // add a new map in it's place and append it to the map-home ID in the HTML
    var mapDiv = $('<div id="map" style="width: 100%; height: 500px;">')
    $("#map-home").append(mapDiv)
    // update span to print state chosen
    $("#location-query").html(z)
    // load the new map centering on the values of stateLat and stateLong
    loadMap(stateLat, stateLong)
    })


// On initial load, center the map Cleveland's lat and long
    loadMap(41.26093905,-81.57116722)