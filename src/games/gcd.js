import playGame from '../index.js';
import generateRandomNumber from '../utils/random.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const correctAnswer = `${gcd(number1, number2)}`;

  const question = `${number1} ${number2}`;
  return {
    question,
    correctAnswer,
  };
};
export default () => playGame(description, generateRound);
