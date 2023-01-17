import {
  randomNumber, sayBye, sayHello, toPlayGame,
} from '../index.js';

const askTheExpression = () => console.log('What is the result of the expression?');
const receiveOperator = () => {
  const operators = ['+', '-', '*'];
  const x = randomNumber(0, operators.length);
  return operators[x];
};
const takeExpression = () => randomNumber(1, 10) + receiveOperator() + randomNumber(1, 10);

const makeExpression = (str) => {
  const firstNum = Number(str[0]);
  const secondNum = Number(str[2]);
  const operator = str[1];
  let result;
  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    default:
      result = firstNum * secondNum;
  }
  return result.toString();
};

const toPlayCalc = () => {
  const name = sayHello();
  askTheExpression();
  // eslint-disable-next-line max-len
  const result = toPlayGame(takeExpression, makeExpression);
  sayBye(name, result);
};

export default toPlayCalc;
