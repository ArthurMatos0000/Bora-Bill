const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

function updateDisplay(value){
display.textContent = value || "0";
}

function addValue(val){
expression += val;
updateDisplay(expression);
}

function clearDisplay(){
expression = "";
updateDisplay("0");
}

function backspace(){
expression = expression.slice(0,-1);
updateDisplay(expression);
}

function calculate(){
try{
const result = Function("return " + expression)();

if(result === undefined || isNaN(result)){
throw "Erro";
}

expression = result.toString();
updateDisplay(expression);

}catch{
updateDisplay("Erro");
expression="";
}
}

buttons.forEach(button => {

button.addEventListener("click", () => {

const value = button.dataset.value;
const action = button.dataset.action;

if(value){
addValue(value);
}

if(action === "clear"){
clearDisplay();
}

if(action === "backspace"){
backspace();
}

if(action === "calculate"){
calculate();
}

});

});

document.addEventListener("keydown", (event)=>{

const key = event.key;

if(!isNaN(key) || "+-*/.".includes(key)){
addValue(key);
}

if(key === "Enter"){
calculate();
}

if(key === "Backspace"){
backspace();
}

if(key.toLowerCase() === "c"){
clearDisplay();
}

});