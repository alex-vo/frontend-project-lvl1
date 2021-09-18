import readlineSync from 'readline-sync';
import playGame from '../index.js';
import generateRandomNumber from '../utils/random.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const number1UpperBound = 100;
const number2UpperBound = 100;

const createNextQuestion = () => {
  const number1 = generateRandomNumber(0, number1UpperBound);
  const number2 = generateRandomNumber(0, number2UpperBound);
  const correctAnswer = `${gcd(number1, number2)}`;
  const questionText = `${number1} ${number2}`;

  return {
    questionText,
    correctAnswer,
  };
};

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');

  playGame(name, createNextQuestion);
};
