const askYesNo = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
const handleYes = (ans) => {
  if (ans !== 'yes') {
    console.log(`${ans} is wrong answer ;(. Correct answer was 'yes'`);
    return false;
  }
  console.log('Correct!');
  return true;
};
const handleNo = (ans) => {
  if (ans !== 'no') {
    console.log(`${ans} is wrong answer ;(. Correct answer was 'no'`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const isEven = (answer, number) => {
  if (number % 2 === 0) {
    return handleYes(answer);
  }
  return handleNo(answer);
};

export { askYesNo, isEven };
