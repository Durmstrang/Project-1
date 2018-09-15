// Psuedo code for our Parker App
<div class="form-group">
                        <input type="text" id="location-input">
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </div> */</div>

// grab user's location input 
function renderParks(list) {
    $("#park-list").empty(); // empties out the html

    // render our todos to the page
    for (var i = 0; i < list.length; i++) {
      // Create a new variable that will hold a "<p>" tag.
      // Then set the to-do "value" as text to this <p> element.
      var newP = $("<p>");
      newP.text(list[i]);

      // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
      // Give your button a data attribute called data-park-info and a class called "checkbox".
      // Lastly add a checkmark inside.

      var newBtn = $("<button>");

      newBtn.attr("data-park-info", i);
      newBtn.addClass("checkbox");
      newBtn.text("✓");

      // Append the button to the to do item
      newP = newP.prepend(newBtn);

      // Add the button and to do item to the park-list div
      $("#park-list").append(newP);
    }
  }

  $("#add-to-do").on("click", function(event) {
    event.preventDefault();

    // Get the to-do "value" from the textbox and store it as a variable
    var toDoTask = $("#to-do").val().trim();

    // Adding our new todo to our local list variable and adding it to local storage
    list.push(toDoTask);

    // Update the todos on the page
    renderParks(list);

    // Save the todos into localstorage.
    // We need to use JSON.stringify to turn the list from an array into a string
    localStorage.setItem("todolist", JSON.stringify(list));

    // Clear the textbox when done
    $("#to-do").val("");
  });

  // When a user clicks a check box then delete the specific content
  $(document).on("click", ".checkbox", function() {
    // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
    var toDoNumber = $(this).attr("data-park-info");

    // Deletes the item marked for deletion
    list.splice(toDoNumber, 1);

    // Update the todos on the page
    renderParks(list);

    // Save the todos into localstorage.
    // We need to use JSON.stringify to turn the list from an array into a string
    localStorage.setItem("todolist", JSON.stringify(list));
  });

  // Load the todos from localstorage.
  // We need to use JSON.parse to turn the string retrieved  from an array into a string
  var list = JSON.parse(localStorage.getItem("todolist"));

  // Checks to see if the todolist exists in localStorage and is an array currently
  // If not, set a local list variable to an empty array
  // Otherwise list is our current list of todos
  if (!Array.isArray(list)) {
    list = [];
  }

  // render our todos on page load
  renderParks(list);

// We need to use JSON.parse to turn the string retrieved  from an array into a string
var list = JSON.parse(localStorage.getItem("parkList"));

// incorporate algolia library



// Grab users location and store input (variable) in firebase
    /* from firebase we can pull the state info and use Bing/Mapquest API to generate a map, then use the
    National Park Service API to populate "pins" on that map of state parks in the user's state 
        --our stretch goal is to change this to show all national parks within 50 miles from it */

/* Once the user click ons a "pin", show some handpicked data from the park's webpage 
(Location, operating hours, entrance fee/pass information)
    --stretch goal is to add photos, possibly from instagram and/or add weather info? */

// create a toggle menu in the top right of the page to show previous searches
