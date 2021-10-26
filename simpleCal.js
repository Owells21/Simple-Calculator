var operator = prompt('Enter Operator');
var number1 = parseFloat(prompt('Enter the first number'));
var number2 = parseFloat(prompt('Enter the second number'));
​
var result;
if (operator == '+') {
  result = number1 + number2;
​
  
}
 else if (operator == '-') {
   result = number1 - number2;
 }
else if(operator == '*') {
  result = number1 * number2;
​
}
else{
  result = number1 / number2;
  
}
console.log (`${number1} ${operator} ${number2} = ${result}`);
