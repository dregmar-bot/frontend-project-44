import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = '';
  const handleYes = (answer) => {
    if (answer === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'`);
      result = 'lose';
    }
  };
  const handleNo = (answer) => {
    if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      result = 'lose';
    }
  };
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    const answer = readlineSync.question(`Question:${number} Your answer:`);
    // eslint-disable-next-line no-unused-expressions
    number % 2 === 0 ? handleYes(answer) : handleNo(answer);
    if (result === 'lose') {
      break;
    }
    result = 'win';
  }
  return result;
};

export default isEven;
