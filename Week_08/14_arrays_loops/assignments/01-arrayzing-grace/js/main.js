// Setup an array
var fruits = ["banana", "orange", "apple", "pineapple", "tangerine", "lychee", "peach"];

// Oh what do we have here? Another way to handle events .on()
// Notice how on accepts any event and then uses an anonymous function
// The function encapsulates any instructions that should happen after submit is triggered
// This works just like all the other event handlers we've looked, like .click() and .submit()
$('#array-methods-form').on('submit', function(event) {

  // Capture value from select list on submission
  var arraySelectValue = $("#array-methods-select-list").val();

  // Setup array variables
  var arrayTransform, arrayMod;

  // Hide all fields again so the fade-in effect works
  $('h3, #fruit-variable, #fruit-variable-mod, #fruit-variable-msg, #fruit-variable-original').hide(100);

  // Output current fruits variable
  $('h3').show(100);
  $('#fruit-variable-original').text("starting fruits = " + fruits).show(200);

  // Use a switch statement to evaluate a bunch of different array concepts
  switch (arraySelectValue) {
    case "indexOf":
      arrayTransform = fruits.indexOf(fruits[0]);
      arrayMsg = "indexOf() finds the index value for the 1st (0) position of the array in this example.";
      arrayMod = "fruits.indexOf(" + fruits[0] + ") = " + arrayTransform;
      break;
    case "length":
      arrayTransform = fruits.length;
      arrayMsg = ".length tells you how many items are in your array";
      arrayMod = "fruits.length = " + arrayTransform;
      break;
    case "pop":
      arrayTransform = fruits.pop();
      arrayMsg = ".pop() method pops off the LAST item in the array.";
      arrayMod = "fruits.pop() removed " + arrayTransform;
      break;
    case "shift":
      arrayTransform = fruits.shift();
      arrayMsg = ".shift() method pops off the FIRST item in the array. This one just quietly shifts off into the night.";
      arrayMod = "fruits.shift() removed " + arrayTransform;
      break;
    case "push":
      arrayTransform = fruits.push("kiwi");
      arrayMsg = ".push() method takes whatever item you have in quotes within the method parenthesis and adds it to the END of the array, creating a new item.";
      arrayMod = "fruits.push(\"kiwi\");";
      break;
    case "unshift":
      arrayTransform = fruits.unshift("cherry");
      arrayMsg = ".unshift() method takes whatever item you have in quotes within the method parenthesis and adds it to the BEGINNING of the array, creating a new item.";
      arrayMod = "fruits.unshift(\"cherry\");";
      break;
    case "splice-remove":
      arrayTransform = fruits.splice(1,1);
      arrayMsg = "Splice method removes a specific item from the array. First number indicates the index where removal starts, second number indicates total number of items to remove.";
      arrayMod = "fruits.splice(1,1);";
      break;
    case "splice-add":
      arrayTransform = fruits.splice(1, 0, "pear");
      arrayMsg = "Splice method removes a specific item from the array. First number indicates the index where removal starts, second number indicates total number of items to remove.";
      arrayMod = "fruits.splice(1, 0, \"pear\");" + arrayTransform;
      break;
    case "reverse":
      arrayTransform = fruits.reverse();
      arrayMsg = "reverse() just switches around the ordering of all items in the array. It doesn't add or delete anything.";
      arrayMod = "fruits.reverse();";
      break;
    case "reverse":
      arrayTransform = fruits.join(" and ");
      arrayMsg = "join() will take the value from within the parentheses and combine it with all values in your array to make one big string.";
      arrayMod = "fruits.join(\" and \");";
      break;
    default:
      arrayMod = "fruits = " + fruits;
      arrayMsg = "The default fruits array - this is what it looks like when the program starts."
  }

  // Output fruits after each modification
  $('#fruit-variable-mod').text("mods to fruits: " + arrayMod).show(300);
  $('#fruit-variable').text("modified fruits = " + fruits).show(400);
  $('#fruit-variable-msg').text(arrayMsg).show(500);

  event.preventDefault();
});
