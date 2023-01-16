import readlineSync from 'readline-sync';
import { isEven, askIsEven } from './games/brain-even.js';
import { makeExpression, askTheExpression, takeExpression } from './games/brain-calc.js';
import { askGCD, takeGCD } from './games/brain-gcd.js';
import { makeHoleyProgression, askProgression } from './games/brain-progression.js';
import { askPrime, isPrime } from './games/brain-prime.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
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
// Инструкция для игрока
const sayInstruction = (game) => {
  if (game === 'brain-even') {
    askIsEven();
  } else if (game === 'brain-calc') {
    askTheExpression();
  } else if (game === 'brain-gcd') {
    askGCD();
  } else if (game === 'brain-progression') {
    askProgression();
  } else if (game === 'brain-prime') {
    askPrime();
  }
};

// Игры
const toPlay = (game) => {
  sayInstruction(game);
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
    } else if (game === 'brain-progression') {
      const number = randomNumber(1, 100);
      const length = randomNumber(5, 15);
      const progressionStep = randomNumber(2, 10);
      const progressionHole = randomNumber(1, length);
      const container = makeHoleyProgression(number, length, progressionStep, progressionHole);
      userAnswer = answer(container[1].join(' '));
      systemAnswer = container[0].toString();
    } else if (game === 'brain-prime') {
      const number = randomNumber(1, 20);
      userAnswer = answer(number);
      systemAnswer = isPrime(number);
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
