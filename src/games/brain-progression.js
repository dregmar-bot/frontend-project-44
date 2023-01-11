export const askProgression = () => console.log('What number is missing in the progression?');
export const makeHoleyProgression = (startingNum, progressionLength, step, skip) => {
  const hole = skip;
  const progression = [];
  const result = [];
  for (let i = startingNum; progression.length < progressionLength; i += step) {
    if (progression.length === hole) {
      progression.push('...');
      result.push(i);
    } else {
      progression.push(i);
    }
  }
  result.push(progression);
  return result;
};
