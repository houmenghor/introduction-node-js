/*definition
The includes() method in JavaScript is used to determine whether an array includes a certain
value among its entries, returning true or false as appropriate. Here's how you can use it:

Syntax
array.includes(valueToFind, fromIndex)
*/

const array = [1, 2, 3, 4, 5];

console.log(array.includes(3));  // Output: true
console.log(array.includes(6));  // Output: false

console.log(array.includes(3, 3));  // Output: false
console.log(array.includes(4, 3));  // Output: true
