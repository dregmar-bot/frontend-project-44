import playGame from '../index.js';
import getRandomNumber from '../utils.js';

// Инструкция для игрока
const askGCD = 'Find the greatest common divisor of given numbers.';
// Формирование данных вопроса и ответа для раунда игры
const generateDataForRound = () => {
  const firstRandomNumber = getRandomNumber(1, 99);
  const secondRandomNumber = getRandomNumber(1, 99);
  const exercise = `${firstRandomNumber} ${secondRandomNumber}`;
  const defineGCD = () => {
    let firstOperand = firstRandomNumber;
    let secondOperand = secondRandomNumber;
    while (secondOperand !== 0 && firstOperand !== 0) {
      if (firstOperand > secondOperand) {
        firstOperand %= secondOperand;
      } else {
        secondOperand %= firstOperand;
      }
    }
    firstOperand += secondOperand;
    return firstOperand.toString();
  };
  const answer = defineGCD();
  return [exercise, answer];
};

const playGameGCD = () => {
  playGame(askGCD, generateDataForRound);
};

export default playGameGCD;
