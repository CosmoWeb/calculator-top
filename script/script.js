let calculator = {

    num1: 0,
    num2: 0,
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
let operators = document.querySelector("operators");
let commands = document.querySelector("#commands");

function displayDigit(digits){
    let digit = document.createElement("span");
    digit.textContent = digits;
    display.appendChild(digit);
};

numbers.addEventListener("click", (event) => {
    let target = event.target;
    displayDigit(target.id);
});