const ps = require("prompt-sync");
const prompt =ps();

let firstNumber = prompt("Enter first number : ");
console.log(`First Number : ${firstNumber}`);
let secondNumber = prompt("Enter second number : ");
console.log(`Second Number : ${secondNumber}`);
let thirdNumber = prompt("Enter third number : ");
console.log(`Third Number : ${thirdNumber}`);

let minValue;
let result1 = (firstNumber + (secondNumber * thirdNumber));
let result2 = (thirdNumber + (firstNumber % secondNumber));
let result3 = ((firstNumber / secondNumber) + thirdNumber);
let result4 = ((firstNumber * secondNumber) + thirdNumber);
if(result1 < result2 && result1 < result3 && result1 < result4){
    minValue = result1;
}
else if(result2 < result1 && result2 < result3 && result2 < result4){
    minValue = result2;
}
else if(result3 < result1 && result3 < result2 && result3 < result4){
    minValue = result3;
}
else{
    minValue = result4;
}
console.log("Minimum Result : " + minValue);

let maxValue;
if(result1 > result2 && result1 > result3 && result1 > result4){
    maxValue = result1;
}
else if(result2 > result1 && result2 > result3 && result2 > result4){
    maxValue = result2;
}
else if(result3 > result1 && result3 > result2 && result3 > result4){
    maxValue = result3;
}
else{
    maxValue = result4;
}

console.log("Maximum Result : " + maxValue);