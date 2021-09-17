import readlineSync from 'readline-sync';

const maxCorrectCount = 3;

export default (name, getNextQuestion) => {
  let correctAnswers = 0;

  while (correctAnswers < maxCorrectCount) {
    const { questionText, correctAnswer } = getNextQuestion();
    console.log(questionText);
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
