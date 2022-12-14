const myNumbers = [1,2,3,4];

// for (const number of myNumbers) {
//     console.log(`Number was ${number}`);
// }

// myNumbers.forEach((element) => {
//     console.log(`Number was ${element}`)
// });

// one above and below are the same :

// const myNumberFunction = (number) => {
//     console.log(`Number was ${number}`);
// };

// myNumbers.forEach(myNumberFunction);


// myNumbers.forEach((number,index) => {
//     console.log(`Next number was ${number} at index ${index}`)
// });

// one above and below are the same 

// const myNumberFunction = ((number,index) => {
//     console.log(`Next number was ${number} at index ${index}`)
// });

// myNumbers.forEach(myNumberFunction);

const multiplyByTwo = function (numbers) {
    const multipliedNums = [];
    //we pass a callback to the forEach method
    numbers.forEach((number) => {
        const multipliedNum = number * 2;
        multipliedNums.push(multipliedNum);
    })

    return multipliedNums;
}

console.log('Numbers before multiplication: ',myNumbers);
console.log('Numbers after multiplication: ',multiplyByTwo(myNumbers));


// from lab start folder (where packgage .json file is) use npm install ten use npm tests
// get list of film titles - use map
// finding film by title - use filter
// films by genre - use filter
// checking films from particular year - use filter
// checking films with particular length - use filter
// total running time - reduce
// total