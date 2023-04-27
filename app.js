/* eslint-disable no-plusplus */
const body = document.querySelector('body');
const h1 = document.createElement('h1');
body.insertAdjacentElement('afterbegin', h1);
h1.textContent = 'RSS Virtual Keyboard';
const textarea = document.createElement('textarea');
textarea.style.display = 'block';
textarea.setAttribute('autofocus', 'autofocus');
body.insertAdjacentElement('beforeend', textarea);
const main = document.createElement('main');
main.classList.add('keyboard');
body.insertAdjacentElement('beforeend', main);
const p1 = document.createElement('p');
body.insertAdjacentElement('beforeend', p1);
p1.textContent = 'Клавиатура создана в операционной системе Windows';
const p2 = document.createElement('p');
body.insertAdjacentElement('beforeend', p2);
p2.textContent = 'Для переключения языка раскладки: Shift + Ctrl';

const row1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const row2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'Del'];
const row3 = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', '|', 'Enter'];
const row4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'Shift', 'up'];
const row5 = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'left', 'down', 'right'];

const row1Sh = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const row2Sh = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del'];
const row3Sh = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter'];
const row4Sh = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 'up'];
const row5Sh = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'left', 'down', 'right'];

const arr1Row = [row1, row2, row3, row4, row5];
const arr2Row = [row1Sh, row2Sh, row3Sh, row4Sh, row5Sh];

// Create one button
function createButton(text) {
  const button = document.createElement('button');
  button.classList.add('key');
  button.textContent = text;
  if (button.textContent === 'Space') { button.classList.add('space'); }
  if (button.textContent === 'Tab' || button.textContent === 'Caps Lock' || button.textContent === 'Shift'
  || button.textContent === 'Ctrl' || button.textContent === 'Win' || button.textContent === 'Alt'
  || button.textContent === 'Space' || button.textContent === 'Backspace' || button.textContent === 'Del'
  || button.textContent === 'Enter') { button.classList.add('utility'); }
  if (button.textContent === 'up') {
    button.textContent = '';
    button.innerHTML = '<img src= "img/Arrow-up.png">';
    button.classList.add('arrows');
  }
  if (button.textContent === 'left') {
    button.textContent = '';
    button.innerHTML = '<img src= "img/Arrow-left.png">';
    button.classList.add('arrows');
  }
  if (button.textContent === 'right') {
    button.textContent = '';
    button.innerHTML = '<img src= "img/Arrow-right.png">';
    button.classList.add('arrows');
  }
  if (button.textContent === 'down') {
    button.textContent = '';
    button.innerHTML = '<img src= "img/Arrow-down.png">';
    button.classList.add('arrows');
  }
  return button;
}

// Create row of buttons
function createRow(row, classSec) {
  const section = document.createElement('section');
  section.classList.add(classSec);
  for (let i = 0; i < row.length; i++) {
    const currentButton = createButton(row[i]);
    section.append(currentButton);
  }
  return section;
}

// Create all keybords
function createAllButtons(arr, classSec) {
  main.append(createRow(arr[0], classSec));
  main.append(createRow(arr[1], classSec));
  main.append(createRow(arr[2], classSec));
  main.append(createRow(arr[3], classSec));
  main.append(createRow(arr[4], classSec));
}
createAllButtons(arr1Row, 'row');

// Functionality of textarea
// Press down key
function printKeydownOnKeyboard(e) {
  const currentButton = document.querySelectorAll('button');
  currentButton.forEach((elem) => {
    if (elem.textContent === e.key) {
      elem.classList.add('active');
      if (!elem.classList.contains('utility')) {
        textarea.value += e.key;
      }
    }
  });
}
document.addEventListener('keydown', printKeydownOnKeyboard);

// Press Up key
function printKeyupOnKeyboard(e) {
  const currentButton = document.querySelectorAll('button');
  currentButton.forEach((elem) => {
    if (elem.textContent === e.key) {
      elem.classList.remove('active');
    }
  });
}
document.addEventListener('keyup', printKeyupOnKeyboard);

// Click mouse on key

const buttons = document.querySelectorAll('button');
function printOnClick(e) {
  buttons.forEach((elem) => {
    if (e.target === elem) {
      const current = e.target;
      switch (current.innerHTML) {
        case 'Backspace':
          textarea.value.substring(0, textarea.value.length - 1);
          break;
        case 'Enter':
          textarea.value += '\n';
          break;
        case 'Space':
          textarea.value += ' ';
          break;
        case 'Tab':
          textarea.value += '    ';
          break;
        case 'Alt':
          textarea.value += '';
          break;
        case 'Win':
          textarea.value += '';
          break;
        case 'Ctrl':
          textarea.value += '';
          break;
        default:
          textarea.value += current.innerHTML;
      }
    }
  });
}

document.addEventListener('click', printOnClick);

// Functionality for Shift
function shiftDownHandler(e) {
  const rowSection = document.querySelectorAll('.row');
  const shift = document.querySelector('button');
  if (shift.innerHTML === 'Shift') { shift.classList.add('active'); }
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    rowSection.forEach((elem) => elem.remove());
    createAllButtons(arr2Row, 'rowSh');
    document.removeEventListener('keydown', printKeydownOnKeyboard);
    document.addEventListener('keydown', printKeydownOnKeyboard);
  }
  e.repeat = false;
  document.removeEventListener('keydown', shiftDownHandler);
  document.addEventListener('keydown', shiftDownHandler);
}

function shiftUpHandler(e) {
  const rowShSection = document.querySelectorAll('.rowSh');
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    rowShSection.forEach((elem) => elem.remove());
    createAllButtons(arr1Row, 'row');
  }
  document.removeEventListener('keyup', shiftUpHandler);
  document.addEventListener('keyup', shiftUpHandler);
}

document.addEventListener('keydown', shiftDownHandler);
document.addEventListener('keyup', shiftUpHandler);

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const isCapsL = e.getModifierState('CapsLock');
  if (e.code === 'CapsLock') {
    if (isCapsL === true) {
      document.querySelectorAll('.row').forEach((elem) => elem.remove());
      createAllButtons(arr2Row, 'rowSh');
      document.addEventListener('keydown', printKeydownOnKeyboard);
    } else if (isCapsL === false) {
      document.querySelectorAll('.rowSh').forEach((elem) => elem.remove());
      createAllButtons(arr1Row, 'row');
    }
  }
});
