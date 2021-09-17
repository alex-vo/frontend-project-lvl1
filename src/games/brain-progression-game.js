#!/usr/bin/env node

import playGame from '../index.js';
import random from '../util/random.js';

const number1UpperBound = 100;
const number2UpperBound = 10;
const progressionSize = 5;

export default () => playGame('What number is missing in the progression?', () => {
  const start = random(number1UpperBound);
  const step = random(number2UpperBound);
  const end = random(5) + progressionSize;
  const hiddenNumber = random(end);
  const question = ['Question:'];
  for (let i = 0; i < end; i += 1) {
    if (i === hiddenNumber) {
      question.push('..');
    } else {
      question.push(start + i * step);
    }
  }

  const correctAnswer = `${(start + hiddenNumber * step)}`;

  return {
    question: question.join(' '),
    correctAnswer,
  };
});
