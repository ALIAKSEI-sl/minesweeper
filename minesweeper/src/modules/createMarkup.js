import { createElement, createElementFromString } from './helpers';
import rulesGame from './const';
import changeTheme from '../components/changeTheme';
import levelSelection from '../components/levelSelection';

const header = createElement('header', 'header', document.body);
const wrapperHeader = createElement('div', 'header-wrapper', header);
const wrapperMain = createElement('main', 'wrapper-main', document.body);

export const blockLevelSelection = createElementFromString(
  levelSelection,
  wrapperHeader,
);

const headerName = createElement('h1', 'header-title', wrapperHeader);
headerName.textContent = 'minesweeper';

export const blockChangeTheme = createElementFromString(
  changeTheme,
  wrapperHeader,
);

const blockRules = createElement('div', 'block-rules', wrapperMain);
const rulesHeader = createElement('h2', 'rules-header', blockRules);
rulesHeader.textContent = 'Game rules';
const rulesText = createElement('p', 'rules-text', blockRules);
rulesText.textContent = rulesGame;

// const spanCounter = document.createElement('span');
// spanCounter.textContent = '000';
// document.body.append(spanCounter);

// export function createElement(tagName, className) {
//   const elem = document.createElement(tagName);
//   elem.classList.add(className);
//   return elem;
// }

// export function timeCounter(element) {
//   let seconds = 0;
//   return () => {
//     seconds += 1;
//     const minutes = Math.floor(seconds / 60);
//     const remainsSeconds = seconds % 60;
//     const html = `${minutes} : ${remainsSeconds}`;
//     element.textContent = html;
//   };
// }

// const elem = document.createElement('span');
// const button = document.createElement('button');
// document.body.append(elem);
// document.body.append(button);
// const timer = timeCounter(elem);

// button.addEventListener('click', () => {});
// const clean = setInterval(timer, 1000);

// setTimeout(() => {
//   clearTimeout(clean);
// }, 5000);

// setTimeout(() => {
//   setInterval(timer, 1000);
// }, 10000);
