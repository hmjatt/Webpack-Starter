import generateQuote from "./generateQuote";
import './styles/main.scss';
import  leftQuote from './assets/left.svg';
import  threeDots from './assets/dots.svg';
import  rightQuote from './assets/right.svg';

const leftQuoteImg = document.getElementById('leftQuoteImg');
leftQuoteImg.src = leftQuote;

const threeDotsImg = document.getElementById('threeDotsImg');
threeDotsImg.src = threeDots;

const rightQuoteImg = document.getElementById('rightQuoteImg');
rightQuoteImg.src = rightQuote;

console.log(generateQuote());