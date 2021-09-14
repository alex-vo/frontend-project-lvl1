import greet from './cli.js';
import readlineSync from 'readline-sync';

const winningCorrectAnswerAmount = 3;

export default (introMessage, nextQuestion) => {
  const name = greet();

  console.log(introMessage);

  let correctAnswers = 0;

  while (correctAnswers < winningCorrectAnswerAmount) {
    const question = nextQuestion();
    console.log(question.question);
    const answer = readlineSync.question('Your answer: ');
    if (question.correctAnswer === answer.toLowerCase()) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers >= winningCorrectAnswerAmount) {
    console.log(`Congratulations, ${name}!`);
  }


}