// Simple selector that finds the contents of the heading with .html() method
// Contents are printed directly below button that asks the question
$("#take-me-home-2").click(function(){
  var headingContents = $("#top-of-the-world").html();
  $("#nav-components").text(headingContents);
});

// Click function that toggles orange paragraph on and off
$(".button-style").click(function() {
  $("#orange-paragraph").toggleClass("orange-section");
});

// Using scrollTo plugin to take the user back to the top of the page
$('#take-me-home-3').click(function(){
  $.scrollTo($('html'), {
    duration: 600
  });
  return false;
});
