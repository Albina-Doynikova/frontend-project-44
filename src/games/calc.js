import getStart from '../index.js';
import getRandomInRange from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const calc = (randomOperations, firstRandomNumber, secondRandomNumber) => {
  switch (randomOperations) {
    case '+':
      return firstRandomNumber + secondRandomNumber;
    case '-':
      return firstRandomNumber - secondRandomNumber;
    case '*':
      return firstRandomNumber * secondRandomNumber;
    default:
      throw new Error(`Unknown operator: ${randomOperations}`);
  }
};

const getQuestionAndAnswer = () => {
  let firstRandomNumber = getRandomInRange();
  let secondRandomNumber = getRandomInRange();
  const operations = ['+', '-', '*'];
  const randomOperations = operations[getRandomInRange(0, operations.length - 1)];
  if (randomOperations === '-') {
    if (firstRandomNumber < secondRandomNumber) {
      const temp = firstRandomNumber;
      firstRandomNumber = secondRandomNumber;
      secondRandomNumber = temp;
    }
  }

  const result = calc(randomOperations, firstRandomNumber, secondRandomNumber);
  const question = `${firstRandomNumber} ${randomOperations} ${secondRandomNumber}`;
  const correctAnswer = String(result);
  return [question, correctAnswer];
};

export default () => {
  getStart(description, getQuestionAndAnswer);
};
