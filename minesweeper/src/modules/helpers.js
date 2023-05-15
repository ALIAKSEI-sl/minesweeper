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

export function tagCell(cell, settings, elem) {
  if (!cell.classList.contains('open')) {
    cell.classList.toggle('flag');
    if (cell.classList.contains('flag')) {
      settings.flag += 1;
    } else {
      settings.flag -= 1;
    }
    elem.textContent = settings.flag;
  }
}

export function resetSettings(
  settings,
  counterTime,
  counterClick,
  counterClicks,
) {
  settings.time = 0;
  settings.click = 0;
  settings.click = 0;

  counterTime.textContent = 0;
  counterClick.textContent = 0;
  counterClicks.textContent = 0;
}

export function startTimer(count, elem) {
  count += 1;
  console.log(count);
  elem.textContent = count;
}
