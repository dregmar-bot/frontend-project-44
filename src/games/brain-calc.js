import playGame from '../index.js';
import getRandomNumber from '../utils.js';

// Инструкция для игрока
const askExpression = 'What is the result of the expression?';
// Получение случайного оператора
const receiveOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[operatorIndex];
};
// Вычисление выражения
const calculationExpression = (firstOperand, secondOperand, operator) => {
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

// Формирование данных вопроса и ответа для раунда игры
const generateDataForRound = () => {
  const firstOperand = getRandomNumber(1, 9);
  const secondOperand = getRandomNumber(1, 9);
  const operator = receiveOperator();
  const exercise = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = calculationExpression(firstOperand, secondOperand, operator);
  return [exercise, answer];
};
// Запуск игры
const playGameCalc = () => {
  playGame(askExpression, generateDataForRound);
};

export default playGameCalc;
