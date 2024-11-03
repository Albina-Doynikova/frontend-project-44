import getStart from '../index.js';
import getRandomInRange from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const calc = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: ${operation}`);
  }
};

const getQuestionAndAnswer = () => {
  let firstNumber = getRandomInRange();
  let secondNumber = getRandomInRange();
  const operators = ['+', '-', '*'];
  const operation = operators[getRandomInRange(0, operators.length - 1)];
  if (operation === '-') {
    if (firstNumber < secondNumber) {
      const temp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = temp;
    }
  }

  const result = calc(operation, firstNumber, secondNumber);
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = String(result);
  return [question, correctAnswer];
};

export default () => {
  getStart(description, getQuestionAndAnswer);
};
