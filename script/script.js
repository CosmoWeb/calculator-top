let calculator = {

    num1: 0,
    num2: 0,
    operator: "",

    add(){
        return this.num1 + this.num2;
    },

    subtract(){
        return this.num1 - this.num2;
    },

    multiply(){
        return this.num1 * this.num2;
    },

    divide(){
        return this.num1 / this.num2;
    },

    operate(){
    
        if(this.operator === "+"){
           result =  this.add();
        }else if(this.operator === "-"){
            result = this.subtract();
        }else if(this.operator === "x"){
            result =  this.multiply();
        }else if(this.operator === "÷"){
            result = this.divide();
        }
        return result;
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
        calculator.num1 = Number(displayedNumbers.slice(0, operator).join(""));
        console.log("num1 is: " + calculator.num1);
        calculator.num2 = Number(displayedNumbers.slice(operator +1).join(""));
        console.log("num2 is: " + calculator.num2);
    }
};

function storeOperator(){
      if(displayedNumbers.includes("+") || displayedNumbers.includes("-") || displayedNumbers.includes("x") || displayedNumbers.includes("÷")){
        let operator = displayedNumbers.find((element) => element === "+" || element === "-" || element === "x" || element === "÷");
        calculator.operator = operator;
        console.log("operator is: " + calculator.operator);
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

commands.addEventListener("click", event => {
    let target = event.target;
    if(target.id === "="){
        result = calculator.operate();
        console.log(result);
        displayedNumbers = [];
        displayedNumbers.push(result);
        let displayedElements = document.querySelectorAll("span");
        displayedElements.forEach(element => display.removeChild(element));
        display.textContent = result;
    }else if(target.id === "clear"){
        let displayedElements = document.querySelectorAll("span");
        displayedElements.forEach(element => display.removeChild(element));
        calculator.num1 = 0;
        calculator.num2 = 0;
        displayedNumbers = [];
    }
})