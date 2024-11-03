import getStart from '../index.js';
import getRandomInRange from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const calc = (operations, firstNumber, secondNumber) => {
  switch (operations) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: ${operations}`);
  }
};

const getQuestionAndAnswer = () => {
  let firstNumber = getRandomInRange();
  let secondNumber = getRandomInRange();
  const operators = ['+', '-', '*'];
  const operations = operators[getRandomInRange(0, operators.length - 1)];
  if (operations === '-') {
    if (firstNumber < secondNumber) {
      const temp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = temp;
    }
  }

  const result = calc(operations, firstNumber, secondNumber);
  const question = `${firstNumber} ${operations} ${secondNumber}`;
  const correctAnswer = String(result);
  return [question, correctAnswer];
};

export default () => {
  getStart(description, getQuestionAndAnswer);
};
