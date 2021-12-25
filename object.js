// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Onject.
// object = { key : value};

// 1. Literals and proerties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic(dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie['hasJob']);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
// key와 value의 이름이 같다면 생략 가능
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};

const person4 = makePerson('ellie', 30);
console.log(person4);

function makePerson(name, age) {
  return {
    /*name:*/ name,
    /*age:*/ age
  };
}

// 4. Constructor Function

/* class문법을 활용해서 표현한 방법
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person4 = new Person('ellie', 30);
*/

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('city' in ellie);


// 6. for..in vs for..of
// for(key in obj)
for (key in ellie) {
  //ellie객체 안에 있는 키들이 key에 할당되어진다.
  console.log(key);
}

// for(value of ilterable) 배열에서 for반복문 대신 for..of로 간단하게 표현가능
const array = [1, 2, 4, 5];
for(value of array) {
  console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: 20};
const user2 = user;
user2.name = 'coder'
console.log(user);

// old way
const user3 = {};
for(key in user) {
//user안에 있는 key들을 돌면서
  user3[key] = user[key];
//user3의 키에 user안의 key의 값을 할당해줌
}
console.log(user3);


// new way
const user4 = {};
Object.assign(user4, user)
// const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
//fruit2의 내용이 덮어씌어 진다.
console.log(mixed.color);
console.log(mixed.size);


