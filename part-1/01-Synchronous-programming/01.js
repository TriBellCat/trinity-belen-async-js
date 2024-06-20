/* Synchronous function */

//Example 1
/*const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);*/
// "Hello, my name is Miriam!"

//Example 2
function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"


/* long-running synchronous function */

function calculateFactorials(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
        console.log('Current Result: ', result)
    }
    return result;
}

//The higher the number, the longer it takes to finish calculating
console.log(calculateFactorials(1000000));


