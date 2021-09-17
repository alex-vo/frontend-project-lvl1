import playGame from '../index.js';
import even from '../util/even.js';
import random from '../util/random.js';

const isPrime = (n) => {
  if (n < 4) return true;
  if (even(n)) return false;

  for (let i = 3; i ** 2 <= n; i += 1) {
    if (n % i === 0) return false;
  }

  return true;
};

const numberUpperBound = 100;

export default () => playGame('Answer "yes" if given number is prime. Otherwise answer "no".', () => {
  const number = random(numberUpperBound);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
});
