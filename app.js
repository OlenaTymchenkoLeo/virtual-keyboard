const body = document.querySelector('body');
let h1 = document.createElement('h1');
body.insertAdjacentElement('afterbegin', h1);
h1.textContent = 'RSS Virtual Keyboard';
let textarea = document.createElement('textarea');
textarea.style.display = 'block';
body.insertAdjacentElement('beforeend', textarea);
let main = document.createElement('main');
main.classList.add("keyboard");
body.insertAdjacentElement('beforeend', main);
let p1 = document.createElement('p');
body.insertAdjacentElement('beforeend', p1);
p1.textContent = 'Клавиатура создана в операционной системе Windows';
let p2 = document.createElement('p');
body.insertAdjacentElement('beforeend', p2);
p2.textContent = 'Для переключения языка раскладки: Shift + Ctrl';


let row1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let row2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}',  'Del'];
let row3 = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', '|', 'Enter'];
let row4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'Shift', 'up'];
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


document.addEventListener('keydown', function(e) {
  console.log(e.key);
  let currentButton = document.querySelectorAll('button'); 
 currentButton.forEach(elem =>{
  if (elem.textContent  === e.key) {
    elem.classList.add("active")
    textarea.value += e.key;
  }  
 })
});
document.addEventListener('keyup', function(e) {
  //console.log(e.key);
  let currentButton = document.querySelectorAll('button'); 
 currentButton.forEach(elem =>{
  if (elem.textContent  === e.key) {
    elem.classList.remove("active")
  }  
 })
});
  textarea.value = '';
  let buttons = document.querySelectorAll('button');
document.addEventListener('click', function(e) {
  console.log(e.target);
buttons.forEach(elem => {   
  if(e.target === elem) {
    let current = e.target;
    textarea.value += current.textContent;
  }  
})  
});
