const body = document.querySelector('body');
let main = document.createElement('main');
main.classList.add("keyboard");

  
body.insertAdjacentElement('afterbegin', main);


let row1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let row2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'];
let row3 = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"',  'Enter'];
let row4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'up', 'Shift'];
let row5 = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'left', 'down', 'right'];

//Create one button
function createButton(text) {
  let button = document.createElement('button');
    button.classList.add('key');
  button.textContent = text;   
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

