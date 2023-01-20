import playGame from '../index.js';
import getRandomNumber from '../utils.js';

// Инструкция для пользователя
const askPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
// Проверка, простое ли число
const isPrime = (num) => {
  if (num < 2) return 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
// Формирование данных вопроса и ответа для раунда игры
const generateDataForRound = () => {
  const exercise = getRandomNumber(1, 20);
  const answer = isPrime(exercise);
  return [exercise, answer];
};

// Запуск игры
const playGamePrime = () => {
  playGame(askPrime, generateDataForRound);
};

export default playGamePrime;
