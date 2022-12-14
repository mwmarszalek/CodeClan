//write a funcation called getEvens that accepts an array of numbers
// adn returns a new array of num,bers just with the numbers from that array
// this should use forEach
const myNumbers = [1,2,3,4];

const getEvens = function (numbers) {
    const evenNums = [];

    numbers.forEach((number) => {
        if (number % 2 === 0) {
            evenNums.push(number)
        }  
    })
    return evenNums;
}

console.log(getEvens(myNumbers));