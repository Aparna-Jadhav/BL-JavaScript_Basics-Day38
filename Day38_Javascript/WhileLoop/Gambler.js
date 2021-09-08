const ps = require("prompt-sync");
const prompt =ps();
let number = prompt("Enter number : ");
const head=1
const tail=0
let amount=2
let betAmount=1
while(amount != 0 && amount != 200){
    console.log("Head=1 Tail=0");
    
    let randomNumber = Math.floor(Math.random() * 10) % 2;
    if(randomNumber == number){
        amount += +betAmount;
        console.log("Win");
        console.log("Amount :" + amount);   
    }
    else{
        amount -= betAmount;
        console.log("Loss");
        console.log("Current Amount :" + amount);
    }
}
console.log("You have reached the Limit");