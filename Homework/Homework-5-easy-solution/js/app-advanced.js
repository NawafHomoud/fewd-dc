/*** 
 * Relaxr HW4 - advanced JS solution
 * 
 * Ok, so you got the this page to work and you're thinking, "Hey John, I think this could have been simpler"
 * That's right it could have been. But let's not fixate on maybes, let's make it happen.
 * Is the last answer in app.js wrong? No, no it's not. But think about it:
 * If you've got three errands to run, and you make three trips wouldnt it have been better to knock it all out at once?
 * Damn right it would have been. So let's think about how to do that in our code.
 * 
 * Reorient your brain around the idea of cycling through the possible targets in our document
 * And comparing them using one reusable function
 * The data coming into the functions changes but the function itself stays the same 
 * 
 * BIG IDEA ALERT!
 * This is the basis of functional programming (we're not 100% of the way there but getting close...)
 * Functions NEVER contain specific data, they are just little factories that process data external to them
 * In fact, there is a whole JS design pattern built around this idea called...wait for it...factories
 * The data can be varied as it comes in but the functions modifications are consistent, the way a factory produces a product
 * POOOOF! That was your brain growing in size.
 * 
 * So how do we actually do that?
*/ 
  

// We still wait for the document to be ready, same as before
$(document).ready(function() {

  // But, because we know which parts of our page we are clicking on...
  // Define the three clickTargetMore IDs in our document as an array
  var clickTargetsMore = [
    'read-group-1-read-more', 
    'read-group-2-read-more', 
    'read-group-3-read-more'
  ];

  // Define the three clickTargetLess IDs in our document as an array
  var clickTargetsLess = [
    'read-group-1-read-less', 
    'read-group-2-read-less', 
    'read-group-3-read-less'
  ];

  // And we also know the three spots where the content reveals happen so...
  // Define the three textRevealTargets sections in our document, also in an array
  var textRevealTargets = [
    '#show-this-on-click-1',
    '#show-this-on-click-2',
    '#learn-more-text'
  ];

  // And we set up a global variable to store which thing we click on each time
  var activeClickedID;

  // By looking at the whole document, we can capture and evaluate any click method
  $(document).click( function(event) {

    // Now we compare each clicked event against each of our clickTarget variable with a loop
    // The for loop is constrained by the length of the clickTarget array (.length does that)
    for ( var i = 0; i < clickTargetsMore.length; i++ ) {

      // Capture the active clicked thing by looking at the event target of jQuery
      // See more here: https://api.jquery.com/event.target/
      // And then we get the ID of the clicked thing (our <a> element)
      activeClickedID = $(event.target).attr('ID');

      // If the clicked object in the document matches one of our clickTarget arrays, we evaluate the show/hide
      // And if the click doesn't match, we don't mess with it - browser will do whatever it was going to do
      if ( activeClickedID === clickTargetsMore[i] || activeClickedID === clickTargetsLess[i] ) {

        // Still prevents default link behavior
        event.preventDefault();    

        // Finds the textRevealTarget and does the slide toggle magic - same as before
        $(textRevealTargets[i]).slideToggle(250);

        // But this time we have to target the parent of the <a>, which contains the class we want to modify
        // How do we find it? Use DOM transversal .parent() - nice! Notice we are chaining methods here
        // Also notice how we added a `#` to the clickTargetsMore/Less[i] reference - you have to check your jQuery output to make sure you know what to target
        // We are adding strings together here (#) and the contents inside clickTargetsMore/Less - expand your mind
        // You can add strings in JS! Whoa...
        $('#' + clickTargetsMore[i]).parent().toggleClass('hide');
        $('#' + clickTargetsLess[i]).parent().toggleClass('hide');

      } // closes if statement
    } // closes for loop
  }); // closes document.click
}); // closes document.ready
