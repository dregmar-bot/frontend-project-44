import {
  randomNumber, sayBye, sayHello, toPlayGame,
} from '../index.js';

const askPrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const isPrime = (num) => {
  if (num < 2) return 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const makeNumber = () => randomNumber(1, 20);

const toPlayPrime = () => {
  const username = sayHello();
  askPrime();
  const result = toPlayGame(makeNumber, isPrime);
  sayBye(username, result);
};
export default toPlayPrime;
