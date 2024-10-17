import getStart from '../index.js';
import getRandomInRange from '../getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let number1 = a;
  let number2 = b;

  while (number2 !== 0) {
    let temp = number2;
    number2 = number1 % b;
    number1 = temp;
  }
  return Math.abs(number1); 
};

const getQuestionAndAnswer = () => {
  const a = getRandomInRange();
  const b = getRandomInRange();
  const randomNumbers = [a, b];

  const question = randomNumbers.join(' ');
  const correctAnswer = String(gcd(a, b));
  return [question, correctAnswer];
}

export default () => {
    getStart(description, getQuestionAndAnswer)
};
