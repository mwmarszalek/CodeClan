const myValues = ['Ben', 'Jane', 'Marney', 'Anna'];

/*
    forEach examples
    ================
    We can use forEach when we don't need to return a new value from our callback function,
    just use the values we're looping over (e.g. in this case we're just logging
    out values in our functions)
*/

// 1a. Using a named function declaration as a callback function
// where we have a function that only needs the element we're looping
// over in our array:
function logElementValue(element) {
    console.log('Element was:', element);
}

myValues.forEach(logElementValue);

// 1b. The same as above but where we also want to be able to use the
// index of the element we're looping over in our array:
function logElementValueAndIndex(element, index) {
    console.log(`Element at index ${index} was: ${element}`);
}

myValues.forEach(logElementValueAndIndex);

// 2a. The same as 1a but using a function expression directly in the forEach call:
myValues.forEach(function (element) {
    console.log('Element was:', element);
});

// 2b. The same as 1b but using a function expression directly in the forEach call:
myValues.forEach(function (element, index) {
    console.log(`Element at index ${index} was: ${element}`);
});
