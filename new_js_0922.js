// intialize page with 
    // a map that center's on the user's current location
    var geoLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser")
        }
    }

    // a dropdown menu of all the US states and territories
    // a submit button next to the dropdown

// when the user chooses a state and clicks the submit button
    // recenter the map on the chosen state/territory (set bounding box or zoom levels)
    // populate a list of all of the parks in that state/territory in a table beneath the map
        // table should include park name, address, image, description, and link to the NPS webpage
    // populate the map with markers for each of the parks
        // or if that won't work, add a 'view on map' to populate individual markers as each 'view on map' button is clicked
        // include the park name and address along with the marker (make park name a url that opens in new tab)
    
        var displayParks = function(para) {
            var stateCode = para
            var apiKey = "q3aVXF4M4Hq6z0fi3Ithx6UFbnKa4aRIn45OIpKo"
            var queryURL = "http://api.nps.gov/api/v1/parks?stateCode=" + stateCode + "&fields=images" + "&api_key=" + apiKey
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    console.log(response)
                    var newRow = $("<tr class='clickable' data-toggle='collapse'>")
                    var newTr = $("<tr><td>")
                    var newTd = $("<td>")
                    var targetDiv = $("<div class='collapse'>")
                    var park = response.data[i]
                    var parkImage = park.images[0].url
                    var parkDescription = park.description
                    var parkDirections = park.directionsInfo
                    console.log(parkDirections)
                    var parkDirectionsURL = park.directionsUrl
                    $("#table-body").append(newRow)
                    $("#table-body").append(newTr)
                    $(newTr).append(newTd)
                    $(newTd).append(targetDiv)
                    $(targetDiv).append("<img class='park-image' src='" + parkImage + "'>")
                    $(targetDiv).append("<div id='park-description'><h4>Description: </h4><p>" + parkDescription + "</p></div>")
                    $(targetDiv).append("<div id='park-directions'><h4>Directions: </h4><p>" + parkDirections + "</p></div>")
                    $(targetDiv).append("<a href='" + parkDirectionsURL +"' role='button' class='btn btn-success btn-lg' target='_blank'>GET DIRECTIONS FROM NPS</a>")
                    // <a href='" + parkDirectionsURL + "' role='button' class='btn btn-success'></div>")
                    var newColumn = $("<th scope='col'>")
                    $(newRow).append(newColumn)
                    var newLink = $("<a>")
                    $(newColumn).append(newLink)
                    var parkLink = park.url
                    newLink.attr("href", parkLink)
                    var parkName = park.fullName
                    var parkCode = park.parkCode
                    $(newRow).attr("data-target","#"+ parkCode)
                    $(targetDiv).attr("id", parkCode)
                    $(newLink).append(parkName)
                    var newColumn2 = $("<th scope='col'>")
                    $(newRow).append(newColumn2)
                    var parkDesignation = park.designation
                    $(newColumn2).append(parkDesignation)
                    var newColumn3 = $("<th scope='col'>")
                    $(newRow).append(newColumn3)
                    var parkState = park.states
                    $(newColumn3).append(parkState)
                    // 
                    var parkLat = ""
                    var parkLong = ""
                    if (park.latLong) {
                        var firstSplit = park.latLong.split(", ")
                        parkLat = firstSplit[0].replace("lat:", "")
                        parkLong = firstSplit[1].replace("long:", "")
                        $(targetDiv).append("<br><button class='view-on-map' role='button' class='btn btn-success btn-lg'>VIEW ON MAP</a>")
                        $(".view-on-map").on("click", function() {
                            map.remove()
                            var mapDiv = $('<div id="map" style="width: 100%; height: 500px;">')
                            $("#map-home").append(mapDiv)
                            loadMap(parkLat, parkLong, parkName)
                        })
                    }
                    // renderMarkers(parkLat, parkLong, parkName)
                }
            })
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