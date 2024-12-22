"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { filterLongWords } = require('./filterLongWords');
const { getFirstThreeChars } = require('./getFirstThreeChars');
const { printFruits } = require('./printFruits');
const { squareNumber } = require('./squareNumber');

console.log('Try npm run lint/fix!');


const words = ["Ephiphany", "Vivacious", "Incandescent", "Quintessence", "Zenith"];
const longWords = filterLongWords(words);
console.log(longWords); 

const fruits = ["Mango", "Strawberry", "Kiwi", "Pineapple", "Starfruit", "Jackfruit"];
printFruits(fruits); 

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumber(numbers);
console.log(squaredNumbers); 

const string = "I need to Pass";
console.log(getFirstThreeChars(string)); 