const myForEach = function (array,callback) {
    for (const element of array) {
        callback(element);
    }
}

const numbers = [1,2,3,4];

const myCallback = (element) => {
    console.log(`My element was: ${element}`);
}

// This:
myForEach(numbers,myCallback)
// is equivalent to:
numbers.forEach(myCallback);