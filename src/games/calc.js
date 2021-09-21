import run from '../index.js';
import generateRandomNumber from '../utils/random.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw Error(`Unexpected operator: ${operator}`);
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 10);
  const operatorIndex = generateRandomNumber(0, operators.length - 1);
  const question = `${number1} ${operators[operatorIndex]} ${number2}`;
  const correctAnswer = `${calculate(operators[operatorIndex], number1, number2)}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => run(description, generateRound);
