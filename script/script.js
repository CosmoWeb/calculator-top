let calculator = {

    num1,
    num2,
    operator,

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