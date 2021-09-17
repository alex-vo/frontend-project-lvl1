import readlineSync from 'readline-sync';
import greet from './cli.js';

const maxCorrectCount = 3;

export default (introMessage, getNextQuestion) => {
  const name = greet();

  console.log(introMessage);

  let correctAnswers = 0;

  while (correctAnswers < maxCorrectCount) {
    const { question, correctAnswer } = getNextQuestion();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer.toLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
