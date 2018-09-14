// Psuedo code for our Parker App

// Build search box as a splash page in the main index.html
    // this should take advantage of the algolia JS library which will autofill what the user is typing

// Grab users location and store input (variable) in firebase
    /* from firebase we can pull the state info and use Bing/Mapquest API to generate a map, then use the
    National Park Service API to populate "pins" on that map of state parks in the user's state 
        --our stretch goal is to change this to show all national parks within 50 miles from it */

/* Once the user click ons a "pin", show some handpicked data from the park's webpage 
(Location, operating hours, entrance fee/pass information)
    --stretch goal is to add photos, possibly from instagram and/or add weather info? */

// create a toggle menu in the top right of the page to show previous searches