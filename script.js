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
const operator = document.querySelectorAll(".operator");
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
        if(buttonText === "." && display.textContent.includes(".")){
            return;
        }

        if (buttonText === "Del"){
            let deleteOne = display.textContent;
            deleteOne = deleteOne.split("");
            deleteOne.pop();
            deleteOne = deleteOne.join("");
            display.textContent = deleteOne;
            return;
        }
        
        if(buttonText === "="){
            operate(num1, num2);
            result.textContent = num1 + operwator + num2 + " = " + answer;
            display.textContent = answer;
            return;
        }
        
        if((num2 != "" && buttonText ==="+") || (num2 != "" && buttonText ==="-") || 
        (num2 != "" && buttonText ==="/") || (num2 != "" && buttonText ==="*")){
            
            operate(num1, num2)
            num1 = answer;
            display.textContent = answer;
            console.log("test")
        }
        

        if(buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/"){
            num1 = display.textContent;
            operwator = this.textContent
            result.textContent = num1 + "  " + buttonText;
            display.textContent = "";
            console.log(num1)
            return num1;
        }
        
        
        if (result.textContent.includes("+") || result.textContent.includes("*") ||
         result.textContent.includes("/") || result.textContent.includes("-") ){
            display.textContent += buttonText;
            num2 = display.textContent;
            console.log(num2);
            return;
        }

        if(result.textContent.includes("=")){
            num1 = answer;
            return;
        }

        if(result.textContent.includes(answer)){
            num1 = answer;
            return;
        }


        else {
            display.textContent += buttonText;
            return;
        }


}