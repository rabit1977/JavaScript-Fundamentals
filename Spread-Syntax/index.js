const names = ['andi', 'kevin', 'donald', 'tony'];
const blog = { title: 'new car', author: 'BMW' };

console.log(...names);

const idCars = { ...blog };
console.log(idCars);
