import {
  createElement,
  createElementFromString,
  createGameBoard,
} from './helpers';
import changeTheme from '../components/changeTheme';
import levelSelection from '../components/levelSelection';
import controls from '../components/controls';
import popup from '../components/popUpEnd';
import getResultsTable from '../components/resultsTable';
import selectMines from '../components/selectMines';
import { rulesGame, settings } from './const';

const header = createElement('header', 'header', document.body);
const wrapperHeader = createElement('div', 'header-wrapper', header);
export const wrapperMain = createElement('main', 'wrapper-main', document.body);

const selectLevel = createElement('div', 'select-level', wrapperHeader);
export const blockLevelSelection = createElementFromString(
  levelSelection,
  selectLevel,
);

export const blockMinesSelection = createElementFromString(
  selectMines,
  selectLevel,
);

const headerName = createElement('h1', 'header-title', wrapperHeader);
headerName.textContent = 'minesweeper';

export const blockChangeTheme = createElementFromString(
  changeTheme,
  wrapperHeader,
);

export const blockRules = createElement('section', 'block-rules', wrapperMain);
const rulesHeader = createElement('h2', 'rules-header', blockRules);
rulesHeader.textContent = 'Game rules';
const rulesText = createElement('p', 'rules-text', blockRules);
rulesText.textContent = rulesGame;

export const blockGame = createElement('section', 'block-game', wrapperMain);
export const blockBoard = createElement('div', 'block-board', blockGame);
export const blockControls = createElementFromString(controls, blockGame);
const blockTag = blockControls.querySelector('.block-tag');
blockTag.title = 'To set the marker, right-click on the playing field';
createGameBoard(settings.count, blockBoard);

export const blockPopup = createElementFromString(popup, document.body);

const blockResult = createElement('section', 'block-result', wrapperMain);
const resultTitle = createElement('h2', 'result-title', blockResult);
resultTitle.textContent = 'High score table';
export const blockTable = createElementFromString(
  getResultsTable(),
  blockResult,
);
