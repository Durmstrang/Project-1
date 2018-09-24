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
        // var subRow = $("<tr><td>")
        var newTd = $("<td>")
        var targetDiv = $("<div class='collapse'>")
        var newBtn = $("<button role='button' class='btn btn-success btn-lg'>")
        // variables to define the park data pulled from temporary object "obj"
        var park = obj.parks[i]
        var parkImage;
        var parkDescription = park.description
        var parkDirectionsURL = park.directionsUrl
        var parkDesignation = park.designation
        var parkName = park.fullName
        var parkCode = park.parkCode
        var parkState = park.states
        var newColumn = $("<th scope='col'>")
        var newColumn2 = $("<th scope='col'>")
        var newColumn3 = $("<th scope='col'>")
        var newLink = $("<a>")
        var parkLink = park.url

        // Create a new table row for each park in the API response array
        // var newRow = $("<tr class='clickable' data-toggle='collapse'>");
        newRow.addClass("clickable").attr("data-toggle", "collapse");
        // add new row and table data to the targetDiv and append to the div with the table-body ID
        $("#table-body").append(newRow).append(newTd).append(targetDiv)
        if (park.images.length > 0 ) {
            parkImage = park.images[0].url
            $(targetDiv).append("<img class='park-image' src='" + parkImage + "'>")
        } else {
            $(targetDiv).append("<img class='park-image' src='Assets/img/imageUnavailable.svg'>")
        }

        
        $(newLink).append(parkName)
        // Assign the the park's url to the href, a class of parkPage to use in the CSS, and have the link open in a new browser tab when clicked
        newLink.attr("href", parkLink).attr("target", "_blank").attr("class", "parkPage")
        // append the newLink to a newColumn in the newRow of the table
        $(newColumn).append(newLink)
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
        // Assign park's name to the newLink (a tag)    
        // call the addMapBtn that plots the marker on the new map
        addMapBtn(park, targetDiv, parkName)
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
    var y = $("#stateSelection option:selected").val();
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
    // load the new map centering on the values of stateLat and stateLong
    loadMap(stateLat, stateLong)
    })


// On initial load, center the map Cleveland's lat and long
    loadMap(41.26093905,-81.57116722)

        // HTML 5 geolocation code -- we're not using this currently, we're using the Cleveland coordinates above
        // var geoLocation = function() {
        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition(showPosition);
        //     } else {
        //         console.log("Geolocation is not supported by this browser")
        //     }
        // }