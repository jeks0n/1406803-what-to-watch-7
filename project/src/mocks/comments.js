const TEXTS = [
  'Interesting setting and a good cast',
  'Booooooooooring',
  'Very very old. Meh',
  'Almost two hours? Seriously?',
];

const USERS = [{
  id: 1,
  name: 'Tim Macoveev',
},
{
  id: 2,
  name: 'John Doe',
},
{
  id: 3,
  name: 'Arnold Schwarzenegger',
},
];

const getRandomInteger = (min, max) => {
  if (min > max) {
    throw new Error('Стартовое значение диапазона не может быть больше финального значения');
  } else if (min < 0 || max < 0) {
    throw new Error('Диапазон может содержать только положительные значения');
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomArrayElement = (elements, { repeat = false } = {}) => {
  if (repeat) {
    return () => elements[getRandomInteger(0, elements.length - 1)];
  }

  const copy = elements.slice().sort(() => Math.random() - 0.5);
  let index = 0;

  return () => {
    if (index >= copy.length) {
      throw new Error('Больше нет элементов для отображения');
    }
    index++;

    return copy[index - 1];
  };
};

const getRandomDate = (begin, end) => new Date(begin.getTime() + Math.random() * (end.getTime() - begin.getTime()));

const generateComment = (id) => ({
  id,
  user: getRandomArrayElement(USERS)(),
  rating: getRandomInteger(0, 100) / 10,
  comment: getRandomArrayElement(TEXTS)(),
  date: getRandomDate(new Date(2018, 0, 1), new Date()),
}
);

export const generateComments = (size) => [...Array(size)].map((item, index) => generateComment(index + 1));

export default generateComments;


