const prompt = require('prompt-sync')();
let month = prompt('Enter Month : ');
console.log(`${month}`);
let date = prompt('Enter Date : ');
console.log(`${date}`);

if((month < 6)  &&  (month > 3)  &&  (date < 20)){
    console.log("True");
}
else{
    console.log("False");
}




/*
var date = process.argv.slice(1);
console.log('Date: ', date);
var month = process.argv.slice(1);
console.log('Month: ', month);

if((month < 6)  &&  (month > 3)  &&  (date < 20)){
    console.log("True");
}
else{
    console.log("False");
}
*/

