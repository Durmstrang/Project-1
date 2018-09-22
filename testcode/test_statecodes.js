// array of objects (state code, state name)
var stateCodes = [
    {value:"", name: "None Selected"},
    {value:"al", name: "Alabama", "data-lat": "32.806671", "data-long": "-86.791130", zoom: "map.setZoomLevel(6)"},
    {value:"ak", name: "Alaska", "data-lat": "61.370716", "data-long": "-152.404419", zoom: "map.setZoomLevel(3)"},
    {value:"as", name: "American Samoa", "data-lat": "-14.22865935", "data-long": "-169.8503777", zoom: "map.setZoomLevel(8)"},
    {value:"az", name: "Arizona", "data-lat": "33.729759", "data-long": "-111.431221", zoom: "map.setZoomLevel(6)"},
    {value:"ar", name: "Arkansas", "data-lat": "34.969704", "data-long": "-92.373123", zoom: "map.setZoomLevel(6)"},
    {value:"ca", name: "California", "data-lat": "36.116203", "data-long": "-119.681564", zoom: "map.setZoomLevel(5)"},
    {value:"co", name: "Colorado", "data-lat": "39.059811", "data-long": "-105.311104", zoom: "map.setZoomLevel(6)"},
    {value:"ct", name: "Connecticut", "data-lat": "41.597782", "data-long": "-72.755371", zoom: "map.setZoomLevel(7)"},
    {value:"de", name: "Delaware", "data-lat": "39.318523", "data-long": "-75.507141", zoom: "map.setZoomLevel(7)"},
    {value:"dc", name: "District of Columbia", "data-lat": "38.897438", "data-long": "-77.026817", zoom: "map.setZoomLevel(9)"},
    {value:"fl", name: "Florida", "data-lat": "27.766279", "data-long": "-81.686783", zoom: "map.setZoomLevel(6)"},
    {value:"ga", name: "Georgia", "data-lat": "33.040619", "data-long": "-83.643074", zoom: "map.setZoomLevel(6)"},
    {value:"gu", name: "Guam", "data-lat": "13.43795691", "data-long": "144.6922461", zoom: "map.setZoomLevel(8)"},
    {value:"hi", name: "Hawaii", "data-lat": "21.094318", "data-long": "-157.498337", zoom: "map.setZoomLevel(7)"},
    {value:"id", name: "Idaho", "data-lat": "44.240459", "data-long": "-114.478828", zoom: "map.setZoomLevel(5)"},
    {value:"il", name: "Illinois", "data-lat": "40.349457", "data-long": "-88.986137", zoom: "map.setZoomLevel(6)"},
    {value:"in", name: "Indiana", "data-lat": "39.849426", "data-long": "-86.258278", zoom: "map.setZoomLevel(6)"},
    {value:"ia", name: "Iowa", "data-lat": "42.011539", "data-long": "-93.210526", zoom: "map.setZoomLevel(6)"},
    {value:"ks", name: "Kansas", "data-lat": "38.526600", "data-long": "-96.726486", zoom: "map.setZoomLevel(6)"},
    {value:"ky", name: "Kentucky", "data-lat": "37.668140", "data-long": "-84.670067", zoom: "map.setZoomLevel(6)"},
    {value:"la", name: "Louisiana", "data-lat": "31.169546", "data-long": "-91.867805", zoom: "map.setZoomLevel(6)"},
    {value:"me", name: "Maine", "data-lat": "44.693947", "data-long": "-69.381927", zoom: "map.setZoomLevel(6)"},
    {value:"md", name: "Maryland", "data-lat": "39.063946", "data-long": "-76.802101", zoom: "map.setZoomLevel(7)"},
    {value:"ma", name: "Massachusetts", "data-lat": "42.230171", "data-long": "-71.530106", zoom: "map.setZoomLevel(7)"},
    {value:"mi", name: "Michigan", "data-lat": "43.326618", "data-long": "-84.536095", zoom: "map.setZoomLevel(6)"},
    {value:"mn", name: "Minnesota", "data-lat": "45.694454", "data-long": "-93.900192", zoom: "map.setZoomLevel(6)"},
    {value:"ms", name: "Mississippi", "data-lat": "32.741646", "data-long": "-89.678696", zoom: "map.setZoomLevel(6)"},
    {value:"mo", name: "Missouri", "data-lat": "38.456085", "data-long": "-92.288368", zoom: "map.setZoomLevel(6)"},
    {value:"mt", name: "Montana", "data-lat": "46.921925", "data-long": "-110.454353", zoom: "map.setZoomLevel(6)"},
    {value:"ne", name: "Nebraska", "data-lat": "41.125370", "data-long": "-98.268082", zoom: "map.setZoomLevel(6)"},
    {value:"nv", name: "Nevada", "data-lat": "38.313515", "data-long": "-117.055374", zoom: "map.setZoomLevel(6)"},
    {value:"nh", name: "New Hampshire", "data-lat": "43.452492", "data-long": "-71.563896", zoom: "map.setZoomLevel(6)"},
    {value:"nj", name: "New Jersey", "data-lat": "40.298904", "data-long": "-74.521011", zoom: "map.setZoomLevel(7)"},
    {value:"nm", name: "New Mexico", "data-lat": "34.840515", "data-long": "-106.248482", zoom: "map.setZoomLevel(6)"},
    {value:"ny", name: "New York", "data-lat": "42.165726", "data-long": "-74.948051", zoom: "map.setZoomLevel(6)"},
    {value:"nc", name: "North Carolina", "data-lat": "35.630066", "data-long": "-79.806419", zoom: "map.setZoomLevel(6)"},
    {value:"nd", name: "North Dakota", "data-lat": "47.528912", "data-long": "-99.784012", zoom: "map.setZoomLevel(6)"},
    {value:"mp", name: "Northern Mariana Islands", "data-lat": "15.21680033", "data-long": "145.7231096", zoom: "map.setZoomLevel(8)"},
    {value:"oh", name: "Ohio", "data-lat": "40.388783", "data-long": "-82.764915", zoom: "map.setZoomLevel(6)"},
    {value:"ok", name: "Oklahoma", "data-lat": "35.565342", "data-long": "-96.928917", zoom: "map.setZoomLevel(6)"},
    {value:"or", name: "Oregon", "data-lat": "44.572021", "data-long": "-122.070938", zoom: "map.setZoomLevel(6)"},
    {value:"pa", name: "Pennsylvania", "data-lat": "40.590752", "data-long": "-77.209755", zoom: "map.setZoomLevel(6)"},
    {value:"pr", name: "Puerto Rico", "data-lat": "18.46873857", "data-long": "-66.11848623", zoom: "map.setZoomLevel(8)"},
    {value:"ri", name: "Rhode Island", "data-lat": "41.680893", "data-long": "-71.511780", zoom: "map.setZoomLevel(8)"},
    {value:"sc", name: "South Carolina", "data-lat": "33.856892", "data-long": "-80.945007", zoom: "map.setZoomLevel(6)"},
    {value:"sd", name: "South Dakota", "data-lat": "44.299782", "data-long": "-99.438828", zoom: "map.setZoomLevel(6)"},
    {value:"tn", name: "Tennessee", "data-lat": "35.747845", "data-long": "-86.692345", zoom: "map.setZoomLevel(6)"},
    {value:"tx", name: "Texas", "data-lat": "31.054487", "data-long": "-97.563461", zoom: "map.setZoomLevel(5)"},
    {value:"ut", name: "Utah", "data-lat": "40.150032", "data-long": "-111.862434", zoom: "map.setZoomLevel(6)"},
    {value:"vt", name: "Vermont", "data-lat": "44.045876", "data-long": "-72.710686", zoom: "map.setZoomLevel(6)"},
    {value:"vi", name: "Virgin Islands", "data-lat": "17.81026717", "data-long": "-64.6222179", zoom: "map.setZoomLevel(9)"},
    {value:"va", name: "Virginia", "data-lat": "37.769337", "data-long": "-78.169968", zoom: "map.setZoomLevel(6)"},
    {value:"wa", name: "Washington", "data-lat": "47.400902", "data-long": "-121.490494", zoom: "map.setZoomLevel(6)"},
    {value:"wv", name: "West Virginia", "data-lat": "38.491226", "data-long": "-80.954453", zoom: "map.setZoomLevel(6)"},
    {value:"wi", name: "Wisconsin", "data-lat": "44.268543", "data-long": "-89.616508", zoom: "map.setZoomLevel(6)"},
    {value:"wy", name: "Wyoming", "data-lat": "42.755966", "data-long": "-107.302490", zoom: "map.setZoomLevel(6)"},
];

