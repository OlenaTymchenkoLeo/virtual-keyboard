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
p2.textContent = 'Для переключения языка раскладки: Ctrl + Alt';

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

const row1u = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const row2u = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї', 'Del'];
const row3u = ['Caps Lock', 'ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є', '|', 'Enter'];
const row4u = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', 'Shift', 'up'];
const row5u = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'left', 'down', 'right'];

const row1uSh = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const row2uSh = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'х', 'Ї}', 'Del'];
const row3uSh = ['Caps Lock', 'Ф', 'І', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Є', '|', 'Enter'];
const row4uSh = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'Shift', 'up'];
const row5uSh = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'left', 'down', 'right'];

const arr1uRow = [row1u, row2u, row3u, row4u, row5u];
const arr2uRow = [row1uSh, row2uSh, row3uSh, row4uSh, row5uSh];
let leng = 'en';

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
  row.forEach((rowBut) => {
    const currentButton = createButton(rowBut);
    section.append(currentButton);
  });
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
        textarea.innerHTML += elem.textContent;
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
          textarea.innerHTML = textarea.innerHTML.slice(0, -1);
          break;
        case 'Del':
          textarea.innerHTML = textarea.innerHTML.slice(0, 1);
          break;
        case 'Enter':
          textarea.innerHTML += '\n';
          break;
        case 'Space':
          textarea.innerHTML += ' ';
          break;
        case 'Tab':
          textarea.innerHTML += '    ';
          break;
        case 'Alt':
          textarea.innerHTML += '';
          break;
        case 'Win':
          textarea.innerHTML += '';
          break;
        case 'Ctrl':
          textarea.innerHTML += '';
          break;
        case 'Caps Lock':
          textarea.innerHTML += '';
          break;
        default:
          textarea.innerHTML += current.innerHTML;
      }
    }
  });
}

document.addEventListener('click', printOnClick);

// caps lock on click
let isCaps = false;
document.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'Caps Lock' && isCaps === false) {
    isCaps = true;
    document.querySelectorAll('.row').forEach((button) => button.remove());
    createAllButtons(arr2Row, 'rowSh');
    document.addEventListener('click', printOnClick);
  } else if (e.target.innerHTML === 'Caps Lock' && isCaps === true) {
    isCaps = false;
    document.querySelectorAll('.rowSh').forEach((button) => button.remove());
    createAllButtons(arr1Row, 'row');
    document.addEventListener('click', printOnClick);
  }
});

// Functionality for Shift
function shiftDownHandler(e) {
  const rowSection = document.querySelectorAll('.row');
  const shift = document.querySelector('button');
  if (shift.innerHTML === 'Shift') { shift.classList.add('active'); }
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    rowSection.forEach((elem) => elem.remove());
    if (leng === 'en') {
      createAllButtons(arr2Row, 'rowSh');
    } else if (leng === 'ukr') {
      createAllButtons(arr2uRow, 'rowSh');
    }
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
    if (leng === 'en') {
      createAllButtons(arr1Row, 'row');
    } else if (leng === 'ukr') {
      createAllButtons(arr1uRow, 'row');
    }
  }
  document.removeEventListener('keyup', shiftUpHandler);
  document.addEventListener('keyup', shiftUpHandler);
}

document.addEventListener('keydown', shiftDownHandler);
document.addEventListener('keyup', shiftUpHandler);

// Caps Lock on keydown and change lenguage

document.addEventListener('keydown', (e) => {
// e.preventDefault();
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
  if (e.ctrlKey && e.altKey && leng === 'en') {
    document.querySelectorAll('.row').forEach((elem) => elem.remove());
    createAllButtons(arr1uRow, 'row');
    leng = 'ukr';
    document.removeEventListener('keydown', printKeydownOnKeyboard);
    document.addEventListener('keydown', printKeydownOnKeyboard);
  } else if (e.ctrlKey && e.altKey && leng === 'ukr') {
    document.querySelectorAll('.row').forEach((elem) => elem.remove());
    createAllButtons(arr1Row, 'row');
    leng = 'en';
    document.removeEventListener('keydown', printKeydownOnKeyboard);
    document.addEventListener('keydown', printKeydownOnKeyboard);
  }
});
