//definition
/*
The shift method in JavaScript is used to remove the first element from an array
 and return that removed element. This method changes the length of the array.
*/
// Syntax
// array.shift()

// example
let array = ["Hello", 3, 4];
let firstElement = array.shift();

console.log(firstElement); // Output: 1
console.log(array);        // Output: [2, 3, 4]

