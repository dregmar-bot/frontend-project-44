import playGame from '../index.js';
import giveRandomNumber from '../utils.js';

// Инструкция для пользователя
const askProgression = () => console.log('What number is missing in the progression?');
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
  const data = [];
  const progressionLength = giveRandomNumber(5, 16);
  const hole = giveRandomNumber(1, progressionLength);
  const step = giveRandomNumber(2, 10);
  const startingNum = giveRandomNumber(1, 100);
  const progression = [];
  for (let i = startingNum; progression.length < progressionLength; i += step) {
    if (progression.length === hole) {
      progression.push('..');
    } else {
      progression.push(i);
    }
  }
  const prepareProgression = progression.join(' ');
  data.push(prepareProgression);
  const answer = findMissedNumInProgression(progression);
  data.push(answer);
  return data;
};

const playProgression = () => {
  playGame(askProgression, generateDataForRound);
};

export default playProgression;
