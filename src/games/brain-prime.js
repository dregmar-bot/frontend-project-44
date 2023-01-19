import playGame from '../index.js';
import giveRandomNumber from '../utils.js';

// Инструкция для пользователя
const askPrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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
  const data = [];
  const randomNumber = giveRandomNumber(1, 20);
  data.push(randomNumber);
  const answer = isPrime(randomNumber);
  data.push(answer);
  return data;
};

// Запуск игры
const playPrime = () => {
  playGame(askPrime, generateDataForRound);
};

export default playPrime;
