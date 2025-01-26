//loop: for loop, while loop, do while loop, forEach, forIn, forOf
const array = [1,2,"sok",true,3,4,5];
for(let i = 0; i<array.length; i++){
    console.log(`Item[${i}] = ${array[i]}`);
}

//forIn
for(let index in array){
    console.log(`${index}`);
}

//forOf

for(let element of array){
    console.log(`${element}`);
}