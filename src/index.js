import readlineSync from 'readline-sync';
import { isEven, askIsEven } from './games/brain-even.js';
import { makeExpression, askTheExpression, takeExpression } from './games/brain-calc.js';
import { askGCD, takeGCD } from './games/brain-gcd.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + min));
const answer = (value1, value2 = '') => readlineSync.question(`Question: ${value1} ${value2}
Your answer:`);
const sayWrong = (wrongAnswer, correctAnswer) => console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
const receiveOperator = () => {
  const operators = ['+', '-', '*'];
  const x = randomNumber(0, operators.length);
  return operators[x];
};

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
    askIsEven();
  } else if (game === 'brain-calc') {
    askTheExpression();
  } else if (game === 'brain-gcd') {
    askGCD();
  }
  let userAnswer = '';
  let systemAnswer = '';
  let result = true;
  for (let i = 0; i < 3; i += 1) {
    if (game === 'brain-even') {
      const number = randomNumber(1, 100);
      userAnswer = answer(number);
      systemAnswer = isEven(number);
    } else if (game === 'brain-calc') {
      const firstRandomNum = randomNumber(1, 100);
      const secondRandomNum = randomNumber(1, 100);
      const randomOperator = receiveOperator();
      systemAnswer = makeExpression(firstRandomNum, secondRandomNum, randomOperator);
      userAnswer = (answer(takeExpression(firstRandomNum, secondRandomNum, randomOperator)));
    } else if (game === 'brain-gcd') {
      const firstNum = randomNumber(1, 100);
      const secondNum = randomNumber(1, 100);
      userAnswer = answer(firstNum, secondNum);
      systemAnswer = takeGCD(firstNum, secondNum);
    }
    if (userAnswer !== systemAnswer) {
      result = false;
      sayWrong(userAnswer, systemAnswer);
      break;
    }
    console.log('Correct!');
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
  const gameResult = toPlay(game);
  sayBye(name, gameResult);
};

export default toStartGame;