// FILL THE STATE SELECT DROPDOWN MENU IN THE DOM
var fillDropdown = function () {
    // function to generate list of states
    var stateForm = document.getElementById('stateSelection')
    for (var i = 0; i < stateCodes.length; i++) {
        // fill HTML form element with "quiz" class with questions
        var newOption = document.createElement('option')
        newOption.text = newOption.value = stateCodes[i].name
        console.log(newOption)
        stateForm.add(newOption)
        // newOption.value(stateCodes[i].name)
        // .attr(stateCodes[i].value);
        // console.log(newOption.value)
        // stateForm.add(newOption)
        // newSelect.append(newOption)
        // stateForm.append(newSelect);
    }
};


// function to get and build the park data in the table
var displayParks = function(para) {

    var stateCode = para
    var apiKey = "q3aVXF4M4Hq6z0fi3Ithx6UFbnKa4aRIn45OIpKo"
    var queryURL = "http://api.nps.gov/api/v1/parks?stateCode=" + stateCode + "&fields=images" + "&api_key=" + apiKey

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            var newRow = $("<tr>")
            var park = response.data[i]
            $("#table-body").append(newRow)
            var newColumn = $("<th scope='col'>")
            $(newRow).append(newColumn)
            var newLink = $("<a>")
            $(newColumn).append(newLink)
            var parkLink = park.url
            newLink.attr("href", parkLink).attr("target", "_blank")
            var parkName = park.fullName
            $(newLink).append(parkName)
            var newColumn2 = $("<th scope='col'>")
            $(newRow).append(newColumn2)
            var parkDesignation = park.designation
            $(newColumn2).append(parkDesignation)
            var newColumn3 = $("<th scope='col'>")
            $(newRow).append(newColumn3)
            var parkState = park.states
            $(newColumn3).append(parkState)
            
            // // Super ugly way to get lat long splits to store as variables
            // // Scope may pose an issue
            var parkLat = ""
                var parkLong = ""

                if (park.latLong) {
                    var firstSplit = park.latLong.split(", ")

                    parkLat = firstSplit[0].replace("lat:", "")
                    parkLong = firstSplit[1].replace("long:", "")
                }
            
        }
    })
}


