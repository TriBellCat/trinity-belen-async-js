/* Synchronous function */

//Example 1
const pet = "cat";
const myPet = `My pet is a ${pet}.`;
console.log(myPet);

//Example 2
function favoriteFood(food) {
    return `My favorite food is ${food}.`;
}

const food = "fried rice";
const favStatement = favoriteFood(food);
console.log(favStatement);

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


