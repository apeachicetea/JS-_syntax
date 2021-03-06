// Q1. make a string out of an array
// {
//   const fruits = ['apple', 'banana', 'orange'];
//   const newFruits = fruits.toString();
//   console.log(newFruits);

// }


// Q2. make an array out of a string
// {
//   const fruits = 'π, π₯, π, π';
//   const newArr = fruits.split(',');
//   console.log(newArr);
// }

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// {
//   const array = [1, 2, 3, 4, 5];
//   const newArr = array.reverse();
//   console.log(array);
// }

// Q4. make new array without the first two elements
// {
//   const array = [1, 2, 3, 4, 5];
//   const newArr = array.slice(2);
//   console.log(newArr);
// }

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// find() λ©μλλ μ£Όμ΄μ§ νλ³ ν¨μλ₯Ό λ§μ‘±νλ μ²« λ²μ§Έ μμμ κ°μ λ°νν©λλ€. κ·Έλ° μμκ° μλ€λ©΄ undefinedλ₯Ό λ°νν©λλ€.
{ 
  const score90 = students.find(el => el.score === 90)
  console.log(score90);
}

// Q6. make an array of enrolled students
{
  const newArr = students.filter( el => 
    el.enrolled === true);

  console.log(newArr);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const newArr = students.map (el => el.score);
  console.log(newArr);
}

// Q8. check if there is a student with the score lower than 50
// some() λ©μλλ λ°°μ΄ μμ μ΄λ€ μμλΌλ μ£Όμ΄μ§ νλ³ ν¨μλ₯Ό ν΅κ³Όνλμ§ νμ€νΈν©λλ€.
{
  const lower50 = students.some(el => el.score < 50);
  console.log(lower50);
}

// Q9. compute students' average score
{
  const socreArr = students.map( el => el.score);
  const avg = socreArr.reduce( (a, b) => a + b, 0) / students.length;
  console.log(avg);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{ 
  const newArr = students.map (el => el.score);
  const str = newArr.toString();
  console.log(`'${str}'`);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const newArr = students.map (el => el.score);
  const sortArr = newArr.sort();
  console.log(sortArr);
  const str = sortArr.toString();
  console.log(`'${str}'`);
}