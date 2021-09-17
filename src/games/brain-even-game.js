import playGame from '../index.js';
import even from '../util/even.js';
import random from '../util/random.js';

const numberUpperBound = 100;

export default () => playGame('Answer "yes" if the number is even, otherwise answer "no".', () => {
  const number = random(numberUpperBound);
  const question = `Question: ${number}`;
  const correctAnswer = even(number) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
});
