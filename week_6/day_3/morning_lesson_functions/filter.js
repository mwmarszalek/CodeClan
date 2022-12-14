// const getEvens = function (arrayOfNums) {
//     const evenNumbers = [];

//     arrayOfNums.forEach((number) => {
//         if (number % 2 === 0) {
//             evenNumbers.push(number);
//         }
//     });

//     return evenNumbers;
// }


const getEvens = function(arrayOfNums) {
    const evenNumbers = arrayOfNums.filter((number) => {
        return number % 2 ===0;
    });

    return evenNumbers;
}

const numbers = [1,2,3,4,5,6,7,8]

console.log('Even numbers: ',getEvens(numbers));


const getOdds = function(arrayOfNums) {
    const oddNumbers = arrayOfNums.filter((number) => {
        return number %2 !== 0;
    });

    return oddNumbers;
}

console.log('Odd numbers: ',getOdds(numbers));