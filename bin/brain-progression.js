#!/usr/bin/env node

import playGame from './src/index.js';

playGame('What number is missing in the progression?', () => {
    const start = Math.floor(Math.random() * 100);
    const step = Math.floor(Math.random() * 10);
    const numberCount = Math.floor(Math.random() * 5) + 5;
    const hiddenNumber = Math.floor(Math.random() * numberCount);
    let question = ['Question: '];
    for(let i = 0; i < numberCount; i++) {
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
