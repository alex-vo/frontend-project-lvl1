import run from '../index.js';
import generateRandomNumber from '../utils/random.js';

const description = 'What number is missing in the progression?';
const progressionLength = 5;

const generateQuestion = (start, step, hiddenNumber) => {
  const question = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const progressionMember = i === hiddenNumber ? '..' : (start + i * step);
    question.push(progressionMember);
  }

  return question.join(' ');
};

const generateRound = () => {
  const first = generateRandomNumber(0, 100);
  const step = generateRandomNumber(0, 10);
  const hiddenNumber = generateRandomNumber(0, progressionLength - 1);
  const question = generateQuestion(first, step, hiddenNumber);

  const correctAnswer = `${(first + hiddenNumber * step)}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => run(description, generateRound);
