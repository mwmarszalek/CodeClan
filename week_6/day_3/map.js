// const myNumbers = [1,2,3,4];

// const multiplyByTwo = function (numbers) {
//     const multipliedNums = [];
//     //we pass a callback to the forEach method
//     numbers.forEach((number) => {
//         const multipliedNum = number * 2;
//         multipliedNums.push(multipliedNum);
//     })

//     return multipliedNums;
// }

let myNumbers = [1,2,3,4]

const multiplyByTwo = function (arrayOfNums) {
    const multipliedNums = arrayOfNums.map((number) => {
        return number * 2;
    });
    return multipliedNums;
}

// map is good when we want the output to have the same amount of elements. to get sth back
// for each is good when we want to apply sth to each element but not get anything back
console.log('Multiplied nums: ', multiplyByTwo(myNumbers));