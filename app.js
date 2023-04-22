const body = document.querySelector('body');
let textarea = document.createElement('textarea');
textarea.style.display = 'block';
body.insertAdjacentElement('afterbegin', textarea);
let main = document.createElement('main');
main.classList.add("keyboard");
body.insertAdjacentElement('afterbegin', main);


let row1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let row2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}',  'Del'];
let row3 = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter'];
let row4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 'up'];
let row5 = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'left', 'down', 'right'];

let row1Sh = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];

//Create one button
function createButton(text) {
  let button = document.createElement('button');
    button.classList.add('key');
  button.textContent = text;  
  if (button.textContent === 'Space') {button.classList.add('space');}
  if (button.textContent === 'Tab' || button.textContent === 'Caps Lock' || button.textContent === 'Shift' ||
  button.textContent === 'Ctrl' || button.textContent === 'Win' || button.textContent === 'Alt' ||
  button.textContent === 'Space' || button.textContent === 'Backspace' || button.textContent === 'Del' ||
  button.textContent === 'Enter') {button.classList.add('utility');}
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

//Create row of buttons
function createRow(row) {
  let section = document.createElement("section");
  section.classList.add("row");  
for (let i = 0; i < row.length; i++) {    
   let currentButton = createButton(row[i]);   
   section.append(currentButton); 
}
return section;
}

//Create all keybords
main.append(createRow(row1));  
main.append(createRow(row2));
main.append(createRow(row3));  
main.append(createRow(row4));
main.append(createRow(row5));

