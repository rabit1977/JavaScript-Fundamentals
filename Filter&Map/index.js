const profile = [
  { name: 'Andi', car: 'BMW' },
  { name: 'Kevin', car: 'Ford' },
  { name: 'Samuel', car: 'Mercedes' },
  { name: 'Brus', car: 'BMW' },
  { name: 'John', car: 'Reno' },
];

// filter method
const blackCars = profile.filter((item) => {
  //   console.log(item);
  return item.car === 'BMW';
});
console.log(blackCars, profile);

// map method
const names = profile.map((item) => {
  return item.name + ' has ' + item.car;
});
console.log(names);
