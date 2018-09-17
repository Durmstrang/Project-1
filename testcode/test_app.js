// Make the leaflet map based on algolia autofill location
(function() {
    var placesAutocomplete = places({
        container: document.querySelector('#input-map')
    });

    var map = L.map('map-example-container', {
        scrollWheelZoom: false,
        zoomControl: true
    });

    var osmLayer = new L.TileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 1,
            maxZoom: 13,
            attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        });

    var markers = [];

    map.setView(new L.LatLng(0, 0), 1);
    map.addLayer(osmLayer);

    placesAutocomplete.on('suggestions', handleOnSuggestions);
    placesAutocomplete.on('cursorchanged', handleOnCursorchanged);
    placesAutocomplete.on('change', handleOnChange);
    placesAutocomplete.on('clear', handleOnClear);

    function handleOnSuggestions(e) {
        markers.forEach(removeMarker);
        markers = [];

        if (e.suggestions.length === 0) {
            map.setView(new L.LatLng(0, 0), 1);
            return;
        }

        e.suggestions.forEach(addMarker);
        findBestZoom();
    }

    function handleOnChange(e) {
        markers.forEach(function(marker, markerIndex) {
            if (markerIndex === e.suggestionIndex) {
                  markers = [marker];
                  marker.setOpacity(1);
                  findBestZoom();
            } else {
                removeMarker(marker);
            }
        });
    }
    
    function handleOnClear() {
        map.setView(new L.LatLng(0, 0), 1);
        markers.forEach(removeMarker);
    }

    function handleOnCursorchanged(e) {
        markers.forEach(function(marker, markerIndex) {
            if (markerIndex === e.suggestionIndex) {
                marker.setOpacity(1);
                marker.setZIndexOffset(1000);
            } else {
                marker.setZIndexOffset(0);
                marker.setOpacity(0.5);
            }
        });
    }

    function addMarker(suggestion) {
        var marker = L.marker(suggestion.latlng, {opacity: .4});
        marker.addTo(map);
        markers.push(marker);
    }

    function removeMarker(marker) {
        map.removeLayer(marker);
    }

    function findBestZoom() {
        var featureGroup = L.featureGroup(markers);
        map.fitBounds(featureGroup.getBounds().pad(0.5), {animate: false});
    }

})();


// fill div with ID "park-info" with the National Park JSON content (just to get it to work)
function showParkInfo() {

    var stateCode = $(this).attr("data-state");
    var queryURL = "https://developer.nps.gov/api/v1/places?stateCode=" + stateCode + "&api_key=q3aVXF4M4Hq6z0fi3Ithx6UFbnKa4aRIn45OIpKo";
    // curl -X GET "https://api.nps.gov/api/v1/places?stateCode=WA" -H "accept: application/json"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#park-info").text(JSON.stringify(response));
    });
}