// ###########################################################
// ######################## Variables ########################
// ###########################################################

// Initialize a variable, it automatically gets typed as a string
var color = "red";

// Initialize multiple variables with one declaration (separate with comma)
var color = "red", animal = "turtle";

// You can intialize different variable types (string and integer) in one line
var color = "blue", daysinaweek = "7";

// Variables can type switch, but you DONT WANT TO DO THIS
var color = "blue";
color = 17;

// Variables must start with a letter, underscore (_) or dollar sign ($) - any alphanumerics are OK after that.
var vegetable = "eggplant";
var _veggie = "brocolli";
var $veg = "arugala";

// Use camelCaseNotation (first letter of first word is small) or PascalNotation (first letter of every word is big) for variables
// You should use camelCase
var theDarkSideOfTheMoon = "A Damn Fine Album"; // camelCase
var TheFourthOfJuly = "Soundgarden's Darkest Song" // Pascal

// You can merge separate strings together with the plus sign (this is called concatenation)
var nameThatTune = "At first I was afraid, I was petrified " + "Kept thinking I could never live without you by my side " + "But then I spent so many nights thinking how you did me wrong";
console.log(nameThatTune);

// You can define a variable on the fly - DONT DO THIS!
VeggieSalad = vegetable + " lettuce";
console.log(VeggieSalad); //will print "eggplant lettuce"



// ##################################################################
// ######################## Number Variables ########################
// ##################################################################

// Five types of variables are always primative variables - stored in the quick memory stack
var coinToss = "Alice in Chains"; // string
var coinToss = 1776; 		// number

console.log(typeof coinToss);

// Null and undefined are basically the same: both just hold a meaningless value in a variable
var feelingPostBreakUp = null; 	// null
var goodIndoorPlant = "Now it's defined"; 			// undefined
console.log(goodIndoorPlant);

// You can call 'typeof' to get the variable type
var WWIIDate = 1942;
console.log(typeof WWIIDate); 		// returns "Number"

// You can also call 'isNaN' to determine if something is a number or not
var numberOfBrainCells = 1.98e16;
console.log (isNaN (numberOfBrainCells));

// Number variables can also be octal (base 8) or hexadecimal (base 16) but are generally decimal (base 10).
var hexThatNumber = 0xAB; 		// first digit = 0, second digit = x, third and fourth digits = 0-9 or A-F
var averageGPA = 4.3; 			// floating point just happens when you add in a decimal (stored as string until needed)
var bigAssNumber = 3.175e8; 	// basically 3.175 x 10^8



// ##################################################################
// ######################## String Variables ########################
// ##################################################################

var greetings = "Ahola!"; // string can contain a whole mix of stuff
var architecturalStyle = 'Art Deco'; // use single quotes, they work and no one will give a shit
var goodQuestion = "37";

// Escaping stuff is still pretty laborious ( \n = new line, \t = tab, \' = single quote \" = double quote)
var declarationOfIndependence = "\"We hold these truths to be self-evident, that all men are created equal, \n that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.\""



// ################################################################################
// ######################## Variable Navigation + Switches ########################
// ################################################################################

// .length is a method in JS
var BigMountain = "Denali";
console.log(BigMountain.length); // output of '6'

// Turn a Boolean into a String (.tostring is also a method)
var SunRisesInTheEast = true;
SunRisesInTheEast.toString();
console.log(typeof SunRisesInTheEast);

// Convert a number into a string - it justs prints the number as a string
var PillowsPerHousehold = 5.69;
console.log(PillowsPerHousehold.toString());

// Change it to a hexidecial (parenthesis value is radix, or the base number set you want to use)
var aGoodLengthVacation = 10;
console.log(aGoodLengthVacation.toString(16));

// parseInt() - takes a string and make it a number, as best it can (with radix mode)
var purgatoryWouldBe = parseInt("1000 Long Mondays"); // will output '1000' because it chops off non number stuff
var purgatoryWouldBe = parseInt("1000 Long Mondays", 16);  // will output '4096' because second parameter passed defines radix base number set

// parseFloat() - takes a string and makes it a number with a decminal (no radix mode)
var yourWeight = parseFloat("325.69 pounds. It\'s probably time for a diet."); // returns '325.69' - note how the function dropped characters after the first space
var heightOfAndreTheGiant = parseFloat("I don't know, let me check google"); // returns 'NaN' - not a number.



// ##############################################################
// ######################## Type Casting ########################
// ##############################################################

// Boolean(parameter-here);
var Chinatown = Boolean("Jack Nicholson"); 		// returns 'true' because value had at least one character
var apocalypseNow = Boolean("1979"); 			// returns 'true' because there was at least one number
var smashingPumpkinsEP = Boolean("0"); 			// returns 'false' because there was no number, zero is not a number

// Number(parameter-here);
var giantAirplaneModel = Number("A380"); 		// returns 'NaN' because it hits the A character before the number, invalidating the response
var freedomTowerHeight = Number("1776"); 		// returns '1776' because it was already an integer
var daysPerYear = Number("365.25"); 			// returns '365.25' - no problem with floating point
var sectionInSupportDoc = Number("1.32.4.1"); 	// returns 'NaN' - Number() can only handle one decimal place before going bust

// String(parameter-here); - very straightforward
var annoyingSong = String("99 Luftballons"); 	// returns '99 Luftballons' - easy schmeezy
var meaningOfLife = String(null); 				// returns 'null' - null and undefined variables WILL work here as strings, they dont work for .toString();


// ###########################################################
// ######################## Functions ########################
// ###########################################################

// Super basic function
// Ouytput variable by calling function
// Beginner mistake is not calling the function.

var Monday = "Apple a day on Mondays people, don\'t forget."

function fruitOfTheDay() {
  // console.log(Monday);
}
fruitOfTheDay();


// Function that combines or concatenates two strings together
// This requires that the variables be of the same type (number, string)
// Note how I declared a variable without var - doable BUT DONT DO IT.
function superBasic() {
  var greeting = "Hola amigos. ";
  greetingResponse = "Como estas?";
  console.log(greeting + greetingResponse);
}
superBasic();


// Function with conditional
// Define variable, setup function, pass variable in, use conditional for output
// This is more advanced than we are going into during the first lesson but let it wash over you a bit
// This about why this works, what firstFlight is doing, what and ">=" might mean.
var firstFlight = null;

function kittyHawk(firstFlight) {
  if (firstFlight >= 1903) {
    console.log("We're airborne");
  }
  else {
    console.log("Let us dream...");
  }
}

kittyHawk(1909);



// #######################################################################
// ######################## Output to the Browser ########################
// #######################################################################

// Basic JS number and string output
// document.write just dumps things into the browser after the rest of the page has been rendered
// very crude way to get something to appear in the browser, good for testing and not much else
document.write("You can make your browser print out text easily..");
document.write(10*10);  // output 100
document.write(1902-567); // output 1335
document.write(49/7); // output 7

// console.log is a slightly more elegant way to output to the browser
// It places output outside of the page itself into the console instead (use DevTools to see this)
console.log((49/7)-4); // output 3
console.log(Chinatown); // output True

// alert throw super annoying pop-ups in front of you
// Again, super crude method to see your JS output, only useful for testing
alert("How annoying is this box popping up? Amiright?");
