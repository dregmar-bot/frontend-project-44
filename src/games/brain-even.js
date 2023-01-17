import {
  randomNumber, sayBye, sayHello, toPlayGame,
} from '../index.js';

const askIsEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const toPlayEven = () => {
  const name = sayHello();
  askIsEven();
  const result = toPlayGame(randomNumber.bind(null, 1, 100), isEven);
  sayBye(name, result);
};

export default toPlayEven;
