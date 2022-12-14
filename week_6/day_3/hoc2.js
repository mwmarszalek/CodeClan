const addNums = function (arrayOfNums) {
    let sum = 0;
    
    // for (const number of arrayOfNums) {
    //     sum += number;
    // }
    arrayOfNums.forEach((number) => {
        sum += number;
    });

    return sum;
}

console.log('Sum of numbers: ', addNums([1,2,3,4]));