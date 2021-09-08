"use strict";
const ps = require("prompt-sync");
const prompt =ps();

let year = prompt("Enter 4-digit number : ");
console.log(`${year}`);

if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
{
    console.log("is Leap year");
}
else
{
    console.log("is not Leap year");
}
