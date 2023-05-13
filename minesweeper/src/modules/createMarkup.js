import { createElement, createElementFromString } from './helpers';
import changeTheme from '../components/changeTheme';
import levelSelection from '../components/levelSelection';
import controls from '../components/controls';
import { rulesGame, settings } from './const';

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

const blockRules = createElement('section', 'block-rules', wrapperMain);
const rulesHeader = createElement('h2', 'rules-header', blockRules);
rulesHeader.textContent = 'Game rules';
const rulesText = createElement('p', 'rules-text', blockRules);
rulesText.textContent = rulesGame;

export const blockGame = createElement('section', 'block-game', wrapperMain);
export const blockControls = createElementFromString(controls, blockGame);
export const blockBoard = createElement('div', 'block-board', blockGame);
// createGameBoard(settings.count, blockBoard);

// const spanCounter = document.createElement('span');
// spanCounter.textContent = '000';
// document.body.append(spanCounter);

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
