//All the variables
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');
const button0 = document.querySelector('#button0');
const addButton = document.querySelector('#addButton');
const subtractButton = document.querySelector('#subtractButton');
const multiplyButton = document.querySelector('#multiplyButton');
const clearButton = document.querySelector('#clearButton');
const equalsButton = document.querySelector('#equalsButton');
const divideButton = document.querySelector('#divideButton');
let display = document.querySelector('#display')

let total = 0
// All button event listeners
button1.addEventListener('click',()=> display.value +='1');
button2.addEventListener('click',()=> display.value +='2');
button3.addEventListener('click',()=> display.value +='3');
button4.addEventListener('click',()=> display.value +='4');
button5.addEventListener('click',()=> display.value +='5');
button6.addEventListener('click',()=> display.value +='6');
button7.addEventListener('click',()=> display.value +='7');
button8.addEventListener('click',()=> display.value +='8');
button9.addEventListener('click',()=> display.value +='9');
button0.addEventListener('click',()=> display.value +='0');

//add a addition operation
addButton.addEventListener('click',()=> display.value += '+');

//add a multiply operation
multiplyButton.addEventListener('click',()=> display.value += '*');

//add a divide operation
divideButton.addEventListener('click',()=> display.value += '/');

//add a subtract operation
subtractButton.addEventListener('click',() => display.value += '-')

//clear button to clear the display
clearButton.addEventListener('click',()=> {
    if(display.value !=""){
        display.value = ""
    }
});

//Create the equals button
equalsButton.addEventListener('click',()=>{
    let total = eval(display.value)
    display.value = total
});
