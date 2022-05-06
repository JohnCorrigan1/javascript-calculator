/*
const display = document.querySelector("#display");
const nums = document.querySelectorAll(".calc");
const result = document.querySelector("#result");
let operator ="";
let num1 = "";
let num2 ="";

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
    }
}
*/

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
}

function getOperator(a, b, c) {
    if(b == "+") {
        return a + c;
    }
    else if(b == "-") {
        return a - c;
    }
    else if(b == "*") {
        return a * c;
    }
    else if (b == "/") {
        return a / c;
    }
}

const display = document.querySelector("#display");
const keys = document.querySelectorAll("button");
const result = document.querySelector("#result");
let num1 = "";
let num2 = "";
let answer = 0;
let operwator = "";


function operate(a, b){
    let first = parseFloat(a);
    let second = parseFloat(b);
    
    if(operwator === "+"){
        answer = add(first, second);
        return;
    }
    else if (operwator === "-"){
        answer = subtract(first, second);
        return;
    }
    else if (operwator === "*"){
        answer = multiply(first, second);
        return;
    }
    else if (operwator === "/"){
        answer = divide(first, second);
        return;
    }
    return;
}

keys.forEach(key=>{
    key.addEventListener('click', calculate);
});


function calculate(){
    let buttonText = this.innerText;
    console.log(buttonText);

        if(buttonText === "Clear"){
            num1 = "";
            num2 = "";
            display.textContent = "";
            result.textContent = "0";
            return;
        }
        
        if(buttonText === "="){
            operate(num1, num2);
            result.textContent = num1 + operwator + num2 + " = " + answer;
            display.textContent = "";
            return;
        }

        if(buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/"){
            num1 = display.textContent;
            operwator = this.textContent
            result.textContent = num1 + "  " + buttonText;
            display.textContent = "";
            console.log(num1)
            return num1;
        }

        if (result.textContent.includes("+") || result.textContent.includes("*") || result.textContent.includes("/") || result.textContent.includes("-") ){
            display.textContent += buttonText;
            num2 = display.textContent;
            console.log(num2);
            return;
        }

        if(result.textContent.includes("=")){
            num1 = answer;
            return;
        }


        else {
            display.textContent += buttonText;
            return;
        }


}