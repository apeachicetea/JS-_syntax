'use strict';

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        }
        else {
          reject(new Error('Not found!'));
        }
      }, 2000);
    });
 
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin'})
        }
        else {
          reject(new Error('No access'));
        }
      }, 1000)
    }) 
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// userStorage.loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then(user => {
//     alert(`Hello ${user.name}, you have a ${user.role} role`)
//   })
//   .catch(console.log);

async function checkUser() {
  try {
    const userId = await userStorage.loginUser(id, password);
    const user = await userStorage.getRoles(userId);
    alert(`Hello ${user.name}, you have a ${user.role} role`)
  }
  catch (error) {
    console.log(error);
  }
}