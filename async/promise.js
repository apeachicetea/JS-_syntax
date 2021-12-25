'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the exeutor runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, fainally
promise
  .then((value) => {
    console.log(value);
  })
//promise에 .then을 사용하면 promise을 또 리턴하기때문에, .catch 또 사용할 수 있다.
  .catch(error => {
    console.log((error));
  })
  .finally(() => console.log('finally'));


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    })
  })
  .then(num => console.log(num));


// 4. Error Handing

const getHen = () =>  
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000)
  });

const getEgg = (hen) =>  
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000)
  });

const cook = (egg) =>  
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000)
  });


getHen()
//.then(hen => getEgg(hen))
//받은 인자를 바로 함수에 그대로 전달할때 생략할 수 있다.
  .then(getEgg)
  .catch(error => {
    return '🥖';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
