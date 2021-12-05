// destructuring objects
const person = { firstName: 'John', lastName: 'Woo', age: 30, favColor: 'red' };

const { firstName, favColor, age, lastName } = person;

console.log(firstName, favColor, age, lastName);

// destructuring arrays
const nums = [1, 2, 3, 4, 5, 6];

const [a, b, c, d, e, f] = nums;
console.log(a, b, c);
console.log(a, b, c, d, e, f);

// destructuring functions
// const getCalculations = (a, b) => {
//   return { sum: a + b, diff: Math.abs(a - b), product: a * b };
// };
// const { sum, diff, product } = getCalculations(7, 9);
// console.log(sum, diff, product);
// console.log(sum, product);

//
// destructuring functions
const getCalculations = (a, b) => {
  return [a + b, Math.abs(a - b), a * b];
};
const [sum, diff, product] = getCalculations(7, 8);
console.log(sum, diff, product);

// Another way of destructuring
const doSomething = ({ name, age }) => {
  console.log(name, age);
};

doSomething({ name: 'andi', age: 30 });
