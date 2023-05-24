import {
  blockLevelSelection,
  blockChangeTheme,
  blockControls,
  blockBoard,
  blockPopup,
  wrapperMain,
  blockMinesSelection,
} from './createMarkup';
import {
  placeMines,
  openCell,
  startNewGame,
  addResultToTable,
  recoveryParams,
  savedGame,
  tagCell,
  recoveryResults,
  savedResults,
  changeVolume,
} from './game';
import { createGameBoard, resetSettings, startTimer } from './helpers';
import { settings } from './const';

let clear;
const startBtn = blockControls.querySelector('.start-game');

const counterTime = blockControls.querySelector('.counter-time');
const counterClick = blockControls.querySelector('.counter-click');
const counterTag = blockControls.querySelector('.counter-tag');
const counterMine = blockControls.querySelector('.counter-mine');

const tryAgainBtn = blockPopup.querySelector('.tryAgain-btn');
const okBtn = blockPopup.querySelector('.ok-btn');

const minesSelection = blockMinesSelection.querySelector('.minesSelection');

startBtn.addEventListener('click', () => {
  clearInterval(clear);
  createGameBoard(settings.count, blockBoard);
  resetSettings(settings, counterTime, counterClick, counterTag, counterMine);
});

blockLevelSelection.addEventListener('change', (event) => {
  const level = event.target.value;
  if (level === 'easy') {
    settings.count = 10;
    wrapperMain.classList.remove('hard');
  } else if (level === 'medium') {
    settings.count = 15;
    wrapperMain.classList.remove('hard');
  } else if (level === 'hard') {
    settings.count = 25;
    wrapperMain.classList.add('hard');
  }
  clearInterval(clear);
  createGameBoard(settings.count, blockBoard);
  resetSettings(settings, counterTime, counterClick, counterTag, counterMine);
  counterMine.textContent = settings.bomb;
});

minesSelection.addEventListener('change', (event) => {
  let count = event.target.value;
  if (+count < 1 || +count > 99) {
    event.target.value = '10';
    count = event.target.value;
  }
  settings.bomb = +count;
  clearInterval(clear);
  createGameBoard(settings.count, blockBoard);
  resetSettings(settings, counterTime, counterClick, counterTag, counterMine);
  counterMine.textContent = settings.bomb;
});

const switchTheme = blockChangeTheme.querySelector('#change-theme');
const switchVolume = blockChangeTheme.querySelector('.block-volume');
document.documentElement.style.setProperty(
  '--colorLight',
  'rgb(242, 245, 238)',
);
document.documentElement.style.setProperty('--colorDark', 'rgb(94, 91, 91)');

switchTheme.addEventListener('change', () => {
  const st = document.documentElement.style;
  if (st.getPropertyValue('--colorLight') === 'rgb(242, 245, 238)') {
    st.setProperty('--colorLight', 'rgb(94, 91, 91)');
    st.setProperty('--colorDark', 'rgb(242, 245, 238)');
  } else {
    st.setProperty('--colorLight', 'rgb(242, 245, 238)');
    st.setProperty('--colorDark', 'rgb(94, 91, 91)');
  }
});

switchVolume.addEventListener('click', (event) => {
  if (event.currentTarget.classList.contains('unmute')) {
    event.currentTarget.classList.remove('unmute');
    event.currentTarget.classList.add('mute');
    changeVolume('unmute');
  } else {
    event.currentTarget.classList.remove('mute');
    event.currentTarget.classList.add('unmute');
    changeVolume('mute');
  }
});

blockBoard.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('cell')) {
    const cell = event.target;
    if (settings.click !== 0) {
      tagCell(cell, settings, counterTag, counterMine);
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
      placeMines(rowCell, column, blockLevelSelection.value);
    }

    if (!cell.classList.contains('flag') && !cell.classList.contains('open')) {
      settings.click += 1;
      counterClick.textContent = settings.click;
      openCell(cell, rowCell, column, counterMine, clear);
    }
  }
});

tryAgainBtn.addEventListener('click', () => {
  createGameBoard(settings.count, blockBoard);
  addResultToTable();
  resetSettings(settings, counterTime, counterClick, counterTag, counterMine);
  startNewGame();
});

okBtn.addEventListener('click', () => {
  addResultToTable();
  startNewGame();
});

window.addEventListener('beforeunload', () => {
  if (settings.click !== 0 || settings.flag !== 0) {
    savedGame(blockLevelSelection, minesSelection);
  }
  savedResults();
});

window.addEventListener('load', () => {
  const game = localStorage.getItem('gameMinesweeper');
  const saveResults = localStorage.getItem('minesweeperResult');
  if (saveResults) {
    recoveryResults(saveResults);
  }
  if (game) {
    const answer = confirm('You want to continue the last game you started');
    if (answer) {
      const params = JSON.parse(game);
      const elem = {
        counterTime,
        counterClick,
        counterTag,
        counterMine,
        blockLevelSelection,
        blockBoard,
        minesSelection,
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
