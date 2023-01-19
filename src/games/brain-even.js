import playGame from '../index.js';
import giveRandomNumber from '../utils.js';

// Инструкция для игрока
const askIsEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
// Проверка числа на четность
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
// Формирование данных вопроса и ответа для раунда игры
const generateDataForRound = () => {
  const data = [];
  const randomNumber = giveRandomNumber(1, 100);
  data.push(randomNumber);
  const answer = isEven(randomNumber);
  data.push(answer);
  return data;
};

const playEven = () => {
  playGame(askIsEven, generateDataForRound);
};

export default playEven;
