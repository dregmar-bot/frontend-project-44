import {
  randomNumber, sayBye, sayHello, toPlayGame,
} from '../index.js';

const askProgression = () => console.log('What number is missing in the progression?');
const findAnswer = (progression) => {
  const arr = progression.split(' ');
  let result = 0;
  const proLength = arr.length;
  const findStartAnswer = () => arr[1] - arr[0];
  const findEndAnswer = () => arr[proLength - 1] - arr[proLength - 2];
  // eslint-disable-next-line no-restricted-syntax
  for (const item of arr) {
    if (item === '..') {
      const itemPlace = arr.indexOf(item);
      const halfOfProgression = proLength / 2;
      const diff = itemPlace <= halfOfProgression ? findEndAnswer() : findStartAnswer();
      result = Number(arr[itemPlace - 1]) + Number(diff);
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
      progression.push('..');
    } else {
      progression.push(i);
    }
  }
  return progression.join(' ');
};

const toPlayProgression = () => {
  const username = sayHello();
  askProgression();
  const result = toPlayGame(makeHoleyProgression, findAnswer);
  sayBye(username, result);
};

export default toPlayProgression;
