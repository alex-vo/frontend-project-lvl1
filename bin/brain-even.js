#!/usr/bin/env node

import playGame from './src/index.js';

playGame('Answer "yes" if the number is even, otherwise answer "no".', () => {
    const number = Math.floor(Math.random() * 100);
    const question = 'Question: ' + number;
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    return {
        question,
        correctAnswer
    };
});
