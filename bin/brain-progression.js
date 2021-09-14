#!/usr/bin/env node

import playGame from './src/index.js';

const number1UpperBound = 100;
const number2UpperBound = 10;

playGame('What number is missing in the progression?', () => {
  const start = Math.floor(Math.random() * number1UpperBound);
  const step = Math.floor(Math.random() * number2UpperBound);
  const numberCount = Math.floor(Math.random() * 5) + 5;
  const hiddenNumber = Math.floor(Math.random() * numberCount);
  let question = ['Question:'];
  for (let i = 0; i < numberCount; i++) {
    if (i === hiddenNumber) {
      question.push('..');
    } else {
      question.push(start + i * step);
    }
  }

  const correctAnswer = '' + (start + hiddenNumber * step);

  return {
    question: question.join(' '),
    correctAnswer
  };
});
