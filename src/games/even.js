import getStart from '../index.js';
import getRandomInRange from '../getRandomNumber.js';

const description = "Answer \"yes\" if the number is even, otherwise answer \"no\".";

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
    const question = getRandomInRange();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [question, correctAnswer];
}

export default () => {
    getStart(description, getQuestionAndAnswer)
};
