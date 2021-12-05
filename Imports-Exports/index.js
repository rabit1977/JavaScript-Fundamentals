const names = ['Andi', 'John', 'Erik', 'Kevin'];

const formatNames = () => {
  let val = '';
  names.forEach((name) => (val += name + ', '));
};
const greet = () => {
  console.log(names[0] + 'says Hi');
};

export { names, formatNames, greet};
