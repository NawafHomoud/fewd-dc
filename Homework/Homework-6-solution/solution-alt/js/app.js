/*
 * HW - Citipix Solution (with loops and arrays)
 *
 * Requirements:
 *
 *
 * Call $.val() on inputs to get the string value of your user's input
 * Store user input in var city
 * Use $.on(submit) or $.click to figure out when the user clicks the 'submit' button
 * Create if / else if / else conditionals to control the flow of your application
 * Write at least six different lines of pseudocode and display them inline as JavaScript comments
 * Prevent a form submission using the event.preventDefault() function
 * Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
 * Get the first element from an attribute name using $.attr()
 * Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code
 *
 * If a user submits:
 * "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
 * "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
 * "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
 * "Austin" or "ATX" make the background of the page austin.jpg
 * "Sydney" or "SYD" make the background of the page sydney.jpg
 */

// Create an array of the city abbreviations
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

// Setup document ready structure
$(document).ready(function() {

  // Build loop to analyze #city-type select list
  // Append the appropriate city abbeviation to each city
  // note that You could easily accomplish this in the HTML layer
  // Just an exercise to use loops
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

  // Use .on() method to detect a state change from the user (in this case selecting an option in the select list '#city-type')
  $('form').on('change', '#city-type',function(){

    // Define city variable as the value selected from #city-type
    var city = $('#city-type').val();

    // Run through conditions based on values created in the array above
    // Add appropriate body classes to make the background image change
    if(city === 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city === 'SF') {
      $('body').attr('class','sf');
    }
    else if (city === 'LA') {
      $('body').attr('class','la');
    }
    else if (city === 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city === 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});
