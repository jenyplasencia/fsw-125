//The math.js file should create and export functions for addition, 
//subtraction, multiplication and division.
    

function sum(num1, num2, num3){
    return num1 + num2 + num3
}

function subtraction(num1, num2, num3){
    return num1 - num2 - num3
}

function multiplication(num1, num2, num3){
    return num1 * num2 * num3
}

function division (num1, num2, num3){
    return (num1 / num2) / num3
}

module.exports = {sum, subtraction, multiplication, division}
