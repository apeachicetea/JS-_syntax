'use strict'

//Array

// 1. Declaration 
const arr = new Array();
const arr1 = [1, 2];

// 2. Index position
const fruits = ['🍇','🧀'];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
// for(let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// b. for of
// for(let fruit of fruits) {
//   console.log(fruit);
// }

// c. forEach
// fruits.forEach( (fruit) => 
//   console.log(fruit));
// fruits.forEach( (fruit, index, array) => console.log(fruit, index, array))

// 4. Addition, deletion, copy
// push: add an item to the end
// fruits.push('🥝','🥑');
// console.log(fruits);

// pop: remove an item to the end
// fruits.pop();
// fruits.pop();
// console.log(fruits);

// unshift: add an item to the beningging
fruits.unshift('🥨','🥬');
console.log(fruits);

// shift: remove an item to the beningging
// fruits.shift();
// console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position

// concat: combine two arrays
// const fruits2 = ['🍒','🍑'];
// const nweFruits = fruits.concat(fruits2);
// console.log(nweFruits);

// 5. Searching
// find the index
// console.clear();
// console.log(fruits);
// console.log(fruits.indexOf('🥬'));
// console.log(fruits.indexOf('🍈'));

// includes
// console.log(fruits.includes('🥬'));
// console.log(fruits.includes('🍈'));

// lastIndexOf
fruits.push('🥬');
console.log(fruits);
console.log(fruits.indexOf('🥬'));
console.log(fruits.lastIndexOf('🥬'));

