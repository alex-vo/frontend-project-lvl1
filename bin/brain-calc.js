#!/usr/bin/env node

import playGame from './src/index.js';

const operations = ['+', '-', '*'];
const number1UpperBound = 100;
const number2UpperBound = 10;

playGame('What is the result of the expression?', () => {
  const number1 = Math.floor(Math.random() * number1UpperBound);
  const number2 = Math.floor(Math.random() * number2UpperBound);
  const operationIndex = Math.floor(Math.random() * operations.length);
  const formula = `${number1} ${operations[operationIndex]} ${number2}`;
  const question = `Question: ${formula}`;
  const correctAnswer = `${eval(formula)}`;

  return {
    question,
    correctAnswer,
  };
});
