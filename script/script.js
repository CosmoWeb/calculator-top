let calculator = {

    num1: "",
    num2: "",
    operator: null,

    add(num1, num2){
        return num1 + num2;
    },

    subtract(num1, num2){
        return num1 - num2;
    },

    multiply(num1, num2){
        return num1 * num2;
    },

    divide(num1, num2){
        return num1 / num2;
    },

    operate(num1, num2, operator){
        if(operator === "+"){
            this.add(num1, num2);
        }else if(operator === "-"){
            this.subtract(num1, num2);
        }else if(operator === "x"){
            this.multiply(num1, num2);
        }else if(operator === "÷"){
            this.divide(num1, num2);
        }
    },
}

let display = document.querySelector("#display");
let numbers = document.querySelector("#numbers");
let operators = document.querySelector("#operators");
let commands = document.querySelector("#commands");
let displayedNumbers = [];

function displayDigit(digits){
    let digit = document.createElement("span");
    digit.textContent = digits;
    display.appendChild(digit);
    displayedNumbers.push(digits);
};

function storeNumbers(displayedNumbers){
    if(displayedNumbers.includes("+") || displayedNumbers.includes("-") || displayedNumbers.includes("x") || displayedNumbers.includes("÷")){
        let operator = displayedNumbers.find((element) => element === "+" || element === "-" || element === "x" || element === "÷");
        operator = displayedNumbers.indexOf(operator);
        calculator.num1 = displayedNumbers.slice(0, operator).join("");
        calculator.num2 = displayedNumbers.slice(operator +1).join("");
    }
};

function storeOperator(){
      if(displayedNumbers.includes("+") || displayedNumbers.includes("-") || displayedNumbers.includes("x") || displayedNumbers.includes("÷")){
        let operator = displayedNumbers.find((element) => element === "+" || element === "-" || element === "x" || element === "÷");
        calculator.operator = operator;
        console.log(calculator.operator);
    }
}

numbers.addEventListener("click", (event) => {
    let target = event.target;
    displayDigit(target.id);
    storeNumbers(displayedNumbers);
});

operators.addEventListener("click", (event) => {
    let target = event.target;
    displayDigit(target.id);
    storeOperator(displayedNumbers);
});