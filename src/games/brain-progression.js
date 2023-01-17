import {
  randomNumber, sayBye, sayHello, toPlayGame,
} from '../index.js';

const askProgression = () => console.log('What number is missing in the progression?');
const findAnswer = (progression) => {
  let result = 0;
  const proLength = progression.length;
  const findStartAnswer = () => progression[1] - progression[0];
  const findEndAnswer = () => progression[proLength - 1] - progression[proLength - 2];
  // eslint-disable-next-line no-restricted-syntax
  for (const item of progression) {
    if (item === '...') {
      const itemPlace = progression.indexOf(item);
      const halfOfProgression = proLength / 2;
      const diff = itemPlace <= halfOfProgression ? findEndAnswer() : findStartAnswer();
      result = progression[itemPlace - 1] + diff;
    }
  }
  return result.toString();
};
const makeHoleyProgression = () => {
  const progressionLength = randomNumber(5, 15);
  const hole = randomNumber(1, progressionLength);
  const step = randomNumber(2, 10);
  const startingNum = randomNumber(1, 100);
  const progression = [];
  for (let i = startingNum; progression.length < progressionLength; i += step) {
    if (progression.length === hole) {
      progression.push('...');
    } else {
      progression.push(i);
    }
  }
  return progression;
};

const toPlayProgression = () => {
  const username = sayHello();
  askProgression();
  const result = toPlayGame(makeHoleyProgression, findAnswer);
  sayBye(username, result);
};

export default toPlayProgression;
