// ############################################################
// ######################## Applied JS ########################
// ############################################################

// ScrollTo in action
// Notice the information in the scrollTo method is greatly simplified
// All you need to supply is the scrollTo target and the duration in milliseconds (1000ms = 1s)
$('#take-me-home, #take-me-home-2, #take-me-home-3').click(function(){
  $.scrollTo('#start-of-page', 600);
});
