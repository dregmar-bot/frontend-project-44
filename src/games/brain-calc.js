// eslint-disable-next-line import/no-cycle

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + min));
export const askTheExpression = () => console.log('What is the result of the expression?');
const receiveOperator = () => {
  const operators = ['+', '-', '*'];
  const x = randomNumber(0, operators.length);
  return operators[x];
};
let firstOperand = 0;
let secondOperand = 0;
let operator = '';

export const takeExpression = () => {
  firstOperand = randomNumber(1, 100);
  secondOperand = randomNumber(1, 100);
  operator = receiveOperator();
  return firstOperand + operator + secondOperand;
};

const makeExpression = () => {
  let result = 0;
  const handleExpression = () => {
    if (operator === '+') {
      result = firstOperand + secondOperand;
    } else if (operator === '-') {
      result = firstOperand - secondOperand;
    } else if (operator === '*') {
      result = firstOperand * secondOperand;
    }
  };
  handleExpression();
  return result.toString();
};

export const handleResult = (ans) => {
  const result = makeExpression();
  if (ans === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`${ans} is wrong answer ;(. Correct answer was '${result}'`);
  return false;
};
