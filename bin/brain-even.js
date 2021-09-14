#!/usr/bin/env node

import greet from './src/cli.js';
import readlineSync from 'readline-sync';

const name = greet();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswers = 0;

while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log('Question: ' + number);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if(correctAnswer === answer.toLowerCase()) {
        console.log('Correct!');
        correctAnswers++;
    } else {
        console.log('\'' + answer + '\' is wrong answer ;(. Correct answer was \'' + correctAnswer + '\'.');
        console.log('Let\'s try again, ' + name + '!');
        break;
    }
}

if(correctAnswers >= 3) {
    console.log('Congratulations, ' + name + '!');
}
