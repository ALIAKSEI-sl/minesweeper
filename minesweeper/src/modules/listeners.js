import {
  blockLevelSelection,
  blockChangeTheme,
  blockControls,
  blockBoard,
  blockPopup,
} from './createMarkup';
import { createGameBoard, tagCell, resetSettings } from './helpers';
import { settings } from './const';
import { placeMines, openCell, startNewGame } from './game';

let clear;
const startBtn = blockControls.querySelector('.start-game');

const counterTime = blockControls.querySelector('.counter-time');
const counterClick = blockControls.querySelector('.counter-click');
const counterClicks = blockControls.querySelector('.counter-tag');

const tryAgainBtn = blockPopup.querySelector('.tryAgain-btn');

startBtn.addEventListener('click', () => {
  clearInterval(clear);
  createGameBoard(settings.count, blockBoard);
  resetSettings(settings, counterTime, counterClick, counterClicks);
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
    if (settings.click === 0 && settings.flag === 0) {
      clear = setInterval(() => {
        settings.time += 1;
        counterTime.textContent = settings.time.toString().padStart(3, '0');
      }, 1000);
    }
    tagCell(cell, settings, counterClicks);
  }
});

blockBoard.addEventListener('click', (event) => {
  if (event.target.classList.contains('cell')) {
    const cell = event.target;
    const rowCell = cell.dataset.row;
    const column = cell.dataset.col;

    if (settings.click === 0 && settings.flag === 0) {
      clear = setInterval(() => {
        settings.time += 1;
        counterTime.textContent = settings.time.toString().padStart(3, '0');
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
  resetSettings(settings, counterTime, counterClick, counterClicks);
  startNewGame();
});
