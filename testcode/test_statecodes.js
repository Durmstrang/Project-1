// array of objects (state code, state name)
var stateCodes = [
    {value:"al", name: "Alabama", zoom: "map.setZoomLevel(6)"},
    {value:"ak", name: "Alaska", zoom: "map.setZoomLevel(3)"},
    {value:"as", name: "American Samoa", zoom: "map.setZoomLevel(8)"},
    {value:"az", name: "Arizona", zoom: "map.setZoomLevel(6)"},
    {value:"ar", name: "Arkansas", zoom: "map.setZoomLevel(6)"},
    {value:"ca", name: "California", zoom: "map.setZoomLevel(5)"},
    {value:"co", name: "Colorado", zoom: "map.setZoomLevel(6)"},
    {value:"ct", name: "Connecticut", zoom: "map.setZoomLevel(7)"},
    {value:"de", name: "Delaware", zoom: "map.setZoomLevel(7)"},
    {value:"dc", name: "District of Columbia", zoom: "map.setZoomLevel(9)"},
    {value:"fl", name: "Florida", zoom: "map.setZoomLevel(6)"},
    {value:"ga", name: "Georgia", zoom: "map.setZoomLevel(6)"},
    {value:"gu", name: "Guam", zoom: "map.setZoomLevel(8)"},
    {value:"hi", name: "Hawaii", zoom: "map.setZoomLevel(7)"},
    {value:"id", name: "Idaho", zoom: "map.setZoomLevel(5)"},
    {value:"il", name: "Illinois", zoom: "map.setZoomLevel(6)"},
    {value:"in", name: "Indiana", zoom: "map.setZoomLevel(6)"},
    {value:"ia", name: "Iowa", zoom: "map.setZoomLevel(6)"},
    {value:"ks", name: "Kansas", zoom: "map.setZoomLevel(6)"},
    {value:"ky", name: "Kentucky", zoom: "map.setZoomLevel(6)"},
    {value:"la", name: "Louisiana", zoom: "map.setZoomLevel(6)"},
    {value:"me", name: "Maine", zoom: "map.setZoomLevel(6)"},
    {value:"md", name: "Maryland", zoom: "map.setZoomLevel(7)"},
    {value:"ma", name: "Massachusetts", zoom: "map.setZoomLevel(7)"},
    {value:"mi", name: "Michigan", zoom: "map.setZoomLevel(6)"},
    {value:"mn", name: "Minnesota", zoom: "map.setZoomLevel(6)"},
    {value:"ms", name: "Mississippi", zoom: "map.setZoomLevel(6)"},
    {value:"mo", name: "Missouri", zoom: "map.setZoomLevel(6)"},
    {value:"mt", name: "Montana", zoom: "map.setZoomLevel(6)"},
    {value:"ne", name: "Nebraska", zoom: "map.setZoomLevel(6)"},
    {value:"nv", name: "Nevada", zoom: "map.setZoomLevel(6)"},
    {value:"nh", name: "New Hampshire", zoom: "map.setZoomLevel(6)"},
    {value:"nj", name: "New Jersey", zoom: "map.setZoomLevel(7)"},
    {value:"nm", name: "New Mexico", zoom: "map.setZoomLevel(6)"},
    {value:"ny", name: "New York", zoom: "map.setZoomLevel(6)"},
    {value:"nc", name: "North Carolina", zoom: "map.setZoomLevel(6)"},
    {value:"nd", name: "North Dakota", zoom: "map.setZoomLevel(6)"},
    {value:"mp", name: "Northern Mariana Islands", zoom: "map.setZoomLevel(8)"},
    {value:"oh", name: "Ohio", zoom: "map.setZoomLevel(6)"},
    {value:"ok", name: "Oklahoma", zoom: "map.setZoomLevel(6)"},
    {value:"or", name: "Oregon", zoom: "map.setZoomLevel(6)"},
    {value:"pa", name: "Pennsylvania", zoom: "map.setZoomLevel(6)"},
    {value:"pr", name: "Puerto Rico", zoom: "map.setZoomLevel(8)"},
    {value:"ri", name: "Rhode Island", zoom: "map.setZoomLevel(8)"},
    {value:"sc", name: "South Carolina", zoom: "map.setZoomLevel(6)"},
    {value:"sd", name: "South Dakota", zoom: "map.setZoomLevel(6)"},
    {value:"tn", name: "Tennessee", zoom: "map.setZoomLevel(6)"},
    {value:"tx", name: "Texas", zoom: "map.setZoomLevel(5)"},
    {value:"ut", name: "Utah", zoom: "map.setZoomLevel(6)"},
    {value:"vt", name: "Vermont", zoom: "map.setZoomLevel(6)"},
    {value:"vi", name: "Virgin Islands", zoom: "map.setZoomLevel(9)"},
    {value:"va", name: "Virginia", zoom: "map.setZoomLevel(6)"},
    {value:"wa", name: "Washington", zoom: "map.setZoomLevel(6)"},
    {value:"wv", name: "West Virginia", zoom: "map.setZoomLevel(6)"},
    {value:"wi", name: "Wisconsin", zoom: "map.setZoomLevel(6)"},
    {value:"wy", name: "Wyoming", zoom: "map.setZoomLevel(6)"},
];

// FILL THE 
var fillDropdown = function () {
    // function to generate list of states
    var stateForm = document.getElementById('state')
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

fillDropdown();

console.lo