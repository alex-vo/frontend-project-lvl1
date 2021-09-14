#!/usr/bin/env node

import playGame from './src/index.js';

const isPrime = (n) => {
    if (n < 4) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i ** 2 <= n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

playGame('Answer "yes" if given number is prime. Otherwise answer "no".', () => {
    const number = Math.floor(Math.random() * 100);
    const question = 'Question: ' + number;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    
    return {
        question,
        correctAnswer
    };
});
