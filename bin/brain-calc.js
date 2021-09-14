#!/usr/bin/env node

import playGame from './src/index.js';

const operations = ['+', '-', '*'];

playGame('What is the result of the expression?', () => {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 10);
    const operationIndex = Math.floor(Math.random() * 3);
    const formula = '' + number1 + ' ' + operations[operationIndex] + ' ' + number2;
    const question = 'Question: ' + formula;
    const correctAnswer = '' + eval(formula);
    console.log('correctAnswer type ' + typeof correctAnswer);

    return {
        question,
        correctAnswer
    };
});
