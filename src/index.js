import readlineSync from 'readline-sync';

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const answer = (value1, value2 = '') => readlineSync.question(`Question: ${value1} ${value2}
Your answer:`);
// Приветствие
export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
// Прощание
export const sayBye = (username, gameResult) => {
  const isWin = `Congratulations, ${username}!`;
  const isLose = `Let's try again, ${username}!`;
  return gameResult === true ? console.log(isWin) : console.log(isLose);
};
// Запуск игры
export const toPlayGame = (makeQuestion, findAnswer) => {
  let result = true;
  let userAnswer = '';
  let systemAnswer = '';
  let quest = '';
  for (let i = 0; i < 3; i += 1) {
    quest = makeQuestion();
    userAnswer = answer(quest);
    systemAnswer = findAnswer(quest);
    if (userAnswer !== systemAnswer) {
      result = false;
      const sayWrong = (wrongAnswer, correctAnswer) => console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      sayWrong(userAnswer, systemAnswer);
      break;
    }
    console.log('Correct!');
  }
  return result;
};
