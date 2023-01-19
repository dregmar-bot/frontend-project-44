import readlineSync from 'readline-sync';

// Приветствие
const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
// Прощание
const sayBye = (username, gameResult) => {
  const isWin = `Congratulations, ${username}!`;
  const isLose = `Let's try again, ${username}!`;
  return gameResult === true ? console.log(isWin) : console.log(isLose);
};
// Вопрос
const askQuestion = (quest) => console.log(`Question: ${quest}`);
// Получение ответа игрока
const askAnswer = () => readlineSync.question('Your answer: ');
// Если ответ верный
const sayCorrect = () => console.log('Correct!');
// Если ответ ошибочный
const sayWrong = (wrongAnswer, correctAnswer) => console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

// Игра
const playGame = (instruction, roundData) => {
  const username = sayHello();
  instruction();
  const countOfRounds = 3;
  let result = true;
  let userAnswer = '';
  let systemAnswer = '';
  for (let i = 0; i < countOfRounds; i += 1) {
    const [question, rightAnswer] = roundData();
    askQuestion(question);
    userAnswer = askAnswer();
    systemAnswer = rightAnswer;
    if (userAnswer !== systemAnswer) {
      result = false;
      sayWrong(userAnswer, systemAnswer);
      break;
    }
    sayCorrect();
  }
  sayBye(username, result);
};

export default playGame;
