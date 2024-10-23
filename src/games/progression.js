import getStart from '../index.js';
import getRandomInRange from '../getRandomNumber.js';

const description = 'What number is missing in the progression?';

const progression = (firstElement, difference, length) => {
    let result = [];
    for (let i = 0; i < length; i ++) {
        result.push(firstElement + i * difference);
    }
    return result;
}

const getQuestionAndAnswer = () => {
    const firstElement = getRandomInRange(1, 10);
    const difference = getRandomInRange(1, 5);
    const length = getRandomInRange(5, 10);

    const progressionGeneration = progression(firstElement, difference, length);
    const hiddenIndex = getRandomInRange(0, length - 1);
    const hiddenNumber = progressionGeneration[hiddenIndex];
    progressionGeneration[hiddenIndex] = '..';



    const question = progressionGeneration.join(' ');
    const correctAnswer = String(hiddenNumber);
    return [question, correctAnswer];

}

export default () => {
    getStart(description, getQuestionAndAnswer)
};
