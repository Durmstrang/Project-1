// MAPQUEST STUFF----------------------------------------------------------------------------------------------------
window.onload = function() {
    L.mapquest.key = 'q3aVXF4M4Hq6z0fi3Ithx6UFbnKa4aRIn45OIpKo';
  
    var lat = 44
    var long = -94
    
    var map = L.mapquest.map('map', {
        center: [lat, long],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });

    map.addControl(L.mapquest.control());

   
    // This function handles events where the submit button is clicked
    $("#submit").on("click", function(event) {
        event.preventDefault();
    
   });
}

// var clickState = document.getElementById("simpleStateForm").value 
// console.log(clickState)

var al = $("#al").attr("value");
console.log(al);

