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


let operands = document.querySelectorAll('td');
operands.addEventListener('click', function(event){
    event.target.style.backroundColor = "yellow";
});
