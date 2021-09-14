#!/usr/bin/env node

import playGame from './src/index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const number1UpperBound = 100;
const number2UpperBound = 100;

playGame('Find the greatest common divisor of given numbers.', () => {
  const number1 = Math.floor(Math.random() * number1UpperBound);
  const number2 = Math.floor(Math.random() * number2UpperBound);
  const correctAnswer = `${gcd(Math.max(number1, number2), Math.min(number1, number2))}`;
  const question = `Question: ${number1} ${number2}`;

  return {
    question,
    correctAnswer,
  };
});
