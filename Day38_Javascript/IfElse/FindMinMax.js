let firstNumber = Math.floor(Math.random() * 999) + 100;
console.log("First random number is : " +firstNumber);
let secondNumber = Math.floor(Math.random() * 999) +100;
console.log("Second random number is : " +secondNumber);
let thirdNumber = Math.floor(Math.random() * 999) + 100;
console.log("Third random number is : " +thirdNumber);

maxValue = 0;
  if (firstNumber > secondNumber)
  {
    maxValue = firstNumber;
  } else
  {
    maxValue = secondNumber;
  }
  if (thirdNumber > maxValue) 
  {
    maxValue = thirdNumber;
  }
console.log("Maximum value : " +maxValue);
  
minValue = 0;
  if (firstNumber < secondNumber)
  {
    minValue = firstNumber;
  } else
  {
    minValue = secondNumber;
  }
  if (thirdNumber < minValue) 
  {
    minValue = thirdNumber;
  }
console.log("Maximum value : " +minValue);