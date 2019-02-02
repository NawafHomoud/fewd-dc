// Let's output some array values
fruits[0]; // will output "banana"
fruits[1]; // will output "orange"
fruits[2]; // will output "apple"

// You can mix this up asking for the index number of any array item
var fruitsOrangePosition = fruits.indexOf("orange"); // outputs '1'

// This gives us the length of the array
var fruitsLength = fruits.length; // will output "3"

// .pop() removes the last item
fruits.pop(); // fruits = ["banana", "orange"];

// .shift() removes the first item
fruits.shift(); // fruits = ["orange"];

// .push() adds whatever you into the method parenthesis to the end of the array
fruits.push("kiwi"); // fruits = ["orange", "kiwi"];

// .unshift() adds whatever you into the method parenthesis to the beginning of the array
fruits.unshift("cherry"); // fruits = ["cherry", "orange", "kiwi"];

// splice() adjusts array values (REMOVE)
// 1st number = index value for splice
// 2nd number = number of items to remove
fruits.splice(1,1); // fruits = ["cherry", "kiwi"];

// splice() adjusts array values (ADD)
// 1st number = index value for splice
// 2nd number = number of items to remove
// 3rd value = item to be added to array
fruits.splice(1, 0, "pear"); // fruits = ["cherry", "pear", "kiwi"];

// reverse() switches around the values in the array without modifying them
fruits.reverse(); // fruits = ["kiwi", "pear", "cherry"];

// join() takes your array and combines - or concatenates - it to create a string
// The string is separated by whatever you put into the parentheses of the method
fruits.join(" and ");
// fruits = "kiwi and pear and cherry";

// Multi-dimensional arrays
// Put arrays into arrays
var produce = [["kiwi", "pear", "cherry"], ["broccoli", "celery", "carrots"]];

// Access multidimensional arrays similarly to regular arrays
// First square bracket - array
// Second square bracker - item
produce[1]; // ["broccoli", "celery", "carrots"];
produce[0][2] // "cherry";
