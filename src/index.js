import readlineSync from 'readline-sync';

// Приветствие
export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// Для каждого из 3 делаем что-то

// Результат игры

// Прощание
export const sayBye = (username, result) => {
  const isWin = `Congratulations, ${username}!`;
  const isLose = `Let's try again, ${username}!`;
  return result === 'win' ? console.log(isWin) : console.log(isLose);
};
