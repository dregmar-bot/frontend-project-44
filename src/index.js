import readlineSync from 'readline-sync';

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
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(instruction);
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
  const isWin = `Congratulations, ${username}!`;
  const isLose = `Let's try again, ${username}!`;
  // eslint-disable-next-line no-unused-expressions
  result === true ? console.log(isWin) : console.log(isLose);
};

export default playGame;
