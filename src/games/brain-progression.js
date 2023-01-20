import playGame from '../index.js';
import getRandomNumber from '../utils.js';

// Инструкция для пользователя
const askProgression = 'What number is missing in the progression?';
// Поиск пропущенного числа в прогрессии
const findMissedNumInProgression = (progression) => {
  let result = 0;
  const proLength = progression.length;
  const findStartAnswer = () => progression[1] - progression[0];
  const findEndAnswer = () => progression[proLength - 1] - progression[proLength - 2];
  // eslint-disable-next-line no-restricted-syntax
  for (const item of progression) {
    if (item === '..') {
      const itemPlace = progression.indexOf(item);
      const halfOfProgression = proLength / 2;
      const diff = itemPlace <= halfOfProgression ? findEndAnswer() : findStartAnswer();
      result = Number(progression[itemPlace - 1]) + Number(diff);
    }
  }
  return result.toString();
};

// Формирование данных вопроса и ответа для раунда игры
const generateDataForRound = () => {
  const progressionLength = getRandomNumber(5, 15);
  const hole = getRandomNumber(1, progressionLength - 1);
  const step = getRandomNumber(2, 9);
  const startingNum = getRandomNumber(1, 99);
  const progression = [];
  for (let i = startingNum; progression.length < progressionLength; i += step) {
    if (progression.length === hole) {
      progression.push('..');
    } else {
      progression.push(i);
    }
  }
  const exercise = progression.join(' ');
  const answer = findMissedNumInProgression(progression);
  return [exercise, answer];
};

const playGameProgression = () => {
  playGame(askProgression, generateDataForRound);
};

export default playGameProgression;
