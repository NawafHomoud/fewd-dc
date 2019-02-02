// ############################################################
// ######################## Applied JS ########################
// ############################################################

// What a waypoint looks like in jQuery
// Note handler option see: imakewebthings.com/waypoints/api/handler-option
// You don't have to use the conditional directions but I use them every time with waypoints, so you probably will too
var firstWaypoint = $('#ID-selector').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      // do something
    }
    if (direction === 'up') {
      // do something
    }
  }
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
