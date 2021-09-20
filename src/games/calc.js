import playGame from '../index.js';
import generateRandomNumber from '../utils/random.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

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

const generateRound = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 10);
  const operatorIndex = generateRandomNumber(0, operators.length - 1);
  const question = `${number1} ${operators[operatorIndex]} ${number2}`;
  const correctAnswer = `${calculate(operatorIndex, number1, number2)}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => playGame(description, generateRound);
