//write a funcation called getEvens that accepts an array of numbers
// adn returns a new array of num,bers just with the numbers from that array
// this should use forEach
const myNumbers = [1,2,3,4];




const sumElement = function(numbers) {
    const total = numbers.reduce((runningTotal,number) => {
        return runningTotal += number;
    },0);

    return total
}

console.log(sumElement(myNumbers));