import {
  blockLevelSelection,
  blockChangeTheme,
  blockControls,
  blockBoard,
} from './createMarkup';
import { createGameBoard } from './helpers';
import { settings } from './const';

const startBtn = blockControls.querySelector('.start-game');

startBtn.addEventListener('click', () => {
  createGameBoard(settings.count, blockBoard);
});

blockLevelSelection.addEventListener('change', (event) => {
  const level = event.target.value;
  if (level === 'easy') {
    settings.count = 10;
  } else if (level === 'medium') {
    settings.count = 13;
  } else if (level === 'hard') {
    settings.count = 16;
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
