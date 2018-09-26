Parker: A Free, Open-Source US National Park Finder

Contributors: Karol Buczek, Lauren Santosuosso, Todd Zverloff, and Kayla Himmelberger (Durmstrang Group)


Concept for Parker app: 
- Mobile-friendly and responsive app
- Interactive app
- Include a dynamical map
- Great UI

We implemented our concept by asking the user to choose a state or territory, building a map of their state, dynamically generating a creating a collapsible table of park information, then showing the park location on the map in addition to the park information of the table. We also tied in the original National Park Service links to the parks and the directions to the park that open in a new window.


Design Process:
- Narrow down concept and determine if there was a need for our app
- Identify Minimum Viable Product and our "stretch" goals for the time allotted
- Identify APIs and JS libraries that will provide a better UI and integrate them
- Write code and test app on multiple browsers and viewports
- Refactor and comment code
- Style with Bootstrap and our own CSS
- Determine future development needs


Team Roles:
-Karol: coding, debugging, implement API calls and JS libraries, front-end styling
-Todd: coding, debugging, implement JS libraries, front-end styling
-Lauren: debugging, front-end styling, develop presentation
-Kayla: debugging, setup initial structure of files and GitHub repository, develop presentation, project management


Technologies Used:
- National Park Service API
- Open Weather Map API 
- Mapquest Library
- Leaflet Library
- Ajax, jQuery, CSS, and Bootstrap CSS


Directions for Future Development:
- Populate map markers automatically
- Allow users to search by distance from their current location in addition to searching by state
- Allow users plot a road trip that shows all the National Parks within 50 miles of their route
- Add splash page with search options (by state, within a specified range, as a roadtrip)
- Revise table of data to include other info such as park hours, entrance fees, campsites available, weather alerts, etc.
- Revise markers on map to show full name of park as well as address
- Look into incorporating a library such as Underscore.js to reduce the length of our code
- Integrate Facebook and Instagram capability so users can post and link their photos of the parks they visit
- Create a user profile section so previous searches can be stored in a database such as Firebase
- Create a digital passport of the parks so users get a "stamp" from each National Park they visit (authenticate based off geolocation)
