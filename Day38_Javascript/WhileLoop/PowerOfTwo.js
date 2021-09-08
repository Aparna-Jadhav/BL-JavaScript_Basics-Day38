const ps = require("prompt-sync");
const prompt =ps();

const range = (prompt("Enter a range: "));
let i=1;
result=1;
if( range >= 0  && range <= 10)
{
while(i <= range)
{
    let result = (2 * result);
    console.log("2 ^ ${i} = result");
    if(result==256)
    {
        break;
    }

    i++;
}
}
else
{
    console.log("Invalid Range");
}