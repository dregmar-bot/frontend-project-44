import playGame from '../index.js';
import giveRandomNumber from '../utils.js';

// Инструкция для игрока
const askTheExpression = () => console.log('What is the result of the expression?');
// Получение случайного оператора
const receiveOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = giveRandomNumber(0, operators.length);
  return operators[operatorIndex];
};
// Формирование данных вопроса и ответа для раунда игры
const generateDataForRound = () => {
  const data = [];
  const firstOperand = giveRandomNumber(1, 10);
  const secondOperand = giveRandomNumber(1, 10);
  const operator = receiveOperator();
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  data.push(expression);
  const makeExpression = () => {
    let result;
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
    return result.toString();
  };
  const answer = makeExpression();
  data.push(answer);
  return data;
};
// Запуск игры
const playCalc = () => {
  playGame(askTheExpression, generateDataForRound);
};

export default playCalc;
