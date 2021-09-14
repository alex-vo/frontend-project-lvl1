import greet from './cli.js';
import readlineSync from 'readline-sync';

export default (introMessage, nextQuestion) => {
    const name = greet();

    console.log(introMessage);

    let correctAnswers = 0;

    while (correctAnswers < 3) {
        const question = nextQuestion();
        console.log(question.question);
        const answer = readlineSync.question('Your answer: ');
        console.log('answer type ' + typeof answer);
        if(question.correctAnswer === answer.toLowerCase()) {
            console.log('Correct!');
            correctAnswers++;
        } else {
            console.log('\'' + answer + '\' is wrong answer ;(. Correct answer was \'' + question.correctAnswer + '\'.');
            console.log('Let\'s try again, ' + name + '!');
            break;
        }
    }

    if(correctAnswers >= 3) {
        console.log('Congratulations, ' + name + '!');
    }


}