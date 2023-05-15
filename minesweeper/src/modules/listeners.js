import {
  blockLevelSelection,
  blockChangeTheme,
  blockControls,
  blockBoard,
  blockPopup,
} from './createMarkup';
import {
  placeMines,
  openCell,
  startNewGame,
  addResultToTable,
  recoveryParams,
  savedGame,
  tagCell,
} from './game';
import { createGameBoard, resetSettings, startTimer } from './helpers';
import { settings } from './const';

let clear;
const startBtn = blockControls.querySelector('.start-game');

const counterTime = blockControls.querySelector('.counter-time');
const counterClick = blockControls.querySelector('.counter-click');
const counterTag = blockControls.querySelector('.counter-tag');

const tryAgainBtn = blockPopup.querySelector('.tryAgain-btn');

startBtn.addEventListener('click', () => {
  clearInterval(clear);
  createGameBoard(settings.count, blockBoard);
  resetSettings(settings, counterTime, counterClick, counterTag);
});

blockLevelSelection.addEventListener('change', (event) => {
  const level = event.target.value;
  if (level === 'easy') {
    settings.count = 10;
    settings.bomb = 10;
  } else if (level === 'medium') {
    settings.count = 13;
    settings.bomb = 17;
  } else if (level === 'hard') {
    settings.count = 16;
    settings.bomb = 26;
  }
  clearInterval(clear);
  createGameBoard(settings.count, blockBoard);
  resetSettings(settings, counterTime, counterClick, counterTag);
});

const switchTheme = blockChangeTheme.querySelector('#change-theme');
document.documentElement.style.setProperty('--colorLight', 'white');
document.documentElement.style.setProperty('--colorDark', 'rgb(94, 91, 91)');

switchTheme.addEventListener('change', () => {
  const st = document.documentElement.style;
  if (st.getPropertyValue('--colorLight') === 'white') {
    st.setProperty('--colorLight', 'rgb(94, 91, 91)');
    st.setProperty('--colorDark', 'white');
  } else {
    st.setProperty('--colorLight', 'white');
    st.setProperty('--colorDark', 'rgb(94, 91, 91)');
  }
});

blockBoard.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('cell')) {
    const cell = event.target;
    if (settings.click !== 0) {
      tagCell(cell, settings, counterTag);
    }
  }
});

blockBoard.addEventListener('click', (event) => {
  if (event.target.classList.contains('cell')) {
    const cell = event.target;
    const rowCell = cell.dataset.row;
    const column = cell.dataset.col;

    if (settings.click === 0 && settings.flag === 0) {
      startTimer(settings, counterTime);
      clear = setInterval(() => {
        startTimer(settings, counterTime);
      }, 1000);
    }

    if (settings.click === 0) {
      placeMines(rowCell, column);
    }

    if (!cell.classList.contains('flag') && !cell.classList.contains('open')) {
      settings.click += 1;
      counterClick.textContent = settings.click;
      openCell(cell, rowCell, column, clear);
    }
  }
});

tryAgainBtn.addEventListener('click', () => {
  createGameBoard(settings.count, blockBoard);
  addResultToTable();
  resetSettings(settings, counterTime, counterClick, counterTag);
  startNewGame();
});

window.addEventListener('beforeunload', () => {
  if (settings.click !== 0 || settings.flag !== 0) {
    savedGame();
  }
});

window.addEventListener('load', () => {
  const game = localStorage.getItem('gameMinesweeper');
  if (game) {
    const answer = confirm('You want to continue the last game you started');
    if (answer) {
      const params = JSON.parse(game);
      const elem = {
        counterTime,
        counterClick,
        counterTag,
        blockLevelSelection,
        blockBoard,
      };
      recoveryParams(params, elem);
      startTimer(settings, counterTime);
      clear = setInterval(() => {
        startTimer(settings, counterTime);
      }, 1000);
    }
    localStorage.removeItem('gameMinesweeper');
  }
});
