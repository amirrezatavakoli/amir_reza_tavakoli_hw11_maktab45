function calculator(num1,num2,cb){
    cb(num1,num2)
}

function sum(num1,num2){
    console.log(num1+num2)
}
function subtraction(num1,num2){
    console.log(num1-num2)
}
function multiply(num1,num2){
    console.log(num1*num2)
}
function division(num1,num2){
    console.log(num1/num2)
}

module.exports ={
    sum,
    subtraction,
    multiply,
    division,
    calculator
}