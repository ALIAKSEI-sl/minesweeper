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
