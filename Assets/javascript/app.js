// Psuedo code for our Parker App
$(document).ready(function(){

 var testArray = ["1","2", "3"]
 var userInput = [ ]
//Build search box that user can add location
// This function handles events where a animal button is clicked
$("#submit").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var testArray = $(".location-input").val().trim();
    console.log(".location-input")
    // Adding what user types from the textbox to our array
    testArray.push(userInput)

  });

// Grab users location and store input (variable) in firebase
    /* from firebase we can pull the state info and use Bing/Mapquest API to generate a map, then use the
    National Park Service API to populate "pins" on that map of state parks in the user's state 
        --our stretch goal is to change this to show all national parks within 50 miles from it */

/* Once the user click ons a "pin", show some handpicked data from the park's webpage 
(Location, operating hours, entrance fee/pass information)
    --stretch goal is to add photos, possibly from instagram and/or add weather info? */

// create a toggle menu in the top right of the page to show previous searches

//test push
})