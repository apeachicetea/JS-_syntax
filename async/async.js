// async & await
// clear style of using promise :)

// 1. async
//async를 함수 앞에 붙이면 new Promise를 하지 않아도 코드블럭을 프로미스로 리턴해준다. 
async function fetchUser() {
  return 'ellie';
}

const user = fetchUser();
console.log(user);
user.then(console.log);

// 2. await😃
// async가 붙은 함수 안에서만 사용가능

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  //await를 붙혀주면 1초가 끝날때가지 기다려준다.
  // throw 'error';
  return '🍎';
  //1초 후에 사과를 리턴하는 프로미스가 생긴다.
}

async function getBanana() {
  await delay(1000);
  //1초를 기다려준다
  return '🍌';
  //1초 후에 바나나를 리턴하는 프로미스가 생긴다.
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. userful Primjse APIS
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);