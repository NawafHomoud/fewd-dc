// ########################################################
// ######################## jQuery ########################
// ########################################################
// Please note that these selectors aren't connected to anything!

// Identical to CSS Selectors
// For regular HTML elements just put them between the quotes
$('div') // select all <div>'s
$('h2') // select all <h2>'s
$('p a') // select all <a>'s inside of all <p>'s
$('p, a') // select all <p>'s and <a>'s

// For HTML IDs, put the # sign in front
$('#someId')
$('#someId a')

// FOR HTML classes, put the . in front
$('.someClass')
$('.someClass a')


// #######################################################
// ######################## .html() ########################
// #######################################################

// Select the HTML contents from an ID on the page and put them in the console
var exampleOne = $("#funny-bone").html();
console.log(exampleOne);

// Overwrite HTML contents in an ID
// Note that I can include HTML tags right in there
$("#redacted-funny-bone").html('<span>Darryl wants to know if this works. Of course it does.</span>');

// Select text content from inside an HTML element
var exampleTwo = $("#funny-bone-again").text();
console.log(exampleTwo);

var exampleTen = $("#there-is-hope").text();
console.log(exampleTen);

// Overwrite HTML contents in an ID
// Note that I can include HTML tags right in there
$("#redacted-funny-bone-again").text('How many coders does it take to screw in a light bulb?');

// ########################################################
// ######################## .css() ########################
// ########################################################

// This applies css to a selector in the format of ("property", "value")
$(".green-sunglasses").css({
  "color": "limegreen",
  "font-size": "50px"
});






// ###################################################################
// ######################## .hide() / .show() ########################
// ###################################################################

// Not much to say here other than these hide/show text on whatever selector you apply them to
$("#css-example-02").hide();
$("#css-example-03").show();


// ##############################################################################
// ######################## .addClass() / .removeClass() ########################
// ##############################################################################

// Easy implementation - just put the class you want to remove inside of quotes in the method parenthesis
$("#orange-target").addClass("aquamarine");
$("#blue-target").removeClass("blue");


// ###########################################################################
// ######################## .slideUp() / .slideDown() ########################
// ###########################################################################

// SlideUp and SlideDown also work very well with click events
$("#click-slide-up").click(function(){
  $("#slide-up-target").slideUp();
});
$("#click-slide-down").click(function(){
  $("#slide-down-target").slideDown();
});

// #############################################################
// ######################## Click Event ########################
// #############################################################

// 1- Click on input button, turn element red using jQuery
// First you select the clickable element and then apply jQuery to it
// Click receives a function to execute after the click event occurs
function actionFx() {
  $("#click-appear-red").addClass("red");
}

$("#click-trial-01").click(actionFx);

// 2- You can do the same thing with an annoymous function
// Notice how the function just gets dropped into the click method's parenthesis
$("#click-trial-02").click(function(){
  $("#click-appear-red-02").addClass("red");
});

// #############################################################
// ######################## Hover Event ########################
// #############################################################
// Exactly like a click event in every way, except I usually hover and add class to same ID
$(document).ready(function() {

});

$("#hover-appear-red-03").hover(function(){
  $("#hover-appear-red-03").addClass("red");
});

// ##############################################################
// ######################## .toggleClass ########################
// ##############################################################
// Click events and toggleClass are like peanut butter and jelly - go get together
// Same ideas we've been playing with on this page, just applied a bit differently
$("#click-toggle").click(function(){
  $("#toggle-target").toggleClass("orange");
});

// ##############################################################
// ######################## .slideToggle ########################
// ##############################################################
// Another great one to use with click event handlers
$("#click-slide-toggle").click(function(){
  $("#slide-toggle-target").slideToggle();
});

// ##############################################################
// ######################## JS Selectors ########################
// ##############################################################

// Find HTML ID numbers-1 and color it red
var numberOne = document.getElementById('numbers-1');
numberOne.style.color = "red";
