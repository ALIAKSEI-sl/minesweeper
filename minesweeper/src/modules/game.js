import { settings } from './const';
import { blockPopup, blockBoard } from './createMarkup';

let board;

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
  console.log(board);
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
      board[newRow][newCol].bombsAround === 0 &&
      !board[newRow][newCol].opened
    ) {
      const cell = blockBoard.querySelector(
        `[data-row="${newRow}"][data-col="${newCol}"`,
      );
      cell.textContent = board[newRow][newCol].bombsAround;
      board[newRow][newCol].opened = true;
      cell.classList.add('open');
      neighbors.push([newRow, newCol]);
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
    if (board[rowCell][columnCell].bombsAround === 0) {
      openEmptyCell(rowCell, columnCell);
    }
  }
  checkGameStatus(clear);
}

// const offsets = [
//   [-1, 0],
//   [1, 0],
//   [0, -1],
//   [0, 1],
//   [-1, -1],
//   [-1, 1],
//   [1, -1],
//   [1, 1],
// ];

// for (let i = 0; i < offsets.length; i++) {
//   const [dx, dy] = offsets[i];
//   const newRow = +row + dx;
//   const newCol = +col + dy;
//   if (
//     newRow >= 0 &&
//     newRow < board.length &&
//     newCol >= 0 &&
//     newCol < board[newRow].length &&
//     board[newRow][newCol].bombsAround === 0
//   ) {
//     const cell = blockBoard.querySelector(
//       `[data-row="${newRow}"][data-col="${newCol}"`,
//     );
//     console.log(cell);
//     cell.textContent = board[newRow][newCol].bombsAround;
//     board[newRow][newCol].opened = true;
//     cell.classList.add('open');
//   }
// }
