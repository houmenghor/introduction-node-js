
// In JavaScript, the find method is used on arrays to return the
// first element that satisfies a provided testing function.

const numbers = [1, 2, 3, 4, 5, 6];
const firstEvenNumber = numbers.find(number => number % 1 === 0);

console.log(firstEvenNumber); // Output: 2
