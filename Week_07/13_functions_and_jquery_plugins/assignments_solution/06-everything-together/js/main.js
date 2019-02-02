// ############################################################
// ######################## Applied JS ########################
// ############################################################

// Using a Flickity carousel with jQuery
// Initialization for carousel just attaches like any other jQuery method
// It works very similar to how you would define multiple CSS property/value pairs with the .css() method
// Check out the JSON notation for the options
$('.carousel-container').flickity({
  // options
  autoPlay: 2000,
  cellAlign: 'left',
  contain: true,
  setGallerySize: false,
  wrapAround: true
});

// ScrollTo in action
// Notice the information in the scrollTo method is greatly simplified
// All you need to supply is the scrollTo target and the duration in milliseconds (1000ms = 1s)
$('#take-me-home, #take-me-home-2, #take-me-home-3').click(function(){
  $.scrollTo('#start-of-page', 600);
});

// What a waypoint looks like in vanilla JS
// In this example you create a new Waypoint and must use the element option
// This is the example powering the page, the above example doesn't have any instructions in the conditional statements
var sectionTwoWaypoint = new Waypoint({
  element: document.getElementById('section-2'),
  handler: function(direction) {
    if (direction === 'down') {
      $('aside').delay(500).fadeIn();
    }
    if (direction === 'up') {
      $('aside').fadeOut();
    }
  },
  offset: 1500
});
