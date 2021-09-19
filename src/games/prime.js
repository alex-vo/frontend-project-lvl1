import readlineSync from 'readline-sync';
import playGame from '../index.js';
import isEven from '../utils/even.js';
import generateRandomNumber from '../utils/random.js';

const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (isEven(n)) return false;

  for (let i = 3; i ** 2 <= n; i += 1) {
    if (n % i === 0) return false;
  }

  return true;
};

const numberUpperBound = 100;

const createNextQuestion = () => {
  const number = generateRandomNumber(0, numberUpperBound);
  const questionText = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    questionText,
    correctAnswer,
  };
};

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  playGame(name, createNextQuestion);
};
