// ######################################################################
// ######################## Comparison Operators ########################
// ######################################################################
// Comparing things in Javascript

// 1- You can compare strings but it's often pretty useless
var color = "red", animal = "turtle";
if (color > animal) {
  // false - nothing will return here
} else {
  console.log ("Color is not greater than animal - what are you thinking?")
}

// 1b- Note that you don't need an else statement when writing a conditional statement
if (color === animal) {
  // false - nothing will return here
} else {
  console.log ("Color is not equal to animal. Get over it.");
}

// 2- You can intialize different variable types (string and integer) in one line
// But what happens when we compare them?
var otherColor = "blue", daysInAWeek = "7";
if (otherColor === daysInAWeek) {
  // false - nothing will return here
} else {
  console.log ("Blue and 7 are not equal because they are different variable types.");
}

// 2b - You could use the fact that they aren't the same to compare them
if (otherColor !== daysInAWeek) {
  // true - because they aren't equal
  console.log ("This prints precisely because Blue and 7 are not equal - because we used the inequality operator");
}

// 3- A more realistic scenario is comparing integers, no quotes
var blackJack = 21, daysInAWeek = 7;
if (blackJack >= daysInAWeek) {
  // true - because blackJack is larger than daysInAWeek
  console.log ("Blackjack is a greater number than how many days are in a week");
}

// 3b- Now we will actually do something with a comparison condition
if (daysInAWeek <= blackJack) {
  // true - because blackJack is larger than daysInAWeek
  $("#orange-text").css({
    "color": "white",
    "background-color": "orange",
    "padding": "20px"
  })
}

// 4- Another integer comparison, using else if

daysInAWeek = 27;
if (blackJack <= daysInAWeek) {
  $("#blackjack-container").html("<img src=\"http://www.clipartbest.com/cliparts/Kin/oyR/KinoyRpiq.jpeg\">");
  $("#blackjack-container img").css({
    "height": "300px",
    "width": "300px"
  });
} else if (blackJack >= daysInAWeek) {
  $("#blackjack-container").html("<img src=\"http://blackjacklife.com/wp-content/uploads/2012/01/blackjack-picture-1.jpg\">");
}

// Data types
// All of them are objects!!!!
var bigNumber = 32094830948; //integer
var bigWord = "Delicious dinner awaits me at home, I think"; //string
var trueOrNot = false; // Boolean
var donaldTrumpsBrain = null; // null
var newConceptSorta = function whaaaaat(){}; // function
console.log(newConceptSorta);

// 5- Setting a Boolean based on variable values
// Note the program flow here, this is getting more advanced
var octopusLegs = 8, maxVolumeLevel = 8;
var checkVal;

if (octopusLegs !== maxVolumeLevel) {
  checkVal = false;
} else if (octopusLegs === maxVolumeLevel) {
  checkVal = true;
}

// 5- Setting a Boolean based on variable values
// Note the program flow here, this is getting more advanced
var octopusLegs = 8, maxVolumeLevel = 45;
var checkVal = null;
console.log(checkVal);

if (octopusLegs !== maxVolumeLevel) {
  checkVal = true;
} else if (octopusLegs === maxVolumeLevel) {
  checkVal = false;
}
console.log(checkVal);

function calamari () {
  if (checkVal === true) {
    $(".box-example-1").css({
      "background-color": "yellow",
      "color" : "black"
    });
  }
}
calamari();

// ########################################################
// ######################## .val() ########################
// ########################################################

// 1- val() use to get value from input field
var inputValue = $( "#input-set-placeholder-value" ).val();
console.log ("inputValue");
function setValueInHTML () {
  $("#input-value-output").html(inputValue);
}
setValueInHTML();
// 2- Think about using .val() constructively with forms
// What does `this` represent when used in this function?
// Why didn't I have to call this function?


// 3- Using return with Arguments
// This is how most functional programming occurs
// Variables values are defined on the fly by parameters passed into functions
var sum;

function addThings(val1, val2) {
  sum = val1 + val2;
}
addThings(1414, 765);
console.log(sum);
