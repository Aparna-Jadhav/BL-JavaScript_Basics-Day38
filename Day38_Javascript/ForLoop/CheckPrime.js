const ps = require("prompt-sync");
const prompt =ps();
const number = parseInt(prompt("Enter positive number : "));
//console.log(`Entered Number is : ${number}`);

let isPrime = true;
if (number > 1) 
{
    for (let i = 2; i < number; i++) 
    {
        if (number % i == 0) 
        {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) 
{
    console.log(`${number} is a prime number`);
} 
else 
{
    console.log(`${number} is a not prime number`);
}