import run from '../index.js';
import isEven from '../utils/even.js';
import generateRandomNumber from '../utils/random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (isEven(n)) return false;

  for (let i = 3; i ** 2 <= n; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

const generateRound = () => {
  const number = generateRandomNumber(0, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => run(description, generateRound);
