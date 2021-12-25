//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numberic operatiors
console.log(1 + 1); //add 
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder(나눈 후 나머지)
console.log(2 ** 3); //exponentiation(제곱근)

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //count에 먼저 1이 더해지고 그 값을 할당.
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; //count가 먼저 할당되고 난 후 count에  1이 더해짐.
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Assingment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y;
x /= y;

//5. Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`)
//or은 true값을 찾으면 멈춘다. 그래서 heavy한 것들은 뒤로 배치하는게 효율적인 코드작성법이다.

function check () {
  for(let i =0; i < 10; i++) {
    console.log('Wasting Time');
  }
  return true;
}

//6. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// strcit equality 활용하기.

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 같은 reference 주소를 가져야 같다. 내용만 같고 주소가 다르면 다르다.

// 8. Conditional operators: if
const name = 'kdy';
if(name === 'ellie') {
  console.log('Welcome Ellie!');
} else if(name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

//10. Switch statement
const browser = 'dd';
switch(browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Crome':
    console.log('love you!');
    break;
  case 'Firefox':
    console.log('watch out!');
    break;
  default:
    console.log('small all!');
    break;       
}

//11. While loop
// while loop, while the condition is truthy,
// body code is executed.

// if while the condition is falsy,
// body code is stopped.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

//12. Nested loops
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// 반복문 안에서 활용해서 반복문을 멈출 수 있다.
// break는 반복문을 아예 멈추게 하고, continue는 이번 것만 스킵하고 다음 스텝으로 넘어간다.

//Q1. literate from 0 to 10 and print only even numbers
//(use continue;)
for(i = 0; i <= 10; i++) {
  if(i === 0 || i % 2 !== 0) {
    continue;
  } else if(i % 2 === 0) {
    console.log(`evenNumber: ${i}`);
  }
}

//Q2. literate from 0 to 10 and print number untill reaching 8
//(use break)
for(j = 0; j <= 10; j++) {
  if(j === 8) {
    break;
  } 
  console.log(`number: ${j}`);
}