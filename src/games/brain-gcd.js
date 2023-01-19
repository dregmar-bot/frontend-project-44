import playGame from '../index.js';
import giveRandomNumber from '../utils.js';

// Инструкция для игрока
const askGCD = () => console.log('Find the greatest common divisor of given numbers.');
// Формирование данных вопроса и ответа для раунда игры
const generateDataForRound = () => {
  const data = [];
  const firstRandomNumber = giveRandomNumber(1, 100);
  const secondRandomNumber = giveRandomNumber(1, 100);
  const exercise = `${firstRandomNumber} ${secondRandomNumber}`;
  data.push(exercise);
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
  data.push(answer);
  return data;
};

const playGCD = () => {
  playGame(askGCD, generateDataForRound);
};

export default playGCD;
