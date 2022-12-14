const myNumbers = [1, 2, 3, 4];

// This is the 'old' version of the multiplying function using for...of
// and does the same thing as the forEach version beneath it.

// const multipliedByTwo = function (numbers) {
//     const multipliedNums = [];
//     for (const number of numbers) {
//         const multipliedNum = number * 2;
//         multipliedNums.push(multipliedNum);
//     }
//     return multipliedNums;
// }

const multipliedByTwo = function (numbers) {
    const multipliedNums = [];

    // We pass a callback function to the forEach method which 
    // accepts a single argument to represent a single element in the array.
    // Each time the forEach call loops over our array, it will call the callback]
    // function, passing the current element as the argument.
    numbers.forEach((number) => {
        const multipliedNum = number * 2;
        multipliedNums.push(multipliedNum);
    })

    return multipliedNums;
}

console.log('Numbers multiplied: ', multipliedByTwo(myNumbers));


const getEvens = function (arrayOfNums) {
    const evenNumbers = [];

    arrayOfNums.forEach((number) => {
        // % operator (aka Mod or Modulo) works by dividing the LHS value with the RHS
        // value and determining the remainder - if it comes out as 0, the LHS must divide
        // exactly by the RHS
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    });

    return evenNumbers;
}

console.log('Even numbers: ', getEvens(myNumbers));

const addNums = function (arrayOfNums) {
    let sum = 0;
    
    // this commented code does the same thing as the block underneath it
    // for (const number of arrayOfNums) {
    //     sum += number;
    // }
    arrayOfNums.forEach((number) => {
        sum += number;
    });

    return sum;
}

console.log('Sum of numbers: ', addNums([1,2,3,4]));