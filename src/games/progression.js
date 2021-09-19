import readlineSync from 'readline-sync';
import playGame from '../index.js';
import generateRandomNumber from '../utils/random.js';

const startUpperBound = 100;
const stepUpperBound = 10;
const progressionLength = 5;

const createNextQuestion = () => {
  const start = generateRandomNumber(0, startUpperBound);
  const step = generateRandomNumber(0, stepUpperBound);
  const hiddenNumber = generateRandomNumber(0, progressionLength);
  const questionText = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenNumber) {
      questionText.push('..');
    } else {
      questionText.push(start + i * step);
    }
  }

  const correctAnswer = `${(start + hiddenNumber * step)}`;

  return {
    questionText: questionText.join(' '),
    correctAnswer,
  };
};

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('What number is missing in the progression?');

  playGame(name, createNextQuestion);
};
