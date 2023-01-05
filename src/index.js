import readlineSync from 'readline-sync';
import { isEven, askYesNo } from './games/brain-even.js';
import { handleResult, askTheExpression, takeExpression } from './games/brain-calc.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + min));
const answer = (value) => readlineSync.question(`Question: ${value}
Your answer:`);

// Приветствие
const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
// Игры
const toPlay = (game) => {
  if (game === 'brain-even') {
    askYesNo();
  } else if (game === 'brain-calc') {
    askTheExpression();
  }
  let ans = '';
  let result = true;
  for (let i = 0; i < 3; i += 1) {
    if (game === 'brain-even') {
      const number = randomNumber(1, 100);
      ans = answer(number);
      result = isEven(ans, number);
    } else if (game === 'brain-calc') {
      ans = (answer(takeExpression()));
      result = handleResult(ans);
    }
    if (result === false) {
      break;
    }
  }
  return result;
};

// Прощание
const sayBye = (username, gameResult) => {
  const isWin = `Congratulations, ${username}!`;
  const isLose = `Let's try again, ${username}!`;
  return gameResult === true ? console.log(isWin) : console.log(isLose);
};

// Запуск
const toStartGame = (game) => {
  const name = sayHello();
  const score = toPlay(game);
  sayBye(name, score);
};

export default toStartGame;
