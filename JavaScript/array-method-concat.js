// definition
/*

The concat method in JavaScript is used to merge two or more arrays. 
This method does not change the existing arrays but instead returns a new array.
*/

// Syntax
// const newArray = array1.concat(array2, array3, ..., arrayN);


// Example
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

//Concatenating More Than Two Arrays:
const array01 = ['a', 'b', 'c'];
const array02 = ['d', 'e'];
const array03 = ['f', 'g', 'h'];
const newArray02 = array01.concat(array02, array03);

console.log(newArray02); // Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// Concatenating Arrays and Values:
const array001 = [1, 2, 3];
const newArray001 = array001.concat(4, 5, [6, 7]);

console.log(newArray001); // Output: [1, 2, 3, 4, 5, 6, 7]

