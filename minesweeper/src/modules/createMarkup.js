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
createGameBoard(settings.count, blockBoard);

export const blockPopup = createElementFromString(popup, document.body);

const blockResult = createElement('section', 'block-result', wrapperMain);
export const blockTable = createElementFromString(
  getResultsTable(),
  blockResult,
);
