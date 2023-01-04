import readlineSync from 'readline-sync';

let userName = '';
export const sayHello = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let mistake = 0;
  let i = 0;
  do {
    const number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    const answer = readlineSync.question(`Question:${number} Your answer:`);
    // eslint-disable-next-line no-loop-func
    const isYes = () => {
      if (answer === 'yes') {
        i += 1;
        return console.log('Correct!');
      }
      mistake += 1;
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'`);
    };
    // eslint-disable-next-line no-loop-func
    const isNo = () => {
      if (answer === 'no') {
        i += 1;
        return console.log('Correct!');
      }
      mistake += 1;
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    };
    // eslint-disable-next-line no-unused-expressions
    number % 2 === 0 ? isYes() : isNo();
  } while (i < 3 && mistake < 1);
  if (i === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  return console.log(`Let's try again, ${userName}!`);
};
