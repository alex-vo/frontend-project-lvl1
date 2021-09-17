import readlineSync from 'readline-sync';
import playGame from '../index.js';
import isEven from '../utils/even.js';
import generateRandomNumber from '../utils/random.js';

const numberUpperBound = 100;

const createNextQuestion = () => {
  const number = generateRandomNumber(0, numberUpperBound);
  const questionText = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return {
    questionText,
    correctAnswer,
  };
};

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  playGame(name, createNextQuestion);
};
