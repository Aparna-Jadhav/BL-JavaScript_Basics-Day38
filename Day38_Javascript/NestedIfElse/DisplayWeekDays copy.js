const ps = require("prompt-sync");
const prompt =ps();
const number = prompt('Enter Number for display week day : ');
console.log(`${number}`);
if(number == 1){
    console.log(`Sunday`);
}
else if(number == 2){
    console.log(`Monday`);
}
else if(number == 3){
    console.log(`Tuesday`);
}
else if(number == 4){
    console.log(`Wednesday`);
}
else if(number == 5){
    console.log(`Thursday`);
}
else if(number == 6){
    console.log(`Friday`);
}
else if(number == 7){
    console.log(`Saturday`);
}
else{
    console.log(`Invalid`);
}