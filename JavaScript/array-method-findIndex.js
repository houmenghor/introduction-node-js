

// In JavaScript, the findIndex method is used to return the index of the first element
// in an array that satisfies a provided testing function. If no elements satisfy the testing
// function, it returns -1. This method is useful when you need the position of an element
// rather than the element itself.



const numbers = [1, 3, 5, 4, 2, 6];
const firstEvenIndex = numbers.findIndex(number => number % 2 === 0);
console.log(firstEvenIndex); // Output: 3


const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  const userIndex = users.findIndex(user => user.name === 'Bob');
  
  console.log(userIndex); // Output: 1
  
