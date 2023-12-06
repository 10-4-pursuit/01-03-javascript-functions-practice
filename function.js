/* 1. Define a function `sayHello` that takes a name as a parameter and returns a greeting message. Then call this function with 'Alice' and 'Bob', logging the return value each time.
2. Create a function that takes two numbers as parameters and returns their sum. Test this function with different sets of numbers and log the results.*/

//Define a function `sayHello` that takes a name as a parameter and returns a greeting message. 
function sayHello(name){
    return `How do you feel, ${name}?`;
}

//then call this function with 'Alice' and 'Bob', logging the return value each time.
console.log(sayHello('Alice'))
console.log(sayHello('Bob'))

//Create a function that takes two numbers as parameters and returns their sum. 
function sum (num1, num2){
    return num1 + num2;
}

//Test this function with different sets of numbers and log the results
console.log(sum(2, 3));
console.log(sum(10, 300));
console.log(sum(-17, 5001));
