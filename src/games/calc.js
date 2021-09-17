import readlineSync from 'readline-sync';
import playGame from '../index.js';
import generateRandomNumber from '../utils/random.js';

const operators = ['+', '-', '*'];
const number1UpperBound = 100;
const number2UpperBound = 10;

const calculate = (operatorIndex, number1, number2) => {
  switch (operatorIndex) {
    case 0:
      return number1 + number2;
    case 1:
      return number1 - number2;
    case 2:
      return number1 * number2;
    default:
      throw Error(`Unexpected operator index: ${operatorIndex}`);
  }
};

const createNextQuestion = () => {
  const number1 = generateRandomNumber(0, number1UpperBound);
  const number2 = generateRandomNumber(0, number2UpperBound);
  const operatorIndex = generateRandomNumber(0, operators.length);
  const questionText = `Question: ${number1} ${operators[operatorIndex]} ${number2}`;
  const correctAnswer = calculate(operatorIndex, number1, number2);

  return {
    questionText,
    correctAnswer: `${correctAnswer}`,
  };
};

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  playGame(name, createNextQuestion);
};
