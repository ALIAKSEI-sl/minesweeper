export function createElement(tagName, className, root) {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  if (root) {
    root.append(elem);
  }
  return elem;
}

export function createElementFromString(string, root) {
  const template = document.createElement('template');
  template.innerHTML = string;
  const elem = template.content.firstElementChild;
  if (root) {
    root.append(elem);
  }
  return elem;
}

export function createGameBoard(size, root) {
  root.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    root.appendChild(row);
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i;
      cell.dataset.col = j;
      row.appendChild(cell);
    }
  }
}

export function resetSettings(
  settings,
  counterTime,
  counterClick,
  counterTag,
  counterMine,
) {
  settings.time = 0;
  settings.click = 0;
  settings.flag = 0;

  counterTime.textContent = 0;
  counterClick.textContent = 0;
  counterTag.textContent = 0;
  counterMine.textContent = settings.bomb;
}

export function startTimer(settings, elem) {
  settings.time += 1;
  elem.textContent = settings.time.toString().padStart(3, '0');
}

export function changeCountMines(message, select, settings) {
  const options = Array.from(select.children);
  let value;

  if (message === 'easy') {
    value = [10, 20, 30, 40];
  } else if (message === 'medium') {
    value = [40, 50, 60, 70];
  } else if (message === 'hard') {
    value = [70, 80, 90, 100];
  }
  options.forEach((option, index) => {
    option.value = value[index];
    option.textContent = `${value[index]}💣`;
  });
  settings.bomb = select.value;
}
