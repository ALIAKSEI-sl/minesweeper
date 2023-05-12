import { blockLevelSelection, blockChangeTheme } from './createMarkup';

blockLevelSelection.addEventListener('change', (event) => {
  console.log(event.target.value);
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
