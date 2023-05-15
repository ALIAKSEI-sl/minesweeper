import { settings } from './const';
import { blockPopup, blockBoard, blockTable, blockGame } from './createMarkup';
import { createGameBoard } from './helpers';

let board;
const results = [];
const resultsTime = blockTable.querySelectorAll('.results-time');
const resultsClick = blockTable.querySelectorAll('.results-click');
const resultsStatus = blockTable.querySelectorAll('.results-status');

function countBombsAround(row, col) {
  let count = 0;
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (
        i >= 0 &&
        i < board.length &&
        j >= 0 &&
        j < board[0].length &&
        board[i][j].bomb
      ) {
        count += 1;
      }
    }
  }
  return count;
}

export function placeMines(rowCell, columnCell) {
  board = new Array(settings.count);
  for (let i = 0; i < settings.count; i++) {
    board[i] = new Array(settings.count);
  }

  for (let i = 0; i < settings.count; i++) {
    board[i] = [];
    for (let j = 0; j < settings.count; j++) {
      board[i][j] = {
        bomb: false,
        opened: false,
        bombsAround: 0,
        flag: false,
      };
    }
  }

  let minesPlaced = 0;
  while (minesPlaced < settings.bomb) {
    const row = Math.floor(Math.random() * settings.count);
    const col = Math.floor(Math.random() * settings.count);
    if (!board[row][col].bomb && row !== +rowCell && col !== +columnCell) {
      board[row][col].bomb = true;
      board[row][col].bombsAround = null;
      minesPlaced += 1;
    }
  }

  for (let i = 0; i < settings.count; i++) {
    for (let j = 0; j < settings.count; j++) {
      if (!board[i][j].bomb) {
        board[i][j].bombsAround = countBombsAround(i, j);
      }
    }
  }
}

function endGame(elem, clear, message) {
  clearInterval(clear);

  const popupHeader = blockPopup.querySelector('.popup-header');
  const secondsResults = blockPopup.querySelector('.seconds-results');
  const clicksResults = blockPopup.querySelector('.clicks-results');
  popupHeader.textContent = message;
  secondsResults.textContent = settings.time;
  clicksResults.textContent = settings.click;
  elem.classList.add('active');
}

export function startNewGame() {
  blockPopup.classList.remove('active');
}

function checkGameStatus(clear) {
  const safeCells = settings.count * settings.count - settings.bomb;
  let currentCells = 0;
  for (let i = 0; i < settings.count; i++) {
    for (let j = 0; j < settings.count; j++) {
      if (board[i][j].opened) {
        currentCells += 1;
      }
    }
  }

  if (safeCells === currentCells) {
    endGame(blockPopup, clear, 'Hooray! You found all mines');
  }
}

export function tagCell(cell, set, elem) {
  if (!cell.classList.contains('open')) {
    const rowCell = Number(cell.dataset.row);
    const colCell = Number(cell.dataset.col);
    cell.classList.toggle('flag');
    if (cell.classList.contains('flag')) {
      set.flag += 1;
      board[rowCell][colCell].flag = true;
    } else {
      set.flag -= 1;
      board[rowCell][colCell].flag = false;
    }
    elem.textContent = set.flag;
  }
}

function changeColor(elem) {
  if (elem.textContent === '1') {
    elem.style.color = 'yellow';
  } else if (elem.textContent === '2') {
    elem.style.color = 'blue';
  } else if (elem.textContent === '3') {
    elem.style.color = 'green';
  } else if (elem.textContent === '4') {
    elem.style.color = 'purple';
  } else if (elem.textContent === '5') {
    elem.style.color = 'brown';
  } else {
    elem.style.color = 'grey';
  }
}

function openEmptyCell(row, col) {
  const offsets = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  const neighbors = [];

  for (let i = 0; i < offsets.length; i++) {
    const [dx, dy] = offsets[i];
    const newRow = +row + dx;
    const newCol = +col + dy;
    if (
      newRow >= 0 &&
      newRow < board.length &&
      newCol >= 0 &&
      newCol < board[newRow].length &&
      !board[newRow][newCol].opened
    ) {
      const cell = blockBoard.querySelector(
        `[data-row="${newRow}"][data-col="${newCol}"`,
      );
      if (board[newRow][newCol].bombsAround === 0) {
        cell.textContent = board[newRow][newCol].bombsAround;
        board[newRow][newCol].opened = true;
        if (cell.classList.contains('flag')) {
          const counterTag = blockGame.querySelector('.counter-tag');
          cell.classList.remove('flag');
          settings.flag -= 1;
          board[newRow][newCol].flag = false;
          counterTag.textContent = settings.flag;
        }
        cell.classList.add('open');
        neighbors.push([newRow, newCol]);
      } else {
        cell.textContent = board[newRow][newCol].bombsAround;
        changeColor(cell);
        board[newRow][newCol].opened = true;
        if (cell.classList.contains('flag')) {
          const counterTag = blockGame.querySelector('.counter-tag');
          cell.classList.remove('flag');
          settings.flag -= 1;
          board[newRow][newCol].flag = false;
          counterTag.textContent = settings.flag;
        }
        cell.classList.add('open');
      }
    }
  }
  if (neighbors.length !== 0) {
    neighbors.forEach(([r, c]) => {
      openEmptyCell(r, c);
    });
  }
}

export function openCell(cell, rowCell, columnCell, clear) {
  if (board[rowCell][columnCell].bomb) {
    endGame(blockPopup, clear, 'Game over');
  } else {
    cell.classList.add('open');
    board[rowCell][columnCell].opened = true;
    cell.textContent = board[rowCell][columnCell].bombsAround;
    changeColor(cell);
    if (board[rowCell][columnCell].bombsAround === 0) {
      openEmptyCell(rowCell, columnCell);
    }
  }
  checkGameStatus(clear);
}

export function addResultToTable() {
  const popupHeader = blockPopup.querySelector('.popup-header');

  results.push({
    time: settings.time,
    click: settings.click,
    status: popupHeader.textContent === 'Game over' ? 'fail' : 'win',
  });
  if (results.length > 10) {
    results.shift();
  }
  results.forEach((result, index) => {
    resultsTime[index].textContent = result.time;
    resultsClick[index].textContent = result.click;
    resultsStatus[index].textContent = result.status;
  });
}

export function savedGame() {
  const gameMinesweeper = JSON.stringify({
    settings,
    board,
  });
  localStorage.setItem('gameMinesweeper', gameMinesweeper);
}

export function recoveryParams(params, elem) {
  Object.assign(settings, params.settings);
  elem.counterTime.textContent = params.settings.time;
  elem.counterClick.textContent = params.settings.click;
  elem.counterTag.textContent = params.settings.flag;
  if (params.bomb === 10) {
    elem.blockLevelSelection.value = 'easy';
  } else if (params.bomb === 17) {
    elem.blockLevelSelection.value = 'medium';
  } else if (params.bomb === 26) {
    elem.blockLevelSelection.value = 'hard';
  }
  createGameBoard(settings.count, blockBoard);
  board = params.board;
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell.opened) {
        const currentCell = blockBoard.querySelector(
          `[data-row="${i}"][data-col="${j}"`,
        );
        currentCell.classList.add('open');
        currentCell.textContent = board[i][j].bombsAround;
        changeColor(currentCell);
      }
      if (cell.flag) {
        const currentCell = blockBoard.querySelector(
          `[data-row="${i}"][data-col="${j}"`,
        );
        currentCell.classList.add('flag');
      }
    });
  });
}
