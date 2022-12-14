const myNumbers = [1, 2, 3, 4];

const multipliedByTwo = function (arrayOfNums) {
    const multipliedNums = arrayOfNums.map((number) => {
        return number * 2;
    });
    return multipliedNums;
}

console.log('Multiplied nums: ', multipliedByTwo(myNumbers))