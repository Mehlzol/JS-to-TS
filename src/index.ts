// index.ts
import {filterLongWords} from './filterLongWords';
import {getFirstThreeChars} from './getFirstThreeChars';
import {printFruits} from './printFruits';
import {squareNumber} from './squareNumber';

console.log('Try npm run lint/fix!');

const words: string[] = [
  'Ephiphany',
  'Vivacious',
  'Incandescent',
  'Quintessence',
  'Zenith',
];
const longWords = filterLongWords(words);
console.log(longWords);

const fruits: string[] = [
  'Mango',
  'Strawberry',
  'Kiwi',
  'Pineapple',
  'Starfruit',
  'Jackfruit',
];
printFruits(fruits);

const numbers: number[] = [1, 2, 3, 4, 5];
const squaredNumbers: number[] = squareNumber(numbers);
console.log(squaredNumbers);

const string = 'I need to Pass';
console.log(getFirstThreeChars(string));
