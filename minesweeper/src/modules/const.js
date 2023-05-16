export const rulesGame =
  'In the game, mines are scattered throughout a board, which is divided into cells. Cells have three states: unopened, opened and flagged. An unopened cell is blank and clickable, while an opened cell is exposed. A player selects a cell to open it. If a player opens a mined cell, the game ends in a loss. Otherwise, the opened cell displays either a number, indicating the number of mines diagonally and/or adjacent to it, or a blank tile, and all adjacent non-mined cells will automatically be opened. Players can also flag a cell by right-clicking to denote that they believe a mine to be in that place.';

export const settings = {
  count: 10,
  bomb: 10,
  time: 0,
  click: 0,
  flag: 0,
};
