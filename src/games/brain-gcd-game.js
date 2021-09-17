import playGame from '../index.js';
import random from '../util/random.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const number1UpperBound = 100;
const number2UpperBound = 100;

export default () => playGame('Find the greatest common divisor of given numbers.', () => {
  const number1 = random(number1UpperBound);
  const number2 = random(number2UpperBound);
  const correctAnswer = `${gcd(Math.max(number1, number2), Math.min(number1, number2))}`;
  const question = `Question: ${number1} ${number2}`;

  return {
    question,
    correctAnswer,
  };
});
