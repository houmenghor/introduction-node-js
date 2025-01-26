// The splice() method in JavaScript is used to change the contents of
// an array by removing, replacing, or adding elements. It directly modifies
//  the original array and returns an array containing the removed elements (if any)

let fruits = ["Apple", "Banana", "Cherry", "Date"];
let removed = fruits.splice(1, 2); // Removes 2 elements starting from index 1
console.log(fruits); // ["Apple", "Date"]
console.log(removed); // ["Banana", "Cherry"]
