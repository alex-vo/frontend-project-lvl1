#!/usr/bin/env node

import playGame from '../index.js';
import random from '../util/random.js';

const operations = ['+', '-', '*'];
const number1UpperBound = 100;
const number2UpperBound = 10;

export default () => playGame(
  'What is the result of the expression?',
  () => {
    const number1 = random(number1UpperBound);
    const number2 = random(number2UpperBound);
    const operationIndex = random(operations.length);
    const question = `Question: ${number1} ${operations[operationIndex]} ${number2}`;
    let correctAnswer;
    switch (operationIndex) {
      case 0:
        correctAnswer = number1 + number2;
        break;
      case 1:
        correctAnswer = number1 - number2;
        break;
      case 2:
        correctAnswer = number1 * number2;
        break;
      default:
        break;
    }

    return {
      question,
      correctAnswer: `${correctAnswer}`,
    };
  }
);
