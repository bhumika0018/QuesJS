// 5. If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
const prompt = require("prompt-sync")({ sigint: true });
let num = prompt("Enter a number: ");
console.log(num);
let fact = num;
for (let i = num - 1; i > 0; i--) {
    fact = fact * i;
}
console.log('Factorial: ', fact);