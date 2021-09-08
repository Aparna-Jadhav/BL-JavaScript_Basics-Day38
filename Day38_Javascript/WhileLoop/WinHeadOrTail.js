const ps = require("prompt-sync");
const prompt =ps();
let number = prompt("Enter limit number : ");
const head = 1;
const tail = 0;
let headExtend = 0;
let tailExtend = 0;
let i = 0;
while(headExtend < number && tailExtend < number)
{
    let randomNumber = Math.floor(Math.random() * 10) % 2;
    if(randomNumber == head)
    {
        headExtend++;
    }
    else
    {
        tailExtend++;
    }
}
if(headExtend == number){
    console.log("Head Wins");
}
else{
    console.log("Tail Wins");
}