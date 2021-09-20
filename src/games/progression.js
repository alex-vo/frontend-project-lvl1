import playGame from '../index.js';
import generateRandomNumber from '../utils/random.js';

const description = 'What number is missing in the progression?';
const startUpperBound = 100;
const stepUpperBound = 10;
const progressionLength = 5;

const generateQuestion = (start, step, hiddenNumber) => {
  const questionText = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenNumber) {
      questionText.push('..');
    } else {
      questionText.push(start + i * step);
    }
  }

  return questionText.join(' ');
};

const generateRound = () => {
  const start = generateRandomNumber(0, startUpperBound);
  const step = generateRandomNumber(0, stepUpperBound);
  const hiddenNumber = generateRandomNumber(0, progressionLength - 1);
  const question = generateQuestion(start, step, hiddenNumber);

  const correctAnswer = `${(start + hiddenNumber * step)}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => playGame(description, generateRound);
