const prompt = require('prompt-sync')();
let lower = prompt('Enter lower limit number : ');
let upper = prompt('Enter upper limit number : ');
for ( let low = lower; low < upper; low++ ){
    let flag = 1
    for(let high=2; high<low; high++) {
        if((low % high) == 0){
            flag = 0;
            break;
        }	
    }
    if(flag == 1){
        console.log( low );
    }
}