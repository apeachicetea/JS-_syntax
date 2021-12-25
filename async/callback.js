'use strict';

// JavaScript is synhronous
// 자바스크립트는 기본적으로 동기적이다

// Execute the code block by orger after hoisting.
// 호이스팅이 되고 나서 코드를 작성한 순서대로 실행된다.(= 동기적)

// hoisting: var, function declaration
// 호이스팅 : 선언한 것들이 자동으로 최상단으로 올라가는 현상

console.log(1);
setTimeout(() => console.log(2), 500);
console.log(3);


// Synchronous callback
// 동기적 콜백
function printImmdiately(print) {
  //인자로 콜백함수를 받고 있음.
  print();
}

printImmdiately(() => console.log('Hello'));

// Asynchronous callback
// 비동기적 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('anync callback'), 2000);

// Callback Hell example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(()=>{
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      }
      else {
        onError(new Error('Not found!'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(()=>{
      if(user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin'})
      }
      else {
        onError(new Error('No access'));
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  (user) => {
    userStorage.getRoles(
      user,
      userWithRole => {alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)},
      error => {console.log(error)},
    )
  }, 
  (error) => {
    console.log(error);
  }
)