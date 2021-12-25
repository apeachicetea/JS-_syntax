//Function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) {body... return;}
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS
function printHello() {
  console.log('Hello!');
}
printHello();

function log(message) {
  console.log(message);
}
log('World!');
log(1234);

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}

const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`)
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
//매개변수에 ...을 붙혀 사용하면 배열 형식으로 전달 된다.
function printAll(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for(const arg of args) {
    console.log(arg);
  }
  //args안에 있는 값들이 하나하나씩 arg에 할당되어 출력되는 함수
}

  
printAll('dream', 'coding', 'ellie');

//5. Local scope
//기본원칙: 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global' // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother(message) {
    let childMessage = 'hello';
  }
}
printMessage();

//6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
  if(user.point > 10) {
    //long upgrade logic...
  }
}

//good

function upgradeUser(user) {
  if(user.point <= 10) {
    return;
  }
    //long upgrage logic...
}

//First-class function
//functions are treated like any onyther variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function

//1. Function expression
//a function decalaration can be called earlier than is is defiend. (hoisted)
//a function expression is created when the execution reaches it.
const print = function () {
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if(answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};
// named function
// better debugging in debugger's stac traces
// recursions
const printNo = function print() {
  console.log('No!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log(`simplePrint!`);
};
// simplePrint함수의 화살표함수 버젼
// const simplePrint = () => console.log(`simplePrint!`);
// 더 많은 코드들이 필요한 경우
// const simplePrint = () => {
//   return; 
// }
const add = (a, b) => a + b;
add(4, 5);

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();