import run from '../index.js';
import generateRandomNumber from '../utils/random.js';

const description = 'What number is missing in the progression?';
const progressionLength = 5;

const generateQuestion = (first, step, hiddenNumber) => {
  const question = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const currentProgressionElement = first + i * step;
    const progressionElement = i === hiddenNumber ? '..' : currentProgressionElement;
    question.push(progressionElement);
  }

  return question.join(' ');
};

const generateRound = () => {
  const first = generateRandomNumber(0, 100);
  const step = generateRandomNumber(0, 10);
  const hiddenNumberIndex = generateRandomNumber(0, progressionLength - 1);
  const question = generateQuestion(first, step, hiddenNumberIndex);

  const correctAnswer = `${(first + hiddenNumberIndex * step)}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => run(description, generateRound);
