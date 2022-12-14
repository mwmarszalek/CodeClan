const myNumbers = [1,2,3,4];

// A callback function passed to forEach which accepts a single argument,
// which will be passed each element of our number array in turn by the forEach
// method:
myNumbers.forEach((number) => {
    console.log(`Next number is: ${number}`);
});

// Our callback can also accept a second argument which will be passed the
// current index by the forEach method:
myNumbers.forEach((number, index) => {
    console.log(`Number at index ${index} is: ${number}`);
});

// we could also write the function separately and pass it to the forEach function
// like so:
const myLoggingFunction = (number) => {
    console.log(`Next number is: ${number}`);
};

myNumbers.forEach(myLoggingFunction);

// Or, if we didn't want to use arrow function syntax:
const myOtherLoggingFunction = function (number) {
    console.log(`Next number is: ${number}`);
}

myNumbers.forEach(myOtherLoggingFunction);

// And the same thing but directly declared in the forEach call
myNumbers.forEach(function (number) {
    console.log(`Next number is: ${number}`);
});

// with the exception of the version that accepted the second parameter
// to the callback function (for index) all of the above are equivalent