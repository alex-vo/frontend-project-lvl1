import run from '../index.js';
import isEven from '../utils/even.js';
import generateRandomNumber from '../utils/random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = generateRandomNumber(0, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => run(description, generateRound);
