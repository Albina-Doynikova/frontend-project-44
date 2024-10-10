import getStart from '../index.js';

const description = "Answer \"yes\" if the number is even, otherwise answer \"no\".";

const isEven = (number) => number % 2 === 0;

const getRandomInRange = (min = 1, max = 9) => {
    return Math.floor(min + Math.random() * (max - min + 1))
};

const getQuestionAndAnswer = () => {
    const question = getRandomInRange();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [question, correctAnswer];
}

export default () => {
    getStart(description, getQuestionAndAnswer)
};