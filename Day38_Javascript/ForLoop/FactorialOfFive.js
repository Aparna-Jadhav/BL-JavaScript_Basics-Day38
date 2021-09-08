const ps = require("prompt-sync");
const prompt =ps();
let number = prompt("Enter number : ");
let factNumber=1
for( i = 2; i <= number; i++ ){
    factNumber = factNumber * i;
    }
console.log("Factorial of " + number + " : " + factNumber );