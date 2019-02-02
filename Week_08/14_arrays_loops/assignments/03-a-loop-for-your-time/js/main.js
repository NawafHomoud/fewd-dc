
/*
 * ################################################
 * Basic for loop
 *
 * Just looping over an array to get something we want
 *
 */

var bigAnimals = ["elephant", "giraffe", "whale", "grizzly", "rhino", "bison", "panda", "komodo dragon"];

for (var g=0; g <= 10; g++) {
  $("#big-animals-list").append("<li>" + bigAnimals[g] + "</li>");
}

// But what if want to limit to the length of the array?
// This will get rid of the undefined values
for (var h=0; h < bigAnimals.length; h++) {
  $("#big-animals-list-2").append("<li>" + bigAnimals[h] + "</li>");
}

/*
 * ################################################
 * Basic for loop
 *
 * Combining a basic array, for loop and a conditional statement
 *
 */

for (var i=0; i <= bigAnimals.length; i++) {
  if (bigAnimals[i] === "whale") {
    console.log("We found the biggest animal of them all, the whale at array position " + bigAnimals.indexOf("whale"));
  }
}

/*
 * ################################################
 * While loop use case
 *
 * Basically the only time I use while loops is when I don't know how long I want to loop
 * This really only happens when you have randomizing data
 * I came up with a crude example of having a deck of cards and finding an ace
 *
 */

// Sets up random variables
var myDeck = ["2", "3", "4", "5", "6", "A", "7", "8", "9", "10", "J", "Q", "K"];
var i = 0;
var myAce;

// Uses while loop to check to make sure the ace hasn't been found
while (myAce !== "A") {
  myAce = myDeck[Math.ceil(Math.random() * myDeck.length)]; // gets random value from array
  i++; // counts how many times it takes
}

// Gives us output after the ace is found
if (myAce === "A") {
  $("#while-test-dest").text("It took " + i + " tries to get an ace");
}
