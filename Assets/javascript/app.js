var obj = {}
     
    function addMapBtn(park, targetDiv, parkName) {
        var parkLat = ""
        var parkLong = ""
        if (park.latLong) {
            var firstSplit = park.latLong.split(", ")
            parkLat = firstSplit[0].replace("lat:", "")
            parkLong = firstSplit[1].replace("long:", "")
            $(targetDiv).append("<br><button data-lat="+parkLat+" data-long="+parkLong+" data-name="+parkName+" class='view-on-map' role='button' class='btn btn-success btn-lg'>VIEW ON MAP</a>")
            
        }
            
    }

                    
    var addMarker = function(e){
                    map.remove()
                    
                    var mapDiv = $('<div id="map" style="width: 100%; height: 500px;">')
                    var parkLat = e.target.attributes[0].nodeValue
                    var parkLong = e.target.attributes[1].nodeValue
                    var parkName = e.target.attributes[2].nodeValue
                    
                    $("#map-home").append(mapDiv)
                    loadMap(parkLat, parkLong, parkName)
    }
    $("body").on("click", ".view-on-map", addMarker) 

    var displayParks = function(para) {
        var stateCode = para
        var apiKey = "q3aVXF4M4Hq6z0fi3Ithx6UFbnKa4aRIn45OIpKo"
        var queryURL = "http://api.nps.gov/api/v1/parks?stateCode=" + stateCode + "&fields=images" + "&api_key=" + apiKey
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            window.obj.parks = response.data
            createTable()

            
        })
    }

    function createTable() {
        for (var i = 0; i < obj.parks.length; i++) {
                

            // adding the items from object to the table
            var newRow = $("<tr class='clickable' data-toggle='collapse'>")
            var newTr = $("<tr><td>")
            var newTd = $("<td>")
            var targetDiv = $("<div class='collapse'>")
            var park = window.obj.parks[i]
            var parkImage;
            var parkDescription = park.description
            var parkDirections = park.directionsInfo
            var parkDirectionsURL = park.directionsUrl

            $("#table-body").append(newRow).append(newTr)
            $(newTr).append(newTd)
            $(newTd).append(targetDiv)
            if (park.images.length > 0 ) {
                parkImage = park.images[0].url
            $(targetDiv).append("<img class='park-image' src='" + parkImage + "'>")
            }

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
        