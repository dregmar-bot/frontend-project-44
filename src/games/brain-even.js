import playGame from '../index.js';
import getRandomNumber from '../utils.js';

// Инструкция для игрока
const askIsEven = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка числа на четность
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
// Формирование данных вопроса и ответа для раунда игры
const generateDataForRound = () => {
  const exercise = getRandomNumber(1, 99);
  const answer = isEven(exercise);
  return [exercise, answer];
};

const playGameEven = () => {
  playGame(askIsEven, generateDataForRound);
};

export default playGameEven;
