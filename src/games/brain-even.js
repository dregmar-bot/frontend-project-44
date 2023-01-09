const askIsEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export { askIsEven, isEven };