// FILL THE TABLE WITH PARK INFO WHEN USER CLICK 'SUBMIT' BUTTON
$("#submitBtn").on("click", function(event) {
    event.preventDefault()
    $("#table-body").empty()

    var stateLat =  $("#stateSelection option:selected").val("data-lat")
    var stateLong =  $("#stateSelection option:selected").val("data-long")

    displayParks()
    // // map.remove()
    var mapDiv = $('<div id="map" style="width: 100%; height: 500px;">')
    $("#map-home").append(mapDiv)
    // loadMap(stateLat, stateLong)
    })


// // HTML 5 geolocation code - yet to be implemented as of 9/19
// var geoLocation = function() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         console.log("Geolocation is not supported by this browser")
//     }
// }


// INITIALIZE MAPQUEST (BASED ON THE STATE LAT, LONG) INTO THE #MAP DIV IN THE HTML
var loadMap = function(lat, long) {
    L.mapquest.key = 'q3aVXF4M4Hq6z0fi3Ithx6UFbnKa4aRIn45OIpKo';
    var map = L.mapquest.map('map', {
        center: [lat, long],
        layers: L.mapquest.tileLayer('map'),
        zoom: 6
    }); map.addControl(L.mapquest.control());
}


// Initial Load
    fillDropdown();    
    displayParks();
    loadMap(41.26093905,-81.57116722);
    // renderMarkers(41.5441665649414,-83.6975021362305,"Home");