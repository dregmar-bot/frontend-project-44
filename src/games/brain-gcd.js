import {
  randomNumber, sayBye, sayHello, toPlayGame,
} from '../index.js';

const askGCD = () => console.log('Find the greatest common divisor of given numbers.');
const takeGCD = (numbers) => {
  const arr = numbers.split(' ');
  let x = arr[0];
  let y = arr[1];
  while (y !== 0 && x !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  x += y;
  return x.toString();
};
const makeNumbers = () => `${randomNumber(1, 100)} ${randomNumber(1, 100)}`;

const toPlayGCD = () => {
  const username = sayHello();
  askGCD();
  const result = toPlayGame(makeNumbers, takeGCD);
  sayBye(username, result);
};
export default toPlayGCD;
